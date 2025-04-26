// src/pages/HomePage.js
import React from "react";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <img src="/logo.png" alt="Krushak Logo" className="logo" />
        <nav className="navbar">
          <a href="/">Home</a>
          <a href="#videos">Videos</a>
          <a href="#about">About Us</a>
          <a href="#howto">How To...</a>
          <a href="#donate">Donate</a>
          <a href="/login" className="login-link">Login Here</a>
        </nav>
      </header>

      <main className="home-main">
        <h1>Welcome to Krushak</h1>
        <h2><em>Empowering the Farmers !!</em></h2>
        <p>
          For the sustenance of the world, For the development of the farmer, 
          For the bright future of the farmer, A fair price, excellent quality, 
          and well-equipped marketplace.
        </p>
        <p>
          जगाच्या पोशिण्यासाठी लष्कराच्या विकासासाठी शेतकऱ्याच्या उज्ज्वल भविष्यासाठी योग्य भाव उत्कृष्ट गुणवत्ता सुसज्ज बाजारपेठ
        </p>
        <div className="stats">
          <div className="stat-card">
            <div>622961</div>
            <div>Registered Users</div>
          </div>
          <div className="stat-card">
            <div>19023</div>
            <div>Local Groups</div>
          </div>
          <div className="stat-card">
            <div>89</div>
            <div>Input Suppliers</div>
          </div>
          <div className="stat-card">
            <div>8709</div>
            <div>Buyers</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
