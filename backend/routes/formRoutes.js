const express = require('express');
const router = express.Router();

const { 
  submitFarmerForm, 
  submitMerchantForm, 
  submitCompanyForm 
} = require('../controllers/formController');

// Routes for handling form submissions
router.post('/farmer', submitFarmerForm);
router.post('/merchant', submitMerchantForm);
router.post('/company', submitCompanyForm);

module.exports = router;
