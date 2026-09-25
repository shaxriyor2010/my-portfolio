"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { FiArrowUp, FiMail, FiPhone, FiGithub } from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";

export default function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const socialLinks = [
    {
      name: "Telegram",
      href: "https://t.me/usmonov_o26",
      icon: FaTelegramPlane,
      color: "hover:text-[#229ED9]",
    },
    {
      name: "Gmail",
      href: "mailto:usmonovshaxriyorbekh@gmail.com",
      icon: FiMail,
      color: "hover:text-[#EA4335]",
    },
    {
      name: "Phone",
      href: "tel:+998996908616",
      icon: FiPhone,
      color: "hover:text-[#10B981]",
    },
    {
      name: "GitHub",
      href: "https://github.com/usmonov-shaxriyorbek",
      icon: FiGithub,
      color: "hover:text-indigo-500",
    },
  ];

  return (
    <footer className="relative border-t border-zinc-200/80 dark:border-zinc-800/80 bg-white/40 dark:bg-zinc-950/60 backdrop-blur-xl py-12 px-4 sm:px-6 lg:px-8 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white font-bold text-xs shadow-md">
            SU
          </div>
          <div>
            <span className="text-sm font-bold text-zinc-900 dark:text-white">
              Shaxriyorbek Usmonov
            </span>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              © {new Date().getFullYear()} {t.footer.rights}
            </p>
          </div>
        </div>

        {/* Social Icons that link correctly */}
        <div className="flex items-center gap-2">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.name}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={link.name}
                title={link.name}
                className={`p-2.5 rounded-xl bg-zinc-100/80 dark:bg-zinc-900/80 border border-zinc-200/80 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 ${link.color} transition-colors cursor-pointer shadow-sm`}
              >
                <Icon size={16} />
              </motion.a>
            );
          })}
        </div>

        {/* Back To Top Button */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-zinc-700 dark:text-zinc-300 bg-zinc-100/80 dark:bg-zinc-900/80 hover:bg-zinc-200 dark:hover:bg-zinc-800 border border-zinc-200/80 dark:border-zinc-800 transition-all cursor-pointer shadow-sm"
        >
          <span>{t.footer.backToTop}</span>
          <FiArrowUp size={14} className="text-indigo-500" />
        </motion.button>
      </div>
    </footer>
  );
}
