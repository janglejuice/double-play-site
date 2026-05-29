'use client'

import { useState } from 'react'

function toLocalDateString(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

function addOneDay(dateStr: string): string {
  const d = new Date(dateStr + 'T12:00:00')
  d.setDate(d.getDate() + 1)
  return toLocalDateString(d)
}

export default function BookingForm() {
  const [checkin, setCheckin] = useState('')
  const [checkout, setCheckout] = useState('')
  const today = toLocalDateString(new Date())
  const checkoutMin = checkin ? addOneDay(checkin) : today

  return (
    <form action="/search" method="get" style={{ padding: '18px 20px 20px' }}>
      {/* Check-in */}
      <div style={{ marginBottom: 14 }}>
        <label htmlFor="hero-checkin" style={{ display: 'block', fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', color: '#15375c', textTransform: 'uppercase', marginBottom: 6 }}>Check-in date</label>
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', border: '1.5px solid #e6e8ec', borderRadius: 6, padding: '0 14px', height: 42, background: '#fff' }}>
          <input
            id="hero-checkin"
            type="date"
            name="start_date"
            required
            min={today}
            value={checkin}
            onChange={e => {
              setCheckin(e.target.value)
              if (checkout && checkout <= e.target.value) setCheckout('')
            }}
            style={{ width: '100%', border: 0, outline: 0, background: 'transparent', fontFamily: 'inherit', color: '#1c2433', fontWeight: 600, fontSize: 14 }}
          />
        </div>
      </div>
      {/* Check-out */}
      <div style={{ marginBottom: 14 }}>
        <label htmlFor="hero-checkout" style={{ display: 'block', fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', color: '#15375c', textTransform: 'uppercase', marginBottom: 6 }}>Check-out date</label>
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', border: '1.5px solid #e6e8ec', borderRadius: 6, padding: '0 14px', height: 42, background: '#fff' }}>
          <input
            id="hero-checkout"
            type="date"
            name="end_date"
            required
            min={checkoutMin}
            value={checkout}
            onChange={e => setCheckout(e.target.value)}
            style={{ width: '100%', border: 0, outline: 0, background: 'transparent', fontFamily: 'inherit', color: '#1c2433', fontWeight: 600, fontSize: 14 }}
          />
        </div>
      </div>
      {/* Guests */}
      <div style={{ marginBottom: 14 }}>
        <label htmlFor="hero-guests" style={{ display: 'block', fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', color: '#15375c', textTransform: 'uppercase', marginBottom: 6 }}>Guests</label>
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', border: '1.5px solid #e6e8ec', borderRadius: 6, padding: '0 14px', height: 42, background: '#fff' }}>
          <select id="hero-guests" name="adults" defaultValue="2" style={{ width: '100%', border: 0, outline: 0, background: 'transparent', fontFamily: 'inherit', color: '#1c2433', fontWeight: 600, fontSize: 14, appearance: 'none', paddingRight: 22 }}>
            {[1,2,3,4,5].map(n => <option key={n} value={n}>{n} guest{n > 1 ? 's' : ''}</option>)}
          </select>
          <span style={{ position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%) rotate(45deg)', width: 7, height: 7, borderRight: '2px solid #15375c', borderBottom: '2px solid #15375c', pointerEvents: 'none' }} />
        </div>
      </div>
      <button type="submit" style={{ display: 'block', width: '100%', background: '#E85A2C', color: '#fff', textAlign: 'center', padding: '13px 16px', borderRadius: 6, fontWeight: 700, fontSize: 15, letterSpacing: '0.005em', marginTop: 8, border: 0, cursor: 'pointer', fontFamily: 'inherit' }}>
        Search &amp; Book
      </button>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 12, fontSize: 12, color: '#6b7585', fontWeight: 600 }}>
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#23a06b', display: 'inline-block' }} />
        Instant confirmation · No service fees · Save $200+ vs. Airbnb
      </div>
    </form>
  )
}
