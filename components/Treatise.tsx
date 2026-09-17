import React from "react";

export function Treatise() {
  return (
    <section className="py-28 sm:py-36 hairline-t hairline-b bg-stone-900 text-stone-100 dark:bg-stone-950 relative overflow-hidden">
      <div
        className="absolute -right-12 -bottom-16 font-serif text-[180px] text-stone-800/40 select-none pointer-events-none"
        aria-hidden="true"
      >
        Æ
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 text-center sm:text-left space-y-10">
        <div className="editorial-reveal font-mono text-xs text-amber-400 tracking-widest uppercase">
          TREATISE / AN ENGINEERING CREED
        </div>

        <blockquote className="space-y-6">
          <p className="editorial-reveal font-serif text-3xl sm:text-5xl lg:text-6xl font-light leading-tight tracking-tight text-stone-100">
            “Good software is not only about making things work. It is about making them understandable, maintainable, and useful.”
          </p>
        </blockquote>

        <div className="editorial-reveal hairline-t border-stone-800 pt-8 grid grid-cols-1 sm:grid-cols-3 gap-8 text-left font-sans text-sm text-stone-400 font-light">
          <div>
            <span className="font-serif text-stone-200 text-base block font-normal mb-1">
              01. Restraint over Cleverness
            </span>
            Code is read tenfold more often than it is written. Clean explicitness consistently outperforms complex abstraction.
          </div>
          <div>
            <span className="font-serif text-stone-200 text-base block font-normal mb-1">
              02. Deterministic Boundaries
            </span>
            Validate contracts at the boundary (Pydantic, OpenAPI). Prevent bad data from penetrating the core application layer.
          </div>
          <div>
            <span className="font-serif text-stone-200 text-base block font-normal mb-1">
              03. Practical Intelligence
            </span>
            AI is an enhancement, not a substitute for architectural discipline, resilient indices, and clean database logic.
          </div>
        </div>
      </div>
    </section>
  );
}
