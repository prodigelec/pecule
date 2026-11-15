import type { Metadata } from "next";
import { LoginForm } from "@/components/auth/login-form";
import { Logo } from "@/components/brand/logo";

export const metadata: Metadata = { title: "Connexion · Pécule" };

export default function LoginPage() {
  return (
    <main className="mx-auto flex w-full max-w-sm flex-1 flex-col justify-center gap-8 p-6">
      <div>
        <h1>
          <Logo size={44} />
        </h1>
        <p className="mt-3 text-ink-muted">Connectez-vous pour voir votre solde.</p>
      </div>
      <LoginForm />
    </main>
  );
}
