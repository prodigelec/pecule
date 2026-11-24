const signs = [
  { value: "positive", label: "+ Positif", checked: "has-checked:bg-positive has-checked:text-surface" },
  { value: "negative", label: "− Négatif", checked: "has-checked:bg-negative has-checked:text-surface" },
] as const;

type BalanceFieldProps = { amountError?: string; signError?: string };

/** Solde de départ : signe choisi par bouton (pas de « - » sur le clavier numérique) + montant sans signe. */
export function BalanceField({ amountError, signError }: BalanceFieldProps) {
  const error = amountError ?? signError;
  return (
    <fieldset className="flex flex-col gap-1.5" aria-describedby={error ? "openingBalance-error" : "openingBalance-hint"}>
      <legend className="mb-1.5 text-sm font-medium text-ink">Solde affiché par la banque</legend>
      <div className="grid grid-cols-2 gap-1 rounded-xl bg-background p-1">
        {signs.map((sign) => (
          <label
            key={sign.value}
            className={`cursor-pointer rounded-lg py-2 text-center text-sm font-semibold text-ink-muted has-focus-visible:ring-2 has-focus-visible:ring-primary ${sign.checked}`}
          >
            <input
              type="radio"
              name="balanceSign"
              value={sign.value}
              defaultChecked={sign.value === "positive"}
              className="sr-only"
            />
            {sign.label}
          </label>
        ))}
      </div>
      <input
        name="openingBalance"
        inputMode="decimal"
        placeholder="1 482,30"
        autoComplete="off"
        aria-label="Montant du solde, sans signe"
        aria-invalid={Boolean(amountError)}
        className="rounded-xl border border-border bg-surface px-4 py-3 text-ink outline-none placeholder:text-ink-muted/60 focus:border-primary aria-invalid:border-negative"
      />
      {error ? (
        <span id="openingBalance-error" className="text-sm text-negative">
          {error}
        </span>
      ) : (
        <span id="openingBalance-hint" className="text-sm text-ink-muted">
          Le solde que vous voyez aujourd&apos;hui sur l&apos;appli ou le site de votre banque. Négatif si le compte est à découvert.
        </span>
      )}
    </fieldset>
  );
}
