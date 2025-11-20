const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

// Import Routes
const authRoutes = require('./routes/authRoutes'); // <--- ADD THIS
const taskRoutes = require('./routes/taskRoutes');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use('/api/tasks', taskRoutes);

// Routes
app.use('/api/auth', authRoutes); // <--- ADD THIS

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Backend is running', status: 'OK' });
});

module.exports = app;