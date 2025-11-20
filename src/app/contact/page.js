import ContactForm from "@/components/contact/ContactForm";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact | Vegdry",
  description: "Get in touch with Vegdry for bulk orders, private labeling, and inquiries.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="relative py-24 bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
           <div className="absolute -right-20 -top-20 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
           <div className="absolute -left-20 bottom-0 w-72 h-72 bg-orange-300 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We operate at the speed of commerce. Reach out now and let's build a supply chain that works for you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 container mx-auto px-6">
        <ContactForm />
      </section>
      
      {/* Map Section (Visual Placeholder) */}
      <section className="h-96 bg-gray-100 relative w-full grayscale hover:grayscale-0 transition-all duration-700">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.4768568332545!2d77.9949!3d30.2728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092bc7e6804155%3A0x5606055555555555!2sClement%20Town%2C%20Dehradun%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1625555555555!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy"
        ></iframe>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-6 py-3 rounded-full shadow-xl font-bold text-gray-900 pointer-events-none">
          Vegdry HQ
        </div>
      </section>

      <Footer />
    </main>
  );
}

