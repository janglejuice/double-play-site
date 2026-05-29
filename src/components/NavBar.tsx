'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

/**
 * NavBar with two visual modes:
 *
 *   - Homepage ("/"): TALL, transparent, absolute. Sits over the dark Wrigley hero image.
 *     This is the original brand presentation, preserved as-is.
 *
 *   - Every other route: COMPACT 68px, sticky, solid dark navy. Takes up its own space at
 *     the top of the page so unit/compare/search/etc. don't need a header spacer underneath.
 *
 * Both modes share the same link list and mobile drawer behavior.
 */

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Apartments', href: '/#apartments' },
  { label: 'Compare', href: '/compare' },
  { label: 'Calendar', href: '/events' },
  { label: 'Guide', href: '/neighborhood' },
  { label: 'FAQ', href: '/faq' },
]

export default function NavBar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  if (isHome) {
    return <NavBarHomepage open={open} setOpen={setOpen} />
  }
  return <NavBarCompact open={open} setOpen={setOpen} />
}

// ─────────────────────────────────────────────────────────────────────────────
// Homepage: original tall transparent absolute navbar (overlays the hero image)
// ─────────────────────────────────────────────────────────────────────────────
function NavBarHomepage({
  open,
  setOpen,
}: {
  open: boolean
  setOpen: (next: boolean | ((prev: boolean) => boolean)) => void
}) {
  return (
    <header
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 30,
        padding: '28px 0',
      }}
    >
      <div
        style={{
          maxWidth: 1320,
          margin: '0 auto',
          padding: '0 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 48,
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          aria-label="Double Play at Wrigley, Home"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 0,
            color: '#fff',
            textDecoration: 'none',
          }}
        >
          <span
            className="nav-logo-mark"
            style={{
              width: 170,
              height: 150,
              flex: 'none',
              display: 'grid',
              placeItems: 'center',
            }}
          >
            <Image
              src="/logo-mark.png"
              alt=""
              width={170}
              height={150}
              style={{
                objectFit: 'contain',
                filter: 'drop-shadow(0 2px 12px rgba(0,0,0,0.35))',
              }}
            />
          </span>
          <span
            className="nav-logo-text"
            style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: 48,
              lineHeight: 1,
              letterSpacing: '-0.01em',
              color: '#fff',
              marginLeft: -32,
            }}
          >
            Double Play
            <span
              className="nav-logo-sub"
              style={{
                display: 'block',
                fontSize: 28,
                fontStyle: 'italic',
                fontWeight: 400,
                marginTop: 4,
              }}
            >
              at Wrigley
            </span>
          </span>
        </Link>

        {/* Desktop nav links (homepage variant: larger + textShadow for hero overlay) */}
        <nav
          className="nav-desktop"
          aria-label="Main"
          style={{ display: 'flex', alignItems: 'center', gap: 42 }}
        >
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              style={{
                fontSize: 14,
                fontWeight: 700,
                letterSpacing: '0.14em',
                color: '#fff',
                textTransform: 'uppercase',
                padding: '6px 0',
                textShadow: '0 1px 14px rgba(0,0,0,0.35)',
                textDecoration: 'none',
              }}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <HamburgerButton open={open} setOpen={setOpen} />
      </div>

      {open && <MobileDrawer onClose={() => setOpen(false)} />}
    </header>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Every other page: compact 68px sticky dark-navy navbar
// ─────────────────────────────────────────────────────────────────────────────
function NavBarCompact({
  open,
  setOpen,
}: {
  open: boolean
  setOpen: (next: boolean | ((prev: boolean) => boolean)) => void
}) {
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: '#0b1f36',
        borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
        height: 68,
      }}
    >
      <div
        style={{
          maxWidth: 1320,
          height: '100%',
          margin: '0 auto',
          padding: '0 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 32,
        }}
      >
        {/* Logo + wordmark (compact) */}
        <Link
          href="/"
          aria-label="Double Play at Wrigley, Home"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            color: '#fff',
            textDecoration: 'none',
            flex: 'none',
          }}
        >
          <span
            className="nav-logo-mark"
            style={{
              width: 42,
              height: 42,
              flex: 'none',
              display: 'grid',
              placeItems: 'center',
            }}
          >
            <Image
              src="/logo-mark.png"
              alt=""
              width={42}
              height={42}
              style={{ objectFit: 'contain' }}
            />
          </span>
          <span
            style={{
              display: 'flex',
              flexDirection: 'column',
              lineHeight: 1,
              gap: 2,
            }}
          >
            <span
              className="nav-logo-text"
              style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontSize: 20,
                letterSpacing: '-0.005em',
                color: '#fff',
              }}
            >
              Double Play
            </span>
            <span
              className="nav-logo-sub"
              style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontSize: 12,
                fontStyle: 'italic',
                fontWeight: 400,
                color: 'rgba(255, 255, 255, 0.7)',
              }}
            >
              at Wrigley
            </span>
          </span>
        </Link>

        {/* Desktop nav links (compact variant: smaller, no textShadow) */}
        <nav
          className="nav-desktop"
          aria-label="Main"
          style={{ display: 'flex', alignItems: 'center', gap: 28 }}
        >
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: '0.14em',
                color: 'rgba(255, 255, 255, 0.85)',
                textTransform: 'uppercase',
                textDecoration: 'none',
                padding: '6px 0',
              }}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <HamburgerButton open={open} setOpen={setOpen} />
      </div>

      {open && <MobileDrawer onClose={() => setOpen(false)} />}
    </header>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Shared mobile pieces
// ─────────────────────────────────────────────────────────────────────────────
function HamburgerButton({
  open,
  setOpen,
}: {
  open: boolean
  setOpen: (next: boolean | ((prev: boolean) => boolean)) => void
}) {
  return (
    <button
      className="nav-hamburger"
      onClick={() => setOpen(prev => !prev)}
      aria-label={open ? 'Close menu' : 'Open menu'}
      aria-expanded={open}
      aria-controls="mobile-nav"
      style={{
        display: 'none', // CSS overrides at ≤900px
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
        background: 'rgba(255, 255, 255, 0.08)',
        border: '1px solid rgba(255, 255, 255, 0.16)',
        borderRadius: 8,
        color: '#fff',
        cursor: 'pointer',
        flexShrink: 0,
      }}
    >
      {open ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
          <line x1="3" y1="7" x2="21" y2="7" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="17" x2="21" y2="17" />
        </svg>
      )}
    </button>
  )
}

function MobileDrawer({ onClose }: { onClose: () => void }) {
  return (
    <nav id="mobile-nav" className="nav-mobile-drawer" aria-label="Mobile navigation">
      {NAV_LINKS.map(({ label, href }) => (
        <Link key={label} href={href} onClick={onClose}>
          {label}
        </Link>
      ))}
    </nav>
  )
}
