import React from "react";

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[86vh] flex flex-col justify-between max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pb-16 relative"
    >
      {/* Top Meta Line */}
      <div className="editorial-reveal flex flex-wrap items-center justify-between gap-4 hairline-b pb-4 pt-2 font-mono text-xs text-stone-500 dark:text-stone-400 uppercase tracking-widest">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-800 dark:bg-amber-400"></span>
          <span>FOLIO NO. 01 · PYTHON ARCHITECTURE & APPLIED AI</span>
        </div>
        <div className="hidden sm:flex items-center gap-6">
          <span>LAT 31.5204° N · LON 74.3587° E</span>
          <span>LAHORE, PAKISTAN</span>
        </div>
      </div>

      {/* Main Editorial Headline Composition */}
      <div className="my-auto py-12 lg:py-20">
        <div className="max-w-4xl space-y-6">
          <div className="editorial-reveal stagger-1">
            <span className="inline-block font-mono text-xs sm:text-sm tracking-widest uppercase text-amber-800 dark:text-amber-400 mb-2 font-medium">
              Software Engineer / Backend & AI
            </span>
            <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-[1.03] text-stone-900 dark:text-stone-50 font-normal">
              Husnain Mazhar
            </h1>
          </div>

          {/* Secondary Cadence Statement */}
          <div className="editorial-reveal stagger-2">
            <p className="font-serif text-2xl sm:text-3xl lg:text-4xl text-stone-600 dark:text-stone-300 font-light leading-snug max-w-3xl">
              I build reliable backend systems and intelligent software with Python.
            </p>
          </div>

          {/* Metadata Badge Ribbon */}
          <div className="editorial-reveal stagger-3 pt-2">
            <p className="font-mono text-xs tracking-widest text-stone-500 dark:text-stone-400 uppercase">
              PYTHON <span className="mx-1 text-stone-300 dark:text-stone-700">·</span> FASTAPI{" "}
              <span className="mx-1 text-stone-300 dark:text-stone-700">·</span> DJANGO / DRF{" "}
              <span className="mx-1 text-stone-300 dark:text-stone-700">·</span> AI & RAG{" "}
              <span className="mx-1 text-stone-300 dark:text-stone-700">·</span> REST APIs{" "}
              <span className="mx-1 text-stone-300 dark:text-stone-700">·</span> POSTGRESQL
            </p>
          </div>

          {/* Editorial Action Buttons */}
          <div className="editorial-reveal stagger-4 pt-6 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="interactive-element group inline-flex items-center gap-3 px-7 py-3.5 bg-stone-900 hover:bg-stone-800 text-stone-50 dark:bg-stone-100 dark:hover:bg-white dark:text-stone-950 font-sans text-xs uppercase tracking-widest font-medium transition-all duration-300 shadow-sm"
            >
              <span>View Selected Work</span>
              <svg
                className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>

            <a
              href="#contact"
              className="interactive-element group inline-flex items-center gap-3 px-7 py-3.5 hairline-all bg-transparent hover:bg-stone-200/50 dark:hover:bg-stone-900/60 font-sans text-xs uppercase tracking-widest font-medium text-stone-800 dark:text-stone-200 transition-all duration-300"
            >
              <span>Initiate Contact</span>
              <span className="font-mono text-xs text-amber-800 dark:text-amber-400 group-hover:translate-x-0.5 transition-transform">
                →
              </span>
            </a>

            <a
              href="#about"
              className="hidden sm:inline-flex items-center gap-2 ml-4 text-xs font-mono uppercase tracking-widest text-stone-500 hover:text-stone-800 dark:hover:text-stone-300 transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-stone-400"></span>
              <span>Read Perspective</span>
            </a>
          </div>
        </div>
      </div>

      {/* Hero Footer Indicators */}
      <div className="editorial-reveal stagger-4 flex items-end justify-between hairline-t pt-6 font-mono text-xs text-stone-500 dark:text-stone-400">
        <div className="flex items-center gap-3">
          <span className="w-6 h-px bg-stone-400 dark:bg-stone-600 animate-pulse"></span>
          <span className="tracking-widest uppercase">SCROLL TO EXAMINE ARCHIVE</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <span>CONCURRENCY: ASYNCIO</span>
          <span>DETERMINISTIC CONTRACTS</span>
          <span>CLEAN ORM</span>
        </div>
      </div>
    </section>
  );
}
