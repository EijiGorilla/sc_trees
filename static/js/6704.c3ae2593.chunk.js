"use strict";(self.webpackChunksc_trees=self.webpackChunksc_trees||[]).push([[6704],{45956:(t,e,i)=>{i.d(e,{JZ:()=>c,RL:()=>v,eY:()=>y});var s=i(66978),r=i(22753),n=i(23588),o=i(15245),l=i(87422),a=i(10978),h=i(83826),u=i(8548),d=i(57808),p=i(52311);function c(t){return t&&"render"in t}function v(t){const e=document.createElement("canvas");return e.width=t.width,e.height=t.height,t.render(e.getContext("2d")),e}class y extends l.s{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];super(),this.blendFunction="standard",this._sourceWidth=0,this._sourceHeight=0,this._textureInvalidated=!1,this._texture=null,this.stencilRef=0,this.coordScale=[1,1],this._height=void 0,this.pixelRatio=1,this.resolution=0,this.rotation=0,this._source=null,this._width=void 0,this.x=0,this.y=0,this.immutable=e,this.source=t,this.requestRender=this.requestRender.bind(this)}destroy(){this._texture&&(this._texture.dispose(),this._texture=null),null!=this._uploadStatus&&(this._uploadStatus.controller.abort(),this._uploadStatus=null)}get isSourceScaled(){return this.width!==this._sourceWidth||this.height!==this._sourceHeight}get height(){return void 0!==this._height?this._height:this._sourceHeight}set height(t){this._height=t}get source(){return this._source}set source(t){null==t&&null==this._source||(this._source=t,this.invalidateTexture(),this.requestRender())}get width(){return void 0!==this._width?this._width:this._sourceWidth}set width(t){this._width=t}beforeRender(t){super.beforeRender(t),this.updateTexture(t)}async setSourceAsync(t,e){null!=this._uploadStatus&&this._uploadStatus.controller.abort();const i=new AbortController,r=(0,s.hh)();return(0,s.$F)(e,(()=>i.abort())),(0,s.$F)(i,(t=>r.reject(t))),this._uploadStatus={controller:i,resolver:r},this.source=t,r.promise}invalidateTexture(){this._textureInvalidated||(this._textureInvalidated=!0,this._source instanceof HTMLImageElement?(this._sourceHeight=this._source.naturalHeight,this._sourceWidth=this._source.naturalWidth):this._source&&(this._sourceHeight=this._source.height,this._sourceWidth=this._source.width))}updateTransitionProperties(t,e){t>=64&&(this.fadeTransitionEnabled=!1,this.inFadeTransition=!1),super.updateTransitionProperties(t,e)}setTransform(t){const e=(0,r.g)(this.transforms.dvs),[i,s]=t.toScreenNoRotation([0,0],[this.x,this.y]),n=this.resolution/this.pixelRatio/t.resolution,l=n*this.width,a=n*this.height,h=Math.PI*this.rotation/180;(0,r.h)(e,e,(0,o.f)(i,s)),(0,r.h)(e,e,(0,o.f)(l/2,a/2)),(0,r.r)(e,e,-h),(0,r.h)(e,e,(0,o.f)(-l/2,-a/2)),(0,r.l)(e,e,(0,o.f)(l,a)),(0,r.m)(this.transforms.dvs,t.displayViewMat3,e)}setSamplingProfile(t){this._texture&&(t.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(t.samplingMode))}bind(t,e){this._texture&&t.bindTexture(this._texture,e)}async updateTexture(t){let{context:e,painter:i}=t;if(!this._textureInvalidated)return;if(this._textureInvalidated=!1,this._texture||(this._texture=this._createTexture(e)),!this.source)return void this._texture.setData(null);this._texture.resize(this._sourceWidth,this._sourceHeight);const r=function(t){var e;return c(t)?t instanceof a.Z?null===(e=t.getRenderedRasterPixels())||void 0===e?void 0:e.renderedRasterPixels:v(t):t}(this.source);try{if(null!=this._uploadStatus){const{controller:t,resolver:e}=this._uploadStatus,s={signal:t.signal},{width:n,height:o}=this,l=this._texture,a=i.textureUploadManager;await a.enqueueTextureUpdate({data:r,texture:l,width:n,height:o},s),e.resolve(),this._uploadStatus=null}else this._texture.setData(r);this.ready()}catch(n){(0,s.H9)(n)}}onDetach(){this.destroy()}_createTransforms(){return{dvs:(0,n.c)()}}_createTexture(t){const e=this.immutable&&t.type===h.zO.WEBGL2,i=new p.X;return i.internalFormat=e?u.lP.RGBA8:u.VI.RGBA,i.wrapMode=u.e8.CLAMP_TO_EDGE,i.isImmutable=e,i.width=this._sourceWidth,i.height=this._sourceHeight,new d.x(t,i)}}},10978:(t,e,i)=>{i.d(e,{Z:()=>s});class s{constructor(t,e,i){this.pixelBlock=t,this.extent=e,this.originalPixelBlock=i}get width(){return null!=this.pixelBlock?this.pixelBlock.width:0}get height(){return null!=this.pixelBlock?this.pixelBlock.height:0}render(t){var e;const i=this.pixelBlock;if(null==i)return;const s=this.filter({extent:this.extent,pixelBlock:null!==(e=this.originalPixelBlock)&&void 0!==e?e:i});if(null==s.pixelBlock)return;s.pixelBlock.maskIsAlpha&&(s.pixelBlock.premultiplyAlpha=!0);const r=s.pixelBlock.getAsRGBA(),n=t.createImageData(s.pixelBlock.width,s.pixelBlock.height);n.data.set(r),t.putImageData(n,0,0)}getRenderedRasterPixels(){const t=this.filter({extent:this.extent,pixelBlock:this.pixelBlock});return null==t.pixelBlock?null:(t.pixelBlock.maskIsAlpha&&(t.pixelBlock.premultiplyAlpha=!0),{width:t.pixelBlock.width,height:t.pixelBlock.height,renderedRasterPixels:new Uint8Array(t.pixelBlock.getAsRGBA().buffer)})}}},95986:(t,e,i)=>{i.d(e,{y:()=>I});var s=i(27366),r=i(40281),n=i(60354),o=i(10064),l=i(94172),a=i(49861),h=(i(25243),i(63780),i(93169),i(69912)),u=i(82582),d=i(33624),p=i(64634),c=i(46784);let v=class extends c.wq{get version(){return this.commitVersionProperties(),(this._get("version")||0)+1}};(0,s._)([(0,a.Cb)({readOnly:!0})],v.prototype,"version",null),v=(0,s._)([(0,h.j)("esri.views.layers.support.ClipArea")],v);const y=v;var g;let _=g=class extends y{constructor(t){super(t),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new g({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}commitVersionProperties(){this.commitProperty("left"),this.commitProperty("right"),this.commitProperty("top"),this.commitProperty("bottom")}};(0,s._)([(0,a.Cb)({type:[Number,String],json:{write:!0}})],_.prototype,"left",void 0),(0,s._)([(0,a.Cb)({type:[Number,String],json:{write:!0}})],_.prototype,"right",void 0),(0,s._)([(0,a.Cb)({type:[Number,String],json:{write:!0}})],_.prototype,"top",void 0),(0,s._)([(0,a.Cb)({type:[Number,String],json:{write:!0}})],_.prototype,"bottom",void 0),_=g=(0,s._)([(0,h.j)("esri.views.layers.support.ClipRect")],_);const m=_;i(59486);var b,f=i(32238),x=i(77981),w=i(53866),R=i(80885);const S={base:f.Z,key:"type",typeMap:{extent:w.Z,polygon:R.Z}};let C=b=class extends y{constructor(t){super(t),this.type="geometry",this.geometry=null}clone(){var t,e;return new b({geometry:null!==(t=null===(e=this.geometry)||void 0===e?void 0:e.clone())&&void 0!==t?t:null})}commitVersionProperties(){this.commitProperty("geometry")}};(0,s._)([(0,a.Cb)({types:S,json:{read:x.im,write:!0}})],C.prototype,"geometry",void 0),C=b=(0,s._)([(0,h.j)("esri.views.layers.support.Geometry")],C);const P=C;let k=class extends y{constructor(t){super(t),this.type="path",this.path=[]}commitVersionProperties(){this.commitProperty("path")}};(0,s._)([(0,a.Cb)({type:[[[Number]]],json:{write:!0}})],k.prototype,"path",void 0),k=(0,s._)([(0,h.j)("esri.views.layers.support.Path")],k);const B=k,A=r.Z.ofType({key:"type",base:null,typeMap:{rect:m,path:B,geometry:P}}),I=t=>{let e=class extends t{constructor(){super(...arguments),this.attached=!1,this.clips=new A,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1,this.visibleAtCurrentScale=!1,this.highlightOptions=null}initialize(){var t,e,i,s;const r=null===(t=null===(e=this.view)||void 0===e?void 0:e.spatialReferenceLocked)||void 0===t||t;(null===(i=this.view)||void 0===i?void 0:i.spatialReference)&&r&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new o.Z("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new d.W),this.container.fadeTransitionEnabled=!0,this.container.visible=!1,this.container.endTransitions(),this.addHandles([(0,l.YP)((()=>this.suspended),(t=>{this.container&&(this.container.visible=!t),this.view&&!t&&this.updateRequested&&this.view.requestUpdate()}),l.tX),(0,l.YP)((()=>{var t,e;return null!==(t=null===(e=this.layer)||void 0===e?void 0:e.opacity)&&void 0!==t?t:1}),(t=>{this.container&&(this.container.opacity=t)}),l.tX),(0,l.YP)((()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal"),(t=>{this.container&&(this.container.blendMode=t)}),l.tX),(0,l.YP)((()=>this.layer&&"effect"in this.layer?this.layer.effect:null),(t=>{this.container&&(this.container.effect=t)}),l.tX),(0,l.YP)((()=>this.highlightOptions),(t=>this.container.highlightOptions=t),l.tX),(0,l.on)((()=>this.clips),"change",(()=>{this.container&&(this.container.clips=this.clips)}),l.tX),(0,l.YP)((()=>{var t;return{scale:null===(t=this.view)||void 0===t?void 0:t.scale,scaleRange:this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null}}),(t=>{let{scale:e}=t;const i=null!=e&&this.isVisibleAtScale(e);i!==this.visibleAtCurrentScale&&this._set("visibleAtCurrentScale",i)}),l.tX)],"constructor"),null!==(s=this.view)&&void 0!==s&&s.whenLayerView?this.view.whenLayerView(this.layer).then((t=>{t===this&&this.processAttach()}),(()=>{})):this.when().then((()=>{this.processAttach()}),(()=>{})))}destroy(){this.processDetach(),this.updateRequested=!1}get spatialReferenceSupported(){var t;const e=null===(t=this.view)||void 0===t?void 0:t.spatialReference;return null==e||this.supportsSpatialReference(e)}get updating(){var t;return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!(null===(t=this._updatingHandles)||void 0===t||!t.updating))}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.removeHandles("attach"),this.detach(),this.updateRequested=!1)}isVisibleAtScale(t){const e=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;if(!e)return!0;const{minScale:i,maxScale:s}=e;return(0,u.o2)(t,i,s)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}processUpdate(t){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",t),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(t))):this.updateRequested=!1}hitTest(t,e){return Promise.resolve(null)}supportsSpatialReference(t){return!0}canResume(){return!!this.spatialReferenceSupported&&!!super.canResume()&&this.visibleAtCurrentScale}getSuspendInfo(){const t=super.getSuspendInfo(),e=!this.spatialReferenceSupported,i=this.visibleAtCurrentScale;return e&&(t.spatialReferenceNotSupported=e),i&&(t.outsideScaleRange=i),t}addAttachHandles(t){this.addHandles(t,"attach")}};return(0,s._)([(0,a.Cb)()],e.prototype,"attached",void 0),(0,s._)([(0,a.Cb)({type:A,set(t){const e=(0,n.Z)(t,this._get("clips"),A);this._set("clips",e)}})],e.prototype,"clips",void 0),(0,s._)([(0,a.Cb)()],e.prototype,"container",void 0),(0,s._)([(0,a.Cb)()],e.prototype,"moving",void 0),(0,s._)([(0,a.Cb)({readOnly:!0})],e.prototype,"spatialReferenceSupported",null),(0,s._)([(0,a.Cb)({readOnly:!0})],e.prototype,"updateParameters",void 0),(0,s._)([(0,a.Cb)()],e.prototype,"updateRequested",void 0),(0,s._)([(0,a.Cb)()],e.prototype,"updating",null),(0,s._)([(0,a.Cb)()],e.prototype,"view",void 0),(0,s._)([(0,a.Cb)({readOnly:!0})],e.prototype,"visibleAtCurrentScale",void 0),(0,s._)([(0,a.Cb)({type:p.Z})],e.prototype,"highlightOptions",void 0),e=(0,s._)([(0,h.j)("esri.views.2d.layers.LayerView2D")],e),e}},67581:(t,e,i)=>{i.d(e,{Z:()=>v});var s=i(27366),r=i(7138),n=i(91505),o=i(79056),l=i(32718),a=i(92026),h=i(67426),u=i(49861),d=(i(25243),i(63780),i(93169),i(69912)),p=i(46634);let c=class extends((0,o.IG)((0,h.v)(n.Z.EventedMixin(r.Z)))){constructor(t){super(t),this._updatingHandles=new p.R,this.layer=null,this.parent=null}initialize(){this.when().catch((t=>{if("layerview:create-error"!==t.name){var e;const i=this.layer&&this.layer.id||"no id",s=(null===(e=this.layer)||void 0===e?void 0:e.title)||"no title";l.Z.getLogger(this).error("#resolve()","Failed to resolve layer view (layer title: '".concat(s,"', id: '").concat(i,"')"),t)}}))}destroy(){this._updatingHandles=(0,a.SC)(this._updatingHandles)}get fullOpacity(){var t,e,i,s;return(null!==(t=null===(e=this.layer)||void 0===e?void 0:e.opacity)&&void 0!==t?t:1)*(null!==(i=null===(s=this.parent)||void 0===s?void 0:s.fullOpacity)&&void 0!==i?i:1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){var t;return!this.suspended&&!0===(null===(t=this.layer)||void 0===t?void 0:t.legendEnabled)}get updating(){var t;return!((null===(t=this._updatingHandles)||void 0===t||!t.updating)&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){var t;return!0===(null===(t=this.layer)||void 0===t?void 0:t.visible)}set visible(t){this._overrideIfSome("visible",t)}canResume(){var t,e,i;return this.visible&&(null===(t=this.layer)||void 0===t?void 0:t.loaded)&&!(null!==(e=this.parent)&&void 0!==e&&e.suspended)&&(null===(i=this.view)||void 0===i?void 0:i.ready)||!1}getSuspendInfo(){var t,e;const i=null!==(t=this.parent)&&void 0!==t&&t.suspended?this.parent.suspendInfo:{};return null!==(e=this.view)&&void 0!==e&&e.ready||(i.viewNotReady=!0),this.layer&&this.layer.loaded||(i.layerNotLoaded=!0),this.visible||(i.layerInvisible=!0),i}isUpdating(){return!1}};(0,s._)([(0,u.Cb)()],c.prototype,"fullOpacity",null),(0,s._)([(0,u.Cb)()],c.prototype,"layer",void 0),(0,s._)([(0,u.Cb)()],c.prototype,"parent",void 0),(0,s._)([(0,u.Cb)({readOnly:!0})],c.prototype,"suspended",null),(0,s._)([(0,u.Cb)({readOnly:!0})],c.prototype,"suspendInfo",null),(0,s._)([(0,u.Cb)({readOnly:!0})],c.prototype,"legendEnabled",null),(0,s._)([(0,u.Cb)({type:Boolean,readOnly:!0})],c.prototype,"updating",null),(0,s._)([(0,u.Cb)({readOnly:!0})],c.prototype,"updatingProgress",null),(0,s._)([(0,u.Cb)()],c.prototype,"visible",null),(0,s._)([(0,u.Cb)()],c.prototype,"view",void 0),c=(0,s._)([(0,d.j)("esri.views.layers.LayerView")],c);const v=c}}]);
//# sourceMappingURL=6704.c3ae2593.chunk.js.map