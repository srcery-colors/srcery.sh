const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: './js/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [
          // MiniCssExtractPlugin.loader,
          process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: (loader) => [
                require('postcss-import')({
                  root: loader.resourcePath
                }),
                require('tailwindcss')('./tailwind.js'),
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
    })
  ]
}
