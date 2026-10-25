'use client'

import Link from 'next/link'
import ProductCard from '@/components/ProductCard'
import type { Product } from '@/data/products'

interface FeaturedCollectionProps {
  title: string
  description?: string
  products: Product[]
  viewAllHref?: string
  viewAllLabel?: string
  columnsDesktop?: 3 | 4 | 5
}

export default function FeaturedCollection({
  title,
  description,
  products,
  viewAllHref,
  viewAllLabel = 'View all',
  columnsDesktop = 5,
}: FeaturedCollectionProps) {
  return (
    <div className="fc-section">
      {/* Header */}
      <div className="fc-header page-width">
        <h2 className="fc-title">{title}</h2>
        {description && <p className="fc-desc">{description}</p>}
      </div>

      {/* Product grid — horizontal scroll on mobile */}
      <div className="fc-slider-wrap page-width">
        <ul className="fc-grid" role="list" style={{ '--cols': columnsDesktop } as React.CSSProperties}>
          {products.map((product) => (
            <li key={product.id} className="fc-item">
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </div>

      {/* View all */}
      {viewAllHref && (
        <div className="fc-view-all page-width">
          <Link href={viewAllHref} className="btn-choose fc-view-all-btn">
            {viewAllLabel}
          </Link>
        </div>
      )}
    </div>
  )
}
