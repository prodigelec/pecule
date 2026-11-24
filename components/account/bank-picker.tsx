"use client";

import { useState } from "react";
import { BankLogo } from "@/components/account/bank-logo";
import { FormField } from "@/components/ui/form-field";
import { banks, OTHER_BANK_ID } from "@/lib/banks";

const groups = [
  { key: "traditional", title: "Banques traditionnelles" },
  { key: "online", title: "Banques en ligne" },
] as const;

type BankPickerProps = { error?: string; customNameError?: string };

/** Grille de logos à choisir (boutons radio) + nom libre pour « Autre banque ». */
export function BankPicker({ error, customNameError }: BankPickerProps) {
  const [selected, setSelected] = useState<string>("");

  const options = (list: { id: string; name: string }[]) =>
    list.map((bank) => (
      <label
        key={bank.id}
        className="flex cursor-pointer flex-col items-center gap-1.5 rounded-xl border border-border bg-surface p-2 text-center has-checked:border-primary has-checked:ring-2 has-checked:ring-primary/30 has-focus-visible:ring-2 has-focus-visible:ring-primary"
      >
        <input
          type="radio"
          name="bankId"
          value={bank.id}
          checked={selected === bank.id}
          onChange={() => setSelected(bank.id)}
          className="sr-only"
        />
        <BankLogo bankId={bank.id} size={44} />
        <span className="text-xs leading-tight text-ink">{bank.name}</span>
      </label>
    ));

  return (
    <fieldset aria-invalid={Boolean(error)} aria-describedby={error ? "bankId-error" : undefined} className="flex flex-col gap-3">
      <legend className="mb-1.5 text-sm font-medium text-ink">Banque</legend>
      {groups.map((group) => (
        <div key={group.key}>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-ink-muted">{group.title}</p>
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
            {options(banks.filter((bank) => bank.group === group.key))}
          </div>
        </div>
      ))}
      <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
        {options([{ id: OTHER_BANK_ID, name: "Autre banque" }])}
      </div>
      {error && (
        <span id="bankId-error" className="text-sm text-negative">
          {error}
        </span>
      )}
      {selected === OTHER_BANK_ID && (
        <FormField label="Nom de la banque" name="customBankName" maxLength={50} autoComplete="off" error={customNameError} />
      )}
    </fieldset>
  );
}
