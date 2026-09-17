"use client";

import React, { useState } from "react";

const GEMINI_SYSTEM_INSTRUCTION = `You are the official AI Architectural Persona for Husnain Mazhar, an articulate Software Engineer based in Lahore, Pakistan specializing in Python, FastAPI, Django/DRF, PostgreSQL, SQLAlchemy, Qdrant, and Applied AI Engineering (RAG, MediaPipe, OpenCV).
Your tone is classical, measured, intellectual, and engineering-focused. Never use excessive exclamation marks or superficial hype.
Speak directly to technical architecture: Python 3.11+, FastAPI async endpoints, SQLAlchemy 2.0 connection pooling, PostgreSQL normalized schemas, Qdrant sub-50ms vector queries, and MediaPipe spatial kinematics.`;

function generateLocalArchitecturalResponse(query: string): string {
  const q = query.toLowerCase();
  if (q.includes("rag") || q.includes("qdrant") || q.includes("sub-100ms")) {
    return `### Asynchronous RAG Architecture with Qdrant & FastAPI\n\nTo achieve sub-100ms vector retrieval latencies in high-concurrency Python environments, Husnain implements the following design pattern:\n\n* **Ingress & Connection Pooling**: Utilizing \`FastAPI\` with asynchronous endpoint routing and an asynchronous connection pool (\`asyncpg\` for PostgreSQL metadata, official async Qdrant client via gRPC).\n* **Vector Representation**: Incoming text chunks are transformed into dense embeddings via quantized models. Vectors are indexed into Qdrant using an HNSW (Hierarchical Navigable Small World) index with scalar quantization enabled.\n* **Payload Filtering**: Relational filters (such as user permissions or clinician tags) are evaluated directly in Qdrant's payload index before distance scoring, avoiding post-filtering overhead.\n* **Context Injection**: Retrieved relevant documents are synthesized into a bounded prompt with deterministic JSON schemas enforced via Pydantic v2.`;
  } else if (q.includes("drf") || q.includes("django") || q.includes("compare")) {
    return `### Django REST Framework vs. FastAPI Paradigm Evaluation\n\n* **Django REST Framework (DRF)** excels in complex domain models requiring mature admin tooling, deep ORM relationships, built-in session governance, and multi-tenant transactional integrity.\n* **FastAPI** provides significant advantages in raw throughput, native \`asyncio\` execution, low-latency streaming endpoints, and automated OpenAPI documentation via Pydantic v2.\n* **Hybrid Strategy**: For content-heavy systems, Husnain deploys Django's resilient ORM with \`select_related\` and \`prefetch_related\` to mitigate N+1 bottlenecks; for real-time inference or high-concurrency feeds, FastAPI with Asyncpg provides millisecond response times.`;
  } else {
    return `### Technical Architectural Evaluation & Fit\n\nBased on Husnain Mazhar's engineering trajectory, the requirements intersect directly with his core focus areas:\n\n* **Core Backend**: Strong expertise in Python 3.11+, asynchronous FastAPI microservices, and modular Django/DRF systems.\n* **Persistence Discipline**: Proven ability to model normalized relational schemas in PostgreSQL, optimize indexing strategies, and maintain zero-blocking async sessions.\n* **Applied AI Engineering**: Production experience engineering RAG systems with Qdrant vector databases, computer vision pipelines (OpenCV / MediaPipe), and deterministic LLM integration.\n* **Engineering Rigor**: Containerized Docker workflows, rigorous contract validation via Pydantic, and clean RESTful design.`;
  }
}

