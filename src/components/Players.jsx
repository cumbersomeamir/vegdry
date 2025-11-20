"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Users, Factory, Building2, ArrowRight } from "lucide-react";

const players = [
  {
    title: "Branded Snack Companies",
    type: "B2C",
    desc: "Direct-to-consumer champions focused on storytelling, clean packaging, and organic trust.",
    examples: ["Natierra", "Bare Snacks", "Sunsweet"],
    icon: Users,
    image: "https://images.unsplash.com/photo-1621447504864-d8686e12698c?auto=format&fit=crop&q=80&w=500",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Ingredient Manufacturers",
    type: "B2B Backbone",
    desc: "The invisible giants powering the industry with spray-dried and freeze-dried powders.",
    examples: ["Nutradry", "FutureCeuticals", "Aarkay"],
    icon: Factory,
    image: "https://images.unsplash.com/photo-1588862073947-26537606b20b?auto=format&fit=crop&q=80&w=500",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Large FMCG Multinationals",
    type: "Portfolio",
    desc: "Global conglomerates acquiring niche healthy brands to diversify their portfolios.",
    examples: ["Nestlé", "PepsiCo", "Unilever"],
    icon: Building2,
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=500",
    color: "from-purple-500 to-violet-500",
  },
];

export default function Players() {
  return (
    <section className="py-32 bg-gray-50 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-serif font-bold text-gray-900">
            Types of Players
          </h2>
          <p className="mt-6 text-xl text-gray-600">
            Vegdry can blend these models: start as a consumer brand, but keep a strong backbone of ingredient capabilities.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {players.map((player, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="h-56 relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${player.color} opacity-90 z-10 mix-blend-multiply`} />
                <Image
                  src={player.image}
                  alt={player.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white p-6 text-center">
                  <player.icon size={48} className="mb-4 opacity-90" />
                  <h3 className="text-2xl font-bold">{player.title}</h3>
                  <span className="mt-2 inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-sm font-medium border border-white/30">
                    {player.type}
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <p className="text-gray-600 mb-6 line-clamp-3 text-lg">
                  {player.desc}
                </p>
                
                <div className="space-y-3 border-t border-gray-100 pt-6">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Key Examples</p>
                  <ul className="space-y-2">
                    {player.examples.map((ex, i) => (
                      <li key={i} className="flex items-center text-gray-700 font-medium">
                        <ArrowRight size={14} className="mr-2 text-primary" />
                        {ex}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
