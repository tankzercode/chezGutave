// models/index.js
const sequelize = require("../database");
const db = {};

db.Sequelize = Sequelize;

// Importation des modèles
db.User = require("./user.js")(sequelize, Sequelize);
db.Logement = require("./logement.js")(sequelize, Sequelize);
db.Equipement = require("./equipement.js")(sequelize, Sequelize);
db.Reservation = require("./reservation.js")(sequelize, Sequelize);
db.Rating = require("./ratingModels.js")(sequelize, Sequelize);

// Définition des relations
db.Logement.belongsToMany(db.Equipement, { through: "LogementEquipements" });
db.Equipement.belongsToMany(db.Logement, { through: "LogementEquipements" });

db.User.hasMany(db.Reservation, { foreignKey: "userId" });
db.Reservation.belongsTo(db.User, { foreignKey: "userId" });

db.Logement.hasMany(db.Reservation, { foreignKey: "logementId" });
db.Reservation.belongsTo(db.Logement, { foreignKey: "logementId" });

db.Reservation.hasOne(db.Rating, { foreignKey: "reservationId" });
db.Rating.belongsTo(db.Reservation, { foreignKey: "reservationId" });

module.exports = db;
