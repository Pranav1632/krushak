const express = require('express');
const router = express.Router();
const formController = require('../controllers/formController');

router.post('/farmer', formController.submitFarmerForm);
router.post('/merchant', formController.submitMerchantForm);
router.post('/company', formController.submitCompanyForm);

module.exports = router;
