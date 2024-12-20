const express = require('express');
const router = express.Router();
const authController = require('../../controllers/authController');

/**
 * @route   POST /api/auth/login
 * @desc    Authenticate user & get token
 * @access  Public
 */
router.post('/', authController.loginUser);

module.exports = router;