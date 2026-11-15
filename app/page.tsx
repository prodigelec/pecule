import { FeaturesSection } from "@/components/landing/features-section";
import { Hero } from "@/components/landing/hero";
import { HowItWorks } from "@/components/landing/how-it-works";
import { LandingFooter } from "@/components/landing/landing-footer";
import { LandingHeader } from "@/components/landing/navbar/landing-header";
import { ProblemSection } from "@/components/landing/problem-section";

export default function LandingPage() {
  return (
    <>
      <LandingHeader />
      <main>
        <Hero />
        <ProblemSection />
        <FeaturesSection />
        <HowItWorks />
      </main>
      <LandingFooter />
    </>
  );
}
