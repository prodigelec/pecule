import { Hourglass } from "lucide-react";
import { formatEuro } from "@/lib/format";

export function ProblemSection() {
  return (
    <section className="bg-primary text-on-primary">
      <div className="mx-auto grid w-full max-w-5xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center">
        <div>
          <Hourglass aria-hidden className="size-10 text-accent" />
          <h2 className="mt-4 font-display text-3xl font-bold">Pourquoi Pécule ?</h2>
          <p className="mt-4 text-lg opacity-90">
            Chez La Banque Postale, un paiement par carte peut mettre plusieurs
            jours à apparaître sur le compte. Pendant ce temps, le solde affiché
            est trop optimiste et on dépense de l&apos;argent qui est déjà parti.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-2xl bg-on-primary/10 p-5">
            <p className="text-sm opacity-80">Ce qu&apos;affiche la banque</p>
            <p className="mt-2 font-display text-2xl font-bold">{formatEuro(148230)}</p>
          </div>
          <div className="rounded-2xl bg-surface p-5 text-ink">
            <p className="text-sm text-ink-muted">Ce qui reste vraiment</p>
            <p className="mt-2 font-display text-2xl font-bold text-primary">
              {formatEuro(131150)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
