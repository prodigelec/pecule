import Link from "next/link";
import { navLinks } from "@/components/landing/navbar/nav-links";

type MobileMenuProps = {
  id: string;
  active: string | null;
  onNavigate: () => void;
};

export function MobileMenu({ id, active, onNavigate }: MobileMenuProps) {
  return (
    <div id={id} className="border-t border-on-nav/15 bg-nav md:hidden">
      <nav aria-label="Navigation principale" className="mx-auto flex max-w-5xl flex-col gap-1 px-6 py-4">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`/#${link.id}`}
            onClick={onNavigate}
            aria-current={active === link.id ? "true" : undefined}
            className="rounded-xl px-3 py-3 font-medium text-on-nav-muted hover:bg-on-nav/10 hover:text-on-nav aria-[current]:bg-on-nav/15 aria-[current]:text-on-nav"
          >
            {link.label}
          </a>
        ))}
        <Link
          href="/connexion"
          className="mt-2 rounded-full bg-accent px-5 py-3 text-center font-semibold text-on-accent"
        >
          Se connecter
        </Link>
      </nav>
    </div>
  );
}
