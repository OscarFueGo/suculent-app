const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from the Backend!');
});

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from Dockerized Node.js Backend!' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
