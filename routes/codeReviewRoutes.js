const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const codeReviewController = require('../controllers/codeReviewController');

// Middleware to check for token explicitly
const checkToken = (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(401).json({ error: "Unauthorized: No token provided" });
    }
    next();
};

// Protected route to submit code for review
router.post('/', checkToken, authMiddleware, codeReviewController.reviewCode);

// Protected route to fetch past reviews
router.get('/history', checkToken, authMiddleware, codeReviewController.getReviewHistory);

module.exports = router;