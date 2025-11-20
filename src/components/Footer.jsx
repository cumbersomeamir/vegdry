import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 sm:gap-10">
          {/* Brand */}
          <div className="text-center md:text-left max-w-sm">
            <div className="flex items-center justify-center md:justify-start gap-2 sm:gap-3 mb-3 sm:mb-4">
               <Logo className="w-7 h-7 sm:w-8 sm:h-8" />
               <h2 className="text-xl sm:text-2xl font-serif font-bold text-white">Vegdry</h2>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Global leaders in dehydrated food processing. bridging the gap between Indian agriculture and the world.
            </p>
          </div>
          
          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12">
            <Link href="/" className="text-gray-400 hover:text-primary transition-colors font-medium text-sm sm:text-base">Home</Link>
            <Link href="/products" className="text-gray-400 hover:text-primary transition-colors font-medium text-sm sm:text-base">Products</Link>
            <Link href="/aboutus" className="text-gray-400 hover:text-primary transition-colors font-medium text-sm sm:text-base">About Us</Link>
            <Link href="/contact" className="text-gray-400 hover:text-primary transition-colors font-medium text-sm sm:text-base">Contact</Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-xs text-gray-600">
          <p className="text-center md:text-left">&copy; {new Date().getFullYear()} Vegdry. All rights reserved.</p>
          <div className="flex gap-3 sm:gap-4 text-xs">
            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
