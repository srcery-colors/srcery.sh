import Alpine from "alpinejs";

import githubsvg from "@fortawesome/fontawesome-free/svgs/brands/github.svg?raw";
import npmsvg from "@fortawesome/fontawesome-free/svgs/brands/npm.svg?raw";

const icons = {
  github: githubsvg,
  npm: npmsvg
}

function main() {
  window.Alpine = Alpine
  Alpine.data("state", () => ({
    icons,
    init() {
      this.fetchPkgVersion();
    },
    version: undefined,
    fetchPkgVersion() {
      fetch("https://registry.npmjs.org/@srcery-colors/srcery-palette").then(res => {
        res.json().then(json => {
          this.version = json?.["dist-tags"]?.latest;
        })
      });
    },
    }))
  Alpine.start()
}

main();
