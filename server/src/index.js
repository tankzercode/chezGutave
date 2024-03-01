const app = require("./app");
const database = require("./database");
const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const port = 3000;
app.use(express.json());
// Utilisation des routes API
app.use("/api", apiRoutes);

database.authenticate().then(() => {
  console.log("Connected to database!");
  database.sync({ force: true }).then(() => {
    console.log("Database synchronized");
  });
});

app.listen(port),
  () => {
    console.log("Server listening on 3000");
  };
