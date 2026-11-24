/**
 * Banques proposées à la création du compte. Les logos sont hébergés dans
 * public/banks/<id>.png (128 px) : aucun appel à un service externe.
 */
export const banks = [
  { id: "labanquepostale", name: "La Banque Postale", group: "traditional" },
  { id: "creditagricole", name: "Crédit Agricole", group: "traditional" },
  { id: "bnpparibas", name: "BNP Paribas", group: "traditional" },
  { id: "societegenerale", name: "Société Générale", group: "traditional" },
  { id: "caissedepargne", name: "Caisse d'Épargne", group: "traditional" },
  { id: "banquepopulaire", name: "Banque Populaire", group: "traditional" },
  { id: "lcl", name: "LCL", group: "traditional" },
  { id: "creditmutuel", name: "Crédit Mutuel", group: "traditional" },
  { id: "cic", name: "CIC", group: "traditional" },
  { id: "boursobank", name: "BoursoBank", group: "online" },
  { id: "fortuneo", name: "Fortuneo", group: "online" },
  { id: "hellobank", name: "Hello bank!", group: "online" },
  { id: "revolut", name: "Revolut", group: "online" },
  { id: "n26", name: "N26", group: "online" },
  { id: "qonto", name: "Qonto", group: "online" },
  { id: "shine", name: "Shine", group: "online" },
  { id: "indy", name: "Indy", group: "online" },
] as const;

/** Banque absente de la liste : nom libre et logo neutre. */
export const OTHER_BANK_ID = "autre";

export type BankId = (typeof banks)[number]["id"] | typeof OTHER_BANK_ID;

/** Liste non vide, comme l'attend z.enum. */
export const bankIds: [BankId, ...BankId[]] = [OTHER_BANK_ID, ...banks.map((bank) => bank.id)];

export function findBank(id: string) {
  return banks.find((bank) => bank.id === id);
}
