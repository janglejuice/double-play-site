import Image from 'next/image'
import Link from 'next/link'
import BookingWidget from '@/components/BookingWidget'
import UnitGallery from '@/components/UnitGallery'
import { getUnit } from '@/data/units'
import { getUnitDetail } from '@/data/unit-details'
import { getVacationRentalSchema } from '@/lib/schema'

// ── Design tokens ──────────────────────────────────────────────
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
  const unit = getUnit('the-addison')
  if (!unit) return {}
  return {
    title: `${unit.name}, Double Play Wrigleyville`,
    description: unit.description,
  }
}

export default function BleacherBalconyFlatPage() {
  const unit = getUnit('the-addison')!
  const detail = getUnitDetail('the-addison')!

  // ── SEO Schemas ──
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://doubleplaywrigley.com' },
      { '@type': 'ListItem', position: 2, name: 'Apartments', item: 'https://doubleplaywrigley.com/units' },
      { '@type': 'ListItem', position: 3, name: unit.name, item: `https://doubleplaywrigley.com/units/${unit.slug}` },
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

  // Stat tiles for the dark feature panel.
  // The Addison's signature (vs the other two units that share the building): it is our
  // most-booked, most-reviewed apartment, new floors put in 2022, and central air (not window units).
  const featureStats = [
    { val: 'Most-booked', lbl: 'Of our 3 apartments' },
    { val: '2022', lbl: 'New floors' },
    { val: '850 sqft', lbl: 'Living area' },
  ]

  // Group proximity into two semantic tiers
  const proximityGroups = [
    {
      title: 'At your doorstep',
      meta: 'Under 5 min walk',
      items: detail.localProximity.filter((_, i) => i < 9),
    },
    {
      title: 'Beyond the block',
      meta: 'Transit-scaled',
      items: detail.localProximity.filter((_, i) => i >= 9),
    },
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
            <span style={{ color: T.navy, fontWeight: 700 }}>{unit.name}</span>
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

      {/* ─────────────── Gallery ─────────────── */}
      <section
        style={{
          maxWidth: 1240,
          margin: '0 auto',
          padding: '20px 32px 0',
        }}
      >
        <UnitGallery
          photos={unit.photos}
          unitName={unit.name}
          heroAlt={`${unit.name} living room with bay windows facing Wilton Avenue`}
          tiles={[
            { src: '/The%20Addison/download%20(4).png', label: 'Bedroom 1, queen bed'    },
            { src: '/The%20Addison/download%20(5).png', label: 'Dining area'             },
            { src: '/The%20Addison/download%20(11).png', label: 'Kitchen'                 },
            { src: '/The%20Addison/download%20(8).png', label: 'Second bedroom'           },
          ]}
        />
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
                  display: 'inline-block',
                  flex: 'none',
                }}
              />
              <span>First Floor, Wilton Avenue</span>
            </div>
            <h1
              style={{
                fontFamily: T.display,
                fontSize: 44,
                lineHeight: 1.05,
                color: T.navy,
                margin: '0 0 18px',
                letterSpacing: '-0.015em',
                fontWeight: 400,
              }}
            >
              {unit.name}
            </h1>
            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
              {[
                `${unit.beds} Bedrooms`,
                `${unit.baths} Bath`,
                `Sleeps ${unit.sleeps}`,
                `${unit.sqft} sqft`,
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

            {/* Trust strip: rating + reviews + years hosting */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: 16,
                marginTop: 18,
                padding: '12px 16px',
                background: T.bgSoft,
                border: `1px solid ${T.line}`,
                borderRadius: 10,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span aria-hidden style={{ color: T.accent, fontSize: 16 }}>{'★'}</span>
                <span style={{ fontSize: 13, color: T.muted }}>
                  <span style={{ color: T.navy, fontWeight: 800 }}>Most-booked</span> of our three apartments
                </span>
              </div>
              <span style={{ color: T.line }}>{'·'}</span>
              <div style={{ fontSize: 13, color: T.muted }}>
                <span style={{ color: T.navy, fontWeight: 700 }}>6 years</span> hosting, replies within
                the hour
              </div>
            </div>

            {/* Quick highlights chip strip */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 8,
                marginTop: 18,
              }}
            >
              {[
                '1 block from Wrigley',
                'Most-booked of our 3 units',
                'New floors 2022',
                'Central A/C and heat',
                'Walk Score 98',
                'Pets welcome',
                'Self check-in',
              ].map(h => (
                <span
                  key={h}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 7,
                    fontSize: 12,
                    fontWeight: 700,
                    color: T.navy,
                    background: T.bgSoft,
                    border: `1px solid ${T.line}`,
                    padding: '7px 12px',
                    borderRadius: 100,
                    letterSpacing: '0.005em',
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
                    }}
                  />
                  {h}
                </span>
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
              The First Floor unit is the middle apartment in our 3-unit Wrigleyville building,
              a 1-minute walk from Wrigley Field. The living room has the same tall 10-foot
              ceilings and huge bay-like windows as the Top Floor, with the dining area wrapping
              the corner.
            </p>
            <p style={{ margin: '0 0 16px' }}>
              We refloored the living and dining rooms in 2022 and the apartment has{' '}
              <strong style={{ color: T.navy }}>
                real central air and central heat, not window units
              </strong>
              . The Addison Red Line and a CTA bus stop are right next to the building. Sleeps 5
              with two queen beds, a roll-out twin, and a convertible sleeper couch in the
              living room.
            </p>
            <p style={{ margin: 0 }}>
              Check-in is{' '}
              <em style={{ fontStyle: 'italic' }}>
                smart-lock, keyless, no key handoff required
              </em>
              . We send your personal code 2-3 days before arrival. And yes, this is the unit
              that welcomes pets. We just ask you to message us about your pet before booking.
            </p>
          </div>

          <hr style={{ border: 'none', borderTop: `1px solid ${T.line}`, margin: '32px 0' }} />

          {/* Feature panel: dark navy, grid texture, italic quote, stats */}
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
                {'“'}New floors. Bay windows. The first-floor classic.{'”'}
              </div>
              <p
                style={{
                  fontSize: 14.5,
                  color: 'rgba(255,255,255,0.65)',
                  lineHeight: 1.72,
                  margin: 0,
                }}
              >
                We refloored the living and dining rooms in 2022. Real central air and central
                heat, not window units like a lot of Wrigleyville apartments. Same bay-window
                views as the Top Floor.{' '}
                <strong style={{ color: '#fff' }}>Our most-booked, most-reviewed apartment</strong>:
                the unit guests come back for.
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
                {featureStats.map((s, i) => (
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

          {/* What you'll love — numbered editorial column */}
          <h2
            style={{
              fontFamily: T.display,
              fontSize: 26,
              color: T.navy,
              margin: '0 0 12px',
              fontWeight: 400,
            }}
          >
            What you will love
          </h2>
          <div>
            {detail.whatYouLove.map((item, idx) => (
              <div
                key={idx}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '64px 1fr',
                  gap: 20,
                  paddingTop: idx === 0 ? 18 : 24,
                  paddingBottom: 24,
                  borderTop: idx === 0 ? 'none' : `1px solid ${T.line}`,
                  alignItems: 'start',
                }}
              >
                <div
                  aria-hidden
                  style={{
                    fontFamily: T.display,
                    fontSize: 56,
                    fontWeight: 400,
                    lineHeight: 1,
                    color: 'rgba(21,55,92,0.18)',
                    letterSpacing: '-0.04em',
                    marginTop: -6,
                  }}
                >
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: 17,
                      fontWeight: 800,
                      color: T.navy,
                      margin: '0 0 8px',
                      letterSpacing: '-0.01em',
                      lineHeight: 1.25,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ fontSize: 14.5, color: T.ink, lineHeight: 1.7, margin: 0 }}>
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <hr style={{ border: 'none', borderTop: `1px solid ${T.line}`, margin: '32px 0' }} />

          {/* Amenities — 6 groups, 2-col rows */}
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
                kind: 'rules' as const,
                items: [
                  'No smoking anywhere on the property',
                  'No parties or events (building has other residents)',
                  'Respect quiet hours after 10pm',
                  'Noise decibel monitor on property',
                  `Max ${unit.maxGuests} guests at any time`,
                  'Booking guest must be 20 or older and stay in the unit',
                ],
              },
              {
                title: 'Pets and access',
                kind: 'pet' as const,
                items: [
                  'Pets welcome (message us first to confirm fit, pet fee applies)',
                  'Personal smart-lock code sent 2-3 days before arrival',
                  'Code expires automatically at checkout',
                  'Building has exterior security and doorbell cameras',
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
                  {pol.kind === 'rules' ? '!' : '✓'}
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

          {/* Check-in and check-out */}
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
              { lbl: 'Check-in', val: '3:00 PM', sub: 'Code sent 2-3 days before arrival' },
              { lbl: 'Check-out', val: '11:00 AM', sub: 'Late checkout: ask us' },
              { lbl: 'Minimum stay', val: '2 nights', sub: 'Game weekends fill fast' },
            ].map((c, ci) => (
              <div
                key={ci}
                style={{
                  background: '#fff',
                  padding: '18px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 4,
                }}
              >
                <div
                  style={{
                    fontSize: 10,
                    fontWeight: 800,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: T.muted,
                  }}
                >
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
                <strong style={{ color: T.ink }}>5 days before check-in</strong> for a full
                refund. Cancel within 5 days and the first night is non-refundable. Cancel after
                check-in and the remaining nights are non-refundable. We never charge a
                cancellation fee on top of that.
              </p>
            </div>
          </div>

          <hr style={{ border: 'none', borderTop: `1px solid ${T.line}`, margin: '32px 0' }} />

          {/* From your front door — two tiers */}
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
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            {proximityGroups.map((group, gi) => (
              <div key={gi}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: 12,
                    marginBottom: 14,
                  }}
                >
                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: 800,
                      color: T.navy,
                      letterSpacing: '-0.005em',
                    }}
                  >
                    {group.title}
                  </span>
                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: 800,
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: T.muted,
                    }}
                  >
                    {group.meta}
                  </span>
                </div>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '10px 24px',
                  }}
                >
                  {group.items.map((loc, i) => (
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
                      <span style={{ fontSize: 13.5, color: T.ink, fontWeight: 600 }}>
                        {loc.name}
                      </span>
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

          {/* Good to know — honest disclosure callout */}
          <div
            style={{
              background: T.bgWarm,
              border: '1px solid #f0e8e2',
              borderRadius: 12,
              padding: '22px 24px',
              display: 'flex',
              gap: 16,
              alignItems: 'flex-start',
              marginBottom: 32,
            }}
          >
            <div
              aria-hidden
              style={{
                width: 36,
                height: 36,
                borderRadius: 8,
                background: T.accentBg,
                color: T.accent,
                display: 'grid',
                placeItems: 'center',
                flex: 'none',
                fontFamily: T.display,
                fontWeight: 400,
                fontSize: 20,
              }}
            >
              i
            </div>
            <div>
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 800,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: T.accent,
                  marginBottom: 6,
                }}
              >
                Good to know
              </div>
              <h3
                style={{
                  fontSize: 15.5,
                  fontWeight: 800,
                  color: T.navy,
                  margin: '0 0 8px',
                  letterSpacing: '-0.005em',
                }}
              >
                Wrigleyville is a vibrant block. Here is what to expect.
              </h3>
              <p style={{ fontSize: 14, color: T.ink, lineHeight: 1.7, margin: 0 }}>
                The neighborhood is energetic, especially around games and concerts. The living
                room catches some of that energy, which most guests love. The bedrooms have
                double-pane windows for soundproofing, so sleep is quieter than you would
                expect. As a courtesy to neighbors we keep a noise decibel monitor on property,
                and the building has exterior security cameras at both entrances. If you are a
                very light sleeper, this may not be the right apartment for you.
              </p>
            </div>
          </div>

          {/* FAQ accordion */}
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

        {/* ════════════ BOOKING SIDEBAR (sticky) ════════════ */}
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
                Reserve the First Floor
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
                'Pets welcome (message us first)',
                'Text the hosts anytime, usually reply within the hour',
                'Our most-booked, most-reviewed apartment',
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
                slug: 'the-marquee',
                name: 'The Marquee',
                meta: 'Top Floor (2nd), 900 sqft, bay windows',
                badge: 'Top floor',
                photo: '/sluggers-suite.jpg',
              },
              {
                slug: 'the-ivy',
                name: 'The Ivy',
                meta: 'Garden Level, closest to street',
                badge: 'Sister unit',
                photo: '/field-view-loft.png',
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
