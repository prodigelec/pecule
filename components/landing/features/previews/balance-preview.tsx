import { formatEuro } from "@/lib/format";
import { PreviewCard } from "@/components/landing/features/previews/preview-card";

export function BalancePreview() {
  return (
    <PreviewCard>
      <p className="text-sm text-ink-muted">Disponible réellement</p>
      <p className="mt-1 font-display text-4xl font-bold text-ink">{formatEuro(131150)}</p>
      <div className="mt-5 h-2 overflow-hidden rounded-full bg-negative/20">
        <div className="h-full w-[88%] rounded-full bg-primary" />
      </div>
      <dl className="mt-4 space-y-1.5 text-sm">
        <div className="flex justify-between">
          <dt className="text-ink-muted">Solde affiché par la banque</dt>
          <dd className="font-medium text-ink">{formatEuro(148230)}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-ink-muted">Pas encore débité</dt>
          <dd className="font-medium text-negative">{formatEuro(-17080)}</dd>
        </div>
      </dl>
    </PreviewCard>
  );
}
