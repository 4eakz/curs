const express = require('express');
const router = express.Router();
const commentController = require('../controllers/comment');

// Create a new comment
router.post('/', commentController.createComment);

// Get all comments for a video
router.get('/:videoId', commentController.getCommentsForVideo);

module.exports = router;
