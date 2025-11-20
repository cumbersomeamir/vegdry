"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Download } from "lucide-react";

import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden bg-[#0f172a]">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Gradient Mesh */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] opacity-90"></div>
        
        {/* Animated Orbs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
            x: [0, 50, 0]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full bg-primary blur-[120px]"
        ></motion.div>
        
        <motion.div 
           animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.15, 0.05],
            x: [0, -30, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, delay: 2 }}
          className="absolute -bottom-40 -left-20 w-[600px] h-[600px] rounded-full bg-orange-400 blur-[140px]"
        ></motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-orange-300 text-sm font-medium mb-10"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            Global Trade Ready
          </motion.div>

          {/* Headline */}
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-8 tracking-tight leading-[1.1]"
          >
            Scale Your Supply <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-primary to-orange-600">
              Without Limits.
            </span>
          </motion.h2>

          {/* Subheadline */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-16 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Join 45+ global partners sourcing premium dehydrated ingredients directly from our factories. No middlemen. No markup.
          </motion.p>

          {/* Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-6 items-center"
          >
            <Link href="/contact" passHref className="w-full sm:w-auto">
              <button className="group relative px-8 py-5 bg-primary text-white text-lg font-bold rounded-full overflow-hidden shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 w-full">
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-600 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center justify-center gap-3">
                  Start Trading <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </Link>
            
            <Link href="/products" passHref className="w-full sm:w-auto">
              <button className="group px-8 py-5 bg-white/5 backdrop-blur-sm border border-white/10 text-white text-lg font-bold rounded-full hover:bg-white/10 transition-all duration-300 w-full flex items-center justify-center gap-3">
                <Download className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                Download Catalog
              </button>
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.5 }}
             className="mt-20 pt-10 border-t border-white/5 flex flex-wrap justify-center gap-8 md:gap-16 text-gray-500 font-medium text-sm uppercase tracking-widest"
          >
            <span>ISO 22000 Certified</span>
            <span>HACCP Compliant</span>
            <span>FSSAI Licensed</span>
            <span>FDA Registered</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
