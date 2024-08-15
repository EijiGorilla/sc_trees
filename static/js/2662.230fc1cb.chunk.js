"use strict";(self.webpackChunksc_trees=self.webpackChunksc_trees||[]).push([[2662],{45956:(e,t,i)=>{i.d(t,{JZ:()=>u,RL:()=>c,eY:()=>y});var s=i(66978),r=i(29303),a=i(8768),n=i(30932),o=i(87422),h=i(10978),l=i(8548),d=i(57808),p=i(52311);function u(e){return e&&"render"in e}function c(e){const t=document.createElement("canvas");return t.width=e.width,t.height=e.height,e.render(t.getContext("2d")),t}class y extends o.s{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];super(),this.blendFunction="standard",this._sourceWidth=0,this._sourceHeight=0,this._textureInvalidated=!1,this._texture=null,this.stencilRef=0,this.coordScale=[1,1],this._height=void 0,this.pixelRatio=1,this.resolution=0,this.rotation=0,this._source=null,this._width=void 0,this.x=0,this.y=0,this.immutable=t,this.source=e,this.requestRender=this.requestRender.bind(this)}destroy(){this._texture&&(this._texture.dispose(),this._texture=null),null!=this._uploadStatus&&(this._uploadStatus.controller.abort(),this._uploadStatus=null)}get isSourceScaled(){return this.width!==this._sourceWidth||this.height!==this._sourceHeight}get height(){return void 0!==this._height?this._height:this._sourceHeight}set height(e){this._height=e}get source(){return this._source}set source(e){null==e&&null==this._source||(this._source=e,this.invalidateTexture(),this.requestRender())}get width(){return void 0!==this._width?this._width:this._sourceWidth}set width(e){this._width=e}beforeRender(e){super.beforeRender(e),this.updateTexture(e)}async setSourceAsync(e,t){null!=this._uploadStatus&&this._uploadStatus.controller.abort();const i=new AbortController,r=(0,s.hh)();return(0,s.$F)(t,(()=>i.abort())),(0,s.$F)(i,(e=>r.reject(e))),this._uploadStatus={controller:i,resolver:r},this.source=e,r.promise}invalidateTexture(){this._textureInvalidated||(this._textureInvalidated=!0,this._source instanceof HTMLImageElement?(this._sourceHeight=this._source.naturalHeight,this._sourceWidth=this._source.naturalWidth):this._source&&(this._sourceHeight=this._source.height,this._sourceWidth=this._source.width))}updateTransitionProperties(e,t){e>=64&&(this.fadeTransitionEnabled=!1,this.inFadeTransition=!1),super.updateTransitionProperties(e,t)}setTransform(e){const t=(0,r.yR)(this.transforms.displayViewScreenMat3),[i,s]=e.toScreenNoRotation([0,0],[this.x,this.y]),a=this.resolution/this.pixelRatio/e.resolution,o=a*this.width,h=a*this.height,l=Math.PI*this.rotation/180;(0,r.Iu)(t,t,(0,n.al)(i,s)),(0,r.Iu)(t,t,(0,n.al)(o/2,h/2)),(0,r.U1)(t,t,-l),(0,r.Iu)(t,t,(0,n.al)(-o/2,-h/2)),(0,r.ex)(t,t,(0,n.al)(o,h)),(0,r.Jp)(this.transforms.displayViewScreenMat3,e.displayViewMat3,t)}setSamplingProfile(e){this._texture&&(e.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(e.samplingMode))}bind(e,t){this._texture&&e.bindTexture(this._texture,t)}async updateTexture(e){let{context:t,painter:i}=e;if(!this._textureInvalidated)return;if(this._textureInvalidated=!1,this._texture||(this._texture=this._createTexture(t)),!this.source)return void this._texture.setData(null);this._texture.resize(this._sourceWidth,this._sourceHeight);const r=function(e){return u(e)?e instanceof h.Z?e.getRenderedRasterPixels()?.renderedRasterPixels:c(e):e}(this.source);try{if(null!=this._uploadStatus){const{controller:e,resolver:t}=this._uploadStatus,s={signal:e.signal},{width:a,height:n}=this,o=this._texture,h=i.textureUploadManager;await h.enqueueTextureUpdate({data:r,texture:o,width:a,height:n},s),t.resolve(),this._uploadStatus=null}else this._texture.setData(r);this.ready()}catch(a){(0,s.H9)(a)}}onDetach(){this.destroy()}_createTransforms(){return{displayViewScreenMat3:(0,a.Ue)()}}_createTexture(e){const t=this.immutable,i=new p.X;return i.internalFormat=t?l.lP.RGBA8:l.VI.RGBA,i.wrapMode=l.e8.CLAMP_TO_EDGE,i.isImmutable=t,i.width=this._sourceWidth,i.height=this._sourceHeight,new d.x(e,i)}}},90110:(e,t,i)=>{i.d(t,{c:()=>n});var s=i(71955),r=i(80613),a=i(64510);class n extends a.Z{constructor(){super(...arguments),this._hasCrossfade=!1}get requiresDedicatedFBO(){return super.requiresDedicatedFBO||this._hasCrossfade}beforeRender(e){super.beforeRender(e),this._manageFade()}prepareRenderPasses(e){const t=e.registerRenderPass({name:"bitmap",brushes:[s.U.bitmap],target:()=>this.children,drawPhase:r.jx.MAP});return[...super.prepareRenderPasses(e),t]}_manageFade(){this.children.reduce(((e,t)=>e+(t.inFadeTransition?1:0)),0)>=2?(this.children.forEach((e=>e.blendFunction="additive")),this._hasCrossfade=!0):(this.children.forEach((e=>e.blendFunction="standard")),this._hasCrossfade=!1)}}},10978:(e,t,i)=>{i.d(t,{Z:()=>s});class s{constructor(e,t,i){this.pixelBlock=e,this.extent=t,this.originalPixelBlock=i}get width(){return null!=this.pixelBlock?this.pixelBlock.width:0}get height(){return null!=this.pixelBlock?this.pixelBlock.height:0}render(e){const t=this.pixelBlock;if(null==t)return;const i=this.filter({extent:this.extent,pixelBlock:this.originalPixelBlock??t});if(null==i.pixelBlock)return;i.pixelBlock.maskIsAlpha&&(i.pixelBlock.premultiplyAlpha=!0);const s=i.pixelBlock.getAsRGBA(),r=e.createImageData(i.pixelBlock.width,i.pixelBlock.height);r.data.set(s),e.putImageData(r,0,0)}getRenderedRasterPixels(){const e=this.filter({extent:this.extent,pixelBlock:this.pixelBlock});return null==e.pixelBlock?null:(e.pixelBlock.maskIsAlpha&&(e.pixelBlock.premultiplyAlpha=!0),{width:e.pixelBlock.width,height:e.pixelBlock.height,renderedRasterPixels:new Uint8Array(e.pixelBlock.getAsRGBA().buffer)})}}},52662:(e,t,i)=>{i.r(t),i.d(t,{default:()=>y});var s=i(27366),r=i(32718),a=i(66978),n=i(49861),o=(i(93169),i(84936),i(69912)),h=i(90110),l=i(88109),d=i(9229),p=i(67581),u=i(13107);let c=class extends((0,u.Z)((0,l.y)(p.Z))){update(e){this._strategy.update(e).catch((e=>{(0,a.D_)(e)||r.Z.getLogger(this).error(e)})),this.notifyChange("updating")}attach(){this._bitmapContainer=new h.c,this.container.addChild(this._bitmapContainer),this._strategy=new d.Z({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}viewChange(){}moveEnd(){this.requestUpdate()}fetchBitmapData(e,t,i){return this.layer.fetchImageBitmap(e,t,i)}async doRefresh(){this.requestUpdate()}isUpdating(){return this._strategy.updating||this.updateRequested}};(0,s._)([(0,n.Cb)()],c.prototype,"_strategy",void 0),(0,s._)([(0,n.Cb)()],c.prototype,"updating",void 0),c=(0,s._)([(0,o.j)("esri.views.2d.layers.BaseDynamicLayerView2D")],c);const y=c},88109:(e,t,i)=>{i.d(t,{y:()=>x});var s,r=i(27366),a=i(40281),n=i(60354),o=i(10064),h=i(94172),l=i(49861),d=(i(93169),i(32718),i(84936),i(69912)),p=i(33624),u=i(64634),c=i(33109);let y=s=class extends c.Z{constructor(e){super(e),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new s({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}commitVersionProperties(){this.commitProperty("left"),this.commitProperty("right"),this.commitProperty("top"),this.commitProperty("bottom")}};(0,r._)([(0,l.Cb)({type:[Number,String],json:{write:!0}})],y.prototype,"left",void 0),(0,r._)([(0,l.Cb)({type:[Number,String],json:{write:!0}})],y.prototype,"right",void 0),(0,r._)([(0,l.Cb)({type:[Number,String],json:{write:!0}})],y.prototype,"top",void 0),(0,r._)([(0,l.Cb)({type:[Number,String],json:{write:!0}})],y.prototype,"bottom",void 0),y=s=(0,r._)([(0,d.j)("esri.views.layers.support.ClipRect")],y);const g=y;var _=i(20921);let m=class extends c.Z{constructor(e){super(e),this.type="path",this.path=[]}commitVersionProperties(){this.commitProperty("path")}};(0,r._)([(0,l.Cb)({type:[[[Number]]],json:{write:!0}})],m.prototype,"path",void 0),m=(0,r._)([(0,d.j)("esri.views.layers.support.Path")],m);const v=m;var b=i(69787);const f=a.Z.ofType({key:"type",base:null,typeMap:{rect:g,path:v,geometry:_.Z}}),x=e=>{let t=class extends e{constructor(){super(...arguments),this.attached=!1,this.clips=new f,this.highlightOptions=null,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1,this._visibleAtCurrentScale=!0}initialize(){const e=this.view?.spatialReferenceLocked??!0,t=this.view?.spatialReference;t&&e&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new o.Z("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new p.W),this.container.fadeTransitionEnabled=!0,this.container.visible=!1,this.container.endTransitions(),this.addHandles([(0,h.YP)((()=>this.suspended),(e=>{this.container&&(this.container.visible=!e)}),h.tX),(0,h.YP)((()=>this.updateSuspended),(e=>{this.view&&!e&&this.updateRequested&&this.view.requestUpdate()}),h.tX),(0,h.YP)((()=>this.layer?.opacity??1),(e=>{this.container&&(this.container.opacity=e)}),h.tX),(0,h.YP)((()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal"),(e=>{this.container&&(this.container.blendMode=e)}),h.tX),(0,h.YP)((()=>this.layer&&"effect"in this.layer?this.layer.effect:null),(e=>{this.container&&(this.container.effect=e)}),h.tX),(0,h.YP)((()=>this.highlightOptions),(e=>this.container.highlightOptions=e),h.tX),(0,h.on)((()=>this.clips),"change",(()=>{this.container&&(this.container.clips=this.clips)}),h.tX),(0,h.YP)((()=>({scale:this.view?.scale,scaleRange:this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null})),(e=>{let{scale:t,scaleRange:i}=e;const s=(0,b.GB)(i,t);s!==this._visibleAtCurrentScale&&(this._visibleAtCurrentScale=s)}),h.tX)],"constructor"),this.view?.whenLayerView?this.view.whenLayerView(this.layer).then((e=>{e===this&&this.processAttach()}),(()=>{})):this.when().then((()=>{this.processAttach()}),(()=>{})))}destroy(){this.processDetach(),this.updateRequested=!1}get spatialReferenceSupported(){const e=this.view?.spatialReference;return null==e||this.supportsSpatialReference(e)}get updating(){return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!!this._updatingHandles?.updating)}get visibleAtCurrentScale(){return this._visibleAtCurrentScale}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.removeHandles("attach"),this.detach(),this.updateRequested=!1)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.updateSuspended||this.view.requestUpdate())}processUpdate(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.updateSuspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}hitTest(e,t){return Promise.resolve(null)}supportsSpatialReference(e){return!0}canResume(){return!!this.spatialReferenceSupported&&!!super.canResume()&&this.visibleAtCurrentScale}getSuspendInfo(){const e=super.getSuspendInfo(),t=!this.spatialReferenceSupported;return t&&(e.spatialReferenceNotSupported=t),e}addAttachHandles(e){this.addHandles(e,"attach")}};return(0,r._)([(0,l.Cb)()],t.prototype,"attached",void 0),(0,r._)([(0,l.Cb)({type:f,set(e){const t=(0,n.Z)(e,this._get("clips"),f);this._set("clips",t)}})],t.prototype,"clips",void 0),(0,r._)([(0,l.Cb)()],t.prototype,"container",void 0),(0,r._)([(0,l.Cb)({type:u.Z})],t.prototype,"highlightOptions",void 0),(0,r._)([(0,l.Cb)()],t.prototype,"moving",void 0),(0,r._)([(0,l.Cb)({readOnly:!0})],t.prototype,"spatialReferenceSupported",null),(0,r._)([(0,l.Cb)({readOnly:!0})],t.prototype,"updateParameters",void 0),(0,r._)([(0,l.Cb)()],t.prototype,"updateRequested",void 0),(0,r._)([(0,l.Cb)()],t.prototype,"updating",null),(0,r._)([(0,l.Cb)()],t.prototype,"view",void 0),(0,r._)([(0,l.Cb)()],t.prototype,"_visibleAtCurrentScale",void 0),(0,r._)([(0,l.Cb)({readOnly:!0})],t.prototype,"visibleAtCurrentScale",null),t=(0,r._)([(0,d.j)("esri.views.2d.layers.LayerView2D")],t),t}},9229:(e,t,i)=>{i.d(t,{Z:()=>P});var s=i(27366),r=i(7138),a=(i(93169),i(66978)),n=i(49861),o=(i(32718),i(84936),i(69912)),h=i(65156),l=i(92975),d=i(22824);const p=Math.PI/180;function u(e){return e*p}function c(e,t){const i=u(t.rotation),s=Math.abs(Math.cos(i)),r=Math.abs(Math.sin(i)),[a,n]=t.size;return e[0]=Math.round(n*r+a*s),e[1]=Math.round(n*s+a*r),e}var y=i(45956),g=i(37995),_=i(73828);const m=(0,h.Ue)(),v=[0,0],b=new _.Z(0,0,0,0),f=2048,x=2048,w=!1,C=!1,R=!1;let S=class extends r.Z{constructor(e){super(e),this._imagePromise=null,this.bitmaps=[],this.hidpi=R,this.imageMaxWidth=f,this.imageMaxHeight=x,this.imageRotationSupported=w,this.imageNormalizationSupported=C,this.update=(0,a.Ds)((async(e,t)=>{if((0,a.k_)(t),!e.stationary||this.destroyed)return;const i=e.state,s=(0,l.C5)(i.spatialReference),r=this.hidpi?e.pixelRatio:1,n=i.worldScreenWidth>0,o=n&&this.imageNormalizationSupported&&i.worldScreenWidth<i.size[0],h=Math.round((this.imageMaxWidth??0)/r),d=Math.round((this.imageMaxHeight??0)/r);o?(v[0]=i.worldScreenWidth,v[1]=i.size[1]):this.imageRotationSupported?(v[0]=i.size[0],v[1]=i.size[1]):c(v,i);const p=Math.floor(v[0])>h||Math.floor(v[1])>d,u=s&&(i.extent.xmin<s.valid[0]||i.extent.xmax>s.valid[1]),y=!this.imageNormalizationSupported&&u,g=!p&&!y,_=this.imageRotationSupported?i.rotation:0,m=this.container.children.slice();if(g){const e=o?i.paddedViewState.center:i.center;this._imagePromise=this._singleExport(i,v,e,i.resolution,_,r,t)}else{let e=Math.min(h,d);n&&(e=Math.min(i.worldScreenWidth,e),e=Math.round(i.worldScreenWidth/Math.ceil(i.worldScreenWidth/e))),this._imagePromise=this._tiledExport(i,e,r,t)}try{const e=await this._imagePromise??[];(0,a.k_)(t);const i=[];if(this._imagePromise=null,this.destroyed)return;this.bitmaps=e;for(const t of m)e.includes(t)||i.push(t.fadeOut().then((()=>{t.remove(),t.destroy()})));for(const t of e)i.push(t.fadeIn());await Promise.all(i)}catch(b){this._imagePromise=null,(0,a.r9)(b)}}),5e3),this.updateExports=(0,a.Ds)((async e=>{const t=[];for(const i of this.container.children){if(!i.visible||!i.stage)return;t.push(e(i).then((()=>{i.invalidateTexture(),i.requestRender()})))}this._imagePromise=(0,a.as)(t).then((()=>this._imagePromise=null)),await this._imagePromise}))}destroy(){this.bitmaps.forEach((e=>e.destroy())),this.bitmaps=[]}get updating(){return!this.destroyed&&null!==this._imagePromise}async _export(e,t,i,s,r,n){const o=await this.fetchSource(e,Math.floor(t*r),Math.floor(i*r),{rotation:s,pixelRatio:r,signal:n});(0,a.k_)(n);const h=new y.eY(null,!0);return h.x=e.xmin,h.y=e.ymax,h.resolution=e.width/t,h.rotation=s,h.pixelRatio=r,h.opacity=0,this.container.addChild(h),await h.setSourceAsync(o,n),(0,a.k_)(n),h}async _singleExport(e,t,i,s,r,a,n){!function(e,t,i,s){const[r,a]=t,[n,o]=s,h=.5*i;e[0]=r-h*n,e[1]=a-h*o,e[2]=r+h*n,e[3]=a+h*o}(m,i,s,t);const o=(0,h.HH)(m,e.spatialReference);return[await this._export(o,t[0],t[1],r,a,n)]}_tiledExport(e,t,i,s){const r=d.Z.create({size:t,spatialReference:e.spatialReference,scales:[e.scale]}),a=new g.Z(r),n=a.getTileCoverage(e);if(!n)return null;const o=[];return n.forEach(((r,n,l,d)=>{b.set(r,n,l,0),a.getTileBounds(m,b);const p=(0,h.HH)(m,e.spatialReference);o.push(this._export(p,t,t,0,i,s).then((e=>(0!==d&&(b.set(r,n,l,d),a.getTileBounds(m,b),e.x=m[0],e.y=m[3]),e))))})),Promise.all(o)}};(0,s._)([(0,n.Cb)()],S.prototype,"_imagePromise",void 0),(0,s._)([(0,n.Cb)()],S.prototype,"bitmaps",void 0),(0,s._)([(0,n.Cb)()],S.prototype,"container",void 0),(0,s._)([(0,n.Cb)()],S.prototype,"fetchSource",void 0),(0,s._)([(0,n.Cb)()],S.prototype,"hidpi",void 0),(0,s._)([(0,n.Cb)()],S.prototype,"imageMaxWidth",void 0),(0,s._)([(0,n.Cb)()],S.prototype,"imageMaxHeight",void 0),(0,s._)([(0,n.Cb)()],S.prototype,"imageRotationSupported",void 0),(0,s._)([(0,n.Cb)()],S.prototype,"imageNormalizationSupported",void 0),(0,s._)([(0,n.Cb)()],S.prototype,"requestUpdate",void 0),(0,s._)([(0,n.Cb)()],S.prototype,"updating",null),S=(0,s._)([(0,o.j)("esri.views.2d.layers.support.ExportStrategy")],S);const P=S},67581:(e,t,i)=>{i.d(t,{Z:()=>g});var s=i(27366),r=i(7138),a=i(91505),n=i(79056),o=i(32718),h=i(92026),l=i(67426),d=i(49861),p=(i(93169),i(84936),i(69912)),u=i(46634),c=i(69787);let y=class extends((0,n.IG)((0,l.v)(a.Z.EventedMixin(r.Z)))){constructor(e){super(e),this._updatingHandles=new u.R,this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){const t=this.layer&&this.layer.id||"no id",i=this.layer?.title||"no title";o.Z.getLogger(this).error("#resolve()",`Failed to resolve layer view (layer title: '${i}', id: '${t}')`,e)}}))}destroy(){this._updatingHandles=(0,h.SC)(this._updatingHandles)}get fullOpacity(){return(this.layer?.opacity??1)*(this.parent?.fullOpacity??1)}get suspended(){return this.destroyed||!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer?.legendEnabled}get updating(){return!(!this._updatingHandles?.updating&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get updateSuspended(){return this.suspended}get visible(){return!0===this.layer?.visible}set visible(e){this._overrideIfSome("visible",e)}get visibleAtCurrentScale(){return!0}get visibleAtCurrentTimeExtent(){const e=this.view.timeExtent,t=this.layer?.visibilityTimeExtent;return!e||!t||!e.intersection(t).isEmpty}canResume(){const e=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return this.visible&&this.layer?.loaded&&!this.parent?.suspended&&this.view?.ready&&(0,c.Cy)(e)&&this.visibleAtCurrentScale&&this.visibleAtCurrentTimeExtent||!1}getSuspendInfo(){const e=this.parent?.suspended?this.parent.suspendInfo:{};this.view?.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0);const t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return(0,c.Cy)(t)&&this.visibleAtCurrentScale||(e.outsideScaleRange=!0),this.visibleAtCurrentTimeExtent||(e.outsideVisibilityTimeExtent=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return!1}};(0,s._)([(0,d.Cb)()],y.prototype,"view",void 0),(0,s._)([(0,d.Cb)()],y.prototype,"fullOpacity",null),(0,s._)([(0,d.Cb)()],y.prototype,"layer",void 0),(0,s._)([(0,d.Cb)()],y.prototype,"parent",void 0),(0,s._)([(0,d.Cb)({readOnly:!0})],y.prototype,"suspended",null),(0,s._)([(0,d.Cb)({readOnly:!0})],y.prototype,"suspendInfo",null),(0,s._)([(0,d.Cb)({readOnly:!0})],y.prototype,"legendEnabled",null),(0,s._)([(0,d.Cb)({type:Boolean,readOnly:!0})],y.prototype,"updating",null),(0,s._)([(0,d.Cb)({readOnly:!0})],y.prototype,"updatingProgress",null),(0,s._)([(0,d.Cb)()],y.prototype,"updateSuspended",null),(0,s._)([(0,d.Cb)()],y.prototype,"visible",null),(0,s._)([(0,d.Cb)({readOnly:!0})],y.prototype,"visibleAtCurrentScale",null),(0,s._)([(0,d.Cb)({readOnly:!0})],y.prototype,"visibleAtCurrentTimeExtent",null),y=(0,s._)([(0,p.j)("esri.views.layers.LayerView")],y);const g=y},13107:(e,t,i)=>{i.d(t,{Z:()=>h});var s=i(27366),r=i(32718),a=i(66978),n=i(94172),o=(i(93169),i(84936),i(10064),i(69912));const h=e=>{let t=class extends e{initialize(){this.addHandles((0,n.on)((()=>this.layer),"refresh",(e=>{this.doRefresh(e.dataChanged).catch((e=>{(0,a.D_)(e)||r.Z.getLogger(this).error(e)}))})),"RefreshableLayerView")}};return t=(0,s._)([(0,o.j)("esri.views.layers.RefreshableLayerView")],t),t}},33109:(e,t,i)=>{i.d(t,{Z:()=>h});var s=i(27366),r=i(46784),a=i(49861),n=(i(93169),i(32718),i(84936),i(69912));let o=class extends r.wq{get version(){return this.commitVersionProperties(),(this._get("version")||0)+1}};(0,s._)([(0,a.Cb)({readOnly:!0})],o.prototype,"version",null),o=(0,s._)([(0,n.j)("esri.views.layers.support.ClipArea")],o);const h=o},20921:(e,t,i)=>{i.d(t,{Z:()=>y});var s,r=i(27366),a=(i(59486),i(49861)),n=(i(93169),i(32718),i(84936),i(69912)),o=i(32238),h=i(77981),l=i(33109),d=i(53866),p=i(80885);const u={base:o.Z,key:"type",typeMap:{extent:d.Z,polygon:p.Z}};let c=s=class extends l.Z{constructor(e){super(e),this.type="geometry",this.geometry=null}clone(){return new s({geometry:this.geometry?.clone()??null})}commitVersionProperties(){this.commitProperty("geometry")}};(0,r._)([(0,a.Cb)({types:u,json:{read:h.im,write:!0}})],c.prototype,"geometry",void 0),c=s=(0,r._)([(0,n.j)("esri.views.layers.support.Geometry")],c);const y=c}}]);
//# sourceMappingURL=2662.230fc1cb.chunk.js.map