import Link from 'next/link'
import { getUpcomingEvents, groupIntoSeries, type EventSeries } from '@/lib/schedule'

export const metadata = {
  title: 'Events at Wrigley Field — Cubs Schedule & Concerts | Double Play',
  description:
    'Live Cubs home game schedule and Wrigley Field concerts, updated automatically. Book a 2-bedroom apartment directly across the street for any game or show.',
}

// Refresh the live schedule feed every 12 hours.
export const revalidate = 43200

// ── Design tokens ─────────────────────────────────────────────────────────────
const NAVY      = '#15375c'
const NAVY_INK  = '#0b1f36'
const ACCENT    = '#E85A2C'
const INK       = '#1c2433'
const MUTED     = '#6b7585'
const LINE      = '#e6e8ec'
const BG_SOFT   = '#f5f6f8'
const BG_WARM   = '#fdf6f1'
const CONFIRM   = '#23a06b'
const SHADOW_CARD = '0 1px 2px rgba(15,42,72,0.04), 0 12px 28px -12px rgba(15,42,72,0.18)'
const CUBS_LOGO = 'https://www.mlbstatic.com/team-logos/112.svg'
const FONT_DISPLAY = "'DM Serif Display', Georgia, serif"
const FONT_BODY    = "'Manrope', system-ui, sans-serif"
const WRAP = { maxWidth: 1240, margin: '0 auto', padding: '0 32px' } as const

const faqs = [
  { q: 'When does Cubs season start?', a: 'The MLB regular season starts in late March or early April every year. The Cubs play 81 home games at Wrigley Field through the end of September. Postseason runs through October if the team qualifies.' },
  { q: 'Are concerts at Wrigley year-round?', a: 'No. Concert season at Wrigley typically runs June through September. The stadium is outdoors and not used for events during Chicago winters.' },
  { q: "When are next year's concerts announced?", a: 'Wrigley typically announces the upcoming summer\'s concert lineup in late winter (February to March). Big tours often go on sale the same month they are announced.' },
  { q: 'How early should I book for a Cubs weekend?', a: 'For high-demand series (Cardinals, Brewers, Yankees, Dodgers, postseason), we recommend booking 3 to 6 months out. For weekday games, 2 to 4 weeks is usually fine.' },
  { q: "What's the deal with rooftop seats at Wrigley?", a: 'The rooftop venues across from Wrigley Field are private companies that sell game tickets including their building\'s rooftop seating. Our apartments are not rooftop venues, but we are directly across from them and can recommend the best ones.' },
  { q: 'Can I see the game from your apartments?', a: 'From inside the apartments themselves, no. But you can hear the crowd, see the marquee, and walk out your front door to be inside the ballpark in under two minutes.' },
]

// ── Helpers ───────────────────────────────────────────────────────────────────
function monthAbbr(dateStr: string) {
  return new Date(`${dateStr}T12:00:00`).toLocaleDateString('en-US', { month: 'short' }).toUpperCase()
}
function dayNum(dateStr: string) {
  return new Date(`${dateStr}T12:00:00`).getDate()
}
function rangeLabel(s: EventSeries) {
  if (s.startDate === s.endDate) return `${monthAbbr(s.startDate)} ${dayNum(s.startDate)}`
  if (monthAbbr(s.startDate) === monthAbbr(s.endDate)) return `${monthAbbr(s.startDate)} ${dayNum(s.startDate)}–${dayNum(s.endDate)}`
  return `${monthAbbr(s.startDate)} ${dayNum(s.startDate)} – ${monthAbbr(s.endDate)} ${dayNum(s.endDate)}`
}
function weekdayShort(dateStr: string) {
  return new Date(`${dateStr}T12:00:00`).toLocaleDateString('en-US', { weekday: 'short' })
}

