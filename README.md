# srcery.github.io
Testing-site for srcery color scheme

# Stack
Jekyll
Webpack
PostCSS (postcss-preset-env, cssnano)
TailwindCSS

# Running locally

Install dependencies:

    bundle install && npm install

Building the CSS.  This needs to be run whenever changes is done to src/styles.scss.

    npm run prod

To build the Jekyll site locally and watch for changes done to the HTML.
    bundle exec jekyll serve --watch -V
