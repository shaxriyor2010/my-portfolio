"use client";

import React from "react";
import BackgroundEffects from "@/components/BackgroundEffects";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Dynamic Ambient Background with Spotlight and Floating Gradient Blobs */}
      <BackgroundEffects />

      {/* Fixed Frosted Header with Language Switcher, Theme Toggle, and Mobile Drawer */}
      <Navbar />

      {/* Main Content Area */}
      <main className="relative z-10 flex flex-col gap-12 sm:gap-20">
        {/* Asosiy (Home) Section */}
        <Hero />

        {/* Men haqimda (About Me) Block */}
        <About />

        {/* Loyihalar (Projects) Section: Texnologiyalar & Bulutli Platformalar + Mening Loyihalarim */}
        <ProjectsSection />

        {/* Bog'lanish (Contact) Section */}
        <ContactSection />
      </main>

      {/* Footer with Verified Links and Back-to-Top Button */}
      <Footer />
    </div>
  );
}
