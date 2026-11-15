import { FileUp, ShieldCheck, Smartphone, Users, Wallet, Zap } from "lucide-react";
import { FeatureRow } from "@/components/landing/features/feature-row";
import { BalancePreview } from "@/components/landing/features/previews/balance-preview";
import { ImportPreview } from "@/components/landing/features/previews/import-preview";
import { InstallPreview } from "@/components/landing/features/previews/install-preview";
import { QuickEntryPreview } from "@/components/landing/features/previews/quick-entry-preview";
import { SecurityPreview } from "@/components/landing/features/previews/security-preview";
import { SharedPreview } from "@/components/landing/features/previews/shared-preview";

export function FeaturesSection() {
  return (
    <section id="fonctionnalites" className="mx-auto w-full max-w-5xl scroll-mt-16 px-6 py-16 md:py-24">
      <div className="max-w-2xl">
        <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">Ce que fait Pécule</h2>
        <p className="mt-3 text-lg text-ink-muted">Peu d&apos;écrans, l&apos;essentiel d&apos;abord.</p>
      </div>

      <ol className="mt-14 space-y-20 md:mt-20 md:space-y-28">
        <FeatureRow
          icon={Wallet}
          eyebrow="Solde réel"
          title="Le seul chiffre qui compte"
          text="Le solde de la banque, moins tout ce que vous avez déjà dépensé mais qui n'est pas encore passé."
          points={["Mis à jour à chaque saisie", "Plus de mauvaise surprise en fin de mois"]}
          preview={<BalancePreview />}
        />
        <FeatureRow
          reversed
          icon={Zap}
          eyebrow="Saisie rapide"
          title="Notée en quelques secondes"
          text="Juste après l'achat, depuis le téléphone : montant, libellé, qui a payé. C'est tout."
          points={["Trois champs, un bouton", "Le solde est recalculé aussitôt"]}
          preview={<QuickEntryPreview />}
        />
        <FeatureRow
          icon={FileUp}
          eyebrow="Import du relevé"
          title="La banque confirme, Pécule rapproche"
          text="Déposez le relevé de La Banque Postale : chaque ligne est associée à votre saisie, sans compter deux fois."
          points={["Doublons détectés automatiquement", "Les oublis apparaissent comme nouvelles opérations"]}
          preview={<ImportPreview />}
        />
        <FeatureRow
          reversed
          icon={Users}
          eyebrow="À deux"
          title="Un compte joint, deux identifiants"
          text="Chacun se connecte avec son propre compte, et chaque opération garde en mémoire qui l'a payée."
          points={["Moi, l'autre ou les deux", "Les mêmes chiffres pour tout le monde"]}
          preview={<SharedPreview />}
        />
        <FeatureRow
          icon={Smartphone}
          eyebrow="Sur Android"
          title="Toujours dans la poche"
          text="Pécule s'installe sur l'écran d'accueil comme une vraie application, sans passer par le Play Store."
          points={["Ouverture en plein écran, comme une appli", "Thème clair ou sombre selon le téléphone"]}
          preview={<InstallPreview />}
        />
        <FeatureRow
          reversed
          icon={ShieldCheck}
          eyebrow="Sécurité"
          title="Accès protégé"
          text="Vos finances restent privées : chacun son identifiant, et Pécule ne vous demande jamais vos codes bancaires."
          points={["Mot de passe jamais stocké en clair", "Tentatives de connexion limitées", "Données hébergées en Europe"]}
          preview={<SecurityPreview />}
        />
      </ol>
    </section>
  );
}
