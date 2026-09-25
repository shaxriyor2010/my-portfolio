"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import {
  FiX,
  FiExternalLink,
  FiGithub,
  FiCheckCircle,
  FiLayers,
  FiActivity,
} from "react-icons/fi";

export default function ProjectModal({ project, isOpen, onClose }) {
  const { t, language } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const title = project.title[language] || project.title.uz;
  const description =
    project.fullDescription[language] ||
    project.shortDescription[language] ||
    project.shortDescription.uz;
  const features =
    project.features?.[language] ||
    project.features?.uz ||
    [];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-md transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative w-full max-w-2xl bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200/90 dark:border-zinc-800 shadow-2xl overflow-hidden z-10 my-8"
        >
          {/* Header Banner / Visual Mockup Header */}
          <div
            className={`h-40 sm:h-48 w-full bg-gradient-to-r ${project.previewGradient} p-6 flex flex-col justify-between relative overflow-hidden`}
          >
            <div className="absolute inset-0 bg-black/20" />

            {/* Top Bar with Browser Dots & Close */}
            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-1.5 bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <span className="text-[11px] font-mono text-white/80 ml-2">
                  {project.id}.dev
                </span>
              </div>

              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <FiX size={18} />
              </button>
            </div>

            {/* Title on Banner */}
            <div className="relative z-10">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-white/80 bg-white/20 backdrop-blur-sm px-2.5 py-0.5 rounded-md">
                {project.stats?.type || "Web Project"}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                {title}
              </h3>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
            {/* Description */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-2">
                {t.projects.detailsModal}
              </h4>
              <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {description}
              </p>
            </div>

            {/* Features List */}
            {features.length > 0 && (
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-2.5 flex items-center gap-1.5">
                  <FiCheckCircle className="text-emerald-500" />
                  <span>{t.projects.featuresTitle}</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200/60 dark:border-zinc-800 text-xs text-zinc-700 dark:text-zinc-300"
                    >
                      <span className="text-emerald-500 mt-0.5">•</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Tags */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-2 flex items-center gap-1.5">
                <FiLayers className="text-indigo-500" />
                <span>{t.projects.techUsed}</span>
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag, idx) => (
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

          {/* Modal Actions Footer */}
          <div className="p-4 sm:p-6 bg-zinc-50/80 dark:bg-zinc-950/80 border-t border-zinc-200/80 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400">
              <FiActivity className="text-emerald-500" />
              <span>Score: {project.stats?.lighthouseScore || "100/100"}</span>
            </div>

            <div className="flex items-center gap-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-zinc-700 dark:text-zinc-200 bg-white dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 border border-zinc-200 dark:border-zinc-700 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <FiGithub size={14} />
                  <span>GitHub</span>
                </a>
              )}

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-500/25 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>{t.projects.viewProject}</span>
                  <FiExternalLink size={14} />
                </a>
              )}

              <button
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200/60 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
              >
                {t.projects.close}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
