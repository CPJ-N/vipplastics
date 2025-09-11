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
        image: "/products/crates/model-no-4032250.jpg",
        dimensions: "400x320x250mm",
        weight: "1.1kg",
        features: ["Solid box design", "Ventilated", "Stackable", "Durable construction"],
        colors: ["Red", "Yellow"]
      },
      {
        id: "fv-4032250ft",
        name: "Rectangular Red Fruits Plastic Crates",
        model: "4032250FT",
        image: "/products/crates/model-no-4032250ft.jpg",
        dimensions: "400x320x250mm",
        weight: "1.1kg",
        features: ["Flat top design", "Rectangular shape", "Easy handling", "Professional grade"],
        colors: ["Red", "Yellow"]
      },
      {
        id: "fv-5335290",
        name: "Yellow Rectangular Plastic Banana Crate",
        model: "5335290",
        image: "/products/crates/model-no-5335290.jpg",
        dimensions: "540x350x290mm",
        weight: "1.35kg",
        features: ["Specialized for bananas", "Optimal ventilation", "Large capacity", "Lightweight design"],
        colors: ["Yellow", "Red"]
      },
      {
        id: "fv-5435290-light",
        name: "Fruits and Vegetable Crates",
        model: "5435290",
        image: "/products/crates/model-no-5435290-1.85-kgs.jpg",
        dimensions: "540x350x290mm",
        weight: "1.4kg",
        features: ["Multi-purpose design", "Optimal for fruits & vegetables", "Enhanced durability", "Professional grade"],
        colors: ["Red", "Yellow"]
      },
      {
        id: "fv-5435290-heavy",
        name: "Plastic Tomato Crates",
        model: "5435290",
        image: "/products/crates/model-no-5435290-1.85-kgs.jpg",
        dimensions: "540x350x290mm",
        weight: "1.85kg",
        features: ["Heavy duty construction", "Specialized for tomatoes", "Maximum durability", "Industrial strength"],
        colors: ["Red", "Yellow"]
      },
      {
        id: "fv-6042300",
        name: "Large Fruits Crates",
        model: "6042300",
        image: "/products/crates/model-no-6042300.jpg",
        dimensions: "600x420x300mm",
        weight: "1.95kg",
        features: ["Large capacity", "Heavy duty construction", "Professional grade", "Maximum storage"],
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
        image: "/products/industrial-crates/4030065.jpg",
        dimensions: "360x260x55mm",
        weight: "0.5kg",
        features: ["Ultra-lightweight", "Low profile design", "Easy handling"],
        colors: ["Blue", "Red", "Yellow"]
      },
      {
        id: "ic-4030120",
        name: "Rectangular Solid Box Blue Industrial Plastic Crate",
        model: "4030120",
        image: "/products/industrial-crates/md-4030120.jpg",
        dimensions: "400x300x120mm",
        weight: "0.85kg",
        features: ["Standard height", "Versatile application", "Stackable design"],
        colors: ["Blue", "Red", "Yellow"]
      },
      {
        id: "ic-4030150",
        name: "Solid Box Blue Industrial Crates",
        model: "4030150",
        image: "/products/industrial-crates/md-4030150.jpg",
        dimensions: "400x300x150mm",
        weight: "0.95kg",
        features: ["Medium depth", "Enhanced capacity", "Durable construction"],
        colors: ["Blue", "Red", "Yellow"]
      },
      {
        id: "ic-4030220",
        name: "Solid Industrial Crates",
        model: "4030220",
        image: "/products/industrial-crates/md-4030220.jpg",
        dimensions: "400x300x220mm",
        weight: "1.3kg",
        features: ["Deep storage", "Maximum capacity", "Heavy-duty build"],
        colors: ["Blue", "Red", "Yellow"]
      },
      {
        id: "ic-6040120",
        name: "Industrial Blue Crates",
        model: "6040120",
        image: "/products/industrial-crates/md-6040120.jpg",
        dimensions: "600x400x120mm",
        weight: "1.4kg",
        features: ["Large footprint", "High volume", "Industrial strength"],
        colors: ["Blue", "Red", "Yellow"]
      },
      {
        id: "ic-6040120-sd",
        name: "Industrial Crates (Side Perforated)",
        model: "6040120-SD",
        image: "/products/industrial-crates/md-6040120-sd.jpg",
        dimensions: "600x400x120mm",
        weight: "1.3kg",
        features: ["Side perforated design", "Enhanced ventilation", "Ergonomic handling"],
        colors: ["Blue", "Red", "Yellow"]
      },
      {
        id: "ic-6040180",
        name: "Industrial Plastic Crates",
        model: "6040180",
        image: "/products/industrial-crates/model-no-6040180.jpg",
        dimensions: "600x400x180mm",
        weight: "1.65kg",
        features: ["Extra large capacity", "Reinforced structure", "Professional grade"],
        colors: ["Blue", "Red", "Yellow"]
      },
      {
        id: "ic-6040220",
        name: "Industrial Plastic Storage Crates",
        model: "6040220",
        image: "/products/industrial-crates/md-6040220.jpg",
        dimensions: "600x400x220mm",
        weight: "2.1kg",
        features: ["Heavy duty construction", "Maximum load capacity", "Premium quality"],
        colors: ["Blue", "Red", "Yellow"]
      },
      {
        id: "ic-6040220-sd",
        name: "Material Handling Crates (Side Perforated)",
        model: "6040220-SD",
        image: "/products/industrial-crates/md-6040220-sd.jpg",
        dimensions: "600x400x220mm",
        weight: "1.85kg",
        features: ["Heavy duty with side perforations", "Enhanced accessibility", "Industrial grade"],
        colors: ["Blue", "Red", "Yellow"]
      },
      {
        id: "ic-6040320",
        name: "Automotive Crates",
        model: "6040320",
        image: "/products/industrial-crates/model-no-6040320.jpg",
        dimensions: "600x400x320mm",
        weight: "2.45kg",
        features: ["Super capacity", "Maximum depth", "Ultra-strong"],
        colors: ["Blue", "Red", "Yellow"]
      },
      {
        id: "ic-6042300",
        name: "Plastic Crates",
        model: "6042300",
        image: "/products/industrial-crates/model-no-6042300.jpg",
        dimensions: "600x420x300mm",
        weight: "1.95kg",
        features: ["Wide design", "Optimized dimensions", "Heavy-duty application"],
        colors: ["Blue", "Red", "Yellow"]
      },
      {
        id: "ic-6545320",
        name: "Red Blue and Yellow Plastic Industrial Jumbo Crates",
        model: "6545320",
        image: "/products/industrial-crates/model-no-6545320.jpg",
        dimensions: "650x450x320mm",
        weight: "3.3kg",
        features: ["Jumbo size", "50kg capacity", "Industrial strength"],
        colors: ["Blue", "Red", "Yellow"]
      },
      {
        id: "ic-8057425",
        name: "Super Jumbo Industrial Crate",
        model: "8057425",
        image: "/products/industrial-crates/super-jumbo.jpg",
        dimensions: "809x570x425mm",
        weight: "5.8kg",
        features: ["Largest capacity", "Super jumbo size", "Maximum load bearing"],
        colors: ["Blue", "Red", "Yellow"]
      },
      {
        id: "ic-fruit-vegetable",
        name: "Large Rectangular Industrial Crate",
        model: "Large-Rect",
        image: "/products/industrial-crates/Fruit-vegetable-crate.jpg",
        dimensions: "809x570x425mm",
        weight: "5.8kg",
        features: ["Multi-purpose design", "Fruit & vegetable compatible", "Heavy duty"],
        colors: ["Blue", "Red", "Yellow"]
      },
      {
        id: "ic-5032100",
        name: "Industrial Compact",
        model: "5032100",
        image: "/products/industrial-crates/industrial.JPG",
        dimensions: "465x290x90mm",
        weight: "1.0kg",
        features: ["Compact design", "Standard industrial grade", "General purpose"],
        colors: ["Blue", "Red", "Yellow"]
      },
      {
        id: "ic-5302150",
        name: "Industrial 150",
        model: "5302150",
        image: "/products/industrial-crates/industrial-150.JPG",
        dimensions: "265x290x140mm",
        weight: "1.2kg",
        features: ["150mm height", "Medium capacity", "Stackable"],
        colors: ["Blue", "Red", "Yellow"]
      },
      {
        id: "ic-5302200",
        name: "Industrial 200",
        model: "5302200",
        image: "/products/industrial-crates/industrial-200.JPG",
        dimensions: "265x290x190mm",
        weight: "1.4kg",
        features: ["200mm height", "Enhanced capacity", "Durable build"],
        colors: ["Blue", "Red", "Yellow"]
      },
      {
        id: "ic-5032200",
        name: "Side Perforated 200",
        model: "5032200",
        image: "/products/industrial-crates/INDUSTRIAL-side-per.JPG",
        dimensions: "465x290x190mm",
        weight: "1.2kg",
        features: ["Side perforations", "Enhanced ventilation", "200mm depth"],
        colors: ["Blue", "Red", "Yellow"]
      },
      {
        id: "ic-5032250",
        name: "Side Perforated 250",
        model: "5032250",
        image: "/products/industrial-crates/industrial-side-250.JPG",
        dimensions: "465x290x240mm",
        weight: "1.65kg",
        features: ["Side perforations", "Maximum ventilation", "250mm depth"],
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
    applications: ["Dairy industry", "Agricultural storage", "Industrial material transport", "Logistics and warehousing"],
    products: [
      {
        id: "dc-47337168",
        name: "Dairy Plastic Crates",
        model: "47337168",
        image: "/products/dairy-crates/model-no-4737158.jpg",
        dimensions: "471x375x168mm",
        weight: "1.5kg",
        features: ["Food-grade plastic", "Stackable design", "Easy to clean", "Dairy industry standard"],
        colors: ["Blue", "White"]
      }
    ]
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
    applications: ["Indoor gardening", "Outdoor landscaping", "Commercial spaces", "Residential decoration"],
    products: [
      {
        id: "pl-3dee",
        name: "3DEE Planter",
        model: "3DEE",
        image: "/products/planters/3dee.jpg",
        dimensions: "12\"(D) x 10\"(H)",
        weight: "1.2kg",
        features: ["Classic design", "Weather resistant", "Multiple colors", "Stackable"],
        colors: ["Red", "Blue", "Yellow", "Green", "White"]
      },
      {
        id: "pl-3dee-nest",
        name: "3DEE Nest Planter",
        model: "3DEE NEST",
        image: "/products/planters/3dee-nest.jpg",
        dimensions: "8\"(D) x 6.5\"(H)",
        weight: "0.8kg",
        features: ["Compact design", "Nestable", "Space-saving", "Lightweight"],
        colors: ["Red", "Blue", "Yellow", "Green", "White"]
      },
      {
        id: "pl-brix-12",
        name: "Brix 12 Planter",
        model: "BRIX 12",
        image: "/products/planters/brix.jpg",
        dimensions: "12\"(D) x 12\"(H)",
        weight: "1.5kg",
        features: ["Square design", "Deep planting", "Stable base", "Professional grade"],
        colors: ["Red", "Blue", "Yellow", "Green", "White"]
      },
      {
        id: "pl-brix-10",
        name: "Brix 10 Planter",
        model: "BRIX 10",
        image: "/products/planters/brix.jpg",
        dimensions: "10\"(D) x 10\"(H)",
        weight: "1.2kg",
        features: ["Medium size", "Versatile use", "Durable construction", "Easy handling"],
        colors: ["Red", "Blue", "Yellow", "Green", "White"]
      },
      {
        id: "pl-flora",
        name: "Flora Planter",
        model: "FLORA",
        image: "/products/planters/flora.jpg",
        dimensions: "9\"(D) x 10\"(H)",
        weight: "1.0kg",
        features: ["Elegant design", "Perfect for flowers", "Lightweight", "Indoor/outdoor use"],
        colors: ["Red", "Blue", "Yellow", "Green", "White"]
      },
      {
        id: "pl-retro",
        name: "Retro Planter",
        model: "RETRO",
        image: "/products/planters/retro.jpg",
        dimensions: "12\"(D) x 11\"(H)",
        weight: "1.4kg",
        features: ["Vintage design", "Decorative style", "Premium finish", "Statement piece"],
        colors: ["Red", "Blue", "Yellow", "Green", "White"]
      },
      {
        id: "pl-delux-8",
        name: "Delux 8 Planter",
        model: "DELUX 8",
        image: "/products/planters/delux9.jpg",
        dimensions: "9\"(D) x 7\"(H)",
        weight: "0.9kg",
        features: ["Compact size", "Elegant finish", "Premium quality", "Versatile use"],
        colors: ["Red", "Blue", "Yellow", "Green", "White"]
      },
      {
        id: "pl-delux-10",
        name: "Delux 10 Planter",
        model: "DELUX 10",
        image: "/products/planters/delux10.jpg",
        dimensions: "10\"(D) x 9\"(H)",
        weight: "1.1kg",
        features: ["Medium capacity", "Professional grade", "Smooth finish", "Durable material"],
        colors: ["Red", "Blue", "Yellow", "Green", "White"]
      },
      {
        id: "pl-delux-12",
        name: "Delux 12 Planter",
        model: "DELUX 12",
        image: "/products/planters/delux12.jpg",
        dimensions: "12\"(D) x 10\"(H)",
        weight: "1.3kg",
        features: ["Large capacity", "Premium design", "Heavy-duty construction", "Professional finish"],
        colors: ["Red", "Blue", "Yellow", "Green", "White"]
      },
      {
        id: "pl-rim-5",
        name: "Rim 5 Planter",
        model: "RIM 5",
        image: "/products/planters/rim5.jpg",
        dimensions: "5\"(D) x 5\"(H)",
        weight: "0.4kg",
        features: ["Mini size", "Perfect for small plants", "Space-saving", "Decorative"],
        colors: ["Red", "Blue", "Yellow", "Green", "White"]
      },
      {
        id: "pl-rim-10",
        name: "Rim 10 Planter",
        model: "RIM 10",
        image: "/products/planters/rim10.jpg",
        dimensions: "10\"(D) x 10\"(H)",
        weight: "1.2kg",
        features: ["Square profile", "Stable design", "Medium capacity", "Versatile application"],
        colors: ["Red", "Blue", "Yellow", "Green", "White"]
      },
      {
        id: "pl-loto-10",
        name: "Loto 10 Planter",
        model: "LOTO10",
        image: "/products/planters/loto-3.jpg",
        dimensions: "10\"(D) x 8\"(H)",
        weight: "1.0kg",
        features: ["Round design", "Classic style", "Medium size", "Easy maintenance"],
        colors: ["Red", "Blue", "Yellow", "Green", "White"]
      },
      {
        id: "pl-loto-12",
        name: "Loto 12 Planter",
        model: "LOTO12",
        image: "/products/planters/loto-2.jpg",
        dimensions: "12\"(D) x 10\"(H)",
        weight: "1.3kg",
        features: ["Large capacity", "Round profile", "Stable base", "Professional grade"],
        colors: ["Red", "Blue", "Yellow", "Green", "White"]
      },
      {
        id: "pl-loto-14",
        name: "Loto 14 Planter",
        model: "LOTO14",
        image: "/products/planters/loto-1.jpg",
        dimensions: "11\"(D) x 14\"(H)",
        weight: "1.8kg",
        features: ["Extra tall", "Large capacity", "Premium design", "Statement piece"],
        colors: ["Red", "Blue", "Yellow", "Green", "White"]
      },
      {
        id: "pl-diamond",
        name: "Diamond Planter",
        model: "DIAMOND",
        image: "/products/planters/375A8331.jpg",
        dimensions: "8\"(D) x 9\"(H)",
        weight: "1.0kg",
        features: ["Diamond pattern", "Decorative design", "Unique texture", "Premium finish"],
        colors: ["Red", "Blue", "Yellow", "Green", "White"]
      },
      {
        id: "pl-ring",
        name: "Ring Planter",
        model: "RING",
        image: "/products/planters/375A8287.jpg",
        dimensions: "11\"(D) x 9.5\"(H)",
        weight: "1.4kg",
        features: ["Ring pattern", "Large opening", "Stable design", "Decorative appeal"],
        colors: ["Red", "Blue", "Yellow", "Green", "White"]
      },
      {
        id: "pl-fence-11",
        name: "Fence 11 Planter",
        model: "FENCE 11",
        image: "/products/planters/unnamed.jpg",
        dimensions: "12\"(D) x 10\"(H)",
        weight: "1.3kg",
        features: ["Fence pattern", "Unique design", "Good ventilation", "Decorative style"],
        colors: ["Red", "Blue", "Yellow", "Green", "White"]
      },
      {
        id: "pl-fence-8",
        name: "Fence 8 Planter",
        model: "FENCE 8",
        image: "/products/planters/unnamed.jpg",
        dimensions: "8.75\"(D) x 8\"(H)",
        weight: "1.0kg",
        features: ["Medium fence design", "Versatile size", "Good drainage", "Attractive pattern"],
        colors: ["Red", "Blue", "Yellow", "Green", "White"]
      },
      {
        id: "pl-fence-6",
        name: "Fence 6 Planter",
        model: "FENCE 6",
        image: "/products/planters/unnamed.jpg",
        dimensions: "6.25\"(D) x 6\"(H)",
        weight: "0.7kg",
        features: ["Compact fence design", "Small size", "Perfect for herbs", "Space-efficient"],
        colors: ["Red", "Blue", "Yellow", "Green", "White"]
      },
      {
        id: "pl-sapphire",
        name: "Sapphire Planter",
        model: "SAPPHIRE",
        image: "/products/planters/sapphire.jpg",
        dimensions: "15\"(D) x 12\"(H)",
        weight: "2.2kg",
        features: ["Extra large", "Premium design", "Heavy-duty construction", "Professional grade"],
        colors: ["Red", "Blue", "Yellow", "Green", "White"]
      },
      {
        id: "pl-french",
        name: "French Planter",
        model: "FRENCH",
        image: "/products/planters/french.jpg",
        dimensions: "7\"(H) x 8\"(W) x 20\"(L)",
        weight: "1.8kg",
        features: ["Rectangular design", "Perfect for herbs", "Space-efficient", "Window box style"],
        colors: ["Red", "Blue", "Yellow", "Green", "White"]
      },
      {
        id: "pl-french-nest",
        name: "French Nest Planter",
        model: "FRENCH NEST",
        image: "/products/planters/french-nest.jpg",
        dimensions: "8.5\"(D) x 6\"(H)",
        weight: "0.9kg",
        features: ["Compact French style", "Nestable design", "Space-saving", "Elegant look"],
        colors: ["Red", "Blue", "Yellow", "Green", "White"]
      },
      {
        id: "pl-divine",
        name: "Divine Planter",
        model: "DIVINE",
        image: "/products/planters/divine.jpg",
        dimensions: "12\"(H) x 12\"(W) x 12\"(L)",
        weight: "2.0kg",
        features: ["Square design", "Large capacity", "Premium finish", "Statement piece"],
        colors: ["Red", "Blue", "Yellow", "Green", "White"]
      },
      {
        id: "pl-fence-hook",
        name: "Fence Hook Planter",
        model: "FENCE HOOK",
        image: "/products/planters/fence-hook.jpg",
        dimensions: "7\"(D) x 11\"(H)",
        weight: "1.1kg",
        features: ["Hanging design", "Hook compatible", "Vertical gardening", "Space-saving"],
        colors: ["Red", "Blue", "Yellow", "Green", "White"]
      },
      {
        id: "pl-fence-square",
        name: "Fence Square Planter",
        model: "FENCE SQUARE",
        image: "/products/planters/fence-square.jpg",
        dimensions: "11\"(L) x 11\"(D) x 11\"(H)",
        weight: "1.8kg",
        features: ["Perfect square", "Large capacity", "Stable design", "Modern look"],
        colors: ["Red", "Blue", "Yellow", "Green", "White"]
      },
      {
        id: "pl-solitaire-4",
        name: "Solitaire 4 Planter",
        model: "SOLITAIRE 4",
        image: "/products/planters/solitaire-4.jpg",
        dimensions: "4\"(D) x 4\"(H)",
        weight: "0.3kg",
        features: ["Mini size", "Perfect for succulents", "Compact design", "Decorative"],
        colors: ["Red", "Blue", "Yellow", "Green", "White"]
      },
      {
        id: "pl-solitaire-nest",
        name: "Solitaire Nest Planter",
        model: "SOLITAIRE NEST",
        image: "/products/planters/solitaire-nest.jpg",
        dimensions: "4\"(D) x 4\"(H)",
        weight: "0.3kg",
        features: ["Nestable mini", "Space-efficient", "Perfect for small plants", "Stackable"],
        colors: ["Red", "Blue", "Yellow", "Green", "White"]
      }
    ]
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
    applications: ["Industrial storage", "Material handling", "Warehouse operations", "Logistics and shipping"],
    products: [
      {
        id: "pl-vip-002",
        name: "Rectangular Plastic Pallets for Storage",
        model: "VIP-002",
        image: "/products/pallets/002.jpg",
        dimensions: "1200x1000x160mm",
        weight: "16kg",
        features: ["Standard size", "Heavy-duty construction", "Industrial grade", "High load capacity"],
        colors: ["Blue", "Black"]
      },
      {
        id: "pl-vip-004",
        name: "Rectangular Plastic Pallets for Storage",
        model: "VIP-004",
        image: "/products/pallets/004.jpg",
        dimensions: "1200x1000x160mm",
        weight: "14kg",
        features: ["Medium weight", "Versatile application", "Durable design", "Cost-effective"],
        colors: ["Blue", "Black"]
      },
      {
        id: "pl-vip-006",
        name: "Rectangular Plastic Pallets for Storage",
        model: "VIP-006",
        image: "/products/pallets/006.jpg",
        dimensions: "1200x1000x170mm",
        weight: "21kg",
        features: ["Heaviest model", "Maximum strength", "Extra height", "Premium grade"],
        colors: ["Blue", "Black"]
      },
      {
        id: "pl-vip-007",
        name: "Rectangular Plastic Pallets for Storage",
        model: "VIP-007",
        image: "/products/pallets/007.jpg",
        dimensions: "1200x1000x135mm",
        weight: "13kg",
        features: ["Lower profile", "Medium capacity", "Easy handling", "Versatile use"],
        colors: ["Blue", "Black"]
      },
      {
        id: "pl-vip-008",
        name: "Rectangular Plastic Pallets for Storage",
        model: "VIP-008",
        image: "/products/pallets/008.jpg",
        dimensions: "1200x1000x135mm",
        weight: "7kg",
        features: ["Lightweight", "Easy to handle", "Cost-effective", "Basic applications"],
        colors: ["Blue", "Black"]
      },
      {
        id: "pl-vip-009",
        name: "Plastic Pallet",
        model: "VIP-009",
        image: "/products/pallets/009.jpg",
        dimensions: "1200x1000x135mm",
        weight: "9kg",
        features: ["Light-medium weight", "Balanced design", "General purpose", "Reliable performance"],
        colors: ["Blue", "Black"]
      },
      {
        id: "pl-vip-010",
        name: "Plastic Pallet",
        model: "VIP-010",
        image: "/products/pallets/0010.jpg",
        dimensions: "1200x1000x135mm",
        weight: "11kg",
        features: ["Medium weight", "Enhanced durability", "Professional grade", "Multi-purpose"],
        colors: ["Blue", "Black"]
      },
      {
        id: "pl-vip-011",
        name: "Plastic Pallet",
        model: "VIP-011",
        image: "/products/pallets/0011.jpg",
        dimensions: "1100x1100x120mm",
        weight: "7.5kg",
        features: ["Square design", "Compact size", "Lightweight", "Special applications"],
        colors: ["Blue", "Black"]
      }
    ]
  },
  {
    slug: "bins",
    title: "Dustbins & Industrial Bins",
    desc: "Bins for commercial and municipal use with lids and wheels options.",
    features: [
      "Various capacity options",
      "Durable plastic construction",
      "Easy to clean and maintain",
      "Suitable for waste management",
      "Industrial and commercial grade"
    ],
    specifications: {
      sizes: ["10L to 120L (dustbins)", "Small to large (industrial bins)"],
      weights: ["Varies by capacity"],
      models: ["Dustbin series", "Industrial bin series"],
      materials: ["High-quality plastic"]
    },
    applications: ["Commercial waste management", "Municipal operations", "Industrial facilities", "Public spaces"],
    products: [
      {
        id: "db-10ltr",
        name: "10 Liter Dustbin",
        model: "10L",
        image: "/products/dustbins/10ltr.jpg",
        dimensions: "Small",
        weight: "1.2kg",
        features: ["Compact size", "Perfect for small spaces", "Easy handling", "Basic waste management"],
        colors: ["Green", "Blue", "Red"]
      },
      {
        id: "db-12ltr",
        name: "12 Liter Dustbin",
        model: "12L",
        image: "/products/dustbins/12ltr.jpg",
        dimensions: "Small-medium",
        weight: "1.4kg",
        features: ["Medium capacity", "Versatile use", "Durable construction", "Cost-effective"],
        colors: ["Green", "Blue", "Red"]
      },
      {
        id: "db-25ltr",
        name: "25 Liter Dustbin",
        model: "25L",
        image: "/products/dustbins/dustbin-5.jpg",
        dimensions: "Medium",
        weight: "2.1kg",
        features: ["Good capacity", "Office use", "Residential application", "Easy to empty"],
        colors: ["Green", "Blue", "Red"]
      },
      {
        id: "db-40ltr",
        name: "40 Liter Dustbin",
        model: "40L",
        image: "/products/dustbins/dustbin-6.jpg",
        dimensions: "Medium-large",
        weight: "2.8kg",
        features: ["Large capacity", "Commercial use", "Heavy-duty build", "Professional grade"],
        colors: ["Green", "Blue", "Red"]
      },
      {
        id: "db-60ltr",
        name: "60 Liter Dustbin",
        model: "60L",
        image: "/products/dustbins/dustbin-1.jpg",
        dimensions: "900x360mm",
        weight: "3.5kg",
        features: ["Large capacity", "Industrial use", "With wheels", "Heavy-duty construction"],
        colors: ["Green", "Blue", "Red"]
      },
      {
        id: "db-80ltr",
        name: "80 Liter Dustbin",
        model: "80L",
        image: "/products/dustbins/dustbin-2.jpg",
        dimensions: "900x430mm",
        weight: "4.2kg",
        features: ["Extra large", "Municipal use", "Wheeled design", "Maximum durability"],
        colors: ["Green", "Blue", "Red"]
      },
      {
        id: "db-110ltr",
        name: "110 Liter Dustbin",
        model: "110L",
        image: "/products/dustbins/dustbin-3.jpg",
        dimensions: "940x500mm",
        weight: "5.1kg",
        features: ["Super capacity", "Industrial grade", "Wheeled system", "Heavy-duty build"],
        colors: ["Green", "Blue", "Red"]
      },
      {
        id: "db-120ltr",
        name: "120 Liter Dustbin",
        model: "120L",
        image: "/products/dustbins/dustbin-4.jpg",
        dimensions: "980x490mm",
        weight: "5.5kg",
        features: ["Maximum capacity", "Commercial grade", "Wheeled design", "Professional use"],
        colors: ["Green", "Blue", "Red"]
      },
      {
        id: "ib-bin15",
        name: "Industrial Bin 15",
        model: "BIN 15",
        image: "/products/industrial-bins/bin15.jpg",
        dimensions: "185x114x78mm",
        weight: "0.8kg",
        features: ["Compact industrial bin", "Small parts storage", "Stackable", "Professional grade"],
        colors: ["Blue", "Red", "Yellow"]
      },
      {
        id: "ib-crate25",
        name: "Industrial Crate 25",
        model: "CRATE 25",
        image: "/products/industrial-bins/crate25.jpg",
        dimensions: "225x150x125mm",
        weight: "1.2kg",
        features: ["Small industrial crate", "Parts organization", "Stackable design", "Durable build"],
        colors: ["Blue", "Red", "Yellow"]
      },
      {
        id: "ib-crate35",
        name: "Industrial Crate 35",
        model: "CRATE 35",
        image: "/products/industrial-bins/crate35.jpg",
        dimensions: "295x150x125mm",
        weight: "1.5kg",
        features: ["Medium industrial crate", "Versatile storage", "Professional grade", "Easy handling"],
        colors: ["Blue", "Red", "Yellow"]
      },
      {
        id: "ib-crate45",
        name: "Industrial Crate 45",
        model: "CRATE 45",
        image: "/products/industrial-bins/crate45.jpg",
        dimensions: "350x215x200mm",
        weight: "2.1kg",
        features: ["Large industrial crate", "Heavy-duty storage", "Maximum capacity", "Industrial strength"],
        colors: ["Blue", "Red", "Yellow"]
      },
      {
        id: "ib-crate50",
        name: "Industrial Crate 50",
        model: "CRATE 50",
        image: "/products/industrial-bins/crate50.jpg",
        dimensions: "515x310x200mm",
        weight: "3.2kg",
        features: ["Largest industrial crate", "Maximum storage", "Heavy-duty construction", "Professional use"],
        colors: ["Blue", "Red", "Yellow"]
      }
    ]
  },
  {
    slug: "air-coolers",
    title: "Air Coolers",
    desc: "Industrial air coolers for effective cooling solutions in large spaces.",
    features: [
      "Heavy-duty plastic construction",
      "Industrial-grade cooling",
      "Large capacity water tanks",
      "Energy-efficient operation",
      "Suitable for commercial and industrial use"
    ],
    specifications: {
      sizes: ["Jumbo 100, 125, 160"],
      weights: ["48kg - 54kg"],
      models: ["JUMBO series"],
      materials: ["Industrial-grade plastic"]
    },
    applications: ["Industrial cooling", "Commercial spaces", "Warehouse cooling", "Large area ventilation"],
    products: [
      {
        id: "ac-jumbo100",
        name: "Plastic Industrial Cooler Jumbo 100",
        model: "JUMBO 100",
        image: "/products/air-coolers/jumbo100.jpg",
        dimensions: "1100x100x1150mm",
        weight: "48kg",
        features: ["Medium capacity", "Energy efficient", "Durable construction", "Professional grade"],
        colors: ["Blue", "White"]
      },
      {
        id: "ac-jumbo125",
        name: "Plastic Industrial Cooler Jumbo 125",
        model: "JUMBO 125",
        image: "/products/air-coolers/jumbo125.jpg",
        dimensions: "1135x600x1500mm",
        weight: "50kg",
        features: ["Large capacity", "High cooling efficiency", "Heavy-duty build", "Commercial grade"],
        colors: ["Blue", "White"]
      },
      {
        id: "ac-jumbo160",
        name: "Plastic Industrial Cooler Jumbo 160",
        model: "JUMBO 160",
        image: "/products/air-coolers/jumbo160.jpg",
        dimensions: "1135x600x1625mm",
        weight: "54kg",
        features: ["Maximum capacity", "Superior cooling", "Industrial strength", "Premium quality"],
        colors: ["Blue", "White"]
      }
    ]
  },
];

export const categoryBySlug = categories.reduce<Record<string, Category>>(
  (acc, c) => {
    acc[c.slug] = c;
    return acc;
  },
  {}
);
