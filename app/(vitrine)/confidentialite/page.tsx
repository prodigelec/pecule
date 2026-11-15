import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/legal/legal-page";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Confidentialité · Pécule" };

export default function ConfidentialitePage() {
  return (
    <LegalPage title="Confidentialité">
      <LegalSection title="En bref">
        <ul>
          <li>Aucune publicité, aucun traceur, aucune mesure d&apos;audience.</li>
          <li>Aucune connexion à votre banque : Pécule ne connaît pas vos codes bancaires.</li>
          <li>Vos données ne sont ni vendues ni partagées.</li>
        </ul>
      </LegalSection>

      <LegalSection title="Visiteurs de la vitrine">
        <p>
          La page d&apos;accueil ne dépose aucun cookie et ne collecte aucune donnée.
          Comme tout hébergeur, Vercel peut conserver des journaux techniques
          (dont l&apos;adresse IP) pour assurer la sécurité du service.
        </p>
      </LegalSection>

      <LegalSection title="Utilisateurs de l'application">
        <p>Pour fonctionner, Pécule enregistre :</p>
        <ul>
          <li><strong>votre compte</strong> : prénom, email et mot de passe, ce dernier jamais stocké en clair ;</li>
          <li><strong>vos sessions</strong> : date de connexion, adresse IP et navigateur, pour la sécurité ;</li>
          <li><strong>vos opérations</strong> : date, montant, libellé et personne qui a payé, qu&apos;elles soient saisies ou importées ;</li>
          <li><strong>le solde indiqué par la banque</strong> à chaque import de relevé.</li>
        </ul>
        <p>
          Le fichier de relevé est lu pour en extraire les opérations ; il n&apos;est
          pas conservé. Ces données servent uniquement à calculer le solde
          réellement disponible du compte.
        </p>
      </LegalSection>

      <LegalSection title="Cookie">
        <p>
          Un seul cookie est utilisé : celui qui vous garde connecté. Il est
          strictement nécessaire au service, c&apos;est pourquoi aucun bandeau de
          consentement n&apos;est affiché.
        </p>
      </LegalSection>

      <LegalSection title="Hébergement et conservation">
        <p>
          Les données sont stockées en Europe (Neon, Francfort). Elles sont
          conservées tant que le compte existe et supprimées sur simple demande.
        </p>
      </LegalSection>

      <LegalSection title="Vos droits">
        <p>
          Vous pouvez accéder à vos données, les corriger, les exporter ou les
          faire supprimer en écrivant via le{" "}
          <a href={site.issuesUrl}>dépôt GitHub du projet</a>. En cas de
          désaccord, vous pouvez saisir la{" "}
          <a href="https://www.cnil.fr">CNIL</a>.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
