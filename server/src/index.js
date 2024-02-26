const app = require('./app');
const database = require('./database');

database.authenticate().then(() => {
    console.log('Connected to database!');c
    database.sync({ force: true });
});

app.listen(process.env.PORT, () => {
    console.log('Server listening on 3630');
});