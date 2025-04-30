const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    category: {
        type: String, // Farmer, Merchant, Company
        enum: ['Farmer', 'Merchant', 'Company'],
        required: true,
    },
    cropName: { type: String },       // for Farmer
    cropType: { type: String },        // for Farmer
    productName: { type: String },     // for Merchant/Company
    productType: { type: String },     // for Merchant/Company
    quantity: { type: String },
    productionArea: { type: String },  // for Farmer
    weightOrUnits: { type: String },   // for Merchant/Company
    minPrice: { type: Number },
    maxPrice: { type: Number },
    deliveryMethod: { type: String },  // eg: pickup, delivery
    address: { type: String },

    paymentStatus: {
        type: String,
        enum: ['Pending', 'Completed', 'Failed'],
        default: 'Pending'
    },
    registeredStatus: {
        type: Boolean,
        default: false,
    },
    dealDone: {
        type: Boolean,
        default: false,
    }
    
}, { timestamps: true });

module.exports = mongoose.model('Form', formSchema);
