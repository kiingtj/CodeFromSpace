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
        'boton': '#343a40',
        'blanco': '#d9d9d9',
        'negro': '#080811',
        'rosa': '#ff3b90',
      },
      animation: {
        slowspin: 'spin 6s linear infinite', // Cambia "4s" al tiempo que prefieras
        slowpulse: 'pulse 4s infinite',
      },
    },
  },
  plugins: [],
}
