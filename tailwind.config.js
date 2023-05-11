const defaultTheme = require('tailwindcss/defaultTheme');
const palette = require("@srcery-colors/srcery-palette");

function parsePalette(palette) {
  return Object.entries(palette).reduce((acc, [k, v]) => {
    return {
      ...acc,
      [k]: v.hex
    }
  }, {})
}

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'iosevka': ['Iosevka Custom Web', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        ...parsePalette(palette.primary),
        ...parsePalette(palette.secondary)
      },
      screens: {
        'tiny': '320px'
      },
      backgroundImage: {
        'triangle': "url('svg/triangle.svg')",
      },
      width: {
        'logo': '220px',
        'circle': '272px',
        'dot': '12px'
      },
      height: {
        'logo': '220px',
        'circle': '272px',
        'dot': '12px'
      }
    },
  },
  plugins: [],
}

