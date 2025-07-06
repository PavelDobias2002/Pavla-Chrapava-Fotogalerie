export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "Pavla-Chrapava-Fotogalerie/_app",
	assets: new Set([".nojekyll","exterier/(14).JPG","exterier/(2).JPG","exterier/(32).JPG","exterier/(35).JPG","exterier/(36).JPG","exterier/(48).JPG","exterier/(49).JPG","exterier/(51).JPG","exterier/(54).JPG","exterier/(74).JPG","exterier/(76).JPG","exterier/(86).JPG","exterier/(89).JPG","exterier/(92).JPG","exterier/(93).JPG","exterier/(94).JPG","exterier/(98).JPG","exterier/2.JPG","exterier/DSC_1426.JPG","exterier/DSC_1440.JPG","exterier/DSC_1484.JPG","exterier/DSC_1512.JPG","exterier/DSC_1542.JPG","exterier/DSC_1550.JPG","facebookLogo.png","favicon.webp","instagramLogo.png","logo.webp","mininka/(1).jpg","mininka/(102).JPG","mininka/(103).JPG","mininka/(14).jpg","mininka/(19).jpg","mininka/(24).JPG","mininka/(26).JPG","mininka/(27).JPG","mininka/(29).JPG","mininka/(3).jpg","mininka/(40).jpg","mininka/(41).jpg","mininka/(47).JPG","mininka/(51).JPG","mininka/(55).JPG","mininka/(56).JPG","mininka/(57).JPG","mininka/(58).jpg","mininka/(65).JPG","mininka/(75).JPG","mininka/(79).JPG","mininka/(80).JPG","mininka/(83).jpg","mininka/(91).JPG","mininka/(95).JPG","mininka/(96).JPG","mininka/(97).JPG","mininka/(99).JPG","rodinne_foto/(10).JPG","rodinne_foto/(11).JPG","rodinne_foto/(114).JPG","rodinne_foto/(12).JPG","rodinne_foto/(13).JPG","rodinne_foto/(15).JPG","rodinne_foto/(16).JPG","rodinne_foto/(17).JPG","rodinne_foto/(18).JPG","rodinne_foto/(19).jpg","rodinne_foto/(21).JPG","rodinne_foto/(22).JPG","rodinne_foto/(23).JPG","rodinne_foto/(25).JPG","rodinne_foto/(27).JPG","rodinne_foto/(28).JPG","rodinne_foto/(30).jpg","rodinne_foto/(31).JPG","rodinne_foto/(33).jpg","rodinne_foto/(36).JPG","rodinne_foto/(37).JPG","rodinne_foto/(38).JPG","rodinne_foto/(4).JPG","rodinne_foto/(40).JPG","rodinne_foto/(42).JPG","rodinne_foto/(43).JPG","rodinne_foto/(44).JPG","rodinne_foto/(45).JPG","rodinne_foto/(46).JPG","rodinne_foto/(50).JPG","rodinne_foto/(52).JPG","rodinne_foto/(53).JPG","rodinne_foto/(58).JPG","rodinne_foto/(59).jpg","rodinne_foto/(6).JPG","rodinne_foto/(60).JPG","rodinne_foto/(62).JPG","rodinne_foto/(63).jpg","rodinne_foto/(64).JPG","rodinne_foto/(66).JPG","rodinne_foto/(67).JPG","rodinne_foto/(7).JPG","rodinne_foto/(71).JPG","rodinne_foto/(72).JPG","rodinne_foto/(73).JPG","rodinne_foto/(77).JPG","rodinne_foto/(78).JPG","rodinne_foto/(8).JPG","rodinne_foto/(81).JPG","rodinne_foto/(82).JPG","rodinne_foto/(85).JPG","rodinne_foto/(87).JPG","rodinne_foto/(9).JPG","rodinne_foto/(90).JPG","rodinne_foto/(91).jpg","rodinne_foto/(94).JPG","rodinne_foto/5.JPG","rodinne_foto/8.JPG","rodinne_foto/DSC_0749.JPG","rodinne_foto/DSC_0889.JPG","rodinne_foto/DSC_0927.JPG","skolni_foto/0.jpg","skolni_foto/1.jpg","skolni_foto/14.jpg","skolni_foto/19.jpg","skolni_foto/24.jpg","styles/global.css","svatby/(1).JPG","svatby/(10).JPG","svatby/(11).JPG","svatby/(12).JPG","svatby/(13).JPG","svatby/(14).jpg","svatby/(15).JPG","svatby/(16).JPG","svatby/(17).JPG","svatby/(18).jpg","svatby/(19).JPG","svatby/(2).JPG","svatby/(20).JPG","svatby/(21).JPG","svatby/(22).JPG","svatby/(23).JPG","svatby/(24).jpg","svatby/(25).JPG","svatby/(26).JPG","svatby/(27).JPG","svatby/(28).JPG","svatby/(29).JPG","svatby/(3).JPG","svatby/(30).JPG","svatby/(31).JPG","svatby/(32).JPG","svatby/(33).JPG","svatby/(34).jpg","svatby/(35).JPG","svatby/(36).jpg","svatby/(37).JPG","svatby/(38).JPG","svatby/(39).JPG","svatby/(4).JPG","svatby/(40).JPG","svatby/(41).JPG","svatby/(42).jpg","svatby/(43).JPG","svatby/(44).JPG","svatby/(45).JPG","svatby/(46).JPG","svatby/(47).JPG","svatby/(48).JPG","svatby/(49).JPG","svatby/(5).JPG","svatby/(50).JPG","svatby/(51).JPG","svatby/(52).JPG","svatby/(53).JPG","svatby/(54).JPG","svatby/(55).jpg","svatby/(6).JPG","svatby/(7).JPG","svatby/(8).JPG","svatby/(9).JPG","tehotne/(1).jpg","tehotne/(107).jpg","tehotne/(118).jpg","tehotne/(12).jpg","tehotne/(18).jpg","tehotne/(20).jpg","tehotne/(21).jpg","tehotne/(23).jpg","tehotne/(24).jpg","tehotne/(25).jpg","tehotne/(26).jpg","tehotne/(30).jpg","tehotne/(31).jpg","tehotne/(34).jpg","tehotne/(37).jpg","tehotne/(40).jpg","tehotne/(41).jpg","tehotne/(45).jpg","tehotne/(55).jpg","tehotne/(58).jpg","tehotne/(59).jpg","tehotne/(64).jpg","tehotne/(68).jpg","tehotne/(85).jpg"]),
	mimeTypes: {".JPG":"image/jpeg",".png":"image/png",".webp":"image/webp",".jpg":"image/jpeg",".css":"text/css"},
	_: {
		client: {start:"_app/immutable/entry/start.B5uFjliM.js",app:"_app/immutable/entry/app.DLkJnkMe.js",imports:["_app/immutable/entry/start.B5uFjliM.js","_app/immutable/chunks/DwF-dbqm.js","_app/immutable/chunks/D9_Jhbpd.js","_app/immutable/chunks/PpLPmwrf.js","_app/immutable/chunks/-vPbHaxD.js","_app/immutable/entry/app.DLkJnkMe.js","_app/immutable/chunks/D9_Jhbpd.js","_app/immutable/chunks/SO9H4_Pr.js","_app/immutable/chunks/BzVJlNUK.js","_app/immutable/chunks/BTYMLU_8.js","_app/immutable/chunks/-vPbHaxD.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/Cenik",
				pattern: /^\/Cenik\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/Fotogalerie",
				pattern: /^\/Fotogalerie\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/Kontakt",
				pattern: /^\/Kontakt\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
