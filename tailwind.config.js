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
  content: [
    './src/**/*.{js,html}',
  ],
  darkMode: true, // or 'media' or 'class'
  content: ["./src/**/*.{html,js}"],

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

