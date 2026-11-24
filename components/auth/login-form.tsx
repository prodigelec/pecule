"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { authClient } from "@/lib/auth-client";
import { signInSchema } from "@/lib/validations/auth";
import { FormField } from "@/components/ui/form-field";

type FieldErrors = Partial<Record<"email" | "password", string>>;

/** Message selon le code HTTP : ne pas accuser le mot de passe pour une erreur serveur. */
function signInErrorMessage(status: number) {
  if (status === 401) return "Email ou mot de passe incorrect.";
  if (status === 429) return "Trop de tentatives, réessayez dans une minute.";
  if (status === 403) return "Connexion refusée par le serveur (origine non autorisée).";
  return "Le serveur ne répond pas correctement, réessayez plus tard.";
}

export function LoginForm() {
  const router = useRouter();
  const [errors, setErrors] = useState<FieldErrors>({});
  const [pending, setPending] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const parsed = signInSchema.safeParse({
      email: form.get("email"),
      password: form.get("password"),
    });

    if (!parsed.success) {
      const flat = parsed.error.flatten().fieldErrors;
      setErrors({ email: flat.email?.[0], password: flat.password?.[0] });
      return;
    }

    setErrors({});
    setPending(true);
    const { error } = await authClient.signIn.email({
      ...parsed.data,
      rememberMe: true,
    });
    setPending(false);

    if (error) {
      toast.error(signInErrorMessage(error.status));
      return;
    }

    router.replace("/app");
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      <FormField
        label="Email"
        name="email"
        type="email"
        autoComplete="email"
        error={errors.email}
      />
      <FormField
        label="Mot de passe"
        name="password"
        type="password"
        autoComplete="current-password"
        error={errors.password}
      />
      <button
        type="submit"
        disabled={pending}
        className="mt-2 rounded-full bg-primary px-5 py-3 font-semibold text-on-primary disabled:opacity-60"
      >
        {pending ? "Connexion…" : "Se connecter"}
      </button>
    </form>
  );
}
