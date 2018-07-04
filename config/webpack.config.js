const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env = {}) => {
  return {
    mode: env.production ? 'production' : 'development',
    entry: './src/index.js',
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
                  env.production
                    ? [
                      require('postcss-import'),
                      require('tailwindcss')('./config/tailwind.js'),
                      require('postcss-preset-env'),
                      require('cssnano')
                    ]
                    : [
                      require('postcss-import'),
                      require('tailwindcss')('./config/tailwind.js'),
                      require('postcss-preset-env')
                    ]
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
        jQuery: 'jquery'
      })
    ]
  }
}
