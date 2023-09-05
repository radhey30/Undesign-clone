import React, { useEffect, useState } from "react";
import axios from "axios";
import logo from "../logo.png";
import { Link } from "react-router-dom";

export default function ItemPage() {
  const [resourceData, setResourceData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000")
      .then((res) => {
        setResourceData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      <nav className="nav-item">
        <div className="left-nav">
          <Link to="/">&larr; Back</Link>
        </div>
        <div className="middle-nav">
          <Link to="/">
            <img src={logo} alt="undesign logo" />
          </Link>
        </div>
        <div className="right-nav">
          <input type="text" placeholder="Search..." />
        </div>
      </nav>
      <main className="main-item">
        <div className="title">
          <h1 className="title-img"></h1>
          <h2 className="title-header">Header</h2>
          <p className="title-info">sdlfjslfjlsd</p>
        </div>
        <div className="resources">
          <a className="resource">
            <div className="resource-logo">
              <img src="https://collectui.com/img/favicon.ico" alt="logo" />
            </div>
            <div className="resource-info">
              <h3 className="info-header">title one</h3>
              <p className="info-info">Hello there Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet. Dolore, beatae.</p>
            </div>
          </a>
          <a className="resource">
            <div className="resource-logo">
              <img src="https://collectui.com/img/favicon.ico" alt="logo" />
              
            </div>
            <div className="resource-info">
              <h3 className="info-header">title one</h3>
              <p className="info-info">Hello there Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
            </div>
          </a>
        </div>
      </main>
    </>
  );
}
