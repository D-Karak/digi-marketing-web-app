import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesGrid from "@/components/landing/FeaturesGrid";
import PricingSection from "@/components/landing/PricingSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import FooterCTA from "@/components/landing/FooterCTA";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-primary selection:text-white">
      <Navbar />
      <HeroSection />
      <FeaturesGrid />
      <PricingSection />
      <TestimonialsSection />
      <FooterCTA />
    </main>
  );
}
