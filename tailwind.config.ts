import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/tile.svg')",
      },
      colors: {
        primary: {
          100: "#F2F6FB",
          200: "#E5EDF7",
          300: "#C7D9EE",
          400: "#A5C3E5",
          500: "#79AADC",
          600: "#2C8DD2",
          700: "#277EBC",
          800: "#226DA3",
          900: "#1C5985",
          1000: "#143F5E",
        },
        secondary: {
          100: "#F2F2F2",
          200: "#E4E4E5",
          300: "#C6C6C7",
          400: "#A2A2A4",
          500: "#737478",
          600: "#0E1828",
          700: "#0D1524",
          800: "#0B131F",
          900: "#090F19",
          1000: "#060B12",
        },
        tertiary: {
          100: "#F2F2F3",
          200: "#E4E5E6",
          300: "#C6C7C9",
          400: "#A2A4A7",
          500: "#74767D",
          600: "#15233A",
          700: "#131F34",
          800: "#10182D",
          900: "#0D1625",
          1000: "#09101A",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
