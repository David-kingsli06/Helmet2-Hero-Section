"use client";

import { useEffect } from "react";

export function AtelierUnitParallax() {
  useEffect(() => {
    // Only enable parallax on desktop / fine-pointer devices and when motion is allowed
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!hasFinePointer || prefersReducedMotion) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let rafId: number | null = null;
    let isMoving = false;

    const onMouseMove = (e: MouseEvent) => {
      // Normalized coordinates from center: -1 to 1
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      targetX = (e.clientX - cx) / cx;
      targetY = (e.clientY - cy) / cy;

      if (!isMoving) {
        isMoving = true;
        tick();
      }
    };

    const tick = () => {
      // Smooth lerp (linear interpolation with damping)
      const ease = 0.06;
      currentX += (targetX - currentX) * ease;
      currentY += (targetY - currentY) * ease;

      const root = document.documentElement;
      // Precision custom properties for multi-plane depth
      root.style.setProperty("--parallax-x", currentX.toFixed(4));
      root.style.setProperty("--parallax-y", currentY.toFixed(4));

      // Stop loop when resting to conserve CPU/GPU
      const diffX = Math.abs(targetX - currentX);
      const diffY = Math.abs(targetY - currentY);
      if (diffX > 0.0005 || diffY > 0.0005) {
        rafId = requestAnimationFrame(tick);
      } else {
        isMoving = false;
      }
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
      document.documentElement.style.removeProperty("--parallax-x");
      document.documentElement.style.removeProperty("--parallax-y");
    };
  }, []);

  return null;
}
