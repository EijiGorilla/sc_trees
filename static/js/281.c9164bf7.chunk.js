"use strict";(self.webpackChunksc_trees=self.webpackChunksc_trees||[]).push([[281],{80457:(e,t,n)=>{n.d(t,{Z:()=>i});class i{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];this.lengths=null!==e&&void 0!==e?e:[],this.coords=null!==t&&void 0!==t?t:[],this.hasIndeterminateRingOrder=n}static fromRect(e){const[t,n,a,r]=e,o=a-t,l=r-n;return new i([5],[t,n,o,0,0,l,-o,0,0,-l])}get isPoint(){return 0===this.lengths.length}get maxLength(){return Math.max(...this.lengths)}get size(){return this.lengths.reduce(((e,t)=>e+t))}forEachVertex(e){let t=0;this.lengths.length||e(this.coords[0],this.coords[1]);for(let n=0;n<this.lengths.length;n++){const i=this.lengths[n];for(let n=0;n<i;n++)e(this.coords[2*(n+t)],this.coords[2*(n+t)+1]);t+=i}}clone(e){return e?(e.set(this.coords),new i(this.lengths.slice(),e,this.hasIndeterminateRingOrder)):new i(this.lengths.slice(),this.coords.slice(),this.hasIndeterminateRingOrder)}}},59001:(e,t,n)=>{n.d(t,{Z:()=>r});var i=n(82272),a=n(51e3);class r{constructor(){this._resourceMap=new Map,this._inFlightResourceMap=new Map,this.geometryEngine=null,this.geometryEnginePromise=null}destroy(){this._inFlightResourceMap.clear(),this._resourceMap.clear()}getResource(e){var t;return null!==(t=this._resourceMap.get(e))&&void 0!==t?t:null}async fetchResource(e,t){const n=this._resourceMap.get(e);if(n)return{width:n.width,height:n.height};let i=this._inFlightResourceMap.get(e);return i?i.then((e=>({width:e.width,height:e.height}))):(i=(0,a.n$)(e,t),this._inFlightResourceMap.set(e,i),i.then((t=>(this._inFlightResourceMap.delete(e),this._resourceMap.set(e,t),{width:t.width,height:t.height})),(()=>({width:0,height:0}))))}deleteResource(e){this._inFlightResourceMap.delete(e),this._resourceMap.delete(e)}loadFont(e){return(0,i.mx)(e)}}},16285:(e,t,n)=>{n.d(t,{Z:()=>c});var i=n(16889),a=n(78915),r=n(26554),o=n(691),l=n(6388),s=n(31027);class c{constructor(e){this._resourceManager=e,this._lazyRasterizationCanvas=null}dispose(){this._lazyRasterizationCanvas=null}get _rasterizationCanvas(){return null==this._lazyRasterizationCanvas&&(this._lazyRasterizationCanvas=document.createElement("canvas"),this._lazyRasterizationCanvas.getContext("2d",{willReadFrequently:!0})),this._lazyRasterizationCanvas}rasterizeJSONResource(e,t,n){if("simple-fill"===e.type||"esriSFS"===e.type){const[n,a,o]=(0,r.Y)(this._rasterizationCanvas,e.style,t);return{size:[a,o],image:new Uint32Array(n.buffer),sdf:!1,simplePattern:!0,anchorX:0,anchorY:0,rasterizationScale:(0,i.fp)(Math.ceil(t))}}if("simple-line"===e.type||"esriSLS"===e.type||"line"===e.type&&e.dashTemplate){let t,n;if("simple-line"===e.type||"esriSLS"===e.type)switch(t=(0,a.U1)(e.style,e.cap),e.cap){case"butt":n="Butt";break;case"square":n="Square";break;default:n="Round"}else t=e.dashTemplate,n=e.cim.capStyle;const[i,o,l]=(0,r.m)(t,n);return{size:[o,l],image:new Uint32Array(i.buffer),sdf:!0,simplePattern:!0,anchorX:0,anchorY:0}}let s,c=null,h=null,u=1;if("simple-marker"===e.type||"esriSMS"===e.type||"line-marker"===e.type?(s=a.B$.fromSimpleMarker(e),h=(0,l.Fp)(s)):e.cim&&"CIMHatchFill"===e.cim.type?(s=a.B$.fromCIMHatchFill(e.cim,t),c=new o.Z(s.frame.xmin,-s.frame.ymax,s.frame.xmax-s.frame.xmin,s.frame.ymax-s.frame.ymin),u=t):e.cim.markerPlacement&&"CIMMarkerPlacementInsidePolygon"===e.cim.markerPlacement.type?(s=a.B$.fromCIMInsidePolygon(e.cim),c=new o.Z(s.frame.xmin,-s.frame.ymax,s.frame.xmax-s.frame.xmin,s.frame.ymax-s.frame.ymin)):(s=e.cim,e.avoidSDFRasterization||(h=(0,l.Fp)(s))),h&&!n){const[e,t,n]=(0,l.RL)(h);return e?{size:[t,n],image:new Uint32Array(e.buffer),sdf:!0,simplePattern:!0,anchorX:0,anchorY:0,rasterizationScale:u}:null}const[d,f,g,m,p]=a.B$.rasterize(this._rasterizationCanvas,s,c,this._resourceManager,!n);return d?{size:[f,g],image:new Uint32Array(d.buffer),sdf:!1,simplePattern:!1,anchorX:m,anchorY:p}:null}rasterizeImageResource(e,t,n,i){this._rasterizationCanvas.width=e,this._rasterizationCanvas.height=t;const a=this._rasterizationCanvas.getContext("2d");n instanceof ImageData?a.putImageData(n,0,0):(n.setAttribute("width","".concat(e,"px")),n.setAttribute("height","".concat(t,"px")),a.drawImage(n,0,0,e,t));const r=a.getImageData(0,0,e,t),o=new Uint8Array(r.data);if(i)for(const s of i)if(s&&s.oldColor&&4===s.oldColor.length&&s.newColor&&4===s.newColor.length){const[e,t,n,i]=s.oldColor,[a,r,l,c]=s.newColor;if(e===a&&t===r&&n===l&&i===c)continue;for(let s=0;s<o.length;s+=4)e===o[s]&&t===o[s+1]&&n===o[s+2]&&i===o[s+3]&&(o[s]=a,o[s+1]=r,o[s+2]=l,o[s+3]=c)}let l;for(let s=0;s<o.length;s+=4)l=o[s+3]/255,o[s]=o[s]*l,o[s+1]=o[s+1]*l,o[s+2]=o[s+2]*l;let c=o,h=e,u=t;const d=512;if(h>=d||u>=d){const n=h/u;n>1?(h=d,u=Math.round(d/n)):(u=d,h=Math.round(d*n)),c=new Uint8Array(4*h*u);const i=new Uint8ClampedArray(c.buffer);(0,s.TT)(o,e,t,i,h,u,!1)}return{size:[h,u],image:new Uint32Array(c.buffer),sdf:!1,simplePattern:!1,anchorX:0,anchorY:0}}}},48202:(e,t,n)=>{var i,a,r,o,l,s,c,h,u,d,f,g,m,p,y,C,w,S,M,v,R,P,T,F,x,b,z,_,D,I,A,B,L,O,k,N,E,U,W,H,Y,X,G,Z,q,J,$,V,Q,j,K,ee,te,ne,ie,ae,re,oe,le,se,ce;n.d(t,{$y:()=>P,AH:()=>a,CS:()=>$,DD:()=>h,Dd:()=>D,Em:()=>R,JS:()=>q,Ky:()=>u,Lh:()=>V,Qb:()=>re,RL:()=>i,RS:()=>le,TF:()=>v,Tx:()=>l,UR:()=>w,UX:()=>ae,bj:()=>J,eZ:()=>c,id:()=>x,kP:()=>N,of:()=>f,r4:()=>H,sj:()=>E,v2:()=>r,zQ:()=>_,zV:()=>C}),function(e){e[e.BUTT=0]="BUTT",e[e.ROUND=1]="ROUND",e[e.SQUARE=2]="SQUARE",e[e.UNKNOWN=4]="UNKNOWN"}(i||(i={})),function(e){e[e.BEVEL=0]="BEVEL",e[e.ROUND=1]="ROUND",e[e.MITER=2]="MITER",e[e.UNKNOWN=4]="UNKNOWN"}(a||(a={})),function(e){e[e.SCREEN=0]="SCREEN",e[e.MAP=1]="MAP"}(r||(r={})),function(e){e[e.Tint=0]="Tint",e[e.Ignore=1]="Ignore",e[e.Multiply=99]="Multiply"}(o||(o={})),function(e){e.Both="Both",e.JustBegin="JustBegin",e.JustEnd="JustEnd",e.None="None"}(l||(l={})),function(e){e[e.Mosaic=0]="Mosaic",e[e.Centered=1]="Centered"}(s||(s={})),function(e){e[e.Normal=0]="Normal",e[e.Superscript=1]="Superscript",e[e.Subscript=2]="Subscript"}(c||(c={})),function(e){e[e.MSSymbol=0]="MSSymbol",e[e.Unicode=1]="Unicode"}(h||(h={})),function(e){e[e.Unspecified=0]="Unspecified",e[e.TrueType=1]="TrueType",e[e.PSOpenType=2]="PSOpenType",e[e.TTOpenType=3]="TTOpenType",e[e.Type1=4]="Type1"}(u||(u={})),function(e){e[e.Display=0]="Display",e[e.Map=1]="Map"}(d||(d={})),function(e){e.None="None",e.Loop="Loop",e.Oscillate="Oscillate"}(f||(f={})),function(e){e[e.Z=0]="Z",e[e.X=1]="X",e[e.Y=2]="Y"}(g||(g={})),function(e){e[e.XYZ=0]="XYZ",e[e.ZXY=1]="ZXY",e[e.YXZ=2]="YXZ"}(m||(m={})),function(e){e[e.Rectangle=0]="Rectangle",e[e.RoundedRectangle=1]="RoundedRectangle",e[e.Oval=2]="Oval"}(p||(p={})),function(e){e[e.None=0]="None",e[e.Alpha=1]="Alpha",e[e.Screen=2]="Screen",e[e.Multiply=3]="Multiply",e[e.Add=4]="Add"}(y||(y={})),function(e){e[e.TTB=0]="TTB",e[e.RTL=1]="RTL",e[e.BTT=2]="BTT"}(C||(C={})),function(e){e[e.None=0]="None",e[e.SignPost=1]="SignPost",e[e.FaceNearPlane=2]="FaceNearPlane"}(w||(w={})),function(e){e[e.Float=0]="Float",e[e.String=1]="String",e[e.Boolean=2]="Boolean"}(S||(S={})),function(e){e[e.Intersect=0]="Intersect",e[e.Subtract=1]="Subtract"}(M||(M={})),function(e){e.OpenEnded="OpenEnded",e.Block="Block",e.Crossed="Crossed"}(v||(v={})),function(e){e.FullGeometry="FullGeometry",e.PerpendicularFromFirstSegment="PerpendicularFromFirstSegment",e.ReversedFirstSegment="ReversedFirstSegment",e.PerpendicularToSecondSegment="PerpendicularToSecondSegment",e.SecondSegmentWithTicks="SecondSegmentWithTicks",e.DoublePerpendicular="DoublePerpendicular",e.OppositeToFirstSegment="OppositeToFirstSegment",e.TriplePerpendicular="TriplePerpendicular",e.HalfCircleFirstSegment="HalfCircleFirstSegment",e.HalfCircleSecondSegment="HalfCircleSecondSegment",e.HalfCircleExtended="HalfCircleExtended",e.OpenCircle="OpenCircle",e.CoverageEdgesWithTicks="CoverageEdgesWithTicks",e.GapExtentWithDoubleTicks="GapExtentWithDoubleTicks",e.GapExtentMidline="GapExtentMidline",e.Chevron="Chevron",e.PerpendicularWithArc="PerpendicularWithArc",e.ClosedHalfCircle="ClosedHalfCircle",e.TripleParallelExtended="TripleParallelExtended",e.ParallelWithTicks="ParallelWithTicks",e.Parallel="Parallel",e.PerpendicularToFirstSegment="PerpendicularToFirstSegment",e.ParallelOffset="ParallelOffset",e.OffsetOpposite="OffsetOpposite",e.OffsetSame="OffsetSame",e.CircleWithArc="CircleWithArc",e.DoubleJog="DoubleJog",e.PerpendicularOffset="PerpendicularOffset",e.LineExcludingLastSegment="LineExcludingLastSegment",e.MultivertexArrow="MultivertexArrow",e.CrossedArrow="CrossedArrow",e.ChevronArrow="ChevronArrow",e.ChevronArrowOffset="ChevronArrowOffset",e.PartialFirstSegment="PartialFirstSegment",e.Arch="Arch",e.CurvedParallelTicks="CurvedParallelTicks",e.Arc90Degrees="Arc90Degrees"}(R||(R={})),function(e){e.Mitered="Mitered",e.Bevelled="Bevelled",e.Rounded="Rounded",e.Square="Square",e.TrueBuffer="TrueBuffer"}(P||(P={})),function(e){e.ClosePath="ClosePath",e.ConvexHull="ConvexHull",e.RectangularBox="RectangularBox"}(T||(T={})),function(e){e.BeginningOfLine="BeginningOfLine",e.EndOfLine="EndOfLine"}(F||(F={})),function(e){e.Mitered="Mitered",e.Bevelled="Bevelled",e.Rounded="Rounded",e.Square="Square"}(x||(x={})),function(e){e.Fast="Fast",e.Accurate="Accurate"}(b||(b={})),function(e){e.BeginningOfLine="BeginningOfLine",e.EndOfLine="EndOfLine"}(z||(z={})),function(e){e.Sinus="Sinus",e.Square="Square",e.Triangle="Triangle",e.Random="Random"}(_||(_={})),function(e){e[e.None=0]="None",e[e.Default=1]="Default",e[e.Force=2]="Force"}(D||(D={})),function(e){e[e.Buffered=0]="Buffered",e[e.Left=1]="Left",e[e.Right=2]="Right",e[e.AlongLine=3]="AlongLine"}(I||(I={})),function(e){e[e.Linear=0]="Linear",e[e.Rectangular=1]="Rectangular",e[e.Circular=2]="Circular",e[e.Buffered=3]="Buffered"}(A||(A={})),function(e){e[e.Discrete=0]="Discrete",e[e.Continuous=1]="Continuous"}(B||(B={})),function(e){e[e.AcrossLine=0]="AcrossLine",e[e.AloneLine=1]="AloneLine"}(L||(L={})),function(e){e[e.Left=0]="Left",e[e.Right=1]="Right",e[e.Center=2]="Center",e[e.Justify=3]="Justify"}(O||(O={})),function(e){e[e.Base=0]="Base",e[e.MidPoint=1]="MidPoint",e[e.ThreePoint=2]="ThreePoint",e[e.FourPoint=3]="FourPoint",e[e.Underline=4]="Underline",e[e.CircularCW=5]="CircularCW",e[e.CircularCCW=6]="CircularCCW"}(k||(k={})),function(e){e.Butt="Butt",e.Round="Round",e.Square="Square"}(N||(N={})),function(e){e.NoConstraint="NoConstraint",e.HalfPattern="HalfPattern",e.HalfGap="HalfGap",e.FullPattern="FullPattern",e.FullGap="FullGap",e.Custom="Custom"}(E||(E={})),function(e){e[e.None=-1]="None",e[e.Custom=0]="Custom",e[e.Circle=1]="Circle",e[e.OpenArrow=2]="OpenArrow",e[e.ClosedArrow=3]="ClosedArrow",e[e.Diamond=4]="Diamond"}(U||(U={})),function(e){e[e.ExtraLeading=0]="ExtraLeading",e[e.Multiple=1]="Multiple",e[e.Exact=2]="Exact"}(W||(W={})),function(e){e.Bevel="Bevel",e.Round="Round",e.Miter="Miter"}(H||(H={})),function(e){e[e.Default=0]="Default",e[e.String=1]="String",e[e.Numeric=2]="Numeric"}(Y||(Y={})),function(e){e[e.InsidePolygon=0]="InsidePolygon",e[e.PolygonCenter=1]="PolygonCenter",e[e.RandomlyInsidePolygon=2]="RandomlyInsidePolygon"}(X||(X={})),function(e){e[e.Tint=0]="Tint",e[e.Replace=1]="Replace",e[e.Multiply=2]="Multiply"}(G||(G={})),function(e){e[e.ClipAtBoundary=0]="ClipAtBoundary",e[e.RemoveIfCenterOutsideBoundary=1]="RemoveIfCenterOutsideBoundary",e[e.DoNotTouchBoundary=2]="DoNotTouchBoundary",e[e.DoNotClip=3]="DoNotClip"}(Z||(Z={})),function(e){e.NoConstraint="NoConstraint",e.WithMarkers="WithMarkers",e.WithFullGap="WithFullGap",e.WithHalfGap="WithHalfGap",e.Custom="Custom"}(q||(q={})),function(e){e.Fixed="Fixed",e.Random="Random",e.RandomFixedQuantity="RandomFixedQuantity"}(J||(J={})),function(e){e.LineMiddle="LineMiddle",e.LineBeginning="LineBeginning",e.LineEnd="LineEnd",e.SegmentMidpoint="SegmentMidpoint"}($||($={})),function(e){e.OnPolygon="OnPolygon",e.CenterOfMass="CenterOfMass",e.BoundingBoxCenter="BoundingBoxCenter"}(V||(V={})),function(e){e[e.Low=0]="Low",e[e.Medium=1]="Medium",e[e.High=2]="High"}(Q||(Q={})),function(e){e[e.MarkerCenter=0]="MarkerCenter",e[e.MarkerBounds=1]="MarkerBounds"}(j||(j={})),function(e){e[e.None=0]="None",e[e.PropUniform=1]="PropUniform",e[e.PropNonuniform=2]="PropNonuniform",e[e.DifUniform=3]="DifUniform",e[e.DifNonuniform=4]="DifNonuniform"}(K||(K={})),function(e){e.Tube="Tube",e.Strip="Strip",e.Wall="Wall"}(ee||(ee={})),function(e){e[e.Random=0]="Random",e[e.Increasing=1]="Increasing",e[e.Decreasing=2]="Decreasing",e[e.IncreasingThenDecreasing=3]="IncreasingThenDecreasing"}(te||(te={})),function(e){e[e.Relative=0]="Relative",e[e.Absolute=1]="Absolute"}(ne||(ne={})),function(e){e[e.Normal=0]="Normal",e[e.LowerCase=1]="LowerCase",e[e.Allcaps=2]="Allcaps"}(ie||(ie={})),function(e){e[e.LTR=0]="LTR",e[e.RTL=1]="RTL"}(ae||(ae={})),function(e){e.Draft="Draft",e.Picture="Picture",e.Text="Text"}(re||(re={})),function(e){e[e.Top=0]="Top",e[e.Center=1]="Center",e[e.Baseline=2]="Baseline",e[e.Bottom=3]="Bottom"}(oe||(oe={})),function(e){e[e.Right=0]="Right",e[e.Upright=1]="Upright"}(le||(le={})),function(e){e[e.Small=0]="Small",e[e.Medium=1]="Medium",e[e.Large=2]="Large"}(se||(se={})),function(e){e[e.Calm=0]="Calm",e[e.Rippled=1]="Rippled",e[e.Slight=2]="Slight",e[e.Moderate=3]="Moderate"}(ce||(ce={}))},26554:(e,t,n)=>{n.d(t,{Y:()=>o,m:()=>l});var i=n(46228),a=n(16889);const r=e=>"vertical"===e||"horizontal"===e||"cross"===e||"esriSFSCross"===e||"esriSFSVertical"===e||"esriSFSHorizontal"===e;function o(e,t,n){const i=(0,a.fp)(Math.ceil(n)),o=r(t)?8*i:16*i,l=2*i;e.width=o,e.height=o;const s=e.getContext("2d");s.strokeStyle="#FFFFFF",s.lineWidth=i,s.beginPath(),"vertical"!==t&&"cross"!==t&&"esriSFSCross"!==t&&"esriSFSVertical"!==t||(s.moveTo(o/2,-l),s.lineTo(o/2,o+l)),"horizontal"!==t&&"cross"!==t&&"esriSFSCross"!==t&&"esriSFSHorizontal"!==t||(s.moveTo(-l,o/2),s.lineTo(o+l,o/2)),"forward-diagonal"!==t&&"diagonal-cross"!==t&&"esriSFSDiagonalCross"!==t&&"esriSFSForwardDiagonal"!==t||(s.moveTo(-l,-l),s.lineTo(o+l,o+l),s.moveTo(o-l,-l),s.lineTo(o+l,l),s.moveTo(-l,o-l),s.lineTo(l,o+l)),"backward-diagonal"!==t&&"diagonal-cross"!==t&&"esriSFSBackwardDiagonal"!==t&&"esriSFSDiagonalCross"!==t||(s.moveTo(o+l,-l),s.lineTo(-l,o+l),s.moveTo(l,-l),s.lineTo(-l,l),s.moveTo(o+l,o-l),s.lineTo(o-l,o+l)),s.stroke();const c=s.getImageData(0,0,e.width,e.height),h=new Uint8Array(c.data);let u;for(let a=0;a<h.length;a+=4)u=h[a+3]/255,h[a]=h[a]*u,h[a+1]=h[a+1]*u,h[a+2]=h[a+2]*u;return[h,e.width,e.height]}function l(e,t){const n="Butt"===t,a="Square"===t,r=!n&&!a;e.length%2==1&&(e=[...e,...e]);const o=15.5;let l=0;for(const i of e)l+=i;const s=Math.round(l*o),c=new Float32Array(31*s),h=7.75;let u=0,d=0,f=.5,g=!0;for(const i of e){for(u=d,d+=i*o;f<=d;){let e=.5;for(;e<31;){const t=(e-.5)*s+f-.5,i=r?(e-o)*(e-o):Math.abs(e-o);c[t]=g?n?Math.max(Math.max(u+h-f,i),Math.max(f-d+h,i)):i:r?Math.min((f-u)*(f-u)+i,(f-d)*(f-d)+i):a?Math.min(Math.max(f-u,i),Math.max(d-f,i)):Math.min(Math.max(f-u+h,i),Math.max(d+h-f,i)),e++}f++}g=!g}const m=c.length,p=new Uint8Array(4*m);for(let y=0;y<m;++y){const e=(r?Math.sqrt(c[y]):c[y])/o;(0,i.I)(e,p,4*y)}return[p,s,31]}},60975:(e,t,n)=>{n.d(t,{previewCIMSymbol:()=>T});var i=n(17842),a=n(78915),r=n(51995),o=n(76200),l=n(66978),s=n(98991),c=n(59001),h=n(66726),u=n(16285),d=n(22532),f=n(31027),g=n(49729),m=n(83748);const p=e=>null!==e&&void 0!==e&&e.scaleFactor?e.scaleFactor:1;var y=n(37817),C=n(69157);const w=new class{constructor(e,t){this._spatialReference=e,this._avoidSDF=t,this._resourceCache=new Map,this._lazyImageDataCanvas=null,this._pictureMarkerCache=new Map,this._textRasterizer=new d.Z,this._cimResourceManager=new c.Z,this._rasterizer=new u.Z(this._cimResourceManager)}get _imageDataCanvas(){var e;return null!==(e=this._lazyImageDataCanvas)&&void 0!==e||(this._lazyImageDataCanvas=document.createElement("canvas")),this._lazyImageDataCanvas}get _imageDataContext(){return this._imageDataCanvas.getContext("2d",{willReadFrequently:!0})}get resourceManager(){return this._cimResourceManager}async rasterizeCIMSymbolAsync(e,t,n,i,r,o,l,s,c){if(!e)return null;const{data:u}=e;if(!u||"CIMSymbolReference"!==u.type||!u.symbol)return null;const{symbol:d}=u;o||(o=(0,f.JW)(d));const g=await a.E0.resolveSymbolOverrides(u,t,this._spatialReference,r,o,l,s),m=this._imageDataCanvas,p=this._cimResourceManager,y=[];a.B$.fetchResources(g,p,y),a.B$.fetchFonts(g,p,y),y.length>0&&await Promise.all(y);const{width:C,height:w}=n,S=function(e,t,n,i){const a=1,r=-t/2+a,o=t/2-a,l=n/2-a,s=-n/2+a;switch(e){case"esriGeometryPoint":return{x:0,y:0};case"esriGeometryPolyline":return{paths:[[[r,0],[0,0],[o,0]]]};default:return"legend"===i?{rings:[[[r,l],[o,0],[o,s],[r,s],[r,l]]]}:{rings:[[[r,l],[o,l],[o,s],[r,s],[r,l]]]}}}(o,C,w,i),M=a.B$.getEnvelope(g,S,p);if(!M)return null;const v=1.3333333333333333*(window.devicePixelRatio||1);let R=1,P=0,T=0;switch(d.type){case"CIMPointSymbol":case"CIMTextSymbol":{let e=1;M.width>C&&(e=C/M.width);let t=1;M.height>w&&(t=w/M.height),"preview"===i&&(M.width<C&&(e=C/M.width),M.height<w&&(t=w/M.height)),R=Math.min(e,t),P=M.x+M.width/2,T=M.y+M.height/2}break;case"CIMLineSymbol":{(c||M.height>w)&&(R=w/M.height),T=M.y+M.height/2;const e=M.x*R+C/2,t=(M.x+M.width)*R+C/2,{paths:n}=S;n[0][0][0]-=e/R,n[0][2][0]-=(t-C)/R}break;case"CIMPolygonSymbol":{P=M.x+M.width/2,T=M.y+M.height/2;const e=M.x*R+C/2,t=(M.x+M.width)*R+C/2,n=M.y*R+w/2,i=(M.y+M.height)*R+w/2,{rings:a}=S;e<0&&(a[0][0][0]-=e,a[0][3][0]-=e,a[0][4][0]-=e),n<0&&(a[0][0][1]+=n,a[0][1][1]+=n,a[0][4][1]+=n),t>C&&(a[0][1][0]-=t-C,a[0][2][0]-=t-C),i>w&&(a[0][2][1]+=i-w,a[0][3][1]+=i-w)}}m.width=C*v,m.height=w*v;m.width+=2,m.height+=2;const F=this._imageDataContext,x=h.zA.createIdentity();return x.translate(-P,-T),x.scale(R*v,-R*v),x.translate(C*v/2+1,w*v/2+1),F.clearRect(0,0,m.width,m.height),new h.cD(F,p,x,!0).drawSymbol(g,S),F.getImageData(0,0,m.width,m.height)}async analyzeCIMSymbol3D(e,t,n,i,r){const o=[],c=t?{geometryType:i,spatialReference:this._spatialReference,fields:t}:null,h=[];a.B$.fetchFonts(e.data.symbol,this._cimResourceManager,h),await Promise.all(h);const u=new s._(this._cimResourceManager,c);let d;await u.analyzeSymbolReference(e.data,this._avoidSDF,o),(0,l.k_)(r);for(const a of o)"CIMPictureMarker"!==a.cim.type&&"CIMPictureFill"!==a.cim.type&&"CIMPictureStroke"!==a.cim.type||(d||(d=[]),d.push(this._fetchPictureMarkerResource(a,r))),n&&"text"===a.type&&"string"==typeof a.text&&a.text.includes("[")&&(a.text=(0,f.Qs)(n,a.text,a.cim.textCase));return d&&await Promise.all(d),o}rasterizeCIMSymbol3D(e,t,n,i,a,r){const o=[];for(const s of e){i&&"function"==typeof i.scaleFactor&&(i.scaleFactor=i.scaleFactor(t,a,r));const e=this._getRasterizedResource(s,t,n,i,a,r);if(!e)continue;let c=0,h=e.anchorX||0,u=e.anchorY||0,d=!1,g=0,m=0;if("esriGeometryPoint"===n){var l;const e=p(i);if(g=(0,f.hf)(s.offsetX,t,a,r)*e||0,m=(0,f.hf)(s.offsetY,t,a,r)*e||0,"marker"===s.type)c=(0,f.hf)(s.rotation,t,a,r)||0,d=null!==(l=s.rotateClockwise)&&void 0!==l&&l;else if("text"===s.type){if(c=(0,f.hf)(s.angle,t,a,r)||0,void 0!==s.horizontalAlignment)switch(s.horizontalAlignment){case"left":h=-.5;break;case"right":h=.5;break;default:h=0}if(void 0!==s.verticalAlignment)switch(s.verticalAlignment){case"top":u=.5;break;case"bottom":u=-.5;break;case"baseline":u=-.25;break;default:u=0}}}null!=e&&o.push({angle:c,rotateClockWise:d,anchorX:h,anchorY:u,offsetX:g,offsetY:m,rasterizedResource:e})}return this.getSymbolImage(o)}getSymbolImage(e){const t=document.createElement("canvas"),n=t.getContext("2d");let a=0,r=0,o=0,l=0;const s=[];for(let d=0;d<e.length;d++){const t=e[d],c=t.rasterizedResource;if(!c)continue;const h=c.size,u=t.offsetX,f=t.offsetY,g=t.anchorX,m=t.anchorY,p=t.rotateClockWise||!1;let y=t.angle,C=(0,i.F2)(u)-h[0]*(.5+g),w=(0,i.F2)(f)-h[1]*(.5+m),S=C+h[0],M=w+h[1];if(y){p&&(y=-y);const e=Math.sin(y*Math.PI/180),t=Math.cos(y*Math.PI/180),n=C*t-w*e,i=C*e+w*t,a=C*t-M*e,r=C*e+M*t,o=S*t-M*e,l=S*e+M*t,s=S*t-w*e,c=S*e+w*t;C=Math.min(n,a,o,s),w=Math.min(i,r,l,c),S=Math.max(n,a,o,s),M=Math.max(i,r,l,c)}a=C<a?C:a,r=w<r?w:r,o=S>o?S:o,l=M>l?M:l;const v=n.createImageData(c.size[0],c.size[1]);v.data.set(new Uint8ClampedArray(c.image.buffer));const R={offsetX:u,offsetY:f,rotateClockwise:p,angle:y,rasterizedImage:v,anchorX:g,anchorY:m};s.push(R)}t.width=o-a,t.height=l-r;const c=-a,h=l;for(let d=0;d<s.length;d++){const e=s[d],t=this._imageDataToCanvas(e.rasterizedImage),a=e.rasterizedImage.width,r=e.rasterizedImage.height,o=c-a*(.5+e.anchorX),l=h-r*(.5-e.anchorY);if(e.angle){const a=(360-e.angle)*Math.PI/180;n.save(),n.translate((0,i.F2)(e.offsetX),-(0,i.F2)(e.offsetY)),n.translate(c,h),n.rotate(a),n.translate(-c,-h),n.drawImage(t,o,l),n.restore()}else n.drawImage(t,o+(0,i.F2)(e.offsetX),l-(0,i.F2)(e.offsetY))}const u=new m.e({x:c/t.width-.5,y:h/t.height-.5});return{imageData:0!==t.width&&0!==t.height?n.getImageData(0,0,t.width,t.height):n.createImageData(1,1),anchorPosition:u}}async _fetchPictureMarkerResource(e,t){const n=e.materialHash;if(!this._pictureMarkerCache.get(n)){const i=(await(0,o.Z)(e.cim.url,{responseType:"image",signal:null===t||void 0===t?void 0:t.signal})).data;this._pictureMarkerCache.set(n,i)}}_imageDataToCanvas(e){const t=this._imageDataCanvas,n=this._imageDataContext;return t.width=e.width,t.height=e.height,n.putImageData(e,0,0),t}_imageTo32Array(e,t,n,i){const a=this._imageDataCanvas,o=this._imageDataContext;if(a.width=t,a.height=n,o.drawImage(e,0,0,t,n),i){o.save();const a=new r.Z(i);o.fillStyle=a.toHex(),o.globalCompositeOperation="multiply",o.fillRect(0,0,t,n),o.globalCompositeOperation="destination-atop",o.drawImage(e,0,0,t,n),o.restore()}return new Uint32Array(o.getImageData(0,0,t,n).data.buffer)}_getRasterizedResource(e,t,n,i,a,r){let o,l,c;if("text"===e.type)return this._rasterizeTextResource(e,t,i,a,r);({analyzedCIM:o,hash:l}=function(e,t,n,i){let a,r;"function"==typeof e.materialHash?(a=(0,e.materialHash)(t,n,i),r=(0,s.S)(e.cim,e.materialOverrides)):(a=e.materialHash,r=e.cim);return{analyzedCIM:r,hash:a}}(e,t,a,r));const h=p(i);if("CIMPictureMarker"===e.cim.type){const n=(0,f.hf)(e.size,t,a,r)*h,{image:i,width:o,height:l}=this._getPictureResource(e,n,(0,f.hf)(e.color,t,a,r));return c={image:i,size:[o,l],sdf:!1,simplePattern:!1,anchorX:e.anchorPoint?e.anchorPoint.x:0,anchorY:e.anchorPoint?e.anchorPoint.y:0},c}(0,g.FW)(o,h,{preserveOutlineWidth:!1});const u=o;l+=n,i&&(l+=JSON.stringify(i));const d=this._resourceCache;return d.has(l)?d.get(l):(c=this._rasterizer.rasterizeJSONResource({cim:u,type:e.type,url:e.url,mosaicHash:l,size:null,path:null},window.devicePixelRatio||1,this._avoidSDF),d.set(l,c),c)}_rasterizeTextResource(e,t,n,i,a){var r,o,l;const s=p(n),c=(0,f.hf)(e.text,t,i,a);if(!c||0===c.length)return null;const h=e.cim,u=(0,f.hf)((null===h||void 0===h?void 0:h.fontFamilyName)||e.fontName,t,i,a),d=(0,f.hf)((null===h||void 0===h||null===(r=h.font)||void 0===r?void 0:r.style)||e.style,t,i,a),g=(0,f.hf)((null===h||void 0===h||null===(o=h.font)||void 0===o?void 0:o.weight)||e.weight,t,i,a),m=(0,f.hf)((null===h||void 0===h||null===(l=h.font)||void 0===l?void 0:l.decoration)||e.decoration,t,i,a),y=(0,f.hf)(e.size,t,i,a)*s,C=(0,f.hf)(e.horizontalAlignment,t,i,a),w=(0,f.hf)(e.verticalAlignment,t,i,a),S=(0,f.nn)((0,f.hf)(e.color,t,i,a)),M=(0,f.nn)((0,f.hf)(e.outlineColor,t,i,a)),v=(0,f.hf)(e.outlineSize,t,i,a),R=null!=e.backgroundColor?(0,f.nn)(e.backgroundColor):null,P=null!=e.borderLineColor?(0,f.nn)(e.borderLineColor):null,T=null!=e.borderLineWidth?e.borderLineWidth:null,F={color:S,size:y,horizontalAlignment:C,verticalAlignment:w,font:{family:u,style:d,weight:g,decoration:m},halo:{size:v||0,color:M,style:d},backgroundColor:R,borderLine:null!=P&&null!=T?{color:P,size:T}:null,pixelRatio:1,premultiplyColors:!this._avoidSDF};return this._textRasterizer.rasterizeText(c,F)}_getPictureResource(e,t,n){const a=this._pictureMarkerCache.get(e.materialHash);if(!a)return null;const r=a.height/a.width,o=t?r>1?(0,i.F2)(t):(0,i.F2)(t)/r:a.width,l=t?r>1?(0,i.F2)(t)*r:(0,i.F2)(t):a.height;return{image:this._imageTo32Array(a,o,l,n),width:o,height:l}}}(null,!0),S=(0,i.Wz)(y.b_.size),M=(0,i.Wz)(y.b_.maxSize),v=(0,i.Wz)(y.b_.lineWidth),R=1;async function P(e,t,n){const i=null===t||void 0===t?void 0:t.size;let r=null!=i&&"object"==typeof i&&"width"in i?i.width:i,o=null!=i&&"object"==typeof i&&"height"in i?i.height:i;if(null==r||null==o)if("esriGeometryPolygon"===n)r=S,o=S;else{const i=await async function(e,t,n){const{feature:i,fieldMap:r,viewParams:o}=t.cimOptions||t,l=await a.E0.resolveSymbolOverrides(e.data,i,null,r,n,null,o);if(!l)return null;(e=e.clone()).data={type:"CIMSymbolReference",symbol:l},e.data.primitiveOverrides=void 0;const s=[];return a.B$.fetchResources(l,w.resourceManager,s),a.B$.fetchFonts(l,w.resourceManager,s),s.length>0&&await Promise.all(s),a.B$.getEnvelope(l,null,w.resourceManager)}(e,t,n);i&&(r=i.width,o=i.height),"esriGeometryPolyline"===n&&(r=v),r=null!=r&&isFinite(r)?Math.min(r,M):S,o=null!=o&&isFinite(o)?Math.max(Math.min(o,M),R):S}return"legend"===t.style&&"esriGeometryPolyline"===n&&(r=v),{width:r,height:o}}async function T(e){var t,n,a;let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{node:o,opacity:l,symbolConfig:s}=r,c=null!=s&&"object"==typeof s&&"isSquareFill"in s&&s.isSquareFill,h=r.cimOptions||r,u=h.geometryType||(0,f.JW)(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.symbol),d=await P(e,r,u),{feature:g,fieldMap:m}=h,p=c||"esriGeometryPolygon"!==u?"preview":"legend",y=await w.rasterizeCIMSymbolAsync(e,g,d,p,m,u,null,h.viewParams,h.allowScalingUp);if(!y)return null;const{width:S,height:M}=y,v=document.createElement("canvas");v.width=S,v.height=M,v.getContext("2d").putImageData(y,0,0);const R=(0,i.F2)(d.width),T=(0,i.F2)(d.height),F=new Image(R,T);F.src=v.toDataURL(),F.ariaLabel=null!==(n=r.ariaLabel)&&void 0!==n?n:null,F.alt=null!==(a=r.ariaLabel)&&void 0!==a?a:"",null!=l&&(F.style.opacity="".concat(l));let x=F;if(null!=r.effectView){const e={shape:{type:"image",x:0,y:0,width:R,height:T,src:F.src},fill:null,stroke:null,offset:[0,0]};x=(0,C.wh)([[e]],[R,T],{effectView:r.effectView,ariaLabel:r.ariaLabel})}return o&&x&&o.appendChild(x),x}}}]);
//# sourceMappingURL=281.c9164bf7.chunk.js.map