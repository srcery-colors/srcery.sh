import Alpine from "alpinejs";

// icons
import vimsvg from "devicon/icons/vim/vim-plain.svg?raw";
import vscodesvg from "devicon/icons/vscode/vscode-plain.svg?raw";
import intellijsvg from "devicon/icons/intellij/intellij-plain.svg?raw";
import emacssvg from "../svg/emacs.svg?raw";
import zedsvg from "../svg/zed.svg?raw";
import tmuxsvg from "../svg/tmux.svg?raw";
import bashsvg from "devicon/icons/bash/bash-plain.svg?raw";
import steamsvg from "@fortawesome/fontawesome-free/svgs/brands/steam.svg?raw";
import insomniasvg from "../svg/insomnia.svg?raw";
import guisvg from "@fortawesome/fontawesome-free/svgs/solid/image.svg?raw";
import shellsvg from "@fortawesome/fontawesome-free/svgs/solid/file-invoice-dollar.svg?raw";

const themes = [
  {
    name: "vim",
    icon: vimsvg,
    url: "https://www.vim.org/",
    repo: "https://github.com/srcery-colors/srcery-vim",
    download:
      "https://github.com/srcery-colors/srcery-vim/archive/refs/heads/master.zip",
    keywords: ["vim", "vimrc", "neovim", "gvim", "terminal"],
  },
  {
    name: "emacs",
    icon: emacssvg,
    url: "https://www.gnu.org/software/emacs/",
    repo: "https://github.com/srcery-colors/srcery-emacs",
    download:
      "https://github.com/srcery-colors/srcery-emacs/archive/refs/heads/master.zip",
    keywords: ["emacs", "gnu", "terminal", "init.el", "lisp"],
  },
  {
    name: "vscode",
    icon: vscodesvg,
    url: "https://code.visualstudio.com/",
    repo: "https://github.com/srcery-colors/srcery-vscode",
    download:
      "https://marketplace.visualstudio.com/items?itemName=srcery-colors.srcery-colors",
    keywords: ["visual studio", "vscode", "microsoft", "code", "windows"],
  },
  {
    name: "intellij",
    icon: intellijsvg,
    url: "https://www.jetbrains.com/idea/",
    repo: "https://github.com/srcery-colors/srcery-intellij",
    download: "https://plugins.jetbrains.com/plugin/18428-srcery-colorscheme/",
    keywords: ["idea", "java", "intellij", "ide"],
  },
  {
    name: "tmux",
    icon: tmuxsvg,
    url: "https://github.com/tmux/tmux",
    repo: "https://github.com/srcery-colors/srcery-tmux",
    download:
      "https://github.com/srcery-colors/srcery-tmux/archive/refs/heads/master.zip",
    keywords: ["tmux", "terminal", "multiplexer"],
  },
  {
    name: "terminals",
    icon: bashsvg,
    url: "https://en.wikipedia.org/wiki/List_of_terminal_emulators",
    repo: "https://github.com/srcery-colors/srcery-terminal",
    download:
      "https://github.com/srcery-colors/srcery-terminal/archive/refs/heads/master.zip",
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
      "xorg",
    ],
  },
  {
    name: "steam",
    icon: steamsvg,
    url: "https://www.steampowered.com",
    repo: "https://github.com/srcery-colors/srcery-steam-themes",
    download:
      "https://github.com/srcery-colors/srcery-steam-themes/archive/refs/heads/main.zip",
    keywords: ["steam", "steamos", "valve", "gaming", "steamdeck"],
  },
  {
    name: "insomnia",
    icon: insomniasvg,
    url: "https://insomnia.rest/",
    repo: "https://github.com/srcery-colors/srcery-insomnia",
    download:
      "https://github.com/srcery-colors/srcery-insomnia/archive/refs/heads/main.zip",
    keywords: ["insomnia", "rest", "api"],
  },
  {
    name: "zed",
    icon: zedsvg,
    url: "https://zed.dev/",
    repo: "https://github.com/srcery-colors/srcery-zed",
    download:
      "https://github.com/srcery-colors/srcery-zed/archive/refs/heads/main.zip",
    keywords: ["zed", "ai", "rust"],
  },
  {
    name: "assorted gui themes",
    icon: guisvg,
    repo: "https://github.com/srcery-colors/srcery-gui",
    download:
      "https://github.com/srcery-colors/srcery-gui/archive/refs/heads/master.zip",
    keywords: [
      "awesomewm",
      "bspwm",
      "i3wm",
      "oomox",
      "polybar",
      "qutebrowser",
      "rofi",
      "slack",
      "zathura",
    ],
  },
  {
    name: "assorted shell themes",
    icon: shellsvg,
    repo: "https://github.com/srcery-colors/srcery-shell",
    download:
      "https://github.com/srcery-colors/srcery-shell/archive/refs/heads/master.zip",
    keywords: ["broot", "cmus", "mutt", "newsboat", "vifm", "zellij"],
  },
];

function main() {
  window.Alpine = Alpine;
  Alpine.data("state", () => ({
    query: "",
    themes() {
      return themes.filter((theme) => {
        const q = this.query.toLowerCase();
        const matchesName = theme.name.includes(q);
        const matchesKeyword = theme.keywords.some((kw) => {
          return kw.includes(q);
        });
        return matchesName || matchesKeyword;
      });
    },
    logQuery() {
      console.log(this.query);
    },
  }));

  Alpine.start();
}

main();
