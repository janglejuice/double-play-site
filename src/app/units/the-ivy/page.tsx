import Image from 'next/image'
import Link from 'next/link'
import BookingWidget from '@/components/BookingWidget'
import { getUnit } from '@/data/units'
import { getUnitDetail } from '@/data/unit-details'
import { getVacationRentalSchema } from '@/lib/schema'

// ── Design tokens (Sluggers Suite) ─────────────────────────────
const T = {
  navy: '#15375c',
  navyDeep: '#0f2a48',
  navyInk: '#0b1f36',
  accent: '#E85A2C',
  accentDk: '#d04a1f',
  accentBg: 'rgba(232,90,44,0.08)',
  ink: '#1c2433',
  muted: '#6b7585',
  line: '#e6e8ec',
  bg: '#ffffff',
  bgSoft: '#f5f6f8',
  bgWarm: '#fdf6f1',
  confirm: '#23a06b',
  cardShadow: '0 1px 2px rgba(15,42,72,0.04), 0 12px 28px -12px rgba(15,42,72,0.18)',
  panelShadow: '0 1px 2px rgba(15,42,72,0.06), 0 24px 48px -20px rgba(15,42,72,0.35)',
  display: "'DM Serif Display', Georgia, serif",
  body: "'Manrope', system-ui, sans-serif",
}

export async function generateMetadata() {
  const unit = getUnit('the-ivy')
  if (!unit) return {}
  return {
    title: `${unit.name}, Double Play Wrigleyville`,
    description: unit.description,
  }
}

