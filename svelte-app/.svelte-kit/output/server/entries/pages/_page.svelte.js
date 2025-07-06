import { c as pop, p as push, d as stringify } from "../../chunks/index.js";
import { b as base } from "../../chunks/paths.js";
/* empty css                                                 */
import { a as attr } from "../../chunks/attributes.js";
function _page($$payload, $$props) {
  push();
  $$payload.out += `<div class="section-header svelte-z5jgin"><div class="logo svelte-z5jgin"><img${attr("src", `${stringify(base)}/logo.webp`)} alt="Logo" class="svelte-z5jgin"> <ul class="svelte-z5jgin"><li class="svelte-z5jgin"><h1 class="svelte-z5jgin">Fotoatelier - Pavla</h1></li> <li class="svelte-z5jgin">rodinné foto</li> <li class="svelte-z5jgin">svatební foto</li> <li class="svelte-z5jgin">dětské foto</li> <li class="svelte-z5jgin">portretní foto</li> <li class="svelte-z5jgin">těhotenské foto</li></ul></div> <p class="svelte-z5jgin">Jmenuji se Pavla Chrápavá, jsem fotografka, která miluje zachycovat ty nejkrásnější momenty života - od prvních krůčků dětí, přes rodinné radosti, až po chvíle lásky na svatbách. <br> Když se dívám na své fotografie, často si vzpomenu na slova, která říkají: <br><i>"Každý okamžik je jako květina - chvilka a zvadnou, ale v našich srdcích a fotografiích zůstávají navždy."</i> .</p></div>`;
  pop();
}
export {
  _page as default
};
