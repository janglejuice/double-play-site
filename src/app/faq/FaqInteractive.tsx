'use client'

import { useState, useEffect } from 'react'
import { faqItems, type FAQItem } from '@/data/faq'

// ── Design tokens ──────────────────────────────────────────────────────────────
const NAVY      = '#15375c'
const NAVY_INK  = '#0b1f36'
const ACCENT    = '#E85A2C'
const INK       = '#1c2433'
const MUTED     = '#6b7585'
const LINE      = '#e6e8ec'
const BG_SOFT   = '#f5f6f8'
const BG_WARM   = '#fdf6f1'
const FONT_DISPLAY = "'DM Serif Display', Georgia, serif"
const FONT_BODY    = "'Manrope', system-ui, sans-serif"

// ── Category registry ─────────────────────────────────────────────────────────
type CategoryMeta = { key: FAQItem['category']; label: string; anchor: string; isRules?: boolean }

const CATEGORIES: CategoryMeta[] = [
  { key: 'Booking',            label: 'Booking',            anchor: 'booking'    },
  { key: 'Check-In',           label: 'Check-In',           anchor: 'checkin'    },
  { key: 'The Apartments',     label: 'The Apartments',     anchor: 'apartments' },
  { key: 'House Rules',        label: 'House Rules',        anchor: 'rules',     isRules: true },
  { key: 'Location & Transit', label: 'Location & Transit', anchor: 'location'   },
  { key: 'Game Day',           label: 'Game Day',           anchor: 'gameday'    },
]

const HOUSE_RULES = [
  { icon: 'ban',   rule: 'No parties, events, or gatherings',    detail: 'No birthday parties, social events, or gatherings of any kind. Violations result in immediate code revocation.' },
  { icon: 'ban',   rule: 'No decorations',                       detail: 'No balloons, confetti, glitter, streamers, birthday decorations, or any temporary decorations of any type.' },
  { icon: 'ban',   rule: 'No smoking inside the building',       detail: 'No smoking in any unit or common area. No exceptions.' },
  { icon: 'check', rule: 'Remove shoes at the door',             detail: 'Please remove shoes upon entering the apartment.' },
  { icon: 'check', rule: 'Observe quiet hours after 10 PM',      detail: 'The building has permanent residents. Loud music and disruptive activity after 10 PM are not acceptable.' },
  { icon: 'check', rule: 'Only listed guests and pets inside',   detail: 'No unauthorized guests or undeclared pets. Message us in advance if your plans change.' },
  { icon: 'check', rule: 'NoiseAware monitoring is active',      detail: 'Sound-level monitoring only. Does not record audio or conversations.' },
]

// ── Icons ─────────────────────────────────────────────────────────────────────
function ChevronDown() {
  return (
    <svg className="faq-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}
function BanIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="2.2" strokeLinecap="round" aria-hidden>
      <circle cx="12" cy="12" r="10" /><line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
    </svg>
  )
}
function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={NAVY} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

