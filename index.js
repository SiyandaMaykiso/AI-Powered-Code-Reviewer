const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const authMiddleware = require('./middlewares/authMiddleware');
const sequelize = require('./config/db');

dotenv.config();

const app = express();

// CORS setup
app.use(cors({ origin: process.env.FRONTEND_URL || 'http://localhost:3000' }));
app.use(bodyParser.json());

// Import routes
const authRoutes = require('./routes/authRoutes');
const codeReviewRoutes = require('./routes/codeReviewRoutes'); // New route

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/review', codeReviewRoutes);

// Serve frontend build files (if deployed)
app.use(express.static(path.join(__dirname, 'client/build')));

// Default API route
app.get('/', (req, res) => {
    res.send('Welcome to the AI-Powered Code Reviewer API!');
});

// Catch-all route for frontend
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

// Sync database & start server
sequelize
    .authenticate()
    .then(() => sequelize.sync({ force: false }))
    .then(() => {
        const PORT = process.env.PORT || 3001;
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error('Unable to connect to the database:', err.message);
    });