const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database"); // Assurez-vous d'ajuster le chemin vers votre fichier de connexion

class User extends Model {}

User.init(
  {
    email: DataTypes.STRING,
    name: DataTypes.STRING,
    tel: DataTypes.STRING,
    password: DataTypes.STRING,
    is_admin: DataTypes.BOOLEAN,
  },
  { sequelize, modelName: "user" }
);

module.exports = User;
