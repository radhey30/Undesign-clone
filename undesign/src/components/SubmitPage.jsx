import React, { useState } from "react";
import logo from "../logo.png";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";

export default function SubmitPage() {
  const [url, setUrl] = useState("");
  const [email, setEmail] = useState("");
  const [redirect, setRedirect] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("http://localhost:4000/forwardmail", {
        sendMailTo: email,
        urlString: url,
        type: "submit"
      })
      .then((data) => {
        alert("Mail sent");
        setUrl("");
        setEmail("");
        setRedirect(true);
      })
      .catch((err) => console.error(err));
  }

  if (redirect) {
    return <Navigate to="/" />;
  }
  return (
    <main className="main-submit">
      <div className="container">
        <div className="top-container">
          <Link to="/">
            <img src={logo} alt="undesign" />
            <h2 className="link-title">Undesign</h2>
          </Link>
        </div>
        <div className="bottom-container">
          <h1 className="container-title">Add a new resource</h1>
          <p className="container-text">
            Submit your free resource. It will go through a review process
            before being published.
          </p>
          <form autoComplete="off" onSubmit={handleSubmit}>
            <label>
              Url of the resource <br />
              <input
                type="text"
                placeholder="https://www.abc.com"
                required
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </label>
            <label>
              Email (to recieve notification)
              <br />
              <input
                type="email"
                placeholder="xyz@gmail.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </main>
  );
}
