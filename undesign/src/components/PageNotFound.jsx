import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  useEffect(() => {
    document.querySelector(".theme-btn").style.display = "none";
    return () => {
      document.querySelector(".theme-btn").style.display = "flex";
    };
  });
  return (
    <div
      style={{
        textAlign: "center",
        display: "grid",
        placeItems: "center",
        height: "100vh",
        backgroundColor: "#000",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          maxWidth: "500px",
          backgroundColor: "#fff",
          color: "#000",
          padding: "2rem",
          borderRadius: "1rem",
          fontFamily: "sans-serif",
          textAlign: "left",
        }}
      >
        <h1>Page Not Found</h1>
        <p>
          Looks like you've followed a broken link or entered a URL that doesn't
          exist on this site.
        </p>
        <Link to="/">Go Home</Link>
      </div>
    </div>
  );
}
