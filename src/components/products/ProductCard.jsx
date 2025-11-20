"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Plus } from "lucide-react";

export default function ProductCard({ product }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -8 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-xl border border-gray-100"
    >
      {/* Image Area */}
      <div className="relative h-64 w-full overflow-hidden bg-gray-50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-white/90 px-2 py-1 text-xs font-bold uppercase tracking-wider text-primary backdrop-blur-sm shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
            {product.category}
          </span>
          <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
            {product.size}
          </span>
        </div>
        
        <h3 className="mb-2 text-xl font-bold text-gray-900 line-clamp-1">
          {product.name}
        </h3>
        
        <p className="mb-4 text-sm text-gray-600 line-clamp-2 flex-1">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-auto border-t border-gray-50 pt-4">
          <span className="text-xl font-bold text-primary">{product.price}</span>
          <Link href="/contact">
            <button className="flex items-center justify-center rounded-full bg-gray-900 p-3 text-white transition-colors hover:bg-primary">
              <ShoppingCart size={18} />
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

