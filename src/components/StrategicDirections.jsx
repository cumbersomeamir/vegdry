"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

const phases = [
  {
    time: "Short Term (0-12 mo)",
    title: "Hero SKUs",
    items: [
      "Powders: Tomato, Onion, Garlic, Spinach",
      "Snacks: Beet chips, Okra, Green beans",
      "Pack Sizes: 50g Consumer + 1kg HORECA",
    ],
    color: "bg-orange-100 text-orange-800",
    border: "border-orange-200",
  },
  {
    time: "Medium Term (1-3 yrs)",
    title: "Functional Blends & B2B",
    items: [
      "Vegdry Greens & Immunity Blends",
      "Chef Range (Onion-Tomato base)",
      "Kids Hidden Veggies",
    ],
    color: "bg-blue-100 text-blue-800",
    border: "border-blue-200",
  },
  {
    time: "Long Term (3-5+ yrs)",
    title: "Scale & Science",
    items: [
      "Commission drying services",
      "Clinical/Functional R&D",
      "Private Label partnerships",
    ],
    color: "bg-green-100 text-green-800",
    border: "border-green-200",
  },
];

export default function StrategicDirections() {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-serif font-bold text-gray-900">
            Strategic Roadmap
          </h2>
          <p className="mt-6 text-xl text-gray-600">
            A phased approach to building Vegdry into a market leader.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gray-100 -z-10 transform translate-y-4" />

          {phases.map((phase, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.3 }}
              className="relative bg-white pt-8"
            >
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-6 ${phase.color}`}>
                <Calendar size={16} />
                {phase.time}
              </div>
              
              <div className={`p-8 rounded-3xl border-2 ${phase.border} h-full hover:shadow-lg transition-shadow bg-white`}>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{phase.title}</h3>
                <ul className="space-y-4">
                  {phase.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700 group">
                      <ArrowRight size={18} className="mt-1 text-gray-400 group-hover:text-primary transition-colors flex-shrink-0" />
                      <span className="group-hover:text-gray-900 transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
