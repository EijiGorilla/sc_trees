"use strict";(self.webpackChunksc_trees=self.webpackChunksc_trees||[]).push([[6128],{57996:(e,n,t)=>{t.d(n,{r6:()=>d});t(51508),t(10064);var i,o=t(84652);t(53896),t(48202),t(75021);function r(e){switch(e){case"circle":return{rings:[[[8.5,.2],[7.06,.33],[5.66,.7],[4.35,1.31],[3.16,2.14],[2.14,3.16],[1.31,4.35],[.7,5.66],[.33,7.06],[.2,8.5],[.33,9.94],[.7,11.34],[1.31,12.65],[2.14,13.84],[3.16,14.86],[4.35,15.69],[5.66,16.3],[7.06,16.67],[8.5,16.8],[9.94,16.67],[11.34,16.3],[12.65,15.69],[13.84,14.86],[14.86,13.84],[15.69,12.65],[16.3,11.34],[16.67,9.94],[16.8,8.5],[16.67,7.06],[16.3,5.66],[15.69,4.35],[14.86,3.16],[13.84,2.14],[12.65,1.31],[11.34,.7],[9.94,.33],[8.5,.2]]]};case"square":return{rings:[[[.5,.5],[.5,16.5],[16.5,16.5],[16.5,.5],[.5,.5]]]};case"diamond":return{rings:[[[8.5,.5],[.2,8.5],[8.5,16.5],[16.5,8.5],[8.5,.5]]]};case"hexagon-pointy":return{rings:[[[15.86,12.75],[15.86,4.25],[8.5,0],[1.14,4.25],[1.14,12.75],[8.5,17],[15.86,12.75]]]};case"hexagon-flat":return{rings:[[[12.75,15.86],[17,8.5],[12.75,1.14],[4.25,1.14],[0,8.5],[4.25,15.86],[12.75,15.86]]]}}}function l(e){return"CIMVectorMarker"===e?.type?e.markerGraphics?.[0]:void 0}function a(e){return"CIMPolygonSymbol"===e?.symbol?.type?e.symbol.symbolLayers?.[0]:void 0}function u(e,n){"CIMVectorMarker"===e?.type&&null!=n&&(e.size=n)}function c(e,n){const t=l(e);t&&null!=n&&(t.geometry=r(n))}function s(e,n){const t=a(l(e));t&&null!=n&&(t.color=n.toArray())}function f(e,n,t){const i=a(l(e));i&&null!=n&&t&&(i.colorLocked=n)}function d(e,n){const{outerRingSize:t,innerDotSize:r,type:l,color:a,colorLocked:d,primitiveOverrides:p}=n,m="CIMPolygonSymbol"===e.data.symbol?.type?e.data.symbol.symbolLayers:null;if(2===m?.length)for(const o of m){const e=o.primitiveName===i.OuterRing;u(o,e?t:r),c(o,l),s(o,a),f(o,d,e)}return null!=t&&null!=r&&(e.data.primitiveOverrides=null),void 0!==p&&(e.data.primitiveOverrides=(0,o.d9)(p)),e}!function(e){e.OuterRing="reference-size-outer-ring",e.InnerDot="reference-size-inner-dot"}(i||(i={}))},48202:(e,n,t)=>{var i,o,r,l,a,u,c,s,f,d,p,m,g,y,S,C,h,T,P,R,b,M,v,B,L,N,O,D,A,w,k,E,x,F,W,z,I,U,H,G,Z,q,V,Y,J,X,Q,K,$,j,_,ee,ne,te,ie,oe,re,le,ae,ue,ce;t.d(n,{$y:()=>M,AH:()=>o,CS:()=>Q,DD:()=>s,Dd:()=>A,Em:()=>b,JS:()=>J,Ky:()=>f,Lh:()=>K,Qb:()=>re,RL:()=>i,RS:()=>ae,TF:()=>R,Tx:()=>a,UR:()=>h,UX:()=>oe,bj:()=>X,eZ:()=>c,id:()=>L,kP:()=>z,of:()=>p,r4:()=>G,sj:()=>I,v2:()=>r,zQ:()=>D,zV:()=>C}),function(e){e[e.BUTT=0]="BUTT",e[e.ROUND=1]="ROUND",e[e.SQUARE=2]="SQUARE",e[e.UNKNOWN=4]="UNKNOWN"}(i||(i={})),function(e){e[e.BEVEL=0]="BEVEL",e[e.ROUND=1]="ROUND",e[e.MITER=2]="MITER",e[e.UNKNOWN=4]="UNKNOWN"}(o||(o={})),function(e){e[e.SCREEN=0]="SCREEN",e[e.MAP=1]="MAP"}(r||(r={})),function(e){e[e.Tint=0]="Tint",e[e.Ignore=1]="Ignore",e[e.Multiply=99]="Multiply"}(l||(l={})),function(e){e.Both="Both",e.JustBegin="JustBegin",e.JustEnd="JustEnd",e.None="None"}(a||(a={})),function(e){e[e.Mosaic=0]="Mosaic",e[e.Centered=1]="Centered"}(u||(u={})),function(e){e[e.Normal=0]="Normal",e[e.Superscript=1]="Superscript",e[e.Subscript=2]="Subscript"}(c||(c={})),function(e){e[e.MSSymbol=0]="MSSymbol",e[e.Unicode=1]="Unicode"}(s||(s={})),function(e){e[e.Unspecified=0]="Unspecified",e[e.TrueType=1]="TrueType",e[e.PSOpenType=2]="PSOpenType",e[e.TTOpenType=3]="TTOpenType",e[e.Type1=4]="Type1"}(f||(f={})),function(e){e[e.Display=0]="Display",e[e.Map=1]="Map"}(d||(d={})),function(e){e.None="None",e.Loop="Loop",e.Oscillate="Oscillate"}(p||(p={})),function(e){e[e.Z=0]="Z",e[e.X=1]="X",e[e.Y=2]="Y"}(m||(m={})),function(e){e[e.XYZ=0]="XYZ",e[e.ZXY=1]="ZXY",e[e.YXZ=2]="YXZ"}(g||(g={})),function(e){e[e.Rectangle=0]="Rectangle",e[e.RoundedRectangle=1]="RoundedRectangle",e[e.Oval=2]="Oval"}(y||(y={})),function(e){e[e.None=0]="None",e[e.Alpha=1]="Alpha",e[e.Screen=2]="Screen",e[e.Multiply=3]="Multiply",e[e.Add=4]="Add"}(S||(S={})),function(e){e[e.TTB=0]="TTB",e[e.RTL=1]="RTL",e[e.BTT=2]="BTT"}(C||(C={})),function(e){e[e.None=0]="None",e[e.SignPost=1]="SignPost",e[e.FaceNearPlane=2]="FaceNearPlane"}(h||(h={})),function(e){e[e.Float=0]="Float",e[e.String=1]="String",e[e.Boolean=2]="Boolean"}(T||(T={})),function(e){e[e.Intersect=0]="Intersect",e[e.Subtract=1]="Subtract"}(P||(P={})),function(e){e.OpenEnded="OpenEnded",e.Block="Block",e.Crossed="Crossed"}(R||(R={})),function(e){e.FullGeometry="FullGeometry",e.PerpendicularFromFirstSegment="PerpendicularFromFirstSegment",e.ReversedFirstSegment="ReversedFirstSegment",e.PerpendicularToSecondSegment="PerpendicularToSecondSegment",e.SecondSegmentWithTicks="SecondSegmentWithTicks",e.DoublePerpendicular="DoublePerpendicular",e.OppositeToFirstSegment="OppositeToFirstSegment",e.TriplePerpendicular="TriplePerpendicular",e.HalfCircleFirstSegment="HalfCircleFirstSegment",e.HalfCircleSecondSegment="HalfCircleSecondSegment",e.HalfCircleExtended="HalfCircleExtended",e.OpenCircle="OpenCircle",e.CoverageEdgesWithTicks="CoverageEdgesWithTicks",e.GapExtentWithDoubleTicks="GapExtentWithDoubleTicks",e.GapExtentMidline="GapExtentMidline",e.Chevron="Chevron",e.PerpendicularWithArc="PerpendicularWithArc",e.ClosedHalfCircle="ClosedHalfCircle",e.TripleParallelExtended="TripleParallelExtended",e.ParallelWithTicks="ParallelWithTicks",e.Parallel="Parallel",e.PerpendicularToFirstSegment="PerpendicularToFirstSegment",e.ParallelOffset="ParallelOffset",e.OffsetOpposite="OffsetOpposite",e.OffsetSame="OffsetSame",e.CircleWithArc="CircleWithArc",e.DoubleJog="DoubleJog",e.PerpendicularOffset="PerpendicularOffset",e.LineExcludingLastSegment="LineExcludingLastSegment",e.MultivertexArrow="MultivertexArrow",e.CrossedArrow="CrossedArrow",e.ChevronArrow="ChevronArrow",e.ChevronArrowOffset="ChevronArrowOffset",e.PartialFirstSegment="PartialFirstSegment",e.Arch="Arch",e.CurvedParallelTicks="CurvedParallelTicks",e.Arc90Degrees="Arc90Degrees",e.TipWithPerpendicularAndTicks="TipWithPerpendicularAndTicks"}(b||(b={})),function(e){e.Mitered="Mitered",e.Bevelled="Bevelled",e.Rounded="Rounded",e.Square="Square",e.TrueBuffer="TrueBuffer"}(M||(M={})),function(e){e.ClosePath="ClosePath",e.ConvexHull="ConvexHull",e.RectangularBox="RectangularBox"}(v||(v={})),function(e){e.BeginningOfLine="BeginningOfLine",e.EndOfLine="EndOfLine"}(B||(B={})),function(e){e.Mitered="Mitered",e.Bevelled="Bevelled",e.Rounded="Rounded",e.Square="Square"}(L||(L={})),function(e){e.Fast="Fast",e.Accurate="Accurate"}(N||(N={})),function(e){e.BeginningOfLine="BeginningOfLine",e.EndOfLine="EndOfLine"}(O||(O={})),function(e){e.Sinus="Sinus",e.Square="Square",e.Triangle="Triangle",e.Random="Random"}(D||(D={})),function(e){e[e.None=0]="None",e[e.Default=1]="Default",e[e.Force=2]="Force"}(A||(A={})),function(e){e[e.Buffered=0]="Buffered",e[e.Left=1]="Left",e[e.Right=2]="Right",e[e.AlongLine=3]="AlongLine"}(w||(w={})),function(e){e[e.Linear=0]="Linear",e[e.Rectangular=1]="Rectangular",e[e.Circular=2]="Circular",e[e.Buffered=3]="Buffered"}(k||(k={})),function(e){e[e.Discrete=0]="Discrete",e[e.Continuous=1]="Continuous"}(E||(E={})),function(e){e[e.AcrossLine=0]="AcrossLine",e[e.AloneLine=1]="AloneLine"}(x||(x={})),function(e){e[e.Left=0]="Left",e[e.Right=1]="Right",e[e.Center=2]="Center",e[e.Justify=3]="Justify"}(F||(F={})),function(e){e[e.Base=0]="Base",e[e.MidPoint=1]="MidPoint",e[e.ThreePoint=2]="ThreePoint",e[e.FourPoint=3]="FourPoint",e[e.Underline=4]="Underline",e[e.CircularCW=5]="CircularCW",e[e.CircularCCW=6]="CircularCCW"}(W||(W={})),function(e){e.Butt="Butt",e.Round="Round",e.Square="Square"}(z||(z={})),function(e){e.NoConstraint="NoConstraint",e.HalfPattern="HalfPattern",e.HalfGap="HalfGap",e.FullPattern="FullPattern",e.FullGap="FullGap",e.Custom="Custom"}(I||(I={})),function(e){e[e.None=-1]="None",e[e.Custom=0]="Custom",e[e.Circle=1]="Circle",e[e.OpenArrow=2]="OpenArrow",e[e.ClosedArrow=3]="ClosedArrow",e[e.Diamond=4]="Diamond"}(U||(U={})),function(e){e[e.ExtraLeading=0]="ExtraLeading",e[e.Multiple=1]="Multiple",e[e.Exact=2]="Exact"}(H||(H={})),function(e){e.Bevel="Bevel",e.Round="Round",e.Miter="Miter"}(G||(G={})),function(e){e[e.Default=0]="Default",e[e.String=1]="String",e[e.Numeric=2]="Numeric"}(Z||(Z={})),function(e){e[e.InsidePolygon=0]="InsidePolygon",e[e.PolygonCenter=1]="PolygonCenter",e[e.RandomlyInsidePolygon=2]="RandomlyInsidePolygon"}(q||(q={})),function(e){e[e.Tint=0]="Tint",e[e.Replace=1]="Replace",e[e.Multiply=2]="Multiply"}(V||(V={})),function(e){e[e.ClipAtBoundary=0]="ClipAtBoundary",e[e.RemoveIfCenterOutsideBoundary=1]="RemoveIfCenterOutsideBoundary",e[e.DoNotTouchBoundary=2]="DoNotTouchBoundary",e[e.DoNotClip=3]="DoNotClip"}(Y||(Y={})),function(e){e.NoConstraint="NoConstraint",e.WithMarkers="WithMarkers",e.WithFullGap="WithFullGap",e.WithHalfGap="WithHalfGap",e.Custom="Custom"}(J||(J={})),function(e){e.Fixed="Fixed",e.Random="Random",e.RandomFixedQuantity="RandomFixedQuantity"}(X||(X={})),function(e){e.LineMiddle="LineMiddle",e.LineBeginning="LineBeginning",e.LineEnd="LineEnd",e.SegmentMidpoint="SegmentMidpoint"}(Q||(Q={})),function(e){e.OnPolygon="OnPolygon",e.CenterOfMass="CenterOfMass",e.BoundingBoxCenter="BoundingBoxCenter"}(K||(K={})),function(e){e[e.Low=0]="Low",e[e.Medium=1]="Medium",e[e.High=2]="High"}($||($={})),function(e){e[e.MarkerCenter=0]="MarkerCenter",e[e.MarkerBounds=1]="MarkerBounds"}(j||(j={})),function(e){e[e.None=0]="None",e[e.PropUniform=1]="PropUniform",e[e.PropNonuniform=2]="PropNonuniform",e[e.DifUniform=3]="DifUniform",e[e.DifNonuniform=4]="DifNonuniform"}(_||(_={})),function(e){e.Tube="Tube",e.Strip="Strip",e.Wall="Wall"}(ee||(ee={})),function(e){e[e.Random=0]="Random",e[e.Increasing=1]="Increasing",e[e.Decreasing=2]="Decreasing",e[e.IncreasingThenDecreasing=3]="IncreasingThenDecreasing"}(ne||(ne={})),function(e){e[e.Relative=0]="Relative",e[e.Absolute=1]="Absolute"}(te||(te={})),function(e){e[e.Normal=0]="Normal",e[e.LowerCase=1]="LowerCase",e[e.Allcaps=2]="Allcaps"}(ie||(ie={})),function(e){e[e.LTR=0]="LTR",e[e.RTL=1]="RTL"}(oe||(oe={})),function(e){e.Draft="Draft",e.Picture="Picture",e.Text="Text"}(re||(re={})),function(e){e[e.Top=0]="Top",e[e.Center=1]="Center",e[e.Baseline=2]="Baseline",e[e.Bottom=3]="Bottom"}(le||(le={})),function(e){e[e.Right=0]="Right",e[e.Upright=1]="Upright"}(ae||(ae={})),function(e){e[e.Small=0]="Small",e[e.Medium=1]="Medium",e[e.Large=2]="Large"}(ue||(ue={})),function(e){e[e.Calm=0]="Calm",e[e.Rippled=1]="Rippled",e[e.Slight=2]="Slight",e[e.Moderate=3]="Moderate"}(ce||(ce={}))},66128:(e,n,t)=>{t.d(n,{QB:()=>m,getRampStops:()=>P,p5:()=>p});var i=t(51995),o=t(51508),r=t(4075),l=t(57996),a=t(49729),u=t(74579),c=t(75434),s=(t(80975),t(37384)),f=t(16072),d=t(16851);const p=30,m=12,g=24,y=[255,255,255],S=[200,200,200],C=[128,128,128],h=20,T=5;async function P(e,n,t,i,o,l,a){const s=n.legendOptions,f=s?.customValues,d=a||await v(e,t),p=n.stops,m=!!d,y=!!f,S=null!=n.minSize&&null!=n.maxSize,C=p&&p.length>1,h=!!n.target;if(!m||!y&&!(S||C&&!h))return;const T=(0,u.YW)(d);let P=!1,B=null,L=null;B=T&&!C?(0,r.NM)([n.minDataValue,n.maxDataValue]):f??await N(n,d,i,o?.type);const D=e?.authoringInfo,k="univariate-color-size"===D?.type,E=k&&"above-and-below"===D?.univariateTheme,x=!!(0,c.Kd)(e);if(!B&&C&&(B=p.map((e=>e.value)),P=p.some((e=>!!e.label)),"flow"===e.type&&(B=(0,r.NM)(B)),P&&(L=p.map((e=>e.label)))),T&&null!=B&&B?.length>2&&!E&&(B=[B[0],B[B.length-1]]),!B)return null;k&&5!==B?.length&&(B=O({minSize:B[0],maxSize:B[B.length-1]}));const F=T?R(e,B):null,W=(0,u.Y6)(d),z=P?null:function(e,n){const t=e.length-1;return e.map(((e,i)=>(0,c.MN)(e,i,t,n)))}(B,l);return(await Promise.all(B.map((async(r,l)=>{const a=T?F[l]:await A(n,d,r,i,o?.type);return{value:r,symbol:!x||"class-breaks"!==e.type&&"unique-value"!==e.type?w(E&&"class-breaks"===e.type?M(e,l):d,a):b(e,a,n.maxSize,t)??d,label:P?L[l]:z[l],size:x?g:a,outlineSize:W}})))).reverse()}function R(e,n){const t=e?.authoringInfo,i="univariate-color-size"===t?.type;let o=[m,p];if(i){const e=n[0],t=n[n.length-1],i=m,r=p;o=n.map((n=>i+(n-e)/(t-e)*(r-i)))}return i&&"below"===t?.univariateTheme&&o.reverse(),o}function b(e,n,t,o){const r="class-breaks"===e.type,a=r?e.classBreakInfos?.[0]?.symbol?.clone():e.uniqueValueInfos?.[0]?.symbol?.clone();return a&&"type"in a&&"cim"===a.type?((0,l.r6)(a,{color:o??(r?null:new i.Z(S)),innerDotSize:n*(g/t)||1,outerRingSize:g}),a):null}function M(e,n){const t=e.classBreakInfos,i=t.length,o=i<2||!(n>=2)?t[0].symbol.clone():t[i-1].symbol.clone();return e.visualVariables.some((e=>"color"===e.type))&&(o.type.includes("3d")?B(o):L(o)),o}async function v(e,n){if("flow"===e.type)return(0,c.y$)(e,n);if("pie-chart"===e.type)return new f.Z({color:null,outline:e.outline?.width?e.outline:new d.Z});let t=null,i=null;if("simple"===e.type)t=e.symbol;else if("class-breaks"===e.type){const n=e.classBreakInfos;t=n&&n[0]&&n[0].symbol,i=n.length>1}else if("unique-value"===e.type){const n=e.uniqueValueInfos;t=n?.[0]?.symbol,i=null!=n&&n.length>1}return!t||function(e){if(e)return(0,o.dU)(e)?!!e.symbolLayers&&e.symbolLayers.some((e=>e&&"fill"===e.type)):e.type.includes("fill");return!1}(t)?null:(t=t.clone(),(n||i)&&(t.type.includes("3d")?B(t):L(t)),t)}function B(e){"line-3d"===e.type?e.symbolLayers.forEach((e=>{e.material={color:C}})):e.symbolLayers.forEach((e=>{"icon"!==e.type||e.resource?.href?e.material={color:S}:(e.material={color:y},e.outline={color:C,size:1.5})}))}function L(e){const n=(0,s.$o)();if("cim"===e.type)(0,a.ZB)(e,new i.Z(S));else if(e.type.includes("line"))e.color=C;else if(e.color=n?C:y,"simple-marker"===e.type)if(e.outline){const n=e.outline?.color?.toHex();"#ffffff"===n&&(e.outline.color=C)}else e.outline={color:C,width:1.5}}async function N(e,n,i,o){const l=(await Promise.resolve().then(t.bind(t,56011))).getSizeRangeAtScale(e,i,o),a=l&&O(l);if(!l||!a)return;let u=a.map((n=>function(e,n,t){const i=t.minSize,o=t.maxSize,r=n.minDataValue,l=n.maxDataValue;let a;a=e<=i?r:e>=o?l:(e-i)/(o-i)*(l-r)+r;return a}(n,e,l)));u=(0,r.NM)(u);for(let t=1;t<u.length-1;t++){const r=await D(e,n,u[t],u[t-1],i,o);r&&(u[t]=r[0],a[t]=r[1])}return u}function O(e){const n=e.minSize,t=e.maxSize,i=T,o=(t-n)/(i-1),r=[];for(let l=0;l<i;l++)r.push(n+o*l);return r}async function D(e,n,t,i,o,l){const a=await A(e,n,t,o,l),u=await A(e,n,i,o,l),c=(0,r.D2)(t),s=c.fractional,f=h;let d=c.integer,p=null,m=null;t>0&&t<1&&(p=10**s,d=(0,r.D2)(t*=p).integer);for(let g=d-1;g>=0;g--){const i=10**g;let c=Math.floor(t/i)*i,s=Math.ceil(t/i)*i;null!=p&&(c/=p,s/=p);let d=(c+s)/2;[,d]=(0,r.NM)([c,d,s],{indexes:[1]});const y=await A(e,n,c,o,l),S=await A(e,n,s,o,l),C=await A(e,n,d,o,l),h=(0,r.f1)(a,y,u,null),T=(0,r.f1)(a,S,u,null),P=(0,r.f1)(a,C,u,null);let R=h.previous<=f,b=T.previous<=f;if(R&&b&&(h.previous<=T.previous?(R=!0,b=!1):(b=!0,R=!1)),R?m=[c,y]:b?m=[s,S]:P.previous<=f&&(m=[d,C]),m)break}return m}async function A(e,n,i,o,r){const{getSize:l}=await Promise.resolve().then(t.bind(t,56011));return l(e,i,{scale:o,view:r,shape:"simple-marker"===n.type?n.style:null})}function w(e,n){const t=e.clone();if((0,o.dU)(t))(0,u.YW)(t)||t.symbolLayers.forEach((e=>{"fill"!==e.type&&(e.size=n)}));else if(function(e){return"esri.symbols.SimpleMarkerSymbol"===e.declaredClass}(t))t.size=n;else if(function(e){return"esri.symbols.PictureMarkerSymbol"===e.declaredClass}(t)){const e=t.width,i=t.height;t.height=n,t.width=n*(e/i)}else!function(e){return"esri.symbols.SimpleLineSymbol"===e.declaredClass}(t)?function(e){return"esri.symbols.TextSymbol"===e.declaredClass}(t)&&t.font&&(t.font.size=n):t.width=n;return t}}}]);
//# sourceMappingURL=6128.878d76ef.chunk.js.map