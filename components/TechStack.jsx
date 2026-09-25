"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { techStack } from "@/data/techStack";
import {
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiGit,
  SiGithub,
  SiVercel,
} from "react-icons/si";

const iconMap = {
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiGit,
  SiGithub,
  SiVercel,
};

export default function TechStack() {
  const { t, language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { id: "all", label: t.tech.categories.all },
    { id: "frontend", label: t.tech.categories.frontend },
    { id: "styling", label: t.tech.categories.styling },
    { id: "ecosystem", label: t.tech.categories.ecosystem },
  ];

  const filteredTech =
    activeFilter === "all"
      ? techStack
      : techStack.filter((item) => item.category === activeFilter);

  return (
    <div className="mb-20">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 mb-3"
        >
          {t.tech.badge}
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight"
        >
          {t.tech.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto"
        >
          {t.tech.subtitle}
        </motion.p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex justify-center flex-wrap gap-2 mb-8">
        {categories.map((cat) => {
          const isActive = activeFilter === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/25"
                  : "bg-white/60 dark:bg-zinc-800/60 hover:bg-white dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200/80 dark:border-zinc-700/60"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Grid of Technology Cards (Reference styling: dark/glass background, rounded bordered cards, colored icon on top, label below, hover lift and glow) */}
      <motion.div
        layout
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
      >
        {filteredTech.map((item, index) => {
          const IconComponent = iconMap[item.icon] || SiReact;
          const desc = item.description[language] || item.description.uz;

          return (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
              whileHover={{
                y: -6,
                scale: 1.03,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.97 }}
              className="group relative p-5 rounded-2xl bg-white/70 dark:bg-zinc-900/80 border border-zinc-200/80 dark:border-zinc-800 backdrop-blur-xl shadow-sm hover:shadow-xl hover:border-indigo-500/40 dark:hover:border-indigo-500/40 transition-all duration-300 flex flex-col items-center text-center cursor-default overflow-hidden"
            >
              {/* Subtle hover glow behind card */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                style={{
                  background: `radial-gradient(circle at 50% 30%, ${item.bgColor} 0%, transparent 70%)`,
                }}
              />

              {/* Top Colored Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: item.bgColor }}
              >
                <IconComponent
                  size={28}
                  style={{
                    color: item.id === "nextjs" ? undefined : item.color,
                  }}
                  className={item.id === "nextjs" ? "text-zinc-900 dark:text-white" : ""}
                />
              </div>

              {/* Label Below */}
              <h3 className="text-sm font-bold text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {item.name}
              </h3>

              {/* Mini Tag / Proficiency */}
              <span className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400 mt-1">
                {item.proficiency}
              </span>

              {/* Tooltip / Short description on hover */}
              <p className="mt-2 text-[11px] text-zinc-500 dark:text-zinc-400 line-clamp-2 leading-tight">
                {desc}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
