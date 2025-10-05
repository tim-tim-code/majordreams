'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/lib/types';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isHovering, setIsHovering] = useState(false);
  const lastImageIndex = product.images.length - 1;

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group relative aspect-[3/4] overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Image */}
      <Image
        src={isHovering ? product.images[lastImageIndex] : product.images[0]}
        alt={product.name}
        fill
        className="object-cover transition-transform duration-500"
        unoptimized
      />

      {/* Overlay with Info */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
          <h3 className="font-heading text-2xl md:text-3xl font-light mb-2">
            {product.name}
          </h3>
          <p className="font-heading text-lg md:text-xl mb-4">
            {product.price.toFixed(2)} {product.currency}
          </p>
          {product.preOrder && (
            <div className="inline-block bg-white text-black px-4 py-2 text-xs font-heading uppercase tracking-wider">
              Pre-Order
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
