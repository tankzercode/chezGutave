const db = require("../models/index");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

// Configuration de Multer pour le stockage des images
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadsDir = path.join(__dirname, "..", "uploads");
    // Vérifie si le dossier 'uploads' existe, sinon le crée
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    // Utilisez crypto pour générer un nom de fichier unique basé sur le contenu du fichier
    const hash = crypto
      .createHash("sha256")
      .update(file.originalname + Date.now().toString())
      .digest("hex");
    cb(null, hash + path.extname(file.originalname)); // sauvegarde avec l'extension originale
  },
});

const upload = multer({ storage: storage }).array("images");

// Middleware pour gérer le téléchargement d'images avec Multer
exports.uploadImages = (req, res, next) => {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
    } else if (err) {
      return res.status(500).json(err);
    }
    next(); // passe à la fonction suivante si tout va bien
  });
};

// Fonction pour créer un nouveau logement
exports.createLogement = async (req, res) => {
  try {
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

    // Les noms de fichiers des images téléchargées sont maintenant disponibles dans req.files
    const imageFilenames = req.files.map((file) => file.filename);

    const newLogement = await db.Logement.create({
      images: imageFilenames, // stockez les noms de fichier générés par Multer
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

    res.status(201).json(newLogement);
  } catch (error) {
    console.error("Erreur lors de la création du logement :", error);
    res.status(400).json(error);
  }
};

// Récupérer tous les logements (pas de changement nécessaire ici)
exports.getAllLogements = async (req, res) => {
  try {
    const logements = await db.Logement.findAll();
    res.status(200).json(logements);
  } catch (error) {
    console.error("Erreur lors de la récupération des logements :", error);
    res.status(400).json(error);
  }
};
