const express = require('express');
const router = express.Router();

// Import the specific logic to handle grabbing profiles
const { getUserProfile } = require('../controllers/userProfileController');

// --------------------------------------------------------------------------
// GET /api/users/profile/:uid
// --------------------------------------------------------------------------
router.get('/profile/:uid', getUserProfile);

module.exports = router;
