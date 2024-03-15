require("dotenv").config();
const db = require("../models/index");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const crypto = require("crypto");
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
    console.log(req.body);
    const { email, name, surname, tel, is_admin } = req.body;
    const randomPassword = crypto.randomBytes(8).toString("hex");
    const hashedPassword = await bcrypt.hash(randomPassword, 10);
    const newUser = await db.User.create({
      email,
      name,
      surname,
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
        rejectUnauthorized: false,
      },
    });
    let mailOptions = {
      from: process.env.EMAIL_ADDRESS,
      to: email,
      subject: "Votre compte a été créé",
      html: `<h4>Bonjour ${name},</h4>
             <p>Votre compte a été créé avec succès. Voici votre mot de passe temporaire: ${randomPassword}</p>
             <p>Il est fortement recommandé de changer ce mot de passe lors de votre première connexion.</p>`,
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
    console.log(req.body);
    const { email, password } = req.body;
    const user = await db.User.findOne({ where: { email } });

    if (user && (await bcrypt.compare(password, user.password))) {
      // Création du token JWT
      const token = jwt.sign(
        { id: user.id, email: user.email },
        "votre_clé_secrète", // Assurez-vous d'utiliser une clé secrète sécurisée et de la stocker de manière sécurisée
        { expiresIn: "24h" }
      );

      // Inclure les informations de l'utilisateur dans la réponse, à l'exception du mot de passe
      res.status(200).send({
        message: "Connexion réussie",
        token,
        user: {
          id: user.id,
          email: user.email,
          name: user.name, // Assurez-vous que ces champs existent sur votre modèle utilisateur
          surname: user.surname,
          tel: user.tel,
          is_admin: user.is_admin,
        },
      });
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

exports.updateUser = async (req, res) => {
  const { userId } = req.params; // Assurez-vous que l'ID de l'utilisateur est envoyé en tant que paramètre d'URL
  const { name, surname, tel, is_admin } = req.body;

  try {
    const user = await db.User.findByPk(userId);
    if (!user) {
      return res.status(404).send({ message: "Utilisateur non trouvé" });
    }

    // Mettez à jour l'utilisateur avec les nouvelles valeurs
    await user.update({ name, surname, tel, is_admin });

    res.send({ message: "Utilisateur mis à jour avec succès" });
  } catch (error) {
    console.error(error);
    res.status(400).send({
      message: "Erreur lors de la mise à jour de l'utilisateur",
      error: error.message,
    });
  }
};

exports.deleteUser = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await db.User.findByPk(userId);
    if (!user) {
      return res.status(404).send({ message: "Utilisateur non trouvé" });
    }

    await user.destroy();

    res.send({ message: "Utilisateur supprimé avec succès" });
  } catch (error) {
    console.error(error);
    res.status(400).send({
      message: "Erreur lors de la suppression de l'utilisateur",
      error: error.message,
    });
  }
};
