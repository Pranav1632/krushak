const mongoose = require('mongoose');

const companyFormSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  productName: String,
  productType: String,
  quantityRequired: String,
  minExpectedPrice: String,
  maxExpectedPrice: String,
  deliveryOption: String,
  productWeight: String,
  priceRange: String,
  address: String,
});

module.exports = mongoose.model('CompanyForm', companyFormSchema);
