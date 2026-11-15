/** Cadre commun des aperçus : une « carte d'écran » de l'app. */
export function PreviewCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-sm rounded-3xl border border-border bg-surface p-5 shadow-xl shadow-primary/10">
      {children}
    </div>
  );
}
