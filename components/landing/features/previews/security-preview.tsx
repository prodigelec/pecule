import { Check, LockKeyhole } from "lucide-react";
import { PreviewCard } from "@/components/landing/features/previews/preview-card";

const checks = [
  "Mot de passe chiffré",
  "5 tentatives par minute maximum",
  "Aucune connexion à votre banque",
];

export function SecurityPreview() {
  return (
    <PreviewCard>
      <div className="flex items-center gap-3">
        <span className="flex size-10 items-center justify-center rounded-full bg-primary text-on-primary">
          <LockKeyhole className="size-5" />
        </span>
        <p className="font-semibold text-ink">Connexion</p>
      </div>
      <div className="mt-5 space-y-2.5">
        <div className="rounded-xl border border-border px-4 py-3 text-sm text-ink-muted">vous@exemple.fr</div>
        <div className="rounded-xl border border-border px-4 py-3 text-sm tracking-[0.3em] text-ink">
          ••••••••••
        </div>
      </div>
      <ul className="mt-5 space-y-2">
        {checks.map((check) => (
          <li key={check} className="flex items-center gap-2.5 text-sm text-ink">
            <span className="flex size-5 items-center justify-center rounded-full bg-positive/15 text-positive">
              <Check className="size-3" />
            </span>
            {check}
          </li>
        ))}
      </ul>
    </PreviewCard>
  );
}