// ── Series card ───────────────────────────────────────────────────────────────
function SeriesCard({ s }: { s: EventSeries }) {
  const isGame = s.type === 'game'
  const bookHref = `/search?start_date=${s.startDate}&end_date=${s.checkout}`
  return (
    <article style={{
      background: '#fff', border: `1px solid ${LINE}`, borderRadius: 12,
      padding: '22px 22px 20px', display: 'flex', flexDirection: 'column',
      boxShadow: SHADOW_CARD,
    }}>
      {/* Type chip + opponent logo */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14, minHeight: 42 }}>
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          fontSize: 10, fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase' as const,
          color: isGame ? NAVY : ACCENT, fontFamily: FONT_BODY,
        }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: isGame ? NAVY : ACCENT, display: 'inline-block' }} />
          {isGame ? 'Cubs Game' : 'Show'}
        </span>
        {isGame && s.logo ? (
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, flex: 'none' }} aria-hidden>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={CUBS_LOGO} alt="" width={36} height={36} loading="lazy" style={{ width: 36, height: 36, objectFit: 'contain' }} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={s.logo} alt={`${s.opponent} logo`} width={36} height={36} loading="lazy" style={{ width: 36, height: 36, objectFit: 'contain' }} />
          </span>
        ) : (
          <span style={{ fontSize: 11, fontWeight: 700, color: MUTED, fontFamily: FONT_BODY }}>
            {s.count > 1 ? `${s.count} shows` : weekdayShort(s.startDate)}
          </span>
        )}
      </div>

      {/* Date range — DM Serif date numerals (design-system sanctioned) */}
      <div style={{ marginBottom: 4 }}>
        <div style={{ fontSize: 13, fontWeight: 800, letterSpacing: '0.14em', color: ACCENT, fontFamily: FONT_BODY, marginBottom: 3 }}>
          {monthAbbr(s.startDate)}
        </div>
        <div style={{ fontFamily: FONT_DISPLAY, fontSize: 34, lineHeight: 1, color: NAVY, letterSpacing: '-0.01em' }}>
          {s.startDate === s.endDate ? dayNum(s.startDate) : `${dayNum(s.startDate)}–${dayNum(s.endDate)}`}
        </div>
      </div>

      {/* Opponent / act */}
      <div style={{ fontFamily: FONT_BODY, fontSize: 17, fontWeight: 700, color: INK, margin: '10px 0 2px', letterSpacing: '-0.01em' }}>
        {isGame ? `vs. ${s.opponent}` : s.title}
      </div>
      <div style={{ fontFamily: FONT_BODY, fontSize: 13, color: MUTED, marginBottom: 18 }}>
        {rangeLabel(s)}{s.count > 1 ? ` · ${s.count} ${isGame ? 'games' : 'shows'}` : ''} · Wrigley Field
      </div>

      {/* CTA */}
      <Link href={bookHref} style={{
        marginTop: 'auto', display: 'block', textAlign: 'center',
        background: NAVY, color: '#fff', padding: '12px 14px', borderRadius: 7,
        fontFamily: FONT_BODY, fontWeight: 700, fontSize: 13, letterSpacing: '0.01em', textDecoration: 'none',
      }}>
        {s.count > 1 ? 'Book this series' : 'Book this date'}
      </Link>
    </article>
  )
}

function SectionHead({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div style={{ marginBottom: 28 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
        <span style={{ width: 24, height: 2, background: ACCENT, borderRadius: 1, display: 'inline-block' }} />
        <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: ACCENT, fontFamily: FONT_BODY }}>{eyebrow}</span>
      </div>
      <h2 style={{ fontFamily: FONT_DISPLAY, fontWeight: 400, fontSize: 'clamp(28px, 3.6vw, 38px)', lineHeight: 1.1, color: NAVY, margin: 0, letterSpacing: '-0.01em' }}>
        {title}
      </h2>
      {sub && <p style={{ fontFamily: FONT_BODY, fontSize: 15, color: MUTED, margin: '10px 0 0', lineHeight: 1.6, maxWidth: '62ch' }}>{sub}</p>}
    </div>
  )
}

