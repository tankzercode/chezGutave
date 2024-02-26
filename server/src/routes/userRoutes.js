const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController'); // Assurez-vous que le chemin est correct

// Route pour créer un nouvel utilisateur
router.post('/users', userController.createUser);

module.exports = router;
