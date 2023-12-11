"use strict";(self.webpackChunksc_trees=self.webpackChunksc_trees||[]).push([[7066],{48976:(t,e,n)=>{n.d(e,{a:()=>h,c:()=>w,g:()=>f,j:()=>z,k:()=>y,m:()=>l,s:()=>u});var o=n(11873),r=n(98131),i=n(71353),c=n(26277),s=n(11186),a=n(90045);function u(t,e,n){n*=.5;const o=Math.sin(n);return t[0]=o*e[0],t[1]=o*e[1],t[2]=o*e[2],t[3]=Math.cos(n),t}function f(t,e){const n=2*Math.acos(e[3]),o=Math.sin(n/2);return o>(0,c.g)()?(t[0]=e[0]/o,t[1]=e[1]/o,t[2]=e[2]/o):(t[0]=1,t[1]=0,t[2]=0),n}function l(t,e,n){const o=e[0],r=e[1],i=e[2],c=e[3],s=n[0],a=n[1],u=n[2],f=n[3];return t[0]=o*f+c*s+r*u-i*a,t[1]=r*f+c*a+i*s-o*u,t[2]=i*f+c*u+o*a-r*s,t[3]=c*f-o*s-r*a-i*u,t}function d(t,e,n,o){const r=e[0],i=e[1],s=e[2],a=e[3];let u,f,l,d,h,g=n[0],y=n[1],w=n[2],b=n[3];return f=r*g+i*y+s*w+a*b,f<0&&(f=-f,g=-g,y=-y,w=-w,b=-b),1-f>(0,c.g)()?(u=Math.acos(f),l=Math.sin(u),d=Math.sin((1-o)*u)/l,h=Math.sin(o*u)/l):(d=1-o,h=o),t[0]=d*r+h*g,t[1]=d*i+h*y,t[2]=d*s+h*w,t[3]=d*a+h*b,t}function h(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=e[3],t}function g(t,e){const n=e[0]+e[4]+e[8];let o;if(n>0)o=Math.sqrt(n+1),t[3]=.5*o,o=.5/o,t[0]=(e[5]-e[7])*o,t[1]=(e[6]-e[2])*o,t[2]=(e[1]-e[3])*o;else{let n=0;e[4]>e[0]&&(n=1),e[8]>e[3*n+n]&&(n=2);const r=(n+1)%3,i=(n+2)%3;o=Math.sqrt(e[3*n+n]-e[3*r+r]-e[3*i+i]+1),t[n]=.5*o,o=.5/o,t[3]=(e[3*r+i]-e[3*i+r])*o,t[r]=(e[3*r+n]+e[3*n+r])*o,t[i]=(e[3*i+n]+e[3*n+i])*o}return t}function y(t,e,n,o){const r=.5*Math.PI/180;e*=r,n*=r,o*=r;const i=Math.sin(e),c=Math.cos(e),s=Math.sin(n),a=Math.cos(n),u=Math.sin(o),f=Math.cos(o);return t[0]=i*a*f-c*s*u,t[1]=c*s*f+i*a*u,t[2]=c*a*u-i*s*f,t[3]=c*a*f+i*s*u,t}const w=a.c,b=a.s,p=a.a,m=l,M=a.b,C=a.d,U=a.l,v=a.f,Z=v,I=a.g,A=I,O=a.n,z=a.h,L=a.e;const T=(0,i.c)(),F=(0,i.f)(1,0,0),B=(0,i.f)(0,1,0);const P=(0,r.a)(),E=(0,r.a)();const x=(0,o.a)();Object.freeze(Object.defineProperty({__proto__:null,add:p,calculateW:function(t,e){const n=e[0],o=e[1],r=e[2];return t[0]=n,t[1]=o,t[2]=r,t[3]=Math.sqrt(Math.abs(1-n*n-o*o-r*r)),t},conjugate:h,copy:w,dot:C,equals:L,exactEquals:z,fromEuler:y,fromMat3:g,getAxisAngle:f,identity:function(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t},invert:function(t,e){const n=e[0],o=e[1],r=e[2],i=e[3],c=n*n+o*o+r*r+i*i,s=c?1/c:0;return t[0]=-n*s,t[1]=-o*s,t[2]=-r*s,t[3]=i*s,t},len:Z,length:v,lerp:U,mul:m,multiply:l,normalize:O,random:function(t){const e=c.R,n=e(),o=e(),r=e(),i=Math.sqrt(1-n),s=Math.sqrt(n);return t[0]=i*Math.sin(2*Math.PI*o),t[1]=i*Math.cos(2*Math.PI*o),t[2]=s*Math.sin(2*Math.PI*r),t[3]=s*Math.cos(2*Math.PI*r),t},rotateX:function(t,e,n){n*=.5;const o=e[0],r=e[1],i=e[2],c=e[3],s=Math.sin(n),a=Math.cos(n);return t[0]=o*a+c*s,t[1]=r*a+i*s,t[2]=i*a-r*s,t[3]=c*a-o*s,t},rotateY:function(t,e,n){n*=.5;const o=e[0],r=e[1],i=e[2],c=e[3],s=Math.sin(n),a=Math.cos(n);return t[0]=o*a-i*s,t[1]=r*a+c*s,t[2]=i*a+o*s,t[3]=c*a-r*s,t},rotateZ:function(t,e,n){n*=.5;const o=e[0],r=e[1],i=e[2],c=e[3],s=Math.sin(n),a=Math.cos(n);return t[0]=o*a+r*s,t[1]=r*a-o*s,t[2]=i*a+c*s,t[3]=c*a-i*s,t},rotationTo:function(t,e,n){const o=(0,s.j)(e,n);return o<-.999999?((0,s.b)(T,F,e),(0,s.k)(T)<1e-6&&(0,s.b)(T,B,e),(0,s.n)(T,T),u(t,T,Math.PI),t):o>.999999?(t[0]=0,t[1]=0,t[2]=0,t[3]=1,t):((0,s.b)(T,e,n),t[0]=T[0],t[1]=T[1],t[2]=T[2],t[3]=1+o,O(t,t))},scale:M,set:b,setAxes:function(t,e,n,o){const r=x;return r[0]=n[0],r[3]=n[1],r[6]=n[2],r[1]=o[0],r[4]=o[1],r[7]=o[2],r[2]=-e[0],r[5]=-e[1],r[8]=-e[2],O(t,g(t,r))},setAxisAngle:u,slerp:d,sqlerp:function(t,e,n,o,r,i){return d(P,e,r,i),d(E,n,o,i),d(t,P,E,2*i*(1-i)),t},sqrLen:A,squaredLength:I,str:function(t){return"quat("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"}},Symbol.toStringTag,{value:"Module"}))},28278:(t,e,n)=>{n.d(e,{I_:()=>d,W7:()=>y,qM:()=>b});var o=n(10064),r=n(84652),i=n(32718),c=n(2821),s=n(4760);const a=i.Z.getLogger("esri.views.3d.layers.i3s.I3SBinaryReader");function u(t,e,n){let r="",i=0;for(;i<n;){const c=t[e+i];if(c<128)r+=String.fromCharCode(c),i++;else if(c>=192&&c<224){if(i+1>=n)throw new o.Z("utf8-decode-error","UTF-8 Decode failed. Two byte character was truncated.");const s=(31&c)<<6|63&t[e+i+1];r+=String.fromCharCode(s),i+=2}else if(c>=224&&c<240){if(i+2>=n)throw new o.Z("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const s=(15&c)<<12|(63&t[e+i+1])<<6|63&t[e+i+2];r+=String.fromCharCode(s),i+=3}else{if(!(c>=240&&c<248))throw new o.Z("utf8-decode-error","UTF-8 Decode failed. Invalid multi byte sequence.");{if(i+3>=n)throw new o.Z("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const s=(7&c)<<18|(63&t[e+i+1])<<12|(63&t[e+i+2])<<6|63&t[e+i+3];if(s>=65536){const t=55296+(s-65536>>10),e=56320+(1023&s);r+=String.fromCharCode(t,e)}else r+=String.fromCharCode(s);i+=4}}}return r}function f(t,e){const n={byteOffset:0,byteCount:0,fields:Object.create(null)};let o=0;for(let r=0;r<e.length;r++){const i=e[r],c=i.valueType||i.type,s=m[c];n.fields[i.property]=s(t,o),o+=p[c].BYTES_PER_ELEMENT}return n.byteCount=o,n}function l(t,e,n){const r=[];let i,c,s=0;for(c=0;c<t;c+=1){if(i=e[c],i>0){if(r.push(u(n,s,i-1)),0!==n[s+i-1])throw new o.Z("string-array-error","Invalid string array: missing null termination.")}else r.push(null);s+=i}return r}function d(t,e){return new(0,p[e.valueType])(t,e.byteOffset,e.count*e.valuesPerElement)}function h(t,e,n){const i=null!=e.header?f(t,e.header):{byteOffset:0,byteCount:0,fields:{count:n}},c={header:i,byteOffset:i.byteCount,byteCount:0,entries:Object.create(null)};let s=i.byteCount;for(let f=0;f<e.ordering.length;f++){var a,u;const t=e.ordering[f],n=(0,r.d9)(e[t]);if(n.count=null!==(a=i.fields.count)&&void 0!==a?a:0,"String"===n.valueType){if(n.byteOffset=s,n.byteCount=i.fields[t+"ByteCount"],"UTF-8"!==n.encoding)throw new o.Z("unsupported-encoding","Unsupported String encoding.",{encoding:n.encoding});if(n.timeEncoding&&"ECMA_ISO8601"!==n.timeEncoding)throw new o.Z("unsupported-time-encoding","Unsupported time encoding.",{timeEncoding:n.timeEncoding})}else{if(!M(n.valueType))throw new o.Z("unsupported-value-type","Unsupported binary valueType",{valueType:n.valueType});{const t=C(n.valueType);s+=s%t!=0?t-s%t:0,n.byteOffset=s,n.byteCount=t*n.valuesPerElement*n.count}}s+=null!==(u=n.byteCount)&&void 0!==u?u:0,c.entries[t]=n}return c.byteCount=s-c.byteOffset,c}function g(t,e,n){if(e!==t&&a.error("Invalid ".concat(n," buffer size\n expected: ").concat(t,", actual: ").concat(e,")")),e<t)throw new o.Z("buffer-too-small","Binary buffer is too small",{expectedSize:t,actualSize:e})}function y(t,e){const n=f(t,e&&e.header);let o=n.byteCount;const r={isDraco:!1,header:n,byteOffset:n.byteCount,byteCount:0,vertexAttributes:{}},i=n.fields,c=null!=i.vertexCount?i.vertexCount:i.count;for(const u of e.ordering){if(!e.vertexAttributes[u])continue;const t={...e.vertexAttributes[u],byteOffset:o,count:c},n=w[u]||"_"+u;r.vertexAttributes[n]=t,o+=C(t.valueType)*t.valuesPerElement*c}const s=i.faceCount;if(e.faces&&s){r.faces={};for(const t of e.ordering){if(!e.faces[t])continue;const n={...e.faces[t],byteOffset:o,count:s};r.faces[t]=n,o+=C(n.valueType)*n.valuesPerElement*s}}const a=i.featureCount;if(e.featureAttributes&&e.featureAttributeOrder&&a){r.featureAttributes={};for(const t of e.featureAttributeOrder){if(!e.featureAttributes[t])continue;const n={...e.featureAttributes[t],byteOffset:o,count:a};r.featureAttributes[t]=n,o+=("UInt64"===n.valueType?8:C(n.valueType))*n.valuesPerElement*a}}return g(o,t.byteLength,"geometry"),r.byteCount=o-r.byteOffset,r}const w={position:s.T.POSITION,normal:s.T.NORMAL,color:s.T.COLOR,uv0:s.T.UV0,region:s.T.UVREGION};function b(t,e,n){if("lepcc-rgb"===t.encoding)return(0,c.IT)(e);if("lepcc-intensity"===t.encoding)return(0,c.ti)(e);if(null!=t.encoding&&""!==t.encoding)throw new o.Z("unknown-attribute-storage-info-encoding","Unknown Attribute Storage Info Encoding");t["attributeByteCounts "]&&!t.attributeByteCounts&&(a.warn("Warning: Trailing space in 'attributeByteCounts '."),t.attributeByteCounts=t["attributeByteCounts "]),"ObjectIds"===t.ordering[0]&&t.hasOwnProperty("objectIds")&&(a.warn("Warning: Case error in objectIds"),t.ordering[0]="objectIds");const r=h(e,t,n);g(r.byteOffset+r.byteCount,e.byteLength,"attribute");const i=r.entries.attributeValues||r.entries.objectIds;if(i){if("String"===i.valueType){const t=r.entries.attributeByteCounts,n=d(e,t),o=function(t,e){return new Uint8Array(t,e.byteOffset,e.byteCount)}(e,i);return i.timeEncoding?function(t,e,n){return l(t,e,n).map((t=>{const e=t?Date.parse(t):null;return e&&!Number.isNaN(e)?e:null}))}(t.count,n,o):l(t.count,n,o)}return d(e,i)}throw new o.Z("bad-attribute-storage-info","Bad attributeStorageInfo specification.")}const p={Float32:Float32Array,Float64:Float64Array,UInt8:Uint8Array,Int8:Int8Array,UInt16:Uint16Array,Int16:Int16Array,UInt32:Uint32Array,Int32:Int32Array},m={Float32:(t,e)=>new DataView(t,0).getFloat32(e,!0),Float64:(t,e)=>new DataView(t,0).getFloat64(e,!0),UInt8:(t,e)=>new DataView(t,0).getUint8(e),Int8:(t,e)=>new DataView(t,0).getInt8(e),UInt16:(t,e)=>new DataView(t,0).getUint16(e,!0),Int16:(t,e)=>new DataView(t,0).getInt16(e,!0),UInt32:(t,e)=>new DataView(t,0).getUint32(e,!0),Int32:(t,e)=>new DataView(t,0).getInt32(e,!0)};function M(t){return p.hasOwnProperty(t)}function C(t){return M(t)?p[t].BYTES_PER_ELEMENT:0}},2821:(t,e,n)=>{n.d(e,{Gi:()=>u,IT:()=>g,ti:()=>b});var o=n(10064);const r=!0,i={identifierOffset:0,identifierLength:10,versionOffset:10,checksumOffset:12,byteCount:16};function c(t,e,n){return{identifier:String.fromCharCode.apply(null,new Uint8Array(t,n+i.identifierOffset,i.identifierLength)),version:e.getUint16(n+i.versionOffset,r),checksum:e.getUint32(n+i.checksumOffset,r)}}const s={sizeLo:0,sizeHi:4,minX:8,minY:16,minZ:24,maxX:32,maxY:40,maxZ:48,errorX:56,errorY:64,errorZ:72,count:80,reserved:84,byteCount:88};function a(t,e){return{sizeLo:t.getUint32(e+s.sizeLo,r),sizeHi:t.getUint32(e+s.sizeHi,r),minX:t.getFloat64(e+s.minX,r),minY:t.getFloat64(e+s.minY,r),minZ:t.getFloat64(e+s.minZ,r),maxX:t.getFloat64(e+s.maxX,r),maxY:t.getFloat64(e+s.maxY,r),maxZ:t.getFloat64(e+s.maxZ,r),errorX:t.getFloat64(e+s.errorX,r),errorY:t.getFloat64(e+s.errorY,r),errorZ:t.getFloat64(e+s.errorZ,r),count:t.getUint32(e+s.count,r),reserved:t.getUint32(e+s.reserved,r)}}function u(t){const e=new DataView(t,0);let n=0;const{identifier:r,version:u}=c(t,e,n);if(n+=i.byteCount,"LEPCC     "!==r)throw new o.Z("lepcc-decode-error","Bad identifier");if(u>1)throw new o.Z("lepcc-decode-error","Unknown version");const l=a(e,n);if(n+=s.byteCount,l.sizeHi*2**32+l.sizeLo!==t.byteLength)throw new o.Z("lepcc-decode-error","Bad size");const d=new Float64Array(3*l.count),h=[],g=[],y=[],w=[];if(n=f(t,n,h),n=f(t,n,g),n=f(t,n,y),n=f(t,n,w),n!==t.byteLength)throw new o.Z("lepcc-decode-error","Bad length");let b=0,p=0;for(let o=0;o<h.length;o++){p+=h[o];let t=0;for(let e=0;e<g[o];e++){t+=y[b];const e=w[b];d[3*b]=Math.min(l.maxX,l.minX+2*l.errorX*t),d[3*b+1]=Math.min(l.maxY,l.minY+2*l.errorY*p),d[3*b+2]=Math.min(l.maxZ,l.minZ+2*l.errorZ*e),b++}}return{errorX:l.errorX,errorY:l.errorY,errorZ:l.errorZ,result:d}}function f(t,e,n){const o=[];e=l(t,e,o);const r=[];for(let i=0;i<o.length;i++){r.length=0,e=l(t,e,r);for(let t=0;t<r.length;t++)n.push(r[t]+o[i])}return e}function l(t,e,n){const i=new DataView(t,e),c=i.getUint8(0),s=31&c,a=!!(32&c),u=(192&c)>>6;let f=0;if(0===u)f=i.getUint32(1,r),e+=5;else if(1===u)f=i.getUint16(1,r),e+=3;else{if(2!==u)throw new o.Z("lepcc-decode-error","Bad count type");f=i.getUint8(1),e+=2}if(a)throw new o.Z("lepcc-decode-error","LUT not implemented");const l=Math.ceil(f*s/8),d=new Uint8Array(t,e,l);let h=0,g=0,y=0;const w=-1>>>32-s;for(let o=0;o<f;o++){for(;g<s;)h|=d[y]<<g,g+=8,y+=1;n[o]=h&w,h>>>=s,g-=s,g+s>32&&(h|=d[y-1]>>8-g)}return e+y}const d={sizeLo:0,sizeHi:4,count:8,colorMapCount:12,lookupMethod:14,compressionMethod:15,byteCount:16};function h(t,e){return{sizeLo:t.getUint32(e+d.sizeLo,r),sizeHi:t.getUint32(e+d.sizeHi,r),count:t.getUint32(e+d.count,r),colorMapCount:t.getUint16(e+d.colorMapCount,r),lookupMethod:t.getUint8(e+d.lookupMethod),compressionMethod:t.getUint8(e+d.compressionMethod)}}function g(t){const e=new DataView(t,0);let n=0;const{identifier:r,version:s}=c(t,e,n);if(n+=i.byteCount,"ClusterRGB"!==r)throw new o.Z("lepcc-decode-error","Bad identifier");if(s>1)throw new o.Z("lepcc-decode-error","Unknown version");const a=h(e,n);if(n+=d.byteCount,a.sizeHi*2**32+a.sizeLo!==t.byteLength)throw new o.Z("lepcc-decode-error","Bad size");if((2===a.lookupMethod||1===a.lookupMethod)&&0===a.compressionMethod){if(3*a.colorMapCount+a.count+n!==t.byteLength||a.colorMapCount>256)throw new o.Z("lepcc-decode-error","Bad count");const e=new Uint8Array(t,n,3*a.colorMapCount),r=new Uint8Array(t,n+3*a.colorMapCount,a.count),i=new Uint8Array(3*a.count);for(let t=0;t<a.count;t++){const n=r[t];i[3*t]=e[3*n],i[3*t+1]=e[3*n+1],i[3*t+2]=e[3*n+2]}return i}if(0===a.lookupMethod&&0===a.compressionMethod){if(3*a.count+n!==t.byteLength||0!==a.colorMapCount)throw new o.Z("lepcc-decode-error","Bad count");return new Uint8Array(t,n).slice()}if(a.lookupMethod<=2&&1===a.compressionMethod){if(n+3!==t.byteLength||1!==a.colorMapCount)throw new o.Z("lepcc-decode-error","Bad count");const r=e.getUint8(n),i=e.getUint8(n+1),c=e.getUint8(n+2),s=new Uint8Array(3*a.count);for(let t=0;t<a.count;t++)s[3*t]=r,s[3*t+1]=i,s[3*t+2]=c;return s}throw new o.Z("lepcc-decode-error","Bad method "+a.lookupMethod+","+a.compressionMethod)}const y={sizeLo:0,sizeHi:4,count:8,scaleFactor:12,bitsPerPoint:14,reserved:15,byteCount:16};function w(t,e){return{sizeLo:t.getUint32(e+y.sizeLo,r),sizeHi:t.getUint32(e+y.sizeHi,r),count:t.getUint32(e+y.count,r),scaleFactor:t.getUint16(e+y.scaleFactor,r),bitsPerPoint:t.getUint8(e+y.bitsPerPoint),reserved:t.getUint8(e+y.reserved)}}function b(t){const e=new DataView(t,0);let n=0;const{identifier:r,version:s}=c(t,e,n);if(n+=i.byteCount,"Intensity "!==r)throw new o.Z("lepcc-decode-error","Bad identifier");if(s>1)throw new o.Z("lepcc-decode-error","Unknown version");const a=w(e,n);if(n+=y.byteCount,a.sizeHi*2**32+a.sizeLo!==t.byteLength)throw new o.Z("lepcc-decode-error","Bad size");const u=new Uint16Array(a.count);if(8===a.bitsPerPoint){if(a.count+n!==t.byteLength)throw new o.Z("lepcc-decode-error","Bad size");const e=new Uint8Array(t,n,a.count);for(let t=0;t<a.count;t++)u[t]=e[t]*a.scaleFactor}else if(16===a.bitsPerPoint){if(2*a.count+n!==t.byteLength)throw new o.Z("lepcc-decode-error","Bad size");const e=new Uint16Array(t,n,a.count);for(let t=0;t<a.count;t++)u[t]=e[t]*a.scaleFactor}else{const e=[];if(l(t,n,e)!==t.byteLength)throw new o.Z("lepcc-decode-error","Bad size");for(let t=0;t<a.count;t++)u[t]=e[t]*a.scaleFactor}return u}}}]);
//# sourceMappingURL=7066.d550e10b.chunk.js.map