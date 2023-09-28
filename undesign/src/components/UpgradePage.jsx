import React, { useState } from "react";
import logo from "../logo.png";
import { Link, Navigate } from "react-router-dom";

export default function UpgradePage() {
  const [redirect, setRedirect] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    setRedirect(true);
  }
  if (redirect) {
    return <Navigate to="/" />;
  }
  return (
    <main className="main-upgrade">
      <div className="container">
        <div className="top-container">
          <Link to="/">
            <img src={logo} alt="undesign" />
            <h2 className="link-title">Undesign</h2>
          </Link>
        </div>
        <div className="bottom-container">
          <h1 className="container-title">Get more traffic</h1>
          <p className="container-text">
            Get more traffic by improving your visibility for 2000rs (life time
            deal)
          </p>
          <div className="features">
            <div className="feature">
              <i className="fa-solid fa-circle-check"></i>
              SEO Backlink
            </div>
            <div className="feature">
              <i className="fa-solid fa-circle-check"></i>
              Get featured on the homepage
            </div>
            <div className="feature">
              <i className="fa-solid fa-circle-check"></i>
              Get featured in the newsletter
            </div>
            <div className="feature">
              <i className="fa-solid fa-circle-check"></i>
              Get the super undesigner badge
            </div>
            <div className="feature">
              <i className="fa-solid fa-circle-check"></i>
              Appear first
            </div>
            <div className="feature">
              <i className="fa-solid fa-circle-check"></i>
              Support an independent creator
            </div>
          </div>
          <form autoComplete="off" onSubmit={handleSubmit}>
            <label>
              Name of the resource <br />
              <input type="text" placeholder="Search..." required />
            </label>
            <input type="submit" value="Checkout" />
          </form>
          <div className="extras">
            <div>
              <i className="fa-solid fa-lock"></i>{" "}
              <p>Payments securely processed</p>{" "}
            </div>
            <div>
              <i className="fa-solid fa-face-smile"></i>{" "}
              <p>14 days money-back guarantee</p>{" "}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
