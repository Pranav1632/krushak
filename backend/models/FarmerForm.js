const mongoose = require('mongoose');

const farmerFormSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  cropName: String,
  cropType: String,
  cropQuantity: String,
  productionArea: String,
  minExpectedPrice: String,
  maxExpectedPrice: String,
  deliveryOption: String, // Self delivery or Merchant delivery
  address: String,
  phone: String // <- added field
});

module.exports = mongoose.model('FarmerForm', farmerFormSchema);
