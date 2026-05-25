import Link from 'next/link'
import { HOSPITABLE_SITE_ID } from '@/data/units'

interface BookingWidgetProps {
  /** Hospitable property ID. If `null`/undefined, renders a "coming soon" fallback. */
  propertyId?: string | null
  /** Compact = shorter height (e.g. embedded in hero panel). */
  compact?: boolean
  /** Label override for the title attribute. */
  title?: string
}

export default function BookingWidget({ propertyId, compact = false, title = 'Book your stay' }: BookingWidgetProps) {
  // If no property ID is set yet, render a graceful fallback
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

  const src = `https://booking.hospitable.com/widget/${HOSPITABLE_SITE_ID}/${propertyId}`
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
