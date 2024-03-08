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
    // Créer l'utilisateur dans votre DB, hashage du mot de passe, etc.

    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true pour 465, false pour les autres ports
      auth: {
        user: process.env.EMAIL_ADDRESS, // Votre adresse email Gmail
        pass: process.env.EMAIL_PASSWORD, // Votre mot de passe Gmail
      },
      tls: {
        rejectUnauthorized: false, // Nécessaire pour éviter certaines erreurs en développement
      },
    });

    // Générer le lien d'activation avec un jeton unique
    const activationLink = `http://votre-domaine.com/activation/${userUniqueToken}`;

    let mailOptions = {
      from: process.env.EMAIL_ADDRESS, // Expéditeur
      to: email, // Destinataire
      subject: "Activation de votre compte", // Sujet
      html: `<h4>Bonjour ${name},</h4>
             <p>Votre compte a été créé avec succès. Veuillez cliquer sur le lien ci-dessous pour l'activer:</p>
             <a href="${activationLink}">Activer mon compte</a>
             <p>Ce lien expire dans 24 heures.</p>`, // corps du texte en HTML
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        res.status(500).send("Erreur lors de l'envoi de l'email");
      } else {
        console.log("Email envoyé : " + info.response);
        res.send("Utilisateur créé avec succès et email envoyé");
      }
    });
  } catch (error) {
    console.error(error);
    res.status(400).send("Erreur lors de la création de l'utilisateur");
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
