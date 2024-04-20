
import React from "react";

const ThemeToggle = ({ theme, toggleTheme }) => {
  const icon = theme === "dark" ? "☀️" : "🌙";

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-600"
    >
      <span className="text-2xl">{icon}</span>
    </button>
  );
};

export default ThemeToggle;
