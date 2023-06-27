import Alpine from "alpinejs";
import github from "../github.json";
function main() {
  window.Alpine = Alpine
  Alpine.data("state", () => ({
    github
  }))

  Alpine.start()
  console.log(github);
}

main();
