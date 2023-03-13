const express = require('express');
const router = express.Router();
const videoController = require('../controllers/video');

// GET route for retrieving all videos
router.get('/', videoController.getAllVideos);

// GET route for retrieving a specific video by ID
router.get('/:id', videoController.getVideoById);

// POST route for creating a new video
router.post('/', videoController.createVideo);

// PUT route for updating a video by ID
router.put('/:id', videoController.updateVideoById);

// DELETE route for deleting a video by ID
router.delete('/:id', videoController.deleteVideoById);

module.exports = router;
