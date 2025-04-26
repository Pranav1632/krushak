// src/pages/LoginPage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Make the fetch request
      const response = await fetch("http://localhost:8000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      // Wait for the response and parse it
      const data = await response.json();

      // Check if the response is successful
      if (response.ok) {
        alert("Login Successful!"); // ✅ Added this line
        // Store the token and user info
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        // Redirect based on user category
        if (data.user.category === "Farmer") {
          navigate("/farmer-form");
        } else if (data.user.category === "Merchant") {
          navigate("/merchant-form");
        } else if (data.user.category === "Company") {
          navigate("/company-form");
        }
      } else {
        // Handle failure
        alert(data.message || "Login failed");
      }
    } catch (err) {
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="login-container">
      <h2>Login to Krushak</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        <p>
          Don’t have an account? <a href="/signup">Signup</a>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
