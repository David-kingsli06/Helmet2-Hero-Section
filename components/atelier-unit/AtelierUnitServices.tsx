"use client";

import React, { useState } from "react";

export function AtelierUnitServices() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const services = [
    { name: "Brand Direction", cls: "service-1", delay: "0.56s" },
    { name: "Digital Products", cls: "service-2", delay: "0.62s" },
    { name: "Advanced Tech", cls: "service-3", delay: "0.68s" },
  ];

  return (
    <ul
      className="services-list"
      aria-label="Services"
      onMouseLeave={() => setHoveredIdx(null)}
    >
      {services.map((s, i) => {
        const isDimmed = hoveredIdx !== null && hoveredIdx !== i;
        const isFocused = hoveredIdx === i;

        return (
          <li
            key={i}
            className={`service-item ${s.cls}`}
            style={
              {
                "--delay": s.delay,
                opacity: isDimmed ? 0.38 : 1,
                cursor: "pointer",
                transition: "opacity 0.28s cubic-bezier(0.16, 1, 0.3, 1)",
              } as React.CSSProperties
            }
            onMouseEnter={() => setHoveredIdx(i)}
          >
            <span
              className="rv"
              style={{
                textShadow: isFocused
                  ? "0 0 12px rgba(255, 255, 255, 0.35)"
                  : "none",
                transition: "text-shadow 0.28s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              {s.name}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
