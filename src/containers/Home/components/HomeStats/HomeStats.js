import React from "react";
import "./HomeStats.css";
import { Link } from "react-router-dom";

function HomeStats() {
  return (
    <div className="home-stats-container">
      <div className="home-stats-img-container">
        <img
          src="https://images.livemint.com/img/2020/06/03/1600x900/Valorant_1591218052835_1591218061187.jpg"
          alt="Valorant"
          width={300}
        />
      </div>
      <div className="home-stats-content">
        <h3>Currently only leaderboard is live click below to navigate</h3>
      </div>
      <Link className="cta-button" to="/">
        {">"} Leaderboard {"<"}
      </Link>
    </div>
  );
}

export default HomeStats;
