"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import {
  FiArrowRight,
  FiMail,
} from "react-icons/fi";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";

function TypewriterText({ roles }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = roles[roleIndex] || roles[0] || "";
    let timer;

    if (!isDeleting) {
      if (text.length < currentFullText.length) {
        timer = setTimeout(() => {
          setText(currentFullText.slice(0, text.length + 1));
        }, 80);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 1800);
      }
    } else {
      if (text.length > 0) {
        timer = setTimeout(() => {
          setText(currentFullText.slice(0, text.length - 1));
        }, 40);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 100);
      }
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex, roles]);

  return (
    <div className="h-10 sm:h-12 flex items-center mt-3 text-lg sm:text-2xl font-semibold text-zinc-700 dark:text-zinc-300">
      <span className="text-indigo-600 dark:text-indigo-400 mr-2">&lt;/&gt;</span>
      <span>{text}</span>
      <span className="w-[3px] h-6 bg-indigo-500 ml-1 animate-pulse" />
    </div>
  );
}

export default function Hero() {
  const { t, language } = useLanguage();

  const roles = t.hero?.roles || [
    "Frontend Dasturchiman",
    "React.js & Next.js Mutaxassisiman",
    "Zamonaviy Veb Developeriman",
  ];

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Hero Text & Actions */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left z-10">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium border bg-emerald-500/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-400 mb-6 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{t.hero.status}</span>
          </motion.div>

          {/* Heading / Developer Introduction */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-[1.15]"
          >
            <span className="text-zinc-600 dark:text-zinc-400 font-medium text-2xl sm:text-3xl block mb-1">
              {t.hero.greeting}
            </span>
            <span className="bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
              {t.hero.name}
            </span>
          </motion.h1>

          {/* Animated Typewriter Tagline (keyed by language for clean remount) */}
          <TypewriterText key={language} roles={roles} />

          {/* Short Bio / Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed"
          >
            {t.hero.description}
          </motion.p>

          {/* Tech Stack Pills in Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-wrap gap-2 justify-center lg:justify-start mt-6"
          >
            {["Next.js", "React.js", "Tailwind CSS", "JavaScript", "HTML5 & CSS3"].map(
              (item, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200/80 dark:border-zinc-700/60 text-zinc-700 dark:text-zinc-300"
                >
                  {item}
                </span>
              )
            )}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-3.5 mt-8 w-full sm:w-auto"
          >
            {/* "Loyihalarim" Button */}
            <motion.a
              href="#projects"
              onClick={(e) => scrollToSection(e, "projects")}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <span>{t.hero.ctaProjects}</span>
              <FiArrowRight size={16} />
            </motion.a>

            {/* "Bog'lanish" Button */}
            <motion.a
              href="#contact"
              onClick={(e) => scrollToSection(e, "contact")}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm text-zinc-800 dark:text-zinc-100 bg-white/80 dark:bg-zinc-900/80 hover:bg-white dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 shadow-sm backdrop-blur-md flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <FiMail size={16} className="text-indigo-500" />
              <span>{t.hero.ctaContact}</span>
            </motion.a>
          </motion.div>

          {/* Quick Metrics Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-3 gap-4 sm:gap-8 mt-10 pt-8 border-t border-zinc-200/80 dark:border-zinc-800/80 w-full max-w-lg"
          >
            <div className="text-center lg:text-left">
              <span className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white block">
                2+
              </span>
              <span className="text-xs text-zinc-500 dark:text-zinc-400">
                {t.hero.stats.experience}
              </span>
            </div>
            <div className="text-center lg:text-left">
              <span className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-cyan-500 to-indigo-500 bg-clip-text text-transparent block">
                15+
              </span>
              <span className="text-xs text-zinc-500 dark:text-zinc-400">
                {t.hero.stats.projectsCount}
              </span>
            </div>
            <div className="text-center lg:text-left">
              <span className="text-2xl sm:text-3xl font-extrabold text-emerald-500 block">
                100%
              </span>
              <span className="text-xs text-zinc-500 dark:text-zinc-400">
                {t.hero.stats.satisfaction}
              </span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Interactive Profile Card with Orbit Badges */}
        <div className="lg:col-span-5 flex justify-center items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            {/* Decorative Glowing Rings */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-cyan-500/20 via-indigo-500/30 to-purple-600/20 blur-2xl -z-10 animate-pulse" />

            {/* Profile Glass Card */}
            <div className="relative w-72 sm:w-84 p-6 rounded-3xl bg-white/70 dark:bg-zinc-900/70 border border-zinc-200/80 dark:border-zinc-800/80 backdrop-blur-xl shadow-2xl">
              {/* Inner Avatar Graphic */}
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-tr from-zinc-900 via-indigo-950 to-zinc-900 flex flex-col items-center justify-center p-6 border border-white/10 group">
                <div className="w-28 h-28 rounded-2xl bg-gradient-to-tr from-cyan-500 via-indigo-600 to-purple-600 p-[2px] shadow-xl">
                  <div className="w-full h-full rounded-[14px] bg-zinc-950 flex flex-col items-center justify-center text-white">
                    <span className="text-3xl font-black tracking-tight bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      SU
                    </span>
                    <span className="text-[10px] font-mono text-zinc-400 mt-1">
                      DEV
                    </span>
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <h3 className="text-base font-bold text-white tracking-wide">
                    Shaxriyorbek Usmonov
                  </h3>
                  <p className="text-xs text-indigo-300 font-mono mt-0.5">
                    @usmonov_o26
                  </p>
                </div>

                {/* Code snippets preview inside avatar card */}
                <div className="w-full mt-4 p-2.5 rounded-xl bg-black/60 border border-white/10 text-left font-mono text-[11px] text-zinc-300 space-y-1">
                  <div className="flex items-center gap-1.5 text-zinc-500 text-[10px]">
                    <span className="w-2 h-2 rounded-full bg-rose-500 inline-block" />
                    <span className="w-2 h-2 rounded-full bg-amber-500 inline-block" />
                    <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                    <span className="ml-1 text-[9px]">developer.js</span>
                  </div>
                  <p className="text-emerald-400">const role = &apos;Fullstack&apos;;</p>
                  <p className="text-cyan-400">const passion = &apos;Clean UI/UX&apos;;</p>
                </div>
              </div>

              {/* Floating Tech Badges around card */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-3 -right-3 px-3 py-2 rounded-xl bg-white/90 dark:bg-zinc-800/90 border border-zinc-200 dark:border-zinc-700 shadow-lg backdrop-blur-md flex items-center gap-2"
              >
                <SiReact className="text-[#61DAFB] text-lg animate-spin" style={{ animationDuration: "12s" }} />
                <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">
                  React
                </span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-3 -left-3 px-3 py-2 rounded-xl bg-white/90 dark:bg-zinc-800/90 border border-zinc-200 dark:border-zinc-700 shadow-lg backdrop-blur-md flex items-center gap-2"
              >
                <SiNextdotjs className="text-zinc-900 dark:text-white text-lg" />
                <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">
                  Next.js
                </span>
              </motion.div>

              <motion.div
                animate={{ x: [0, 6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-1/2 -right-6 px-2.5 py-1.5 rounded-xl bg-white/90 dark:bg-zinc-800/90 border border-zinc-200 dark:border-zinc-700 shadow-lg backdrop-blur-md flex items-center gap-1.5"
              >
                <SiTailwindcss className="text-[#06B6D4] text-base" />
                <span className="text-[11px] font-semibold text-zinc-800 dark:text-zinc-200">
                  Tailwind
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
