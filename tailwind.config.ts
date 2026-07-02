import type { Config } from "tailwindcss";

/**
 * Life OS — Taste Bible tokens.
 * Warm archival "private judgment file": warm-ink canvas, ivory paper,
 * three meaning-only signals (umber / dust / oxblood). No green, no neon.
 */
const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: { 900: "#14110D", 800: "#1B1713", 700: "#221C16", 600: "#2E2620" },
        paper: { 100: "#F4F1E8", 200: "#E9E3D4", 300: "#D8CFBB" },
        text: { DEFAULT: "#ECE6D8", muted: "#ADA593", faint: "#756B59" },
        umber: { DEFAULT: "#A06B43", text: "#BE8557" },
        dust: "#8FA0B6",
        oxblood: { DEFAULT: "#9A4F42", text: "#C06A5C" },
        recess: "#100D0A",
      },
      borderColor: {
        hair: "rgba(236,230,216,0.10)",
        "hair-strong": "rgba(236,230,216,0.14)",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Newsreader", "serif"],
        sans: ["var(--font-sans)", "Archivo", "sans-serif"],
        mono: ["var(--font-mono)", "IBM Plex Mono", "monospace"],
      },
      borderRadius: { sm: "2px", md: "3px" },
      boxShadow: { file: "0 18px 40px -26px rgba(0,0,0,0.75)" },
      letterSpacing: { meta: "0.16em" },
      maxWidth: { reading: "680px", masthead: "760px" },
      keyframes: {
        "file-in": {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        dot: { "0%,100%": { opacity: "0.4" }, "50%": { opacity: "1" } },
      },
      animation: {
        "file-in": "file-in 0.5s cubic-bezier(0.16,1,0.3,1) both",
        dot: "dot 1s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
