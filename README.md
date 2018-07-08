# srcery-colors.github.io/srcery

![Srcery Banner](/assets/images/title.png)

This is the repo for the `srcery` website.  All contributions are
welcome.

[View site](srcery-colors.github.io/srcery)

# Web Stack

* Jekyll
* Webpack
* PostCSS (postcss-preset-env, cssnano)
* TailwindCSS

# Running Locally

Install dependencies:

    bundle install && npm install

Building the CSS.  This needs to be run whenever changes is done to src/style.scss.

    npm run prod

To build the Jekyll site locally and watch for changes done to the HTML.

    bundle exec jekyll serve --watch -V
