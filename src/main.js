import Alpine from "alpinejs";

import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import c from "highlight.js/lib/languages/c"
hljs.registerLanguage('c', c);
hljs.registerLanguage('js', javascript);

import "highlight.js/styles/srcery.css";

import ctxt from "./examples/c.txt?raw";
import jstxt from "./examples/js.txt?raw";
import cljtxt from "./examples/clj.txt?raw";

const languages = {
  c: {
    data: ctxt,
    name: "C",
    class: "language-c"
  },
  js: {
    data: jstxt,
    name: "JavaScript",
    class: "language-js"
  },
  clj: {
    data: cljtxt,
    name: "Clojure",
    class: "language-clj"
  }
}

function getLanguages() {
  return Object.entries(examples).map(([k, v]) => {
    return v.name
  })
}

function main() {

  window.Alpine = Alpine
  Alpine.data("tabs", () => ({
    languages: languages,
    activeTab: "c",
    handleClick(e, lang) {
      e.preventDefault();
      this.activeTab = lang;

    },
  }))

  Alpine.start()

  hljs.highlightAll();
}

main();
