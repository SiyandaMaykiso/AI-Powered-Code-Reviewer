const { Sequelize } = require('sequelize');
require('dotenv').config();


const databaseUrl = process.env.DATABASE_URL;


const sequelize = new Sequelize(databaseUrl, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false 
        }
    },
    logging: false, 
});

module.exports = sequelize;