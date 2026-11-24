import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAccount } from "@/lib/data/account";
import { formatDate, formatEuro } from "@/lib/format";

/** Lit la base : à placer derrière un <Suspense>. */
export async function BalanceCard() {
  const account = await getAccount();

  if (!account) {
    return (
      <section className="rounded-2xl border border-dashed border-primary/40 bg-primary/5 p-5">
        <p className="font-display text-lg font-bold text-ink">Ajoutez votre compte pour commencer</p>
        <p className="mt-1 text-sm text-ink-muted">Le compte joint et son solde actuel : c&apos;est le point de départ du calcul.</p>
        <Link
          href="/app/compte"
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-on-primary"
        >
          Ajouter le compte
          <ArrowRight aria-hidden className="size-4" />
        </Link>
      </section>
    );
  }

  // Pas encore de saisies ni d'import : le disponible réel est le solde de départ.
  return (
    <Link href="/app/compte" className="block rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-primary">
      <p className="text-sm text-ink-muted">Disponible réellement</p>
      <p className="mt-1 font-display text-4xl font-bold text-ink">{formatEuro(account.openingBalanceCents)}</p>
      <p className="mt-3 text-sm text-ink-muted">
        {account.name} •••• {account.accountLast4} · solde banque au {formatDate(account.openingBalanceDate)}
      </p>
    </Link>
  );
}
