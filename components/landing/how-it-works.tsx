import { Eye, FileUp, ReceiptText, type LucideIcon } from "lucide-react";

type Step = { icon: LucideIcon; title: string; text: string };

const steps: Step[] = [
  {
    icon: ReceiptText,
    title: "Vous payez, vous notez",
    text: "Juste après l'achat, un appui sur « + Dépense » et c'est enregistré.",
  },
  {
    icon: FileUp,
    title: "Vous importez le relevé",
    text: "De temps en temps, téléchargez le relevé sur le site de la banque et déposez-le dans Pécule.",
  },
  {
    icon: Eye,
    title: "Vous voyez le vrai solde",
    text: "Pécule rapproche les opérations et affiche ce qu'il reste vraiment.",
  },
];

export function HowItWorks() {
  return (
    <section id="comment" className="scroll-mt-16 border-y border-border bg-surface">
      <div className="mx-auto w-full max-w-5xl px-6 py-16 md:py-20">
        <h2 className="font-display text-3xl font-bold text-ink">Comment ça marche</h2>
        <ol className="mt-10 grid gap-8 md:grid-cols-3">
          {steps.map(({ icon: Icon, title, text }, index) => (
            <li key={title}>
              <div className="flex items-center gap-3">
                <span className="font-display text-4xl font-extrabold text-accent">
                  {index + 1}
                </span>
                <Icon aria-hidden className="size-6 text-primary" />
              </div>
              <h3 className="mt-3 font-display text-lg font-bold text-ink">{title}</h3>
              <p className="mt-2 text-ink-muted">{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
