import React, { createContext, useState } from "react";

export const themeContext = createContext(null);
export default function ThemeContext({ children }) {
  const [darkTheme, setDarkTheme] = useState(true);
  function handleClick() {
    setDarkTheme((prev) => !prev);
    document.body.classList.toggle("light", darkTheme)
  }

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
