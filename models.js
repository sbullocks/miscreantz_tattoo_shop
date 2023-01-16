const mongoose = require('mongoose');
const Appointment = mongoose.model('Appointment', AppointmentSchema);
const Artist = mongoose.model('Artist', ArtistSchema);


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

module.exports = {
    AppointmentSchema,
    ArtistSchema,
    Appointment,
    Artist
}