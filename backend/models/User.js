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
