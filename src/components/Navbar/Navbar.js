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
          <h3>Valorant Agents</h3>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
