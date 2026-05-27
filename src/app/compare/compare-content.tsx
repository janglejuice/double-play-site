import Image from 'next/image'
import Link from 'next/link'
import type { Unit } from '@/data/units'

interface CompareContentProps {
  units: Unit[]
}

// ── Design tokens ──────────────────────────────────────────────────────────
const NAVY      = '#15375c'
const NAVY_INK  = '#0b1f36'
const ACCENT    = '#E85A2C'
const ACCENT_DK = '#d04a1f'
const ACCENT_BG = 'rgba(232,90,44,0.07)'
const INK       = '#1c2433'
const MUTED     = '#6b7585'
const LINE      = '#e6e8ec'
const BG_SOFT   = '#f5f6f8'
const BG_WARM   = '#fdf6f1'
const CONFIRM   = '#23a06b'
const SHADOW_CARD = '0 1px 2px rgba(15,42,72,0.04), 0 12px 28px -12px rgba(15,42,72,0.18)'
const SHADOW_LG   = '0 2px 4px rgba(15,42,72,0.06), 0 24px 48px -18px rgba(15,42,72,0.26)'
const WRAP = { maxWidth: 1240, margin: '0 auto', padding: '0 32px' } as const

const FONT_DISPLAY = "'DM Serif Display', Georgia, serif"
const FONT_BODY    = "'Manrope', system-ui, sans-serif"

// ── Per-unit meta ──────────────────────────────────────────────────────────
type Slug = 'sluggers-suite' | 'bleacher-balcony-flat' | 'catbird-seat'

const FLOOR_LABEL: Record<string, string> = {
  'sluggers-suite':        'Garden Level',
  'bleacher-balcony-flat': 'First Floor',
  'catbird-seat':          'Top Floor',
}

const FLOOR_SUB: Record<string, string> = {
  'sluggers-suite':        'Half-basement, no stairs from sidewalk',
  'bleacher-balcony-flat': 'About 12 steps up from sidewalk',
  'catbird-seat':          'Corner-lot bay windows, most light',
}

type BadgeKind = 'closest' | 'classic' | 'flagship'
const BADGE: Record<string, { label: string; kind: BadgeKind }> = {
  'sluggers-suite':        { label: 'Closest to street', kind: 'closest'  },
  'bleacher-balcony-flat': { label: 'Classic floor',     kind: 'classic'  },
  'catbird-seat':          { label: 'Flagship',          kind: 'flagship' },
}

const SHORT_DESC: Record<string, string> = {
  'sluggers-suite':        "Garden-level apartment with the most direct access to the front door. Steps from the sidewalk, you are inside. Fastest in, fastest out on game day.",
  'bleacher-balcony-flat': "First-floor unit, raised a flight off the street. Two bedrooms, classic Wrigleyville feel, and the lowest-traffic floor of the three for sleeping in.",
  'catbird-seat':          "Top-floor flagship with 10-ft ceilings, corner-lot bay windows wrapping the dining room, and the brightest light in the building. Sleeps 5 in roughly 900 sqft.",
}

const BEST_FOR_LABEL: Record<string, string> = {
  'sluggers-suite':        'Best For',
  'bleacher-balcony-flat': 'Best For',
  'catbird-seat':          'Best For',
}

const BEST_FOR_TEXT: Record<string, string> = {
  'sluggers-suite':        'Quick in-and-out trips, anyone who hates stairs, and pre-game tailgates that spill onto the sidewalk.',
  'bleacher-balcony-flat': 'Guests who want the classic first-floor feel and the quietest sleep on the building.',
  'catbird-seat':          'Couples plus a friend, parties up to 5, and anyone who wants the room with the view and the light.',
}

// view dots (visual scale, not literal claims about Wrigley views)
const VIEW_DOTS: Record<string, number> = {
  'sluggers-suite':        1,
  'bleacher-balcony-flat': 2,
  'catbird-seat':          3,
}
const VIEW_NOTE: Record<string, string> = {
  'sluggers-suite':        'Sidewalk-level vantage',
  'bleacher-balcony-flat': 'Raised street outlook',
  'catbird-seat':          'Wraparound bay windows',
}

// noise (visual indicator only; 3 bars = loud, 1 bar = quietest)
const NOISE_BARS: Record<string, { bars: number; label: string }> = {
  'sluggers-suite':        { bars: 3, label: 'Street level'      },
  'bleacher-balcony-flat': { bars: 1, label: 'Quietest floor'    },
  'catbird-seat':          { bars: 2, label: 'Moderate, soundproofed bedrooms' },
}

const STAIRS: Record<string, string> = {
  'sluggers-suite':        'None to door',
  'bleacher-balcony-flat': 'About 12 steps',
  'catbird-seat':          'Two flights',
}

