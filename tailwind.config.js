/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: '#02D2F8',
      },
      keyframes: {
        progress: {
          '0%': { transform: 'scaleX(0)' },
          '25%': { transform: 'scaleX(25)' },
          '50%': { transform: 'scaleX(50)' },
          '75%': { transform: 'scaleX(75)' },
          '100%': { transform: 'scaleX(100)' },
        },
        animation: {
          progress: 'progress 2s ease-in-out',
        },
      },
    },
  },
  plugins: [],
};
