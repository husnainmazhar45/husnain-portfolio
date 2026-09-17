"use client";

import React from "react";
import { useTheme } from "./ThemeContext";

export function FloatingThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={toggleTheme}
        className="interactive-element flex items-center gap-2.5 px-4 py-2.5 rounded-full shadow-xl border border-stone-300 dark:border-stone-700 bg-stone-50/95 dark:bg-stone-900/95 backdrop-blur-md text-stone-900 dark:text-stone-100 font-mono text-xs hover:border-amber-800 dark:hover:border-amber-400 transition-all group"
        title="Toggle Light / Dark Theme"
      >
        <span className="w-2 h-2 rounded-full bg-amber-700 dark:bg-amber-400 animate-pulse"></span>
        <span className="text-sm">{isDark ? "☼" : "☾"}</span>
        <span className="font-medium tracking-widest uppercase">
          {isDark ? "LIGHT MODE" : "DARK MODE"}
        </span>
      </button>
    </div>
  );
}
