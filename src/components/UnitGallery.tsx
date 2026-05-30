'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'

const NAVY = '#15375c'

export type GalleryTile = { src: string; label: string }

type Props = {
  /** Full ordered photo set for the viewer (hero first). */
  photos: string[]
  /** Up to 4 curated preview tiles (grid variant only). */
  tiles?: GalleryTile[]
  heroAlt: string
  unitName: string
  variant?: 'grid' | 'compact'
}

const gridIcon = (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
  </svg>
)

function navButtonStyle(side: 'left' | 'right'): React.CSSProperties {
  return {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    [side]: 8,
    width: 52,
    height: 52,
    borderRadius: 999,
    background: 'rgba(255,255,255,0.12)',
    border: '1px solid rgba(255,255,255,0.25)',
    color: '#fff',
    cursor: 'pointer',
    display: 'grid',
    placeItems: 'center',
    zIndex: 2,
  }
}

function chevron(side: 'left' | 'right') {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {side === 'left' ? <polyline points="15 18 9 12 15 6" /> : <polyline points="9 18 15 12 9 6" />}
    </svg>
  )
}

export default function UnitGallery({ photos, tiles = [], heroAlt, unitName, variant = 'grid' }: Props) {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)
  const total = photos.length
  const closeRef = useRef<HTMLButtonElement>(null)
  const lastFocused = useRef<HTMLElement | null>(null)

  const openAt = useCallback((i: number) => {
    lastFocused.current = document.activeElement as HTMLElement
    setIndex(i)
    setOpen(true)
  }, [])
  const close = useCallback(() => setOpen(false), [])
  const prev = useCallback(() => setIndex(i => (i - 1 + total) % total), [total])
  const next = useCallback(() => setIndex(i => (i + 1) % total), [total])

  useEffect(() => {
    if (!open) {
      lastFocused.current?.focus?.()
      return
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      else if (e.key === 'ArrowLeft') prev()
      else if (e.key === 'ArrowRight') next()
    }
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [open, close, prev, next])

  const indexOfTile = (src: string, fallback: number) => {
    const i = photos.indexOf(src)
    return i >= 0 ? i : fallback
  }

  const viewAllPill = (
    <span style={{
      position: 'absolute', left: 14, bottom: 14, display: 'inline-flex', alignItems: 'center', gap: 7,
      background: 'rgba(11,31,54,0.82)', color: '#fff', fontFamily: 'Manrope', fontSize: 12, fontWeight: 700,
      letterSpacing: '0.02em', padding: '8px 14px', borderRadius: 100,
    }}>
      {gridIcon}
      View all {total} photos
    </span>
  )

  return (
    <>
      {variant === 'grid' ? (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 0.82fr', gridTemplateRows: '280px 280px', gap: 6, borderRadius: 16, overflow: 'hidden', position: 'relative' }}>
          <button type="button" onClick={() => openAt(0)} aria-label={`View all ${total} photos of ${unitName}`}
            style={{ gridRow: '1 / 3', position: 'relative', overflow: 'hidden', background: '#d4d8e0', border: 0, padding: 0, cursor: 'zoom-in' }}>
            <Image src={photos[0]} alt={heroAlt} fill priority sizes="(max-width: 1000px) 100vw, 60vw" style={{ objectFit: 'cover' }} />
            {viewAllPill}
          </button>
          <div style={{ gridRow: '1 / 3', display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: 6 }}>
            {tiles.slice(0, 4).map((tile, i) => (
              <button key={i} type="button" onClick={() => openAt(indexOfTile(tile.src, i + 1))} aria-label={`${unitName}: ${tile.label}, open photo viewer`}
                style={{ position: 'relative', overflow: 'hidden', background: '#d4d8e0', border: 0, padding: 0, cursor: 'zoom-in' }}>
                <Image src={tile.src} alt={`${unitName} ${tile.label}`} fill sizes="(max-width: 1000px) 50vw, 25vw" style={{ objectFit: 'cover' }} />
                <span style={{ position: 'absolute', left: 10, bottom: 10, background: 'rgba(255,255,255,0.92)', color: NAVY, fontSize: 9.5, fontWeight: 700, letterSpacing: '0.06em', padding: '4px 9px', borderRadius: 4, fontFamily: 'ui-monospace, monospace' }}>
                  {tile.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <button type="button" onClick={() => openAt(0)} aria-label={`View all ${total} photos of ${unitName}`}
          style={{ position: 'relative', display: 'block', width: '100%', aspectRatio: '4 / 3', overflow: 'hidden', borderRadius: 14, background: '#d4d8e0', border: 0, padding: 0, cursor: 'zoom-in' }}>
          <Image src={photos[0]} alt={heroAlt} fill priority sizes="(max-width: 1000px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
          {viewAllPill}
        </button>
      )}

      {open && (
        <div role="dialog" aria-modal="true" aria-label={`${unitName} photo viewer`} onClick={close} className="ug-overlay"
          style={{ position: 'fixed', inset: 0, zIndex: 1000, background: 'rgba(11,31,54,0.94)', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, padding: '18px 22px', color: '#fff' }} onClick={e => e.stopPropagation()}>
            <span style={{ fontFamily: 'Manrope', fontWeight: 700, fontSize: 14, letterSpacing: '0.02em' }}>{unitName}</span>
            <span style={{ fontFamily: 'Manrope', fontWeight: 600, fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>{index + 1} / {total}</span>
            <button ref={closeRef} type="button" onClick={close} aria-label="Close photo viewer"
              style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', width: 40, height: 40, borderRadius: 8, cursor: 'pointer', display: 'grid', placeItems: 'center', flex: 'none' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden>
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
          <div style={{ flex: 1, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 16px 24px', minHeight: 0 }} onClick={e => e.stopPropagation()}>
            {total > 1 && <button type="button" onClick={prev} aria-label="Previous photo" className="ug-nav" style={navButtonStyle('left')}>{chevron('left')}</button>}
            <div className="ug-img" style={{ position: 'relative', width: '100%', height: '100%', maxWidth: 1200 }}>
              <Image key={index} src={photos[index]} alt={`${unitName} photo ${index + 1} of ${total}`} fill sizes="100vw" style={{ objectFit: 'contain' }} priority />
            </div>
            {total > 1 && <button type="button" onClick={next} aria-label="Next photo" className="ug-nav" style={navButtonStyle('right')}>{chevron('right')}</button>}
          </div>
          <style>{`
            .ug-overlay { animation: ugFade .2s ease both; }
            @keyframes ugFade { from { opacity: 0 } to { opacity: 1 } }
            .ug-img { animation: ugImg .28s cubic-bezier(0.16,1,0.3,1) both; }
            @keyframes ugImg { from { opacity: 0 } to { opacity: 1 } }
            .ug-nav:hover { background: #E85A2C; border-color: #E85A2C; }
            @media (prefers-reduced-motion: reduce) { .ug-overlay, .ug-img { animation: none; } }
            @media (max-width: 640px) { .ug-nav { width: 44px; height: 44px; } }
          `}</style>
        </div>
      )}
    </>
  )
}
