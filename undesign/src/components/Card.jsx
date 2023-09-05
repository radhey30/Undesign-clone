import React from "react";
import { Link } from "react-router-dom";

export default function Card() {
  return (
    <Link className="card" id="card-element" to="/item" data-value="0">
      <h1 className="card-img">💡</h1>
      <h4 className="card-title">Inspiration</h4>
    </Link>
  );
}
