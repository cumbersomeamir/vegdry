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
    <section className="py-12 sm:py-16 md:py-24 bg-primary/5 text-center">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900">Trusted by Manufacturers</h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 px-4">Our clients choose Vegdry for one reason: predictability.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-sm relative"
            >
              <Quote className="absolute top-4 left-4 sm:top-6 sm:left-6 text-orange-100 w-8 h-8 sm:w-10 sm:h-10 -z-0" />
              <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 relative z-10 italic leading-relaxed">"{review.text}"</p>
              <div className="border-t pt-3 sm:pt-4 border-gray-100">
                <p className="font-bold text-sm sm:text-base text-gray-900">{review.author}</p>
                <p className="text-xs text-primary font-bold uppercase tracking-wider">{review.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

