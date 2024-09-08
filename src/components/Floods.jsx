import React from "react";
import { Link } from "react-router-dom";
import "./flood.css";

const Floods = () => {
  return (
      <div className="flood-card">
        <div className="flood-content">
          <h1 className="flood-title">Flood</h1>
          <p className="flood-description">
            Stay informed about recent Climatic activities and their impacts.
            Get detailed reports and safety tips.
          </p>
          <Link className="flood-button" to="/data">
            Learn More
          </Link>
        </div>
      </div>
  );
};

export default Floods;
