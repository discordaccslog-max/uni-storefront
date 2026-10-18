'use client'

import Link from 'next/link'
import { useState } from 'react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Singles', href: '/collections/single' },
  { label: 'Bulk', href: '/collections/bulk' },
  { label: 'All Products', href: '/products' },
]

const announcements = ['Based In California', 'Over 35,000+ Customers Nationwide']

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [announcementIdx] = useState(0)

  return (
    <header className="sticky top-0 z-50">
      {/* Announcement bar */}
      <div
        className="text-center py-2 px-4 text-xs font-semibold tracking-widest uppercase"
        style={{ background: '#161718', color: '#FFD976', borderBottom: '1px solid rgba(212,175,55,0.18)' }}
      >
        {announcements[announcementIdx % announcements.length]}
      </div>

      {/* Main nav */}
      <nav
        className="flex items-center justify-between px-6 py-4 max-w-site mx-auto w-full"
        style={{ background: '#0e0e10', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
      >
        <Link href="/" className="font-heading text-2xl font-bold tracking-widest text-white hover:text-[#e3fc02] transition-colors">
          UNI
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-semibold tracking-wider uppercase text-[#A5A7AC] hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/products"
            className="px-4 py-2 text-sm font-bold uppercase tracking-wider bg-[#e3fc02] text-[#0e0e10] hover:opacity-90 transition-opacity"
          >
            Shop Now
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden" style={{ background: '#161718', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <ul className="flex flex-col py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block px-6 py-3 text-sm font-semibold tracking-wider uppercase text-[#A5A7AC] hover:text-white hover:bg-black/20 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="px-6 pt-3">
              <Link
                href="/products"
                className="block text-center py-2 text-sm font-bold uppercase tracking-wider bg-[#e3fc02] text-[#0e0e10]"
                onClick={() => setMenuOpen(false)}
              >
                Shop Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
