/*! For license information please see 9524.64ab305d.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunksc_trees=self.webpackChunksc_trees||[]).push([[9524],{89524:(e,t,n)=>{n.d(t,{P:()=>I,S:()=>O,d:()=>T});var a=n(51554),i=n(92358),o=n(13160),s=n(47242),l=n(72021),c=n(49865),r=n(8703),d=n(46895),h=n(52655),p=n(65138),u=n(57601),g=n(91438),b=n(2654),m=n(69874);const f="action-bar-container",v="container",x="header",C="header-container",S="header-container--border-end",y="heading",k="description",A="header-content",H="header-actions",w="header-actions--end",z="header-actions--start",E="content-wrapper",F="fab-container",M="footer",P="x",B="ellipsis",L="chevron-down",D="chevron-up",O={actionBar:"action-bar",headerActionsStart:"header-actions-start",headerActionsEnd:"header-actions-end",headerMenuActions:"header-menu-actions",headerContent:"header-content",fab:"fab",footer:"footer",footerActions:"footer-actions"},I=(0,a.GH)(class extends a.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calcitePanelClose=(0,a.yM)(this,"calcitePanelClose",6),this.calcitePanelToggle=(0,a.yM)(this,"calcitePanelToggle",6),this.calcitePanelScroll=(0,a.yM)(this,"calcitePanelScroll",6),this.resizeObserver=(0,l.c)("resize",(()=>this.resizeHandler())),this.resizeHandler=()=>{const{panelScrollEl:e}=this;e&&"number"===typeof e.scrollHeight&&"number"===typeof e.offsetHeight&&(e.tabIndex=e.scrollHeight>e.offsetHeight?0:-1)},this.setContainerRef=e=>{this.containerEl=e},this.panelKeyDownHandler=e=>{this.closable&&"Escape"===e.key&&!e.defaultPrevented&&(this.close(),e.preventDefault())},this.close=()=>{this.closed=!0,this.calcitePanelClose.emit()},this.collapse=()=>{this.collapsed=!this.collapsed,this.calcitePanelToggle.emit()},this.panelScrollHandler=()=>{this.calcitePanelScroll.emit()},this.handleHeaderActionsStartSlotChange=e=>{this.hasStartActions=(0,i.e)(e)},this.handleHeaderActionsEndSlotChange=e=>{this.hasEndActions=(0,i.e)(e)},this.handleHeaderMenuActionsSlotChange=e=>{this.hasMenuItems=(0,i.e)(e)},this.handleActionBarSlotChange=e=>{const t=(0,i.s)(e).filter((e=>null===e||void 0===e?void 0:e.matches("calcite-action-bar")));t.forEach((e=>e.layout="horizontal")),this.hasActionBar=!!t.length},this.handleHeaderContentSlotChange=e=>{this.hasHeaderContent=(0,i.e)(e)},this.handleFooterSlotChange=e=>{this.hasFooterContent=(0,i.e)(e)},this.handleFooterActionsSlotChange=e=>{this.hasFooterActions=(0,i.e)(e)},this.handleFabSlotChange=e=>{this.hasFab=(0,i.e)(e)},this.setPanelScrollEl=e=>{var t,n;(this.panelScrollEl=e,null===(t=this.resizeObserver)||void 0===t||t.disconnect(),e)&&(null===(n=this.resizeObserver)||void 0===n||n.observe(e),this.resizeHandler())},this.closed=!1,this.disabled=!1,this.closable=!1,this.collapsed=!1,this.collapseDirection="down",this.collapsible=!1,this.headingLevel=void 0,this.loading=!1,this.heading=void 0,this.description=void 0,this.menuOpen=!1,this.messageOverrides=void 0,this.messages=void 0,this.hasStartActions=!1,this.hasEndActions=!1,this.hasMenuItems=!1,this.hasHeaderContent=!1,this.hasActionBar=!1,this.hasFooterContent=!1,this.hasFooterActions=!1,this.hasFab=!1,this.defaultMessages=void 0,this.effectiveLocale="",this.showHeaderContent=!1}onMessagesChange(){}connectedCallback(){(0,o.c)(this),(0,d.c)(this),(0,h.c)(this)}async componentWillLoad(){(0,s.a)(this),await(0,h.s)(this)}componentDidLoad(){(0,s.s)(this)}componentDidRender(){(0,o.u)(this)}disconnectedCallback(){var e;(0,o.d)(this),(0,d.d)(this),(0,h.d)(this),null===(e=this.resizeObserver)||void 0===e||e.disconnect()}effectiveLocaleChange(){(0,h.u)(this,this.effectiveLocale)}async setFocus(){await(0,s.c)(this),(0,i.f)(this.containerEl)}async scrollContentTo(e){var t;null===(t=this.panelScrollEl)||void 0===t||t.scrollTo(e)}renderHeaderContent(){const{heading:e,headingLevel:t,description:n,hasHeaderContent:i}=this,o=e?(0,a.h)(r.H,{class:y,level:t},e):null,s=n?(0,a.h)("span",{class:k},n):null;return i||!o&&!s?null:(0,a.h)("div",{class:A,key:"header-content"},o,s)}renderActionBar(){return(0,a.h)("div",{class:f,hidden:!this.hasActionBar},(0,a.h)("slot",{name:O.actionBar,onSlotchange:this.handleActionBarSlotChange}))}renderHeaderSlottedContent(){return(0,a.h)("div",{class:A,hidden:!this.hasHeaderContent,key:"slotted-header-content"},(0,a.h)("slot",{name:O.headerContent,onSlotchange:this.handleHeaderContentSlotChange}))}renderHeaderStartActions(){const{hasStartActions:e}=this;return(0,a.h)("div",{class:{[z]:!0,[H]:!0},hidden:!e,key:"header-actions-start"},(0,a.h)("slot",{name:O.headerActionsStart,onSlotchange:this.handleHeaderActionsStartSlotChange}))}renderHeaderActionsEnd(){const{hasEndActions:e,messages:t,closable:n,collapsed:o,collapseDirection:s,collapsible:l,hasMenuItems:c}=this,{collapse:r,expand:d,close:h}=t,p=[L,D];"up"===s&&p.reverse();const u=l?(0,a.h)("calcite-action",{"aria-expanded":(0,i.t)(!o),"aria-label":r,"data-test":"collapse",icon:o?p[0]:p[1],onClick:this.collapse,text:r,title:o?d:r}):null,g=n?(0,a.h)("calcite-action",{"aria-label":h,"data-test":"close",icon:P,onClick:this.close,text:h,title:h}):null,b=(0,a.h)("slot",{name:O.headerActionsEnd,onSlotchange:this.handleHeaderActionsEndSlotChange}),m=e||u||g||c;return(0,a.h)("div",{class:{[w]:!0,[H]:!0},hidden:!m,key:"header-actions-end"},b,this.renderMenu(),u,g)}renderMenu(){const{hasMenuItems:e,messages:t,menuOpen:n}=this;return(0,a.h)("calcite-action-menu",{flipPlacements:["top","bottom"],hidden:!e,key:"menu",label:t.options,open:n,placement:"bottom-end"},(0,a.h)("calcite-action",{icon:B,slot:c.S.trigger,text:t.options}),(0,a.h)("slot",{name:O.headerMenuActions,onSlotchange:this.handleHeaderMenuActionsSlotChange}))}renderHeaderNode(){const{hasHeaderContent:e,hasStartActions:t,hasEndActions:n,closable:i,collapsible:o,hasMenuItems:s,hasActionBar:l}=this,c=this.renderHeaderContent(),r=e||!!c||t||n||o||i||s;return this.showHeaderContent=r,(0,a.h)("header",{class:x,hidden:!(r||l)},(0,a.h)("div",{class:{[C]:!0,[S]:l},hidden:!r},this.renderHeaderStartActions(),this.renderHeaderSlottedContent(),c,this.renderHeaderActionsEnd()),this.renderActionBar())}renderFooterNode(){const{hasFooterContent:e,hasFooterActions:t}=this,n=e||t;return(0,a.h)("footer",{class:M,hidden:!n},(0,a.h)("slot",{key:"footer-slot",name:O.footer,onSlotchange:this.handleFooterSlotChange}),(0,a.h)("slot",{key:"footer-actions-slot",name:O.footerActions,onSlotchange:this.handleFooterActionsSlotChange}))}renderContent(){return(0,a.h)("div",{class:E,hidden:this.collapsible&&this.collapsed,onScroll:this.panelScrollHandler,ref:this.setPanelScrollEl},(0,a.h)("slot",null),this.renderFab())}renderFab(){return(0,a.h)("div",{class:F,hidden:!this.hasFab},(0,a.h)("slot",{name:O.fab,onSlotchange:this.handleFabSlotChange}))}render(){const{loading:e,panelKeyDownHandler:t,closed:n,closable:o}=this,s=(0,a.h)("article",{"aria-busy":(0,i.t)(e),class:v,hidden:n,onKeyDown:t,tabIndex:o?0:-1,ref:this.setContainerRef},this.renderHeaderNode(),this.renderContent(),this.renderFooterNode());return(0,a.h)(a.HY,null,e?(0,a.h)("calcite-scrim",{loading:e}):null,s)}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return":host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:flex;block-size:100%;inline-size:100%;flex:1 1 auto;--calcite-min-header-height:calc(var(--calcite-icon-size) * 3)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.header{margin:0px;display:flex;align-content:space-between;align-items:center;fill:var(--calcite-ui-text-2);color:var(--calcite-ui-text-2)}.heading{margin:0px;padding:0px;font-weight:var(--calcite-font-weight-medium)}.header .heading{flex:1 1 auto;padding:0.5rem}.container{margin:0px;display:flex;inline-size:100%;flex:1 1 auto;flex-direction:column;align-items:stretch;background-color:var(--calcite-ui-background);padding:0px;transition:max-block-size var(--calcite-animation-timing), inline-size var(--calcite-animation-timing)}.container[hidden]{display:none}.header{z-index:var(--calcite-app-z-index-header);display:flex;flex-direction:column;background-color:var(--calcite-ui-foreground-1);border-block-end:var(--calcite-panel-header-border-block-end, 1px solid var(--calcite-ui-border-3))}.header-container{display:flex;inline-size:100%;flex-direction:row;align-items:stretch;justify-content:flex-start;flex:0 0 auto}.header-container--border-end{border-block-end:1px solid var(--calcite-ui-border-3)}.action-bar-container{inline-size:100%}.action-bar-container ::slotted(calcite-action-bar){inline-size:100%}.header-content{display:flex;flex-direction:column;overflow:hidden;padding-inline:0.75rem;padding-block:0.875rem;margin-inline-end:auto}.header-content .heading,.header-content .description{display:block;overflow-wrap:break-word;padding:0px}.header-content .heading{margin-inline:0px;margin-block:0px 0.25rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;font-weight:var(--calcite-font-weight-medium)}.header-content .heading:only-child{margin-block-end:0px}.header-content .description{font-size:var(--calcite-font-size--1);line-height:1rem;color:var(--calcite-ui-text-2)}.back-button{border-width:0px;border-style:solid;border-color:var(--calcite-ui-border-3);border-inline-end-width:1px}.header-actions{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:stretch}.header-actions--end{margin-inline-start:auto}.content-wrapper{display:flex;block-size:100%;flex:1 1 auto;flex-direction:column;flex-wrap:nowrap;align-items:stretch;overflow:auto;background-color:var(--calcite-ui-background)}.footer{display:flex;inline-size:100%;justify-content:space-evenly;background-color:var(--calcite-ui-foreground-1);flex:0 0 auto;padding:var(--calcite-panel-footer-padding, 0.5rem);border-block-start:1px solid var(--calcite-ui-border-3)}.fab-container{position:sticky;inset-block-end:0px;z-index:var(--calcite-app-z-index-sticky);margin-block:0px;margin-inline:auto;display:block;padding:0.5rem;inset-inline:0;inline-size:-moz-fit-content;inline-size:fit-content}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-panel",{closed:[1540],disabled:[516],closable:[516],collapsed:[516],collapseDirection:[1,"collapse-direction"],collapsible:[516],headingLevel:[514,"heading-level"],loading:[516],heading:[1],description:[1],menuOpen:[516,"menu-open"],messageOverrides:[1040],messages:[1040],hasStartActions:[32],hasEndActions:[32],hasMenuItems:[32],hasHeaderContent:[32],hasActionBar:[32],hasFooterContent:[32],hasFooterActions:[32],hasFab:[32],defaultMessages:[32],effectiveLocale:[32],showHeaderContent:[32],setFocus:[64],scrollContentTo:[64]}]);function T(){if("undefined"===typeof customElements)return;["calcite-panel","calcite-action","calcite-action-menu","calcite-icon","calcite-loader","calcite-popover","calcite-scrim"].forEach((e=>{switch(e){case"calcite-panel":customElements.get(e)||customElements.define(e,I);break;case"calcite-action":customElements.get(e)||(0,p.d)();break;case"calcite-action-menu":customElements.get(e)||(0,c.d)();break;case"calcite-icon":customElements.get(e)||(0,u.d)();break;case"calcite-loader":customElements.get(e)||(0,g.d)();break;case"calcite-popover":customElements.get(e)||(0,b.d)();break;case"calcite-scrim":customElements.get(e)||(0,m.d)()}}))}T()}}]);
//# sourceMappingURL=9524.64ab305d.chunk.js.map