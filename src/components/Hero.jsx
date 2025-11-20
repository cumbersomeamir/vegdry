"use client";

import { motion } from "framer-motion";
import ThreeScene from "./ThreeScene";
import { ArrowRight } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden">
      <ThreeScene />
      
      {/* Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/10 to-white/80 pointer-events-none z-0" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="z-10 px-6 text-center relative max-w-4xl mx-auto"
      >
        <motion.div variants={itemVariants}>
           <span className="inline-block py-1 px-3 rounded-full bg-orange-100 text-orange-700 text-sm font-semibold tracking-wide mb-4 border border-orange-200">
              Premium Dehydrated Nutrition
           </span>
        </motion.div>
        
        <motion.h1 variants={itemVariants} className="font-serif text-6xl font-extrabold tracking-tight text-gray-900 md:text-8xl drop-shadow-sm">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500">Vegdry</span>
        </motion.h1>
        
        <motion.p variants={itemVariants} className="mt-6 text-xl font-medium text-gray-800 md:text-3xl max-w-2xl mx-auto leading-relaxed">
          Preserving <span className="text-primary font-bold">Culture, one grain at a time.</span>
        </motion.p>
        
        <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 max-w-xl mx-auto font-light">
          Real fruits and vegetables, made lighter, longer-lasting, and easier to use. 
          Experience the future of sustainable snacking.
        </motion.p>
        
        <motion.div variants={itemVariants} className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/products" passHref>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-bold text-white shadow-xl hover:bg-orange-600 hover:shadow-2xl transition-all"
            >
              Discover Products
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </motion.button>
          </Link>
          <Link href="/aboutus" passHref>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full bg-white px-8 py-4 text-lg font-bold text-gray-800 shadow-lg hover:bg-gray-50 transition-all border border-gray-100"
            >
              Our Story
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
