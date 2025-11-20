"use client";

import { motion } from "framer-motion";
import { ChefHat, Utensils, Factory, Pill, Croissant, Container } from "lucide-react";

const cases = [
  {
    title: "Snacks & Namkeen",
    items: ["Onion powder", "Garlic powder", "Tomato powder", "Potato flakes"],
    desc: "Essential for seasonings, masala blends, coatings, and base flavours.",
    icon: Utensils,
  },
  {
    title: "Spice Companies",
    items: ["Dehydrated onion", "Garlic granules", "Ginger powder", "Amchur"],
    desc: "Binding agents, flavour carriers, and bulk fillers.",
    icon: ChefHat,
  },
  {
    title: "Ready-to-Cook",
    items: ["Dried peas", "Carrot cubes", "Beans", "Veg mixes"],
    desc: "Reduce prep time, extend shelf life, maintain consistency.",
    icon: Container,
  },
  {
    title: "Sauces & Soups",
    items: ["Tomato powder", "Onion granules", "Beet powders"],
    desc: "Thickening agents, natural colourants, and flavour bases.",
    icon: Factory,
  },
  {
    title: "Nutraceuticals",
    items: ["Beetroot powder", "Spinach powder", "Moringa powder"],
    desc: "Perfect for superfood blends, capsules, and supplements.",
    icon: Pill,
  },
  {
    title: "Bakeries",
    items: ["Raisins", "Dried apricots", "Banana powder"],
    desc: "Used in breads, sweets, energy bars, and cereal mixes.",
    icon: Croissant,
  },
];

export default function UseCases() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-3 sm:mb-4">
            Built for Every Segment
          </h2>
          <p className="text-sm sm:text-base text-gray-600 px-4">
            Vegdry designs its product range to meet the real-world needs of mass-market manufacturers.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {cases.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-gray-100 bg-white hover:shadow-xl hover:border-orange-100 transition-all"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-50 rounded-xl flex items-center justify-center text-gray-700 mb-4 sm:mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <item.icon size={24} className="sm:w-7 sm:h-7" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{item.title}</h3>
              <p className="text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6">{item.desc}</p>
              
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {item.items.map((tag, t) => (
                  <span key={t} className="text-xs font-medium px-2 py-1 bg-gray-50 text-gray-600 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

