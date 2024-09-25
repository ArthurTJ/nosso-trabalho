import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "theme-palette": {
          100: "#f3f5f7",
          200: "#F4F2DE",
          300: "#E9B384",
          400: "#4B778D",
          500: "#7C9D96",
          600: "#233E8B",
          "input-border": "#e5e5e5",
          "small-text": "#808080",
          grey: "#dddddd",
        },
      },
    },
  },

  plugins: [],
};
export default config;
