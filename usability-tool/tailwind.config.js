/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx}',
    './app/(ad-home)/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        "usability-950": "#000000",
        "usability-900": "#0C1821",
        "usability-800": "#1B2A41",
        "usability-700": "#324A5F",
        "usability-650": "#6487a6",
        "usability-650-hover": "#85b2da",
        "usability-600": "#CCC9DC",
      }
    },
  },
  plugins: [],
}

