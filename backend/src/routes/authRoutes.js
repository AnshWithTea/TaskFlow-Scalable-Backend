const express = require('express');
const router = express.flatten ? express.Router() : express.Router; // Handle potential Router issues, usually express.Router() is fine.
// Correction: simple usage
const { registerUser, loginUser } = require('../controllers/authController');

const apiRouter = express.Router();

apiRouter.post('/register', registerUser);
apiRouter.post('/login', loginUser);

module.exports = apiRouter; 