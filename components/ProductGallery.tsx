'use client';

import Image from 'next/image';
import { useState } from 'react';

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export default function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      {/* Mobile: Slider */}
      <div className="lg:hidden relative aspect-[3/4] bg-black">
        <Image
          src={images[currentImage]}
          alt={`${productName} - Image ${currentImage + 1}`}
          fill
          className="object-contain"
          priority
          unoptimized
        />

        {/* Navigation Buttons */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-3 hover:bg-white transition-colors"
          aria-label="Previous image"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-3 hover:bg-white transition-colors"
          aria-label="Next image"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Image Counter */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 text-sm font-heading">
          {currentImage + 1} / {images.length}
        </div>
      </div>

      {/* Desktop: Scrollable Stack */}
      <div className="hidden lg:block space-y-4">
        {images.map((image, index) => (
          <div key={index} className="w-full relative">
            <Image
              src={image}
              alt={`${productName} - Image ${index + 1}`}
              width={1200}
              height={1600}
              className="w-full h-auto object-contain"
              priority={index === 0}
              unoptimized
            />
          </div>
        ))}
      </div>
    </>
  );
}
