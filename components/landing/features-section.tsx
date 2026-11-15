import { FileUp, ShieldCheck, Smartphone, Users, Wallet, Zap, type LucideIcon } from "lucide-react";

type Feature = { icon: LucideIcon; title: string; text: string };

const features: Feature[] = [
  {
    icon: Wallet,
    title: "Le solde réellement disponible",
    text: "Le solde de la banque moins les dépenses qui ne sont pas encore passées. Le seul chiffre qui compte.",
  },
  {
    icon: Zap,
    title: "Saisie en quelques secondes",
    text: "Montant, libellé, qui a payé : la dépense est notée au moment de l'achat, depuis le téléphone.",
  },
  {
    icon: FileUp,
    title: "Import du relevé",
    text: "Le relevé de La Banque Postale est lu et rapproché de vos saisies : aucune dépense n'est comptée deux fois.",
  },
  {
    icon: Users,
    title: "Pensé pour deux",
    text: "Chacun son identifiant sur le même compte joint, et chaque opération sait qui l'a payée.",
  },
  {
    icon: Smartphone,
    title: "Toujours dans la poche",
    text: "Installable sur Android comme une application, en thème clair ou sombre selon le téléphone.",
  },
  {
    icon: ShieldCheck,
    title: "Accès protégé",
    text: "Données personnelles, accès sur identifiant uniquement. Aucune connexion à votre banque n'est demandée.",
  },
];

export function FeaturesSection() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-16 md:py-20">
      <h2 className="font-display text-3xl font-bold text-ink">Ce que fait Pécule</h2>
      <p className="mt-3 max-w-2xl text-lg text-ink-muted">
        Peu d&apos;écrans, l&apos;essentiel d&apos;abord.
      </p>
      <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon: Icon, title, text }) => (
          <li key={title} className="rounded-2xl border border-border bg-surface p-6">
            <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Icon aria-hidden className="size-6" />
            </span>
            <h3 className="mt-4 font-display text-lg font-bold text-ink">{title}</h3>
            <p className="mt-2 text-ink-muted">{text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
