// Importations nécessaires pour le fonctionnement du controller.
const crypto = require("crypto");
const db = require("../models/index");
const sendInvitationEmail = require("../utils/emailServices");

// Crée et envoie une invitation à l'adresse email fournie.
// Cette fonction génère un token d'invitation unique et vérifie qu'une invitation n'a pas déjà été envoyée à cette adresse.
exports.createInvitation = async (req, res) => {
  // Récupération de l'email depuis le corps de la requête.
  const { email } = req.body;

  // Génère un token d'invitation cryptographique aléatoire.
  const token = crypto.randomBytes(20).toString("hex");

  // Définit une date d'expiration pour l'invitation (ici 48 heures).
  const expiresAt = new Date(Date.now() + 48 * 60 * 60 * 1000);

  try {
    // Recherche d'une invitation existante pour cet email.
    const existingInvitation = await db.Invitation.findOne({
      where: { email },
    });

    // Si une invitation existe déjà, renvoie un message d'erreur.
    if (existingInvitation) {
      return res
        .status(400)
        .json({ message: "Une invitation a déjà été envoyée à cet email." });
    }

    // Crée une nouvelle invitation en base de données avec l'email, le token et la date d'expiration.
    const invitation = await db.Invitation.create({
      email,
      token,
      expiresAt,
      used: false, // Le champ 'used' indique si l'invitation a été utilisée.
    });

    // Envoie l'email d'invitation avec le token généré.
    await sendInvitationEmail(email, token);

    // Renvoie une réponse positive avec le détail de l'invitation.
    res.status(201).json({
      message: "Invitation envoyée avec succès.",
      invitation,
    });
  } catch (error) {
    // En cas d'erreur lors de la création, renvoie un message d'erreur.
    console.error("Erreur lors de la création de l'invitation :", error);
    res.status(500).json({
      message: "Erreur lors de la création de l'invitation.",
      error: error.toString(),
    });
  }
};

// Valide une invitation en utilisant le token fourni.
// Cette fonction vérifie si l'invitation est valide et non expirée, puis marque l'invitation comme utilisée.
exports.validateInvitation = async (req, res) => {
  // Récupération du token depuis la query de la requête.
  const { token } = req.query;

  try {
    // Recherche une invitation correspondante non utilisée avec le token fourni.
    const invitation = await db.Invitation.findOne({
      where: { token, used: false },
    });

    // Si aucune invitation n'est trouvée, ou si elle est expirée, renvoie un message d'erreur.
    if (!invitation || invitation.expiresAt < new Date()) {
      return res
        .status(400)
        .json({ message: "Invitation invalide ou expirée." });
    }

    // Marque l'invitation comme utilisée en base de données.
    await invitation.update({ used: true });

    // Renvoie une réponse indiquant que l'invitation a été validée avec succès.
    res.status(200).json({ message: "Invitation validée avec succès." });
  } catch (error) {
    // En cas d'erreur lors de la validation, renvoie un message d'erreur.
    console.error("Erreur lors de la validation de l'invitation :", error);
    res.status(500).json({
      message: "Erreur lors de la validation de l'invitation.",
      error: error.toString(),
    });
  }
};
