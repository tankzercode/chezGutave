const { Sequelize } = require("sequelize");
require("dotenv").config({ path: "../.env" }); // Ajustez le chemin selon la structure de votre projet
// Optionnel: seulement si vous utilisez des fichiers .env pour le développement local

const database = new Sequelize(
<<<<<<< HEAD
  "postgres://postgres:root@localhost:5432/postgres"
=======
  "postgres://chez_gustave:super_secret@localhost:5432/chez_gustave"
>>>>>>> main
);

module.exports = database;
