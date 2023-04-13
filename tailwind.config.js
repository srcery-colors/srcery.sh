const defaultTheme = require('tailwindcss/defaultTheme');

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
        'Iosevka': ['Iosevka Regular', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}

