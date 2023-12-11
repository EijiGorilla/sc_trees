"use strict";(self.webpackChunksc_trees=self.webpackChunksc_trees||[]).push([[2694],{32035:(t,e,n)=>{n.d(e,{a:()=>u,b:()=>o,c:()=>r,d:()=>c,e:()=>a,n:()=>l,s:()=>h,t:()=>s});var i=n(77873);function r(t,e,n){s(t.typedBuffer,e.typedBuffer,n,t.typedBufferStride,e.typedBufferStride)}function s(t,e,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:r;if(t.length/r!==Math.ceil(e.length/s))return i.c.error("source and destination buffers need to have the same number of elements"),t;const o=t.length/r,u=n[0],a=n[1],h=n[2],c=n[4],l=n[5],f=n[6],d=n[8],g=n[9],m=n[10],p=n[12],b=n[13],v=n[14];let y=0,_=0;for(let i=0;i<o;i++){const n=e[y],i=e[y+1],o=e[y+2];t[_]=u*n+c*i+d*o+p,t[_+1]=a*n+l*i+g*o+b,t[_+2]=h*n+f*i+m*o+v,y+=s,_+=r}return t}function o(t,e,n){u(t.typedBuffer,e.typedBuffer,n,t.typedBufferStride,e.typedBufferStride)}function u(t,e,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:r;if(t.length/r!==Math.ceil(e.length/s))return void i.c.error("source and destination buffers need to have the same number of elements");const o=t.length/r,u=n[0],a=n[1],h=n[2],c=n[3],l=n[4],f=n[5],d=n[6],g=n[7],m=n[8];let p=0,b=0;for(let i=0;i<o;i++){const n=e[p],i=e[p+1],o=e[p+2];t[b]=u*n+c*i+d*o,t[b+1]=a*n+l*i+g*o,t[b+2]=h*n+f*i+m*o,p+=s,b+=r}}function a(t,e,n){h(t.typedBuffer,e,n,t.typedBufferStride)}function h(t,e,n){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3;const r=Math.min(t.length/i,e.count),s=e.typedBuffer,o=e.typedBufferStride;let u=0,a=0;for(let h=0;h<r;h++)t[a]=n*s[u],t[a+1]=n*s[u+1],t[a+2]=n*s[u+2],u+=o,a+=i}function c(t,e){l(t.typedBuffer,e.typedBuffer,t.typedBufferStride,e.typedBufferStride)}function l(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:n;const r=Math.min(t.length/n,e.length/i);let s=0,o=0;for(let u=0;u<r;u++){const r=e[s],u=e[s+1],a=e[s+2],h=r*r+u*u+a*a;if(h>0){const e=1/Math.sqrt(h);t[o]=e*r,t[o+1]=e*u,t[o+2]=e*a}s+=i,o+=n}}Object.freeze(Object.defineProperty({__proto__:null,normalize:l,normalizeView:c,scale:h,scaleView:a,shiftRight:function(t,e,n){const i=Math.min(t.count,e.count),r=t.typedBuffer,s=t.typedBufferStride,o=e.typedBuffer,u=e.typedBufferStride;let a=0,h=0;for(let c=0;c<i;c++)r[h]=o[a]>>n,r[h+1]=o[a+1]>>n,r[h+2]=o[a+2]>>n,a+=u,h+=s},transformMat3:u,transformMat3View:o,transformMat4:s,transformMat4View:r},Symbol.toStringTag,{value:"Module"}))},39406:(t,e,n)=>{n.d(e,{$z:()=>s,KF:()=>h,mi:()=>r});var i=n(18722);function r(t){if((0,i.kJ)(t)){if(t.length<i.c8)return t}else if(t.length<i.c8)return Array.from(t);let e=!0,n=!0;return t.some(((t,i)=>(e=e&&0===t,n=n&&t===i,!e&&!n))),e?function(t){if(1===t)return u;if(t<i.c8)return new Array(t).fill(0);if(t>c.length){const e=Math.max(2*c.length,t);c=new Uint8Array(e)}return new Uint8Array(c.buffer,0,t)}(t.length):n?h(t.length):(0,i.kJ)(t)||t.BYTES_PER_ELEMENT!==Uint16Array.BYTES_PER_ELEMENT?function(t){let e=!0;for(const n of t){if(n>=65536)return(0,i.kJ)(t)?new Uint32Array(t):t;n>=256&&(e=!1)}return e?new Uint8Array(t):new Uint16Array(t)}(t):t}function s(t){return t<=i.c8?new Array(t):t<=65536?new Uint16Array(t):new Uint32Array(t)}let o=(()=>{const t=new Uint32Array(131072);for(let e=0;e<t.length;++e)t[e]=e;return t})();const u=[0],a=(()=>{const t=new Uint16Array(65536);for(let e=0;e<t.length;++e)t[e]=e;return t})();function h(t){if(1===t)return u;if(t<i.c8)return Array.from(new Uint16Array(a.buffer,0,t));if(t<a.length)return new Uint16Array(a.buffer,0,t);if(t>o.length){const e=Math.max(2*o.length,t);o=new Uint32Array(e);for(let t=0;t<o.length;t++)o[t]=t}return new Uint32Array(o.buffer,0,t)}let c=new Uint8Array(65536)},77873:(t,e,n)=>{n.d(e,{c:()=>i});const i=n(32718).Z.getLogger("esri.views.3d.support.buffer.math")},85981:(t,e,n)=>{n.d(e,{Ue:()=>a,nF:()=>c,zk:()=>h});var i=n(16889),r=n(21530),s=n(11186),o=n(71353),u=n(51378);function a(t){return t?{origin:(0,o.g)(t.origin),vector:(0,o.g)(t.vector)}:{origin:(0,o.c)(),vector:(0,o.c)()}}function h(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a();return(0,s.c)(n.origin,t),(0,s.f)(n.vector,e,t),n}function c(t,e,n){return function(t,e,n,r,o){const{vector:a,origin:h}=t,c=(0,s.f)(u.WM.get(),e,h),l=(0,s.j)(a,c)/(0,s.m)(a);return(0,s.i)(o,a,(0,i.uZ)(l,n,r)),(0,s.g)(o,o,t.origin)}(t,e,0,1,n)}(0,o.c)(),(0,o.c)(),new r.x((()=>a()))},1395:(t,e,n)=>{n.d(e,{c:()=>r});var i=n(95439);class r{constructor(){this.id=(0,i.D)()}}},79100:(t,e,n)=>{var i;n.d(e,{U:()=>i}),function(t){t[t.Layer=0]="Layer",t[t.Object=1]="Object",t[t.Mesh=2]="Mesh",t[t.Line=3]="Line",t[t.Point=4]="Point",t[t.Material=5]="Material",t[t.Texture=6]="Texture",t[t.COUNT=7]="COUNT"}(i||(i={}))},28328:(t,e,n)=>{n.d(e,{Z:()=>B});var i=n(81949),r=n(11186),s=n(39406),o=n(18722);function u(t){if(t.length<o.c8)return Array.from(t);if((0,o.kJ)(t))return Float64Array.from(t);if(!("BYTES_PER_ELEMENT"in t))return Array.from(t);switch(t.BYTES_PER_ELEMENT){case 1:return Uint8Array.from(t);case 2:return(0,o.Uc)(t)?Uint16Array.from(t):Int16Array.from(t);case 4:return Float32Array.from(t);default:return Float64Array.from(t)}}var a=n(68401),h=n(26380),c=n(71353),l=n(97731);class f{constructor(t,e,n){this.primitiveIndices=t,this._numIndexPerPrimitive=e,this.position=n,this._children=void 0,(0,l.hu)(t.length>=1),(0,l.hu)(3===n.size||4===n.size);const{data:i,size:s,indices:o}=n;(0,l.hu)(o.length%this._numIndexPerPrimitive==0),(0,l.hu)(o.length>=t.length*this._numIndexPerPrimitive);const u=t.length;let a=s*o[this._numIndexPerPrimitive*t[0]];d.clear(),d.push(a);const h=(0,c.f)(i[a],i[a+1],i[a+2]),f=(0,c.g)(h);for(let r=0;r<u;++r){const e=this._numIndexPerPrimitive*t[r];for(let t=0;t<this._numIndexPerPrimitive;++t){a=s*o[e+t],d.push(a);let n=i[a];h[0]=Math.min(n,h[0]),f[0]=Math.max(n,f[0]),n=i[a+1],h[1]=Math.min(n,h[1]),f[1]=Math.max(n,f[1]),n=i[a+2],h[2]=Math.min(n,h[2]),f[2]=Math.max(n,f[2])}}this.bbMin=h,this.bbMax=f;const g=(0,r.p)((0,c.c)(),this.bbMin,this.bbMax,.5);this.radius=.5*Math.max(Math.max(f[0]-h[0],f[1]-h[1]),f[2]-h[2]);let m=this.radius*this.radius;for(let r=0;r<d.length;++r){a=d.at(r);const t=i[a]-g[0],e=i[a+1]-g[1],n=i[a+2]-g[2],s=t*t+e*e+n*n;if(s<=m)continue;const o=Math.sqrt(s),u=.5*(o-this.radius);this.radius=this.radius+u,m=this.radius*this.radius;const h=u/o;g[0]+=t*h,g[1]+=e*h,g[2]+=n*h}this.center=g,d.clear()}getChildren(){if(this._children||(0,r.a)(this.bbMin,this.bbMax)<=1)return this._children;const t=(0,r.p)((0,c.c)(),this.bbMin,this.bbMax,.5),e=this.primitiveIndices.length,n=new Uint8Array(e),i=new Array(8);for(let r=0;r<8;++r)i[r]=0;const{data:s,size:o,indices:u}=this.position;for(let r=0;r<e;++r){let e=0;const a=this._numIndexPerPrimitive*this.primitiveIndices[r];let h=o*u[a],c=s[h],l=s[h+1],f=s[h+2];for(let t=1;t<this._numIndexPerPrimitive;++t){h=o*u[a+t];const e=s[h],n=s[h+1],i=s[h+2];e<c&&(c=e),n<l&&(l=n),i<f&&(f=i)}c<t[0]&&(e|=1),l<t[1]&&(e|=2),f<t[2]&&(e|=4),n[r]=e,++i[e]}let a=0;for(let r=0;r<8;++r)i[r]>0&&++a;if(a<2)return;const h=new Array(8);for(let r=0;r<8;++r)h[r]=i[r]>0?new Uint32Array(i[r]):void 0;for(let r=0;r<8;++r)i[r]=0;for(let r=0;r<e;++r){const t=n[r];h[t][i[t]++]=this.primitiveIndices[r]}this._children=new Array;for(let r=0;r<8;++r)void 0!==h[r]&&this._children.push(new f(h[r],this._numIndexPerPrimitive,this.position));return this._children}static prune(){d.prune()}}const d=new h.Z({deallocator:null});var g=n(1395),m=n(79100),p=n(21530),b=n(85981);n(51378);function v(t){return t?{p0:(0,c.g)(t.p0),p1:(0,c.g)(t.p1),p2:(0,c.g)(t.p2)}:{p0:(0,c.c)(),p1:(0,c.c)(),p2:(0,c.c)()}}function y(t,e,n){return(0,r.f)(_,e,t),(0,r.f)(A,n,t),(0,r.l)((0,r.b)(_,_,A))/2}new p.x(b.Ue),new p.x((()=>v()));const _=(0,c.c)(),A=(0,c.c)();const M=(0,c.c)(),I=(0,c.c)(),O=(0,c.c)(),U=(0,c.c)();var w=n(95439);class T{constructor(t){this.channel=t,this.id=(0,w.D)()}}var x=n(4760);n(43411);(0,c.c)(),new Float32Array(6);class B extends g.c{constructor(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:m.U.Mesh,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:-1;super(),this.material=t,this.mapPositions=n,this.type=i,this.objectAndLayerIdColor=r,this.edgeIndicesLength=o,this.visible=!0,this._attributes=new Map,this._boundingInfo=null;for(const[u,a]of e)this._attributes.set(u,{...a,indices:(0,s.mi)(a.indices)}),u===x.T.POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._attributes.get(u).indices.length:this.edgeIndicesLength)}instantiate(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const e=new B(t.material||this.material,[],this.mapPositions,this.type,this.objectAndLayerIdColor,this.edgeIndicesLength);return this._attributes.forEach(((t,n)=>{t.exclusive=!1,e._attributes.set(n,t)})),e._boundingInfo=this._boundingInfo,e.transformation=t.transformation||this.transformation,e}get attributes(){return this._attributes}getMutableAttribute(t){let e=this._attributes.get(t);return e&&!e.exclusive&&(e={...e,exclusive:!0,data:u(e.data)},this._attributes.set(t,e)),e}setAttributeData(t,e){const n=this._attributes.get(t);n&&this._attributes.set(t,{...n,exclusive:!0,data:e})}get indexCount(){var t;const e=this._attributes.values().next().value.indices;return null!==(t=null===e||void 0===e?void 0:e.length)&&void 0!==t?t:0}get faceCount(){return this.indexCount/3}get boundingInfo(){return null==this._boundingInfo&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(t){return!!(this.type===m.U.Mesh?this._computeAttachmentOriginTriangles(t):this.type===m.U.Line?this._computeAttachmentOriginLines(t):this._computeAttachmentOriginPoints(t))&&(null!=this._transformation&&(0,r.e)(t,t,this._transformation),!0)}_computeAttachmentOriginTriangles(t){return function(t,e){if(!t)return!1;const{size:n,data:i,indices:s}=t;(0,r.s)(e,0,0,0),(0,r.s)(U,0,0,0);let o=0,u=0;for(let a=0;a<s.length-2;a+=3){const t=s[a]*n,h=s[a+1]*n,c=s[a+2]*n;(0,r.s)(M,i[t],i[t+1],i[t+2]),(0,r.s)(I,i[h],i[h+1],i[h+2]),(0,r.s)(O,i[c],i[c+1],i[c+2]);const l=y(M,I,O);l?((0,r.g)(M,M,I),(0,r.g)(M,M,O),(0,r.i)(M,M,1/3*l),(0,r.g)(e,e,M),o+=l):((0,r.g)(U,U,M),(0,r.g)(U,U,I),(0,r.g)(U,U,O),u+=3)}return(0!==u||0!==o)&&(0!==o?((0,r.i)(e,e,1/o),!0):0!==u&&((0,r.i)(e,U,1/u),!0))}(this.attributes.get(x.T.POSITION),t)}_computeAttachmentOriginLines(t){const e=this.attributes.get(x.T.POSITION);return function(t,e,n){if(!t)return!1;(0,r.s)(n,0,0,0),(0,r.s)(U,0,0,0);let i=0,s=0;const{size:o,data:u,indices:a}=t,h=a.length-1,c=h+(e?2:0);for(let l=0;l<c;l+=2){const t=l<h?l+1:0,e=a[l<h?l:h]*o,c=a[t]*o;M[0]=u[e],M[1]=u[e+1],M[2]=u[e+2],I[0]=u[c],I[1]=u[c+1],I[2]=u[c+2],(0,r.i)(M,(0,r.g)(M,M,I),.5);const f=(0,r.r)(M,I);f>0?((0,r.g)(n,n,(0,r.i)(M,M,f)),i+=f):0===i&&((0,r.g)(U,U,M),s++)}return 0!==i?((0,r.i)(n,n,1/i),!0):0!==s&&((0,r.i)(n,U,1/s),!0)}(e,function(t,e){return!(!("isClosed"in t)||!t.isClosed)&&e.indices.length>2}(this.material.parameters,e),t)}_computeAttachmentOriginPoints(t){return function(t,e){if(!t)return!1;const{size:n,data:i,indices:s}=t;(0,r.s)(e,0,0,0);let o=-1,u=0;for(let r=0;r<s.length;r++){const t=s[r]*n;o!==t&&(e[0]+=i[t],e[1]+=i[t+1],e[2]+=i[t+2],u++),o=t}return u>1&&(0,r.i)(e,e,1/u),u>0}(this.attributes.get(x.T.POSITION),t)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const t=this.attributes.get(x.T.POSITION);if(!t||0===t.indices.length)return null;const e=this.type===m.U.Mesh?3:1;(0,l.hu)(t.indices.length%e==0,"Indexing error: "+t.indices.length+" not divisible by "+e);const n=(0,s.KF)(t.indices.length/e);return new f(n,e,t)}get transformation(){var t;return null!==(t=this._transformation)&&void 0!==t?t:i.I}set transformation(t){this._transformation=t&&t!==i.I?(0,i.b)(t):null}addHighlight(){const t=new T(a.V_.Highlight);return this.highlights=function(t,e){return null==t&&(t=[]),t.push(e),t}(this.highlights,t),t}removeHighlight(t){this.highlights=function(t,e){if(null==t)return null;const n=t.filter((t=>t!==e));return 0===n.length?null:n}(this.highlights,t)}}},68401:(t,e,n)=>{var i,r,s,o,u,a,h,c,l;n.d(e,{Gv:()=>r,Iq:()=>c,JJ:()=>h,Rw:()=>o,Ti:()=>l,V_:()=>a,Vr:()=>i,hU:()=>u}),function(t){t[t.None=0]="None",t[t.Front=1]="Front",t[t.Back=2]="Back",t[t.COUNT=3]="COUNT"}(i||(i={})),function(t){t[t.Less=0]="Less",t[t.Lequal=1]="Lequal",t[t.COUNT=2]="COUNT"}(r||(r={})),function(t){t[t.BACKGROUND=0]="BACKGROUND",t[t.UPDATE=1]="UPDATE"}(s||(s={})),function(t){t[t.NOT_LOADED=0]="NOT_LOADED",t[t.LOADING=1]="LOADING",t[t.LOADED=2]="LOADED"}(o||(o={})),function(t){t[t.IntegratedMeshMaskExcluded=1]="IntegratedMeshMaskExcluded",t[t.OutlineVisualElementMask=2]="OutlineVisualElementMask"}(u||(u={})),function(t){t[t.Highlight=0]="Highlight",t[t.MaskOccludee=1]="MaskOccludee",t[t.COUNT=2]="COUNT"}(a||(a={})),function(t){t[t.Blend=0]="Blend",t[t.Opaque=1]="Opaque",t[t.Mask=2]="Mask",t[t.MaskBlend=3]="MaskBlend",t[t.COUNT=4]="COUNT"}(h||(h={})),function(t){t[t.OFF=0]="OFF",t[t.ON=1]="ON"}(c||(c={})),function(t){t.DDS_ENCODING="image/vnd-ms.dds",t.KTX2_ENCODING="image/ktx2",t.BASIS_ENCODING="image/x.basis"}(l||(l={}))},43411:(t,e,n)=>{function i(t,e,n){for(let i=0;i<n;++i)e[2*i]=t[i],e[2*i+1]=t[i]-e[2*i]}function r(t,e){const n=t.length;for(let i=0;i<n;++i)o[0]=t[i],e[i]=o[0];return e}function s(t,e){const n=t.length;for(let i=0;i<n;++i)o[0]=t[i],o[1]=t[i]-o[0],e[i]=o[1];return e}n.d(e,{GB:()=>s,LF:()=>i,U8:()=>r});const o=new Float32Array(2)}}]);
//# sourceMappingURL=2694.f7a0175a.chunk.js.map