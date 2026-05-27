'use client'

import React, { useEffect, useRef, useState } from 'react'
import Script from 'next/script'
import { HOSPITABLE_SEARCH_IDENTIFIER, HOSPITABLE_SEARCH_SCRIPT } from '@/data/units'

/**
 * Hospitable Property Search widget.
 *
 * On the /search results page, reads URL query params (start_date, end_date, adults)
 * and programmatically populates the widget by:
 * 1. Navigating the calendar's month-navigator-forward/back to reach the target month
 * 2. Clicking the date-cell for the start date
 * 3. Clicking the date-cell for the end date
 * 4. Increment/decrement guest count to match `adults`
 * 5. Clicking the "Search" button
 *
 * The widget is an Angular 16 web component with persistent calendar in shadow DOM.
 * Direct attribute-passing does NOT work — Angular doesn't observe these attributes.
 * Clicking DOM elements with proper MouseEvent is the only reliable approach.
 */

interface HospitableSearchProps {
  /** If set, the widget is a search bar that redirects to this URL on submit. */
  resultsUrl?: string
}

const MONTH_NAMES = ['January','February','March','April','May','June','July','August','September','October','November','December']

function deepCollect(root: ShadowRoot | Element | null): Element[] {
  if (!root) return []
  const out: Element[] = []
  function walk(node: ShadowRoot | Element) {
    const children = 'querySelectorAll' in node ? node.querySelectorAll('*') : []
    children.forEach(n => {
      out.push(n)
      const sr = (n as Element & { shadowRoot?: ShadowRoot }).shadowRoot
      if (sr) walk(sr)
    })
  }
  walk(root)
  return out
}

function parseMonthTitle(title: string): { year: number; month: number } | null {
  const parts = title.trim().split(/\s+/)
  if (parts.length !== 2) return null
  const month = MONTH_NAMES.indexOf(parts[0])
  const year = parseInt(parts[1], 10)
  if (month < 0 || isNaN(year)) return null
  return { year, month }
}

function getFirstVisibleMonth(widgetRoot: ShadowRoot): { year: number; month: number } | null {
  const titles = deepCollect(widgetRoot).filter(n => n.tagName === 'H4' && n.classList.contains('month-title'))
  if (titles.length === 0) return null
  return parseMonthTitle(titles[0].textContent || '')
}

function findDateCell(widgetRoot: ShadowRoot, year: number, month: number, day: number): HTMLElement | null {
  const containers = deepCollect(widgetRoot).filter(n => n.classList?.contains('month-container'))
  for (const container of containers) {
    const titleEl = container.querySelector('.month-title')
    const parsed = parseMonthTitle(titleEl?.textContent || '')
    if (!parsed || parsed.year !== year || parsed.month !== month) continue
    const cells = container.querySelectorAll('.date-cell')
    for (const cell of cells) {
      const inner = cell.querySelector('.date-cell-inner')
      if (inner?.textContent?.trim() === String(day)) {
        return cell as HTMLElement
      }
    }
  }
  return null
}

function clickEl(el: Element) {
  el.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, composed: true, view: window }))
}

function sleep(ms: number) { return new Promise(r => setTimeout(r, ms)) }

/** Navigate the calendar until `target` month is one of the 2 visible months. */
async function navigateToMonth(root: ShadowRoot, targetYear: number, targetMonth: number): Promise<boolean> {
  const monthDelta = (a: { year: number; month: number }, b: { year: number; month: number }) =>
    (b.year - a.year) * 12 + (b.month - a.month)

  for (let attempt = 0; attempt < 36; attempt++) {
    const first = getFirstVisibleMonth(root)
    if (!first) return false
    const delta = monthDelta(first, { year: targetYear, month: targetMonth })
    if (delta >= 0 && delta <= 1) return true
    // Re-query buttons EACH iteration — Angular re-renders them and stale refs would fail silently
    const fresh = deepCollect(root)
    const btn = (delta > 1
      ? fresh.find(n => n.tagName === 'BUTTON' && n.classList.contains('month-navigator-forward'))
      : fresh.find(n => n.tagName === 'BUTTON' && n.classList.contains('month-navigator-back'))) as HTMLButtonElement | undefined
    if (!btn) return false
    clickEl(btn)
    await sleep(280)  // generous delay for Angular to re-render months
  }
  return false
}

/** Read the current adult count from the widget's "N adults" display. */
function getCurrentAdults(root: ShadowRoot): number {
  const summary = deepCollect(root).find(n => n.classList?.contains('guest-picker-summary'))
  if (!summary?.textContent) return 2 // default
  const match = summary.textContent.match(/(\d+)/)
  return match ? parseInt(match[1], 10) : 2
}

/** Read the current check-in input value to see if dates are already set. */
function getCurrentDateRange(root: ShadowRoot): string {
  const input = deepCollect(root).find(n => n.tagName === 'INPUT' && n.classList?.contains('check-in')) as HTMLInputElement | undefined
  return input?.value || ''
}

