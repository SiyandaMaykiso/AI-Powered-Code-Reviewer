const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const sequelize = require('./config/db');

dotenv.config();

const app = express();

// ✅ CORS Setup
app.use(cors({
    origin: '*',
    credentials: true,
    optionsSuccessStatus: 200
}));

// ✅ Use express.json() for JSON parsing
app.use(express.json());

// Import routes
const authRoutes = require('./routes/authRoutes');
const codeReviewRoutes = require('./routes/codeReviewRoutes');

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/review', codeReviewRoutes);

// Serve frontend build files
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/', (req, res) => {
    res.send('Welcome to the AI-Powered Code Reviewer API!');
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

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
