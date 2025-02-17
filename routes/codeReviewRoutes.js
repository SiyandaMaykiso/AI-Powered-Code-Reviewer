const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const codeReviewController = require('../controllers/codeReviewController');


router.post('/', authMiddleware, codeReviewController.reviewCode);


router.get('/history', authMiddleware, codeReviewController.getReviewHistory);

module.exports = router;
