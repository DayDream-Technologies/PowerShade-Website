'use client'

import Image from 'next/image'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { type Product } from '@/data/products'
import { img } from '@/lib/utils'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const renderStars = (rating: number) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating)
  }

  return (
    <Card padding="none" className="overflow-hidden">
      {/* Badge */}
      {product.badge && (
        <div className="absolute top-4 right-4 z-10">
          <Badge variant={product.badge} pulse={product.badge === 'new'}>
            {product.badge}
          </Badge>
        </div>
      )}

      {/* Image */}
      <div className="relative aspect-square bg-gray-50">
        <Image
          src={img(product.image)}
          alt={product.name}
          fill
          className="object-contain p-4"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-ocean-800 mb-2">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Price & Rating */}
        <div className="flex items-center justify-between mb-4">
          <div>
            {product.originalPrice ? (
              <div className="flex items-center gap-2">
                <span className="text-gray-400 line-through text-sm">
                  ${product.originalPrice.toFixed(2)}
                </span>
                <span className="text-xl font-bold text-red-500">
                  ${product.price.toFixed(2)}
                </span>
              </div>
            ) : (
              <span className="text-xl font-bold text-ocean-600">
                ${product.price.toFixed(2)}
              </span>
            )}
          </div>
          <div className="text-right">
            <div className="text-sunset-500">{renderStars(product.rating)}</div>
            <div className="text-xs text-gray-500">({product.reviewCount})</div>
          </div>
        </div>

        {/* Add to Cart Button */}
        <Button variant="primary" className="w-full" disabled>
          Coming Soon
        </Button>
      </div>
    </Card>
  )
}
