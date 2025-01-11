/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pageBackground: '#1e1e25',
        navFooterpageBackground: '#2c2c33'
      },
    },
  },
  plugins: [],
};