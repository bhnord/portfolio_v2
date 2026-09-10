/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        block: ["block"],
        chillax: ["chillax"],
      },
      colors: {
        bg: "var(--bg)",
        ink: "var(--ink)",
        muted: "var(--muted)",
        lime: "var(--lime)",
        pink: "var(--pink)",
        cyan: "var(--cyan)",
        yellow: "var(--yellow)",
      },
    },
  },
  plugins: [],
};