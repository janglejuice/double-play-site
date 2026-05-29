import Link from 'next/link'
import Image from 'next/image'
import { units } from '@/data/units'
import { reviews } from '@/data/reviews'
import { getLodgingBusinessSchema } from '@/lib/schema'
import { getUpcomingEvents } from '@/lib/schedule'
import BookingForm from '@/components/BookingForm'

const WRAP = { maxWidth: 1320, margin: '0 auto', padding: '0 32px' }

const SHADOW_CARD = '0 1px 2px rgba(15,42,72,0.04), 0 12px 28px -12px rgba(15,42,72,0.18)'
const SHADOW_PANEL = '0 1px 2px rgba(15,42,72,0.06), 0 24px 48px -20px rgba(15,42,72,0.35)'
const CUBS_LOGO = 'https://www.mlbstatic.com/team-logos/112.svg'

// Per-unit homepage card presentation: short floor label, a personality tagline,
// and two highlight chips. Keeps the cards distinct instead of three clones.
const CARD_META: Record<string, { floorShort: string; tagline: string; chips: string[] }> = {
  'the-ivy':     { floorShort: 'Garden Level', tagline: 'Below-street and cozy, with soundproofed bedrooms for game-night sleep.',  chips: ['Soundproofed bedrooms'] },
  'the-addison': { floorShort: 'First Floor',  tagline: 'Our most-reviewed apartment, with the classic raised first-floor feel.', chips: ['Corner bay windows'] },
  'the-marquee': { floorShort: 'Top Floor',    tagline: 'Top-floor flagship: corner bay windows, 10-ft ceilings, the most light.', chips: ['Corner bay windows'] },
}

function formatDate(iso: string) {
  const d = new Date(iso)
  return {
    dow: d.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase(),
    day: d.getDate(),
    mon: d.toLocaleDateString('en-US', { month: 'short' }).toUpperCase(),
  }
}

