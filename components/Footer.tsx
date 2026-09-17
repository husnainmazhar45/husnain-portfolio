"use client";

import React, { useEffect, useState } from "react";

export function Footer() {
  const [timeString, setTimeString] = useState("12:00 PKT");
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());

    const updateClock = () => {
      try {
        const options: Intl.DateTimeFormatOptions = {
          timeZone: "Asia/Karachi",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        };
        const formatter = new Intl.DateTimeFormat([], options);
        setTimeString(`${formatter.format(new Date())} PKT`);
      } catch (err) {
        setTimeString("12:00 PKT");
      }
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="hairline-t bg-stone-100 dark:bg-stone-950 py-16 text-stone-600 dark:text-stone-400 font-sans text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="space-y-2">
          <span className="font-serif text-lg text-stone-900 dark:text-stone-100 font-medium block">
            Husnain Mazhar
          </span>
          <p className="font-mono text-[11px] text-stone-500">
            Software Engineer · Python · Backend Architecture · Applied AI
          </p>
          <p className="text-[11px] text-stone-400 font-serif italic">
            Designed with classical editorial restraint & built with artisanal craft.
          </p>
        </div>

        {/* Live Clock & Status */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 font-mono text-[11px]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>
              LAHORE: <span>{timeString}</span>
            </span>
          </div>
          <div className="text-stone-400">
            © <span>{year}</span> HUSNAIN MAZHAR. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </footer>
  );
}
