import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { BackToTop } from "@/components/landing/footer/back-to-top";
import { CtaBanner } from "@/components/landing/footer/cta-banner";
import { footerColumns } from "@/components/landing/footer/footer-links";
import { site } from "@/lib/site";

export function LandingFooter() {
  return (
    <>
      <CtaBanner />
      <footer className="bg-nav text-on-nav">
        <div className="mx-auto grid w-full max-w-5xl gap-10 px-6 py-14 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <Link href="/" aria-label="Pécule, accueil">
              <Logo size={32} variant="inverse" />
            </Link>
            <p className="mt-4 max-w-xs text-sm text-on-nav-muted">{site.tagline}</p>
            <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-on-nav/10 px-3 py-1.5 text-xs font-medium">
              <MapPin aria-hidden className="size-3.5 text-accent" />
              Données hébergées en Europe
            </p>
          </div>

          {footerColumns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <p className="text-sm font-semibold">{column.title}</p>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-on-nav-muted transition-colors hover:text-on-nav"
                      >
                        {link.label}
                        <ArrowUpRight aria-hidden className="size-3.5" />
                      </a>
                    ) : (
                      <Link href={link.href} className="text-sm text-on-nav-muted transition-colors hover:text-on-nav">
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="border-t border-on-nav/10">
          <div className="mx-auto flex w-full max-w-5xl flex-col items-start gap-4 px-6 py-6 text-sm text-on-nav-muted sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 {site.name} · Application personnelle</p>
            <BackToTop />
          </div>
        </div>
      </footer>
    </>
  );
}
