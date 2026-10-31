<p align="center">
  <a href="https://srcery.sh">
    <img src="https://raw.githubusercontent.com/srcery-colors/srcery-assets/master/logo/logo.svg" alt="Srcery" width="480">
  </a>
</p>

<p align="center">
  The website for Srcery, a color scheme with clearly defined contrasting colors and a slightly earthy tone.
</p>

<p align="center">
  <a href="https://srcery.sh">
    <img alt="Website" src="https://img.shields.io/website?url=https%3A%2F%2Fsrcery.sh&up_color=%23519f50&down_color=%23ef2f27&style=flat-square&labelColor=%23312f2c&link=https%3A%2F%2Fsrcery.sh">
  </a>
  <a href="https://www.npmjs.com/package/@srcery-colors/srcery-palette">
    <img alt="Palette version" src="https://img.shields.io/npm/v/@srcery-colors/srcery-palette?color=%23FBB829&label=Palette%20version&logo=npm&logoColor=%23fce8c3&style=flat-square&labelColor=%23312f2c">
  </a>
  <a href="https://github.com/srcery-colors/srcery.sh/blob/master/LICENSE">
    <img alt="License" src="https://img.shields.io/github/license/srcery-colors/srcery.sh.svg">
  </a>
  <a href="https://github.com/srcery-colors/srcery.sh/issues">
    <img alt="Issues" src="https://img.shields.io/github/issues/srcery-colors/srcery.sh.svg">
  </a>
  <a href="https://github.com/srcery-colors/srcery.sh/network">
    <img alt="Forks" src="https://img.shields.io/github/forks/srcery-colors/srcery.sh.svg">
  </a>
  <a href="https://github.com/srcery-colors/srcery.sh/stargazers">
    <img alt="Stars" src="https://img.shields.io/github/stars/srcery-colors/srcery.sh.svg">
  </a>
</p>

## Local development

Use Node.js 26 and pnpm 12, as specified in `package.json`.

```sh
pnpm install
pnpm run fetch
pnpm dev
```

The fetch script generates `src/github.json` with public GitHub organization data.
Run it once before starting the site, and again when you want fresh data.
Astro prints the development server URL in the terminal and reloads as you edit.

If fetching hits GitHub's rate limit, provide a token through the `GH_TOKEN`
environment variable when running `pnpm run fetch`. Keep the token out of tracked files.

## Commands

| Command                | Purpose                                    |
| ---------------------- | ------------------------------------------ |
| `pnpm dev`             | Start the development server               |
| `pnpm run fetch`       | Refresh GitHub community data              |
| `pnpm run build`       | Build the static site into `dist/`         |
| `pnpm run preview`     | Serve an existing production build locally |
| `pnpm run astro:check` | Check Astro and TypeScript                 |
| `pnpm run lint`        | Check code with Biome                      |
| `pnpm run fmt:check`   | Check formatting with Prettier             |
| `pnpm run fmt`         | Format files with Prettier                 |

Building requires `src/github.json`; run `pnpm run fetch` first.
CI uses `pnpm run build:ci`, which fetches the data automatically before building.
The site deploys to GitHub Pages on pushes to `master`.

## Technology

| Area          | Tools                                                                                                                          |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| Site          | [Astro](https://astro.build/) and [TypeScript](https://www.typescriptlang.org/)                                                |
| Styling       | [Tailwind CSS](https://tailwindcss.com/) and the [Srcery palette](https://www.npmjs.com/package/@srcery-colors/srcery-palette) |
| Icons         | [Font Awesome](https://fontawesome.com/), [Devicon](https://devicon.dev/), and [Simple Icons](https://simpleicons.org/)        |
| Code examples | [highlight.js](https://highlightjs.org/)                                                                                       |
| GitHub data   | [Octokit](https://github.com/octokit/octokit.js)                                                                               |
| Code quality  | [Biome](https://biomejs.dev/), [Prettier](https://prettier.io/), and Astro's type checker                                      |

## Contributing

Contributions are welcome. Run the type, lint, formatting, and build checks above
before opening a pull request.

## License

[MIT](LICENSE)
