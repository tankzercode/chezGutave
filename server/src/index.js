const express = require('express');
const userRoutes = require('./routes/userRoutes'); // Assurez-vous que le chemin est correct

const app = express();

app.use(express.json()); // Middleware pour parser le JSON

app.get('/', (req, res) => {
    res.send('Hello world');
});

// Utiliser les routes d'utilisateur
app.use('/api', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
