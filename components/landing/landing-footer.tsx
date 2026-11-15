import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function LandingFooter() {
  return (
    <footer className="mx-auto w-full max-w-5xl px-6 py-16">
      <div className="flex flex-col items-start gap-6 rounded-3xl bg-primary p-8 text-on-primary md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-2xl font-bold">Prêt à voir votre vrai solde ?</p>
          <p className="mt-1 opacity-90">Accès sur invitation uniquement.</p>
        </div>
        <Link
          href="/connexion"
          className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-on-accent"
        >
          Se connecter
          <ArrowRight aria-hidden className="size-5" />
        </Link>
      </div>
      <p className="mt-10 text-center text-sm text-ink-muted">
        Pécule · application personnelle · données hébergées en Europe
      </p>
    </footer>
  );
}
