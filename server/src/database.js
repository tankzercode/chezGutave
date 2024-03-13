const { Sequelize } = require("sequelize");
require("dotenv").config({ path: "../.env" }); // Ajustez le chemin selon la structure de votre projet
// Optionnel: seulement si vous utilisez des fichiers .env pour le développement local




const database = new Sequelize(
  "postgres://root:root@chezgutave-database-1:5432/postgres"

var database = new Sequelize(
  "postgres://root:root@chezgutave-database-1:5432/postgres"
);

module.exports = database;