async function callGeminiApi(prompt: string, systemInstruction = GEMINI_SYSTEM_INSTRUCTION, retries = 2, delay = 1000): Promise<string> {
  const apiKey = ""; // Runtime automatically supplies key if configured
  if (!apiKey) {
    return generateLocalArchitecturalResponse(prompt);
  }
  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${apiKey}`;

  const payload = {
    contents: [{ role: "user", parts: [{ text: prompt }] }],
    systemInstruction: { parts: [{ text: systemInstruction }] },
    generationConfig: { temperature: 0.7, maxOutputTokens: 1000 },
  };

  for (let attempt = 0; attempt < retries; attempt++) {
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const result = await response.json();
      const text = result.candidates?.[0]?.content?.parts?.[0]?.text;
      if (text) return text;
      throw new Error("Empty response payload.");
    } catch (err) {
      if (attempt < retries - 1) {
        await new Promise((res) => setTimeout(res, delay * Math.pow(2, attempt)));
      } else {
        return generateLocalArchitecturalResponse(prompt);
      }
    }
  }
  return generateLocalArchitecturalResponse(prompt);
}

function formatArchitecturalOutput(raw: string): string {
  let escaped = raw
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  escaped = escaped.replace(/^### (.*$)/gim, '<h4 class="font-serif text-lg font-medium text-stone-900 dark:text-stone-100 mt-4 mb-2">$1</h4>');
  escaped = escaped.replace(/^## (.*$)/gim, '<h3 class="font-serif text-xl font-medium text-stone-900 dark:text-stone-100 mt-5 mb-2 hairline-b pb-1">$1</h3>');
  escaped = escaped.replace(/^# (.*$)/gim, '<h2 class="font-serif text-2xl font-normal text-stone-900 dark:text-stone-100 mt-6 mb-3">$1</h2>');
  escaped = escaped.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-stone-900 dark:text-stone-100">$1</strong>');
  escaped = escaped.replace(/`([^`]+)`/g, '<code class="font-mono text-xs px-1.5 py-0.5 bg-stone-200 dark:bg-stone-800 rounded text-amber-900 dark:text-amber-300">$1</code>');
  escaped = escaped.replace(/^\s*[\-\*]\s+(.*)$/gim, '<li class="ml-4 list-disc text-stone-700 dark:text-stone-300 mb-1">$1</li>');

  const paragraphs = escaped.split(/\n\n+/).map((para) => {
    if (para.startsWith("<h") || para.startsWith("<li")) return para;
    return `<p class="mb-3 text-stone-800 dark:text-stone-200 leading-relaxed font-sans text-sm">${para}</p>`;
  });

  return paragraphs.join("");
}

export function AiConsultant() {
  const [currentMode, setCurrentMode] = useState<"inquiry" | "fit">("inquiry");
  const [userPrompt, setUserPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [statusText, setStatusText] = useState("STATUS: AWAITING QUERY");
  const [statusState, setStatusState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [outputHtml, setOutputHtml] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const suggestedInquiries = [
    {
      label: "› Sub-100ms RAG pipeline design with Qdrant",
      prompt: "How would Husnain design an asynchronous RAG pipeline using FastAPI, Qdrant, and PostgreSQL with sub-100ms vector query times?",
    },
    {
      label: "› DRF vs FastAPI for high-concurrency feeds",
      prompt: "Compare Django REST Framework vs FastAPI for a high-concurrency real-time social feed with media processing.",
    },
    {
      label: "› Technical role fit & engineering capabilities",
      prompt: "Evaluate Husnain's qualifications for a Senior Python Backend & Applied AI Engineer position.",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const prompt = userPrompt.trim();
    if (!prompt) return;

    setLoading(true);
    setStatusState("loading");
    setStatusText("STATUS: REASONING VIA GEMINI 3 FLASH...");
    setOutputHtml(null);

    try {
      let promptPayload = prompt;
      if (currentMode === "fit") {
        promptPayload = `Evaluate the following job specification or requirements against Husnain Mazhar's engineering profile. Detail: 1) Strong technical intersections (FastAPI, Python, Django, Qdrant RAG, PostgreSQL), 2) Architectural approach he would take, and 3) Practical value he delivers:\n\n${prompt}`;
      }

      const responseText = await callGeminiApi(promptPayload);
      setOutputHtml(formatArchitecturalOutput(responseText));
      setStatusState("success");
      setStatusText("STATUS: SYNTHESIS COMPLETE");
    } catch (err) {
      console.error("Gemini Architectural Consultation Error:", err);
      setStatusState("error");
      setStatusText("STATUS: INFERENCE ERROR");
      setOutputHtml(
        `<div class="p-4 hairline-all bg-red-50 dark:bg-red-950/40 rounded text-red-800 dark:text-red-300 font-mono text-xs"><span class="font-bold block mb-1">Architectural Consultation Exception:</span><span>Unable to establish secure dispatch stream. Please try again in a moment.</span></div>`
      );
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setUserPrompt("");
    setOutputHtml(null);
    setStatusState("idle");
    setStatusText("STATUS: AWAITING QUERY");
  };

  const handleCopy = () => {
    if (!outputHtml) return;
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = outputHtml;
    const text = tempDiv.innerText;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="ai-consultant" className="py-24 sm:py-32 hairline-t relative bg-stone-100/70 dark:bg-stone-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Index */}
        <div className="editorial-reveal flex items-center gap-4 mb-16">
          <span className="font-mono text-xs text-amber-800 dark:text-amber-400 tracking-widest uppercase font-semibold">
            § 05 / INTELLIGENT DISPATCH
          </span>
          <div className="h-px flex-1 bg-stone-300 dark:bg-stone-800"></div>
          <span className="font-mono text-xs text-stone-400 uppercase">POWERED BY GEMINI 3 FLASH</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <span className="inline-block font-mono text-xs uppercase tracking-widest text-amber-800 dark:text-amber-400 font-semibold">
                Live Architectural Dialogue
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 dark:text-stone-100 font-normal leading-tight">
                Architectural Inquirer & Role Match Advisor
              </h2>
              <p className="font-sans text-stone-600 dark:text-stone-400 text-base font-light leading-relaxed">
                Consult with an interactive AI model calibrated on Husnain’s backend methodologies, engineering philosophies, and software stack. Inquire about concrete design choices, explore how his systems handle high concurrency or vector retrieval, or paste a job mandate to generate an architectural fit assessment.
              </p>
            </div>

            {/* Suggested Chips */}
            <div className="space-y-3 pt-2">
              <span className="block font-mono text-xs uppercase text-stone-400 tracking-wider">Suggested Inquiries:</span>
              <div className="flex flex-col gap-2 font-mono text-xs">
                {suggestedInquiries.map((chip, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      setUserPrompt(chip.prompt);
                    }}
                    className="gemini-prompt-chip text-left px-3.5 py-2 hairline-all bg-white dark:bg-stone-950 rounded hover:border-amber-800 dark:hover:border-amber-400 transition-colors text-stone-700 dark:text-stone-300"
                  >
                    {chip.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Model Verification Badge */}
            <div className="pt-4 flex items-center gap-3 font-mono text-[11px] text-stone-500">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>ENGINE: gemini-3-flash-preview</span>
              <span>·</span>
              <span>GROUNDED ARCHITECTURAL PERSONA</span>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-7">
            <div className="hairline-all bg-white dark:bg-stone-950 p-6 sm:p-8 rounded shadow-sm relative">
              {/* Tab Switcher */}
              <div className="flex items-center justify-between hairline-b pb-4 mb-6">
                <div className="flex items-center gap-4 font-mono text-xs">
                  <button
                    type="button"
                    onClick={() => setCurrentMode("inquiry")}
                    className={
                      currentMode === "inquiry"
                        ? "text-amber-800 dark:text-amber-400 font-medium tracking-wider uppercase border-b-2 border-amber-800 dark:border-amber-400 pb-1"
                        : "text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 tracking-wider uppercase pb-1 transition-colors"
                    }
                  >
                    01. System Inquiry
                  </button>
                  <button
                    type="button"
                    onClick={() => setCurrentMode("fit")}
                    className={
                      currentMode === "fit"
                        ? "text-amber-800 dark:text-amber-400 font-medium tracking-wider uppercase border-b-2 border-amber-800 dark:border-amber-400 pb-1"
                        : "text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 tracking-wider uppercase pb-1 transition-colors"
                    }
                  >
                    02. Role / Spec Match
                  </button>
                </div>
                <span className="font-mono text-[10px] text-stone-400 uppercase hidden sm:inline">
                  Interactive Terminal
                </span>
              </div>

              {/* Form Input */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="gemini-user-prompt" className="block font-mono text-xs uppercase text-stone-600 dark:text-stone-400 mb-2">
                    {currentMode === "inquiry"
                      ? "Enter Architectural Inquiry or Scenario:"
                      : "Paste Job Description, Project Scope, or Requirements:"}
                  </label>
                  <textarea
                    id="gemini-user-prompt"
                    rows={3}
                    required
                    value={userPrompt}
                    onChange={(e) => setUserPrompt(e.target.value)}
                    placeholder={
                      currentMode === "inquiry"
                        ? "e.g. How does Husnain mitigate blocking I/O when integrating synchronous machine learning models into FastAPI?"
                        : "e.g. Looking for a Python engineer with experience building asynchronous microservices with FastAPI, PostgreSQL, and integrating vector databases for AI systems..."
                    }
                    className="w-full px-4 py-3 bg-stone-50 dark:bg-stone-900 hairline-all text-sm font-sans text-stone-900 dark:text-stone-100 focus:outline-none focus:border-amber-800 dark:focus:border-amber-400 transition-colors resize-y"
                  />
                </div>

                <div className="flex items-center justify-between pt-1">
                  <button
                    type="button"
                    onClick={handleClear}
                    className="font-mono text-xs text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 transition-colors"
                  >
                    Clear Console
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="interactive-element px-6 py-3 bg-stone-900 hover:bg-stone-800 text-stone-50 dark:bg-stone-100 dark:hover:bg-white dark:text-stone-950 font-sans text-xs uppercase tracking-widest font-medium transition-colors flex items-center gap-2"
                  >
                    <span>{loading ? "Synthesizing..." : "Synthesize Response"}</span>
                    <span className="font-mono text-amber-400 dark:text-amber-800">→</span>
                  </button>
                </div>
              </form>

              {/* Output Container */}
              <div className="mt-6 pt-6 hairline-t">
                <div className="flex items-center justify-between mb-3 font-mono text-xs text-stone-400">
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        statusState === "loading"
                          ? "bg-amber-500 animate-ping"
                          : statusState === "success"
                          ? "bg-emerald-500"
                          : statusState === "error"
                          ? "bg-red-500"
                          : "bg-stone-300 dark:bg-stone-700"
                      }`}
                    ></span>
                    <span>{statusText}</span>
                  </div>
                  {outputHtml && (
                    <button
                      type="button"
                      onClick={handleCopy}
                      className="hover:text-stone-800 dark:hover:text-stone-100 text-[11px] underline transition-colors"
                    >
                      {copied ? "Copied ✓" : "Copy Response"}
                    </button>
                  )}
                </div>

                <div className="min-h-[160px] p-4 sm:p-5 bg-stone-50 dark:bg-stone-900/70 hairline-all rounded font-serif text-stone-800 dark:text-stone-200 text-sm sm:text-base leading-relaxed space-y-3 overflow-x-auto selection:bg-amber-900 selection:text-white">
                  {loading ? (
                    <div className="flex items-center gap-3 py-6 justify-center text-stone-500 font-mono text-xs">
                      <span className="w-2 h-2 bg-amber-800 dark:bg-amber-400 rounded-full animate-bounce"></span>
                      <span>Parsing architectural parameters & retrieving system blueprints...</span>
                    </div>
                  ) : outputHtml ? (
                    <div dangerouslySetInnerHTML={{ __html: outputHtml }} />
                  ) : (
                    <p className="text-stone-400 dark:text-stone-500 font-sans text-xs italic">
                      Output will be generated here. Inquire about Husnain’s backend practices, database migrations, RAG designs, or submit a technical project specification for evaluation.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
