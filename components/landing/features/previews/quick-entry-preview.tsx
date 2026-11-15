import { PreviewCard } from "@/components/landing/features/previews/preview-card";

const payers = ["Moi", "Laure", "Les deux"];

export function QuickEntryPreview() {
  return (
    <PreviewCard>
      <p className="text-sm font-semibold text-ink">Nouvelle dépense</p>
      <p className="mt-4 text-center font-display text-5xl font-bold text-ink">
        86,40<span className="text-ink-muted"> €</span>
      </p>
      <div className="mt-5 rounded-xl border border-border px-4 py-3 text-ink">Supermarché</div>
      <p className="mt-4 text-xs font-medium text-ink-muted">Qui a payé ?</p>
      <div className="mt-2 grid grid-cols-3 gap-1 rounded-xl bg-background p-1 text-sm">
        {payers.map((payer, i) => (
          <span
            key={payer}
            className={`rounded-lg py-2 text-center ${
              i === 0 ? "bg-surface font-semibold text-primary shadow-sm" : "text-ink-muted"
            }`}
          >
            {payer}
          </span>
        ))}
      </div>
      <div className="mt-5 rounded-full bg-accent py-3 text-center font-semibold text-on-accent">
        Enregistrer
      </div>
    </PreviewCard>
  );
}
