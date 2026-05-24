import { events } from '@/data/events'
import Link from 'next/link'

export const metadata = {
  title: 'Events at Wrigley Field — Double Play Chicago',
  description: 'Cubs home games and Wrigley Field concerts. Book your apartment for any upcoming event.',
}

const games = events.filter(e => e.type === 'game')
const concerts = events.filter(e => e.type === 'concert')

const faqs = [
  {
    q: 'When does Cubs season start?',
    a: 'The MLB regular season starts in late March or early April every year. The Cubs play 81 home games at Wrigley Field through the end of September. Postseason runs through October if the team qualifies.',
  },
  {
    q: 'Are concerts at Wrigley year-round?',
    a: 'No. Concert season at Wrigley typically runs June through September. The stadium is outdoors and not used for events during Chicago winters.',
  },
  {
    q: "When are next year's concerts announced?",
    a: 'Wrigley typically announces the upcoming summer\'s concert lineup in late winter (February-March). Big tours often go on sale the same month they\'re announced.',
  },
  {
    q: 'How early should I book for a Cubs weekend?',
    a: 'For high-demand series (Cardinals, Brewers, Yankees, Dodgers, postseason), we recommend booking 3-6 months out. For weekday games, 2-4 weeks is usually fine.',
  },
  {
    q: 'What\'s the deal with rooftop seats at Wrigley?',
    a: 'The rooftop venues across from Wrigley Field (Wrigley Rooftops, etc.) are private companies that sell game tickets that include their building\'s rooftop seating. They\'re a uniquely Chicago game-day experience. Our apartments are NOT rooftop venues — but we\'re directly across from them and can recommend the best ones.',
  },
  {
    q: 'Can I see the game from your apartments?',
    a: 'From inside the apartments themselves, no — you can\'t watch the game. But you can hear the crowd, see the marquee, and walk out your front door and be inside the ballpark in under two minutes.',
  },
]

function EventGrid({ eventList }: { eventList: typeof games }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {eventList.map((event, i) => (
        <div
          key={i}
          className="p-4 rounded border"
          style={{ borderColor: '#e6e8ec', backgroundColor: '#ffffff' }}
        >
          <div className="text-center mb-4">
            <div className="text-xs uppercase tracking-widest mb-1" style={{ color: '#6b7585' }}>
              {event.day}
            </div>
            <div className="text-3xl font-bold">{event.date.split('-')[2]}</div>
          </div>
          <div className="mb-4 border-t border-b py-3" style={{ borderColor: '#e6e8ec' }}>
            <div className="text-xs uppercase tracking-widest mb-1" style={{ color: '#6b7585' }}>
              {event.type === 'game' ? '⚾ Cubs Game' : '🎵 Concert'}
            </div>
            <div className="text-sm font-semibold">{event.title}</div>
          </div>
          <Link
            href={`/units/unit-1?checkin=${event.date}`}
            className="block text-center py-2 text-xs font-bold tracking-widest text-white rounded transition-colors hover:opacity-90"
            style={{ backgroundColor: '#15375c' }}
          >
            Book This Date
          </Link>
        </div>
      ))}
    </div>
  )
}

