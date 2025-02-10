const { Sequelize } = require('sequelize');
require('dotenv').config();

// Extract the DATABASE_URL from environment variables
const databaseUrl = process.env.DATABASE_URL;

// Ensure SSL is required
const sequelize = new Sequelize(databaseUrl, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false // Allows self-signed certificates
        }
    },
    logging: false, // Set to true for debugging SQL queries
});

module.exports = sequelize;