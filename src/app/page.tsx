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

export default function HomePage() {
  return (
    <div>

      {/* ── Hero + intro section ── */}
      <div style={{ maxWidth: '1600px', margin: '0 auto', padding: '0 24px' }}>
        <section className="nx-wrap">

          <span className="nx-kicker">Premium • Fast • Verified</span>
          <h1 className="nx-h1">Dispensary-Sourced Vapes. Delivered To Your Door.</h1>
          <p className="nx-sub">
            We source directly from licensed dispensaries and deliver to you quickly and discreetly.
            Every product is authenticated and quality-checked so you always know exactly what you&apos;re getting.
          </p>
          <div className="nx-cta">
            <Link href="/products" className="nx-btn nx-btn--gold">Explore Products</Link>
          </div>

          {/* Value props */}
          <div className="nx-grid nx-3">
            {valueProps.map((v) => (
              <div key={v.title} className="nx-card">
                <div className="nx-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>

          {/* How It Works */}
          <div style={{ marginTop: '26px' }}>
            <span className="nx-kicker">How it works</span>
            <div className="nx-grid nx-4">
              {steps.map((s) => (
                <div key={s.num} className="nx-card nx-step">
                  <div className="num">{s.num}</div>
                  <div>
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Verification strip */}
          <div className="nx-strip" aria-label="Assurances">
            {['Licensed sourcing', 'Tamper-evident seals', 'Batch / lot checks', 'Discreet packaging'].map((p) => (
              <span key={p} className="nx-pill">{p}</span>
            ))}
          </div>

          {/* FAQs */}
          <div>
            <span className="nx-kicker">FAQs</span>
            <div className="nx-faq">
              {faqs.map((faq) => (
                <details key={faq.q}>
                  <summary>{faq.q}</summary>
                  <div className="ans">{faq.a}</div>
                </details>
              ))}
            </div>
            <p className="nx-note">
              <strong>Important:</strong> By ordering you confirm you are 21+ and agree to abide by all local regulations. Availability may vary by region.
            </p>
          </div>

        </section>
      </div>

      {/* Shipping ETA banner (Code 2) */}
      <div className="uni-eta-banner" role="status" aria-live="polite">
        <div className="uni-eta-banner__inner">
          <span className="uni-eta-banner__dot" aria-hidden="true" />
          <span className="uni-eta-banner__text">
            Current Shipping ETA: <strong>2–4 Business Days (Standard USPS Shipping)</strong>
          </span>
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
              fontSize: 'clamp(28px, 4vw, 56px)',
              fontWeight: 500,
              color: '#fff',
              marginBottom: '32px',
              lineHeight: 1.1,
            }}
          >
            Dispensary-Sourced, Authenticated &amp; Delivered. (FREE SHIPPING UNTIL AUGUST 1ST!)
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
              fontSize: 'clamp(28px, 4vw, 56px)',
              fontWeight: 500,
              color: '#fff',
              marginBottom: '32px',
              lineHeight: 1.1,
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
            fontSize: '28px', fontWeight: 800,
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
          fontSize: 'clamp(28px, 4vw, 56px)',
          fontWeight: 500,
          color: '#fff', marginBottom: '24px',
          lineHeight: 1.1,
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
