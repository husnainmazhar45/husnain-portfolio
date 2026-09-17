"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "./ThemeContext";

export function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = document.querySelectorAll<HTMLElement>("section[id]");
      const scrollPosition = window.scrollY + 200;

      let current = "";
      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          current = section.getAttribute("id") || "";
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "about", num: "01.", label: "About" },
    { id: "experience", num: "02.", label: "Experience" },
    { id: "projects", num: "03.", label: "Projects" },
    { id: "skills", num: "04.", label: "Skills" },
    { id: "ai-consultant", num: "AI", label: "AI Consultant", isAi: true },
    { id: "contact", num: "05.", label: "Contact" },
  ];

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 hairline-b backdrop-blur-md bg-stone-50/85 dark:bg-stone-950/85 ${
        isScrolled ? "shadow-sm" : ""
      }`}
    >
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between transition-all duration-300 ${
          isScrolled ? "h-16" : "h-20"
        }`}
        id="navbar-container"
      >
        {/* Brand Monogram */}
        <a
          href="#hero"
          className="group flex items-center gap-3 interactive-element py-1"
          aria-label="Husnain Mazhar — Home"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-amber-700 dark:bg-amber-400 group-hover:scale-125 transition-transform"></span>
          <span className="font-serif text-xl sm:text-2xl tracking-tight font-medium text-stone-900 dark:text-stone-100 group-hover:text-amber-800 dark:group-hover:text-amber-400 transition-colors">
            Husnain Mazhar
          </span>
          <span className="hidden sm:inline-block font-mono text-[10px] tracking-widest uppercase px-2 py-0.5 rounded border border-stone-300 dark:border-stone-700 text-stone-600 dark:text-stone-400 ml-1">
            SE · Python & AI
          </span>
        </a>

        {/* Desktop Links */}
        <nav
          className="hidden lg:flex items-center gap-7 font-sans text-xs tracking-widest uppercase font-medium text-stone-600 dark:text-stone-400"
          aria-label="Primary Navigation"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            if (item.isAi) {
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="nav-link interactive-element relative py-1 text-amber-800 dark:text-amber-400 hover:text-amber-900 dark:hover:text-amber-300 transition-colors flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-700 dark:bg-amber-400 animate-pulse"></span>
                  <span>{item.label}</span>
                  <span
                    className={`nav-indicator absolute bottom-0 left-0 h-0.5 bg-amber-800 dark:bg-amber-400 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  ></span>
                </a>
              );
            }
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`nav-link interactive-element relative py-1 transition-colors hover:text-stone-950 dark:hover:text-stone-100 ${
                  isActive ? "text-stone-950 dark:text-stone-100" : ""
                }`}
              >
                <span className="font-mono text-stone-400 dark:text-stone-600 mr-1 text-[11px]">
                  {item.num}
                </span>{" "}
                {item.label}
                <span
                  className={`nav-indicator absolute bottom-0 left-0 h-0.5 bg-amber-800 dark:bg-amber-400 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                ></span>
              </a>
            );
          })}

          <div className="h-4 w-px bg-stone-300 dark:bg-stone-700 mx-1"></div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="interactive-element flex items-center gap-2 px-3 py-1.5 rounded border border-stone-300 dark:border-stone-700 hover:border-amber-800 dark:hover:border-amber-400 bg-stone-100/70 dark:bg-stone-900/70 transition-all font-mono text-[11px] text-stone-700 dark:text-stone-300"
            title="Toggle Theme"
            aria-label="Toggle visual theme"
          >
            <span className="text-sm font-semibold leading-none">{isDark ? "☼" : "☾"}</span>
            <span className="tracking-widest uppercase">{isDark ? "LIGHT" : "DARK"}</span>
          </button>

          {/* Availability Badge */}
          <div className="flex items-center gap-2 font-mono text-[11px] text-stone-600 dark:text-stone-400 bg-stone-200/60 dark:bg-stone-900 px-3 py-1 rounded-full border border-stone-300 dark:border-stone-800">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
            <span>Lahore, PK</span>
          </div>
        </nav>

        {/* Mobile Bar Controls */}
        <div className="flex items-center gap-2.5 lg:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded border border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-300 flex items-center gap-1 font-mono text-xs"
            aria-label="Toggle theme"
          >
            <span className="text-sm font-semibold">{isDark ? "☼" : "☾"}</span>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-stone-800 dark:text-stone-200 rounded border border-transparent hover:border-stone-300 dark:hover:border-stone-700 transition-colors"
            aria-label="Open mobile navigation"
            aria-expanded={mobileMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <line x1="4" y1="7" x2="20" y2="7" strokeWidth="1.6" strokeLinecap="round" />
              <line x1="4" y1="17" x2="20" y2="17" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Slide-Down Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden hairline-b bg-stone-50 dark:bg-stone-950 px-6 py-8 transition-all duration-300">
          <nav className="flex flex-col gap-5 font-serif text-2xl text-stone-800 dark:text-stone-200">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="mobile-nav-link flex items-baseline justify-between py-1 border-b border-stone-200 dark:border-stone-800"
            >
              <span>About</span> <span className="font-mono text-xs text-stone-400">01</span>
            </a>
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="mobile-nav-link flex items-baseline justify-between py-1 border-b border-stone-200 dark:border-stone-800"
            >
              <span>Experience</span> <span className="font-mono text-xs text-stone-400">02</span>
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="mobile-nav-link flex items-baseline justify-between py-1 border-b border-stone-200 dark:border-stone-800"
            >
              <span>Projects</span> <span className="font-mono text-xs text-stone-400">03</span>
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="mobile-nav-link flex items-baseline justify-between py-1 border-b border-stone-200 dark:border-stone-800"
            >
              <span>Technical Skills</span> <span className="font-mono text-xs text-stone-400">04</span>
            </a>
            <a
              href="#ai-consultant"
              onClick={() => setMobileMenuOpen(false)}
              className="mobile-nav-link flex items-baseline justify-between py-1 border-b border-stone-200 dark:border-stone-800 text-amber-800 dark:text-amber-400"
            >
              <span>AI Consultant</span> <span className="font-mono text-xs">AI</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mobile-nav-link flex items-baseline justify-between py-1"
            >
              <span>Contact</span> <span className="font-mono text-xs text-stone-400">05</span>
            </a>
          </nav>

          <div className="mt-6 pt-5 hairline-t flex items-center justify-between">
            <button
              onClick={toggleTheme}
              className="w-full py-2.5 px-4 rounded border border-stone-300 dark:border-stone-700 bg-stone-200/50 dark:bg-stone-900 font-mono text-xs tracking-widest uppercase flex items-center justify-center gap-2 text-stone-800 dark:text-stone-200"
            >
              <span className="text-sm">{isDark ? "☼" : "☾"}</span>
              <span>{isDark ? "SWITCH TO LIGHT MODE" : "SWITCH TO DARK MODE"}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
