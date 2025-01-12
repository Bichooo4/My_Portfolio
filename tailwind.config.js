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
      animation: {
        fill: 'fillAnimation 1s ease-out forwards', // Increased duration
      },
      keyframes: {
        fillAnimation: {
          '0%': {
            backgroundColor: '#2C2C33',  // Dark color (unfilled state)
            transform: 'scale(0.8)',  // Start smaller
          },
          '50%': {
            backgroundColor: '#F0B65A',  // Orange color (midway)
            transform: 'scale(1.1)',  // Slightly grow the square
          },
          '100%': {
            backgroundColor: '#F0B65A',  // Orange color (filled state)
            transform: 'scale(1)',  // Return to normal size
          },
        },
      },
    },
  },
  plugins: [],
};
