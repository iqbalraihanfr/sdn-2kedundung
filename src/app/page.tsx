import { FeaturesSection } from "@/components/home/features-section";
import { HeroSection } from "@/components/home/hero-section";
import { VisiMisiSection } from "@/components/home/visi-misi-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <VisiMisiSection />
      <FeaturesSection />
    </>
  );
}
