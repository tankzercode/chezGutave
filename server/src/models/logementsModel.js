const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database");

class Logement extends Model {}

Logement.init(
  {
    titre:DataTypes.STRING,
    images: DataTypes.ARRAY(DataTypes.TEXT),
    secteur: DataTypes.STRING,
    description: DataTypes.TEXT,
    tarif_bas: DataTypes.FLOAT,
    tarif_moyen: DataTypes.FLOAT,
    tarif_haut: DataTypes.FLOAT,
    m_carre: DataTypes.FLOAT,
    chambre: DataTypes.INTEGER,
    salle_de_bain: DataTypes.INTEGER,
    categorie: DataTypes.STRING,
    type: DataTypes.STRING,
  },
  { sequelize, modelName: "logement" }
);

module.exports = Logement;
