"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const timeline = [
  { year: "2020", title: "The Inception", desc: "Started as a small pilot project in Dehradun drying locally sourced mangoes." },
  { year: "2022", title: "Scaling Up", desc: "Commissioned our first major industrial dehydration plant in Gujarat." },
  { year: "2023", title: "Global Reach", desc: "Began exporting onion and garlic powders to the Middle East and Europe." },
  { year: "2025", title: "The Future", desc: "Launching Vegdry Consumer Brand & Pet Nutrition lines." },
];

export default function AboutStory() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-serif font-bold text-gray-900">Our Journey</h2>
          <p className="mt-4 text-gray-600">From humble beginnings to a global powerhouse.</p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 hidden md:block"></div>

          <div className="space-y-16">
            {timeline.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="flex-1 text-center md:text-right">
                   {idx % 2 === 0 && (
                     <>
                       <h3 className="text-4xl font-bold text-primary mb-2">{item.year}</h3>
                       <h4 className="text-xl font-bold text-gray-900">{item.title}</h4>
                       <p className="text-gray-600 mt-2">{item.desc}</p>
                     </>
                   )}
                   {/* Empty div for layout balance on alternating sides */}
                   {idx % 2 !== 0 && <div className="hidden md:block"></div>}
                </div>
                
                <div className="w-12 h-12 rounded-full bg-white border-4 border-primary shadow-lg flex items-center justify-center z-10 relative">
                  <div className="w-4 h-4 bg-primary rounded-full"></div>
                </div>

                <div className="flex-1 text-center md:text-left">
                  {idx % 2 !== 0 && (
                     <>
                       <h3 className="text-4xl font-bold text-primary mb-2">{item.year}</h3>
                       <h4 className="text-xl font-bold text-gray-900">{item.title}</h4>
                       <p className="text-gray-600 mt-2">{item.desc}</p>
                     </>
                   )}
                   {/* Empty div for layout balance */}
                   {idx % 2 === 0 && <div className="hidden md:block"></div>}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

