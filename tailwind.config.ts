import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        atrament: ['var(--font-atrament)'],
      },
      colors: {
        'indigo-11': "#9EB1FF",
        'indigo-12': "#D6E1FF",
        'red-12': "#FFD1D9",
      },
    },
  },
  plugins: [],
};
export default config;
