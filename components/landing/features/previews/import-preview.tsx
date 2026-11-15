import { Check, FileText } from "lucide-react";
import { PreviewCard } from "@/components/landing/features/previews/preview-card";

const lines = [
  { label: "Supermarché", status: "Rapprochée avec votre saisie" },
  { label: "Essence", status: "Rapprochée avec votre saisie" },
  { label: "Abonnement box", status: "Nouvelle opération" },
];

export function ImportPreview() {
  return (
    <PreviewCard>
      <div className="flex items-center gap-3 rounded-2xl border-2 border-dashed border-primary/40 bg-primary/5 p-4">
        <FileText className="size-8 shrink-0 text-primary" />
        <div>
          <p className="font-semibold text-ink">releve-novembre.csv</p>
          <p className="text-xs text-ink-muted">24 opérations lues · 0 doublon</p>
        </div>
      </div>
      <ul className="mt-4 space-y-3">
        {lines.map((line, i) => (
          <li key={line.label} className="flex items-center gap-3">
            <span
              className={`flex size-6 shrink-0 items-center justify-center rounded-full ${
                i < 2 ? "bg-primary text-on-primary" : "bg-accent/20 text-accent"
              }`}
            >
              <Check className="size-3.5" />
            </span>
            <div>
              <p className="text-sm font-medium text-ink">{line.label}</p>
              <p className="text-xs text-ink-muted">{line.status}</p>
            </div>
          </li>
        ))}
      </ul>
    </PreviewCard>
  );
}
