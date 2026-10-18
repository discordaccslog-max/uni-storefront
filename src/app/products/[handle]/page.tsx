import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getProductByHandle, getProductsByCollection } from '@/data/products'
import ProductCard from '@/components/ProductCard'
import type { Metadata } from 'next'

interface Props {
  params: { handle: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = getProductByHandle(params.handle)
  if (!product) return { title: 'Product Not Found — UNI' }
  return { title: `${product.title} — UNI` }
}

export default function ProductPage({ params }: Props) {
  const product = getProductByHandle(params.handle)
  if (!product) notFound()

  const related = getProductsByCollection(product.collection)
    .filter((p) => p.id !== product.id)
    .slice(0, 4)

  return (
    <div className="max-w-site mx-auto px-4 sm:px-6 py-10">
      {/* Breadcrumb */}
      <nav className="text-xs text-[#555] mb-6 flex items-center gap-2">
        <Link href="/" className="hover:text-white transition-colors">Home</Link>
        <span>›</span>
        <Link href="/products" className="hover:text-white transition-colors">Products</Link>
        <span>›</span>
        <span className="text-[#A5A7AC]">{product.title}</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        {/* Image */}
        <div
          className="relative aspect-square rounded-none overflow-hidden"
          style={{ background: '#161718', border: '1px solid rgba(255,255,255,0.06)' }}
        >
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain p-4"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          {product.badge && (
            <span
              className="absolute bottom-3 left-3 text-xs font-bold uppercase tracking-widest px-2 py-1"
              style={{ background: '#e3fc02', color: '#0e0e10' }}
            >
              {product.badge}
            </span>
          )}
        </div>

        {/* Details */}
        <div className="flex flex-col">
          {product.badge && (
            <span
              className="inline-block self-start text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3"
              style={{ color: '#FFD976', background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.28)' }}
            >
              {product.badge}
            </span>
          )}

          <h1 className="font-heading text-3xl sm:text-4xl font-bold uppercase mb-2">
            {product.title}
          </h1>

          <p className="text-3xl font-bold mb-6" style={{ color: '#e3fc02' }}>
            ${product.price}
          </p>

          {/* Variants */}
          {product.variants.length > 1 && (
            <div className="mb-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#A5A7AC] mb-2">
                Available Variants
              </p>
              <div className="flex flex-wrap gap-2">
                {product.variants.map((v) => (
                  <span
                    key={v.id}
                    className="px-3 py-1.5 text-sm font-semibold rounded-full"
                    style={{
                      border: '1px solid rgba(212,175,55,0.55)',
                      color: '#fff',
                      background: 'rgba(255,255,255,0.04)',
                    }}
                  >
                    {v.title}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Description */}
          <p className="text-[#A5A7AC] text-sm leading-relaxed mb-8">{product.description}</p>

          {/* Trust badges */}
          <div
            className="grid grid-cols-3 gap-3 p-4 rounded-2xl mb-6"
            style={{ background: '#161718', border: '1px solid rgba(255,255,255,0.06)' }}
          >
            {[
              { icon: '🔒', label: 'Tamper Sealed' },
              { icon: '🧪', label: 'Lab Tested' },
              { icon: '✅', label: 'Batch Verified' },
            ].map((b) => (
              <div key={b.label} className="text-center">
                <div className="text-xl mb-1">{b.icon}</div>
                <p className="text-xs font-semibold text-[#A5A7AC]">{b.label}</p>
              </div>
            ))}
          </div>

          {/* Contact notice */}
          <div
            className="p-4 rounded-2xl"
            style={{ background: 'rgba(212,175,55,0.06)', border: '1px solid rgba(212,175,55,0.25)' }}
          >
            <p className="text-sm font-semibold text-[#FFD976] mb-1">Ready to Order?</p>
            <p className="text-xs text-[#A5A7AC]">
              Visit{' '}
              <a
                href="https://unidispo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white transition-colors"
                style={{ color: '#FFD976' }}
              >
                unidispo.com
              </a>{' '}
              to place your order. Available to customers 21+.
            </p>
          </div>
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <section>
          <h2 className="font-heading text-2xl font-bold uppercase mb-5">More Products</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
