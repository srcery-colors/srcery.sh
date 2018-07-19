const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const devMode = process.env.NODE_ENV !== 'production'

module.exports = () => {
  return {
    mode: devMode ? 'development' : 'production',
    entry: './src/app.js',
    output: {
      path: path.resolve(__dirname, '../assets'),
      filename: './js/bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.(css|scss)$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                minimize: false
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: loader =>
                  devMode
                    ? [
                      require('postcss-easy-import'),
                      require('postcss-nested'),
                      require('postcss-preset-env'),
                      require('tailwindcss')('./config/tailwind.js')
                    ]
                    : [
                      require('postcss-easy-import'),
                      require('postcss-nested'),
                      require('postcss-preset-env'),
                      require('tailwindcss')('./config/tailwind.js'),
                      require('cssnano')
                    ],
                parser: 'postcss-scss'
              }
            }
          ]
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [{
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
              publicPath: '../fonts' // Take the directory into account
            }
          }]
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: './css/[name].css'
      }),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
      })
    ]
  }
}
