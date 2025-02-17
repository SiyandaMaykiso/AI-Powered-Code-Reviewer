const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const sequelize = require('./config/db');

dotenv.config();

const app = express();


app.use(cors({
    origin: 'https://ai-powered-code-reviewer-c7e564a6a3d0.herokuapp.com',
    credentials: true
}));


app.use(express.json());


const authRoutes = require('./routes/authRoutes');
const codeReviewRoutes = require('./routes/codeReviewRoutes');


app.use('/api/auth', authRoutes);
app.use('/api/review', codeReviewRoutes);


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