"use strict";(self.webpackChunksc_trees=self.webpackChunksc_trees||[]).push([[8534],{11873:(e,t,o)=>{function r(){return[1,0,0,0,1,0,0,0,1]}function n(e,t,o,r,n,i,l,s,a){return[e,t,o,r,n,i,l,s,a]}function i(e,t){return new Float64Array(e,t,9)}o.d(t,{a:()=>r,c:()=>i,f:()=>n});Object.freeze(Object.defineProperty({__proto__:null,clone:function(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8]]},create:r,createView:i,fromValues:n},Symbol.toStringTag,{value:"Module"}))},98131:(e,t,o)=>{function r(){return[0,0,0,1]}function n(e){return[e[0],e[1],e[2],e[3]]}function i(e,t){return new Float64Array(e,t,4)}o.d(t,{I:()=>l,a:()=>r,b:()=>n,c:()=>i});const l=[0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:l,clone:n,create:r,createView:i,fromValues:function(e,t,o,r){return[e,t,o,r]}},Symbol.toStringTag,{value:"Module"}))},8229:(e,t,o)=>{function r(){return new Float32Array(3)}function n(e,t,o){const r=new Float32Array(3);return r[0]=e,r[1]=t,r[2]=o,r}function i(){return r()}function l(){return n(1,1,1)}function s(){return n(1,0,0)}function a(){return n(0,1,0)}function u(){return n(0,0,1)}o.d(t,{c:()=>r,f:()=>n});const p=i(),c=l(),d=s(),f=a(),b=u();Object.freeze(Object.defineProperty({__proto__:null,ONES:c,UNIT_X:d,UNIT_Y:f,UNIT_Z:b,ZEROS:p,clone:function(e){const t=new Float32Array(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t},create:r,createView:function(e,t){return new Float32Array(e,t,3)},fromValues:n,ones:l,unitX:s,unitY:a,unitZ:u,zeros:i},Symbol.toStringTag,{value:"Module"}))},21134:(e,t,o)=>{o.d(t,{Z:()=>m});var r,n=o(27366),i=o(84652),l=o(49861),s=o(25243),a=o(27135),u=o(69912),p=o(2632),c=o(87125),d=o(51995),f=o(46784);let b=r=class extends f.wq{constructor(){super(...arguments),this.description=null,this.label=null,this.minValue=0,this.maxValue=0,this.color=null}clone(){return new r({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,color:(0,i.d9)(this.color)})}};(0,n._)([(0,l.Cb)({type:String,json:{write:!0}})],b.prototype,"description",void 0),(0,n._)([(0,l.Cb)({type:String,json:{write:!0}})],b.prototype,"label",void 0),(0,n._)([(0,l.Cb)({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],b.prototype,"minValue",void 0),(0,n._)([(0,l.Cb)({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue"}}})],b.prototype,"maxValue",void 0),(0,n._)([(0,l.Cb)({type:d.Z,json:{type:[s.z8],write:!0}})],b.prototype,"color",void 0),b=r=(0,n._)([(0,u.j)("esri.renderers.support.pointCloud.ColorClassBreakInfo")],b);const y=b;var h;let T=h=class extends p.Z{constructor(e){super(e),this.type="point-cloud-class-breaks",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.colorClassBreakInfos=null}clone(){return new h({...this.cloneProperties(),field:this.field,fieldTransformType:this.fieldTransformType,colorClassBreakInfos:(0,i.d9)(this.colorClassBreakInfos),legendOptions:(0,i.d9)(this.legendOptions)})}};(0,n._)([(0,a.J)({pointCloudClassBreaksRenderer:"point-cloud-class-breaks"})],T.prototype,"type",void 0),(0,n._)([(0,l.Cb)({json:{write:!0},type:String})],T.prototype,"field",void 0),(0,n._)([(0,l.Cb)({type:c.I,json:{write:!0}})],T.prototype,"legendOptions",void 0),(0,n._)([(0,l.Cb)({type:p.Z.fieldTransformTypeKebabDict.apiValues,json:{type:p.Z.fieldTransformTypeKebabDict.jsonValues,read:p.Z.fieldTransformTypeKebabDict.read,write:p.Z.fieldTransformTypeKebabDict.write}})],T.prototype,"fieldTransformType",void 0),(0,n._)([(0,l.Cb)({type:[y],json:{write:!0}})],T.prototype,"colorClassBreakInfos",void 0),T=h=(0,n._)([(0,u.j)("esri.renderers.PointCloudClassBreaksRenderer")],T);const m=T},2632:(e,t,o)=>{o.d(t,{Z:()=>S});var r,n=o(27366),i=o(43404),l=o(46784),s=o(84652),a=o(49861),u=(o(25243),o(69912));o(63780),o(93169);let p=r=class extends l.wq{constructor(){super(...arguments),this.field=null,this.minValue=0,this.maxValue=255}clone(){return new r({field:this.field,minValue:this.minValue,maxValue:this.maxValue})}};(0,n._)([(0,a.Cb)({type:String,json:{write:!0}})],p.prototype,"field",void 0),(0,n._)([(0,a.Cb)({type:Number,nonNullable:!0,json:{write:!0}})],p.prototype,"minValue",void 0),(0,n._)([(0,a.Cb)({type:Number,nonNullable:!0,json:{write:!0}})],p.prototype,"maxValue",void 0),p=r=(0,n._)([(0,u.j)("esri.renderers.support.pointCloud.ColorModulation")],p);const c=p,d=new i.X({pointCloudFixedSizeAlgorithm:"fixed-size",pointCloudSplatAlgorithm:"splat"});let f=class extends l.wq{};(0,n._)([(0,a.Cb)({type:d.apiValues,readOnly:!0,nonNullable:!0,json:{type:d.jsonValues,read:!1,write:d.write}})],f.prototype,"type",void 0),f=(0,n._)([(0,u.j)("esri.renderers.support.pointCloud.PointSizeAlgorithm")],f);const b=f;var y,h=o(27135);let T=y=class extends b{constructor(){super(...arguments),this.type="fixed-size",this.size=0,this.useRealWorldSymbolSizes=null}clone(){return new y({size:this.size,useRealWorldSymbolSizes:this.useRealWorldSymbolSizes})}};(0,n._)([(0,h.J)({pointCloudFixedSizeAlgorithm:"fixed-size"})],T.prototype,"type",void 0),(0,n._)([(0,a.Cb)({type:Number,nonNullable:!0,json:{write:!0}})],T.prototype,"size",void 0),(0,n._)([(0,a.Cb)({type:Boolean,json:{write:!0}})],T.prototype,"useRealWorldSymbolSizes",void 0),T=y=(0,n._)([(0,u.j)("esri.renderers.support.pointCloud.PointSizeFixedSizeAlgorithm")],T);const m=T;var C;let v=C=class extends b{constructor(){super(...arguments),this.type="splat",this.scaleFactor=1}clone(){return new C({scaleFactor:this.scaleFactor})}};(0,n._)([(0,h.J)({pointCloudSplatAlgorithm:"splat"})],v.prototype,"type",void 0),(0,n._)([(0,a.Cb)({type:Number,value:1,nonNullable:!0,json:{write:!0}})],v.prototype,"scaleFactor",void 0),v=C=(0,n._)([(0,u.j)("esri.renderers.support.pointCloud.PointSizeSplatAlgorithm")],v);const A={key:"type",base:b,typeMap:{"fixed-size":m,splat:v}},I=(0,i.w)()({pointCloudClassBreaksRenderer:"point-cloud-class-breaks",pointCloudRGBRenderer:"point-cloud-rgb",pointCloudStretchRenderer:"point-cloud-stretch",pointCloudUniqueValueRenderer:"point-cloud-unique-value"});let O=class extends l.wq{constructor(e){super(e),this.type=void 0,this.pointSizeAlgorithm=null,this.colorModulation=null,this.pointsPerInch=10}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}cloneProperties(){return{pointSizeAlgorithm:(0,s.d9)(this.pointSizeAlgorithm),colorModulation:(0,s.d9)(this.colorModulation),pointsPerInch:(0,s.d9)(this.pointsPerInch)}}};(0,n._)([(0,a.Cb)({type:I.apiValues,readOnly:!0,nonNullable:!0,json:{type:I.jsonValues,read:!1,write:I.write}})],O.prototype,"type",void 0),(0,n._)([(0,a.Cb)({types:A,json:{write:!0}})],O.prototype,"pointSizeAlgorithm",void 0),(0,n._)([(0,a.Cb)({type:c,json:{write:!0}})],O.prototype,"colorModulation",void 0),(0,n._)([(0,a.Cb)({json:{write:!0},nonNullable:!0,type:Number})],O.prototype,"pointsPerInch",void 0),O=(0,n._)([(0,u.j)("esri.renderers.PointCloudRenderer")],O),(O||(O={})).fieldTransformTypeKebabDict=new i.X({none:"none",lowFourBit:"low-four-bit",highFourBit:"high-four-bit",absoluteValue:"absolute-value",moduloTen:"modulo-ten"});const S=O},89431:(e,t,o)=>{o.d(t,{Z:()=>f});var r,n=o(27366),i=o(84652),l=o(49861),s=(o(25243),o(27135)),a=o(69912),u=o(2632),p=o(87125),c=o(57203);let d=r=class extends u.Z{constructor(e){super(e),this.type="point-cloud-stretch",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.stops=null}clone(){return new r({...this.cloneProperties(),field:(0,i.d9)(this.field),fieldTransformType:(0,i.d9)(this.fieldTransformType),stops:(0,i.d9)(this.stops),legendOptions:(0,i.d9)(this.legendOptions)})}};(0,n._)([(0,s.J)({pointCloudStretchRenderer:"point-cloud-stretch"})],d.prototype,"type",void 0),(0,n._)([(0,l.Cb)({json:{write:!0},type:String})],d.prototype,"field",void 0),(0,n._)([(0,l.Cb)({type:p.I,json:{write:!0}})],d.prototype,"legendOptions",void 0),(0,n._)([(0,l.Cb)({type:u.Z.fieldTransformTypeKebabDict.apiValues,json:{type:u.Z.fieldTransformTypeKebabDict.jsonValues,read:u.Z.fieldTransformTypeKebabDict.read,write:u.Z.fieldTransformTypeKebabDict.write}})],d.prototype,"fieldTransformType",void 0),(0,n._)([(0,l.Cb)({type:[c.Z],json:{write:!0}})],d.prototype,"stops",void 0),d=r=(0,n._)([(0,a.j)("esri.renderers.PointCloudStretchRenderer")],d);const f=d},87005:(e,t,o)=>{o.d(t,{Z:()=>m});var r,n=o(27366),i=o(84652),l=o(49861),s=o(25243),a=o(27135),u=o(69912),p=o(2632),c=o(87125),d=o(51995),f=o(46784);let b=r=class extends f.wq{constructor(){super(...arguments),this.description=null,this.label=null,this.values=null,this.color=null}clone(){return new r({description:this.description,label:this.label,values:(0,i.d9)(this.values),color:(0,i.d9)(this.color)})}};(0,n._)([(0,l.Cb)({type:String,json:{write:!0}})],b.prototype,"description",void 0),(0,n._)([(0,l.Cb)({type:String,json:{write:!0}})],b.prototype,"label",void 0),(0,n._)([(0,l.Cb)({type:[String],json:{write:!0}})],b.prototype,"values",void 0),(0,n._)([(0,l.Cb)({type:d.Z,json:{type:[s.z8],write:!0}})],b.prototype,"color",void 0),b=r=(0,n._)([(0,u.j)("esri.renderers.support.pointCloud.ColorUniqueValueInfo")],b);const y=b;var h;let T=h=class extends p.Z{constructor(e){super(e),this.type="point-cloud-unique-value",this.field=null,this.fieldTransformType=null,this.colorUniqueValueInfos=null,this.legendOptions=null}clone(){return new h({...this.cloneProperties(),field:(0,i.d9)(this.field),fieldTransformType:(0,i.d9)(this.fieldTransformType),colorUniqueValueInfos:(0,i.d9)(this.colorUniqueValueInfos),legendOptions:(0,i.d9)(this.legendOptions)})}};(0,n._)([(0,a.J)({pointCloudUniqueValueRenderer:"point-cloud-unique-value"})],T.prototype,"type",void 0),(0,n._)([(0,l.Cb)({json:{write:!0},type:String})],T.prototype,"field",void 0),(0,n._)([(0,l.Cb)({type:p.Z.fieldTransformTypeKebabDict.apiValues,json:{type:p.Z.fieldTransformTypeKebabDict.jsonValues,read:p.Z.fieldTransformTypeKebabDict.read,write:p.Z.fieldTransformTypeKebabDict.write}})],T.prototype,"fieldTransformType",void 0),(0,n._)([(0,l.Cb)({type:[y],json:{write:!0}})],T.prototype,"colorUniqueValueInfos",void 0),(0,n._)([(0,l.Cb)({type:c.I,json:{write:!0}})],T.prototype,"legendOptions",void 0),T=h=(0,n._)([(0,u.j)("esri.renderers.PointCloudUniqueValueRenderer")],T);const m=T},35482:(e,t,o)=>{o.r(t),o.d(t,{default:()=>I});var r=o(63780),n=o(18722),i=o(48976),l=o(98131),s=o(11186),a=o(8229),u=o(78952),p=o(50628),c=(o(93169),o(21134)),d=o(89431),f=o(87005),b=o(28278),y=o(2821);function h(e,t,o){return null!==e&&void 0!==e&&e.attributeInfo.useElevation?t?function(e,t){const o=new Float64Array(t);for(let r=0;r<t;r++)o[r]=e[3*r+2];return o}(t,o):null:null!==e&&void 0!==e&&e.attributeInfo.storageInfo?(0,b.qM)(e.attributeInfo.storageInfo,e.buffer,o):null}function T(e,t,o,r,n){const i=e.length/3;let l=0;for(let s=0;s<i;s++){let i=!0;for(let e=0;e<r.length&&i;e++){const{filterJSON:t}=r[e],o=n[e].values[s];switch(t.type){case"pointCloudValueFilter":{const e="exclude"===t.mode;t.values.includes(o)===e&&(i=!1);break}case"pointCloudBitfieldFilter":{const e=C(t.requiredSetBits),r=C(t.requiredClearBits);(o&e)===e&&0==(o&r)||(i=!1);break}case"pointCloudReturnFilter":{const e=15&o,r=o>>>4&15,n=r>1,l=1===e,s=e===r;let a=!1;for(const o of t.includedReturns)if("last"===o&&s||"firstOfMany"===o&&l&&n||"lastOfMany"===o&&s&&n||"single"===o&&!n){a=!0;break}a||(i=!1);break}}}i&&(o[l]=s,e[3*l]=e[3*s],e[3*l+1]=e[3*s+1],e[3*l+2]=e[3*s+2],t[3*l]=t[3*s],t[3*l+1]=t[3*s+1],t[3*l+2]=t[3*s+2],l++)}return l}function m(e){switch(e){default:case null:case"none":return e=>e;case"low-four-bit":return e=>15&e;case"high-four-bit":return e=>(240&e)>>4;case"absolute-value":return e=>Math.abs(e);case"modulo-ten":return e=>e%10}}function C(e){let t=0;for(const o of e||[])t|=1<<o;return t}class v{transform(e){const t=this._transform(e),o=[t.points.buffer,t.rgb.buffer];null!=t.pointIdFilterMap&&o.push(t.pointIdFilterMap.buffer);for(const r of t.attributes)"buffer"in r.values&&(0,n.eP)(r.values.buffer)&&r.values.buffer!==t.rgb.buffer&&o.push(r.values.buffer);return Promise.resolve({result:t,transferList:o})}_transform(e){const t=function(e,t){if(null==e.encoding||""===e.encoding){const o=(0,b.W7)(t,e);if(null==o.vertexAttributes.position)return;const r=(0,b.I_)(t,o.vertexAttributes.position),n=o.header.fields,i=[n.offsetX,n.offsetY,n.offsetZ],l=[n.scaleX,n.scaleY,n.scaleZ],s=r.length/3,a=new Float64Array(3*s);for(let e=0;e<s;e++)a[3*e]=r[3*e]*l[0]+i[0],a[3*e+1]=r[3*e+1]*l[1]+i[1],a[3*e+2]=r[3*e+2]*l[2]+i[2];return a}if("lepcc-xyz"===e.encoding)return(0,y.Gi)(t).result}(e.schema,e.geometryBuffer);let o=t.length/3,n=null;const i=new Array,l=h(e.primaryAttributeData,t,o);null!=e.primaryAttributeData&&l&&i.push({attributeInfo:e.primaryAttributeData.attributeInfo,values:l});const s=h(e.modulationAttributeData,t,o);null!=e.modulationAttributeData&&s&&i.push({attributeInfo:e.modulationAttributeData.attributeInfo,values:s});let a=function(e,t,o,r){var n;const{rendererJSON:i,isRGBRenderer:l}=e;let s=null,a=null;if(t&&l)s=t;else if(t&&"pointCloudUniqueValueRenderer"===(null===i||void 0===i?void 0:i.type)){a=f.Z.fromJSON(i);const e=a.colorUniqueValueInfos;s=new Uint8Array(3*r);const o=m(a.fieldTransformType);for(let n=0;n<r;n++){const r=(o?o(t[n]):t[n])+"";for(let t=0;t<e.length;t++)if(e[t].values.includes(r)){s[3*n]=e[t].color.r,s[3*n+1]=e[t].color.g,s[3*n+2]=e[t].color.b;break}}}else if(t&&"pointCloudStretchRenderer"===(null===i||void 0===i?void 0:i.type)){a=d.Z.fromJSON(i);const e=a.stops;s=new Uint8Array(3*r);const o=m(a.fieldTransformType);for(let n=0;n<r;n++){const r=o?o(t[n]):t[n],i=e.length-1;if(r<e[0].value)s[3*n]=e[0].color.r,s[3*n+1]=e[0].color.g,s[3*n+2]=e[0].color.b;else if(r>=e[i].value)s[3*n]=e[i].color.r,s[3*n+1]=e[i].color.g,s[3*n+2]=e[i].color.b;else for(let t=1;t<e.length;t++)if(r<e[t].value){const o=(r-e[t-1].value)/(e[t].value-e[t-1].value);s[3*n]=e[t].color.r*o+e[t-1].color.r*(1-o),s[3*n+1]=e[t].color.g*o+e[t-1].color.g*(1-o),s[3*n+2]=e[t].color.b*o+e[t-1].color.b*(1-o);break}}}else if(t&&"pointCloudClassBreaksRenderer"===(null===i||void 0===i?void 0:i.type)){a=c.Z.fromJSON(i);const e=a.colorClassBreakInfos;s=new Uint8Array(3*r);const o=m(a.fieldTransformType);for(let n=0;n<r;n++){const r=o?o(t[n]):t[n];for(let t=0;t<e.length;t++)if(r>=e[t].minValue&&r<=e[t].maxValue){s[3*n]=e[t].color.r,s[3*n+1]=e[t].color.g,s[3*n+2]=e[t].color.b;break}}}else s=new Uint8Array(3*r).fill(255);if(o&&null!==(n=a)&&void 0!==n&&n.colorModulation){const e=a.colorModulation.minValue,t=a.colorModulation.maxValue,n=.3;for(let i=0;i<r;i++){const r=o[i],l=r>=t?1:r<=e?n:n+(1-n)*(r-e)/(t-e);s[3*i]=l*s[3*i],s[3*i+1]=l*s[3*i+1],s[3*i+2]=l*s[3*i+2]}}return s}(e.rendererInfo,l,s,o);if(e.filterInfo&&e.filterInfo.length>0&&null!=e.filterAttributesData){const l=e.filterAttributesData.filter(r.pC).map((e=>{const r=h(e,t,o),n={attributeInfo:e.attributeInfo,values:r};return i.push(n),n}));n=new Uint32Array(o),o=T(t,a,n,e.filterInfo,l)}for(const r of e.userAttributesData){const e=h(r,t,o);i.push({attributeInfo:r.attributeInfo,values:e})}3*o<a.length&&(a=new Uint8Array(a.buffer.slice(0,3*o))),this._applyElevationOffsetInPlace(t,o,e.elevationOffset);const p=this._transformCoordinates(t,o,e.obb,u.Z.fromJSON(e.inSR),u.Z.fromJSON(e.outSR));return{obb:e.obb,points:p,rgb:a,attributes:i,pointIdFilterMap:n}}_transformCoordinates(e,t,o,r,n){if(!(0,p.projectBuffer)(e,r,0,e,n,0,t))throw new Error("Can't reproject");const l=(0,a.f)(o.center[0],o.center[1],o.center[2]),u=(0,a.c)(),c=(0,a.c)();(0,i.a)(A,o.quaternion);const d=new Float32Array(3*t);for(let i=0;i<t;i++)u[0]=e[3*i]-l[0],u[1]=e[3*i+1]-l[1],u[2]=e[3*i+2]-l[2],(0,s.v)(c,u,A),o.halfSize[0]=Math.max(o.halfSize[0],Math.abs(c[0])),o.halfSize[1]=Math.max(o.halfSize[1],Math.abs(c[1])),o.halfSize[2]=Math.max(o.halfSize[2],Math.abs(c[2])),d[3*i]=u[0],d[3*i+1]=u[1],d[3*i+2]=u[2];return d}_applyElevationOffsetInPlace(e,t,o){if(0!==o)for(let r=0;r<t;r++)e[3*r+2]+=o}}const A=(0,l.a)();function I(){return new v}},4760:(e,t,o)=>{var r;o.d(t,{T:()=>r}),function(e){e.POSITION="position",e.NORMAL="normal",e.NORMALCOMPRESSED="normalCompressed",e.UV0="uv0",e.AUXPOS1="auxpos1",e.AUXPOS2="auxpos2",e.COLOR="color",e.SYMBOLCOLOR="symbolColor",e.SIZE="size",e.TANGENT="tangent",e.OFFSET="offset",e.PERSPECTIVEDIVIDE="perspectiveDivide",e.SUBDIVISIONFACTOR="subdivisionFactor",e.COLORFEATUREATTRIBUTE="colorFeatureAttribute",e.SIZEFEATUREATTRIBUTE="sizeFeatureAttribute",e.OPACITYFEATUREATTRIBUTE="opacityFeatureAttribute",e.DISTANCETOSTART="distanceToStart",e.UVMAPSPACE="uvMapSpace",e.BOUNDINGRECT="boundingRect",e.UVREGION="uvRegion",e.PROFILERIGHT="profileRight",e.PROFILEUP="profileUp",e.PROFILEVERTEXANDNORMAL="profileVertexAndNormal",e.FEATUREVALUE="featureValue",e.INSTANCEMODELORIGINHI="instanceModelOriginHi",e.INSTANCEMODELORIGINLO="instanceModelOriginLo",e.INSTANCEMODEL="instanceModel",e.INSTANCEMODELNORMAL="instanceModelNormal",e.INSTANCECOLOR="instanceColor",e.INSTANCEFEATUREATTRIBUTE="instanceFeatureAttribute",e.LOCALTRANSFORM="localTransform",e.GLOBALTRANSFORM="globalTransform",e.BOUNDINGSPHERE="boundingSphere",e.MODELORIGIN="modelOrigin",e.MODELSCALEFACTORS="modelScaleFactors",e.FEATUREATTRIBUTE="featureAttribute",e.STATE="state",e.LODLEVEL="lodLevel",e.POSITION0="position0",e.POSITION1="position1",e.NORMALA="normalA",e.NORMALB="normalB",e.COMPONENTINDEX="componentIndex",e.VARIANTOFFSET="variantOffset",e.VARIANTSTROKE="variantStroke",e.VARIANTEXTENSION="variantExtension",e.SIDENESS="sideness",e.START="start",e.END="end",e.UP="up",e.EXTRUDE="extrude",e.OBJECTANDLAYERIDCOLOR="objectAndLayerIdColor",e.INSTANCEOBJECTANDLAYERIDCOLOR="instanceObjectAndLayerIdColor"}(r||(r={}))}}]);
//# sourceMappingURL=8534.36e90c43.chunk.js.map