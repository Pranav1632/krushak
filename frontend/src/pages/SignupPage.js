// src/pages/SignupPage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignupPage.css";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    category: "Farmer",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const isValidPhone = /^\d{10}$/.test(formData.phone);  // For a 10-digit phone number
    if (!isValidPhone) {
      alert("Please enter a valid 10-digit phone number");
      return;
    }
    
    try {
      const response = await fetch("http://localhost:8000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Signup successful! Please login.");
        navigate("/login");
      } else {
        alert(data.message || "Signup failed.");
      }
    } catch (err) {
      alert("Something went wrong.");
    }
  };

  return (
    <div className="signup-container">
      <h2>Signup to Krushak</h2>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="Farmer">Farmer</option>
          <option value="Merchant">Merchant</option>
          <option value="Company">Company</option>
        </select>
        <button type="submit">Signup</button>
        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
};

export default SignupPage;
