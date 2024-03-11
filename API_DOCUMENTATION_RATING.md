```markdown
# Documentation de l'API pour les Évaluations

Cette documentation détaille les endpoints de l'API liés à la gestion des évaluations dans l'application.

## Endpoints

### Créer une nouvelle évaluation

- **Description**: Permet de créer une nouvelle évaluation pour une réservation.
- **URL**: `/createRating`
- **Méthode**: `POST`
- **Données requises**:

```json
{
  "rating_value": "Integer",
  "comment": "String",
  "reservationId": "Integer"
}
```

- **Réponse de succès**:
  - **Code**: 201
  - **Contenu**:

```json
{
  "id": "Integer",
  "rating_value": "Integer",
  "comment": "String",
  "reservationId": "Integer"
}
```

### Récupérer toutes les évaluations

- **Description**: Permet de récupérer toutes les évaluations enregistrées.
- **URL**: `/getAllRatings`
- **Méthode**: `GET`
- **Réponse de succès**:
  - **Code**: 200
  - **Contenu**:

```json
[
  {
    "id": "Integer",
    "rating_value": "Integer",
    "comment": "String",
    "reservationId": "Integer"
  },
  ...
]
```
