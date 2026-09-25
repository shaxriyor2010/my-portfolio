"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";
import { FiMenu, FiX, FiArrowUpRight, FiCode } from "react-icons/fi";

export default function Navbar() {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Exact navigation items in requested order: Asosiy, Loyihalar, Bog'lanish
  const navItems = [
    { id: "home", label: t.nav.home, href: "#home" },
    { id: "projects", label: t.nav.projects, href: "#projects" },
    { id: "contact", label: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Scroll spy for active section
      const sections = ["home", "projects", "contact"];
      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href, id) => {
    e.preventDefault();
    setActiveSection(id);
    setMobileMenuOpen(false);

    const targetEl = document.querySelector(href);
    if (targetEl) {
      const topOffset = 80;
      const elementPosition = targetEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-white/70 dark:bg-zinc-950/75 backdrop-blur-xl border-b border-zinc-200/60 dark:border-zinc-800/80 shadow-sm dark:shadow-black/20"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Monogram */}
          <motion.a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home", "home")}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-600 p-[1.5px] shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-shadow duration-300">
              <div className="w-full h-full rounded-[10px] bg-white dark:bg-zinc-950 flex items-center justify-center">
                <span className="font-extrabold text-sm tracking-wider bg-gradient-to-r from-cyan-500 to-indigo-500 bg-clip-text text-transparent">
                  SU
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight text-zinc-900 dark:text-zinc-100 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
                Shaxriyorbek
              </span>
              <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-400 dark:text-zinc-500">
                Portfolio
              </span>
            </div>
          </motion.a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 p-1 rounded-full bg-white/70 dark:bg-zinc-900/70 border border-zinc-200/70 dark:border-zinc-800/80 backdrop-blur-md shadow-sm">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href, item.id)}
                  className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "text-zinc-950 dark:text-white"
                      : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 rounded-full bg-zinc-100 dark:bg-zinc-800 shadow-sm border border-zinc-200/50 dark:border-zinc-700/50 -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span>{item.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="activeNavDot"
                      className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-indigo-500"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Header Controls (Language, Theme, Mobile toggle) */}
          <div className="flex items-center gap-2 sm:gap-3">
            <LanguageSwitcher />
            <ThemeToggle />

            {/* Mobile Menu Toggle Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Open Navigation Menu"
              className="md:hidden p-2 rounded-xl border transition-colors bg-white/70 dark:bg-zinc-800/80 hover:bg-white dark:hover:bg-zinc-800 border-zinc-200/80 dark:border-zinc-700/80 text-zinc-700 dark:text-zinc-200 shadow-sm backdrop-blur-md cursor-pointer flex items-center justify-center"
            >
              {mobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </motion.button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-in Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Slide-in Menu Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 250 }}
              className="fixed top-0 right-0 bottom-0 w-72 max-w-[85vw] bg-white/95 dark:bg-zinc-950/95 backdrop-blur-2xl border-l border-zinc-200/80 dark:border-zinc-800/80 shadow-2xl z-50 p-6 flex flex-col justify-between md:hidden"
            >
              <div>
                {/* Header in Drawer */}
                <div className="flex items-center justify-between pb-6 border-b border-zinc-200/80 dark:border-zinc-800/80">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-600 flex items-center justify-center text-white font-bold text-xs">
                      SU
                    </div>
                    <span className="font-bold text-zinc-900 dark:text-white">
                      Shaxriyorbek
                    </span>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1.5 rounded-lg text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
                  >
                    <FiX size={20} />
                  </button>
                </div>

                {/* Mobile Nav Links */}
                <div className="flex flex-col gap-2 mt-6">
                  {navItems.map((item, index) => {
                    const isActive = activeSection === item.id;
                    return (
                      <motion.a
                        key={item.id}
                        href={item.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.08 }}
                        onClick={(e) => handleNavClick(e, item.href, item.id)}
                        className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                          isActive
                            ? "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20"
                            : "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100/80 dark:hover:bg-zinc-900"
                        }`}
                      >
                        <span>{item.label}</span>
                        <FiArrowUpRight
                          className={`transition-transform ${
                            isActive ? "text-indigo-500" : "text-zinc-400"
                          }`}
                          size={16}
                        />
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              {/* Drawer Bottom Controls */}
              <div className="pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80 flex flex-col gap-4">
                <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
                  <span>Til & Rejim</span>
                  <div className="flex items-center gap-2">
                    <LanguageSwitcher />
                    <ThemeToggle />
                  </div>
                </div>

                <div className="text-center text-[11px] text-zinc-400 dark:text-zinc-600">
                  Shaxriyorbek Usmonov © {new Date().getFullYear()}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
