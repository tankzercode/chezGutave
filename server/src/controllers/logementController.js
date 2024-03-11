const db = require("../models/index");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

// Fonction pour sauvegarder l'image et obtenir le hash
function saveImageAndGetHash(imageBuffer) {
  const hash = crypto.createHash("sha256").update(imageBuffer).digest("hex");
  const filename = `${hash}.png`;
  const imagePath = path.join(__dirname, "..", "uploads", filename);

  fs.writeFileSync(imagePath, imageBuffer);

  return filename;
}

// Modifier la fonction createLogement pour sauvegarder les images avec le hash
exports.createLogement = async (req, res) => {
  try {
    // Supposer que les images sont envoyées sous forme de buffer dans une requête multipart/form-data
    const {
      secteur,
      description,
      tarif_bas,
      tarif_moyen,
      tarif_haut,
      m_carre,
      chambre,
      salle_de_bain,
      categorie,
      type,
    } = req.body;
    const imageBuffers = req.files; // 'req.files' doit être fourni par un middleware de gestion de fichiers, tel que multer.

    const imageFilenames = imageBuffers.map((buffer) =>
      saveImageAndGetHash(buffer)
    );

    const newLogement = await db.Logement.create({
      images: imageFilenames, // Stockez les noms des fichiers au lieu des buffers d'image
      secteur,
      description,
      tarif_bas,
      tarif_moyen,
      tarif_haut,
      m_carre,
      chambre,
      salle_de_bain,
      categorie,
      type,
    });

    res.status(201).send(newLogement);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Le reste du code reste inchangé
exports.getAllLogements = async (req, res) => {
  // ... code existant ...
};
