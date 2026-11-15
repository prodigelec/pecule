import { formatEuro } from "@/lib/format";

// Pastilles flottantes posées sur la photo (données fictives).
// Placées sur les zones sans visage : placards en haut, plan de travail en bas.

export function BalanceChip() {
  return (
    <div className="rounded-2xl bg-surface/95 px-5 py-4 shadow-2xl shadow-black/25 backdrop-blur">
      <p className="text-xs text-ink-muted">Disponible réellement</p>
      <p className="mt-0.5 font-display text-2xl font-bold text-ink">{formatEuro(131150)}</p>
      <p className="mt-1 text-xs text-ink-muted">
        Banque : {formatEuro(148230)} · en attente{" "}
        <span className="font-semibold text-negative">{formatEuro(-17080)}</span>
      </p>
    </div>
  );
}

export function ExpenseChip() {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-surface/95 px-4 py-3 shadow-2xl shadow-black/25 backdrop-blur">
      <span className="size-2.5 rounded-full bg-accent" aria-hidden />
      <div>
        <p className="text-sm font-semibold text-ink">Supermarché</p>
        <p className="text-xs text-ink-muted">Saisi à l&apos;instant · payé par Laure</p>
      </div>
      <span className="ml-2 font-display font-semibold text-negative">{formatEuro(-8640)}</span>
    </div>
  );
}
