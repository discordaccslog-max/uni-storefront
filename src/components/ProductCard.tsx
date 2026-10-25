import Link from 'next/link'
import Image from 'next/image'
import type { Product } from '@/data/products'

export default function ProductCard({ product }: { product: Product }) {
  const hasVariants = product.variants.length > 1

  return (
    <div className="group">
      <Link href={`/products/${product.handle}`} className="block">
        {/* Portrait image — 4:5 ratio matching live site */}
        <div className="relative overflow-hidden" style={{ paddingBottom: '125%' }}>
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(min-width: 1280px) 300px, (min-width: 768px) calc((100vw - 130px) / 4), calc((100vw - 35px) / 2)"
          />
        </div>

        {/* Info */}
        <div className="pt-3 pb-1">
          <h3
            className="text-sm font-bold leading-tight mb-1 line-clamp-2"
            style={{
              fontFamily: 'var(--font-figtree), sans-serif',
              color: '#fff',
              letterSpacing: '0.3px',
            }}
          >
            {product.title}
          </h3>
          <p
            className="text-sm mb-3"
            style={{ color: '#fff', fontWeight: 500 }}
          >
            ${product.price} USD
          </p>
        </div>
      </Link>

      {/* Button — exact match to live site */}
      <Link href={`/products/${product.handle}`} className="btn-choose">
        {hasVariants ? 'Choose options' : 'View details'}
      </Link>
    </div>
  )
}
