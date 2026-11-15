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
    <section id="comment" className="scroll-mt-16 bg-nav text-on-nav">
      <div className="mx-auto w-full max-w-5xl px-6 py-16 md:py-24">
        <h2 className="font-display text-3xl font-bold md:text-4xl">Comment ça marche</h2>
        <p className="mt-3 text-lg text-on-nav-muted">Trois gestes, et le solde est juste.</p>

        <ol className="relative mt-12 grid gap-8 md:mt-16 md:grid-cols-3 md:gap-6">
          {/* Ligne pointillée qui relie les étapes : verticale sur mobile, horizontale ensuite. */}
          <span aria-hidden className="absolute inset-y-7 left-7 border-l-2 border-dashed border-on-nav/30 md:hidden" />
          <span aria-hidden className="absolute inset-x-[16.66%] top-7 hidden border-t-2 border-dashed border-on-nav/30 md:block" />

          {steps.map(({ icon: Icon, title, text }, index) => (
            <li key={title} className="relative flex gap-5 md:flex-col md:items-center md:gap-6">
              {/* L'anneau couleur du fond masque la ligne derrière la pastille. */}
              <span className="relative z-10 flex size-14 shrink-0 items-center justify-center rounded-full bg-accent font-display text-xl font-extrabold text-on-accent ring-8 ring-nav">
                {index + 1}
              </span>
              <div className="flex-1 rounded-2xl border border-on-nav/10 bg-on-nav/5 p-6 md:w-full">
                <Icon aria-hidden className="size-6 text-accent" />
                <h3 className="mt-3 font-display text-lg font-bold">{title}</h3>
                <p className="mt-2 text-on-nav-muted">{text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
