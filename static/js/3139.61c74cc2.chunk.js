"use strict";(self.webpackChunksc_trees=self.webpackChunksc_trees||[]).push([[3139],{28458:(e,a,r)=>{r.d(a,{L:()=>n});var t=r(41226);class n{constructor(){this._serviceMetadatas=new Map}async fetchServiceMetadata(e,a){const r=this._serviceMetadatas.get(e);if(r)return r;const n=await(0,t.T)(e,a);return this._serviceMetadatas.set(e,n),n}}},84076:(e,a,r)=>{r.d(a,{w:()=>u});var t=r(19545),n=r(76200),l=r(10064),i=r(66978),s=r(25899),o=r(7575),c=r(98995);async function u(e,a){var r,u;const v=(0,s.Qc)(e);if(!v)throw new l.Z("invalid-url","Invalid scene service url");const f={...a,sceneServerUrl:v.url.path,layerId:null!==(r=v.sublayer)&&void 0!==r?r:void 0};if(null!==(u=f.sceneLayerItem)&&void 0!==u||(f.sceneLayerItem=await async function(e){const a=(await d(e)).serviceItemId;if(!a)return null;const r=new c.default({id:a,apiKey:e.apiKey}),l=await async function(e){const a=null===t.id||void 0===t.id?void 0:t.id.findServerInfo(e.sceneServerUrl);if(null!==a&&void 0!==a&&a.owningSystemUrl)return a.owningSystemUrl;const r=e.sceneServerUrl.replace(/(.*\/rest)\/.*/i,"$1")+"/info";try{const a=(await(0,n.Z)(r,{query:{f:"json"},responseType:"json",signal:e.signal})).data.owningSystemUrl;if(a)return a}catch(p){(0,i.r9)(p)}return null}(e);null!=l&&(r.portal=new o.Z({url:l}));try{return r.load({signal:e.signal})}catch(m){return(0,i.r9)(m),null}}(f)),null==f.sceneLayerItem)return y(f.sceneServerUrl.replace("/SceneServer","/FeatureServer"),f);const p=await async function(e){let{sceneLayerItem:a,signal:r}=e;if(!a)return null;try{const e=(await a.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},{signal:r})).find((e=>"Feature Service"===e.type))||null;if(!e)return null;const t=new c.default({portal:e.portal,id:e.id});return await t.load(),t}catch(t){return(0,i.r9)(t),null}}(f);if(null===p||void 0===p||!p.url)throw new l.Z("related-service-not-found","Could not find feature service through portal item relationship");const m=await y(p.url,f);return m.portalItem=p,m}async function d(e){if(e.rootDocument)return e.rootDocument;const a={query:{f:"json",token:e.apiKey},responseType:"json",signal:e.signal};try{const r=await(0,n.Z)(e.sceneServerUrl,a);e.rootDocument=r.data}catch{e.rootDocument={}}return e.rootDocument}async function y(e,a){const r=(0,s.Qc)(e);if(!r)throw new l.Z("invalid-feature-service-url","Invalid feature service url");const t=r.url.path,i=a.layerId;if(null==i)return{serverUrl:t};const o=d(a),c=e=>{const r={query:{f:"json"},responseType:"json",authMode:e,signal:a.signal};return(0,n.Z)(t,r)},u=c("anonymous").catch((()=>c("no-prompt"))),[y,v]=await Promise.all([u,o]),f=null===v||void 0===v?void 0:v.layers,p=y.data&&y.data.layers;if(!Array.isArray(p))throw new Error("expected layers array");if(Array.isArray(f)){for(let n=0;n<Math.min(f.length,p.length);n++)if(f[n].id===i)return{serverUrl:t,layerId:p[n].id}}else if(null!=i&&i<p.length)return{serverUrl:t,layerId:p[i].id};throw new Error("could not find matching associated sublayer")}},97827:(e,a,r)=>{r.d(a,{$O:()=>l,CD:()=>u,Ok:()=>i,Q4:()=>s,XX:()=>o,_Y:()=>c,bS:()=>n});var t=r(84076);function n(e){const a={id:e.id,name:e.name};return"Oriented Imagery Layer"===e.type&&(a.layerType="OrientedImageryLayer"),a}async function l(e,a,r){var t,l;if(null==(null===(t=e)||void 0===t?void 0:t.layers)||null==(null===(l=e)||void 0===l?void 0:l.tables)){var i,s;const t=await r.fetchServiceMetadata(a);(e=e||{}).layers=e.layers||(null===t||void 0===t||null===(i=t.layers)||void 0===i?void 0:i.map(n)),e.tables=e.tables||(null===t||void 0===t||null===(s=t.tables)||void 0===s?void 0:s.map(n))}return e}function i(e){const a=e.layers;if(null!==a&&void 0!==a&&a.length)return a[0].id;const r=e.tables;return null!==r&&void 0!==r&&r.length?r[0].id:null}function s(e){var a,r,t,n;return(null!==(a=null===e||void 0===e||null===(r=e.layers)||void 0===r?void 0:r.length)&&void 0!==a?a:0)+(null!==(t=null===e||void 0===e||null===(n=e.tables)||void 0===n?void 0:n.length)&&void 0!==t?t:0)}function o(e){var a;const r=[];return null!==e&&void 0!==e&&null!==(a=e.layers)&&void 0!==a&&a.forEach((e=>{"SubtypeGroupLayer"===e.layerType&&r.push(e.id)})),r}function c(e){var a;return null===e||void 0===e||null===(a=e.layers)||void 0===a?void 0:a.filter((e=>{let{layerType:a}=e;return"OrientedImageryLayer"===a})).map((e=>{let{id:a}=e;return a}))}async function u(e,a,r){var l,i;if(null===e||void 0===e||!e.url)return null!==(l=a)&&void 0!==l?l:{};if(null!==(i=a)&&void 0!==i||(a={}),!a.layers){var s;const t=await r.fetchServiceMetadata(e.url);a.layers=null===(s=t.layers)||void 0===s?void 0:s.map(n)}const{serverUrl:o,portalItem:c}=await(0,t.w)(e.url,{sceneLayerItem:e}).catch((()=>({serverUrl:null,portalItem:null})));if(null==o)return a.tables=[],a;if(!a.tables&&c){const e=await c.fetchData();if(null!==e&&void 0!==e&&e.tables)a.tables=e.tables.map(n);else{var u;const e=await r.fetchServiceMetadata(o);a.tables=null===e||void 0===e||null===(u=e.tables)||void 0===u?void 0:u.map(n)}}if(a.tables)for(const t of a.tables)t.url="".concat(o,"/").concat(t.id);return a}},43139:(e,a,r)=>{r.d(a,{fromItem:()=>d,v:()=>y});var t=r(10064),n=r(84076),l=r(28458),i=r(37933),s=r(19610),o=r(98995),c=r(97827),u=r(73117);async function d(e){!e.portalItem||e.portalItem instanceof o.default||(e={...e,portalItem:new o.default(e.portalItem)});const a=await async function(e){await e.load();const a=new l.L;return async function(e){const a=e.className,r=s.T[a];return{constructor:await r(),properties:e.properties}}(await y(e,a))}(e.portalItem);return new(0,a.constructor)({portalItem:e.portalItem,...a.properties})}async function y(e,a){switch(e.type){case"Map Service":return async function(e,a){return await async function(e,a){return(await a.fetchServiceMetadata(e.url)).tileInfo}(e,a)?{className:"TileLayer"}:{className:"MapImageLayer"}}(e,a);case"Feature Service":return async function(e,a){const r=await v(e,a);if("object"==typeof r){const e={};return null!=r.id&&(e.layerId=r.id),{className:r.className||"FeatureLayer",properties:e}}return{className:"GroupLayer"}}(e,a);case"Feature Collection":return async function(e){await e.load();const a=(0,u._$)(e,"Map Notes"),r=(0,u._$)(e,"Markup");if(a||r)return{className:"MapNotesLayer"};if((0,u._$)(e,"Route Layer"))return{className:"RouteLayer"};const t=await e.fetchData();return 1===(0,c.Q4)(t)?{className:"FeatureLayer"}:{className:"GroupLayer"}}(e);case"Scene Service":return async function(e,a){const r=await v(e,a,(async()=>{try{var r;if(!e.url)return[];const{serverUrl:t}=await(0,n.w)(e.url,{sceneLayerItem:e}),l=await a.fetchServiceMetadata(t);return null!==(r=null===l||void 0===l?void 0:l.tables)&&void 0!==r?r:[]}catch{return[]}}));if("object"==typeof r){var t;const n={};let l;if(null!=r.id?(n.layerId=r.id,l="".concat(e.url,"/layers/").concat(r.id)):l=e.url,null!==(t=e.typeKeywords)&&void 0!==t&&t.length)for(const a of Object.keys(i.fb))if(e.typeKeywords.includes(a))return{className:i.fb[a]};const s=await a.fetchServiceMetadata(l);return{className:i.fb[null===s||void 0===s?void 0:s.layerType]||"SceneLayer",properties:n}}if(!1===r){const r=await a.fetchServiceMetadata(e.url);if("Voxel"===(null===r||void 0===r?void 0:r.layerType))return{className:"VoxelLayer"}}return{className:"GroupLayer"}}(e,a);case"Image Service":return async function(e,a){var r,t,n,l;await e.load();const i=null!==(r=null===(t=e.typeKeywords)||void 0===t?void 0:t.map((e=>e.toLowerCase())))&&void 0!==r?r:[];if(i.includes("elevation 3d layer"))return{className:"ElevationLayer"};if(i.includes("tiled imagery"))return{className:"ImageryTileLayer"};const s=await e.fetchData(),o=null===s||void 0===s?void 0:s.layerType;if("ArcGISTiledImageServiceLayer"===o)return{className:"ImageryTileLayer"};if("ArcGISImageServiceLayer"===o)return{className:"ImageryLayer"};const c=await a.fetchServiceMetadata(e.url),u=null===(n=c.cacheType)||void 0===n?void 0:n.toLowerCase(),d=null===(l=c.capabilities)||void 0===l?void 0:l.toLowerCase().includes("tilesonly");return"map"===u||d?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}(e,a);case"Stream Service":case"Feed":return{className:"StreamLayer"};case"Vector Tile Service":return{className:"VectorTileLayer"};case"GeoJson":return{className:"GeoJSONLayer"};case"CSV":return{className:"CSVLayer"};case"KML":return{className:"KMLLayer"};case"WFS":return{className:"WFSLayer"};case"WMTS":return{className:"WMTSLayer"};case"WMS":return{className:"WMSLayer"};case"Group Layer":return{className:"GroupLayer"};default:throw new t.Z("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type})}}async function v(e,a,r){const t=e.url;if(!t||/\/\d+$/.test(t))return{};await e.load();let n=await e.fetchData();if("Feature Service"===e.type){const e=await(0,c.$O)(n,t,a),r=f(e);if("object"==typeof r){const a=(0,c.XX)(e),t=(0,c._Y)(e);r.className=null!=r.id&&a.includes(r.id)?"SubtypeGroupLayer":null!=r.id&&null!==t&&void 0!==t&&t.includes(r.id)?"OrientedImageryLayer":"FeatureLayer"}return r}if("Scene Service"===e.type&&(n=await(0,c.CD)(e,n,a)),(0,c.Q4)(n)>0)return f(n);const l=await a.fetchServiceMetadata(t);return r&&(l.tables=await r()),f(l)}function f(e){return 1===(0,c.Q4)(e)&&{id:(0,c.Ok)(e)}}},41226:(e,a,r)=>{r.d(a,{T:()=>n});var t=r(76200);async function n(e,a){const{data:r}=await(0,t.Z)(e,{responseType:"json",query:{f:"json",...null===a||void 0===a?void 0:a.customParameters,token:null===a||void 0===a?void 0:a.apiKey}});return r}}}]);
//# sourceMappingURL=3139.61c74cc2.chunk.js.map