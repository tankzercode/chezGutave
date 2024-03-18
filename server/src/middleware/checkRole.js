require("dotenv").config();
const checkRole = (role) => (req, res, next) => {
  if (!req.user) {
    // Si l'utilisateur n'est pas authentifié
    res.status(401).send("error role");
  }

  const { roleUser } = req.user;
  if (roleUser.includes(role)) {
    next();
  } else {
    res.status(403).json({ message: "Accès refusé. Rôle insuffisant." });
  }
};

module.exports = checkRole;
