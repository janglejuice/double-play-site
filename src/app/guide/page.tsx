import Link from 'next/link'
import {
  spots,
  chicagoDestinations,
  heroStats,
  quickFacts,
  Spot,
} from '@/data/neighborhood'
import { neighborhoodFAQs } from '@/data/neighborhood-faqs'

export const metadata = {
  title: 'Wrigleyville Neighborhood Guide — Bars, Restaurants, Transit & Things to Do | Double Play at Wrigley',
  description:
    "Insider guide from your local hosts: where to drink, eat, get coffee, and explore in Wrigleyville, Chicago. Plus how to reach downtown, the Lakefront, O'Hare, and Lake Michigan from our apartments across from Wrigley Field.",
}

// ============ helpers ============
function findSpot(name: string): Spot | undefined {
  return spots.find(s => s.name === name)
}

function priceDots(level: number = 2) {
  return (
    <>
      <span style={{ color: level >= 1 ? '#15375c' : '#c8cdd6' }}>$</span>
      <span style={{ color: level >= 2 ? '#15375c' : '#c8cdd6' }}>$</span>
      <span style={{ color: level >= 3 ? '#15375c' : '#c8cdd6' }}>$</span>
    </>
  )
}

// Sections: design has 4 themed sections of places + 1 transit/explore
const BARS = ["Murphy's Bleachers", 'The Cubby Bear', 'Sluggers World Class Sports Bar']
const RESTAURANTS = ['Big Star Wrigleyville', 'Mordecai', 'Mia Francesca']
const COFFEE_BRUNCH = ['Intelligentsia Coffee', 'The Pony Inn', 'Dollop Coffee']

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

// ============ shared style tokens ============
const NAVY = '#15375c'
const NAVY_DEEP = '#0f2a48'
const NAVY_INK = '#0b1f36'
const ACCENT = '#E85A2C'
const INK = '#1c2433'
const MUTED = '#6b7585'
const LINE = '#e6e8ec'
const BG_SOFT = '#f5f6f8'
const BG_WARM = '#fdf6f1'
const SHADOW_CARD = '0 1px 2px rgba(15,42,72,.04), 0 12px 28px -12px rgba(15,42,72,.18)'

const WRAP: React.CSSProperties = { maxWidth: 1240, margin: '0 auto', padding: '0 40px' }