export default function EventsPage() {
  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Events at Wrigley Field',
            description: 'Cubs home games and Wrigley Field concerts',
            mainEntity: events.map(e => ({
              '@context': 'https://schema.org',
              '@type': e.type === 'game' ? 'SportsEvent' : 'MusicEvent',
              name: e.title,
              startDate: e.date,
              eventStatus: 'https://schema.org/EventScheduled',
              eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
              location: {
                '@type': 'Place',
                name: 'Wrigley Field',
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: '1060 W Addison St',
                  addressLocality: 'Chicago',
                  addressRegion: 'IL',
                  postalCode: '60613',
                  addressCountry: 'US',
                },
              },
            })),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map(faq => ({
              '@type': 'Question',
              name: faq.q,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.a,
              },
            })),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://yourdomain.com',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Events',
                item: 'https://yourdomain.com/events',
              },
            ],
          }),
        }}
      />

      {/* Hero Section */}
      <section className="pt-60 pb-16 px-6 text-white" style={{ backgroundColor: '#15375c' }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-xs tracking-widest uppercase mb-6 opacity-80">
            Wrigley Field · Live Events
          </div>
          <h1
            className="mb-6 leading-tight"
            style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: '56px',
              fontWeight: 400,
            }}
          >
            Every Cubs game. Every concert. Right outside our door.
          </h1>
          <p
            className="text-lg leading-relaxed"
            style={{ color: 'rgba(255, 255, 255, 0.85)' }}
          >
            Past summers have brought Billy Joel, Pearl Jam, Lady Gaga, Foo Fighters and Beyoncé to Wrigley Field — and the Cubs play 81 home games every year from late March through September. Whatever's happening across the street, we have an apartment for it.
          </p>
        </div>
      </section>

      {/* Book Early Callout Strip */}
      <section className="px-6 py-12" style={{ backgroundColor: '#fdf6f1' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-2">⚾ Cubs game weekends</h3>
              <p className="text-sm text-muted leading-relaxed">
                Saturday games and weekend series against rivals (Cardinals, Brewers, Yankees, Dodgers) sell out months in advance. Book direct now to lock in your dates.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">🎵 Concert weekends</h3>
              <p className="text-sm text-muted leading-relaxed">
                Wrigley concerts are typically announced in late winter for the following summer. Concert weekends are our highest-demand bookings — many guests book 6+ months out.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cubs Games Section */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2
          className="text-3xl font-bold mb-8"
          style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
        >
          Cubs Home Games
        </h2>
        {games.length > 0 ? (
          <EventGrid eventList={games} />
        ) : (
          <div className="p-8 rounded text-center" style={{ backgroundColor: '#f5f6f8', color: '#6b7585' }}>
            <p>
              The Cubs 2026 schedule is published in March each year. Check back soon, or message us directly for date availability.
            </p>
          </div>
        )}
      </section>

      {/* Concerts Section */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2
          className="text-3xl font-bold mb-8"
          style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
        >
          Concerts at Wrigley
        </h2>
        {concerts.length > 0 ? (
          <EventGrid eventList={concerts} />
        ) : (
          <div className="p-8 rounded text-center" style={{ backgroundColor: '#f5f6f8', color: '#6b7585' }}>
            <p>
              Wrigley concert announcements typically come in late winter. Check back soon, or message us directly for the latest.
            </p>
          </div>
        )}
      </section>

      {/* Game-Day Rates Callout */}
      <section className="px-6 py-16" style={{ backgroundColor: '#0b1f36' }}>
        <div className="max-w-3xl mx-auto text-white">
          <h2
            className="text-3xl font-bold mb-6"
            style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
          >
            A quick note on game-day rates
          </h2>
          <p className="text-base leading-relaxed opacity-90">
            Our nightly rates flex with demand. Random Tuesday in April? Lowest rate of the season. Saturday in July with a Cardinals series? Higher. Either way, we promise our direct rate is the lowest you'll find — Airbnb and VRBO add 14% in service fees that we don't charge here.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2
          className="text-3xl font-bold mb-12"
          style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
        >
          Common questions about Wrigley events
        </h2>
        <div className="space-y-8">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b" style={{ borderColor: '#e6e8ec' }}>
              <h3 className="text-lg font-bold mb-3 pb-3">{faq.q}</h3>
              <p className="text-sm leading-relaxed mb-6 text-muted">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Back to Booking */}
      <section className="px-6 py-16" style={{ backgroundColor: '#15375c' }}>
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2
            className="text-3xl font-bold mb-6"
            style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
          >
            Ready to book?
          </h2>
          <Link
            href="/#booking"
            className="inline-block px-8 py-3 text-sm font-bold tracking-widest rounded transition-colors hover:opacity-90"
            style={{ backgroundColor: '#E85A2C' }}
          >
            Browse Apartments
          </Link>
        </div>
      </section>
    </>
  )
}
