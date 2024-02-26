"use strict";(self.webpackChunksc_trees=self.webpackChunksc_trees||[]).push([[8791],{81735:(e,t,s)=>{s.d(t,{Z:()=>o});var r=s(27366),i=s(7138),a=s(49861),n=(s(25243),s(63780),s(93169),s(69912));let l=class extends i.Z{initialize(){}destroy(){}get supportsTileUpdates(){return!1}get spatialReference(){const e=this.tileStore.tileScheme.spatialReference;return e&&e.toJSON()||null}};(0,r._)([(0,a.Cb)({readOnly:!0})],l.prototype,"supportsTileUpdates",null),(0,r._)([(0,a.Cb)({constructOnly:!0})],l.prototype,"remoteClient",void 0),(0,r._)([(0,a.Cb)({constructOnly:!0})],l.prototype,"service",void 0),(0,r._)([(0,a.Cb)()],l.prototype,"spatialReference",null),(0,r._)([(0,a.Cb)({constructOnly:!0})],l.prototype,"tileInfo",void 0),(0,r._)([(0,a.Cb)({constructOnly:!0})],l.prototype,"tileStore",void 0),l=(0,r._)([(0,n.j)("esri.views.2d.layers.features.processors.BaseProcessor")],l);const o=l},3561:(e,t,s)=>{s.r(t),s.d(t,{default:()=>x});var r=s(27366),i=s(75746),a=(s(10064),s(93169),s(32718),s(92026)),n=s(66978),l=(s(25243),s(63780),s(69912)),o=s(48732),c=s(78952),u=s(84328),d=s(80613),h=s(72774),f=s(74017),m=s(61909),y=s(69813),p=s(27301),g=s(81735);class _{constructor(e){this._remoteClient=e,this._resourceMap=new Map,this._inFlightResourceMap=new Map,this.geometryEngine=null,this.geometryEnginePromise=null}destroy(){}async fetchResource(e,t){const s=this._resourceMap,r=s.get(e);if(r)return r;let i=this._inFlightResourceMap.get(e);if(i)return i;try{i=this._remoteClient.invoke("tileRenderer.fetchResource",{url:e},{...t}),this._inFlightResourceMap.set(e,i),i.then((t=>(this._inFlightResourceMap.delete(e),s.set(e,t),t)))}catch(a){return(0,n.D_)(a)?null:{width:0,height:0}}return i}getResource(e){var t;return null!==(t=this._resourceMap.get(e))&&void 0!==t?t:null}loadFont(e){return Promise.resolve(null)}}function v(e,t){const s=t-t/4,r=t+t/2;return(!e.minScale||e.minScale>=s)&&(!e.maxScale||e.maxScale<=r)}function b(e){const t=e.message,s={message:{data:{},tileKey:t.tileKey,tileKeyOrigin:t.tileKeyOrigin,version:t.version},transferList:new Array};for(const i in t.data){const e=i,a=t.data[e];if(s.message.data[e]=null,null!=a){var r;const t=a.stride,i=a.indices.slice(0),n=a.vertices.slice(0),l=a.records.slice(0),o={stride:t,indices:i,vertices:n,records:l,metrics:null===(r=a.metrics)||void 0===r?void 0:r.slice(0)};s.transferList.push(i,n,l),s.message.data[e]=o}}return s}let S=class extends g.Z{constructor(){super(...arguments),this.type="symbol",this._matchers={feature:null,aggregate:null},this._bufferData=new Map,this._bufferIds=new Map}initialize(){this.addHandles([this.tileStore.on("update",this.onTileUpdate.bind(this))]),this._resourceManagerProxy=new _(this.remoteClient)}destroy(){this._resourceManagerProxy.destroy()}get supportsTileUpdates(){return!0}forEachBufferId(e){this._bufferIds.forEach((t=>{t.forEach(e)}))}async update(e,t){var s;const r=t.schema.processors[0];if("symbol"!==r.type)return;const i=(0,o.Hg)(this._schema,r);((0,o.uD)(i,"mesh")||(0,o.uD)(i,"target"))&&(e.mesh=!0,null!==(s=e.why)&&void 0!==s&&s.mesh.push("Symbology changed"),this._schema=r,this._factory=this._createFactory(r),this._factory.update(r,this.tileStore.tileScheme.tileInfo))}onTileMessage(e,t,s,r){return(0,n.k_)(r),this._onTileData(e,t,s,r)}onTileClear(e,t){const s={clear:!0,end:t};return this._bufferData.delete(e.key.id),this._bufferIds.delete(e.key.id),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:s})}onTileError(e,t,s){const r=s.signal,i={tileKey:e.id,error:t};return this.remoteClient.invoke("tileRenderer.onTileError",i,{signal:r})}onTileUpdate(e){for(const t of e.removed)this._bufferData.has(t.key.id)&&this._bufferData.delete(t.key.id),this._bufferIds.has(t.key.id)&&this._bufferIds.delete(t.key.id);for(const t of e.added)this._bufferData.forEach((e=>{for(const s of e)s.message.tileKey===t.id&&this._updateTileMesh("append",t,b(s),[],!1,!1,null)}))}_addBufferData(e,t){var s;this._bufferData.has(e)||this._bufferData.set(e,[]),null===(s=this._bufferData.get(e))||void 0===s||s.push(b(t))}_createFactory(e){const{geometryType:t,objectIdField:s,fields:r}=this.service,i={geometryType:t,fields:r,spatialReference:c.Z.fromJSON(this.spatialReference)},a=new m.Wr(((e,t)=>this.remoteClient.invoke("tileRenderer.getMaterialItems",e,t)),this.tileStore.tileScheme.tileInfo),{matcher:n,aggregateMatcher:l}=e.mesh;return this._store=a,this._matchers.feature=(0,y.fL)(n,a,i,this._resourceManagerProxy),this._matchers.aggregate=l?(0,y.fL)(l,a,i,this._resourceManagerProxy):null,new f.j(t,s,a)}async _onTileData(e,t,s,r){var i;(0,n.k_)(r);const{type:a,addOrUpdate:l,remove:o,clear:c,end:u}=t,d=!!this._schema.mesh.sortKey;if(!l){const t={type:a,addOrUpdate:null,remove:o,clear:c,end:u,sort:d};return this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:t},r)}const h=this._processFeatures(e,l,s,r,null===(i=t.status)||void 0===i?void 0:i.version);try{const s=await h;if(null==s){const t={type:a,addOrUpdate:null,remove:o,clear:c,end:u,sort:d};return this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:t},r)}const i=[];for(const t of s){let s=!1;const r=t.message.bufferIds,a=e.key.id,n=t.message.tileKey;if(a!==n&&null!=r){if(!this.tileStore.get(n)){this._addBufferData(a,t),i.push(t);continue}let e=this._bufferIds.get(n);e||(e=new Set,this._bufferIds.set(n,e));const l=Array.from(r);for(const t of l){if(e.has(t)){s=!0;break}e.add(t)}}s||(this._addBufferData(a,t),i.push(t))}await Promise.all(i.map((s=>{const i=e.key.id===s.message.tileKey,n=i?t.remove:[],l=i&&t.end;return this._updateTileMesh(a,e,s,n,l,!!t.clear,r.signal)})))}catch(f){this._handleError(e,f,r)}}async _updateTileMesh(e,t,s,r,i,a,l){var o;const c=e,u=s.message.tileKey,d=!!this._schema.mesh.sortKey;u!==t.key.id&&(i=!1);const h={type:c,addOrUpdate:null===s||void 0===s?void 0:s.message,remove:r,clear:a,end:i,sort:d},f={transferList:null!==(o=null===s||void 0===s?void 0:s.transferList)&&void 0!==o?o:[],signal:l};return(0,n.k_)(f),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:u,data:h},f)}async _processFeatures(e,t,s,r,i){if(null==t||!t.hasFeatures)return null;const a={transform:e.transform,hasZ:!1,hasM:!1},l=this._factory,o={viewingMode:"",scale:e.scale},c=await this._matchers.feature,u=await this._matchers.aggregate;(0,n.k_)(r);const d=this._getLabelInfos(e,t);return await l.analyze(t.getCursor(),this._resourceManagerProxy,c,u,a,o),(0,n.k_)(r),this._writeFeatureSet(e,t,a,d,l,s,i)}_writeFeatureSet(e,t,s,r,i,a,n){const l=t.getSize(),o=this._schema.mesh.matcher.symbologyType,c=new h._(e.key.id,{features:l,records:l,metrics:0},o,a,o!==d.mD.HEATMAP,n),u={viewingMode:"",scale:e.scale},f=t.getCursor();for(;f.next();)try{const t=f.getDisplayId(),a=null!=r?r.get(t):null;i.writeCursor(c,f,s,u,e.level,a,this._resourceManagerProxy)}catch(y){}const m=e.tileInfoView.tileInfo.isWrappable;return c.serialize(m)}_handleError(e,t,s){if(!(0,n.D_)(t)){const r={tileKey:e.id,error:t.message};return this.remoteClient.invoke("tileRenderer.onTileError",r,{signal:s.signal})}return Promise.resolve()}_getLabelingSchemaForScale(e){const t=this._schema.mesh.labels;if(null==t)return null;if("subtype"===t.type){const s={type:"subtype",classes:{}};let r=!1;for(const i in t.classes){const a=t.classes[i].filter((t=>v(t,e.scale)));r=r||!!a.length,s.classes[i]=a}return r?s:null}const s=t.classes.filter((t=>v(t,e.scale)));return s.length?{type:"simple",classes:s}:null}_getLabels(e,t){if("subtype"===t.type){var s;const r=this.service.subtypeField;(0,a.O3)(r,"Expected to find subtype Field");const i=e.readAttribute(r);return null==i?[]:null!==(s=t.classes[i])&&void 0!==s?s:[]}return t.classes}_getLabelInfos(e,t){const s=this._getLabelingSchemaForScale(e);if(null==s)return null;const r=new Map,a=t.getCursor();for(;a.next();){const e=a.getDisplayId(),t=[],n=(0,u.nE)(e),l=n&&1!==a.readAttribute("cluster_count")?"aggregate":"feature",o=this._getLabels(a,s);for(const s of o){if(s.target!==l)continue;const r=a.getStorage(),o=n&&"feature"===l?r.getComputedStringAtIndex(a.readAttribute("referenceId"),s.fieldIndex):r.getComputedStringAtIndex(e,s.fieldIndex);if(!o)continue;const c=(0,i.E)(o.toString()),u=c[0],d=c[1];this._store.getMosaicItem(s.symbol,(0,p._)(u)).then((e=>{var r;t[s.index]={glyphs:null!==(r=e.glyphMosaicItems)&&void 0!==r?r:[],rtl:d,index:s.index}}))}r.set(e,t)}return r}};S=(0,r._)([(0,l.j)("esri.views.2d.layers.features.processors.SymbolProcessor")],S);const x=S},29145:(e,t,s)=>{s.d(t,{x:()=>u,B:()=>c});var r=s(98991),i=s(80613),a=s(54815);const n={marker:i.LW.MARKER,fill:i.LW.FILL,line:i.LW.LINE,text:i.LW.TEXT};class l{constructor(e,t,s,r){const l={minScale:null===t||void 0===t?void 0:t.minScale,maxScale:null===t||void 0===t?void 0:t.maxScale},o=function(e){return e.minScale||e.maxScale?e.minScale+"-"+e.maxScale:""}(l);this.layers=e,this.data=t,this.hash=this._createHash()+o,this.rendererKey=s;const c={isOutline:!1,placement:null,symbologyType:i.mD.DEFAULT,vvFlags:s};for(const i of e){const e=n[i.type];c.isOutline="line"===i.type&&i.isOutline,i.materialKey=(0,a.jj)(e,c),i.maxVVSize=r,i.scaleInfo=l,i.templateHash+=o}}get type(){return"expanded-cim"}_createHash(){let e="";for(const t of this.layers)e+=t.templateHash;return e}}const o=async(e,t,s)=>{const i=new r._(s,t);return new l(await i.analyzeSymbolReference(e.data,!1),e.data,e.rendererKey,e.maxVVSize)};async function c(e,t,r,i){if(!e)return null;if("cim"===e.type)return o(e,t,r);if("web-style"===e.type){var a;const{fetchCIMSymbolReference:n}=await s.e(656).then(s.bind(s,80656)),l={type:"cim",data:null!==(a=await n(e,null,i))&&void 0!==a?a:void 0,rendererKey:e.rendererKey,maxVVSize:e.maxVVSize};return o(l,t,r)}return e}function u(e){if(!e)return null;const{avoidSDFRasterization:t,type:s,cim:r,url:i,materialHash:a,maxVVSize:n}=e,l={cim:r,type:s,mosaicHash:a,url:i,size:null,dashTemplate:null,path:null,text:null,fontName:null,animatedSymbolProperties:null,avoidSDFRasterization:t};switch(s){case"marker":n&&"size"in r&&(r.size=Math.max(n,r.size)),l.size=e.size,l.path=e.path,l.animatedSymbolProperties=e.animatedSymbolProperties;break;case"line":l.dashTemplate=e.dashTemplate;break;case"text":l.text=e.text,l.fontName=e.fontName}return l}}}]);
//# sourceMappingURL=8791.5ce1a5e2.chunk.js.map