const app = require('./app');
const database = require('./database');
const express = require('express');
const apiRoutes = require('./routes/apiRoutes');

app.use(express.json());
// Utilisation des routes API
app.use('/api', apiRoutes);

database.authenticate().then(() => {
    console.log('Connected to database!');
    database.sync({ force: true }).then(() => {
        console.log('Database synchronized');
    });    
});

app.listen(process.env.PORT, () => {
    console.log('Server listening on 3630');
}); 