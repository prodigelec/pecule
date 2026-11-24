import { PrismaNeon } from "@prisma/adapter-neon";
import { PrismaClient } from "@/lib/generated/prisma/client";

// Une seule instance en dev : le rechargement à chaud de Next recréerait sinon
// un client (et des connexions) à chaque modification.
// On mémorise aussi la classe qui l'a créée : après `prisma generate` (nouvelle
// migration), la classe change et l'ancienne instance, qui ignore les nouveaux
// modèles et champs, est remplacée sans avoir à redémarrer le serveur.
const globalForPrisma = globalThis as unknown as {
  prisma?: PrismaClient;
  prismaClass?: typeof PrismaClient;
};

function createClient() {
  const adapter = new PrismaNeon({ connectionString: process.env.DATABASE_URL });
  return new PrismaClient({ adapter });
}

function getClient() {
  const cached = globalForPrisma.prisma;
  if (cached && globalForPrisma.prismaClass === PrismaClient) return cached;
  void cached?.$disconnect();
  return createClient();
}

export const prisma = getClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
  globalForPrisma.prismaClass = PrismaClient;
}
