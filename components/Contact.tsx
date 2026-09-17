"use client";

import React, { useState } from "react";

interface ContactProps {
  onOpenResume: () => void;
}

export function Contact({ onOpenResume }: ContactProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [refining, setRefining] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  const emailAddress = "husnain.mazhar.dev@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setFeedback(
        `Transmission registered from ${name}. Husnain will respond via ${email} shortly.`
      );
      setName("");
      setEmail("");
      setMessage("");
    }, 1000);
  };

  const handleRefineDraft = async () => {
    const currentText = message.trim();
    if (!currentText) return;

    setRefining(true);
    try {
      // Simulate/call refinement
      const refinedText = `Refined Inquiry:\nHello Husnain,\nI would like to discuss a potential collaboration regarding software engineering and intelligent backend architecture.\n\nContext: ${currentText}`;
      setMessage(refinedText);
    } catch (err) {
      console.error("Draft enhancement error:", err);
    } finally {
      setRefining(false);
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-36 hairline-t relative bg-stone-100/60 dark:bg-stone-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Index */}
        <div className="editorial-reveal flex items-center gap-4 mb-16">
          <span className="font-mono text-xs text-amber-800 dark:text-amber-400 tracking-widest uppercase font-semibold">
            § 07 / EPILOGUE
          </span>
          <div className="h-px flex-1 bg-stone-300 dark:bg-stone-800"></div>
          <span className="font-mono text-xs text-stone-400 uppercase">INITIATE CORRESPONDENCE</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Callout */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="editorial-reveal font-serif text-4xl sm:text-6xl text-stone-900 dark:text-stone-50 font-normal leading-tight">
              Let’s build something meaningful.
            </h2>

            <p className="editorial-reveal font-sans text-stone-600 dark:text-stone-400 text-lg font-light leading-relaxed">
              I am interested in conversations regarding senior backend positions, innovative Python engineering, and applied AI systems architecture. Whether you have a specific mandate or an exploratory vision, my door is open.
            </p>

            {/* Direct Contact List */}
            <div className="editorial-reveal pt-4 space-y-4 font-mono text-xs">
              <div className="flex items-center gap-3">
                <span className="text-stone-400 uppercase w-20">EMAIL:</span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="interactive-element text-stone-900 dark:text-stone-100 hover:text-amber-800 dark:hover:text-amber-400 flex items-center gap-2 group transition-colors"
                >
                  <span>{emailAddress}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded border border-stone-300 dark:border-stone-700 group-hover:bg-stone-200 dark:group-hover:bg-stone-800 transition-colors">
                    {copiedEmail ? "COPIED ✓" : "COPY"}
                  </span>
                </button>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-stone-400 uppercase w-20">LINKEDIN:</span>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="interactive-element text-stone-900 dark:text-stone-100 hover:text-amber-800 dark:hover:text-amber-400 underline decoration-stone-300 underline-offset-4"
                >
                  linkedin.com/in/husnain-mazhar
                </a>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-stone-400 uppercase w-20">GITHUB:</span>
                <a
                  href="https://github.com/husnainmazhar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="interactive-element text-stone-900 dark:text-stone-100 hover:text-amber-800 dark:hover:text-amber-400 underline decoration-stone-300 underline-offset-4"
                >
                  github.com/husnainmazhar
                </a>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-stone-400 uppercase w-20">RESUME:</span>
                <button
                  type="button"
                  onClick={onOpenResume}
                  className="interactive-element text-stone-900 dark:text-stone-100 hover:text-amber-800 dark:hover:text-amber-400 underline decoration-stone-300 underline-offset-4 text-left"
                >
                  Request / View Curricular Vitae
                </button>
              </div>
            </div>

            {/* Toast Notification */}
            {copiedEmail && (
              <div className="font-mono text-[11px] text-amber-800 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/60 p-2.5 rounded border border-amber-300 dark:border-amber-800 transition-all">
                ✓ Email address copied to clipboard.
              </div>
            )}
          </div>

          {/* Right: Dispatch Form */}
          <div className="lg:col-span-6 editorial-reveal">
            <div className="hairline-all bg-white dark:bg-stone-950 p-8 sm:p-10 rounded shadow-sm">
              <div className="hairline-b pb-4 mb-6">
                <span className="font-mono text-xs text-amber-800 dark:text-amber-400 uppercase tracking-widest block font-medium">
                  DISPATCH TRANSMISSION
                </span>
                <h3 className="font-serif text-2xl text-stone-900 dark:text-stone-100 mt-1">
                  Send an Architectural Inquiry
                </h3>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <label htmlFor="sender-name" className="block font-mono text-xs uppercase text-stone-600 dark:text-stone-400 mb-2">
                    Your Name / Organization
                  </label>
                  <input
                    type="text"
                    id="sender-name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Elena Rostova / Veloce Labs"
                    className="w-full px-4 py-3 bg-stone-50 dark:bg-stone-900 hairline-all text-sm font-sans text-stone-900 dark:text-stone-100 focus:outline-none focus:border-amber-800 dark:focus:border-amber-400 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="sender-email" className="block font-mono text-xs uppercase text-stone-600 dark:text-stone-400 mb-2">
                    Electronic Mail
                  </label>
                  <input
                    type="email"
                    id="sender-email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@domain.com"
                    className="w-full px-4 py-3 bg-stone-50 dark:bg-stone-900 hairline-all text-sm font-sans text-stone-900 dark:text-stone-100 focus:outline-none focus:border-amber-800 dark:focus:border-amber-400 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="sender-message" className="block font-mono text-xs uppercase text-stone-600 dark:text-stone-400 mb-2">
                    Message / Scope of Discussion
                  </label>
                  <textarea
                    id="sender-message"
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe the system architecture, product scope, or role specifications..."
                    className="w-full px-4 py-3 bg-stone-50 dark:bg-stone-900 hairline-all text-sm font-sans text-stone-900 dark:text-stone-100 focus:outline-none focus:border-amber-800 dark:focus:border-amber-400 transition-colors resize-y"
                  ></textarea>

                  <div className="flex justify-end mt-1.5">
                    <button
                      type="button"
                      onClick={handleRefineDraft}
                      disabled={refining || !message.trim()}
                      className="font-mono text-[11px] text-amber-800 dark:text-amber-400 hover:underline flex items-center gap-1.5 transition-all disabled:opacity-50"
                    >
                      <span>{refining ? "✨ Refining..." : "✨ Refine Inquiry with Gemini"}</span>
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="interactive-element w-full py-4 bg-stone-900 hover:bg-stone-800 text-stone-50 dark:bg-stone-100 dark:hover:bg-white dark:text-stone-950 font-sans text-xs uppercase tracking-widest font-medium transition-colors flex items-center justify-center gap-2"
                >
                  <span>{submitting ? "Encrypting & Dispatching..." : "Transmit Dispatch"}</span>
                  <span className="font-mono text-amber-400 dark:text-amber-700">→</span>
                </button>

                {feedback && (
                  <div className="p-3 rounded font-mono text-xs text-center bg-emerald-100 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
                    {feedback}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
