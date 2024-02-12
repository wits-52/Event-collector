const express = require('express');
const eventRoutes = require('./routes/event.routes');

const app = express();

app.use(express.json());
app.get('/healthCheck', (req, res) => {
    res.json({
        message: 'API is Healthy :)'
    });
});

app.use('/event', eventRoutes);


module.exports = app;
