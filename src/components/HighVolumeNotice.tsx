'use client'

import { useEffect, useRef, useState } from 'react'

export default function HighVolumeNotice() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const barRef = useRef<HTMLDivElement>(null)
  const autoTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  function close() {
    if (autoTimerRef.current) clearTimeout(autoTimerRef.current)
    setVisible(false)
    try { sessionStorage.setItem('hv_notice_seen', '1') } catch {}
    setTimeout(() => setDismissed(true), 600)
  }

  useEffect(() => {
    try { if (sessionStorage.getItem('hv_notice_seen')) return } catch {}

    const showTimer = setTimeout(() => {
      setVisible(true)
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (barRef.current) {
            barRef.current.style.transition = 'width 10s linear'
            barRef.current.style.width = '0%'
          }
        })
      })
      autoTimerRef.current = setTimeout(close, 10500)
    }, 3000)

    return () => clearTimeout(showTimer)
  }, [])

  if (dismissed) return null

  return (
    <div
      role="status"
      aria-live="polite"
      style={{
        position: 'fixed',
        bottom: 28,
        right: 24,
        zIndex: 9999,
        background: '#1a1a1a',
        border: '1px solid #c9a84c',
        borderTop: '3px solid #c9a84c',
        borderRadius: 8,
        padding: '18px 44px 18px 18px',
        maxWidth: 360,
        width: 'calc(100vw - 48px)',
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'transform 0.55s cubic-bezier(.22,1,.36,1), opacity 0.5s ease',
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      <button
        onClick={close}
        aria-label="Close"
        style={{
          position: 'absolute', top: 10, right: 13,
          background: 'none', border: 'none', color: '#c9a84c',
          fontSize: 17, cursor: 'pointer', lineHeight: 1, padding: 0,
        }}
      >✕</button>

      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <line x1="12" y1="8" x2="12" y2="12"/>
          <line x1="12" y1="16" x2="12.01" y2="16"/>
        </svg>
        <span style={{ fontSize: 10, letterSpacing: '2.5px', color: '#c9a84c', textTransform: 'uppercase', fontWeight: 600 }}>
          Site Notice
        </span>
      </div>

      <p style={{ fontSize: 13, color: '#dddddd', lineHeight: 1.65, margin: 0 }}>
        We are currently experiencing a{' '}
        <span style={{ color: '#c9a84c', fontWeight: 600 }}>high volume of orders</span>
        {' '}and increased traffic. You may notice slight delays while browsing the website; shipping times are the same as usual{' '}
        <span style={{ color: '#ffffff', fontWeight: 600 }}>(1–3 business days)</span>.
        {' '}Thank you for your patience and cooperation.
      </p>

      <div
        ref={barRef}
        style={{
          position: 'absolute',
          bottom: 0, left: 0,
          height: 2,
          background: '#c9a84c',
          width: '100%',
          borderRadius: '0 0 6px 6px',
        }}
      />
    </div>
  )
}
