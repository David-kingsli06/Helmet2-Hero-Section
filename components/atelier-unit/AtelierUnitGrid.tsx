import React from "react";

export function AtelierUnitGrid() {
  // 48 hairline columns covering the entire hero
  const columns = Array.from({ length: 48 });

  return (
    <div className="grid-container" aria-hidden="true">
      {columns.map((_, i) => (
        <i key={i} className="grid-col" />
      ))}
    </div>
  );
}
