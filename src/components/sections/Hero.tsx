"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { assets } from "@/config/assets";
import { company } from "@/config/company";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/animations/Reveal";

export function HomeHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const video = videoRef.current;
    if (video) {
      video.defaultMuted = true;
      video.muted = true;
      video.volume = 0;
    }
    if (!video) return;

    let cancelled = false;
    const showPoster = () => {
      if (!cancelled) setAutoplayBlocked(true);
    };

    if (media.matches) {
      video.pause();
      const frame = window.requestAnimationFrame(showPoster);
      return () => {
        cancelled = true;
        window.cancelAnimationFrame(frame);
      };
    }

    const playback = video.play();
    playback?.then(() => {
      if (!cancelled) setAutoplayBlocked(false);
    }).catch(showPoster);

    const verifyTimer = window.setTimeout(() => {
      if (video.paused) showPoster();
    }, 700);

    return () => {
      cancelled = true;
      window.clearTimeout(verifyTimer);
    };
  }, []);

  const startVideo = async () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.volume = 0;
    try {
      await video.play();
      setAutoplayBlocked(false);
    } catch {
      setAutoplayBlocked(true);
    }
  };

  return (
    <section data-no-blueprint className="relative z-30 min-h-[760px] overflow-hidden bg-logo-bg pt-[72px] text-white lg:min-h-[820px]">
      <div className="absolute inset-0 z-0 bg-[url('/images/hero/adpf-hero.png')] bg-cover bg-center" aria-hidden />
      <video
        ref={videoRef}
        className="hero-video absolute inset-0 z-[1] size-full object-cover"
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
        onPlaying={() => setAutoplayBlocked(false)}
      >
        <source src={assets.heroVideo} type="video/mp4" />
      </video>
      {autoplayBlocked ? <Image src={assets.heroFirstFrame} alt="" fill priority sizes="100vw" className="absolute inset-0 z-[2] object-cover md:hidden" aria-hidden /> : null}
      <div className="absolute inset-0 z-10 bg-[linear-gradient(90deg,hsl(var(--logo-bg)/.96),hsl(var(--logo-bg)/.78)_48%,hsl(var(--logo-bg)/.22))]" />
      {autoplayBlocked ? (
        <button type="button" onClick={() => void startVideo()} className="absolute inset-0 z-[15] cursor-pointer md:hidden" aria-label="Play background video" />
      ) : null}
      <div className="section-shell relative z-20 flex min-h-[676px] items-center py-20 lg:min-h-[736px]">
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
    </section>
  );
}
