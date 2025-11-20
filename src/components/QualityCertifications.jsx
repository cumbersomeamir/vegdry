"use client";

import { motion } from "framer-motion";
import { ShieldCheck, FileCheck, Award, Leaf, Droplets, Microscope } from "lucide-react";

const certs = [
  { title: "FSSAI Registered", icon: ShieldCheck },
  { title: "ISO & HACCP", icon: Award },
  { title: "GMP Processes", icon: FileCheck },
  { title: "Vegan / Plant-Based", icon: Leaf },
  { title: "Non-GMO Sources", icon: Droplets },
  { title: "Lab Tested", icon: Microscope },
];

export default function QualityCertifications() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white text-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4 sm:mb-6 leading-tight">
              Quality You Can Measure. <br />
              <span className="text-primary">Standards You Can Trust.</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              Large-volume buyers don't need fancy stories — they need accurate specs, consistent batches, and zero surprises. Vegdry has built its internal processes around industrial-grade quality requirements.
            </p>
            
            <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10">
              <div className="border-l-4 border-primary pl-4 sm:pl-6 py-2">
                <h4 className="font-bold text-lg sm:text-xl mb-1">Consistency over Perfection</h4>
                <p className="text-gray-500 text-xs sm:text-sm">Manufacturers don't want one perfect batch — they want identical batches every month.</p>
              </div>
              <div className="border-l-4 border-gray-200 pl-4 sm:pl-6 py-2">
                <h4 className="font-bold text-lg sm:text-xl mb-1">Transparency over Marketing</h4>
                <p className="text-gray-500 text-xs sm:text-sm">Specs, grades, and quality levels are clearly explained. No hidden surprises.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-3 sm:gap-4"
          >
            {certs.map((cert, idx) => (
              <div 
                key={idx}
                className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gray-50 border border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all group flex flex-col items-center text-center"
              >
                <cert.icon className="w-8 h-8 sm:w-10 sm:h-10 text-primary mb-2 sm:mb-4 group-hover:scale-110 transition-transform" />
                <span className="font-bold text-xs sm:text-sm text-gray-800 leading-tight">{cert.title}</span>
              </div>
            ))}
            <div className="col-span-2 bg-gray-900 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white text-center relative overflow-hidden">
               <div className="absolute inset-0 bg-primary/10"></div>
               <h4 className="font-serif text-xl sm:text-2xl font-bold relative z-10 mb-2">Full Documentation</h4>
               <p className="text-gray-400 text-xs sm:text-sm relative z-10">COA, Phytosanitary, Moisture Analysis, Lab Reports with every batch.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

