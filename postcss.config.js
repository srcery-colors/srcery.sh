// Srcery Color Palette
const colors = {
  transparent: 'transparent',
  black: '#1C1B19',
  red: '#EF2F27',
  green: '#519F50',
  yellow: '#FBB829',
  blue: '#2C78BF',
  magenta: '#E02C6D',
  cyan: '#0AAEB3',
  white: '#D0BFA1',
  brightblack: '#918175',
  brightred: '#F75341',
  brightgreen: '#98BC37',
  brightyellow: '#FED06E',
  brightblue: '#68A8E4',
  brightmagenta: '#FF5C8F',
  brightcyan: '#53FDE9',
  brightwhite: '#FCE8C3',
  orange: '#D75F00',
  brorange: '#FF8700',
  hard_black: '#121212',
  xgray1: '#262626',
  xgray2: '#303030',
  xgray3: '#3A3A3A',
  xgray4: '#444444',
  xgray5: '#4E4E4E',
  xgray6: '#585858'
}

// PostCSS Config
module.exports = {
  plugins: {
    tailwindcss: {
      config: {
        theme: {
          extend: { colors: colors },
          fontFamily: {
            iosevka: [
              'Iosevka Regular',
              'system-ui',
              'BlinkMacSystemFont',
              '-apple-system',
              'Segoe UI',
              'Roboto',
              'Oxygen',
              'Ubuntu',
              'Cantarell',
              'Fira Sans',
              'Droid Sans',
              'Helvetica Neue',
              'sans-serif'
            ]
          }
        }
      }
    },
    'postcss-preset-env': { stage: 1 },
    '@fullhuman/postcss-purgecss': {
      content: ['./src/**/*.html', './src/**/*.svg', './src/**/*.js'],
      defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
    }
  }
}
