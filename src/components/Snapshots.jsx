"use client";

import { motion } from "framer-motion";

const companies = [
  {
    name: "Natierra",
    focus: "Premium B2C",
    desc: "Organic freeze-dried fruits. Strong on 'no guilt' & certifications.",
    lesson: "Certifications as a brand engine. Educate on technology.",
    color: "border-l-emerald-500",
  },
  {
    name: "Bare Snacks",
    focus: "Fruit Chips (Acq. by PepsiCo)",
    desc: "Baked, not fried. Minimal processing. Crunch texture.",
    lesson: "Exit potential to FMCG. Texture as a differentiator.",
    color: "border-l-red-500",
  },
  {
    name: "Brothers All Natural",
    focus: "Freeze-dried Crisps",
    desc: "Retail packs + B2B ingredients. Kids & family positioning.",
    lesson: "Tiffin-friendly dried veggies for India.",
    color: "border-l-blue-500",
  },
  {
    name: "European Freeze Dry",
    focus: "Ingredient Powerhouse",
    desc: "Commission drying services. Ready meals, pet treats.",
    lesson: "Commission drying is big business. Multi-segment use.",
    color: "border-l-indigo-500",
  },
  {
    name: "FutureCeuticals",
    focus: "Science + Powders",
    desc: "Clinically backed functional ingredients. Whole fruit powders.",
    lesson: "Hero functional blends (Gut, Brain). Partner with labs.",
    color: "border-l-purple-500",
  },
  {
    name: "Aarkay Food Products",
    focus: "Spray-dried Powders (India)",
    desc: "Tomato, cheese, fruit powders. Strong export focus.",
    lesson: "Trade shows for B2B pipeline. Specialisation.",
    color: "border-l-orange-500",
  },
  {
    name: "Nutradry",
    focus: "100% Powders (Australia)",
    desc: "'As good as fresh'. No artificials. B2B/Wholesale.",
    lesson: "Push multi-use: smoothies, cooking, sauces.",
    color: "border-l-yellow-500",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Snapshots() {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-serif font-bold text-gray-900">
            Detailed Company Snapshots
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Learning from the winners in the space.
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {companies.map((company, idx) => (
            <motion.div
              key={idx}
              variants={item}
              whileHover={{ scale: 1.02, rotate: -1 }}
              className={`flex flex-col justify-between rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-xl hover:border-primary/20 border-l-4 ${company.color}`}
            >
              <div>
                <div className="mb-2 text-xs font-bold tracking-wider uppercase text-gray-500">
                  {company.focus}
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">{company.name}</h3>
                <p className="mb-6 text-gray-600 text-sm leading-relaxed">{company.desc}</p>
              </div>
              <div className="rounded-lg bg-gray-50 p-4 mt-auto">
                <p className="text-xs font-bold text-gray-500 uppercase mb-1">Lesson for Vegdry</p>
                <p className="text-sm font-medium text-gray-800 italic">"{company.lesson}"</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
