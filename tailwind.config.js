/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        orange: {
          brand: '#FF7900', // Orange officiel ODC
          hover: '#E06A00',
        },
      },
    },
  },
  plugins: [],
};
