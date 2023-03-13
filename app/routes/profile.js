const express = require('express');
const router = express.Router();
const { getUserProfile } = require('../controllers/profile');
const { requireAuth } = require('../middleware/auth');

// GET user profile
router.get('/profile', requireAuth, getUserProfile);

module.exports = router;
