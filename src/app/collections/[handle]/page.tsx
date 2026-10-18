import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getProductsByCollection } from '@/data/products'
import ProductCard from '@/components/ProductCard'
import type { Metadata } from 'next'

interface Props {
  params: { handle: string }
}

const collectionMeta = {
  single: {
    title: 'Singles',
    description: 'Individual premium units, dispensary-sourced and batch-verified.',
    accent: '#e3fc02',
  },
  bulk: {
    title: 'Bulk Orders',
    description: '10-pack and 20-pack pricing. Contact us for larger wholesale inquiries.',
    accent: '#FFD976',
  },
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const meta = collectionMeta[params.handle as keyof typeof collectionMeta]
  if (!meta) return { title: 'Collection — UNI' }
  return { title: `${meta.title} — UNI` }
}

export default function CollectionPage({ params }: Props) {
  const handle = params.handle as keyof typeof collectionMeta
  const meta = collectionMeta[handle]
  if (!meta) notFound()

  const collectionKey = handle === 'bulk' ? 'bulk' : 'single'
  const products = getProductsByCollection(collectionKey)

  return (
    <div className="max-w-site mx-auto px-4 sm:px-6 py-10">
      {/* Breadcrumb */}
      <nav className="text-xs text-[#555] mb-6 flex items-center gap-2">
        <Link href="/" className="hover:text-white transition-colors">Home</Link>
        <span>›</span>
        <span className="text-[#A5A7AC]">{meta.title}</span>
      </nav>

      <div className="mb-8">
        <h1
          className="font-heading text-4xl font-bold uppercase mb-2"
          style={{ color: meta.accent }}
        >
          {meta.title}
        </h1>
        <p className="text-[#A5A7AC] text-sm max-w-xl">{meta.description}</p>
      </div>

      {products.length === 0 ? (
        <p className="text-[#A5A7AC]">No products in this collection.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      <div className="mt-10 text-center">
        <Link
          href="/products"
          className="inline-block px-6 py-2 text-sm font-bold uppercase tracking-wider"
          style={{ border: '1px solid rgba(255,255,255,0.2)', color: '#A5A7AC' }}
        >
          ← View All Products
        </Link>
      </div>
    </div>
  )
}
