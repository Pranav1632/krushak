const FarmerForm = require('../models/FarmerForm');
const MerchantForm = require('../models/MerchantForm');
const CompanyForm = require('../models/CompanyForm');

// Farmer
exports.submitFarmerForm = async (req, res) => {
  try {
    const form = new FarmerForm({ ...req.body });
    await form.save();
    res.status(201).json({ message: 'Farmer form submitted' });
  } catch (err) {
    res.status(500).json({ message: 'Error submitting farmer form' });
  }
};

// Merchant
exports.submitMerchantForm = async (req, res) => {
  try {
    const form = new MerchantForm({ ...req.body });
    await form.save();
    res.status(201).json({ message: 'Merchant form submitted' });
  } catch (err) {
    res.status(500).json({ message: 'Error submitting merchant form' });
  }
};

// Company
exports.submitCompanyForm = async (req, res) => {
  try {
    const form = new CompanyForm({ ...req.body });
    await form.save();
    res.status(201).json({ message: 'Company form submitted' });
  } catch (err) {
    res.status(500).json({ message: 'Error submitting company form' });
  }
};
