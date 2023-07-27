<p align="center">
  <img src="https://raw.githubusercontent.com/srcery-colors/srcery-assets/master/src/logo_border.svg">
</p>

<p align="center">
  <img src="https://github.com/srcery-colors/srcery-colors.github.io-src/workflows/Build%20&%20Deploy/badge.svg">
  <a href="https://snyk.io/test/github/srcery-colors/srcery-colors.github.io-src?targetFile=package.json">
    <img src="https://snyk.io/test/github/srcery-colors/srcery-colors.github.io-src/badge.svg?targetFile=package.json">
  </a>
  <a href="https://github.com/srcery-colors/srcery-colors.github.io-src/blob/master/LICENSE">
    <img src="https://img.shields.io/github/issues/srcery-colors/srcery-colors.github.io-src.svg">
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

This is the repo for the `srcery` website.  All contributions are
welcome and encouraged.

[View site](https://srcery.sh)

## Web Stack

* [Vite](https://vitejs.dev/)
* [Alpine.js](https://alpinejs.dev/)
* [PostCSS](https://postcss.org)
* [TailwindCSS](https://tailwindcss.com)

## Running Locally

Install dependencies:

```sh
npm install
```

Fetch GitHub data

```
npm run fetch
```

Running the development server

```sh
npm start
```

Runs a live reload Vite server, see `stdout` for port

### Github token

The fetch script fetches GitHub data, you should be able to fetch a few times
before the rate limit it reached.

If you do hit the rate limit when trying to fetch data, create a scoped auth
token, doesn't need any permissions, and define it in the environment variable
`$GH_TOKEN` when running the fetch script.

## Building for production

- [Vite documentation](https://vitejs.dev/guide/build.html)

To build for production, make sure you have a copy of the `github.json` file in `src`, then run:

```
npm run build
```

Alternatively you can run:

```
npm run preview
```

To preview the production build on a local server.

## License

MIT License. See `LICENSE` for more information.
