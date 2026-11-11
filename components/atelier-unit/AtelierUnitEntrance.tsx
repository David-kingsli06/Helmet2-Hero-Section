"use client";

import { useEffect } from "react";

export function AtelierUnitEntrance() {
  useEffect(() => {
    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      // Pause video if reduced motion is preferred
      const video = document.querySelector<HTMLVideoElement>(".video-element");
      if (video) {
        video.pause();
        video.removeAttribute("autoplay");
      }
      return;
    }

    const html = document.documentElement;
    html.classList.add("is-entering");

    let isCompleted = false;
    let fallbackTimer: ReturnType<typeof setTimeout> | null = null;
    let failsafeTimer: ReturnType<typeof setTimeout> | null = null;
    let fontTimeout: ReturnType<typeof setTimeout> | null = null;
    let rafId: number | null = null;

    const cleanup = () => {
      if (isCompleted) return;
      isCompleted = true;
      html.classList.remove("is-entering", "is-playing");
      if (fallbackTimer) clearTimeout(fallbackTimer);
      if (failsafeTimer) clearTimeout(failsafeTimer);
      if (fontTimeout) clearTimeout(fontTimeout);
      if (rafId) cancelAnimationFrame(rafId);
      document.removeEventListener("animationend", handleAnimationEnd);
    };

    // 4500ms safety failsafe
    failsafeTimer = setTimeout(() => {
      cleanup();
    }, 4500);

    // Fallback timer: 2200ms after playing starts
    const startPlaying = () => {
      rafId = requestAnimationFrame(() => {
        html.classList.add("is-playing");

        // 2200ms completion safety fallback
        fallbackTimer = setTimeout(() => {
          cleanup();
        }, 2200);
      });
    };

    // After document.fonts.ready or 1200ms timeout
    let fontsResolved = false;
    fontTimeout = setTimeout(() => {
      if (!fontsResolved) {
        fontsResolved = true;
        startPlaying();
      }
    }, 1200);

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        if (!fontsResolved) {
          fontsResolved = true;
          if (fontTimeout) clearTimeout(fontTimeout);
          startPlaying();
        }
      });
    }

    // Wait for animations starting with au- to finish
    const handleAnimationEnd = (e: AnimationEvent) => {
      if (e.animationName && e.animationName.startsWith("au-wipe")) {
        // au-wipe on Menu is the last choreographed entrance animation (starts at 1.02s + 0.6s = 1.62s)
        // Give a tiny tick before full cleanup
        setTimeout(() => {
          cleanup();
        }, 60);
      }
    };

    document.addEventListener("animationend", handleAnimationEnd);

    return () => {
      cleanup();
    };
  }, []);

  return null;
}
