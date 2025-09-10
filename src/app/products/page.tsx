import Link from "next/link";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { categories } from "@/data/categories";

export const metadata = {
  title: "Products",
  description: "Explore VIP Plastics product categories and specifications.",
};

export default function ProductsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold tracking-tight">Products</h1>
      <p className="mt-2 text-muted-foreground max-w-prose">Browse product categories and download spec sheets.</p>

      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((c) => (
          <Link key={c.slug} href={`/products/${c.slug}`} className="group">
            <Card className="overflow-hidden hover:shadow-sm transition-shadow">
              <div className="aspect-[4/3] bg-muted/50" />
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
