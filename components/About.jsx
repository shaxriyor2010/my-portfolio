"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import {
  FiCheckCircle,
  FiLayout,
  FiZap,
  FiCode,
  FiSmartphone,
  FiArrowRight,
} from "react-icons/fi";
import {
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiNextdotjs,
} from "react-icons/si";

export default function About() {
  const { t } = useLanguage();

  const coreTech = [
    { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
    { name: "CSS3", icon: SiCss, color: "#1572B6" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "React.js", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#9CA3AF" },
  ];

  const featureIcons = [FiCode, FiSmartphone, FiZap, FiLayout];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 mb-3"
          >
            {t.about.badge}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight"
          >
            {t.about.title}
          </motion.h2>
        </div>

        {/* Two-Column About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Bio & Tech Stack mentions */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-5"
          >
            <div className="p-6 sm:p-8 rounded-3xl bg-white/70 dark:bg-zinc-900/70 border border-zinc-200/80 dark:border-zinc-800/80 backdrop-blur-xl shadow-lg">
              <p className="text-base sm:text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal">
                {t.about.paragraph1}
              </p>
              <p className="mt-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {t.about.paragraph2}
              </p>

              {/* Core Stacks Pill Row */}
              <div className="mt-6 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 block mb-3">
                  Asosiy texnologiyalar / Core Stack:
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {coreTech.map((tech) => {
                    const IconComponent = tech.icon;
                    return (
                      <div
                        key={tech.name}
                        className="flex items-center gap-2 px-3 py-2 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200/60 dark:border-zinc-700/50"
                      >
                        <IconComponent
                          size={18}
                          style={{ color: tech.color }}
                        />
                        <span className="text-xs font-medium text-zinc-800 dark:text-zinc-200">
                          {tech.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Key Strengths Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {t.about.features.map((feature, index) => {
              const Icon = featureIcons[index] || FiCheckCircle;
              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="p-5 rounded-2xl bg-white/70 dark:bg-zinc-900/70 border border-zinc-200/80 dark:border-zinc-800/80 backdrop-blur-xl shadow-sm hover:shadow-md hover:border-indigo-500/30 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-3">
                      <Icon size={20} />
                    </div>
                    <h4 className="text-base font-bold text-zinc-900 dark:text-white">
                      {feature.title}
                    </h4>
                    <p className="mt-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-normal">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
