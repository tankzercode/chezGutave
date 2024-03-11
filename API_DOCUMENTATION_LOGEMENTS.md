```markdown
# Documentation de l'API pour les Logements

Cette documentation décrit les endpoints de l'API concernant la gestion des logements dans l'application.

## Endpoints

### Créer un nouveau logement

- **Description**: Permet de créer un nouveau logement avec les détails et images fournies.
- **URL**: `/createLogement`
- **Méthode**: `POST`
- **Données requises**:

```json
{
  "secteur": "String",
  "description": "String",
  "tarif_bas": "Float",
  "tarif_moyen": "Float",
  "tarif_haut": "Float",
  "m_carre": "Float",
  "chambre": "Integer",
  "salle_de_bain": "Integer",
  "categorie": "String",
  "type": "String"
}
```

**Note**: Les images doivent être envoyées en tant que partie d'une requête multipart/form-data.

- **Réponse de succès**:
  - **Code**: 201
  - **Contenu**:

```json
{
  "id": "Integer",
  "images": ["Array of Strings"],
  "secteur": "String",
  ...
}
```

### Récupérer tous les logements

- **Description**: Permet de récupérer la liste de tous les logements disponibles.
- **URL**: `/getAllLogements`
- **Méthode**: `GET`
- **Réponse de succès**:
  - **Code**: 200
  - **Contenu**:

```json
[
  {
    "id": "Integer",
    "images": ["Array of Strings"],
    "secteur": "String",
    ...
  },
  ...
]
```