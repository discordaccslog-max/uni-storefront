import Link from 'next/link'
import { getProductsByCollection } from '@/data/products'
import FeaturedCollection from '@/components/FeaturedCollection'

const singleProducts = getProductsByCollection('single')
const bulkProducts = getProductsByCollection('bulk')

const faqs = [
  { q: 'Where do you source products?', a: 'Exclusively from licensed dispensaries and authorized suppliers. We do not purchase from grey-market sources.' },
  { q: 'How do you verify authenticity?', a: "We inspect tamper-evident seals, confirm batch/lot info, and cross-check with supplier data. If an item doesn't pass, it doesn't ship." },
  { q: 'What does delivery look like?', a: 'Your order ships quickly in plain packaging with full tracking. Delivery timelines are shown at checkout based on your address.' },
]

export default function HomePage() {
  return (
    <div>
      {/* ── nx-wrap hero section ── */}
      <div className="nx-wrap" style={{ maxWidth: '980px', margin: '28px auto' }}>
        <div style={{ textAlign: 'center' }}>
          <span className="nx-kicker">Premium &bull; Fast &bull; Verified</span>
          <h1 className="nx-h1">
            Dispensary-Sourced Vapes.<br />Delivered To Your Door.
          </h1>
          <p className="nx-sub">
            Licensed. Authenticated. Discreet. 35,000+ customers nationwide.
          </p>

          <div className="nx-cta" style={{ justifyContent: 'center' }}>
            <Link href="/products" className="nx-btn nx-btn--gold">
              Explore Products
            </Link>
          </div>
        </div>

        {/* 3 feature cards */}
        <div className="nx-grid nx-3" style={{ marginTop: '24px' }}>
          <div className="nx-card">
            <div className="nx-icon">&#127981;</div>
            <h3>Dispensary Direct</h3>
            <p>Sourced exclusively from licensed dispensaries. Products remain compliant, traceable, and fresh.</p>
          </div>
          <div className="nx-card">
            <div className="nx-icon">&#128737;</div>
            <h3>Authenticated &amp; Verified</h3>
            <p>Every item is sealed, batch-checked, and verified for authenticity before it ships.</p>
          </div>
          <div className="nx-card">
            <div className="nx-icon">&#128666;</div>
            <h3>Fast Discreet Delivery</h3>
            <p>Plain packaging, real-time tracking, and quick fulfillment. Your privacy comes first.</p>
          </div>
        </div>

        {/* How it works */}
        <div style={{ textAlign: 'center', marginTop: '32px' }}>
          <span className="nx-kicker">How It Works</span>
        </div>
        <div className="nx-grid nx-4" style={{ marginTop: '16px' }}>
          <div className="nx-step">
            <div className="num">01</div>
            <div>
              <strong style={{ color: '#fff' }}>Browse</strong>
              <p className="nx-sub" style={{ margin: '4px 0 0', fontSize: '13px' }}>
                Explore verified products curated from trusted dispensaries.
              </p>
            </div>
          </div>
          <div className="nx-step">
            <div className="num">02</div>
            <div>
              <strong style={{ color: '#fff' }}>Verify</strong>
              <p className="nx-sub" style={{ margin: '4px 0 0', fontSize: '13px' }}>
                We confirm authenticity, seal integrity, and batch details.
              </p>
            </div>
          </div>
          <div className="nx-step">
            <div className="num">03</div>
            <div>
              <strong style={{ color: '#fff' }}>Ship</strong>
              <p className="nx-sub" style={{ margin: '4px 0 0', fontSize: '13px' }}>
                Your order ships quickly in discreet, protective packaging.
              </p>
            </div>
          </div>
          <div className="nx-step">
            <div className="num">04</div>
            <div>
              <strong style={{ color: '#fff' }}>Enjoy</strong>
              <p className="nx-sub" style={{ margin: '4px 0 0', fontSize: '13px' }}>
                What you ordered is exactly what arrives — guaranteed.
              </p>
            </div>
          </div>
        </div>

        {/* Trust strip */}
        <div className="nx-strip">
          <span className="nx-pill">Licensed Sourcing</span>
          <span className="nx-pill">Tamper-Evident Seals</span>
          <span className="nx-pill">Batch Verified</span>
          <span className="nx-pill">Discreet Packaging</span>
        </div>

        {/* FAQs */}
        <div className="nx-faq" style={{ marginTop: '18px' }}>
          {faqs.map((faq) => (
            <details key={faq.q}>
              <summary>{faq.q}</summary>
              <div className="ans">{faq.a}</div>
            </details>
          ))}
        </div>

        <p className="nx-note" style={{ textAlign: 'center', marginTop: '12px' }}>
          <strong>Important:</strong> By ordering you confirm you are 21+ and agree to abide by all local regulations.
        </p>
      </div>

      {/* ── Shipping ETA banner ── */}
      <div className="uni-eta-banner">
        <div className="uni-eta-banner__inner">
          <span className="uni-eta-banner__dot" aria-hidden="true" />
          <span className="uni-eta-banner__text">
            Current Shipping ETA: <strong>2-4 Business Days (Standard USPS)</strong>
          </span>
        </div>
      </div>

      {/* ── Section divider ── */}
      <div className="section-divider">
        Dispensary-Sourced, Authenticated &amp; Delivered.
      </div>

      {/* ── Singles — Featured Collection ── */}
      <FeaturedCollection
        title="Dispensary-Sourced, Authenticated & Delivered."
        description="FREE SHIPPING UNTIL AUGUST 1ST!"
        products={singleProducts}
        viewAllHref="/products"
        viewAllLabel="View all products"
        columnsDesktop={5}
      />

      {/* ── Section divider ── */}
      <div className="section-divider">
        Dispensary-Sourced, Authenticated &amp; Delivered.
      </div>

      {/* ── Bulk — Featured Collection ── */}
      <FeaturedCollection
        title="Bulk Orders / Prices."
        description="Please contact us for any larger bulk order inquiries!"
        products={bulkProducts}
        viewAllHref="/products"
        viewAllLabel="View all bulk products"
        columnsDesktop={5}
      />

      {/* ── Raw Garden sponsor badge ── */}
      <div
        style={{
          maxWidth: '640px',
          margin: '48px auto',
          padding: '24px',
          borderRadius: '16px',
          background: 'radial-gradient(circle at 50% 0%, rgba(212,175,55,0.12) 0%, transparent 70%)',
          border: '1px solid rgba(212,175,55,0.2)',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            display: 'inline-block',
            fontSize: '10px',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: '#FFD976',
            background: 'rgba(212,175,55,0.08)',
            border: '1px solid rgba(212,175,55,0.28)',
            borderRadius: '999px',
            padding: '5px 12px',
            marginBottom: '10px',
            fontWeight: 600,
          }}
        >
          Official Sponsor
        </div>
        <h3
          style={{
            fontFamily: 'var(--font-oswald), Oswald, sans-serif',
            fontSize: '28px',
            fontWeight: 500,
            letterSpacing: '1px',
            color: '#fff',
            margin: '0 0 6px',
          }}
        >
          RAW GARDEN
        </h3>
        <p style={{ color: '#A5A7AC', fontSize: '13px', margin: 0, lineHeight: 1.5 }}>
          Premium live resin, sourced directly from California dispensaries.
          Trusted by thousands of customers nationwide.
        </p>
      </div>

      {/* ── Presented / Managed By UNI CTA ── */}
      <section
        style={{
          textAlign: 'center',
          padding: '48px 24px 60px',
          background: 'linear-gradient(180deg, #0e0e10, #111113)',
        }}
      >
        <h2
          style={{
            fontFamily: 'var(--font-oswald), Oswald, sans-serif',
            fontSize: 'clamp(22px, 3vw, 34px)',
            fontWeight: 500,
            letterSpacing: '1px',
            color: '#fff',
            margin: '0 0 6px',
            lineHeight: 1.2,
          }}
        >
          Presented / Managed By UNI.
        </h2>
        <p
          style={{
            color: '#A5A7AC',
            fontSize: '15px',
            margin: '0 0 24px',
          }}
        >
          35,000+ Customers Nationwide
        </p>
        <Link href="/products" className="btn-gold">
          Shop Now!
        </Link>
      </section>
    </div>
  )
}
