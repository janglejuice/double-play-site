import Link from 'next/link'
import { spots, chicagoDestinations } from '@/data/neighborhood'
import { neighborhoodFAQs } from '@/data/neighborhood-faqs'

export const metadata = {
  title: 'Wrigleyville Neighborhood Guide — Restaurants, Bars, Transit & More | Double Play at Wrigley',
  description:
    'Insider Wrigleyville guide from your local hosts: the best pre-game bars, late-night eats, brunch spots, coffee, transit to downtown Chicago, and how to explore Chicago from our apartments across from Wrigley Field.',
}

const SHADOW_CARD = '0 1px 2px rgba(15,42,72,0.04), 0 12px 28px -12px rgba(15,42,72,0.18)'

const categoryOrder: Array<{ key: typeof spots[number]['category']; label: string; intro: string }> = [
  {
    key: 'pre-game',
    label: 'Pre-Game & Game-Day Bars',
    intro: "These are where Wrigleyville really lives on game day. We've sent hundreds of guests here.",
  },
  {
    key: 'sit-down',
    label: 'Sit-Down Restaurants',
    intro: 'For when you want to actually sit down. Range covers Italian, tacos, pizza, and Thai.',
  },
  {
    key: 'date-night',
    label: 'Date Night',
    intro: 'Quieter, elevated spots when the occasion calls for it.',
  },
  {
    key: 'late-night',
    label: 'Late-Night Eats',
    intro: 'Open when nothing else is. The post-bar pilgrimage.',
  },
  {
    key: 'brunch',
    label: 'Brunch',
    intro: 'Lazy mornings, patios, bottomless coffee, strong bloody marys.',
  },
  {
    key: 'coffee',
    label: 'Coffee',
    intro: "Whether you're after a serious pour-over or a friendly neighborhood spot.",
  },
  {
    key: 'park',
    label: 'Parks & Outdoor',
    intro: 'Lake Michigan, the Lakefront Trail, and the plaza right next to Wrigley.',
  },
  {
    key: 'shopping',
    label: 'Groceries & Essentials',
    intro: 'For stocking the kitchen on arrival or grabbing anything you forgot.',
  },
  {
    key: 'transit',
    label: 'Getting Around',
    intro: "How to reach the rest of Chicago without a car. Spoiler: it's easy.",
  },
]

function getFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: neighborhoodFAQs.map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  }
}

