// Vite Config

import { resolve } from "path";

import { defineConfig } from "vite";
import handlebars from "vite-plugin-handlebars";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  root: resolve(__dirname, "src"),
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, "src/partials"),
    }),
    tailwindcss(),
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
