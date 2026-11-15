import { Suspense } from "react";
import { Logo } from "@/components/brand/logo";
import { SignOutButton } from "@/components/auth/sign-out-button";
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
      <section className="rounded-2xl border border-border bg-surface p-5">
        <p className="text-sm text-ink-muted">Disponible réellement</p>
        <p className="mt-1 font-display text-4xl font-bold text-ink">
          0,00&nbsp;€
        </p>
      </section>
      <button
        type="button"
        className="rounded-full bg-accent px-5 py-3 font-semibold text-on-accent"
      >
        + Dépense
      </button>
    </main>
  );
}
