/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'gris': '#1a202c',
        'fosforito': '#39ff14',
        'verde': '#00ff7f',
        'blanco': '#d9d9d9'
      },
    },
  },
  plugins: [],
}
