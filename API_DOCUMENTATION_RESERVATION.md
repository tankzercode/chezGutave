```markdown
# Documentation de l'API pour les Réservations

Cette documentation décrit les endpoints de l'API concernant la gestion des réservations dans l'application.

## Endpoints

### Créer une nouvelle réservation

- **Description**: Permet de créer une nouvelle réservation avec les détails fournis.
- **URL**: `/createReservation`
- **Méthode**: `POST`
- **Données requises**:

```json
{
  "start_date": "Date",
  "end_date": "Date",
  "chef_cuisine": "Boolean",
  "visite": "Boolean",
  "logementId": "Integer",
  "userId": "Integer"
}
```

- **Réponse de succès**:
  - **Code**: 201
  - **Contenu**:

```json
{
  "id": "Integer",
  "start_date": "Date",
  "end_date": "Date",
  "chef_cuisine": "Boolean",
  "visite": "Boolean",
  "logementId": "Integer",
  "userId": "Integer"
}
```

### Récupérer toutes les réservations

- **Description**: Permet de récupérer toutes les réservations existantes.
- **URL**: `/getAllReservations`
- **Méthode**: `GET`
- **Réponse de succès**:
  - **Code**: 200
  - **Contenu**:

```json
[
  {
    "id": "Integer",
    ...
  },
  ...
]
```

### Mettre à jour une réservation

- **Description**: Permet de mettre à jour les détails d'une réservation existante.
- **URL**: `/updateReservation/:reservationId`
- **Méthode**: `PUT`
- **Réponse de succès**:
  - **Code**: 200
  - **Message**: "La réservation a été mise à jour."

### Supprimer une réservation

- **Description**: Permet de supprimer une réservation existante.
- **URL**: `/deleteReservation/:reservationId`
- **Méthode**: `DELETE`
- **Réponse de succès**:
  - **Code**: 200
  - **Message**: "La réservation a été supprimée."
```