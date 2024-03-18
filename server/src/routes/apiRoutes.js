const express = require("express");
const router = express.Router();
const cors = require("cors");
const authenticateJWT = require("../middleware/authenfication");
const checkRole = require("../middleware/checkRole");

const userController = require("../controllers/userController");
const logementController = require("../controllers/logementController");
const equipementController = require("../controllers/equipementController");
const ratingController = require("../controllers/ratingController");
const reservationController = require("../controllers/reservationController");
const invitationController = require("../controllers/invitationController");
// Middleware CORS pour autoriser les requêtes de développement
router.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD"],
    credentials: true,
  })
);
// Importation des contrôleurs

// Routes pour les utilisateurs
router.get(
  "/getAllUsers",
  authenticateJWT,
  checkRole(["admin"]),
  userController.getAllUsers
);
router.post("/signup", userController.signup);
router.post("/signin", userController.signin);
router.put(
  "/users/:userId",
  authenticateJWT,
  checkRole(["admin"]),
  userController.updateUser
);
router.delete(
  "/users/:userId",
  authenticateJWT,
  checkRole(["admin"]),
  userController.deleteUser
);

// Routes pour les logements
router.post(
  "/createLogement",
  authenticateJWT,
  checkRole(["admin"]),
  logementController.createLogement
);
router.get("/getAllLogements", logementController.getAllLogements);

// Routes pour les équipements
router.post(
  "/createEquipement",
  authenticateJWT,
  checkRole(["admin"]),
  equipementController.createEquipement
);
router.get("/getAllEquipements", equipementController.getAllEquipements);

// Routes pour les évaluations
router.post("/createRating", authenticateJWT, ratingController.createRating);
router.get("/getAllRatings", ratingController.getAllRatings);

// Routes pour les réservations
router.post(
  "/createReservation",
  authenticateJWT,
  reservationController.createReservation
);
router.get(
  "/getAllReservations",
  authenticateJWT,
  reservationController.getAllReservations
);
router.put(
  "/updateReservation/:reservationId",
  authenticateJWT,
  reservationController.updateReservation
);
router.delete(
  "/deleteReservation/:reservationId",
  authenticateJWT,
  reservationController.deleteReservation
);
router.post(
  "/invitations",
  authenticateJWT,
  checkRole(["admin"]),
  invitationController.createInvitation
);
module.exports = router;
