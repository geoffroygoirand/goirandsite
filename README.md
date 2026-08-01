# Site de Maître Geoffroy Goirand

Site professionnel construit avec Eleventy 3 et prêt pour Netlify.

## Installation locale

```bash
npm install
npm run dev
```

Le site sera généralement disponible sur `http://localhost:8080`.

## Génération du site

```bash
npm run build
```

Le résultat est créé dans le dossier `_site`.

## Déploiement Netlify

- Build command : `npm run build`
- Publish directory : `_site`
- Node version : 20

Le fichier `netlify.toml` contient déjà ces réglages.

## Ajouter un article

Créez un fichier Markdown dans le dossier `articles`, par exemple :

```md
---
title: "Titre de l’article"
description: "Résumé utilisé dans la liste des articles et pour le référencement."
date: 2026-08-01
category: "Droit rural"
readingTime: "6 min de lecture"
---

Contenu de l’article...
```

Le nouvel article apparaîtra automatiquement dans le blog et sur la page d’accueil.

## Modifications à effectuer avant mise en ligne

1. Compléter les mentions légales.
2. Vérifier l’URL du site dans `_data/site.json`.
3. Vérifier les coordonnées professionnelles.
4. Tester la réception des formulaires dans Netlify.
5. Ajouter le nom du barreau et les informations réglementaires applicables.
