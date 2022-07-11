/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: {
          950: '#130329',
        },
        purple: {
          950: '#5A3E79',
        },
        mauve: {
          950: '#A76286',
        },
        coral: {
          950: '#FCA7A5',
        },
      },
    },
  },
  plugins: [],
};
