const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database");

class Rating extends Model {}

Rating.init(
  {
    rating_value: DataTypes.INTEGER,
    comment: DataTypes.TEXT,
    reservationId: {
      type: DataTypes.INTEGER,
      references: {
        model: "reservations", // Nom de la table tel que défini dans Sequelize
        key: "id",
      },
      onDelete: "CASCADE",
    },
  },
  {
    sequelize,
    modelName: "Rating",
  }
);

module.exports = Rating;
