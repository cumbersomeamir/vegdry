"use client";

import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";

export default function CatalogDownload() {
  return (
    <section className="py-24 bg-white text-center">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="w-20 h-20 bg-orange-50 rounded-3xl mx-auto flex items-center justify-center text-primary mb-8 rotate-3 hover:rotate-0 transition-transform duration-500">
            <FileText size={40} />
          </div>
          
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
            Download Product Catalog
          </h2>
          <p className="text-gray-600 mb-10 text-lg">
            Get detailed specifications, pictures, grades, and packaging formats for all products across our dried vegetable, fruit, and powder divisions.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-6 max-w-lg mx-auto mb-10 text-left bg-gray-50 p-6 rounded-xl border border-gray-100">
            <ul className="space-y-3">
              <li className="text-sm text-gray-600 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Product Visuals
              </li>
              <li className="text-sm text-gray-600 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Technical Specs
              </li>
              <li className="text-sm text-gray-600 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Packaging Options
              </li>
            </ul>
            <ul className="space-y-3">
              <li className="text-sm text-gray-600 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span> MOQ & Capacity
              </li>
              <li className="text-sm text-gray-600 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Export Standards
              </li>
              <li className="text-sm text-gray-600 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Storage Guidelines
              </li>
            </ul>
          </div>

          <button className="bg-gray-900 text-white px-10 py-4 rounded-full font-bold shadow-xl hover:bg-primary transition-colors flex items-center gap-3 mx-auto">
            <Download size={20} />
            Download PDF Catalog
          </button>
        </motion.div>
      </div>
    </section>
  );
}

