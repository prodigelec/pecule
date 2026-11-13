import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { nextCookies } from "better-auth/next-js";
import { prisma } from "@/lib/prisma";

export const auth = betterAuth({
  database: prismaAdapter(prisma, { provider: "postgresql" }),
  emailAndPassword: {
    enabled: true,
    // Application à deux : pas d'inscription publique, les comptes sont créés
    // par `npm run user:create`.
    disableSignUp: true,
    minPasswordLength: 10,
  },
  session: {
    expiresIn: 60 * 60 * 24 * 30, // 30 jours : on reste connecté sur le téléphone
    updateAge: 60 * 60 * 24,
  },
  rateLimit: {
    storage: "database",
    customRules: {
      "/sign-in/email": { window: 60, max: 5 },
    },
  },
  // Doit rester le dernier plugin : pose les cookies depuis les actions serveur.
  plugins: [nextCookies()],
});
