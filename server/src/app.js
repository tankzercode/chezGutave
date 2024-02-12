const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello world');
});

// Register all routers
app.use('/example', require('./routes/ExampleRoutes'));

module.exports = app;