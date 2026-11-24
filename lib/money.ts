/**
 * Montant saisi en français → centimes.
 * Accepte « 1 482,30 », « 1482.30 », « -25 », « 12,5 € » ; refuse plus de 2 décimales.
 * Renvoie null si la saisie n'est pas un montant valide.
 */
export function parseEuroToCents(input: string): number | null {
  const cleaned = input
    .replace(/[\s  €]/g, "") // espaces (y compris insécables) et symbole €
    .replace(",", ".");
  if (!/^-?\d+(\.\d{1,2})?$/.test(cleaned)) return null;
  const cents = Math.round(Number(cleaned) * 100);
  return Number.isSafeInteger(cents) ? cents : null;
}
