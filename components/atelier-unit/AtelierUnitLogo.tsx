import React from "react";

export function AtelierUnitLogo() {
  // Seven squares: 8.2 x 8.2 each
  // Coordinates and entrance delays in exact order:
  // 1: 0.00, 0.00   delay: 0.700s
  // 2: 19.20, 0.00  delay: 0.735s
  // 3: 76.80, 0.00  delay: 0.840s
  // 4: 115.20, 0.00 delay: 0.910s
  // 5: 57.60, 10.90 delay: 0.805s
  // 6: 134.40, 10.90 delay: 0.945s
  // 7: 0.00, 21.80  delay: 0.700s
  const squares = [
    { x: 0.0, y: 0.0, delay: "0.700s" },
    { x: 19.2, y: 0.0, delay: "0.735s" },
    { x: 76.8, y: 0.0, delay: "0.840s" },
    { x: 115.2, y: 0.0, delay: "0.910s" },
    { x: 57.6, y: 10.9, delay: "0.805s" },
    { x: 134.4, y: 10.9, delay: "0.945s" },
    { x: 0.0, y: 21.8, delay: "0.700s" },
  ];

  return (
    <a href="#" className="logo" aria-label="Atelier Unit — home">
      <svg
        viewBox="0 0 142.60 30.00"
        shapeRendering="geometricPrecision"
        fill="var(--logo-ink, #ffffff)"
      >
        {squares.map((sq, i) => (
          <rect
            key={i}
            className="logo-sq"
            x={sq.x}
            y={sq.y}
            width="8.2"
            height="8.2"
            style={{ "--delay": sq.delay } as React.CSSProperties}
          />
        ))}
      </svg>
    </a>
  );
}
