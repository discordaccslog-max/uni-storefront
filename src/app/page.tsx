import Link from 'next/link'
import ProductCard from '@/components/ProductCard'
import { getProductsByCollection } from '@/data/products'

const singleProducts = getProductsByCollection('single')
const bulkProducts = getProductsByCollection('bulk')

const valueProps = [
  {
    icon: '🏷️',
    title: 'Dispensary Direct',
    desc: 'We only partner with licensed dispensaries so products remain compliant, traceable, and fresh.',
  },
  {
    icon: '✅',
    title: 'Authenticated & Verified',
    desc: 'Each item is sealed, batch-checked, and verified for authenticity before it ships to you.',
  },
  {
    icon: '🚚',
    title: 'Fast, Discreet Delivery',
    desc: 'Plain packaging, real-time updates, and quick fulfillment — your privacy comes first.',
  },
]

const steps = [
  { num: '1', title: 'Browse', desc: 'Choose verified products curated from trusted dispensaries.' },
  { num: '2', title: 'Verify', desc: 'We confirm authenticity, seal integrity, and batch details on every item.' },
  { num: '3', title: 'Deliver', desc: 'Your order ships quickly in discreet, protective packaging with tracking.' },
  { num: '4', title: 'Enjoy', desc: 'Open-box confidence: what you ordered is exactly what arrives — verified.' },
]

const faqs = [
  {
    q: 'Where do you source products?',
    a: 'Exclusively from licensed dispensaries and authorized suppliers. We do not purchase from grey-market sources.',
  },
  {
    q: 'How do you verify authenticity?',
    a: "We inspect tamper-evident seals, confirm batch/lot info, and cross-check with supplier data. If an item doesn't pass, it doesn't ship.",
  },
  {
    q: 'What does delivery look like?',
    a: 'Your order ships quickly in plain packaging with full tracking. Delivery timelines are shown at checkout based on your address.',
  },
]

