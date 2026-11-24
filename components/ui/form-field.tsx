type FormFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
  /** Texte d'aide sous le champ (masqué quand une erreur s'affiche). */
  hint?: string;
  error?: string;
};

export function FormField({ label, name, hint, error, ...inputProps }: FormFieldProps) {
  const describedBy = error ? `${name}-error` : hint ? `${name}-hint` : undefined;
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-sm font-medium text-ink">{label}</span>
      <input
        name={name}
        aria-invalid={Boolean(error)}
        aria-describedby={describedBy}
        className="rounded-xl border border-border bg-surface px-4 py-3 text-ink outline-none placeholder:text-ink-muted/60 focus:border-primary aria-invalid:border-negative"
        {...inputProps}
      />
      {error ? (
        <span id={`${name}-error`} className="text-sm text-negative">
          {error}
        </span>
      ) : (
        hint && (
          <span id={`${name}-hint`} className="text-sm text-ink-muted">
            {hint}
          </span>
        )
      )}
    </label>
  );
}
