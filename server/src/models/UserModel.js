const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database"); // Assurez-vous d'ajuster le chemin vers votre fichier de connexion

class User extends Model {}

User.init(
  {
    email: {
      type: DataTypes.STRING,
      unique: true, // Assure que l'email est unique dans la base de données
    },
    name: DataTypes.STRING,
    thirdname: DataTypes.STRING,
    tel: {
      type: DataTypes.STRING,
      unique: true, // Assure que le numéro de téléphone est unique
    },

    password: DataTypes.STRING,
    is_admin: DataTypes.BOOLEAN,
  },
  { sequelize, modelName: "user" }
);

module.exports = User;
