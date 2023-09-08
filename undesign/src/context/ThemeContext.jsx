import React, { createContext, useEffect, useState } from "react";
export const themeContext = createContext(null);
export default function ThemeContext({ children }) {
  const [darkTheme, setDarkTheme] = useState(
    localStorage.getItem("darkmode") === "true" ? true : false
  );
  function handleClick() {
    setDarkTheme((prev) => !prev);
    document.body.classList.toggle("light", darkTheme);
  }
  useEffect(() => {
    localStorage.setItem("darkmode", darkTheme);
  });

  useEffect(() => {
    if (darkTheme) document.body.classList.remove("light");
    else document.body.classList.add("light");
  }, []);

  return (
    <themeContext.Provider value={{ darkTheme, setDarkTheme }}>
      {children}
      <button
        className={darkTheme ? "theme-btn light" : "theme-btn"}
        onClick={handleClick}
        title="Theme"
      >
        <i
          className={
            darkTheme ? "fa-solid fa-lightbulb" : "fa-regular fa-lightbulb"
          }
        ></i>
      </button>
    </themeContext.Provider>
  );
}
