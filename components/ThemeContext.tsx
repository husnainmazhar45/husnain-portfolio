"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("hm_portfolio_theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialDark = savedTheme ? savedTheme === "dark" : systemPrefersDark;

    setIsDark(initialDark);
    applyTheme(initialDark);
    setMounted(true);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem("hm_portfolio_theme")) {
        setIsDark(e.matches);
        applyTheme(e.matches);
      }
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const applyTheme = (dark: boolean) => {
    const html = document.documentElement;
    const metaThemeColor = document.getElementById("meta-theme-color");
    if (dark) {
      html.classList.add("dark");
      metaThemeColor?.setAttribute("content", "#11100E");
      localStorage.setItem("hm_portfolio_theme", "dark");
    } else {
      html.classList.remove("dark");
      metaThemeColor?.setAttribute("content", "#FAF8F5");
      localStorage.setItem("hm_portfolio_theme", "light");
    }
  };

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    applyTheme(newDark);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
