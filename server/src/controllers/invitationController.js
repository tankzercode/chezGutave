const crypto = require("crypto");
const db = require("../models/index");
const sendInvitationEmail = require("../utils/emailServices");

exports.createInvitation = async (req, res) => {
  const { email } = req.body;
  // Générer un token unique pour l'invitation
  const token = crypto.randomBytes(20).toString("hex");
  // Définir une date d'expiration pour le token, par exemple 48 heures
  const expiresAt = new Date(Date.now() + 48 * 60 * 60 * 1000);

  try {
    // Vérifier si une invitation existe déjà pour cet email
    const existingInvitation = await db.Invitation.findOne({
      where: { email },
    });
    if (existingInvitation) {
      return res
        .status(400)
        .json({ message: "Une invitation a déjà été envoyée à cet email." });
    }

    // Créer une nouvelle invitation dans la base de données
    const invitation = await db.Invitation.create({
      email,
      token,
      expiresAt,
      used: false,
    });

    // Envoyer l'e-mail d'invitation
    await sendInvitationEmail(email, token);

    res.status(201).json({
      message: "Invitation envoyée avec succès.",
      invitation,
    });
  } catch (error) {
    console.error("Erreur lors de la création de l'invitation :", error);
    res.status(500).json({
      message: "Erreur lors de la création de l'invitation.",
      error: error.toString(),
    });
  }
};

// Méthode pour valider une invitation (si nécessaire)
exports.validateInvitation = async (req, res) => {
  const { token } = req.query;

  try {
    const invitation = await db.Invitation.findOne({
      where: { token, used: false },
    });

    if (!invitation || invitation.expiresAt < new Date()) {
      return res
        .status(400)
        .json({ message: "Invitation invalide ou expirée." });
    }

    // Marquer l'invitation comme utilisée (si vous enregistrez cette information)
    await db.invitation.update({ used: true });

    res.status(200).json({ message: "Invitation validée avec succès." });
    // Ici, vous pourriez également procéder à la création du compte utilisateur
  } catch (error) {
    console.error("Erreur lors de la validation de l'invitation :", error);
    res.status(500).json({
      message: "Erreur lors de la validation de l'invitation.",
      error: error.toString(),
    });
  }
};
