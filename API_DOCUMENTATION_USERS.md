```markdown
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