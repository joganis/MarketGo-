// src/components/ThemeToggle.jsx
import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(AppContext);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button onClick={toggleTheme}>
      Cambiar a {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
};

export default ThemeToggle;
