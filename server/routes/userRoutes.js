const express = require('express');
const { createUser } = require('../controllers/authController');
const router = express.Router();

router.route('/signup').post(createUser)

module.exports = router;