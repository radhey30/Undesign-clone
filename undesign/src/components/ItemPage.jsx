import React, { useEffect, useState } from "react";
import axios from "axios";
import logo from "../logo.png";
import { Link, useParams } from "react-router-dom";
import Footer from "./Footer";
import PageNotFound from "./PageNotFound";
import SearchResults from "./SearchResults";

export default function ItemPage({ handleSearchChange, display, resources }) {
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
          <div className="searchDiv">
            <input
              type="text"
              placeholder="Search..."
              onChange={handleSearchChange}
            />
            <SearchResults display={display} resources={resources} />
          </div>
        </div>
      </nav>
      <main className="main-item">
        <div className="title">
          <h1 className="title-img">{resourceData[0]?.icon}</h1>
          <h2 className="title-header">{resourceData[0]?.header}</h2>
          <p className="title-info">{resourceData[0]?.description}</p>
        </div>
        <div className="resources">
          {resourceData[0]?.cards.map((item, idx) => {
            return (
              <a
                key={idx}
                target="_blank"
                className="resource"
                href={item.link}
              >
                <div className="resource-logo">
                  <img
                    src={
                      item.logo ||
                      "https://static.thenounproject.com/png/36918-200.png"
                    }
                    alt="logo"
                  />
                </div>
                <div className="resource-info">
                  <h3 className="info-header">{item.name}</h3>
                  <p className="info-info">{item.info}</p>
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
