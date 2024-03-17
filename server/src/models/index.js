const UserModel = require("./UserModel.js");
const LogementModel = require("./logementsModel.js");
const EquipementModel = require("./equipementsModel.js");
const ReservationModel = require("./reservationsModels.js");
const RatingModel = require("./ratingModels.js");
const invitationModels = require("./invitationModels.js"); //

// Exportez les modèles
module.exports = {
  User: UserModel,
  Logement: LogementModel,
  Equipement: EquipementModel,
  Reservation: ReservationModel,
  Rating: RatingModel,
  Invitation: invitationModels,
  // autres modèles
};
