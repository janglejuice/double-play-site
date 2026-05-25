'use client'

import React, { useEffect, useState } from 'react'
import Script from 'next/script'
import { HOSPITABLE_SEARCH_IDENTIFIER, HOSPITABLE_SEARCH_SCRIPT } from '@/data/units'

/**
 * Hospitable Property Search widget.
 *
 * Two usage modes:
 * - Search bar (compact): set `resultsUrl` — renders just the search inputs, redirects to that URL on submit.
 * - Results page (full): omit `resultsUrl` — renders the full results listing.
 *
 * Auto-population:
 * On mount, reads URL query params (start_date, end_date, adults) and forwards them
 * to the custom element as attributes — both as the common Hospitable convention names
 * and as alternative names — so the widget pre-populates the user's prior search and
 * jumps straight to results.
 *
 * The widget is a custom element `<hospitable-direct-mps>` registered at runtime by
 * Hospitable's script. We render it via React.createElement to bypass the JSX type system.
 */

interface HospitableSearchProps {
  /** If set, the widget is a search bar that redirects to this URL on submit. */
  resultsUrl?: string
}

export default function HospitableSearch({ resultsUrl }: HospitableSearchProps) {
  // Track URL params on the client (after hydration) so the custom element receives them as attributes
  const [params, setParams] = useState<{
    startDate?: string
    endDate?: string
    adults?: string
  } | null>(null)

  useEffect(() => {
    const sp = new URLSearchParams(window.location.search)
    setParams({
      startDate: sp.get('start_date') || sp.get('startDate') || sp.get('checkin') || undefined,
      endDate: sp.get('end_date') || sp.get('endDate') || sp.get('checkout') || undefined,
      adults: sp.get('adults') || sp.get('guests') || undefined,
    })
  }, [])

  // Wait until we've read URL params before rendering the widget — web components often
  // only read attributes on first connect, so re-renders won't re-initialize them.
  if (params === null) {
    return (
      <div style={{ minHeight: 120, display: 'grid', placeItems: 'center', color: '#6b7585', fontSize: 14 }}>
        Loading search…
      </div>
    )
  }

  // Build the attribute set. We pass multiple common naming conventions so whichever
  // Hospitable's widget recognizes will work without docs.
  const elementProps: Record<string, string> = {
    identifier: HOSPITABLE_SEARCH_IDENTIFIER,
    type: 'custom',
  }
  if (resultsUrl) elementProps['results-url'] = resultsUrl

  // Date conventions
  if (params.startDate) {
    elementProps['start-date'] = params.startDate
    elementProps['startdate'] = params.startDate
    elementProps['arrival-date'] = params.startDate
    elementProps['checkin'] = params.startDate
    elementProps['check-in'] = params.startDate
  }
  if (params.endDate) {
    elementProps['end-date'] = params.endDate
    elementProps['enddate'] = params.endDate
    elementProps['departure-date'] = params.endDate
    elementProps['checkout'] = params.endDate
    elementProps['check-out'] = params.endDate
  }
  // Guest count conventions
  if (params.adults) {
    elementProps['adults'] = params.adults
    elementProps['guests'] = params.adults
    elementProps['number-of-adults'] = params.adults
  }

  // Force re-mount if attributes change (web components don't always observe attribute updates)
  const key = JSON.stringify(elementProps)

  return (
    <>
      <Script src={HOSPITABLE_SEARCH_SCRIPT} strategy="lazyOnload" />
      {React.createElement('hospitable-direct-mps', { ...elementProps, key })}
    </>
  )
}
