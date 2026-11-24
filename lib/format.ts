const euro = new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" });

// Les dates métier sont stockées en @db.Date (minuit UTC) : on les affiche en
// UTC pour ne pas reculer d'un jour selon le fuseau.
const longDate = new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

/** Montant en centimes → « 1 234,56 € ». */
export function formatEuro(cents: number) {
  return euro.format(cents / 100);
}

/** Date métier → « 24 novembre 2026 ». */
export function formatDate(date: Date) {
  return longDate.format(date);
}
