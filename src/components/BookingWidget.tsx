'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { HOSPITABLE_SITE_ID } from '@/data/units'

interface BookingWidgetProps {
  /** Hospitable property ID. If `null`/undefined, renders a "coming soon" fallback. */
  propertyId?: string | null
  /** Compact = shorter height (e.g. embedded in hero panel). */
  compact?: boolean
  /** Label override for the title attribute. */
  title?: string
}

/**
 * Read search params from window.location.search and turn them into
 * a query string Hospitable's booking widget accepts.
 *
 * Hospitable expects: start_date, end_date, adults
 * Our search redirects use: checkin, checkout, guests
 * — we map either input naming.
 */
function buildIframeSrc(propertyId: string): string {
  const baseSrc = `https://booking.hospitable.com/widget/${HOSPITABLE_SITE_ID}/${propertyId}`

  if (typeof window === 'undefined') return baseSrc

  const params = new URLSearchParams(window.location.search)
  const out = new URLSearchParams()

  const checkin = params.get('start_date') || params.get('checkin') || params.get('startDate')
  const checkout = params.get('end_date') || params.get('checkout') || params.get('endDate')
  const guests = params.get('adults') || params.get('guests')

  if (checkin) out.set('start_date', checkin)
  if (checkout) out.set('end_date', checkout)
  if (guests) out.set('adults', guests)

  const qs = out.toString()
  return qs ? `${baseSrc}?${qs}` : baseSrc
}

export default function BookingWidget({ propertyId, compact = false, title = 'Book your stay' }: BookingWidgetProps) {
  // Track iframe src on the client so we can include URL search params after hydration
  const [src, setSrc] = useState<string>(() =>
    propertyId ? `https://booking.hospitable.com/widget/${HOSPITABLE_SITE_ID}/${propertyId}` : ''
  )

  useEffect(() => {
    if (!propertyId) return
    setSrc(buildIframeSrc(propertyId))
  }, [propertyId])

  // Fallback when no property is wired
  if (!propertyId) {
    return (
      <div style={{
        width: '100%',
        background: '#f5f6f8',
        border: '1px solid #e6e8ec',
        borderRadius: 12,
        padding: '32px 24px',
        textAlign: 'center',
      }}>
        <div style={{
          fontSize: 11,
          fontWeight: 800,
          letterSpacing: '0.18em',
          color: '#E85A2C',
          textTransform: 'uppercase',
          marginBottom: 10,
        }}>
          Coming Soon
        </div>
        <div style={{ fontSize: 15, color: '#1c2433', lineHeight: 1.5, marginBottom: 16 }}>
          Direct booking for this unit is launching shortly. Message us for availability.
        </div>
        <Link
          href="mailto:stay@doubleplaywrigley.com"
          style={{
            display: 'inline-block',
            background: '#15375c',
            color: '#fff',
            padding: '12px 22px',
            borderRadius: 6,
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: '0.04em',
            textDecoration: 'none',
          }}
        >
          Email us →
        </Link>
      </div>
    )
  }

  const height = compact ? 720 : 900

  return (
    <iframe
      id={`booking-iframe-${propertyId}`}
      sandbox="allow-top-navigation allow-scripts allow-same-origin allow-forms allow-popups"
      style={{ width: '100%', height, border: 0, background: 'transparent', display: 'block' }}
      src={src}
      title={title}
      loading="lazy"
    />
  )
}
