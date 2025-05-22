import HeroSection from "@/components/HeroSection";
import JasaSection from "@/components/JasaSection";
import JourneySection from "@/components/JourneySection";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/MengapaKamiSection";
import WorkProcessSection from "@/components/WorkProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <JourneySection />
      <JasaSection />
      <WorkProcessSection />
      <TestimonialsSection />

      <Footer />
    </main>
  );
}
