"use client";

import { motion } from "framer-motion";
import { CheckCircle2, FlaskConical, ShieldCheck, Layers, TrendingUp } from "lucide-react";

const themes = [
  {
    title: "Technology as a Selling Point",
    desc: "Explain the process (low-temp dehydration, freeze-drying). Show how it preserves nutrients, color, and flavor.",
    icon: FlaskConical,
  },
  {
    title: "Clean Label & Certifications",
    desc: "FSSAI + Organic, Non-GMO, Vegan. For B2B: GMP, HACCP, ISO.",
    icon: ShieldCheck,
  },
  {
    title: "Product Architecture Layers",
    desc: "1. Raw dried pieces. 2. Single-ingredient powders. 3. Application-specific blends (Smoothie, Curry, Kids).",
    icon: Layers,
  },
  {
    title: "M&A Proof of Value",
    desc: "Building a strong brand or ingredient capability opens doors to acquisition by big FMCG or ingredient groups.",
    icon: TrendingUp,
  },
];

export default function StrategicThemes() {
  return (
    <section className="py-32 bg-gradient-to-br from-orange-50 to-white overflow-hidden">
       <div className="container mx-auto px-6 text-gray-900 relative">
        
        {/* Decorative Background Blob */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />

        <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-bold tracking-wider uppercase text-sm">Strategic Insights</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 mt-2 leading-tight">
              Patterns of Success
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              We've analyzed the market leaders to identify the key pillars that Vegdry can leverage for rapid growth and sustainability.
            </p>
            
            <div className="space-y-8">
              {themes.map((theme, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  className="flex gap-5 group"
                >
                  <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-white shadow-sm border border-orange-100 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <theme.icon size={24} className="text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900 group-hover:text-primary transition-colors">{theme.title}</h3>
                    <p className="text-gray-600 mt-2 leading-relaxed">{theme.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 1 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
             <div className="absolute inset-0 bg-gradient-to-r from-primary to-orange-600 transform rotate-3 rounded-3xl opacity-20 blur-lg" />
             <div className="bg-white p-10 rounded-3xl shadow-2xl border border-orange-100 relative">
               <div className="absolute top-0 right-0 -mt-4 -mr-4 h-20 w-20 bg-yellow-400 rounded-full opacity-20 blur-xl" />
               
               <h3 className="text-2xl font-bold mb-6 text-gray-900">Vegdry Positioning</h3>
               
               <blockquote className="text-2xl italic font-serif text-gray-800 mb-10 leading-relaxed relative z-10">
                 <span className="text-6xl text-primary/20 absolute -top-4 -left-2 font-sans">"</span>
                 Vegdry – real fruits and vegetables, made lighter, longer-lasting, and easier to use.
               </blockquote>
               
               <ul className="space-y-4">
                 {["Real food, simply dried", "Functional convenience", "Multi-format (Snacks + Powders)"].map((item, i) => (
                   <li key={i} className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-orange-50 transition-colors">
                     <div className="h-3 w-3 rounded-full bg-primary shadow-sm shadow-orange-200"></div>
                     <span className="font-medium text-gray-700">{item}</span>
                   </li>
                 ))}
               </ul>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
