import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import FarmerForm from "./pages/FarmerForm";
import MerchantForm from "./pages/MerchantForm";
import CompanyForm from "./pages/CompanyForm";
import FarmerSuccess from "./pages/SuccessPages/FarmerSuccess";
import MerchantSuccess from "./pages/SuccessPages/MerchantSuccess";
import CompanySuccess from "./pages/SuccessPages/CompanySuccess";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/farmer-form" element={<FarmerForm />} />
      <Route path="/merchant-form" element={<MerchantForm />} />
      <Route path="/company-form" element={<CompanyForm />} />
      
      {/* ✅ Success Pages */}
      <Route path="/farmer-success" element={<FarmerSuccess />} />
      <Route path="/merchant-success" element={<MerchantSuccess />} />
      <Route path="/company-success" element={<CompanySuccess />} />
    </Routes>
  );
}

export default App;

