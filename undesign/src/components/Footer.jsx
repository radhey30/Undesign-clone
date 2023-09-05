import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="top-footer">
        <h2 className="title_blue">Get Updates</h2>
        <p className="title_gray">
          Register to the newsletter to get the updates of the latest amazing
          tools
        </p>
        <div className="subscribe">
          <form action="#">
            <input type="email" placeholder="Email address" required />
            <button type="submit">
              SUBSCRIBE
            </button>
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
              <a href="submit.html">Upgrade it!</a>
            </span>
          </p>
        </div>
        <a className="submit-btn" href="submit.html">
          SUBMIT
        </a>
      </div>
    </footer>
  );
}
