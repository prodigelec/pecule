import { formatEuro } from "@/lib/format";
import { PreviewCard } from "@/components/landing/features/previews/preview-card";

const ops = [
  { label: "Boulangerie", who: "S", tone: "bg-primary text-on-primary", cents: -640 },
  { label: "Pharmacie", who: "L", tone: "bg-accent text-on-accent", cents: -2190 },
  { label: "Électricité", who: "S+L", tone: "bg-ink text-surface", cents: -7420 },
  { label: "Supermarché", who: "L", tone: "bg-accent text-on-accent", cents: -8640 },
];

export function SharedPreview() {
  return (
    <PreviewCard>
      <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">Aujourd&apos;hui</p>
      <ul className="mt-3 divide-y divide-border">
        {ops.map((op) => (
          <li key={op.label} className="flex items-center gap-3 py-3">
            <span
              className={`flex size-9 shrink-0 items-center justify-center rounded-full text-xs font-bold ${op.tone}`}
            >
              {op.who}
            </span>
            <span className="flex-1 font-medium text-ink">{op.label}</span>
            <span className="font-display font-semibold text-negative">{formatEuro(op.cents)}</span>
          </li>
        ))}
      </ul>
    </PreviewCard>
  );
}
