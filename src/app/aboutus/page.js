import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import MissionSection from "@/components/about/MissionSection";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About Us | Vegdry",
  description: "Learn about Vegdry's mission to revolutionize the global dehydrated food market.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <AboutHero />
      <AboutStory />
      <MissionSection />
      <CTA />
      <Footer />
    </main>
  );
}
