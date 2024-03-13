const cors = require('cors')
const app = require("./app");
const database = require("./database");
const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const bodyParser = require('body-parser');
const port = 3000;
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD"],
  })
);
app.use(bodyParser.json())
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
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
