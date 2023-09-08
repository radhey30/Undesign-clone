import React from "react";
import { Link } from "react-router-dom";

export default function ResourceCard() {
  return (
    <Link className="resource-card" target="_blank" to="https://www.iconbolt.com">
      <div className="resource-logo">
        <img
          src="https://www.iconbolt.com/static/img/meta/favicon.ico"
          alt="thunderbolt"
        />
      </div>
      <div className="resource-content">
        <h3>IconBolt</h3>
        <p>Easy instant access to a growing Collection of high quality icons</p>
      </div>
    </Link>
  );
}
