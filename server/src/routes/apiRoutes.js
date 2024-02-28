const express = require('express');
const router = express.Router();

// Importation des contrôleurs
const userController = require('../controllers/userController');
const logementController = require('../controllers/logementController');
const equipementController = require('../controllers/equipementController');
const ratingController = require('../controllers/ratingController');
const reservationController = require('../controllers/reservationController');

// Routes pour les utilisateurs
router.post('/users', userController.createUser);
router.get('/users', userController.getAllUsers);

// Routes pour les logements
router.post('/logements', logementController.createLogement);
router.get('/logements', logementController.getAllLogements);

// Routes pour les équipements
router.post('/equipements', equipementController.createEquipement);
router.get('/equipements', equipementController.getAllEquipements);

// Routes pour les évaluations
router.post('/ratings', ratingController.createRating);
router.get('/ratings', ratingController.getAllRatings);

// Routes pour les réservations
router.post('/reservations', reservationController.createReservation);
router.get('/reservations', reservationController.getAllReservations);
router.put('/reservations/:reservationId', reservationController.updateReservation);
router.delete('/reservations/:reservationId', reservationController.deleteReservation);

module.exports = router;
