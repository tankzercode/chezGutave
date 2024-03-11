```markdown
# Documentation de l'API pour les évaluations (Ratings)

## Créer une nouvelle évaluation (Rating)

- **URL**
  `/createRating`

- **Méthode**
  `POST`

- **Données requises**

  ```json
  {
    "rating_value": "Integer",
    "comment": "String",
    "reservationId": "Integer"
  }
  ```

- **Réponse de succès**

  - **Code** : 201
  - **Contenu** :

  ```json
  {
    "id": "Integer",
    "rating_value": "Integer",
    "comment": "String",
    "reservationId": "Integer"
  }
  ```

## Récupérer toutes les évaluations (Ratings)

- **URL**
  `/getAllRatings`

- **Méthode**
  `GET`

- **Réponse de succès**

  - **Code** : 200
  - **Contenu** :

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