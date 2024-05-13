/** @type {import('tailwindcss').Config} */

export default {
  important: true,
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      black: '#242424',
      white: '#ffffff'
    },
    fontFamily: {
      body: ['Poppins', 'sans-serif'],
      header: ['Bebas Neue', 'sans-serif']
    },
    extend: {}
  },
  plugins: []
}
