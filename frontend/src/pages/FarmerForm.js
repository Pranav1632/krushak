import React, { useState } from "react";
import "./FormPage.css";

import { useNavigate } from "react-router-dom";
import "./FarmerForm.css";

const FarmerForm = () => {
  const [cropName, setCropName] = useState("");
  const [cropType, setCropType] = useState("");
  const [quantity, setQuantity] = useState("");
  const [productionArea, setProductionArea] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [deliveryMethod, setDeliveryMethod] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      cropName,
      cropType,
      quantity,
      productionArea,
      minPrice,
      maxPrice,
      deliveryMethod,
      address,
    };

    try {
      const response = await fetch("http://localhost:8000/api/forms/farmer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`, // if you are using JWT tokens
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setLoading(false);

      if (response.ok) {
        alert("Form submitted successfully!");
        navigate("/form"); // Redirect to some form page or home
      } else {
        alert(data.message || "Error submitting form");
      }
    } catch (err) {
      setLoading(false);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="form-container" style={{ backgroundColor: "#d3f8d3" }}>
      <h2>Farmer Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Crop Name"
          value={cropName}
          required
          onChange={(e) => setCropName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Crop Type"
          value={cropType}
          required
          onChange={(e) => setCropType(e.target.value)}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          required
          onChange={(e) => setQuantity(e.target.value)}
        />
        <input
          type="number"
          placeholder="Production Area"
          value={productionArea}
          required
          onChange={(e) => setProductionArea(e.target.value)}
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
          type="text"
          placeholder="Delivery Method"
          value={deliveryMethod}
          required
          onChange={(e) => setDeliveryMethod(e.target.value)}
        />
        <textarea
          placeholder="Address"
          value={address}
          required
          onChange={(e) => setAddress(e.target.value)}
        ></textarea>
        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default FarmerForm;
