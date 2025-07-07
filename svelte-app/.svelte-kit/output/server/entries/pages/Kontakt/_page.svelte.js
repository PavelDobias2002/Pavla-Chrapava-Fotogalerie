import { d as stringify } from "../../../chunks/index.js";
import { b as base } from "../../../chunks/paths.js";
import { a as attr } from "../../../chunks/attributes.js";
function _page($$payload) {
  $$payload.out += `<h1 class="svelte-2vwarh">Kontakt</h1> <table class="price-table svelte-2vwarh"><tbody class="svelte-2vwarh"><tr class="svelte-2vwarh"><td class="svelte-2vwarh"><b>Adresa:</b> Jinačovice 111</td></tr><tr class="svelte-2vwarh"><td class="svelte-2vwarh"><b>Telefon:</b> +420 728 653 494</td></tr><tr class="svelte-2vwarh"><td class="svelte-2vwarh"><b>E-mail:</b> pavla.chrapava@seznam.cz</td></tr></tbody></table> <ul class="svelte-2vwarh"><li class="svelte-2vwarh"><a href="https://www.facebook.com/ChrapavaPavla/?locale=cs_CZ" target="_blank" rel="noopener noreferrer"><img${attr("src", `${stringify(base)}/facebookLogo.png`)} alt="facebookIcon" class="svelte-2vwarh"></a></li> <li class="svelte-2vwarh"><a href="https://www.instagram.com/fotoatelier.pavla/" target="_blank" rel="noopener noreferrer"><img${attr("src", `${stringify(base)}/instagramLogo.png`)} alt="instagramIcon" class="svelte-2vwarh"></a></li></ul>`;
}
export {
  _page as default
};
