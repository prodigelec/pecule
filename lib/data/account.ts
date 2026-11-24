import "server-only";
import { prisma } from "@/lib/prisma";
import { requireSession } from "@/lib/session";

/** Le compte suivi (un seul pour l'instant), ou null s'il n'a pas encore été créé. */
export async function getAccount() {
  await requireSession();
  return prisma.bankAccount.findFirst({ orderBy: { createdAt: "asc" } });
}
