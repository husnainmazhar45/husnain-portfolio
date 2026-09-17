import React from "react";

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32 hairline-t relative bg-stone-100/40 dark:bg-stone-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header Index */}
        <div className="editorial-reveal flex items-center gap-4 mb-16">
          <span className="font-mono text-xs text-amber-800 dark:text-amber-400 tracking-widest uppercase font-semibold">
            § 01 / PERSPECTIVE
          </span>
          <div className="h-px flex-1 bg-stone-300 dark:bg-stone-800"></div>
          <span className="font-mono text-xs text-stone-400 uppercase">ENGINEERING PHILOSOPHY</span>
        </div>

        {/* Large Opening Lead Statement */}
        <div className="editorial-reveal mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-stone-900 dark:text-stone-100 font-normal leading-tight max-w-4xl">
            “I’m interested in building software that is useful, maintainable, and thoughtfully engineered.”
          </h2>
        </div>

        {/* Two Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Biography & Principles */}
          <div className="lg:col-span-6 space-y-6 text-stone-700 dark:text-stone-300 font-sans text-base sm:text-lg leading-relaxed font-light">
            <p className="editorial-reveal">
              I am a Software Engineer whose core discipline is centered on the{" "}
              <strong className="font-medium text-stone-900 dark:text-stone-100">
                Python ecosystem
              </strong>
              . Rather than chasing transient trends, I focus on the enduring foundational pillars of software: well-structured business domains, predictable database schema migrations, and high-performance asynchronous API design.
            </p>
            <p className="editorial-reveal">
              My hands-on experience spans building robust enterprise services with{" "}
              <span className="font-mono text-xs uppercase px-2 py-0.5 rounded bg-stone-200/80 dark:bg-stone-800 text-stone-900 dark:text-stone-100">
                Django & DRF
              </span>{" "}
              to drafting lightweight, high-throughput microservices using{" "}
              <span className="font-mono text-xs uppercase px-2 py-0.5 rounded bg-stone-200/80 dark:bg-stone-800 text-stone-900 dark:text-stone-100">
                FastAPI
              </span>
              .
            </p>
            <p className="editorial-reveal">
              In modern computing, backend architecture cannot remain isolated from intelligent systems. I specialize in bridging the gap between raw data stores and practical machine intelligence—designing{" "}
              <strong className="font-medium text-stone-900 dark:text-stone-100">
                Retrieval-Augmented Generation (RAG)
              </strong>{" "}
              pipelines, vector representations with Qdrant, and real-time vision pipelines with OpenCV and MediaPipe.
            </p>

            {/* Technical Key Metric Highlights */}
            <div className="editorial-reveal pt-6 grid grid-cols-2 sm:grid-cols-3 gap-6 hairline-t">
              <div>
                <span className="block font-mono text-xs text-stone-400 uppercase">Core Language</span>
                <span className="font-serif text-xl font-medium text-stone-900 dark:text-stone-100">
                  Python 3.11+
                </span>
              </div>
              <div>
                <span className="block font-mono text-xs text-stone-400 uppercase">Primary Paradigms</span>
                <span className="font-serif text-xl font-medium text-stone-900 dark:text-stone-100">
                  Async / REST / RAG
                </span>
              </div>
              <div>
                <span className="block font-mono text-xs text-stone-400 uppercase">Databases</span>
                <span className="font-serif text-xl font-medium text-stone-900 dark:text-stone-100">
                  SQL & Vectors
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: System Architecture Schema */}
          <div className="lg:col-span-6 editorial-reveal">
            <div className="hairline-all bg-white dark:bg-stone-950 p-6 sm:p-8 rounded shadow-sm relative overflow-hidden">
              {/* Diagram Header */}
              <div className="flex items-center justify-between hairline-b pb-4 mb-6">
                <div>
                  <span className="font-mono text-[11px] text-amber-800 dark:text-amber-400 uppercase tracking-widest block font-medium">
                    SYSTEM COMPOSITION ARCHETYPE
                  </span>
                  <span className="font-serif text-lg text-stone-900 dark:text-stone-100">
                    End-to-End Information Flow
                  </span>
                </div>
                <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
                  RELIABILITY: 99.9%
                </span>
              </div>

              {/* Architecture Pipeline Nodes */}
              <div className="space-y-3 font-mono text-xs">
                {/* Node 1 */}
                <div className="group p-3 hairline-all rounded bg-stone-50 dark:bg-stone-900 hover:border-amber-700 transition-colors flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-stone-200 dark:bg-stone-800 flex items-center justify-center font-serif text-xs">
                      01
                    </span>
                    <div>
                      <span className="font-medium text-stone-900 dark:text-stone-100">Client Ingress & Gateway</span>
                      <p className="text-[11px] text-stone-500 font-sans">HTTP/2, CORS, Rate-Limiting, TLS Termination</p>
                    </div>
                  </div>
                  <span className="text-stone-400 group-hover:text-amber-700 transition-colors">↓ 1.2ms</span>
                </div>

                <div className="flex justify-center -my-1 text-stone-300 dark:text-stone-700 font-mono text-xs">│</div>

                {/* Node 2 */}
                <div className="group p-3 hairline-all rounded bg-stone-50 dark:bg-stone-900 hover:border-amber-700 transition-colors flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-300 flex items-center justify-center font-serif text-xs">
                      02
                    </span>
                    <div>
                      <span className="font-medium text-stone-900 dark:text-stone-100">Python API Engine (FastAPI / DRF)</span>
                      <p className="text-[11px] text-stone-500 font-sans">Pydantic Schemas, JWT Auth, Asynchronous Routers</p>
                    </div>
                  </div>
                  <span className="text-stone-400 group-hover:text-amber-700 transition-colors">↓ Pydantic V2</span>
                </div>

                <div className="flex justify-center -my-1 text-stone-300 dark:text-stone-700 font-mono text-xs">│</div>

                {/* Node 3 */}
                <div className="group p-3 hairline-all rounded bg-stone-50 dark:bg-stone-900 hover:border-amber-700 transition-colors flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-stone-200 dark:bg-stone-800 flex items-center justify-center font-serif text-xs">
                      03
                    </span>
                    <div>
                      <span className="font-medium text-stone-900 dark:text-stone-100">Domain Logic & AI Inference</span>
                      <p className="text-[11px] text-stone-500 font-sans">LangChain/LlamaIndex RAG, OpenCV Kinematics, Workers</p>
                    </div>
                  </div>
                  <span className="text-stone-400 group-hover:text-amber-700 transition-colors">↓ Embeddings</span>
                </div>

                <div className="flex justify-center -my-1 text-stone-300 dark:text-stone-700 font-mono text-xs">│</div>

                {/* Node 4 */}
                <div className="group p-3 hairline-all rounded bg-stone-50 dark:bg-stone-900 hover:border-amber-700 transition-colors flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-stone-200 dark:bg-stone-800 flex items-center justify-center font-serif text-xs">
                      04
                    </span>
                    <div>
                      <span className="font-medium text-stone-900 dark:text-stone-100">Dual-Engine Persistence</span>
                      <p className="text-[11px] text-stone-500 font-sans">PostgreSQL (Relational/ACID) + Qdrant (Vector Embeddings)</p>
                    </div>
                  </div>
                  <span className="text-stone-400 group-hover:text-amber-700 transition-colors">↓ Zero-Loss</span>
                </div>

                <div className="flex justify-center -my-1 text-stone-300 dark:text-stone-700 font-mono text-xs">│</div>

                {/* Node 5 */}
                <div className="group p-3 hairline-all rounded bg-stone-900 dark:bg-stone-100 text-stone-100 dark:text-stone-900 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-stone-700 dark:bg-stone-300 flex items-center justify-center font-serif text-xs text-white dark:text-stone-900">
                      05
                    </span>
                    <div>
                      <span className="font-medium">Deterministic Client Response</span>
                      <p className="text-[11px] text-stone-400 dark:text-stone-600 font-sans">Strict JSON contracts, error bounds, cache headers</p>
                    </div>
                  </div>
                  <span className="text-amber-400 dark:text-amber-800 font-semibold">200 OK</span>
                </div>
              </div>

              {/* Note */}
              <p className="mt-6 pt-4 hairline-t font-mono text-[11px] text-stone-500 dark:text-stone-400 leading-relaxed">
                * Note: Every API boundary is verified using strict validation schemas, automated regression tests, and containerized Docker scripts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
