const db = require('../models/index');

// Créer un nouvel équipement
exports.createEquipement = async (req, res) => {
    try {
        const { name } = req.body;
        const newEquipement = await db.Equipement.create({
            name
        });
        res.status(201).send(newEquipement);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Récupérer tous les équipements
exports.getAllEquipements = async (req, res) => {
    try {
        const equipements = await db.Equipement.findAll();
        res.status(200).send(equipements);
    } catch (error) {
        res.status(400).send(error);
    }
};
