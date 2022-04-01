const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',

  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif']
      }
    },

    fontFamily: {
      sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
      serif: ['Raleway', ...defaultTheme.fontFamily.serif]
    },

    container: {
      padding: '2rem',
      center: true
    },

    extend: {},
  },
  plugins: [],
}
