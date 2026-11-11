import React from "react";

export function AtelierUnitGrain() {
  return (
    <div
      className="grain-overlay"
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 5,
        pointerEvents: "none",
        opacity: 0.042,
        mixBlendMode: "screen",
      }}
    >
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "block", width: "100%", height: "100%" }}
      >
        <filter id="au-noise-filter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.75"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#au-noise-filter)" />
      </svg>
    </div>
  );
}
