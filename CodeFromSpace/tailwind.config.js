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
        'rosa': '#ff3b90',
        'blanco': '#d9d9d9',
        'negro': '#0b0d17',
      },
    },
  },
  plugins: [],
}
