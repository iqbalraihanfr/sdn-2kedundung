import { Gerakan7KaihAboutSection } from "@/components/gerakan-7kaih/gerakan-7kaih-about-section";
import { Gerakan7KaihHeroSection } from "@/components/gerakan-7kaih/gerakan-7kaih-hero-section";
import { Gerakan7KaihJourneySection } from "@/components/gerakan-7kaih/gerakan-7kaih-journey-section";

export default function Gerakan7KAIHPage() {
  return (
    <div className="min-h-screen bg-surface">
      <Gerakan7KaihHeroSection />
      <Gerakan7KaihJourneySection />
      <Gerakan7KaihAboutSection />
    </div>
  );
}
