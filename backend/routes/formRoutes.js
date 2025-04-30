const express = require('express');
const router = express.Router();
const { submitForm } = require("../controllers/formController");
const { protect } = require("../middleware/authMiddleware");
const { 
  submitFarmerForm, 
  submitMerchantForm, 
  submitCompanyForm 
} = require('../controllers/formController');

// Routes for handling form submissions
router.post('/farmer', submitFarmerForm);
router.post('/merchant', submitMerchantForm);
router.post('/company', submitCompanyForm);
router.post("/submit", protect, submitForm); // Single endpoint for all
module.exports = router;
