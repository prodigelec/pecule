"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { MobileMenu } from "@/components/landing/navbar/mobile-menu";
import { navLinks } from "@/components/landing/navbar/nav-links";
import { useActiveSection } from "@/components/landing/navbar/use-active-section";
import { useScrolled } from "@/components/landing/navbar/use-scrolled";

const sectionIds = navLinks.map((link) => link.id);

export function LandingHeader() {
  const scrolled = useScrolled();
  const active = useActiveSection(sectionIds);
  const [menuOpen, setMenuOpen] = useState(false);

  // Échap ferme le menu mobile.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-nav text-on-nav transition-shadow duration-200 ${
        scrolled || menuOpen ? "shadow-lg shadow-black/15" : ""
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-6">
        <Link href="/" aria-label="Pécule, accueil" onClick={() => setMenuOpen(false)}>
          <Logo size={32} variant="inverse" />
        </Link>

        <nav aria-label="Navigation principale" className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`/#${link.id}`}
              aria-current={active === link.id ? "true" : undefined}
              className="rounded-full px-4 py-2 text-sm font-medium text-on-nav-muted transition-colors hover:text-on-nav aria-[current]:bg-on-nav/15 aria-[current]:text-on-nav"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/connexion"
            className="hidden rounded-full bg-accent px-5 py-2 text-sm font-semibold text-on-accent md:inline-block"
          >
            Se connecter
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="menu-mobile"
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            className="rounded-full p-2 text-on-nav hover:bg-on-nav/10 md:hidden"
          >
            {menuOpen ? <X aria-hidden className="size-6" /> : <Menu aria-hidden className="size-6" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <MobileMenu id="menu-mobile" active={active} onNavigate={() => setMenuOpen(false)} />
      )}
    </header>
  );
}
