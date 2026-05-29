'use client'

import { useEffect, useState } from 'react'

/**
 * Prominent cue shown when the user arrives at /search with date/guest URL params.
 *
 * Hospitable's search widget rejects synthetic click events on the "Search" button
 * (anti-bot protection). So while we auto-fill dates and guests from the URL, the
 * user has to click "Search" once. This banner makes that obvious, points at the
 * form below, and fades away once results render.
 */
export default function SearchPrompt() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const sp = new URLSearchParams(window.location.search)
    const hasDates = sp.get('start_date') || sp.get('checkin') || sp.get('startDate')
    if (!hasDates) return
    setShow(true)

    // Auto-dismiss once results render (results-container gets >1 child)
    const interval = setInterval(() => {
      const widget = document.querySelector('hospitable-direct-mps')
      if (!widget?.shadowRoot) return
      const rc = widget.shadowRoot.querySelector('.results-container')
      if (rc && rc.children.length > 1) {
        setShow(false)
        clearInterval(interval)
      }
    }, 600)
    return () => clearInterval(interval)
  }, [])

  if (!show) return null

  return (
    <>
      <style>{`
        @keyframes sp-bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(6px); } }
        .sp-arrow { animation: sp-bounce 1.3s ease-in-out infinite; }
        @keyframes sp-pulse { 0%, 100% { box-shadow: 0 14px 30px -12px rgba(15,42,72,0.45); } 50% { box-shadow: 0 18px 38px -10px rgba(232,90,44,0.40); } }
        .sp-banner { animation: sp-pulse 2.4s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .sp-arrow, .sp-banner { animation: none !important; }
        }
      `}</style>

      <div style={{ position: 'relative', marginBottom: 28 }}>
        <div
          className="sp-banner"
          style={{
            position: 'relative',
            background: 'linear-gradient(135deg, #15375c 0%, #0f2a48 100%)',
            borderRadius: 16,
            padding: '22px 26px',
            display: 'flex',
            alignItems: 'center',
            gap: 18,
            fontFamily: 'Manrope, system-ui, sans-serif',
            overflow: 'hidden',
          }}
        >
          {/* subtle accent corner */}
          <span aria-hidden style={{
            position: 'absolute', top: -40, right: -40, width: 140, height: 140,
            borderRadius: '50%', background: 'rgba(232,90,44,0.14)', pointerEvents: 'none',
          }} />

          {/* Icon badge */}
          <span style={{
            width: 52, height: 52, borderRadius: 14, flex: 'none',
            background: '#E85A2C', display: 'grid', placeItems: 'center',
            position: 'relative', zIndex: 1,
          }} aria-hidden>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </span>

          {/* Text */}
          <div style={{ flex: 1, minWidth: 0, position: 'relative', zIndex: 1 }}>
            <div style={{ fontSize: 19, fontWeight: 800, color: '#fff', lineHeight: 1.25, marginBottom: 4, letterSpacing: '-0.01em' }}>
              Your dates and guests are ready.
            </div>
            <div style={{ fontSize: 15.5, fontWeight: 500, color: 'rgba(255,255,255,0.72)', lineHeight: 1.45 }}>
              One last step: tap the <strong style={{ color: '#fff', fontWeight: 800 }}>Search</strong> button just below to see all three apartments for these nights.
            </div>
          </div>

          {/* Animated down arrow */}
          <span className="sp-arrow" style={{ flex: 'none', color: '#E85A2C', position: 'relative', zIndex: 1, display: 'grid', placeItems: 'center' }} aria-hidden>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="4" x2="12" y2="20" /><polyline points="6 13 12 20 18 13" />
            </svg>
          </span>
        </div>

        {/* Pointer tail aiming at the form below */}
        <span aria-hidden style={{
          position: 'absolute',
          left: 50,
          bottom: -9,
          width: 18,
          height: 18,
          background: '#0f2a48',
          transform: 'rotate(45deg)',
          borderRadius: 3,
        }} />
      </div>
    </>
  )
}
