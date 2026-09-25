"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle() {
  const { theme, toggleTheme, isDark, mounted } = useTheme();

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-full bg-zinc-200/50 dark:bg-zinc-800/50 animate-pulse" />
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      title={isDark ? "Yorug' rejimga o'tish" : "Tungi rejimga o'tish"}
      className="relative p-2 rounded-full border transition-all duration-200 bg-white/70 dark:bg-zinc-800/80 hover:bg-white dark:hover:bg-zinc-800 border-zinc-200/80 dark:border-zinc-700/80 text-zinc-700 dark:text-zinc-200 shadow-sm backdrop-blur-md cursor-pointer flex items-center justify-center overflow-hidden"
    >
      <motion.div
        initial={false}
        animate={{
          scale: isDark ? 1 : 0,
          rotate: isDark ? 0 : 90,
          opacity: isDark ? 1 : 0,
        }}
        transition={{ duration: 0.25 }}
        className="text-amber-400 absolute"
      >
        <FiSun size={17} />
      </motion.div>

      <motion.div
        initial={false}
        animate={{
          scale: !isDark ? 1 : 0,
          rotate: !isDark ? 0 : -90,
          opacity: !isDark ? 1 : 0,
        }}
        transition={{ duration: 0.25 }}
        className="text-indigo-600"
      >
        <FiMoon size={17} />
      </motion.div>
    </motion.button>
  );
}
