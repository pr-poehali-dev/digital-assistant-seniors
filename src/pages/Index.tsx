import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PricingSection from "@/components/PricingSection";
import ContactsSection from "@/components/ContactsSection";

export default function Index() {
  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <PricingSection />
      <ContactsSection />
    </div>
  );
}
