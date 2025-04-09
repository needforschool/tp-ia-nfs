// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://saidicharlotte690:hNg7o3VsdiYcdrbK@cluster0.lnjjaig.mongodb.net/image')
  .then(() => console.log('Connecté à MongoDB Atlas'))
  .catch(err => console.error('Erreur de connexion:', err));

// Routes

app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
