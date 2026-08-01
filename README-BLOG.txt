SITE AVOCAT — ELEVENTY 3 / NETLIFY / DECAP CMS

1. Envoyer tous les fichiers sur la branche main du dépôt GitHub.
2. Dans Netlify, importer le dépôt.
3. Build command : npm run build
4. Publish directory : _site
5. Activer Forms > Form detection puis relancer un déploiement.
6. Activer Identity, choisir Invite only, puis activer Git Gateway.
7. Inviter votre adresse et accepter l’invitation.
8. Administration : https://votre-site.netlify.app/admin/

Le formulaire est nommé « contact » et redirige vers /merci.html.
Les articles sont enregistrés dans /articles et publiés sous /articles/slug/.

CORRECTION ELEVENTY 3
Le permalink dynamique est placé dans :
articles/articles.11tydata.js > eleventy > computed > permalink.

COMMANDES GIT
  git add .
  git commit -m "Mise à jour Eleventy 3"
  git push origin main

TEST LOCAL
  npm install
  npm run start
