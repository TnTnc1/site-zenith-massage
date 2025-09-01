/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Fond principal : #FDFBF6
        'zenith-bg': '#FDFBF6',
        // Couleur d'accentuation (Vert sauge) : #588157
        'zenith-primary': '#588157',
        'zenith-primary-dark': '#405e40', // Pour le survol
        // Texte : #212529
        'zenith-text': '#212529',
      },
      fontFamily: {
        // Titres (Serif)
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        // Textes courants (Sans-serif)
        sans: ['var(--font-montserrat)', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
