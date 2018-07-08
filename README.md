![Srcery Banner](/assets/images/title.png)

[![Known Vulnerabilities](https://snyk.io/test/github/srcery-colors/srcery/badge.svg?targetFile=package.json)](https://snyk.io/test/github/srcery-colors/srcery?targetFile=package.json)
![NPM Dev packages](https://img.shields.io/david/dev/srcery-colors/srcery.svg)
![NPM Packages](https://img.shields.io/david/srcery-colors/srcery.svg)
[![GitHub license](https://img.shields.io/github/license/srcery-colors/srcery.svg)](https://github.com/srcery-colors/srcery/blob/master/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/srcery-colors/srcery.svg)](https://github.com/srcery-colors/srcery/issues)
[![GitHub forks](https://img.shields.io/github/forks/srcery-colors/srcery.svg)](https://github.com/srcery-colors/srcery/network)
[![GitHub stars](https://img.shields.io/github/stars/srcery-colors/srcery.svg)](https://github.com/srcery-colors/srcery/stargazers)

Indroduction
------------

This is the repo for the `srcery` website.  All contributions are
welcome.

[View site](https://srcery-colors.github.io/srcery)

Web Stack
---------

*   Jekyll
*   Webpack
*   PostCSS (postcss-preset-env, cssnano)
*   TailwindCSS

Running Locally
---------------

Install dependencies:

    bundle install && npm install

Building the CSS.  This needs to be run whenever changes is done to src/style.scss.

    npm run prod

To build the Jekyll site locally and watch for changes done to the HTML.

    bundle exec jekyll serve --watch -V

License
-------
MIT License. See `LICENSE` for more information.
