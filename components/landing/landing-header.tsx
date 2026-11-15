import Link from "next/link";

export function LandingHeader() {
  return (
    <header className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-5">
      <span className="font-display text-2xl font-extrabold tracking-tight text-primary">
        Pécule
      </span>
      <Link
        href="/connexion"
        className="rounded-full border border-border px-4 py-2 text-sm font-semibold text-ink hover:border-primary"
      >
        Se connecter
      </Link>
    </header>
  );
}
