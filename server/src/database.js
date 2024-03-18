const { Sequelize } = require("sequelize");
require("dotenv").config({ path: "../.env" }); // Ajustez le chemin selon la structure de votre projet
// Optionnel: seulement si vous utilisez des fichiers .env pour le développement local




const database = new Sequelize(process.env.DATABASE_URL);
module.exports = database;
