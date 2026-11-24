import { formatDate, formatEuro } from "@/lib/format";

type AccountSummaryProps = {
  account: {
    name: string;
    bankName: string;
    accountLast4: string;
    openingBalanceCents: number;
    openingBalanceDate: Date;
  };
};

export function AccountSummary({ account }: AccountSummaryProps) {
  return (
    <dl className="divide-y divide-border rounded-2xl border border-border bg-surface">
      {[
        ["Nom", account.name],
        ["Banque", account.bankName],
        ["Numéro", `•••• ${account.accountLast4}`],
        ["Solde de départ", formatEuro(account.openingBalanceCents)],
        ["Au", formatDate(account.openingBalanceDate)],
      ].map(([label, value]) => (
        <div key={label} className="flex justify-between gap-4 px-5 py-3.5">
          <dt className="text-ink-muted">{label}</dt>
          <dd className="text-right font-medium text-ink">{value}</dd>
        </div>
      ))}
    </dl>
  );
}
