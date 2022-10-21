/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    fontSize: {
      xs: 12,
      sm: 14,
      md: 16,
      lg: 20,
      xl: 24,
      '2xl': 32,
    },
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',

      gray: {
        900: '#202024',
        650: '#2d2d36',
        400: '#7c7c8a',
        250: '#2b2b2e',
        200: '#c4c4cc',
        100: '#e1e1e6',
      },

      cyan: {
        500: '#81d8f7',
        300: '#9efff3'
      }


    },
    extend: {
      sans: 'Inter, sans-serif'
    },
  },
  plugins: [],
}
