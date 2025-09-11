export type Product = {
  id: string;
  name: string;
  model: string;
  image: string;
  dimensions: string;
  weight: string;
  features: string[];
  colors?: string[];
};

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
  products?: Product[];
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
    applications: ["Fruit storage", "Vegetable transport", "Agricultural logistics", "Market operations"],
    products: [
      {
        id: "fv-4032250",
        name: "Solid Box Red Vegetable Plastic Crates",
        model: "4032250",
        image: "/products/fv-model-no-4032250.jpg",
        dimensions: "400x320x250mm",
        weight: "1.1kg",
        features: ["Solid box design", "Ventilated", "Stackable", "Durable construction"],
        colors: ["Red", "Yellow"]
      },
      {
        id: "fv-4032250ft",
        name: "Rectangular Red Fruits Plastic Crates",
        model: "4032250FT",
        image: "/products/fv-model-no-4032250ft.jpg",
        dimensions: "400x320x250mm",
        weight: "1.1kg",
        features: ["Flat top design", "Rectangular shape", "Easy handling", "Professional grade"],
        colors: ["Red", "Yellow"]
      },
      {
        id: "fv-5335290",
        name: "Yellow Rectangular Plastic Banana Crate",
        model: "5335290",
        image: "/products/fv-model-no-5335290.jpg",
        dimensions: "540x350x290mm",
        weight: "1.35kg",
        features: ["Specialized for bananas", "Optimal ventilation", "Large capacity", "Lightweight design"],
        colors: ["Yellow", "Red"]
      },
      {
        id: "fv-5435290-light",
        name: "Fruits and Vegetable Crates",
        model: "5435290",
        image: "/products/fv-model-no-5435290.jpg",
        dimensions: "540x350x290mm",
        weight: "1.4kg",
        features: ["Multi-purpose design", "Optimal for fruits & vegetables", "Enhanced durability", "Professional grade"],
        colors: ["Red", "Yellow"]
      },
      {
        id: "fv-5435290-heavy",
        name: "Plastic Tomato Crates",
        model: "5435290",
        image: "/products/fv-model-no-5435290.jpg",
        dimensions: "540x350x290mm",
        weight: "1.85kg",
        features: ["Heavy duty construction", "Specialized for tomatoes", "Maximum durability", "Industrial strength"],
        colors: ["Red", "Yellow"]
      }
    ]
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
    applications: ["Material handling", "Automotive industry", "Warehouse storage", "Manufacturing facilities"],
    products: [
      {
        id: "ic-4030065",
        name: "Compact Industrial Crate",
        model: "4030065",
        image: "/products/4030065.jpg",
        dimensions: "400x300x65mm",
        weight: "0.5kg",
        features: ["Ultra-lightweight", "Low profile design", "Easy handling"],
        colors: ["Blue", "Red", "Yellow"]
      },
      {
        id: "ic-4030120",
        name: "Standard Industrial Crate",
        model: "4030120",
        image: "/products/md-4030120.jpg",
        dimensions: "400x300x120mm",
        weight: "0.8kg",
        features: ["Standard height", "Versatile application", "Stackable design"],
        colors: ["Blue", "Red", "Yellow"]
      },
      {
        id: "ic-4030150",
        name: "Medium Industrial Crate",
        model: "4030150",
        image: "/products/md-4030150.jpg",
        dimensions: "400x300x150mm",
        weight: "1.0kg",
        features: ["Medium depth", "Enhanced capacity", "Durable construction"],
        colors: ["Blue", "Red", "Yellow"]
      },
      {
        id: "ic-4030220",
        name: "Deep Industrial Crate",
        model: "4030220",
        image: "/products/md-4030220.jpg",
        dimensions: "400x300x220mm",
        weight: "1.2kg",
        features: ["Deep storage", "Maximum capacity", "Heavy-duty build"],
        colors: ["Blue", "Red", "Yellow"]
      },
      {
        id: "ic-6040120",
        name: "Large Industrial Crate",
        model: "6040120",
        image: "/products/md-6040120.jpg",
        dimensions: "600x400x120mm",
        weight: "1.8kg",
        features: ["Large footprint", "High volume", "Industrial strength"],
        colors: ["Blue", "Red", "Yellow"]
      },
      {
        id: "ic-6040120-sd",
        name: "Large Industrial Crate (Side Drop)",
        model: "6040120-SD",
        image: "/products/md-6040120-sd.jpg",
        dimensions: "600x400x120mm",
        weight: "1.9kg",
        features: ["Side drop design", "Easy access", "Ergonomic handling"],
        colors: ["Blue", "Red", "Yellow"]
      },
      {
        id: "ic-6040180",
        name: "Extra Large Industrial Crate",
        model: "6040180",
        image: "/products/model-no-6040180.jpg",
        dimensions: "600x400x180mm",
        weight: "2.5kg",
        features: ["Extra large capacity", "Reinforced structure", "Professional grade"],
        colors: ["Blue", "Red", "Yellow"]
      },
      {
        id: "ic-6040220",
        name: "Heavy Duty Industrial Crate",
        model: "6040220",
        image: "/products/md-6040220.jpg",
        dimensions: "600x400x220mm",
        weight: "3.2kg",
        features: ["Heavy duty construction", "Maximum load capacity", "Premium quality"],
        colors: ["Blue", "Red", "Yellow"]
      },
      {
        id: "ic-6040220-sd",
        name: "Heavy Duty Industrial Crate (Side Drop)",
        model: "6040220-SD",
        image: "/products/md-6040220-sd.jpg",
        dimensions: "600x400x220mm",
        weight: "3.3kg",
        features: ["Heavy duty with side drop", "Enhanced accessibility", "Industrial grade"],
        colors: ["Blue", "Red", "Yellow"]
      },
      {
        id: "ic-6040320",
        name: "Super Industrial Crate",
        model: "6040320",
        image: "/products/model-no-6040320.jpg",
        dimensions: "600x400x320mm",
        weight: "4.2kg",
        features: ["Super capacity", "Maximum depth", "Ultra-strong"],
        colors: ["Blue", "Red", "Yellow"]
      },
      {
        id: "ic-6042300",
        name: "Wide Industrial Crate",
        model: "6042300",
        image: "/products/model-no-6042300.jpg",
        dimensions: "600x420x300mm",
        weight: "4.5kg",
        features: ["Wide design", "Optimized dimensions", "Heavy-duty application"],
        colors: ["Blue", "Red", "Yellow"]
      },
      {
        id: "ic-6545320",
        name: "Jumbo Industrial Crate",
        model: "6545320",
        image: "/products/model-no-6545320.jpg",
        dimensions: "650x450x320mm",
        weight: "5.2kg",
        features: ["Jumbo size", "Maximum storage", "Industrial strength"],
        colors: ["Blue", "Red", "Yellow"]
      },
      {
        id: "ic-super-jumbo",
        name: "Super Jumbo Industrial Crate",
        model: "Super Jumbo",
        image: "/products/super-jumbo.jpg",
        dimensions: "809x570x425mm",
        weight: "5.8kg",
        features: ["Largest capacity", "Super jumbo size", "Maximum load bearing"],
        colors: ["Blue", "Red", "Yellow"]
      },
      {
        id: "ic-industrial-150",
        name: "Industrial Crate 150mm",
        model: "Industrial-150",
        image: "/products/industrial-150.JPG",
        dimensions: "400x300x150mm",
        weight: "1.0kg",
        features: ["Standard industrial grade", "150mm height", "General purpose"],
        colors: ["Blue", "Red", "Yellow"]
      },
      {
        id: "ic-industrial-200",
        name: "Industrial Crate 200mm",
        model: "Industrial-200",
        image: "/products/industrial-200.JPG",
        dimensions: "400x300x200mm",
        weight: "1.1kg",
        features: ["Standard industrial grade", "200mm height", "Medium capacity"],
        colors: ["Blue", "Red", "Yellow"]
      },
      {
        id: "ic-industrial-side-250",
        name: "Industrial Crate with Side Perforations",
        model: "Industrial-Side-250",
        image: "/products/industrial-side-250.JPG",
        dimensions: "400x300x250mm",
        weight: "1.3kg",
        features: ["Side perforations", "Enhanced ventilation", "250mm depth"],
        colors: ["Blue", "Red", "Yellow"]
      },
      {
        id: "ic-industrial-side-per",
        name: "Industrial Crate Side Perforated",
        model: "Industrial-Side-Per",
        image: "/products/INDUSTRIAL-side-per.JPG",
        dimensions: "600x400x180mm",
        weight: "2.2kg",
        features: ["Side perforated design", "Maximum ventilation", "Professional grade"],
        colors: ["Blue", "Red", "Yellow"]
      }
    ]
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
];

export const categoryBySlug = categories.reduce<Record<string, Category>>(
  (acc, c) => {
    acc[c.slug] = c;
    return acc;
  },
  {}
);
