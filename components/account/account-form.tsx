"use client";

import { useRouter } from "next/navigation";
import { useActionState, useEffect, useState } from "react";
import { toast } from "sonner";
import { createAccount, type AccountFormState } from "@/app/app/compte/actions";
import { BalanceField } from "@/components/account/balance-field";
import { BankPicker } from "@/components/account/bank-picker";
import { FormField } from "@/components/ui/form-field";
import { createAccountSchema, type AccountField } from "@/lib/validations/account";

const initialState: AccountFormState = { status: "idle" };

/** `today` vient du serveur (heure de Paris) pour éviter un écart d'hydratation. */
export function AccountForm({ today }: { today: string }) {
  const router = useRouter();
  const [state, formAction, pending] = useActionState(createAccount, initialState);
  const [clientErrors, setClientErrors] = useState<Partial<Record<AccountField, string>> | null>(null);
  const errors = clientErrors ?? state.errors ?? {};

  useEffect(() => {
    if (state.status === "success") {
      toast.success(state.message);
      router.replace("/app");
    } else if (state.status === "error" && state.message) {
      toast.error(state.message);
    }
  }, [state, router]);

  // Validation côté client avant l'envoi, pour le confort ; le serveur revalide.
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    const parsed = createAccountSchema.safeParse(Object.fromEntries(new FormData(event.currentTarget)));
    if (!parsed.success) {
      event.preventDefault();
      const fields = parsed.error.flatten().fieldErrors;
      setClientErrors(Object.fromEntries(Object.entries(fields).map(([key, messages]) => [key, messages?.[0]])));
      return;
    }
    setClientErrors(null);
  }

  return (
    <form action={formAction} onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      <BankPicker error={errors.bankId} customNameError={errors.customBankName} />
      <FormField label="Nom du compte" name="name" defaultValue="Compte courant" maxLength={50} error={errors.name} />
      <FormField
        label="Numéro de compte"
        name="accountLast4"
        placeholder="A020"
        maxLength={4}
        autoCapitalize="characters"
        autoComplete="off"
        hint="Seulement les 4 derniers caractères : le numéro complet n'est jamais enregistré."
        error={errors.accountLast4}
      />
      <BalanceField amountError={errors.openingBalance} signError={errors.balanceSign} />
      <FormField
        label="À la date du"
        name="openingBalanceDate"
        type="date"
        defaultValue={today}
        max={today}
        error={errors.openingBalanceDate}
      />
      <button
        type="submit"
        disabled={pending}
        className="mt-2 rounded-full bg-accent px-5 py-3 font-semibold text-on-accent disabled:opacity-60"
      >
        {pending ? "Enregistrement…" : "Enregistrer le compte"}
      </button>
    </form>
  );
}
