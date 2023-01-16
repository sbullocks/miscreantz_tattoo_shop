const express = require('express');
const bodyParser = require('body-parser');
const app = express();

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

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
