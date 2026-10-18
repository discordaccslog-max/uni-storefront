import ProductCard from '@/components/ProductCard'
import { products } from '@/data/products'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'All Products — UNI',
}

export default function ProductsPage() {
  const singles = products.filter((p) => p.collection === 'single')
  const bulk = products.filter((p) => p.collection === 'bulk')

  return (
    <div className="max-w-site mx-auto px-4 sm:px-6 py-10">
      <h1 className="font-heading text-4xl font-bold uppercase mb-2">All Products</h1>
      <p className="text-[#A5A7AC] mb-10">Dispensary-sourced, authenticated and delivered.</p>

      <section className="mb-12">
        <h2 className="font-heading text-2xl font-bold uppercase mb-1" style={{ color: '#e3fc02' }}>
          Singles
        </h2>
        <p className="text-sm text-[#A5A7AC] mb-5">Individual units</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {singles.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold uppercase mb-1" style={{ color: '#FFD976' }}>
          Bulk / Multi-Pack
        </h2>
        <p className="text-sm text-[#A5A7AC] mb-5">10-pack and 20-pack bulk pricing</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {bulk.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  )
}
