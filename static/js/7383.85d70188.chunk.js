"use strict";(self.webpackChunksc_trees=self.webpackChunksc_trees||[]).push([[7383],{87383:(e,i,a)=>{a.r(i),a.d(i,{classBreaks:()=>s,heatmapStatistics:()=>m,histogram:()=>r,summaryStatistics:()=>o,uniqueValues:()=>t});var n=a(95281),l=a(71486);async function o(e){const{attribute:i,features:a}=e,{normalizationType:o,normalizationField:t,minValue:s,maxValue:r,fieldType:m}=i,u=await(0,n.do)({field:i.field,valueExpression:i.valueExpression,normalizationType:o,normalizationField:t,normalizationTotal:i.normalizationTotal,viewInfoParams:i.viewInfoParams,timeZone:i.timeZone,fieldInfos:i.fieldInfos},a),d=(0,l.S5)({normalizationType:o,normalizationField:t,minValue:s,maxValue:r}),f={value:.5,fieldType:m},v="esriFieldTypeString"===m?(0,l.H0)({values:u,supportsNullCount:d,percentileParams:f}):(0,l.i5)({values:u,minValue:s,maxValue:r,useSampleStdDev:!o,supportsNullCount:d,percentileParams:f});return(0,l.F_)(v,"esriFieldTypeDate"===m)}async function t(e){const{attribute:i,features:a}=e,o=await(0,n.do)({field:i.field,field2:i.field2,field3:i.field3,fieldDelimiter:i.fieldDelimiter,valueExpression:i.valueExpression,viewInfoParams:i.viewInfoParams,timeZone:i.timeZone,fieldInfos:i.fieldInfos},a,!1),t=(0,l.eT)(o);return(0,l.Qm)(t,i.domains,i.returnAllCodedValues,i.fieldDelimiter)}async function s(e){const{attribute:i,features:a}=e,{field:o,normalizationType:t,normalizationField:s,normalizationTotal:r,classificationMethod:m}=i,u=await(0,n.do)({field:o,valueExpression:i.valueExpression,normalizationType:t,normalizationField:s,normalizationTotal:r,viewInfoParams:i.viewInfoParams,timeZone:i.timeZone,fieldInfos:i.fieldInfos},a),d=(0,l.G2)(u,{field:o,normalizationType:t,normalizationField:s,normalizationTotal:r,classificationMethod:m,standardDeviationInterval:i.standardDeviationInterval,numClasses:i.numClasses,minValue:i.minValue,maxValue:i.maxValue});return(0,l.DL)(d,m)}async function r(e){const{attribute:i,features:a}=e,{field:o,normalizationType:t,normalizationField:s,normalizationTotal:r,classificationMethod:m}=i,u=await(0,n.do)({field:o,valueExpression:i.valueExpression,normalizationType:t,normalizationField:s,normalizationTotal:r,viewInfoParams:i.viewInfoParams,timeZone:i.timeZone,fieldInfos:i.fieldInfos},a);return(0,l.oF)(u,{field:o,normalizationType:t,normalizationField:s,normalizationTotal:r,classificationMethod:m,standardDeviationInterval:i.standardDeviationInterval,numBins:i.numBins,minValue:i.minValue,maxValue:i.maxValue})}async function m(e){var i;const{attribute:a,features:l}=e,{field:o,radius:t,fieldOffset:s,transform:r,spatialReference:m}=a,u=null!==(i=a.size)&&void 0!==i?i:[0,0],d=(0,n.gq)(null!==l&&void 0!==l?l:[],r,m,u),{count:f,min:v,max:c,mean:p,stdDev:z}=(0,n.qQ)(d,null!==t&&void 0!==t?t:void 0,s,o,u[0],u[1]);return{count:f,min:v,max:c,avg:p,stddev:z}}}}]);
//# sourceMappingURL=7383.85d70188.chunk.js.map