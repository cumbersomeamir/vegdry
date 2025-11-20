"use client";

import { motion } from "framer-motion";
import { useTrail, animated } from "@react-spring/web";
import { Network, Truck, Users, Globe } from "lucide-react";
import { useEffect, useState, useRef } from "react";

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
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const trail = useTrail(partners.length, {
    from: { opacity: 0, x: 20, height: 0 },
    to: { opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 20, height: isVisible ? 110 : 0 },
    config: { mass: 5, tension: 2000, friction: 200 },
  });

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-3 sm:mb-4">
            A Supply Chain Built For Scale
          </h2>
          <p className="text-sm sm:text-base text-gray-600 px-4">
            Vegdry works with a wide network of agriculture suppliers, drying units, and international buyers to ensure speed and efficiency.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-10 sm:mb-16">
          {trail.map(({ height, ...style }, index) => {
            const Partner = partners[index];
            return (
              <animated.div
                key={index}
                style={style}
                className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center h-full"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-50 rounded-full flex items-center justify-center text-primary mb-3 sm:mb-4">
                  <Partner.icon size={18} className="sm:w-5 sm:h-5" />
                </div>
                <h3 className="font-bold text-xs sm:text-sm text-gray-900 leading-tight">{Partner.title}</h3>
              </animated.div>
            );
          })}
        </div>

        <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-gray-200 shadow-sm">
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-10 text-gray-900">Industries We Power</h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
            {industries.map((ind, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gray-50 text-gray-700 font-medium border border-gray-200 hover:border-primary/50 hover:text-primary transition-colors cursor-default text-xs sm:text-sm"
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