// ============ place card component ============
function PlaceCard({ spot }: { spot: Spot }) {
  return (
    <article style={{
      background: '#fff',
      borderRadius: 12,
      overflow: 'hidden',
      boxShadow: SHADOW_CARD,
      border: `1px solid #eef0f3`,
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* Photo placeholder */}
      <div style={{ aspectRatio: '3/2', position: 'relative', background: '#d8dce4', flex: 'none' }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'repeating-linear-gradient(135deg, #d4d9e2 0 14px, #c9cfd9 14px 28px)',
        }} />
        {spot.photoLabel && (
          <div style={{
            position: 'absolute',
            left: 12,
            bottom: 12,
            background: 'rgba(255,255,255,.92)',
            color: NAVY,
            fontFamily: 'ui-monospace, monospace',
            fontSize: 9.5,
            letterSpacing: '.07em',
            padding: '4px 8px',
            borderRadius: 4,
          }}>{spot.photoLabel}</div>
        )}
        {spot.hostPick && (
          <div style={{
            position: 'absolute',
            top: 12,
            right: 12,
            background: ACCENT,
            color: '#fff',
            fontSize: 9,
            fontWeight: 800,
            letterSpacing: '.15em',
            textTransform: 'uppercase',
            padding: '4px 10px',
            borderRadius: 100,
          }}>Host Pick</div>
        )}
      </div>

      {/* Body */}
      <div style={{ padding: '18px 20px 20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 9 }}>
          <span style={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: '.05em',
            background: '#eef2f8',
            color: NAVY,
            padding: '3px 9px',
            borderRadius: 100,
          }}>{spot.distance}</span>
          <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.04em' }}>
            {priceDots(spot.priceLevel)}
          </span>
        </div>
        <h3 style={{
          fontSize: 17,
          fontWeight: 800,
          color: NAVY,
          margin: '0 0 7px',
          letterSpacing: '-.01em',
          lineHeight: 1.25,
        }}>{spot.name}</h3>
        <p style={{
          fontSize: 13.5,
          color: MUTED,
          lineHeight: 1.65,
          margin: '0 0 14px',
          flex: 1,
        }}>{spot.description}</p>
        {spot.ourPick && (
          <div style={{ borderTop: `1px solid ${LINE}`, paddingTop: 12, marginTop: 'auto' }}>
            <div style={{
              fontSize: 9,
              fontWeight: 800,
              letterSpacing: '.18em',
              textTransform: 'uppercase',
              color: ACCENT,
              marginBottom: 4,
            }}>Host Tip</div>
            <div style={{ fontSize: 13, fontStyle: 'italic', color: INK, lineHeight: 1.5 }}>{spot.ourPick}</div>
          </div>
        )}
      </div>
    </article>
  )
}

// ============ section header component ============
function SectionHeader({
  kicker,
  title,
  description,
  light = false,
}: { kicker: string; title: string; description: string; light?: boolean }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      paddingBottom: 24,
      marginBottom: 36,
      borderBottom: `1px solid ${light ? 'rgba(255,255,255,.10)' : LINE}`,
      gap: 24,
      flexWrap: 'wrap',
    }}>
      <div>
        <div style={{
          fontSize: 11,
          fontWeight: 800,
          letterSpacing: '.22em',
          color: ACCENT,
          textTransform: 'uppercase',
          marginBottom: 6,
        }}>{kicker}</div>
        <h2 style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: 38,
          fontWeight: 400,
          color: light ? '#fff' : NAVY,
          margin: 0,
          letterSpacing: '-.01em',
        }}>{title}</h2>
      </div>
      <p style={{
        fontSize: 14,
        color: light ? 'rgba(255,255,255,.45)' : MUTED,
        maxWidth: 300,
        textAlign: 'right',
        lineHeight: 1.5,
        margin: 0,
      }}>{description}</p>
    </div>
  )
}

// ============ explore icon (svg helper) ============
function ExploreIcon({ children, feature = false }: { children: React.ReactNode; feature?: boolean }) {
  return (
    <div style={{
      width: 46,
      height: 46,
      borderRadius: 10,
      background: feature ? 'rgba(255,255,255,.10)' : 'rgba(232,90,44,.09)',
      flex: 'none',
      display: 'grid',
      placeItems: 'center',
    }}>
      <svg
        width={21}
        height={21}
        viewBox="0 0 24 24"
        fill="none"
        stroke={feature ? '#fff' : ACCENT}
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {children}
      </svg>
    </div>
  )
}

