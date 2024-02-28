require("dotenv").config();
const db = require("../src/models"); // Ajustez le chemin selon votre structure de projet

// Ajustez le chemin selon votre structure de projet
async function testUserReservations() {
  try {
    // Création d'un utilisateur
    const user = await db.User.create({
      email: "test@example.com",
      name: "Test User",
      tel: "123456789",
      password: "password",
      is_admin: false,
    });

    // Création d'une réservation associée à l'utilisateur
    const reservation = await db.Reservation.create({
      start_date: new Date(),
      end_date: new Date(),
      chef_cuisine: false,
      visite: new Date(),
      userId: user.id, // Assurez-vous que cette clé correspond à la clé étrangère définie dans votre modèle
    });

    // Récupération de l'utilisateur avec ses réservations
    const userWithReservations = await db.User.findByPk(user.id, {
      include: [db.Reservation],
    });

    console.log(userWithReservations.Reservations); // Devrait afficher les réservations associées à l'utilisateur

    // Nettoyage (optionnel)
    await reservation.destroy();
    await user.destroy();
  } catch (error) {
    console.error("Test échoué:", error);
  }
}

testUserReservations();
