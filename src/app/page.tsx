import Link from "next/link";
import { Button } from "@/components/ui/button";
import { categories } from "@/data/categories";
import { HeroSlider } from "@/components/hero-slider";
import { ClientsSection } from "@/components/clients-section";

export default function Home() {
  return (
    <div className="font-sans">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-sm font-semibold text-primary mb-3">Trusted by manufacturers and retailers</p>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">
              Flawless Quality Products With Timely Delivery
            </h1>
            <p className="mt-4 text-muted-foreground max-w-prose">
              Industrial-grade plastic crates, pallets, bins, and planters designed for durability and efficiency. Custom sizes and branding available.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button asChild size="lg">
                <a href="https://wa.me/919999009090" target="_blank" rel="noopener noreferrer">Enquire Now</a>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link href="/products">Explore Products</Link>
              </Button>
            </div>
          </div>
          <HeroSlider />
        </div>
      </section>

      {/* Value props */}
      <section className="border-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            ["On‑schedule delivery", "Reliable logistics across India"],
            ["Flawless quality", "Premium materials and QA checks"],
            ["Custom solutions", "Branding, colors, and sizes"],
            ["Competitive pricing", "Scale with transparent quotes"],
          ].map(([title, desc]) => (
            <div key={title} className="rounded-lg border p-4">
              <h3 className="font-semibold">{title}</h3>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Product categories */}
      <section className="border-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <div className="flex items-end justify-between gap-4 mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold">Product Categories</h2>
            <Button asChild variant="link">
              <Link href="/products">View all</Link>
            </Button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.slice(0, 6).map((item) => (
              <Link key={item.slug} href={`/products/${item.slug}`} className="group rounded-xl border overflow-hidden hover:shadow-sm transition-shadow">
                <div className="aspect-[4/3] bg-muted/50" />
                <div className="p-4">
                  <h3 className="font-semibold group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">Explore sizes, specs and options</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <ClientsSection />

      {/* CTA */}
      <section className="border-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold">Ready to place a bulk order?</h2>
          <p className="mt-2 text-muted-foreground">Get a fast quote with delivery timelines for your location.</p>
          <div className="mt-6 flex justify-center">
            <Button asChild size="lg">
              <a href="https://wa.me/919999009090" target="_blank" rel="noopener noreferrer">Quick Enquiry on WhatsApp</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
