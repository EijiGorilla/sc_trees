"use strict";(self.webpackChunksc_trees=self.webpackChunksc_trees||[]).push([[3724],{80573:(e,t,n)=>{n.d(t,{Z:()=>y});var r=n(27366),o=n(7138),i=n(63780),s=n(11582),l=n(79056),a=n(46784),u=n(49861),p=(n(25243),n(93169),n(69912));let d=0,c=class extends((0,a.eC)((0,s.J)((0,l.IG)(o.Z)))){constructor(e){super(e),this.id="".concat(Date.now().toString(16),"-analysis-").concat(d++),this.title=null}get parent(){return this._get("parent")}set parent(e){const t=this.parent;if(null!=t)switch(t.type){case"line-of-sight":case"dimension":t.releaseAnalysis(this);break;case"2d":case"3d":t.analyses.includes(this)&&t.analyses.remove(this)}this._set("parent",e)}get isEditable(){return this.requiredPropertiesForEditing.every(i.pC)}};(0,r._)([(0,u.Cb)({type:String,constructOnly:!0,clonable:!1})],c.prototype,"id",void 0),(0,r._)([(0,u.Cb)({type:String})],c.prototype,"title",void 0),(0,r._)([(0,u.Cb)({constructOnly:!0})],c.prototype,"type",void 0),(0,r._)([(0,u.Cb)({clonable:!1,value:null})],c.prototype,"parent",null),(0,r._)([(0,u.Cb)({readOnly:!0})],c.prototype,"isEditable",null),(0,r._)([(0,u.Cb)({readOnly:!0})],c.prototype,"requiredPropertiesForEditing",void 0),c=(0,r._)([(0,p.j)("esri.analysis.Analysis")],c);const y=c},96866:(e,t,n)=>{n.d(t,{B:()=>y});var r=n(10064),o=n(9997),i=n(80292),s=n(35995),l=n(71907),a=n(33397),u=n(25265),p=n(49861),d=n(22892),c=n(53283);function y(e){var t;const n=null!==(t=null===e||void 0===e?void 0:e.origins)&&void 0!==t?t:[void 0];return(t,r)=>{const o=function(e,t,n){var r;if("resource"===(null===e||void 0===e?void 0:e.type))return function(e,t,n){const r=(0,a.Oe)(t,n);return{type:String,read:(e,t,n)=>{const o=(0,c.r)(e,t,n);return r.type===String?o:"function"==typeof r.type?new r.type({url:o}):void 0},write:{writer(t,o,l,a){if(null===a||void 0===a||!a.resources)return"string"==typeof t?void(o[l]=(0,c.t)(t,a)):void(o[l]=t.write({},a));const p=function(e){return null==e?null:"string"==typeof e?e:e.url}(t),y=(0,c.t)(p,{...a,verifyItemRelativeUrls:null!==a&&void 0!==a&&a.verifyItemRelativeUrls?{writtenUrls:a.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},c.M.NO),h=r.type!==String&&(!(0,i.l)(this)||(null===a||void 0===a?void 0:a.origin)&&this.originIdOf(n)>(0,u.M9)(a.origin)),b={object:this,propertyName:n,value:t,targetUrl:y,dest:o,targetPropertyName:l,context:a,params:e};null!==a&&void 0!==a&&a.portalItem&&y&&!(0,s.YP)(y)?h&&null!==e&&void 0!==e&&e.contentAddressed?v(b):h?function(e){var t;const{context:n,targetUrl:r,params:o,value:i,dest:l,targetPropertyName:a}=e;if(!n.portalItem)return;const u=n.portalItem.resourceFromPath(r),p=g(i,r,n),c=(0,d.B)(p),y=(0,s.Ml)(u.path),h=null!==(t=null===o||void 0===o?void 0:o.compress)&&void 0!==t&&t;c===y?(n.resources&&f({...e,resource:u,content:p,compress:h,updates:n.resources.toUpdate}),l[a]=r):v(e)}(b):function(e){let{context:t,targetUrl:n,dest:r,targetPropertyName:o}=e;t.portalItem&&t.resources&&(t.resources.toKeep.push({resource:t.portalItem.resourceFromPath(n),compress:!1}),r[o]=n)}(b):null!==a&&void 0!==a&&a.portalItem&&(null==y||null!=(0,c.i)(y)||(0,s.jc)(y)||h)?v(b):o[l]=y}}}}(e,t,n);switch(null!==(r=null===e||void 0===e?void 0:e.type)&&void 0!==r?r:"other"){case"other":return{read:!0,write:!0};case"url":{const{read:e,write:t}=c.a;return{read:e,write:t}}}}(e,t,r);for(const e of n){const n=(0,p.CJ)(t,e,r);for(const e in o)n[e]=o[e]}}}function v(e){var t,n,i,a;const{targetUrl:u,params:p,value:y,context:v,dest:h,targetPropertyName:b}=e;if(!v.portalItem)return;const m=(0,c.p)(u),j=g(y,u,v);if(null!==p&&void 0!==p&&p.contentAddressed&&"json"!==j.type)return void(null===(t=v.messages)||void 0===t||t.push(new r.Z("persistable:contentAddressingUnsupported",'Property "'.concat(b,'" is trying to serializing a resource with content of type ').concat(j.type," with content addressing. Content addressing is only supported for json resources."),{content:j})));const _=null!==p&&void 0!==p&&p.contentAddressed&&"json"===j.type?(0,o.F)(j.jsonString):null!==(n=null===m||void 0===m?void 0:m.filename)&&void 0!==n?n:(0,l.DO)(),I=(0,s.v_)(null!==(i=null===p||void 0===p?void 0:p.prefix)&&void 0!==i?i:null===m||void 0===m?void 0:m.prefix,_),x="".concat(I,".").concat((0,d.B)(j));if(null!==p&&void 0!==p&&p.contentAddressed&&v.resources&&"json"===j.type){var w;const e=null!==(w=v.resources.toKeep.find((e=>e.resource.path===x)))&&void 0!==w?w:v.resources.toAdd.find((e=>e.resource.path===x));if(e)return void(h[b]=e.resource.itemRelativeUrl)}const C=v.portalItem.resourceFromPath(x);(0,s.jc)(u)&&v.resources&&v.resources.pendingOperations.push((0,s.gi)(u).then((e=>{C.path="".concat(I,".").concat((0,d.B)({type:"blob",blob:e})),h[b]=C.itemRelativeUrl})).catch((()=>{})));const O=null!==(a=null===p||void 0===p?void 0:p.compress)&&void 0!==a&&a;v.resources&&f({...e,resource:C,content:j,compress:O,updates:v.resources.toAdd}),h[b]=C.itemRelativeUrl}function f(e){let{object:t,propertyName:n,updates:r,resource:o,content:i,compress:s}=e;r.push({resource:o,content:i,compress:s,finish:e=>{!function(e,t,n){"string"==typeof e[t]?e[t]=n.url:e[t].url=n.url}(t,n,e)}})}function g(e,t,n){return"string"==typeof e?{type:"url",url:t}:{type:"json",jsonString:JSON.stringify(e.toJSON(n))}}},80292:(e,t,n)=>{function r(e){return e&&"getAtOrigin"in e&&"originOf"in e}n.d(t,{l:()=>r})},33724:(e,t,n)=>{n.r(t),n.d(t,{default:()=>z});var r=n(27366),o=n(80573);function i(e,t){return s(e)===s(t)}function s(e){if(null==e)return null;const t=null!=e.layer?e.layer.id:"";let n=null;return n=null!=e.objectId?e.objectId:null!=e.layer&&"objectIdField"in e.layer&&null!=e.layer.objectIdField&&null!=e.attributes?e.attributes[e.layer.objectIdField]:e.uid,null==n?null:"o-".concat(t,"-").concat(n)}const l={json:{write:{writer:function(e,t){var n;null!=(null===e||void 0===e||null===(n=e.layer)||void 0===n?void 0:n.objectIdField)&&null!=e.attributes&&(t.feature={layerId:e.layer.id,objectId:e.attributes[e.layer.objectIdField]})},target:{"feature.layerId":{type:[Number,String]},"feature.objectId":{type:[Number,String]}}},origins:{"web-scene":{read:function(e){if(null!=e.layerId&&null!=e.objectId)return{uid:null,layer:{id:e.layerId,objectIdField:"ObjectId"},attributes:{ObjectId:e.objectId}}}}}}};var a=n(7138),u=n(11582),p=n(46784),d=n(92026),c=n(49861),y=(n(25243),n(63780),n(93169),n(69912)),v=n(96866),f=n(585),g=n(64575);let h=class extends((0,p.eC)((0,u.J)(a.Z))){constructor(e){super(e),this.position=null,this.elevationInfo=null,this.feature=null}equals(e){return(0,d._W)(this.position,e.position)&&(0,d._W)(this.elevationInfo,e.elevationInfo)&&i(this.feature,e.feature)}};(0,r._)([(0,c.Cb)({type:f.Z,json:{write:{isRequired:!0}}})],h.prototype,"position",void 0),(0,r._)([(0,c.Cb)({type:g.Z}),(0,v.B)()],h.prototype,"elevationInfo",void 0),(0,r._)([(0,c.Cb)(l)],h.prototype,"feature",void 0),h=(0,r._)([(0,y.j)("esri.analysis.LineOfSightAnalysisObserver")],h);const b=h;let m=class extends((0,p.eC)(u.j)){constructor(e){super(e),this.position=null,this.elevationInfo=null,this.feature=null}equals(e){return(0,d._W)(this.position,e.position)&&(0,d._W)(this.elevationInfo,e.elevationInfo)&&i(this.feature,e.feature)}};(0,r._)([(0,c.Cb)({type:f.Z}),(0,v.B)()],m.prototype,"position",void 0),(0,r._)([(0,c.Cb)({type:g.Z}),(0,v.B)()],m.prototype,"elevationInfo",void 0),(0,r._)([(0,c.Cb)(l)],m.prototype,"feature",void 0),m=(0,r._)([(0,y.j)("esri.analysis.LineOfSightAnalysisTarget")],m);const j=m;var _=n(40281),I=n(60354),x=n(94172),w=n(45925),C=n(41414),O=n(74509);const R=_.Z.ofType(j);let P=class extends o.Z{constructor(e){super(e),this.type="line-of-sight",this.observer=null,this.extent=null}initialize(){this.addHandles((0,x.YP)((()=>this._computeExtent()),(e=>{null==(null===e||void 0===e?void 0:e.pending)&&this._set("extent",null!=e?e.extent:null)}),x.tX))}get targets(){return this._get("targets")||new R}set targets(e){this._set("targets",(0,I.Z)(e,this.targets,R))}get spatialReference(){var e;return null!=(null===(e=this.observer)||void 0===e?void 0:e.position)?this.observer.position.spatialReference:null}get requiredPropertiesForEditing(){var e;return[null===(e=this.observer)||void 0===e?void 0:e.position]}async waitComputeExtent(){const e=this._computeExtent();return null!=e?e.pending:Promise.resolve()}_computeExtent(){var e;const t=this.spatialReference;if(null==(null===(e=this.observer)||void 0===e?void 0:e.position)||null==t)return null;const n=e=>"absolute-height"===(0,O.VW)(e.position,e.elevationInfo),r=this.observer.position,o=(0,C.al)(r.x,r.y,r.z,r.x,r.y,r.z);for(const s of this.targets)if(null!=s.position){const e=(0,w.projectOrLoad)(s.position,t);if(null!=e.pending)return{pending:e.pending,extent:null};if(null!=e.geometry){const{x:t,y:n,z:r}=e.geometry;(0,C.pp)(o,[t,n,r])}}const i=(0,C.HH)(o,t);return n(this.observer)&&this.targets.every(n)||(i.zmin=void 0,i.zmax=void 0),{pending:null,extent:i}}clear(){this.observer=null,this.targets.removeAll()}};(0,r._)([(0,c.Cb)({type:["line-of-sight"]})],P.prototype,"type",void 0),(0,r._)([(0,c.Cb)({type:b,json:{read:!0,write:!0}})],P.prototype,"observer",void 0),(0,r._)([(0,c.Cb)({cast:I.R,type:R,nonNullable:!0,json:{read:!0,write:!0}})],P.prototype,"targets",null),(0,r._)([(0,c.Cb)({value:null,readOnly:!0})],P.prototype,"extent",void 0),(0,r._)([(0,c.Cb)({readOnly:!0})],P.prototype,"spatialReference",null),(0,r._)([(0,c.Cb)({readOnly:!0})],P.prototype,"requiredPropertiesForEditing",null),P=(0,r._)([(0,y.j)("esri.analysis.LineOfSightAnalysis")],P);const S=P;var E=n(97642),Z=n(30651),A=n(6061);const U=_.Z.ofType(j);let F=class extends((0,A.q)((0,E.R)(Z.Z))){constructor(e){super(e),this.type="line-of-sight",this.operationalLayerType="LineOfSightLayer",this.analysis=new S,this.opacity=1}initialize(){this.addHandles((0,x.YP)((()=>this.analysis),((e,t)=>{null!=t&&t.parent===this&&(t.parent=null),null!=e&&(e.parent=this)}),x.tX))}async load(){return null!=this.analysis&&this.addResolvingPromise(this.analysis.waitComputeExtent()),this}get observer(){var e;return null===(e=this.analysis)||void 0===e?void 0:e.observer}set observer(e){const{analysis:t}=this;t&&(t.observer=e)}get targets(){return null!=this.analysis?this.analysis.targets:new _.Z}set targets(e){var t;(0,I.Z)(e,null===(t=this.analysis)||void 0===t?void 0:t.targets)}get fullExtent(){return null!=this.analysis?this.analysis.extent:null}get spatialReference(){return null!=this.analysis?this.analysis.spatialReference:null}releaseAnalysis(e){this.analysis===e&&(this.analysis=new S)}};(0,r._)([(0,c.Cb)({json:{read:!1},readOnly:!0})],F.prototype,"type",void 0),(0,r._)([(0,c.Cb)({type:["LineOfSightLayer"]})],F.prototype,"operationalLayerType",void 0),(0,r._)([(0,c.Cb)({type:b,json:{read:!0,write:{isRequired:!0,ignoreOrigin:!0}}})],F.prototype,"observer",null),(0,r._)([(0,c.Cb)({type:U,json:{read:!0,write:{ignoreOrigin:!0}}})],F.prototype,"targets",null),(0,r._)([(0,c.Cb)({nonNullable:!0,json:{read:!1,write:!1}})],F.prototype,"analysis",void 0),(0,r._)([(0,c.Cb)({readOnly:!0})],F.prototype,"fullExtent",null),(0,r._)([(0,c.Cb)({readOnly:!0})],F.prototype,"spatialReference",null),(0,r._)([(0,c.Cb)({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],F.prototype,"opacity",void 0),(0,r._)([(0,c.Cb)({type:["show","hide"]})],F.prototype,"listMode",void 0),F=(0,r._)([(0,y.j)("esri.layers.LineOfSightLayer")],F);const z=F},22892:(e,t,n)=>{n.d(t,{B:()=>o});var r=n(35995);function o(e){return i[function(e){return"json"===e.type?"application/json":"blob"===e.type?e.blob.type:function(e){const t=(0,r.Ml)(e);return a[t]||s}(e.url)}(e)]||l}const i={},s="text/plain",l=i[s],a={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip","bin.gz":"application/octet-stream"};for(const u in a)i[a[u]]=u},74509:(e,t,n)=>{n.d(t,{LR:()=>u,Uy:()=>s,VW:()=>i,Wb:()=>l,kf:()=>a});n(88152);function r(e){return e?p:d}function o(e,t){return null!==t&&void 0!==t&&t.mode?t.mode:r(e).mode}function i(e,t){return o(null!=e&&e.hasZ,t)}function s(e,t,n){return n&&n.mode!==t?"".concat(e," only support ").concat(t," elevation mode"):null}function l(e,t,n){return(null===n||void 0===n?void 0:n.mode)===t?"".concat(e," do not support ").concat(t," elevation mode"):null}function a(e,t){return null!=(null===t||void 0===t?void 0:t.featureExpressionInfo)&&"0"!==t.featureExpressionInfo.expression?"".concat(e," do not support featureExpressionInfo"):null}function u(e,t){t&&e.warn(".elevationInfo=",t)}const p={mode:"absolute-height",offset:0},d={mode:"on-the-ground",offset:null}}}]);
//# sourceMappingURL=3724.e5682e4c.chunk.js.map