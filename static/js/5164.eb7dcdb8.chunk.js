"use strict";(self.webpackChunksc_trees=self.webpackChunksc_trees||[]).push([[5164],{85164:(e,t,r)=>{r.r(t),r.d(t,{createSymbolSchema:()=>c});var a=r(78915),l=r(80613),n=r(54815);function s(e){var t;return"line-marker"===e.type?{type:"line-marker",color:null===(t=e.color)||void 0===t?void 0:t.toJSON(),placement:e.placement,style:e.style}:e.constructor.fromJSON(e.toJSON()).toJSON()}function o(e){return(0,n.hF)(e)}function c(e,t){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!e)return null;switch(e.type){case"simple-fill":case"picture-fill":return function(e,t,r){const a=(0,n.jj)(l.LW.FILL,t),c=r?o(a):a,i=e.clone(),h=i.outline,m=(0,n.jy)(t.symbologyType);m||(i.outline=null);const u={materialKey:c,hash:i.hash(),...s(i)};if(m)return u;const y=[];if(y.push(u),h){const e=(0,n.jj)(l.LW.LINE,{...t,isOutline:!0}),a={materialKey:r?o(e):e,hash:h.hash(),...s(h)};y.push(a)}return{type:"composite-symbol",layers:y,hash:y.reduce(((e,t)=>t.hash+e),"")}}(e,t,r);case"simple-marker":case"picture-marker":return function(e,t,r){if("simple-marker"===e.type&&("path"===e.style||e.outline&&"solid"!==e.outline.style&&"none"!==e.outline.style))return c({type:"CIMSymbolReference",symbol:a.B$.fromSimpleMarker(e)},t,r);const i=(0,n.jj)(l.LW.MARKER,t),h=r?o(i):i,m=s(e);return{materialKey:h,hash:e.hash(),...m,angle:e.angle,maxVVSize:t.maxVVSize}}(e,t,r);case"simple-line":return function(e,t,r){const a=(0,n.jy)(t.symbologyType)?l.mD.DEFAULT:t.symbologyType,c=(0,n.jj)(l.LW.LINE,{...t,symbologyType:a}),i=r?o(c):c,h=e.clone(),m=h.marker;h.marker=null;const u=[];if(u.push({materialKey:i,hash:h.hash(),...s(h)}),m){var y;const e=(0,n.jj)(l.LW.MARKER,t),a=r?o(e):e;m.color=null!==(y=m.color)&&void 0!==y?y:h.color,u.push({materialKey:a,hash:m.hash(),lineWidth:h.width,...s(m)})}return{type:"composite-symbol",layers:u,hash:u.reduce(((e,t)=>t.hash+e),"")}}(e,t,r);case"text":return function(e,t,r){const a=(0,n.jj)(l.LW.TEXT,t),c=r?o(a):a,i=s(e);return{materialKey:c,hash:e.hash(),...i,angle:e.angle,maxVVSize:t.maxVVSize}}(e,t,r);case"label":return function(e,t,r){const a=e.toJSON(),s=(0,n.jj)(l.LW.LABEL,{...t,placement:a.labelPlacement});return{materialKey:r?o(s):s,hash:e.hash(),...a,labelPlacement:a.labelPlacement}}(e,t,r);case"cim":return{type:"cim",rendererKey:t.vvFlags,data:e.data,maxVVSize:t.maxVVSize};case"CIMSymbolReference":return{type:"cim",rendererKey:t.vvFlags,data:e,maxVVSize:t.maxVVSize};case"web-style":return{...s(e),type:"web-style",hash:e.hash(),rendererKey:t.vvFlags,maxVVSize:t.maxVVSize};default:throw new Error("symbol not supported ".concat(e.type))}}}}]);
//# sourceMappingURL=5164.eb7dcdb8.chunk.js.map