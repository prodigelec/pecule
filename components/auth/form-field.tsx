type FormFieldProps = {
  label: string;
  name: string;
  type: string;
  autoComplete?: string;
  error?: string;
};

export function FormField({ label, name, type, autoComplete, error }: FormFieldProps) {
  const errorId = `${name}-error`;
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-sm font-medium text-ink">{label}</span>
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className="rounded-xl border border-border bg-surface px-4 py-3 text-ink outline-none focus:border-primary aria-invalid:border-negative"
      />
      {error && (
        <span id={errorId} className="text-sm text-negative">
          {error}
        </span>
      )}
    </label>
  );
}
