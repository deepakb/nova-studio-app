/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        display: ['Syne', 'sans-serif'],
        mono: ['Courier New', 'monospace'],
      },
      colors: {
        brutal: {
          bg: '#050505',
          text: '#FFFFFF',
          green: '#CCFF00', // Acid Green
          pink: '#FF00FF', // Hot Pink
          gray: '#1A1A1A',
        }
      },
      cursor: {
        'none': 'none',
      }
    },
  },
  plugins: [],
}
