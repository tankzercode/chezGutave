const db = require("../models/index");

// Créer un nouvel utilisateur
exports.createUser = async (req, res) => {
  try {
    const { email, name, tel, password, is_admin } = req.body;
    const newUser = await db.User.create({
      email,
      name,
      tel,
      password,
      is_admin,
    });
    res.status(201).send(newUser);
  } catch (error) {
    console.error(error); // Imprimez l'erreur dans la console du serveur
    res.status(400).send(error.message); // Envoyez le message d'erreur dans la réponse
  }
};

// Récupérer tous les utilisateurs
exports.getAllUsers = async (req, res) => {
  try {
    const users = await db.User.findAll();
    res.status(200).send(users);
  } catch (error) {
    res.status(400).send(error);
  }
};
