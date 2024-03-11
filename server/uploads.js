const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

// Chemin vers le dossier uploads
const uploadsDir = path.join(__dirname, "uploads");

// Vérifie si le dossier 'uploads' existe, sinon le crée
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Fonction pour sauvegarder l'image et obtenir le hash
function saveImageAndGetHash(imageBuffer) {
  // Crée un hash SHA-256 de l'image
  const hash = crypto.createHash("sha256").update(imageBuffer).digest("hex");
  // Construit le chemin complet du fichier
  const filename = `${hash}.png`;
  const filePath = path.join(uploadsDir, filename);
  // Écrit le buffer de l'image dans le fichier
  fs.writeFileSync(filePath, imageBuffer);
  // Retourne le nom du fichier, qui est le hash avec l'extension '.png'
  return filename;
}

module.exports = {
  saveImageAndGetHash,
};
