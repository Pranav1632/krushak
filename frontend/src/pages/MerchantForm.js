// src/pages/MerchantForm.js
import React, { useState } from "react";
import "./FormPage.css";


const MerchantForm = () => {
  const [productName, setProductName] = useState("");
  const [productType, setProductType] = useState("");
  const [requiredQuantity, setRequiredQuantity] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [productWeight, setProductWeight] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/api/forms/merchant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productName,
          productType,
          requiredQuantity,
          minPrice,
          maxPrice,
          productWeight,
          priceRange,
          address,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Form submitted successfully!");
      } else {
        alert(data.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="form-container">
      <h2>Merchant Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product Name"
          value={productName}
          required
          onChange={(e) => setProductName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Product Type"
          value={productType}
          required
          onChange={(e) => setProductType(e.target.value)}
        />
        <input
          type="number"
          placeholder="Required Quantity"
          value={requiredQuantity}
          required
          onChange={(e) => setRequiredQuantity(e.target.value)}
        />
        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          required
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          required
          onChange={(e) => setMaxPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Product Weight"
          value={productWeight}
          required
          onChange={(e) => setProductWeight(e.target.value)}
        />
        <input
          type="text"
          placeholder="Price Range"
          value={priceRange}
          required
          onChange={(e) => setPriceRange(e.target.value)}
        />
        <input
          type="text"
          placeholder="Address"
          value={address}
          required
          onChange={(e) => setAddress(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MerchantForm;
