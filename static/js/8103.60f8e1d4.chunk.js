"use strict";(self.webpackChunksc_trees=self.webpackChunksc_trees||[]).push([[8103],{82272:(e,t,a)=>{a.d(t,{BN:()=>h,Yc:()=>u,em:()=>i,mx:()=>r});var n=a(42265);const i="arial-unicode-ms",o="woff2",l=new Map,s=new Set;class c{constructor(e,t){this.fontFace=e,this.promise=t}}async function r(e){const t=m(e),a=u(e),i=l.get(t);if(i)return i.promise;const r=new FontFace(e.family,`url('${n.default.fontsUrl}/woff2/${a}.${o}') format('${o}')`,{style:e.style,weight:e.weight}),h=document.fonts;if(h.has(r)&&"loading"===r.status)return r.loaded;const d=r.load().then((()=>(h.add(r),r)));return l.set(t,new c(r,d)),s.add(r),d}function h(e){if(!e)return i;const t=e.toLowerCase().split(" ").join("-");switch(t){case"serif":return"noto-serif";case"sans-serif":return"arial-unicode-ms";case"monospace":return"ubuntu-mono";case"fantasy":return"cabin-sketch";case"cursive":return"redressed";default:return t}}function u(e){const t=d(e)+f(e);return h(e.family)+(t.length>0?t:"-regular")}function m(e){const t=d(e)+f(e);return(e.family||i)+(t.length>0?t:"-regular")}function d(e){if(!e.weight)return"";switch(e.weight.toLowerCase()){case"bold":case"bolder":return"-bold"}return""}function f(e){if(!e.style)return"";switch(e.style.toLowerCase()){case"italic":case"oblique":return"-italic"}return""}},8103:(e,t,a)=>{a.d(t,{previewSymbol2D:()=>S});var n=a(51995),i=a(86950),o=a(10064),l=a(82272),s=a(17842),c=a(79563),r=a(37817),h=a(69157),u=a(81283);const m="picture-fill",d="picture-marker",f="simple-fill",p="simple-line",y="simple-marker",w="text",g="Aa",b=r.b_.size,v=r.b_.maxSize,x=r.b_.maxOutlineSize,M=r.b_.lineWidth,k=225,L=document.createElement("canvas");function z(e,t){const a=L.getContext("2d"),n=[];t&&(t.weight&&n.push(t.weight),t.size&&n.push(t.size+"px"),t.family&&n.push(t.family)),a.font=n.join(" ");const{width:i,actualBoundingBoxLeft:o,actualBoundingBoxRight:l,actualBoundingBoxAscent:s,actualBoundingBoxDescent:c}=a.measureText(e);return{width:Math.ceil(Math.max(i,o+l)),height:Math.ceil(s+c),x:Math.floor(o),y:Math.floor((s-c)/2)}}function C(e){const t=e?.size;return{width:null!=t&&"object"==typeof t&&"width"in t?(0,s.F2)(t.width):null,height:null!=t&&"object"==typeof t&&"height"in t?(0,s.F2)(t.height):null}}function F(e,t){return e>t?"dark":"light"}async function S(e,t){const{shapeDescriptor:a,size:n,renderOptions:i}=function(e,t){const a="number"==typeof t?.size?t?.size:null,n=null!=a?(0,s.F2)(a):null,i=null!=t?.maxSize?(0,s.F2)(t.maxSize):null,o=null!=t?.rotation?t.rotation:"angle"in e?e.angle:null,l=(0,c._M)(e);let h=(0,c.mx)(e);"dark"!==B(e,245)||t?.ignoreWhiteSymbols||(h={width:.75,...h,color:"#bdc3c7"});const u={shape:null,fill:l,stroke:h,offset:[0,0]};h?.width&&(h.width=Math.min(h.width,x));const k=h?.width||0;let L=null!=t?.size&&(null==t?.scale||t?.scale),F=0,S=0,Z=!1;switch(e.type){case y:{const a=e.style,{width:l,height:c}=C(t),r=l===c&&null!=l?l:null!=n?n:Math.min((0,s.F2)(e.size),i||v);switch(F=r,S=r,a){case"circle":u.shape={type:"circle",cx:0,cy:0,r:.5*r},L||(F+=k,S+=k);break;case"cross":u.shape={type:"path",path:[{command:"M",values:[0,.5*S]},{command:"L",values:[F,.5*S]},{command:"M",values:[.5*F,0]},{command:"L",values:[.5*F,S]}]};break;case"diamond":u.shape={type:"path",path:[{command:"M",values:[0,.5*S]},{command:"L",values:[.5*F,0]},{command:"L",values:[F,.5*S]},{command:"L",values:[.5*F,S]},{command:"Z",values:[]}]},L||(F+=k,S+=k);break;case"square":u.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[F,0]},{command:"L",values:[F,S]},{command:"L",values:[0,S]},{command:"Z",values:[]}]},L||(F+=k,S+=k),o&&(Z=!0);break;case"triangle":u.shape={type:"path",path:[{command:"M",values:[.5*F,0]},{command:"L",values:[F,S]},{command:"L",values:[0,S]},{command:"Z",values:[]}]},L||(F+=k,S+=k),o&&(Z=!0);break;case"x":u.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[F,S]},{command:"M",values:[F,0]},{command:"L",values:[0,S]}]},o&&(Z=!0);break;case"path":u.shape={type:"path",path:e.path||""},L||(F+=k,S+=k),o&&(Z=!0),L=!0}break}case p:{const{width:e,height:a}=C(t),i=(0,c.iI)(h).reduce(((e,t)=>e+t),0),o=i&&Math.ceil(M/i),l=a??n??k,s=e??(i*o||M);h&&(h.width=l),F=s,S=l,L=!0,u.shape={type:"path",path:[{command:"M",values:[l/2,S/2]},{command:"L",values:[F-l/2,S/2]}]};break}case m:case f:{const e="object"==typeof t?.symbolConfig&&!!t?.symbolConfig?.isSquareFill,{width:a,height:i}=C(t);F=!e&&a!==i||null==a?null!=n?n:b:a,S=!e&&a!==i||null==i?F:i,L||(F+=k,S+=k),L=!0,u.shape=e?{type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[F,0]},{command:"L",values:[F,S]},{command:"L",values:[0,S]},{command:"L",values:[0,0]},{command:"Z",values:[]}]}:r.JZ.fill[0];break}case d:{const a=Math.min((0,s.F2)(e.width),i||v),l=Math.min((0,s.F2)(e.height),i||v),{width:c,height:r}=C(t),h=c===r&&null!=c?c:null!=n?n:Math.max(a,l),m=a/l;F=m<=1?Math.ceil(h*m):h,S=m<=1?h:Math.ceil(h/m),u.shape={type:"image",x:-Math.round(F/2),y:-Math.round(S/2),width:F,height:S,src:e.url||""},o&&(Z=!0);break}case w:{const a=e,o=t?.overrideText||a.text||g,l=a.font,{width:c,height:r}=C(t),h=null!=r?r:null!=n?n:Math.min((0,s.F2)(l.size),i||v),{width:m,height:d}=z(o,{weight:l.weight,size:h,family:l.family}),f=/[\uE600-\uE6FF]/.test(o);F=c??(f?h:m),S=f?h:d;let p=.5*(f?h:d);f&&(p+=5),u.shape={type:"text",text:o,x:a.xoffset||0,y:a.yoffset||p,align:"middle",alignBaseline:a.verticalAlignment,decoration:l&&l.decoration,rotated:a.rotated,kerning:a.kerning},u.font=l&&{size:h,style:l.style,decoration:l.decoration,weight:l.weight,family:l.family};break}}return{shapeDescriptor:u,size:[F,S],renderOptions:{node:t?.node,scale:L,opacity:t?.opacity,rotation:o,useRotationSize:Z,effectView:t?.effectView,ariaLabel:t?.ariaLabel}}}(e,t);if(!a.shape)throw new o.Z("symbolPreview: renderPreviewHTML2D","symbol not supported.");await async function(e,t){const a=t.fill,n=e.color;if("pattern"===a?.type&&n&&e.type!==m){const e=await(0,c.Od)(a.src,n.toCss(!0));a.src=e,t.fill=a}}(e,a),await async function(e,t,a,n){if(!("font"in e)||!e.font||"text"!==t.shape.type)return;try{await(0,l.mx)(e.font)}catch{}const{width:i,height:o}=C(n);if(!/[\uE600-\uE6FF]/.test(t.shape.text)){const{width:l,height:s,x:c,y:r}=z(t.shape.text,{weight:t.font?.weight,size:t.font?.size,family:t.font?.family});a[0]=i??l,a[1]=o??s,t.shape.x=c,t.shape.y=r;const h=null!=n?.rotation?n.rotation:"angle"in e?e.angle:null;if(h){const e=h*(Math.PI/180),t=Math.abs(Math.sin(e)),n=Math.abs(Math.cos(e));a[1]=a[0]*t+a[1]*n}}}(e,a,n,t);const k=[[a]];if("object"==typeof t?.symbolConfig&&t?.symbolConfig?.applyColorModulation){const e=.6*n[0];k.unshift([{...a,offset:[-e,0],fill:(0,r.dc)(a.fill,-.3)}]),k.push([{...a,offset:[e,0],fill:(0,r.dc)(a.fill,.3)}]),n[0]+=2*e,i.scale=!1}return"text"===e.type&&function(e,t,a,n,i){if(null!=e.haloColor&&null!=e.haloSize){i.masking??=a.map((()=>[]));const o=(0,s.F2)(e.haloSize);n[0]+=o,n[1]+=o,a.unshift([{...t,fill:null,stroke:{color:e.haloColor,width:2*o,join:"round",cap:"round"}}]),i.masking.unshift([{shape:{type:"rect",x:0,y:0,width:n[0]+2*u.c9,height:n[1]+2*u.c9},fill:[255,255,255],stroke:null},{...t,fill:[0,0,0,0],stroke:null}])}null==e.backgroundColor&&null==e.borderLineColor||(n[0]+=2*u.c9,n[1]+=2*u.c9,a.unshift([{shape:{type:"rect",x:0,y:0,width:n[0],height:n[1]},fill:e.backgroundColor,stroke:{color:e.borderLineColor,width:(0,s.F2)(e.borderLineSize)}}]),i.masking?.unshift([]))}(e,a,k,n,i),(0,h.wh)(k,n,i)}function B(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:k;const a=(0,c._M)(e),o=(0,c.mx)(e),l=!a||"type"in a?null:new n.Z(a),s=o?.color?new n.Z(o?.color):null,r=l?F((0,i.EX)(l),t):null,h=s?F((0,i.EX)(s),t):null;return h?r?r===h?r:t>=k?"light":"dark":h:r}}}]);
//# sourceMappingURL=8103.60f8e1d4.chunk.js.map