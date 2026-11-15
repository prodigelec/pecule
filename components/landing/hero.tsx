import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BalanceChip, ExpenseChip } from "@/components/landing/hero-chips";
import heroPhoto from "@/public/images/hero-couple.jpg";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-nav text-on-nav">
      {/* Photo : plein écran voilée sur mobile/tablette, moitié droite à partir de lg. */}
      <div className="absolute inset-0 -z-10 lg:left-[38%]">
        <Image
          src={heroPhoto}
          alt="Un couple regarde ensemble un téléphone dans sa cuisine"
          fill
          preload
          placeholder="blur"
          sizes="(min-width: 1024px) 62vw, 100vw"
          className="object-cover object-[60%_35%]"
        />
        {/* Voile : uniforme sur mobile/tablette, dégradé vers la gauche à partir de lg. */}
        <div className="absolute inset-0 bg-nav/80 lg:bg-transparent lg:bg-linear-to-r lg:from-nav lg:via-nav/25 lg:to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-140 w-full max-w-7xl items-center px-6 py-16 lg:min-h-155 lg:px-12">
        <div className="max-w-md">
          <h1 className="font-display text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
            Votre <span className="text-accent">vrai solde</span>, à tout moment.
          </h1>
          <p className="mt-5 text-lg text-on-nav-muted">
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
          {/* Sur mobile/tablette, la pastille de solde passe sous le texte. */}
          <div className="mt-10 max-w-xs lg:hidden">
            <BalanceChip />
          </div>
        </div>

      </div>

      {/* Positions calées sur la photo (placards en haut à droite, plan de
          travail en bas) pour ne jamais couvrir les visages. */}
      <div className="absolute right-5 top-12 hidden xl:block">
        <ExpenseChip />
      </div>
      <div className="absolute bottom-10 left-[40%] hidden lg:block">
        <BalanceChip />
      </div>
    </section>
  );
}
