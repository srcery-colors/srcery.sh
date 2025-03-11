const palette = require("@srcery-colors/srcery-palette");

function parsePalette(palette) {
  return Object.entries(palette).reduce((acc, [k, v]) => {
    return {
      ...acc,
      [k]: v.hex,
    };
  }, {});
}

/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        ...parsePalette(palette.primary),
        ...parsePalette(palette.secondary),
      },
    },
  },
};

export default config;
