/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'fondo': '#fff',
        'gradienta': '#037298',
        'gradientb': '#004b65',
        'gradientc': '#003D52'
      },
      
    },
  },
  plugins: [],
}
