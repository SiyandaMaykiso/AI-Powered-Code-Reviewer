const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const CodeReview = sequelize.define('CodeReview', {
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    code: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    review: {
        type: DataTypes.TEXT,
        allowNull: true, // AI-generated review
    },
});

module.exports = CodeReview;