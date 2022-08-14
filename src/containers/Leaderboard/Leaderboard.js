import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightRotate, faCrown } from "@fortawesome/free-solid-svg-icons";
import "./Leaderboard.css";

function Leaderboard() {
  const [boardData, setBoardData] = useState({
    players: [
      {
        PlayerCardID: "",
        TitleID: "",
        IsBanned: false,
        IsAnonymized: false,
        puuid: "",
        gameName: "",
        tagLine: "",
        leaderboardRank: 1,
        rankedRating: 0,
        numberOfWins: 0,
        competitiveTier: 0,
      },
    ],
  });
  const [boardRegion, setRegion] = useState("eu");
  const [reloadingBoard, setReloadingBoard] = useState(false);

  const userData = {
    status: 200,
    data: {
      puuid: "226d1505-9b11-5468-96ef-2b1c85fd38e6",
      region: "ap",
      account_level: 334,
      name: "FW JitboyXD",
      tag: "uknow",
      card: {
        small:
          "https://media.valorant-api.com/playercards/b55ec859-4533-c751-a1d8-b1bba5c16387/smallart.png",
        large:
          "https://media.valorant-api.com/playercards/b55ec859-4533-c751-a1d8-b1bba5c16387/largeart.png",
        wide: "https://media.valorant-api.com/playercards/b55ec859-4533-c751-a1d8-b1bba5c16387/wideart.png",
        id: "b55ec859-4533-c751-a1d8-b1bba5c16387",
      },
      last_update: "Now",
      last_update_raw: 1660496492,
    },
  };

  useEffect(() => {
    fetchBoardData();
  }, [boardRegion]);

  const fetchBoardData = () => {
    fetch(`https://api.henrikdev.xyz/valorant/v2/leaderboard/${boardRegion}`, {
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setBoardData(result);
        boardData.players.length = 10;
        console.log(boardData.players.length);
      })
      .catch((err) => {
        console.error("Error while getting leaderboard: ", err.message);
      });
  };

  const handleRegionChange = (e) => {
    setRegion(e.target.value);
  };

  const handleReloadClick = () => {
    setReloadingBoard(true);
    fetchBoardData();
    setTimeout(() => {
      setReloadingBoard(false);
    }, 1000);
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
          <p>Region:</p>
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
          <button
            className={`btn-reload ${reloadingBoard ? "reloading" : ""}`}
            onClick={handleReloadClick}
          >
            <FontAwesomeIcon icon={faArrowRightRotate} />
          </button>
        </div>
      </div>
      {/* <div className="board-title-container">
        <h1>Valorant</h1>
        <h2>Leaderboard</h2>
      </div> */}
      <div className="board-pr-container">
        <div className="board-pr-1-card">
          <div className="board-pr-1-img">
            <img
              src={`https://media.valorant-api.com/playercards/${boardData.players[0].PlayerCardID}/largeart.png`}
              alt="User Card"
            />
          </div>
          <span className="board-pr-1-container">
            <h3>
              #{boardData.players[0].leaderboardRank}
              <FontAwesomeIcon icon={faCrown} />
            </h3>
            <div className="player-name">
              <p>Username:</p>
              {boardData.players[0].gameName}
              <span className="player-tag">
                #{boardData.players[0].tagLine}
              </span>
            </div>
            {/* <div className="board-pr-1-card-detail">
              <p>Wins:</p>
              <span>{boardData.players[0].numberOfWins}</span>
            </div> */}
          </span>
        </div>

        <div className="board-pr-1-card">
          <div className="board-pr-1-img">
            <img
              src={`https://media.valorant-api.com/playercards/${boardData.players[1]?.PlayerCardID}/largeart.png`}
              alt="User Card"
            />
          </div>
          <span className="board-pr-1-container">
            <h3>
              #{boardData.players[1]?.leaderboardRank}
              <FontAwesomeIcon icon={faCrown} />
            </h3>
            <div className="player-name">
              <p>Username:</p>
              {boardData.players[1]?.gameName}
              <span className="player-tag">
                #{boardData.players[1]?.tagLine}
              </span>
            </div>
            {/* <div className="board-pr-1-card-detail">
              <p>Wins:</p>
              <span>{boardData.players[1].numberOfWins}</span>
            </div> */}
          </span>
        </div>
      </div>
      {/* {boardData.players.map((e, i) => {
        if (i > 10) return;
        return (
          <div className="board-rest-container" key={i}>
            <div className="board-rest-card">
              <h4>
                <img
                  style={{ margin: "0 auto" }}
                  src={`https://media.valorant-api.com/playercards/${e?.PlayerCardID}/smallart.png`}
                  alt="Pcard"
                />
                {boardData.players[i]?.leaderboardRank} {e.gameName}#{e.tagLine}
              </h4>
            </div>
          </div>
        );
      })} */}
    </div>
  );
}

export default Leaderboard;
