/*! For license information please see 1331.a929d3ed.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunksc_trees=self.webpackChunksc_trees||[]).push([[1331],{71331:(e,t,i)=>{i.r(t),i.d(t,{default:()=>u});var a=i(10913);function _(e){return e%10<5&&e%10>1&&~~(e/10)%10!==1}function r(e,t,i){var a=e+" ";switch(i){case"m":return t?"minuta":"minut\u0119";case"mm":return a+(_(e)?"minuty":"minut");case"h":return t?"godzina":"godzin\u0119";case"hh":return a+(_(e)?"godziny":"godzin");case"MM":return a+(_(e)?"miesi\u0105ce":"miesi\u0119cy");case"yy":return a+(_(e)?"lata":"lat")}}var s="stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_wrze\u015bnia_pa\u017adziernika_listopada_grudnia".split("_"),n="stycze\u0144_luty_marzec_kwiecie\u0144_maj_czerwiec_lipiec_sierpie\u0144_wrzesie\u0144_pa\u017adziernik_listopad_grudzie\u0144".split("_"),c=/D MMMM/,m=function(e,t){return c.test(t)?s[e.month()]:n[e.month()]};m.s=n,m.f=s;var d={name:"pl",weekdays:"niedziela_poniedzia\u0142ek_wtorek_\u015broda_czwartek_pi\u0105tek_sobota".split("_"),weekdaysShort:"ndz_pon_wt_\u015br_czw_pt_sob".split("_"),weekdaysMin:"Nd_Pn_Wt_\u015ar_Cz_Pt_So".split("_"),months:m,monthsShort:"sty_lut_mar_kwi_maj_cze_lip_sie_wrz_pa\u017a_lis_gru".split("_"),ordinal:function(e){return e+"."},weekStart:1,yearStart:4,relativeTime:{future:"za %s",past:"%s temu",s:"kilka sekund",m:r,mm:r,h:r,hh:r,d:"1 dzie\u0144",dd:"%d dni",M:"miesi\u0105c",MM:r,y:"rok",yy:r},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"}};a.d.locale(d,null,!0);const u=d}}]);
//# sourceMappingURL=1331.a929d3ed.chunk.js.map