"use client";

import React, { useState } from "react";
import { ThemeProvider } from "./ThemeContext";
import { CustomCursor } from "./CustomCursor";
import { BackgroundGrid } from "./BackgroundGrid";
import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { About } from "./About";
import { Experience } from "./Experience";
import { Projects } from "./Projects";
import { Skills } from "./Skills";
import { AiConsultant } from "./AiConsultant";
import { Treatise } from "./Treatise";
import { Education } from "./Education";
import { Contact } from "./Contact";
import { ResumeModal } from "./ResumeModal";
import { Footer } from "./Footer";
import { FloatingThemeToggle } from "./FloatingThemeToggle";
import { useScrollReveal } from "../hooks/useScrollReveal";

export function PortfolioContent() {
  const [resumeOpen, setResumeOpen] = useState(false);
  useScrollReveal();

  return (
    <ThemeProvider>
      <div className="paper-texture min-h-screen relative font-sans selection:bg-amber-900 selection:text-white">
        <CustomCursor />
        <BackgroundGrid />
        <Navbar />

        <main className="relative z-10 pt-28 sm:pt-36">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <AiConsultant />
          <Treatise />
          <Education />
          <Contact onOpenResume={() => setResumeOpen(true)} />
        </main>

        <Footer />
        <FloatingThemeToggle />
        <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
      </div>
    </ThemeProvider>
  );
}
