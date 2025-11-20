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
    <section className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif font-bold mb-6">
              Scientific Testing <br/><span className="text-primary">For Every Batch.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              At Vegdry, quality is not guessed — it’s measured. Our lab checks ensure that every product meets the standards required by industrial buyers before dispatch.
            </p>
            <div className="p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm">
              <h4 className="font-bold text-xl mb-2">Traceability Guarantee</h4>
              <p className="text-sm text-gray-400">
                Every Vegdry batch is traceable from raw source → processing → drying → packing → dispatch.
              </p>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {tests.map((test, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors"
              >
                <h4 className="font-bold text-primary mb-4 border-b border-white/10 pb-2">{test.category}</h4>
                <ul className="space-y-2">
                  {test.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckSquare size={14} className="text-green-400" />
                      {item}
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

