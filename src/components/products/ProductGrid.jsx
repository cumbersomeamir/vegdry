"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProductCard from "./ProductCard";
import { products } from "@/data/products";
import { Filter, Search } from "lucide-react";

const categories = ["All", "Dried Vegetables", "Dried Fruits", "Powders"];

export default function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full">
      {/* Filters & Search */}
      <div className="mb-8 sm:mb-12 flex flex-col items-stretch sm:items-center justify-between gap-4 sm:gap-6 md:flex-row">
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 rounded-full bg-gray-100 p-1 w-full sm:w-auto">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`relative rounded-full px-4 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? "text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {selectedCategory === category && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 rounded-full bg-gray-900 shadow-sm"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10 whitespace-nowrap">{category}</span>
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative w-full sm:w-auto sm:max-w-xs">
          <Search className="absolute left-3 sm:left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-full border-none bg-gray-50 py-2.5 sm:py-3 pl-9 sm:pl-10 pr-4 text-sm text-gray-900 shadow-inner ring-1 ring-gray-200 transition-shadow focus:ring-2 focus:ring-primary focus:outline-none"
          />
        </div>
      </div>

      {/* Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {filteredProducts.length === 0 && (
        <div className="mt-20 text-center">
          <Filter className="mx-auto mb-4 h-12 w-12 text-gray-300" />
          <h3 className="text-lg font-medium text-gray-900">No products found</h3>
          <p className="mt-2 text-gray-500">Try adjusting your search or category.</p>
        </div>
      )}
    </div>
  );
}

