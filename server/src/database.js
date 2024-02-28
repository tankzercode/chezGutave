const { Sequelize } = require("sequelize");
require("dotenv").config({ path: "../../.env" }); // Ajustez le chemin selon la structure de votre projet
// Optionnel: seulement si vous utilisez des fichiers .env pour le développement local

const database = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: process.env.NODE_ENV === "production", // Active SSL uniquement en production
      rejectUnauthorized: false, // Important pour certaines configurations de base de données cloud
    },
  },
});

module.exports = database;
