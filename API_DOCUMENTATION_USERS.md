Bien sûr, voici le document structuré et détaillé en français pour le fichier `API_DOCUMENTATION_USERS.md` :

```markdown
# Documentation de l'API pour les Utilisateurs

Ce document fournit des informations détaillées sur les points de terminaison de l'API liés aux utilisateurs disponibles dans le projet ChezGustaveOfficielDEV.

## Vue d'ensemble

Cette section couvre les points de terminaison de l'API relatifs aux opérations sur les utilisateurs, y compris l'enregistrement des utilisateurs, l'authentification et la récupération des informations des utilisateurs.

## Détail des Points de Terminaison

### 1. Récupérer Tous les Utilisateurs

- **Point de terminaison :** `GET /getAllUsers`
- **Description :** Récupère une liste de tous les utilisateurs dans le système.
- **Paramètres :** Aucun
- **Réponse en cas de succès :**
  - **Code :** 200 OK
  - **Contenu :** Tableau d'utilisateurs
- **Réponse en cas d'erreur :**
  - **Code :** 500 ERREUR DU SERVEUR INTERNE
  - **Contenu :** Message d'erreur

### 2. Enregistrement d'Utilisateur

- **Point de terminaison :** `POST /signup`
- **Description :** Enregistre un nouvel utilisateur dans le système.
- **Paramètres :**
  - `username` (chaîne) - Le nom d'utilisateur du nouvel utilisateur.
  - `email` (chaîne) - L'adresse e-mail du nouvel utilisateur.
  - `password` (chaîne) - Le mot de passe pour le nouvel utilisateur.
- **Réponse en cas de succès :**
  - **Code :** 201 CRÉÉ
  - **Contenu :** Détails du nouvel utilisateur créé
- **Réponse en cas d'erreur :**
  - **Code :** 400 MAUVAISE DEMANDE
  - **Contenu :** Message d'erreur

### 3. Authentification d'Utilisateur

- **Point de terminaison :** `POST /signin`
- **Description :** Authentifie un utilisateur et fournit un jeton.
- **Paramètres :**
  - `email` (chaîne) - L'adresse e-mail de l'utilisateur.
  - `password` (chaîne) - Le mot de passe de l'utilisateur.
- **Réponse en cas de succès :**
  - **Code :** 200 OK
  - **Contenu :** Jeton d'authentification
- **Réponse en cas d'erreur :**
  - **Code :** 401 NON AUTORISÉ
  - **Contenu :** Message d'erreur

## Exemples de Requêtes

Ci-dessous se trouvent des exemples de requêtes pour chaque point de terminaison en utilisant curl :

### Récupérer Tous les Utilisateurs

```bash
curl -X GET http://votreserveur.com/getAllUsers
```

### Enregistrement d'Utilisateur

```bash
curl -X POST http://votreserveur.com/signup \
     -H 'Content-Type: application/json' \
     -d '{"username": "nouvelutilisateur", "email": "nouvelutilisateur@example.com", "password": "monmotdepasse"}'
```

### Authentification d'Utilisateur

```bash
curl -X POST http://votreserveur.com/signin \
     -H 'Content-Type: application/json' \
     -d '{"email": "nouvelutilisateur@example.com", "password": "monmotdepasse"}'
```

Remplacez `http://votreserveur.com` par l'URL réelle de votre serveur.
```

Vous pouvez copier et coller ce contenu dans le fichier `API_DOCUMENTATION_USERS.md` que vous allez créer, en ajustant les détails au besoin pour correspondre à votre API.