import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import FarmerForm from "./pages/FarmerForm"; // Import the FarmerForm component
import MerchantForm from "./pages/MerchantForm"; // Import the MerchantForm component
import CompanyForm from "./pages/CompanyForm"; // Import the CompanyForm component

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/farmer-form" element={<FarmerForm />} />
      <Route path="/merchant-form" element={<MerchantForm />} />
      <Route path="/company-form" element={<CompanyForm />} /> {/* Add route for CompanyForm */}
    </Routes>
  );
}

export default App;
