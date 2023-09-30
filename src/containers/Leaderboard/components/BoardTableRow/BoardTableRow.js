import React from "react";
import "./BoardTableRow.css";

function BoardTableRow({ player }) {
  return (
    <div className="board-table-row-container">
      <div className="board-table-rank-no">
        <h2>{player?.leaderboardRank}</h2>
      </div>
      <div className="board-table-rank-icon">
        <h2>
          <img
            src={`https://media.valorant-api.com/competitivetiers/03621f52-342b-cf4e-4f86-9350a49c6d04/${player?.competitiveTier}/smallicon.png`}
            alt=""
          />
        </h2>
      </div>
      <img
        style={{ margin: "0 auto", height: "60px" }}
        src={`https://media.valorant-api.com/playercards/${player?.PlayerCardID}/smallart.png`}
        alt="Player"
      />
      <div className="board-table-player">
        <h2>
          {player?.gameName}#{player?.tagLine}
        </h2>
      </div>
      <div className="board-table-rr">
        <h2>{player?.rankedRating}</h2>
      </div>
      <div className="board-table-wins">
        <h2>{player?.numberOfWins}</h2>
      </div>
    </div>
  );
}

export default BoardTableRow;