// Use-case Q&A
const USE_CASES = [
  {
    q: 'Best for groups of 5 or more',
    a: 'The Top Floor sleeps 5 in roughly 900 sqft. For larger groups, book multiple units in the same building. With all three, the building sleeps up to 13. Message us to coordinate.',
  },
  {
    q: 'Best for natural light and views',
    a: 'The Top Floor. Corner-lot location with huge bay-style windows and a wraparound dining area. You watch the Wrigleyville scene from your couch without stepping outside.',
  },
  {
    q: 'Best for couples or a couple plus friends',
    a: 'The Top Floor. Quietest floor for sleeping, 10-foot ceilings, soundproofed bedrooms, and enough space for a third or fourth guest.',
  },
  {
    q: 'Best for Cubs playoffs',
    a: 'All three apartments book fast for postseason. Same building, same 1-minute walk to the bleacher entrance. Book early, regardless of floor.',
  },
  {
    q: 'Best for remote work',
    a: 'The Top Floor has 300 Mbps WiFi and a dedicated workspace. Fast enough for video calls and a real desk if you need one.',
  },
  {
    q: 'Best for skipping the rental car',
    a: 'All three. The Addison Red Line is right next to the building: Loop in 15 minutes, both airports reachable on CTA. We always recommend skipping the car.',
  },
]

// FAQ
const FAQS = [
  {
    q: 'Are all three apartments in the same building?',
    a: 'Yes. All three units are at 3601 N Sheffield Ave, directly across from Wrigley Field. Different floors, same front door, same location.',
  },
  {
    q: 'Which apartment is closest to Wrigley Field?',
    a: "All three are about a 1-minute walk from the bleacher entrance. They share the same building, so proximity is identical. What varies is the floor: Garden Level, First Floor, and Top Floor.",
  },
  {
    q: 'Can I book 2 or 3 apartments together?',
    a: "Yes. Block bookings work for wedding parties, family reunions, and fantasy baseball trips. All three booked together sleeps up to 13. Message us to coordinate dates and pricing.",
  },
  {
    q: 'Are the apartments identical inside?',
    a: "Same building, all 2-bedroom 1-bath, but each floor has its own layout. The Top Floor has 10-foot ceilings and corner-lot bay windows. Full details on each unit page.",
  },
  {
    q: 'Do all three include the same amenities?',
    a: 'All three have full kitchens, fast WiFi, smart TVs, central AC, and smart-lock self check-in. See each unit page for the complete amenity list.',
  },
]

// JSON-LD
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',    item: 'https://doubleplaywrigley.com' },
    { '@type': 'ListItem', position: 2, name: 'Compare', item: 'https://doubleplaywrigley.com/compare' },
  ],
}
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

// ── Small helpers ──────────────────────────────────────────────────────────
function badgeStyle(kind: BadgeKind): React.CSSProperties {
  if (kind === 'closest') return { background: NAVY_INK, color: '#fff' }
  if (kind === 'classic') return { background: '#fff',    color: NAVY, border: `1.5px solid ${LINE}` }
  return { background: ACCENT, color: '#fff' }
}

function ViewDots({ on, total = 3 }: { on: number; total?: number }) {
  return (
    <span style={{ display: 'inline-flex', gap: 5, alignItems: 'center' }} aria-label={`${on} out of ${total}`}>
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={i}
          style={{
            width: 10,
            height: 10,
            borderRadius: '50%',
            background: i < on ? ACCENT : '#dde2e9',
          }}
        />
      ))}
    </span>
  )
}

function NoiseBar({ bars }: { bars: number }) {
  return (
    <span style={{ display: 'inline-flex', gap: 3, alignItems: 'center' }} aria-label={`Noise level ${bars} of 3`}>
      {Array.from({ length: 3 }).map((_, i) => {
        const on = i < bars
        return (
          <span
            key={i}
            style={{
              width: 26,
              height: 6,
              borderRadius: 3,
              background: on ? (bars === 3 ? ACCENT : NAVY) : '#dde2e9',
            }}
          />
        )
      })}
    </span>
  )
}

function Check({ yes }: { yes: boolean }) {
  if (yes) {
    return (
      <span style={{ display: 'inline-flex' }} aria-label="Yes">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={CONFIRM} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </span>
    )
  }
  return (
    <span style={{ display: 'inline-flex' }} aria-label="No">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c8cdd6" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </span>
  )
}

// Eyebrow text shared by sections
function Eyebrow({ children, color = ACCENT, mb = 14 }: { children: React.ReactNode; color?: string; mb?: number }) {
  return (
    <div style={{
      fontSize: 10.5,
      fontWeight: 800,
      letterSpacing: '0.22em',
      color,
      textTransform: 'uppercase' as const,
      marginBottom: mb,
    }}>
      {children}
    </div>
  )
}

