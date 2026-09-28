"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { projects } from "@/data/projects";
import TechStack from "./TechStack";
import ProjectModal from "./ProjectModal";
import {
  FiExternalLink,
  FiGithub,
  FiEye,
  FiInfo,
  FiCheckCircle,
  FiActivity,
  FiLayers,
  FiPlay,
} from "react-icons/fi";

export default function ProjectsSection() {
  const { t, language } = useLanguage();
  const [selectedProject, setSelectedProject] = useState(null);

  // Single or multiple projects
  const mainProject = projects[0];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Top Part: Technologies & Cloud Platforms Grid (Texnologiyalar & Bulutli Platformalar) */}
        <TechStack />

        {/* Separator Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-200 dark:via-zinc-800 to-transparent my-16" />

        {/* Second Part: Mening Loyihalarim (My Projects) Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 mb-3"
          >
            {t.projects.badge}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight"
          >
            {t.projects.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto"
          >
            {t.projects.subtitle}
          </motion.p>
        </div>

        {/* Flagship Project Showcase */}
        {mainProject && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-3xl bg-white/70 dark:bg-zinc-900/80 border border-zinc-200/80 dark:border-zinc-800 backdrop-blur-xl shadow-xl hover:shadow-2xl hover:border-indigo-500/40 dark:hover:border-indigo-500/40 transition-all duration-300 overflow-hidden"
          >
            {/* Top decorative gradient glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-500/10 via-cyan-500/10 to-transparent blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
              {/* Left Column: Visual Browser Mockup Preview */}
              <div className="lg:col-span-6 bg-zinc-950 flex flex-col justify-between p-6 sm:p-8 relative overflow-hidden group">
                {/* Browser top chrome */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10 relative z-10">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-500" />
                    <span className="w-3 h-3 rounded-full bg-amber-400" />
                    <span className="w-3 h-3 rounded-full bg-emerald-400" />
                  </div>
                  <div className="px-3 py-1 rounded-md bg-white/10 text-white/80 font-mono text-[11px] truncate max-w-[200px]">
                    https://srm-sistema.vercel.app/
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-mono">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Live</span>
                  </div>
                </div>

                {/* Central Visual Showcase Banner */}
                <div className="relative py-12 sm:py-16 flex flex-col items-center justify-center text-center z-10">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-cyan-500 via-indigo-600 to-purple-600 p-[2px] shadow-2xl mb-4 group-hover:scale-105 transition-transform duration-300">
                    <div className="w-full h-full rounded-[14px] bg-zinc-950 flex items-center justify-center text-white">
                      <span className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                        SRM
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
                    {mainProject.title[language] || mainProject.title.uz}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-zinc-400 max-w-sm font-mono">
                    Students • Groups • Teachers • Payments • Leads
                  </p>

                  {/* Direct Launch Result Button on Banner */}
                  <motion.a
                    href={mainProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white font-bold text-xs sm:text-sm shadow-lg shadow-indigo-500/30 flex items-center gap-2 cursor-pointer transition-all"
                  >
                    <FiPlay className="text-emerald-300 fill-emerald-300" size={14} />
                    <span>{t.projects.viewProject}</span>
                    <FiExternalLink size={14} />
                  </motion.a>
                </div>

                {/* Bottom stats inside mockup */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-400 relative z-10">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <FiActivity size={14} />
                    <span>Score: 99/100</span>
                  </span>
                  <span>React + Redux Toolkit</span>
                </div>
              </div>

              {/* Right Column: Detailed Info, Features & Action Buttons */}
              <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  {/* Category & Status Badges */}
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                      <span>{mainProject.stats.status}</span>
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                      {mainProject.stats.type}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white leading-tight">
                    {mainProject.title[language] || mainProject.title.uz}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    {mainProject.shortDescription[language] || mainProject.shortDescription.uz}
                  </p>

                  {/* Key Highlights / Features */}
                  <div className="mt-5 space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 flex items-center gap-1.5">
                      <FiCheckCircle className="text-emerald-500" />
                      <span>{t.projects.featuresTitle}</span>
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                      {(mainProject.features[language] || mainProject.features.uz).slice(0, 4).map((feat, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 p-2 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200/60 dark:border-zinc-800 text-xs text-zinc-700 dark:text-zinc-300"
                        >
                          <span className="text-emerald-500 font-bold">•</span>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Tags */}
                  <div className="mt-5">
                    <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 flex items-center gap-1.5 mb-2">
                      <FiLayers className="text-indigo-500" />
                      <span>{t.projects.techUsed}</span>
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {mainProject.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-lg text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200/80 dark:border-zinc-700/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Primary Action Buttons (Result, GitHub, Details) */}
                <div className="mt-8 pt-6 border-t border-zinc-200/70 dark:border-zinc-800 flex flex-wrap items-center gap-3">
                  {/* 1. Natijani Ko'rish (Open Live SRM System directly in new tab) */}
                  <motion.a
                    href={mainProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex-1 min-w-[170px] px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2 cursor-pointer transition-all"
                  >
                    <span>{t.projects.viewProject}</span>
                    <FiExternalLink size={15} />
                  </motion.a>

                  {/* 2. GitHub Kodlarini Olish (Open GitHub repo in new tab) */}
                  <motion.a
                    href={mainProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm text-zinc-800 dark:text-zinc-100 bg-white dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 border border-zinc-200 dark:border-zinc-700 shadow-sm flex items-center justify-center gap-2 cursor-pointer transition-colors"
                  >
                    <FiGithub size={16} />
                    <span>{t.projects.viewCode}</span>
                  </motion.a>

                  {/* 3. Batafsil Ma'lumot (Open Detailed Modal) */}
                  <motion.button
                    onClick={() => setSelectedProject(mainProject)}
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="p-3 rounded-xl text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 bg-zinc-100/80 dark:bg-zinc-800/80 hover:bg-zinc-200 dark:hover:bg-zinc-700 border border-zinc-200/80 dark:border-zinc-700/80 cursor-pointer transition-colors"
                    title={t.projects.viewDetails}
                    aria-label={t.projects.viewDetails}
                  >
                    <FiInfo size={18} />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Interactive Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
