import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import RoomsSection from '@/components/RoomsSection';
import ServicesSection from '@/components/ServicesSection';
import PromotionsSection from '@/components/PromotionsSection';
import ContactsSection from '@/components/ContactsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="scroll-smooth">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <RoomsSection />
        <ServicesSection />
        <PromotionsSection />
        <ContactsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
