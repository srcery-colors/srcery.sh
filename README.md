<p align="center">
  <img src="https://raw.githubusercontent.com/srcery-colors/srcery-assets/master/src/logo_border.svg">
</p>

<p align="center">
  <a href="https://srcery.sh">
    <img alt="Website" src="https://img.shields.io/website?url=https%3A%2F%2Fsrcery.sh&up_color=%23519f50&down_color=%23ef2f27&style=flat-square&labelColor=%23312f2c&link=https%3A%2F%2Fsrcery.sh">
  </a>
  <a href="https://www.npmjs.com/package/@srcery-colors/srcery-palette">
    <img src="https://img.shields.io/npm/v/@srcery-colors/srcery-palette?color=%23FBB829&label=Palette%20version&logo=npm&logoColor=%23fce8c3&style=flat-square&labelColor=%23312f2c">
  </a>
  <a href="https://github.com/srcery-colors/srcery-colors.github.io-src/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/srcery-colors/srcery-colors.github.io-src.svg">
  </a>
  <a href="https://github.com/srcery-colors/srcery-colors.github.io-src/issues">
    <img src="https://img.shields.io/github/issues/srcery-colors/srcery-colors.github.io-src.svg">
  </a>
  <a href="https://github.com/srcery-colors/srcery-colors.github.io-src/network">
    <img src="https://img.shields.io/github/forks/srcery-colors/srcery-colors.github.io-src.svg">
  </a>
  <a href="https://github.com/srcery-colors/srcery-colors.github.io-src/stargazers">
    <img src="https://img.shields.io/github/stars/srcery-colors/srcery-colors.github.io-src.svg">
  </a>
</p>

## Introduction

This is the repository for https://srcery.sh. All contributions are welcomed and encouraged.

### [🌐 Visit Website](https://srcery.sh)

## Libraries

- [Astro](https://astro.build/)
- [Tailwind CSS - Rapidly build modern websites without ever leaving your HTML.](https://tailwindcss.com/)
- [Font Awesome](https://fontawesome.com/)
- [DEVICON | All programming languages and development tools related icons font](https://devicon.dev/)
- [highlight.js](https://highlightjs.org/)
- [Simple Icons](https://simpleicons.org/)
- [Biome, toolchain of the web](https://biomejs.dev/)
- [octokit/octokit.js: The all-batteries-included GitHub SDK for Browsers, Node.js, and Deno.](https://github.com/octokit/octokit.js)
- [Lodash](https://lodash.com/)

## Running Locally

Install dependencies:

```sh
pnpm install
```

Fetch GitHub data to `src/github.json`

```
pnpm run fetch
```

Running the development server

```sh
pnpm start
```

Runs a live reload Astro (vite) server, see `stdout` for port

### GitHub token

The fetch script fetches GitHub data, you should be able to fetch a few times
before the rate limit it reached.

If you do hit the rate limit when trying to fetch data, create a scoped auth
token, doesn't need any permissions, and define it in the environment variable
`$GH_TOKEN` when running the fetch script.

## Building for production

- [Vite documentation](https://vitejs.dev/guide/build.html)

To build for production, make sure you have a copy of the `github.json` file in `src`, then run:

```
pnpm run build
```

If you want to serve the dist output you can run:

```
pnpm run preview
```

> NOTE: ./dist folder needs to be built for the preview server to work

## License

MIT License. See `LICENSE` for more information.
