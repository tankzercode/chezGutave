require("dotenv").config();
const checkRole = (roles) => (req, res, next) => {
  if (!req.user) {
    // Si l'utilisateur n'est pas authentifié
    return res.sendStatus(401);
  }

  const { role } = req.user;
  if (roles.includes(role)) {
    next();
  } else {
    res.status(403).json({ message: "Accès refusé. Rôle insuffisant." });
  }
};

module.exports = { checkRole };
