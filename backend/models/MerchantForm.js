const mongoose = require('mongoose');

const merchantFormSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  productName: { type: String, required: true },
  productType: { type: String, required: true },
  requiredQuantity: { type: Number, required: true },
  minPrice: { type: Number, required: true },
  maxPrice: { type: Number, required: true },
  productWeight: { type: String, required: true },
  address: { type: String, required: true },
});

module.exports = mongoose.model('MerchantForm', merchantFormSchema);