// ============ page ============
export default function NeighborhoodPage() {
  const bars = BARS.map(findSpot).filter(Boolean) as Spot[]
  const restaurants = RESTAURANTS.map(findSpot).filter(Boolean) as Spot[]
  const coffeeBrunch = COFFEE_BRUNCH.map(findSpot).filter(Boolean) as Spot[]

  return (
    <div style={{ background: '#fff', color: INK }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema()) }}
      />

      {/* ====================== HERO ====================== */}
      <section style={{
        background: NAVY_INK,
        padding: '88px 0 80px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ ...WRAP, position: 'relative', zIndex: 2 }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 360px',
            gap: 64,
            alignItems: 'end',
          }} className="hero-split-neighbor">
            <div>
              <div style={{
                fontSize: 11,
                fontWeight: 800,
                letterSpacing: '.22em',
                color: ACCENT,
                textTransform: 'uppercase',
                marginBottom: 16,
              }}>Wrigleyville · Chicago</div>
              <h1 style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: 62,
                lineHeight: 1.03,
                color: '#fff',
                margin: '0 0 22px',
                letterSpacing: '-.02em',
              }}>
                A real, lived-in guide<br />to our <em style={{ fontStyle: 'italic' }}>neighborhood.</em>
              </h1>
              <p style={{
                fontSize: 17,
                lineHeight: 1.7,
                color: 'rgba(255,255,255,.68)',
                maxWidth: 540,
                margin: 0,
              }}>
                We&apos;re your hosts at Double Play at Wrigley — three apartments directly across from
                Wrigley Field. We&apos;ve lived here for years. This is the same guide we hand every guest
                who asks <em style={{ color: 'rgba(255,255,255,.88)' }}>&quot;okay, what should we actually do?&quot;</em>
              </p>
            </div>

            {/* Stats panel */}
            <div style={{
              background: 'rgba(255,255,255,.05)',
              border: '1px solid rgba(255,255,255,.10)',
              borderRadius: 14,
              overflow: 'hidden',
            }} aria-label="Neighborhood quick facts">
              {heroStats.map((s, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '14px 20px',
                  borderBottom: i < heroStats.length - 1 ? '1px solid rgba(255,255,255,.07)' : 'none',
                }}>
                  <span style={{ fontSize: 12.5, color: 'rgba(255,255,255,.50)', fontWeight: 500 }}>{s.label}</span>
                  <span style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: s.highlight ? ACCENT : '#fff',
                    letterSpacing: '-.01em',
                  }}>{s.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====================== CATEGORY SUB-NAV ====================== */}
      <nav style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: '#fff',
        borderBottom: `1px solid ${LINE}`,
        boxShadow: '0 4px 20px -8px rgba(15,42,72,.10)',
      }} aria-label="Guide categories">
        <div style={{
          display: 'flex',
          alignItems: 'center',
          maxWidth: 1240,
          margin: '0 auto',
          padding: '0 40px',
          overflowX: 'auto',
        }}>
          {[
            ['Host Tips', '#tips'],
            ['The Neighborhood', '#overview'],
            ['Bars & Pregame', '#bars'],
            ['Restaurants', '#restaurants'],
            ['Coffee & Brunch', '#coffee'],
            ['Things To Do', '#explore'],
            ['Getting Around', '#transit'],
            ['FAQ', '#faq'],
          ].map(([label, href]) => (
            <a key={label} href={href} style={{
              display: 'inline-block',
              padding: '15px 18px',
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: '.08em',
              textTransform: 'uppercase',
              color: MUTED,
              whiteSpace: 'nowrap',
              borderBottom: '3px solid transparent',
              textDecoration: 'none',
            }}>{label}</a>
          ))}
        </div>
      </nav>

      {/* ====================== HOST TIPS ====================== */}
      <section id="tips" style={{ background: BG_WARM, padding: '80px 0' }}>
        <div style={WRAP}>
          <div style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            marginBottom: 32,
            gap: 24,
            flexWrap: 'wrap',
          }}>
            <div>
              <div style={{
                fontSize: 11,
                fontWeight: 800,
                letterSpacing: '.22em',
                color: ACCENT,
                textTransform: 'uppercase',
                marginBottom: 8,
              }}>From Your Hosts</div>
              <h2 style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: 36,
                fontWeight: 400,
                color: NAVY,
                margin: 0,
                letterSpacing: '-.01em',
              }}>Our top three pieces of advice</h2>
            </div>
            <div style={{ fontSize: 13, color: MUTED, textAlign: 'right', lineHeight: 1.5 }}>
              Your hosts, Double Play at Wrigley<br />
              <span style={{ opacity: 0.6 }}>Wrigleyville, Chicago, IL</span>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }} className="tips-grid">
            {[
              {
                num: '01',
                title: 'Skip the rental car.',
                body: (
                  <>
                    The Addison Red Line is directly across the street and runs 24/7. <strong style={{ color: INK }}>A CTA Ventra pass for 3 days is about $15.</strong> A single day of parking in Wrigleyville on a game day can run $60. You will spend more time parking than we spend walking to the park.
                  </>
                ),
              },
              {
                num: '02',
                title: 'Check Gallagher Way before you arrive.',
                body: (
                  <>
                    The plaza next to Wrigley hosts free concerts, yoga classes, outdoor movies, and a German Christmas market in winter. <strong style={{ color: INK }}>Half our guests discover there&apos;s a free show the night they arrive.</strong> Plan around it at gallagherway.com.
                  </>
                ),
              },
              {
                num: '03',
                title: 'Non-game days are often better.',
                body: (
                  <>
                    The restaurants on Clark Street are packed with locals year-round. <strong style={{ color: INK }}>Come on a Tuesday and you&apos;ll have Murphy&apos;s Bleachers mostly to yourself.</strong> Everything is easier, cheaper, and more genuinely Wrigleyville.
                  </>
                ),
              },
            ].map(tip => (
              <div key={tip.num} style={{
                background: '#fff',
                borderRadius: 12,
                padding: 28,
                border: '1px solid #f0e8e2',
                boxShadow: '0 1px 2px rgba(15,42,72,.03), 0 6px 18px -10px rgba(15,42,72,.10)',
              }}>
                <span style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: 56,
                  lineHeight: 1,
                  color: ACCENT,
                  opacity: 0.22,
                  marginBottom: 10,
                  display: 'block',
                }}>{tip.num}</span>
                <h3 style={{ fontSize: 16, fontWeight: 800, color: NAVY, margin: '0 0 9px' }}>{tip.title}</h3>
                <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.65, margin: 0 }}>{tip.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== OVERVIEW + QUICK FACTS SIDEBAR ====================== */}
      <section id="overview" style={{ padding: '88px 0' }}>
        <div style={WRAP}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 300px',
            gap: 72,
            alignItems: 'start',
          }} className="overview-grid">
            <div>
              <div style={{
                fontSize: 11,
                fontWeight: 800,
                letterSpacing: '.22em',
                color: ACCENT,
                textTransform: 'uppercase',
                marginBottom: 14,
              }}>What It&apos;s Actually Like</div>
              <h2 style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: 40,
                fontWeight: 400,
                color: NAVY,
                margin: '0 0 28px',
                letterSpacing: '-.015em',
                lineHeight: 1.15,
              }}>The neighborhood that grew up <em style={{ fontStyle: 'italic' }}>around a ballpark.</em></h2>
              <p style={{ fontSize: 16, lineHeight: 1.78, color: INK, margin: '0 0 18px' }}>
                Wrigleyville is the Chicago neighborhood that grew up around <strong style={{ color: NAVY }}>Wrigley Field</strong>, the second-oldest ballpark in America. On a game day, the streets fill with red and blue jerseys two hours before first pitch and stay loud until last call. Murphy&apos;s Bleachers spills onto Sheffield, the marquee at Clark and Addison glows, and the &quot;Go Cubs Go&quot; chant rolls out of every bar.
              </p>
              <div style={{ borderLeft: `3px solid ${ACCENT}`, padding: '2px 0 2px 22px', margin: '28px 0' }}>
                <p style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontStyle: 'italic',
                  fontSize: 21,
                  lineHeight: 1.4,
                  color: NAVY,
                  margin: 0,
                }}>&quot;But what surprises most of our guests is how great it is on non-game days.&quot;</p>
              </div>
              <p style={{ fontSize: 16, lineHeight: 1.78, color: INK, margin: '0 0 18px' }}>
                The restaurants on Clark Street are packed with locals year-round. <strong style={{ color: NAVY }}>Gallagher Way</strong>, the plaza next to the ballpark, hosts free concerts, yoga classes, outdoor movies, and a German Christmas market in winter. The Lakefront Trail is a 15-minute walk east.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.78, color: INK, margin: 0 }}>
                And we&apos;re a 15-minute train ride from downtown Chicago, the Art Institute, Lake Michigan&apos;s beaches, and the Magnificent Mile. You don&apos;t need a rental car. You don&apos;t need to plan. You just need to walk out the front door.
              </p>
            </div>
            <div>
              <div style={{
                background: NAVY,
                borderRadius: 14,
                padding: 26,
                color: '#fff',
                position: 'sticky',
                top: 120,
              }}>
                <h3 style={{
                  fontSize: 10,
                  letterSpacing: '.22em',
                  textTransform: 'uppercase',
                  color: ACCENT,
                  fontWeight: 800,
                  margin: '0 0 18px',
                }}>Quick Facts</h3>
                {quickFacts.map((f, i) => (
                  <div key={i} style={{
                    padding: '12px 0',
                    borderBottom: i < quickFacts.length - 1 ? '1px solid rgba(255,255,255,.08)' : 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                  }}>
                    <span style={{
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: '.12em',
                      textTransform: 'uppercase',
                      color: 'rgba(255,255,255,.40)',
                    }}>{f.label}</span>
                    <span style={{ fontSize: 14, fontWeight: 700, color: '#fff' }}>{f.value}</span>
                    <span style={{ fontSize: 11, color: 'rgba(255,255,255,.45)' }}>{f.sub}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================== BARS & PREGAME ====================== */}
      <section id="bars" style={{ padding: '80px 0', background: BG_SOFT }}>
        <div style={WRAP}>
          <SectionHeader
            kicker="01 — Bars & Pregame"
            title="Drink like a local."
            description="These are the bars we actually go to — not just the ones tourists find on their own."
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }} className="place-grid">
            {bars.map(spot => <PlaceCard key={spot.name} spot={spot} />)}
          </div>
        </div>
      </section>

      {/* ====================== RESTAURANTS ====================== */}
      <section id="restaurants" style={{ padding: '80px 0' }}>
        <div style={WRAP}>
          <SectionHeader
            kicker="02 — Restaurants"
            title="Where we actually eat."
            description="From pre-game bites to the date-night spot tourists never find."
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }} className="place-grid">
            {restaurants.map(spot => <PlaceCard key={spot.name} spot={spot} />)}
          </div>
        </div>
      </section>

      {/* ====================== COFFEE & BRUNCH ====================== */}
      <section id="coffee" style={{ padding: '80px 0', background: BG_SOFT }}>
        <div style={WRAP}>
          <SectionHeader
            kicker="03 — Coffee & Brunch"
            title="Morning done right."
            description="Pre-game prep and slow Sunday mornings, both covered."
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }} className="place-grid">
            {coffeeBrunch.map(spot => <PlaceCard key={spot.name} spot={spot} />)}
          </div>
        </div>
      </section>

      {/* ====================== THINGS TO DO (EXPLORE) ====================== */}
      <section id="explore" style={{ padding: '80px 0' }}>
        <div style={WRAP}>
          <SectionHeader
            kicker="04 — Things To Do"
            title="Beyond the game."
            description="Wrigleyville is a neighborhood, not just a destination. Here&apos;s what&apos;s around you."
          />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }} className="explore-grid">
            {/* Feature card — Gallagher Way */}
            <div style={{
              gridColumn: 'span 2',
              background: NAVY,
              borderRadius: 12,
              padding: 26,
              display: 'flex',
              gap: 18,
              alignItems: 'flex-start',
            }} className="explore-feature">
              <ExploreIcon feature>
                <rect x={3} y={5} width={18} height={16} rx={2} />
                <path d="M16 3v4M8 3v4M3 10h18" />
              </ExploreIcon>
              <div>
                <h3 style={{ fontSize: 16, fontWeight: 800, color: '#fff', margin: '0 0 6px' }}>Gallagher Way</h3>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,.62)', lineHeight: 1.65, margin: 0 }}>
                  The plaza right next to Wrigley Field hosts free concerts, outdoor yoga, outdoor movies, winter markets, and pop-up events year-round. Check gallagherway.com before you arrive — half our guests end up at a free event the first night.
                </p>
                <div style={{
                  marginTop: 10,
                  fontSize: 10.5,
                  fontWeight: 800,
                  letterSpacing: '.08em',
                  textTransform: 'uppercase',
                  color: ACCENT,
                }}>Steps from your door</div>
              </div>
            </div>

            {/* Standard cards */}
            {[
              {
                icon: (<><path d="M2 12c2-3 4-3 6 0s4 3 6 0 4-3 6 0M2 18c2-2 4-2 6 0s4 2 6 0 4-2 6 0" /></>),
                title: 'Lakefront Trail',
                body: '18 miles of uninterrupted path along Lake Michigan, 15 minutes east on foot. Grab a Divvy bike and ride north to Montrose Beach or south toward downtown.',
                dist: '15 min walk east',
              },
              {
                icon: (<><circle cx={12} cy={12} r={10} /><polyline points="12 6 12 12 16 14" /></>),
                title: 'Wrigley Field Tour',
                body: 'The behind-the-scenes tour covers the Cubs dugout, press box, broadcast booths, and the ivy-covered outfield wall. A must even if you&apos;re not a baseball fan.',
                dist: 'Across the street',
              },
              {
                icon: (<><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></>),
                title: 'Millennium Park & The Bean',
                body: 'Cloud Gate (The Bean), Crown Fountain, the Pritzker Pavilion, and free summer concerts. Take the Red Line south — 15 minutes and worth the ride every time.',
                dist: 'Red Line · 15 min south',
              },
              {
                icon: (<><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" /><circle cx={12} cy={10} r={3} /></>),
                title: 'Lincoln Park Zoo',
                body: 'One of the only free major zoos in the country, just south of us. The Lincoln Park Conservatory next door is also free and beautiful in any season.',
                dist: 'Red Line · 5 min south',
              },
            ].map((ec, i) => (
              <div key={i} style={{
                background: '#fff',
                borderRadius: 12,
                boxShadow: SHADOW_CARD,
                border: '1px solid #eef0f3',
                padding: 26,
                display: 'flex',
                gap: 18,
                alignItems: 'flex-start',
              }}>
                <ExploreIcon>{ec.icon}</ExploreIcon>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 800, color: NAVY, margin: '0 0 6px' }}>{ec.title}</h3>
                  <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.65, margin: 0 }}>{ec.body}</p>
                  <div style={{
                    marginTop: 10,
                    fontSize: 10.5,
                    fontWeight: 800,
                    letterSpacing: '.08em',
                    textTransform: 'uppercase',
                    color: ACCENT,
                  }}>{ec.dist}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== GETTING AROUND (TRANSIT) ====================== */}
      <section id="transit" style={{ background: NAVY_INK, padding: '80px 0' }}>
        <div style={WRAP}>
          <SectionHeader
            light
            kicker="05 — Getting Around"
            title="You don&apos;t need a car."
            description="Seriously. The Red Line gets you everywhere and Divvy bikes cover the rest."
          />
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 18,
            marginBottom: 18,
          }} className="transit-grid">
            {[
              {
                big: 'Across the street',
                title: 'Addison Red Line',
                body: 'The CTA Red Line stops at Addison, directly across the street from our front door. It runs 24/7 and connects directly to the Loop, Magnificent Mile, and both O\'Hare and Midway airports. A 3-day Ventra pass costs $15 and covers everything.',
                icon: (<><rect x={5} y={2} width={14} height={20} rx={2} /><line x1={12} y1={18} x2={12.01} y2={18} /><path d="M5 12h14M9 2v4M15 2v4" /></>),
              },
              {
                big: 'At your door',
                title: 'Divvy Bikes',
                body: "There's a Divvy bike-share station directly outside our building. Rent a regular or e-bike by the ride or get a day pass. The Lakefront Trail runs 18 flat miles — this is the best way to see Chicago's shoreline.",
                icon: (<><circle cx={18.5} cy={17.5} r={3.5} /><circle cx={5.5} cy={17.5} r={3.5} /><path d="M15 17.5H9M5.5 14V5a1 1 0 0 1 1-1h6.5l4 5v5.5" /></>),
              },
              {
                big: 'On demand',
                title: 'Rideshare & Taxi',
                body: 'Uber and Lyft work well in Wrigleyville. On game days, schedule your pickup on Roscoe Street — one block north — to skip the postgame chaos on Clark and Sheffield entirely.',
                icon: (<><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" /><circle cx={12} cy={10} r={3} /></>),
              },
            ].map((t, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,.06)',
                border: '1px solid rgba(255,255,255,.10)',
                borderRadius: 12,
                padding: 26,
              }}>
                <div style={{
                  width: 46,
                  height: 46,
                  borderRadius: 10,
                  background: ACCENT,
                  display: 'grid',
                  placeItems: 'center',
                  marginBottom: 16,
                }}>
                  <svg width={21} height={21} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                    {t.icon}
                  </svg>
                </div>
                <span style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: 34,
                  color: '#fff',
                  display: 'block',
                  marginBottom: 6,
                  letterSpacing: '-.02em',
                }}>{t.big}</span>
                <h3 style={{ fontSize: 16, fontWeight: 800, color: '#fff', margin: '0 0 8px' }}>{t.title}</h3>
                <p style={{ fontSize: 13.5, color: 'rgba(255,255,255,.55)', lineHeight: 1.65, margin: 0 }}>{t.body}</p>
              </div>
            ))}
          </div>
          <div style={{
            background: 'rgba(232,90,44,.10)',
            border: '1px solid rgba(232,90,44,.22)',
            borderRadius: 10,
            padding: '18px 22px',
            display: 'flex',
            alignItems: 'flex-start',
            gap: 14,
          }}>
            <div style={{
              width: 34,
              height: 34,
              borderRadius: 8,
              background: 'rgba(232,90,44,.18)',
              display: 'grid',
              placeItems: 'center',
              flex: 'none',
            }}>
              <svg width={17} height={17} viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth={2} strokeLinecap="round">
                <circle cx={12} cy={12} r={10} />
                <line x1={12} y1={8} x2={12} y2={12} />
                <line x1={12} y1={16} x2={12.01} y2={16} />
              </svg>
            </div>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,.72)', lineHeight: 1.65, margin: 0 }}>
              <strong style={{ color: '#fff' }}>A note on parking:</strong> Wrigleyville has almost no free parking, and game-day garages run $40–$60. A 3-day CTA Ventra pass costs $15 and gets you everywhere in the city. We have never once wished we&apos;d driven here. Leave the car at home.
            </p>
          </div>
        </div>
      </section>

      {/* ====================== FAQ (kept for GEO/AI citations) ====================== */}
      <section id="faq" style={{ padding: '80px 0', background: '#fff' }}>
        <div style={WRAP}>
          <SectionHeader
            kicker="06 — Common Questions"
            title="Everything guests ask us."
            description="The same questions we answer in every booking message. Answered in advance."
          />
          <div style={{ maxWidth: 880, display: 'flex', flexDirection: 'column', gap: 24 }}>
            {neighborhoodFAQs.map(faq => (
              <div key={faq.question} style={{ paddingBottom: 24, borderBottom: `1px solid ${LINE}` }}>
                <h3 style={{
                  fontFamily: 'Manrope',
                  fontSize: 17,
                  fontWeight: 800,
                  color: NAVY,
                  margin: '0 0 10px',
                  letterSpacing: '-.01em',
                }}>{faq.question}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.7, color: INK, margin: 0 }}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== CTA ====================== */}
      <section style={{ padding: '72px 0 88px', background: NAVY, color: '#fff', textAlign: 'center' }}>
        <div style={{ maxWidth: 720, margin: '0 auto', padding: '0 40px' }}>
          <h2 style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: 40,
            lineHeight: 1.15,
            margin: '0 0 16px',
            letterSpacing: '-.01em',
          }}>Come stay. We&apos;ll point you to the rest.</h2>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: 'rgba(255,255,255,.85)', margin: '0 0 32px' }}>
            Three private apartments across from Wrigley Field. Book direct and we&apos;ll personally make sure you see the Chicago worth seeing.
          </p>
          <Link
            href="/#booking"
            style={{
              display: 'inline-block',
              background: ACCENT,
              color: '#fff',
              padding: '18px 36px',
              borderRadius: 8,
              fontSize: 15,
              fontWeight: 800,
              letterSpacing: '.05em',
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
