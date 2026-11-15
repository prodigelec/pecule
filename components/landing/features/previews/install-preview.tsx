import { LogoMark } from "@/components/brand/logo";

// Écran d'accueil Android stylisé : Pécule installée parmi les autres applis.
export function InstallPreview() {
  return (
    <div className="mx-auto w-full max-w-60 rounded-[2.5rem] border-[6px] border-ink bg-linear-to-b from-primary/30 to-accent/20 p-4 shadow-xl shadow-primary/20">
      <div className="mx-auto mb-5 h-1.5 w-16 rounded-full bg-ink/80" />
      <div className="grid grid-cols-4 gap-3">
        {Array.from({ length: 11 }, (_, i) => (
          <span key={i} className="aspect-square rounded-xl bg-surface/60" />
        ))}
        <span className="flex aspect-square items-center justify-center rounded-xl ring-4 ring-accent/60">
          <LogoMark size={40} />
        </span>
      </div>
      <div className="mt-6 rounded-2xl bg-surface p-3 shadow-lg">
        <p className="text-xs font-semibold text-ink">Installer Pécule ?</p>
        <p className="mt-0.5 text-[11px] text-ink-muted">Ajouter à l&apos;écran d&apos;accueil</p>
        <div className="mt-2 rounded-full bg-primary py-1.5 text-center text-xs font-semibold text-on-primary">
          Installer
        </div>
      </div>
    </div>
  );
}
