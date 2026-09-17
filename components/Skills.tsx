"use client";

import React, { useState } from "react";

interface SkillItem {
  name: string;
  level: string;
  sub: string;
  desc: string;
}

const defaultInspectorText =
  "Hover over any capability above to review architectural notes and applied context.";

export function Skills() {
  const [inspectorText, setInspectorText] = useState(defaultInspectorText);
  const [activeHover, setActiveHover] = useState(false);

  const pillar1: SkillItem[] = [
    {
      name: "Python 3",
      level: "Advanced",
      sub: "AsyncIO, Typing, Concurrency",
      desc: "Primary programming language. Deep familiarity with async/await, generators, type hints, and performance profiling.",
    },
    {
      name: "FastAPI",
      level: "Expert",
      sub: "High-speed async microservices",
      desc: "High-performance async API development with automatic OpenAPI documentation and strict Pydantic v2 schemas.",
    },
    {
      name: "Django",
      level: "Advanced",
      sub: "Robust modular systems",
      desc: "Enterprise-grade application architecture, ORM optimization, administrative panels, and secure session state.",
    },
    {
      name: "Django REST Framework",
      level: "Advanced",
      sub: "DRF, Serializers, Viewsets",
      desc: "RESTful hypermedia architectures, serialization pipelines, object-level permissions, and viewsets.",
    },
    {
      name: "REST APIs",
      level: "Principal",
      sub: "Contract design & documentation",
      desc: "Idempotent, backwards-compatible API contracts adhering strictly to HTTP/1.1 and HTTP/2 conventions.",
    },
  ];

  const pillar2: SkillItem[] = [
    {
      name: "PostgreSQL",
      level: "Core",
      sub: "ACID, Indices, Query Tuning",
      desc: "Primary relational database. Proficient in indexing strategies, EXPLAIN query planning, and schema migrations.",
    },
    {
      name: "MongoDB",
      level: "Proficient",
      sub: "Aggregation, Document DB",
      desc: "Document storage for semi-structured documents, telemetry collection, and rapid schema iterations.",
    },
    {
      name: "MySQL",
      level: "Proficient",
      sub: "Relational models & joins",
      desc: "Standard relational database design, transactions, and foreign key constraints for legacy and web systems.",
    },
    {
      name: "SQLAlchemy 2.0",
      level: "Advanced",
      sub: "Async sessions & models",
      desc: "Python's quintessential SQL toolkit and ORM. Async sessions, model relationships, and Alembic migrations.",
    },
  ];

  const pillar3: SkillItem[] = [
    {
      name: "RAG Pipelines",
      level: "Specialist",
      sub: "Context injection & synthesis",
      desc: "Retrieval-Augmented Generation for grounded factual responses without model hallucination.",
    },
    {
      name: "Qdrant (Vectors)",
      level: "Advanced",
      sub: "HNSW index, semantic match",
      desc: "Ultra-fast similarity search on vector embeddings for semantic document retrieval and clustering.",
    },
    {
      name: "LLM Applications",
      level: "Applied",
      sub: "Orchestration & evaluation",
      desc: "Practical prompt architecture, structured JSON extraction, and agentic workflows.",
    },
    {
      name: "MediaPipe & OpenCV",
      level: "Applied",
      sub: "Computer vision kinematics",
      desc: "Real-time multi-modal spatial tracking of human body joints, posture evaluation, and biomechanics.",
    },
  ];

  const pillar4: SkillItem[] = [
    {
      name: "Docker",
      level: "Core",
      sub: "Compose, Multi-stage builds",
      desc: "Containerization of multi-service microservices, reproducible runtime environments, and slim builds.",
    },
    {
      name: "JWT & Security",
      level: "Rigorous",
      sub: "OAuth2, RBAC & hashing",
      desc: "Asymmetric cryptography, token expiration strategies, claims handling, and role-based access control.",
    },
    {
      name: "Git & GitHub",
      level: "Proficient",
      sub: "Version control & CI/CD",
      desc: "Semantic commit conventions, interactive rebasing, multi-branch trunk workflows, and code audits.",
    },
    {
      name: "Linux Systems",
      level: "Operating",
      sub: "CLI, Process daemons",
      desc: "POSIX environment, bash scripting, server process monitoring (systemd, gunicorn, uvicorn), and logs.",
    },
  ];

  const handleMouseEnter = (desc: string) => {
    setInspectorText(desc);
    setActiveHover(true);
  };

  const handleMouseLeave = () => {
    setInspectorText(defaultInspectorText);
    setActiveHover(false);
  };

  const renderPillar = (title: string, subtitle: string, items: SkillItem[], tag: string) => (
    <div className="editorial-reveal hairline-all p-8 bg-white dark:bg-stone-950/40 hover:border-amber-800/70 dark:hover:border-amber-400/50 transition-colors group">
      <div className="font-mono text-xs text-amber-800 dark:text-amber-400 tracking-widest uppercase mb-4 font-semibold">
        {tag}
      </div>
      <h3 className="font-serif text-2xl text-stone-900 dark:text-stone-100 mb-6 font-medium">
        {title}
      </h3>
      <ul className="space-y-4 font-sans text-sm">
        {items.map((item) => (
          <li
            key={item.name}
            className="skill-item cursor-pointer"
            onMouseEnter={() => handleMouseEnter(item.desc)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="font-medium text-stone-900 dark:text-stone-100 group-hover:text-amber-800 dark:group-hover:text-amber-400 transition-colors flex items-center justify-between">
              <span>{item.name}</span>
              <span className="font-mono text-xs text-stone-400">{item.level}</span>
            </div>
            <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5 font-light">
              {item.sub}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <section id="skills" className="py-24 sm:py-32 hairline-t relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Index */}
        <div className="editorial-reveal flex items-center gap-4 mb-16">
          <span className="font-mono text-xs text-amber-800 dark:text-amber-400 tracking-widest uppercase font-semibold">
            § 04 / DISCIPLINARY COMPETENCE
          </span>
          <div className="h-px flex-1 bg-stone-300 dark:bg-stone-800"></div>
          <span className="font-mono text-xs text-stone-400 uppercase">TAXONOMY OF SKILLS</span>
        </div>

        <div className="max-w-3xl mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-stone-900 dark:text-stone-100 font-normal">
            Technical Architecture & Tooling
          </h2>
          <p className="mt-4 font-sans text-stone-600 dark:text-stone-400 text-base">
            Organized by engineering discipline and depth of practice, rather than an uncurated list of logos. Hover over any capability to review contextual architectural notes.
          </p>
        </div>

        {/* Four Conceptual Skill Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {renderPillar("Python Ecosystem", "Core Backend", pillar1, "I. CORE BACKEND")}
          {renderPillar("Data Systems", "Persistence", pillar2, "II. PERSISTENCE")}
          {renderPillar("Intelligent Systems", "Applied AI", pillar3, "III. APPLIED AI")}
          {renderPillar("DevOps & Protocol", "Reliability", pillar4, "IV. RELIABILITY")}
        </div>

        {/* Interactive Skill Context Inspector Drawer */}
        <div
          id="skill-inspector"
          className="mt-8 p-4 hairline-all bg-stone-50 dark:bg-stone-900/60 rounded flex items-center gap-4 text-xs font-mono text-stone-600 dark:text-stone-300 transition-all"
        >
          <span className="text-amber-800 dark:text-amber-400 font-bold tracking-widest uppercase">
            INSIGHT:
          </span>
          <span
            id="skill-inspector-text"
            className={activeHover ? "text-stone-900 dark:text-stone-100 font-medium" : ""}
          >
            {inspectorText}
          </span>
        </div>
      </div>
    </section>
  );
}
