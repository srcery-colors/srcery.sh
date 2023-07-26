import Alpine from "alpinejs";
import github from "../github.json";
import discordSvg from "@fortawesome/fontawesome-free/svgs/brands/discord.svg?raw";

function main() {
  window.Alpine = Alpine
  Alpine.data("state", () => ({
    github,
    icon: discordSvg
  }))

  Alpine.start()
}

main();
