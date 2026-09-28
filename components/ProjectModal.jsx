"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import confetti from "canvas-confetti";
import {
  FiX,
  FiExternalLink,
  FiGithub,
  FiCheckCircle,
  FiLayers,
  FiActivity,
  FiCopy,
  FiCheck,
  FiMaximize2,
} from "react-icons/fi";

export default function ProjectModal({ project, isOpen, onClose }) {
  const { t, language } = useLanguage();
  const [showLivePreview, setShowLivePreview] = useState(false);
  const [copiedGit, setCopiedGit] = useState(false);

  const handleClose = () => {
    setShowLivePreview(false);
    onClose();
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") handleClose();
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
  }, [isOpen]);

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

  const handleCopyGit = () => {
    const gitCmd = `git clone ${project.githubUrl}.git`;
    navigator.clipboard.writeText(gitCmd);
    setCopiedGit(true);
    try {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.8 },
      });
    } catch (e) {}
    setTimeout(() => setCopiedGit(false), 2500);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-md transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className={`relative w-full ${
            showLivePreview ? "max-w-5xl" : "max-w-2xl"
          } bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200/90 dark:border-zinc-800 shadow-2xl overflow-hidden z-10 my-6 transition-all duration-300`}
        >
          {/* Header Banner / Mockup Chrome */}
          <div
            className={`h-36 sm:h-44 w-full bg-gradient-to-r ${project.previewGradient} p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden`}
          >
            <div className="absolute inset-0 bg-black/25" />

            {/* Top Bar with Browser Dots & Close */}
            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <span className="text-[11px] font-mono text-white/90 ml-2">
                  srm-sistema.vercel.app
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowLivePreview(!showLivePreview)}
                  className="px-3 py-1 rounded-full bg-black/40 hover:bg-black/60 text-white text-xs font-medium backdrop-blur-sm flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <FiMaximize2 size={13} />
                  <span>
                    {showLivePreview
                      ? language === "ru"
                        ? "Информация"
                        : "Tafsilotlar"
                      : language === "ru"
                      ? "Интерактивный экран"
                      : "Jonli ekran"}
                  </span>
                </button>

                <button
                  onClick={handleClose}
                  className="w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <FiX size={18} />
                </button>
              </div>
            </div>

            {/* Title on Banner */}
            <div className="relative z-10">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-white/90 bg-white/20 backdrop-blur-sm px-2.5 py-0.5 rounded-md">
                {project.stats?.type || "SRM Web App"}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                {title}
              </h3>
            </div>
          </div>

          {/* Modal Body: Embedded Live Frame or Detailed Description */}
          {showLivePreview ? (
            <div className="p-4 sm:p-6 bg-zinc-950 flex flex-col items-center">
              <div className="w-full flex items-center justify-between pb-3 text-xs text-zinc-400">
                <span>Jonli interaktiv tizim (Interactive Preview):</span>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 hover:text-indigo-300 flex items-center gap-1 font-semibold"
                >
                  <span>{t.projects.openLive}</span>
                  <FiExternalLink size={13} />
                </a>
              </div>
              <div className="w-full h-[520px] rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 shadow-inner">
                <iframe
                  src={project.liveUrl}
                  title="SRM Sistema Live Preview"
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>
            </div>
          ) : (
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

              {/* GitHub Clone snippet */}
              <div className="p-3.5 rounded-2xl bg-zinc-100/80 dark:bg-zinc-800/60 border border-zinc-200/80 dark:border-zinc-700/80 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 min-w-0">
                  <FiGithub className="text-zinc-700 dark:text-zinc-300 shrink-0" size={16} />
                  <span className="text-xs font-mono text-zinc-600 dark:text-zinc-300 truncate">
                    git clone {project.githubUrl}.git
                  </span>
                </div>
                <button
                  onClick={handleCopyGit}
                  className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-white dark:bg-zinc-700 text-zinc-800 dark:text-white border border-zinc-300 dark:border-zinc-600 flex items-center gap-1.5 hover:bg-zinc-50 transition-colors shrink-0 cursor-pointer"
                >
                  {copiedGit ? (
                    <>
                      <FiCheck className="text-emerald-500" size={13} />
                      <span className="text-emerald-600 dark:text-emerald-400">
                        {t.contact.copiedTooltip}
                      </span>
                    </>
                  ) : (
                    <>
                      <FiCopy size={13} />
                      <span>{t.contact.copyTooltip}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          {/* Modal Actions Footer */}
          <div className="p-4 sm:p-6 bg-zinc-50/80 dark:bg-zinc-950/80 border-t border-zinc-200/80 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400">
              <FiActivity className="text-emerald-500" />
              <span>Score: {project.stats?.lighthouseScore || "99/100"}</span>
            </div>

            <div className="flex items-center gap-2.5">
              {/* GitHub Link */}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-zinc-700 dark:text-zinc-200 bg-white dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 border border-zinc-200 dark:border-zinc-700 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <FiGithub size={14} />
                  <span>GitHub Kodlar</span>
                </a>
              )}

              {/* View Live Result Link */}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 shadow-md shadow-indigo-500/25 flex items-center gap-1.5 transition-all cursor-pointer"
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
