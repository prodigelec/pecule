import { formatEuro } from "@/lib/format";

// Données fictives : aperçu de l'écran principal pour la vitrine.
const bankBalance = 148230;
const pending = [
  { label: "Supermarché", who: "Laure", cents: -8640 },
  { label: "Essence", who: "Sébastien", cents: -6250 },
  { label: "Pharmacie", who: "Les deux", cents: -2190 },
];
const pendingTotal = pending.reduce((sum, op) => sum + op.cents, 0);

export function BalancePreview() {
  return (
    <div className="w-full max-w-sm rounded-3xl border border-border bg-surface p-6 shadow-xl shadow-primary/10">
      <p className="text-sm text-ink-muted">Disponible réellement</p>
      <p className="mt-1 font-display text-4xl font-bold text-ink">
        {formatEuro(bankBalance + pendingTotal)}
      </p>

      <dl className="mt-5 space-y-1 border-t border-border pt-4 text-sm">
        <div className="flex justify-between">
          <dt className="text-ink-muted">Solde affiché par la banque</dt>
          <dd className="font-medium text-ink">{formatEuro(bankBalance)}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-ink-muted">Dépenses pas encore débitées</dt>
          <dd className="font-medium text-negative">{formatEuro(pendingTotal)}</dd>
        </div>
      </dl>

      <ul className="mt-5 space-y-3">
        {pending.map((op) => (
          <li key={op.label} className="flex items-center justify-between">
            <div>
              <p className="font-medium text-ink">{op.label}</p>
              <p className="text-xs text-ink-muted">Payé par {op.who}</p>
            </div>
            <span className="font-display font-semibold text-negative">
              {formatEuro(op.cents)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
