import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightRotate, faCrown } from "@fortawesome/free-solid-svg-icons";
import "./Leaderboard.css";
import BoardTable from "./components/BoardTable/BoardTable";

const buildBoardPrCard = ({ boardData, rank }) => {
  rank--;
  return (
    <div
      className="board-pr-1-card"
      style={{
        // transform: `scale(${1 - rank / 10})`,
        width: `${28 - rank}rem`,
        height: `${20 - rank}rem`,
      }}
    >
      <div className="board-pr-1-img">
        <img
          src={`https://media.valorant-api.com/playercards/${boardData.players[rank]?.PlayerCardID}/largeart.png`}
          alt="User Card"
        />
      </div>
      <span className="board-pr-1-container">
        {/* <img
          src={`https://media.valorant-api.com/competitivetiers/03621f52-342b-cf4e-4f86-9350a49c6d04/${boardData.players[rank]?.competitiveTier}/largeicon.png`}
          alt="User Card"
        /> */}
        <h3 style={{ transform: `scale(${1 - rank / 5})` }}>
          #{boardData.players[rank]?.leaderboardRank}
          <FontAwesomeIcon icon={faCrown} />
        </h3>
        <div className="board-pr-name-container">
          <img
            src={`https://media.valorant-api.com/competitivetiers/03621f52-342b-cf4e-4f86-9350a49c6d04/${boardData?.players[rank]?.competitiveTier}/smallicon.png`}
            alt=""
          />
          <div className="player-name">
            {/* <p>Username:</p> */}
            {boardData.players[rank]?.gameName}
            <span className="player-tag">
              #{boardData.players[rank]?.tagLine}
            </span>
          </div>
        </div>
        <div className="board-pr-1-card-detail">
          <p>Wins:</p>
          <span>{boardData.players[rank].numberOfWins}</span>
        </div>
        <div className="board-pr-1-card-detail">
          <p>RR:</p>
          <span>{boardData.players[rank].rankedRating}</span>
        </div>
      </span>
    </div>
  );
};

function Leaderboard() {
  const [boardData, setBoardData] = useState({
    players: [
      {
        PlayerCardID: "fd303868-4689-e5fb-a873-2fbf7946e96e",
        TitleID: "951af77f-4683-ba12-2557-1da1950c390b",
        IsBanned: false,
        IsAnonymized: false,
        puuid: "05e41bc1-006f-5286-8506-0096ab1ac4fd",
        gameName: "DA cacan",
        tagLine: "301",
        leaderboardRank: 1,
        rankedRating: 1211,
        numberOfWins: 132,
        competitiveTier: 27,
      },
      {
        PlayerCardID: "944e2863-4c07-c6aa-923f-c99a7f00aa58",
        TitleID: "daae405e-4fc7-0c3a-0ab6-08bebca1a8dc",
        IsBanned: false,
        IsAnonymized: false,
        puuid: "d64fddf2-5cf4-59b5-99de-9316b75a863f",
        gameName: "neveR",
        tagLine: "god",
        leaderboardRank: 2,
        rankedRating: 1173,
        numberOfWins: 186,
        competitiveTier: 27,
      },
      {
        PlayerCardID: "16ac5364-471a-fd97-5a44-8ab9c48c7c84",
        TitleID: "229907f5-41a1-855d-a1f6-c1a934c74ed1",
        IsBanned: false,
        IsAnonymized: false,
        puuid: "53277fcb-e9b7-50aa-a7bb-cdea5982a2b5",
        gameName: "RAAD avez",
        tagLine: "GOSU",
        leaderboardRank: 3,
        rankedRating: 1125,
        numberOfWins: 171,
        competitiveTier: 27,
      },
      {
        PlayerCardID: "bb5cedcd-4ed9-ee2e-f129-48bf60a8e540",
        TitleID: "eab22308-45da-2059-c14f-44b4c52237b1",
        IsBanned: false,
        IsAnonymized: false,
        puuid: "6131f5e7-56c4-55a2-9877-6bad9a0d8dff",
        gameName: "DA ngiN",
        tagLine: "1993",
        leaderboardRank: 4,
        rankedRating: 1116,
        numberOfWins: 176,
        competitiveTier: 27,
      },
      {
        PlayerCardID: "f0ed2c16-4152-9dd9-694b-19873d209492",
        TitleID: "631f4283-48b1-1855-d646-5e8f80e29821",
        IsBanned: false,
        IsAnonymized: false,
        puuid: "e6f502d1-c3a6-509d-af5d-fe358c66fc37",
        gameName: "runneR",
        tagLine: "007",
        leaderboardRank: 5,
        rankedRating: 1081,
        numberOfWins: 144,
        competitiveTier: 27,
      },
    ],
  });
  const [boardRegion, setRegion] = useState("eu");
  const [reloadingBoard, setReloadingBoard] = useState(false);

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
      <div className="leaderboard-container-inner">
        {/* {boardData.length
        ? boardData.map((e, i) => {
            return (
              <div key={i}>
                {i + 1} {e.gameName}
              </div>
            );
          })
        : "No Data"} */}

        {/* <div className="board-title-container">
        <h1>Valorant</h1>
        <h2>Leaderboard</h2>
      </div> */}
        <h2 className="board-title">Top Players</h2>
        <div className="board-pr-container">
          {buildBoardPrCard({ boardData, rank: 1 })}
          {buildBoardPrCard({ boardData, rank: 2 })}
          {buildBoardPrCard({ boardData, rank: 3 })}
        </div>

        <BoardTable players={boardData?.players} />
      </div>
    </div>
  );
}

export default Leaderboard;
