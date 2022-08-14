import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightRotate } from "@fortawesome/free-solid-svg-icons";
import "./Leaderboard.css";

function Leaderboard() {
  const [boardData, setBoardData] = useState([]);
  const [boardRegion, setRegion] = useState("eu");

  // useEffect(() => {
  //   fetch("https://api.henrikdev.xyz/valorant/v1/leaderboard/ap", {
  //     headers: {
  //       accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((result) => {
  //       setBoardData(result);
  //     })
  //     .catch((err) => {
  //       console.error("Error while getting leaderboard: ", err.message);
  //     });
  // }, []);

  const handleRegionChange = (e) => {
    setRegion(e.target.value);
  };

  return (
    <div className="leaderboard-container">
      {/* {boardData.length
        ? boardData.map((e, i) => {
            return (
              <div key={i}>
                {i + 1} {e.gameName}
              </div>
            );
          })
        : "No Data"} */}
      <div className="board-nav">
        <div className="region-dropdown-container">
          Region:
          <select
            name="region"
            id="regionDropdown"
            value={boardRegion}
            onChange={handleRegionChange}
          >
            <option value="eu">Europe (EU)</option>
            <option value="na">North America (NA)</option>
            <option value="ap">Asia Pacific (AP)</option>
            <option value="kr">Korea (KR)</option>
            <option value="latam">Latin America (LATAM)</option>
            <option value="br">Brazil (BR)</option>
          </select>
        </div>
        <div className="reload-container">
          <a href="#">
            <FontAwesomeIcon icon={faArrowRightRotate} />
          </a>
        </div>
      </div>
      Leaderboard
    </div>
  );
}

export default Leaderboard;
