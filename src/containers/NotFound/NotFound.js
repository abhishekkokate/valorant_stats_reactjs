import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <>
      <div className="notfound-container">
        <div className="notfound-content">
          <div className="notfound-number">
            <h1>404</h1>
          </div>
          <div className="notfound-text">
            <h2>Oops! Page Not Found</h2>
            <p>Click below to go to Home page</p>
            <Link className="cta-button" to="/">
              {">"} Home {"<"}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFound;
