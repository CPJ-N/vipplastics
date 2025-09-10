export type Category = {
  slug: string;
  title: string;
  desc: string;
};

export const categories: Category[] = [
  {
    slug: "fruits-and-vegetables-crates",
    title: "Fruits & Vegetables Crates",
    desc: "Ventilated crates ideal for produce handling and transport.",
  },
  {
    slug: "industrial-crates",
    title: "Industrial Crates",
    desc: "Heavy‑duty material handling crates for factories and warehouses.",
  },
  {
    slug: "dairy-crates",
    title: "Dairy Crates",
    desc: "Stackable crates designed for bottles, pouches and dairy logistics.",
  },
  {
    slug: "planters",
    title: "Planters",
    desc: "Durable indoor and outdoor planters in multiple sizes and colors.",
  },
  {
    slug: "pallets",
    title: "Pallets",
    desc: "Strong, hygienic and nestable plastic pallets for safe transport.",
  },
  {
    slug: "bins",
    title: "Dustbins & Industrial Bins",
    desc: "Bins for commercial and municipal use with lids and wheels options.",
  },
  {
    slug: "air-coolers",
    title: "Air Coolers",
    desc: "Efficient plastic-body air coolers for home and industrial use.",
  },
];

export const categoryBySlug = categories.reduce<Record<string, Category>>(
  (acc, c) => {
    acc[c.slug] = c;
    return acc;
  },
  {}
);