export default function NeighborhoodPage() {
  return (
    <div style={{ background: '#fff' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema()) }}
      />

      {/* ============ HERO ============ */}
      <section style={{ background: '#15375c', color: '#fff', padding: '240px 32px 80px' }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <div style={{ fontSize: 13, fontWeight: 800, letterSpacing: '0.22em', color: '#E85A2C', textTransform: 'uppercase', marginBottom: 16 }}>
            Wrigleyville · Chicago
          </div>
          <h1 style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: 48,
            lineHeight: 1.1,
            margin: '0 0 24px',
            letterSpacing: '-0.01em',
          }}>
            A real, lived-in guide to our neighborhood.
          </h1>
          <p style={{ fontSize: 19, lineHeight: 1.6, color: 'rgba(255,255,255,0.92)', margin: 0, maxWidth: 720 }}>
            We&apos;re your hosts at Double Play at Wrigley — three apartments directly across from Wrigley Field. We&apos;ve lived
            in and around Wrigleyville for years, and this is the same guide we hand to every guest who asks
            <em> &quot;okay, what should we actually do?&quot;</em> Pre-game bars, late-night slices, the quiet brunch spot
            tourists never find, and how to reach the rest of Chicago in 15 minutes flat.
          </p>
        </div>
      </section>

      {/* ============ INTRO + WHY YOU'RE GOING TO LOVE IT ============ */}
      <section style={{ padding: '64px 32px 32px', background: '#fff' }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'Manrope',
            fontWeight: 700,
            fontSize: 32,
            letterSpacing: '-0.015em',
            color: '#15375c',
            margin: '0 0 24px',
          }}>
            What it&apos;s actually like here
          </h2>
          <div style={{ fontSize: 17, lineHeight: 1.75, color: '#1c2433', maxWidth: 720 }}>
            <p style={{ margin: '0 0 20px' }}>
              Wrigleyville is the Chicago neighborhood that grew up around <strong>Wrigley Field</strong>, the
              second-oldest ballpark in America. On a game day, the streets fill with red and blue jerseys two
              hours before first pitch and stay loud until last call. Murphy&apos;s Bleachers spills onto Sheffield, the
              marquee at Clark and Addison glows, and the &quot;Go Cubs Go&quot; chant rolls out of every bar.
            </p>
            <p style={{ margin: '0 0 20px' }}>
              But what surprises most of our guests is how <strong>great it is on non-game days</strong>. The
              restaurants on Clark Street are packed with locals year-round. <strong>Gallagher Way</strong>, the
              plaza next to the ballpark, hosts free concerts, yoga classes, outdoor movies, and a German Christmas
              market in winter. The Lakefront Trail is a 15-minute walk east. And we&apos;re a 15-minute train ride
              from downtown Chicago, the Art Institute, Lake Michigan&apos;s beaches, and the Magnificent Mile.
            </p>
            <p style={{ margin: '0 0 20px' }}>
              You don&apos;t need a rental car. You don&apos;t need to plan. You just need to walk out the front door.
            </p>
          </div>
        </div>
      </section>

      {/* ============ HOST TIPS BOX ============ */}
      <section style={{ padding: '0 32px 48px', background: '#fff' }}>
        <div style={{
          maxWidth: 880,
          margin: '0 auto',
          background: '#fff8f3',
          border: '1.5px solid #f3d6c4',
          borderRadius: 14,
          padding: '32px 32px',
        }}>
          <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: '0.22em', color: '#E85A2C', textTransform: 'uppercase', marginBottom: 14 }}>
            From your hosts
          </div>
          <h3 style={{
            fontFamily: 'Manrope',
            fontWeight: 700,
            fontSize: 22,
            letterSpacing: '-0.015em',
            color: '#15375c',
            margin: '0 0 16px',
          }}>
            Our top three pieces of advice
          </h3>
          <ol style={{ margin: 0, paddingLeft: 22, fontSize: 15.5, lineHeight: 1.7, color: '#1c2433' }}>
            <li style={{ marginBottom: 12 }}>
              <strong>Skip the rental car.</strong> The Addison Red Line is a 3-minute walk and runs 24/7. A CTA Ventra
              pass for 3 days is about $15. A single day of parking in Wrigleyville on a game day can run $60.
            </li>
            <li style={{ marginBottom: 12 }}>
              <strong>Hit a sit-down spot before the game, not after.</strong> Post-game crowds turn 20-minute waits
              into 90-minute waits. We always recommend booking dinner for about 4-5 hours before first pitch.
            </li>
            <li>
              <strong>Get on the Lakefront Trail at least once.</strong> A Divvy bike, a 5-minute ride east, and
              you&apos;re on one of the most beautiful waterfront paths in the country. Trust us, do it.
            </li>
          </ol>
        </div>
      </section>

      {/* ============ THEMED SPOT SECTIONS (consolidated into one container) ============ */}
      <section style={{ padding: '24px 32px 64px', background: '#fff' }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          {categoryOrder.map(cat => {
            const catSpots = spots.filter(s => s.category === cat.key)
            if (catSpots.length === 0) return null
            return (
              <div key={cat.key} style={{ marginTop: 48 }}>
                <h2 style={{
                  fontFamily: 'Manrope',
                  fontWeight: 700,
                  fontSize: 28,
                  letterSpacing: '-0.015em',
                  color: '#15375c',
                  margin: '0 0 8px',
                }}>
                  {cat.label}
                </h2>
                <p style={{ color: '#6b7585', fontSize: 16, margin: '0 0 20px' }}>{cat.intro}</p>
                <div style={{ display: 'grid', gap: 16 }}>
                  {catSpots.map(spot => (
                  <article
                    key={spot.name}
                    style={{
                      background: '#fff',
                      border: '1px solid #eef0f3',
                      borderRadius: 12,
                      padding: '24px 28px',
                      boxShadow: SHADOW_CARD,
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 16, marginBottom: 10, flexWrap: 'wrap' }}>
                      <h3 style={{
                        fontFamily: 'Manrope',
                        fontSize: 19,
                        fontWeight: 700,
                        color: '#15375c',
                        margin: 0,
                        letterSpacing: '-0.01em',
                      }}>
                        {spot.name}
                      </h3>
                      <span style={{ fontSize: 12, fontWeight: 700, color: '#6b7585', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                        {spot.distance}
                      </span>
                    </div>
                    <p style={{ fontSize: 15, lineHeight: 1.6, color: '#1c2433', margin: '0 0 14px' }}>
                      {spot.description}
                    </p>
                    {spot.ourPick && (
                      <div style={{
                        background: '#fff8f3',
                        borderLeft: '3px solid #E85A2C',
                        padding: '12px 14px',
                        borderRadius: 4,
                        fontSize: 14,
                        lineHeight: 1.55,
                        color: '#1c2433',
                        marginBottom: spot.hoursNote ? 10 : 0,
                      }}>
                        <strong style={{ color: '#E85A2C', fontWeight: 800, marginRight: 6 }}>Our pick:</strong>
                        {spot.ourPick}
                      </div>
                    )}
                    {spot.hoursNote && (
                      <div style={{ fontSize: 12, color: '#6b7585', marginTop: 8 }}>
                        <strong>Hours:</strong> {spot.hoursNote}
                      </div>
                    )}
                    {spot.goodFor && spot.goodFor.length > 0 && (
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 12 }}>
                        {spot.goodFor.map(tag => (
                          <span
                            key={tag}
                            style={{
                              fontSize: 11,
                              fontWeight: 700,
                              color: '#15375c',
                              background: '#f1f4f9',
                              padding: '4px 10px',
                              borderRadius: 12,
                              letterSpacing: '0.04em',
                              textTransform: 'lowercase',
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    </article>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* ============ BEYOND WRIGLEYVILLE — BROADER CHICAGO ============ */}
      <section id="beyond-wrigleyville" style={{ padding: '72px 32px', background: '#f5f6f8' }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <div style={{ fontSize: 13, fontWeight: 800, letterSpacing: '0.22em', color: '#E85A2C', textTransform: 'uppercase', marginBottom: 14 }}>
            Beyond Wrigleyville
          </div>
          <h2 style={{
            fontFamily: 'Manrope',
            fontWeight: 700,
            fontSize: 32,
            letterSpacing: '-0.015em',
            color: '#15375c',
            margin: '0 0 16px',
          }}>
            Your Chicago, all reachable from the Addison Red Line.
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: '#1c2433', margin: '0 0 40px', maxWidth: 720 }}>
            One of the things we love about hosting here is that Wrigleyville isn&apos;t just a baseball neighborhood —
            it&apos;s a launchpad for the rest of Chicago. The Red Line gets you to downtown in 15 minutes. Lake Michigan
            is a 10-minute walk east. Here&apos;s what we send guests off to explore:
          </p>

          <div style={{ display: 'grid', gap: 16 }}>
            {chicagoDestinations.map(d => (
              <article
                key={d.name}
                style={{
                  background: '#fff',
                  border: '1px solid #eef0f3',
                  borderRadius: 12,
                  padding: '24px 28px',
                  boxShadow: SHADOW_CARD,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 16, marginBottom: 10, flexWrap: 'wrap' }}>
                  <h3 style={{
                    fontFamily: 'Manrope',
                    fontSize: 20,
                    fontWeight: 700,
                    color: '#15375c',
                    margin: 0,
                    letterSpacing: '-0.01em',
                  }}>
                    {d.name}
                  </h3>
                  <span style={{ fontSize: 12, fontWeight: 700, color: '#E85A2C', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                    {d.redLineTime}
                  </span>
                </div>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: '#1c2433', margin: '0 0 12px' }}>
                  {d.blurb}
                </p>
                <div style={{
                  background: '#f1f4f9',
                  padding: '10px 14px',
                  borderRadius: 6,
                  fontSize: 14,
                  lineHeight: 1.55,
                  color: '#1c2433',
                  marginBottom: 12,
                }}>
                  <strong style={{ color: '#15375c', fontWeight: 800, marginRight: 6 }}>Why we send guests here:</strong>
                  {d.whyYouShouldGo}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {d.goodFor.map(tag => (
                    <span
                      key={tag}
                      style={{
                        fontSize: 11,
                        fontWeight: 700,
                        color: '#15375c',
                        background: '#fff',
                        border: '1px solid #e6e8ec',
                        padding: '4px 10px',
                        borderRadius: 12,
                        letterSpacing: '0.04em',
                        textTransform: 'lowercase',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section style={{ padding: '72px 32px', background: '#fff' }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <div style={{ fontSize: 13, fontWeight: 800, letterSpacing: '0.22em', color: '#E85A2C', textTransform: 'uppercase', marginBottom: 14 }}>
            Common questions
          </div>
          <h2 style={{
            fontFamily: 'Manrope',
            fontWeight: 700,
            fontSize: 32,
            letterSpacing: '-0.015em',
            color: '#15375c',
            margin: '0 0 36px',
          }}>
            Everything guests ask us
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {neighborhoodFAQs.map(faq => (
              <div key={faq.question} style={{ paddingBottom: 24, borderBottom: '1px solid #eef0f3' }}>
                <h3 style={{
                  fontFamily: 'Manrope',
                  fontSize: 18,
                  fontWeight: 700,
                  color: '#15375c',
                  margin: '0 0 10px',
                  letterSpacing: '-0.01em',
                }}>
                  {faq.question}
                </h3>
                <p style={{ fontSize: 15.5, lineHeight: 1.7, color: '#1c2433', margin: 0 }}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA BACK TO BOOKING ============ */}
      <section style={{ padding: '64px 32px 80px', background: '#15375c', color: '#fff', textAlign: 'center' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: 40,
            lineHeight: 1.15,
            margin: '0 0 16px',
            letterSpacing: '-0.01em',
          }}>
            Come stay. We&apos;ll point you to the rest.
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: 'rgba(255,255,255,0.85)', margin: '0 0 32px' }}>
            Three private apartments across from Wrigley Field. Book direct and we&apos;ll personally make sure you
            see the Chicago worth seeing.
          </p>
          <Link
            href="/#booking"
            style={{
              display: 'inline-block',
              background: '#E85A2C',
              color: '#fff',
              padding: '18px 36px',
              borderRadius: 8,
              fontSize: 15,
              fontWeight: 800,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              textDecoration: 'none',
            }}
          >
            Check Availability →
          </Link>
        </div>
      </section>
    </div>
  )
}
