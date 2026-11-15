import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/legal/legal-page";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Mentions légales · Pécule" };

export default function MentionsLegalesPage() {
  return (
    <LegalPage title="Mentions légales">
      <LegalSection title="Éditeur">
        <p>
          Pécule est un site personnel, édité par un particulier à titre non
          professionnel. Conformément à l&apos;article 6, III-2 de la loi n° 2004-575
          du 21 juin 2004 pour la confiance dans l&apos;économie numérique, son
          identité a été communiquée à l&apos;hébergeur.
        </p>
        <p>
          Contact : via le <a href={site.issuesUrl}>dépôt GitHub du projet</a>.
        </p>
      </LegalSection>

      <LegalSection title="Hébergement">
        <p>
          <strong>Site :</strong> Vercel Inc., 440 N Barranca Ave #4133, Covina,
          CA 91723, États-Unis — <a href="https://vercel.com">vercel.com</a>.
        </p>
        <p>
          <strong>Base de données :</strong> Neon Inc., données stockées en Europe
          (Francfort, Allemagne) — <a href="https://neon.tech">neon.tech</a>.
        </p>
      </LegalSection>

      <LegalSection title="Accès au service">
        <p>
          La vitrine est publique. L&apos;application elle-même est réservée aux
          personnes invitées : il n&apos;existe pas d&apos;inscription libre.
        </p>
      </LegalSection>

      <LegalSection title="Propriété intellectuelle">
        <p>
          Le code source est public sur <a href={site.repoUrl}>GitHub</a>. Le nom,
          le logo et les textes de Pécule appartiennent à son éditeur.
        </p>
        <p>
          Photo de la page d&apos;accueil : Vitaly Gariev, via{" "}
          <a href="https://unsplash.com/photos/N0KIyPiAkkY">Unsplash</a> (licence
          Unsplash).
        </p>
      </LegalSection>
    </LegalPage>
  );
}
