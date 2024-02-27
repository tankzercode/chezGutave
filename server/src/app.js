const express = require("express");
const connectDatabase = require("./database");

const app = express();

// Connect to database
connectDatabase();

// Define global middlewares here

app.get("/", (req, res) => {
  res.send("Hello world");
});

// Register all routers
// app.use('/user', require('./routes/userRoutes'));

const PORT = process.env.SERVER_PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;
