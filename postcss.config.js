/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        orange: {
          brand: '#FF7900',
          hover: '#E06A00',
        },
      },
    },
  },
  plugins: [],
};
