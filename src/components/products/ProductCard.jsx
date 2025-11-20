"use client";

import { useState, useEffect } from "react";
import { useSpring, animated, to } from "@react-spring/web";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1];
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export default function ProductCard({ product }) {
  const [isMobile, setIsMobile] = useState(false);
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }));

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseMove = (e) => {
    if (!isMobile) {
      const { clientX: x, clientY: y } = e;
      set({ xys: calc(x, y) });
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      set({ xys: [0, 0, 1] });
    }
  };

  return (
    <animated.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={!isMobile ? { transform: to(props.xys, trans) } : {}}
      className="group relative flex flex-col overflow-hidden rounded-xl sm:rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-2xl border border-gray-100 z-10"
    >
      {/* Image Area */}
      <div className="relative h-48 sm:h-56 md:h-64 w-full overflow-hidden bg-gray-50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Tags */}
        <div className="absolute top-2 left-2 sm:top-3 sm:left-3 flex flex-wrap gap-1.5 sm:gap-2">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-white/90 px-1.5 sm:px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-primary backdrop-blur-sm shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="flex flex-1 flex-col p-4 sm:p-5 md:p-6">
        <div className="mb-2 flex items-center justify-between gap-2">
          <span className="text-[10px] sm:text-xs font-semibold text-gray-400 uppercase tracking-wide truncate">
            {product.category}
          </span>
          <span className="text-[10px] sm:text-xs font-medium text-gray-500 bg-gray-100 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full whitespace-nowrap">
            {product.size}
          </span>
        </div>
        
        <h3 className="mb-2 text-lg sm:text-xl font-bold text-gray-900 line-clamp-1">
          {product.name}
        </h3>
        
        <p className="mb-3 sm:mb-4 text-xs sm:text-sm text-gray-600 line-clamp-2 flex-1">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-auto border-t border-gray-50 pt-3 sm:pt-4 gap-2">
          <span className="text-lg sm:text-xl font-bold text-primary truncate">{product.price}</span>
          <Link href="/contact" className="flex-shrink-0">
            <button className="flex items-center justify-center rounded-full bg-gray-900 p-2.5 sm:p-3 text-white transition-colors hover:bg-primary active:scale-95">
              <ShoppingCart size={16} className="sm:w-[18px] sm:h-[18px]" />
            </button>
          </Link>
        </div>
      </div>
    </animated.div>
  );
}
