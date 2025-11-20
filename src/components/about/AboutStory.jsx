"use client";

import { motion } from "framer-motion";

const timeline = [
  { year: "2020", title: "The Inception", desc: "Started as a small pilot project in Dehradun drying locally sourced mangoes." },
  { year: "2022", title: "Scaling Up", desc: "Commissioned our first major industrial dehydration plant in Gujarat." },
  { year: "2023", title: "Global Reach", desc: "Began exporting onion and garlic powders to the Middle East and Europe." },
  { year: "2025", title: "The Future", desc: "Launching Vegdry Consumer Brand & Pet Nutrition lines." },
];

export default function AboutStory() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-900">Our Journey</h2>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base md:text-lg text-gray-600">From humble beginnings to a global powerhouse.</p>
        </div>

        <div className="relative pl-6 sm:pl-8 md:pl-12">
          {/* Vertical Line */}
          <div className="absolute left-0 sm:left-2 md:left-4 top-0 bottom-0 w-0.5 sm:w-1 bg-gray-300"></div>

          <div className="space-y-8 sm:space-y-10 md:space-y-12">
            {timeline.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
                className="relative flex items-start gap-4 sm:gap-6"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[26px] sm:-left-[30px] md:-left-[34px] top-1 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-white border-4 border-primary shadow-md flex items-center justify-center z-10 flex-shrink-0">
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-primary rounded-full"></div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-0.5">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 sm:mb-2">{item.year}</h3>
                  <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">{item.title}</h4>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

