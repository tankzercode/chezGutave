const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database"); // Assurez-vous d'ajuster le chemin vers votre fichier de connexion

class Invitation extends Model {}

Invitation.init(
  {
    // ID généré automatiquement par Sequelize
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    token: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    used: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    expiresAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Invitation",
    // Options supplémentaires ici si nécessaire
  }
);

module.exports = Invitation;
