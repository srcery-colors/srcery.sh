const { defineConfig } = require('vite');
import { resolve } from 'path'

module.exports = defineConfig({
  root: resolve(__dirname, 'src'),
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        themes: "themes/index.html",
        resources: "resources/index.html",
        community: "community/index.html"
      }
    }
  }
})
