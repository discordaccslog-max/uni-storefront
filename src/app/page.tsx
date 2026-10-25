import Link from 'next/link'
import ProductCard from '@/components/ProductCard'
import { getProductsByCollection } from '@/data/products'

const singleProducts = getProductsByCollection('single')
const bulkProducts = getProductsByCollection('bulk')

const valueProps = [
  { icon: '🏷️', title: 'Dispensary Direct', desc: 'We only partner with licensed dispensaries so products remain compliant, traceable, and fresh.' },
  { icon: '✅', title: 'Authenticated & Verified', desc: 'Each item is sealed, batch-checked, and verified for authenticity before it ships to you.' },
  { icon: '🚚', title: 'Fast, Discreet Delivery', desc: 'Plain packaging, real-time updates, and quick fulfillment — your privacy comes first.' },
]

const steps = [
  { num: '1', title: 'Browse', desc: 'Choose verified products curated from trusted dispensaries.' },
  { num: '2', title: 'Verify', desc: 'We confirm authenticity, seal integrity, and batch details on every item.' },
  { num: '3', title: 'Deliver', desc: 'Your order ships quickly in discreet, protective packaging with tracking.' },
  { num: '4', title: 'Enjoy', desc: 'Open-box confidence: what you ordered is exactly what arrives — verified.' },
]

const faqs = [
  { q: 'Where do you source products?', a: 'Exclusively from licensed dispensaries and authorized suppliers. We do not purchase from grey-market sources.' },
  { q: 'How do you verify authenticity?', a: "We inspect tamper-evident seals, confirm batch/lot info, and cross-check with supplier data. If an item doesn't pass, it doesn't ship." },
  { q: 'What does delivery look like?', a: 'Your order ships quickly in plain packaging with full tracking. Delivery timelines are shown at checkout based on your address.' },
]

/* shared inline styles */
const pill = {
  display: 'inline-flex',
  alignItems: 'center',
  padding: '6px 12px',
  borderRadius: '999px',
  border: '1px solid rgba(212,175,55,0.55)',
  background: 'rgba(212,175,55,0.08)',
  color: '#D4AF37',
  fontSize: '12px',
  fontWeight: 700,
  letterSpacing: '1.5px',
  textTransform: 'uppercase' as const,
}

const card = {
  background: '#161718',
  border: '1px solid rgba(255,255,255,0.06)',
  borderRadius: '14px',
  padding: '20px',
}

