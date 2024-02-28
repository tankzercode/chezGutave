const db = require('../models/index');

// Créer une nouvelle évaluation
exports.createRating = async (req, res) => {
    try {
        const { rating_value, comment, reservationId } = req.body;
        const newRating = await db.Rating.create({
            rating_value,
            comment,
            reservationId
        });
        res.status(201).send(newRating);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Récupérer toutes les évaluations
exports.getAllRatings = async (req, res) => {
    try {
        const ratings = await db.Rating.findAll();
        res.status(200).send(ratings);
    } catch (error) {
        res.status(400).send(error);
    }
};
