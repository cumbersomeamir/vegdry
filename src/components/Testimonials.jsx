"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const reviews = [
  {
    text: "Exactly the specs we asked for — every time. Same colour, same aroma, same granulation. Saves us hours of formulation correction.",
    author: "Food Processing Unit",
    location: "Gujarat"
  },
  {
    text: "Low prices without cutting corners. Vegdry gives us transparent pricing and very quick dispatch. Solved our procurement headache.",
    author: "Snack Manufacturer",
    location: "Indore"
  },
  {
    text: "High volumes and fast fulfilment. Their stock availability and documentation support helped us scale our export volumes.",
    author: "Exporter",
    location: "Mumbai"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-primary/5 text-center">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-serif font-bold text-gray-900">Trusted by Manufacturers</h2>
          <p className="mt-4 text-gray-600">Our clients choose Vegdry for one reason: predictability.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-sm relative"
            >
              <Quote className="absolute top-6 left-6 text-orange-100 w-10 h-10 -z-0" />
              <p className="text-gray-700 mb-6 relative z-10 italic leading-relaxed">"{review.text}"</p>
              <div className="border-t pt-4 border-gray-100">
                <p className="font-bold text-gray-900">{review.author}</p>
                <p className="text-xs text-primary font-bold uppercase tracking-wider">{review.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

