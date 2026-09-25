"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

function applyThemeToDOM(newTheme) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  if (newTheme === "dark") {
    root.classList.add("dark");
    root.classList.remove("light");
    root.setAttribute("data-theme", "dark");
    root.style.colorScheme = "dark";
  } else {
    root.classList.remove("dark");
    root.classList.add("light");
    root.setAttribute("data-theme", "light");
    root.style.colorScheme = "light";
  }
}

const ThemeContext = createContext({
  theme: "dark",
  toggleTheme: () => {},
  setTheme: () => {},
  isDark: true,
  mounted: false,
});

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        const savedTheme = localStorage.getItem("portfolio_theme");
        if (savedTheme === "light" || savedTheme === "dark") {
          setThemeState(savedTheme);
          applyThemeToDOM(savedTheme);
        } else {
          setThemeState("dark");
          applyThemeToDOM("dark");
        }
      } catch (e) {
        applyThemeToDOM("dark");
      }
      setMounted(true);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  const setTheme = useCallback((newTheme) => {
    setThemeState(newTheme);
    applyThemeToDOM(newTheme);
    try {
      localStorage.setItem("portfolio_theme", newTheme);
    } catch (e) {}
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, [setTheme]);

  const isDark = theme === "dark";

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme, isDark, mounted }}>
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
