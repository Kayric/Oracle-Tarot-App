/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // We define our custom simple palette here
        'brand-dark': '#1e293b', // Slate 800
        'brand-light': '#f8fafc', // Slate 50
        'accent-gold': '#d97706', // Amber 600
      }
    },
  },
  plugins: [],
}