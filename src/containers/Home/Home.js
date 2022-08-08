import React from "react";
import "./Home.css";
import data from "../../data.json";
import HomeStats from "./components/HomeStats/HomeStats";

function Home() {
  return (
    <div className="home-container">
      <HomeStats />
    </div>
  );
}

export default Home;
