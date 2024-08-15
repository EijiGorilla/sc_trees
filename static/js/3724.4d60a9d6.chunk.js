"use strict";(self.webpackChunksc_trees=self.webpackChunksc_trees||[]).push([[3724],{80573:(e,t,r)=>{r.d(t,{Z:()=>y});var n=r(27366),s=r(7138),o=r(63780),i=r(11582),l=r(79056),a=r(46784),u=r(49861),p=(r(93169),r(32718),r(69912));let c=0,d=class extends((0,a.eC)((0,i.J)((0,l.IG)(s.Z)))){constructor(e){super(e),this.id=`${Date.now().toString(16)}-analysis-${c++}`,this.title=null}get parent(){return this._get("parent")}set parent(e){const t=this.parent;if(null!=t)switch(t.type){case"line-of-sight":case"dimension":t.releaseAnalysis(this);break;case"2d":case"3d":t.analyses.includes(this)&&t.analyses.remove(this)}this._set("parent",e)}get isEditable(){return this.requiredPropertiesForEditing.every(o.pC)}};(0,n._)([(0,u.Cb)({type:String,constructOnly:!0,clonable:!1})],d.prototype,"id",void 0),(0,n._)([(0,u.Cb)({type:String})],d.prototype,"title",void 0),(0,n._)([(0,u.Cb)({clonable:!1,value:null})],d.prototype,"parent",null),(0,n._)([(0,u.Cb)({readOnly:!0})],d.prototype,"isEditable",null),d=(0,n._)([(0,p.j)("esri.analysis.Analysis")],d);const y=d},96866:(e,t,r)=>{r.d(t,{B:()=>y});var n=r(10064),s=r(9997),o=r(80292),i=r(35995),l=r(71907),a=r(33397),u=r(25265),p=r(49861),c=r(22892),d=r(53283);function y(e){const t=e?.origins??[void 0];return(r,n)=>{const s=function(e,t,r){if("resource"===e?.type)return function(e,t,r){const n=(0,a.Oe)(t,r);return{type:String,read:(e,t,r)=>{const s=(0,d.r)(e,t,r);return n.type===String?s:"function"==typeof n.type?new n.type({url:s}):void 0},write:{writer(t,s,l,a){if(!a?.resources)return"string"==typeof t?void(s[l]=(0,d.t)(t,a)):void(s[l]=t.write({},a));const p=function(e){return null==e?null:"string"==typeof e?e:e.url}(t),y=(0,d.t)(p,{...a,verifyItemRelativeUrls:a?.verifyItemRelativeUrls?{writtenUrls:a.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},d.M.NO),b=n.type!==String&&(!(0,o.l)(this)||a?.origin&&this.originIdOf(r)>(0,u.M9)(a.origin)),v={object:this,propertyName:r,value:t,targetUrl:y,dest:s,targetPropertyName:l,context:a,params:e};a?.portalItem&&y&&!(0,i.YP)(y)?b&&e?.contentAddressed?f(v):b?function(e){const{context:t,targetUrl:r,params:n,value:s,dest:o,targetPropertyName:l}=e;if(!t.portalItem)return;const a=t.portalItem.resourceFromPath(r),u=h(s,r,t),p=(0,c.B)(u),d=(0,i.Ml)(a.path),y=n?.compress??!1;p===d?(t.resources&&g({...e,resource:a,content:u,compress:y,updates:t.resources.toUpdate}),o[l]=r):f(e)}(v):function(e){let{context:t,targetUrl:r,dest:n,targetPropertyName:s}=e;t.portalItem&&t.resources&&(t.resources.toKeep.push({resource:t.portalItem.resourceFromPath(r),compress:!1}),n[s]=r)}(v):a?.portalItem&&(null==y||null!=(0,d.i)(y)||(0,i.jc)(y)||b)?f(v):s[l]=y}}}}(e,t,r);switch(e?.type??"other"){case"other":return{read:!0,write:!0};case"url":{const{read:e,write:t}=d.b;return{read:e,write:t}}}}(e,r,n);for(const e of t){const t=(0,p.CJ)(r,e,n);for(const e in s)t[e]=s[e]}}}function f(e){const{targetUrl:t,params:r,value:o,context:a,dest:u,targetPropertyName:p}=e;if(!a.portalItem)return;const y=(0,d.p)(t),f=h(o,t,a);if(r?.contentAddressed&&"json"!==f.type)return void a.messages?.push(new n.Z("persistable:contentAddressingUnsupported",`Property "${p}" is trying to serializing a resource with content of type ${f.type} with content addressing. Content addressing is only supported for json resources.`,{content:f}));const b=r?.contentAddressed&&"json"===f.type?(0,s.F)(f.jsonString):y?.filename??(0,l.DO)(),v=(0,i.v_)(r?.prefix??y?.prefix,b),m=`${v}.${(0,c.B)(f)}`;if(r?.contentAddressed&&a.resources&&"json"===f.type){const e=a.resources.toKeep.find((e=>{let{resource:t}=e;return t.path===m}))??a.resources.toAdd.find((e=>{let{resource:t}=e;return t.path===m}));if(e)return void(u[p]=e.resource.itemRelativeUrl)}const j=a.portalItem.resourceFromPath(m);(0,i.jc)(t)&&a.resources&&a.resources.pendingOperations.push((0,i.gi)(t).then((e=>{j.path=`${v}.${(0,c.B)({type:"blob",blob:e})}`,u[p]=j.itemRelativeUrl})).catch((()=>{})));const _=r?.compress??!1;a.resources&&g({...e,resource:j,content:f,compress:_,updates:a.resources.toAdd}),u[p]=j.itemRelativeUrl}function g(e){let{object:t,propertyName:r,updates:n,resource:s,content:o,compress:i}=e;n.push({resource:s,content:o,compress:i,finish:e=>{!function(e,t,r){"string"==typeof e[t]?e[t]=r.url:e[t].url=r.url}(t,r,e)}})}function h(e,t,r){return"string"==typeof e?{type:"url",url:t}:{type:"json",jsonString:JSON.stringify(e.toJSON(r))}}},80292:(e,t,r)=>{function n(e){return e&&"getAtOrigin"in e&&"originOf"in e}r.d(t,{l:()=>n})},33724:(e,t,r)=>{r.r(t),r.d(t,{default:()=>z});var n=r(27366),s=r(80573);function o(e,t){return i(e)===i(t)}function i(e){if(null==e)return null;const t=null!=e.layer?e.layer.id:"";let r=null;return r=null!=e.objectId?e.objectId:null!=e.layer&&"objectIdField"in e.layer&&null!=e.layer.objectIdField&&null!=e.attributes?e.attributes[e.layer.objectIdField]:e.uid,null==r?null:`o-${t}-${r}`}const l={json:{write:{writer:function(e,t){null!=e?.layer?.objectIdField&&null!=e.attributes&&(t.feature={layerId:e.layer.id,objectId:e.attributes[e.layer.objectIdField]})},target:{"feature.layerId":{type:[Number,String]},"feature.objectId":{type:[Number,String]}}},origins:{"web-scene":{read:function(e){if(null!=e.layerId&&null!=e.objectId)return{uid:null,layer:{id:e.layerId,objectIdField:"ObjectId"},attributes:{ObjectId:e.objectId}}}}}}};var a=r(7138),u=r(11582),p=r(46784),c=r(92026),d=r(49861),y=(r(93169),r(32718),r(84936),r(69912)),f=r(96866),g=r(848),h=r(64575);let b=class extends((0,p.eC)((0,u.J)(a.Z))){constructor(e){super(e),this.position=null,this.elevationInfo=null,this.feature=null}equals(e){return(0,c._W)(this.position,e.position)&&(0,c._W)(this.elevationInfo,e.elevationInfo)&&o(this.feature,e.feature)}};(0,n._)([(0,d.Cb)({type:g.Z,json:{write:{isRequired:!0}}})],b.prototype,"position",void 0),(0,n._)([(0,d.Cb)({type:h.Z}),(0,f.B)()],b.prototype,"elevationInfo",void 0),(0,n._)([(0,d.Cb)(l)],b.prototype,"feature",void 0),b=(0,n._)([(0,y.j)("esri.analysis.LineOfSightAnalysisObserver")],b);const v=b;let m=class extends((0,p.eC)(u.j)){constructor(e){super(e),this.position=null,this.elevationInfo=null,this.feature=null}equals(e){return(0,c._W)(this.position,e.position)&&(0,c._W)(this.elevationInfo,e.elevationInfo)&&o(this.feature,e.feature)}};(0,n._)([(0,d.Cb)({type:g.Z}),(0,f.B)()],m.prototype,"position",void 0),(0,n._)([(0,d.Cb)({type:h.Z}),(0,f.B)()],m.prototype,"elevationInfo",void 0),(0,n._)([(0,d.Cb)(l)],m.prototype,"feature",void 0),m=(0,n._)([(0,y.j)("esri.analysis.LineOfSightAnalysisTarget")],m);const j=m;var _=r(40281),I=r(60354),x=r(94172),w=r(45925),C=r(41414),O=r(74509);const R=_.Z.ofType(j);let S=class extends s.Z{constructor(e){super(e),this.type="line-of-sight",this.observer=null,this.extent=null}initialize(){this.addHandles((0,x.YP)((()=>this._computeExtent()),(e=>{null==e?.pending&&this._set("extent",null!=e?e.extent:null)}),x.tX))}get targets(){return this._get("targets")||new R}set targets(e){this._set("targets",(0,I.Z)(e,this.targets,R))}get spatialReference(){return null!=this.observer?.position?this.observer.position.spatialReference:null}get requiredPropertiesForEditing(){return[this.observer?.position]}async waitComputeExtent(){const e=this._computeExtent();return null!=e?e.pending:Promise.resolve()}_computeExtent(){const e=this.spatialReference;if(null==this.observer?.position||null==e)return null;const t=e=>"absolute-height"===(0,O.VW)(e.position,e.elevationInfo),r=this.observer.position,n=(0,C.al)(r.x,r.y,r.z,r.x,r.y,r.z);for(const o of this.targets)if(null!=o.position){const t=(0,w.projectOrLoad)(o.position,e);if(null!=t.pending)return{pending:t.pending,extent:null};if(null!=t.geometry){const{x:e,y:r,z:s}=t.geometry;(0,C.pp)(n,[e,r,s])}}const s=(0,C.HH)(n,e);return t(this.observer)&&this.targets.every(t)||(s.zmin=void 0,s.zmax=void 0),{pending:null,extent:s}}clear(){this.observer=null,this.targets.removeAll()}};(0,n._)([(0,d.Cb)({type:["line-of-sight"]})],S.prototype,"type",void 0),(0,n._)([(0,d.Cb)({type:v,json:{read:!0,write:!0}})],S.prototype,"observer",void 0),(0,n._)([(0,d.Cb)({cast:I.R,type:R,nonNullable:!0,json:{read:!0,write:!0}})],S.prototype,"targets",null),(0,n._)([(0,d.Cb)({value:null,readOnly:!0})],S.prototype,"extent",void 0),(0,n._)([(0,d.Cb)({readOnly:!0})],S.prototype,"spatialReference",null),(0,n._)([(0,d.Cb)({readOnly:!0})],S.prototype,"requiredPropertiesForEditing",null),S=(0,n._)([(0,y.j)("esri.analysis.LineOfSightAnalysis")],S);const P=S;var Z=r(97642),A=r(30651),E=r(6061);const U=_.Z.ofType(j);let $=class extends((0,E.q)((0,Z.R)(A.Z))){constructor(e){super(e),this.type="line-of-sight",this.operationalLayerType="LineOfSightLayer",this.analysis=new P,this.opacity=1}initialize(){this.addHandles((0,x.YP)((()=>this.analysis),((e,t)=>{null!=t&&t.parent===this&&(t.parent=null),null!=e&&(e.parent=this)}),x.tX))}async load(){return null!=this.analysis&&this.addResolvingPromise(this.analysis.waitComputeExtent()),this}get observer(){return this.analysis?.observer}set observer(e){const{analysis:t}=this;t&&(t.observer=e)}get targets(){return null!=this.analysis?this.analysis.targets:new _.Z}set targets(e){(0,I.Z)(e,this.analysis?.targets)}get fullExtent(){return null!=this.analysis?this.analysis.extent:null}get spatialReference(){return null!=this.analysis?this.analysis.spatialReference:null}releaseAnalysis(e){this.analysis===e&&(this.analysis=new P)}};(0,n._)([(0,d.Cb)({json:{read:!1},readOnly:!0})],$.prototype,"type",void 0),(0,n._)([(0,d.Cb)({type:["LineOfSightLayer"]})],$.prototype,"operationalLayerType",void 0),(0,n._)([(0,d.Cb)({type:v,json:{read:!0,write:{isRequired:!0,ignoreOrigin:!0}}})],$.prototype,"observer",null),(0,n._)([(0,d.Cb)({type:U,json:{read:!0,write:{ignoreOrigin:!0}}})],$.prototype,"targets",null),(0,n._)([(0,d.Cb)({nonNullable:!0,json:{read:!1,write:!1}})],$.prototype,"analysis",void 0),(0,n._)([(0,d.Cb)({readOnly:!0})],$.prototype,"fullExtent",null),(0,n._)([(0,d.Cb)({readOnly:!0})],$.prototype,"spatialReference",null),(0,n._)([(0,d.Cb)({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],$.prototype,"opacity",void 0),(0,n._)([(0,d.Cb)({type:["show","hide"]})],$.prototype,"listMode",void 0),$=(0,n._)([(0,y.j)("esri.layers.LineOfSightLayer")],$);const z=$},22892:(e,t,r)=>{r.d(t,{B:()=>s});var n=r(35995);function s(e){return o[function(e){return"json"===e.type?"application/json":"blob"===e.type?e.blob.type:function(e){const t=(0,n.Ml)(e);return a[t]||i}(e.url)}(e)]||l}const o={},i="text/plain",l=o[i],a={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip","bin.gz":"application/octet-stream"};for(const u in a)o[a[u]]=u},74509:(e,t,r)=>{r.d(t,{LR:()=>u,Uy:()=>i,VW:()=>o,Wb:()=>l,fm:()=>p,kf:()=>a});r(68860);var n=r(88152);function s(e){return e?c:d}function o(e,t){return function(e,t){return t?.mode?t.mode:s(e).mode}(null!=e&&e.hasZ,t)}function i(e,t,r){return r&&r.mode!==t?`${e} only support ${t} elevation mode`:null}function l(e,t,r){return r?.mode===t?`${e} do not support ${t} elevation mode`:null}function a(e,t){return null!=t?.featureExpressionInfo&&"0"!==t.featureExpressionInfo.expression?`${e} do not support featureExpressionInfo`:null}function u(e,t){t&&e.warn(".elevationInfo=",t)}function p(e){return(e?.offset??0)*(0,n.Z7)(e?.unit)}const c={mode:"absolute-height",offset:0},d={mode:"on-the-ground",offset:null}}}]);
//# sourceMappingURL=3724.4d60a9d6.chunk.js.map