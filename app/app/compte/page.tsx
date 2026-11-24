import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { ArrowLeft } from "lucide-react";
import { AccountPanel } from "@/components/account/account-panel";

export const metadata: Metadata = { title: "Compte · Pécule" };

export default function AccountPage() {
  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col gap-6 p-6">
      <Link href="/app" className="inline-flex items-center gap-2 text-sm font-medium text-ink-muted hover:text-ink">
        <ArrowLeft aria-hidden className="size-4" />
        Retour
      </Link>
      <h1 className="font-display text-3xl font-extrabold tracking-tight text-ink">Compte bancaire</h1>
      <Suspense fallback={<p className="text-ink-muted">Chargement…</p>}>
        <AccountPanel />
      </Suspense>
    </main>
  );
}
