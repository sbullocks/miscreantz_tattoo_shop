const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/appointments', (req, res) => {
    // handle creating a new appointment
});

app.get('/appointments/:id', (req, res) => {
    // handle retrieving an existing appointment
});

app.put('/appointments/:id', (req, res) => {
    // handle updating an existing appointment
});

app.delete('/appointments/:id', (req, res) => {
    // handle deleting an existing appointment
});

app.get('/appointments', (req, res) => {
    // handle retrieving all appointments
});

app.get('/appointments/artist/:artistId', (req, res) => {
    // handle retrieving appointments for a specific artist
});

mongoose.connect('mongodb+srv://<username>:<password>@cluster.mongodb.net/<dbname>', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.log('Error connecting to MongoDB:', err);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
