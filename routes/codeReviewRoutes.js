const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const codeReviewController = require('../controllers/codeReviewController');

// Protected route to submit code for review
router.post('/', authMiddleware, codeReviewController.reviewCode);

// Protected route to fetch past reviews
router.get('/history', authMiddleware, codeReviewController.getReviewHistory);

module.exports = router;