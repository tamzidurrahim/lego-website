import HeroSection from "@/components/HeroSection";
import CatalogSection from "@/components/CatalogSection";
import TrustBadges from "@/components/TrustBadges";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <HeroSection />
    <CatalogSection />
    <TrustBadges />
    <Footer />
  </div>
);

export default Index;