export default function SluggersSuitePage() {
  const unit = getUnit('the-ivy')!
  const detail = getUnitDetail('the-ivy')!

  // ── SEO Schemas ──
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://yourdomain.com' },
      { '@type': 'ListItem', position: 2, name: 'Apartments', item: 'https://yourdomain.com/units' },
      { '@type': 'ListItem', position: 3, name: unit.name, item: `https://yourdomain.com/units/${unit.slug}` },
    ],
  }
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: detail.unitFAQ.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }

  // Stat tiles for the dark "Why people book this" feature
  const viewStats = [
    { val: 'Across the street', lbl: 'Distance to field' },
    { val: 'Across the street', lbl: 'Addison Red Line' },
    { val: '2 min', lbl: "Walk to Murphy's" },
  ]

  return (
    <main style={{ fontFamily: T.body, color: T.ink, background: T.bg }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getVacationRentalSchema(unit)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ─────────────── Breadcrumb / Action bar ─────────────── */}
      <div
        style={{
          background: '#fff',
          borderBottom: `1px solid ${T.line}`,
          boxShadow: '0 2px 12px -6px rgba(15,42,72,0.08)',
        }}
      >
        <div
          style={{
            maxWidth: 1240,
            margin: '0 auto',
            padding: '0 32px',
            height: 48,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 16,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12.5, color: T.muted }}>
            <Link href="/units" style={{ color: T.muted, textDecoration: 'none' }}>
              All Apartments
            </Link>
            <span style={{ color: T.line }}>{'›'}</span>
            <span style={{ color: T.navy, fontWeight: 700 }}>{'The Ivy'}</span>
          </div>
          <Link
            href="/compare"
            style={{
              fontSize: 12,
              fontWeight: 700,
              color: T.muted,
              textDecoration: 'none',
              letterSpacing: '0.02em',
            }}
          >
            Compare all three units
          </Link>
        </div>
      </div>

      {/* ─────────────── Gallery (image + photo placeholders) ─────────────── */}
      <section
        style={{
          maxWidth: 1240,
          margin: '0 auto',
          padding: '20px 32px 0',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 0.82fr',
            gridTemplateRows: '280px 280px',
            gap: 6,
            borderRadius: 16,
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <div
            style={{
              gridRow: '1 / 3',
              position: 'relative',
              overflow: 'hidden',
              background: '#d4d8e0',
            }}
          >
            <Image
              src={unit.photos[0]}
              alt={`${unit.name} living room with direct Wrigley Field view`}
              fill
              priority
              sizes="(max-width: 1000px) 100vw, 60vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gridTemplateRows: '1fr 1fr',
              gap: 6,
            }}
          >
            {[
              { src: '/The%20Ivy/download.png',        label: 'Bedroom 1, queen bed'  },
              { src: '/The%20Ivy/download%20(6).png',  label: 'Kitchen & dining'      },
              { src: '/The%20Ivy/download%20(1).png',  label: 'Bedroom 2, queen bed'  },
              { src: '/The%20Ivy/download%20(7).png',  label: 'Bathroom'              },
            ].map((tile, i) => (
              <div
                key={i}
                style={{ position: 'relative', overflow: 'hidden', background: '#d4d8e0' }}
              >
                <Image
                  src={tile.src}
                  alt={`The Ivy ${tile.label}`}
                  fill
                  sizes="(max-width: 1000px) 50vw, 25vw"
                  style={{ objectFit: 'cover' }}
                />
                <span
                  style={{
                    position: 'absolute',
                    left: 10,
                    bottom: 10,
                    background: 'rgba(255,255,255,0.92)',
                    color: T.navy,
                    fontSize: 9.5,
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    padding: '4px 9px',
                    borderRadius: 4,
                    fontFamily: 'ui-monospace, monospace',
                  }}
                >
                  {tile.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── Main two-column body ─────────────── */}
      <section
        style={{
          maxWidth: 1240,
          margin: '0 auto',
          padding: '40px 32px 88px',
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) 356px',
          gap: 64,
          alignItems: 'start',
        }}
      >
        {/* ════════════ CONTENT COLUMN ════════════ */}
        <div style={{ minWidth: 0 }}>
          {/* Title block */}
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 7,
                fontSize: 10,
                fontWeight: 800,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: T.accent,
                marginBottom: 10,
              }}
            >
              <span
                style={{
                  width: 22,
                  height: 2,
                  background: T.accent,
                  borderRadius: 1,
                  display: 'inline-block',
                }}
              />
              Garden Level, Wilton Avenue
            </div>
            <h1
              style={{
                fontFamily: T.display,
                fontSize: 42,
                color: T.navy,
                margin: '0 0 14px',
                lineHeight: 1.08,
                letterSpacing: '-0.02em',
                fontWeight: 400,
              }}
            >
              {'The Ivy'}
            </h1>
            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
              {[
                `${unit.beds} Bedrooms`,
                `Sleeps ${unit.sleeps}`,
                `${unit.baths} Bath`,
                unit.floor,
              ].map((m, i, arr) => (
                <div
                  key={i}
                  style={{
                    fontSize: 13.5,
                    color: T.ink,
                    fontWeight: 600,
                    padding: i === 0 ? '0 16px 0 0' : '0 16px',
                    borderRight: i === arr.length - 1 ? 'none' : `1px solid ${T.line}`,
                  }}
                >
                  {m}
                </div>
              ))}
            </div>
          </div>

          <hr style={{ border: 'none', borderTop: `1px solid ${T.line}`, margin: '32px 0' }} />

          {/* Host intro */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 22 }}>
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: '50%',
                background: T.navy,
                display: 'grid',
                placeItems: 'center',
                flex: 'none',
                fontFamily: T.display,
                fontSize: 20,
                color: '#fff',
              }}
            >
              D
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 15, fontWeight: 800, color: T.navy }}>
                Hosted by Double Play
              </div>
              <div style={{ fontSize: 12, color: T.muted, marginTop: 1 }}>
                Local Wrigleyville hosts
              </div>
            </div>
            <span
              style={{
                fontSize: 10,
                fontWeight: 800,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: T.accent,
                background: T.accentBg,
                padding: '4px 10px',
                borderRadius: 100,
              }}
            >
              Direct Host
            </span>
          </div>

          <div style={{ fontSize: 15.5, lineHeight: 1.78, color: T.ink }}>
            <p style={{ margin: '0 0 16px' }}>
              {unit.description}
            </p>
            <p style={{ margin: '0 0 16px' }}>
              The apartment has{' '}
              <strong style={{ color: T.navy }}>
                two bedrooms, a full kitchen, and a living room
              </strong>{' '}
              that doubles as the best seat on the block. We have done our best to make it feel
              like a real home: proper kitchen knives, fast WiFi, and a smart TV loaded with
              streaming apps. Nothing was an afterthought.
            </p>
            <p style={{ margin: 0 }}>
              Check-in is{' '}
              <em style={{ fontStyle: 'italic' }}>keypad only, no lockbox, no waiting around.</em>{' '}
              We send your personal code 2-3 days before arrival, and we are available by text the
              whole time you are here.
            </p>
          </div>

          <hr style={{ border: 'none', borderTop: `1px solid ${T.line}`, margin: '32px 0' }} />

          {/* The "view" feature panel */}
          <div
            style={{
              background: T.navyInk,
              borderRadius: 14,
              padding: 30,
              margin: '0 0 32px',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: T.panelShadow,
            }}
          >
            <div
              aria-hidden
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px)',
                backgroundSize: '44px 44px',
                pointerEvents: 'none',
              }}
            />
            <div style={{ position: 'relative', zIndex: 2 }}>
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 800,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: T.accent,
                  marginBottom: 10,
                }}
              >
                Why people book this unit
              </div>
              <div
                style={{
                  fontFamily: T.display,
                  fontSize: 26,
                  color: '#fff',
                  margin: '0 0 12px',
                  letterSpacing: '-0.01em',
                  fontStyle: 'italic',
                  fontWeight: 400,
                }}
              >
                {'“'}Closest to the bleacher entrance.{'”'}
              </div>
              <p
                style={{
                  fontSize: 14.5,
                  color: 'rgba(255,255,255,0.65)',
                  lineHeight: 1.72,
                  margin: 0,
                }}
              >
                Step out the door and you are at{' '}
                <strong style={{ color: '#fff' }}>
                  the bleacher entrance in under a minute.
                </strong>{' '}
                On game days you hear the marquee come alive from the living room. On quiet nights
                the neighborhood hum drifts in just enough to remind you where you are. This is the
                ground-floor energy of Wrigleyville without the climb.
              </p>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 24,
                  marginTop: 20,
                  borderTop: '1px solid rgba(255,255,255,0.10)',
                  paddingTop: 18,
                }}
              >
                {viewStats.map((s, i) => (
                  <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <span style={{ fontSize: 18, fontWeight: 800, color: '#fff' }}>{s.val}</span>
                    <span
                      style={{
                        fontSize: 10.5,
                        color: 'rgba(255,255,255,0.42)',
                        fontWeight: 700,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                      }}
                    >
                      {s.lbl}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* What you will love */}
          <h2
            style={{
              fontFamily: T.display,
              fontSize: 26,
              color: T.navy,
              margin: '0 0 22px',
              fontWeight: 400,
            }}
          >
            What you will love
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {detail.whatYouLove.map((item, idx) => (
              <div
                key={idx}
                style={{
                  background: '#fff',
                  border: `1px solid ${T.line}`,
                  borderRadius: 10,
                  padding: '20px 22px',
                  boxShadow: T.cardShadow,
                }}
              >
                <h3
                  style={{
                    fontSize: 14,
                    fontWeight: 800,
                    color: T.navy,
                    margin: '0 0 8px',
                    letterSpacing: '-0.005em',
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ fontSize: 13.5, color: T.ink, lineHeight: 1.65, margin: 0 }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          <hr style={{ border: 'none', borderTop: `1px solid ${T.line}`, margin: '32px 0' }} />

          {/* Amenities */}
          <h2
            style={{
              fontFamily: T.display,
              fontSize: 26,
              color: T.navy,
              margin: '0 0 22px',
              fontWeight: 400,
            }}
          >
            What this place offers
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
            {detail.amenityGroups.map((group, gi) => (
              <div key={gi}>
                <div
                  style={{
                    fontSize: 10,
                    fontWeight: 800,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: T.muted,
                    marginBottom: 12,
                  }}
                >
                  {group.category}
                </div>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: 10,
                  }}
                >
                  {group.items.map((item, ii) => (
                    <div
                      key={ii}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 11,
                        fontSize: 13.5,
                        color: T.ink,
                        fontWeight: 600,
                        lineHeight: 1.4,
                      }}
                    >
                      <span
                        aria-hidden
                        style={{
                          width: 16,
                          height: 16,
                          borderRadius: 4,
                          background: T.accentBg,
                          color: T.accent,
                          fontSize: 11,
                          fontWeight: 800,
                          display: 'inline-grid',
                          placeItems: 'center',
                          flex: 'none',
                          marginTop: 1,
                        }}
                      >
                        {'✓'}
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <hr style={{ border: 'none', borderTop: `1px solid ${T.line}`, margin: '32px 0' }} />

          {/* House rules */}
          <h2
            style={{
              fontFamily: T.display,
              fontSize: 26,
              color: T.navy,
              margin: '0 0 20px',
              fontWeight: 400,
            }}
          >
            House rules
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
            {[
              {
                title: 'Ground rules',
                items: [
                  'No smoking anywhere on the property',
                  'No parties or events, building has other residents',
                  'Respect quiet hours after 10pm',
                  `Max ${unit.maxGuests} guests at any time`,
                ],
              },
              {
                title: 'Pets and access',
                items: [
                  'Pets welcome (message us first to confirm fit)',
                  'Pets welcome (pet fee applies)',
                  'Personal smart-lock code sent 2-3 days before arrival',
                  'Code expires automatically at checkout',
                  'Do not share your code with non-guests',
                ],
              },
            ].map((pol, pi) => (
              <div
                key={pi}
                style={{
                  background: T.bgSoft,
                  border: `1px solid ${T.line}`,
                  borderRadius: 10,
                  padding: '20px 22px',
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 8,
                    background: T.accentBg,
                    display: 'grid',
                    placeItems: 'center',
                    marginBottom: 12,
                    color: T.accent,
                    fontWeight: 800,
                    fontSize: 16,
                  }}
                >
                  {pi === 0 ? '!' : '✓'}
                </div>
                <h3
                  style={{
                    fontSize: 13,
                    fontWeight: 800,
                    color: T.navy,
                    margin: '0 0 10px',
                  }}
                >
                  {pol.title}
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {pol.items.map((it, ii) => (
                    <li
                      key={ii}
                      style={{
                        fontSize: 13,
                        color: T.muted,
                        lineHeight: 1.5,
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 7,
                      }}
                    >
                      <span
                        aria-hidden
                        style={{
                          width: 5,
                          height: 5,
                          borderRadius: '50%',
                          background: T.accent,
                          flex: 'none',
                          marginTop: 7,
                        }}
                      />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <hr style={{ border: 'none', borderTop: `1px solid ${T.line}`, margin: '32px 0' }} />

          {/* Check in / out */}
          <h2
            style={{
              fontFamily: T.display,
              fontSize: 26,
              color: T.navy,
              margin: '0 0 20px',
              fontWeight: 400,
            }}
          >
            Check-in and check-out
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              gap: 1,
              background: T.line,
              borderRadius: 10,
              overflow: 'hidden',
              border: `1px solid ${T.line}`,
            }}
          >
            {[
              { lbl: 'Check-in', val: '3:00 PM', sub: 'Keypad code sent by 10am' },
              { lbl: 'Check-out', val: '11:00 AM', sub: 'Late checkout: ask us' },
              { lbl: 'Minimum stay', val: '2 nights', sub: 'Game weekends fill fast' },
            ].map((c, ci) => (
              <div key={ci} style={{ background: '#fff', padding: '18px 20px', display: 'flex', flexDirection: 'column', gap: 4 }}>
                <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: T.muted }}>
                  {c.lbl}
                </div>
                <div style={{ fontSize: 18, fontWeight: 800, color: T.navy }}>{c.val}</div>
                <div style={{ fontSize: 12, color: T.muted }}>{c.sub}</div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 13.5, color: T.muted, lineHeight: 1.65, marginTop: 16 }}>
            Early check-in and late check-out are often available on request, just text us a day
            before. On game days we ask everyone to be out by 11am sharp so we can turn the unit
            around in time.
          </p>

          <hr style={{ border: 'none', borderTop: `1px solid ${T.line}`, margin: '32px 0' }} />

          {/* Cancellation policy */}
          <h2
            style={{
              fontFamily: T.display,
              fontSize: 26,
              color: T.navy,
              margin: '0 0 20px',
              fontWeight: 400,
            }}
          >
            Cancellation policy
          </h2>
          <div
            style={{
              borderRadius: 10,
              border: `1.5px solid ${T.line}`,
              padding: 22,
              display: 'flex',
              gap: 16,
              alignItems: 'flex-start',
            }}
          >
            <div
              style={{
                width: 42,
                height: 42,
                borderRadius: 10,
                background: '#ecf5ec',
                display: 'grid',
                placeItems: 'center',
                flex: 'none',
                color: T.confirm,
                fontWeight: 800,
                fontSize: 18,
              }}
            >
              {'✓'}
            </div>
            <div>
              <div style={{ fontSize: 15, fontWeight: 800, color: T.navy, marginBottom: 5 }}>
                Moderate: free cancellation up to 5 days before check-in
              </div>
              <p style={{ fontSize: 13.5, color: T.muted, lineHeight: 1.6, margin: 0 }}>
                Cancel up to{' '}
                <strong style={{ color: T.ink }}>5 days before check-in</strong> for a full refund.
                Cancel within 5 days and the first night is non-refundable. Cancel after check-in
                and the remaining nights are non-refundable. We never charge a cancellation fee on
                top of that.
              </p>
            </div>
          </div>

          <hr style={{ border: 'none', borderTop: `1px solid ${T.line}`, margin: '32px 0' }} />

          {/* From your front door */}
          <h2
            style={{
              fontFamily: T.display,
              fontSize: 26,
              color: T.navy,
              margin: '0 0 20px',
              fontWeight: 400,
            }}
          >
            From your front door
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '10px 24px',
            }}
          >
            {detail.localProximity.map((loc, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  justifyContent: 'space-between',
                  borderBottom: `1px solid ${T.line}`,
                  paddingBottom: 8,
                  gap: 12,
                }}
              >
                <span style={{ fontSize: 13.5, color: T.ink, fontWeight: 600 }}>{loc.name}</span>
                <span
                  style={{
                    fontSize: 12,
                    color: T.accent,
                    fontWeight: 800,
                    letterSpacing: '0.04em',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {loc.time}
                </span>
              </div>
            ))}
          </div>

          <hr style={{ border: 'none', borderTop: `1px solid ${T.line}`, margin: '32px 0' }} />

          {/* The layout */}
          <h2
            style={{
              fontFamily: T.display,
              fontSize: 26,
              color: T.navy,
              margin: '0 0 16px',
              fontWeight: 400,
            }}
          >
            The layout
          </h2>
          <p style={{ fontSize: 14.5, color: T.ink, lineHeight: 1.75, margin: '0 0 10px' }}>
            {detail.floorPlan}
          </p>
          <p style={{ fontSize: 13, color: T.muted, fontStyle: 'italic', margin: 0 }}>
            Detailed floor plan available on request. Message us anytime.
          </p>

          <hr style={{ border: 'none', borderTop: `1px solid ${T.line}`, margin: '32px 0' }} />

          {/* How this compares */}
          <h2
            style={{
              fontFamily: T.display,
              fontSize: 26,
              color: T.navy,
              margin: '0 0 16px',
              fontWeight: 400,
            }}
          >
            How this unit compares
          </h2>
          <p style={{ fontSize: 14.5, color: T.ink, lineHeight: 1.75, margin: 0 }}>
            {detail.versusOthers}
          </p>

          <hr style={{ border: 'none', borderTop: `1px solid ${T.line}`, margin: '32px 0' }} />

          {/* FAQ */}
          <h2
            style={{
              fontFamily: T.display,
              fontSize: 26,
              color: T.navy,
              margin: '0 0 20px',
              fontWeight: 400,
            }}
          >
            Frequently asked questions
          </h2>
          <div style={{ borderTop: `1px solid ${T.line}` }}>
            {detail.unitFAQ.map((faq, i) => (
              <details
                key={i}
                style={{
                  borderBottom: `1px solid ${T.line}`,
                  padding: '16px 0',
                }}
              >
                <summary
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    listStyle: 'none',
                    fontSize: 14.5,
                    fontWeight: 700,
                    color: T.navy,
                    gap: 12,
                  }}
                >
                  <span>{faq.question}</span>
                  <span
                    aria-hidden
                    style={{
                      fontSize: 20,
                      fontWeight: 400,
                      color: T.muted,
                      flex: 'none',
                    }}
                  >
                    +
                  </span>
                </summary>
                <p
                  style={{
                    fontSize: 14,
                    color: T.muted,
                    lineHeight: 1.7,
                    padding: '12px 0 0',
                    margin: 0,
                    maxWidth: '92%',
                  }}
                >
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>

        {/* ════════════ BOOKING SIDEBAR ════════════ */}
        <aside
          style={{
            position: 'sticky',
            top: 24,
            alignSelf: 'start',
          }}
        >
          <div
            style={{
              background: '#fff',
              borderRadius: 16,
              border: `1px solid ${T.line}`,
              boxShadow: T.panelShadow,
              overflow: 'hidden',
            }}
          >
            <div style={{ padding: '22px 22px 4px' }}>
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 800,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: T.accent,
                  marginBottom: 8,
                }}
              >
                Book direct, no service fees
              </div>
              <div
                style={{
                  fontFamily: T.display,
                  fontSize: 22,
                  color: T.navy,
                  lineHeight: 1.15,
                  letterSpacing: '-0.01em',
                  marginBottom: 4,
                  fontWeight: 400,
                }}
              >
                Reserve {'The Ivy'}
              </div>
              <div style={{ fontSize: 12.5, color: T.muted, marginBottom: 14 }}>
                Instant confirmation via Hospitable
              </div>
            </div>
            <div style={{ padding: '0 14px 14px' }}>
              <BookingWidget
                propertyId={unit.hospitable_property_id}
                title={`Book ${unit.name}`}
                compact
              />
            </div>

            {/* Trust signals */}
            <div
              style={{
                borderTop: `1px solid ${T.line}`,
                padding: '16px 22px',
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
              }}
            >
              {[
                'Instant confirmation, no service fees',
                'Text the hosts anytime, usually reply within the hour',
                'Same building as the other two Double Play units',
              ].map((t, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 9,
                    fontSize: 12.5,
                    color: T.muted,
                    lineHeight: 1.45,
                  }}
                >
                  <span
                    aria-hidden
                    style={{
                      width: 14,
                      height: 14,
                      borderRadius: '50%',
                      background: T.accentBg,
                      color: T.accent,
                      fontSize: 10,
                      fontWeight: 800,
                      display: 'inline-grid',
                      placeItems: 'center',
                      flex: 'none',
                      marginTop: 1,
                    }}
                  >
                    {'✓'}
                  </span>
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>

          <Link
            href="/compare"
            style={{
              display: 'block',
              textAlign: 'center',
              fontSize: 12,
              fontWeight: 700,
              color: T.muted,
              textDecoration: 'none',
              marginTop: 16,
              letterSpacing: '0.04em',
            }}
          >
            Compare all three units
          </Link>
        </aside>
      </section>

      {/* ─────────────── Cross-sell: other units ─────────────── */}
      <section style={{ background: T.bgSoft, padding: '64px 0' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 32px' }}>
          <div style={{ marginBottom: 28 }}>
            <h2
              style={{
                fontFamily: T.display,
                fontSize: 30,
                color: T.navy,
                margin: '0 0 6px',
                fontWeight: 400,
              }}
            >
              The other two units
            </h2>
            <p style={{ fontSize: 14, color: T.muted, margin: 0 }}>
              Same building, same location, very different experiences. Book multiple units for
              larger groups.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            {[
              {
                slug: 'the-addison',
                name: 'The Addison',
                meta: 'First Floor, up ~12 steps',
                badge: 'Sister unit',
                photo: '/bleacher-balcony-flat.png',
              },
              {
                slug: 'the-marquee',
                name: 'The Marquee',
                meta: 'Top Floor (2nd), corner-lot bay windows',
                badge: 'Top floor',
                photo: '/sluggers-suite.jpg',
              },
            ].map(u => (
              <Link
                key={u.slug}
                href={`/units/${u.slug}`}
                style={{
                  background: '#fff',
                  borderRadius: 12,
                  border: `1px solid ${T.line}`,
                  boxShadow: T.cardShadow,
                  overflow: 'hidden',
                  display: 'flex',
                  textDecoration: 'none',
                  color: T.ink,
                }}
              >
                <div style={{ width: 160, flex: 'none', position: 'relative', background: '#d4d8e0' }}>
                  <Image
                    src={u.photo}
                    alt={u.name}
                    fill
                    sizes="160px"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div style={{ padding: '18px 20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <span
                    style={{
                      fontSize: 9,
                      fontWeight: 800,
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      background: T.bgSoft,
                      color: T.navy,
                      padding: '3px 9px',
                      borderRadius: 100,
                      border: `1px solid ${T.line}`,
                      display: 'inline-block',
                      marginBottom: 8,
                      alignSelf: 'flex-start',
                    }}
                  >
                    {u.badge}
                  </span>
                  <div style={{ fontSize: 16, fontWeight: 800, color: T.navy, marginBottom: 4 }}>
                    {u.name}
                  </div>
                  <div style={{ fontSize: 11.5, color: T.muted, fontWeight: 600, marginBottom: 14 }}>
                    {u.meta}
                  </div>
                  <div
                    style={{
                      display: 'inline-block',
                      textAlign: 'center',
                      padding: '10px 14px',
                      border: `1.5px solid ${T.line}`,
                      borderRadius: 7,
                      fontSize: 12.5,
                      fontWeight: 800,
                      color: T.navy,
                      marginTop: 'auto',
                    }}
                  >
                    View and Book
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
