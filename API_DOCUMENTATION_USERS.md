````markdown
# Documentation de l'API pour les Utilisateurs

Cette documentation détaille les endpoints de l'API liés à la gestion des utilisateurs dans l'application.

## Endpoints

### Récupérer tous les utilisateurs

- **Description**: Permet de récupérer la liste de tous les utilisateurs enregistrés.
- **URL**: `/getAllUsers`
- **Méthode**: `GET`
- **Réponse de succès**:
  - **Code**: 200
  - **Contenu**:

```json
[
  {
    "id": "Integer",
    "email": "String",
    "name": "String",
    ...
  },
  ...
]
```
````

### Créer un nouvel utilisateur (inscription)

- **Description**: Permet de créer un nouvel utilisateur avec un mot de passe généré automatiquement et envoie les détails de connexion par e-mail.
- **URL**: `/signup`
- **Méthode**: `POST`
- **Données requises**:

```json
{
  "email": "String",
  "name": "String",
  "tel": "String",
  "is_admin": "Boolean"
}
```

- **Réponse de succès**:
  - **Code**: 200
  - **Message**: "Utilisateur créé avec succès et email envoyé."

### Connexion d'un utilisateur

- **Description**: Permet à un utilisateur de se connecter et renvoie un token d'authentification.
- **URL**: `/signin`
- **Méthode**: `POST`
- **Données requises**:

```json
{
  "email": "String",
  "password": "String"
}
```

- **Réponse de succès**:
  - **Code**: 200
  - **Contenu**:

```json
{
  "message": "Connexion réussie",
  "token": "String"
}
```

### Mise à jour d'un utilisateur

URL : /users/:userId

Méthode : PUT

Authentification requise : Oui (si applicable)

Permissions requises : Aucune ou spécifiez les permissions si nécessaire

Paramètres URL
Paramètre Type Description
userId Number Requis. L'ID de l'utilisateur à mettre à jour
Données requises dans le corps de la requête
json
Copy code
{
"name": "Nom mis à jour",
"surname": "Prénom mis à jour",
"tel": "Numéro de téléphone mis à jour",
"is_admin": true ou false
}
Réponse de succès
Condition : Si tout est correct, y compris l'authentification et les permissions.

Code : 200 OK

Contenu exemple :

json
Copy code
{
"message": "Utilisateur mis à jour avec succès"
}
Réponse d'erreur
Condition : Si l'utilisateur n'est pas trouvé.

Code : 404 Not Found

Contenu :

json
Copy code
{
"message": "Utilisateur non trouvé"
}
