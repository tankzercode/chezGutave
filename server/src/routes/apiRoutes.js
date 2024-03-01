const express = require("express");
const router = express.Router();

// Importation des contrôleurs
const userController = require("../controllers/userController");
const logementController = require("../controllers/logementController");
const equipementController = require("../controllers/equipementController");
const ratingController = require("../controllers/ratingController");
const reservationController = require("../controllers/reservationController");

// Routes pour les utilisateurs
router.post("/createUser", userController.createUser);
router.get("/getAllUsers", userController.getAllUsers);

// Routes pour les logements
router.post("/createLogement", logementController.createLogement);
router.get("/getAllLogements", logementController.getAllLogements);

// Routes pour les équipements
router.post("/createEquipement", equipementController.createEquipement);
router.get("/getAllEquipements", equipementController.getAllEquipements);

// Routes pour les évaluations
router.post("/createRating", ratingController.createRating);
router.get("/getAllRatings", ratingController.getAllRatings);

// Routes pour les réservations
router.post("/createReservation", reservationController.createReservation);
router.get("/getAllReservations", reservationController.getAllReservations);
router.put(
  "/updateReservation/:reservationId",
  reservationController.updateReservation
);
router.delete(
  "/deleteReservation/:reservationId",
  reservationController.deleteReservation
);

module.exports = router;
