export type Category = {
  slug: string;
  title: string;
  desc: string;
  features?: string[];
  specifications?: {
    sizes?: string[];
    weights?: string[];
    models?: string[];
    materials?: string[];
  };
  applications?: string[];
};

export const categories: Category[] = [
  {
    slug: "fruits-and-vegetables-crates",
    title: "Fruits & Vegetables Crates",
    desc: "Ventilated crates ideal for produce handling and transport.",
    features: [
      "Durable plastic construction",
      "Available in multiple colors (red, yellow)",
      "Suitable for storage and transportation",
      "Specialized designs for different produce types"
    ],
    specifications: {
      sizes: ["400x320x250mm", "540x350x290mm", "600x420x300mm"],
      weights: ["1.1kg - 2.0kg"],
      models: ["4030250", "5435290", "6042300"],
      materials: ["Industrial-grade plastic"]
    },
    applications: ["Fruit storage", "Vegetable transport", "Agricultural logistics", "Market operations"]
  },
  {
    slug: "industrial-crates",
    title: "Industrial Crates",
    desc: "Heavy‑duty material handling crates for factories and warehouses.",
    features: [
      "Industrial-grade plastic construction",
      "Side perforations for ventilation",
      "Load capacity up to 50kg",
      "Available in blue, red, and yellow colors"
    ],
    specifications: {
      sizes: ["400x300x65mm to 809x570x425mm"],
      weights: ["0.5kg - 5.8kg"],
      models: ["6040220", "6040180", "6040120", "Jumbo & Super Jumbo variants"],
      materials: ["Heavy-duty industrial plastic"]
    },
    applications: ["Material handling", "Automotive industry", "Warehouse storage", "Manufacturing facilities"]
  },
  {
    slug: "dairy-crates",
    title: "Dairy Crates",
    desc: "Stackable crates designed for bottles, pouches and dairy logistics.",
    features: [
      "Lightweight plastic construction",
      "Designed for dairy product handling",
      "Suitable for industrial applications",
      "Easy to clean and maintain"
    ],
    specifications: {
      sizes: ["471x375x168mm"],
      weights: ["1.5kg"],
      models: ["47337168"],
      materials: ["Food-grade plastic"]
    },
    applications: ["Dairy industry", "Agricultural storage", "Industrial material transport", "Logistics and warehousing"]
  },
  {
    slug: "planters",
    title: "Planters",
    desc: "Durable indoor and outdoor planters in multiple sizes and colors.",
    features: [
      "100% plastic construction",
      "Multiple color options",
      "Variety of shapes and dimensions",
      "Lightweight design",
      "Weather-resistant"
    ],
    specifications: {
      sizes: ["4\" to 15\" diameter", "Various heights 8\" to 12\""],
      models: ["3DEE (12\"x10\")", "Brix (12\"x12\")", "Flora (9\"x10\")", "Delux Series", "Rim Series", "Loto Series"],
      materials: ["100% plastic"]
    },
    applications: ["Indoor gardening", "Outdoor landscaping", "Commercial spaces", "Residential decoration"]
  },
  {
    slug: "pallets",
    title: "Pallets",
    desc: "Strong, hygienic and nestable plastic pallets for safe transport.",
    features: [
      "Rectangular design for efficient storage",
      "Suitable for industrial storage",
      "Material handling applications",
      "Durable construction",
      "Easy to clean and maintain"
    ],
    specifications: {
      sizes: ["1200x1000mm (standard)", "1100x1100mm"],
      weights: ["7kg - 21kg"],
      models: ["VIP-002 to VIP-011"],
      materials: ["High-strength plastic"]
    },
    applications: ["Industrial storage", "Material handling", "Warehouse operations", "Logistics and shipping"]
  },
  {
    slug: "bins",
    title: "Dustbins & Industrial Bins",
    desc: "Bins for commercial and municipal use with lids and wheels options.",
    applications: ["Commercial waste management", "Municipal operations", "Industrial facilities", "Public spaces"]
  },
  {
    slug: "air-coolers",
    title: "Air Coolers",
    desc: "Efficient plastic-body air coolers for home and industrial use.",
    applications: ["Home cooling", "Industrial cooling", "Commercial spaces", "Outdoor events"]
  },
];

export const categoryBySlug = categories.reduce<Record<string, Category>>(
  (acc, c) => {
    acc[c.slug] = c;
    return acc;
  },
  {}
);
