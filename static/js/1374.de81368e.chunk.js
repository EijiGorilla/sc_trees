/*! For license information please see 1374.de81368e.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunksc_trees=self.webpackChunksc_trees||[]).push([[1374],{61374:(e,i,t)=>{t.r(i),t.d(i,{CalciteTip:()=>z,defineCustomElement:()=>w});var s=t(51554),n=t(19432),a=t(92358),c=t(46895),l=t(52655),o=t(8703),r=t(65138),d=t(57601),h=t(91438);const g="container",m="header",u="heading",f="close",p="image-frame",v="content",b="info",x="x",k="thumbnail",y=(0,s.GH)(class extends s.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteTipDismiss=(0,s.yM)(this,"calciteTipDismiss",6),this.hideTip=()=>{this.closed=!0,this.calciteTipDismiss.emit()},this.closed=!1,this.closeDisabled=!1,this.heading=void 0,this.headingLevel=void 0,this.selected=!1,this.messages=void 0,this.messageOverrides=void 0,this.defaultMessages=void 0,this.effectiveLocale=""}onMessagesChange(){}effectiveLocaleChange(){(0,l.u)(this,this.effectiveLocale)}connectedCallback(){(0,n.c)(this),(0,c.c)(this),(0,l.c)(this)}async componentWillLoad(){await(0,l.s)(this)}disconnectedCallback(){(0,n.d)(this),(0,c.d)(this),(0,l.d)(this)}renderHeader(){var e;const{heading:i,headingLevel:t,el:n}=this,a=null===(e=n.closest("calcite-tip-manager"))||void 0===e?void 0:e.headingLevel,c=a?(0,o.c)(a+1):null,l=t||c;return i?(0,s.h)("header",{class:m},(0,s.h)(o.H,{class:u,level:l},i)):null}renderDismissButton(){const{closeDisabled:e,hideTip:i}=this;return e?null:(0,s.h)("calcite-action",{class:f,icon:x,onClick:i,scale:"l",text:this.messages.close})}renderImageFrame(){const{el:e}=this;return(0,a.g)(e,k)?(0,s.h)("div",{class:p,key:"thumbnail"},(0,s.h)("slot",{name:k})):null}renderInfoNode(){return(0,s.h)("div",{class:b},(0,s.h)("slot",null))}renderContent(){return(0,s.h)("div",{class:v},this.renderImageFrame(),this.renderInfoNode())}render(){return(0,s.h)(s.HY,null,(0,s.h)("article",{class:g},this.renderHeader(),this.renderContent()),this.renderDismissButton())}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return":host{position:relative;margin:1rem;box-sizing:border-box;display:flex;flex-direction:row;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-2);background-color:var(--calcite-ui-foreground-1);font-size:var(--calcite-font-size--1);line-height:1rem;color:var(--calcite-ui-text-2)}:host *{box-sizing:border-box}.container{inline-size:100%;padding:1rem}:host([closed]),:host([closed]) .container{display:none}:host([selected]) .container{margin:0px;border-style:none;padding:0px}.header{margin:0px;display:flex;align-content:space-between;align-items:center;fill:var(--calcite-ui-text-2);color:var(--calcite-ui-text-2)}.heading{margin:0px;padding:0px;font-weight:var(--calcite-font-weight-medium)}.header .heading{flex:1 1 auto;padding:0.5rem}.header{margin-block-end:0.5rem}.header .heading{padding:0px;font-size:var(--calcite-font-size-0);line-height:1.25rem;color:var(--calcite-ui-text-1)}.container[hidden]{display:none}.content{display:flex}.info{padding-block:0px;padding-inline:1rem;inline-size:70%}.info:only-child{inline-size:100%;padding-inline:0px}::slotted(p){margin-block-start:0px}::slotted(a){outline-color:transparent;color:var(--calcite-ui-brand)}::slotted(a:focus){outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.image-frame{inline-size:25%}.image-frame img{max-inline-size:100%}::slotted(img){max-inline-size:100%}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-tip",{closed:[1540],closeDisabled:[516,"close-disabled"],heading:[1],headingLevel:[514,"heading-level"],selected:[516],messages:[1040],messageOverrides:[1040],defaultMessages:[32],effectiveLocale:[32]}]);function C(){if("undefined"===typeof customElements)return;["calcite-tip","calcite-action","calcite-icon","calcite-loader"].forEach((e=>{switch(e){case"calcite-tip":customElements.get(e)||customElements.define(e,y);break;case"calcite-action":customElements.get(e)||(0,r.d)();break;case"calcite-icon":customElements.get(e)||(0,d.d)();break;case"calcite-loader":customElements.get(e)||(0,h.d)()}}))}C();const z=y,w=C}}]);
//# sourceMappingURL=1374.de81368e.chunk.js.map