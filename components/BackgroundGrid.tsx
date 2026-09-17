import React from "react";

export function BackgroundGrid() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 flex justify-between max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 select-none"
      aria-hidden="true"
    >
      <div className="w-px h-full" style={{ backgroundColor: "var(--grid-line)" }}></div>
      <div className="w-px h-full hidden sm:block" style={{ backgroundColor: "var(--grid-line)" }}></div>
      <div className="w-px h-full hidden lg:block" style={{ backgroundColor: "var(--grid-line)" }}></div>
      <div className="w-px h-full hidden md:block" style={{ backgroundColor: "var(--grid-line)" }}></div>
      <div className="w-px h-full" style={{ backgroundColor: "var(--grid-line)" }}></div>
    </div>
  );
}
