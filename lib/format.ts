const euro = new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" });

/** Montant en centimes → « 1 234,56 € ». */
export function formatEuro(cents: number) {
  return euro.format(cents / 100);
}
