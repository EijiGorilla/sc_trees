"use strict";(self.webpackChunksc_trees=self.webpackChunksc_trees||[]).push([[3715],{39406:(t,e,_)=>{_.d(e,{$z:()=>T,KF:()=>i,mi:()=>n});var E=_(18722);function n(t){if((0,E.kJ)(t)){if(t.length<E.c8)return t}else if(t.length<E.c8)return Array.from(t);let e=!0,_=!0;return t.some(((t,E)=>(e=e&&0===t,_=_&&t===E,!e&&!_))),e?function(t){if(1===t)return r;if(t<E.c8)return new Array(t).fill(0);if(t>N.length){const e=Math.max(2*N.length,t);N=new Uint8Array(e)}return new Uint8Array(N.buffer,0,t)}(t.length):_?i(t.length):(0,E.kJ)(t)||t.BYTES_PER_ELEMENT!==Uint16Array.BYTES_PER_ELEMENT?function(t){let e=!0;for(const _ of t){if(_>=65536)return(0,E.kJ)(t)?new Uint32Array(t):t;_>=256&&(e=!1)}return e?new Uint8Array(t):new Uint16Array(t)}(t):t}function T(t){return t<=E.c8?new Array(t):t<=65536?new Uint16Array(t):new Uint32Array(t)}let A=(()=>{const t=new Uint32Array(131072);for(let e=0;e<t.length;++e)t[e]=e;return t})();const r=[0],R=(()=>{const t=new Uint16Array(65536);for(let e=0;e<t.length;++e)t[e]=e;return t})();function i(t){if(1===t)return r;if(t<E.c8)return Array.from(new Uint16Array(R.buffer,0,t));if(t<R.length)return new Uint16Array(R.buffer,0,t);if(t>A.length){const e=Math.max(2*A.length,t);A=new Uint32Array(e);for(let t=0;t<A.length;t++)A[t]=t}return new Uint32Array(A.buffer,0,t)}let N=new Uint8Array(65536)},48734:(t,e,_)=>{function E(t){switch(t){case"u8":case"i8":return 1;case"u16":case"i16":return 2;case"u32":case"i32":case"f32":return 4;case"f64":return 8}}_.d(e,{n1:()=>E})},35888:(t,e,_)=>{_.d(e,{d:()=>T});var E=_(16889),n=_(39406);function T(t,e,_){var T;const N=Array.isArray(t),o=N?t.length/e:t.byteLength/(4*e),s=N?t:new Uint32Array(t,0,o*e),S=null!==(T=null===_||void 0===_?void 0:_.minReduction)&&void 0!==T?T:0,I=(null===_||void 0===_?void 0:_.originalIndices)||null,O=I?I.length:0,c=(null===_||void 0===_?void 0:_.componentOffsets)||null;let C=0;if(c)for(let E=0;E<c.length-1;E++){const t=c[E+1]-c[E];t>C&&(C=t)}else C=o;const f=Math.floor(1.1*C)+1;(null==i||i.length<2*f)&&(i=new Uint32Array((0,E.Sf)(2*f)));for(let E=0;E<2*f;E++)i[E]=0;let u=0;const a=!!c&&!!I,l=a?O:o;let L=(0,n.$z)(o);const M=new Uint32Array(O),U=1.96;let D=0!==S?Math.ceil(4*U*U/(S*S)*S*(1-S)):l,P=1,G=c?c[1]:l;for(let E=0;E<l;E++){if(E===D){const t=1-u/E;if(t+U*Math.sqrt(t*(1-t)/E)<S)return null;D*=2}if(E===G){for(let t=0;t<2*f;t++)i[t]=0;if(I)for(let t=c[P-1];t<c[P];t++)M[t]=L[I[t]];G=c[++P]}const t=a?I[E]:E,_=t*e,n=R(s,_,e);let T=n%f,r=u;for(;0!==i[2*T+1];){if(i[2*T]===n){const t=i[2*T+1]-1;if(A(s,_,t*e,e)){r=L[t];break}}T++,T>=f&&(T-=f)}r===u&&(i[2*T]=n,i[2*T+1]=t+1,u++),L[t]=r}if(0!==S&&1-u/o<S)return null;if(a){for(let t=c[P-1];t<M.length;t++)M[t]=L[I[t]];L=(0,n.mi)(M)}const h=N?new Array(u):new Uint32Array(u*e);u=0;for(let E=0;E<l;E++)L[E]===u&&(r(s,(a?I[E]:E)*e,h,u*e,e),u++);if(I&&!a){const t=new Uint32Array(O);for(let e=0;e<t.length;e++)t[e]=L[I[e]];L=(0,n.mi)(t)}return{buffer:Array.isArray(h)?h:h.buffer,indices:L,uniqueCount:u}}function A(t,e,_,E){for(let n=0;n<E;n++)if(t[e+n]!==t[_+n])return!1;return!0}function r(t,e,_,E,n){for(let T=0;T<n;T++)_[E+T]=t[e+T]}function R(t,e,_){let E=0;for(let n=0;n<_;n++)E=t[e+n]+E|0,E=E+(E<<11)+(E>>>2)|0;return E>>>0}let i=null},55158:(t,e,_)=>{_.d(e,{Gw:()=>i,U$:()=>R});var E=_(25158),n=_(48734),T=_(97731);class A{constructor(t,e){this.layout=t,this.buffer="number"==typeof e?new ArrayBuffer(e*t.stride):e;for(const _ of t.fields.keys()){const e=t.fields.get(_);this[_]=new e.constructor(this.buffer,e.offset,this.stride)}}get stride(){return this.layout.stride}get count(){return this.buffer.byteLength/this.stride}get byteLength(){return this.buffer.byteLength}getField(t,e){const _=this[t];return _&&_.elementCount===e.ElementCount&&_.elementType===e.ElementType?_:null}slice(t,e){return new A(this.layout,this.buffer.slice(t*this.stride,e*this.stride))}copyFrom(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,_=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,E=arguments.length>3&&void 0!==arguments[3]?arguments[3]:t.count;const n=this.stride;if(n%4==0){const T=new Uint32Array(t.buffer,e*n,E*n/4);new Uint32Array(this.buffer,_*n,E*n/4).set(T)}else{const T=new Uint8Array(t.buffer,e*n,E*n);new Uint8Array(this.buffer,_*n,E*n).set(T)}return this}get usedMemory(){return this.byteLength}dispose(){}}class r{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this._stride=0,this._lastAligned=0,this._fields=new Map,t&&(this._stride=t.stride,t.fields.forEach((t=>this._fields.set(t[0],{...t[1],constructor:s(t[1].constructor)}))))}vec2f(t,e){return this._appendField(t,E.Eu,e),this}vec2f64(t,e){return this._appendField(t,E.q6,e),this}vec3f(t,e){return this._appendField(t,E.ct,e),this}vec3f64(t,e){return this._appendField(t,E.fP,e),this}vec4f(t,e){return this._appendField(t,E.ek,e),this}vec4f64(t,e){return this._appendField(t,E.Cd,e),this}mat3f(t,e){return this._appendField(t,E.gK,e),this}mat3f64(t,e){return this._appendField(t,E.ey,e),this}mat4f(t,e){return this._appendField(t,E.bj,e),this}mat4f64(t,e){return this._appendField(t,E.O1,e),this}vec4u8(t,e){return this._appendField(t,E.mc,e),this}f32(t,e){return this._appendField(t,E.ly,e),this}f64(t,e){return this._appendField(t,E.oS,e),this}u8(t,e){return this._appendField(t,E.D_,e),this}u16(t,e){return this._appendField(t,E.av,e),this}i8(t,e){return this._appendField(t,E.Hz,e),this}vec2i8(t,e){return this._appendField(t,E.Vs,e),this}vec2i16(t,e){return this._appendField(t,E.or,e),this}vec2u8(t,e){return this._appendField(t,E.xA,e),this}vec4u16(t,e){return this._appendField(t,E.v6,e),this}u32(t,e){return this._appendField(t,E.Nu,e),this}_appendField(t,e,_){if(this._fields.has(t))return void(0,T.hu)(!1,"".concat(t," already added to vertex buffer layout"));const E=e.ElementCount*(0,n.n1)(e.ElementType),A=this._stride;this._stride+=E,this._fields.set(t,{size:E,constructor:e,offset:A,optional:_})}createBuffer(t){return new A(this,t)}createView(t){return new A(this,t)}clone(){const t=new r;return t._stride=this._stride,t._fields=new Map,this._fields.forEach(((e,_)=>t._fields.set(_,e))),t.BufferType=this.BufferType,t}get stride(){if(this._lastAligned!==this._fields.size){let t=1;this._fields.forEach((e=>t=Math.max(t,(0,n.n1)(e.constructor.ElementType)))),this._stride=Math.floor((this._stride+t-1)/t)*t,this._lastAligned=this._fields.size}return this._stride}get fields(){return this._fields}}function R(){return new r}class i{constructor(t){this.fields=new Array,t.fields.forEach(((t,e)=>{const _={...t,constructor:o(t.constructor)};this.fields.push([e,_])})),this.stride=t.stride}}const N=[E.ly,E.Eu,E.ct,E.ek,E.gK,E.bj,E.oS,E.q6,E.fP,E.Cd,E.ey,E.O1,E.D_,E.xA,E.ne,E.mc,E.av,E.TS,E.mw,E.v6,E.Nu,E.qt,E.G5,E.hu,E.Hz,E.Vs,E.P_,E.ir,E.o7,E.or,E.n1,E.zO,E.Jj,E.wA,E.PP,E.TN];function o(t){return"".concat(t.ElementType,"_").concat(t.ElementCount)}function s(t){return S.get(t)}const S=new Map;N.forEach((t=>S.set(o(t),t)))},50256:(t,e,_)=>{_.d(e,{K:()=>T});var E=_(8548),n=_(61109);function T(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;const _=t.stride;return Array.from(t.fields.keys()).map((E=>{const T=t.fields.get(E),r=T.constructor.ElementCount,R=A(T.constructor.ElementType),i=T.offset,N=!(!T.optional||!T.optional.glNormalized);return new n.G(E,r,R,i,_,N,e)}))}function A(t){const e=r[t];if(e)return e;throw new Error("BufferType not supported in WebGL")}const r={u8:E.g.UNSIGNED_BYTE,u16:E.g.UNSIGNED_SHORT,u32:E.g.UNSIGNED_INT,i8:E.g.BYTE,i16:E.g.SHORT,i32:E.g.INT,f32:E.g.FLOAT}},67009:(t,e,_)=>{_.d(e,{Hr:()=>i,dG:()=>R,tf:()=>A});var E=_(50256),n=_(55158),T=_(4760);const A=(0,n.U$)().vec3f(T.T.POSITION).u16(T.T.COMPONENTINDEX),r=(0,n.U$)().vec2u8(T.T.SIDENESS),R=((0,E.K)(r),(0,n.U$)().vec3f(T.T.POSITION0).vec3f(T.T.POSITION1).vec3f(T.T.NORMAL).u16(T.T.COMPONENTINDEX).u8(T.T.VARIANTOFFSET,{glNormalized:!0}).u8(T.T.VARIANTSTROKE).u8(T.T.VARIANTEXTENSION,{glNormalized:!0})),i=(0,n.U$)().vec3f(T.T.POSITION0).vec3f(T.T.POSITION1).vec3f(T.T.NORMALA).vec3f(T.T.NORMALB).u16(T.T.COMPONENTINDEX).u8(T.T.VARIANTOFFSET,{glNormalized:!0}).u8(T.T.VARIANTSTROKE).u8(T.T.VARIANTEXTENSION,{glNormalized:!0});new Map([[T.T.POSITION0,0],[T.T.POSITION1,1],[T.T.COMPONENTINDEX,2],[T.T.VARIANTOFFSET,3],[T.T.VARIANTSTROKE,4],[T.T.VARIANTEXTENSION,5],[T.T.NORMAL,6],[T.T.NORMALA,6],[T.T.NORMALB,7],[T.T.SIDENESS,8]])},10662:(t,e,_)=>{_.d(e,{n:()=>N});var E=_(63780),n=_(16889),T=_(11186),A=_(71353);const r=-1;var R,i;function N(t,e,_){let A=arguments.length>3&&void 0!==arguments[3]?arguments[3]:C;const R=t.vertices.position,i=t.vertices.componentIndex,N=(0,n.Vl)(A.anglePlanar),c=(0,n.Vl)(A.angleSignificantEdge),f=Math.cos(c),u=Math.cos(N),a=O.edge,l=a.position0,L=a.position1,M=a.faceNormal0,U=a.faceNormal1,D=I(t),P=function(t){const e=t.faces.length/3,_=t.faces,E=t.neighbors;let n=0;for(let R=0;R<e;R++){const t=E[3*R],e=E[3*R+1],T=E[3*R+2],A=_[3*R],i=_[3*R+1],N=_[3*R+2];n+=t===r||A<i?1:0,n+=e===r||i<N?1:0,n+=T===r||N<A?1:0}const T=new Int32Array(4*n);let A=0;for(let R=0;R<e;R++){const t=E[3*R],e=E[3*R+1],n=E[3*R+2],i=_[3*R],N=_[3*R+1],o=_[3*R+2];(t===r||i<N)&&(T[A++]=i,T[A++]=N,T[A++]=R,T[A++]=t),(e===r||N<o)&&(T[A++]=N,T[A++]=o,T[A++]=R,T[A++]=e),(n===r||o<i)&&(T[A++]=o,T[A++]=i,T[A++]=R,T[A++]=n)}return T}(t),G=P.length/4,h=e.allocate(G);let d=0;const B=G,F=_.allocate(B);let g=0,H=0,p=0;const m=(0,E.wR)(0,G),y=new Float32Array(G);y.forEach(((t,e,_)=>{R.getVec(P[4*e],l),R.getVec(P[4*e+1],L),_[e]=(0,T.o)(l,L)})),m.sort(((t,e)=>y[e]-y[t]));const V=new Array,w=new Array;for(let E=0;E<G;E++){const t=m[E],n=y[t],A=P[4*t],I=P[4*t+1],O=P[4*t+2],c=P[4*t+3],C=c===r;if(R.getVec(A,l),R.getVec(I,L),C)(0,T.s)(M,D[3*O],D[3*O+1],D[3*O+2]),(0,T.c)(U,M),a.componentIndex=i.get(A),a.cosAngle=(0,T.j)(M,U);else{if((0,T.s)(M,D[3*O],D[3*O+1],D[3*O+2]),(0,T.s)(U,D[3*c],D[3*c+1],D[3*c+2]),a.componentIndex=i.get(A),a.cosAngle=(0,T.j)(M,U),s(a,u))continue;a.cosAngle<-.9999&&(0,T.c)(U,M)}H+=n,p++,C||o(a,f)?(e.write(h,d++,a),V.push(n)):S(a,N)&&(_.write(F,g++,a),w.push(n))}const v=new Float32Array(V.reverse()),Y=new Float32Array(w.reverse());return{regular:{instancesData:e.trim(h,d),lodInfo:{lengths:v}},silhouette:{instancesData:_.trim(F,g),lodInfo:{lengths:Y}},averageEdgeLength:H/p}}function o(t,e){return t.cosAngle<e}function s(t,e){return t.cosAngle>e}function S(t,e){const _=(0,n.ZF)(t.cosAngle),E=O.fwd,A=O.ortho;return(0,T.C)(E,t.position1,t.position0),_*((0,T.j)((0,T.b)(A,t.faceNormal0,t.faceNormal1),E)>0?-1:1)>e}function I(t){const e=t.faces.length/3,_=t.vertices.position,E=t.faces,n=c.v0,A=c.v1,r=c.v2,R=new Float32Array(3*e);for(let i=0;i<e;i++){const t=E[3*i],e=E[3*i+1],N=E[3*i+2];_.getVec(t,n),_.getVec(e,A),_.getVec(N,r),(0,T.f)(A,A,n),(0,T.f)(r,r,n),(0,T.b)(n,A,r),(0,T.n)(n,n),R[3*i]=n[0],R[3*i+1]=n[1],R[3*i+2]=n[2]}return R}(i=R||(R={}))[i.SOLID=0]="SOLID",i[i.SKETCH=1]="SKETCH";const O={edge:{position0:(0,A.c)(),position1:(0,A.c)(),faceNormal0:(0,A.c)(),faceNormal1:(0,A.c)(),componentIndex:0,cosAngle:0},ortho:(0,A.c)(),fwd:(0,A.c)()},c={v0:(0,A.c)(),v1:(0,A.c)(),v2:(0,A.c)()},C={anglePlanar:4,angleSignificantEdge:35}},83715:(t,e,_)=>{_.d(e,{Kl:()=>D,n_:()=>F,kY:()=>P,Yr:()=>B});var E=_(35888);function n(t,e,_){const E=e/3,n=new Uint32Array(_+1),T=new Uint32Array(_+1),A=(t,e)=>{t<e?n[t+1]++:T[e+1]++};for(let C=0;C<E;C++){const e=t[3*C],_=t[3*C+1],E=t[3*C+2];A(e,_),A(_,E),A(E,e)}let r=0,R=0;for(let C=0;C<_;C++){const t=n[C+1],e=T[C+1];n[C+1]=r,T[C+1]=R,r+=t,R+=e}const i=new Uint32Array(6*E),N=n[_],o=(t,e,_)=>{if(t<e){const E=n[t+1]++;i[2*E]=e,i[2*E+1]=_}else{const E=T[e+1]++;i[2*N+2*E]=t,i[2*N+2*E+1]=_}};for(let C=0;C<E;C++){const e=t[3*C],_=t[3*C+1],E=t[3*C+2];o(e,_,C),o(_,E,C),o(E,e,C)}const s=(t,e)=>{const _=2*t,E=e-t;for(let n=1;n<E;n++){const t=i[_+2*n],e=i[_+2*n+1];let E=n-1;for(;E>=0&&i[_+2*E]>t;E--)i[_+2*E+2]=i[_+2*E],i[_+2*E+3]=i[_+2*E+1];i[_+2*E+2]=t,i[_+2*E+3]=e}};for(let C=0;C<_;C++)s(n[C],n[C+1]),s(N+T[C],N+T[C+1]);const S=new Int32Array(3*E),I=(e,_)=>e===t[3*_]?0:e===t[3*_+1]?1:e===t[3*_+2]?2:-1,O=(t,e)=>{const _=I(t,e);S[3*e+_]=-1},c=(t,e,_,E)=>{const n=I(t,e);S[3*e+n]=E;const T=I(_,E);S[3*E+T]=e};for(let C=0;C<_;C++){let t=n[C];const e=n[C+1];let _=T[C];const E=T[C+1];for(;t<e&&_<E;){const e=i[2*t],E=i[2*N+2*_];e===E?(c(C,i[2*t+1],E,i[2*N+2*_+1]),t++,_++):e<E?(O(C,i[2*t+1]),t++):(O(E,i[2*N+2*_+1]),_++)}for(;t<e;)O(C,i[2*t+1]),t++;for(;_<E;)O(i[2*N+2*_],i[2*N+2*_+1]),_++}return S}var T=_(55158),A=_(4760),r=_(67009),R=_(84936),i=_(11186),N=_(71353),o=_(50256);class s{updateSettings(t){this.settings=t,this._edgeHashFunction=t.reducedPrecision?C:c}write(t,e,_){const E=this._edgeHashFunction(_);M.seed=E;const n=M.getIntRange(0,255),T=M.getIntRange(0,this.settings.variants-1),A=M.getFloat(),r=255*(.5*function(t,e){const _=t<0?-1:1;return Math.abs(t)**e*_}(-(1-Math.min(A/.7,1))+Math.max(0,A-.7)/(1-.7),1.2)+.5);t.position0.setVec(e,_.position0),t.position1.setVec(e,_.position1),t.componentIndex.set(e,_.componentIndex),t.variantOffset.set(e,n),t.variantStroke.set(e,T),t.variantExtension.set(e,r)}trim(t,e){return t.slice(0,e)}}const S=new Float32Array(6),I=new Uint32Array(S.buffer),O=new Uint32Array(1);function c(t){const e=S;e[0]=t.position0[0],e[1]=t.position0[1],e[2]=t.position0[2],e[3]=t.position1[0],e[4]=t.position1[1],e[5]=t.position1[2],O[0]=5381;for(let _=0;_<I.length;_++)O[0]=31*O[0]+I[_];return O[0]}function C(t){const e=S;e[0]=u(t.position0[0]),e[1]=u(t.position0[1]),e[2]=u(t.position0[2]),e[3]=u(t.position1[0]),e[4]=u(t.position1[1]),e[5]=u(t.position1[2]),O[0]=5381;for(let _=0;_<I.length;_++)O[0]=31*O[0]+I[_];return O[0]}const f=1e4;function u(t){return Math.round(t*f)/f}class a{constructor(){this._commonWriter=new s}updateSettings(t){this._commonWriter.updateSettings(t)}allocate(t){return r.dG.createBuffer(t)}write(t,e,_){this._commonWriter.write(t,e,_),(0,i.g)(L,_.faceNormal0,_.faceNormal1),(0,i.n)(L,L),t.normal.setVec(e,L)}trim(t,e){return this._commonWriter.trim(t,e)}}a.Layout=r.dG,a.glLayout=(0,o.K)(r.dG,1);class l{constructor(){this._commonWriter=new s}updateSettings(t){this._commonWriter.updateSettings(t)}allocate(t){return r.Hr.createBuffer(t)}write(t,e,_){this._commonWriter.write(t,e,_),t.normalA.setVec(e,_.faceNormal0),t.normalB.setVec(e,_.faceNormal1)}trim(t,e){return this._commonWriter.trim(t,e)}}l.Layout=r.Hr,l.glLayout=(0,o.K)(r.Hr,1);const L=(0,N.c)(),M=new R.Z;var U=_(10662);function D(t){const e=P(t.data,t.skipDeduplicate,t.indices,t.indicesLength);return h.updateSettings(t.writerSettings),d.updateSettings(t.writerSettings),(0,U.n)(e,h,d)}function P(t,e,_,T){if(e){const e=n(_,T,t.count);return new G(_,T,e,t)}const A=(0,E.d)(t.buffer,t.stride/4,{originalIndices:_,originalIndicesLength:T}),R=n(A.indices,T,A.uniqueCount);return{faces:A.indices,facesLength:A.indices.length,neighbors:R,vertices:r.tf.createView(A.buffer)}}class G{constructor(t,e,_,E){this.faces=t,this.facesLength=e,this.neighbors=_,this.vertices=E}}const h=new a,d=new l,B=(0,T.U$)().vec3f(A.T.POSITION0).vec3f(A.T.POSITION1),F=(0,T.U$)().vec3f(A.T.POSITION0).vec3f(A.T.POSITION1).u16(A.T.COMPONENTINDEX)},61109:(t,e,_)=>{_.d(e,{G:()=>E});class E{constructor(t,e,_,E,n){let T=arguments.length>5&&void 0!==arguments[5]&&arguments[5],A=arguments.length>6&&void 0!==arguments[6]?arguments[6]:0;this.name=t,this.count=e,this.type=_,this.offset=E,this.stride=n,this.normalized=T,this.divisor=A}}},8548:(t,e,_)=>{var E,n,T,A,r,R,i,N,o,s,S,I,O,c,C,f,u,a,l,L;_.d(e,{Br:()=>f,Ho:()=>l,LR:()=>R,Lu:()=>G,MX:()=>n,No:()=>O,Se:()=>d,Tg:()=>u,V1:()=>M,V7:()=>H,VI:()=>c,VY:()=>D,Wf:()=>i,Xg:()=>P,Y5:()=>g,_g:()=>U,cw:()=>S,db:()=>A,e8:()=>I,g:()=>N,l1:()=>a,lP:()=>C,lk:()=>E,q_:()=>h,qi:()=>L,w0:()=>r,wb:()=>o,xS:()=>s,zi:()=>T}),function(t){t[t.DEPTH_BUFFER_BIT=256]="DEPTH_BUFFER_BIT",t[t.STENCIL_BUFFER_BIT=1024]="STENCIL_BUFFER_BIT",t[t.COLOR_BUFFER_BIT=16384]="COLOR_BUFFER_BIT"}(E||(E={})),function(t){t[t.POINTS=0]="POINTS",t[t.LINES=1]="LINES",t[t.LINE_LOOP=2]="LINE_LOOP",t[t.LINE_STRIP=3]="LINE_STRIP",t[t.TRIANGLES=4]="TRIANGLES",t[t.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",t[t.TRIANGLE_FAN=6]="TRIANGLE_FAN"}(n||(n={})),function(t){t[t.ZERO=0]="ZERO",t[t.ONE=1]="ONE",t[t.SRC_COLOR=768]="SRC_COLOR",t[t.ONE_MINUS_SRC_COLOR=769]="ONE_MINUS_SRC_COLOR",t[t.SRC_ALPHA=770]="SRC_ALPHA",t[t.ONE_MINUS_SRC_ALPHA=771]="ONE_MINUS_SRC_ALPHA",t[t.DST_ALPHA=772]="DST_ALPHA",t[t.ONE_MINUS_DST_ALPHA=773]="ONE_MINUS_DST_ALPHA",t[t.DST_COLOR=774]="DST_COLOR",t[t.ONE_MINUS_DST_COLOR=775]="ONE_MINUS_DST_COLOR",t[t.SRC_ALPHA_SATURATE=776]="SRC_ALPHA_SATURATE",t[t.CONSTANT_COLOR=32769]="CONSTANT_COLOR",t[t.ONE_MINUS_CONSTANT_COLOR=32770]="ONE_MINUS_CONSTANT_COLOR",t[t.CONSTANT_ALPHA=32771]="CONSTANT_ALPHA",t[t.ONE_MINUS_CONSTANT_ALPHA=32772]="ONE_MINUS_CONSTANT_ALPHA"}(T||(T={})),function(t){t[t.ADD=32774]="ADD",t[t.MIN=32775]="MIN",t[t.MAX=32776]="MAX",t[t.SUBTRACT=32778]="SUBTRACT",t[t.REVERSE_SUBTRACT=32779]="REVERSE_SUBTRACT"}(A||(A={})),function(t){t[t.ARRAY_BUFFER=34962]="ARRAY_BUFFER",t[t.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",t[t.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER",t[t.PIXEL_PACK_BUFFER=35051]="PIXEL_PACK_BUFFER",t[t.PIXEL_UNPACK_BUFFER=35052]="PIXEL_UNPACK_BUFFER",t[t.COPY_READ_BUFFER=36662]="COPY_READ_BUFFER",t[t.COPY_WRITE_BUFFER=36663]="COPY_WRITE_BUFFER"}(r||(r={})),function(t){t[t.FRONT=1028]="FRONT",t[t.BACK=1029]="BACK",t[t.FRONT_AND_BACK=1032]="FRONT_AND_BACK"}(R||(R={})),function(t){t[t.CW=2304]="CW",t[t.CCW=2305]="CCW"}(i||(i={})),function(t){t[t.BYTE=5120]="BYTE",t[t.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",t[t.SHORT=5122]="SHORT",t[t.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",t[t.INT=5124]="INT",t[t.UNSIGNED_INT=5125]="UNSIGNED_INT",t[t.FLOAT=5126]="FLOAT"}(N||(N={})),function(t){t[t.NEVER=512]="NEVER",t[t.LESS=513]="LESS",t[t.EQUAL=514]="EQUAL",t[t.LEQUAL=515]="LEQUAL",t[t.GREATER=516]="GREATER",t[t.NOTEQUAL=517]="NOTEQUAL",t[t.GEQUAL=518]="GEQUAL",t[t.ALWAYS=519]="ALWAYS"}(o||(o={})),function(t){t[t.ZERO=0]="ZERO",t[t.KEEP=7680]="KEEP",t[t.REPLACE=7681]="REPLACE",t[t.INCR=7682]="INCR",t[t.DECR=7683]="DECR",t[t.INVERT=5386]="INVERT",t[t.INCR_WRAP=34055]="INCR_WRAP",t[t.DECR_WRAP=34056]="DECR_WRAP"}(s||(s={})),function(t){t[t.NEAREST=9728]="NEAREST",t[t.LINEAR=9729]="LINEAR",t[t.NEAREST_MIPMAP_NEAREST=9984]="NEAREST_MIPMAP_NEAREST",t[t.LINEAR_MIPMAP_NEAREST=9985]="LINEAR_MIPMAP_NEAREST",t[t.NEAREST_MIPMAP_LINEAR=9986]="NEAREST_MIPMAP_LINEAR",t[t.LINEAR_MIPMAP_LINEAR=9987]="LINEAR_MIPMAP_LINEAR"}(S||(S={})),function(t){t[t.CLAMP_TO_EDGE=33071]="CLAMP_TO_EDGE",t[t.REPEAT=10497]="REPEAT",t[t.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT"}(I||(I={})),function(t){t[t.TEXTURE_2D=3553]="TEXTURE_2D",t[t.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",t[t.TEXTURE_3D=32879]="TEXTURE_3D",t[t.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",t[t.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",t[t.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",t[t.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",t[t.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",t[t.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z",t[t.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY"}(O||(O={})),function(t){t[t.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",t[t.DEPTH_STENCIL=34041]="DEPTH_STENCIL",t[t.DEPTH24_STENCIL8=35056]="DEPTH24_STENCIL8",t[t.ALPHA=6406]="ALPHA",t[t.RGB=6407]="RGB",t[t.RGBA=6408]="RGBA",t[t.LUMINANCE=6409]="LUMINANCE",t[t.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",t[t.RED=6403]="RED",t[t.RG=33319]="RG",t[t.RED_INTEGER=36244]="RED_INTEGER",t[t.RG_INTEGER=33320]="RG_INTEGER",t[t.RGB_INTEGER=36248]="RGB_INTEGER",t[t.RGBA_INTEGER=36249]="RGBA_INTEGER"}(c||(c={})),function(t){t[t.RGBA4=32854]="RGBA4",t[t.R16F=33325]="R16F",t[t.RG16F=33327]="RG16F",t[t.RGB32F=34837]="RGB32F",t[t.RGBA16F=34842]="RGBA16F",t[t.R32F=33326]="R32F",t[t.RG32F=33328]="RG32F",t[t.RGBA32F=34836]="RGBA32F",t[t.R11F_G11F_B10F=35898]="R11F_G11F_B10F",t[t.RGB8=32849]="RGB8",t[t.RGBA8=32856]="RGBA8",t[t.RGB5_A1=32855]="RGB5_A1",t[t.R8=33321]="R8",t[t.RG8=33323]="RG8",t[t.R8I=33329]="R8I",t[t.R8UI=33330]="R8UI",t[t.R16I=33331]="R16I",t[t.R16UI=33332]="R16UI",t[t.R32I=33333]="R32I",t[t.R32UI=33334]="R32UI",t[t.RG8I=33335]="RG8I",t[t.RG8UI=33336]="RG8UI",t[t.RG16I=33337]="RG16I",t[t.RG16UI=33338]="RG16UI",t[t.RG32I=33339]="RG32I",t[t.RG32UI=33340]="RG32UI",t[t.RGB16F=34843]="RGB16F",t[t.RGB9_E5=35901]="RGB9_E5",t[t.SRGB8=35905]="SRGB8",t[t.SRGB8_ALPHA8=35907]="SRGB8_ALPHA8",t[t.RGB565=36194]="RGB565",t[t.RGBA32UI=36208]="RGBA32UI",t[t.RGB32UI=36209]="RGB32UI",t[t.RGBA16UI=36214]="RGBA16UI",t[t.RGB16UI=36215]="RGB16UI",t[t.RGBA8UI=36220]="RGBA8UI",t[t.RGB8UI=36221]="RGB8UI",t[t.RGBA32I=36226]="RGBA32I",t[t.RGB32I=36227]="RGB32I",t[t.RGBA16I=36232]="RGBA16I",t[t.RGB16I=36233]="RGB16I",t[t.RGBA8I=36238]="RGBA8I",t[t.RGB8I=36239]="RGB8I",t[t.R8_SNORM=36756]="R8_SNORM",t[t.RG8_SNORM=36757]="RG8_SNORM",t[t.RGB8_SNORM=36758]="RGB8_SNORM",t[t.RGBA8_SNORM=36759]="RGBA8_SNORM",t[t.RGB10_A2=32857]="RGB10_A2",t[t.RGB10_A2UI=36975]="RGB10_A2UI"}(C||(C={})),function(t){t[t.FLOAT=5126]="FLOAT",t[t.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",t[t.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",t[t.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",t[t.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",t[t.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",t[t.BYTE=5120]="BYTE",t[t.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",t[t.SHORT=5122]="SHORT",t[t.UNSIGNED_INT=5125]="UNSIGNED_INT",t[t.INT=5124]="INT",t[t.HALF_FLOAT=5131]="HALF_FLOAT",t[t.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",t[t.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",t[t.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",t[t.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV"}(f||(f={})),function(t){t[t.DEPTH_COMPONENT16=33189]="DEPTH_COMPONENT16",t[t.STENCIL_INDEX8=36168]="STENCIL_INDEX8",t[t.DEPTH_STENCIL=34041]="DEPTH_STENCIL",t[t.DEPTH_COMPONENT24=33190]="DEPTH_COMPONENT24",t[t.DEPTH_COMPONENT32F=36012]="DEPTH_COMPONENT32F",t[t.DEPTH24_STENCIL8=35056]="DEPTH24_STENCIL8",t[t.DEPTH32F_STENCIL8=36013]="DEPTH32F_STENCIL8"}(u||(u={})),function(t){t[t.STATIC_DRAW=35044]="STATIC_DRAW",t[t.DYNAMIC_DRAW=35048]="DYNAMIC_DRAW",t[t.STREAM_DRAW=35040]="STREAM_DRAW",t[t.STATIC_READ=35045]="STATIC_READ",t[t.DYNAMIC_READ=35049]="DYNAMIC_READ",t[t.STREAM_READ=35041]="STREAM_READ",t[t.STATIC_COPY=35046]="STATIC_COPY",t[t.DYNAMIC_COPY=35050]="DYNAMIC_COPY",t[t.STREAM_COPY=35042]="STREAM_COPY"}(a||(a={})),function(t){t[t.FRAGMENT_SHADER=35632]="FRAGMENT_SHADER",t[t.VERTEX_SHADER=35633]="VERTEX_SHADER"}(l||(l={})),function(t){t[t.FRAMEBUFFER=36160]="FRAMEBUFFER",t[t.READ_FRAMEBUFFER=36008]="READ_FRAMEBUFFER",t[t.DRAW_FRAMEBUFFER=36009]="DRAW_FRAMEBUFFER"}(L||(L={}));const M=33984;var U,D,P;!function(t){t[t.Texture=0]="Texture",t[t.BufferObject=1]="BufferObject",t[t.VertexArrayObject=2]="VertexArrayObject",t[t.Shader=3]="Shader",t[t.Program=4]="Program",t[t.FramebufferObject=5]="FramebufferObject",t[t.Renderbuffer=6]="Renderbuffer",t[t.Sync=7]="Sync",t[t.UNCOUNTED=8]="UNCOUNTED",t[t.LinesOfCode=8]="LinesOfCode",t[t.Uniform=9]="Uniform",t[t.COUNT=10]="COUNT"}(U||(U={})),function(t){t[t.COLOR_ATTACHMENT0=36064]="COLOR_ATTACHMENT0",t[t.COLOR_ATTACHMENT1=36065]="COLOR_ATTACHMENT1",t[t.COLOR_ATTACHMENT2=36066]="COLOR_ATTACHMENT2",t[t.COLOR_ATTACHMENT3=36067]="COLOR_ATTACHMENT3",t[t.COLOR_ATTACHMENT4=36068]="COLOR_ATTACHMENT4",t[t.COLOR_ATTACHMENT5=36069]="COLOR_ATTACHMENT5",t[t.COLOR_ATTACHMENT6=36070]="COLOR_ATTACHMENT6",t[t.COLOR_ATTACHMENT7=36071]="COLOR_ATTACHMENT7",t[t.COLOR_ATTACHMENT8=36072]="COLOR_ATTACHMENT8",t[t.COLOR_ATTACHMENT9=36073]="COLOR_ATTACHMENT9",t[t.COLOR_ATTACHMENT10=36074]="COLOR_ATTACHMENT10",t[t.COLOR_ATTACHMENT11=36075]="COLOR_ATTACHMENT11",t[t.COLOR_ATTACHMENT12=36076]="COLOR_ATTACHMENT12",t[t.COLOR_ATTACHMENT13=36077]="COLOR_ATTACHMENT13",t[t.COLOR_ATTACHMENT14=36078]="COLOR_ATTACHMENT14",t[t.COLOR_ATTACHMENT15=36079]="COLOR_ATTACHMENT15"}(D||(D={})),function(t){t[t.NONE=0]="NONE",t[t.BACK=1029]="BACK"}(P||(P={}));const G=33306;var h,d,B,F,g,H,p;!function(t){t[t.COMPRESSED_RGB_S3TC_DXT1_EXT=33776]="COMPRESSED_RGB_S3TC_DXT1_EXT",t[t.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777]="COMPRESSED_RGBA_S3TC_DXT1_EXT",t[t.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778]="COMPRESSED_RGBA_S3TC_DXT3_EXT",t[t.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779]="COMPRESSED_RGBA_S3TC_DXT5_EXT",t[t.COMPRESSED_R11_EAC=37488]="COMPRESSED_R11_EAC",t[t.COMPRESSED_SIGNED_R11_EAC=37489]="COMPRESSED_SIGNED_R11_EAC",t[t.COMPRESSED_RG11_EAC=37490]="COMPRESSED_RG11_EAC",t[t.COMPRESSED_SIGNED_RG11_EAC=37491]="COMPRESSED_SIGNED_RG11_EAC",t[t.COMPRESSED_RGB8_ETC2=37492]="COMPRESSED_RGB8_ETC2",t[t.COMPRESSED_SRGB8_ETC2=37493]="COMPRESSED_SRGB8_ETC2",t[t.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2=37494]="COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2",t[t.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2=37495]="COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2",t[t.COMPRESSED_RGBA8_ETC2_EAC=37496]="COMPRESSED_RGBA8_ETC2_EAC",t[t.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC=37497]="COMPRESSED_SRGB8_ALPHA8_ETC2_EAC"}(h||(h={})),function(t){t[t.FLOAT=5126]="FLOAT",t[t.FLOAT_VEC2=35664]="FLOAT_VEC2",t[t.FLOAT_VEC3=35665]="FLOAT_VEC3",t[t.FLOAT_VEC4=35666]="FLOAT_VEC4",t[t.INT=5124]="INT",t[t.INT_VEC2=35667]="INT_VEC2",t[t.INT_VEC3=35668]="INT_VEC3",t[t.INT_VEC4=35669]="INT_VEC4",t[t.BOOL=35670]="BOOL",t[t.BOOL_VEC2=35671]="BOOL_VEC2",t[t.BOOL_VEC3=35672]="BOOL_VEC3",t[t.BOOL_VEC4=35673]="BOOL_VEC4",t[t.FLOAT_MAT2=35674]="FLOAT_MAT2",t[t.FLOAT_MAT3=35675]="FLOAT_MAT3",t[t.FLOAT_MAT4=35676]="FLOAT_MAT4",t[t.SAMPLER_2D=35678]="SAMPLER_2D",t[t.SAMPLER_CUBE=35680]="SAMPLER_CUBE",t[t.UNSIGNED_INT=5125]="UNSIGNED_INT",t[t.UNSIGNED_INT_VEC2=36294]="UNSIGNED_INT_VEC2",t[t.UNSIGNED_INT_VEC3=36295]="UNSIGNED_INT_VEC3",t[t.UNSIGNED_INT_VEC4=36296]="UNSIGNED_INT_VEC4",t[t.FLOAT_MAT2x3=35685]="FLOAT_MAT2x3",t[t.FLOAT_MAT2x4=35686]="FLOAT_MAT2x4",t[t.FLOAT_MAT3x2=35687]="FLOAT_MAT3x2",t[t.FLOAT_MAT3x4=35688]="FLOAT_MAT3x4",t[t.FLOAT_MAT4x2=35689]="FLOAT_MAT4x2",t[t.FLOAT_MAT4x3=35690]="FLOAT_MAT4x3",t[t.SAMPLER_3D=35679]="SAMPLER_3D",t[t.SAMPLER_2D_SHADOW=35682]="SAMPLER_2D_SHADOW",t[t.SAMPLER_2D_ARRAY=36289]="SAMPLER_2D_ARRAY",t[t.SAMPLER_2D_ARRAY_SHADOW=36292]="SAMPLER_2D_ARRAY_SHADOW",t[t.SAMPLER_CUBE_SHADOW=36293]="SAMPLER_CUBE_SHADOW",t[t.INT_SAMPLER_2D=36298]="INT_SAMPLER_2D",t[t.INT_SAMPLER_3D=36299]="INT_SAMPLER_3D",t[t.INT_SAMPLER_CUBE=36300]="INT_SAMPLER_CUBE",t[t.INT_SAMPLER_2D_ARRAY=36303]="INT_SAMPLER_2D_ARRAY",t[t.UNSIGNED_INT_SAMPLER_2D=36306]="UNSIGNED_INT_SAMPLER_2D",t[t.UNSIGNED_INT_SAMPLER_3D=36307]="UNSIGNED_INT_SAMPLER_3D",t[t.UNSIGNED_INT_SAMPLER_CUBE=36308]="UNSIGNED_INT_SAMPLER_CUBE",t[t.UNSIGNED_INT_SAMPLER_2D_ARRAY=36311]="UNSIGNED_INT_SAMPLER_2D_ARRAY"}(d||(d={})),function(t){t[t.OBJECT_TYPE=37138]="OBJECT_TYPE",t[t.SYNC_CONDITION=37139]="SYNC_CONDITION",t[t.SYNC_STATUS=37140]="SYNC_STATUS",t[t.SYNC_FLAGS=37141]="SYNC_FLAGS"}(B||(B={})),function(t){t[t.UNSIGNALED=37144]="UNSIGNALED",t[t.SIGNALED=37145]="SIGNALED"}(F||(F={})),function(t){t[t.ALREADY_SIGNALED=37146]="ALREADY_SIGNALED",t[t.TIMEOUT_EXPIRED=37147]="TIMEOUT_EXPIRED",t[t.CONDITION_SATISFIED=37148]="CONDITION_SATISFIED",t[t.WAIT_FAILED=37149]="WAIT_FAILED"}(g||(g={})),function(t){t[t.SYNC_GPU_COMMANDS_COMPLETE=37143]="SYNC_GPU_COMMANDS_COMPLETE"}(H||(H={})),function(t){t[t.SYNC_FLUSH_COMMANDS_BIT=1]="SYNC_FLUSH_COMMANDS_BIT"}(p||(p={}))}}]);
//# sourceMappingURL=3715.36e58c34.chunk.js.map