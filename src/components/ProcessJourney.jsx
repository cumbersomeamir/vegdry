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
    <section ref={containerRef} className="py-12 sm:py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-900">Farm to Factory</h2>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base md:text-lg text-gray-600">The 8-step Vegdry process ensuring premium quality.</p>
        </div>

        <div className="relative max-w-4xl mx-auto pl-6 sm:pl-8 md:pl-12">
          {/* Vertical Line */}
          <div className="absolute left-0 sm:left-2 md:left-4 top-0 bottom-0 w-0.5 sm:w-1 bg-gray-200">
            <motion.div 
              style={{ height: lineHeight }} 
              className="w-full bg-primary origin-top"
            />
          </div>

          <div className="space-y-6 sm:space-y-8 md:space-y-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="relative flex items-start gap-4 sm:gap-6"
              >
                {/* Step Number Circle */}
                <div className="absolute -left-[26px] sm:-left-[30px] md:-left-[34px] top-0.5 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-white border-4 border-primary shadow-lg z-10 flex items-center justify-center text-primary font-bold text-xs sm:text-sm md:text-base flex-shrink-0">
                  {idx + 1}
                </div>

                {/* Content */}
                <div className="flex-1 pt-0.5">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">
                    <span className="text-gray-400">0{idx + 1}.</span> {step.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

