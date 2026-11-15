/** Liens de la vitrine : chaque `id` correspond à l'id d'une section de la page. */
export const navLinks = [
  { id: "pourquoi", label: "Pourquoi" },
  { id: "fonctionnalites", label: "Fonctionnalités" },
  { id: "comment", label: "Comment ça marche" },
] as const;

export type SectionId = (typeof navLinks)[number]["id"];