// ── Shared amenities (in-design icon set, replicated as inline SVG) ────────
const SHARED_AMENITIES: { name: string; svg: React.ReactNode }[] = [
  { name: 'Smart TV',           svg: (<><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></>) },
  { name: 'High-Speed WiFi',    svg: (<><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><circle cx="12" cy="20" r="1" fill={ACCENT} stroke="none"/></>) },
  { name: 'Full Kitchen',       svg: (<><path d="M4 3h16v6H4z"/><path d="M4 9v12h16V9"/><path d="M9 14h6"/></>) },
  { name: 'Keypad Entry',       svg: (<><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></>) },
  { name: 'Washer & Dryer',     svg: (<><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="12" cy="13" r="5"/><circle cx="7" cy="6.5" r="0.6" fill={ACCENT} stroke="none"/></>) },
  { name: 'A/C and Heating',    svg: (<><path d="M12 2v5M12 17v5M4.22 4.22l3.54 3.54M16.24 16.24l3.54 3.54M2 12h5M17 12h5M4.22 19.78l3.54-3.54M16.24 7.76l3.54-3.54"/></>) },
  { name: 'Host Support 24/7',  svg: (<><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.57 3.42 2 2 0 0 1 3.55 1h3a2 2 0 0 1 2 1.72 13 13 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.4a16 16 0 0 0 5.37 5.37l.87-.87a2 2 0 0 1 2.11-.45 13 13 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></>) },
  { name: 'No Booking Fees',    svg: (<><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></>) },
]

