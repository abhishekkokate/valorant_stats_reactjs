import {
  faHome,
  faInfoCircle,
  faRankingStar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import ValorantIcon from "../../assets/icons/valorantIcon.png";
import "./Navbar.css";

function Navbar() {
  const [navShrinked, setNavShrinked] = useState(true);

  const toggleSideNav = () => {
    setNavShrinked((prev) => !prev);
  };

  return (
    <div className={`navbar-container ${navShrinked ? "shrinked" : ""}`}>
      <a href="#" className="ham-burger-container" onClick={toggleSideNav}>
        <div className="ham-burger">
          <span></span>
        </div>
      </a>
      <div className="brand-container">
        <div className="brand-icon">
          <img src={ValorantIcon} alt="Icon" />
        </div>
        <div className="brand-name ">
          <h3 className={`navbar-text ${navShrinked ? "hidden" : ""}`}>
            Valorant Stats
          </h3>
        </div>
      </div>
      <div className="navbar-content">
        <NavLink to={"/"}>
          <FontAwesomeIcon icon={faHome} />{" "}
          <span className="navbar-text">Home</span>
        </NavLink>
        <NavLink to={"/stats"}>
          <FontAwesomeIcon icon={faUser} />{" "}
          <span className="navbar-text">Player Stats</span>
        </NavLink>
        <NavLink to={"/leaderboard"}>
          <FontAwesomeIcon icon={faRankingStar} />{" "}
          <span className="navbar-text">Leaderboard</span>
        </NavLink>
        <NavLink to={"/aboutme"}>
          <FontAwesomeIcon icon={faInfoCircle} />{" "}
          <span className="navbar-text">About Me</span>
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
