"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { TrendingUp, Leaf, ShoppingBag } from "lucide-react";

const stats = [
  {
    title: "Dried Fruits & Nuts",
    value: "$7-8B",
    growth: "5-6% CAGR",
    desc: "Mostly B2C. Raisins, apricots, dates. The classic healthy snack choice.",
    icon: ShoppingBag,
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=500", // Dried Apricots/Figs
  },
  {
    title: "Freeze-dried F&V",
    value: "$8.21B",
    growth: "6.9% CAGR",
    desc: "Snacks + Ingredients. Preserving 97% of nutrients. Europe dominates.",
    icon: Leaf,
    image: "https://images.unsplash.com/photo-1508736334652-27e5d9f247f2?auto=format&fit=crop&q=80&w=500", // Berries/Granola
  },
  {
    title: "F&V Powders",
    value: "High Growth",
    growth: "Emerging",
    desc: "Ingredients for F&B, nutraceuticals, and functional foods.",
    icon: TrendingUp,
    image: "https://images.unsplash.com/photo-1532336414038-51251a7f2c88?auto=format&fit=crop&q=80&w=500", // Spices/Powders
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

export default function MarketOverview() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20 text-center max-w-3xl mx-auto"
        >
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">Industry Landscape</span>
          <h2 className="mt-3 text-5xl font-serif font-bold text-gray-900">
            Market Overview
          </h2>
          <p className="mt-6 text-xl text-gray-600 leading-relaxed">
            Vegdry sits at the powerful intersection of three growing multi-billion dollar spaces.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-10 md:grid-cols-3"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-xl transition-all hover:shadow-2xl border border-gray-100"
            >
              <div className="h-48 w-full relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-black/10 transition-colors" />
                <Image 
                  src={stat.image} 
                  alt={stat.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-sm">
                  <stat.icon className="text-primary h-6 w-6" />
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{stat.title}</h3>
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-4xl font-bold text-primary">{stat.value}</span>
                  <span className="text-sm font-bold text-green-600 bg-green-50 px-2 py-1 rounded-md">{stat.growth}</span>
                </div>
                <p className="text-gray-600 leading-relaxed">{stat.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
