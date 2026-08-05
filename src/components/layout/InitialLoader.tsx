"use client";

import { useEffect, useState } from "react";
import { LoadingVisual } from "@/components/layout/LoadingVisual";

export function InitialLoader() {
  const [phase, setPhase] = useState<"visible" | "leaving" | "hidden">("visible");

  useEffect(() => {
    const leaveTimer = window.setTimeout(() => setPhase("leaving"), 950);
    const hideTimer = window.setTimeout(() => setPhase("hidden"), 1450);
    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  if (phase === "hidden") return null;
  return <LoadingVisual leaving={phase === "leaving"} />;
}
