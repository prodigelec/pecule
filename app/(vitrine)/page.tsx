import { FeaturesSection } from "@/components/landing/features/features-section";
import { Hero } from "@/components/landing/hero";
import { HowItWorks } from "@/components/landing/how-it-works";
import { ProblemSection } from "@/components/landing/problem-section";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <FeaturesSection />
      <HowItWorks />
    </>
  );
}
