const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
    artistId: { type: String, required: true },
    clientId: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
});
const ArtistSchema = new mongoose.Schema({
    name: { type: String, required: true },
    portfolio: [{ type: String }],
});

const Appointment = mongoose.model('Appointment', AppointmentSchema, 'appointments');
const Artist = mongoose.model('Artist', ArtistSchema, 'artists');

module.exports = {
    AppointmentSchema,
    ArtistSchema,
    Appointment,
    Artist
}