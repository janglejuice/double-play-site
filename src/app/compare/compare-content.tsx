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
const INK       = '#1c2433'
const MUTED     = '#6b7585'
const LINE      = '#e6e8ec'
const BG_SOFT   = '#f5f6f8'
const BG_WARM   = '#fdf6f1'
const SHADOW_CARD = '0 1px 2px rgba(15,42,72,0.04), 0 12px 28px -12px rgba(15,42,72,0.18)'
const WRAP = { maxWidth: 1320, margin: '0 auto', padding: '0 32px' } as const

// ── Floor-based metadata (primary identifiers per user direction) ──────────
const FLOOR_LABEL: Record<string, string> = {
  'sluggers-suite':       'Garden Level',
  'bleacher-balcony-flat':'First Floor',
  'catbird-seat':         'Top Floor',
}

const FLOOR_CHARACTER: Record<string, string> = {
  'sluggers-suite':        'Street-level energy',
  'bleacher-balcony-flat': 'Classic raised entry',
  'catbird-seat':          '10-ft ceilings · corner-lot light',
}

const BEST_FOR: Record<string, string> = {
  'sluggers-suite':        'Groups who want the closest-to-street game-day energy',
  'bleacher-balcony-flat': 'Groups who prefer the raised first-floor feel',
  'catbird-seat':          'Groups up to 5 wanting the brightest, most spacious unit',
}

