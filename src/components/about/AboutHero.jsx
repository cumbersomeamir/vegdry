"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useSpring, animated } from "@react-spring/web";
import { useState, useEffect } from "react";

function NumberCounter({ n }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return <animated.span>{number.to((n) => n.toFixed(0))}</animated.span>;
}

const stats = [
  { label: "Annual Capacity (MT)", value: 5000, suffix: "+" },
  { label: "Factories", value: 3, suffix: "+" },
  { label: "Partner Farmers", value: 1200, suffix: "+" },
  { label: "Global Clients", value: 45, suffix: "+" },
];

export default function AboutHero() {
  return (
    <section className="relative py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Who We Are</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-gray-900 mb-8 leading-tight">
            Feeding the World, <br/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-600">One Shipment at a Time.</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-10">
            Vegdry isn't just a brand; it's an infrastructure play. We are bridging the gap between India's vast agricultural output and the global demand for shelf-stable nutrition.
          </p>

          <div className="grid grid-cols-2 gap-8">
             {stats.map((stat, idx) => (
               <div key={idx}>
                 <h3 className="text-3xl font-bold text-gray-900 flex items-center">
                   <NumberCounter n={stat.value} />
                   {stat.suffix}
                 </h3>
                 <p className="text-gray-500 text-sm uppercase tracking-wide">{stat.label}</p>
               </div>
             ))}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl"
        >
          <Image
            src="https://images.unsplash.com/photo-1595855759920-86582396756a?auto=format&fit=crop&q=80&w=1000"
            alt="Factory Worker"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-10 left-10 text-white">
             <p className="font-serif italic text-2xl">"Quality is not an act, it is a habit."</p>
             <p className="text-sm mt-2 opacity-80">- Processing Unit #2, Gujarat</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
