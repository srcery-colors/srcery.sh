import Alpine from "alpinejs";

import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import c from "highlight.js/lib/languages/c"
hljs.registerLanguage('c', c);
hljs.registerLanguage('javascript', javascript);

import "highlight.js/styles/srcery.css";

import ctxt from "./examples/c.txt?raw";
import jstxt from "./examples/js.txt?raw";

function main() {

  window.Alpine = Alpine
  Alpine.data("examples", () => ({
    c: {
      data: ctxt,
      class: "language-c"
    },
    js: {
      data: jstxt,
      class: "language-js"
    }
  }))

  Alpine.start()

  hljs.highlightAll();
}

main();
