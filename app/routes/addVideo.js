const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');
const Video = require('../models/video');

// @route POST api/addVideo
// @desc Add a new video
// @access Private
router.post(
  '/',
  [
    auth,
    [
      check('title', 'Title is required').not().isEmpty(),
      check('description', 'Description is required').not().isEmpty(),
      check('url', 'Url is required').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      // Create a new video object
      const video = new Video({
        user: req.user.id,
        title: req.body.title,
        description: req.body.description,
        url: req.body.url,
      });

      // Save the new video object
      await video.save();

      // Return success response
      res.json({ msg: 'Video added successfully' });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
