// Import required modules
const express = require('express');
const router = express.Router();

// Import user controller
const userController = require('../controllers/user');

// GET request for user profile page
router.get('/profile/:id', userController.userProfile);

// GET request for user settings page
router.get('/settings', userController.userSettings);

// POST request to update user settings
router.post('/settings', userController.updateUserSettings);

// Export router
module.exports = router;