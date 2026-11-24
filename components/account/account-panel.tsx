import { AccountForm } from "@/components/account/account-form";
import { AccountSummary } from "@/components/account/account-summary";
import { getAccount } from "@/lib/data/account";

/** Date du jour à Paris, au format du champ date (« 2026-11-24 »). */
function todayInParis() {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Paris" }).format(new Date());
}

/** Lit la base : à placer derrière un <Suspense>. */
export async function AccountPanel() {
  const account = await getAccount();

  if (account) return <AccountSummary account={account} />;

  return (
    <div className="flex flex-col gap-6">
      <p className="text-ink-muted">
        Indiquez le compte joint à suivre. Le solde de départ sert de base au calcul
        jusqu&apos;au premier import de relevé.
      </p>
      <AccountForm today={todayInParis()} />
    </div>
  );
}
