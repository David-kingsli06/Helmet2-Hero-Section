import React from "react";
import { AtelierUnitLogo } from "./AtelierUnitLogo";
import { AtelierUnitVideo } from "./AtelierUnitVideo";
import { AtelierUnitGrid } from "./AtelierUnitGrid";
import { AtelierUnitServices } from "./AtelierUnitServices";
import { AtelierUnitGrain } from "./AtelierUnitGrain";
import { AtelierUnitParallax } from "./AtelierUnitParallax";
import { AtelierUnitEntrance } from "./AtelierUnitEntrance";

// Exact letter definitions for the 3 headline lines
const line1Letters = [
  { char: "C", x: "-3.04844em", sx: 1.0769, k: 1.0055 },
  { char: "R", x: "-2.35055em", sx: 1.0093 },
  { char: "A", x: "-1.68881em", sx: 1.0542 },
  { char: "F", x: "-1.00202em", sx: 0.9712 },
  { char: "T", x: "-0.41697em", sx: 0.9516 },
  { char: "W", x: "0.15715em", sx: 0.9612 },
  { char: "O", x: "1.01367em", sx: 0.9833, k: 1.0055 },
  { char: "R", x: "1.69181em", sx: 1.0093 },
  { char: "K", x: "2.33501em", sx: 0.9371 },
];

const line2Letters = [
  { char: "T", x: "-3.16648em", sx: 0.9516 },
  { char: "E", x: "-2.64032em", sx: 0.9875 },
  { char: "C", x: "-2.06523em", sx: 1.0678, k: 1.0055 },
  { char: "H", x: "-1.36691em", sx: 1.0031 },
  { char: "N", x: "-0.71845em", sx: 1.0161 },
  { char: "O", x: "-0.05103em", sx: 0.9833, k: 1.0055 },
  { char: "L", x: "0.62228em", sx: 0.9965 },
  { char: "O", x: "1.14822em", sx: 0.9833, k: 1.0055 },
  { char: "G", x: "1.85243em", sx: 1.0231, k: 1.0055 },
  { char: "Y", x: "2.50618em", sx: 0.9953 },
];

const line3Letters = [
  { char: "D", x: "-1.77928em", sx: 1.0751 },
  { char: "E", x: "-1.09091em", sx: 0.9983 },
  { char: "S", x: "-0.48284em", sx: 1.0123 },
  { char: "I", x: "0.11501em", sx: 1.053 },
  { char: "G", x: "0.32558em", sx: 1.0231, k: 1.0055 },
  { char: "N", x: "1.03138em", sx: 1.0062 },
];

export function AtelierUnitHero() {
  return (
    <div className="hero">
      {/* Background Video */}
      <AtelierUnitVideo />

      {/* 48 hairline columns grid */}
      <AtelierUnitGrid />

      {/* Analog Fine Film Grain Texture */}
      <AtelierUnitGrain />

      {/* Logo */}
      <AtelierUnitLogo />

      {/* Interactive Services with Peer Dimming */}
      <AtelierUnitServices />

      {/* Decorative Rule */}
      <div className="rule" aria-hidden="true" />

      {/* Headline */}
      <h1 className="hl" aria-label="Craftwork, technology, design">
        {/* Line 1: CRAFTWORK */}
        <span
          className="hl__line"
          aria-hidden="true"
          style={
            {
              "--b": "1.56780em",
              "--dy": "-0.00275em",
              "--sy": 1.0063,
            } as React.CSSProperties
          }
        >
          <span className="hl__clip">
            <span
              className="hl__track"
              style={{ "--delay": "0.10s" } as React.CSSProperties}
            >
              {line1Letters.map((l, i) => (
                <span
                  key={i}
                  className="hl__letter"
                  style={
                    {
                      "--x": l.x,
                      "--sx": l.sx,
                      "--k": l.k ?? 1,
                    } as React.CSSProperties
                  }
                >
                  {l.char}
                </span>
              ))}
            </span>
          </span>
        </span>

        {/* Line 2: TECHNOLOGY */}
        <span
          className="hl__line"
          aria-hidden="true"
          style={
            {
              "--b": "0.78390em",
              "--dy": "0.00059em",
              "--sy": 0.995,
            } as React.CSSProperties
          }
        >
          <span className="hl__clip">
            <span
              className="hl__track"
              style={{ "--delay": "0.18s" } as React.CSSProperties}
            >
              {line2Letters.map((l, i) => (
                <span
                  key={i}
                  className="hl__letter"
                  style={
                    {
                      "--x": l.x,
                      "--sx": l.sx,
                      "--k": l.k ?? 1,
                    } as React.CSSProperties
                  }
                >
                  {l.char}
                </span>
              ))}
            </span>
          </span>
        </span>

        {/* Line 3: DESIGN */}
        <span
          className="hl__line"
          aria-hidden="true"
          style={
            {
              "--b": "0.00000em",
              "--dy": "-0.00281em",
              "--sy": 0.9918,
            } as React.CSSProperties
          }
        >
          <span className="hl__clip">
            <span
              className="hl__track"
              style={{ "--delay": "0.26s" } as React.CSSProperties}
            >
              {line3Letters.map((l, i) => (
                <span
                  key={i}
                  className="hl__letter"
                  style={
                    {
                      "--x": l.x,
                      "--sx": l.sx,
                      "--k": l.k ?? 1,
                    } as React.CSSProperties
                  }
                >
                  {l.char}
                </span>
              ))}
            </span>
          </span>
        </span>
      </h1>

      {/* Physics-Based Camera / Parallax Controller */}
      <AtelierUnitParallax />

      {/* Entrance Choreography Controller */}
      <AtelierUnitEntrance />
    </div>
  );
}
