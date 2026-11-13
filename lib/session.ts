import "server-only";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";

/** Session courante, ou redirection vers la connexion. Vraie vérification (en base), à utiliser dans les pages et actions. */
export async function requireSession() {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) redirect("/connexion");
  return session;
}
