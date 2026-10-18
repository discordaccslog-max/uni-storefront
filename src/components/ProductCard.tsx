import Link from 'next/link'
import Image from 'next/image'
import type { Product } from '@/data/products'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.handle}`}
      className="group block rounded-none overflow-hidden transition-transform hover:-translate-y-1"
      style={{ background: '#161718', border: '1px solid rgba(255,255,255,0.06)' }}
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-black/30">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
        />
        {product.badge && (
          <span
            className="absolute bottom-2 left-2 text-xs font-bold uppercase tracking-widest px-2 py-1"
            style={{ background: '#e3fc02', color: '#0e0e10' }}
          >
            {product.badge}
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-3">
        <h3
          className="font-heading text-sm font-bold uppercase tracking-wider leading-tight mb-1 line-clamp-2"
          style={{ color: '#f7f7f7' }}
        >
          {product.title}
        </h3>

        {product.variants.length > 1 && (
          <p className="text-xs text-[#A5A7AC] mb-2">
            {product.variants.length} variants
          </p>
        )}

        <div className="flex items-center justify-between mt-2">
          <span className="text-base font-bold text-white">${product.price}</span>
          <span
            className="text-xs font-bold uppercase tracking-wider px-2 py-1"
            style={{ background: 'rgba(212,175,55,0.12)', color: '#FFD976', border: '1px solid rgba(212,175,55,0.28)' }}
          >
            View
          </span>
        </div>
      </div>
    </Link>
  )
}
