# Template PME

Template de site vitrine pour PME, construit avec Astro. Conçu pour être dupliqué et personnalisé pour chaque client.

## Stack

- Astro
- HTML / CSS / JavaScript
- Node.js + npm
- Git + GitHub
- Netlify (hébergement et formulaire de contact)

## Démarrage rapide

```bash
npm install
npm run dev
```

Le site est visible sur `http://localhost:4321`.

## Commandes utiles

| Commande          | Action                            |
| ----------------- | --------------------------------- |
| `npm install`     | Installe les dépendances          |
| `npm run dev`     | Lance le serveur de développement |
| `npm run build`   | Génère le site final dans `dist/` |
| `npm run preview` | Prévisualise le site généré       |

## Structure du projet

```
src/
  components/     Sections du site (Hero, Services, About, Contact...)
  config/         Configuration du site (textes, coordonnées)
  layouts/        Mise en page commune
  pages/          Pages du site
public/           Images, logo, favicon
```

## Workflow client

### 1. Récupérer auprès du client

- Nom de l'entreprise et slogan
- Logo et couleurs
- Textes (présentation, services)
- Photos
- Coordonnées et horaires
- Email qui recevra les messages du formulaire

### 2. Créer le projet

1. Sur GitHub, ouvrir ce dépôt → **Use this template** → **Create a new repository**.
2. Nommer le dépôt d'après le client (ex. `client-boulangerie-dupont`).
3. Cloner le projet :

```bash
git clone https://github.com/AlexandreJD-Git/nom-du-repo.git
cd nom-du-repo
npm install
code .
```

### 3. Personnaliser

- Modifier `src/config/site.config.ts` (nom, slogan, textes, coordonnées, services).
- Remplacer le logo et les images dans `public/`.
- Ajuster les couleurs et les sections si besoin.
- Lancer `npm run dev` pour voir les changements en direct.

### 4. Sauvegarder (après chaque modification)

```bash
git add .
git commit -m "Description du changement"
git push
```

### 5. Déployer sur Netlify

1. **Add new project** → **Import an existing project** → GitHub → choisir le dépôt.
2. Build command : `npm run build`
3. Publish directory : `dist`
4. Cliquer sur **Deploy**.

### 6. Configurer Netlify

- **Site configuration → General → Change site name** : adresse propre.
- **Forms** : vérifier qu'un message de test apparaît.
- **Notifications → Form submission notifications** : ajouter l'email du client.

### 7. Mise en ligne finale

1. Faire valider le site par le client via l'adresse `.netlify.app`.
2. **Domain management → Add a domain** pour brancher son nom de domaine.
3. Configurer les DNS chez le registrar selon les instructions de Netlify.
4. Le HTTPS est activé automatiquement.

## Formulaire de contact

Le formulaire utilise Netlify Forms. Les attributs `data-netlify="true"` et `name="contact"` doivent rester sur la balise `<form>`, et chaque champ doit avoir un attribut `name`.

## Checklist de livraison

- [ ] Textes, logo et images du client en place
- [ ] Coordonnées et horaires vérifiés
- [ ] Formulaire testé et email de notification configuré
- [ ] Site testé sur mobile
- [ ] Nom de domaine branché
- [ ] HTTPS actif
- [ ] Client formé aux modifications simples (si prévu)

## Auteur

Alexandre Dupuy
