import Alpine from "alpinejs";

// Highlight.js + theme (yay, srcery is builtin!)
import hljs from "highlight.js/lib/core";
import "highlight.js/styles/srcery.css";

// highlight.js languages
import javascript from "highlight.js/lib/languages/javascript";
import c from "highlight.js/lib/languages/c";
import clj from "highlight.js/lib/languages/clojure";
import lua from "highlight.js/lib/languages/lua";
import rust from "highlight.js/lib/languages/rust";
import bash from "highlight.js/lib/languages/bash";
import vim from "highlight.js/lib/languages/vim";

// Examples
import ctxt from "./examples/c.txt?raw";
import jstxt from "./examples/js.txt?raw";
import cljtxt from "./examples/clj.txt?raw";
import luatxt from "./examples/lua.txt?raw";
import rusttxt from "./examples/rust.txt?raw";
import bashtxt from "./examples/bash.txt?raw";
import vimtxt from "./examples/vim.txt?raw";

// Register languages
hljs.registerLanguage("c", c);
hljs.registerLanguage("js", javascript);
hljs.registerLanguage("clj", clj);
hljs.registerLanguage("lua", lua);
hljs.registerLanguage("rust", rust);
hljs.registerLanguage("bash", bash);
hljs.registerLanguage("vim", vim);

// icons
import vimsvg from "devicon/icons/vim/vim-plain.svg?raw";
import vscodesvg from "devicon/icons/vscode/vscode-plain.svg?raw";
import intellijsvg from "devicon/icons/intellij/intellij-plain.svg?raw";
import emacssvg from "./svg/emacs.svg?raw";
import tmuxsvg from "./svg/tmux.svg?raw";
import bashsvg from "devicon/icons/bash/bash-plain.svg?raw";
import steamdecksvg from "./svg/steamdeck.svg?raw";

const languages = {
  c: {
    html: hljs.highlight(ctxt, {language: "c"}).value,
    data: ctxt,
    name: "C",
  },
  js: {
    html: hljs.highlight(jstxt, {language: "js"}).value,
    data: jstxt,
    name: "JavaScript",
  },
  clj: {
    html: hljs.highlight(cljtxt, { language: "clj" }).value,
    data: cljtxt,
    name: "Clojure",
  },
  lua: {
    html: hljs.highlight(luatxt, { language: "lua" }).value,
    name: "Lua",
  },
  lua: {
    html: hljs.highlight(rusttxt, { language: "rust" }).value,
    name: "Rust",
  },
  bash: {
    html: hljs.highlight(bashtxt, { language: "bash" }).value,
    name: "Bash"
  },
  vim: {
    html: hljs.highlight(vimtxt, { language: "vim" }).value,
    name: "Vim"
  }
}

const themes = {
  vim: {
    icon: vimsvg,
    label: "vim",
    url: "https://www.vim.org/",
    repo: "https://github.com/srcery-colors/srcery-vim",
    download: "https://github.com/srcery-colors/srcery-vim/archive/refs/heads/master.zip",
    keywords: ["vim", "vimrc", "neovim", "gvim", "terminal"]
  },
  emacs: {
    icon: emacssvg,
    label: "emacs",
    url: "https://www.gnu.org/software/emacs/",
    repo: "https://github.com/srcery-colors/srcery-emacs",
    download: "https://github.com/srcery-colors/srcery-emacs/archive/refs/heads/master.zip",
    keywords: ["emacs", "gnu", "terminal", "init.el", "lisp"]
  },
  vscode: {
    icon: vscodesvg,
    label: "vscode",
    url: "https://code.visualstudio.com/",
    repo: "https://github.com/srcery-colors/srcery-vscode",
    download: "https://marketplace.visualstudio.com/items?itemName=srcery-colors.srcery-colors",
    keywords: ["visual studio", "vscode", "microsoft", "code", "windows"]
  },
  intellij: {
    icon: intellijsvg,
    label: "intellij",
    url: "https://www.jetbrains.com/idea/",
    repo: "https://github.com/srcery-colors/srcery-intellij",
    download: "https://plugins.jetbrains.com/plugin/18428-srcery-colorscheme/",
    keywords: ["idea", "java", "intellij", "ide"]
  },
  tmux: {
    icon: tmuxsvg,
    label: "tmux",
    url: "https://github.com/tmux/tmux",
    repo: "https://github.com/srcery-colors/srcery-tmux",
    download: "https://github.com/srcery-colors/srcery-tmux/archive/refs/heads/master.zip",
    keywords: ["tmux", "terminal", "multiplexer"]
  },
  terminal: {
    icon: bashsvg,
    label: "terminals",
    url: "https://en.wikipedia.org/wiki/List_of_terminal_emulators",
    repo: "https://github.com/srcery-colors/srcery-terminal",
    download: "https://github.com/srcery-colors/srcery-terminal/archive/refs/heads/master.zip",
    keywords: [
      "terminal",
      "alacritty",
      "blink",
      "chrome secure shell",
      "foot",
      "genode",
      "16 colors",
      "gnome",
      "guake",
      "iterm",
      "kitty",
      "konsole",
      "linux",
      "virtual console",
      "lxterminal",
      "mintty",
      "pantheon",
      "putty",
      "st",
      "terminator",
      "termite",
      "termux",
      "tilix",
      "windows",
      "xfce",
      "xresources",
      "x11",
      "xorg"
    ]
  },
  steamdeck: {
    icon: steamdecksvg,
    label: "steam deck",
    url: "https://www.steamdeck.com/en/",
    repo: "https://github.com/srcery-colors/srcery-steam-deck",
    download: "https://github.com/srcery-colors/srcery-steam-deck/archive/refs/heads/main.zip",
    keywords: ["steam", "steamos", "valve", "gaming", "steamdeck"]
  }
}

function main() {

  window.Alpine = Alpine
  Alpine.data("tabs", () => ({
      languages,
      activeTab: "c",
      handleTab(lang) {
        this.activeTab = lang;
      },
    }),
  )

  Alpine.data("main", () => ({
    page: location.hash,
    themes,
    handleNav(page) {
      this.page = page;
    }
  }),
  )
  Alpine.start()
}

main();