// ─────────────────────────────────────────────────────────────────────────
export default function CompareContent({ units }: CompareContentProps) {
  // Map units by slug for the table; preserve input order for cards
  const orderedSlugs: Slug[] = ['sluggers-suite', 'bleacher-balcony-flat', 'catbird-seat']
  const bySlug = Object.fromEntries(units.map(u => [u.slug, u])) as Record<string, Unit>

  return (
    <div style={{ fontFamily: FONT_BODY, color: INK, background: '#fff' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ════════════════════════════════ HERO ════════════════════════════════ */}
      <section style={{
        position: 'relative',
        overflow: 'hidden',
        background: NAVY_INK,
        color: '#fff',
        padding: '140px 0 88px',
      }}>
        {/* grid texture overlay */}
        <div aria-hidden style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px)',
          backgroundSize: '52px 52px',
        }} />
        <div style={{ ...WRAP, position: 'relative', zIndex: 2 }}>
          <Eyebrow>Three Apartments · One Building · Zero Booking Fees</Eyebrow>
          <h1 style={{
            fontFamily: FONT_DISPLAY,
            fontWeight: 400,
            fontSize: 'clamp(38px, 5.4vw, 60px)',
            lineHeight: 1.04,
            letterSpacing: '-0.02em',
            margin: '0 0 18px',
            color: '#fff',
            maxWidth: 760,
          }}>
            Find your <em style={{ fontStyle: 'italic' }}>perfect unit.</em>
          </h1>
          <p style={{
            fontSize: 17,
            lineHeight: 1.65,
            color: 'rgba(255,255,255,0.62)',
            maxWidth: 540,
            margin: 0,
          }}>
            Same great location, directly across from Wrigley Field. Very different floors. Here is how to pick.
          </p>

          {/* Jump pills */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 32, flexWrap: 'wrap' }}>
            {[
              { href: '#cards',     label: 'See all three',     dot: '#fff' },
              { href: '#table',     label: 'Side by side table', dot: ACCENT },
              { href: '#book',      label: 'Book direct',        dot: CONFIRM },
            ].map(j => (
              <a key={j.href} href={j.href} style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '10px 18px', borderRadius: 100,
                fontSize: 12.5, fontWeight: 700, letterSpacing: '0.03em',
                border: '1.5px solid rgba(255,255,255,0.2)',
                color: 'rgba(255,255,255,0.78)',
                background: 'rgba(255,255,255,0.04)',
                textDecoration: 'none',
              }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: j.dot }} />
                {j.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════ UNIT CARDS ════════════════════════════════ */}
      <section id="cards" style={{ padding: '72px 0 88px', background: '#fff' }}>
        <div style={WRAP}>
          <div
            className="dp-compare-cards"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 24,
            }}
          >
            {orderedSlugs.map(slug => {
              const u = bySlug[slug]
              if (!u) return null
              const badge = BADGE[slug]
              const isFlagship = slug === 'catbird-seat'
              return (
                <article
                  key={slug}
                  style={{
                    position: 'relative',
                    background: '#fff',
                    borderRadius: 12,
                    boxShadow: isFlagship
                      ? `0 0 0 2px ${ACCENT}, ${SHADOW_LG}`
                      : SHADOW_CARD,
                    border: isFlagship ? `1px solid rgba(232,90,44,0.30)` : `1px solid #eef0f3`,
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  {/* Badge */}
                  <div style={{
                    position: 'absolute', top: 14, left: 14, zIndex: 5,
                    fontSize: 9.5, fontWeight: 800, letterSpacing: '0.16em',
                    textTransform: 'uppercase' as const,
                    padding: '5px 11px', borderRadius: 100,
                    ...badgeStyle(badge.kind),
                  }}>
                    {badge.label}
                  </div>

                  {/* Photo */}
                  <div style={{
                    position: 'relative',
                    aspectRatio: '4 / 3',
                    background: '#d8dce4',
                    overflow: 'hidden',
                    flex: 'none',
                  }}>
                    <Image
                      src={u.photos[0]}
                      alt={`${FLOOR_LABEL[slug]} apartment at Double Play at Wrigley`}
                      fill
                      sizes="(max-width: 1100px) 100vw, 33vw"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>

                  {/* Body */}
                  <div style={{
                    padding: '24px 24px 28px',
                    display: 'flex', flexDirection: 'column', flex: 1,
                  }}>
                    <div style={{
                      fontSize: 10, fontWeight: 800, letterSpacing: '0.2em',
                      textTransform: 'uppercase' as const, color: MUTED, marginBottom: 6,
                    }}>
                      {FLOOR_LABEL[slug]} · {FLOOR_SUB[slug]}
                    </div>

                    <h2 style={{
                      fontFamily: FONT_DISPLAY,
                      fontWeight: 400,
                      fontSize: 26,
                      color: NAVY,
                      margin: '0 0 10px',
                      letterSpacing: '-0.01em',
                      lineHeight: 1.2,
                    }}>
                      {u.name}
                    </h2>

                    <p style={{
                      fontSize: 14, color: MUTED, lineHeight: 1.65, margin: '0 0 18px',
                    }}>
                      {SHORT_DESC[slug]}
                    </p>

                    {/* View row */}
                    <div style={{
                      display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18,
                    }}>
                      <span style={{
                        fontSize: 11, fontWeight: 700, letterSpacing: '0.1em',
                        textTransform: 'uppercase' as const, color: MUTED,
                      }}>
                        Light
                      </span>
                      <ViewDots on={VIEW_DOTS[slug]} />
                      <span style={{ fontSize: 12, color: MUTED, fontWeight: 600 }}>
                        {VIEW_NOTE[slug]}
                      </span>
                    </div>

                    {/* Stat pills */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginBottom: 22 }}>
                      <span style={pillStyle()}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={MUTED} strokeWidth="2" strokeLinecap="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>
                        {u.beds} Bedrooms
                      </span>
                      <span style={pillStyle()}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={MUTED} strokeWidth="2" strokeLinecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
                        Sleeps {u.sleeps}
                      </span>
                      {u.sqft ? (
                        <span style={pillStyle(true)}>
                          {u.sqft} sqft
                        </span>
                      ) : (
                        <span style={pillStyle()}>
                          {FLOOR_LABEL[slug]}
                        </span>
                      )}
                    </div>

                    {/* CTAs */}
                    <Link
                      href={`/units/${u.slug}`}
                      style={{
                        display: 'block', textAlign: 'center',
                        background: ACCENT, color: '#fff',
                        padding: '14px 18px', borderRadius: 8,
                        fontWeight: 800, fontSize: 14, letterSpacing: '0.02em',
                        textDecoration: 'none', marginBottom: 10,
                      }}
                    >
                      Book {FLOOR_LABEL[slug]}
                    </Link>
                    <Link
                      href={`/units/${u.slug}`}
                      style={{
                        display: 'block', textAlign: 'center',
                        border: `1.5px solid ${LINE}`, color: NAVY,
                        padding: '12px 18px', borderRadius: 8,
                        fontWeight: 700, fontSize: 13.5, textDecoration: 'none',
                      }}
                    >
                      View Details
                    </Link>

                    {/* Best for */}
                    <div style={{
                      marginTop: 16, paddingTop: 16, borderTop: `1px solid ${LINE}`,
                    }}>
                      <div style={{
                        fontSize: 9, fontWeight: 800, letterSpacing: '0.2em',
                        textTransform: 'uppercase' as const, color: ACCENT, marginBottom: 4,
                      }}>
                        {BEST_FOR_LABEL[slug]}
                      </div>
                      <div style={{
                        fontSize: 13.5, fontStyle: 'italic', color: NAVY, lineHeight: 1.45,
                      }}>
                        {BEST_FOR_TEXT[slug]}
                      </div>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════ COMPARISON TABLE ════════════════════════════════ */}
      <section id="table" style={{ padding: '0 0 96px', background: '#fff' }}>
        <div style={WRAP}>
          <div style={{ textAlign: 'center', padding: '40px 0 40px' }}>
            <Eyebrow>Every detail, side by side</Eyebrow>
            <h2 style={{
              fontFamily: FONT_DISPLAY,
              fontWeight: 400,
              fontSize: 'clamp(28px, 3.4vw, 40px)',
              color: NAVY,
              margin: '0 0 10px',
              letterSpacing: '-0.015em',
              lineHeight: 1.15,
            }}>
              Full comparison
            </h2>
            <p style={{ fontSize: 15, color: MUTED, margin: 0 }}>
              Same building, three distinct experiences. Here is every difference that matters.
            </p>
          </div>

          <div style={{
            borderRadius: 12,
            overflow: 'hidden',
            border: `1px solid ${LINE}`,
            boxShadow: SHADOW_LG,
          }}>
            <div style={{ overflowX: 'auto' }}>
              <table style={{
                width: '100%',
                borderCollapse: 'separate',
                borderSpacing: 0,
                fontSize: 14,
                tableLayout: 'fixed',
                minWidth: 760,
              }}>
                <colgroup>
                  <col style={{ width: '22%' }} />
                  <col style={{ width: '26%' }} />
                  <col style={{ width: '26%' }} />
                  <col style={{ width: '26%' }} />
                </colgroup>
                <thead>
                  <tr>
                    <th aria-label="Feature" style={{
                      background: BG_SOFT,
                      borderRight: `1px solid ${LINE}`,
                      padding: 0,
                      verticalAlign: 'bottom',
                    }} />
                    {orderedSlugs.map((slug, i) => {
                      const u = bySlug[slug]
                      if (!u) return null
                      const isRec = slug === 'catbird-seat'
                      const badge = BADGE[slug]
                      const isLast = i === orderedSlugs.length - 1
                      return (
                        <th key={slug} style={{
                          padding: 0,
                          background: isRec ? '#fffaf8' : '#fff',
                          borderRight: isLast ? 0 : `1px solid ${LINE}`,
                          verticalAlign: 'bottom',
                        }}>
                          <div style={{ height: 80, overflow: 'hidden', position: 'relative', background: '#d8dce4' }}>
                            <Image
                              src={u.photos[0]}
                              alt=""
                              fill
                              sizes="(max-width: 1100px) 25vw, 200px"
                              style={{ objectFit: 'cover', objectPosition: 'center 35%' }}
                            />
                          </div>
                          <div style={{
                            padding: '14px 18px',
                            borderTop: `1px solid ${LINE}`,
                            borderBottom: `1px solid ${LINE}`,
                            background: isRec ? '#fffaf8' : '#fff',
                          }}>
                            <span style={{
                              fontSize: 9, fontWeight: 800, letterSpacing: '0.18em',
                              textTransform: 'uppercase' as const,
                              padding: '3px 9px', borderRadius: 100,
                              display: 'inline-block', marginBottom: 6,
                              ...badgeStyle(badge.kind),
                            }}>
                              {badge.label}
                            </span>
                            <div style={{
                              fontWeight: 800, fontSize: 14, color: NAVY,
                              lineHeight: 1.25, marginBottom: 2,
                            }}>
                              {u.name}
                            </div>
                            <div style={{ fontSize: 11.5, fontWeight: 600, color: MUTED, marginBottom: 10 }}>
                              {FLOOR_LABEL[slug]}
                            </div>
                            <Link
                              href={`/units/${u.slug}`}
                              style={{
                                display: 'block', textAlign: 'center',
                                background: ACCENT, color: '#fff',
                                padding: '9px 14px', borderRadius: 6,
                                fontWeight: 800, fontSize: 12, letterSpacing: '0.03em',
                                textDecoration: 'none',
                              }}
                            >
                              Book Now
                            </Link>
                          </div>
                        </th>
                      )
                    })}
                  </tr>
                </thead>
                <tbody>
                  {/* ── THE FLOOR ── */}
                  <GroupRow>The Floor</GroupRow>
                  <BodyRow label="Floor" cells={orderedSlugs.map(s => (
                    s === 'catbird-seat'
                      ? { node: <span style={{ fontWeight: 700, color: NAVY }}>Top Floor</span>, note: 'most light' }
                      : s === 'bleacher-balcony-flat'
                        ? { node: <span>First Floor</span>, note: 'classic raised entry' }
                        : { node: <span style={{ fontWeight: 700, color: ACCENT }}>Garden Level</span>, note: 'no stairs from sidewalk' }
                  ))} />
                  <BodyRow label="Stairs to unit" cells={orderedSlugs.map(s => ({ node: STAIRS[s] }))} />
                  <BodyRow label="Approx. size" cells={orderedSlugs.map(s => {
                    const u = bySlug[s]
                    return u.sqft
                      ? { node: <span style={{ fontWeight: 700, color: NAVY }}>{u.sqft} sqft</span> }
                      : { node: <span style={{ color: MUTED }}>Coming soon</span> }
                  })} />

                  {/* ── LIGHT & FEEL ── */}
                  <GroupRow>Light and Feel</GroupRow>
                  <BodyRow label="Natural light" cells={orderedSlugs.map(s => ({ node: <ViewDots on={VIEW_DOTS[s]} /> }))} />
                  <BodyRow label="Vantage" cells={orderedSlugs.map(s => ({
                    node: (
                      <span style={{ fontWeight: s === 'catbird-seat' ? 700 : 400, color: s === 'catbird-seat' ? NAVY : INK }}>
                        {VIEW_NOTE[s]}
                      </span>
                    ),
                  }))} />
                  <BodyRow label="Noise at night" cells={orderedSlugs.map(s => ({
                    node: <NoiseBar bars={NOISE_BARS[s].bars} />, note: NOISE_BARS[s].label,
                  }))} />

                  {/* ── THE SPACE ── */}
                  <GroupRow>The Space</GroupRow>
                  <BodyRow label="Bedrooms"   cells={orderedSlugs.map(s => ({ node: String(bySlug[s].beds) }))} />
                  <BodyRow label="Bathrooms"  cells={orderedSlugs.map(s => ({ node: String(bySlug[s].baths) }))} />
                  <BodyRow label="Max guests" cells={orderedSlugs.map(s => ({
                    node: s === 'catbird-seat'
                      ? <span style={{ fontWeight: 700, color: ACCENT }}>{bySlug[s].sleeps}</span>
                      : String(bySlug[s].sleeps),
                  }))} />
                  <BodyRow label="Full kitchen" cells={orderedSlugs.map(() => ({ node: <Check yes /> }))} />

                  {/* ── BOOKING ── */}
                  <GroupRow>Booking</GroupRow>
                  <BodyRow label="Self check-in"        cells={orderedSlugs.map(() => ({ node: <Check yes /> }))} />
                  <BodyRow label="No service fees"      cells={orderedSlugs.map(() => ({ node: <Check yes /> }))} />
                  <BodyRow label="Live rate via widget" cells={orderedSlugs.map(s => ({
                    node: bySlug[s].hospitable_property_id
                      ? <Check yes />
                      : <span style={{ fontSize: 12, color: MUTED }}>Inquire</span>,
                  }))} />

                  {/* ── CTA ROW ── */}
                  <tr>
                    <td style={{
                      padding: '20px 18px', background: '#fff',
                      borderRight: `1px solid ${LINE}`, borderTop: `1px solid ${LINE}`,
                    }} />
                    {orderedSlugs.map((s, i) => {
                      const u = bySlug[s]
                      const isRec = s === 'catbird-seat'
                      const isLast = i === orderedSlugs.length - 1
                      return (
                        <td key={s} style={{
                          padding: '20px 18px',
                          background: isRec ? '#fffaf8' : '#fff',
                          borderRight: isLast ? 0 : `1px solid ${LINE}`,
                          borderTop: `1px solid ${LINE}`,
                        }}>
                          <Link
                            href={`/units/${u.slug}`}
                            style={{
                              display: 'block', textAlign: 'center',
                              background: ACCENT, color: '#fff',
                              padding: '12px 14px', borderRadius: 8,
                              fontWeight: 800, fontSize: 13,
                              letterSpacing: '0.02em', textDecoration: 'none',
                            }}
                          >
                            Book {FLOOR_LABEL[s]}
                          </Link>
                        </td>
                      )
                    })}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════ SHARED AMENITIES ════════════════════════════════ */}
      <section style={{ background: BG_SOFT, padding: '64px 0 80px' }}>
        <div style={WRAP}>
          <div style={{ textAlign: 'center', marginBottom: 36 }}>
            <Eyebrow mb={10}>Included in every unit</Eyebrow>
            <h2 style={{
              fontFamily: FONT_DISPLAY,
              fontWeight: 400,
              fontSize: 32,
              color: NAVY,
              margin: '0 0 8px',
              letterSpacing: '-0.01em',
            }}>
              All three apartments include
            </h2>
            <p style={{ fontSize: 14, color: MUTED, margin: 0 }}>
              These are the same across every floor. You will not need to trade off on any of them.
            </p>
          </div>
          <div
            className="dp-compare-amenities"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}
          >
            {SHARED_AMENITIES.map(a => (
              <div key={a.name} style={{
                background: '#fff', borderRadius: 10,
                border: `1px solid ${LINE}`, padding: '18px 20px',
                display: 'flex', alignItems: 'center', gap: 12,
              }}>
                <div style={{
                  width: 38, height: 38, borderRadius: 8,
                  background: ACCENT_BG,
                  display: 'grid', placeItems: 'center', flex: 'none',
                }}>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                    {a.svg}
                  </svg>
                </div>
                <span style={{ fontSize: 13.5, fontWeight: 700, color: NAVY }}>{a.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════ FIND YOUR FIT (Q&A) ════════════════════════════════ */}
      <section style={{ padding: '80px 0 64px', background: '#fff' }}>
        <div style={WRAP}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <Eyebrow>Quick takes</Eyebrow>
            <h2 style={{
              fontFamily: FONT_DISPLAY,
              fontWeight: 400,
              fontSize: 'clamp(28px, 3.4vw, 38px)',
              color: NAVY,
              margin: 0,
              letterSpacing: '-0.015em',
            }}>
              Find your fit
            </h2>
          </div>

          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            {USE_CASES.map((item, i) => (
              <div
                key={i}
                style={{
                  paddingTop: i === 0 ? 0 : 26,
                  paddingBottom: 26,
                  borderTop: i === 0 ? 'none' : `1px solid ${LINE}`,
                }}
              >
                <h3 style={{
                  fontFamily: FONT_BODY,
                  fontWeight: 800, fontSize: 17,
                  color: NAVY, margin: '0 0 8px',
                  letterSpacing: '-0.005em',
                }}>
                  {item.q}
                </h3>
                <p style={{ fontSize: 15, color: INK, lineHeight: 1.7, margin: 0 }}>
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════ GROUP BOOKING (warm) ════════════════════════════════ */}
      <section style={{ padding: '64px 0 80px', background: BG_WARM }}>
        <div style={WRAP}>
          <div style={{ maxWidth: 720, margin: '0 auto' }}>
            <Eyebrow>Larger groups</Eyebrow>
            <h2 style={{
              fontFamily: FONT_DISPLAY,
              fontWeight: 400,
              fontSize: 'clamp(28px, 3.4vw, 40px)',
              color: NAVY,
              margin: '0 0 18px',
              lineHeight: 1.1,
              letterSpacing: '-0.01em',
            }}>
              Booking multiple units for a bigger group?
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: INK, margin: '0 0 28px' }}>
              We host larger groups by booking all 3 apartments together. All three booked sleeps up to 13. Message us directly and we will coordinate dates, pricing, and any group requests. Block bookings often come with a small direct-booking discount.
            </p>
            <a
              href="mailto:stay@doubleplaywrigley.com"
              style={{
                display: 'inline-block', background: NAVY, color: '#fff',
                padding: '14px 28px', borderRadius: 8,
                fontSize: 13, fontWeight: 700, letterSpacing: '0.06em',
                textDecoration: 'none',
              }}
            >
              Message us
            </a>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════ FAQ ════════════════════════════════ */}
      <section style={{ padding: '80px 0', background: BG_SOFT }}>
        <div style={WRAP}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <Eyebrow>FAQ</Eyebrow>
            <h2 style={{
              fontFamily: FONT_DISPLAY,
              fontWeight: 400,
              fontSize: 'clamp(28px, 3.4vw, 38px)',
              color: NAVY,
              margin: 0,
              letterSpacing: '-0.015em',
            }}>
              Common questions
            </h2>
          </div>

          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            {FAQS.map((faq, i) => (
              <div
                key={i}
                style={{
                  paddingTop: i === 0 ? 0 : 26,
                  paddingBottom: 26,
                  borderTop: i === 0 ? 'none' : `1px solid ${LINE}`,
                }}
              >
                <h3 style={{
                  fontFamily: FONT_BODY,
                  fontWeight: 700, fontSize: 17,
                  color: NAVY, margin: '0 0 10px',
                }}>
                  {faq.q}
                </h3>
                <p style={{ fontSize: 15, color: INK, lineHeight: 1.7, margin: 0 }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════ FINAL CTA ════════════════════════════════ */}
      <section id="book" style={{
        position: 'relative', overflow: 'hidden',
        background: NAVY_INK, color: '#fff',
        padding: '88px 0 96px',
      }}>
        <div aria-hidden style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '52px 52px',
        }} />
        <div style={{ ...WRAP, position: 'relative', zIndex: 2 }}>
          <div style={{ textAlign: 'center' }}>
            <Eyebrow mb={12}>Book direct, save the fees</Eyebrow>
            <h2 style={{
              fontFamily: FONT_DISPLAY,
              fontWeight: 400,
              fontSize: 'clamp(30px, 3.6vw, 44px)',
              color: '#fff',
              margin: '0 0 14px',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
            }}>
              Ready to book?
            </h2>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.55)', margin: '0 0 36px' }}>
              Skip the platform fees. Confirm instantly. Walk to the game.
            </p>
          </div>

          <div
            className="dp-compare-final-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 18,
              maxWidth: 980,
              margin: '0 auto',
            }}
          >
            {orderedSlugs.map(slug => {
              const u = bySlug[slug]
              if (!u) return null
              const isRec = slug === 'catbird-seat'
              return (
                <div key={slug} style={{
                  background: isRec ? 'rgba(232,90,44,0.10)' : 'rgba(255,255,255,0.05)',
                  border: isRec
                    ? '1px solid rgba(232,90,44,0.30)'
                    : '1px solid rgba(255,255,255,0.12)',
                  borderRadius: 12,
                  padding: 26,
                  textAlign: 'left',
                  display: 'flex', flexDirection: 'column',
                }}>
                  <div style={{ fontSize: 16, fontWeight: 800, color: '#fff', marginBottom: 4 }}>
                    {u.name}
                  </div>
                  <div style={{
                    fontSize: 11, fontWeight: 700, letterSpacing: '0.12em',
                    textTransform: 'uppercase' as const, color: 'rgba(255,255,255,0.45)',
                    marginBottom: 14,
                  }}>
                    {FLOOR_LABEL[slug]} · {BADGE[slug].label}
                  </div>
                  <div style={{
                    fontFamily: FONT_DISPLAY,
                    fontSize: 26, color: '#fff',
                    letterSpacing: '-0.02em',
                    marginBottom: 22,
                  }}>
                    {u.sqft ? `${u.sqft}` : FLOOR_LABEL[slug]}
                    <span style={{
                      fontFamily: FONT_BODY, fontSize: 13,
                      color: 'rgba(255,255,255,0.45)', fontWeight: 600,
                    }}>
                      {u.sqft ? ' sqft' : ''}
                    </span>
                  </div>
                  <Link
                    href={`/units/${u.slug}`}
                    style={{
                      display: 'block', textAlign: 'center',
                      background: isRec ? ACCENT : '#fff',
                      color: isRec ? '#fff' : NAVY,
                      padding: '13px 18px', borderRadius: 8,
                      fontWeight: 800, fontSize: 13.5, textDecoration: 'none',
                      marginTop: 'auto',
                    }}
                  >
                    {isRec ? 'Book the flagship' : `Book ${FLOOR_LABEL[slug]}`}
                  </Link>
                </div>
              )
            })}
          </div>

          <div style={{
            marginTop: 28, fontSize: 12,
            color: 'rgba(255,255,255,0.40)',
            textAlign: 'center',
          }}>
            All three available at <strong style={{ color: 'rgba(255,255,255,0.7)' }}>doubleplaywrigley.com</strong>
            {' '}· Instant confirmation · No service fees
          </div>
        </div>
      </section>

      {/* ── responsive overrides via inline style tag (single static stylesheet) ── */}
      <style>{`
        @media (max-width: 1100px) {
          .dp-compare-cards     { grid-template-columns: 1fr !important; gap: 20px !important; }
          .dp-compare-amenities { grid-template-columns: repeat(2, 1fr) !important; }
          .dp-compare-final-grid{ grid-template-columns: 1fr !important; max-width: 440px !important; }
        }
        @media (max-width: 680px) {
          .dp-compare-amenities { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </div>
  )
}

// ── small style helpers ────────────────────────────────────────────────────
function pillStyle(accent = false): React.CSSProperties {
  return {
    display: 'inline-flex', alignItems: 'center', gap: 5,
    padding: '5px 11px', borderRadius: 100,
    background: accent ? ACCENT_BG : BG_SOFT,
    border: accent ? '1px solid rgba(232,90,44,0.20)' : `1px solid ${LINE}`,
    fontSize: 12, fontWeight: 700,
    color: accent ? ACCENT : NAVY,
  }
}

// ── Table sub-components ───────────────────────────────────────────────────
function GroupRow({ children }: { children: React.ReactNode }) {
  return (
    <tr>
      <td colSpan={4} style={{
        background: NAVY,
        color: '#fff',
        fontSize: 10,
        fontWeight: 800,
        letterSpacing: '0.2em',
        textTransform: 'uppercase' as const,
        padding: '9px 18px',
        borderBottom: 0,
      }}>
        {children}
      </td>
    </tr>
  )
}

interface Cell { node: React.ReactNode; note?: string }

function BodyRow({ label, cells }: { label: string; cells: Cell[] }) {
  return (
    <tr>
      <td style={{
        padding: '14px 18px',
        background: BG_SOFT,
        borderRight: `1px solid ${LINE}`,
        borderBottom: `1px solid ${LINE}`,
        fontSize: 13,
        fontWeight: 600,
        color: MUTED,
        verticalAlign: 'middle',
      }}>
        {label}
      </td>
      {cells.map((c, i) => {
        const isLast = i === cells.length - 1
        const isRec = i === 2 // catbird column visually highlighted
        return (
          <td key={i} style={{
            padding: '14px 18px',
            textAlign: 'center',
            borderRight: isLast ? 0 : `1px solid ${LINE}`,
            borderBottom: `1px solid ${LINE}`,
            background: isRec ? '#fffaf8' : '#fff',
            verticalAlign: 'middle',
            lineHeight: 1.45,
            fontSize: 14,
            color: INK,
          }}>
            <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
              <div>{c.node}</div>
              {c.note ? (
                <div style={{ fontSize: 11, color: MUTED, marginTop: 2 }}>{c.note}</div>
              ) : null}
            </div>
          </td>
        )
      })}
    </tr>
  )
}
