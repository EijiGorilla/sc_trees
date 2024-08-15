"use strict";(self.webpackChunksc_trees=self.webpackChunksc_trees||[]).push([[8202],{78202:(e,t,i)=>{i.r(t),i.d(t,{default:()=>g});var s=i(27366),r=i(40281),a=i(32718),n=(i(93169),i(84936),i(10064),i(69912)),o=i(88109),l=i(42537),p=i(66978),d=i(76672),h=i(49861);const u=Symbol(),c=e=>{let t=class extends e{constructor(){super(...arguments),this.layerViews=new r.Z,this._debouncedUpdate=(0,p.Ds)((async()=>{const{layer:e,parent:t}=this,i=t?.footprintLayerView;let s=[];const r=this._createQuery();if(r&&i){const{features:t}=await i.queryFeatures(r);this.suspended||(s=t.map((t=>e.acquireLayer(t))))}this.removeHandles(u),this.addHandles(s,u)}))}get creatingLayerViews(){return this.view?.layerViewManager.isCreatingLayerViewsForLayer(this.layer)??!1}isUpdating(){return this.creatingLayerViews||this.layer.updating||this.layerViews.some((e=>e.updating))}enableLayerUpdates(){return(0,l.AL)([this._updatingHandles.addWhen((()=>!1===this.parent?.footprintLayerView?.dataUpdating),(()=>this.updateLayers())),this._updatingHandles.add((()=>[this.layer.maximumVisibleSublayers,this.layer.parent?.orderBy,this.parent?.footprintLayerView?.filter,this.parent?.footprintLayerView?.timeExtent,this.suspended]),(()=>this.updateLayers())),(0,l.kB)((()=>this.removeHandles(u)))])}updateLayers(){this.suspended?this.removeHandles(u):this._updatingHandles.addPromise((0,p.R8)(this._debouncedUpdate()).catch((e=>{a.Z.getLogger(this).error(e)})))}_createQuery(){const e=this.parent?.footprintLayerView,t=this.layer?.parent;if(!e||!t||t.destroyed)return null;const{layer:{maximumVisibleSublayers:i},view:{scale:s}}=this;if(!i)return null;const{itemTypeField:r,itemSourceField:a,itemNameField:n,minScaleField:o,maxScaleField:l,objectIdField:p,orderBy:h}=t,u=(0,d._)(`${o} IS NULL OR ${s} <= ${o} OR ${o} = 0`,`${l} IS NULL OR ${s} >= ${l}`),c=h?.find((e=>e.field&&!e.valueExpression)),y=e.createQuery();if(y.returnGeometry=!1,y.num=i,y.outFields=[p,a,n],y.where=(0,d._)(y.where,u),null!=this.unsupportedItemTypes){const e=`${r} NOT IN (${this.unsupportedItemTypes.map((e=>`'${e}'`))})`;y.where=(0,d._)(y.where,e)}return c?.field&&(y.orderByFields=[`${c.field} ${"descending"===c.order?"DESC":"ASC"}`],y.outFields.push(c.field)),y}};return(0,s._)([(0,h.Cb)({readOnly:!0})],t.prototype,"creatingLayerViews",null),(0,s._)([(0,h.Cb)()],t.prototype,"layer",void 0),(0,s._)([(0,h.Cb)()],t.prototype,"layerViews",void 0),(0,s._)([(0,h.Cb)({readOnly:!0})],t.prototype,"unsupportedItemTypes",void 0),(0,s._)([(0,h.Cb)()],t.prototype,"parent",void 0),(0,s._)([(0,h.Cb)({readOnly:!0})],t.prototype,"isUpdating",null),t=(0,s._)([(0,n.j)("esri.views.layers.CatalogDynamicGroupLayerView")],t),t};var y=i(67581);let v=class extends(c((0,o.y)(y.Z))){constructor(){super(...arguments),this.unsupportedItemTypes=["Scene Service"],this.layerViews=new r.Z}attach(){this.addAttachHandles([this.layerViews.on("after-changes",(()=>this._updateStageChildren())),this.enableLayerUpdates()])}detach(){this.container.removeAllChildren()}update(e){this.updateLayers()}viewChange(){}moveEnd(){this.requestUpdate()}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach(((e,t)=>this.container.addChildAt(e.container,t)))}};v=(0,s._)([(0,n.j)("esri.views.2d.layers.CatalogDynamicGroupLayerView2D")],v);const g=v},88109:(e,t,i)=>{i.d(t,{y:()=>_});var s,r=i(27366),a=i(40281),n=i(60354),o=i(10064),l=i(94172),p=i(49861),d=(i(93169),i(32718),i(84936),i(69912)),h=i(33624),u=i(64634),c=i(33109);let y=s=class extends c.Z{constructor(e){super(e),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new s({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}commitVersionProperties(){this.commitProperty("left"),this.commitProperty("right"),this.commitProperty("top"),this.commitProperty("bottom")}};(0,r._)([(0,p.Cb)({type:[Number,String],json:{write:!0}})],y.prototype,"left",void 0),(0,r._)([(0,p.Cb)({type:[Number,String],json:{write:!0}})],y.prototype,"right",void 0),(0,r._)([(0,p.Cb)({type:[Number,String],json:{write:!0}})],y.prototype,"top",void 0),(0,r._)([(0,p.Cb)({type:[Number,String],json:{write:!0}})],y.prototype,"bottom",void 0),y=s=(0,r._)([(0,d.j)("esri.views.layers.support.ClipRect")],y);const v=y;var g=i(20921);let b=class extends c.Z{constructor(e){super(e),this.type="path",this.path=[]}commitVersionProperties(){this.commitProperty("path")}};(0,r._)([(0,p.Cb)({type:[[[Number]]],json:{write:!0}})],b.prototype,"path",void 0),b=(0,r._)([(0,d.j)("esri.views.layers.support.Path")],b);const m=b;var w=i(69787);const f=a.Z.ofType({key:"type",base:null,typeMap:{rect:v,path:m,geometry:g.Z}}),_=e=>{let t=class extends e{constructor(){super(...arguments),this.attached=!1,this.clips=new f,this.highlightOptions=null,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1,this._visibleAtCurrentScale=!0}initialize(){const e=this.view?.spatialReferenceLocked??!0,t=this.view?.spatialReference;t&&e&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new o.Z("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new h.W),this.container.fadeTransitionEnabled=!0,this.container.visible=!1,this.container.endTransitions(),this.addHandles([(0,l.YP)((()=>this.suspended),(e=>{this.container&&(this.container.visible=!e)}),l.tX),(0,l.YP)((()=>this.updateSuspended),(e=>{this.view&&!e&&this.updateRequested&&this.view.requestUpdate()}),l.tX),(0,l.YP)((()=>this.layer?.opacity??1),(e=>{this.container&&(this.container.opacity=e)}),l.tX),(0,l.YP)((()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal"),(e=>{this.container&&(this.container.blendMode=e)}),l.tX),(0,l.YP)((()=>this.layer&&"effect"in this.layer?this.layer.effect:null),(e=>{this.container&&(this.container.effect=e)}),l.tX),(0,l.YP)((()=>this.highlightOptions),(e=>this.container.highlightOptions=e),l.tX),(0,l.on)((()=>this.clips),"change",(()=>{this.container&&(this.container.clips=this.clips)}),l.tX),(0,l.YP)((()=>({scale:this.view?.scale,scaleRange:this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null})),(e=>{let{scale:t,scaleRange:i}=e;const s=(0,w.GB)(i,t);s!==this._visibleAtCurrentScale&&(this._visibleAtCurrentScale=s)}),l.tX)],"constructor"),this.view?.whenLayerView?this.view.whenLayerView(this.layer).then((e=>{e===this&&this.processAttach()}),(()=>{})):this.when().then((()=>{this.processAttach()}),(()=>{})))}destroy(){this.processDetach(),this.updateRequested=!1}get spatialReferenceSupported(){const e=this.view?.spatialReference;return null==e||this.supportsSpatialReference(e)}get updating(){return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!!this._updatingHandles?.updating)}get visibleAtCurrentScale(){return this._visibleAtCurrentScale}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.removeHandles("attach"),this.detach(),this.updateRequested=!1)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.updateSuspended||this.view.requestUpdate())}processUpdate(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.updateSuspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}hitTest(e,t){return Promise.resolve(null)}supportsSpatialReference(e){return!0}canResume(){return!!this.spatialReferenceSupported&&!!super.canResume()&&this.visibleAtCurrentScale}getSuspendInfo(){const e=super.getSuspendInfo(),t=!this.spatialReferenceSupported;return t&&(e.spatialReferenceNotSupported=t),e}addAttachHandles(e){this.addHandles(e,"attach")}};return(0,r._)([(0,p.Cb)()],t.prototype,"attached",void 0),(0,r._)([(0,p.Cb)({type:f,set(e){const t=(0,n.Z)(e,this._get("clips"),f);this._set("clips",t)}})],t.prototype,"clips",void 0),(0,r._)([(0,p.Cb)()],t.prototype,"container",void 0),(0,r._)([(0,p.Cb)({type:u.Z})],t.prototype,"highlightOptions",void 0),(0,r._)([(0,p.Cb)()],t.prototype,"moving",void 0),(0,r._)([(0,p.Cb)({readOnly:!0})],t.prototype,"spatialReferenceSupported",null),(0,r._)([(0,p.Cb)({readOnly:!0})],t.prototype,"updateParameters",void 0),(0,r._)([(0,p.Cb)()],t.prototype,"updateRequested",void 0),(0,r._)([(0,p.Cb)()],t.prototype,"updating",null),(0,r._)([(0,p.Cb)()],t.prototype,"view",void 0),(0,r._)([(0,p.Cb)()],t.prototype,"_visibleAtCurrentScale",void 0),(0,r._)([(0,p.Cb)({readOnly:!0})],t.prototype,"visibleAtCurrentScale",null),t=(0,r._)([(0,d.j)("esri.views.2d.layers.LayerView2D")],t),t}},67581:(e,t,i)=>{i.d(t,{Z:()=>v});var s=i(27366),r=i(7138),a=i(91505),n=i(79056),o=i(32718),l=i(92026),p=i(67426),d=i(49861),h=(i(93169),i(84936),i(69912)),u=i(46634),c=i(69787);let y=class extends((0,n.IG)((0,p.v)(a.Z.EventedMixin(r.Z)))){constructor(e){super(e),this._updatingHandles=new u.R,this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){const t=this.layer&&this.layer.id||"no id",i=this.layer?.title||"no title";o.Z.getLogger(this).error("#resolve()",`Failed to resolve layer view (layer title: '${i}', id: '${t}')`,e)}}))}destroy(){this._updatingHandles=(0,l.SC)(this._updatingHandles)}get fullOpacity(){return(this.layer?.opacity??1)*(this.parent?.fullOpacity??1)}get suspended(){return this.destroyed||!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer?.legendEnabled}get updating(){return!(!this._updatingHandles?.updating&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get updateSuspended(){return this.suspended}get visible(){return!0===this.layer?.visible}set visible(e){this._overrideIfSome("visible",e)}get visibleAtCurrentScale(){return!0}get visibleAtCurrentTimeExtent(){const e=this.view.timeExtent,t=this.layer?.visibilityTimeExtent;return!e||!t||!e.intersection(t).isEmpty}canResume(){const e=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return this.visible&&this.layer?.loaded&&!this.parent?.suspended&&this.view?.ready&&(0,c.Cy)(e)&&this.visibleAtCurrentScale&&this.visibleAtCurrentTimeExtent||!1}getSuspendInfo(){const e=this.parent?.suspended?this.parent.suspendInfo:{};this.view?.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0);const t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return(0,c.Cy)(t)&&this.visibleAtCurrentScale||(e.outsideScaleRange=!0),this.visibleAtCurrentTimeExtent||(e.outsideVisibilityTimeExtent=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return!1}};(0,s._)([(0,d.Cb)()],y.prototype,"view",void 0),(0,s._)([(0,d.Cb)()],y.prototype,"fullOpacity",null),(0,s._)([(0,d.Cb)()],y.prototype,"layer",void 0),(0,s._)([(0,d.Cb)()],y.prototype,"parent",void 0),(0,s._)([(0,d.Cb)({readOnly:!0})],y.prototype,"suspended",null),(0,s._)([(0,d.Cb)({readOnly:!0})],y.prototype,"suspendInfo",null),(0,s._)([(0,d.Cb)({readOnly:!0})],y.prototype,"legendEnabled",null),(0,s._)([(0,d.Cb)({type:Boolean,readOnly:!0})],y.prototype,"updating",null),(0,s._)([(0,d.Cb)({readOnly:!0})],y.prototype,"updatingProgress",null),(0,s._)([(0,d.Cb)()],y.prototype,"updateSuspended",null),(0,s._)([(0,d.Cb)()],y.prototype,"visible",null),(0,s._)([(0,d.Cb)({readOnly:!0})],y.prototype,"visibleAtCurrentScale",null),(0,s._)([(0,d.Cb)({readOnly:!0})],y.prototype,"visibleAtCurrentTimeExtent",null),y=(0,s._)([(0,h.j)("esri.views.layers.LayerView")],y);const v=y},33109:(e,t,i)=>{i.d(t,{Z:()=>l});var s=i(27366),r=i(46784),a=i(49861),n=(i(93169),i(32718),i(84936),i(69912));let o=class extends r.wq{get version(){return this.commitVersionProperties(),(this._get("version")||0)+1}};(0,s._)([(0,a.Cb)({readOnly:!0})],o.prototype,"version",null),o=(0,s._)([(0,n.j)("esri.views.layers.support.ClipArea")],o);const l=o},20921:(e,t,i)=>{i.d(t,{Z:()=>y});var s,r=i(27366),a=(i(59486),i(49861)),n=(i(93169),i(32718),i(84936),i(69912)),o=i(32238),l=i(77981),p=i(33109),d=i(53866),h=i(80885);const u={base:o.Z,key:"type",typeMap:{extent:d.Z,polygon:h.Z}};let c=s=class extends p.Z{constructor(e){super(e),this.type="geometry",this.geometry=null}clone(){return new s({geometry:this.geometry?.clone()??null})}commitVersionProperties(){this.commitProperty("geometry")}};(0,r._)([(0,a.Cb)({types:u,json:{read:l.im,write:!0}})],c.prototype,"geometry",void 0),c=s=(0,r._)([(0,n.j)("esri.views.layers.support.Geometry")],c);const y=c}}]);
//# sourceMappingURL=8202.40a2bd31.chunk.js.map