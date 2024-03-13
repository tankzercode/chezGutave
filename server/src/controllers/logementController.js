const db = require("../models/index");

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const uploadsDir = path.join(__dirname, "uploads");

// Vérifie si le dossier 'uploads' existe, sinon le crée
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}
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
  console.log(req.body)
  console.log(req.file)
  console.log(req.files)

  console.log(req)
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
    const imageBuffers = req.body.file; // 'req.files' doit être fourni par un middleware de gestion de fichiers, tel que multer.

    // const imageFilenames = imageBuffers.map((buffer) =>
    //   saveImageAndGetHash(buffer)
    // );
    // Utilisez Promise.all pour traiter toutes les images en parallèle
    const promises = imageBuffers.map((buffer) =>
      saveImageAndGetHash(buffer)
    );

    // Attendre la résolution de toutes les promesses
    Promise.all(promises)
      .then((imageHashes) => {
        // Maintenant, imageHashes contient les hachages correspondant à chaque image
        console.log("Hachages des images :", imageHashes);
      })
      .catch((error) => {
        // Gérer les erreurs éventuelles
        console.error("Une erreur s'est produite lors du traitement des images :", error);
      });

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
    console.log(error);
    res.status(400).send(error);
  }
};

// Récupérer tous les logements
exports.getAllLogements = async (req, res) => {
  try {
    const logements = await db.Logement.findAll();
    res.status(200).send(logements);
  } catch (error) {
    res.status(400).send(error);
  }
};
