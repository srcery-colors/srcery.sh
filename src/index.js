import "./style.css"
const palette = require("@srcery-colors/srcery-palette");

function setVars() {
  const vars = Object.entries(palette.primary).map(([k, v]) => {
    return `--color-${v.termcol}: ${v.hex}`
  })
  document.body.setAttribute('style', vars.join(';'));
}

function main() {
  console.log("hello world!");
  setVars();
}

main();
