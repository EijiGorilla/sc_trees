"use strict";(self.webpackChunksc_trees=self.webpackChunksc_trees||[]).push([[2170,2463],{92463:(e,t,n)=>{n.r(t),n.d(t,{hydratedAdapter:()=>d});var r=n(53866),a=n(77577),i=n(585),o=n(80885),c=n(29909);const d={convertToGEGeometry:function(e,t){if(null==t)return null;let n="cache"in t?t.cache._geVersion:void 0;return null==n&&(n=e.convertJSONToGeometry(t),"cache"in t&&(t.cache._geVersion=n)),n},exportPoint:function(e,t,n){const r=e.hasZ(t),a=e.hasM(t),o=new i.Z({x:e.getPointX(t),y:e.getPointY(t),spatialReference:n});return r&&(o.z=e.getPointZ(t)),a&&(o.m=e.getPointM(t)),o.cache._geVersion=t,o},exportPolygon:function(e,t,n){const r=new o.Z({rings:e.exportPaths(t),hasZ:e.hasZ(t),hasM:e.hasM(t),spatialReference:n});return r.cache._geVersion=t,r},exportPolyline:function(e,t,n){const r=new c.Z({paths:e.exportPaths(t),hasZ:e.hasZ(t),hasM:e.hasM(t),spatialReference:n});return r.cache._geVersion=t,r},exportMultipoint:function(e,t,n){const r=new a.Z({hasZ:e.hasZ(t),hasM:e.hasM(t),points:e.exportPoints(t),spatialReference:n});return r.cache._geVersion=t,r},exportExtent:function(e,t,n){const a=e.hasZ(t),i=e.hasM(t),o=new r.Z({xmin:e.getXMin(t),ymin:e.getYMin(t),xmax:e.getXMax(t),ymax:e.getYMax(t),spatialReference:n});if(a){const n=e.getZExtent(t);o.zmin=n.vmin,o.zmax=n.vmax}if(i){const n=e.getMExtent(t);o.mmin=n.vmin,o.mmax=n.vmax}return o.cache._geVersion=t,o}}},2170:(e,t,n)=>{n.r(t),n.d(t,{buffer:()=>P,changeDefaultSpatialReferenceTolerance:()=>Y,clearDefaultSpatialReferenceTolerance:()=>j,clip:()=>c,contains:()=>u,convexHull:()=>v,crosses:()=>s,cut:()=>d,densify:()=>C,difference:()=>w,disjoint:()=>g,distance:()=>f,equals:()=>l,extendedSpatialReferenceInfo:()=>o,flipHorizontal:()=>L,flipVertical:()=>b,generalize:()=>k,geodesicArea:()=>O,geodesicBuffer:()=>S,geodesicDensify:()=>H,geodesicLength:()=>I,intersect:()=>M,intersectLinesToPoints:()=>X,intersects:()=>h,isSimple:()=>x,nearestCoordinate:()=>_,nearestVertex:()=>D,nearestVertices:()=>T,offset:()=>V,overlaps:()=>G,planarArea:()=>J,planarLength:()=>N,relate:()=>A,rotate:()=>E,simplify:()=>m,symmetricDifference:()=>R,touches:()=>p,union:()=>Z,within:()=>y});var r=n(99058),a=n(92463);function i(e){return Array.isArray(e)?e[0].spatialReference:e&&e.spatialReference}function o(e){return r.G.extendedSpatialReferenceInfo(e)}function c(e,t){return r.G.clip(a.hydratedAdapter,i(e),e,t)}function d(e,t){return r.G.cut(a.hydratedAdapter,i(e),e,t)}function u(e,t){return r.G.contains(a.hydratedAdapter,i(e),e,t)}function s(e,t){return r.G.crosses(a.hydratedAdapter,i(e),e,t)}function f(e,t,n){return r.G.distance(a.hydratedAdapter,i(e),e,t,n)}function l(e,t){return r.G.equals(a.hydratedAdapter,i(e),e,t)}function h(e,t){return r.G.intersects(a.hydratedAdapter,i(e),e,t)}function p(e,t){return r.G.touches(a.hydratedAdapter,i(e),e,t)}function y(e,t){return r.G.within(a.hydratedAdapter,i(e),e,t)}function g(e,t){return r.G.disjoint(a.hydratedAdapter,i(e),e,t)}function G(e,t){return r.G.overlaps(a.hydratedAdapter,i(e),e,t)}function A(e,t,n){return r.G.relate(a.hydratedAdapter,i(e),e,t,n)}function x(e){return r.G.isSimple(a.hydratedAdapter,i(e),e)}function m(e){return r.G.simplify(a.hydratedAdapter,i(e),e)}function v(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return r.G.convexHull(a.hydratedAdapter,i(e),e,t)}function w(e,t){return r.G.difference(a.hydratedAdapter,i(e),e,t)}function R(e,t){return r.G.symmetricDifference(a.hydratedAdapter,i(e),e,t)}function M(e,t){return r.G.intersect(a.hydratedAdapter,i(e),e,t)}function Z(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return r.G.union(a.hydratedAdapter,i(e),e,t)}function V(e,t,n,o,c,d){return r.G.offset(a.hydratedAdapter,i(e),e,t,n,o,c,d)}function P(e,t,n){let o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return r.G.buffer(a.hydratedAdapter,i(e),e,t,n,o)}function S(e,t,n,o,c,d){return r.G.geodesicBuffer(a.hydratedAdapter,i(e),e,t,n,o,c,d)}function _(e,t){let n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return r.G.nearestCoordinate(a.hydratedAdapter,i(e),e,t,n)}function D(e,t){return r.G.nearestVertex(a.hydratedAdapter,i(e),e,t)}function T(e,t,n,o){return r.G.nearestVertices(a.hydratedAdapter,i(e),e,t,n,o)}function z(e){var t,n;return"xmin"in e?"center"in e?e.center:null:"x"in e?e:"extent"in e&&null!==(t=null===(n=e.extent)||void 0===n?void 0:n.center)&&void 0!==t?t:null}function E(e,t,n){var a;if(null==e)throw new q;const i=e.spatialReference;if(null==(n=null!==(a=n)&&void 0!==a?a:z(e)))throw new q;const o=e.constructor.fromJSON(r.G.rotate(e,t,n));return o.spatialReference=i,o}function L(e,t){var n;if(null==e)throw new q;const a=e.spatialReference;if(null==(t=null!==(n=t)&&void 0!==n?n:z(e)))throw new q;const i=e.constructor.fromJSON(r.G.flipHorizontal(e,t));return i.spatialReference=a,i}function b(e,t){var n;if(null==e)throw new q;const a=e.spatialReference;if(null==(t=null!==(n=t)&&void 0!==n?n:z(e)))throw new q;const i=e.constructor.fromJSON(r.G.flipVertical(e,t));return i.spatialReference=a,i}function k(e,t,n,o){return r.G.generalize(a.hydratedAdapter,i(e),e,t,n,o)}function C(e,t,n){return r.G.densify(a.hydratedAdapter,i(e),e,t,n)}function H(e,t,n){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return r.G.geodesicDensify(a.hydratedAdapter,i(e),e,t,n,o)}function J(e,t){return r.G.planarArea(a.hydratedAdapter,i(e),e,t)}function N(e,t){return r.G.planarLength(a.hydratedAdapter,i(e),e,t)}function O(e,t,n){return r.G.geodesicArea(a.hydratedAdapter,i(e),e,t,n)}function I(e,t,n){return r.G.geodesicLength(a.hydratedAdapter,i(e),e,t,n)}function X(e,t){return r.G.intersectLinesToPoints(a.hydratedAdapter,i(e),e,t)}function Y(e,t){r.G.changeDefaultSpatialReferenceTolerance(e,t)}function j(e){r.G.clearDefaultSpatialReferenceTolerance(e)}class q extends Error{constructor(){super("Illegal Argument Exception")}}}}]);
//# sourceMappingURL=2170.2a33504c.chunk.js.map