const db = require('../models/index'); // Ajustez le chemin selon l'organisation de votre projet

// Créer une nouvelle réservation
exports.createReservation = async (req, res) => {
    try {
        const { start_date, end_date, chef_cuisine, visite, logementId, userId } = req.body;
        const newReservation = await db.Reservation.create({
            start_date,
            end_date,
            chef_cuisine,
            visite,
            logementId,
            userId
        });
        res.status(201).send(newReservation);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Récupérer toutes les réservations
exports.getAllReservations = async (req, res) => {
    try {
        const reservations = await db.Reservation.findAll();
        res.status(200).send(reservations);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Mettre à jour une réservation
exports.updateReservation = async (req, res) => {
    try {
        const { reservationId } = req.params;
        const updatedReservation = await db.Reservation.update(req.body, {
            where: { id: reservationId }
        });
        if (updatedReservation == 1) {
            res.status(200).send("La réservation a été mise à jour.");
        } else {
            res.status(404).send("La réservation n'a pas été trouvée.");
        }
    } catch (error) {
        res.status(400).send(error);
    }
};

// Supprimer une réservation
exports.deleteReservation = async (req, res) => {
    try {
        const { reservationId } = req.params;
        const deletedReservation = await db.Reservation.destroy({
            where: { id: reservationId }
        });
        if (deletedReservation == 1) {
            res.status(200).send("La réservation a été supprimée.");
        } else {
            res.status(404).send("La réservation n'a pas été trouvée.");
        }
    } catch (error) {
        res.status(400).send(error);
    }
};