// ── FAQ accordion section ─────────────────────────────────────────────────────
function FAQSection({ id, label, items }: { id: string; label: string; items: FAQItem[] }) {
  return (
    <section id={id} className="faq-reveal" style={{ marginBottom: 80, scrollMarginTop: 96 }}>
      <div style={{ marginBottom: 32 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
          <span style={{ width: 24, height: 2, background: ACCENT, borderRadius: 1, display: 'inline-block', flex: 'none' }} />
          <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: ACCENT, fontFamily: FONT_BODY }}>{label}</span>
        </div>
        <h2 style={{
          fontFamily: FONT_BODY, fontWeight: 700, fontSize: 'clamp(26px, 3.2vw, 34px)',
          letterSpacing: '-0.02em', color: NAVY, margin: 0, lineHeight: 1.15,
        }}>
          {label}{' '}
          <em style={{ fontFamily: FONT_DISPLAY, fontStyle: 'italic', fontWeight: 400, color: NAVY }}>questions.</em>
        </h2>
      </div>
      <div style={{ border: `1px solid ${LINE}`, borderRadius: 12, overflow: 'hidden', background: '#fff' }}>
        {items.map((item, i) => (
          <details key={i} style={{ borderBottom: i < items.length - 1 ? `1px solid ${LINE}` : 'none' }}>
            <summary style={{
              display: 'flex', alignItems: 'center', gap: 16,
              padding: '22px 26px', fontFamily: FONT_BODY, fontSize: 17, fontWeight: 700,
              color: NAVY, lineHeight: 1.35, background: '#fff',
            }}>
              <span
                className="faq-num"
                aria-hidden
                style={{
                  flex: 'none', minWidth: 28, fontFamily: FONT_BODY, fontSize: 11,
                  fontWeight: 700, letterSpacing: '0.06em', color: MUTED,
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <span style={{ flex: 1 }}>{item.question}</span>
              <span style={{ color: MUTED, flex: 'none' }}><ChevronDown /></span>
            </summary>
            <div className="faq-answer" style={{
              padding: '0 26px 26px 70px', fontFamily: FONT_BODY, fontSize: 16,
              lineHeight: 1.7, color: INK, maxWidth: '72ch', background: '#fff',
            }}>
              {item.answer}
              {item.link && (
                <div style={{ marginTop: 14 }}>
                  <a href={item.link.url} target="_blank" rel="noopener noreferrer" style={{
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                    color: ACCENT, fontWeight: 700, fontSize: 14, textDecoration: 'none',
                    borderBottom: `1.5px solid ${ACCENT}`, paddingBottom: 1,
                  }}>
                    {item.link.text}
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                  </a>
                </div>
              )}
            </div>
          </details>
        ))}
      </div>
    </section>
  )
}

// ── House rules section ───────────────────────────────────────────────────────
function HouseRulesSection({ id, items }: { id: string; items: FAQItem[] }) {
  return (
    <section id={id} className="faq-reveal" style={{ marginBottom: 80, scrollMarginTop: 96 }}>
      <div style={{ marginBottom: 28 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
          <span style={{ width: 24, height: 2, background: ACCENT, borderRadius: 1, display: 'inline-block', flex: 'none' }} />
          <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: ACCENT, fontFamily: FONT_BODY }}>House Rules</span>
        </div>
        <h2 style={{
          fontFamily: FONT_BODY, fontWeight: 700, fontSize: 'clamp(26px, 3.2vw, 34px)',
          letterSpacing: '-0.02em', color: NAVY, margin: '0 0 10px', lineHeight: 1.15,
        }}>
          Know{' '}
          <em style={{ fontFamily: FONT_DISPLAY, fontStyle: 'italic', fontWeight: 400, color: NAVY }}>before you book.</em>
        </h2>
        <p style={{ fontFamily: FONT_BODY, fontSize: 16, color: MUTED, margin: 0, lineHeight: 1.6, maxWidth: '60ch' }}>
          Firm and non-negotiable. These protect permanent building neighbors and the property.
        </p>
      </div>
      <div style={{ background: BG_WARM, border: '1px solid #f0e4d7', borderRadius: 14, padding: '32px 32px 26px', marginBottom: 32 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '22px 28px' }}>
          {HOUSE_RULES.map((r, i) => (
            <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
              <div style={{ width: 32, height: 32, borderRadius: '50%', background: r.icon === 'ban' ? 'rgba(232,90,44,0.10)' : 'rgba(21,55,92,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none', marginTop: 1 }}>
                {r.icon === 'ban' ? <BanIcon /> : <CheckIcon />}
              </div>
              <div>
                <p style={{ fontFamily: FONT_BODY, fontWeight: 700, fontSize: 15, color: NAVY, margin: '0 0 4px', lineHeight: 1.3, letterSpacing: '-0.005em' }}>{r.rule}</p>
                <p style={{ fontFamily: FONT_BODY, fontSize: 14, color: MUTED, margin: 0, lineHeight: 1.55 }}>{r.detail}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 24, paddingTop: 20, borderTop: '1px solid #e8d9cc', display: 'flex', alignItems: 'flex-start', gap: 12 }}>
          <div style={{ width: 30, height: 30, borderRadius: '50%', background: 'rgba(21,55,92,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none', marginTop: 1 }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={NAVY} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
              <path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/>
            </svg>
          </div>
          <div>
            <p style={{ fontFamily: FONT_BODY, fontWeight: 700, fontSize: 14, color: NAVY, margin: '0 0 3px' }}>NoiseAware is active in all units</p>
            <p style={{ fontFamily: FONT_BODY, fontSize: 13, color: MUTED, margin: 0, lineHeight: 1.5 }}>Sound-level monitoring only. Does not record audio or conversations. Alerts us if decibels exceed residential thresholds.</p>
          </div>
        </div>
        <div style={{ marginTop: 16, padding: '12px 16px', background: 'rgba(232,90,44,0.07)', borderRadius: 8, border: '1px solid rgba(232,90,44,0.18)' }}>
          <p style={{ fontFamily: FONT_BODY, fontSize: 13, color: INK, margin: 0, lineHeight: 1.55 }}>
            <strong style={{ color: ACCENT }}>Violation policy:</strong> Access codes are immediately revoked for rule violations. Guests who misrepresent their stay (parties, additional guests, undeclared pets) will not receive a refund.
          </p>
        </div>
      </div>
      <div style={{ border: `1px solid ${LINE}`, borderRadius: 12, overflow: 'hidden', background: '#fff' }}>
        {items.map((item, i) => (
          <details key={i} style={{ borderBottom: i < items.length - 1 ? `1px solid ${LINE}` : 'none' }}>
            <summary style={{
              display: 'flex', alignItems: 'center', gap: 16,
              padding: '22px 26px', fontFamily: FONT_BODY, fontSize: 17, fontWeight: 700,
              color: NAVY, lineHeight: 1.35, background: '#fff',
            }}>
              <span
                className="faq-num"
                aria-hidden
                style={{
                  flex: 'none', minWidth: 28, fontFamily: FONT_BODY, fontSize: 11,
                  fontWeight: 700, letterSpacing: '0.06em', color: MUTED,
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <span style={{ flex: 1 }}>{item.question}</span>
              <span style={{ color: MUTED, flex: 'none' }}><ChevronDown /></span>
            </summary>
            <div className="faq-answer" style={{
              padding: '0 26px 26px 70px', fontFamily: FONT_BODY, fontSize: 16,
              lineHeight: 1.7, color: INK, maxWidth: '72ch', background: '#fff',
            }}>
              {item.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  )
}

// ── Main interactive component ────────────────────────────────────────────────
export default function FaqInteractive() {
  const [active, setActive] = useState<string>('booking')

  // IntersectionObserver — update active pill as user scrolls
  useEffect(() => {
    const observers: IntersectionObserver[] = []
    CATEGORIES.forEach(cat => {
      const el = document.getElementById(cat.anchor)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(cat.anchor) },
        { rootMargin: '-80px 0px -65% 0px', threshold: 0 }
      )
      observer.observe(el)
      observers.push(observer)
    })
    return () => observers.forEach(o => o.disconnect())
  }, [])

  // Scroll-triggered fade-up reveal for section bodies
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>('.faq-reveal')
    if (!targets.length) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.08 }
    )
    targets.forEach(t => observer.observe(t))
    return () => observer.disconnect()
  }, [])

  const grouped = CATEGORIES.map(cat => ({ ...cat, items: faqItems.filter(f => f.category === cat.key) }))

  const handlePillClick = (anchor: string) => {
    setActive(anchor)
    const el = document.getElementById(anchor)
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <main style={{ fontFamily: FONT_BODY, color: INK, background: '#fff' }}>
      <style>{`
        /* ── Easing tokens ───────────────────────────────────────────── */
        :root {
          --ease-out-quart: cubic-bezier(0.25, 1, 0.5, 1);
          --ease-out-quint: cubic-bezier(0.22, 1, 0.36, 1);
          --ease-out-expo:  cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* ── Accordion baseline ──────────────────────────────────────── */
        details summary { cursor: pointer; list-style: none; user-select: none; transition: background 0.2s var(--ease-out-quart); }
        details summary::-webkit-details-marker { display: none; }
        .faq-chevron { transition: transform 0.22s var(--ease-out-quart); }
        details[open] .faq-chevron { transform: rotate(180deg); }
        details summary:hover { background: ${BG_SOFT} !important; }
        details summary:focus-visible { outline: 2px solid ${ACCENT}; outline-offset: -2px; border-radius: 4px; }

        /* Smooth answer reveal — fires once when details opens */
        @keyframes faqAnswerIn {
          from { opacity: 0; transform: translateY(-4px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        details[open] .faq-answer { animation: faqAnswerIn 0.32s var(--ease-out-quint) both; }

        /* ── Hero entrance choreography ──────────────────────────────── */
        @keyframes faqFadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0);   }
        }
        @keyframes faqMarkIn {
          from { opacity: 0; transform: translateY(-50%) translateX(40px); }
          to   { opacity: 0.055; transform: translateY(-50%) translateX(0); }
        }
        .faq-hero-eyebrow,
        .faq-hero-h1,
        .faq-hero-sub,
        .faq-hero-pills > * {
          opacity: 0;
          animation: faqFadeUp 0.7s var(--ease-out-expo) both;
        }
        .faq-hero-eyebrow { animation-delay: 0.05s; }
        .faq-hero-h1      { animation-delay: 0.15s; }
        .faq-hero-sub     { animation-delay: 0.32s; }
        .faq-hero-pills > *:nth-child(1) { animation-delay: 0.50s; }
        .faq-hero-pills > *:nth-child(2) { animation-delay: 0.55s; }
        .faq-hero-pills > *:nth-child(3) { animation-delay: 0.60s; }
        .faq-hero-pills > *:nth-child(4) { animation-delay: 0.65s; }
        .faq-hero-pills > *:nth-child(5) { animation-delay: 0.70s; }
        .faq-hero-pills > *:nth-child(6) { animation-delay: 0.75s; }
        .faq-hero-mark { animation: faqMarkIn 1.2s var(--ease-out-expo) 0.4s both; }

        /* ── Scroll-triggered section reveal ─────────────────────────── */
        .faq-reveal {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.7s var(--ease-out-quart), transform 0.7s var(--ease-out-quart);
        }
        .faq-reveal.is-revealed {
          opacity: 1;
          transform: translateY(0);
        }

        /* ── Editorial number indicator ──────────────────────────────── */
        .faq-num {
          font-variant-numeric: tabular-nums;
          font-feature-settings: 'tnum';
        }

        /* ── Pill hover ──────────────────────────────────────────────── */
        .faq-pill:not(.is-active):hover {
          background: rgba(255,255,255,0.95) !important;
          border-color: rgba(21,55,92,0.32) !important;
        }

        /* ── Sidebar button hover ────────────────────────────────────── */
        .faq-side-btn:not(.is-active):hover { color: ${NAVY} !important; }

        /* ── Responsive ──────────────────────────────────────────────── */
        @media (max-width: 860px) {
          .faq-sidebar { display: none !important; }
          .faq-body { padding: 40px 20px 64px !important; }
          .faq-hero-mark { display: none !important; }
        }

        /* ── Reduced motion ──────────────────────────────────────────── */
        @media (prefers-reduced-motion: reduce) {
          .faq-hero-eyebrow,
          .faq-hero-h1,
          .faq-hero-sub,
          .faq-hero-pills > *,
          .faq-hero-mark { animation: none !important; opacity: 1 !important; transform: none !important; }
          .faq-hero-mark { opacity: 0.055 !important; }
          .faq-reveal { opacity: 1 !important; transform: none !important; transition: none !important; }
          details[open] .faq-answer { animation: none !important; }
          .faq-chevron { transition: none !important; }
        }
      `}</style>

      {/* Hero — warm cream, editorial, two-column with decorative serif mark */}
      <section style={{
        position: 'relative',
        background: BG_WARM,
        padding: '60px 0 56px',
        borderBottom: `1px solid #efe2d2`,
        overflow: 'hidden',
      }}>
        {/* Decorative serif mark (right-aligned, oversized, navy at low opacity) */}
        <div
          aria-hidden
          className="faq-hero-mark"
          style={{
            position: 'absolute',
            top: '50%',
            right: '-2vw',
            transform: 'translateY(-50%)',
            fontFamily: FONT_DISPLAY,
            fontSize: 'clamp(280px, 38vw, 520px)',
            fontWeight: 400,
            lineHeight: 0.85,
            color: NAVY,
            opacity: 0.055,
            letterSpacing: '-0.04em',
            pointerEvents: 'none',
            userSelect: 'none',
            fontStyle: 'italic',
          }}
        >
          ?
        </div>

        <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: 720 }}>
            <div className="faq-hero-eyebrow" style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
              <span style={{ width: 24, height: 2, background: ACCENT, borderRadius: 1, display: 'inline-block' }} />
              <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: ACCENT, fontFamily: FONT_BODY }}>
                Frequently Asked Questions
              </span>
            </div>
            <h1
              className="faq-hero-h1"
              style={{
                fontFamily: FONT_DISPLAY,
                fontWeight: 400,
                fontSize: 'clamp(38px, 5.2vw, 58px)',
                lineHeight: 1.04,
                letterSpacing: '-0.02em',
                color: NAVY,
                margin: '0 0 20px',
              }}
            >
              Everything you<br />
              <em style={{ fontStyle: 'italic' }}>need to know.</em>
            </h1>
            <p
              className="faq-hero-sub"
              style={{
                fontFamily: FONT_BODY,
                fontSize: 18,
                lineHeight: 1.6,
                color: '#5c5147',
                margin: '0 0 36px',
                maxWidth: 540,
              }}
            >
              Three apartments directly across from Wrigley Field in Wrigleyville, Chicago. Honest answers to what guests ask us most.
            </p>
            {/* Interactive category pills */}
            <div className="faq-hero-pills" style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {CATEGORIES.map(cat => {
                const isActive = active === cat.anchor
                return (
                  <button
                    key={cat.anchor}
                    onClick={() => handlePillClick(cat.anchor)}
                    className={`faq-pill${isActive ? ' is-active' : ''}`}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: 6,
                      padding: '9px 18px', borderRadius: 999,
                      border: isActive
                        ? `1.5px solid ${cat.isRules ? ACCENT : NAVY}`
                        : `1.5px solid rgba(21,55,92,0.16)`,
                      background: isActive
                        ? cat.isRules ? ACCENT : NAVY
                        : 'rgba(255,255,255,0.7)',
                      color: isActive ? '#fff' : NAVY,
                      fontSize: 13, fontWeight: 600, cursor: 'pointer',
                      fontFamily: FONT_BODY,
                      backdropFilter: 'blur(4px)',
                      transition: 'background 0.22s var(--ease-out-quart), color 0.22s var(--ease-out-quart), border-color 0.22s var(--ease-out-quart)',
                    }}
                  >
                    {cat.label}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <div className="faq-body" style={{ maxWidth: 1240, margin: '0 auto', padding: '64px 32px 96px', display: 'flex', gap: 72, alignItems: 'flex-start' }}>

        {/* Sticky sidebar */}
        <aside className="faq-sidebar" style={{ flex: '0 0 200px', position: 'sticky', top: 96 }}>
          <p style={{ fontFamily: FONT_BODY, fontSize: 10, fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase' as const, color: MUTED, marginBottom: 16, marginTop: 0 }}>
            Categories
          </p>
          <nav>
            {CATEGORIES.map((cat, i) => {
              const isActive = active === cat.anchor
              return (
                <button
                  key={cat.anchor}
                  onClick={() => handlePillClick(cat.anchor)}
                  className={`faq-side-btn${isActive ? ' is-active' : ''}`}
                  style={{
                    display: 'flex', width: '100%', alignItems: 'center', gap: 8,
                    padding: '12px 0', fontSize: 14, fontWeight: isActive ? 700 : 500,
                    fontFamily: FONT_BODY, background: 'none', border: 'none', cursor: 'pointer',
                    color: isActive ? (cat.isRules ? ACCENT : NAVY) : MUTED,
                    borderBottom: i < CATEGORIES.length - 1 ? `1px solid ${LINE}` : 'none',
                    textAlign: 'left',
                    transition: 'color 0.2s var(--ease-out-quart)',
                  }}
                >
                  {isActive && (
                    <span style={{ width: 5, height: 5, borderRadius: '50%', background: cat.isRules ? ACCENT : NAVY, flex: 'none' }} />
                  )}
                  {cat.label}
                </button>
              )
            })}
          </nav>
          <div style={{ marginTop: 40, padding: '18px 16px', background: BG_SOFT, borderRadius: 10, border: `1px solid ${LINE}` }}>
            <p style={{ fontFamily: FONT_BODY, fontSize: 12, fontWeight: 700, color: NAVY, margin: '0 0 6px' }}>Still have questions?</p>
            <p style={{ fontFamily: FONT_BODY, fontSize: 12, color: MUTED, margin: '0 0 12px', lineHeight: 1.5 }}>Message us directly. We respond within the hour.</p>
            <a href="mailto:ryan.dh.jang@gmail.com" style={{ display: 'block', textAlign: 'center', background: ACCENT, color: '#fff', padding: '10px 14px', borderRadius: 7, fontSize: 12, fontWeight: 700, textDecoration: 'none', fontFamily: FONT_BODY }}>
              Contact Us
            </a>
          </div>
        </aside>

        {/* FAQ content */}
        <div style={{ flex: 1, minWidth: 0 }}>
          {grouped.map(section =>
            section.isRules ? (
              <HouseRulesSection key={section.anchor} id={section.anchor} items={section.items} />
            ) : (
              <FAQSection key={section.anchor} id={section.anchor} label={section.label} items={section.items} />
            )
          )}
          {/* Bottom CTA */}
          <div style={{ marginTop: 32, padding: '36px 32px', background: NAVY_INK, borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
            <div>
              <p style={{ fontFamily: FONT_DISPLAY, fontWeight: 400, fontSize: 24, color: '#fff', margin: '0 0 6px', lineHeight: 1.15 }}>Still have a question?</p>
              <p style={{ fontFamily: FONT_BODY, fontSize: 15, color: 'rgba(255,255,255,0.6)', margin: 0 }}>We are local Wrigleyville hosts and reply within the hour.</p>
            </div>
            <a href="mailto:ryan.dh.jang@gmail.com" style={{ display: 'inline-block', background: ACCENT, color: '#fff', padding: '15px 28px', borderRadius: 8, fontFamily: FONT_BODY, fontWeight: 700, fontSize: 15, textDecoration: 'none', whiteSpace: 'nowrap', flex: 'none' }}>
              Send us a message
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
