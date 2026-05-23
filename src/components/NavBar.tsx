import Link from 'next/link'
import Image from 'next/image'

export default function NavBar() {
  return (
    <header style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 30,
      padding: '28px 0',
    }}>
      <div style={{
        maxWidth: 1320,
        margin: '0 auto',
        padding: '0 32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 48,
      }}>
        <Link href="/" aria-label="Double Play at Wrigley" style={{
          display: 'flex',
          alignItems: 'center',
          gap: 0,
          color: '#fff',
          textDecoration: 'none',
        }}>
          <span style={{ width: 170, height: 150, flex: 'none', display: 'grid', placeItems: 'center' }}>
            <Image src="/logo-mark.png" alt="" width={170} height={150} style={{ objectFit: 'contain', filter: 'drop-shadow(0 2px 12px rgba(0,0,0,0.35))' }} />
          </span>
          <span style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: 48,
            lineHeight: 1,
            letterSpacing: '-0.01em',
            color: '#fff',
            marginLeft: -32,
          }}>
            Double Play
            <span style={{ display: 'block', fontSize: 28, fontStyle: 'italic', fontWeight: 400, marginTop: 4 }}>at Wrigley</span>
          </span>
        </Link>

        <nav aria-label="Main" style={{ display: 'flex', alignItems: 'center', gap: 42 }}>
          {[
            { label: 'Home', href: '/', active: true },
            { label: 'Apartments', href: '/#apartments' },
            { label: 'Comparison', href: '/compare' },
            { label: 'Calendar', href: '/events' },
            { label: 'Guide', href: '/neighborhood' },
            { label: 'Reviews', href: '/reviews' },
            { label: 'FAQ', href: '/faq' },
          ].map(({ label, href, active }) => (
            <Link key={label} href={href} style={{
              fontSize: 14,
              fontWeight: 700,
              letterSpacing: '0.14em',
              color: '#fff',
              textTransform: 'uppercase',
              position: 'relative',
              padding: '6px 0',
              textShadow: '0 1px 14px rgba(0,0,0,0.35)',
              textDecoration: 'none',
              borderBottom: active ? '3px solid #E85A2C' : 'none',
              paddingBottom: active ? '3px' : '6px',
            }}>
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
