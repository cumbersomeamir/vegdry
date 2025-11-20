"use client";

import { useScroll, animated, useSpring } from "@react-spring/web";
import { useRef } from "react";
import { motion } from "framer-motion";
import { Factory, Zap, TrendingDown, Globe2, ChevronRight } from "lucide-react";
import Link from "next/link";

const features = [
  {
    id: 1,
    title: "Strategic Manufacturing Hub",
    desc: "Located in the heart of India's agricultural belts. We process at source, eliminating waste and middleman markup instantly.",
    icon: Factory,
    color: "bg-orange-100 text-orange-600",
  },
  {
    id: 2,
    title: "Advanced Low-Temp Tech",
    desc: "Our proprietary drying algorithms retain 97% of nutrients while slashing energy costs by 40% compared to traditional freeze-drying.",
    icon: Zap,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 3,
    title: "Volume = Unbeatable Price",
    desc: "5+ state-of-the-art factories running 24/7. We don't just sell food; we trade scale. High volume, ultra-low margins.",
    icon: TrendingDown,
    color: "bg-green-100 text-green-600",
  },
];

export default function WhyVegdry() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const springProps = useSpring({
    from: { backgroundPosition: "0% 0%" },
    to: { backgroundPosition: "0% 100%" },
    config: { duration: 20000 },
    loop: true,
  });

  return (
    <section ref={containerRef} className="relative overflow-hidden py-12 sm:py-16 md:py-24 bg-gray-900 text-white">
      {/* Animated Background Grid */}
      <animated.div 
        style={springProps}
        className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" 
      />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/20 text-primary font-bold text-xs sm:text-sm mb-4 sm:mb-6 border border-primary/30">
              <Globe2 size={14} className="sm:w-4 sm:h-4" />
              <span className="whitespace-nowrap">Global Supply Chain Revolution</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 sm:mb-6 leading-tight">
              The Problem: <br/>
              <span className="text-gray-400">Supply Chains are Broken.</span>
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed border-l-4 border-primary pl-4 sm:pl-6">
              Traditional dried food supply chains are plagued by <strong>middlemen, spoilage, and energy inefficiency</strong>. This inflates costs by up to 300% before the product even hits the shelf.
            </p>

            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
              The Solution: <span className="text-primary">The Vegdry Engine.</span>
            </h3>
            
            <p className="text-base sm:text-lg text-gray-400 mb-8 sm:mb-10">
              We built a manufacturing fortress in India. By owning the factory floor and deploying advanced processing tech, we've engineered a price-point that global competitors simply cannot match.
            </p>

            <Link href="/aboutus">
              <button className="group flex items-center gap-2 sm:gap-3 text-base sm:text-lg font-bold text-white hover:text-primary transition-colors">
                See Our Factories <ChevronRight size={18} className="sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </motion.div>

          {/* Animated Visuals */}
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-8 top-10 bottom-10 w-0.5 bg-gradient-to-b from-primary/50 to-transparent hidden md:block"></div>

            <div className="space-y-6 sm:space-y-8 md:space-y-12">
              {features.map((feature, idx) => (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2, duration: 0.6 }}
                  className="relative pl-0 md:pl-20"
                >
                  {/* Node Dot */}
                  <div className="hidden md:flex absolute left-0 top-0 h-16 w-16 items-center justify-center rounded-full bg-gray-800 border-4 border-gray-900 z-10 shadow-xl">
                    <div className={`h-3 w-3 rounded-full ${feature.color.replace('bg-', 'bg-').replace('text-', '')} animate-pulse`} />
                  </div>

                  <div className="bg-gray-800/50 backdrop-blur-sm p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-gray-700 hover:border-primary/50 transition-colors group">
                    <div className={`h-10 w-10 sm:h-12 sm:w-12 rounded-lg ${feature.color} flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform`}>
                      <feature.icon size={20} className="sm:w-6 sm:h-6" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-white mb-2">{feature.title}</h4>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
