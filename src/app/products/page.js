import ProductGrid from "@/components/products/ProductGrid";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Products | Vegdry",
  description: "Explore our range of premium freeze-dried fruits, vegetable powders, and healthy snacks.",
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="relative overflow-hidden bg-orange-50 py-16 sm:py-20 md:py-24 lg:py-32">
        {/* Background Decorations */}
        <div className="absolute -left-20 top-20 h-64 w-64 rounded-full bg-orange-200 opacity-20 blur-3xl" />
        <div className="absolute -right-20 bottom-20 h-80 w-80 rounded-full bg-yellow-200 opacity-20 blur-3xl" />
        
        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 sm:mb-6">
            Our Collection
          </h1>
          <p className="mx-auto max-w-2xl text-base sm:text-lg md:text-xl text-gray-600 px-4">
            Pure, potent, and preserved at peak freshness. Discover the power of advanced dehydration.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <ProductGrid />
      </section>
      
      <Footer />
    </main>
  );
}

