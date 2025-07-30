"use client";

import { useTheme } from "../../hooks";

export default function ToggleMode() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="btn-outline-danger border-0 rounded-md transition-transform hover:translate-x-[-5px] hover:translate-y-[-5px] hover:shadow-[4px_4px_0_0_theme(colors.danger)]"
      onClick={toggleTheme}
    >
      {theme ? "🌞" : "🌑"}
    </button>
  );
}
