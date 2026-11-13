// Crée un compte (l'inscription publique est désactivée).
// Usage : npm run user:create — le mot de passe est demandé au clavier, sans écho.
import "dotenv/config";
import { createInterface } from "node:readline/promises";
import { stdin, stdout } from "node:process";
import { auth } from "../lib/auth";
import { prisma } from "../lib/prisma";
import { createUserSchema } from "../lib/validations/auth";

async function askHidden(question: string) {
  stdout.write(question);
  const rl = createInterface({ input: stdin, terminal: true });
  // Masque la saisie : on n'affiche rien de ce qui est tapé.
  (rl as unknown as { _writeToOutput: () => void })._writeToOutput = () => {};
  const answer = await rl.question("");
  rl.close();
  stdout.write("\n");
  return answer;
}

async function main() {
  const rl = createInterface({ input: stdin, output: stdout });
  const name = await rl.question("Prénom : ");
  const email = await rl.question("Email : ");
  rl.close();
  const password = await askHidden("Mot de passe (10 caractères min.) : ");

  const parsed = createUserSchema.safeParse({ name, email, password });
  if (!parsed.success) {
    console.error(parsed.error.issues.map((i) => `- ${i.message}`).join("\n"));
    process.exitCode = 1;
    return;
  }

  const ctx = await auth.$context;
  if (await ctx.internalAdapter.findUserByEmail(parsed.data.email)) {
    console.error(`Un compte existe déjà pour ${parsed.data.email}.`);
    process.exitCode = 1;
    return;
  }

  // Même enchaînement que l'inscription email/mot de passe de Better Auth.
  const hash = await ctx.password.hash(parsed.data.password);
  const user = await ctx.internalAdapter.createUser({
    name: parsed.data.name,
    email: parsed.data.email,
    emailVerified: true,
  }, { method: "email-password" });
  await ctx.internalAdapter.linkAccount({
    userId: user.id,
    providerId: "credential",
    accountId: user.id,
    password: hash,
  });

  console.log(`Compte créé : ${user.name} <${user.email}>`);
}

main().finally(() => prisma.$disconnect());
