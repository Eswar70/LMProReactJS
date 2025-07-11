/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
    boxShadow: {
      neon: '0 0 10px 2px #0ff, 0 0 20px 4px #0ff'
    },
    animation: {
      fadeIn: 'fadeIn 0.5s ease-out forwards'
    },
    keyframes: {
      fadeIn: { '0%': { opacity: 0 }, '100%': { opacity: 1 } }
    }
  },
  },
  plugins: [],
}

