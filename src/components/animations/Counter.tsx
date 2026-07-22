"use client";

import { useEffect, useRef, useState } from "react";
import { formatNumber } from "@/lib/utils";

export function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [display, setDisplay] = useState(value);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry?.isIntersecting) return;
      let frame = 0;
      const total = 34;
      const tick = () => {
        frame += 1;
        setDisplay(Math.round((value * frame) / total));
        if (frame < total) requestAnimationFrame(tick);
      };
      tick();
      observer.disconnect();
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {formatNumber(display)}
      {suffix}
    </span>
  );
}
