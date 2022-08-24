import React from "react";
import BoardTableRow from "../BoardTableRow/BoardTableRow";
import "./BoardTable.css";

function BoardTable({ players }) {
  return (
    <div className="board-table-container">
      <div className="board-table-title">
        <div className="board-table-rank-no">
          <h2>Rank</h2>
        </div>
        <div className="board-table-rank-icon">
          <h2>Tier</h2>
        </div>
        <div className="board-table-player">
          <h2>Player</h2>
        </div>
        <div className="board-table-rr">
          <h2>RR</h2>
        </div>
        <div className="board-table-wins">
          <h2>Wins</h2>
        </div>
      </div>
      {players?.map((e, i) => {
        if (i >= 10 || i < 3) return;
        return <BoardTableRow player={e} />;
      })}
    </div>
  );
}

export default BoardTable;
