import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/mock-data/products';

export default function ProductsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="font-heading text-4xl md:text-5xl font-light mb-4">
          Shop All
        </h1>
        <p className="text-foreground/60 max-w-2xl">
          Explore our complete collection of premium streetwear pieces.
          Each item is carefully designed with attention to detail and quality.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
