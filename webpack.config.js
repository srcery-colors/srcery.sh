const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const devMode = process.env.NODE_ENV !== 'production'
const tailwindcss = require('tailwindcss')

module.exports = () => {
  return {
    mode: devMode ? 'development' : 'production',
    entry: './src/main.js',
    output: {
      path: path.resolve(__dirname, './assets'),
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
                importLoaders: 1
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                parser: 'postcss-scss',
                plugins: loader =>
                  devMode
                    ? [
                        require('postcss-import'),
                        tailwindcss('./tailwind.config.js'),
                        require('precss'),
                        require('autoprefixer')
                      ]
                    : [
                        require('postcss-import'),
                        tailwindcss('./tailwind.config.js'),
                        require('precss'),
                        require('autoprefixer'),
                        require('cssnano')
                      ]
              }
            }
          ]
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'fonts/',
                publicPath: '../fonts' // Take the directory into account
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: './css/[name].css'
      }),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.$': 'jquery',
        'window.jQuery': 'jquery'
      })
    ]
  }
}
