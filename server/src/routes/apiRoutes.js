const express = require("express");
const router = express.Router();
const cors = require("cors");
router.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD"],
    credentials: true,
  })
);
// Importation des contrôleurs
const userController = require("../controllers/userController");
const logementController = require("../controllers/logementController");
const equipementController = require("../controllers/equipementController");
const ratingController = require("../controllers/ratingController");
const reservationController = require("../controllers/reservationController");
const invitationController = require("../controllers/invitationController");

// Routes pour les utilisateurs

router.get("/getAllUsers", userController.getAllUsers);
router.post("/signup", userController.signup);
router.post("/signin", userController.signin);
router.put("/users/:userId", userController.updateUser);
router.delete("/users/:userId", userController.deleteUser);
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
router.post("/invitations", invitationController.createInvitation);

module.exports = router;