export default async function HomePage() {
  const upcomingEvents = (await getUpcomingEvents()).slice(0, 4)
  const featuredReviews = reviews.slice(0, 4)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getLodgingBusinessSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Double Play at Wrigley',
        url: 'https://doubleplaywrigley.com',
      }) }} />

      {/* ============ HERO ============ */}
      <section className="hero-section" style={{ position: 'relative', minHeight: 880, overflow: 'hidden', background: '#0c1d33' }}>
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
        <div className="hero-content-wrap" style={{ ...WRAP, position: 'relative', zIndex: 2, paddingTop: 140, paddingBottom: 220, minHeight: 880, display: 'flex', flexDirection: 'column' }}>
          <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: 48, alignItems: 'start', flex: 1 }}>

            {/* Headline */}
            <div className="hero-headline" style={{ alignSelf: 'end', color: '#fff', maxWidth: 720 }}>
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

            </div>

            {/* Booking Panel — custom form, submits to /search */}
            <aside aria-label="Booking panel" className="hero-booking-panel" style={{
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
              <BookingForm />
            </aside>

          </div>
        </div>
      </section>

      {/* ============ APARTMENTS — overlaps hero ============ */}
      <section id="apartments" className="units-section" style={{ position: 'relative', zIndex: 5, marginTop: -140, paddingBottom: 120 }}>
        <style>{`
          .dp-unit-card { transition: transform 0.34s cubic-bezier(0.22,1,0.36,1), box-shadow 0.34s cubic-bezier(0.22,1,0.36,1); }
          .dp-unit-card:hover { transform: translateY(-5px); box-shadow: 0 2px 6px rgba(15,42,72,0.08), 0 30px 60px -22px rgba(15,42,72,0.40); }
          .dp-unit-photo > img { transition: transform 0.6s cubic-bezier(0.22,1,0.36,1); }
          .dp-unit-card:hover .dp-unit-photo > img { transform: scale(1.05); }
          .dp-unit-cta { transition: background 0.2s ease, gap 0.2s ease; }
          .dp-unit-card:hover .dp-unit-cta { background: #0f2a48; }
          .dp-unit-card:hover .dp-unit-arrow { transform: translateX(3px); }
          .dp-unit-arrow { transition: transform 0.2s ease; }
          @media (prefers-reduced-motion: reduce) {
            .dp-unit-card, .dp-unit-photo > img, .dp-unit-arrow { transition: none !important; }
            .dp-unit-card:hover { transform: none; }
            .dp-unit-card:hover .dp-unit-photo > img { transform: none; }
          }
        `}</style>
        <div style={WRAP}>
          <div className="units-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, maxWidth: 1280, margin: '0 auto' }}>
            {units.map(unit => {
              const meta = CARD_META[unit.slug]
              return (
              <article key={unit.slug} className="dp-unit-card" style={{ background: '#fff', borderRadius: 14, boxShadow: SHADOW_CARD, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                {/* Photo with gradient + floor badge */}
                <div className="dp-unit-photo" style={{ aspectRatio: '4/3', background: '#e8eaee', position: 'relative', overflow: 'hidden' }}>
                  <Image src={unit.photos[0]} alt={unit.name} fill style={{ objectFit: 'cover' }} />
                  <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(11,31,54,0.5) 0%, rgba(11,31,54,0) 40%)' }} />
                  <span style={{
                    position: 'absolute', left: 14, bottom: 14,
                    background: 'rgba(255,255,255,0.94)', color: '#15375c',
                    fontFamily: 'Manrope', fontSize: 10, fontWeight: 800, letterSpacing: '0.1em',
                    textTransform: 'uppercase', padding: '6px 12px', borderRadius: 100,
                    backdropFilter: 'blur(6px)',
                  }}>
                    {meta?.floorShort ?? unit.floor}
                  </span>
                </div>
                <div style={{ padding: '22px 26px 26px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  {/* Unit name — DM Serif Display */}
                  <h3 style={{ fontFamily: '"DM Serif Display", serif', fontWeight: 400, fontSize: 27, lineHeight: 1.08, color: '#15375c', margin: '0 0 8px' }}>{unit.name}</h3>
                  {/* Tagline */}
                  {meta && (
                    <p style={{ fontFamily: 'Manrope', fontSize: 14, lineHeight: 1.5, color: '#6b7585', margin: '0 0 16px' }}>{meta.tagline}</p>
                  )}
                  {/* Stats row */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', fontSize: 13.5, fontWeight: 600, color: '#1c2433', marginBottom: 14, gap: '4px 0' }}>
                    <span>{unit.beds} Bed</span>
                    <span style={{ color: '#c8cdd6', margin: '0 8px' }}>·</span>
                    <span>Sleeps {unit.sleeps}</span>
                    <span style={{ color: '#c8cdd6', margin: '0 8px' }}>·</span>
                    <span>{unit.baths} Bath</span>
                    {unit.sqft && (
                      <>
                        <span style={{ color: '#c8cdd6', margin: '0 8px' }}>·</span>
                        <span>{unit.sqft.toLocaleString()} sqft</span>
                      </>
                    )}
                  </div>
                  {/* Highlight chips */}
                  {meta && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 18 }}>
                      {meta.chips.map(c => (
                        <span key={c} style={{
                          fontFamily: 'Manrope', fontSize: 11.5, fontWeight: 600, color: '#15375c',
                          background: 'rgba(21,55,92,0.06)', padding: '5px 11px', borderRadius: 100,
                        }}>{c}</span>
                      ))}
                    </div>
                  )}
                  {/* Pricing */}
                  <div style={{ fontSize: 13.5, color: '#6b7585', fontStyle: 'italic', marginBottom: 18, flex: 1 }}>
                    {unit.pricePerNight ? (
                      <><b style={{ fontStyle: 'normal', fontWeight: 700, color: '#15375c', fontSize: 22, marginRight: 4 }}>${unit.pricePerNight}</b><span>/ night</span></>
                    ) : (
                      'Check availability for live pricing'
                    )}
                  </div>
                  <Link href={`/units/${unit.slug}`} className="dp-unit-cta" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, background: '#15375c', color: '#fff', padding: '15px', borderRadius: 8, fontWeight: 700, fontSize: 15, letterSpacing: '0.01em', textDecoration: 'none' }}>
                    View Apartment
                    <svg className="dp-unit-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  </Link>
                </div>
              </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* ============ EVENTS ============ */}
      {upcomingEvents.length === 0 ? (
        <section id="calendar" style={{ padding: '96px 0', background: '#f5f6f8' }}>
          <div style={WRAP}>
            <div style={{ textAlign: 'center' }}>
              <h2 style={{ fontFamily: 'Manrope', fontWeight: 700, fontSize: 34, letterSpacing: '-0.015em', color: '#15375c', margin: '0 0 10px' }}>Upcoming Events at Wrigley</h2>
              <p style={{ color: '#6b7585', fontSize: 16, margin: '0 auto', maxWidth: 560 }}>Cubs season schedule coming soon, check back for upcoming dates.</p>
            </div>
          </div>
        </section>
      ) : (
        <section id="calendar" style={{ padding: '96px 0', background: '#f5f6f8' }}>
          <div style={WRAP}>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <h2 style={{ fontFamily: 'Manrope', fontWeight: 700, fontSize: 34, letterSpacing: '-0.015em', color: '#15375c', margin: '0 0 10px' }}>Upcoming Events at Wrigley</h2>
              <p style={{ color: '#6b7585', fontSize: 16, margin: '0 auto', maxWidth: 560 }}>Book early, game-day weekends sell out fast.</p>
            </div>
            <div className="events-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
              {upcomingEvents.map((event, i) => {
                const { dow, day, mon } = formatDate(event.date)
                return (
                  <article key={i} style={{ background: '#fff', borderRadius: 14, boxShadow: SHADOW_CARD, padding: '26px 24px 24px', display: 'flex', flexDirection: 'column', border: '1px solid #eef0f3' }}>
                    <div style={{ background: '#f1f4f9', borderRadius: 10, padding: '14px 10px', textAlign: 'center', marginBottom: 18, color: '#15375c' }}>
                      <div style={{ fontSize: 13, fontWeight: 800, letterSpacing: '0.18em', color: '#E85A2C' }}>{dow}</div>
                      <div style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 46, lineHeight: 1, margin: '2px 0', letterSpacing: '-0.02em' }}>{day}</div>
                      <div style={{ fontSize: 13, fontWeight: 800, letterSpacing: '0.18em', color: '#15375c' }}>{mon}</div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, margin: '0 0 14px', minHeight: 48 }}>
                      {event.logo && (
                        /* eslint-disable-next-line @next/next/no-img-element */
                        <img src={CUBS_LOGO} alt="Chicago Cubs" width={28} height={28} loading="lazy" style={{ width: 28, height: 28, objectFit: 'contain', flex: 'none' }} />
                      )}
                      <h3 style={{ flex: 1, fontWeight: 700, color: '#15375c', fontSize: 17, lineHeight: 1.25, letterSpacing: '-0.01em', margin: 0 }}>{event.title}</h3>
                      {event.logo && (
                        /* eslint-disable-next-line @next/next/no-img-element */
                        <img src={event.logo} alt="" width={28} height={28} loading="lazy" style={{ width: 28, height: 28, objectFit: 'contain', flex: 'none' }} />
                      )}
                    </div>
                    <Link href={`/search?start_date=${event.date}`} style={{ display: 'block', textAlign: 'center', border: '1.5px solid #E85A2C', color: '#E85A2C', padding: '12px 14px', borderRadius: 6, fontWeight: 700, fontSize: 14, letterSpacing: '0.005em', marginTop: 'auto', background: '#fff', textDecoration: 'none' }}>
                      Book for this date
                    </Link>
                  </article>
                )
              })}
            </div>
          </div>
        </section>
      )}

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
          <div className="reviews-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
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
          <div style={{ maxWidth: 720, margin: '0 auto' }}>
            {[
              {
                num: '1',
                title: 'No service fees.',
                body: "Airbnb charges guests up to 14% in service fees on top of your nightly rate. VRBO does the same. We don't. Same apartment, same dates, just direct. Most guests save $150-$250+ on a 3-night stay.",
              },
              {
                num: '2',
                title: 'Local hosts who answer.',
                body: 'We live in and around Wrigleyville. Message us anytime and we typically respond within the hour. Pre-booking questions, custom requests, last-minute changes: all handled by an actual human who knows the neighborhood inside out.',
              },
              {
                num: '3',
                title: 'Best rate, guaranteed.',
                body: "Our direct rate is always the same as or lower than what you'd pay through Airbnb or VRBO for the same dates. If you find a lower rate on any major platform, message us and we'll match it.",
              },
            ].map((item, i) => (
              <div
                key={item.num}
                style={{
                  borderTop: '1px solid #f0e8e2',
                  padding: '40px 0',
                  position: 'relative',
                  ...(i === 0 ? { borderTop: 'none', paddingTop: 0 } : {}),
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 32 }}>
                  <div
                    style={{
                      fontFamily: "'DM Serif Display', serif",
                      fontSize: 88,
                      fontWeight: 400,
                      lineHeight: 1,
                      color: 'rgba(21,55,92,0.13)',
                      minWidth: 56,
                      userSelect: 'none',
                      marginTop: -8,
                    }}
                  >
                    {item.num}
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: 'Manrope, sans-serif',
                        fontSize: 22,
                        fontWeight: 700,
                        color: '#15375c',
                        margin: '0 0 10px',
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {item.title}
                    </h3>
                    <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: 16, lineHeight: 1.7, color: '#1c2433', margin: 0 }}>
                      {item.body}
                    </p>
                  </div>
                </div>
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
          <div className="beyond-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
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
                Our apartments aren&apos;t just steps from Wrigley Field — they&apos;re across the street from the Addison Red
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
            <div className="beyond-proximity-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
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
          <style>{`
            .dp-explore-tile img { transition: transform 0.55s cubic-bezier(0.22,1,0.36,1); }
            .dp-explore-tile:hover img { transform: scale(1.06); }
            @media (prefers-reduced-motion: reduce) { .dp-explore-tile img { transition: none !important; } .dp-explore-tile:hover img { transform: none; } }
          `}</style>
          <div className="neighborhood-tiles" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
            {[
              { label: 'Local Bars',        img: '/image-1779917788821.webp', alt: 'Classic Wrigleyville sports bar interior' },
              { label: 'Local Restaurants', img: '/Murphys.jpg',               alt: "Murphy's Bleachers, a Wrigleyville staple across from the ballpark" },
              { label: 'Coffee & Brunch',   img: '/dorite.jpg',                alt: 'Do-Rite Donuts near Wrigley Field' },
            ].map(({ label, img, alt }) => (
              <Link key={label} href="/neighborhood" className="dp-explore-tile" style={{ display: 'block', borderRadius: 10, overflow: 'hidden', aspectRatio: '4/3', background: '#dde1e7', position: 'relative', boxShadow: SHADOW_CARD, textDecoration: 'none' }}>
                <Image src={img} alt={alt} fill sizes="(max-width: 900px) 50vw, 25vw" style={{ objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(11,31,54,0) 38%, rgba(11,31,54,0.85) 100%)' }} />
                <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, color: '#fff', padding: '24px 18px 16px', fontWeight: 700, fontSize: 16, lineHeight: 1.3 }}>{label}</div>
              </Link>
            ))}
            <Link href="/neighborhood" className="dp-explore-tile" style={{ display: 'block', borderRadius: 10, overflow: 'hidden', aspectRatio: '4/3', background: '#dde1e7', position: 'relative', boxShadow: SHADOW_CARD, textDecoration: 'none' }}>
              <Image src="/image-1779917796814.webp" alt="Gallagher Way plaza at Wrigley Field lit up at night" fill sizes="(max-width: 900px) 50vw, 25vw" style={{ objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(15,55,92,0.45) 0%, rgba(11,31,54,0.92) 100%)' }} />
              <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, color: '#fff', padding: '24px 18px 16px', fontWeight: 700, fontSize: 16, lineHeight: 1.3 }}>Explore More<br />Neighborhood Guide &#8594;</div>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
