import HeroSection from "@/components/sections/hero-section";
import IntroSection from "@/components/sections/intro-section";
import VisionSection from "@/components/sections/vision-section";
import MissionSection from "@/components/sections/mission-section";
import RoadmapSection from "@/components/sections/roadmap-section";
import ThematicAxesSection from "@/components/sections/thematic-axes-section";
import ActivitiesSection from "@/components/sections/activities-section";
import LocationSection from "@/components/sections/location-section";
import PlatformSection from "@/components/sections/platform-section";
import DeliverablesSection from "@/components/sections/deliverables-section";
import PricingSection from "@/components/sections/pricing-section";
import ClosingQuoteSection from "@/components/sections/closing-quote-section";
import Footer from "@/components/sections/footer";

export default function Page() {
  return (
    <main className="min-h-screen bg-background-primary">
      <HeroSection />
      <IntroSection />
      <VisionSection />
      <MissionSection />
      <RoadmapSection />
      <ThematicAxesSection />
      <ActivitiesSection />
      <LocationSection />
      <PlatformSection />
      <DeliverablesSection />
      <PricingSection />
      <ClosingQuoteSection />
      <Footer />
    </main>
  );
}