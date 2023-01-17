const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const mongoose = require('mongoose');
const { AppointmentSchema, ArtistSchema, Appointment, Artist } = require('./models');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/appointments', (req, res) => {
    // handle creating a new appointment
});

app.get('/appointments/:id', (req, res) => {
    // handle retrieving an existing appointment
    Appointment.findById(req.params.id).then(appointment => {
        res.json(appointment);
    }).catch(err => {
        res.json({ error: err });
    });
});

app.put('/appointments/:id', (req, res) => {
    // handle updating an existing appointment
    Appointment.findOneAndUpdate({ _id: req.params.id }, req.body).then(() => {
        res.json({ message: 'Appointment updated!' });
    }).catch(err => {
        res.json({ error: err });
    });
});

app.delete('/appointments/:id', (req, res) => {
    // handle deleting an existing appointment
    Appointment.findOneAndDelete({ _id: req.params.id }).then(() => {
        res.json({ message: 'Appointment deleted!' });
    }).catch(err => {
        res.json({ error: err });
    });
});

app.get('/appointments', (req, res) => {
    // handle retrieving all appointments
    Appointment.find().then(appointments => {
        res.json(appointments);
    }).catch(err => {
        res.json({ error: err });
    });
});

app.get('/appointments/artist/:artistId', (req, res) => {
    // handle retrieving appointments for a specific artist
    Appointment.find({artistId: req.params.artistId}).then(appointments => {
        res.json(appointments);
    }).catch(err => {
        res.json({ error: err });
    });
});

app.post('/appointments', (req, res) => {
    const appointment = new Appointment({
        artistId: req.body.artistId,
        clientId: req.body.clientId,
        date: req.body.date,
        time: req.body.time,
    });
    appointment.save().then(() => {
        res.json({ message: 'Appointment created!' });
    }).catch(err => {
        res.json({ error: err });
    });
});


// mongoose.connect('mongodb+srv://<username>:<password>@cluster.mongodb.net/<dbname>', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(() => {
//     console.log('Connected to MongoDB');
// }).catch(err => {
//     console.log('Error connecting to MongoDB:', err);
// });

mongoose.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster.mongodb.net/${process.env.MONGO_DBNAME}`, {
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
