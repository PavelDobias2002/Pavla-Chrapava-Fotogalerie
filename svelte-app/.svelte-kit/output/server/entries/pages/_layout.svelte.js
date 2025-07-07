import { d as stringify, e as slot } from "../../chunks/index.js";
import "clsx";
import { b as base } from "../../chunks/paths.js";
import { a as attr } from "../../chunks/attributes.js";
function Header($$payload) {
  $$payload.out += `<header class="svelte-6qcrba">`;
  Navigation($$payload);
  $$payload.out += `<!----></header>`;
}
function Navigation($$payload) {
  $$payload.out += `<nav class="nav svelte-2ztu3j"><ul class="left-section svelte-2ztu3j"><li><a${attr("href", `${stringify(base)}/`)} data-text="Home" class="svelte-2ztu3j">Fotoatelier - Pavla</a></li></ul> <ul class="middle-section svelte-2ztu3j"><li class="svelte-2ztu3j"><a${attr("href", `${stringify(base)}/Fotogalerie`)} data-text="Fotogalerie" class="svelte-2ztu3j">Fotogalerie</a></li></ul> <ul class="right-section svelte-2ztu3j"><li class="svelte-2ztu3j"><a${attr("href", `${stringify(base)}/Cenik`)} data-text="Cenik" class="svelte-2ztu3j">Cenik</a></li> <li class="svelte-2ztu3j"><a${attr("href", `${stringify(base)}/Kontakt`)} data-text="Kontakt" class="svelte-2ztu3j">Kontakt</a></li></ul></nav>`;
}
function Footer($$payload) {
  $$payload.out += `<footer class="svelte-1dy120d"><p>© 2025 Fotoatelier Pavla Chrapava</p></footer>`;
}
function _layout($$payload, $$props) {
  $$payload.out += `<link rel="stylesheet"${attr("href", `${stringify(base)}/styles/global.css`)} class="svelte-2x201g"> `;
  Header($$payload);
  $$payload.out += `<!----> <main class="svelte-2x201g"><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></main> `;
  Footer($$payload);
  $$payload.out += `<!---->`;
}
export {
  _layout as default
};
