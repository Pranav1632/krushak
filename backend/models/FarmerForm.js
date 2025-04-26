const mongoose = require('mongoose');

const farmerFormSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  cropName: { type: String, required: true },
  cropType: { type: String, required: true },
  quantity: { type: Number, required: true },
  productionArea: { type: Number, required: true },
  minPrice: { type: Number, required: true },
  maxPrice: { type: Number, required: true },
  deliveryMethod: { type: String, required: true },
  address: { type: String, required: true },
});

module.exports = mongoose.model('FarmerForm', farmerFormSchema);
