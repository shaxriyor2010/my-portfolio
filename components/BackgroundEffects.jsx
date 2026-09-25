"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function BackgroundEffects() {
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dynamic Cursor Spotlight Effect */}
      <div
        className="fixed w-[600px] h-[600px] rounded-full transition-opacity duration-500 opacity-20 dark:opacity-25 blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          background:
            "radial-gradient(circle, rgba(99, 102, 241, 0.25) 0%, rgba(56, 189, 248, 0.15) 45%, transparent 70%)",
        }}
      />

      {/* Floating Ambient Orb 1 - Violet/Cyan (Top Left) */}
      <motion.div
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-32 -left-32 w-96 h-96 sm:w-[500px] sm:h-[500px] rounded-full bg-gradient-to-tr from-cyan-500/15 via-indigo-500/20 to-purple-600/15 blur-[100px] dark:from-cyan-500/20 dark:via-indigo-600/25 dark:to-purple-700/20"
      />

      {/* Floating Ambient Orb 2 - Emerald/Sky (Center Right) */}
      <motion.div
        animate={{
          x: [0, -50, 30, 0],
          y: [0, 40, -30, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 -right-32 w-96 h-96 sm:w-[550px] sm:h-[550px] rounded-full bg-gradient-to-bl from-emerald-500/15 via-teal-500/15 to-blue-600/15 blur-[110px] dark:from-emerald-500/15 dark:via-teal-600/20 dark:to-blue-700/20"
      />

      {/* Floating Ambient Orb 3 - Fuchsia/Rose (Bottom Left) */}
      <motion.div
        animate={{
          x: [0, 30, -30, 0],
          y: [0, -40, 30, 0],
          scale: [1, 1.2, 1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-10 left-1/4 w-80 h-80 sm:w-[480px] sm:h-[480px] rounded-full bg-gradient-to-r from-fuchsia-500/10 via-pink-500/10 to-indigo-600/10 blur-[100px] dark:from-fuchsia-600/15 dark:via-purple-600/15 dark:to-indigo-700/15"
      />

      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />
    </div>
  );
}
