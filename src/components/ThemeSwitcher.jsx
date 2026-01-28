import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const ThemeSwitcher = () => {
  const context = useContext(ThemeContext);
  if (!context) return null;

  const { theme, setTheme } = context;

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="flex items-center gap-2 px-6 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-bold transition-all hover:scale-105 active:scale-95"
    >
      {theme === "light" ? (
        <>
          <span className="text-lg">🌙</span>
          Dark Mode
        </>
      ) : (
        <>
          <span className="text-lg">☀️</span>
          Light Mode
        </>
      )}
    </button>
  );
};

export default ThemeSwitcher;
