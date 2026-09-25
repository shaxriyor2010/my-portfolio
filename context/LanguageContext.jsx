"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations } from "@/data/translations";

export const languages = [
  { code: "uz", name: "O'zbek", flag: "🇺🇿", label: "O'zbekcha" },
  { code: "en", name: "English", flag: "🇬🇧", label: "English" },
  { code: "ru", name: "Русский", flag: "🇷🇺", label: "Русский" },
];

const LanguageContext = createContext({
  language: "uz",
  setLanguage: () => {},
  t: translations.uz,
  languages,
  mounted: false,
});

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState("uz");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        const savedLang = localStorage.getItem("portfolio_lang");
        if (savedLang && (savedLang === "uz" || savedLang === "en" || savedLang === "ru")) {
          setLanguageState(savedLang);
        }
      } catch (e) {
        // Safe fallback
      }
      setMounted(true);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  const setLanguage = (newLang) => {
    setLanguageState(newLang);
    try {
      localStorage.setItem("portfolio_lang", newLang);
    } catch (e) {}
  };

  const t = translations[language] || translations.uz;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, languages, mounted }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
