'use client'

import { useEffect, useState } from 'react'

/**
 * Soft visual cue shown when the user arrives at /search with date/guest URL params.
 *
 * Hospitable's search widget rejects synthetic click events on the "Search" button
 * (anti-bot protection). So while we auto-fill dates and guests from the URL, the
 * user has to click "Search" once. This component tells them so — and fades away
 * after they do.
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
    <div style={{
      background: '#fff8f3',
      border: '1.5px solid #f3d6c4',
      borderRadius: 12,
      padding: '14px 20px',
      marginBottom: 16,
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      fontSize: 14,
      color: '#1c2433',
      fontFamily: 'Manrope',
    }}>
      <span style={{
        width: 24,
        height: 24,
        borderRadius: '50%',
        background: '#E85A2C',
        color: '#fff',
        display: 'grid',
        placeItems: 'center',
        flex: 'none',
        fontWeight: 800,
        fontSize: 13,
      }}>↓</span>
      <div>
        Your dates and guest count are filled in below. <strong style={{ color: '#15375c' }}>Tap &ldquo;Search&rdquo;</strong> to see availability across our three apartments.
      </div>
    </div>
  )
}
