import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BalancePreview } from "@/components/landing/balance-preview";

export function Hero() {
  return (
    <section className="mx-auto grid w-full max-w-5xl items-center gap-12 px-6 py-12 md:grid-cols-2 md:py-20">
      <div>
        <h1 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-ink md:text-5xl">
          Votre <span className="text-primary">vrai solde</span>, à tout moment.
        </h1>
        <p className="mt-5 text-lg text-ink-muted">
          Pécule déduit vos dépenses dès l&apos;achat, sans attendre que la
          banque les débite. Vous savez exactement ce qu&apos;il reste sur le
          compte joint.
        </p>
        <Link
          href="/connexion"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-on-accent"
        >
          Se connecter
          <ArrowRight aria-hidden className="size-5" />
        </Link>
      </div>
      <div className="flex justify-center md:justify-end">
        <BalancePreview />
      </div>
    </section>
  );
}
