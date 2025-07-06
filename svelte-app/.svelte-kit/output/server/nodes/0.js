import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.s-V6j6AB.js","_app/immutable/chunks/BzVJlNUK.js","_app/immutable/chunks/D9_Jhbpd.js","_app/immutable/chunks/CM9QnkQ6.js","_app/immutable/chunks/Ccp7jVTb.js","_app/immutable/chunks/PpLPmwrf.js"];
export const stylesheets = ["_app/immutable/assets/0.ftR4dTHE.css"];
export const fonts = [];
