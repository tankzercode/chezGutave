const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

class Reservation extends Model {}

Reservation.init(
  {
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    chef_cuisine: DataTypes.BOOLEAN,
    visite: DataTypes.DATE,
    logementId: {
      type: DataTypes.INTEGER,
      references: {
        model: "logements", // Nom de la table tel que défini dans Sequelize
        key: "id",
      },
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: "users", // Nom de la table tel que défini dans Sequelize
        key: "id",
      },
    },
    rating: DataTypes.INTEGER, // Assurez-vous que cette relation est correctement gérée si elle fait référence à la table `ratings`
  },
  {
    sequelize,
    modelName: "Reservation",
  }
);

module.exports = Reservation;
