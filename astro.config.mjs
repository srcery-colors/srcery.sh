import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  compressHTML: false,
  vite: {
    plugins: [tailwindcss()],
  },
});
