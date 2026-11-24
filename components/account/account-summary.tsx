import { BankLogo } from "@/components/account/bank-logo";
import { formatDate, formatEuro } from "@/lib/format";

type AccountSummaryProps = {
  account: {
    name: string;
    bankId: string;
    bankName: string;
    accountLast4: string;
    openingBalanceCents: number;
    openingBalanceDate: Date;
  };
};

export function AccountSummary({ account }: AccountSummaryProps) {
  return (
    <div className="rounded-2xl border border-border bg-surface">
      <div className="flex items-center gap-4 border-b border-border p-5">
        <BankLogo bankId={account.bankId} size={52} />
        <div>
          <p className="font-display text-lg font-bold text-ink">{account.name}</p>
          <p className="text-sm text-ink-muted">
            {account.bankName} · •••• {account.accountLast4}
          </p>
        </div>
      </div>
      <dl className="divide-y divide-border">
        {[
          ["Solde de départ", formatEuro(account.openingBalanceCents)],
          ["Au", formatDate(account.openingBalanceDate)],
        ].map(([label, value]) => (
          <div key={label} className="flex justify-between gap-4 px-5 py-3.5">
            <dt className="text-ink-muted">{label}</dt>
            <dd className="text-right font-medium text-ink">{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
