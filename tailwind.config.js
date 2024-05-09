/** @type {import('tailwindcss').Config} */

export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    colors: {
      black: '#242424',
      white: '#ffffff'
    },
    fontFamily: {
      body: ['Poppins', 'sans-serif'],
      header: ['Oswald', 'sans-serif']
    },
    extend: {}
  },
  plugins: []
}
