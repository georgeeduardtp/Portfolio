"use client";

import { useEffect, useRef, useState, useSyncExternalStore, type ReactNode } from "react";
import { Pause, PlayArrow } from "@mui/icons-material";

const motionQuery = "(prefers-reduced-motion: reduce)";

function subscribeToMotionPreference(callback: () => void) {
  const query = window.matchMedia(motionQuery);
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

export default function PortfolioMotion({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  const progress = useRef<HTMLDivElement>(null);
  const revealed = useRef(new WeakSet<Element>());
  const [paused, setPaused] = useState(false);
  const reducedMotion = useSyncExternalStore(
    subscribeToMotionPreference,
    () => window.matchMedia(motionQuery).matches,
    () => true,
  );
  const motionEnabled = !paused && !reducedMotion;

  useEffect(() => {
    if (!motionEnabled || !root.current || !("IntersectionObserver" in window)) return;

    const animations = new Set<Animation>();
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting || revealed.current.has(entry.target)) continue;
        const element = entry.target as HTMLElement;
        revealed.current.add(element);
        observer.unobserve(element);

        const text = element.dataset.reveal === "text";
        const portrait = element.dataset.reveal === "portrait";
        const animation = element.animate([
          { opacity: 0, transform: text ? "translateY(108%)" : portrait ? "translateY(22px) scale(.96)" : "translateY(24px)" },
          { opacity: 1, transform: "translateY(0) scale(1)" },
        ], {
          duration: text ? 1050 : 800,
          delay: Number(element.dataset.delay || 0),
          easing: "cubic-bezier(.16, 1, .3, 1)",
          fill: "backwards",
        });
        animations.add(animation);
        animation.onfinish = () => animations.delete(animation);
      }
    }, { threshold: 0.08 });

    root.current.querySelectorAll<HTMLElement>("[data-reveal]").forEach(element => {
      if (!revealed.current.has(element)) observer.observe(element);
    });

    return () => {
      observer.disconnect();
      // Cancelling restores the visible base styles, including when motion is paused.
      animations.forEach(animation => animation.cancel());
    };
  }, [motionEnabled]);

  useEffect(() => {
    let frame: number | null = null;
    const update = () => {
      const available = document.documentElement.scrollHeight - window.innerHeight;
      const fraction = available > 0 ? Math.min(1, Math.max(0, window.scrollY / available)) : 0;
      if (progress.current) progress.current.style.transform = `scaleX(${fraction})`;
      frame = null;
    };
    const schedule = () => {
      if (frame === null) frame = window.requestAnimationFrame(update);
    };
    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      if (frame !== null) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  return (
    <div className="portfolio" ref={root} data-motion={motionEnabled ? "active" : "paused"}>
      <div className="reading-progress" ref={progress} aria-hidden="true" />
      {children}
      {!reducedMotion && (
        <button
          className="motion-toggle icon-button"
          onClick={() => setPaused(value => !value)}
          aria-label={paused ? "Reanudar animaciones" : "Pausar animaciones"}
          title={paused ? "Reanudar animaciones" : "Pausar animaciones"}
        >
          {paused ? <PlayArrow /> : <Pause />}
        </button>
      )}
    </div>
  );
}
