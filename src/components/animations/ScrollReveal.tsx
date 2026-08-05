"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimationControls, useReducedMotion, type Variants } from "motion/react";
import { cn } from "@/lib/utils";

const premiumEase = [0.22, 1, 0.36, 1] as const;
const revealTransition = (delay = 0) => ({ duration: 0.72, delay, ease: premiumEase });

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: (delay = 0) => ({ opacity: 1, y: 0, transition: revealTransition(delay) })
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: (delay = 0) => ({ opacity: 1, x: 0, transition: revealTransition(delay) })
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: (delay = 0) => ({ opacity: 1, x: 0, transition: revealTransition(delay) })
};

export const fadeScale: Variants = {
  hidden: { opacity: 0, scale: 0.975 },
  visible: (delay = 0) => ({ opacity: 1, scale: 1, transition: revealTransition(delay) })
};

export const softFade: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({ opacity: 1, y: 0, transition: revealTransition(delay) })
};

export const lineReveal: Variants = {
  hidden: { opacity: 0, scaleX: 0 },
  visible: (delay = 0) => ({ opacity: 1, scaleX: 1, transition: revealTransition(delay) })
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } }
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: revealTransition() }
};

type RevealVariant = "fadeUp" | "fadeLeft" | "fadeRight" | "fadeScale" | "lineReveal" | "softFade";
type RevealTag = "div" | "article" | "figure" | "li" | "section" | "ul";

const variantsByName: Record<RevealVariant, Variants> = { fadeUp, fadeLeft, fadeRight, fadeScale, lineReveal, softFade };
const motionTags = {
  div: motion.div,
  article: motion.article,
  figure: motion.figure,
  li: motion.li,
  section: motion.section,
  ul: motion.ul
};

function useProgressiveReveal(variants: Variants, threshold: number) {
  const controls = useAnimationControls();
  const reduceMotion = useReducedMotion();
  const nodeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node || reduceMotion) return;

    const bounds = node.getBoundingClientRect();
    if (bounds.top <= window.innerHeight * 0.88) return;

    controls.set("hidden");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        controls.start("visible");
        observer.disconnect();
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [controls, reduceMotion, threshold]);

  return { controls, nodeRef };
}

export function ScrollReveal({
  children,
  className,
  variant = "fadeUp",
  delay = 0,
  threshold = 0.2,
  as = "div"
}: {
  children: React.ReactNode;
  className?: string;
  variant?: RevealVariant;
  delay?: number;
  threshold?: number;
  as?: RevealTag;
}) {
  const variants = variantsByName[variant];
  const { controls, nodeRef } = useProgressiveReveal(variants, threshold);
  const MotionTag = motionTags[as] as typeof motion.div;

  return (
    <MotionTag
      ref={nodeRef}
      className={className}
      variants={variants}
      initial={false}
      animate={controls}
      custom={delay}
    >
      {children}
    </MotionTag>
  );
}

export function StaggerReveal({ children, className, threshold = 0.2, as = "div" }: { children: React.ReactNode; className?: string; threshold?: number; as?: RevealTag }) {
  const { controls, nodeRef } = useProgressiveReveal(staggerContainer, threshold);
  const MotionTag = motionTags[as] as typeof motion.div;

  return (
    <MotionTag ref={nodeRef} className={className} variants={staggerContainer} initial={false} animate={controls}>
      {children}
    </MotionTag>
  );
}

export function StaggerItem({ children, className, as = "div" }: { children: React.ReactNode; className?: string; as?: RevealTag }) {
  const MotionTag = motionTags[as] as typeof motion.div;
  return <MotionTag className={cn(className)} variants={staggerItem}>{children}</MotionTag>;
}
