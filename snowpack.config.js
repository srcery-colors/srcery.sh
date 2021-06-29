// snowpack.config.js
module.exports = {
  mount: {
    src: "/",
  },
  buildOptions: {
    out: "dist",
  },
  optimize: {
    bundle: true,
    minify: true,
  },
  plugins: ["@snowpack/plugin-postcss"],
  devOptions: {
    tailwindConfig: "./tailwind.config.js",
  },
};
