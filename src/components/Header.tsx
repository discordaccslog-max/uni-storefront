'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

const announcements = ['Based In California', 'Over 35,000+ Customers']

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [announcementIdx, setAnnouncementIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => {
      setAnnouncementIdx((i) => (i + 1) % announcements.length)
    }, 3000)
    return () => clearInterval(t)
  }, [])

  return (
    <header style={{ background: '#0f0f10', position: 'sticky', top: 0, zIndex: 50 }}>

      {/* Announcement bar — white text on #0f0f10 */}
      <div
        style={{
          background: '#0f0f10',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          textAlign: 'center',
          padding: '10px 16px',
          fontSize: '14px',
          fontWeight: 600,
          color: '#fff',
          letterSpacing: '0.5px',
        }}
      >
        {announcements[announcementIdx]}
      </div>

      {/* Main header */}
      <div
        style={{
          maxWidth: '1600px',
          margin: '0 auto',
          padding: '20px 50px 0',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 0,
        }}
      >
        {/* Logo row with search/account/cart icons */}
        <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Search icon */}
          <button aria-label="Search" style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', fontSize: '20px', padding: '4px' }}>
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
          </button>

          {/* Logo — Oswald, centered */}
          <Link
            href="/"
            style={{
              fontFamily: 'var(--font-oswald), Oswald, sans-serif',
              fontSize: '28px',
              fontWeight: 500,
              letterSpacing: '4px',
              color: '#fff',
              textDecoration: 'none',
              textTransform: 'uppercase',
            }}
          >
            UNI
          </Link>

          {/* Account + Cart icons */}
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <button aria-label="Account" style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', padding: '4px' }}>
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
              </svg>
            </button>
            <button aria-label="Cart" style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', padding: '4px' }}>
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Desktop nav — centered below logo */}
        <nav
          className="hidden md:flex"
          style={{ gap: '32px', paddingTop: '12px', paddingBottom: '12px' }}
        >
          {[
            { label: 'Home', href: '/' },
            { label: 'Catalog', href: '/products' },
            { label: 'Contact', href: '/contact' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontFamily: 'var(--font-figtree), Figtree, sans-serif',
                fontSize: '18px',
                fontWeight: 500,
                color: '#fff',
                textDecoration: 'none',
                letterSpacing: '0.3px',
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden absolute right-5 top-14"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          aria-label="Toggle menu"
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <span style={{ display: 'block', width: '22px', height: '2px', background: '#fff', transition: 'transform 0.2s', transform: menuOpen ? 'rotate(45deg) translateY(7px)' : 'none' }} />
            <span style={{ display: 'block', width: '22px', height: '2px', background: '#fff', opacity: menuOpen ? 0 : 1, transition: 'opacity 0.2s' }} />
            <span style={{ display: 'block', width: '22px', height: '2px', background: '#fff', transition: 'transform 0.2s', transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none' }} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
        >
          {[
            { label: 'Home', href: '/' },
            { label: 'Catalog', href: '/products' },
            { label: 'Contact', href: '/contact' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block',
                padding: '14px 24px',
                fontFamily: 'var(--font-figtree), Figtree, sans-serif',
                fontSize: '18px',
                fontWeight: 500,
                color: '#fff',
                textDecoration: 'none',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
