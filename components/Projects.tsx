import React from "react";

export function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32 hairline-t relative bg-stone-100/30 dark:bg-stone-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Index */}
        <div className="editorial-reveal flex items-center gap-4 mb-16">
          <span className="font-mono text-xs text-amber-800 dark:text-amber-400 tracking-widest uppercase font-semibold">
            § 03 / PORTFOLIO OF WORKS
          </span>
          <div className="h-px flex-1 bg-stone-300 dark:bg-stone-800"></div>
          <span className="font-mono text-xs text-stone-400 uppercase">ENGINEERING PROTOTYPES</span>
        </div>

        <div className="max-w-3xl mb-20">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-stone-900 dark:text-stone-100 font-normal">
            Selected Software Engineering Projects
          </h2>
          <p className="mt-4 font-sans text-stone-600 dark:text-stone-400 text-base">
            Substantive systems showcasing async microservices, computer vision, vector search, and clean database design.
          </p>
        </div>

        {/* Project 1: Personal Physio */}
        <article className="editorial-reveal hairline-all bg-white dark:bg-stone-950 p-6 sm:p-10 lg:p-12 mb-16 shadow-sm group hover:border-amber-800/60 dark:hover:border-amber-400/50 transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-amber-800 dark:text-amber-400 uppercase tracking-widest font-semibold">
                  PROJECT 01 / APPLIED AI & HEALTHCARE
                </span>
                <span className="h-px w-8 bg-amber-800/40 dark:bg-amber-400/40"></span>
                <span className="font-mono text-[10px] uppercase text-stone-400">CLINICAL COMPUTING</span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl text-stone-900 dark:text-stone-100 font-normal leading-tight">
                Personal Physio
              </h3>

              <p className="font-serif italic text-lg text-stone-600 dark:text-stone-300">
                AI-driven personalized physiotherapy assistant for stroke rehabilitation.
              </p>

              <p className="font-sans text-stone-700 dark:text-stone-300 text-base leading-relaxed font-light">
                Developed to bridge the gap between in-clinic physiotherapy and at-home patient recovery. The system captures real-time patient movement through standard webcam feeds, runs high-frequency biomechanical angle calculations using MediaPipe & OpenCV, and provides context-aware guidance powered by a Retrieval-Augmented Generation (RAG) pipeline backed by Qdrant vector database.
              </p>

              {/* Architecture Highlights */}
              <div className="space-y-2 font-mono text-xs text-stone-600 dark:text-stone-400">
                <div className="flex items-center gap-2">
                  <span className="text-amber-800 dark:text-amber-400 font-bold">›</span>
                  <span>Spatial Kinematics: 33-point joint coordinate tracking & error tolerance analysis</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-amber-800 dark:text-amber-400 font-bold">›</span>
                  <span>Vector Knowledgebase: Qdrant-backed indexed medical protocols & rehabilitation guidelines</span>
                </div>
              </div>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="font-mono text-xs px-2.5 py-1 bg-stone-100 dark:bg-stone-900 border border-stone-300 dark:border-stone-800 text-stone-800 dark:text-stone-200">React</span>
                <span className="font-mono text-xs px-2.5 py-1 bg-stone-100 dark:bg-stone-900 border border-stone-300 dark:border-stone-800 text-stone-800 dark:text-stone-200">Python</span>
                <span className="font-mono text-xs px-2.5 py-1 bg-stone-100 dark:bg-stone-900 border border-stone-300 dark:border-stone-800 text-stone-800 dark:text-stone-200">RAG</span>
                <span className="font-mono text-xs px-2.5 py-1 bg-stone-100 dark:bg-stone-900 border border-stone-300 dark:border-stone-800 text-stone-800 dark:text-stone-200">Qdrant</span>
                <span className="font-mono text-xs px-2.5 py-1 bg-stone-100 dark:bg-stone-900 border border-stone-300 dark:border-stone-800 text-stone-800 dark:text-stone-200">MongoDB</span>
                <span className="font-mono text-xs px-2.5 py-1 bg-stone-100 dark:bg-stone-900 border border-stone-300 dark:border-stone-800 text-stone-800 dark:text-stone-200">MediaPipe</span>
                <span className="font-mono text-xs px-2.5 py-1 bg-stone-100 dark:bg-stone-900 border border-stone-300 dark:border-stone-800 text-stone-800 dark:text-stone-200">OpenCV</span>
              </div>

              {/* Action Link */}
              <div className="pt-4 flex items-center gap-4">
                <a
                  href="https://github.com/husnainmazhar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="interactive-element inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-stone-900 dark:text-stone-100 hover:text-amber-800 dark:hover:text-amber-400 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  <span>Repository Blueprint</span>
                  <span>→</span>
                </a>
              </div>
            </div>

            {/* Right Visual Code Mockup */}
            <div className="lg:col-span-5">
              <div className="hairline-all bg-stone-900 text-stone-200 p-5 rounded font-mono text-xs space-y-4 shadow-lg group-hover:scale-[1.01] transition-transform duration-300">
                <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                  <span className="text-[10px] text-stone-400">KINEMATIC_INFERENCE.py</span>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-stone-700"></span>
                    <span className="w-2 h-2 rounded-full bg-stone-700"></span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  </div>
                </div>

                <div className="space-y-1.5 text-stone-300 text-[11px] leading-relaxed">
                  <p className="text-stone-500"># Real-time joint trajectory validation</p>
                  <p>
                    <span className="text-amber-400">async def</span>{" "}
                    <span className="text-emerald-400">validate_rehab_motion</span>(frame_tensor):
                  </p>
                  <p className="pl-4">
                    landmarks = <span className="text-amber-400">await</span> detector.extract(frame_tensor)
                  </p>
                  <p className="pl-4">angle = compute_joint_angle(landmarks.elbow, landmarks.shoulder)</p>
                  <p className="pl-4">
                    <span className="text-amber-400">if</span> angle &lt; target.threshold_min:
                  </p>
                  <p className="pl-8 text-amber-300">feedback = rag_engine.query_exercise_cue(patient_id)</p>
                  <p className="pl-8 text-stone-400">emit_audio_guidance(feedback.direct_instruction)</p>
                  <p className="pl-4">
                    <span className="text-amber-400">return</span> &#123;
                    <span className="text-emerald-300">&quot;status&quot;</span>:{" "}
                    <span className="text-emerald-300">&quot;aligned&quot;</span>,{" "}
                    <span className="text-emerald-300">&quot;angle_deg&quot;</span>: angle&#125;
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-800 grid grid-cols-2 gap-2 text-[10px] text-stone-400">
                  <div>FPS: 58.4 (CV-Optimized)</div>
                  <div>QDRANT SIMILARITY: 0.942</div>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Project 2: FastAPI Instagram Clone Engine */}
        <article className="editorial-reveal hairline-all bg-white dark:bg-stone-950 p-6 sm:p-10 lg:p-12 mb-16 shadow-sm group hover:border-amber-800/60 dark:hover:border-amber-400/50 transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-amber-800 dark:text-amber-400 uppercase tracking-widest font-semibold">
                  PROJECT 02 / DISTRIBUTED REST BACKEND
                </span>
                <span className="h-px w-8 bg-amber-800/40 dark:bg-amber-400/40"></span>
                <span className="font-mono text-[10px] uppercase text-stone-400">ASYNC ARCHITECTURE</span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl text-stone-900 dark:text-stone-100 font-normal leading-tight">
                FastAPI Instagram Clone Engine
              </h3>

              <p className="font-serif italic text-lg text-stone-600 dark:text-stone-300">
                Backend-focused social architecture demonstrating async persistence and token security.
              </p>

              <p className="font-sans text-stone-700 dark:text-stone-300 text-base leading-relaxed font-light">
                A production-grade backend API reproducing high-throughput social network fundamentals. Designed to stress-test asynchronous database sessions, granular relational mapping with SQLAlchemy, JWT-based security claims, background media processing pipelines, and containerized Docker composition.
              </p>

              <div className="space-y-2 font-mono text-xs text-stone-600 dark:text-stone-400">
                <div className="flex items-center gap-2">
                  <span className="text-amber-800 dark:text-amber-400 font-bold">›</span>
                  <span>Database Pooling: Asyncpg engine with zero-blocking connection pools</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-amber-800 dark:text-amber-400 font-bold">›</span>
                  <span>Security & Auth: OAuth2 password bearer flow with cryptographically signed JWT tokens</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                <span className="font-mono text-xs px-2.5 py-1 bg-stone-100 dark:bg-stone-900 border border-stone-300 dark:border-stone-800 text-stone-800 dark:text-stone-200">FastAPI</span>
                <span className="font-mono text-xs px-2.5 py-1 bg-stone-100 dark:bg-stone-900 border border-stone-300 dark:border-stone-800 text-stone-800 dark:text-stone-200">PostgreSQL</span>
                <span className="font-mono text-xs px-2.5 py-1 bg-stone-100 dark:bg-stone-900 border border-stone-300 dark:border-stone-800 text-stone-800 dark:text-stone-200">SQLAlchemy 2.0</span>
                <span className="font-mono text-xs px-2.5 py-1 bg-stone-100 dark:bg-stone-900 border border-stone-300 dark:border-stone-800 text-stone-800 dark:text-stone-200">JWT Auth</span>
                <span className="font-mono text-xs px-2.5 py-1 bg-stone-100 dark:bg-stone-900 border border-stone-300 dark:border-stone-800 text-stone-800 dark:text-stone-200">Asyncio</span>
                <span className="font-mono text-xs px-2.5 py-1 bg-stone-100 dark:bg-stone-900 border border-stone-300 dark:border-stone-800 text-stone-800 dark:text-stone-200">Docker</span>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <a
                  href="https://github.com/husnainmazhar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="interactive-element inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-stone-900 dark:text-stone-100 hover:text-amber-800 dark:hover:text-amber-400 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  <span>Open Source API</span>
                  <span>→</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="hairline-all bg-stone-900 text-stone-200 p-5 rounded font-mono text-xs space-y-4 shadow-lg group-hover:scale-[1.01] transition-transform duration-300">
                <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                  <span className="text-[10px] text-stone-400">OPENAPI_SPEC_V3.json</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-amber-900/60 text-amber-300">FASTAPI ASYNC</span>
                </div>

                <div className="space-y-2 text-stone-300 text-[11px]">
                  <div className="flex items-center gap-2">
                    <span className="px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800 font-bold">GET</span>
                    <span className="text-stone-300">/api/v1/posts/feed?limit=20</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-1.5 py-0.5 rounded bg-blue-950 text-blue-400 border border-blue-800 font-bold">POST</span>
                    <span className="text-stone-300">/api/v1/posts/&#123;id&#125;/comments</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-1.5 py-0.5 rounded bg-amber-950 text-amber-400 border border-amber-800 font-bold">AUTH</span>
                    <span className="text-stone-300">Bearer &lt;JWT_HS256_PAYLOAD&gt;</span>
                  </div>
                </div>

                <div className="p-3 bg-stone-950 rounded border border-stone-800 text-[10px] text-stone-400 space-y-1">
                  <div className="text-emerald-400">› BENCHMARK: 3,420 req/sec via Uvicorn</div>
                  <div>› P99 LATENCY: 14.2ms across 500 conn</div>
                  <div>› DB POOL: Asyncpg active recycle</div>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Project 3: Django Editorial Engine & Content Platform */}
        <article className="editorial-reveal hairline-all bg-white dark:bg-stone-950 p-6 sm:p-10 lg:p-12 shadow-sm group hover:border-amber-800/60 dark:hover:border-amber-400/50 transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-amber-800 dark:text-amber-400 uppercase tracking-widest font-semibold">
                  PROJECT 03 / ENTERPRISE CONTENT PLATFORM
                </span>
                <span className="h-px w-8 bg-amber-800/40 dark:bg-amber-400/40"></span>
                <span className="font-mono text-[10px] uppercase text-stone-400">DJANGO ARCHITECTURE</span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl text-stone-900 dark:text-stone-100 font-normal leading-tight">
                Django Editorial Engine & Content Platform
              </h3>

              <p className="font-serif italic text-lg text-stone-600 dark:text-stone-300">
                A robust Django platform designed with clean ORM relationships and SEO optimization.
              </p>

              <p className="font-sans text-stone-700 dark:text-stone-300 text-base leading-relaxed font-light">
                An architectural demonstration of Django’s enterprise capabilities. Features custom user management, hierarchical taxonomy systems, parameterized slug generation, full-text database search, automated pagination caching, and custom admin dashboard instrumentation for editors and content reviewers.
              </p>

              <div className="space-y-2 font-mono text-xs text-stone-600 dark:text-stone-400">
                <div className="flex items-center gap-2">
                  <span className="text-amber-800 dark:text-amber-400 font-bold">›</span>
                  <span>Data Modeling: Normalized foreign keys, many-to-many tag relations with atomic transactions</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-amber-800 dark:text-amber-400 font-bold">›</span>
                  <span>SEO & Performance: Canonical headers, sitemap generation, and cursor-based pagination</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                <span className="font-mono text-xs px-2.5 py-1 bg-stone-100 dark:bg-stone-900 border border-stone-300 dark:border-stone-800 text-stone-800 dark:text-stone-200">Django 5.0</span>
                <span className="font-mono text-xs px-2.5 py-1 bg-stone-100 dark:bg-stone-900 border border-stone-300 dark:border-stone-800 text-stone-800 dark:text-stone-200">PostgreSQL</span>
                <span className="font-mono text-xs px-2.5 py-1 bg-stone-100 dark:bg-stone-900 border border-stone-300 dark:border-stone-800 text-stone-800 dark:text-stone-200">ORM Optimization</span>
                <span className="font-mono text-xs px-2.5 py-1 bg-stone-100 dark:bg-stone-900 border border-stone-300 dark:border-stone-800 text-stone-800 dark:text-stone-200">Authentication</span>
                <span className="font-mono text-xs px-2.5 py-1 bg-stone-100 dark:bg-stone-900 border border-stone-300 dark:border-stone-800 text-stone-800 dark:text-stone-200">SEO Engine</span>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <a
                  href="https://github.com/husnainmazhar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="interactive-element inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-stone-900 dark:text-stone-100 hover:text-amber-800 dark:hover:text-amber-400 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  <span>Repository View</span>
                  <span>→</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="hairline-all bg-stone-50 dark:bg-stone-900/90 p-6 rounded shadow-sm space-y-4">
                <div className="flex items-center justify-between border-b border-stone-200 dark:border-stone-800 pb-2">
                  <span className="font-mono text-[10px] text-stone-500 uppercase tracking-wider">MODELS.PY & ORM TOPOLOGY</span>
                  <span className="font-mono text-[10px] text-amber-800 dark:text-amber-400">DJANGO CORE</span>
                </div>
                <div className="space-y-3 font-serif">
                  <span className="text-xs font-mono uppercase tracking-widest text-stone-400 block">EXCERPT DISPATCH</span>
                  <h4 className="text-xl text-stone-900 dark:text-stone-100 font-medium leading-snug">
                    “The Architectural Anatomy of High-Yield Asynchronous Pipelines”
                  </h4>
                  <p className="text-xs font-sans text-stone-600 dark:text-stone-400 line-clamp-2">
                    How deterministic concurrency frameworks mitigate thread contention in production Python workloads without sacrificing readability.
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-200 dark:border-stone-800 flex justify-between font-mono text-[10px] text-stone-500">
                  <span>SLUG: /anatomy-of-async-pipelines</span>
                  <span>QUERY_COUNT: 1 (OPTIMIZED)</span>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
