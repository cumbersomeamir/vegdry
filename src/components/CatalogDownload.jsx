"use client";

import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";

export default function CatalogDownload() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white text-center">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-orange-50 rounded-2xl sm:rounded-3xl mx-auto flex items-center justify-center text-primary mb-6 sm:mb-8 rotate-3 hover:rotate-0 transition-transform duration-500">
            <FileText size={32} className="sm:w-10 sm:h-10" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-4 sm:mb-6 px-4">
            Download Product Catalog
          </h2>
          <p className="text-gray-600 mb-8 sm:mb-10 text-base sm:text-lg px-4">
            Get detailed specifications, pictures, grades, and packaging formats for all products across our dried vegetable, fruit, and powder divisions.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-lg mx-auto mb-8 sm:mb-10 text-left bg-gray-50 p-4 sm:p-6 rounded-xl border border-gray-100">
            <ul className="space-y-2 sm:space-y-3">
              <li className="text-xs sm:text-sm text-gray-600 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span> Product Visuals
              </li>
              <li className="text-xs sm:text-sm text-gray-600 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span> Technical Specs
              </li>
              <li className="text-xs sm:text-sm text-gray-600 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span> Packaging Options
              </li>
            </ul>
            <ul className="space-y-2 sm:space-y-3">
              <li className="text-xs sm:text-sm text-gray-600 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span> MOQ & Capacity
              </li>
              <li className="text-xs sm:text-sm text-gray-600 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span> Export Standards
              </li>
              <li className="text-xs sm:text-sm text-gray-600 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span> Storage Guidelines
              </li>
            </ul>
          </div>

          <button className="bg-gray-900 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-full font-bold shadow-xl hover:bg-primary transition-colors flex items-center justify-center gap-2 sm:gap-3 mx-auto text-sm sm:text-base w-full sm:w-auto max-w-xs sm:max-w-none">
            <Download size={18} className="sm:w-5 sm:h-5" />
            Download PDF Catalog
          </button>
        </motion.div>
      </div>
    </section>
  );
}

