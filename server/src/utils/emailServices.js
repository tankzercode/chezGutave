const nodemailer = require("nodemailer");
require("dotenv").config({ path: "../.env" }); // Ajustez le chemin selon la structure de votre projet

// Configuration du transporter Nodemailer avec Mailjet
const transporter = nodemailer.createTransport({
  host: "in-v3.mailjet.com", // Hôte SMTP de Mailjet
  port: 587, // Port standard pour SMTP
  secure: false, // true pour le port 465, false pour les autres ports
  auth: {
    user: process.env.MAILJET_API_KEY, // Clé API publique Mailjet
    pass: process.env.MAILJET_API_SECRET, // Clé API secrète Mailjet
  },
});

// Fonction pour envoyer l'email d'invitation
const sendInvitationEmail = async (recipientEmail, token) => {
  const mailOptions = {
    from: process.env.EMAIL_ADDRESS, // L'adresse email d'expéditeur
    to: recipientEmail, // Le destinataire de l'invitation
    subject: "Invitation à rejoindre notre application",
    html: `<p>Pour rejoindre notre application, veuillez cliquer sur le lien ci-dessous :</p>
           <a href="https://votreapplication.com/register?token=${token}">Rejoindre l'application</a>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email d'invitation envoyé avec succès");
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email d'invitation", error);
  }
};

module.exports = sendInvitationEmail;