// ── Use-case Q&A ───────────────────────────────────────────────────────────
const USE_CASES = [
  {
    q: 'Best for groups of 5 or more',
    a: 'The Top Floor unit sleeps 5 in roughly 900 sqft. For larger groups, book multiple units in the same building. With all three, the building sleeps up to 13. Message us to coordinate.',
  },
  {
    q: 'Best for natural light and views',
    a: 'The Top Floor. Corner-lot location with huge bay-style windows and a wraparound dining area. You watch the Wrigleyville scene from your couch without stepping outside.',
  },
  {
    q: 'Best for couples or a couple plus friends',
    a: 'The Top Floor. Quietest floor in the building, 10-foot ceilings, soundproofed bedrooms, and enough space for a third or fourth guest.',
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

// ── FAQ ────────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: 'Are all three apartments in the same building?',
    a: 'Yes. All three units are at 3601 N Sheffield Ave, directly across from Wrigley Field. Different floors, same front door, same location.',
  },
  {
    q: 'Which apartment is closest to Wrigley Field?',
    a: "All three are about a 1-minute walk from the bleacher entrance. They're in the same building, so proximity is identical. What varies is the floor: Garden Level, First Floor, and Top Floor.",
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

// ── JSON-LD schemas ────────────────────────────────────────────────────────
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

// ── Table rows ─────────────────────────────────────────────────────────────
interface TableRow { label: string; render: (u: Unit) => string }

const TABLE_ROWS: TableRow[] = [
  { label: 'Floor',          render: u => u.floor },
  { label: 'Sleeps',         render: u => String(u.sleeps) },
  { label: 'Bedrooms',       render: u => String(u.beds) },
  { label: 'Bathrooms',      render: u => String(u.baths) },
  { label: 'Approx. size',   render: u => u.sqft ? `~${u.sqft} sqft` : 'Coming soon' },
  { label: 'Price per night',render: u => u.pricePerNight ? `$${u.pricePerNight}` : 'Check availability' },
  { label: 'Best for',       render: u => BEST_FOR[u.slug] ?? '' },
]

// ─────────────────────────────────────────────────────────────────────────
export default function CompareContent({ units }: CompareContentProps) {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ════════════════ HERO ════════════════ */}
      <section style={{ background: NAVY_INK, color: '#fff', paddingTop: 220, paddingBottom: 80 }}>
        <div style={WRAP}>
          <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto' }}>
            <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.22em', color: ACCENT, textTransform: 'uppercase' as const, marginBottom: 14 }}>
              Compare · 3 Apartments, One Building
            </div>
            <h1 style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontWeight: 400,
              fontSize: 52,
              lineHeight: 1.06,
              letterSpacing: '-0.01em',
              margin: '0 0 20px',
            }}>
              Same building. Three floors.<br />Here&apos;s the difference.
            </h1>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: 'rgba(255,255,255,0.80)', margin: 0 }}>
              All three apartments are a 1-minute walk from Wrigley Field. What sets them apart is the floor, the light, and the feel. Find the one that matches your group.
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════ UNIT PROFILES ════════════════ */}
      <section style={{ padding: '72px 0 96px', background: '#fff' }}>
        <div style={WRAP}>
          <div className="compare-units-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
            {units.map(unit => {
              const floorLabel = FLOOR_LABEL[unit.slug] ?? unit.floor
              const character  = FLOOR_CHARACTER[unit.slug] ?? unit.highlight
              return (
                <article key={unit.slug} style={{
                  background: '#fff',
                  borderRadius: 14,
                  boxShadow: SHADOW_CARD,
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column' as const,
                }}>
                  {/* Photo */}
                  <div style={{ aspectRatio: '16/10', background: '#e8eaee', position: 'relative' as const, overflow: 'hidden' }}>
                    <Image
                      src={unit.photos[0]}
                      alt={`${floorLabel} apartment at Double Play Wrigley`}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>

                  {/* Body */}
                  <div style={{ padding: '24px 26px 28px', display: 'flex', flexDirection: 'column' as const, flex: 1 }}>
                    {/* Floor label — primary identifier */}
                    <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.18em', color: ACCENT, textTransform: 'uppercase' as const, marginBottom: 8 }}>
                      {floorLabel}
                    </div>

                    {/* Character headline */}
                    <h2 style={{ fontFamily: 'Manrope, system-ui, sans-serif', fontWeight: 800, fontSize: 22, letterSpacing: '-0.01em', color: NAVY, margin: '0 0 4px', lineHeight: 1.2 }}>
                      {character}
                    </h2>

                    {/* Unit name in serif italic */}
                    <p style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontStyle: 'italic', fontSize: 15, color: MUTED, margin: '0 0 18px', lineHeight: 1 }}>
                      {unit.name}
                    </p>

                    {/* Stats */}
                    <div style={{ display: 'flex', gap: 20, paddingBottom: 18, marginBottom: 18, borderBottom: `1px solid ${LINE}` }}>
                      {([
                        { label: 'Beds',   val: unit.beds },
                        { label: 'Bath',   val: unit.baths },
                        { label: 'Sleeps', val: unit.sleeps },
                        ...(unit.sqft ? [{ label: 'Sqft', val: unit.sqft }] : []),
                      ] as { label: string; val: number }[]).map(s => (
                        <div key={s.label}>
                          <div style={{ fontSize: 22, fontWeight: 800, color: NAVY, letterSpacing: '-0.01em', lineHeight: 1 }}>{s.val}</div>
                          <div style={{ fontSize: 11, color: MUTED, marginTop: 3, letterSpacing: '0.04em' }}>{s.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Top amenities */}
                    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 auto', display: 'flex', flexDirection: 'column' as const, gap: 7 }}>
                      {unit.amenities.slice(0, 3).map(a => (
                        <li key={a} style={{ fontSize: 13, color: INK, display: 'flex', alignItems: 'baseline', gap: 8 }}>
                          <span style={{ color: ACCENT, fontSize: 10, flex: 'none' }}>✓</span>
                          {a}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={`/units/${unit.slug}`}
                      style={{ display: 'block', textAlign: 'center', background: NAVY, color: '#fff', padding: '14px 16px', borderRadius: 8, fontWeight: 700, fontSize: 14, letterSpacing: '0.02em', marginTop: 20, textDecoration: 'none' }}
                    >
                      View {floorLabel} →
                    </Link>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* ════════════════ COMPARISON TABLE ════════════════ */}
      <section style={{ padding: '80px 0 96px', background: BG_SOFT }}>
        <div style={WRAP}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.18em', color: ACCENT, textTransform: 'uppercase' as const, marginBottom: 12 }}>
              Side by side
            </div>
            <h2 style={{ fontFamily: 'Manrope, system-ui, sans-serif', fontWeight: 700, fontSize: 36, letterSpacing: '-0.015em', color: NAVY, margin: 0, lineHeight: 1.2 }}>
              The facts at a glance
            </h2>
          </div>

          <div style={{ overflowX: 'auto' as const }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' as const, minWidth: 520 }}>
              <thead>
                <tr style={{ background: NAVY }}>
                  {/* Empty header for label column */}
                  <th style={{ textAlign: 'left' as const, padding: '14px 20px', width: 160 }} aria-label="Feature" />
                  {units.map(unit => (
                    <th key={unit.slug} style={{ textAlign: 'left' as const, padding: '14px 20px' }}>
                      <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase' as const, marginBottom: 4 }}>
                        {FLOOR_LABEL[unit.slug]}
                      </div>
                      <div style={{ color: '#fff', fontWeight: 700, fontSize: 15, lineHeight: 1.25 }}>
                        {unit.name}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TABLE_ROWS.map((row, i) => (
                  <tr key={row.label} style={{ background: i % 2 === 0 ? '#fff' : BG_SOFT }}>
                    <td style={{ padding: '13px 20px', fontWeight: 700, fontSize: 13, color: NAVY, letterSpacing: '0.02em' }}>
                      {row.label}
                    </td>
                    {units.map(unit => (
                      <td key={unit.slug} style={{ padding: '13px 20px', fontSize: 14, color: INK, lineHeight: 1.5 }}>
                        {row.render(unit)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ════════════════ FIND YOUR FIT ════════════════ */}
      <section style={{ padding: '80px 0 96px', background: '#fff' }}>
        <div style={WRAP}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.18em', color: ACCENT, textTransform: 'uppercase' as const, marginBottom: 12 }}>
              Quick takes
            </div>
            <h2 style={{ fontFamily: 'Manrope, system-ui, sans-serif', fontWeight: 700, fontSize: 36, letterSpacing: '-0.015em', color: NAVY, margin: 0 }}>
              Find your fit
            </h2>
          </div>

          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            {USE_CASES.map((item, i) => (
              <div
                key={i}
                style={{
                  paddingTop: i === 0 ? 0 : 28,
                  paddingBottom: 28,
                  borderTop: i === 0 ? 'none' : `1px solid ${LINE}`,
                }}
              >
                <h3 style={{ fontFamily: 'Manrope, system-ui, sans-serif', fontWeight: 800, fontSize: 17, color: NAVY, margin: '0 0 8px', letterSpacing: '-0.005em' }}>
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

      {/* ════════════════ GROUP BOOKING ════════════════ */}
      <section style={{ padding: '80px 0 96px', background: BG_WARM }}>
        <div style={WRAP}>
          <div style={{ maxWidth: 720, margin: '0 auto' }}>
            <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.18em', color: ACCENT, textTransform: 'uppercase' as const, marginBottom: 14 }}>
              Larger groups
            </div>
            <h2 style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontWeight: 400,
              fontSize: 40,
              letterSpacing: '-0.01em',
              color: NAVY,
              margin: '0 0 20px',
              lineHeight: 1.1,
            }}>
              Booking multiple units for a bigger group?
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: INK, margin: '0 0 28px' }}>
              We absolutely host larger groups by booking all 3 apartments together. All three booked sleeps up to 13. Message us directly and we&apos;ll coordinate dates, pricing, and any group requests. Block bookings often come with a small direct-booking discount.
            </p>
            <a
              href="mailto:stay@doubleplaywrigley.com"
              style={{ display: 'inline-block', background: NAVY, color: '#fff', padding: '14px 28px', borderRadius: 8, fontSize: 13, fontWeight: 700, letterSpacing: '0.06em', textDecoration: 'none' }}
            >
              Message us →
            </a>
          </div>
        </div>
      </section>

      {/* ════════════════ FAQ ════════════════ */}
      <section style={{ padding: '80px 0 96px', background: BG_SOFT }}>
        <div style={WRAP}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2 style={{ fontFamily: 'Manrope, system-ui, sans-serif', fontWeight: 700, fontSize: 36, letterSpacing: '-0.015em', color: NAVY, margin: 0 }}>
              Common questions
            </h2>
          </div>

          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            {FAQS.map((faq, i) => (
              <div
                key={i}
                style={{
                  paddingTop: i === 0 ? 0 : 28,
                  paddingBottom: 28,
                  borderTop: i === 0 ? 'none' : `1px solid ${LINE}`,
                }}
              >
                <h3 style={{ fontFamily: 'Manrope, system-ui, sans-serif', fontWeight: 700, fontSize: 17, color: NAVY, margin: '0 0 10px' }}>
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

      {/* ════════════════ FINAL CTA ════════════════ */}
      <section style={{ padding: '96px 0', background: NAVY, color: '#fff' }}>
        <div style={WRAP}>
          <div style={{ textAlign: 'center', maxWidth: 580, margin: '0 auto' }}>
            <h2 style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontWeight: 400,
              fontSize: 44,
              letterSpacing: '-0.01em',
              margin: '0 0 18px',
              lineHeight: 1.1,
            }}>
              Still not sure? We can help.
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: 'rgba(255,255,255,0.82)', margin: '0 0 36px' }}>
              Tell us about your trip and we&apos;ll recommend the right unit. We respond within the hour, every day.
            </p>
            <div className="compare-cta-row" style={{ display: 'flex', justifyContent: 'center', gap: 12 }}>
              <a
                href="mailto:stay@doubleplaywrigley.com"
                style={{ display: 'inline-block', background: ACCENT, color: '#fff', padding: '14px 28px', borderRadius: 8, fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' as const, textDecoration: 'none' }}
              >
                Message Us
              </a>
              <Link
                href="/search"
                style={{ display: 'inline-block', border: '1.5px solid rgba(255,255,255,0.45)', color: '#fff', padding: '13px 28px', borderRadius: 8, fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' as const, textDecoration: 'none' }}
              >
                Check Availability →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
