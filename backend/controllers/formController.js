const FarmerForm = require('../models/FarmerForm');
const MerchantForm = require('../models/MerchantForm');
const CompanyForm = require('../models/CompanyForm');
const Form = require('../models/Form');
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

// Unified form handler
exports.submitForm = async (req, res) => {
  try {
    const { category } = req.body;

    if (!category || !["Farmer", "Merchant", "Company"].includes(category)) {
      return res.status(400).json({ message: "Invalid or missing category" });
    }

    const form = new Form({
      ...req.body,
      user: req.user._id, // attach logged-in user
    });

    await form.save();
    res.status(201).json({ message: `${category} form submitted`, form });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error submitting form" });
  }
};