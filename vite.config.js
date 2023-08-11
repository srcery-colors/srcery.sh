import { defineConfig } from "vite";
import { resolve } from "path";
import handlebars from "vite-plugin-handlebars";

module.exports = defineConfig({
  root: resolve(__dirname, "src"),
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, "src/partials"),
    }),
  ],
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        themes: resolve(__dirname, "src/themes/index.html"),
        resources: resolve(__dirname, "src/resources/index.html"),
        community: resolve(__dirname, "src/community/index.html"),
      },
    },
  },
});
