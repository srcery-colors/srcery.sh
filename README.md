<p align="center">
  <img src="https://raw.githubusercontent.com/srcery-colors/srcery-assets/master/src/logo_border.svg">
</p>

<p align="center">
  <a href="https://github.com/srcery-colors/srcery.sh/actions/workflows/deploy.yaml">
    <img src="https://github.com/srcery-colors/srcery-colors.github.io-src/workflows/Build%20&%20Deploy/badge.svg">
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

This is the repo for the `Srcery` website. All contributions are
welcomed and encouraged.

[View site](https://srcery.sh)

## Web Stack

- [Vite](https://vitejs.dev/)
- [Alpine.js](https://alpinejs.dev/)
- [PostCSS](https://postcss.org)
- [TailwindCSS](https://tailwindcss.com)

## Running Locally

Install dependencies:

```sh
pnpm install
```

Fetch GitHub data

```
pnpm run fetch
```

Running the development server

```sh
pnpm start
```

Runs a live reload Vite server, see `stdout` for port

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
