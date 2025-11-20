"use client";

import { motion } from "framer-motion";
import { Network, Truck, Users, Globe } from "lucide-react";

const partners = [
  { title: "Contracted Farms", icon: Users },
  { title: "Processing Units", icon: Network },
  { title: "Global Logistics", icon: Truck },
  { title: "Export Houses", icon: Globe },
];

const industries = [
  "Namkeen & Snack Manufacturers",
  "Spice & Seasoning Companies",
  "Ready-to-Cook Brands",
  "Food Processing Factories",
  "Nutraceutical Brands",
  "Bulk Importers"
];

export default function Partners() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            A Supply Chain Built For Scale
          </h2>
          <p className="text-gray-600">
            Vegdry works with a wide network of agriculture suppliers, drying units, and international buyers to ensure speed and efficiency.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {partners.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-primary mb-4">
                <p.icon size={20} />
              </div>
              <h3 className="font-bold text-gray-900">{p.title}</h3>
            </motion.div>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-10 border border-gray-200 shadow-sm">
          <h3 className="text-2xl font-bold text-center mb-10 text-gray-900">Industries We Power</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((ind, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="px-6 py-3 rounded-full bg-gray-50 text-gray-700 font-medium border border-gray-200 hover:border-primary/50 hover:text-primary transition-colors cursor-default"
              >
                {ind}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

