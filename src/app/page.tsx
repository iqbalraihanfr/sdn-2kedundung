import { FeaturesSection } from "@/components/home/features-section";
import { HeroSection } from "@/components/home/hero-section";
import { TentangSection } from "@/components/home/tentang-section";
import { InformasiSection } from "@/components/home/informasi-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TentangSection />
      <FeaturesSection />
      <InformasiSection />
    </>
  );
}
