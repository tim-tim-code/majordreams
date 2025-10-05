import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-muted mt-20">
      {/* Newsletter Section */}
      <div className="bg-black text-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-heading text-3xl md:text-4xl font-light mb-4">
            Stay Updated
          </h3>
          <p className="text-white/60 mb-8">
            Subscribe to our newsletter for exclusive drops and updates
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-white/40"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-white text-black font-heading text-sm uppercase tracking-wider hover:bg-accent hover:text-white transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Links */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-lg font-medium mb-4">Major Dreams</h3>
            <p className="text-sm text-foreground/60">
              Urban streetwear inspired by Japanese aesthetics and European craftsmanship.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading text-sm font-medium mb-4 uppercase tracking-wider">
              Shop
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products" className="text-foreground/60 hover:text-accent transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/products?category=new" className="text-foreground/60 hover:text-accent transition-colors">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="/products?preorder=true" className="text-foreground/60 hover:text-accent transition-colors">
                  Pre-Order
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading text-sm font-medium mb-4 uppercase tracking-wider">
              Connect
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-foreground/60 hover:text-accent transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/60 hover:text-accent transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/60 hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-muted">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-foreground/50 mb-4">
            <Link href="/privacy-policy" className="hover:text-foreground transition-colors">
              Privacy policy
            </Link>
            <Link href="/refund-policy" className="hover:text-foreground transition-colors">
              Refund policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-foreground transition-colors">
              Terms of service
            </Link>
            <Link href="/contact" className="hover:text-foreground transition-colors">
              Contact information
            </Link>
            <Link href="/shipping-policy" className="hover:text-foreground transition-colors">
              Shipping policy
            </Link>
            <Link href="/legal-notice" className="hover:text-foreground transition-colors">
              Legal notice
            </Link>
            <button className="hover:text-foreground transition-colors">
              Cookie preferences
            </button>
          </div>
          <p className="text-center text-sm text-foreground/50">
            &copy; {new Date().getFullYear()} Major Dreams. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
