import Link from 'next/link'
import Image from 'next/image'
import { units } from '@/data/units'
import { events } from '@/data/events'
import { reviews } from '@/data/reviews'
import { getLodgingBusinessSchema } from '@/lib/schema'

const WRAP = { maxWidth: 1320, margin: '0 auto', padding: '0 32px' }

const SHADOW_CARD = '0 1px 2px rgba(15,42,72,0.04), 0 12px 28px -12px rgba(15,42,72,0.18)'
const SHADOW_PANEL = '0 1px 2px rgba(15,42,72,0.06), 0 24px 48px -20px rgba(15,42,72,0.35)'

function formatDate(iso: string) {
  const d = new Date(iso)
  return {
    dow: d.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase(),
    day: d.getDate(),
    mon: d.toLocaleDateString('en-US', { month: 'short' }).toUpperCase(),
  }
}

export default function HomePage() {
  const now = new Date()
  const upcomingEvents = events.filter(e => new Date(e.date) >= now).slice(0, 4)
  const featuredReviews = reviews.slice(0, 4)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getLodgingBusinessSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Double Play at Wrigley',
        url: 'https://yourdomain.com',
      }) }} />

      {/* ============ HERO ============ */}
      <section style={{ position: 'relative', minHeight: 880, overflow: 'hidden', background: '#0c1d33' }}>
        {/* Background photo with blur */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(/wrigley-hero.png)',
          backgroundPosition: 'center 35%',
          backgroundSize: 'cover',
          filter: 'blur(0.8px)',
          transform: 'scale(1.01)',
        }} aria-label="View of Wrigley Field" role="img" />
        {/* Gradient overlays */}
        <div style={{
          position: 'absolute', inset: 0,
          background: `
            linear-gradient(180deg, rgba(10,22,38,0.55) 0%, rgba(10,22,38,0.20) 18%, rgba(10,22,38,0) 32%, rgba(10,22,38,0) 55%, rgba(10,22,38,0.65) 100%),
            linear-gradient(90deg, rgba(10,22,38,0.45) 0%, rgba(10,22,38,0) 48%)
          `,
        }} />

        {/* Content */}
        <div style={{ ...WRAP, position: 'relative', zIndex: 2, paddingTop: 140, paddingBottom: 220, minHeight: 880, display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: 48, alignItems: 'start', flex: 1 }}>

            {/* Headline */}
            <div style={{ alignSelf: 'end', color: '#fff', maxWidth: 720 }}>
              <h1 style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontWeight: 400,
                fontSize: 64,
                lineHeight: 1.05,
                margin: '0 0 8px',
                letterSpacing: '-0.01em',
                textShadow: '0 2px 30px rgba(0,0,0,0.35)',
              }}>
                Across the street<br />from Wrigley Field
              </h1>
              <p style={{
                fontSize: 17,
                lineHeight: 1.5,
                color: 'rgba(255,255,255,0.92)',
                margin: '18px 0 0',
                maxWidth: 520,
                textShadow: '0 1px 14px rgba(0,0,0,0.5)',
              }}>
                Three private 2-bedroom apartments in the heart of Wrigleyville, Chicago. Book direct and skip the booking fees.
              </p>

              {/* Save $200+ callout — under hero subtitle */}
              <div style={{
                display: 'inline-block',
                background: '#E85A2C',
                color: '#fff',
                padding: '16px 22px',
                borderRadius: 14,
                boxShadow: '0 1px 2px rgba(15,42,72,0.06), 0 24px 48px -20px rgba(15,42,72,0.35)',
                marginTop: 24,
                fontFamily: 'Manrope',
                maxWidth: 520,
              }}>
                <div style={{ fontSize: 13, fontWeight: 800, letterSpacing: '0.06em', marginBottom: 4 }}>
                  SAVE $200+ BOOKING DIRECT
                </div>
                <div style={{ fontSize: 13, lineHeight: 1.5, opacity: 0.95 }}>
                  Guests save an average of $200+ vs. Airbnb &amp; VRBO on a 3-night stay.
                </div>
              </div>
            </div>

            {/* Booking Panel — custom form, submits to /search */}
            <aside aria-label="Booking panel" style={{
              width: 380,
              background: '#fff',
              borderRadius: 14,
              boxShadow: SHADOW_PANEL,
              overflow: 'hidden',
              alignSelf: 'start',
            }}>
              <div style={{ background: '#15375c', color: '#fff', textAlign: 'left', padding: '20px 24px', fontFamily: 'Manrope', fontWeight: 700, fontSize: 18, letterSpacing: '-0.005em' }}>
                Check Dates and Book
              </div>
              <form action="/search" method="get" style={{ padding: '24px 24px 28px' }}>
                {/* Check-in */}
                <div style={{ marginBottom: 18 }}>
                  <label htmlFor="hero-checkin" style={{ display: 'block', fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', color: '#15375c', textTransform: 'uppercase', marginBottom: 8 }}>Check-in date</label>
                  <div style={{ position: 'relative', display: 'flex', alignItems: 'center', border: '1.5px solid #e6e8ec', borderRadius: 6, padding: '0 14px', height: 48, background: '#fff' }}>
                    <input id="hero-checkin" type="date" name="start_date" required style={{ width: '100%', border: 0, outline: 0, background: 'transparent', fontFamily: 'inherit', color: '#1c2433', fontWeight: 600, fontSize: 15 }} />
                  </div>
                </div>
                {/* Check-out */}
                <div style={{ marginBottom: 18 }}>
                  <label htmlFor="hero-checkout" style={{ display: 'block', fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', color: '#15375c', textTransform: 'uppercase', marginBottom: 8 }}>Check-out date</label>
                  <div style={{ position: 'relative', display: 'flex', alignItems: 'center', border: '1.5px solid #e6e8ec', borderRadius: 6, padding: '0 14px', height: 48, background: '#fff' }}>
                    <input id="hero-checkout" type="date" name="end_date" required style={{ width: '100%', border: 0, outline: 0, background: 'transparent', fontFamily: 'inherit', color: '#1c2433', fontWeight: 600, fontSize: 15 }} />
                  </div>
                </div>
                {/* Guests */}
                <div style={{ marginBottom: 18 }}>
                  <label htmlFor="hero-guests" style={{ display: 'block', fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', color: '#15375c', textTransform: 'uppercase', marginBottom: 8 }}>Guests</label>
                  <div style={{ position: 'relative', display: 'flex', alignItems: 'center', border: '1.5px solid #e6e8ec', borderRadius: 6, padding: '0 14px', height: 48, background: '#fff' }}>
                    <select id="hero-guests" name="adults" defaultValue="2" style={{ width: '100%', border: 0, outline: 0, background: 'transparent', fontFamily: 'inherit', color: '#1c2433', fontWeight: 600, fontSize: 15, appearance: 'none', paddingRight: 22 }}>
                      {[1,2,3,4,5].map(n => <option key={n} value={n}>{n} guest{n > 1 ? 's' : ''}</option>)}
                    </select>
                    <span style={{ position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%) rotate(45deg)', width: 7, height: 7, borderRight: '2px solid #15375c', borderBottom: '2px solid #15375c', pointerEvents: 'none' }} />
                  </div>
                </div>
                <button type="submit" style={{ display: 'block', width: '100%', background: '#E85A2C', color: '#fff', textAlign: 'center', padding: '16px 18px', borderRadius: 6, fontWeight: 700, fontSize: 16, letterSpacing: '0.005em', marginTop: 10, border: 0, cursor: 'pointer', fontFamily: 'inherit' }}>
                  Search &amp; Book
                </button>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 14, fontSize: 12, color: '#6b7585', fontWeight: 600 }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#23a06b', display: 'inline-block' }} />
                  Instant confirmation · No service fees
                </div>
              </form>
            </aside>

          </div>
        </div>
      </section>

      {/* ============ APARTMENTS — overlaps hero ============ */}
      <section id="apartments" style={{ position: 'relative', zIndex: 5, marginTop: -140, paddingBottom: 120 }}>
        <div style={WRAP}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 56, maxWidth: 1280, margin: '0 auto' }}>
            {units.map(unit => (
              <article key={unit.slug} style={{ background: '#fff', borderRadius: 8, boxShadow: SHADOW_CARD, overflow: 'hidden', display: 'flex', flexDirection: 'column', border: '5px solid #fff', outline: '5px solid #fff' }}>
                <div style={{ aspectRatio: '16/10', background: '#e8eaee', position: 'relative', overflow: 'hidden' }}>
                  <Image src={unit.photos[0]} alt={unit.name} fill style={{ objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '28px 28px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <h3 style={{ fontFamily: 'Manrope', fontWeight: 700, fontSize: 24, letterSpacing: '-0.015em', color: '#15375c', margin: '0 0 12px' }}>{unit.name}</h3>
                  <p style={{ color: '#6b7585', fontSize: 15, lineHeight: 1.5, margin: '0 0 14px' }}>{unit.tagline}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#6b7585', fontSize: 13, marginBottom: 20 }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flex: 'none' }}><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><path d="M9 17V7h4a3 3 0 0 1 0 6H9"/></svg>
                    {unit.parking}
                  </div>
                  <div style={{ fontSize: 15, color: '#1c2433', marginBottom: 28 }}>
                    {unit.pricePerNight ? (
                      <>
                        <b style={{ fontSize: 24, fontWeight: 700, color: '#15375c', marginRight: 6, letterSpacing: '-0.015em' }}>${unit.pricePerNight}</b>
                        <span style={{ color: '#6b7585' }}>per night</span>
                      </>
                    ) : (
                      <span style={{ color: '#6b7585', fontStyle: 'italic' }}>Check availability for live pricing</span>
                    )}
                  </div>
                  <Link href={`/units/${unit.slug}`} style={{ display: 'block', textAlign: 'center', background: '#15375c', color: '#fff', padding: '17px 16px', borderRadius: 8, fontWeight: 700, fontSize: 15, letterSpacing: '0.005em', marginTop: 'auto', textDecoration: 'none' }}>
                    View Apartment
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ EVENTS ============ */}
      <section id="calendar" style={{ padding: '96px 0', background: '#f5f6f8' }}>
        <div style={WRAP}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2 style={{ fontFamily: 'Manrope', fontWeight: 700, fontSize: 34, letterSpacing: '-0.015em', color: '#15375c', margin: '0 0 10px' }}>Upcoming Events at Wrigley</h2>
            <p style={{ color: '#6b7585', fontSize: 16, margin: '0 auto', maxWidth: 560 }}>Direct Booking, No Service Fees.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
            {upcomingEvents.map((event, i) => {
              const { dow, day, mon } = formatDate(event.date)
              return (
                <article key={i} style={{ background: '#fff', borderRadius: 14, boxShadow: SHADOW_CARD, padding: '26px 24px 24px', display: 'flex', flexDirection: 'column', border: '1px solid #eef0f3' }}>
                  <div style={{ background: '#f1f4f9', borderRadius: 10, padding: '14px 10px', textAlign: 'center', marginBottom: 18, color: '#15375c' }}>
                    <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.2em', color: '#E85A2C' }}>{dow}</div>
                    <div style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 46, lineHeight: 1, margin: '2px 0', letterSpacing: '-0.02em' }}>{day}</div>
                    <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.2em', color: '#15375c' }}>{mon}</div>
                  </div>
                  <h3 style={{ fontWeight: 700, color: '#15375c', fontSize: 18, lineHeight: 1.3, letterSpacing: '-0.01em', margin: '0 0 14px', minHeight: 48 }}>{event.title}</h3>
                  <Link href={`/units/sluggers-suite?checkin=${event.date}`} style={{ display: 'block', textAlign: 'center', border: '1.5px solid #E85A2C', color: '#E85A2C', padding: '12px 14px', borderRadius: 6, fontWeight: 700, fontSize: 14, letterSpacing: '0.005em', marginTop: 'auto', background: '#fff', textDecoration: 'none' }}>
                    Book for this date
                  </Link>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* ============ REVIEWS ============ */}
      <section id="reviews" style={{ padding: '96px 0', background: '#fff' }}>
        <div style={WRAP}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2 style={{ fontFamily: 'Manrope', fontWeight: 700, fontSize: 34, letterSpacing: '-0.015em', color: '#15375c', margin: '0 0 10px' }}>Guest Reviews</h2>
            <p style={{ color: '#6b7585', fontSize: 16, margin: '0 auto', maxWidth: 560 }}>Real testimonials from booked guests.</p>
          </div>
          {/* TRUST BADGES — owner: remove whichever badge does not apply to your hosting status */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 24, flexWrap: 'wrap', marginBottom: 48, marginTop: -24 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 20px', background: '#fff', border: '1.5px solid #e6e8ec', borderRadius: 999, fontSize: 13, fontWeight: 700, color: '#15375c', letterSpacing: '0.02em' }}>
              <span style={{ color: '#E85A2C', fontSize: 16 }}>★</span>
              Airbnb Superhost
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 20px', background: '#fff', border: '1.5px solid #e6e8ec', borderRadius: 999, fontSize: 13, fontWeight: 700, color: '#15375c', letterSpacing: '0.02em' }}>
              <span style={{ color: '#E85A2C', fontSize: 16 }}>★</span>
              VRBO Premier Host
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 20px', background: '#fff', border: '1.5px solid #e6e8ec', borderRadius: 999, fontSize: 13, fontWeight: 700, color: '#15375c', letterSpacing: '0.02em' }}>
              <span style={{ color: '#23a06b', fontSize: 14 }}>●</span>
              5.0 Average Rating
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
            {featuredReviews.map((review, i) => (
              <div key={i} style={{ padding: '0 6px' }}>
                <div style={{ fontSize: 22, lineHeight: 1, color: '#E85A2C', fontFamily: "'DM Serif Display', Georgia, serif", marginBottom: 8 }}>&ldquo;</div>
                <p style={{ color: '#1c2433', fontSize: 15, lineHeight: 1.6, margin: '0 0 22px' }}>{review.text}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 42, height: 42, borderRadius: '50%', background: '#d7dbe2', flex: 'none', display: 'grid', placeItems: 'center', color: '#15375c', fontWeight: 800, fontSize: 14 }}>{review.initials}</div>
                  <div style={{ fontSize: 14 }}>
                    <div style={{ fontWeight: 700, color: '#15375c' }}>{review.name}</div>
                    <div style={{ color: '#6b7585', fontSize: 12 }}>{review.unit} · {review.date}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHY BOOK DIRECT ============ */}
      <section style={{ padding: '96px 0', background: '#fdf6f1' }}>
        <div style={WRAP}>
          <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 48px' }}>
            <div style={{ fontSize: 13, fontWeight: 800, letterSpacing: '0.22em', color: '#E85A2C', textTransform: 'uppercase', marginBottom: 14 }}>
              Why Book Direct
            </div>
            <h2 style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 400, fontSize: 40, letterSpacing: '-0.015em', color: '#15375c', margin: '0 0 16px', lineHeight: 1.15 }}>
              Skip the middleman. Stay direct.
            </h2>
            <p style={{ color: '#1c2433', fontSize: 17, lineHeight: 1.7, margin: 0 }}>
              Booking direct means lower prices, no platform service fees, and a real person on the other end of every message. Here&apos;s what changes when you skip Airbnb and VRBO.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, maxWidth: 1140, margin: '0 auto' }} className="why-direct-grid">
            {[
              {
                title: 'No service fees.',
                body: 'Airbnb charges guests up to 14% in service fees on top of your nightly rate. VRBO does the same. We don\'t. Same apartment, same dates — just direct. Most guests save $150–$250+ on a 3-night stay.',
                icon: '$',
              },
              {
                title: 'Local hosts who answer.',
                body: 'We live in and around Wrigleyville. Message us anytime and we typically respond within the hour. Pre-booking questions, custom requests, last-minute changes — all handled by an actual human who knows the neighborhood inside out.',
                icon: '✉',
              },
              {
                title: 'Best rate, guaranteed.',
                body: 'Our direct rate is always the same as or lower than what you\'d pay through Airbnb or VRBO for the same dates. If you find a lower rate on any major platform, message us and we\'ll match it.',
                icon: '✓',
              },
            ].map(card => (
              <div key={card.title} style={{ background: '#fff', borderRadius: 14, padding: 32, border: '1px solid #f0e8e2', boxShadow: '0 1px 2px rgba(15,42,72,.03), 0 6px 18px -10px rgba(15,42,72,.10)' }}>
                <div style={{ width: 48, height: 48, borderRadius: 24, background: 'rgba(232,90,44,.12)', display: 'grid', placeItems: 'center', fontSize: 24, fontWeight: 800, color: '#E85A2C', marginBottom: 18 }}>
                  {card.icon}
                </div>
                <h3 style={{ fontFamily: 'Manrope', fontSize: 20, fontWeight: 800, color: '#15375c', margin: '0 0 12px', letterSpacing: '-0.01em' }}>{card.title}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.7, color: '#1c2433', margin: 0 }}>{card.body}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 44 }}>
            <p style={{ fontSize: 14, color: '#6b7585', margin: '0 0 18px' }}>Direct booking. No service fees. Same apartments.</p>
            <a href="#booking" style={{ display: 'inline-block', background: '#E85A2C', color: '#fff', padding: '16px 32px', borderRadius: 8, fontSize: 13, fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none' }}>
              Check Availability →
            </a>
          </div>
        </div>
      </section>

      {/* ============ BROADER CHICAGO APPEAL ============ */}
      <section id="chicago" style={{ padding: '96px 0', background: '#15375c', color: '#fff' }}>
        <div style={WRAP}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 800, letterSpacing: '0.22em', color: '#E85A2C', textTransform: 'uppercase', marginBottom: 14 }}>
                Beyond the Ballpark
              </div>
              <h2 style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontWeight: 400,
                fontSize: 44,
                letterSpacing: '-0.01em',
                lineHeight: 1.1,
                margin: '0 0 24px',
              }}>
                You came for the game. Stay for the city.
              </h2>
              <p style={{ fontSize: 17, lineHeight: 1.7, color: 'rgba(255,255,255,0.9)', margin: '0 0 20px' }}>
                Our apartments aren&apos;t just steps from Wrigley Field — they&apos;re a 3-minute walk from the Addison Red
                Line, which puts you in <strong>downtown Chicago in 15 minutes</strong>. The Bean. The Art Institute.
                The Riverwalk. Magnificent Mile. Lake Michigan&apos;s beaches. All without renting a car.
              </p>
              <p style={{ fontSize: 17, lineHeight: 1.7, color: 'rgba(255,255,255,0.9)', margin: '0 0 28px' }}>
                We hand every guest a personal guide to the rest of Chicago — where to get real deep dish, which
                museum is worth a full day, and how to spend an afternoon on the lakefront like a local.
              </p>
              <Link
                href="/neighborhood#beyond-wrigleyville"
                style={{
                  display: 'inline-block',
                  background: '#E85A2C',
                  color: '#fff',
                  padding: '14px 28px',
                  borderRadius: 8,
                  fontSize: 13,
                  fontWeight: 800,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                }}
              >
                Read the full guide →
              </Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              {[
                { label: 'The Loop & The Bean', time: '15 min' },
                { label: 'Lake Michigan', time: '10 min walk' },
                { label: 'Magnificent Mile', time: '20 min' },
                { label: 'Art Institute', time: '20 min' },
                { label: 'Lincoln Park Zoo', time: '5 min' },
                { label: "O'Hare Airport", time: '60 min' },
              ].map(d => (
                <div key={d.label} style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: 10,
                  padding: '20px 18px',
                }}>
                  <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.15em', color: '#E85A2C', textTransform: 'uppercase', marginBottom: 6 }}>
                    {d.time}
                  </div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: '#fff', lineHeight: 1.25 }}>
                    {d.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ NEIGHBORHOOD ============ */}
      <section id="guide" style={{ padding: '96px 0', background: '#f5f6f8' }}>
        <div style={WRAP}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2 style={{ fontFamily: 'Manrope', fontWeight: 700, fontSize: 34, letterSpacing: '-0.015em', color: '#15375c', margin: '0 0 10px' }}>Explore Wrigleyville</h2>
            <p style={{ color: '#6b7585', fontSize: 16, margin: '0 auto', maxWidth: 560 }}>The pre-game bars, late-night slices, and weekend brunch spots we&apos;ve sent hundreds of guests to. Full guide inside.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
            {[
              { label: 'Local Bars', ph: 'Local bars' },
              { label: 'Local Restaurants', ph: 'Restaurants' },
              { label: 'Coffee & Brunch', ph: 'Coffee & brunch' },
            ].map(({ label, ph }) => (
              <div key={label} style={{ borderRadius: 10, overflow: 'hidden', aspectRatio: '4/3', background: '#dde1e7', position: 'relative', boxShadow: SHADOW_CARD, cursor: 'pointer' }}>
                <div style={{ position: 'absolute', inset: 0, background: 'repeating-linear-gradient(135deg, #cfd5dd 0 14px, #c4cbd5 14px 28px)' }} />
                <div style={{ position: 'absolute', left: 12, top: 12, background: 'rgba(255,255,255,0.94)', color: '#15375c', fontFamily: 'ui-monospace, monospace', fontSize: 10, letterSpacing: '0.08em', padding: '5px 8px', borderRadius: 4 }}>{ph}</div>
                <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(11,31,54,0.85) 100%)', color: '#fff', padding: '24px 16px 14px', fontWeight: 700, fontSize: 15, lineHeight: 1.3 }}>{label}</div>
              </div>
            ))}
            <Link href="/neighborhood" style={{ borderRadius: 10, overflow: 'hidden', aspectRatio: '4/3', background: '#dde1e7', position: 'relative', boxShadow: SHADOW_CARD, cursor: 'pointer', textDecoration: 'none' }}>
              <div style={{ position: 'absolute', inset: 0, background: 'repeating-linear-gradient(135deg, #cfd5dd 0 14px, #c4cbd5 14px 28px)' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(15,55,92,0.40) 0%, rgba(11,31,54,0.92) 100%)' }} />
              <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, color: '#fff', padding: '24px 16px 14px', fontWeight: 700, fontSize: 15, lineHeight: 1.3 }}>Explore More<br />Neighborhood Guide &#8594;</div>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
