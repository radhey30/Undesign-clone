import React from "react";
import { Link } from "react-router-dom";

export default function Card({title, icon}) {
  return (
    <Link className="card" id="card-element" to={`/item/${title?.toLowerCase()}`} data-value="0">
      <h1 className="card-img">{icon}</h1>
      <h4 className="card-title">{title}</h4>
    </Link>
  );
}
