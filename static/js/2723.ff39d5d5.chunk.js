/*! For license information please see 2723.ff39d5d5.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunksc_trees=self.webpackChunksc_trees||[]).push([[2723],{42723:(t,e,n)=>{n.r(e),n.d(e,{groupTimeZones:()=>d});const o=(()=>{const t=Intl.supportedValuesOf("timeZone");return[...new Set([...t,"Etc/GMT+1","Etc/GMT+10","Etc/GMT+11","Etc/GMT+12","Etc/GMT+2","Etc/GMT+3","Etc/GMT+4","Etc/GMT+5","Etc/GMT+6","Etc/GMT+7","Etc/GMT+8","Etc/GMT+9","Etc/GMT-1","Etc/GMT-10","Etc/GMT-11","Etc/GMT-12","Etc/GMT-13","Etc/GMT-14","Etc/GMT-2","Etc/GMT-3","Etc/GMT-4","Etc/GMT-5","Etc/GMT-6","Etc/GMT-7","Etc/GMT-8","Etc/GMT-9"])]})(),l={startDate:(new Date).toISOString(),groupDateRange:365,debug:!1},a=new Set(["Europe","Asia","America","America/Argentina","Africa","Australia","Pacific","Atlantic","Antarctica","Arctic","Indian"]),c=t=>{if(t.includes("Istanbul"))return"Europe";const e=t.lastIndexOf("/");return-1===e?t:t.slice(0,e)},r=t=>a.has(t),i=function(t,e,n,o){let l=arguments.length>4&&void 0!==arguments[4]&&arguments[4];const a=new Map;l&&console.log("Initializing data starting ".concat(e," with ").concat(n," days in the future, comparing ").concat(t.length," timezones"));const i=((t,e,n)=>{const o=[];let l=n.create(t);for(let a=0;a<=e;a++)l=n.increase(l),o.push(n.formatToIsoDateString(l));return o})(e,n,o);return t.map((t=>{const e=t.label,n=c(e),l=i.map((t=>{const n="".concat(t,"-").concat(e);let l=a.get(n);return l||(l=o.isoToTimeZone(t,e),a.set(n,l),l)}));return{...t,continent:n,isRegularContinent:r(n),dates:l}}))},s=(t,e,n)=>t.length===e.length&&t.every(((t,o)=>n.same(t,e[o]))),u=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;const n=t.filter((t=>{let{label:e}=t;return r(c(e))}));if(0===n.length)return[0];return function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;const n=t.length;if(n<=e)return t;const o=Math.min(n-2,e-2),l=(n-1)/(o+1);return[t[0],...Array.from({length:o},((e,n)=>t[Math.round((n+1)*l)])),t[n-1]]}(n.map((e=>t.indexOf(e))),e)};async function d(t){var e,n;const{debug:a,groupDateRange:c,hooks:r,startDate:d,dateEngine:g}={...l,...t},T=[];if(!g)throw new Error("dateEngine is required");const G=o.map((t=>({label:t})));null===r||void 0===r||null===(e=r.onBeforeTimeZoneMetadataCreate)||void 0===e||e.call(r,G);const f=i(G,d,c,g,a);null===r||void 0===r||null===(n=r.onTimeZoneMetadataCreate)||void 0===n||n.call(r,f);for(const o of f){var E,M;const{label:t,continent:e,dates:n}=o;if(o.visited)continue;o.visited=!0;const l={labelTzIndices:void 0,tzs:[{label:t}]};null===r||void 0===r||null===(E=r.onGroupCreate)||void 0===E||E.call(r,l,o);for(const o of f.filter((t=>!t.visited))){const{label:t,continent:a,isRegularContinent:c,dates:i}=o;if((e===a||!c)&&s(n,i,g)){var p;const e={label:t};l.tzs.push(e),null===r||void 0===r||null===(p=r.onGroupTimeZoneAdd)||void 0===p||p.call(r,l,e,o),o.visited=!0}}T.push(l),null===r||void 0===r||null===(M=r.onGroupAdd)||void 0===M||M.call(r,l)}const h=T.map((t=>{var e,n;null===r||void 0===r||null===(e=r.onBeforeFinalGroupCreate)||void 0===e||e.call(r,t),t.tzs=t.tzs.sort(((t,e)=>t.label.localeCompare(e.label)));const o={labelTzIndices:u(t.tzs,7),tzs:t.tzs.map((t=>t.label))};return null===r||void 0===r||null===(n=r.onFinalGroupCreate)||void 0===n||n.call(r,o,t),o})).sort(((t,e)=>e.tzs.length-t.tzs.length));if(a){const t=o.map((t=>h.some((e=>e.tzs.includes(t)))?null:t)).filter(Boolean);if(t.length>0)throw new Error("There are ".concat(t.length," missing timezones: ").concat(t.toString()))}return null!==r&&void 0!==r&&r.onFinalGroupingCreate?r.onFinalGroupingCreate(h):h}}}]);
//# sourceMappingURL=2723.ff39d5d5.chunk.js.map