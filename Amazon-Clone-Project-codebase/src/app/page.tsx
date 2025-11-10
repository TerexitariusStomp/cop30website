"use client";

import HeroSection from "@/components/sections/hero-section";
import IntroSection from "@/components/sections/intro-section";
import VisionSection from "@/components/sections/vision-section";
import MissionSection from "@/components/sections/mission-section";
import ThematicAxesSection from "@/components/sections/thematic-axes-section";
import LocationSection from "@/components/sections/location-section";
import PlatformSection from "@/components/sections/platform-section";
import DeliverablesSection from "@/components/sections/deliverables-section";
import PricingSection from "@/components/sections/pricing-section";
import CodexSection from "@/components/sections/codex-section";
import ClosingQuoteSection from "@/components/sections/closing-quote-section";
import Footer from "@/components/sections/footer";

export default function Page() {
  return (
    <main className="min-h-screen bg-background-primary">
      <HeroSection />
      <IntroSection />
      <VisionSection />
      <MissionSection />
      <ThematicAxesSection />
      <LocationSection />
      <PlatformSection />
      <DeliverablesSection />
      <PricingSection />
      <CodexSection />
      <ClosingQuoteSection />
      <Footer />
    </main>
  );
}
