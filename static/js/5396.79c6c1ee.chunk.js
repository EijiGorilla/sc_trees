"use strict";(self.webpackChunksc_trees=self.webpackChunksc_trees||[]).push([[5396],{42388:(e,t,i)=>{i.d(t,{j:()=>h});var s=i(27366),r=i(7138),a=i(49861),o=(i(93169),i(32718),i(84936),i(69912));const n={visible:"visibleSublayers"};let h=class extends r.Z{constructor(e){super(e),this.scale=0}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.removeHandles("layer"),e&&this.addHandles([e.sublayers.on("change",(()=>this.notifyChange("visibleSublayers"))),e.on("wms-sublayer-update",(e=>this.notifyChange(n[e.propertyName])))],"layer"))}get layers(){return this.visibleSublayers.filter((e=>{let{name:t}=e;return t})).map((e=>{let{name:t}=e;return t})).join()}get version(){this.commitProperty("layers");const e=this.layer;return e&&e.commitProperty("imageTransparency"),(this._get("version")||0)+1}get visibleSublayers(){const{layer:e,scale:t}=this,i=e?.sublayers,s=[],r=e=>{const{minScale:i,maxScale:a,sublayers:o,visible:n}=e;n&&(0===t||(0===i||t<=i)&&(0===a||t>=a))&&(o?o.forEach(r):s.push(e))};return i?.forEach(r),s}toJSON(){const{layer:e,layers:t}=this,{imageFormat:i,imageTransparency:s,version:r}=e;return{format:i,request:"GetMap",service:"WMS",styles:"",transparent:s?"TRUE":"FALSE",version:r,layers:t}}};(0,s._)([(0,a.Cb)()],h.prototype,"layer",null),(0,s._)([(0,a.Cb)({readOnly:!0})],h.prototype,"layers",null),(0,s._)([(0,a.Cb)({type:Number})],h.prototype,"scale",void 0),(0,s._)([(0,a.Cb)({readOnly:!0})],h.prototype,"version",null),(0,s._)([(0,a.Cb)({readOnly:!0})],h.prototype,"visibleSublayers",null),h=(0,s._)([(0,o.j)("esri.layers.support.ExportWMSImageParameters")],h)},45956:(e,t,i)=>{i.d(t,{JZ:()=>c,RL:()=>p,eY:()=>m});var s=i(66978),r=i(29303),a=i(8768),o=i(30932),n=i(87422),h=i(10978),l=i(8548),u=i(57808),d=i(52311);function c(e){return e&&"render"in e}function p(e){const t=document.createElement("canvas");return t.width=e.width,t.height=e.height,e.render(t.getContext("2d")),t}class m extends n.s{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];super(),this.blendFunction="standard",this._sourceWidth=0,this._sourceHeight=0,this._textureInvalidated=!1,this._texture=null,this.stencilRef=0,this.coordScale=[1,1],this._height=void 0,this.pixelRatio=1,this.resolution=0,this.rotation=0,this._source=null,this._width=void 0,this.x=0,this.y=0,this.immutable=t,this.source=e,this.requestRender=this.requestRender.bind(this)}destroy(){this._texture&&(this._texture.dispose(),this._texture=null),null!=this._uploadStatus&&(this._uploadStatus.controller.abort(),this._uploadStatus=null)}get isSourceScaled(){return this.width!==this._sourceWidth||this.height!==this._sourceHeight}get height(){return void 0!==this._height?this._height:this._sourceHeight}set height(e){this._height=e}get source(){return this._source}set source(e){null==e&&null==this._source||(this._source=e,this.invalidateTexture(),this.requestRender())}get width(){return void 0!==this._width?this._width:this._sourceWidth}set width(e){this._width=e}beforeRender(e){super.beforeRender(e),this.updateTexture(e)}async setSourceAsync(e,t){null!=this._uploadStatus&&this._uploadStatus.controller.abort();const i=new AbortController,r=(0,s.hh)();return(0,s.$F)(t,(()=>i.abort())),(0,s.$F)(i,(e=>r.reject(e))),this._uploadStatus={controller:i,resolver:r},this.source=e,r.promise}invalidateTexture(){this._textureInvalidated||(this._textureInvalidated=!0,this._source instanceof HTMLImageElement?(this._sourceHeight=this._source.naturalHeight,this._sourceWidth=this._source.naturalWidth):this._source&&(this._sourceHeight=this._source.height,this._sourceWidth=this._source.width))}updateTransitionProperties(e,t){e>=64&&(this.fadeTransitionEnabled=!1,this.inFadeTransition=!1),super.updateTransitionProperties(e,t)}setTransform(e){const t=(0,r.yR)(this.transforms.displayViewScreenMat3),[i,s]=e.toScreenNoRotation([0,0],[this.x,this.y]),a=this.resolution/this.pixelRatio/e.resolution,n=a*this.width,h=a*this.height,l=Math.PI*this.rotation/180;(0,r.Iu)(t,t,(0,o.al)(i,s)),(0,r.Iu)(t,t,(0,o.al)(n/2,h/2)),(0,r.U1)(t,t,-l),(0,r.Iu)(t,t,(0,o.al)(-n/2,-h/2)),(0,r.ex)(t,t,(0,o.al)(n,h)),(0,r.Jp)(this.transforms.displayViewScreenMat3,e.displayViewMat3,t)}setSamplingProfile(e){this._texture&&(e.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(e.samplingMode))}bind(e,t){this._texture&&e.bindTexture(this._texture,t)}async updateTexture(e){let{context:t,painter:i}=e;if(!this._textureInvalidated)return;if(this._textureInvalidated=!1,this._texture||(this._texture=this._createTexture(t)),!this.source)return void this._texture.setData(null);this._texture.resize(this._sourceWidth,this._sourceHeight);const r=function(e){return c(e)?e instanceof h.Z?e.getRenderedRasterPixels()?.renderedRasterPixels:p(e):e}(this.source);try{if(null!=this._uploadStatus){const{controller:e,resolver:t}=this._uploadStatus,s={signal:e.signal},{width:a,height:o}=this,n=this._texture,h=i.textureUploadManager;await h.enqueueTextureUpdate({data:r,texture:n,width:a,height:o},s),t.resolve(),this._uploadStatus=null}else this._texture.setData(r);this.ready()}catch(a){(0,s.H9)(a)}}onDetach(){this.destroy()}_createTransforms(){return{displayViewScreenMat3:(0,a.Ue)()}}_createTexture(e){const t=this.immutable,i=new d.X;return i.internalFormat=t?l.lP.RGBA8:l.VI.RGBA,i.wrapMode=l.e8.CLAMP_TO_EDGE,i.isImmutable=t,i.width=this._sourceWidth,i.height=this._sourceHeight,new u.x(e,i)}}},90110:(e,t,i)=>{i.d(t,{c:()=>o});var s=i(71955),r=i(80613),a=i(64510);class o extends a.Z{constructor(){super(...arguments),this._hasCrossfade=!1}get requiresDedicatedFBO(){return super.requiresDedicatedFBO||this._hasCrossfade}beforeRender(e){super.beforeRender(e),this._manageFade()}prepareRenderPasses(e){const t=e.registerRenderPass({name:"bitmap",brushes:[s.U.bitmap],target:()=>this.children,drawPhase:r.jx.MAP});return[...super.prepareRenderPasses(e),t]}_manageFade(){this.children.reduce(((e,t)=>e+(t.inFadeTransition?1:0)),0)>=2?(this.children.forEach((e=>e.blendFunction="additive")),this._hasCrossfade=!0):(this.children.forEach((e=>e.blendFunction="standard")),this._hasCrossfade=!1)}}},10978:(e,t,i)=>{i.d(t,{Z:()=>s});class s{constructor(e,t,i){this.pixelBlock=e,this.extent=t,this.originalPixelBlock=i}get width(){return null!=this.pixelBlock?this.pixelBlock.width:0}get height(){return null!=this.pixelBlock?this.pixelBlock.height:0}render(e){const t=this.pixelBlock;if(null==t)return;const i=this.filter({extent:this.extent,pixelBlock:this.originalPixelBlock??t});if(null==i.pixelBlock)return;i.pixelBlock.maskIsAlpha&&(i.pixelBlock.premultiplyAlpha=!0);const s=i.pixelBlock.getAsRGBA(),r=e.createImageData(i.pixelBlock.width,i.pixelBlock.height);r.data.set(s),e.putImageData(r,0,0)}getRenderedRasterPixels(){const e=this.filter({extent:this.extent,pixelBlock:this.pixelBlock});return null==e.pixelBlock?null:(e.pixelBlock.maskIsAlpha&&(e.pixelBlock.premultiplyAlpha=!0),{width:e.pixelBlock.width,height:e.pixelBlock.height,renderedRasterPixels:new Uint8Array(e.pixelBlock.getAsRGBA().buffer)})}}},15396:(e,t,i)=>{i.r(t),i.d(t,{default:()=>w});var s=i(27366),r=i(32718),a=i(92026),o=i(66978),n=i(94172),h=i(49861),l=(i(93169),i(84936),i(69912)),u=i(53866),d=i(90110),c=i(88109),p=i(9229),m=i(67581),g=i(13107),x=i(10064),y=i(42388),_=i(14317);const f=e=>{let t=class extends e{initialize(){this.exportImageParameters=new y.j({layer:this.layer})}destroy(){this.exportImageParameters=(0,a.SC)(this.exportImageParameters)}get exportImageVersion(){return this.exportImageParameters?.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}get timeExtent(){return(0,_.h)(this.layer,this.view?.timeExtent,this._get("timeExtent"))}async fetchPopupFeaturesAtLocation(e,t){const{layer:i}=this;if(!e)throw new x.Z("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:i});const{popupEnabled:s}=i;if(!s)throw new x.Z("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:s});const r=this.createFetchPopupFeaturesQuery(e);if(!r)return[];const{extent:a,width:n,height:h,x:l,y:u}=r;if(!(a&&n&&h))throw new x.Z("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:a,width:n,height:h});const d=await i.fetchFeatureInfo(a,n,h,l,u);return(0,o.k_)(t),d}};return(0,s._)([(0,h.Cb)()],t.prototype,"exportImageParameters",void 0),(0,s._)([(0,h.Cb)({readOnly:!0})],t.prototype,"exportImageVersion",null),(0,s._)([(0,h.Cb)()],t.prototype,"layer",void 0),(0,s._)([(0,h.Cb)({readOnly:!0})],t.prototype,"timeExtent",null),t=(0,s._)([(0,l.j)("esri.views.layers.WMSLayerView")],t),t};let b=class extends(f((0,g.Z)((0,c.y)(m.Z)))){constructor(){super(...arguments),this.bitmapContainer=new d.c}supportsSpatialReference(e){return this.layer.serviceSupportsSpatialReference(e)}update(e){this.strategy.update(e).catch((e=>{(0,o.D_)(e)||r.Z.getLogger(this).error(e)}))}attach(){const{layer:e}=this,{imageMaxHeight:t,imageMaxWidth:i}=e;this.bitmapContainer=new d.c,this.container.addChild(this.bitmapContainer),this.strategy=new p.Z({container:this.bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:t,imageMaxWidth:i,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this.addAttachHandles((0,n.YP)((()=>this.exportImageVersion),(()=>this.requestUpdate())))}detach(){this.strategy=(0,a.SC)(this.strategy),this.container.removeAllChildren()}viewChange(){}moveEnd(){this.requestUpdate()}createFetchPopupFeaturesQuery(e){const{view:t,bitmapContainer:i}=this,{x:s,y:r}=e,{spatialReference:a}=t;let o,n=0,h=0;if(i.children.some((e=>{const{width:t,height:i,resolution:l,x:d,y:c}=e,p=d+l*t,m=c-l*i;return s>=d&&s<=p&&r<=c&&r>=m&&(o=new u.Z({xmin:d,ymin:m,xmax:p,ymax:c,spatialReference:a}),n=t,h=i,!0)})),!o)return null;const l=o.width/n,d=Math.round((s-o.xmin)/l),c=Math.round((o.ymax-r)/l);return{extent:o,width:n,height:h,x:d,y:c}}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,t,i,s){return this.layer.fetchImageBitmap(e,t,i,{timeExtent:this.timeExtent,...s})}};(0,s._)([(0,h.Cb)()],b.prototype,"strategy",void 0),(0,s._)([(0,h.Cb)()],b.prototype,"updating",void 0),b=(0,s._)([(0,l.j)("esri.views.2d.layers.WMSLayerView2D")],b);const w=b},9229:(e,t,i)=>{i.d(t,{Z:()=>R});var s=i(27366),r=i(7138),a=(i(93169),i(66978)),o=i(49861),n=(i(32718),i(84936),i(69912)),h=i(65156),l=i(92975),u=i(22824);const d=Math.PI/180;function c(e){return e*d}function p(e,t){const i=c(t.rotation),s=Math.abs(Math.cos(i)),r=Math.abs(Math.sin(i)),[a,o]=t.size;return e[0]=Math.round(o*r+a*s),e[1]=Math.round(o*s+a*r),e}var m=i(45956),g=i(37995),x=i(73828);const y=(0,h.Ue)(),_=[0,0],f=new x.Z(0,0,0,0),b=2048,w=2048,v=!1,S=!1,M=!1;let P=class extends r.Z{constructor(e){super(e),this._imagePromise=null,this.bitmaps=[],this.hidpi=M,this.imageMaxWidth=b,this.imageMaxHeight=w,this.imageRotationSupported=v,this.imageNormalizationSupported=S,this.update=(0,a.Ds)((async(e,t)=>{if((0,a.k_)(t),!e.stationary||this.destroyed)return;const i=e.state,s=(0,l.C5)(i.spatialReference),r=this.hidpi?e.pixelRatio:1,o=i.worldScreenWidth>0,n=o&&this.imageNormalizationSupported&&i.worldScreenWidth<i.size[0],h=Math.round((this.imageMaxWidth??0)/r),u=Math.round((this.imageMaxHeight??0)/r);n?(_[0]=i.worldScreenWidth,_[1]=i.size[1]):this.imageRotationSupported?(_[0]=i.size[0],_[1]=i.size[1]):p(_,i);const d=Math.floor(_[0])>h||Math.floor(_[1])>u,c=s&&(i.extent.xmin<s.valid[0]||i.extent.xmax>s.valid[1]),m=!this.imageNormalizationSupported&&c,g=!d&&!m,x=this.imageRotationSupported?i.rotation:0,y=this.container.children.slice();if(g){const e=n?i.paddedViewState.center:i.center;this._imagePromise=this._singleExport(i,_,e,i.resolution,x,r,t)}else{let e=Math.min(h,u);o&&(e=Math.min(i.worldScreenWidth,e),e=Math.round(i.worldScreenWidth/Math.ceil(i.worldScreenWidth/e))),this._imagePromise=this._tiledExport(i,e,r,t)}try{const e=await this._imagePromise??[];(0,a.k_)(t);const i=[];if(this._imagePromise=null,this.destroyed)return;this.bitmaps=e;for(const t of y)e.includes(t)||i.push(t.fadeOut().then((()=>{t.remove(),t.destroy()})));for(const t of e)i.push(t.fadeIn());await Promise.all(i)}catch(f){this._imagePromise=null,(0,a.r9)(f)}}),5e3),this.updateExports=(0,a.Ds)((async e=>{const t=[];for(const i of this.container.children){if(!i.visible||!i.stage)return;t.push(e(i).then((()=>{i.invalidateTexture(),i.requestRender()})))}this._imagePromise=(0,a.as)(t).then((()=>this._imagePromise=null)),await this._imagePromise}))}destroy(){this.bitmaps.forEach((e=>e.destroy())),this.bitmaps=[]}get updating(){return!this.destroyed&&null!==this._imagePromise}async _export(e,t,i,s,r,o){const n=await this.fetchSource(e,Math.floor(t*r),Math.floor(i*r),{rotation:s,pixelRatio:r,signal:o});(0,a.k_)(o);const h=new m.eY(null,!0);return h.x=e.xmin,h.y=e.ymax,h.resolution=e.width/t,h.rotation=s,h.pixelRatio=r,h.opacity=0,this.container.addChild(h),await h.setSourceAsync(n,o),(0,a.k_)(o),h}async _singleExport(e,t,i,s,r,a,o){!function(e,t,i,s){const[r,a]=t,[o,n]=s,h=.5*i;e[0]=r-h*o,e[1]=a-h*n,e[2]=r+h*o,e[3]=a+h*n}(y,i,s,t);const n=(0,h.HH)(y,e.spatialReference);return[await this._export(n,t[0],t[1],r,a,o)]}_tiledExport(e,t,i,s){const r=u.Z.create({size:t,spatialReference:e.spatialReference,scales:[e.scale]}),a=new g.Z(r),o=a.getTileCoverage(e);if(!o)return null;const n=[];return o.forEach(((r,o,l,u)=>{f.set(r,o,l,0),a.getTileBounds(y,f);const d=(0,h.HH)(y,e.spatialReference);n.push(this._export(d,t,t,0,i,s).then((e=>(0!==u&&(f.set(r,o,l,u),a.getTileBounds(y,f),e.x=y[0],e.y=y[3]),e))))})),Promise.all(n)}};(0,s._)([(0,o.Cb)()],P.prototype,"_imagePromise",void 0),(0,s._)([(0,o.Cb)()],P.prototype,"bitmaps",void 0),(0,s._)([(0,o.Cb)()],P.prototype,"container",void 0),(0,s._)([(0,o.Cb)()],P.prototype,"fetchSource",void 0),(0,s._)([(0,o.Cb)()],P.prototype,"hidpi",void 0),(0,s._)([(0,o.Cb)()],P.prototype,"imageMaxWidth",void 0),(0,s._)([(0,o.Cb)()],P.prototype,"imageMaxHeight",void 0),(0,s._)([(0,o.Cb)()],P.prototype,"imageRotationSupported",void 0),(0,s._)([(0,o.Cb)()],P.prototype,"imageNormalizationSupported",void 0),(0,s._)([(0,o.Cb)()],P.prototype,"requestUpdate",void 0),(0,s._)([(0,o.Cb)()],P.prototype,"updating",null),P=(0,s._)([(0,n.j)("esri.views.2d.layers.support.ExportStrategy")],P);const R=P}}]);
//# sourceMappingURL=5396.79c6c1ee.chunk.js.map