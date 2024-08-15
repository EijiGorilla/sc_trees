"use strict";(self.webpackChunksc_trees=self.webpackChunksc_trees||[]).push([[9887,50],{29887:(e,t,a)=>{a.d(t,{Ey:()=>A,applyEdits:()=>v,aw:()=>w,uploadAssets:()=>O});var r=a(52639),n=a(40281),s=a(10064),i=a(84652),o=a(32718),d=a(66978),l=a(35995),u=a(71907),p=a(91340),c=a(92975),h=a(56601),f=a(37270),y=a(18277),m=a(37933);function g(e){return null!=e?.applyEdits}function b(e){return"object"==typeof e&&null!=e&&"objectId"in e&&!!e.objectId}function w(e){return e.every(b)}function F(e){return"object"==typeof e&&null!=e&&"globalId"in e&&!!e.globalId}function A(e){return e.every(F)}async function v(e,t,a){let r,l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const p="gdbVersion"in e?e.gdbVersion:null,c=l.gdbVersion??p;if((0,h.lQ)(e)&&e.url)r=(0,h.jF)(e.url,e.layerId,c,"original-and-current-features"===l.returnServiceEditsOption);else{r=(0,d.hh)(),r.promise.then((t=>{(t.addedFeatures.length||t.updatedFeatures.length||t.deletedFeatures.length||t.addedAttachments.length||t.updatedAttachments.length||t.deletedAttachments.length)&&e.emit("edits",t)}));const t={result:r.promise};e.emit("apply-edits",t)}try{const{results:d,edits:p}=await async function(e,t,a,r){if(await e.load(),!g(t))throw new s.Z(`${e.type}-layer:no-editing-support`,"Layer source does not support applyEdits capability",{layer:e});if(!(0,m.ln)(e))throw new s.Z(`${e.type}-layer:editing-disabled`,"Editing is disabled for layer",{layer:e});const{edits:i,options:d}=await async function(e,t,a){const r=(0,m.S1)(e),i=t&&(t.addFeatures||t.updateFeatures||t.deleteFeatures),d=t&&(t.addAttachments||t.updateAttachments||t.deleteAttachments),l=null!=e.infoFor3D;if(function(e,t,a,r,n,i){if(!e||!r&&!n)throw new s.Z(`${i}:missing-parameters`,"'addFeatures', 'updateFeatures', 'deleteFeatures', 'addAttachments', 'updateAttachments' or 'deleteAttachments' parameter is required");if(!t.editing.supportsGlobalId&&a?.globalIdUsed)throw new s.Z(`${i}:invalid-parameter`,"This layer does not support 'globalIdUsed' parameter. See: 'capabilities.editing.supportsGlobalId'");if(!t.editing.supportsGlobalId&&n)throw new s.Z(`${i}:invalid-parameter`,"'addAttachments', 'updateAttachments' and 'deleteAttachments' are applicable only if the layer supports global ids. See: 'capabilities.editing.supportsGlobalId'");if(!a?.globalIdUsed&&n)throw new s.Z(`${i}:invalid-parameter`,"When 'addAttachments', 'updateAttachments' or 'deleteAttachments' is specified, globalIdUsed should be set to true")}(t,r,a,!!i,!!d,`${e.type}-layer`),!r.data.isVersioned&&a?.gdbVersion)throw new s.Z(`${e.type}-layer:invalid-parameter`,"'gdbVersion' is applicable only if the layer supports versioned data. See: 'capabilities.data.isVersioned'");if(!r.editing.supportsRollbackOnFailure&&a?.rollbackOnFailureEnabled)throw new s.Z(`${e.type}-layer:invalid-parameter`,"This layer does not support 'rollbackOnFailureEnabled' parameter. See: 'capabilities.editing.supportsRollbackOnFailure'");const p={...a};if(null!=p.rollbackOnFailureEnabled||r.editing.supportsRollbackOnFailure||(p.rollbackOnFailureEnabled=!0),p.rollbackOnFailureEnabled||"original-and-current-features"!==p.returnServiceEditsOption||(!1===p.rollbackOnFailureEnabled&&o.Z.getLogger("esri.layers.graphics.editingSupport").warn(`${e.type}-layer:invalid-parameter`,"'original-and-current-features' is valid for 'returnServiceEditsOption' only when 'rollBackOnFailure' is true, but 'rollBackOnFailure' was set to false. 'rollBackOnFailure' has been overwritten and set to true."),p.rollbackOnFailureEnabled=!0),!r.editing.supportsReturnServiceEditsInSourceSpatialReference&&p.returnServiceEditsInSourceSR)throw new s.Z(`${e.type}-layer:invalid-parameter`,"This layer does not support 'returnServiceEditsInSourceSR' parameter. See: 'capabilities.editing.supportsReturnServiceEditsInSourceSpatialReference'");if(p.returnServiceEditsInSourceSR&&"original-and-current-features"!==p.returnServiceEditsOption)throw new s.Z(`${e.type}-layer:invalid-parameter`,"'returnServiceEditsInSourceSR' is valid only when 'returnServiceEditsOption' is set to 'original-and-current-features'");const c=function(e,t,a){const r=function(e){return{addFeatures:Array.from(e?.addFeatures??[]),updateFeatures:Array.from(e?.updateFeatures??[]),deleteFeatures:e&&n.Z.isCollection(e.deleteFeatures)?e.deleteFeatures.toArray():e.deleteFeatures||[],addAttachments:e.addAttachments||[],updateAttachments:e.updateAttachments||[],deleteAttachments:e.deleteAttachments||[]}}(e);if(r.addFeatures?.length&&!t.operations.supportsAdd)throw new s.Z(`${a}:unsupported-operation`,"Layer does not support adding features.");if(r.updateFeatures?.length&&!t.operations.supportsUpdate)throw new s.Z(`${a}:unsupported-operation`,"Layer does not support updating features.");if(r.deleteFeatures?.length&&!t.operations.supportsDelete)throw new s.Z(`${a}:unsupported-operation`,"Layer does not support deleting features.");return r.addFeatures=r.addFeatures.map(Z),r.updateFeatures=r.updateFeatures.map(Z),r.addAssetFeatures=[],r}(t,r,`${e.type}-layer`),h=a?.globalIdUsed||l,f=e.fields.filter((e=>"big-integer"===e.type||"oid"===e.type&&(e.length||0)>=8));if(h){const{globalIdField:t}=e;if(null==t)throw new s.Z(`${e.type}-layer:invalid-parameter`,"Layer does not specify a global id field.");c.addFeatures.forEach((e=>function(e,t){const{attributes:a}=e;null==a[t]&&(a[t]=(0,u.zS)())}(e,t)))}return c.addFeatures.forEach((t=>function(e,t,a,r){I(e,t,a,r),$(e,t)}(t,e,h,f))),c.updateFeatures.forEach((t=>function(e,t,a,r){I(e,t,a,r),$(e,t);const n=(0,m.S1)(t);if("geometry"in e&&null!=e.geometry&&!n?.editing.supportsGeometryUpdate)throw new s.Z(`${t.type}-layer:unsupported-operation`,"Layer does not support geometry updates.")}(t,e,h,f))),c.deleteFeatures.forEach((t=>function(e,t,a,r){I(e,t,a,r)}(t,e,h,f))),c.addAttachments.forEach((t=>S(t,e))),c.updateAttachments.forEach((t=>S(t,e))),l&&await async function(e,t){if(null==t.infoFor3D)return;const{infoFor3D:a}=t,r=(0,y.S0)("model/gltf-binary",a.supportedFormats)??(0,y.Ow)("glb",a.supportedFormats);if(!r||!a.editFormats.includes(r))throw new s.Z(`${t.type}-layer:binary-gltf-asset-not-supported`,"3DObjectFeatureLayer requires binary glTF (.glb) support for updating mesh geometry.");e.addAssetFeatures??=[];const{addAssetFeatures:n}=e;for(const s of e.addFeatures??[])R(s)&&n.push(s);for(const s of e.updateFeatures??[])R(s)&&n.push(s)}(c,e),{edits:await E(c),options:p}}(e,a,r);return i.addFeatures?.length||i.updateFeatures?.length||i.deleteFeatures?.length||i.addAttachments?.length||i.updateAttachments?.length||i.deleteAttachments?.length?{edits:i,results:await t.applyEdits(i,d)}:{edits:i,results:{addFeatureResults:[],updateFeatureResults:[],deleteFeatureResults:[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}}(e,t,a,l),c=e=>e.filter((e=>!e.error)).map(i.d9),h={edits:p,addedFeatures:c(d.addFeatureResults),updatedFeatures:c(d.updateFeatureResults),deletedFeatures:c(d.deleteFeatureResults),addedAttachments:c(d.addAttachmentResults),updatedAttachments:c(d.updateAttachmentResults),deletedAttachments:c(d.deleteAttachmentResults),exceededTransferLimit:!1,historicMoment:d.editMoment?new Date(d.editMoment):null,globalIdToObjectId:l.globalIdToObjectId};return d.editedFeatureResults?.length&&(h.editedFeatures=d.editedFeatureResults),r.resolve(h),d}catch(f){throw r.reject(f),f}}function I(e,t,a,r){if(a){if("attributes"in e&&!e.attributes[t.globalIdField])throw new s.Z(`${t.type}-layer:invalid-parameter`,`Feature should have '${t.globalIdField}' when 'globalIdUsed' is true`);if(!("attributes"in e)&&!e.globalId)throw new s.Z(`${t.type}-layer:invalid-parameter`,"`'globalId' of the feature should be passed when 'globalIdUsed' is true")}if(r.length&&"attributes"in e)for(const n of r){const a=e.attributes[n.name];if(void 0!==a&&!(0,f.d2)(n,a))throw new s.Z(`${t.type}-layer:invalid-parameter`,`Big-integer field '${n.name}' of the feature must be less than ${Number.MAX_SAFE_INTEGER}`,{feature:e})}if("geometry"in e&&null!=e.geometry){if(e.geometry.hasZ&&!1===t.capabilities?.data.supportsZ)throw new s.Z(`${t.type}-layer:z-unsupported`,"Layer does not support z values while feature has z values.");if(e.geometry.hasM&&!1===t.capabilities?.data.supportsM)throw new s.Z(`${t.type}-layer:m-unsupported`,"Layer does not support m values while feature has m values.")}}function $(e,t){if("geometry"in e&&"mesh"===e.geometry?.type&&null!=t.infoFor3D&&null!=t.spatialReference){const{geometry:a}=e,{spatialReference:r,vertexSpace:n}=a,i=t.spatialReference,o="local"===n.type,d=(0,c.sT)(i),l=(0,c.fS)(i,r),u=l||(0,c.oR)(i)&&((0,c.oR)(r)||(0,c.sS)(r));if(!(o&&d&&u||!o&&!d&&l))throw new s.Z(`${t.type}-layer:mesh-unsupported`,`Uploading a mesh with a ${n.type} vertex space and a spatial reference wkid:${r.wkid} to a layer with a spatial reference wkid:${i.wkid} is not supported.`)}}function S(e,t){const{feature:a,attachment:r}=e;if(!a||"attributes"in a&&!a.attributes[t.globalIdField])throw new s.Z(`${t.type}-layer:invalid-parameter`,"Attachment should have reference to a feature with 'globalId'");if(!("attributes"in a)&&!a.globalId)throw new s.Z(`${t.type}-layer:invalid-parameter`,"Attachment should have reference to 'globalId' of the parent feature");if(!r.globalId)throw new s.Z(`${t.type}-layer:invalid-parameter`,"Attachment should have 'globalId'");if(!r.data&&!r.uploadId)throw new s.Z(`${t.type}-layer:invalid-parameter`,"Attachment should have 'data' or 'uploadId'");if(!(r.data instanceof File&&r.data.name)&&!r.name)throw new s.Z(`${t.type}-layer:invalid-parameter`,"'name' is required when attachment is specified as Base64 encoded string using 'data'");if(!t.capabilities?.editing.supportsUploadWithItemId&&r.uploadId)throw new s.Z(`${t.type}-layer:invalid-parameter`,"This layer does not support 'uploadId' parameter. See: 'capabilities.editing.supportsUploadWithItemId'");if("string"==typeof r.data){const e=(0,l.sJ)(r.data);if(e&&!e.isBase64)throw new s.Z(`${t.type}-layer:invalid-parameter`,"Attachment 'data' should be a Blob, File or Base64 encoded string")}}async function E(e){const t=e.addFeatures??[],a=e.updateFeatures??[],r=t.concat(a).map((e=>e.geometry)),n=await(0,p.aX)(r),s=t.length,i=a.length;return n.slice(0,s).forEach(((e,a)=>t[a].geometry=e)),n.slice(s,s+i).forEach(((e,t)=>a[t].geometry=e)),e}function Z(e){const t=new r.Z;return e.attributes||(e.attributes={}),t.geometry=e.geometry,t.attributes=e.attributes,t}function R(e){return"mesh"===e?.geometry?.type}function O(e,t,a,r){if(!g(t))throw new s.Z(`${e.type}-layer:no-editing-support`,"Layer source does not support applyEdits capability",{layer:e});if(!t.uploadAssets)throw new s.Z(`${e.type}-layer:no-asset-upload-support`,"Layer source does not support uploadAssets capability",{layer:e});return t.uploadAssets(a,r)}},18277:(e,t,a)=>{a.d(t,{$6:()=>y,$z:()=>s,F7:()=>n,Ow:()=>o,S0:()=>i,d1:()=>d,dm:()=>l});const r=[["binary","application/octet-stream","bin",""]];function n(e,t){return null!=p(t.name,e?.supportedFormats??[])}function s(e,t){if(!e)return!1;const a=l(t,e.supportedFormats??[]);return null!=a&&e.editFormats.includes(a)}function i(e,t){return c(function(e,t){const a=e.toLowerCase();return u(t).find((e=>h(e)===a))}(e,t))}function o(e,t){return c(p(e,t))}function d(e,t){return h(function(e,t){return u(t).find((t=>c(t)===e))}(e,t))}function l(e,t){return o(e.name,t)??i(e.type,t)}function u(e){return[...r,...e]}function p(e,t){const a=e.toLowerCase();return u(t).find((e=>f(e).some((e=>a.endsWith(e)))))}function c(e){return e?.[0]}function h(e){return e?.[1].toLowerCase()}function f(e){return e?.[2].split(",").map((e=>e.toLowerCase()))??[]}function y(e){return e.tables?.find((e=>"assetMaps"===e.role))}}}]);
//# sourceMappingURL=9887.2d0d4468.chunk.js.map