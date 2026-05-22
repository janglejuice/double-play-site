'use client'

interface BookingWidgetProps {
  unitId?: string
  compact?: boolean
}

export default function BookingWidget({ unitId, compact = false }: BookingWidgetProps) {
  return (
    <div className={compact ? 'w-full' : 'w-full max-w-md'}>
      <iframe
        src={`https://direct.hospitable.com/HOSPITABLE_SITE_ID${unitId ? `?property=${unitId}` : ''}`}
        width="100%"
        height={compact ? '320' : '480'}
        frameBorder="0"
        style={{ border: 'none', background: 'transparent' }}
        title="Book your stay"
      />
    </div>
  )
}
