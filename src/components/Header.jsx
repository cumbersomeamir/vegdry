"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag } from "lucide-react";
import Logo from "./Logo";

const links = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "About Us", href: "/aboutus" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on path change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-md shadow-sm py-3"
            : "bg-transparent py-6"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Logo className="w-10 h-10 transition-transform group-hover:scale-110" />
            <span
              className={`font-serif text-2xl font-bold tracking-tight transition-colors ${
                scrolled || pathname !== "/" ? "text-gray-900" : "text-gray-900"
              }`}
            >
              Vegdry
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative font-medium text-sm tracking-wide text-gray-700 hover:text-primary transition-colors"
              >
                {pathname === link.href && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 top-full block h-0.5 w-full bg-primary mt-1"
                  />
                )}
                {link.name}
              </Link>
            ))}
            
            <Link 
              href="/products"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-primary hover:text-white transition-colors text-gray-700"
            >
              <ShoppingBag size={18} />
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <nav className="flex flex-col gap-6 text-center">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-2xl font-serif font-bold ${
                    pathname === link.href ? "text-primary" : "text-gray-900"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <hr className="border-gray-100 my-4" />
              <div className="flex justify-center">
                 <Logo className="w-16 h-16" />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

