"use client";

import React, { useEffect } from "react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      id="resume-modal"
      className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-stone-50 dark:bg-stone-900 max-w-2xl w-full hairline-all p-6 sm:p-8 rounded shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 font-mono text-sm"
          aria-label="Close modal"
        >
          ✕ ESC
        </button>

        <div className="space-y-6">
          <div className="hairline-b pb-4">
            <span className="font-mono text-xs text-amber-800 dark:text-amber-400 uppercase tracking-widest block font-medium">
              CURRICULUM VITAE ABSTRACT
            </span>
            <h3 className="font-serif text-3xl text-stone-900 dark:text-stone-100 mt-1">
              Husnain Mazhar
            </h3>
            <p className="font-mono text-xs text-stone-500">
              Lahore, Pakistan · Software Engineer (Backend & AI)
            </p>
          </div>

          <div className="space-y-4 font-sans text-sm text-stone-700 dark:text-stone-300">
            <div>
              <h4 className="font-serif text-lg font-medium text-stone-900 dark:text-stone-100">
                Summary
              </h4>
              <p className="font-light text-xs sm:text-sm mt-1">
                Software Engineer with focused specialization in Python, FastAPI, Django, scalable API architecture, vector databases (Qdrant), and computer vision pipelines (MediaPipe, OpenCV). Graduate of UET Lahore.
              </p>
            </div>

            <div>
              <h4 className="font-serif text-lg font-medium text-stone-900 dark:text-stone-100">
                Core Competencies
              </h4>
              <p className="font-mono text-xs mt-1 text-stone-600 dark:text-stone-400 leading-relaxed">
                Python 3, FastAPI, Django/DRF, PostgreSQL, MongoDB, Qdrant, RAG Architecture, MediaPipe, OpenCV, Docker, JWT, SQLAlchemy, Git.
              </p>
            </div>

            <div>
              <h4 className="font-serif text-lg font-medium text-stone-900 dark:text-stone-100">
                Education
              </h4>
              <p className="text-xs sm:text-sm mt-1">
                B.S. in Computer Science — University of Engineering and Technology (UET), Lahore.
              </p>
            </div>
          </div>

          <div className="hairline-t pt-4 flex items-center justify-between font-mono text-xs">
            <a
              href="mailto:husnain.mazhar.dev@gmail.com?subject=Husnain%20Mazhar%20Full%20Resume%20Request"
              className="px-4 py-2 bg-amber-800 text-amber-50 rounded hover:bg-amber-900 transition-colors"
            >
              Request Formal PDF Version
            </a>
            <span className="text-stone-400 text-[10px]">VERIFIED 2026 ARCHIVE</span>
          </div>
        </div>
      </div>
    </div>
  );
}
