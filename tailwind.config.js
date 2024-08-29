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
          '100': '#bebfc0',
          '200': '#aaabac',
          '300': '#a0a1a2',
          '400': '#8c8d8e',
          '500': '#6e6f70',
          '600': '#505152',
          '700': '#323334',
          '800': '#1e1f20',
          '900': '#151617',
        },
        'dark-blue': {
          '200': '#94a3b8',
          '800': '#0f172a',
        }
      }},
  },
  plugins: [],
}

