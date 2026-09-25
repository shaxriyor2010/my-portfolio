"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage, languages } from "@/context/LanguageContext";
import { FiGlobe, FiChevronDown, FiCheck } from "react-icons/fi";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const currentLang = languages.find((l) => l.code === language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Tilni tanlash / Select language"
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium border transition-all duration-200 bg-white/70 dark:bg-zinc-800/80 hover:bg-white dark:hover:bg-zinc-800 border-zinc-200/80 dark:border-zinc-700/80 text-zinc-700 dark:text-zinc-200 shadow-sm backdrop-blur-md cursor-pointer"
      >
        <span className="text-base leading-none">{currentLang.flag}</span>
        <span className="font-semibold tracking-wide uppercase">{currentLang.code}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-zinc-400 dark:text-zinc-500"
        >
          <FiChevronDown size={14} />
        </motion.span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute right-0 mt-2 w-44 py-1.5 rounded-2xl bg-white/90 dark:bg-zinc-900/95 border border-zinc-200/80 dark:border-zinc-700/80 shadow-xl backdrop-blur-xl z-50 overflow-hidden"
          >
            <div className="px-3 py-1.5 text-[11px] font-semibold tracking-wider uppercase text-zinc-400 dark:text-zinc-500 border-b border-zinc-100 dark:border-zinc-800 flex items-center gap-1.5">
              <FiGlobe size={12} />
              <span>Tilni tanlang / Language</span>
            </div>

            <div className="py-1">
              {languages.map((lang) => {
                const isActive = lang.code === language;
                return (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 text-left text-xs sm:text-sm transition-all duration-150 cursor-pointer ${
                      isActive
                        ? "bg-indigo-50/80 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 font-semibold"
                        : "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100/70 dark:hover:bg-zinc-800/60"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-base">{lang.flag}</span>
                      <span>{lang.label}</span>
                    </div>
                    {isActive && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="text-indigo-600 dark:text-indigo-400"
                      >
                        <FiCheck size={14} />
                      </motion.span>
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
