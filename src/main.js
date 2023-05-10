import Alpine from "alpinejs";

import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import c from "highlight.js/lib/languages/c"
import clj from "highlight.js/lib/languages/clojure"
hljs.registerLanguage("c", c);
hljs.registerLanguage("js", javascript);
hljs.registerLanguage("clj", clj);

import "highlight.js/styles/srcery.css";

import ctxt from "./examples/c.txt?raw";
import jstxt from "./examples/js.txt?raw";
import cljtxt from "./examples/clj.txt?raw";

const languages = {
  c: {
    html: hljs.highlight(ctxt, {language: "c"}).value,
    data: ctxt,
    name: "C",
    class: "language-c"
  },
  js: {
    html: hljs.highlight(jstxt, {language: "js"}).value,
    data: jstxt,
    name: "JavaScript",
    class: "language-js"
  },
  clj: {
    html: hljs.highlight(cljtxt, { language: "clj" }).value,
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
}

main();
