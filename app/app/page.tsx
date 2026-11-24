import { Suspense } from "react";
import { Logo } from "@/components/brand/logo";
import { SignOutButton } from "@/components/auth/sign-out-button";
import { BalanceCard } from "@/components/home/balance-card";
import { Greeting } from "@/components/home/greeting";

export default function AppHome() {
  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center gap-6 p-6">
      <header className="flex items-center justify-between">
        <h1>
          <Logo size={36} />
        </h1>
        <SignOutButton />
      </header>
      <Suspense fallback={<p className="text-ink-muted">&nbsp;</p>}>
        <Greeting />
      </Suspense>
      <Suspense fallback={<div className="h-36 animate-pulse rounded-2xl bg-surface" />}>
        <BalanceCard />
      </Suspense>
      <button
        type="button"
        className="rounded-full bg-accent px-5 py-3 font-semibold text-on-accent"
      >
        + Dépense
      </button>
    </main>
  );
}
