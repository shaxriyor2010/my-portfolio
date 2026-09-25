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
  FiLayers,
  FiArrowUpRight,
} from "react-icons/fi";

export default function ProjectsSection() {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { id: "all", label: t.projects.filterAll },
    { id: "nextjs", label: t.projects.filterNext },
    { id: "react", label: t.projects.filterReact },
    { id: "fullstack", label: t.projects.filterFullstack },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

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

          {/* Filter Pills */}
          <div className="flex justify-center flex-wrap gap-2 mt-8">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25 scale-105"
                      : "bg-white/70 dark:bg-zinc-900/70 hover:bg-white dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200/80 dark:border-zinc-800 backdrop-blur-md"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => {
              const title = project.title[language] || project.title.uz;
              const shortDesc =
                project.shortDescription[language] ||
                project.shortDescription.uz;

              return (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  whileHover={{ y: -8 }}
                  className="group relative rounded-3xl bg-white/70 dark:bg-zinc-900/80 border border-zinc-200/80 dark:border-zinc-800 backdrop-blur-xl shadow-sm hover:shadow-2xl hover:shadow-indigo-500/10 hover:border-indigo-500/40 dark:hover:border-indigo-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  {/* Top Thumbnail Preview Area with Mockup Chrome */}
                  <div className="relative h-48 w-full overflow-hidden bg-zinc-950 flex flex-col">
                    {/* Mockup browser bar */}
                    <div className="w-full px-4 py-2.5 bg-zinc-900/90 border-b border-white/10 flex items-center justify-between z-10">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <span className="text-[10px] font-mono text-zinc-400 truncate max-w-[150px]">
                        {project.id}.portfolio.uz
                      </span>
                      <span className="w-2.5" />
                    </div>

                    {/* Gradient visual banner with zoom on hover */}
                    <div
                      className={`relative flex-1 bg-gradient-to-tr ${project.previewGradient} flex flex-col items-center justify-center p-6 transition-transform duration-500 group-hover:scale-105`}
                    >
                      <div className="absolute inset-0 bg-black/25 backdrop-blur-[2px]" />

                      {/* Mockup Graphic / Icon */}
                      <div className="relative z-10 text-center">
                        <span className="text-2xl font-black text-white tracking-wider uppercase opacity-90 drop-shadow-md">
                          {project.title.en.split(" ")[0]}
                        </span>
                        <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/40 text-white/90 text-[11px] font-mono backdrop-blur-md">
                          <span>{project.stats?.type || "Full App"}</span>
                        </div>
                      </div>

                      {/* Hover Overlay with Quick View button */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="px-4 py-2 rounded-xl bg-white text-zinc-900 font-bold text-xs shadow-lg flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 cursor-pointer"
                        >
                          <FiEye size={14} />
                          <span>{t.projects.viewProject}</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Card Content Area */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {project.tags.slice(0, 3).map((tag, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200/60 dark:border-zinc-700/50"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="px-2 py-0.5 rounded-md text-[10px] font-medium text-zinc-400">
                            +{project.tags.length - 3}
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-1">
                        {title}
                      </h3>

                      {/* Short Description */}
                      <p className="mt-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2 leading-relaxed">
                        {shortDesc}
                      </p>
                    </div>

                    {/* Card Actions Footer */}
                    <div className="mt-6 pt-4 border-t border-zinc-200/70 dark:border-zinc-800 flex items-center justify-between">
                      {/* "Ko'rish" (View) Button with click micro-interaction */}
                      <motion.button
                        whileTap={{ scale: 0.94 }}
                        whileHover={{ scale: 1.03 }}
                        onClick={() => setSelectedProject(project)}
                        className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-500/20 flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <span>{t.projects.viewProject}</span>
                        <FiArrowUpRight size={14} />
                      </motion.button>

                      {/* GitHub Link Button */}
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileTap={{ scale: 0.92 }}
                        whileHover={{ scale: 1.08 }}
                        title="GitHub Repozitoriy"
                        className="p-2 rounded-xl text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white bg-zinc-100/80 dark:bg-zinc-800/80 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors cursor-pointer"
                      >
                        <FiGithub size={16} />
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
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
