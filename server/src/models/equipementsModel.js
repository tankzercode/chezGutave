const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

class Equipement extends Model {}

Equipement.init(
  {
    name: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "Equipement",
  }
);

module.exports = Equipement;
