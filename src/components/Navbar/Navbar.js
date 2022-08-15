import {
  faHome,
  faInfoCircle,
  faRankingStar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";
import ValorantIcon from "../../assets/icons/valorantIcon.png";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar-container">
      <a href="#" className="ham-burger-container">
        <div className="ham-burger">
          <span></span>
        </div>
      </a>
      <div className="brand-container">
        <div className="brand-icon">
          <img src={ValorantIcon} alt="Icon" />
        </div>
        <div className="brand-name">
          <h3>Valorant Stats</h3>
        </div>
      </div>
      <div className="navbar-content">
        <NavLink to={"/"}>
          <FontAwesomeIcon icon={faHome} /> <span>Home</span>
        </NavLink>
        <NavLink to={"/stats"}>
          <FontAwesomeIcon icon={faUser} /> <span>Player Stats</span>
        </NavLink>
        <NavLink to={"/leaderboard"}>
          <FontAwesomeIcon icon={faRankingStar} /> <span>Leaderboard</span>
        </NavLink>
        <NavLink to={"/aboutme"}>
          <FontAwesomeIcon icon={faInfoCircle} /> <span>About Me</span>
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
