import React, { useEffect, useState } from "react";
import axios from "axios";
import logo from "../logo.png";
import { Link, useParams } from "react-router-dom";
import Footer from "./Footer";
import PageNotFound from "./PageNotFound";

export default function ItemPage() {
  const [resourceData, setResourceData] = useState([]);
  const [redirect, setRedirect] = useState(false);
  const { itemName } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:4000/${itemName}`)
      .then((res) => {
        if (res.data.length > 0) setResourceData(res.data);
        else setRedirect(true);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  if (redirect) return <PageNotFound />;

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
          <h1 className="title-img">{resourceData[0]?.icon}</h1>
          <h2 className="title-header">{resourceData[0]?.title}</h2>
          <p className="title-info">sdlfjslfjlsd</p>
        </div>
        <div className="resources">
          {resourceData[0]?.resources.map((item, idx) => {
            return (
              <a key={idx} className="resource">
                <div className="resource-logo">
                  <img src="https://collectui.com/img/favicon.ico" alt="logo" />
                </div>
                <div className="resource-info">
                  <h3 className="info-header">{item.title}</h3>
                  <p className="info-info">{item.img}</p>
                </div>
              </a>
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
}
