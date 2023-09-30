import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faCaretLeft,
  faCaretRight,
  faStepBackward,
  faStepForward,
} from "@fortawesome/free-solid-svg-icons";
import BoardTableRow from "../BoardTableRow/BoardTableRow";
import "./BoardTable.css";
import { useState } from "react";
import _ from "lodash";

function BoardTable({ players }) {
  const [currPage, setCurrPage] = useState(1);
  const maxPages = Math.ceil(players?.length / 10);
  const [filteredPlayers, setFilteredPlayers] = useState(
    players?.filter((e, i) => {
      return i >= (currPage - 1) * 10 && i < (currPage - 1) * 10 + 10;
    }) || []
  );

  useEffect(() => {
    setFilteredPlayers(
      players?.filter((e, i) => {
        return i >= (currPage - 1) * 10 && i < (currPage - 1) * 10 + 10;
      })
    );
  }, [currPage, maxPages]);

  return (
    <>
      <div className="board-table-container">
        <div className="board-table-title">
          <div className="board-table-rank-no">
            <h2>Rank</h2>
          </div>
          <div className="board-table-rank-icon">
            <h2></h2>
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
        {filteredPlayers.map((e, i) => {
          if (e?.leaderboardRank >= 3) {
            return <BoardTableRow player={e} key={i} />;
          }
        })}

        <div className="board-table-navigation-container">
          <a
            className="navigator navigate-first"
            onClick={() => {
              setCurrPage((prev) => {
                setCurrPage(1);
              });
            }}
          >
            <FontAwesomeIcon icon={faStepBackward} />
          </a>
          <a
            className="navigator navigate-prev"
            onClick={() => {
              setCurrPage((prev) => {
                if (prev <= 1) prev = 2;
                setCurrPage(prev - 1);
              });
            }}
          >
            <FontAwesomeIcon icon={faCaretLeft} />
          </a>
          <div className="navigator" style={{ fontSize: "1rem" }}>
            <input
              type="text"
              min={1}
              max={maxPages}
              name="pageno"
              id="pageno"
              value={currPage}
              onChange={(e) => {
                let val = e.target.value;
                setCurrPage(val);
              }}
            />
            &nbsp;/&nbsp;{maxPages}
          </div>
          <a
            className="navigator navigate-next"
            onClick={() => {
              setCurrPage((prev) => {
                if (prev >= maxPages) prev = maxPages - 1;
                setCurrPage(prev + 1);
              });
            }}
          >
            <FontAwesomeIcon icon={faCaretRight} />
          </a>
          <a
            className="navigator navigate-last"
            onClick={() => {
              setCurrPage((prev) => {
                setCurrPage(maxPages);
              });
            }}
          >
            <FontAwesomeIcon icon={faStepForward} />
          </a>
        </div>
      </div>
    </>
  );
}

export default BoardTable;
