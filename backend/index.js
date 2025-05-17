const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Import routes
const getStandings = require('./routes/getStandings');
const fetchAndStore = require('./routes/fetchANDStore');

// Route usage
app.use('/api/standings', getStandings);
app.use('/api/fetch-and-store', fetchAndStore);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
