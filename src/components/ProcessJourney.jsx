"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  { title: "Direct Sourcing", desc: "From farms & mandis to remove middlemen." },
  { title: "Cleaning & Sorting", desc: "Air cleaning, destoning, and optical sorting." },
  { title: "Pre-Treatment", desc: "Cutting, blanching, and prep for consistency." },
  { title: "Dehydration", desc: "Low-temp, hot-air, or spray drying." },
  { title: "Grinding & Powdering", desc: "Standardized mesh size and flowability." },
  { title: "Quality Checks", desc: "Microbial, moisture, and purity tests." },
  { title: "Packing & Dispatch", desc: "10-25kg food-grade bulk bags." },
  { title: "Delivery", desc: "To your factory door, anywhere globally." },
];

export default function ProcessJourney() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-serif font-bold text-gray-900">Farm to Factory</h2>
          <p className="mt-4 text-gray-600">The 8-step Vegdry process ensuring premium quality.</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-100 -translate-x-1/2 hidden md:block">
            <motion.div 
              style={{ height: lineHeight }} 
              className="w-full bg-primary origin-top"
            />
          </div>

          <div className="space-y-12 md:space-y-24">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={`flex-1 text-center ${idx % 2 !== 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <h3 className="text-2xl font-bold text-gray-900">0{idx + 1}. {step.title}</h3>
                  <p className="text-gray-600 mt-2">{step.desc}</p>
                </div>
                
                <div className="w-12 h-12 rounded-full bg-white border-4 border-primary shadow-lg z-10 flex items-center justify-center text-primary font-bold text-sm">
                  {idx + 1}
                </div>

                <div className="flex-1 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

