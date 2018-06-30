module.exports = {
  syntax: 'postcss-scss',
  plugins: [
    require('tailwindcss')('./tailwind.js'),
    require('postcss-preset-env'),
    require('autoprefixer'),
    require('cssnano')({
      preset: 'default'
    })
  ]
}
