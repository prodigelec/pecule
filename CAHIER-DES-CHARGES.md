# Cahier des charges — Pécule

**Date :** 13 novembre 2026
**Version :** 2.0 (refonte complète, la v1 a été supprimée)

---

## 1. Présentation du projet

### 1.1 Contexte
Pécule est une application personnelle de suivi du compte bancaire, inspirée de l'expérience Bankin' (simplicité, lisibilité), avec sa propre identité.

Problème de départ : à La Banque Postale, les paiements par carte n'apparaissent sur le compte que plusieurs jours après l'achat. Le solde affiché par la banque est donc trop optimiste. Sur un compte pro Indy, les dépenses apparaissent immédiatement : c'est cette expérience qu'on veut retrouver.

La v1 a été abandonnée parce que trop complexe (trop d'écrans). La v2 repart de zéro avec un périmètre volontairement réduit.

### 1.2 Objectifs
- Objectif principal : connaître à tout moment le **solde réellement disponible** du compte joint.
- Objectifs secondaires : savoir qui a dépensé quoi ; préparer l'analyse des dépenses (versions suivantes).

### 1.3 Public cible
- Profil : usage strictement personnel, un couple (2 utilisateurs).
- Besoins : saisir une dépense en quelques secondes au moment de l'achat ; voir le vrai solde.
- Niveau technique : utilisateurs non techniques côté usage.

---

## 2. Périmètre fonctionnel

### 2.1 Données de départ
- Banque : **La Banque Postale** uniquement.
- Compte : **un compte courant joint**, partagé par les deux utilisateurs.
- Source des opérations : **import de relevés** (CSV/OFX téléchargés depuis LBP). Pas de connexion bancaire automatique (DSP2).
- Chaque utilisateur a **son propre identifiant**.

### 2.2 Fonctionnalités de la première version
| Fonctionnalité | Description | Priorité |
|----------------|-------------|----------|
| Solde disponible réel | Solde banque moins les dépenses saisies pas encore passées sur le compte | Haute |
| Liste des opérations | Opérations groupées par jour, saisies et importées confondues | Haute |
| Saisie rapide d'une dépense | En quelques secondes : montant, libellé, qui a payé (moi / l'autre / les deux) | Haute |
| Import du relevé LBP | Lecture du fichier LBP + **rapprochement** des saisies manuelles pour ne pas les compter deux fois | Haute |
| Attribution « qui a payé » | Enregistrée sur chaque opération dès la v1 (affichage des totaux plus tard) | Haute |

### 2.3 Hors périmètre (versions suivantes)
- Catégories automatiques
- Analyse des dépenses par catégorie
- Budgets par catégorie et alertes
- Dépenses récurrentes et prévision de fin de mois
- Écran de répartition par personne
- Autres banques, plusieurs comptes, connexion bancaire automatique
- Application Android native, iOS, ouverture à d'autres utilisateurs

---

## 3. Identité visuelle & Design

- Logo : **à créer** (phase design)
- Couleur principale : **vert sapin profond**
- Couleur d'accent : **orange chaud** (actions principales, ex. « + Dépense »)
- Thèmes : **clair et sombre**, selon le réglage de l'appareil
- Ton & style : simple, épuré, rassurant
- Inspiration : expérience Bankin' (fonctionnement et lisibilité). On ne reprend ni sa marque ni ses visuels.

---

## 4. Contraintes techniques

- Plateformes : **Web, installable sur Android en PWA** (pas d'app native pour l'instant)
- Stack : Next.js (App Router, API intégrée), Postgres Neon + Prisma, Better Auth, Zod, Tailwind, Sonner, hébergement Vercel
- Budget : **zéro** (offres gratuites, open source uniquement)
- Sécurité : données bancaires personnelles, accès protégé par identifiant
- Dépôt : `prodigelec/pecule`

---

## 5. Contenu

- Textes : à rédiger
- Langue : français uniquement
- Devise : euro, format `1 234,56 €`

---

## 6. Planning & Livraison

- Deadline : aucune
- Maintenance : le développeur (usage perso)
- Méthode : petits incréments, une fonctionnalité par branche
