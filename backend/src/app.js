const express = require('express');
const bodyParser = require('body-parser');
const wvdRoutes = require('./routes/wvd');

const app = express();

app.use(bodyParser.json());
app.use('/api/wvd', wvdRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));