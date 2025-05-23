import HeroSection from '@/components/HeroSection';
import LayananSection from '@/components/LayananSection';
import JourneySection from '@/components/JourneySection';
import Navbar from '@/components/Navbar';
import ServicesSection from '@/components/MengapaKamiSection';
import WorkProcessSection from '@/components/WorkProcessSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <JourneySection />
      <LayananSection />
      <WorkProcessSection />
      <TestimonialsSection />

      <Footer />
    </main>
  );
}
