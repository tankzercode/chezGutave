require("dotenv").config();
const db = require("../models/index");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

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

    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false, // En environnement de développement, pour les serveurs avec des certificats auto-signés
      },
    });

    let mailOptions = {
      from: process.env.EMAIL_ADDRESS,
      to: newUser.email,
      subject: "Votre compte a été créé",
      text: `Bonjour ${name}, votre compte a été créé avec succès. Voici votre mot de passe : ${newUser.password} - Il est recommandé de le changer dès votre première connexion.`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        res.status(500).send({
          message: "Erreur lors de l'envoi de l'email",
          error: error.message,
        });
      } else {
        console.log("Email envoyé : " + info.response);
        res.status(201).send({
          message: "Utilisateur créé avec succès et email envoyé",
          user: newUser,
        });
      }
    });
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
