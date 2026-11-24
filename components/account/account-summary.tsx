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
        <div className="flex justify-between gap-4 px-5 py-3.5">
          <dt className="text-ink-muted">Solde de départ</dt>
          <dd className={`text-right font-medium ${account.openingBalanceCents < 0 ? "text-negative" : "text-ink"}`}>
            {formatEuro(account.openingBalanceCents)}
          </dd>
        </div>
        <div className="flex justify-between gap-4 px-5 py-3.5">
          <dt className="text-ink-muted">Au</dt>
          <dd className="text-right font-medium text-ink">{formatDate(account.openingBalanceDate)}</dd>
        </div>
      </dl>
    </div>
  );
}
