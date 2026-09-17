import React from "react";

export function Education() {
  return (
    <section id="education" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Index */}
        <div className="editorial-reveal flex items-center gap-4 mb-16">
          <span className="font-mono text-xs text-amber-800 dark:text-amber-400 tracking-widest uppercase font-semibold">
            § 06 / SCHOLARSHIP
          </span>
          <div className="h-px flex-1 bg-stone-300 dark:bg-stone-800"></div>
          <span className="font-mono text-xs text-stone-400 uppercase">ACADEMIC FOUNDATION</span>
        </div>

        <div className="editorial-reveal hairline-all p-8 sm:p-12 bg-white dark:bg-stone-950/40 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline">
            <div className="md:col-span-4 space-y-1">
              <span className="font-mono text-xs text-amber-800 dark:text-amber-400 tracking-widest block uppercase font-medium">
                DEGREE ATTAINMENT
              </span>
              <span className="font-mono text-xs text-stone-400">LAHORE, PAKISTAN</span>
            </div>

            <div className="md:col-span-8 space-y-4">
              <h3 className="font-serif text-3xl text-stone-900 dark:text-stone-100 font-normal">
                Bachelor of Science in Computer Science
              </h3>

              <div className="font-serif text-lg text-stone-600 dark:text-stone-300 italic">
                University of Engineering and Technology (UET), Lahore
              </div>

              <p className="font-sans text-stone-700 dark:text-stone-300 text-base font-light leading-relaxed">
                Formally grounded in theoretical computer science, discrete mathematics, distributed operating systems, data structures, relational database management systems, and algorithm analysis.
              </p>

              <div className="pt-2 flex flex-wrap gap-2 font-mono text-xs">
                <span className="px-2.5 py-1 bg-stone-100 dark:bg-stone-900 border border-stone-300 dark:border-stone-800 text-stone-700 dark:text-stone-300">
                  Data Structures & Algorithms
                </span>
                <span className="px-2.5 py-1 bg-stone-100 dark:bg-stone-900 border border-stone-300 dark:border-stone-800 text-stone-700 dark:text-stone-300">
                  Operating Systems
                </span>
                <span className="px-2.5 py-1 bg-stone-100 dark:bg-stone-900 border border-stone-300 dark:border-stone-800 text-stone-700 dark:text-stone-300">
                  DBMS & SQL
                </span>
                <span className="px-2.5 py-1 bg-stone-100 dark:bg-stone-900 border border-stone-300 dark:border-stone-800 text-stone-700 dark:text-stone-300">
                  Computer Networks
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
