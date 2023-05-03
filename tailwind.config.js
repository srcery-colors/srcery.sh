const defaultTheme = require('tailwindcss/defaultTheme');
const palette = require("@srcery-colors/srcery-palette");

function parsePalette() {
  return Object.entries(palette.primary).reduce((acc, [k, v]) => {
    return {
      ...acc,
      [v.termcol]: v.hex
    }
  }, {})
}

module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.html',
    './src/**/*.hbs',
    './src/**/*.js',
    './dist/**/*.html',
    './dist/**/*.js',
  ],
  darkMode: true, // or 'media' or 'class'
  content: [],

  theme: {
    extend: {
      fontFamily: {
        'iosevka': ['Iosevka Custom Web', ...defaultTheme.fontFamily.sans],
      },
      colors: parsePalette(),
    },
  },
  plugins: [],
}

