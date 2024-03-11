```markdown
# Documentation de l'API pour les équipements

Cette documentation détaille les endpoints de l'API relatifs à la gestion des équipements dans l'application.

## Endpoints

### Créer un nouvel équipement

- **Description**: Permet de créer un nouvel équipement dans le système.
- **URL**: `/createEquipement`
- **Méthode**: `POST`
- **Données requises**:

```json
{
  "name": "String"
}
```

- **Réponse de succès**:
  - **Code**: 201
  - **Contenu**:

```json
{
  "id": "Integer",
  "name": "String"
}
```

### Récupérer tous les équipements

- **Description**: Permet de récupérer la liste de tous les équipements disponibles.
- **URL**: `/getAllEquipements`
- **Méthode**: `GET`
- **Réponse de succès**:
  - **Code**: 200
  - **Contenu**:

```json
[
  {
    "id": "Integer",
    "name": "String"
  },
  ...
]
```