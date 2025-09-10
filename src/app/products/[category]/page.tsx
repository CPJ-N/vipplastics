import { notFound } from "next/navigation";
import { categoryBySlug } from "@/data/categories";

type Props = { params: Promise<{ category: string }> };

export async function generateMetadata({ params }: Props) {
  const { category } = await params;
  const data = categoryBySlug[category];
  if (!data) return {};
  return { title: data.title, description: data.desc };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const data = categoryBySlug[category];
  if (!data) return notFound();
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold tracking-tight">{data.title}</h1>
      <p className="mt-2 text-muted-foreground max-w-prose">{data.desc}</p>

      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1,2,3,4,5,6].map((i) => (
          <div key={i} className="rounded-xl border overflow-hidden">
            <div className="aspect-[4/3] bg-muted/50" />
            <div className="p-4">
              <h3 className="font-semibold">Model {i}</h3>
              <p className="text-sm text-muted-foreground">Dimensions, capacity, colors</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