async function populateWidget(startDate: string, endDate: string | undefined, adults: number | undefined) {
  // Poll for widget readiness
  let widget: Element | null = null
  for (let i = 0; i < 50; i++) {
    widget = document.querySelector('hospitable-direct-mps')
    if (widget?.shadowRoot && getFirstVisibleMonth(widget.shadowRoot)) break
    await sleep(150)
  }
  if (!widget?.shadowRoot) return { ok: false, reason: 'widget not ready' }
  const root = widget.shadowRoot

  const start = new Date(startDate + 'T12:00:00')
  const end = endDate ? new Date(endDate + 'T12:00:00') : null
  if (isNaN(start.getTime())) return { ok: false, reason: 'invalid start date' }

  // IDEMPOTENT: skip date selection if already populated (StrictMode double-invocation guard)
  const currentRange = getCurrentDateRange(root)
  const alreadySet = /\d{1,2}, \d{4}/.test(currentRange)  // e.g. "Aug 14, 2026 → Aug 17, 2026"
  if (!alreadySet) {
    // Navigate to start month
    const startNav = await navigateToMonth(root, start.getFullYear(), start.getMonth())
    if (!startNav) return { ok: false, reason: 'could not navigate to start month' }
    await sleep(200)

    const startCell = findDateCell(root, start.getFullYear(), start.getMonth(), start.getDate())
    if (!startCell) return { ok: false, reason: `start cell not found ${startDate}` }
    clickEl(startCell)
    await sleep(250)

    if (end) {
      const endNav = await navigateToMonth(root, end.getFullYear(), end.getMonth())
      if (endNav) {
        await sleep(200)
        const endCell = findDateCell(root, end.getFullYear(), end.getMonth(), end.getDate())
        if (endCell) {
          clickEl(endCell)
          await sleep(250)
        }
      }
    }
  }

  // IDEMPOTENT: adjust guest count using DELTA from current value (not from default 2)
  if (adults) {
    const current = getCurrentAdults(root)
    const diff = adults - current
    if (diff !== 0) {
      const fresh = deepCollect(root)
      const btn = (diff > 0
        ? fresh.find(n => n.tagName === 'BUTTON' && n.classList.contains('increment'))
        : fresh.find(n => n.tagName === 'BUTTON' && n.classList.contains('decrement'))) as HTMLButtonElement | undefined
      if (btn) {
        for (let i = 0; i < Math.abs(diff); i++) {
          clickEl(btn)
          await sleep(80)
        }
      }
    }
  }

  // NOTE: We don't auto-click the "Search" button. Hospitable's widget
  // rejects synthetic click events (only accepts trusted user events).
  // The user clicks "Search" once after the auto-filled form is shown.
  // Add a soft visual cue via the prompt element below the widget.

  return { ok: true }
}

export default function HospitableSearch({ resultsUrl }: HospitableSearchProps) {
  const [mounted, setMounted] = useState(false)
  const [params, setParams] = useState<{ startDate?: string; endDate?: string; adults?: string }>({})
  // Guard against React StrictMode double-invocation in dev
  const populatedRef = useRef(false)

  useEffect(() => {
    const sp = new URLSearchParams(window.location.search)
    setParams({
      startDate: sp.get('start_date') || sp.get('startDate') || sp.get('checkin') || undefined,
      endDate: sp.get('end_date') || sp.get('endDate') || sp.get('checkout') || undefined,
      adults: sp.get('adults') || sp.get('guests') || undefined,
    })
    setMounted(true)
  }, [])

  // Auto-populate the widget once it's mounted and we have URL params
  useEffect(() => {
    if (!mounted || resultsUrl) return  // only auto-populate on the results page (no resultsUrl prop)
    if (!params.startDate) return
    if (populatedRef.current) return
    populatedRef.current = true
    const adultsNum = params.adults ? parseInt(params.adults, 10) : undefined
    populateWidget(params.startDate, params.endDate, adultsNum).catch(() => {})
  }, [mounted, params, resultsUrl])

  if (!mounted) {
    // Client-only: window.location is unavailable during SSR pre-render.
    // The contextual text appears only after hydration, before the first useEffect fires.
    let loadingText = 'Searching availability…'
    if (typeof window !== 'undefined') {
      const sp = new URLSearchParams(window.location.search)
      const sd = sp.get('start_date') || sp.get('startDate') || sp.get('checkin')
      const ed = sp.get('end_date') || sp.get('endDate') || sp.get('checkout')
      const adults = sp.get('adults') || sp.get('guests')
      if (sd) {
        const fmt = (s: string) =>
          new Date(s + 'T12:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
        const dateRange = ed ? `${fmt(sd)}–${fmt(ed)}` : fmt(sd)
        const guestPart = adults ? ` · ${adults} guest${parseInt(adults, 10) !== 1 ? 's' : ''}` : ''
        loadingText = `Finding availability for ${dateRange}${guestPart}…`
      }
    }
    return (
      /* pulse animation lives in globals.css — cannot be expressed as an inline style */
      <div
        className="search-loading-pulse"
        style={{
          minHeight: 120,
          display: 'grid',
          placeItems: 'center',
          color: '#6b7585',
          fontSize: 14,
          fontFamily: 'Manrope, system-ui, sans-serif',
          letterSpacing: '0.01em',
          background: '#f5f6f8',
          borderRadius: 8,
        }}
      >
        {loadingText}
      </div>
    )
  }

  const elementProps: Record<string, string> = {
    identifier: HOSPITABLE_SEARCH_IDENTIFIER,
    type: 'custom',
  }
  if (resultsUrl) elementProps['results-url'] = resultsUrl

  return (
    <>
      <Script src={HOSPITABLE_SEARCH_SCRIPT} strategy="lazyOnload" />
      {React.createElement('hospitable-direct-mps', elementProps)}
    </>
  )
}
