import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";

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
          
          {/* Add the Status Page link */}
          <Link to="/status">
            <button className="status-btn">Status Page</button>
          </Link>
        </nav>
      </header>

      <main className="home-main">
        <h1>𝐖𝐄𝐋𝐂𝐎𝐌𝐄 𝐓𝐎 𝐊𝐑𝐔𝐒𝐇𝐀𝐊</h1>
        <h2><em>𝐸𝑀𝒫𝒪𝒲𝐸𝑅𝐼𝒩𝒢 𝐹𝒜𝑅𝑀𝐸𝑅𝒮 .. !</em></h2>
        <h3> ​🇫​​🇴​​🇷​ ​🇹​​🇭​​🇪​ ​🇸​​🇺​​🇸​​🇹​​🇪​​🇳​​🇦​​🇳​​🇨​​🇪​ ​🇴​​🇫​ ​🇹​​🇭​​🇪​ ​🇼​​🇴​​🇷​​🇱​​🇩​, ​🇫​​🇴​​🇷​ ​🇹​​🇭​​🇪​ ​🇩​​🇪​​🇻​​🇪​​🇱​​🇴​​🇵​​🇲​​🇪​​🇳​​🇹​ ​🇴​​🇫​ ​🇹​​🇭​​🇪​ ​🇫​​🇦​​🇷​​🇲​​🇪​​🇷​, 
        ​🇫​​🇴​​🇷​ ​🇹​​🇭​​🇪​ ​🇧​​🇷​​🇮​​🇬​​🇭​​🇹​ ​🇫​​🇺​​🇹​​🇺​​🇷​​🇪​ ​🇴​​🇫​ ​🇹​​🇭​​🇪​ ​🇫​​🇦​​🇷​​🇲​​🇪​​🇷​, ​🇦​ ​🇫​​🇦​​🇮​​🇷​ ​🇵​​🇷​​🇮​​🇨​​🇪​, ​🇪​​🇽​​🇭​​🇪​​🇱​​🇱​​🇪​​🇳​​🇹​ ​🇶​​🇺​​🇦​​🇱​​🇮​​🇹​​🇾​, ​🇦​​🇳​​🇩​ ​🇼​​🇪​​🇱​​🇱​-​🇪​​🇶​​🇺​​🇮​​🇵​​🇵​​🇪​​🇩​ ​🇲​​🇦​​🇷​​🇰​​🇪​​🇹​​🇵​​🇱​​🇦​​🇨​​🇪​.
        </h3>
        
        <p>
          जगाच्या पोशिण्यासाठी शेतकऱ्याच्या विकासासाठी शेतकऱ्याच्या उज्ज्वल भविष्यासाठी योग्य भाव उत्कृष्ट गुणवत्ता सुसज्ज बाजारपेठ
        </p>
        <div className="stats">
          <div className="stat-card">
            <div>6225</div>
            <div>Registered Users</div>
          </div>
          <div className="stat-card">
            <div>190</div>
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
