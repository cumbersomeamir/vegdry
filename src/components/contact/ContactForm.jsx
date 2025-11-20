"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactForm() {
  return (
    <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start">
      {/* Contact Info */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="space-y-6 sm:space-y-8"
      >
        <div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-3 sm:mb-4">
            Let's Talk Volume.
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
            Whether you're a global distributor or a local manufacturer, we're ready to scale with you. 
            Reach out for bulk inquiries, sample requests, or factory tours.
          </p>
        </div>

        <div className="space-y-4 sm:space-y-6">
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="bg-orange-100 p-2.5 sm:p-3 rounded-full text-primary flex-shrink-0">
              <Mail size={20} className="sm:w-6 sm:h-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm sm:text-base text-gray-900">Email Us</h4>
              <p className="text-sm sm:text-base text-gray-600 break-all">info@olliespaw.com</p>
              <p className="text-gray-500 text-xs sm:text-sm">Typical response time: 2 hours</p>
            </div>
          </div>

          <div className="flex items-start gap-3 sm:gap-4">
            <div className="bg-orange-100 p-2.5 sm:p-3 rounded-full text-primary flex-shrink-0">
              <Phone size={20} className="sm:w-6 sm:h-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm sm:text-base text-gray-900">Call Us</h4>
              <p className="text-sm sm:text-base text-gray-600">+91 8090005050</p>
              <p className="text-gray-500 text-xs sm:text-sm">Mon-Fri, 9am - 6pm IST</p>
            </div>
          </div>

          <div className="flex items-start gap-3 sm:gap-4">
            <div className="bg-orange-100 p-2.5 sm:p-3 rounded-full text-primary flex-shrink-0">
              <MapPin size={20} className="sm:w-6 sm:h-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm sm:text-base text-gray-900">Visit HQ</h4>
              <p className="text-sm sm:text-base text-gray-600">
                Khasra No. 513, Bharuwala, Clementtown, Dehradun-248002, Uttarakhand, India
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Form */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 border border-gray-100 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-orange-300" />
        
        <form className="space-y-4 sm:space-y-6 relative z-10">
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-1.5 sm:mb-2">Name</label>
              <input 
                type="text" 
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-1.5 sm:mb-2">Company</label>
              <input 
                type="text" 
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                placeholder="Vegdry Inc."
              />
            </div>
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-1.5 sm:mb-2">Email</label>
            <input 
              type="email" 
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-1.5 sm:mb-2">Interest</label>
            <select className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all">
              <option>Bulk Commodity Purchase</option>
              <option>Private Labeling</option>
              <option>Sample Request</option>
              <option>Factory Visit</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-1.5 sm:mb-2">Message</label>
            <textarea 
              rows={4}
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
              placeholder="Tell us about your volume requirements..."
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-primary text-white font-bold py-3 sm:py-4 rounded-xl shadow-lg hover:bg-orange-600 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
          >
            Send Message
            <Send size={16} className="sm:w-[18px] sm:h-[18px]" />
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}

