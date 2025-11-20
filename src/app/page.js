import Hero from "@/components/Hero";
import QualityCertifications from "@/components/QualityCertifications";
import Partners from "@/components/Partners";
import UseCases from "@/components/UseCases";
import Testimonials from "@/components/Testimonials";
import LabReports from "@/components/LabReports";
import ProcessJourney from "@/components/ProcessJourney";
import BulkPricing from "@/components/BulkPricing";
import CatalogDownload from "@/components/CatalogDownload";
import WhyVegdry from "@/components/WhyVegdry";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white font-sans">
      <Hero />
      <WhyVegdry />
      <QualityCertifications />
      <Partners />
      <UseCases />
      <Testimonials />
      <LabReports />
      <ProcessJourney />
      <BulkPricing />
      <CatalogDownload />
      <CTA />
      <Footer />
    </main>
  );
}
