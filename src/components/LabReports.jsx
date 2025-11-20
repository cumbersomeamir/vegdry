"use client";

import { motion } from "framer-motion";
import { CheckSquare } from "lucide-react";

const tests = [
  {
    category: "Physical Tests",
    items: ["Colour Uniformity", "Particle Size / Mesh", "Purity Check", "Bulk Density"]
  },
  {
    category: "Chemical Tests",
    items: ["Moisture Levels", "Volatile Oil Content", "pH Levels", "Natural Sugar Content"]
  },
  {
    category: "Microbiological",
    items: ["Total Plate Count", "Yeast & Mould", "Salmonella / E.coli", "Aflatoxins"]
  },
  {
    category: "Stability",
    items: ["Degradation over time", "Moisture absorption", "Colour retention", "Rehydration capability"]
  }
];

export default function LabReports() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4 sm:mb-6">
              Scientific Testing <br/><span className="text-primary">For Every Batch.</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg mb-6 sm:mb-8">
              At Vegdry, quality is not guessed — it's measured. Our lab checks ensure that every product meets the standards required by industrial buyers before dispatch.
            </p>
            <div className="p-4 sm:p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm">
              <h4 className="font-bold text-lg sm:text-xl mb-2">Traceability Guarantee</h4>
              <p className="text-xs sm:text-sm text-gray-400">
                Every Vegdry batch is traceable from raw source → processing → drying → packing → dispatch.
              </p>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {tests.map((test, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 border border-white/10 p-4 sm:p-6 rounded-xl hover:bg-white/10 transition-colors"
              >
                <h4 className="font-bold text-primary mb-3 sm:mb-4 border-b border-white/10 pb-2 text-sm sm:text-base">{test.category}</h4>
                <ul className="space-y-1.5 sm:space-y-2">
                  {test.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs sm:text-sm text-gray-300">
                      <CheckSquare size={12} className="sm:w-3.5 sm:h-3.5 text-green-400 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

