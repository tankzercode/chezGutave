const bcrypt = require('bcrypt');
const User = require('../models/UserModel');
const crypto = require('crypto'); // Pour générer un mot de passe aléatoire

// Fonction pour envoyer le mot de passe par email (à implémenter)
const sendPasswordEmail = (email, password) => {
  // Implémentez votre logique d'envoi d'email ici
};

exports.createUser = async (req, res) => {
  try {
    const { email, name, phone } = req.body;
    // Générer un mot de passe aléatoire
    const randomPassword = crypto.randomBytes(10).toString('hex');
    const hashedPassword = await bcrypt.hash(randomPassword, 10);

    const newUser = await User.create({
      email,
      name,
      phone,
      password: hashedPassword,
      isAdmin: false
    });

    // Envoyer le mot de passe par email à l'utilisateur
    sendPasswordEmail(email, randomPassword);

    // Log du mot de passe généré aléatoirement pour le développement/debugging
    console.log(`Mot de passe crée pour le user, ${email}: ${randomPassword}`);

    res.status(201).json({ message: 'Utilisateur crée avec succès', user: newUser });
  } catch (error) {
    res.status(500).json({ message: 'Erreur de la création de l\'utilisateur', error: error.message });
  }
};
