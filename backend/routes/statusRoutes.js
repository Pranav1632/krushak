const express = require("express");
const router = express.Router();
const Farmer = require("../models/FarmerForm.js");
const Merchant = require("../models/MerchantForm.js");
const Company = require("../models/CompanyForm.js");

router.get("/", async (req, res) => {
  try {
    const farmerCount = await Farmer.countDocuments();
    const merchantCount = await Merchant.countDocuments();
    const companyCount = await Company.countDocuments();

    res.json({
      farmers: farmerCount,
      merchants: merchantCount,
      companies: companyCount,
    });
  } catch (err) {
    console.error("Status route error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