export default async function EventsPage() {
  const events = await getUpcomingEvents()
  const gameSeries = groupIntoSeries(events.filter(e => e.type === 'game'))
  const concertSeries = groupIntoSeries(events.filter(e => e.type === 'concert'))

  const eventSchema = {
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
        address: { '@type': 'PostalAddress', addressLocality: 'Chicago', addressRegion: 'IL', postalCode: '60613', addressCountry: 'US' },
      },
    })),
  }
  const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  }
  const breadcrumbSchema = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://doubleplaywrigley.com' },
      { '@type': 'ListItem', position: 2, name: 'Events', item: 'https://doubleplaywrigley.com/events' },
    ],
  }

  return (
    <main style={{ fontFamily: FONT_BODY, color: INK, background: '#fff' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* ── Hero ── */}
      <section style={{ background: NAVY_INK, color: '#fff', padding: '72px 0 64px' }}>
        <div style={WRAP}>
          <div style={{ maxWidth: 680 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <span style={{ width: 24, height: 2, background: ACCENT, borderRadius: 1, display: 'inline-block' }} />
              <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: ACCENT }}>Wrigley Field · Live Calendar</span>
            </div>
            <h1 style={{ fontFamily: FONT_DISPLAY, fontWeight: 400, fontSize: 'clamp(38px, 5.4vw, 60px)', lineHeight: 1.05, letterSpacing: '-0.02em', margin: '0 0 18px', color: '#fff' }}>
              Every Cubs game.<br />Every concert. Across the street.
            </h1>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: 'rgba(255,255,255,0.66)', margin: 0, maxWidth: 560 }}>
              The Cubs play 81 home games at Wrigley from late March through September, and the ballpark hosts the biggest concert tours all summer. This schedule updates itself. Whatever is happening across the street, we have an apartment for it.
            </p>
          </div>
        </div>
      </section>

      {/* ── Book-early strip ── */}
      <section style={{ background: BG_WARM, padding: '36px 0' }}>
        <div style={{ ...WRAP, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 28 }}>
          <div>
            <h3 style={{ fontFamily: FONT_BODY, fontWeight: 700, fontSize: 16, color: NAVY, margin: '0 0 6px' }}>Cubs game weekends</h3>
            <p style={{ fontFamily: FONT_BODY, fontSize: 14, color: MUTED, margin: 0, lineHeight: 1.6 }}>
              Saturday games and rival series (Cardinals, Brewers, Yankees, Dodgers) sell out months ahead. Book direct to lock your dates.
            </p>
          </div>
          <div>
            <h3 style={{ fontFamily: FONT_BODY, fontWeight: 700, fontSize: 16, color: NAVY, margin: '0 0 6px' }}>Concert weekends</h3>
            <p style={{ fontFamily: FONT_BODY, fontSize: 14, color: MUTED, margin: 0, lineHeight: 1.6 }}>
              Wrigley concerts are our highest-demand bookings. Many guests reserve 6+ months out the moment a tour is announced.
            </p>
          </div>
        </div>
      </section>

      {/* ── Cubs home games ── */}
      <section style={{ ...WRAP, padding: '64px 32px 16px' }}>
        <SectionHead
          eyebrow="Cubs Home Games"
          title="Upcoming home stands"
          sub="Grouped by series. Each card books the full home stand, or pick your own nights at checkout."
        />
        {gameSeries.length > 0 ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))', gap: 20 }}>
            {gameSeries.map((s, i) => <SeriesCard key={i} s={s} />)}
          </div>
        ) : (
          <div style={{ padding: 32, borderRadius: 12, background: BG_SOFT, color: MUTED, fontSize: 15, textAlign: 'center' }}>
            The Cubs schedule publishes each spring. Check back soon, or message us directly for date availability.
          </div>
        )}
      </section>

      {/* ── Concerts ── */}
      <section style={{ ...WRAP, padding: '48px 32px 24px' }}>
        <SectionHead eyebrow="Concerts & Events" title="Shows at Wrigley" sub="Concerts, comedy, and special events across the street. Book a place to stay for any of them." />
        {concertSeries.length > 0 ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))', gap: 20 }}>
            {concertSeries.map((s, i) => <SeriesCard key={i} s={s} />)}
          </div>
        ) : (
          <div style={{ padding: 32, borderRadius: 12, background: BG_SOFT, color: MUTED, fontSize: 15, textAlign: 'center', lineHeight: 1.6 }}>
            Wrigley typically announces its summer concert lineup in late winter. Check back soon, or message us for the latest.
          </div>
        )}
      </section>

      {/* ── Rates note ── */}
      <section style={{ background: NAVY_INK, color: '#fff', padding: '64px 0', marginTop: 40 }}>
        <div style={WRAP}>
          <div style={{ maxWidth: 640 }}>
            <h2 style={{ fontFamily: FONT_DISPLAY, fontWeight: 400, fontSize: 'clamp(26px, 3.4vw, 34px)', lineHeight: 1.15, margin: '0 0 16px', color: '#fff' }}>
              A quick note on game-day rates
            </h2>
            <p style={{ fontFamily: FONT_BODY, fontSize: 16, lineHeight: 1.65, color: 'rgba(255,255,255,0.72)', margin: 0 }}>
              Our nightly rates flex with demand. A random Tuesday in April is the lowest rate of the season; a Saturday Cardinals series in July runs higher. Either way, the direct rate here is the lowest you will find. Airbnb and VRBO add service fees we do not charge.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ ...WRAP, padding: '72px 32px' }}>
        <SectionHead eyebrow="Good to know" title="Common questions about Wrigley events" />
        <div style={{ border: `1px solid ${LINE}`, borderRadius: 12, overflow: 'hidden', maxWidth: 820 }}>
          {faqs.map((faq, i) => (
            <details key={i} style={{ borderBottom: i < faqs.length - 1 ? `1px solid ${LINE}` : 'none' }}>
              <summary style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, padding: '20px 24px', cursor: 'pointer', listStyle: 'none', fontFamily: FONT_BODY, fontSize: 16, fontWeight: 700, color: NAVY, lineHeight: 1.4 }}>
                <span style={{ flex: 1 }}>{faq.q}</span>
                <span style={{ color: MUTED, flex: 'none', fontSize: 20, fontWeight: 400 }}>+</span>
              </summary>
              <div style={{ padding: '0 24px 22px', fontFamily: FONT_BODY, fontSize: 15, lineHeight: 1.7, color: INK, maxWidth: '70ch' }}>
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: NAVY, color: '#fff', padding: '64px 0' }}>
        <div style={{ ...WRAP, textAlign: 'center' }}>
          <h2 style={{ fontFamily: FONT_DISPLAY, fontWeight: 400, fontSize: 'clamp(28px, 3.6vw, 38px)', margin: '0 0 10px', color: '#fff' }}>
            Pick your dates, pick your unit.
          </h2>
          <p style={{ fontFamily: FONT_BODY, fontSize: 16, color: 'rgba(255,255,255,0.66)', margin: '0 0 28px' }}>
            Three apartments across the street. Instant confirmation, no service fees.
          </p>
          <Link href="/#apartments" style={{ display: 'inline-block', background: ACCENT, color: '#fff', padding: '15px 32px', borderRadius: 8, fontFamily: FONT_BODY, fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>
            Browse Apartments
          </Link>
        </div>
      </section>
    </main>
  )
}
