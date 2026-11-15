import { FileUp, ShieldCheck, Smartphone, Users, Wallet, Zap } from "lucide-react";
import { FeatureRow } from "@/components/landing/features/feature-row";
import { BalancePreview } from "@/components/landing/features/previews/balance-preview";
import { ImportPreview } from "@/components/landing/features/previews/import-preview";
import { QuickEntryPreview } from "@/components/landing/features/previews/quick-entry-preview";
import { SharedPreview } from "@/components/landing/features/previews/shared-preview";

const extras = [
  { icon: Smartphone, title: "Toujours dans la poche", text: "Installable sur Android comme une application, en clair ou en sombre." },
  { icon: ShieldCheck, title: "Accès protégé", text: "Identifiant personnel, et aucune connexion à votre banque n'est demandée." },
];

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
      </ol>

      <ul className="mt-20 grid gap-4 sm:grid-cols-2 md:mt-28">
        {extras.map(({ icon: Icon, title, text }) => (
          <li key={title} className="flex gap-4 rounded-2xl border border-border bg-surface p-5">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Icon aria-hidden className="size-6" />
            </span>
            <div>
              <h3 className="font-display font-bold text-ink">{title}</h3>
              <p className="mt-1 text-sm text-ink-muted">{text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
