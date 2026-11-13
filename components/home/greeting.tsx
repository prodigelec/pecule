import { requireSession } from "@/lib/session";

/** Lit la session : à placer derrière un <Suspense> (Cache Components). */
export async function Greeting() {
  const { user } = await requireSession();
  return <p className="text-ink-muted">Bonjour {user.name}</p>;
}
