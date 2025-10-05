'use client';

import Link from 'next/link';

export default function CartPage() {
  // For now, cart is empty - you'll add cart state management later
  const cartItems: any[] = [];

  if (cartItems.length === 0) {
    return (
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="font-heading text-4xl md:text-5xl font-light mb-8">
          Shopping Cart
        </h1>

        <div className="text-center py-20">
          <p className="text-foreground/60 mb-8">Your cart is currently empty</p>
          <Link
            href="/products"
            className="inline-block bg-foreground text-background px-8 py-3 font-heading text-sm uppercase tracking-wider hover:bg-accent hover:text-foreground transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="font-heading text-4xl md:text-5xl font-light mb-8">
        Shopping Cart
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-6">
          {/* Cart items will be rendered here */}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="border border-muted p-6 space-y-4">
            <h2 className="font-heading text-xl font-medium">Order Summary</h2>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-foreground/60">Subtotal</span>
                <span>€0.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-foreground/60">Shipping</span>
                <span>Calculated at checkout</span>
              </div>
            </div>

            <div className="border-t border-muted pt-4">
              <div className="flex justify-between font-heading text-lg">
                <span>Total</span>
                <span>€0.00</span>
              </div>
            </div>

            <button className="w-full bg-foreground text-background py-4 font-heading text-sm uppercase tracking-wider hover:bg-accent hover:text-foreground transition-colors">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
