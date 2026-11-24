import { z } from "zod";
import { bankIds, findBank, OTHER_BANK_ID } from "@/lib/banks";
import { parseEuroToCents } from "@/lib/money";

/** « 2026-11-24 » (champ date HTML) → Date à minuit UTC, comme les colonnes @db.Date. */
function toUtcDate(value: string) {
  return new Date(`${value}T00:00:00Z`);
}

export const createAccountSchema = z
  .object({
    name: z.string().trim().min(1, "Donnez un nom au compte").max(50, "50 caractères maximum"),

    bankId: z.enum(bankIds, "Choisissez votre banque"),
    /** Seulement pour « Autre banque ». */
    customBankName: z.string().trim().max(50, "50 caractères maximum").optional(),

    accountLast4: z
      .string()
      .transform((value) => value.replace(/\s/g, "").toUpperCase())
      .pipe(z.string().regex(/^[0-9A-Z]{4}$/, "Les 4 derniers caractères du numéro (chiffres ou lettres)")),

    openingBalance: z.string().transform((value, ctx) => {
      const cents = parseEuroToCents(value);
      if (cents === null) {
        ctx.addIssue({ code: "custom", message: "Montant invalide (ex. 1 482,30)" });
        return z.NEVER;
      }
      return cents;
    }),

    openingBalanceDate: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/, "Date invalide")
      .transform(toUtcDate)
      .refine((date) => !Number.isNaN(date.getTime()), "Date invalide")
      // Un jour de marge : le serveur est en UTC, l'utilisateur en France.
      .refine((date) => date.getTime() <= Date.now() + 24 * 60 * 60 * 1000, "La date ne peut pas être dans le futur"),
  })
  .superRefine((data, ctx) => {
    if (data.bankId === OTHER_BANK_ID && !data.customBankName) {
      ctx.addIssue({ code: "custom", path: ["customBankName"], message: "Indiquez le nom de la banque" });
    }
  })
  // Nom affiché : celui de la liste, ou le nom saisi pour « Autre banque ».
  .transform(({ customBankName, ...data }) => ({
    ...data,
    bankName: findBank(data.bankId)?.name ?? customBankName ?? "",
  }));

export type CreateAccountInput = z.infer<typeof createAccountSchema>;
export type AccountField = keyof z.input<typeof createAccountSchema>;
