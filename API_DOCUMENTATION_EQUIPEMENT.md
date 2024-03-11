```markdown
# Documentation de l'API pour les équipements

## Créer un nouvel équipement

- **URL**
  `/createEquipement`

- **Méthode**
  `POST`

- **Données requises**

  ```json
  {
    "name": "String"
  }
  ```

- **Réponse de succès**

  - **Code** : 201
  - **Contenu** :

  ```json
  {
    "id": "Integer",
    "name": "String"
  }
  ```

## Récupérer tous les équipements

- **URL**
  `/getAllEquipements`

- **Méthode**
  `GET`

- **Réponse de succès**

  - **Code** : 200
  - **Contenu** :

  ```json
  [
    {
      "id": "Integer",
      "name": "String"
    },
    ...
  ]
  ```
```