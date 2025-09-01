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
        'zenith-bg': '#FDFBF6',
        'zenith-primary': '#588157',
        'zenith-primary-dark': '#405e40',
        'zenith-text': '#212529',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-montserrat)', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
