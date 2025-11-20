export const products = [
  // Powders
// Core Dried Vegetables (Bulk)
  {
    id: "v1",
    name: "Dehydrated Red Onion",
    category: "Dried Vegetables",
    price: "$4.50 / kg",
    size: "Bulk (25kg)",
    description: "Kibbled, chopped, or minced. The #1 global dehydrated vegetable staple.",
    image: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&q=80&w=500",
    tags: ["Tier A", "Bulk Export"],
  },
  {
    id: "v2",
    name: "Dehydrated White Onion",
    category: "Dried Vegetables",
    price: "$4.80 / kg",
    size: "Bulk (25kg)",
    description: "Milder flavor, preferred in processing for color neutrality.",
    image: "https://images.unsplash.com/photo-1620574387735-3624d75b2dbc?auto=format&fit=crop&q=80&w=500",
    tags: ["Tier A", "Processing"],
  },
  {
    id: "v3",
    name: "Dried Garlic Flakes",
    category: "Dried Vegetables",
    price: "$6.50 / kg",
    size: "Bulk (20kg)",
    description: "Pungent aroma retained. Essential for spice mixes and ready meals.",
    image: "https://images.unsplash.com/photo-1540148400117-7a304d93bebe?auto=format&fit=crop&q=80&w=500", // Dried garlic context
    tags: ["Tier A", "High Demand"],
  },
  {
    id: "v4",
    name: "Tomato Flakes",
    category: "Dried Vegetables",
    price: "$8.20 / kg",
    size: "Bulk (20kg)",
    description: "Tangy and rich. Base for soups, sauces, and seasoning blends.",
    image: "https://plus.unsplash.com/premium_photo-1664392033341-1c859098b1f0?auto=format&fit=crop&q=80&w=500", // Dried tomato context
    tags: ["Tier A", "Versatile"],
  },
  {
    id: "v5",
    name: "Potato Flakes",
    category: "Dried Vegetables",
    price: "$3.50 / kg",
    size: "Bulk (25kg)",
    description: "Instant mashed potato base and snack binder. High volume stable commodity.",
    image: "https://images.unsplash.com/photo-1518977676651-b53c82a63460?auto=format&fit=crop&q=80&w=500", // Potato context
    tags: ["Tier A", "Staple"],
  },
  {
    id: "v6",
    name: "Dried Carrot Cubes",
    category: "Dried Vegetables",
    price: "$5.50 / kg",
    size: "Bulk (20kg)",
    description: "Sweet and colorful. Perfect for instant noodle mixes and soups.",
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&q=80&w=500", // Carrot context
    tags: ["Tier B", "Mixes"],
  },

  // Core Dried Fruits
  {
    id: "f1",
    name: "Golden Raisins",
    category: "Dried Fruits",
    price: "$4.20 / kg",
    size: "Bulk (10kg)",
    description: "Sweet, plump, and golden. Top bulk trade item for bakery and confectionery.",
    image: "https://images.unsplash.com/photo-1595410058323-c6e2a9b64282?auto=format&fit=crop&q=80&w=500", // Raisins
    tags: ["Tier A", "Bakery"],
  },
  {
    id: "f2",
    name: "Pitted Dates",
    category: "Dried Fruits",
    price: "$3.80 / kg",
    size: "Bulk (10kg)",
    description: "Natural caramel flavor. Energy dense. Massive volume in ME and Asia.",
    image: "https://images.unsplash.com/photo-1558303590-a20672a46384?auto=format&fit=crop&q=80&w=500", // Dates
    tags: ["Tier A", "Energy"],
  },
  {
    id: "f3",
    name: "Dried Apricots",
    category: "Dried Fruits",
    price: "$7.50 / kg",
    size: "Bulk (10kg)",
    description: "Tangy-sweet Turkish style apricots. Good margins, steady demand.",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=500", // Apricots
    tags: ["Tier B", "Snack"],
  },

  // Core Powders (Industrial)
  {
    id: "p1",
    name: "Onion Powder",
    category: "Powders",
    price: "$5.50 / kg",
    size: "Bulk (25kg)",
    description: "Fine mesh. The industrial backbone for seasonings and sauces.",
    image: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&q=80&w=500", // Onion powder context
    tags: ["Tier A", "Industrial"],
  },
  {
    id: "p2",
    name: "Garlic Powder",
    category: "Powders",
    price: "$7.00 / kg",
    size: "Bulk (25kg)",
    description: "Strong flavor profile. Essential for ready-mix manufacturers.",
    image: "https://images.unsplash.com/photo-1615485290386-dda650db5898?auto=format&fit=crop&q=80&w=500", // Garlic powder
    tags: ["Tier A", "Seasoning"],
  },
  {
    id: "p3",
    name: "Tomato Powder",
    category: "Powders",
    price: "$9.50 / kg",
    size: "Bulk (20kg)",
    description: "Spray-dried. Reconstitutes to paste. High value bridge product.",
    image: "https://plus.unsplash.com/premium_photo-1675799493454-58d25d9d18b8?auto=format&fit=crop&q=80&w=500", // Tomato powder
    tags: ["Tier A", "Sauces"],
  },
  {
    id: "p4",
    name: "Ginger Powder",
    category: "Powders",
    price: "$8.00 / kg",
    size: "Bulk (25kg)",
    description: "Warm and spicy. Key for tea blends, masala, and nutraceuticals.",
    image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?auto=format&fit=crop&q=80&w=500", // Ginger powder
    tags: ["Tier A", "Nutraceutical"],
  },

  // Health & Fruit Powders
  {
    id: "hp1",
    name: "Beetroot Powder",
    category: "Powders",
    price: "$12.00 / kg",
    size: "Bulk (20kg)",
    description: "Deep red natural colorant and health supplement base.",
    image: "https://images.unsplash.com/photo-1508736334652-27e5d9f247f2?auto=format&fit=crop&q=80&w=500", // Beet powder
    tags: ["Tier B", "Colorant"],
  },
  {
    id: "hp2",
    name: "Spinach Powder",
    category: "Powders",
    price: "$11.50 / kg",
    size: "Bulk (15kg)",
    description: "Nutrient density for green blends and pasta coloring.",
    image: "https://images.unsplash.com/photo-1532336414038-51251a7f2c88?auto=format&fit=crop&q=80&w=500", // Green powder
    tags: ["Tier B", "Superfood"],
  },
  {
    id: "fp1",
    name: "Mango Powder (Amchur)",
    category: "Powders",
    price: "$10.00 / kg",
    size: "Bulk (25kg)",
    description: "Tangy unripe mango powder. Massive domestic demand in India.",
    image: "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?auto=format&fit=crop&q=80&w=500", // Mango context
    tags: ["Tier C", "Beverage"],
  },
  {
    id: "fp2",
    name: "Banana Powder",
    category: "Powders",
    price: "$9.00 / kg",
    size: "Bulk (20kg)",
    description: "Sweet and binding. Used in baby food and baking.",
    image: "https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&q=80&w=500", // Banana context
    tags: ["Tier C", "Baby Food"],
  },
  {
    id: "fp3",
    name: "Lemon Powder",
    category: "Powders",
    price: "$14.00 / kg",
    size: "Bulk (15kg)",
    description: "Zesty citrus punch. For beverages and seasoning mixes.",
    image: "https://images.unsplash.com/photo-1568569350062-ebfa3cb195df?auto=format&fit=crop&q=80&w=500", // Lemon context
    tags: ["Tier C", "Flavor"],
  },
  {
    id: "s4",
    name: "Mango Slices",
    category: "Snacks",
    price: "$8.99",
    size: "60g",
    description: "Chewy, sweet, and 100% fruit. No added sugar, just pure mango goodness.",
    image: "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?auto=format&fit=crop&q=80&w=500",
    tags: ["No Added Sugar"],
  },

  // Blends
  {
    id: "b1",
    name: "Vegdry Greens Blend",
    category: "Blends",
    price: "$24.99",
    size: "250g",
    description: "A powerhouse mix of spinach, moringa, and wheatgrass for daily vitality.",
    image: "https://images.unsplash.com/photo-1610725664285-7c57e6eeac3f?auto=format&fit=crop&q=80&w=500",
    tags: ["New", "Detox"],
  },
  {
    id: "b2",
    name: "Immunity Boost",
    category: "Blends",
    price: "$22.99",
    size: "200g",
    description: "Amla, orange, carrot, and turmeric blend. Your daily shield.",
    image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?auto=format&fit=crop&q=80&w=500",
    tags: ["Immunity"],
  },
  {
    id: "b3",
    name: "Kids Hidden Veggies",
    category: "Blends",
    price: "$19.99",
    size: "180g",
    description: "Mildly flavored mix designed to be hidden in everyday meals.",
    image: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&q=80&w=500",
    tags: ["Kid Friendly"],
  },
];

