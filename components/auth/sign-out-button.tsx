"use client";

import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { authClient } from "@/lib/auth-client";

export function SignOutButton() {
  const router = useRouter();

  async function handleClick() {
    const { error } = await authClient.signOut();
    if (error) {
      toast.error("La déconnexion a échoué, réessayez.");
      return;
    }
    router.replace("/connexion");
    router.refresh();
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="text-sm font-medium text-ink-muted underline-offset-4 hover:underline"
    >
      Se déconnecter
    </button>
  );
}
