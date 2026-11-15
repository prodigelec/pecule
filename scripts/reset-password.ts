// Remplace le mot de passe d'un compte existant (mot de passe oublié).
// Usage : npm run user:password — toutes les sessions du compte sont fermées.
import "dotenv/config";
import { auth } from "../lib/auth";
import { prisma } from "../lib/prisma";
import { resetPasswordSchema } from "../lib/validations/auth";
import { ask, askHidden } from "./lib/prompt";

async function main() {
  const email = await ask("Email du compte : ");
  const password = await askHidden("Nouveau mot de passe (10 caractères min.) : ");
  const confirm = await askHidden("Confirmez le mot de passe : ");

  if (password !== confirm) {
    console.error("Les deux mots de passe ne correspondent pas.");
    process.exitCode = 1;
    return;
  }

  const parsed = resetPasswordSchema.safeParse({ email, password });
  if (!parsed.success) {
    console.error(parsed.error.issues.map((i) => `- ${i.message}`).join("\n"));
    process.exitCode = 1;
    return;
  }

  const ctx = await auth.$context;
  const found = await ctx.internalAdapter.findUserByEmail(parsed.data.email);
  if (!found) {
    console.error(`Aucun compte pour ${parsed.data.email}.`);
    process.exitCode = 1;
    return;
  }

  const hash = await ctx.password.hash(parsed.data.password);
  await ctx.internalAdapter.updatePassword(found.user.id, hash);
  await ctx.internalAdapter.deleteUserSessions(found.user.id);

  console.log(`Mot de passe changé pour ${found.user.name}. Reconnectez-vous avec le nouveau.`);
}

main().finally(() => prisma.$disconnect());