export default function HomePage() {
  return (
    <div className="max-w-site mx-auto w-full px-4 sm:px-6">

      {/* Shipping ETA Banner */}
      <div className="flex justify-center mt-6 mb-2">
        <div
          className="flex items-center gap-3 px-4 py-3 rounded-2xl w-full max-w-3xl"
          style={{
            background: 'rgba(0,0,0,0.45)',
            border: '1px solid rgba(212,175,55,0.35)',
            backdropFilter: 'blur(6px)',
          }}
        >
          <span
            className="w-2.5 h-2.5 rounded-full flex-shrink-0"
            style={{ background: '#d4af37', boxShadow: '0 0 0 4px rgba(212,175,55,0.16)' }}
          />
          <p className="text-sm" style={{ color: 'rgba(255,255,255,0.92)' }}>
            Current Shipping ETA:{' '}
            <strong style={{ color: '#d4af37' }}>2–4 Business Days (Standard USPS Shipping)</strong>
          </p>
        </div>
      </div>

      {/* Hero */}
      <section className="py-10">
        <span
          className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4"
          style={{ color: '#FFD976', background: 'rgba(212,175,55,0.08)', border: '1px solid rgba(212,175,55,0.28)' }}
        >
          Premium • Fast • Verified
        </span>
        <h1
          className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4"
          style={{ maxWidth: '800px' }}
        >
          Dispensary-Sourced Vapes.{' '}
          <span style={{ color: '#e3fc02' }}>Delivered To Your Door.</span>
        </h1>
        <p className="text-[#A5A7AC] text-base sm:text-lg mb-6 max-w-2xl">
          We source directly from licensed dispensaries and deliver to you quickly and discreetly.
          Every product is authenticated and quality-checked so you always know exactly what you're getting.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/products"
            className="px-6 py-3 font-bold uppercase tracking-wider text-sm"
            style={{ background: 'linear-gradient(180deg,#E8C766,#BA9930)', color: '#111' }}
          >
            Explore Products
          </Link>
          <Link
            href="/collections/bulk"
            className="px-6 py-3 font-bold uppercase tracking-wider text-sm"
            style={{ background: 'transparent', color: '#fff', border: '1px solid rgba(212,175,55,0.28)' }}
          >
            Bulk Orders
          </Link>
        </div>

        {/* Value Props */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
          {valueProps.map((v) => (
            <div
              key={v.title}
              className="p-4 rounded-2xl"
              style={{ background: '#161718', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-lg mb-3"
                style={{ background: 'rgba(212,175,55,0.12)', border: '1px solid rgba(212,175,55,0.28)' }}
              >
                {v.icon}
              </div>
              <h3 className="font-heading font-bold text-base mb-1">{v.title}</h3>
              <p className="text-sm text-[#A5A7AC]">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-8">
        <span
          className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5"
          style={{ color: '#FFD976', background: 'rgba(212,175,55,0.08)', border: '1px solid rgba(212,175,55,0.28)' }}
        >
          How it works
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((s) => (
            <div
              key={s.num}
              className="p-4 rounded-2xl flex gap-3"
              style={{ background: '#161718', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm"
                style={{ background: 'rgba(212,175,55,0.14)', border: '1px solid rgba(212,175,55,0.28)', color: '#FFD976' }}
              >
                {s.num}
              </div>
              <div>
                <h3 className="font-heading font-bold text-base mb-1">{s.title}</h3>
                <p className="text-sm text-[#A5A7AC]">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pills strip */}
        <div
          className="flex flex-wrap gap-2 justify-center items-center mt-5 p-4 rounded-2xl"
          style={{ background: 'linear-gradient(180deg,#171719,#141416)', border: '1px solid rgba(212,175,55,0.28)' }}
        >
          {['Licensed sourcing', 'Tamper-evident seals', 'Batch / lot checks', 'Discreet packaging'].map((p) => (
            <span
              key={p}
              className="text-xs px-3 py-1.5 rounded-full"
              style={{ border: '1px solid rgba(212,175,55,0.28)', color: '#FFD976', background: 'rgba(212,175,55,0.08)' }}
            >
              {p}
            </span>
          ))}
        </div>
      </section>

      {/* Singles collection */}
      <section className="py-8">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold uppercase mb-1">
          <em>Dispensary-Sourced, Authenticated &amp; Delivered.</em>
        </h2>
        <p className="text-[#A5A7AC] text-sm mb-6">Individual units — premium quality, verified every time.</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {singleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-6">
          <Link
            href="/collections/single"
            className="inline-block px-6 py-2 text-sm font-bold uppercase tracking-wider"
            style={{ border: '1px solid #e3fc02', color: '#e3fc02' }}
          >
            View All Singles
          </Link>
        </div>
      </section>

      {/* Bulk collection */}
      <section className="py-8">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold uppercase mb-1">
          Bulk Orders / Prices
        </h2>
        <p className="text-[#A5A7AC] text-sm mb-6">
          Contact us for any larger bulk order inquiries!
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {bulkProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-6">
          <Link
            href="/collections/bulk"
            className="inline-block px-6 py-3 text-sm font-bold uppercase tracking-wider"
            style={{ background: '#e3fc02', color: '#0e0e10' }}
          >
            View All Bulk
          </Link>
        </div>
      </section>

      {/* Raw Garden sponsor badge */}
      <section className="py-10 flex justify-center">
        <div
          className="rounded-3xl p-10 text-center max-w-lg w-full relative overflow-hidden"
          style={{
            background: 'radial-gradient(circle at center, rgba(255,215,0,0.08), rgba(0,0,0,0.4))',
            border: '1px solid rgba(212,175,55,0.25)',
            boxShadow: '0 0 24px rgba(255,215,0,0.05)',
          }}
        >
          <h2
            className="font-heading text-2xl font-bold uppercase tracking-wider"
            style={{ color: '#FFD976' }}
          >
            Official Sponsor of Raw Garden
          </h2>
          <p className="text-sm text-[#aaa] mt-2">Based in California</p>
        </div>
      </section>

      {/* CTA strip */}
      <section
        className="py-12 text-center rounded-none mb-8"
        style={{ background: '#0e0e10' }}
      >
        <h2 className="font-heading text-3xl sm:text-4xl font-bold uppercase italic mb-6">
          Presented / Managed By UNI.{' '}
          <span style={{ color: '#e3fc02' }}>35,000+ Customers Nationwide</span>
        </h2>
        <Link
          href="/products"
          className="inline-block px-8 py-3 font-bold uppercase tracking-wider text-sm"
          style={{ background: '#e3fc02', color: '#0e0e10' }}
        >
          Shop Now!
        </Link>
      </section>

      {/* FAQ */}
      <section className="py-8 max-w-2xl">
        <span
          className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5"
          style={{ color: '#FFD976', background: 'rgba(212,175,55,0.08)', border: '1px solid rgba(212,175,55,0.28)' }}
        >
          FAQs
        </span>
        <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
          {faqs.map((faq, i) => (
            <details
              key={faq.q}
              className="group"
              style={{ borderTop: i > 0 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}
            >
              <summary
                className="cursor-pointer px-4 py-4 font-bold text-sm list-none flex justify-between items-center"
                style={{ background: '#161718' }}
              >
                {faq.q}
                <span className="text-[#FFD976] group-open:rotate-180 transition-transform">▾</span>
              </summary>
              <div className="px-4 pb-4 text-sm text-[#A5A7AC]" style={{ background: '#121314' }}>
                {faq.a}
              </div>
            </details>
          ))}
        </div>
        <p className="text-xs text-[#555] mt-3">
          <strong style={{ color: '#FFD976' }}>Important:</strong> By browsing you confirm you are 21+ and agree to abide by all local regulations.
          Availability may vary by region.
        </p>
      </section>

    </div>
  )
}
