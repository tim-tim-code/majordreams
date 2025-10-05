import { notFound } from 'next/navigation';
import { getProductBySlug, products } from '@/lib/mock-data/products';
import ProductGallery from '@/components/ProductGallery';

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Left Side - Scrollable Image Gallery */}
      <div className="w-full lg:w-1/2 overflow-y-auto">
        <ProductGallery images={product.images} productName={product.name} />
      </div>

      {/* Right Side - Sticky Product Info */}
      <div className="w-full lg:w-1/2 lg:sticky lg:top-0 lg:h-screen overflow-y-auto">
        <div className="p-8 lg:p-12 space-y-6">
          <div>
            <h1 className="font-heading text-4xl md:text-5xl font-light mb-2">
              {product.name}
            </h1>
            {product.nameChinese && (
              <p className="text-xl text-foreground/60">{product.nameChinese}</p>
            )}
          </div>

          <div className="font-heading text-2xl">
            {product.price.toFixed(2)} {product.currency}
          </div>

          {/* Pre-Order Warning */}
          {product.preOrder && (
            <div className="bg-black text-white p-4 border border-foreground/20">
              <p className="text-sm font-heading uppercase tracking-wider mb-2">
                ⚠️ ACHTUNG: PRE ORDER
              </p>
              <p className="text-xs leading-relaxed">
                {product.slug === 'lianhua-jeans'
                  ? 'Die Produktion startet, sobald mindestens 50 Bestellungen erreicht sind. Wenn diese Anzahl nicht erreicht wird, wird der volle Betrag zurück erstattet!'
                  : 'Deine Bestellung wird automatisch versendet, sobald die Jogger wieder verfügbar ist.'
                }
              </p>
            </div>
          )}

          {/* Product Details */}
          <div className="border-t border-b border-muted py-6 space-y-3">
            <h3 className="font-heading text-sm uppercase tracking-wider mb-4">Product Details</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-foreground/60 mb-1">Material</p>
                <p className="font-medium">
                  {product.slug === 'lianhua-jeans'
                    ? '15.5oz raw denim / 100% cotton'
                    : '500gsm / 100% cotton'
                  }
                </p>
              </div>
              <div>
                <p className="text-foreground/60 mb-1">Fit</p>
                <p className="font-medium">Straight fit / True to size</p>
              </div>
              <div>
                <p className="text-foreground/60 mb-1">Details</p>
                <p className="font-medium">
                  {product.slug === 'lianhua-jeans'
                    ? 'Embroidery front & back / Stone washed'
                    : 'Embroidery on back pocket'
                  }
                </p>
              </div>
              <div>
                <p className="text-foreground/60 mb-1">Size Reference</p>
                <p className="font-medium">Model (182cm) wears M</p>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-4">
            {/* Size Selector */}
            <div>
              <label className="block font-heading text-sm uppercase tracking-wider mb-3">
                Size
              </label>
              <div className="flex gap-2">
                {(product.slug === 'lianhua-jeans'
                  ? ['XS', 'S', 'M', 'L', 'XL']
                  : ['S', 'M', 'L']
                ).map((size) => (
                  <button
                    key={size}
                    className="border border-foreground/20 px-6 py-2 font-heading text-sm hover:border-foreground transition-colors"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart */}
            <button
              disabled={!product.available && !product.preOrder}
              className="w-full bg-foreground text-background py-4 font-heading text-sm uppercase tracking-wider hover:bg-accent hover:text-foreground transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {!product.available && !product.preOrder
                ? 'Sold Out'
                : product.preOrder
                ? 'Pre-Order Now'
                : 'Add to Cart'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
