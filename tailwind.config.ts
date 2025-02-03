import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        header: '#2f353a',
        navbar: '#3b4248',
        link: '#979a9d',
        primary: '#01bcf3',
        danger: '#fb3447',
        lightGray: '#f0f0f0',
        input: "rgba(0, 0, 0, .2)",
        inputDark: "rgba(0, 0, 0, .5)",
        inputText: "#9da1a4",
        h1Text: "#cfd8dc",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      }
    }
  },
  plugins: [],
} satisfies Config;