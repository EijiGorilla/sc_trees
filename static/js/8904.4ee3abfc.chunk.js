"use strict";(self.webpackChunksc_trees=self.webpackChunksc_trees||[]).push([[8904],{58904:(e,t,i)=>{i.d(t,{default:()=>q});var s=i(27366),l=i(40281),n=i(44927),o=i(79056),a=i(32718),r=i(49861),d=(i(93169),i(84936),i(69912)),c=i(91953),u=i(33565),h=i(9309),p=i(8905),m=i(7021),b=(i(80975),i(80532)),_=i(28907),g=i(67005);const y="esri-table-list",I=`${y}__item`,v={base:y,actionMenu:`${y}__action-menu`,actionGroup:`${y}__action-group`,filterNoResults:`${y}__filter-no-results`,item:I,itemContent:`${I}-content`,itemContentBottom:`${I}-content-bottom`,itemMessage:`${I}-message`,itemActionIcon:`${I}-action-icon`,itemActionImage:`${I}-action-image`,itemTemporaryIcon:`${I}-temporary-icon`,publishing:`${y}__publishing`,statusIndicator:`${y}__status-indicator`};var C=i(7138),f=i(94172),w=i(89125),E=i(693),F=i(57976),M=i(6945),L=i(5027),A=i(9676),P=i(53963);let k=class extends((0,o.IG)(u.Z)){constructor(e,t){super(e,t),this.className=null,this.content=null,this.flowEnabled=!1,this.image=null,this.listItem=null,this.open=!1,this.visible=!0}get disabled(){return!(this.content&&this.listItem)}set disabled(e){this._overrideIfSome("disabled",e)}get icon(){const{image:e}=this,t=this._getFirstWidget();return this._get("icon")??(!e&&t?t.icon:null)}set icon(e){this._overrideIfSome("icon",e)}get title(){return this._get("title")||(this._getFirstWidget()?.label??"")}set title(e){this._override("title",e)}render(){return(0,g.u)("div",{class:"esri-list-item-panel"},this._renderContents())}_renderContent(e){const{disabled:t,open:i}=this;return e&&!t&&i?"string"==typeof e?(0,g.u)("div",{innerHTML:e,key:e}):(0,P.Qd)(e)?(0,g.u)("div",{key:"content-widget"},e.render()):e instanceof HTMLElement?(0,g.u)("div",{afterCreate:this._attachToNode,bind:e,key:"content-element"}):null:null}_renderContents(){const{content:e,open:t}=this;return t?Array.isArray(e)?e.map((e=>this._renderContent(e))):this._renderContent(e):null}_attachToNode(e){e.appendChild(this)}_getWidget(e){return(0,P.Qd)(e)?e:null}_getFirstWidget(){const{content:e}=this;return Array.isArray(e)?e.map((e=>this._getWidget(e))).find((e=>e)):this._getWidget(e)}};(0,s._)([(0,r.Cb)()],k.prototype,"className",void 0),(0,s._)([(0,r.Cb)()],k.prototype,"content",void 0),(0,s._)([(0,r.Cb)()],k.prototype,"disabled",null),(0,s._)([(0,r.Cb)()],k.prototype,"flowEnabled",void 0),(0,s._)([(0,r.Cb)()],k.prototype,"icon",null),(0,s._)([(0,r.Cb)()],k.prototype,"image",void 0),(0,s._)([(0,r.Cb)()],k.prototype,"listItem",void 0),(0,s._)([(0,r.Cb)()],k.prototype,"open",void 0),(0,s._)([(0,r.Cb)()],k.prototype,"title",null),(0,s._)([(0,r.Cb)()],k.prototype,"visible",void 0),k=(0,s._)([(0,d.j)("esri.widgets.TableList.ListItemPanel")],k);const S=k;var T;const D=l.Z.ofType({key:"type",defaultKeyValue:"button",base:F.Z,typeMap:{button:M.Z,toggle:A.Z,slider:L.Z}}),N=l.Z.ofType(D);let x=T=class extends((0,o.IG)(C.Z)){constructor(e){super(e),this.actionsSections=new N,this.actionsOpen=!1,this.checkPublishStatusEnabled=!1,this.hidden=!1,this.layer=null,this.listItemCreatedFunction=null,this.panel=null,this.sortable=!0}initialize(){if(this.addHandles([(0,f.YP)((()=>this.panel),(e=>this._setListItemOnPanel(e)),f.nn)]),"function"==typeof this.listItemCreatedFunction){const e={item:this};this.listItemCreatedFunction.call(null,e)}}destroy(){this.panel?.destroy()}get error(){return this.layer?.loadError}castPanel(e){return this.panel?.open&&!e.hasOwnProperty("open")&&(e.open=!0),e?new S(e):null}get publishing(){const{layer:e,checkPublishStatusEnabled:t}=this;return(t&&e&&"publishingInfo"in e&&"publishing"===e.publishingInfo?.status)??!1}get title(){const e=(0,E.U2)(this,"layer.layer");return(!e||e&&(0,E.U2)(this,"layer.layer.loaded")?this.layer?.title:null)??""}set title(e){this._overrideIfSome("title",e)}clone(){return new T({actionsSections:this.actionsSections.clone(),actionsOpen:this.actionsOpen,checkPublishStatusEnabled:this.checkPublishStatusEnabled,hidden:this.hidden,layer:this.layer,listItemCreatedFunction:this.listItemCreatedFunction,panel:this.panel,sortable:this.sortable,title:this.title})}_setListItemOnPanel(e){e&&(e.listItem=this)}};(0,s._)([(0,r.Cb)({type:N})],x.prototype,"actionsSections",void 0),(0,s._)([(0,r.Cb)()],x.prototype,"actionsOpen",void 0),(0,s._)([(0,r.Cb)()],x.prototype,"checkPublishStatusEnabled",void 0),(0,s._)([(0,r.Cb)({readOnly:!0})],x.prototype,"error",null),(0,s._)([(0,r.Cb)()],x.prototype,"hidden",void 0),(0,s._)([(0,r.Cb)()],x.prototype,"layer",void 0),(0,s._)([(0,r.Cb)()],x.prototype,"listItemCreatedFunction",void 0),(0,s._)([(0,r.Cb)({type:S})],x.prototype,"panel",void 0),(0,s._)([(0,w.p)("panel")],x.prototype,"castPanel",null),(0,s._)([(0,r.Cb)({readOnly:!0})],x.prototype,"publishing",null),(0,s._)([(0,r.Cb)()],x.prototype,"sortable",void 0),(0,s._)([(0,r.Cb)()],x.prototype,"title",null),x=T=(0,s._)([(0,d.j)("esri.widgets.TableList.ListItem")],x);const O=x;var B=i(91505);const $="map",Z="layer-list-mode",R=l.Z.ofType(O);let G=class extends B.Z.EventedAccessor{constructor(e){super(e),this.checkPublishStatusEnabled=!1,this.listItemCreatedFunction=null,this.listModeDisabled=!1,this.tableItems=new R,this.map=null}initialize(){this.addHandles([(0,f.YP)((()=>[this.tables,this.map?.allTables.toArray()]),(()=>this._compileList()),f.nn),(0,f.YP)((()=>[this.map?.loaded,this.listItemCreatedFunction,this.checkPublishStatusEnabled,this.listModeDisabled]),(()=>this._recompileList()))],$)}destroy(){this._removeAllItems(),this.map=null,this.tables=null}get tables(){return this.map?.allTables}set tables(e){this._overrideIfSome("tables",e)}get state(){const{map:e,tables:t}=this;if(!e)return t?"ready":"disabled";const i=e?.loadStatus;return"string"==typeof i?"loaded"===i?"ready":"loading"===i?"loading":"disabled":"ready"}get totalItems(){return this.tableItems.length}triggerAction(e,t){e&&!e.disabled&&this.emit("trigger-action",{action:e,item:t})}_removeAllItems(){this.tableItems.destroyAll()}_getViewableTables(e){return e?this.listModeDisabled?e:e.filter((e=>"hide"!==(0,h.aV)(e))):void 0}_watchTablesListMode(e){this.removeHandles(Z),e&&!this.listModeDisabled&&this.addHandles((0,f.YP)((()=>e.filter((e=>"listMode"in e)).map((e=>e.listMode)).toArray()),(()=>this._compileList())),Z)}_compileList(){const{tables:e}=this;this._watchTablesListMode(e);const t=this._getViewableTables(e);t?.length?(this._createNewItems(t),this._removeItems(t),this._sortItems(t)):this._removeAllItems()}_createNewItems(e){const{tableItems:t,listItemCreatedFunction:i,checkPublishStatusEnabled:s}=this;e.forEach((e=>{t.some((t=>t.layer===e))||t.add(new O({checkPublishStatusEnabled:s,layer:e,listItemCreatedFunction:i}))}))}_removeItems(e){const{tableItems:t}=this;t.forEach((i=>{if(!i)return;const s=e?.find((e=>i.layer===e));s||(t.remove(i),i.destroy())}))}_sortItems(e){const{tableItems:t}=this;t.sort(((t,i)=>{const s=e.indexOf(t.layer),l=e.indexOf(i.layer);return s>l?-1:s<l?1:0}))}_recompileList(){this._removeAllItems(),this._compileList()}};(0,s._)([(0,r.Cb)()],G.prototype,"checkPublishStatusEnabled",void 0),(0,s._)([(0,r.Cb)()],G.prototype,"listItemCreatedFunction",void 0),(0,s._)([(0,r.Cb)({nonNullable:!0})],G.prototype,"listModeDisabled",void 0),(0,s._)([(0,r.Cb)({type:R,readOnly:!0})],G.prototype,"tableItems",void 0),(0,s._)([(0,r.Cb)()],G.prototype,"tables",null),(0,s._)([(0,r.Cb)()],G.prototype,"map",void 0),(0,s._)([(0,r.Cb)({readOnly:!0})],G.prototype,"state",null),(0,s._)([(0,r.Cb)()],G.prototype,"totalItems",null),G=(0,s._)([(0,d.j)("esri.widgets.TableList.TableListViewModel")],G);const H=G;let U=class extends C.Z{constructor(){super(...arguments),this.closeButton=!1,this.collapseButton=!1,this.errors=!1,this.filter=!1,this.flow=!0,this.heading=!1,this.statusIndicators=!0,this.temporaryTableIndicators=!1}};(0,s._)([(0,r.Cb)({type:Boolean,nonNullable:!0})],U.prototype,"closeButton",void 0),(0,s._)([(0,r.Cb)({type:Boolean,nonNullable:!0})],U.prototype,"collapseButton",void 0),(0,s._)([(0,r.Cb)({type:Boolean,nonNullable:!0})],U.prototype,"errors",void 0),(0,s._)([(0,r.Cb)({type:Boolean,nonNullable:!0})],U.prototype,"filter",void 0),(0,s._)([(0,r.Cb)({type:Boolean,nonNullable:!0})],U.prototype,"flow",void 0),(0,s._)([(0,r.Cb)({type:Boolean,nonNullable:!0})],U.prototype,"heading",void 0),(0,s._)([(0,r.Cb)({type:Boolean,nonNullable:!0})],U.prototype,"statusIndicators",void 0),(0,s._)([(0,r.Cb)({type:Boolean,nonNullable:!0})],U.prototype,"temporaryTableIndicators",void 0),U=(0,s._)([(0,d.j)("esri.widgets.TableList.TableListVisibleElements")],U);const z=U;function V(e){return e["data-item"]}const W=l.Z.ofType(O);let j=class extends((0,o.IG)(u.Z)){constructor(e,t){super(e,t),this._focusRootFlowItem=!1,this._focusPanelFlowItem=!1,this._lastDragDetail=null,this._selectedDragItemLayerUid=null,this._rootGroupUid=`table-${this.uid}`,this.collapsed=!1,this.dragEnabled=!1,this.filterPlaceholder="",this.filterText="",this.headingLevel=2,this.listItemCanGiveFunction=null,this.listItemCanReceiveFunction=null,this.messages=null,this.messagesCommon=null,this.minDragEnabledItems=h.MZ,this.minFilterItems=h.Kp,this.selectedItems=new W,this.selectionMode="none",this.viewModel=new H,this.visibleElements=new z,this._canMove=(e,t)=>{let{dragEl:i,fromEl:s,toEl:l}=e;const n="pull"===t?this.listItemCanGiveFunction:this.listItemCanReceiveFunction,o=V(i);if(!o?.sortable)return!1;const a=V(s),r=(0,h.Gr)(s),d=V(l),c=(0,h.Gr)(l),u=!!r&&!!c&&r===c,p={selected:o,from:a,to:d},m=s.group,b=l.group;return m&&b&&"function"==typeof n?n.call(null,p):u},this._onCalciteListOrderChange=e=>{const{_lastDragDetail:t}=this,{toEl:i,fromEl:s,dragEl:l,newIndex:n}=e;if(!s||!i||t?.newIndex===n&&t?.dragEl===l&&t?.toEl===i&&t?.fromEl===s)return;this._lastDragDetail=e;const o=Array.from(s.children).filter((e=>e?.matches("calcite-list-item"))).map((e=>e.value));!function(e,t){e?.sort(((e,i)=>{const s=t.indexOf(e.uid),l=t.indexOf(i.uid);return s>l?-1:s<l?1:0}))}(this.map?.tables,o)}}loadDependencies(){return(0,p.h)({action:()=>Promise.resolve().then(i.bind(i,6814)),"action-group":()=>i.e(405).then(i.bind(i,70405)),"action-menu":()=>i.e(4745).then(i.bind(i,24745)),button:()=>i.e(2275).then(i.bind(i,32275)),flow:()=>i.e(3049).then(i.bind(i,53049)),"flow-item":()=>i.e(8926).then(i.bind(i,48926)),icon:()=>i.e(7474).then(i.bind(i,87474)),list:()=>Promise.resolve().then(i.bind(i,36365)),"list-item":()=>Promise.resolve().then(i.bind(i,7205)),notice:()=>i.e(5669).then(i.bind(i,15669))})}get _dragEnabled(){return this.viewModel.totalItems>=this.minDragEnabledItems&&this.dragEnabled}get _filterEnabled(){return this.viewModel.totalItems>=this.minFilterItems&&this.visibleElements.filter}get icon(){return"table"}set icon(e){this._overrideIfSome("icon",e)}get label(){return this.messages?.widgetLabel??""}set label(e){this._overrideIfSome("label",e)}get listItemCreatedFunction(){return this.viewModel.listItemCreatedFunction}set listItemCreatedFunction(e){this.viewModel.listItemCreatedFunction=e}get map(){return this.viewModel.map}set map(e){this.viewModel.map=e}get multipleSelectionEnabled(){return(0,n.Mr)(a.Z.getLogger(this),"multipleSelectionEnabled",{replacement:"selectionMode",version:"4.29",warnOnce:!0}),"multiple"===this.selectionMode}set multipleSelectionEnabled(e){(0,n.Mr)(a.Z.getLogger(this),"multipleSelectionEnabled",{replacement:"selectionMode",version:"4.29",warnOnce:!0}),this.selectionMode=e?"multiple":this.selectionEnabled?"single":"none"}get selectionEnabled(){return(0,n.Mr)(a.Z.getLogger(this),"selectionEnabled",{replacement:"selectionMode, dragEnabled",version:"4.29",warnOnce:!0}),"none"!==this.selectionMode&&this.dragEnabled}set selectionEnabled(e){(0,n.Mr)(a.Z.getLogger(this),"selectionEnabled",{replacement:"selectionMode, dragEnabled",version:"4.29",warnOnce:!0}),this.dragEnabled=e,this.selectionMode=e?this.multipleSelectionEnabled?"multiple":"single":"none"}get tableItems(){return this.viewModel.tableItems}get tables(){return this.viewModel.tables}set tables(e){this.viewModel.tables=e}triggerAction(e,t){return this.viewModel.triggerAction(e,t)}render(){const e=this.viewModel?.state,t={[m.z.hidden]:"loading"===e,[m.z.disabled]:"disabled"===e},i=this.tableItems?.filter((e=>!e.hidden&&(this.visibleElements.errors||!e.error)));return(0,g.u)("div",{class:this.classes(v.base,m.z.widget,m.z.panel,t)},i?.length?this._renderItems(i):this._renderNoItems())}_renderNoItemsMessage(){return(0,g.u)("div",{slot:"message"},this.messages.noItemsToDisplay)}_renderNoItems(){return(0,g.u)("div",{class:v.itemMessage,key:"esri-layer-list__no-items"},(0,g.u)("calcite-notice",{icon:"information",kind:"info",open:!0,width:"full"},this._renderNoItemsMessage()))}_renderPanelFlowItems(e){return e?.toArray().filter((e=>{let{panel:t}=e;return t?.open&&!t.disabled&&t.flowEnabled})).map((e=>{let{title:t,panel:i}=e;const s=()=>this._handlePanelFlowItemBack(i);return(0,g.u)("calcite-flow-item",{afterCreate:this._focusPanelFlowItemNode,afterUpdate:this._focusPanelFlowItemNode,bind:this,description:t,heading:i.title,headingLevel:this.headingLevel,key:`flow-panel-${i.uid}`,onCalciteFlowItemBack:e=>{e.preventDefault(),s()}},i.render(),(0,g.u)("calcite-button",{appearance:"transparent",onclick:s,slot:"footer-actions",width:"full"},this.messagesCommon.back))}))}_handlePanelFlowItemBack(e){e.open=!1,this._focusRootFlowItem=!0}_focusRootFlowItemNode(e){this._focusRootFlowItem&&(this._focusRootFlowItem=!1,requestAnimationFrame((()=>e?.setFocus())))}_focusPanelFlowItemNode(e){this._focusPanelFlowItem&&(this._focusPanelFlowItem=!1,requestAnimationFrame((()=>e?.setFocus())))}_renderItems(e){const{visible:t,collapsed:i,visibleElements:{closeButton:s,collapseButton:l,heading:n,flow:o},_dragEnabled:a,_filterEnabled:r,_rootGroupUid:d,selectionMode:c,messages:u,filterPlaceholder:h,filterText:p}=this,m=[(0,g.u)("calcite-flow-item",{afterCreate:this._focusRootFlowItemNode,afterUpdate:this._focusRootFlowItemNode,bind:this,closable:s,closed:!t,collapsed:i,collapsible:l,heading:n?u.widgetLabel:void 0,headingLevel:this.headingLevel,key:"root-flow-item",onCalciteFlowItemClose:()=>this.visible=!1},(0,g.u)("calcite-list",{canPull:e=>this._canMove(e,"pull"),canPut:e=>this._canMove(e,"put"),"data-layer-type":d,dragEnabled:a,filterEnabled:r,filterPlaceholder:h,filterText:r?p:"",group:d,key:"root-list",label:u.widgetLabel,selectionAppearance:"border",selectionMode:c,onCalciteListChange:e=>this._handleCalciteListChange(e),onCalciteListDragEnd:e=>this._handleCalciteListDragEnd(e.detail),onCalciteListFilter:e=>this.filterText=e.target?.filterText??"",onCalciteListOrderChange:e=>this._onCalciteListOrderChange(e.detail)},e?.toArray().map((e=>this._renderItem(e))),e?.length&&r?(0,g.u)("div",{class:v.filterNoResults,slot:"filter-no-results"},(0,g.u)("calcite-notice",{kind:"info",open:!0,width:"full"},this._renderNoItemsMessage())):null)),this._renderPanelFlowItems(e)];return t?o?(0,g.u)("calcite-flow",{key:"root-flow"},m):m:null}_handleCalciteListDragEnd(e){const{fromEl:t,dragEl:i,oldIndex:s}=e;t.insertBefore(i,t.children[s])}_renderItemMessage(e){return e.error?(0,g.u)("div",{class:v.itemMessage,key:"esri-layer-list__error",slot:"content-bottom"},(0,g.u)("calcite-notice",{icon:"exclamation-mark-triangle",kind:"warning",open:!0,scale:"s",width:"full"},(0,g.u)("div",{slot:"message"},this.messages.tableError))):null}_renderItem(e){const{_selectedDragItemLayerUid:t,selectionMode:i,selectedItems:s,messages:l}=this,n=e.title||l.untitledTable,o=this._filterActions(e.actionsSections),a=this._countActions(o);return(0,g.u)("calcite-list-item",{afterCreate:t=>this._focusSelectedDragEl(t,e),afterUpdate:t=>this._focusSelectedDragEl(t,e),class:v.item,"data-item":e,"data-layer-id":e.layer.id,dragDisabled:!e.sortable,dragSelected:e.layer.uid===t,id:e.layer?.uid,key:`list-item-${e.layer.uid}`,label:n,metadata:{title:n},selected:"none"!==i&&s.includes(e),title:n,value:e.layer?.uid,onCalciteListItemDragHandleChange:t=>this._handleCalciteListItemDragHandleChange(t,e)},(0,g.u)("div",{class:v.itemContent,slot:"content"},n),this._renderItemStatus(e),this._renderItemTemporaryIcon(e),this._renderItemMessage(e),this._renderPanel(e.panel),this._renderPanelAction(e.panel),a>1?this._renderActionsSections(e,o):1===a?this._renderAction({item:e,action:this._getSingleAction(o),textEnabled:!1}):null)}_renderItemTemporaryIcon(e){return this.visibleElements.temporaryTableIndicators&&!e.layer.persistenceEnabled?(0,g.u)("calcite-icon",{class:v.itemTemporaryIcon,icon:"temporary",key:"temporary-icon",scale:"s",slot:"actions-start",title:this.messages.temporary}):null}_renderItemStatus(e){const{visibleElements:t}=this;if(!t.statusIndicators)return null;const{publishing:i}=e;return(0,g.u)("calcite-icon",{class:this.classes({[v.statusIndicator]:!0,[v.publishing]:i}),icon:"stop-square",key:"layer-item-status",scale:"s",slot:"actions-end"})}_renderPanel(e){return!e?.open||e.disabled||e.flowEnabled?null:(0,g.u)("div",{class:v.itemContentBottom,key:`content-panel-${e.uid}`,slot:"content-bottom"},e.render())}_renderPanelAction(e){if(!e?.visible)return null;const{open:t,title:i,disabled:s}=e;return(0,g.u)("calcite-action",{active:t,appearance:"transparent",disabled:s,icon:(0,c.mR)(e),key:`action-${e.uid}`,onclick:()=>this._togglePanel(e),scale:"s",slot:"actions-end",text:i??"",title:i??void 0},this._renderFallbackIcon(e))}_renderActionsSections(e,t){const i=this.messagesCommon.options;return(0,g.u)("calcite-action-menu",{appearance:"transparent",class:v.actionMenu,key:"item-action-menu",label:this.messagesCommon.menu,open:e.actionsOpen,overlayPositioning:"fixed",placement:"bottom-end",scale:"s",slot:"actions-end",onCalciteActionMenuOpen:t=>e.actionsOpen=t.target.open},(0,g.u)("calcite-action",{appearance:"transparent",icon:"ellipsis",scale:"s",slot:"trigger",text:i,title:i}),t.toArray().map(((t,i)=>this._renderActionSection(e,t,i))))}_renderActionSection(e,t,i){return(0,g.u)("calcite-action-group",{class:v.actionGroup,key:`action-section-${i}`},t.toArray().map((t=>this._renderAction({item:e,action:t,textEnabled:!0}))))}_renderFallbackIcon(e){const{className:t,icon:i}=e;if(i)return null;const s="image"in e?e.image:void 0,l={[v.itemActionIcon]:!!t,[v.itemActionImage]:!!s};return t&&(l[t]=!0),s||t?(0,g.u)("span",{"aria-hidden":"true",class:this.classes(v.itemActionIcon,l),key:"icon",styles:(0,c.uS)(s)}):null}_renderAction(e){const{item:t,action:i,textEnabled:s}=e;if(!i)return null;const{active:l,disabled:n,title:o,type:a,indicator:r}=i;return(0,g.u)("calcite-action",{active:"toggle"===a&&i.value,appearance:"transparent",disabled:n,icon:(0,c.mR)(i),indicator:r,key:`action-${i.uid}`,loading:l,onclick:()=>this._triggerAction(t,i),scale:"s",slot:s?void 0:"actions-end",text:o??"",textEnabled:s,title:o??void 0},this._renderFallbackIcon(i))}_filterActions(e){return e.map((e=>e.filter((e=>e.visible))))}_getSingleAction(e){return e.reduce((e=>e)).find((e=>e&&("button"===e.type||"toggle"===e.type)))}_countActions(e){return e.reduce(((e,t)=>e+t.length),0)}_focusSelectedDragEl(e,t){this._selectedDragItemLayerUid===t.layer.uid&&requestAnimationFrame((()=>e?.setFocus()))}_handleCalciteListItemDragHandleChange(e,t){e.stopPropagation();const i=e.target.dragSelected;this._selectedDragItemLayerUid=i?t.layer.uid:null}_handleCalciteListChange(e){const{selectionMode:t,selectedItems:i}=this;if("none"===t)return;const s=e.target.selectedItems.map((e=>V(e))).filter(Boolean);i.removeAll(),i.addMany(s)}_togglePanel(e){e.open=!e.open,e.open&&(this._focusPanelFlowItem=!0)}_triggerAction(e,t){t&&e&&("toggle"===t.type&&(t.value=!t.value),this.triggerAction(t,e))}};(0,s._)([(0,r.Cb)()],j.prototype,"_focusRootFlowItem",void 0),(0,s._)([(0,r.Cb)()],j.prototype,"_focusPanelFlowItem",void 0),(0,s._)([(0,r.Cb)()],j.prototype,"_dragEnabled",null),(0,s._)([(0,r.Cb)()],j.prototype,"_filterEnabled",null),(0,s._)([(0,r.Cb)()],j.prototype,"collapsed",void 0),(0,s._)([(0,r.Cb)()],j.prototype,"dragEnabled",void 0),(0,s._)([(0,r.Cb)()],j.prototype,"filterPlaceholder",void 0),(0,s._)([(0,r.Cb)()],j.prototype,"filterText",void 0),(0,s._)([(0,r.Cb)()],j.prototype,"headingLevel",void 0),(0,s._)([(0,r.Cb)()],j.prototype,"icon",null),(0,s._)([(0,r.Cb)()],j.prototype,"label",null),(0,s._)([(0,r.Cb)()],j.prototype,"listItemCanGiveFunction",void 0),(0,s._)([(0,r.Cb)()],j.prototype,"listItemCanReceiveFunction",void 0),(0,s._)([(0,r.Cb)()],j.prototype,"listItemCreatedFunction",null),(0,s._)([(0,r.Cb)()],j.prototype,"map",null),(0,s._)([(0,r.Cb)(),(0,b.H)("esri/widgets/TableList/t9n/TableList")],j.prototype,"messages",void 0),(0,s._)([(0,r.Cb)(),(0,b.H)("esri/t9n/common")],j.prototype,"messagesCommon",void 0),(0,s._)([(0,r.Cb)()],j.prototype,"minDragEnabledItems",void 0),(0,s._)([(0,r.Cb)()],j.prototype,"minFilterItems",void 0),(0,s._)([(0,r.Cb)()],j.prototype,"multipleSelectionEnabled",null),(0,s._)([(0,r.Cb)()],j.prototype,"selectionEnabled",null),(0,s._)([(0,r.Cb)()],j.prototype,"selectedItems",void 0),(0,s._)([(0,r.Cb)()],j.prototype,"selectionMode",void 0),(0,s._)([(0,r.Cb)({readOnly:!0})],j.prototype,"tableItems",null),(0,s._)([(0,r.Cb)()],j.prototype,"tables",null),(0,s._)([(0,_.s)("trigger-action"),(0,r.Cb)({type:H})],j.prototype,"viewModel",void 0),(0,s._)([(0,r.Cb)({type:z,nonNullable:!0})],j.prototype,"visibleElements",void 0),j=(0,s._)([(0,d.j)("esri.widgets.TableList")],j);const q=j}}]);
//# sourceMappingURL=8904.4ee3abfc.chunk.js.map