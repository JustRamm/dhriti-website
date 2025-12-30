import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { ButterflyBackground } from "@/components/ButterflyBackground";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { WhySection } from "@/components/sections/WhySection";
import { ObjectivesSection } from "@/components/sections/ObjectivesSection";
import { ActivityShowcase } from "@/components/sections/ActivityShowcase";
import { SpeakersSection } from "@/components/sections/SpeakersSection";
import { ImpactSection } from "@/components/sections/ImpactSection";
import { VenueSection } from "@/components/sections/VenueSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { PartnershipSection } from "@/components/sections/PartnershipSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "./components/sections/Footer";
import { LoadingScreen } from "@/components/LoadingScreen";

function App() {
  // Debug initialization
  console.log("Dhriti App Initialized");
  const [surpriseBoxRef, setSurpriseBoxRef] = useState<HTMLElement | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="min-h-screen font-sans bg-[#FFF8DC] selection:bg-[#D4AF37] selection:text-[#800020] overflow-x-hidden">
      <LoadingScreen />

      {/* Dynamic Background with Butterfly Effect */}
      <ButterflyBackground attractionTarget={surpriseBoxRef} />

      <Navbar />

      <main className="relative">
        <HeroSection />
        <WhySection />
        <ObjectivesSection />
        <ImpactSection />
        <ActivityShowcase setSurpriseBoxRef={setSurpriseBoxRef} />
        <SpeakersSection />
        <VenueSection />
        <GallerySection />
        <PartnershipSection />
        <FAQSection />
        <ContactSection />
        <Footer />
      </main>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 p-3 bg-[#800020] text-white rounded-full shadow-lg hover:bg-[#A0153E] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
