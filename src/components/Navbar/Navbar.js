import React from "react";
import ValorantIcon from "../../assets/icons/valorantIcon.png";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="brand-container">
        <div className="brand-icon">
          <img src={ValorantIcon} alt="Icon" />
        </div>
        <div className="brand-name">
          <h3>Valorant Stats</h3>
        </div>
      </div>
      <div className="navbar-content">
        <a href="#">Home</a>
        <a href="#">Stats</a>
        <a href="#">Leaderboard</a>
        <a href="#">About Me</a>
      </div>
    </div>
  );
}

export default Navbar;
