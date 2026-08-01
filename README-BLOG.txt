BLOG ADMINISTRABLE — MISE EN LIGNE

1. Déposez ce projet dans un dépôt GitHub ou GitLab.
2. Reliez ce dépôt à votre site Netlify. Un simple glisser-déposer du ZIP ne suffit pas pour publier depuis le CMS : le site doit être relié à Git.
3. Netlify détectera automatiquement :
   - commande de build : npm run build
   - dossier publié : _site
4. Dans Netlify, activez Identity puis choisissez les inscriptions sur invitation uniquement.
5. Activez Git Gateway dans les réglages Identity.
6. Invitez votre adresse e-mail comme utilisateur.
7. Ouvrez https://votre-domaine.fr/admin/ et connectez-vous.
8. Cliquez sur « Nouvel article », saisissez le titre, le résumé, la catégorie, la date et le contenu, puis publiez.

Les articles sont enregistrés dans le dossier articles et Netlify reconstruit automatiquement le site après chaque publication.

Remarque : Netlify indique désormais que Git Gateway est une fonctionnalité dépréciée. Cette configuration reste la plus simple pour ce projet. À terme, il sera possible de remplacer ce mode de connexion par une authentification GitHub directe.
