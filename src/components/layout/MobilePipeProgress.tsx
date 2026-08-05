"use client";

import { useEffect, useRef, useState } from "react";

export function MobilePipeProgress() {
  const [progress, setProgress] = useState(0);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const update = () => {
      const available = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(available > 0 ? Math.min(1, Math.max(0, window.scrollY / available)) : 0);
      frameRef.current = null;
    };
    const requestUpdate = () => {
      if (frameRef.current === null) frameRef.current = window.requestAnimationFrame(update);
    };

    frameRef.current = window.requestAnimationFrame(update);
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (frameRef.current !== null) window.cancelAnimationFrame(frameRef.current);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  const value = Math.round(progress * 100);
  const buildTop = 168 - progress * 144;

  return (
    <div
      className={`pointer-events-none fixed right-1.5 top-1/2 z-40 -translate-y-1/2 transition duration-300 sm:right-3 lg:right-5 ${progress > 0.015 && progress < 0.995 ? "translate-x-0 opacity-100" : "translate-x-3 opacity-0"}`}
      role="progressbar"
      aria-label="Pipe manufacturing progress"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={value}
    >
      <div className="relative h-36 w-12 lg:h-44 lg:w-14">
        <svg viewBox="0 0 62 168" preserveAspectRatio="xMidYMax meet" className="size-full" aria-hidden="true">
          <defs>
            <linearGradient id="pipe-shell" x1="0" x2="1">
              <stop offset="0" stopColor="#03192d" />
              <stop offset="0.28" stopColor="#174a73" />
              <stop offset="0.52" stopColor="#082f54" />
              <stop offset="0.76" stopColor="#2c638c" />
              <stop offset="1" stopColor="#021322" />
            </linearGradient>
            <linearGradient id="fresh-resin" x1="0" x2="1">
              <stop offset="0" stopColor="#082b4a" />
              <stop offset="0.5" stopColor="#4b7394" />
              <stop offset="1" stopColor="#123c61" />
            </linearGradient>
            <clipPath id="manufactured-pipe">
              <rect x="20" y={buildTop} width="22" height={168 - buildTop} rx="9" />
            </clipPath>
            <filter id="resin-sheen" x="-80%" y="-80%" width="260%" height="260%">
              <feGaussianBlur stdDeviation="1.35" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          <path d="M31 25V167" stroke="rgba(6,53,88,.2)" strokeWidth="20" strokeLinecap="round" />

          <g clipPath="url(#manufactured-pipe)">
            <rect x="21" y="24" width="20" height="144" rx="9" fill="url(#pipe-shell)" />
            <path d="M25 25V168" stroke="rgba(150,190,220,.3)" strokeWidth="0.8" />
            <path d="M37 25V168" stroke="rgba(1,17,31,.46)" strokeWidth="0.8" />
          </g>

          {progress > 0.01 && (
            <>
              <ellipse cx="31" cy={buildTop} rx="11" ry="4" fill="url(#fresh-resin)" stroke="#6f91ab" strokeWidth="0.65" filter="url(#resin-sheen)" />
              <g transform={`translate(31 ${buildTop - 1})`}>
                <path d="M-22 -4H-14" stroke="#030405" strokeWidth="5" strokeLinecap="round" />
                <circle cx="-20" cy="-4" r="3.2" fill="#11161b" stroke="#343b43" strokeWidth="0.7" />
                <path d="M-14 -7H14V1C14 4.5 9 6 0 6S-14 4.5-14 1Z" fill="#030405" />
                <ellipse cx="0" cy="-7" rx="14" ry="4" fill="#171c21" stroke="#030405" strokeWidth="1" />
                <ellipse cx="0" cy="-7" rx="9.5" ry="2.4" fill="#082f54" stroke="#3c4650" strokeWidth="0.65" />
                <path d="M-11 1C-7 3 7 3 11 1" fill="none" stroke="#30373e" strokeWidth="0.8" strokeLinecap="round" />
              </g>
            </>
          )}

        </svg>
      </div>
    </div>
  );
}
