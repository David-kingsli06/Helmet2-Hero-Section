import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Atelier Unit — Craftwork, Technology, Design",
  description: "Craftwork and brand systems. Shaped by culture. Built with detail and technology.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0d0905",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
      </head>
      <body>{children}</body>
    </html>
  );
}
