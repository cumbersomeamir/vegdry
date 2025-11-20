"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function BulkPricing() {
  return (
    <section className="py-24 bg-orange-50">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-orange-100">
          <div className="grid lg:grid-cols-2">
            <div className="p-12 flex flex-col justify-center">
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
                Bulk Pricing That <br/><span className="text-primary">Helps You Scale.</span>
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Vegdry is built for businesses that need large volumes at competitive prices. Whether you’re buying 100 kg or 25 tons, our pricing model ensures you get the best value.
              </p>
              <ul className="space-y-4 mb-8">
                {["Direct sourcing eliminates markups", "High throughput reduces processing cost", "Efficient logistics ensures lower freight", "Dynamic pricing adjusts with markets"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact">
                <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-orange-600 transition-colors flex items-center gap-2 w-fit">
                  Request Bulk Quote <ArrowRight size={20} />
                </button>
              </Link>
            </div>
            
            <div className="bg-gray-900 p-12 text-white flex flex-col justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
              <h3 className="text-2xl font-bold mb-6 relative z-10">How to Request</h3>
              <div className="space-y-6 relative z-10">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <h4 className="font-bold">Select Products</h4>
                    <p className="text-gray-400 text-sm">Dried veg, fruits, or powders.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <h4 className="font-bold">Define Volume</h4>
                    <p className="text-gray-400 text-sm">From 100kg to Container Loads.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <h4 className="font-bold">Get Quote</h4>
                    <p className="text-gray-400 text-sm">Best possible rate & delivery timeline.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

