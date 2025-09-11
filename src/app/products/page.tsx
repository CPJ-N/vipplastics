import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { categories } from "@/data/categories";

export const metadata = {
  title: "Products",
  description: "Explore VIP Plastics product categories and specifications.",
};

// Helper function to get the correct image path for each category
function getImagePath(slug: string): string {
  const imageMap: Record<string, string> = {
    'fruits-and-vegetables-crates': '/fruits-and-vegetable-crates.jpg',
    'air-coolers': '/air-coolers.jpg',
    'industrial-crates': '/industrial-crates.jpg',
    'dairy-crates': '/dairy-crates.jpg',
    'planters': '/planters.jpg',
    'pallets': '/pallets.jpg',
    'bins': '/bins.jpg',
  };
  
  return imageMap[slug] || `/${slug}.jpg`;
}

export default function ProductsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold tracking-tight">Products</h1>
      <p className="mt-2 text-muted-foreground max-w-prose">Browse product categories and download spec sheets.</p>

      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((c) => (
          <Link key={c.slug} href={`/products/${c.slug}`} className="group">
            <Card className="overflow-hidden hover:shadow-sm transition-shadow p-0 gap-0">
              <div className="aspect-[4/3] relative bg-gray-50">
                <Image
                  src={getImagePath(c.slug)}
                  alt={c.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <CardContent className="p-4">
                <CardTitle className="group-hover:text-primary transition-colors">{c.title}</CardTitle>
                <CardDescription>View sizes and specs</CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
