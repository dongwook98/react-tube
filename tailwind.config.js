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
          from: { width: '0' },
          to: { width: '100%' },
        },
        animation: {
          progress: 'progress 3s ease-in-out',
        },
      },
    },
  },
  plugins: [],
};
