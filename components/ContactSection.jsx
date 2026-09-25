"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import confetti from "canvas-confetti";
import {
  FiMail,
  FiPhone,
  FiSend,
  FiCopy,
  FiCheck,
  FiExternalLink,
  FiUser,
  FiMessageSquare,
  FiCheckCircle,
} from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function ContactSection() {
  const { t } = useLanguage();
  const [copiedKey, setCopiedKey] = useState(null);

  // Form state
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Confetti trigger helper
  const fireConfetti = () => {
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ["#6366f1", "#06b6d4", "#10b981", "#ec4899"],
      });
    } catch (e) {
      // safe fallback
    }
  };

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    fireConfetti();
    setTimeout(() => {
      setCopiedKey(null);
    }, 2500);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate instantaneous, reliable delivery
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      fireConfetti();
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }, 800);
  };

  const contactMethods = [
    {
      key: "telegram",
      label: t.contact.telegramLabel,
      value: "@usmonov_o26",
      rawCopy: "@usmonov_o26",
      actionUrl: "https://t.me/usmonov_o26",
      isExternal: true,
      actionIcon: FiExternalLink,
      icon: FaTelegramPlane,
      color: "#229ED9",
      bgGradient: "from-sky-500/15 to-blue-600/15",
      borderColor: "border-sky-500/30",
    },
    {
      key: "gmail",
      label: t.contact.gmailLabel,
      value: "usmonovshaxriyorbekh@gmail.com",
      rawCopy: "usmonovshaxriyorbekh@gmail.com",
      actionUrl: "mailto:usmonovshaxriyorbekh@gmail.com",
      isExternal: false,
      actionIcon: FiMail,
      icon: SiGmail,
      color: "#EA4335",
      bgGradient: "from-rose-500/15 to-red-600/15",
      borderColor: "border-rose-500/30",
    },
    {
      key: "phone",
      label: t.contact.phoneLabel,
      value: "+998 99 690 86 16",
      rawCopy: "+998996908616",
      actionUrl: "tel:+998996908616",
      isExternal: false,
      actionIcon: FiPhone,
      icon: FiPhone,
      color: "#10B981",
      bgGradient: "from-emerald-500/15 to-teal-600/15",
      borderColor: "border-emerald-500/30",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-3"
          >
            {t.contact.badge}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight"
          >
            {t.contact.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto"
          >
            {t.contact.subtitle}
          </motion.p>
        </div>

        {/* Content: Contact Cards on Left + Quick Message Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Cards (Telegram, Gmail, Phone) */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-2">
              {t.contact.directContact}
            </h3>

            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              const ActionIcon = method.actionIcon;
              const isCopied = copiedKey === method.key;

              return (
                <motion.div
                  key={method.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -3, scale: 1.01 }}
                  className={`p-5 rounded-2xl bg-white/70 dark:bg-zinc-900/80 border border-zinc-200/80 dark:border-zinc-800 backdrop-blur-xl shadow-sm hover:shadow-lg transition-all duration-300 flex items-center justify-between gap-4 group`}
                >
                  {/* Left: Icon & Details */}
                  <div className="flex items-center gap-4 min-w-0">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-tr ${method.bgGradient} border ${method.borderColor} shrink-0 transition-transform group-hover:scale-105`}
                    >
                      <IconComponent
                        size={22}
                        style={{ color: method.color }}
                      />
                    </div>

                    <div className="min-w-0">
                      <span className="text-xs font-medium text-zinc-400 dark:text-zinc-500 block">
                        {method.label}
                      </span>
                      <a
                        href={method.actionUrl}
                        target={method.isExternal ? "_blank" : undefined}
                        rel={method.isExternal ? "noopener noreferrer" : undefined}
                        className="text-sm sm:text-base font-bold text-zinc-900 dark:text-zinc-100 hover:text-indigo-600 dark:hover:text-indigo-400 truncate block transition-colors"
                      >
                        {method.value}
                      </a>
                    </div>
                  </div>

                  {/* Right: Actions (Copy & Direct Open) */}
                  <div className="flex items-center gap-2 shrink-0">
                    {/* Copy Button */}
                    <div className="relative">
                      <motion.button
                        whileTap={{ scale: 0.88 }}
                        whileHover={{ scale: 1.08 }}
                        onClick={() => handleCopy(method.rawCopy, method.key)}
                        aria-label={`Copy ${method.label}`}
                        title={t.contact.copyTooltip}
                        className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                          isCopied
                            ? "bg-emerald-500 text-white border-emerald-500 shadow-md shadow-emerald-500/25"
                            : "bg-zinc-100 dark:bg-zinc-800/90 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 border-zinc-200/80 dark:border-zinc-700/80"
                        }`}
                      >
                        {isCopied ? <FiCheck size={16} /> : <FiCopy size={16} />}
                      </motion.button>

                      {/* Tooltip Popup on Copy */}
                      <AnimatePresence>
                        {isCopied && (
                          <motion.span
                            initial={{ opacity: 0, y: 10, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="absolute -top-8 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-md text-[10px] font-bold text-white bg-emerald-600 shadow-lg whitespace-nowrap z-20 pointer-events-none"
                          >
                            {t.contact.copiedTooltip}
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Open/Call/Mail Action Button */}
                    <motion.a
                      href={method.actionUrl}
                      target={method.isExternal ? "_blank" : undefined}
                      rel={method.isExternal ? "noopener noreferrer" : undefined}
                      whileTap={{ scale: 0.88 }}
                      whileHover={{ scale: 1.08 }}
                      title={t.contact.clickToOpen}
                      className="p-2.5 rounded-xl border bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 border-indigo-200 dark:border-indigo-800/80 transition-all cursor-pointer"
                    >
                      <ActionIcon size={16} />
                    </motion.a>
                  </div>
                </motion.div>
              );
            })}

            {/* Quick Status Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-indigo-500/20 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                </span>
                <span className="text-xs sm:text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  {t.footer.available}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Interactive Message Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-white/70 dark:bg-zinc-900/80 border border-zinc-200/80 dark:border-zinc-800 backdrop-blur-xl shadow-lg"
          >
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-1 flex items-center gap-2">
              <FiMessageSquare className="text-indigo-500" />
              <span>{t.contact.formTitle}</span>
            </h3>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mb-6">
              {t.contact.subtitle}
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-10 text-center flex flex-col items-center justify-center space-y-3"
              >
                <div className="w-14 h-14 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-500 flex items-center justify-center">
                  <FiCheckCircle size={30} />
                </div>
                <h4 className="text-base font-bold text-zinc-900 dark:text-white">
                  {t.contact.sentSuccess}
                </h4>
              </motion.div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                {/* Name Field */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-600 dark:text-zinc-400 mb-1.5">
                    {t.contact.namePlaceholder}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400">
                      <FiUser size={16} />
                    </div>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder={t.contact.namePlaceholder}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-zinc-50/80 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/80 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500 transition-all"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-600 dark:text-zinc-400 mb-1.5">
                    {t.contact.emailPlaceholder}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400">
                      <FiMail size={16} />
                    </div>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder={t.contact.emailPlaceholder}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-zinc-50/80 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/80 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500 transition-all"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-600 dark:text-zinc-400 mb-1.5">
                    {t.contact.messagePlaceholder}
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder={t.contact.messagePlaceholder}
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-50/80 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/80 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500 transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileTap={{ scale: 0.97 }}
                  whileHover={{ scale: 1.02 }}
                  className="w-full py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span>{t.contact.sendingBtn}</span>
                  ) : (
                    <>
                      <span>{t.contact.sendBtn}</span>
                      <FiSend size={15} />
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
