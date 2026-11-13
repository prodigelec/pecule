import type { Metadata } from "next";
import { LoginForm } from "@/components/auth/login-form";

export const metadata: Metadata = { title: "Connexion · Pécule" };

export default function LoginPage() {
  return (
    <main className="mx-auto flex w-full max-w-sm flex-1 flex-col justify-center gap-8 p-6">
      <div>
        <h1 className="font-display text-3xl font-extrabold tracking-tight text-primary">
          Pécule
        </h1>
        <p className="mt-1 text-ink-muted">Connectez-vous pour voir votre solde.</p>
      </div>
      <LoginForm />
    </main>
  );
}
