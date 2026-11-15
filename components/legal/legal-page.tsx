import { site } from "@/lib/site";

/** Mise en page commune des pages légales. */
export function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <article className="mx-auto w-full max-w-3xl px-6 py-14 md:py-20">
      <h1 className="font-display text-3xl font-extrabold tracking-tight text-ink md:text-4xl">{title}</h1>
      <p className="mt-2 text-sm text-ink-muted">Dernière mise à jour : {site.legalUpdatedAt}</p>
      <div className="mt-10 space-y-10">{children}</div>
    </article>
  );
}

export function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-display text-xl font-bold text-ink">{title}</h2>
      <div className="mt-3 space-y-3 leading-relaxed text-ink-muted [&_a]:font-medium [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-4 [&_strong]:text-ink [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5">
        {children}
      </div>
    </section>
  );
}
