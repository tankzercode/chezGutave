const db = require('../models/index');

// Créer un nouveau logement
exports.createLogement = async (req, res) => {
    try {
        const { images, secteur, description, tarif_bas, tarif_moyen, tarif_haut, m_carre, chambre, salle_de_bain, categorie, type } = req.body;
        const newLogement = await db.Logement.create({
            images,
            secteur,
            description,
            tarif_bas,
            tarif_moyen,
            tarif_haut,
            m_carre,
            chambre,
            salle_de_bain,
            categorie,
            type
        });
        res.status(201).send(newLogement);
    } catch (error) {
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
