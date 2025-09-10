import Link from "next/link";
import { Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-semibold mb-3">VIP Plastics</h3>
            <p className="text-sm text-muted-foreground">High‑quality plastic products with timely delivery.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link className="hover:text-primary" href="/about">About</Link></li>
              <li><Link className="hover:text-primary" href="/products">Products</Link></li>
              <li><Link className="hover:text-primary" href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Products</h4>
            <ul className="space-y-2 text-sm">
              <li><Link className="hover:text-primary" href="/products/fruits-and-vegetables-crates">Fruits & Vegetables Crates</Link></li>
              <li><Link className="hover:text-primary" href="/products/industrial-crates">Industrial Crates</Link></li>
              <li><Link className="hover:text-primary" href="/products/dairy-crates">Dairy Crates</Link></li>
              <li><Link className="hover:text-primary" href="/products/planters">Planters</Link></li>
              <li><Link className="hover:text-primary" href="/products/pallets">Pallets</Link></li>
              <li><Link className="hover:text-primary" href="/products/bins">Dustbins & Industrial Bins</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2"><Phone className="size-4" /> +91 90000 00000</li>
              <li className="flex items-center gap-2"><Mail className="size-4" /> sales@vipplastics.in</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} VIP Plastics. All rights reserved.</p>
          <p>
            Built with <Link className="hover:text-primary" href="https://nextjs.org" target="_blank">Next.js</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
