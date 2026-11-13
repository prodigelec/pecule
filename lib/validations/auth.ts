import { z } from "zod";

export const signInSchema = z.object({
  email: z.email("Adresse email invalide").trim().toLowerCase(),
  password: z.string().min(1, "Mot de passe requis"),
});

export type SignInInput = z.infer<typeof signInSchema>;

export const createUserSchema = z.object({
  name: z.string().trim().min(1, "Prénom requis").max(50),
  email: z.email("Adresse email invalide").trim().toLowerCase(),
  password: z
    .string()
    .min(10, "10 caractères minimum")
    .max(128, "128 caractères maximum"),
});
