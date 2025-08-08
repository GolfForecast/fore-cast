/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['Spectral', 'serif'],
        ui: ['system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
};
