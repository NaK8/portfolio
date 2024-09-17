import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        ppmori: ["var(--font-ppmori)"],
        serif: ["var(--font-serif)"],
        sans: ["var(--font-sans)"],
      },
      animation: {
        "ping-large": "ping-large 1s ease-in-out infinite",
      },
      keyframes: {
        "ping-large": {
          "70%, 100%": {
            transform: "scale(3)",
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
