import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Footer() {
  const [email, setEmail] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    axios.post("http://localhost:4000/forwardmail", {
      sendMailTo: email,
      type: "register" 
    });
    alert('Registered successfully')
    setEmail("")
  }

  return (
    <footer>
      <div className="top-footer">
        <h2 className="title_blue">Get Updates</h2>
        <p className="title_gray">
          Register to the newsletter to get the updates of the latest amazing
          tools
        </p>
        <div className="subscribe">
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">SUBSCRIBE</button>
          </form>
        </div>
      </div>
      <hr className="hr" />
      <div className="bottom-footer">
        <div className="footer-content">
          <h2 className="title_blue">Any tool to suggest?</h2>
          <p className="title_gray">
            Submit your best free design resources! <br />
            Your website is already listed, but you want to make it more
            visible?{" "}
            <span>
              <Link to="/upgrade">Upgrade it!</Link>
            </span>
          </p>
        </div>
        <Link className="submit-btn" to="/submit">
          SUBMIT
        </Link>
      </div>
    </footer>
  );
}
