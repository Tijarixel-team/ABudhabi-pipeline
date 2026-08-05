"use client";

import { Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";
import { assets } from "@/config/assets";
import { company } from "@/config/company";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/animations/Reveal";

export function HomeHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduceMotion = useReducedMotion();
  const [manuallyPaused, setManuallyPaused] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const video = videoRef.current;
    if (video) {
      video.defaultMuted = true;
      video.muted = true;
      video.volume = 0;
    }
    if (media.matches) {
      video?.pause();
    }
  }, []);

  const toggleVideo = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play();
      setManuallyPaused(false);
    } else {
      video.pause();
      setManuallyPaused(true);
    }
  };

  return (
    <section data-no-blueprint className="relative z-30 min-h-[760px] overflow-hidden bg-logo-bg pt-[72px] text-white lg:min-h-[820px]">
      <div className="absolute inset-0 bg-[url('/images/hero/adpf-hero.png')] bg-cover bg-center" aria-hidden />
      <video
        ref={videoRef}
        className="hero-video absolute inset-0 size-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={assets.hero}
        aria-hidden="true"
        onVolumeChange={(event) => {
          event.currentTarget.muted = true;
          event.currentTarget.volume = 0;
        }}
      >
        <source src={assets.heroVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,hsl(var(--logo-bg)/.96),hsl(var(--logo-bg)/.78)_48%,hsl(var(--logo-bg)/.22))]" />
      <div className="section-shell relative flex min-h-[676px] items-center py-20 lg:min-h-[736px]">
        <Reveal className="max-w-[780px]">
          <h1 className="max-w-4xl break-words text-[2.3rem] font-normal leading-[1.05] sm:text-[3.25rem] lg:text-[4.75rem]">
            Composite pipe systems for critical UAE infrastructure.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/74 sm:text-xl">
            {company.name} manufactures GRP, GRV, GRE and pre-insulated pipe systems for water, energy, industrial and utility applications.
          </p>
          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Button href="/contact" variant="inverted">Request a Quote</Button>
            <Button href="/products" variant="secondary">Explore product systems</Button>
          </div>
        </Reveal>
      </div>
      <button type="button" onClick={toggleVideo} className="absolute bottom-7 right-7 inline-flex size-12 items-center justify-center rounded-full border border-white/30 bg-logo-bg/70 text-white transition hover:bg-logo-bg focus-visible:outline-offset-4 motion-reduce:hidden" aria-label={manuallyPaused || reduceMotion ? "Play background video" : "Pause background video"}>
        {manuallyPaused || reduceMotion ? <Play aria-hidden size={18} /> : <Pause aria-hidden size={18} />}
      </button>
    </section>
  );
}
