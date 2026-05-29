import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer style={{ background: '#15375c', color: '#cbd6e3', padding: '64px 0 28px' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 32px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr 1fr 1.1fr',
          gap: 32,
          paddingBottom: 48,
          borderBottom: '1px solid rgba(255,255,255,0.12)',
        }}>
          {/* Brand */}
          <div>
            <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 12, color: '#fff', textDecoration: 'none' }}>
              <Image src="/logo-mark.png" alt="" width={46} height={46} style={{ width: 46, height: 46, objectFit: 'contain', flex: 'none' }} />
              <span style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 23, lineHeight: 1.05, color: '#fff' }}>
                Double Play
                <span style={{ display: 'block', fontSize: 14, fontStyle: 'italic', fontWeight: 400, color: '#aabacb', marginTop: 1 }}>at Wrigley</span>
              </span>
            </Link>
            <p style={{ color: '#9fb0c5', fontSize: 14, marginTop: 20, maxWidth: 300, lineHeight: 1.6 }}>
              Three 2-bedroom apartments directly across from Wrigley Field. Book direct, save the fees, walk to the game.
            </p>
          </div>

          {/* Home */}
          <div>
            <h4 style={{ color: '#fff', fontSize: 12, letterSpacing: '0.22em', textTransform: 'uppercase', margin: '0 0 18px', fontWeight: 800 }}>Home</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[['Apartments', '/#apartments'], ['Comparison', '/compare'], ['Calendar', '/events'], ['Guide', '/neighborhood']].map(([label, href]) => (
                <li key={label}><Link href={href} style={{ color: '#aabacb', fontSize: 14, textDecoration: 'none' }}>{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 style={{ color: '#fff', fontSize: 12, letterSpacing: '0.22em', textTransform: 'uppercase', margin: '0 0 18px', fontWeight: 800 }}>About</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[['Events', '/events'], ['Reviews', '/reviews'], ['FAQ', '/faq']].map(([label, href]) => (
                <li key={label}><Link href={href} style={{ color: '#aabacb', fontSize: 14, textDecoration: 'none' }}>{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: '#fff', fontSize: 12, letterSpacing: '0.22em', textTransform: 'uppercase', margin: '0 0 18px', fontWeight: 800 }}>Contact</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <li><a href="mailto:stay@doubleplaywrigley.com" style={{ color: '#aabacb', fontSize: 14 }}>stay@doubleplaywrigley.com</a></li>
              <li><a href="#" style={{ color: '#aabacb', fontSize: 14 }}>Privacy</a></li>
              <li><a href="#" style={{ color: '#aabacb', fontSize: 14 }}>Contact form</a></li>
            </ul>
            <div style={{ color: '#aabacb', fontSize: 14, marginTop: 14 }}>Wrigleyville, Chicago, IL</div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 24, fontSize: 12, color: '#7e92aa' }}>
          <div>Powered by Hospitable and PriceLabs · © 2026 Double Play at Wrigley</div>
          <div style={{ display: 'flex', gap: 14 }} aria-label="Social links">
            {/* Instagram */}
            <a href="#" aria-label="Instagram" style={{ width: 34, height: 34, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.18)', display: 'grid', placeItems: 'center', color: '#cbd6e3' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>
            </a>
            {/* Facebook */}
            <a href="#" aria-label="Facebook" style={{ width: 34, height: 34, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.18)', display: 'grid', placeItems: 'center', color: '#cbd6e3' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M13 22v-8h3l1-4h-4V7.5c0-1.1.4-2 2-2h2V2.2C16.5 2.1 15.4 2 14.2 2 11.6 2 10 3.6 10 6.7V10H7v4h3v8h3z"/></svg>
            </a>
            {/* YouTube */}
            <a href="#" aria-label="YouTube" style={{ width: 34, height: 34, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.18)', display: 'grid', placeItems: 'center', color: '#cbd6e3' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M21.6 7.2a2.5 2.5 0 0 0-1.7-1.7C18.2 5 12 5 12 5s-6.2 0-7.9.5A2.5 2.5 0 0 0 2.4 7.2C2 8.9 2 12 2 12s0 3.1.4 4.8a2.5 2.5 0 0 0 1.7 1.7C5.8 19 12 19 12 19s6.2 0 7.9-.5a2.5 2.5 0 0 0 1.7-1.7C22 15.1 22 12 22 12s0-3.1-.4-4.8zM10 15V9l5 3-5 3z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
