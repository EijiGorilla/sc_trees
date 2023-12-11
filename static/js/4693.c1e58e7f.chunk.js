/*! For license information please see 4693.c1e58e7f.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunksc_trees=self.webpackChunksc_trees||[]).push([[4693],{24693:(t,e,n)=>{n.r(e),n.d(e,{CalciteNavigation:()=>P,defineCustomElement:()=>z});var a=n(51554),o=n(92358),i=n(47242),s=n(65138),l=n(57601),r=n(91438);const c="container",h="container-content",m="progress-bar",d="hide",g="primary",S="secondary",v="tertiary",u="logo",y="user",E="progress",C="navigation-action",p="content-start",H="content-end",b="content-center",k="navigation-secondary",A="navigation-tertiary",f="hamburger",x=(0,a.GH)(class extends a.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteNavigationActionSelect=(0,a.yM)(this,"calciteNavigationActionSelect",6),this.actionClickHandler=()=>{this.calciteNavigationActionSelect.emit()},this.handleUserSlotChange=t=>{this.isPrimaryLevel()&&(this.userSlotHasElements=(0,o.e)(t))},this.handleLogoSlotChange=t=>{this.isPrimaryLevel()&&(this.logoSlotHasElements=(0,o.e)(t))},this.handleContentStartSlotChange=t=>{this.isPrimaryLevel()&&(this.primaryContentStartSlotHasElements=(0,o.e)(t))},this.handleContentEndSlotChange=t=>{this.isPrimaryLevel()&&(this.primaryContentEndSlotHasElements=(0,o.e)(t))},this.handleContentCenterSlotChange=t=>{this.isPrimaryLevel()&&(this.primaryContentCenterSlotHasElements=(0,o.e)(t))},this.handleSecondarySlotChange=t=>{this.secondarySlotHasElements=(0,o.e)(t)},this.handleTertiarySlotChange=t=>{this.tertiarySlotHasElements=(0,o.e)(t)},this.handleMenuActionSlotChange=t=>{this.isPrimaryLevel()&&(this.navigationActionSlotHasElements=(0,o.e)(t),this.navigationActionSlotHasElements&&(this.navigationAction=!1))},this.handleProgressSlotChange=t=>{this.isPrimaryLevel()&&(this.progressSlotHasElement=(0,o.e)(t))},this.label=void 0,this.navigationAction=!1,this.logoSlotHasElements=void 0,this.navigationActionSlotHasElements=void 0,this.primaryContentCenterSlotHasElements=void 0,this.primaryContentEndSlotHasElements=void 0,this.primaryContentStartSlotHasElements=void 0,this.progressSlotHasElement=void 0,this.secondarySlotHasElements=void 0,this.tertiarySlotHasElements=void 0,this.userSlotHasElements=void 0}async setFocus(){var t;return await(0,i.c)(this),null===(t=this.navigationActionEl)||void 0===t?void 0:t.setFocus()}componentWillLoad(){(0,i.a)(this)}componentDidLoad(){(0,i.s)(this)}isPrimaryLevel(){return this.el.slot!==k&&this.el.slot!==A}renderMenuAction(){return(0,a.h)("slot",{name:C,onSlotchange:this.handleMenuActionSlotChange},this.navigationAction&&(0,a.h)("calcite-action",{icon:f,onClick:this.actionClickHandler,text:this.label,ref:t=>this.navigationActionEl=t}))}render(){const t=this.logoSlotHasElements||this.userSlotHasElements||this.navigationActionSlotHasElements||this.primaryContentCenterSlotHasElements||this.primaryContentEndSlotHasElements||this.primaryContentStartSlotHasElements||this.navigationAction,e=this.el.slot;return(0,a.h)(a.AA,null,(0,a.h)("div",{class:{[c]:!0,[S]:e===k,[v]:e===A,[g]:t}},(0,a.h)("div",{class:{[d]:!this.progressSlotHasElement,[E]:!0}},(0,a.h)("slot",{name:E,onSlotchange:this.handleProgressSlotChange})),(0,a.h)("div",{class:{[h]:!0,[m]:this.progressSlotHasElement}},this.renderMenuAction(),(0,a.h)("div",{class:{[d]:!this.logoSlotHasElements,[u]:!0}},(0,a.h)("slot",{name:u,onSlotchange:this.handleLogoSlotChange})),(0,a.h)("slot",{name:p,onSlotchange:this.handleContentStartSlotChange}),(0,a.h)("slot",{name:b,onSlotchange:this.handleContentCenterSlotChange}),(0,a.h)("slot",{name:H,onSlotchange:this.handleContentEndSlotChange}),(0,a.h)("div",{class:{[d]:!this.userSlotHasElements,[y]:!0}},(0,a.h)("slot",{name:y,onSlotchange:this.handleUserSlotChange})))),(0,a.h)(a.HY,null,(0,a.h)("slot",{name:k,onSlotchange:this.handleSecondarySlotChange}),(0,a.h)("slot",{name:A,onSlotchange:this.handleTertiarySlotChange})))}get el(){return this}static get style(){return":host([hidden]){display:none}[hidden]{display:none}.container{margin-inline:auto;display:flex;inline-size:100%;flex-direction:column;margin-block:0;margin-inline:auto;background-color:var(--calcite-navigation-background, var(--calcite-ui-foreground-1))}.container.primary,.container.secondary,.container.tertiary{border-block-end:1px solid;border-block-end-color:var(--calcite-navigation-border-color, var(--calcite-ui-border-3))}.user,.logo{display:flex}.hide{display:none}.primary{block-size:4rem}.secondary{block-size:3rem}.tertiary{block-size:3rem}.container-content{margin-inline:auto;display:flex;block-size:100%;inline-size:100%;margin-block:0;inline-size:var(--calcite-navigation-width, 100%);max-inline-size:100%}.container-content.progress-bar{margin-block-start:0.125rem}slot[name]{display:flex;flex-direction:row}slot[name=navigation-secondary]::slotted(calcite-navigation),slot[name=navigation-tertiary]::slotted(calcite-navigation){inline-size:100%}slot[name=content-start]::slotted(*),slot[name=content-center]::slotted(*),slot[name=content-end]::slotted(*){display:flex;flex-direction:row;align-items:center}slot[name=progress],slot[name=progress] calcite-progress{inset-block-start:0;inset-inline:0}slot[name=content-end]{margin-inline-start:auto}slot[name=content-start]{margin-inline-end:auto}slot[name=content-end],slot[name=logo]~slot[name=user],slot[name=user]:only-child{margin-inline-start:auto}slot[name=content-center]{margin-inline-start:auto;margin-inline-end:auto}slot[name=content-start]~slot[name=content-center]{margin-inline-start:0px}slot[name=content-start]~slot[name=content-end],slot[name=content-center]~slot[name=content-end],slot[name=content-center]~slot[name=user],slot[name=content-end]~slot[name=user]{margin:0px}"}},[1,"calcite-navigation",{label:[1],navigationAction:[516,"navigation-action"],logoSlotHasElements:[32],navigationActionSlotHasElements:[32],primaryContentCenterSlotHasElements:[32],primaryContentEndSlotHasElements:[32],primaryContentStartSlotHasElements:[32],progressSlotHasElement:[32],secondarySlotHasElements:[32],tertiarySlotHasElements:[32],userSlotHasElements:[32],setFocus:[64]}]);function L(){if("undefined"===typeof customElements)return;["calcite-navigation","calcite-action","calcite-icon","calcite-loader"].forEach((t=>{switch(t){case"calcite-navigation":customElements.get(t)||customElements.define(t,x);break;case"calcite-action":customElements.get(t)||(0,s.d)();break;case"calcite-icon":customElements.get(t)||(0,l.d)();break;case"calcite-loader":customElements.get(t)||(0,r.d)()}}))}L();const P=x,z=L}}]);
//# sourceMappingURL=4693.c1e58e7f.chunk.js.map