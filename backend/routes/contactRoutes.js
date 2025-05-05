const express = require('express');
const router = express.Router();
const { submitContact } = require('../controllers/contactController');

// Change this:
router.post('/', submitContact); // ✅ Correct path

module.exports = router;
