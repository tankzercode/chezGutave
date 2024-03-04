const db = require("../models/index");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// Récupérer tous les utilisateurs
exports.getAllUsers = async (req, res) => {
  try {
    const users = await db.User.findAll();
    res.status(200).send(users);
  } catch (error) {
    res.status(400).send(error);
  }
};
exports.signup = async (req, res) => {
  try {
    const { email, name, tel, password, is_admin } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10); // Hashage du mot de passe

    const newUser = await db.User.create({
      email,
      name,
      tel,
      password: hashedPassword,
      is_admin,
    });

    res
      .status(201)
      .send({ message: "Utilisateur créé avec succès", user: newUser });
  } catch (error) {
    console.error(error);
    res.status(400).send({
      message: "Erreur lors de la création de l'utilisateur",
      error: error.message,
    });
  }
};

exports.signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await db.User.findOne({ where: { email } });

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(
        { id: user.id, email: user.email },
        "votre_clé_secrète",
        { expiresIn: "24h" }
      ); // Utilisez une clé secrète plus sécurisée

      res.status(200).send({ message: "Connexion réussie", token });
    } else {
      res.status(401).send({
        message: "Email ou mot de passe incorrect",
      });
    }
  } catch (error) {
    console.error(error);
    res
      .status(400)
      .send({ message: "Erreur lors de la connexion", error: error.message });
  }
};