export default function HomePage() {
  return (
    <div>
      {/* ── Hero + intro sections (nx-wrap) ── */}
      <div style={{ maxWidth: '1600px', margin: '0 auto', padding: '0 24px' }}>

        {/* Hero */}
        <section style={{ padding: '40px 0 24px' }}>
          <div style={pill}>Premium • Fast • Verified</div>

          <h1
            style={{
              fontFamily: 'var(--font-oswald), Oswald, sans-serif',
              fontSize: 'clamp(32px, 5vw, 56px)',
              fontWeight: 700,
              lineHeight: 1.1,
              color: '#fff',
              margin: '16px 0 12px',
              maxWidth: '800px',
            }}
          >
            Dispensary-Sourced Vapes. Delivered To Your Door.
          </h1>

          <p style={{ color: '#A5A7AC', fontSize: 'clamp(14px, 2vw, 16px)', maxWidth: '680px', marginBottom: '24px', lineHeight: 1.6 }}>
            We source directly from licensed dispensaries and deliver to you quickly and discreetly. Every product is authenticated and quality-checked so you always know exactly what you&apos;re getting.
          </p>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link href="/products" className="btn-gold">Explore Products</Link>
          </div>
        </section>

        {/* Value props */}
        <section style={{ paddingBottom: '32px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
            {valueProps.map((v) => (
              <div key={v.title} style={card}>
                <div style={{
                  width: 38, height: 38, borderRadius: '10px',
                  background: 'rgba(212,175,55,0.12)',
                  border: '1px solid rgba(212,175,55,0.28)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '18px', marginBottom: '12px',
                }}>
                  {v.icon}
                </div>
                <h3 style={{ fontFamily: 'var(--font-oswald), sans-serif', fontWeight: 700, fontSize: '18px', marginBottom: '6px', color: '#fff' }}>{v.title}</h3>
                <p style={{ color: '#A5A7AC', fontSize: '14px', lineHeight: 1.5 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section style={{ paddingBottom: '32px' }}>
          <div style={{ ...pill, marginBottom: '20px' }}>How it works</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px', marginBottom: '16px' }}>
            {steps.map((s) => (
              <div key={s.num} style={{ ...card, display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                <div style={{
                  minWidth: 34, height: 34, borderRadius: '999px',
                  background: 'rgba(212,175,55,0.14)',
                  border: '1px solid rgba(212,175,55,0.28)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 800, color: '#FFD976', fontSize: '14px', flexShrink: 0,
                }}>
                  {s.num}
                </div>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-oswald), sans-serif', fontWeight: 700, fontSize: '16px', marginBottom: '4px', color: '#fff' }}>{s.title}</h3>
                  <p style={{ color: '#A5A7AC', fontSize: '13px', lineHeight: 1.5 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pills strip */}
          <div style={{
            display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center',
            background: 'linear-gradient(180deg,#171719,#141416)',
            border: '1px solid rgba(212,175,55,0.28)',
            borderRadius: '14px', padding: '14px 16px',
          }}>
            {['Licensed sourcing', 'Tamper-evident seals', 'Batch / lot checks', 'Discreet packaging'].map((p) => (
              <span key={p} style={{ ...pill, textTransform: 'none', fontWeight: 600, fontSize: '13px', letterSpacing: '0.3px' }}>{p}</span>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section style={{ paddingBottom: '40px', maxWidth: '760px' }}>
          <div style={{ ...pill, marginBottom: '20px' }}>FAQs</div>
          <div style={{ border: '1px solid rgba(255,255,255,0.06)', borderRadius: '14px', overflow: 'hidden' }}>
            {faqs.map((faq, i) => (
              <details
                key={faq.q}
                style={{ borderTop: i > 0 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}
              >
                <summary style={{
                  cursor: 'pointer', listStyle: 'none',
                  padding: '14px 16px',
                  background: '#161718',
                  fontWeight: 700, fontSize: '14px', color: '#fff',
                  fontFamily: 'var(--font-figtree), sans-serif',
                }}>
                  {faq.q}
                </summary>
                <div style={{ padding: '0 16px 14px', background: '#121314', color: '#A5A7AC', fontSize: '14px', lineHeight: 1.6 }}>
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
          <p style={{ color: '#555', fontSize: '12.5px', marginTop: '10px' }}>
            <strong style={{ color: '#FFD976' }}>Important:</strong> By ordering you confirm you are 21+ and agree to abide by all local regulations. Availability may vary by region.
          </p>
        </section>
      </div>

      {/* Shipping ETA — full width */}
      <div style={{ padding: '0 24px', maxWidth: '1600px', margin: '0 auto 24px' }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: '10px',
          padding: '12px 16px', borderRadius: '14px',
          background: 'rgba(0,0,0,0.45)',
          border: '1px solid rgba(212,175,55,0.35)',
          backdropFilter: 'blur(6px)',
        }}>
          <span style={{ width: 10, height: 10, borderRadius: '999px', background: '#d4af37', boxShadow: '0 0 0 4px rgba(212,175,55,0.16)', flexShrink: 0 }} />
          <p style={{ color: 'rgba(255,255,255,0.92)', fontSize: '14px' }}>
            Current Shipping ETA: <strong style={{ color: '#d4af37' }}>2–4 Business Days (Standard USPS Shipping)</strong>
          </p>
        </div>
      </div>

      {/* ── Section divider ── */}
      <div className="section-divider">
        Dispensary-Sourced, Authenticated &amp; Delivered.
      </div>

      {/* Singles collection */}
      <div style={{ maxWidth: '1600px', margin: '0 auto', padding: '0 24px' }}>
        <section style={{ paddingTop: '32px', paddingBottom: '52px' }}>
          <h2
            style={{
              fontFamily: 'var(--font-oswald), Oswald, sans-serif',
              fontSize: 'clamp(24px, 3vw, 36px)',
              fontWeight: 700,
              fontStyle: 'italic',
              color: '#fff',
              marginBottom: '32px',
              maxWidth: '900px',
            }}
          >
            Dispensary-Sourced, Authenticated &amp; Delivered.
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
            {singleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>

      {/* ── Section divider ── */}
      <div className="section-divider">
        Dispensary-Sourced, Authenticated &amp; Delivered.
      </div>

      {/* Bulk collection */}
      <div style={{ maxWidth: '1600px', margin: '0 auto', padding: '0 24px' }}>
        <section style={{ paddingTop: '36px', paddingBottom: '36px' }}>
          <h2
            style={{
              fontFamily: 'var(--font-oswald), Oswald, sans-serif',
              fontSize: 'clamp(24px, 3vw, 36px)',
              fontWeight: 700,
              color: '#fff',
              marginBottom: '32px',
            }}
          >
            Bulk Orders / Prices. Please contact us for any larger bulk order inquires!
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
            {bulkProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>

      {/* Raw Garden sponsor badge */}
      <div style={{ display: 'flex', justifyContent: 'center', padding: '40px 24px 52px' }}>
        <div style={{
          maxWidth: '640px', width: '100%',
          borderRadius: '20px', padding: '40px 30px', textAlign: 'center',
          background: 'radial-gradient(circle at center, rgba(255,215,0,0.08), rgba(0,0,0,0.4))',
          border: '1px solid rgba(212,175,55,0.25)',
          boxShadow: '0 0 24px rgba(255,215,0,0.05)',
        }}>
          <h2 style={{
            fontFamily: 'var(--font-oswald), Oswald, sans-serif',
            fontSize: '28px', fontWeight: 700,
            textTransform: 'uppercase', letterSpacing: '1px',
            color: '#FFD976', margin: 0,
          }}>
            Official Sponsor of Raw Garden
          </h2>
          <p style={{ fontSize: '14px', color: '#aaa', marginTop: '10px', letterSpacing: '0.5px' }}>
            Based in California
          </p>
        </div>
      </div>

      {/* Presented / Managed By UNI CTA */}
      <div style={{ textAlign: 'center', padding: '32px 24px 52px', background: '#0e0e10' }}>
        <h2 style={{
          fontFamily: 'var(--font-oswald), Oswald, sans-serif',
          fontSize: 'clamp(28px, 4vw, 48px)',
          fontWeight: 700, fontStyle: 'italic',
          color: '#fff', marginBottom: '24px',
        }}>
          Presented / Managed By UNI.<br />
          35,000+ Customers Nationwide
        </h2>
        <Link href="/products" className="btn-gold">
          Shop Now!
        </Link>
      </div>

    </div>
  )
}
