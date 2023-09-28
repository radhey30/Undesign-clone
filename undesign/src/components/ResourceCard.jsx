import React from "react";
import { Link } from "react-router-dom";

export default function ResourceCard({resource}) {
  return (
    <Link className="resource-card" target="_blank" to={resource?.link}>
      <div className="resource-logo">
        <img
          src={resource?.logo || "https://static.thenounproject.com/png/36918-200.png"}
          alt="logo"
        />
      </div>
      <div className="resource-content">
        <h3>{resource?.name}</h3>
        <p>{resource?.info}</p>
      </div>
    </Link>
  );
}
