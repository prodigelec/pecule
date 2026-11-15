import { site } from "@/lib/site";

type FooterLink = { label: string; href: string; external?: boolean };

export const footerColumns: { title: string; links: FooterLink[] }[] = [
  {
    title: "Découvrir",
    links: [
      { label: "Pourquoi Pécule", href: "/#pourquoi" },
      { label: "Fonctionnalités", href: "/#fonctionnalites" },
      { label: "Comment ça marche", href: "/#comment" },
    ],
  },
  {
    title: "Compte",
    links: [{ label: "Se connecter", href: "/connexion" }],
  },
  {
    title: "Informations",
    links: [
      { label: "Mentions légales", href: "/mentions-legales" },
      { label: "Confidentialité", href: "/confidentialite" },
      { label: "Code source", href: site.repoUrl, external: true },
    ],
  },
];
