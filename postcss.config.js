module.exports = {
  plugins: {
    tailwindcss: { config: 'tailwind.config.js' },
    precss: {},
    autoprefixer: {},
    '@fullhuman/postcss-purgecss': {
      content: ['./src/**/*.html', './src/**/*.svg', './src/**/*.js'],
      defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
    }
  }
}
