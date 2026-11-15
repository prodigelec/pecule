import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CtaBanner() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-16">
      <div className="flex flex-col items-start gap-6 rounded-3xl bg-nav p-8 text-on-nav md:flex-row md:items-center md:justify-between md:p-10">
        <div>
          <p className="font-display text-2xl font-bold md:text-3xl">Prêt à voir votre vrai solde ?</p>
          <p className="mt-1 text-on-nav-muted">Accès sur invitation uniquement.</p>
        </div>
        <Link
          href="/connexion"
          className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-on-accent"
        >
          Se connecter
          <ArrowRight aria-hidden className="size-5" />
        </Link>
      </div>
    </div>
  );
}
