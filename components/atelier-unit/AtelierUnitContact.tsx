"use client";

import React, { useState } from "react";

export function AtelierUnitContact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    if (navigator.clipboard) {
      navigator.clipboard.writeText("hello@atelierunit.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } else {
      window.location.href = "mailto:hello@atelierunit.com";
    }
  };

  return (
    <address className="contact small">
      <a
        href="mailto:hello@atelierunit.com"
        onClick={handleCopyEmail}
        className="contact-line contact-email"
        style={{
          "--delay": "0.88s",
          position: "relative",
          cursor: "pointer",
        } as React.CSSProperties}
        title="Click to copy address or send email"
      >
        <span>hello@atelierunit.com</span>
        {copied && (
          <span
            style={{
              position: "absolute",
              left: 0,
              top: "-1.35em",
              fontSize: "0.85em",
              letterSpacing: "0.02em",
              textTransform: "uppercase",
              color: "#ffffff",
              backgroundColor: "rgba(20, 20, 20, 0.9)",
              padding: "2px 6px",
              borderRadius: "2px",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              pointerEvents: "none",
            }}
          >
            Copied
          </span>
        )}
      </a>
      <span
        className="contact-line contact-loc"
        style={{ "--delay": "0.93s" } as React.CSSProperties}
      >
        Milano, EST 2013
      </span>
    </address>
  );
}
