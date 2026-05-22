import { events } from '@/data/events'
import EventCard from '@/components/EventCard'

export const metadata = {
  title: 'Events at Wrigley Field — Double Play Chicago',
  description: 'Cubs home games and Wrigley Field concerts. Book your apartment for any upcoming event.',
}

const games = events.filter(e => e.type === 'game')
const concerts = events.filter(e => e.type === 'concert')

export default function EventsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="text-xs tracking-widest text-muted uppercase mb-4">Wrigleyville</div>
      <h1 className="text-4xl font-black tracking-tight text-primary mb-12">Events at Wrigley</h1>

      {games.length > 0 && (
        <section className="mb-16">
          <div className="text-xs tracking-widest text-muted uppercase mb-4">⚾ Cubs Home Games</div>
          {games.map((event, i) => <EventCard key={i} event={event} />)}
        </section>
      )}

      {concerts.length > 0 && (
        <section>
          <div className="text-xs tracking-widest text-muted uppercase mb-4">🎵 Concerts</div>
          {concerts.map((event, i) => <EventCard key={i} event={event} />)}
        </section>
      )}
    </div>
  )
}
