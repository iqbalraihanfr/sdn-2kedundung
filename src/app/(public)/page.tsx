import { FeaturesSection } from "@/components/home/features-section";
import { HeroSection } from "@/components/home/hero-section";
import { PrestasiSection } from "@/components/home/prestasi-section";
import { TentangSection } from "@/components/home/tentang-section";
import { InformasiSection } from "@/components/home/informasi-section";
import { GallerySection } from "@/components/home/gallery-section";

export const revalidate = 3600;

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TentangSection />
      <FeaturesSection />
      <PrestasiSection />
      <GallerySection />
      <InformasiSection />
    </>
  );
}
