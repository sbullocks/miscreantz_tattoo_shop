const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
    artistId: { type: String, required: true },
    clientId: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
});

