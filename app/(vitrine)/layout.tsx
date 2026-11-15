import { LandingFooter } from "@/components/landing/footer/landing-footer";
import { LandingHeader } from "@/components/landing/navbar/landing-header";

/** Pages publiques (accueil, mentions légales, confidentialité) : navbar + footer communs. */
export default function VitrineLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LandingHeader />
      <main className="flex-1">{children}</main>
      <LandingFooter />
    </>
  );
}
