"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { requireSession } from "@/lib/session";
import { createAccountSchema, type AccountField } from "@/lib/validations/account";

export type AccountFormState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<AccountField, string>>;
};

export async function createAccount(
  _prev: AccountFormState,
  formData: FormData,
): Promise<AccountFormState> {
  await requireSession();

  // Validation serveur : on ne fait jamais confiance au formulaire seul.
  const parsed = createAccountSchema.safeParse({
    name: formData.get("name") ?? "",
    bankId: formData.get("bankId") ?? "",
    customBankName: formData.get("customBankName") ?? undefined,
    accountLast4: formData.get("accountLast4") ?? "",
    openingBalance: formData.get("openingBalance") ?? "",
    balanceSign: formData.get("balanceSign") ?? "",
    openingBalanceDate: formData.get("openingBalanceDate") ?? "",
  });
  if (!parsed.success) {
    const fields = parsed.error.flatten().fieldErrors;
    return {
      status: "error",
      message: "Vérifiez les champs en rouge.",
      errors: Object.fromEntries(Object.entries(fields).map(([key, messages]) => [key, messages?.[0]])),
    };
  }

  // Un seul compte suivi (cahier des charges).
  if ((await prisma.bankAccount.count()) > 0) {
    return { status: "error", message: "Le compte est déjà configuré." };
  }

  try {
    await prisma.bankAccount.create({
      data: {
        name: parsed.data.name,
        bankId: parsed.data.bankId,
        bankName: parsed.data.bankName,
        accountLast4: parsed.data.accountLast4,
        openingBalanceCents: parsed.data.openingBalance,
        openingBalanceDate: parsed.data.openingBalanceDate,
      },
    });
  } catch (error) {
    // Message générique pour l'utilisateur, détail dans le terminal du serveur.
    console.error("[createAccount] échec de l'enregistrement :", error);
    return { status: "error", message: "Le compte n'a pas pu être enregistré, réessayez." };
  }

  revalidatePath("/app");
  return { status: "success", message: "Compte enregistré." };
}
