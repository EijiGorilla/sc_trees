"use strict";(self.webpackChunksc_trees=self.webpackChunksc_trees||[]).push([[6761],{11873:(e,t,n)=>{function r(){return[1,0,0,0,1,0,0,0,1]}function i(e,t,n,r,i,o,s,c,a){return[e,t,n,r,i,o,s,c,a]}function o(e,t){return new Float64Array(e,t,9)}n.d(t,{a:()=>r,c:()=>o,f:()=>i});Object.freeze(Object.defineProperty({__proto__:null,clone:function(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8]]},create:r,createView:o,fromValues:i},Symbol.toStringTag,{value:"Module"}))},81949:(e,t,n)=>{function r(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function i(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15]]}function o(e,t){return new Float64Array(e,t,16)}n.d(t,{I:()=>s,a:()=>r,b:()=>i,c:()=>o});const s=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:s,clone:i,create:r,createView:o,fromValues:function(e,t,n,r,i,o,s,c,a,f,u,l,d,h,g,m){return[e,t,n,r,i,o,s,c,a,f,u,l,d,h,g,m]}},Symbol.toStringTag,{value:"Module"}))},98131:(e,t,n)=>{function r(){return[0,0,0,1]}function i(e){return[e[0],e[1],e[2],e[3]]}function o(e,t){return new Float64Array(e,t,4)}n.d(t,{I:()=>s,a:()=>r,b:()=>i,c:()=>o});const s=[0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:s,clone:i,create:r,createView:o,fromValues:function(e,t,n,r){return[e,t,n,r]}},Symbol.toStringTag,{value:"Module"}))},23470:(e,t,n)=>{n.d(t,{a:()=>w,c:()=>y,g:()=>M,h:()=>_,j:()=>B,n:()=>x});n(93169);var r=n(32718),i=n(16889),o=n(14226),s=n(11186),c=n(71353),a=n(90045),f=n(67077),u=n(26277),l=n(14320),d=n(40885),h=n(40927),g=n(51378);const m=y();function y(){return(0,f.c)()}const p=a.e,b=a.e;function _(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:y();return(0,a.c)(t,e)}function w(e){return e[3]}function M(e){return e}function v(e,t,n){if(null==t)return!1;if(!P(e,t,S))return!1;let{t0:r,t1:i}=S;if((r<0||i<r&&i>0)&&(r=i),r<0)return!1;if(n){const{origin:e,direction:i}=t;n[0]=e[0]+i[0]*r,n[1]=e[1]+i[1]*r,n[2]=e[2]+i[2]*r}return!0}const S={t0:0,t1:0};function P(e,t,n){const{origin:r,direction:i}=t,o=E;o[0]=r[0]-e[0],o[1]=r[1]-e[1],o[2]=r[2]-e[2];const s=i[0]*i[0]+i[1]*i[1]+i[2]*i[2];if(0===s)return!1;const c=2*(i[0]*o[0]+i[1]*o[1]+i[2]*o[2]),a=c*c-4*s*(o[0]*o[0]+o[1]*o[1]+o[2]*o[2]-e[3]*e[3]);if(a<0)return!1;const f=Math.sqrt(a);return n.t0=(-c-f)/(2*s),n.t1=(-c+f)/(2*s),!0}const E=(0,c.c)();function B(e,t){return v(e,t,null)}function A(e,t,n){const r=g.WM.get(),i=g.MP.get();(0,s.b)(r,t.origin,t.direction);const c=w(e);(0,s.b)(n,r,t.origin),(0,s.i)(n,n,1/(0,s.l)(n)*c);const a=I(e,t.origin),f=(0,h.EU)(t.origin,n);return(0,o.c)(i,f+a,r),(0,s.e)(n,n,i),n}function R(e,t,n){const r=(0,s.f)(g.WM.get(),t,e),i=(0,s.i)(g.WM.get(),r,e[3]/(0,s.l)(r));return(0,s.g)(n,i,e)}function I(e,t){const n=(0,s.f)(g.WM.get(),t,e),r=(0,s.l)(n),o=w(e),c=o+Math.abs(o-r);return(0,i.ZF)(o/c)}const O=(0,c.c)();function T(e,t,n,r){const o=(0,s.f)(O,t,e);switch(n){case l.R.X:{const e=(0,i.jE)(o,O)[2];return(0,s.s)(r,-Math.sin(e),Math.cos(e),0)}case l.R.Y:{const e=(0,i.jE)(o,O),t=e[1],n=e[2],c=Math.sin(t);return(0,s.s)(r,-c*Math.cos(n),-c*Math.sin(n),Math.cos(t))}case l.R.Z:return(0,s.n)(r,o);default:return}}function L(e,t){const n=(0,s.f)(F,t,e);return(0,s.l)(n)-e[3]}function x(e,t){const n=(0,s.a)(e,t),r=w(e);return n<=r*r}const F=(0,c.c)(),j=y();Object.freeze(Object.defineProperty({__proto__:null,NullSphere:m,altitudeAt:L,angleToSilhouette:I,axisAt:T,clear:function(e){e[0]=e[1]=e[2]=e[3]=0},closestPoint:function(e,t,n){return v(e,t,n)?n:((0,d.JI)(t,e,n),R(e,n,n))},closestPointOnSilhouette:A,containsPoint:x,copy:_,create:y,distanceToSilhouette:function(e,t){const n=(0,s.f)(g.WM.get(),t,e),r=(0,s.m)(n),i=e[3]*e[3];return Math.sqrt(Math.abs(r-i))},elevate:function(e,t,n){return e!==n&&(0,s.c)(n,e),n[3]=e[3]+t,n},equals:b,exactEquals:p,fromCenterAndRadius:function(e,t){return(0,f.f)(e[0],e[1],e[2],t)},fromRadius:function(e,t){return e[0]=e[1]=e[2]=0,e[3]=t,e},fromValues:function(e,t,n,r){return(0,f.f)(e,t,n,r)},getCenter:M,getRadius:w,intersectLine:function(e,t,n){const r=(0,d.zk)(t,n);if(!P(e,r,S))return[];const{origin:i,direction:o}=r,{t0:a,t1:f}=S,l=t=>{const n=(0,c.c)();return(0,s.q)(n,i,o,t),R(e,n,n)};return Math.abs(a-f)<(0,u.g)()?[l(a)]:[l(a),l(f)]},intersectRay:v,intersectRayClosestSilhouette:function(e,t,n){if(v(e,t,n))return n;const r=A(e,t,g.WM.get());return(0,s.g)(n,t.origin,(0,s.i)(g.WM.get(),t.direction,(0,s.o)(t.origin,r)/(0,s.l)(t.direction))),n},intersectsRay:B,projectPoint:R,setAltitudeAt:function(e,t,n,r){const i=L(e,t),o=T(e,t,l.R.Z,F),c=(0,s.i)(F,o,n-i);return(0,s.g)(r,t,c)},setExtent:function(e,t,n){return r.Z.getLogger("esri.geometry.support.sphere").error("sphere.setExtent is not yet supported"),e===n?n:_(e,n)},tmpSphere:j,union:function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:y();const r=(0,s.o)(e,t),i=e[3],o=t[3];return r+o<i?((0,a.c)(n,e),n):r+i<o?((0,a.c)(n,t),n):((0,s.p)(n,e,t,(r+o-i)/(2*r)),n[3]=(r+i+o)/2,n)},wrap:function(e){return e}},Symbol.toStringTag,{value:"Module"}))},32035:(e,t,n)=>{n.d(t,{a:()=>c,b:()=>s,c:()=>i,d:()=>u,e:()=>a,n:()=>l,s:()=>f,t:()=>o});var r=n(77873);function i(e,t,n){o(e.typedBuffer,t.typedBuffer,n,e.typedBufferStride,t.typedBufferStride)}function o(e,t,n){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:i;if(e.length/i!==Math.ceil(t.length/o))return r.c.error("source and destination buffers need to have the same number of elements"),e;const s=e.length/i,c=n[0],a=n[1],f=n[2],u=n[4],l=n[5],d=n[6],h=n[8],g=n[9],m=n[10],y=n[12],p=n[13],b=n[14];let _=0,w=0;for(let r=0;r<s;r++){const n=t[_],r=t[_+1],s=t[_+2];e[w]=c*n+u*r+h*s+y,e[w+1]=a*n+l*r+g*s+p,e[w+2]=f*n+d*r+m*s+b,_+=o,w+=i}return e}function s(e,t,n){c(e.typedBuffer,t.typedBuffer,n,e.typedBufferStride,t.typedBufferStride)}function c(e,t,n){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:i;if(e.length/i!==Math.ceil(t.length/o))return void r.c.error("source and destination buffers need to have the same number of elements");const s=e.length/i,c=n[0],a=n[1],f=n[2],u=n[3],l=n[4],d=n[5],h=n[6],g=n[7],m=n[8];let y=0,p=0;for(let r=0;r<s;r++){const n=t[y],r=t[y+1],s=t[y+2];e[p]=c*n+u*r+h*s,e[p+1]=a*n+l*r+g*s,e[p+2]=f*n+d*r+m*s,y+=o,p+=i}}function a(e,t,n){f(e.typedBuffer,t,n,e.typedBufferStride)}function f(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3;const i=Math.min(e.length/r,t.count),o=t.typedBuffer,s=t.typedBufferStride;let c=0,a=0;for(let f=0;f<i;f++)e[a]=n*o[c],e[a+1]=n*o[c+1],e[a+2]=n*o[c+2],c+=s,a+=r}function u(e,t){l(e.typedBuffer,t.typedBuffer,e.typedBufferStride,t.typedBufferStride)}function l(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:n;const i=Math.min(e.length/n,t.length/r);let o=0,s=0;for(let c=0;c<i;c++){const i=t[o],c=t[o+1],a=t[o+2],f=i*i+c*c+a*a;if(f>0){const t=1/Math.sqrt(f);e[s]=t*i,e[s+1]=t*c,e[s+2]=t*a}o+=r,s+=n}}Object.freeze(Object.defineProperty({__proto__:null,normalize:l,normalizeView:u,scale:f,scaleView:a,shiftRight:function(e,t,n){const r=Math.min(e.count,t.count),i=e.typedBuffer,o=e.typedBufferStride,s=t.typedBuffer,c=t.typedBufferStride;let a=0,f=0;for(let u=0;u<r;u++)i[f]=s[a]>>n,i[f+1]=s[a+1]>>n,i[f+2]=s[a+2]>>n,a+=c,f+=o},transformMat3:c,transformMat3View:s,transformMat4:o,transformMat4View:i},Symbol.toStringTag,{value:"Module"}))},70116:(e,t,n)=>{var r;n.d(t,{Y:()=>r}),function(e){e[e.KILOBYTES=1024]="KILOBYTES",e[e.MEGABYTES=1048576]="MEGABYTES",e[e.GIGABYTES=1073741824]="GIGABYTES"}(r||(r={}))},21530:(e,t,n)=>{n.d(t,{x:()=>i});var r=n(70758);class i{constructor(e){this._allocator=e,this._items=[],this._itemsPtr=0,this._grow()}get(){return 0===this._itemsPtr&&(0,r.Y)((()=>this._reset())),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}_reset(){const e=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*o);this._items.length=Math.min(e,this._items.length),this._itemsPtr=0}_grow(){for(let e=0;e<Math.max(8,Math.min(this._items.length,o));e++)this._items.push(this._allocator())}}const o=1024},86372:(e,t,n)=>{n.d(t,{JK:()=>c,QZ:()=>o,Rq:()=>s,bg:()=>i,mB:()=>a});var r=n(18722);function i(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e<=r.c8?t?new Array(e).fill(0):new Array(e):new Float64Array(e)}function o(e){return((0,r.kJ)(e)?e.length:e.byteLength/8)<=r.c8?Array.from(e):new Float64Array(e)}function s(e,t,n){return Array.isArray(e)?e.slice(t,t+n):e.subarray(t,t+n)}function c(e,t){for(let n=0;n<t.length;++n)e[n]=t[n];return e}function a(e){return Array.isArray(e)?new Float64Array(e):e}},80880:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(27366),i=n(11582),o=n(46784),s=n(49861),c=(n(25243),n(63780),n(93169),n(27135)),a=n(69912),f=n(71353),u=n(585);let l=class extends((0,i.J)(o.wq)){constructor(e){super(e),this.type="georeferenced-relative",this.isRelative=!0,this.isGeoreferenced=!0,this.origin=(0,f.c)()}getOriginPoint(e){const[t,n,r]=this.origin;return new u.Z({x:t,y:n,z:r,spatialReference:e})}setOriginFromPoint(e){let{x:t,y:n,z:r}=e;this.origin=(0,f.f)(t,n,null!==r&&void 0!==r?r:0)}};(0,r._)([(0,c.J)({georeferencedRelative:"georeferenced-relative"},{readOnly:!0})],l.prototype,"type",void 0),(0,r._)([(0,s.Cb)({type:[Number],nonNullable:!0,json:{write:!0}})],l.prototype,"origin",void 0),l=(0,r._)([(0,a.j)("esri.geometry.support.MeshGeoreferencedRelativeVertexSpace")],l);const d=l},50250:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(27366),i=n(11582),o=n(46784),s=n(49861),c=(n(25243),n(63780),n(93169),n(27135)),a=n(69912),f=n(71353),u=n(585);let l=class extends((0,i.J)(o.wq)){constructor(e){super(e),this.type="local",this.isRelative=!0,this.isGeoreferenced=!1,this.origin=(0,f.c)()}getOriginPoint(e){const[t,n,r]=this.origin;return new u.Z({x:t,y:n,z:r,spatialReference:e})}setOriginFromPoint(e){let{x:t,y:n,z:r}=e;this.origin=(0,f.f)(t,n,null!==r&&void 0!==r?r:0)}};(0,r._)([(0,c.J)({local:"local"},{readOnly:!0})],l.prototype,"type",void 0),(0,r._)([(0,s.Cb)({type:[Number],nonNullable:!0,json:{write:!0}})],l.prototype,"origin",void 0),l=(0,r._)([(0,a.j)("esri.geometry.support.MeshLocalVertexSpace")],l);const d=l},77873:(e,t,n)=>{n.d(t,{c:()=>r});const r=n(32718).Z.getLogger("esri.views.3d.support.buffer.math")},40885:(e,t,n)=>{n.d(t,{JI:()=>u,Ue:()=>s,re:()=>a,zk:()=>f});n(63780);var r=n(21530),i=n(11186),o=n(71353);n(51378);function s(e){return e?c((0,o.g)(e.origin),(0,o.g)(e.direction)):c((0,o.c)(),(0,o.c)())}function c(e,t){return{origin:e,direction:t}}function a(e,t){const n=l.get();return n.origin=e,n.direction=t,n}function f(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s();return(0,i.c)(n.origin,e),(0,i.f)(n.direction,t,e),n}function u(e,t,n){const r=(0,i.j)(e.direction,(0,i.f)(n,t,e.origin));return(0,i.g)(n,e.origin,(0,i.i)(n,e.direction,r)),n}const l=new r.x((()=>s()))},40927:(e,t,n)=>{n.d(t,{EU:()=>s});var r=n(16889),i=n(11186),o=n(71353);function s(e,t){const n=(0,i.j)(e,t)/((0,i.l)(e)*(0,i.l)(t));return-(0,r.ZF)(n)}(0,o.c)(),(0,o.c)()},51378:(e,t,n)=>{n.d(t,{MP:()=>g,WM:()=>h});var r=n(70116),i=n(70758),o=n(11873),s=n(81949),c=n(98131),a=n(6394),f=n(71353),u=n(67077);class l{constructor(e,t,n){this._itemByteSize=e,this._itemCreate=t,this._buffers=new Array,this._items=new Array,this._itemsPtr=0,this._itemsPerBuffer=Math.ceil(n/this._itemByteSize)}get(){0===this._itemsPtr&&(0,i.Y)((()=>this._reset()));const e=Math.floor(this._itemsPtr/this._itemsPerBuffer);for(;this._buffers.length<=e;){const e=new ArrayBuffer(this._itemsPerBuffer*this._itemByteSize);for(let t=0;t<this._itemsPerBuffer;++t)this._items.push(this._itemCreate(e,t*this._itemByteSize));this._buffers.push(e)}return this._items[this._itemsPtr++]}_reset(){const e=2*(Math.floor(this._itemsPtr/this._itemsPerBuffer)+1);for(;this._buffers.length>e;)this._buffers.pop(),this._items.length=this._buffers.length*this._itemsPerBuffer;this._itemsPtr=0}static createVec2f64(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;return new l(16,a.c,e)}static createVec3f64(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;return new l(24,f.a,e)}static createVec4f64(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;return new l(32,u.a,e)}static createMat3f64(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;return new l(72,o.c,e)}static createMat4f64(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;return new l(128,s.c,e)}static createQuatf64(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;return new l(32,c.c,e)}get test(){return{size:this._buffers.length*this._itemsPerBuffer*this._itemByteSize}}}const d=4*r.Y.KILOBYTES,h=(l.createVec2f64(),l.createVec3f64()),g=(l.createVec4f64(),l.createMat3f64(),l.createMat4f64());l.createQuatf64()},6761:(e,t,n)=>{n.r(t),n.d(t,{destroyContext:()=>E,dracoDecompressPointCloudData:()=>_,filterObbsForModifications:()=>w,filterObbsForModificationsSync:()=>T,initialize:()=>F,interpretObbModificationResults:()=>O,process:()=>b,project:()=>S,setLegacySchema:()=>v,setModifications:()=>M,setModificationsSync:()=>R,test:()=>C,transformNormals:()=>P});var r,i,o=n(78952),s=n(86372),c=n(80880),a=n(50250),f=n(32035);!function(e){e[e.None=0]="None",e[e.Int16=1]="Int16",e[e.Int32=2]="Int32"}(r||(r={})),function(e){e[e.Replace=0]="Replace",e[e.Outside=1]="Outside",e[e.Inside=2]="Inside",e[e.Finished=3]="Finished"}(i||(i={}));var u=n(65905);function l(e){return(0,u.V)("esri/libs/i3s/".concat(e))}let d;var h,g,m,y,p;n(23470);!function(e){e[e.Unmodified=0]="Unmodified",e[e.Culled=1]="Culled",e[e.NotChecked=2]="NotChecked"}(h||(h={})),function(e){e[e.Unmodified=0]="Unmodified",e[e.PotentiallyModified=1]="PotentiallyModified",e[e.Culled=2]="Culled",e[e.Unknown=3]="Unknown",e[e.NotChecked=4]="NotChecked"}(g||(g={}));!function(e){e[e.Unknown=0]="Unknown",e[e.Uncached=1]="Uncached",e[e.Cached=2]="Cached"}(m||(m={})),function(e){e[e.None=0]="None",e[e.MaxScreenThreshold=1]="MaxScreenThreshold",e[e.ScreenSpaceRelative=2]="ScreenSpaceRelative",e[e.RemovedFeatureDiameter=3]="RemovedFeatureDiameter",e[e.DistanceRangeFromDefaultCamera=4]="DistanceRangeFromDefaultCamera"}(y||(y={})),function(e){e[e.Hole=0]="Hole",e[e.Leaf=1]="Leaf"}(p||(p={}));async function b(e){A=await j();const t=[e.geometryBuffer];return{result:I(A,e,t),transferList:t}}async function _(e){var t;A=await j();const n=[e.geometryBuffer],{geometryBuffer:r}=e,i=r.byteLength,o=A._malloc(i),s=new Uint8Array(A.HEAPU8.buffer,o,i);s.set(new Uint8Array(r));const c=A.dracoDecompressPointCloudData(o,s.byteLength);if(A._free(o),c.error.length>0)throw new Error("i3s.wasm: ".concat(c.error));const a=(null===(t=c.featureIds)||void 0===t?void 0:t.length)>0?c.featureIds.slice():null,f=c.positions.slice();return a&&n.push(a.buffer),n.push(f.buffer),{result:{positions:f,featureIds:a},transferList:n}}async function w(e){await j(),T(e);const t={buffer:e.buffer};return{result:t,transferList:[t.buffer]}}async function M(e){await j(),R(e)}async function v(e){A=await j(),A.setLegacySchema(e.context,e.jsonSchema)}async function S(e){const{localMatrix:t,origin:r,positions:i,vertexSpace:f,localMode:u}=e,l=o.Z.fromJSON(e.inSpatialReference),d=o.Z.fromJSON(e.outSpatialReference);let h;if("georeferenced"===f.type){const[{projectBuffer:e},{initializeProjection:t}]=await Promise.all([Promise.resolve().then(n.bind(n,50628)),Promise.resolve().then(n.bind(n,45925))]);await t(l,d),h=new Float64Array(i.length),e(i,l,0,h,d,0,h.length/3)}else{const e="georeferencedRelative"===f.type?c.Z.fromJSON(f):a.Z.fromJSON(f),{project:r}=await Promise.all([n.e(5158),n.e(7898)]).then(n.bind(n,57898));h=(0,s.mB)(r({positions:i,transform:t?{localMatrix:t}:void 0,vertexSpace:e,inSpatialReference:l,outSpatialReference:d,localMode:u}))}const g=h.length,[m,y,p]=r;for(let n=0;n<g;n+=3)h[n]-=m,h[n+1]-=y,h[n+2]-=p;return{result:{projected:h,original:i},transferList:[h.buffer,i.buffer]}}async function P(e){let{normalMatrix:t,normals:n}=e;const r=new Float32Array(n.length);return(0,f.a)(r,n,t),(0,f.n)(r,r),{result:{transformed:r,original:n},transferList:[r.buffer,n.buffer]}}function E(e){L(e)}let B,A;function R(e){if(!A)return;const t=e.modifications,n=A._malloc(8*t.length),r=new Float64Array(A.HEAPU8.buffer,n,t.length);for(let i=0;i<t.length;++i)r[i]=t[i];A.setModifications(e.context,n,t.length,e.isGeodetic),A._free(n)}function I(e,t,n){const{context:i,localOrigin:o,globalTrafo:s,mbs:c,obb:a,elevationOffset:f,geometryBuffer:u,geometryDescriptor:l,indexToVertexProjector:d,vertexToRenderProjector:h}=t,g=e._malloc(u.byteLength),m=e._malloc(33*Float64Array.BYTES_PER_ELEMENT),y=new Uint8Array(e.HEAPU8.buffer,g,u.byteLength);y.set(new Uint8Array(u));const p=new Float64Array(e.HEAPU8.buffer,m,33);x(p,o);let b=p.byteOffset+3*p.BYTES_PER_ELEMENT,_=new Float64Array(p.buffer,b);x(_,s),b+=16*p.BYTES_PER_ELEMENT,_=new Float64Array(p.buffer,b),x(_,c),b+=4*p.BYTES_PER_ELEMENT,null!=a&&(_=new Float64Array(p.buffer,b),x(_,a.center),b+=3*p.BYTES_PER_ELEMENT,_=new Float64Array(p.buffer,b),x(_,a.halfSize),b+=3*p.BYTES_PER_ELEMENT,_=new Float64Array(p.buffer,b),x(_,a.quaternion));const w=l,M={isDraco:!1,isLegacy:!1,color:t.layouts.some((e=>e.some((e=>"color"===e.name)))),normal:t.needNormals&&t.layouts.some((e=>e.some((e=>"normalCompressed"===e.name)))),uv0:t.layouts.some((e=>e.some((e=>"uv0"===e.name)))),uvRegion:t.layouts.some((e=>e.some((e=>"uvRegion"===e.name)))),featureIndex:w.featureIndex},v=e.process(i,!!t.obb,g,y.byteLength,w,M,m,f,d,h,t.normalReferenceFrame);if(e._free(m),e._free(g),v.error.length>0)throw new Error("i3s.wasm: ".concat(v.error));if(v.discarded)return null;const S=v.componentOffsets.length>0?v.componentOffsets.slice():null,P=v.featureIds.length>0?v.featureIds.slice():null,E=v.anchorIds.length>0?Array.from(v.anchorIds):null,B=v.anchors.length>0?Array.from(v.anchors):null,A=v.interleavedVertedData.slice().buffer,R=v.indicesType===r.Int16?new Uint16Array(v.indices.buffer,v.indices.byteOffset,v.indices.byteLength/2).slice():new Uint32Array(v.indices.buffer,v.indices.byteOffset,v.indices.byteLength/4).slice(),I=v.positions.slice(),O=v.positionIndicesType===r.Int16?new Uint16Array(v.positionIndices.buffer,v.positionIndices.byteOffset,v.positionIndices.byteLength/2).slice():new Uint32Array(v.positionIndices.buffer,v.positionIndices.byteOffset,v.positionIndices.byteLength/4).slice(),T={layout:t.layouts[0],interleavedVertexData:A,indices:R,hasColors:v.hasColors,hasModifications:v.hasModifications,positionData:{data:I,indices:O}};return P&&n.push(P.buffer),S&&n.push(S.buffer),n.push(A),n.push(R.buffer),n.push(I.buffer),n.push(O.buffer),{componentOffsets:S,featureIds:P,anchorIds:E,anchors:B,transformedGeometry:T,obb:v.obb}}function O(e){return 0===e?g.Unmodified:1===e?g.PotentiallyModified:2===e?g.Culled:g.Unknown}function T(e){if(!A)return;const{context:t,buffer:n}=e,r=A._malloc(n.byteLength),i=n.byteLength/Float64Array.BYTES_PER_ELEMENT,o=new Float64Array(A.HEAPU8.buffer,r,i),s=new Float64Array(n);o.set(s),A.filterOBBs(t,r,i),s.set(o),A._free(r)}function L(e){A&&0===A.destroy(e)&&(A=null)}function x(e,t){for(let n=0;n<t.length;++n)e[n]=t[n]}async function F(){A||await j()}function j(){return A?Promise.resolve(A):(B||(B=(d||(d=new Promise((e=>n.e(7552).then(n.bind(n,57552)).then((e=>e.i)).then((t=>{let{default:n}=t;const r=n({locateFile:l,onRuntimeInitialized:()=>e(r)});delete r.then})))).catch((e=>{throw e}))),d).then((e=>(A=e,B=null,A)))),B)}const C={transform:(e,t)=>A&&I(A,e,t),destroy:L}}}]);
//# sourceMappingURL=6761.2cbec674.chunk.js.map