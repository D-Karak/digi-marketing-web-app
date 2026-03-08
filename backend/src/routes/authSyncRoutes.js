const express = require('express');
const router = express.Router();

// Import the specific logic to handle user creation/login mapping
const { syncUserWithDatabase } = require('../controllers/authSyncController');

// --------------------------------------------------------------------------
// This maps directly to: POST /api/auth/sync
// --------------------------------------------------------------------------
router.post('/sync', syncUserWithDatabase);

module.exports = router;
