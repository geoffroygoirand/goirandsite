SITE AVOCAT – BLOG ADMINISTRABLE SUR NETLIFY

1. MISE EN LIGNE
- Envoyez tout le contenu de ce dossier dans le dépôt GitHub :
  geoffroygoirand/goirandsite
- Reliez ce dépôt au site Netlify.
- Build command : npm run build
- Publish directory : _site

2. ACTIVER L’ADMINISTRATION
Dans Netlify :
- Project configuration > Identity > Enable Identity
- Registration preferences : Invite only
- Services > Git Gateway > Enable Git Gateway
- Identity > Users > Invite users

3. ACCEPTER L’INVITATION
- Ouvrez le courriel Netlify puis cliquez sur « Accept the invite ».
- Le lien ouvre la page d’accueil. C’est normal.
- Une fenêtre Netlify Identity doit apparaître automatiquement pour définir le mot de passe.
- Après connexion, vous êtes redirigé vers /admin/.

4. PUBLIER UN ARTICLE
- Ouvrez https://votre-site.netlify.app/admin/
- Connectez-vous avec l’adresse invitée et le mot de passe choisi.
- Cliquez sur Articles > Nouvel article.
- Enregistrez, puis publiez. Netlify reconstruit automatiquement le site.

5. EN CAS DE CACHE
Après un nouveau déploiement, rechargez la page avec Ctrl + F5 puis réutilisez le lien d’invitation tant qu’il est valide.


FORMULAIRE NETLIFY
-------------------
Le formulaire se trouve dans index.njk. Il utilise un envoi HTML classique :
- method="POST"
- data-netlify="true"
- champ caché form-name=contact
- redirection vers /merci.html

Le fichier script.js n’intercepte plus l’envoi. Après chaque modification, poussez le projet sur GitHub puis attendez le nouveau déploiement Netlify. Dans Netlify, activez Forms > Form detection. Le formulaire doit ensuite apparaître sous le nom « contact ».
