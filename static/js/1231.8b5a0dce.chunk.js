"use strict";(self.webpackChunksc_trees=self.webpackChunksc_trees||[]).push([[1231],{44041:(e,t,i)=>{i.d(t,{R:()=>u});var s=i(27366),r=i(7138),a=i(76672),o=i(49861),n=(i(25243),i(63780),i(93169),i(69912)),h=i(82582),l=i(45948),p=i(87072),d=i(58132);const c={visible:"visibleSublayers",definitionExpression:"layerDefs",labelingInfo:"hasDynamicLayers",labelsVisible:"hasDynamicLayers",opacity:"hasDynamicLayers",minScale:"visibleSublayers",maxScale:"visibleSublayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"};let u=class extends r.Z{constructor(e){super(e),this.floors=null,this.scale=0}destroy(){this.layer=null}get dynamicLayers(){if(!this.hasDynamicLayers)return null;const e=this.visibleSublayers.map((e=>{const t=(0,p.f)(this.floors,e);return e.toExportImageJSON(t)}));return e.length?JSON.stringify(e):null}get hasDynamicLayers(){return this.layer&&(0,d.FN)(this.visibleSublayers,this.layer.serviceSublayers,this.layer.gdbVersion)}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.removeHandles("layer"),e&&this.addHandles([e.allSublayers.on("change",(()=>this.notifyChange("visibleSublayers"))),e.on("sublayer-update",(e=>this.notifyChange(c[e.propertyName])))],"layer"))}get layers(){const e=this.visibleSublayers;return e?e.length?"show:"+e.map((e=>e.id)).join(","):"show:-1":null}get layerDefs(){var e;const t=!(null===(e=this.floors)||void 0===e||!e.length),i=this.visibleSublayers.filter((e=>null!=e.definitionExpression||t&&null!=e.floorInfo));return i.length?JSON.stringify(i.reduce(((e,t)=>{const i=(0,p.f)(this.floors,t),s=(0,a._)(i,t.definitionExpression);return null!=s&&(e[t.id]=s),e}),{})):null}get version(){this.commitProperty("layers"),this.commitProperty("layerDefs"),this.commitProperty("dynamicLayers"),this.commitProperty("timeExtent");const e=this.layer;return e&&(e.commitProperty("dpi"),e.commitProperty("imageFormat"),e.commitProperty("imageTransparency"),e.commitProperty("gdbVersion")),(this._get("version")||0)+1}get visibleSublayers(){const e=[];if(!this.layer)return e;const t=this.layer.sublayers,i=this.scale,s=t=>{t.visible&&(0===i||(0,h.o2)(i,t.minScale,t.maxScale))&&(t.sublayers?t.sublayers.forEach(s):e.unshift(t))};t&&t.forEach(s);const r=this._get("visibleSublayers");return!r||r.length!==e.length||r.some(((t,i)=>e[i]!==t))?e:r}toJSON(){const e=this.layer;let t={dpi:e.dpi,format:e.imageFormat,transparent:e.imageTransparency,gdbVersion:e.gdbVersion||null};return this.hasDynamicLayers&&this.dynamicLayers?t.dynamicLayers=this.dynamicLayers:t={...t,layers:this.layers,layerDefs:this.layerDefs},t}};(0,s._)([(0,o.Cb)({readOnly:!0})],u.prototype,"dynamicLayers",null),(0,s._)([(0,o.Cb)()],u.prototype,"floors",void 0),(0,s._)([(0,o.Cb)({readOnly:!0})],u.prototype,"hasDynamicLayers",null),(0,s._)([(0,o.Cb)()],u.prototype,"layer",null),(0,s._)([(0,o.Cb)({readOnly:!0})],u.prototype,"layers",null),(0,s._)([(0,o.Cb)({readOnly:!0})],u.prototype,"layerDefs",null),(0,s._)([(0,o.Cb)({type:Number})],u.prototype,"scale",void 0),(0,s._)([(0,o.Cb)(l.qG)],u.prototype,"timeExtent",void 0),(0,s._)([(0,o.Cb)({readOnly:!0})],u.prototype,"version",null),(0,s._)([(0,o.Cb)({readOnly:!0})],u.prototype,"visibleSublayers",null),u=(0,s._)([(0,n.j)("esri.layers.mixins.ExportImageParameters")],u)},90110:(e,t,i)=>{i.d(t,{c:()=>o});var s=i(62272),r=i(80613),a=i(64510);class o extends a.Z{constructor(){super(...arguments),this._hasCrossfade=!1}get requiresDedicatedFBO(){return super.requiresDedicatedFBO||this._hasCrossfade}beforeRender(e){super.beforeRender(e),this._manageFade()}prepareRenderPasses(e){const t=e.registerRenderPass({name:"bitmap",brushes:[s.U.bitmap],target:()=>this.children,drawPhase:r.jx.MAP});return[...super.prepareRenderPasses(e),t]}_manageFade(){this.children.reduce(((e,t)=>e+(t.inFadeTransition?1:0)),0)>=2?(this.children.forEach((e=>e.blendFunction="additive")),this._hasCrossfade=!0):(this.children.forEach((e=>e.blendFunction="standard")),this._hasCrossfade=!1)}}},91231:(e,t,i)=>{i.r(t),i.d(t,{default:()=>S});var s=i(27366),r=i(32718),a=i(66978),o=i(94172),n=i(49861),h=(i(25243),i(63780),i(93169),i(69912)),l=i(78983),p=i(90110),d=i(95986),c=i(77318),u=i(83978),y=i(9229),m=i(67581),g=i(45948),b=i(44041);const _=e=>{let t=class extends e{initialize(){this.exportImageParameters=new b.R({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get floors(){var e,t;return null!==(e=null===(t=this.view)||void 0===t?void 0:t.floors)&&void 0!==e?e:null}get exportImageVersion(){var e;return null!==(e=this.exportImageParameters)&&void 0!==e&&e.commitProperty("version"),this.commitProperty("timeExtent"),this.commitProperty("floors"),(this._get("exportImageVersion")||0)+1}canResume(){var e;return!!super.canResume()&&!(null!==(e=this.timeExtent)&&void 0!==e&&e.isEmpty)}};return(0,s._)([(0,n.Cb)()],t.prototype,"exportImageParameters",void 0),(0,s._)([(0,n.Cb)({readOnly:!0})],t.prototype,"floors",null),(0,s._)([(0,n.Cb)({readOnly:!0})],t.prototype,"exportImageVersion",null),(0,s._)([(0,n.Cb)()],t.prototype,"layer",void 0),(0,s._)([(0,n.Cb)()],t.prototype,"suspended",void 0),(0,s._)([(0,n.Cb)(g.qG)],t.prototype,"timeExtent",void 0),t=(0,s._)([(0,h.j)("esri.views.layers.MapImageLayerView")],t),t};var f=i(13107),v=i(84848),x=i(45008);let C=class extends(_((0,f.Z)((0,d.y)(m.Z)))){constructor(){super(...arguments),this._highlightGraphics=new l.J,this._updateHash=""}fetchPopupFeatures(e,t){return this._popupHighlightHelper.fetchPopupFeatures(e,t)}update(e){const t="".concat(this.exportImageVersion,"/").concat(e.state.id,"/").concat(e.pixelRatio,"/").concat(e.stationary);this._updateHash!==t&&(this._updateHash=t,this.strategy.update(e).catch((e=>{(0,a.D_)(e)||r.Z.getLogger(this).error(e)})),e.stationary&&this._popupHighlightHelper.updateHighlightedFeatures(e.state.resolution)),this._highlightView.processUpdate(e)}attach(){const{imageMaxWidth:e,imageMaxHeight:t,version:i}=this.layer,s=i>=10.3,r=i>=10;this._bitmapContainer=new p.c,this.container.addChild(this._bitmapContainer),this._highlightView=new c.Z({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new u.Z(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1}),this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new v.VF({createFetchPopupFeaturesQueryGeometry:(e,t)=>(0,x.K)(e,t,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(e,t)=>{this._highlightView.graphicUpdateHandler({graphic:e,property:t})},layerView:this,updatingHandles:this._updatingHandles}),this.strategy=new y.Z({container:this._bitmapContainer,fetchSource:this.fetchImageBitmap.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:e,imageMaxHeight:t,imageRotationSupported:s,imageNormalizationSupported:r,hidpi:!0}),this.addAttachHandles((0,o.YP)((()=>this.exportImageVersion),(()=>this.requestUpdate()))),this.requestUpdate()}detach(){this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren(),this._highlightView.destroy(),this._popupHighlightHelper.destroy()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}supportsSpatialReference(e){return this.layer.serviceSupportsSpatialReference(e)}async doRefresh(){this._updateHash="",this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,t,i,s){return this.layer.fetchImage(e,t,i,{timeExtent:this.timeExtent,floors:this.floors,...s})}fetchImageBitmap(e,t,i,s){return this.layer.fetchImageBitmap(e,t,i,{timeExtent:this.timeExtent,floors:this.floors,...s})}highlight(e){return this._popupHighlightHelper.highlight(e)}};(0,s._)([(0,n.Cb)()],C.prototype,"strategy",void 0),(0,s._)([(0,n.Cb)()],C.prototype,"updating",void 0),C=(0,s._)([(0,h.j)("esri.views.2d.layers.MapImageLayerView2D")],C);const S=C},9229:(e,t,i)=>{i.d(t,{Z:()=>H});var s=i(27366),r=i(7138),a=(i(93169),i(66978)),o=i(49861),n=(i(25243),i(63780),i(69912)),h=i(65156),l=i(92975),p=i(22824);const d=Math.PI/180;function c(e){return e*d}function u(e,t){const i=c(t.rotation),s=Math.abs(Math.cos(i)),r=Math.abs(Math.sin(i)),[a,o]=t.size;return e[0]=Math.round(o*r+a*s),e[1]=Math.round(o*s+a*r),e}var y=i(45956),m=i(37995),g=i(73828);const b=(0,h.Ue)(),_=[0,0],f=new g.Z(0,0,0,0),v=2048,x=2048,C=!1,S=!1,w=!1;let P=class extends r.Z{constructor(e){super(e),this._imagePromise=null,this.bitmaps=[],this.hidpi=w,this.imageMaxWidth=v,this.imageMaxHeight=x,this.imageRotationSupported=C,this.imageNormalizationSupported=S,this.update=(0,a.Ds)((async(e,t)=>{var i,s;if((0,a.k_)(t),!e.stationary||this.destroyed)return;const r=e.state,o=(0,l.C5)(r.spatialReference),n=this.hidpi?e.pixelRatio:1,h=this.imageNormalizationSupported&&r.worldScreenWidth&&r.worldScreenWidth<r.size[0],p=null!==(i=this.imageMaxWidth)&&void 0!==i?i:0,d=null!==(s=this.imageMaxHeight)&&void 0!==s?s:0;h?(_[0]=r.worldScreenWidth,_[1]=r.size[1]):this.imageRotationSupported?(_[0]=r.size[0],_[1]=r.size[1]):u(_,r);const c=Math.floor(_[0]*n)>p||Math.floor(_[1]*n)>d,y=o&&(r.extent.xmin<o.valid[0]||r.extent.xmax>o.valid[1]),m=!this.imageNormalizationSupported&&y,g=!c&&!m,b=this.imageRotationSupported?r.rotation:0,v=this.container.children.slice();if(g){const e=h?r.paddedViewState.center:r.center;this._imagePromise&&console.error("Image promise was not defined!"),this._imagePromise=this._singleExport(r,_,e,r.resolution,b,n,t)}else{let e=Math.min(p,d);m&&(e=Math.min(r.worldScreenWidth,e)),this._imagePromise=this._tiledExport(r,e,n,t)}try{var x;const e=null!==(x=await this._imagePromise)&&void 0!==x?x:[];(0,a.k_)(t);const i=[];if(this._imagePromise=null,this.destroyed)return;this.bitmaps=e;for(const t of v)e.includes(t)||i.push(t.fadeOut().then((()=>{t.remove(),t.destroy()})));for(const t of e)i.push(t.fadeIn());await Promise.all(i)}catch(f){this._imagePromise=null,(0,a.r9)(f)}}),5e3),this.updateExports=(0,a.Ds)((async e=>{const t=[];for(const i of this.container.children){if(!i.visible||!i.stage)return;t.push(e(i).then((()=>{i.invalidateTexture(),i.requestRender()})))}this._imagePromise=(0,a.as)(t).then((()=>this._imagePromise=null)),await this._imagePromise}))}destroy(){this.bitmaps.forEach((e=>e.destroy())),this.bitmaps=[]}get updating(){return!this.destroyed&&null!==this._imagePromise}async _export(e,t,i,s,r,o){const n=await this.fetchSource(e,Math.floor(t*r),Math.floor(i*r),{rotation:s,pixelRatio:r,signal:o});(0,a.k_)(o);const h=new y.eY(null,!0);return h.x=e.xmin,h.y=e.ymax,h.resolution=e.width/t,h.rotation=s,h.pixelRatio=r,h.opacity=0,this.container.addChild(h),await h.setSourceAsync(n,o),(0,a.k_)(o),h}async _singleExport(e,t,i,s,r,a,o){!function(e,t,i,s){const[r,a]=t,[o,n]=s,h=.5*i;e[0]=r-h*o,e[1]=a-h*n,e[2]=r+h*o,e[3]=a+h*n}(b,i,s,t);const n=(0,h.HH)(b,e.spatialReference);return[await this._export(n,t[0],t[1],r,a,o)]}_tiledExport(e,t,i,s){const r=p.Z.create({size:t,spatialReference:e.spatialReference,scales:[e.scale]}),a=new m.Z(r),o=a.getTileCoverage(e);if(!o)return null;const n=[];return o.forEach(((r,o,l,p)=>{f.set(r,o,l,0),a.getTileBounds(b,f);const d=(0,h.HH)(b,e.spatialReference);n.push(this._export(d,t,t,0,i,s).then((e=>(0!==p&&(f.set(r,o,l,p),a.getTileBounds(b,f),e.x=b[0],e.y=b[3]),e))))})),Promise.all(n)}};(0,s._)([(0,o.Cb)()],P.prototype,"_imagePromise",void 0),(0,s._)([(0,o.Cb)()],P.prototype,"bitmaps",void 0),(0,s._)([(0,o.Cb)()],P.prototype,"container",void 0),(0,s._)([(0,o.Cb)()],P.prototype,"fetchSource",void 0),(0,s._)([(0,o.Cb)()],P.prototype,"hidpi",void 0),(0,s._)([(0,o.Cb)()],P.prototype,"imageMaxWidth",void 0),(0,s._)([(0,o.Cb)()],P.prototype,"imageMaxHeight",void 0),(0,s._)([(0,o.Cb)()],P.prototype,"imageRotationSupported",void 0),(0,s._)([(0,o.Cb)()],P.prototype,"imageNormalizationSupported",void 0),(0,s._)([(0,o.Cb)()],P.prototype,"requestUpdate",void 0),(0,s._)([(0,o.Cb)()],P.prototype,"updating",null),P=(0,s._)([(0,n.j)("esri.views.2d.layers.support.ExportStrategy")],P);const H=P}}]);
//# sourceMappingURL=1231.8b5a0dce.chunk.js.map