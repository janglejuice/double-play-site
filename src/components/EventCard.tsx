import Link from 'next/link'
import { CalendarEvent } from '@/data/events'

export default function EventCard({ event }: { event: CalendarEvent }) {
  const bookingUrl = `/units/unit-1?checkin=${event.date}`
  return (
    <div className="flex items-center justify-between py-4 border-b border-border">
      <div className="flex items-center gap-6">
        <div className="text-center w-12">
          <div className="text-xs text-secondary uppercase tracking-widest">{event.day}</div>
          <div className="text-lg font-bold text-primary">{event.date.split('-')[2]}</div>
        </div>
        <div>
          <div className="text-xs text-secondary uppercase tracking-widest mb-0.5">
            {event.type === 'game' ? '⚾ Cubs Game' : '🎵 Concert'}
          </div>
          <div className="text-sm font-semibold text-primary">{event.title}</div>
        </div>
      </div>
      <Link
        href={bookingUrl}
        className="text-xs font-bold tracking-widest text-bg bg-primary px-4 py-2 hover:bg-primary/90 transition-colors whitespace-nowrap"
      >
        Book This Date
      </Link>
    </div>
  )
}
