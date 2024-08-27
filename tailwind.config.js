/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './js/**/*.js',
    './index.html',
  ],
  theme: {
    extend: {
      colors: {
        'dark-gray': {
          '100': '#d4d4d4',
          '400': '#b6b6b6',
          '700': '#1c1d1e',
          '800': '#161719',
        },
      }},
  },
  plugins: [],
}

