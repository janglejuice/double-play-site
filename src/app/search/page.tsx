import Link from 'next/link'
import HospitableSearch from '@/components/HospitableSearch'
import SearchPrompt from '@/components/SearchPrompt'

export const metadata = {
  title: 'Search Apartments — Double Play at Wrigley',
  description:
    'Search availability across all three of our Wrigleyville apartments. Real-time pricing, instant booking, no service fees.',
}

const NAVY = '#15375c'
const NAVY_INK = '#0b1f36'
const ACCENT = '#E85A2C'
const INK = '#1c2433'
const MUTED = '#6b7585'
const WRAP: React.CSSProperties = { maxWidth: 1240, margin: '0 auto', padding: '0 40px' }

export default function SearchPage() {
  return (
    <div style={{ background: '#fff', color: INK }}>
      {/* Hero */}
      <section style={{
        background: NAVY_INK,
        color: '#fff',
        padding: '220px 32px 60px',
      }}>
        <div style={{ ...WRAP }}>
          <div style={{
            fontSize: 11,
            fontWeight: 800,
            letterSpacing: '.22em',
            color: ACCENT,
            textTransform: 'uppercase',
            marginBottom: 14,
          }}>Find Your Apartment</div>
          <h1 style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: 52,
            lineHeight: 1.05,
            margin: '0 0 18px',
            letterSpacing: '-.02em',
          }}>
            Search availability across our three apartments.
          </h1>
          <p style={{
            fontSize: 17,
            lineHeight: 1.65,
            color: 'rgba(255,255,255,.72)',
            maxWidth: 640,
            margin: 0,
          }}>
            All three of our apartments in Wrigleyville. Real-time pricing, instant
            confirmation, and zero service fees when you book direct.
          </p>
        </div>
      </section>

      {/* Search widget */}
      <section style={{ padding: '32px 32px 96px', background: '#fff' }}>
        <div style={{ ...WRAP }}>
          <SearchPrompt />
          <HospitableSearch />
        </div>
      </section>

      {/* Help */}
      <section style={{ padding: '0 32px 96px', background: '#fff' }}>
        <div style={{
          ...WRAP,
          maxWidth: 800,
        }}>
          <div style={{
            background: '#fdf6f1',
            border: '1px solid #f3d6c4',
            borderRadius: 14,
            padding: 28,
            display: 'flex',
            gap: 20,
            alignItems: 'flex-start',
            flexWrap: 'wrap',
          }}>
            <div style={{ flex: 1, minWidth: 280 }}>
              <div style={{
                fontSize: 11,
                fontWeight: 800,
                letterSpacing: '.18em',
                color: ACCENT,
                textTransform: 'uppercase',
                marginBottom: 8,
              }}>Need help choosing?</div>
              <h2 style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: 24,
                fontWeight: 400,
                color: NAVY,
                margin: '0 0 10px',
                letterSpacing: '-.01em',
              }}>We&apos;ll recommend the right unit.</h2>
              <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.6, margin: 0 }}>
                All three apartments are in the same building, all 2-bedroom 1-bath, all a 1-minute walk to Wrigley.
                Each has its own personality based on the floor. Compare them side-by-side or message us directly.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <Link href="/compare" style={{
                background: NAVY,
                color: '#fff',
                padding: '12px 22px',
                borderRadius: 8,
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: '.04em',
                textDecoration: 'none',
                textAlign: 'center',
              }}>Compare Apartments →</Link>
              <Link href="mailto:stay@doubleplaywrigley.com" style={{
                background: 'transparent',
                color: NAVY,
                border: `1.5px solid ${NAVY}`,
                padding: '11px 22px',
                borderRadius: 8,
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: '.04em',
                textDecoration: 'none',
                textAlign: 'center',
              }}>Message us</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
