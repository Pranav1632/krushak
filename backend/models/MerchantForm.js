const mongoose = require('mongoose');

const merchantFormSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  productName: String,
  productType: String,
  quantityRequired: String,
  minExpectedPrice: String,
  maxExpectedPrice: String,
  productWeight: String,
  priceRange: String,
  address: String,
  phone: String // <- added field
});

module.exports = mongoose.model('MerchantForm', merchantFormSchema);
