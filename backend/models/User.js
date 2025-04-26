const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,   // <- ADD THIS
    required: false, // <- not required at signup
  },
  password: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ['Farmer', 'Company', 'Merchant'],
    required: true,
  },
});

module.exports = mongoose.model('User', userSchema);
