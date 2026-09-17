"use client";

import React, { useEffect, useRef, useState } from "react";

export function Experience() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [progressHeight, setProgressHeight] = useState("0%");

  useEffect(() => {
    const handleScroll = () => {
      const wrapper = wrapperRef.current;
      if (!wrapper) return;

      const rect = wrapper.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight && rect.bottom > 0) {
        const totalHeight = rect.height;
        const visiblePart = Math.min(totalHeight, Math.max(0, windowHeight - rect.top));
        const progressPercent = Math.min(100, Math.max(0, (visiblePart / totalHeight) * 100));
        setProgressHeight(`${progressPercent}%`);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="experience" className="py-24 sm:py-32 hairline-t relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="editorial-reveal flex items-center gap-4 mb-16">
          <span className="font-mono text-xs text-amber-800 dark:text-amber-400 tracking-widest uppercase font-semibold">
            § 02 / TRAJECTORY
          </span>
          <div className="h-px flex-1 bg-stone-300 dark:bg-stone-800"></div>
          <span className="font-mono text-xs text-stone-400 uppercase">CHRONOLOGY OF WORK</span>
        </div>

        <div className="max-w-3xl mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-stone-900 dark:text-stone-100 font-normal">
            Career Experience & Technical Engineering
          </h2>
          <p className="mt-4 font-sans text-stone-600 dark:text-stone-400 text-base">
            A chronological record of engineering engagements, backend developments, and AI integrations.
          </p>
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative pl-6 sm:pl-10 space-y-16" id="timeline-wrapper" ref={wrapperRef}>
          {/* Drawing Timeline Line */}
          <div className="absolute left-0 sm:left-2 top-2 bottom-4 w-px bg-stone-300 dark:bg-stone-800">
            <div
              id="timeline-line-fill"
              className="w-full bg-amber-800 dark:bg-amber-400 transition-all duration-300"
              style={{ height: progressHeight }}
            ></div>
          </div>

          {/* Experience 1: Current */}
          <div className="editorial-reveal relative group">
            <div className="absolute -left-[30px] sm:-left-[38px] top-1.5 w-3.5 h-3.5 rounded-full bg-stone-50 dark:bg-stone-950 border-2 border-amber-800 dark:border-amber-400 group-hover:scale-125 transition-transform"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-baseline">
              <div className="lg:col-span-4">
                <span className="font-mono text-xs text-amber-800 dark:text-amber-400 tracking-widest block uppercase font-medium">
                  2024 — PRESENT
                </span>
                <h3 className="font-serif text-2xl text-stone-900 dark:text-stone-100 mt-1 font-medium">
                  Software Engineer
                </h3>
                <span className="font-sans text-sm text-stone-500 dark:text-stone-400">
                  Applied AI & Backend Systems
                </span>
              </div>

              <div className="lg:col-span-8 space-y-4">
                <p className="font-sans text-stone-700 dark:text-stone-300 text-base leading-relaxed">
                  Directing the backend architecture and AI pipeline implementation for healthcare and assistive rehabilitation software. Designed low-latency inference pipelines incorporating computer vision for biomechanical measurement and RAG architectures for personalized clinician insight delivery.
                </p>
                <ul className="space-y-2 font-sans text-sm text-stone-600 dark:text-stone-400 list-disc list-outside pl-4">
                  <li>Engineered asynchronous microservices using FastAPI handling real-time pose extraction and kinematic data indexing.</li>
                  <li>Integrated Qdrant vector database to store and retrieve clinical exercise knowledge with sub-50ms vector query latencies.</li>
                  <li>Architected REST APIs with strict Pydantic models ensuring data integrity across mobile and clinician web frontends.</li>
                </ul>
                <div className="pt-2 flex flex-wrap gap-2">
                  <span className="font-mono text-xs px-2.5 py-1 rounded bg-stone-200/70 dark:bg-stone-800 text-stone-800 dark:text-stone-200">Python</span>
                  <span className="font-mono text-xs px-2.5 py-1 rounded bg-stone-200/70 dark:bg-stone-800 text-stone-800 dark:text-stone-200">FastAPI</span>
                  <span className="font-mono text-xs px-2.5 py-1 rounded bg-stone-200/70 dark:bg-stone-800 text-stone-800 dark:text-stone-200">RAG</span>
                  <span className="font-mono text-xs px-2.5 py-1 rounded bg-stone-200/70 dark:bg-stone-800 text-stone-800 dark:text-stone-200">Qdrant</span>
                  <span className="font-mono text-xs px-2.5 py-1 rounded bg-stone-200/70 dark:bg-stone-800 text-stone-800 dark:text-stone-200">MediaPipe</span>
                  <span className="font-mono text-xs px-2.5 py-1 rounded bg-stone-200/70 dark:bg-stone-800 text-stone-800 dark:text-stone-200">MongoDB</span>
                </div>
              </div>
            </div>
          </div>

          {/* Experience 2: Backend Developer */}
          <div className="editorial-reveal relative group">
            <div className="absolute -left-[30px] sm:-left-[38px] top-1.5 w-3.5 h-3.5 rounded-full bg-stone-50 dark:bg-stone-950 border-2 border-stone-400 dark:border-stone-600 group-hover:border-amber-800 transition-colors"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-baseline">
              <div className="lg:col-span-4">
                <span className="font-mono text-xs text-stone-500 dark:text-stone-400 tracking-widest block uppercase font-medium">
                  2023 — 2024
                </span>
                <h3 className="font-serif text-2xl text-stone-900 dark:text-stone-100 mt-1 font-medium">
                  Backend Developer
                </h3>
                <span className="font-sans text-sm text-stone-500 dark:text-stone-400">
                  Python, Django & API Engineering
                </span>
              </div>

              <div className="lg:col-span-8 space-y-4">
                <p className="font-sans text-stone-700 dark:text-stone-300 text-base leading-relaxed">
                  Focused on building robust web backends, secure multi-tenant authentication patterns, and scalable data models. Designed normalized database architectures with PostgreSQL and automated test suites for API stability.
                </p>
                <ul className="space-y-2 font-sans text-sm text-stone-600 dark:text-stone-400 list-disc list-outside pl-4">
                  <li>Constructed Django REST Framework (DRF) APIs implementing JWT authentication, fine-grained object permissions, and pagination.</li>
                  <li>Optimized complex ORM queries by eliminating N+1 selection problems using <code className="font-mono text-xs">select_related</code> and <code className="font-mono text-xs">prefetch_related</code>.</li>
                  <li>Packaged services with Docker and Docker Compose for deterministic deployment environments across testing and staging.</li>
                </ul>
                <div className="pt-2 flex flex-wrap gap-2">
                  <span className="font-mono text-xs px-2.5 py-1 rounded bg-stone-200/70 dark:bg-stone-800 text-stone-800 dark:text-stone-200">Django</span>
                  <span className="font-mono text-xs px-2.5 py-1 rounded bg-stone-200/70 dark:bg-stone-800 text-stone-800 dark:text-stone-200">Django REST Framework</span>
                  <span className="font-mono text-xs px-2.5 py-1 rounded bg-stone-200/70 dark:bg-stone-800 text-stone-800 dark:text-stone-200">PostgreSQL</span>
                  <span className="font-mono text-xs px-2.5 py-1 rounded bg-stone-200/70 dark:bg-stone-800 text-stone-800 dark:text-stone-200">JWT</span>
                  <span className="font-mono text-xs px-2.5 py-1 rounded bg-stone-200/70 dark:bg-stone-800 text-stone-800 dark:text-stone-200">Docker</span>
                  <span className="font-mono text-xs px-2.5 py-1 rounded bg-stone-200/70 dark:bg-stone-800 text-stone-800 dark:text-stone-200">SQLAlchemy</span>
                </div>
              </div>
            </div>
          </div>

          {/* Experience 3: Academic Foundations */}
          <div className="editorial-reveal relative group">
            <div className="absolute -left-[30px] sm:-left-[38px] top-1.5 w-3.5 h-3.5 rounded-full bg-stone-50 dark:bg-stone-950 border-2 border-stone-400 dark:border-stone-600 group-hover:border-amber-800 transition-colors"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-baseline">
              <div className="lg:col-span-4">
                <span className="font-mono text-xs text-stone-500 dark:text-stone-400 tracking-widest block uppercase font-medium">
                  2021 — 2023
                </span>
                <h3 className="font-serif text-2xl text-stone-900 dark:text-stone-100 mt-1 font-medium">
                  Software Engineering Research
                </h3>
                <span className="font-sans text-sm text-stone-500 dark:text-stone-400">
                  Algorithm Design & Systems Analysis
                </span>
              </div>

              <div className="lg:col-span-8 space-y-4">
                <p className="font-sans text-stone-700 dark:text-stone-300 text-base leading-relaxed">
                  Conducted comprehensive laboratory research and coursework in relational databases, operating systems, distributed networking, and computer vision algorithms at University of Engineering and Technology (UET) Lahore.
                </p>
                <div className="pt-2 flex flex-wrap gap-2">
                  <span className="font-mono text-xs px-2.5 py-1 rounded bg-stone-200/70 dark:bg-stone-800 text-stone-800 dark:text-stone-200">Algorithms</span>
                  <span className="font-mono text-xs px-2.5 py-1 rounded bg-stone-200/70 dark:bg-stone-800 text-stone-800 dark:text-stone-200">Data Structures</span>
                  <span className="font-mono text-xs px-2.5 py-1 rounded bg-stone-200/70 dark:bg-stone-800 text-stone-800 dark:text-stone-200">RDBMS</span>
                  <span className="font-mono text-xs px-2.5 py-1 rounded bg-stone-200/70 dark:bg-stone-800 text-stone-800 dark:text-stone-200">Linux Systems</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
