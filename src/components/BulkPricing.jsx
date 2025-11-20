"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function BulkPricing() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-orange-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden border border-orange-100">
          <div className="grid lg:grid-cols-2">
            <div className="p-6 sm:p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-4 sm:mb-6">
                Bulk Pricing That <br/><span className="text-primary">Helps You Scale.</span>
              </h2>
              <p className="text-gray-600 mb-6 sm:mb-8 text-base sm:text-lg">
                Vegdry is built for businesses that need large volumes at competitive prices. Whether you're buying 100 kg or 25 tons, our pricing model ensures you get the best value.
              </p>
              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {["Direct sourcing eliminates markups", "High throughput reduces processing cost", "Efficient logistics ensures lower freight", "Dynamic pricing adjusts with markets"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-gray-700 font-medium">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="w-full sm:w-auto">
                <button className="bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold shadow-lg hover:bg-orange-600 transition-colors flex items-center justify-center gap-2 w-full sm:w-fit text-sm sm:text-base">
                  Request Bulk Quote <ArrowRight size={18} className="sm:w-5 sm:h-5" />
                </button>
              </Link>
            </div>
            
            <div className="bg-gray-900 p-6 sm:p-8 md:p-12 text-white flex flex-col justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 relative z-10">How to Request</h3>
              <div className="space-y-4 sm:space-y-6 relative z-10">
                <div className="flex gap-3 sm:gap-4">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-bold text-sm sm:text-base">Select Products</h4>
                    <p className="text-gray-400 text-xs sm:text-sm">Dried veg, fruits, or powders.</p>
                  </div>
                </div>
                <div className="flex gap-3 sm:gap-4">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-bold text-sm sm:text-base">Define Volume</h4>
                    <p className="text-gray-400 text-xs sm:text-sm">From 100kg to Container Loads.</p>
                  </div>
                </div>
                <div className="flex gap-3 sm:gap-4">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-bold text-sm sm:text-base">Get Quote</h4>
                    <p className="text-gray-400 text-xs sm:text-sm">Best possible rate & delivery timeline.</p>
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

