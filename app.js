const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost/ugmc', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());

app.use('/patients', require('./routes/patientRoutes'));
app.use('/encounters', require('./routes/encounterRoutes'));
app.use('/vitals', require('./routes/vitalRoutes'));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});