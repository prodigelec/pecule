import type { LucideIcon } from "lucide-react";

type FeatureRowProps = {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  text: string;
  points: string[];
  /** Aperçu à droite (ou à gauche si `reversed`). */
  preview: React.ReactNode;
  reversed?: boolean;
};

export function FeatureRow({ icon: Icon, eyebrow, title, text, points, preview, reversed }: FeatureRowProps) {
  return (
    <li className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
      <div className={reversed ? "md:order-2" : undefined}>
        <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent">
          <Icon aria-hidden className="size-4" />
          {eyebrow}
        </p>
        <h3 className="mt-3 font-display text-2xl font-bold text-ink md:text-3xl">{title}</h3>
        <p className="mt-4 text-lg text-ink-muted">{text}</p>
        <ul className="mt-5 space-y-2">
          {points.map((point) => (
            <li key={point} className="flex gap-3 text-ink">
              <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary" />
              {point}
            </li>
          ))}
        </ul>
      </div>
      {/* Fond teinté derrière l'aperçu, pour le détacher de la page. */}
      <div aria-hidden className={`rounded-4xl bg-primary/8 p-6 sm:p-10 ${reversed ? "md:order-1" : ""}`}>
        {preview}
      </div>
    </li>
  );
}
