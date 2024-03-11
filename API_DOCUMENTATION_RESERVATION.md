```markdown
# Documentation de l'API pour les réservations

## Créer une nouvelle réservation

- **URL**
  `/createReservation`

- **Méthode**
  `POST`

- **Données requises**

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

- **Réponse de succès**

  - **Code** : 201
  - **Contenu** :

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

## Récupérer toutes les réservations

- **URL**
  `/getAllReservations`

- **Méthode**
  `GET`

- **Réponse de succès**

  - **Code** : 200
  - **Contenu** :

  ```json
  [
    {
      "id": "Integer",
      "start_date": "Date",
      "end_date": "Date",
      ...
    },
    ...
  ]
  ```

## Mettre à jour une réservation

- **URL**
  `/updateReservation/:reservationId`

- **Méthode**
  `PUT`

- **Réponse de succès**

  - **Code** : 200
  - **Message** : "La réservation a été mise à jour."

## Supprimer une réservation

- **URL**
  `/deleteReservation/:reservationId`

- **Méthode**
  `DELETE`

- **Réponse de succès**

  - **Code** : 200
  - **Message** : "La réservation a été supprimée."
```