const { defineConfig } = require("vite");
import { resolve } from "path"

module.exports = defineConfig({
  root: resolve(__dirname, "src"),
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        themes: resolve(__dirname, "src/themes/index.html") ,
        resources: resolve(__dirname, "src/resources/index.html"),
        community: resolve(__dirname, "src/community/index.html")
      }
    }
  }
})
