"use strict";(self.webpackChunksc_trees=self.webpackChunksc_trees||[]).push([[7269],{65630:(e,t,r)=>{r.d(t,{D:()=>G,b:()=>z});var i=r(22357),n=r(83734),o=r(37081),a=r(33280),s=r(94951),l=r(81221),c=r(16010),d=r(52276),u=r(50679),h=r(60113),f=r(48655),m=r(85380),p=r(49223),v=r(32980),g=r(38171),_=r(15167),T=r(30069),x=r(92395),b=r(96658),S=r(2116),A=r(41481),E=r(58335),w=r(74876),C=r(79154),M=r(10758),y=r(26461),O=r(96577),I=r(71033),R=r(82552),N=r(49450),P=r(95276),L=r(58406),H=r(98634),D=r(64201),F=r(19253),U=r(4760),B=r(53178);function z(e){const t=new D.kG,{vertex:r,fragment:z,varyings:G}=t,{output:V,normalType:W,offsetBackfaces:j,instancedColor:k,spherical:q,receiveShadows:$,snowCover:Y,pbrMode:J,textureAlphaPremultiplied:X,instancedDoublePrecision:Z,hasVertexColors:K,hasVertexTangents:Q,hasColorTexture:ee,hasNormalTexture:te,hasNormalTextureTransform:re,hasColorTextureTransform:ie}=e;if((0,R.Sv)(r,e),t.include(d.f),G.add("vpos","vec3"),t.include(M.k,e),t.include(l.f,e),t.include(p.L,e),t.include(C.av,e),!(0,o.c1)(V))return t.include(v.s,e),t;t.include(C.NI,e),t.include(C.R5,e),t.include(C.jF,e),t.include(C.DT,e),(0,R.hY)(r,e),t.include(c.O,e),t.include(s.w,e);const ne=W===c.r.Attribute||W===c.r.Compressed;return ne&&j&&t.include(n.w),t.include(g.Q,e),t.include(m.Bb,e),k&&t.attributes.add(U.T.INSTANCECOLOR,"vec4"),G.add("vPositionLocal","vec3"),t.include(h.D,e),t.include(i.qj,e),t.include(u.R,e),t.include(f.c,e),r.uniforms.add(new P.N("externalColor",(e=>e.externalColor))),G.add("vcolorExt","vec4"),e.terrainDepthTest&&G.add("depth","float"),r.main.add(H.H`
    forwardNormalizedVertexColor();
    vcolorExt = externalColor;
    ${(0,H.If)(k,"vcolorExt *= instanceColor * 0.003921568627451;")}
    vcolorExt *= vvColor();
    vcolorExt *= getSymbolColor();
    forwardColorMixMode();

    if (vcolorExt.a < ${H.H.float(y.e)}) {
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
    } else {
      vpos = getVertexInLocalOriginSpace();
      vPositionLocal = vpos - view[3].xyz;
      vpos = subtractOrigin(vpos);
      ${(0,H.If)(ne,"vNormalWorld = dpNormal(vvLocalNormal(normalModel()));")}
      vpos = addVerticalOffset(vpos, localOrigin);
      ${(0,H.If)(Q,"vTangent = dpTransformVertexTangent(tangent);")}
      gl_Position = transformPosition(proj, view, vpos);
      ${(0,H.If)(ne&&j,"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);")}
    }

    ${(0,H.If)(e.terrainDepthTest,"depth = (view * vec4(vpos, 1.0)).z;")}
    forwardLinearDepth();
    forwardTextureCoordinates();
    forwardColorUV();
    forwardNormalUV();
    forwardEmissiveUV();
    forwardOcclusionUV();
    forwardMetallicRoughnessUV();
  `),t.include(T.XP,e),t.include(_.K,e),t.include(O.z,e),t.include(Z?E.hb:E.XE,e),t.include(w.H,e),t.include(a.f5,e),t.include(B.j,e),(0,R.hY)(z,e),z.uniforms.add(r.uniforms.get("localOrigin"),new N.J("ambient",(e=>e.ambient)),new N.J("diffuse",(e=>e.diffuse)),new L.p("opacity",(e=>e.opacity)),new L.p("layerOpacity",(e=>e.layerOpacity))),ee&&z.uniforms.add(new F.A("tex",(e=>e.texture))),t.include(A.jV,e),t.include(S.T,e),z.include(I.y),t.include(b.k,e),(0,T.PN)(z),(0,T.sC)(z),(0,x.F1)(z),z.main.add(H.H`
      discardBySlice(vpos);
      ${(0,H.If)(e.terrainDepthTest,"terrainDepthTest(depth);")}
      ${ee?H.H`
              vec4 texColor = texture(tex, ${ie?"colorUV":"vuv0"});
              ${(0,H.If)(X,"texColor.rgb /= texColor.a;")}
              discardOrAdjustAlpha(texColor);`:H.H`vec4 texColor = vec4(1.0);`}
      shadingParams.viewDirection = normalize(vpos - cameraPosition);
      ${W===c.r.ScreenDerivative?H.H`vec3 normal = screenDerivativeNormal(vPositionLocal);`:H.H`shadingParams.normalView = vNormalWorld;
                 vec3 normal = shadingNormal(shadingParams);`}
      applyPBRFactors();
      float ssao = evaluateAmbientOcclusionInverse() * getBakedOcclusion();

      vec3 posWorld = vpos + localOrigin;

      float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
      float shadow = ${$?"max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth))":(0,H.If)(q,"lightingGlobalFactor * (1.0 - additionalAmbientScale)","0.0")};

      vec3 matColor = max(ambient, diffuse);
      vec3 albedo = mixExternalColor(${(0,H.If)(K,"vColor.rgb *")} matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
      float opacity_ = layerOpacity * mixExternalOpacity(${(0,H.If)(K,"vColor.a * ")} opacity, texColor.a, vcolorExt.a, int(colorMixMode));
      ${te?`mat3 tangentSpace = computeTangentSpace(${Q?"normal":"normal, vpos, vuv0"});\n             vec3 shadingNormal = computeTextureNormal(tangentSpace, ${re?"normalUV":"vuv0"});`:"vec3 shadingNormal = normal;"}
      vec3 normalGround = ${q?"normalize(posWorld);":"vec3(0.0, 0.0, 1.0);"}

      ${(0,H.If)(Y,H.H`
            float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
            albedo = mix(albedo, vec3(1), snow);
            shadingNormal = mix(shadingNormal, normal, snow);
            ssao = mix(ssao, 1.0, snow);`)}

      vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

      ${J===A.f7.Normal||J===A.f7.Schematic?H.H`
              float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
              ${(0,H.If)(Y,H.H`mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);`)}
              vec4 emission = ${Y?"mix(getEmissions(), vec4(0.0), snow)":"getEmissions()"};
              vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:H.H`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
      vec4 finalColor = vec4(shadedColor, opacity_);
      outputColorHighlightOID(finalColor, vpos);
  `),t}const G=Object.freeze(Object.defineProperty({__proto__:null,build:z},Symbol.toStringTag,{value:"Module"}))},40563:(e,t,r)=>{r.d(t,{R:()=>F,b:()=>D});var i=r(22357),n=r(83734),o=r(37081),a=r(33280),s=r(94951),l=r(81221),c=r(16010),d=r(52276),u=r(50679),h=r(60113),f=r(48655),m=r(49223),p=r(32980),v=r(15167),g=r(30069),_=r(92395),T=r(2116),x=r(41481),b=r(58335),S=r(74876),A=r(10758),E=r(26461),w=r(96577),C=r(71033),M=r(82552),y=r(49450),O=r(95276),I=r(58406),R=r(98634),N=r(64201),P=r(19253),L=r(4760),H=r(53178);function D(e){const t=new N.kG,{vertex:r,fragment:D,varyings:F}=t,{output:U,offsetBackfaces:B,instancedColor:z,pbrMode:G,snowCover:V,spherical:W}=e,j=G===x.f7.Normal||G===x.f7.Schematic;if((0,M.Sv)(r,e),t.include(d.f),F.add("vpos","vec3"),t.include(A.k,e),t.include(l.f,e),t.include(m.L,e),U===o.H_.Color&&((0,M.hY)(t.vertex,e),t.include(c.O,e),t.include(s.w,e),B&&t.include(n.w),z&&t.attributes.add(L.T.INSTANCECOLOR,"vec4"),F.add("vNormalWorld","vec3"),F.add("localvpos","vec3"),e.terrainDepthTest&&F.add("depth","float"),t.include(h.D,e),t.include(i.qj,e),t.include(u.R,e),t.include(f.c,e),r.uniforms.add(new O.N("externalColor",(e=>e.externalColor))),F.add("vcolorExt","vec4"),r.main.add(R.H`
      forwardNormalizedVertexColor();
      vcolorExt = externalColor;
      ${(0,R.If)(z,"vcolorExt *= instanceColor * 0.003921568627451;")}
      vcolorExt *= vvColor();
      vcolorExt *= getSymbolColor();
      forwardColorMixMode();

      if (vcolorExt.a < ${R.H.float(E.e)}) {
        gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      } else {
        vpos = getVertexInLocalOriginSpace();
        localvpos = vpos - view[3].xyz;
        vpos = subtractOrigin(vpos);
        vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        ${(0,R.If)(B,"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);")}
      }
      ${(0,R.If)(e.terrainDepthTest,"depth = (view * vec4(vpos, 1.0)).z;")}
      forwardLinearDepth();
      forwardTextureCoordinates();`)),U===o.H_.Color){const{hasColorTexture:i,hasColorTextureTransform:n,receiveShadows:o}=e;t.include(g.XP,e),t.include(v.K,e),t.include(w.z,e),t.include(e.instancedDoublePrecision?b.hb:b.XE,e),t.include(S.H,e),t.include(a.f5,e),t.include(H.j,e),(0,M.hY)(t.fragment,e),(0,_.Pe)(D),(0,g.PN)(D),(0,g.sC)(D),D.uniforms.add(r.uniforms.get("localOrigin"),r.uniforms.get("view"),new y.J("ambient",(e=>e.ambient)),new y.J("diffuse",(e=>e.diffuse)),new I.p("opacity",(e=>e.opacity)),new I.p("layerOpacity",(e=>e.layerOpacity))),i&&D.uniforms.add(new P.A("tex",(e=>e.texture))),t.include(x.jV,e),t.include(T.T,e),D.include(C.y),(0,_.F1)(D),D.main.add(R.H`
      discardBySlice(vpos);
      ${(0,R.If)(e.terrainDepthTest,"terrainDepthTest(depth);")}
      vec4 texColor = ${i?`texture(tex, ${n?"colorUV":"vuv0"})`:" vec4(1.0)"};
      ${(0,R.If)(i,`${(0,R.If)(e.textureAlphaPremultiplied,"texColor.rgb /= texColor.a;")}\n        discardOrAdjustAlpha(texColor);`)}
      vec3 viewDirection = normalize(vpos - cameraPosition);
      applyPBRFactors();
      float ssao = evaluateAmbientOcclusionInverse();
      ssao *= getBakedOcclusion();

      float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
      vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
      float shadow = ${o?"max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth))":W?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};
      vec3 matColor = max(ambient, diffuse);
      ${e.hasVertexColors?R.H`vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
             float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:R.H`vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
             float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
      ${(0,R.If)(V,"albedo = mix(albedo, vec3(1), 0.9);")}
      ${R.H`vec3 shadingNormal = normalize(vNormalWorld);
             albedo *= 1.2;
             vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
             float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
             float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
             float treeRadialFalloff = vColor.r;
             float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
             additionalLight += backLightFactor * mainLightIntensity;`}
      ${(0,R.If)(j,`vec3 normalGround = ${W?"normalize(vpos + localOrigin)":"vec3(0.0, 0.0, 1.0)"};`)}
      ${j?R.H`float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                 ${(0,R.If)(V,R.H`mrr = vec3(0.0, 1.0, 0.04);`)}
            vec4 emission = ${V?"vec4(0.0)":"getEmissions()"};
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:R.H`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
      vec4 finalColor = vec4(shadedColor, opacity_);
      outputColorHighlightOID(finalColor, vpos);`)}return t.include(p.s,e),t}const F=Object.freeze(Object.defineProperty({__proto__:null,build:D},Symbol.toStringTag,{value:"Module"}))},46516:(e,t,r)=>{r.d(t,{S:()=>g,b:()=>m,g:()=>p});var i=r(13611),n=r(6644),o=r(24967),a=r(54943),s=r(96415),l=r(82999),c=r(58406),d=r(98634),u=r(64201),h=r(19253);const f=16;function m(){const e=new u.kG,t=e.fragment;return e.include(o.k),e.include(s.GZ),t.include(a.K),t.uniforms.add(new c.p("radius",((e,t)=>p(t.camera)))).code.add(d.H`vec3 sphere[16] = vec3[16](
vec3(0.186937, 0.0, 0.0),
vec3(0.700542, 0.0, 0.0),
vec3(-0.864858, -0.481795, -0.111713),
vec3(-0.624773, 0.102853, -0.730153),
vec3(-0.387172, 0.260319, 0.007229),
vec3(-0.222367, -0.642631, -0.707697),
vec3(-0.01336, -0.014956, 0.169662),
vec3(0.122575, 0.1544, -0.456944),
vec3(-0.177141, 0.85997, -0.42346),
vec3(-0.131631, 0.814545, 0.524355),
vec3(-0.779469, 0.007991, 0.624833),
vec3(0.308092, 0.209288,0.35969),
vec3(0.359331, -0.184533, -0.377458),
vec3(0.192633, -0.482999, -0.065284),
vec3(0.233538, 0.293706, -0.055139),
vec3(0.417709, -0.386701, 0.442449)
);
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn - bias, 0.0);
}`),t.code.add(d.H`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),t.uniforms.add(new h.A("normalMap",(e=>e.normalTexture)),new h.A("depthMap",(e=>e.depthTexture)),new c.p("projScale",(e=>e.projScale)),new h.A("rnm",(e=>e.noiseTexture)),new l.A("rnmScale",((e,t)=>(0,i.t8)(v,t.camera.fullWidth/e.noiseTexture.descriptor.width,t.camera.fullHeight/e.noiseTexture.descriptor.height))),new c.p("intensity",(e=>e.intensity)),new l.A("screenSize",((e,t)=>(0,i.t8)(v,t.camera.fullWidth,t.camera.fullHeight)))),e.outputs.add("fragOcclusion","float"),t.main.add(d.H`
      float depth = depthFromTexture(depthMap, uv);

      // Early out if depth is out of range, such as in the sky
      if (depth >= 1.0 || depth <= 0.0) {
        fragOcclusion = 1.0;
        return;
      }

      // get the normal of current fragment
      vec4 norm4 = texture(normalMap, uv);
      if(norm4.a != 1.0) {
        fragOcclusion = 1.0;
        return;
      }
      vec3 norm = vec3(-1.0) + 2.0 * norm4.xyz;

      float currentPixelDepth = linearizeDepth(depth);
      vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy, currentPixelDepth);

      float sum = 0.0;
      vec3 tapPixelPos;

      vec3 fres = normalize(2.0 * texture(rnm, uv * rnmScale).xyz - 1.0);

      // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
      // bug or deviation from CE somewhere else?
      float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

      for(int i = 0; i < ${d.H.int(f)}; ++i) {
        vec2 unitOffset = reflect(sphere[i], fres).xy;
        vec2 offset = vec2(-unitOffset * radius * ps);

        // don't use current or very nearby samples
        if( abs(offset.x) < 2.0 || abs(offset.y) < 2.0){
          continue;
        }

        vec2 tc = vec2(gl_FragCoord.xy + offset);
        if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
        vec2 tcTap = tc / screenSize;
        float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap);

        tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

        sum += aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
      }

      // output the result
      float A = max(1.0 - sum * intensity / float(${d.H.int(f)}), 0.0);

      // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
      A = (pow(A, 0.2) + 1.2 * A * A * A * A) / 2.2;

      fragOcclusion = A;`),e}function p(e){return Math.max(10,20*e.computeScreenPixelSizeAtDist(Math.abs(4*e.relativeElevation)))}const v=(0,n.Ue)(),g=Object.freeze(Object.defineProperty({__proto__:null,build:m,getRadius:p},Symbol.toStringTag,{value:"Module"}))},97727:(e,t,r)=>{r.d(t,{S:()=>f,b:()=>h});var i=r(24967),n=r(54943),o=r(22527),a=r(58406),s=r(98634),l=r(64201),c=r(78050),d=r(19253);const u=4;function h(){const e=new l.kG,t=e.fragment;e.include(i.k);const r=(u+1)/2,h=1/(2*r*r);return t.include(n.K),t.uniforms.add(new d.A("depthMap",(e=>e.depthTexture)),new c.R("tex",(e=>e.colorTexture)),new o.q("blurSize",(e=>e.blurSize)),new a.p("projScale",((e,t)=>{const r=t.camera.distance;return r>5e4?Math.max(0,e.projScale-(r-5e4)):e.projScale}))),t.code.add(s.H`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${s.H.float(h)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),e.outputs.add("fragBlur","float"),t.main.add(s.H`
    float b = 0.0;
    float w_total = 0.0;

    float center_d = linearDepthFromTexture(depthMap, uv);

    float sharpness = -0.05 * projScale / center_d;
    for (int r = -${s.H.int(u)}; r <= ${s.H.int(u)}; ++r) {
      float rf = float(r);
      vec2 uvOffset = uv + rf * blurSize;
      blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
    }
    fragBlur = b / w_total;`),e}const f=Object.freeze(Object.defineProperty({__proto__:null,build:h},Symbol.toStringTag,{value:"Module"}))},82218:(e,t,r)=>{r.d(t,{a:()=>T,b:()=>k,c:()=>x,f:()=>b,u:()=>S});r(93169);var i=r(32718),n=r(16889),o=r(21530),a=r(29134),s=r(7025),l=r(32035),c=r(12400),d=r(65156),u=r(14320),h=r(85981),f=r(55652),m=r(40885),p=r(40927),v=r(11185);const g=()=>i.Z.getLogger("esri.views.3d.support.geometryUtils.boundedPlane");const _=class{constructor(){this.plane=(0,f.Ue)(),this.origin=(0,c.Ue)(),this.basis1=(0,c.Ue)(),this.basis2=(0,c.Ue)()}};function T(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F;return{plane:(0,f.Ue)(e.plane),origin:(0,c.d9)(e.origin),basis1:(0,c.d9)(e.basis1),basis2:(0,c.d9)(e.basis2)}}function x(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:T();return b(e.origin,e.basis1,e.basis2,t)}function b(e,t,r){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:T();return(0,l.c)(i.origin,e),(0,l.c)(i.basis1,t),(0,l.c)(i.basis2,r),S(i),function(e,t){Math.abs((0,l.f)(e.basis1,e.basis2)/((0,l.l)(e.basis1)*(0,l.l)(e.basis2)))>1e-6&&g().warn(t,"Provided basis vectors are not perpendicular"),Math.abs((0,l.f)(e.basis1,N(e)))>1e-6&&g().warn(t,"Basis vectors and plane normal are not perpendicular"),Math.abs(-(0,l.f)(N(e),e.origin)-e.plane[3])>1e-6&&g().warn(t,"Plane offset is not consistent with plane origin")}(i,"fromValues()"),i}function S(e){(0,f.my)(e.basis2,e.basis1,e.origin,e.plane)}function A(e,t,r){e!==r&&x(e,r);const i=(0,l.h)(v.WM.get(),N(e),t);return(0,l.g)(r.origin,r.origin,i),r.plane[3]-=t,r}function E(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:T();const r=(e[2]-e[0])/2,i=(e[3]-e[1])/2;return(0,l.i)(t.origin,e[0]+r,e[1]+i,0),(0,l.i)(t.basis1,r,0,0),(0,l.i)(t.basis2,0,i,0),(0,f.al)(0,0,1,0,t.plane),t}function w(e,t,r){return!!(0,f.BR)(e.plane,t,r)&&P(e,r)}function C(e,t,r){const i=U.get();D(e,t,i,U.get());let o=Number.POSITIVE_INFINITY;for(const a of V){const s=H(e,a,B.get()),c=v.WM.get();if((0,f.rx)(i,s,c)){const e=(0,l.o)(v.WM.get(),t.origin,c),i=Math.abs((0,n.ZF)((0,l.f)(t.direction,e)));i<o&&(o=i,(0,l.c)(r,c))}}return o===Number.POSITIVE_INFINITY?M(e,t,r):r}function M(e,t,r){if(w(e,t,r))return r;const i=U.get(),n=U.get();D(e,t,i,n);let o=Number.POSITIVE_INFINITY;for(const a of V){const s=H(e,a,B.get()),c=v.WM.get();if((0,f.dZ)(i,s,c)){const e=(0,m.Jk)(t,c);if(!(0,f.Ac)(n,c))continue;e<o&&(o=e,(0,l.c)(r,c))}}return I(e,t.origin)<o&&y(e,t.origin,r),r}function y(e,t,r){const i=(0,f.nF)(e.plane,t,v.WM.get()),n=(0,h.ct)(L(e,e.basis1),i,-1,1,v.WM.get()),o=(0,h.ct)(L(e,e.basis2),i,-1,1,v.WM.get());return(0,l.d)(r,(0,l.g)(v.WM.get(),n,o),e.origin),r}function O(e,t,r){const{origin:i,basis1:n,basis2:o}=e,a=(0,l.d)(v.WM.get(),t,i),s=(0,p.SR)(n,a),c=(0,p.SR)(o,a),d=(0,p.SR)(N(e),a);return(0,l.i)(r,s,c,d)}function I(e,t){const r=O(e,t,v.WM.get()),{basis1:i,basis2:n}=e,o=(0,l.l)(i),a=(0,l.l)(n),s=Math.max(Math.abs(r[0])-o,0),c=Math.max(Math.abs(r[1])-a,0),d=r[2];return s*s+c*c+d*d}function R(e,t){const r=-e.plane[3];return(0,p.SR)(N(e),t)-r}function N(e){return(0,f.st)(e.plane)}function P(e,t){const r=(0,l.d)(v.WM.get(),t,e.origin),i=(0,l.k)(e.basis1),n=(0,l.k)(e.basis2),o=(0,l.f)(e.basis1,r),a=(0,l.f)(e.basis2,r);return-o-i<0&&o-i<0&&-a-n<0&&a-n<0}function L(e,t){const r=B.get();return(0,l.c)(r.origin,e.origin),(0,l.c)(r.vector,t),r}function H(e,t,r){const{basis1:i,basis2:n,origin:o}=e,a=(0,l.h)(v.WM.get(),i,t.origin[0]),s=(0,l.h)(v.WM.get(),n,t.origin[1]);(0,l.g)(r.origin,a,s),(0,l.g)(r.origin,r.origin,o);const c=(0,l.h)(v.WM.get(),i,t.direction[0]),d=(0,l.h)(v.WM.get(),n,t.direction[1]);return(0,l.h)(r.vector,(0,l.g)(c,c,d),2),r}function D(e,t,r,i){const n=N(e);(0,f.my)(n,t.direction,t.origin,r),(0,f.my)((0,f.st)(r),n,t.origin,i)}const F={plane:(0,f.Ue)(),origin:(0,c.al)(0,0,0),basis1:(0,c.al)(1,0,0),basis2:(0,c.al)(0,1,0)},U=new o.x(f.Ue),B=new o.x(h.Ue),z=(0,c.Ue)(),G=new o.x((()=>T())),V=[{origin:[-1,-1],direction:[1,0]},{origin:[1,-1],direction:[0,1]},{origin:[1,1],direction:[-1,0]},{origin:[-1,1],direction:[0,-1]}],W=(0,s.Ue)(),j=(0,s.Ue)(),k=Object.freeze(Object.defineProperty({__proto__:null,BoundedPlaneClass:_,altitudeAt:R,axisAt:function(e,t,r,i){return function(e,t,r){switch(t){case u.R.X:(0,l.c)(r,e.basis1),(0,l.n)(r,r);break;case u.R.Y:(0,l.c)(r,e.basis2),(0,l.n)(r,r);break;case u.R.Z:(0,l.c)(r,N(e))}return r}(e,r,i)},cameraFrustumCoverage:function(e,t){return(t-e)/t},closestPoint:M,closestPointOnSilhouette:C,copy:x,copyWithoutVerify:function(e,t){(0,l.c)(t.origin,e.origin),(0,l.c)(t.basis1,e.basis1),(0,l.c)(t.basis2,e.basis2),(0,f.JG)(t.plane,e.plane)},create:T,distance:function(e,t){return Math.sqrt(I(e,t))},distance2:I,distanceToSilhouette:function(e,t){let r=Number.NEGATIVE_INFINITY;for(const i of V){const n=H(e,i,B.get()),o=(0,h.Jk)(n,t);o>r&&(r=o)}return Math.sqrt(r)},elevate:A,equals:function(e,t){return(0,l.p)(e.basis1,t.basis1)&&(0,l.p)(e.basis2,t.basis2)&&(0,l.p)(e.origin,t.origin)},extrusionContainsPoint:function(e,t){return(0,f.Ac)(e.plane,t)&&P(e,t)},fromAABoundingRect:E,fromValues:b,getExtent:function(e,t){const r=e.basis1[0],i=e.basis2[1],[n,o]=e.origin;return(0,d.al)(n-r,o-i,n+r,o+i,t)},intersectRay:w,intersectRayClosestSilhouette:function(e,t,r){if(w(e,t,r))return r;const i=C(e,t,v.WM.get());return(0,l.g)(r,t.origin,(0,l.h)(v.WM.get(),t.direction,(0,l.j)(t.origin,i)/(0,l.l)(t.direction))),r},normal:N,projectPoint:y,projectPointLocal:O,rotate:function(e,t,r,i){return e!==i&&x(e,i),(0,a.Us)(j,t,r),(0,l.t)(i.basis1,e.basis1,j),(0,l.t)(i.basis2,e.basis2,j),S(i),i},setAltitudeAt:function(e,t,r,i){const n=R(e,t),o=(0,l.h)(z,N(e),r-n);return(0,l.g)(i,t,o),i},setExtent:function(e,t,r){return E(t,r),A(r,R(e,e.origin),r),r},transform:function(e,t,r){return e!==r&&x(e,r),(0,a.U_)(W,t),(0,a.p4)(W,W),(0,l.t)(r.basis1,e.basis1,W),(0,l.t)(r.basis2,e.basis2,W),(0,l.t)((0,f.st)(r.plane),(0,f.st)(e.plane),W),(0,l.t)(r.origin,e.origin,t),(0,f.T5)(r.plane,r.plane,r.origin),r},up:F,updateUnboundedPlane:S,wrap:function(e,t,r){const i=G.get();return i.origin=e,i.basis1=t,i.basis2=r,i.plane=(0,f.re)(0,0,0,0),S(i),i}},Symbol.toStringTag,{value:"Module"}))},59447:(e,t,r)=>{r.d(t,{r:()=>i});class i{constructor(){this._outer=new Map}clear(){this._outer.clear()}get empty(){return 0===this._outer.size}get(e,t){return this._outer.get(e)?.get(t)}getInner(e){return this._outer.get(e)}set(e,t,r){const i=this._outer.get(e);i?i.set(t,r):this._outer.set(e,new Map([[t,r]]))}delete(e,t){const r=this._outer.get(e);r&&(r.delete(t),0===r.size&&this._outer.delete(e))}forEach(e){this._outer.forEach(((t,r)=>e(t,r)))}forAll(e){for(const t of this._outer.values())for(const r of t.values())e(r)}}},38461:(e,t,r)=>{r.d(t,{xx:()=>n});var i=r(18722);function n(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e<=i.c8?t?new Array(e).fill(0):new Array(e):new Float32Array(e)}},39406:(e,t,r)=>{r.d(t,{$z:()=>o,KF:()=>c,mi:()=>n});var i=r(18722);function n(e){if((0,i.kJ)(e)){if(e.length<i.c8)return e}else if(e.length<i.c8)return Array.from(e);let t=!0,r=!0;return e.some(((e,i)=>(t=t&&0===e,r=r&&e===i,!t&&!r))),t?function(e){if(1===e)return s;if(e<i.c8)return new Array(e).fill(0);if(e>d.length){const t=Math.max(2*d.length,e);d=new Uint8Array(t)}return new Uint8Array(d.buffer,0,e)}(e.length):r?c(e.length):(0,i.kJ)(e)||e.BYTES_PER_ELEMENT!==Uint16Array.BYTES_PER_ELEMENT?function(e){let t=!0;for(const r of e){if(r>=65536)return(0,i.kJ)(e)?new Uint32Array(e):e;r>=256&&(t=!1)}return t?new Uint8Array(e):new Uint16Array(e)}(e):e}function o(e){return e<=i.c8?new Array(e):e<=65536?new Uint16Array(e):new Uint32Array(e)}let a=(()=>{const e=new Uint32Array(131072);for(let t=0;t<e.length;++t)e[t]=t;return e})();const s=[0],l=(()=>{const e=new Uint16Array(65536);for(let t=0;t<e.length;++t)e[t]=t;return e})();function c(e){if(1===e)return s;if(e<i.c8)return Array.from(new Uint16Array(l.buffer,0,e));if(e<l.length)return new Uint16Array(l.buffer,0,e);if(e>a.length){const t=Math.max(2*a.length,e);a=new Uint32Array(t);for(let e=0;e<a.length;e++)a[e]=e}return new Uint32Array(a.buffer,0,e)}let d=new Uint8Array(65536)},48734:(e,t,r)=>{function i(e){switch(e){case"u8":case"i8":return 1;case"u16":case"i16":return 2;case"u32":case"i32":case"f32":return 4;case"f64":return 8}}r.d(t,{n1:()=>i})},85981:(e,t,r)=>{r.d(t,{Jk:()=>d,Ue:()=>l,ct:()=>h,nF:()=>u,zk:()=>c});var i=r(16889),n=r(21530),o=r(32035),a=r(12400),s=r(11185);function l(e){return e?{origin:(0,a.d9)(e.origin),vector:(0,a.d9)(e.vector)}:{origin:(0,a.Ue)(),vector:(0,a.Ue)()}}function c(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:l();return(0,o.c)(r.origin,e),(0,o.d)(r.vector,t,e),r}function d(e,t){const r=(0,o.d)(s.WM.get(),t,e.origin),n=(0,o.f)(e.vector,r),a=(0,o.f)(e.vector,e.vector),l=(0,i.uZ)(n/a,0,1),c=(0,o.d)(s.WM.get(),(0,o.h)(s.WM.get(),e.vector,l),r);return(0,o.f)(c,c)}function u(e,t,r){return h(e,t,0,1,r)}function h(e,t,r,n,a){const{vector:l,origin:c}=e,d=(0,o.d)(s.WM.get(),t,c),u=(0,o.f)(l,d)/(0,o.k)(l);return(0,o.h)(a,l,(0,i.uZ)(u,r,n)),(0,o.g)(a,a,e.origin)}(0,a.Ue)(),(0,a.Ue)(),new n.x((()=>l()))},74702:(e,t,r)=>{r.d(t,{bE:()=>c,wu:()=>l});var i=r(21530),n=r(32035),o=r(12400),a=r(85981);r(11185);function s(e){return e?{p0:(0,o.d9)(e.p0),p1:(0,o.d9)(e.p1),p2:(0,o.d9)(e.p2)}:{p0:(0,o.Ue)(),p1:(0,o.Ue)(),p2:(0,o.Ue)()}}function l(e,t,r){const i=t[0]-e[0],n=t[1]-e[1],o=r[0]-e[0],a=r[1]-e[1];return.5*Math.abs(i*a-n*o)}function c(e,t,r){return(0,n.d)(d,t,e),(0,n.d)(u,r,e),.5*(0,n.l)((0,n.e)(d,d,u))}new i.x(a.Ue),new i.x((()=>s()));const d=(0,o.Ue)(),u=(0,o.Ue)()},38330:(e,t,r)=>{r.d(t,{t:()=>n});var i=r(76200);async function n(e,t){const{data:r}=await(0,i.Z)(e,{responseType:"image",...t});return r}},66202:(e,t,r)=>{r.d(t,{FE:()=>c});r(93169);var i,n,o=r(16889),a=(r(29303),r(21389),r(29134),r(7025)),s=r(32035),l=r(12400);r(49229),r(94463),r(98634);!function(e){e[e.Undefined=0]="Undefined",e[e.DefinedSize=1]="DefinedSize",e[e.DefinedScale=2]="DefinedScale"}(i||(i={})),function(e){e[e.Undefined=0]="Undefined",e[e.DefinedAngle=1]="DefinedAngle"}(n||(n={}));function c(e,t,r){if(!t.vvSize)return(0,s.i)(e,1,1,1),e;for(let i=0;i<3;++i){const n=t.vvSize.offset[i]+r[0]*t.vvSize.factor[i];e[i]=(0,o.uZ)(n,t.vvSize.minSize[i],t.vvSize.maxSize[i])}return e}(0,a.Ue)(),(0,l.Ue)(),(0,a.Ue)()},49420:(e,t,r)=>{r.d(t,{a9:()=>i});var i;r(16889);!function(e){e[e.Multiply=1]="Multiply",e[e.Ignore=2]="Ignore",e[e.Replace=3]="Replace",e[e.Tint=4]="Tint"}(i||(i={}))},55158:(e,t,r)=>{r.d(t,{Gw:()=>c,U$:()=>l});var i=r(25158),n=r(48734),o=r(97731);class a{constructor(e,t){this.layout=e,this.buffer="number"==typeof t?new ArrayBuffer(t*e.stride):t;for(const r of e.fields.keys()){const t=e.fields.get(r);this[r]=new t.constructor(this.buffer,t.offset,this.stride)}}get stride(){return this.layout.stride}get count(){return this.buffer.byteLength/this.stride}get byteLength(){return this.buffer.byteLength}getField(e,t){const r=this[e];return r&&r.elementCount===t.ElementCount&&r.elementType===t.ElementType?r:null}slice(e,t){return new a(this.layout,this.buffer.slice(e*this.stride,t*this.stride))}copyFrom(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:e.count;const n=this.stride;if(n%4==0){const o=new Uint32Array(e.buffer,t*n,i*n/4);new Uint32Array(this.buffer,r*n,i*n/4).set(o)}else{const o=new Uint8Array(e.buffer,t*n,i*n);new Uint8Array(this.buffer,r*n,i*n).set(o)}return this}get usedMemory(){return this.byteLength}dispose(){}}class s{constructor(e){this._stride=0,this._lastAligned=0,this._fields=new Map,e&&(this._stride=e.stride,e.fields.forEach((e=>this._fields.set(e[0],{...e[1],constructor:h(e[1].constructor)}))))}freeze(){return this}vec2f(e,t){return this._appendField(e,i.Eu,t),this}vec2f64(e,t){return this._appendField(e,i.q6,t),this}vec3f(e,t){return this._appendField(e,i.ct,t),this}vec3f64(e,t){return this._appendField(e,i.fP,t),this}vec4f(e,t){return this._appendField(e,i.ek,t),this}vec4f64(e,t){return this._appendField(e,i.Cd,t),this}mat3f(e,t){return this._appendField(e,i.gK,t),this}mat3f64(e,t){return this._appendField(e,i.ey,t),this}mat4f(e,t){return this._appendField(e,i.bj,t),this}mat4f64(e,t){return this._appendField(e,i.O1,t),this}vec4u8(e,t){return this._appendField(e,i.mc,t),this}f32(e,t){return this._appendField(e,i.ly,t),this}f64(e,t){return this._appendField(e,i.oS,t),this}u8(e,t){return this._appendField(e,i.D_,t),this}u16(e,t){return this._appendField(e,i.av,t),this}i8(e,t){return this._appendField(e,i.Hz,t),this}vec2i8(e,t){return this._appendField(e,i.Vs,t),this}vec2i16(e,t){return this._appendField(e,i.or,t),this}vec2u8(e,t){return this._appendField(e,i.xA,t),this}vec4u16(e,t){return this._appendField(e,i.v6,t),this}u32(e,t){return this._appendField(e,i.Nu,t),this}_appendField(e,t,r){if(this._fields.has(e))return void(0,o.hu)(!1,`${e} already added to vertex buffer layout`);const i=t.ElementCount*(0,n.n1)(t.ElementType),a=this._stride;this._stride+=i,this._fields.set(e,{size:i,constructor:t,offset:a,optional:r})}createBuffer(e){return new a(this,e)}createView(e){return new a(this,e)}clone(){const e=new s;return e._stride=this._stride,e._fields=new Map,this._fields.forEach(((t,r)=>e._fields.set(r,t))),e.BufferType=this.BufferType,e}get stride(){if(this._lastAligned!==this._fields.size){let e=1;this._fields.forEach((t=>e=Math.max(e,(0,n.n1)(t.constructor.ElementType)))),this._stride=Math.floor((this._stride+e-1)/e)*e,this._lastAligned=this._fields.size}return this._stride}get fields(){return this._fields}}function l(){return new s}class c{constructor(e){this.fields=new Array,e.fields.forEach(((e,t)=>{const r={...e,constructor:u(e.constructor)};this.fields.push([t,r])})),this.stride=e.stride}}const d=[i.ly,i.Eu,i.ct,i.ek,i.gK,i.bj,i.oS,i.q6,i.fP,i.Cd,i.ey,i.O1,i.D_,i.xA,i.ne,i.mc,i.av,i.TS,i.mw,i.v6,i.Nu,i.qt,i.G5,i.hu,i.Hz,i.Vs,i.P_,i.ir,i.o7,i.or,i.n1,i.zO,i.Jj,i.wA,i.PP,i.TN];function u(e){return`${e.ElementType}_${e.ElementCount}`}function h(e){return f.get(e)}const f=new Map;d.forEach((e=>f.set(u(e),e)))},94463:(e,t,r)=>{r.d(t,{h:()=>l});var i=r(27366),n=r(7138),o=r(49861),a=(r(93169),r(32718),r(84936),r(69912));let s=class extends n.Z{constructor(){super(...arguments),this.SCENEVIEW_HITTEST_RETURN_INTERSECTOR=!1,this.DECONFLICTOR_SHOW_VISIBLE=!1,this.DECONFLICTOR_SHOW_INVISIBLE=!1,this.DECONFLICTOR_SHOW_GRID=!1,this.LABELS_SHOW_BORDER=!1,this.TEXT_SHOW_BASELINE=!1,this.TEXT_SHOW_BORDER=!1,this.OVERLAY_DRAW_DEBUG_TEXTURE=!1,this.OVERLAY_SHOW_CENTER=!1,this.SHOW_POI=!1,this.TESTS_DISABLE_OPTIMIZATIONS=!1,this.TESTS_DISABLE_FAST_UPDATES=!1,this.DRAW_MESH_GEOMETRY_NORMALS=!1,this.FEATURE_TILE_FETCH_SHOW_TILES=!1,this.FEATURE_TILE_TREE_SHOW_TILES=!1,this.TERRAIN_TILE_TREE_SHOW_TILES=!1,this.I3S_TREE_SHOW_TILES=!1,this.I3S_SHOW_MODIFICATIONS=!1,this.LOD_INSTANCE_RENDERER_DISABLE_UPDATES=!1,this.LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL=!1,this.EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES=!1,this.LINE_WIREFRAMES=!1}};(0,i._)([(0,o.Cb)()],s.prototype,"SCENEVIEW_HITTEST_RETURN_INTERSECTOR",void 0),(0,i._)([(0,o.Cb)()],s.prototype,"DECONFLICTOR_SHOW_VISIBLE",void 0),(0,i._)([(0,o.Cb)()],s.prototype,"DECONFLICTOR_SHOW_INVISIBLE",void 0),(0,i._)([(0,o.Cb)()],s.prototype,"DECONFLICTOR_SHOW_GRID",void 0),(0,i._)([(0,o.Cb)()],s.prototype,"LABELS_SHOW_BORDER",void 0),(0,i._)([(0,o.Cb)()],s.prototype,"TEXT_SHOW_BASELINE",void 0),(0,i._)([(0,o.Cb)()],s.prototype,"TEXT_SHOW_BORDER",void 0),(0,i._)([(0,o.Cb)()],s.prototype,"OVERLAY_DRAW_DEBUG_TEXTURE",void 0),(0,i._)([(0,o.Cb)()],s.prototype,"OVERLAY_SHOW_CENTER",void 0),(0,i._)([(0,o.Cb)()],s.prototype,"SHOW_POI",void 0),(0,i._)([(0,o.Cb)()],s.prototype,"TESTS_DISABLE_OPTIMIZATIONS",void 0),(0,i._)([(0,o.Cb)()],s.prototype,"TESTS_DISABLE_FAST_UPDATES",void 0),(0,i._)([(0,o.Cb)()],s.prototype,"DRAW_MESH_GEOMETRY_NORMALS",void 0),(0,i._)([(0,o.Cb)()],s.prototype,"FEATURE_TILE_FETCH_SHOW_TILES",void 0),(0,i._)([(0,o.Cb)()],s.prototype,"FEATURE_TILE_TREE_SHOW_TILES",void 0),(0,i._)([(0,o.Cb)()],s.prototype,"TERRAIN_TILE_TREE_SHOW_TILES",void 0),(0,i._)([(0,o.Cb)()],s.prototype,"I3S_TREE_SHOW_TILES",void 0),(0,i._)([(0,o.Cb)()],s.prototype,"I3S_SHOW_MODIFICATIONS",void 0),(0,i._)([(0,o.Cb)()],s.prototype,"LOD_INSTANCE_RENDERER_DISABLE_UPDATES",void 0),(0,i._)([(0,o.Cb)()],s.prototype,"LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL",void 0),(0,i._)([(0,o.Cb)()],s.prototype,"EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES",void 0),(0,i._)([(0,o.Cb)()],s.prototype,"LINE_WIREFRAMES",void 0),s=(0,i._)([(0,a.j)("esri.views.3d.support.debugFlags")],s);const l=new s},77343:(e,t,r)=>{r.d(t,{A:()=>o});var i=r(49420),n=r(98634);function o(e){e.vertex.code.add(n.H`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${n.H.int(i.a9.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${n.H.int(i.a9.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${n.H.int(i.a9.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${n.H.int(i.a9.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}},22357:(e,t,r)=>{r.d(t,{Zu:()=>l,bA:()=>c,qj:()=>d});var i=r(37081),n=r(74058),o=r(82999),a=r(98634);function s(e){e.varyings.add("linearDepth","float")}function l(e){e.vertex.uniforms.add(new o.A("nearFar",((e,t)=>t.camera.nearFar)))}function c(e){e.vertex.code.add(a.H`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}function d(e,t){const{vertex:r}=e;switch(t.output){case i.H_.Color:case i.H_.ColorEmission:if(t.receiveShadows)return s(e),void r.code.add(a.H`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);break;case i.H_.Shadow:case i.H_.ShadowHighlight:case i.H_.ShadowExcludeHighlight:case i.H_.ViewshedShadow:return e.include(n.up,t),s(e),l(e),c(e),void r.code.add(a.H`void forwardLinearDepth() {
linearDepth = calculateLinearDepth(nearFar, vPosition_view.z);
}`)}r.code.add(a.H`void forwardLinearDepth() {}`)}},83734:(e,t,r)=>{r.d(t,{w:()=>n});var i=r(98634);function n(e){e.vertex.code.add(i.H`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}},24967:(e,t,r)=>{r.d(t,{k:()=>o});var i=r(98634),n=r(4760);function o(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];e.attributes.add(n.T.POSITION,"vec2"),t&&e.varyings.add("uv","vec2"),e.vertex.main.add(i.H`
      gl_Position = vec4(position, 0.0, 1.0);
      ${t?i.H`uv = position * 0.5 + vec2(0.5);`:""}
  `)}},37081:(e,t,r)=>{var i;function n(e){return e===i.Shadow||e===i.ShadowHighlight||e===i.ShadowExcludeHighlight||e===i.ViewshedShadow}function o(e){return function(e){return d(e)||u(e)}(e)||e===i.Normal}function a(e){return function(e){return function(e){return c(e)||s(e)}(e)||u(e)}(e)||e===i.Normal}function s(e){return e===i.Highlight||e===i.ObjectAndLayerIdColor}function l(e){return e===i.Color}function c(e){return l(e)||h(e)}function d(e){return l(e)||s(e)}function u(e){return e===i.Depth}function h(e){return e===i.ColorEmission}r.d(t,{ED:()=>a,H_:()=>i,Jb:()=>o,Kr:()=>n,L_:()=>d,c1:()=>c,qC:()=>h}),function(e){e[e.Color=0]="Color",e[e.ColorEmission=1]="ColorEmission",e[e.Depth=2]="Depth",e[e.Normal=3]="Normal",e[e.Shadow=4]="Shadow",e[e.ShadowHighlight=5]="ShadowHighlight",e[e.ShadowExcludeHighlight=6]="ShadowExcludeHighlight",e[e.ViewshedShadow=7]="ViewshedShadow",e[e.Highlight=8]="Highlight",e[e.ObjectAndLayerIdColor=9]="ObjectAndLayerIdColor",e[e.COUNT=10]="COUNT"}(i||(i={}))},33280:(e,t,r)=>{r.d(t,{f5:()=>c});var i=r(29134),n=r(7025),o=r(32035),a=r(12400),s=r(86471),l=(r(49450),r(98634));function c(e,t){d(e,t,new s.B("slicePlaneOrigin",((e,r)=>m(t,e,r))),new s.B("slicePlaneBasis1",((e,r)=>p(t,e,r,r.slicePlane?.basis1))),new s.B("slicePlaneBasis2",((e,r)=>p(t,e,r,r.slicePlane?.basis2))))}function d(e,t){if(!t.hasSlicePlane){const r=l.H`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;return t.hasSliceInVertexProgram&&e.vertex.code.add(r),void e.fragment.code.add(r)}const r=l.H`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,i=l.H`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
if (sliceByFactors(factors)) {
return color;
}
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,n=t.hasSliceHighlight?l.H`
        ${i}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `:l.H`#define highlightSlice(_color_, _pos_) (_color_)`;for(var o=arguments.length,a=new Array(o>2?o-2:0),s=2;s<o;s++)a[s-2]=arguments[s];t.hasSliceInVertexProgram&&e.vertex.uniforms.add(...a).code.add(r),e.fragment.uniforms.add(...a).code.add(r),e.fragment.code.add(n)}function u(e,t,r){return e.instancedDoublePrecision?(0,o.i)(v,r.camera.viewInverseTransposeMatrix[3],r.camera.viewInverseTransposeMatrix[7],r.camera.viewInverseTransposeMatrix[11]):t.slicePlaneLocalOrigin}function h(e,t){return null!=e?(0,o.d)(g,t.origin,e):t.origin}function f(e,t,r){return e.hasSliceTranslatedView?null!=t?(0,i.Iu)(T,r.camera.viewMatrix,t):r.camera.viewMatrix:null}function m(e,t,r){if(null==r.slicePlane)return a.AG;const i=u(e,t,r),n=h(i,r.slicePlane),s=f(e,i,r);return null!=s?(0,o.t)(g,n,s):n}function p(e,t,r,i){if(null==i||null==r.slicePlane)return a.AG;const n=u(e,t,r),s=h(n,r.slicePlane),l=f(e,n,r);return null!=l?((0,o.g)(_,i,s),(0,o.t)(g,s,l),(0,o.t)(_,_,l),(0,o.d)(_,_,g)):i}const v=(0,a.Ue)(),g=(0,a.Ue)(),_=(0,a.Ue)(),T=(0,n.Ue)()},94951:(e,t,r)=>{r.d(t,{w:()=>o});var i=r(22357),n=r(98634);function o(e){(0,i.bA)(e),e.vertex.code.add(n.H`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`),e.vertex.code.add(n.H`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}},81221:(e,t,r)=>{r.d(t,{f:()=>_});var i=r(29303),n=r(21389),o=r(7025),a=r(32035),s=r(12400),l=r(37081),c=r(27254),d=r(82552),u=r(86471),h=r(98634),f=r(35522),m=r(8654),p=r(4760),v=r(43411);const g=(0,n.Ue)();function _(e,t){const r=t.hasModelTransformation,n=t.instancedDoublePrecision;r&&(e.vertex.uniforms.add(new m.g("model",(e=>e.modelTransformation??o.Wd))),e.vertex.uniforms.add(new f.c("normalLocalOriginFromModel",(e=>((0,i.XL)(g,e.modelTransformation??o.Wd),g))))),t.instanced&&n&&(e.attributes.add(p.T.INSTANCEMODELORIGINHI,"vec3"),e.attributes.add(p.T.INSTANCEMODELORIGINLO,"vec3"),e.attributes.add(p.T.INSTANCEMODEL,"mat3"),e.attributes.add(p.T.INSTANCEMODELNORMAL,"mat3"));const s=e.vertex;n&&(s.include(c.$,t),s.uniforms.add(new u.B("viewOriginHi",((e,t)=>(0,v.U8)((0,a.i)(T,t.camera.viewInverseTransposeMatrix[3],t.camera.viewInverseTransposeMatrix[7],t.camera.viewInverseTransposeMatrix[11]),T))),new u.B("viewOriginLo",((e,t)=>(0,v.GB)((0,a.i)(T,t.camera.viewInverseTransposeMatrix[3],t.camera.viewInverseTransposeMatrix[7],t.camera.viewInverseTransposeMatrix[11]),T))))),s.code.add(h.H`
    vec3 getVertexInLocalOriginSpace() {
      return ${r?n?"(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz":"(model * localPosition()).xyz":n?"instanceModel * localPosition().xyz":"localPosition().xyz"};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${n?h.H`
          // Negated inputs are intentionally the first two arguments. The other way around the obfuscation in dpAdd() stopped
          // working for macOS 14+ and iOS 17+.
          // Issue: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(-instanceModelOriginHi, -instanceModelOriginLo, viewOriginHi, viewOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),s.code.add(h.H`
    vec3 dpNormal(vec4 _normal) {
      return normalize(${r?n?"normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)":"normalLocalOriginFromModel * _normal.xyz":n?"instanceModelNormal * _normal.xyz":"_normal.xyz"});
    }
    `),t.output===l.H_.Normal&&((0,d._8)(s),s.code.add(h.H`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${r?n?"vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)":"vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)":n?"vec4(instanceModelNormal * _normal.xyz, 1.0)":"_normal"}).xyz);
    }
    `)),t.hasVertexTangents&&s.code.add(h.H`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${r?n?"return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);":"return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);":n?"return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}
    }`)}const T=(0,s.Ue)()},16010:(e,t,r)=>{r.d(t,{O:()=>s,r:()=>i});var i,n=r(41644),o=r(98634),a=r(4760);function s(e,t){switch(t.normalType){case i.Compressed:e.attributes.add(a.T.NORMALCOMPRESSED,"vec2"),e.vertex.code.add(o.H`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);break;case i.Attribute:e.attributes.add(a.T.NORMAL,"vec3"),e.vertex.code.add(o.H`vec3 normalModel() {
return normal;
}`);break;case i.ScreenDerivative:e.fragment.code.add(o.H`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:(0,n.Bg)(t.normalType);case i.COUNT:}}!function(e){e[e.Attribute=0]="Attribute",e[e.Compressed=1]="Compressed",e[e.ScreenDerivative=2]="ScreenDerivative",e[e.COUNT=3]="COUNT"}(i||(i={}))},14801:(e,t,r)=>{r.d(t,{R:()=>a});var i=r(37081),n=r(98634),o=r(4760);function a(e,t){if(t.output!==i.H_.ObjectAndLayerIdColor)return e.vertex.code.add(n.H`void forwardObjectAndLayerIdColor() {}`),void e.fragment.code.add(n.H`void outputObjectAndLayerIdColor() {}`);const r=t.objectAndLayerIdColorInstanced;e.varyings.add("objectAndLayerIdColorVarying","vec4"),e.attributes.add(r?o.T.INSTANCEOBJECTANDLAYERIDCOLOR:o.T.OBJECTANDLAYERIDCOLOR,"vec4"),e.vertex.code.add(n.H`
    void forwardObjectAndLayerIdColor() {
      objectAndLayerIdColorVarying = ${r?"instanceObjectAndLayerIdColor":"objectAndLayerIdColor"} * 0.003921568627451;
    }`),e.fragment.code.add(n.H`void outputObjectAndLayerIdColor() {
fragColor = objectAndLayerIdColorVarying;
}`)}},52276:(e,t,r)=>{r.d(t,{f:()=>o});var i=r(98634),n=r(4760);function o(e){e.attributes.add(n.T.POSITION,"vec3"),e.vertex.code.add(i.H`vec3 positionModel() { return position; }`)}},50679:(e,t,r)=>{r.d(t,{R:()=>l});var i=r(77343),n=r(99339),o=r(98634),a=r(4760),s=r(22909);function l(e,t){t.hasSymbolColors?(e.include(i.A),e.attributes.add(a.T.SYMBOLCOLOR,"vec4"),e.varyings.add("colorMixMode","mediump float"),e.vertex.code.add(o.H`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(e.fragment.uniforms.add(new n._("colorMixMode",(e=>s.FZ[e.colorMixMode]))),e.vertex.code.add(o.H`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}},60113:(e,t,r)=>{r.d(t,{D:()=>s,I:()=>i});var i,n=r(41644),o=r(98634),a=r(4760);function s(e,t){switch(t.textureCoordinateType){case i.Default:return e.attributes.add(a.T.UV0,"vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add(o.H`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);case i.Compressed:return e.attributes.add(a.T.UV0,"vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add(o.H`vec2 getUV0() {
return uv0 / 16384.0;
}
void forwardTextureCoordinates() {
vuv0 = getUV0();
}`);case i.Atlas:return e.attributes.add(a.T.UV0,"vec2"),e.varyings.add("vuv0","vec2"),e.attributes.add(a.T.UVREGION,"vec4"),e.varyings.add("vuvRegion","vec4"),void e.vertex.code.add(o.H`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);default:(0,n.Bg)(t.textureCoordinateType);case i.None:return void e.vertex.code.add(o.H`void forwardTextureCoordinates() {}`);case i.COUNT:return}}!function(e){e[e.None=0]="None",e[e.Default=1]="Default",e[e.Atlas=2]="Atlas",e[e.Compressed=3]="Compressed",e[e.COUNT=4]="COUNT"}(i||(i={}))},48655:(e,t,r)=>{r.d(t,{c:()=>o});var i=r(98634),n=r(4760);function o(e,t){t.hasVertexColors?(e.attributes.add(n.T.COLOR,"vec4"),e.varyings.add("vColor","vec4"),e.vertex.code.add(i.H`void forwardVertexColor() { vColor = color; }`),e.vertex.code.add(i.H`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):e.vertex.code.add(i.H`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}},85380:(e,t,r)=>{r.d(t,{Bb:()=>u,Pf:()=>f,d4:()=>h});var i=r(41644),n=r(21389),o=r(86361),a=r(16010),s=r(74058),l=r(98634),c=r(82644),d=r(35522);function u(e,t){switch(t.normalType){case a.r.Attribute:case a.r.Compressed:e.include(a.O,t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add(new c.j("transformNormalGlobalFromModel",(e=>e.transformNormalGlobalFromModel)),new d.c("transformNormalViewFromGlobal",(e=>e.transformNormalViewFromGlobal))),e.vertex.code.add(l.H`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case a.r.ScreenDerivative:e.vertex.code.add(l.H`void forwardNormal() {}`);break;default:(0,i.Bg)(t.normalType);case a.r.COUNT:}}class h extends s.su{constructor(){super(...arguments),this.transformNormalViewFromGlobal=(0,n.Ue)()}}class f extends s.OU{constructor(){super(...arguments),this.transformNormalGlobalFromModel=(0,n.Ue)(),this.toMapSpace=(0,o.Ue)()}}},74058:(e,t,r)=>{r.d(t,{OU:()=>v,su:()=>p,up:()=>m});var i=r(21389),n=r(7025),o=r(12400),a=r(52276),s=r(27254),l=r(86471),c=r(49450),d=r(98634),u=r(82644),h=r(35522),f=r(8654);function m(e,t){e.include(a.f);const r=e.vertex;r.include(s.$,t),e.varyings.add("vPositionWorldCameraRelative","vec3"),e.varyings.add("vPosition_view","vec3"),r.uniforms.add(new c.J("transformWorldFromViewTH",(e=>e.transformWorldFromViewTH)),new c.J("transformWorldFromViewTL",(e=>e.transformWorldFromViewTL)),new h.c("transformViewFromCameraRelativeRS",(e=>e.transformViewFromCameraRelativeRS)),new f.g("transformProjFromView",(e=>e.transformProjFromView)),new u.j("transformWorldFromModelRS",(e=>e.transformWorldFromModelRS)),new l.B("transformWorldFromModelTH",(e=>e.transformWorldFromModelTH)),new l.B("transformWorldFromModelTL",(e=>e.transformWorldFromModelTL))),r.code.add(d.H`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`),r.code.add(d.H`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${t.spherical?d.H`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:d.H`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `),e.fragment.uniforms.add(new c.J("transformWorldFromViewTL",(e=>e.transformWorldFromViewTL))),r.code.add(d.H`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),e.fragment.code.add(d.H`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}class p extends d.K{constructor(){super(...arguments),this.transformWorldFromViewTH=(0,o.Ue)(),this.transformWorldFromViewTL=(0,o.Ue)(),this.transformViewFromCameraRelativeRS=(0,i.Ue)(),this.transformProjFromView=(0,n.Ue)()}}class v extends d.K{constructor(){super(...arguments),this.transformWorldFromModelRS=(0,i.Ue)(),this.transformWorldFromModelTH=(0,o.Ue)(),this.transformWorldFromModelTL=(0,o.Ue)()}}},27284:(e,t,r)=>{r.d(t,{i:()=>a});var i=r(60113),n=r(98634);function o(e){e.fragment.code.add(n.H`vec4 textureAtlasLookup(sampler2D tex, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
return textureGrad(tex, uvAtlas, dUVdx, dUVdy);
}`)}function a(e,t){const{textureCoordinateType:r}=t;if(r===i.I.None||r===i.I.COUNT)return;e.include(i.D,t);const a=r===i.I.Atlas;a&&e.include(o),e.fragment.code.add(n.H`
    vec4 textureLookup(sampler2D tex, vec2 uv) {
      return ${a?"textureAtlasLookup(tex, uv, vuvRegion)":"texture(tex, uv)"};
    }
  `)}},49223:(e,t,r)=>{r.d(t,{L:()=>c,V:()=>u});var i=r(19093),n=r(86361),o=r(62993),a=r(82552),s=r(95276),l=r(98634);function c(e,t){const r=e.vertex;t.hasVerticalOffset?(u(r),t.hasScreenSizePerspective&&(e.include(o.cK),(0,o.m8)(r),(0,a.hY)(e.vertex,t)),r.code.add(l.H`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${t.spherical?l.H`vec3 worldNormal = normalize(worldPos + localOrigin);`:l.H`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${t.hasScreenSizePerspective?l.H`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:l.H`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):r.code.add(l.H`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}const d=(0,n.Ue)();function u(e){e.uniforms.add(new s.N("verticalOffset",((e,t)=>{const{minWorldLength:r,maxWorldLength:n,screenLength:o}=e.verticalOffset,a=Math.tan(.5*t.camera.fovY)/(.5*t.camera.fullViewport[3]),s=t.camera.pixelRatio||1;return(0,i.s)(d,o*s,a,r,n)})))}},32980:(e,t,r)=>{r.d(t,{s:()=>x});var i=r(22357),n=r(37081),o=r(33280),a=r(94951),s=r(16010),l=r(14801),c=r(60113),d=r(85380),u=r(24842),h=r(98634);function f(e,t){switch(t.output){case n.H_.Shadow:case n.H_.ShadowHighlight:case n.H_.ShadowExcludeHighlight:case n.H_.ViewshedShadow:e.fragment.include(u.f),e.fragment.code.add(h.H`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
return depth + SLOPE_SCALE * m + BIAS;
}
void outputDepth(float _linearDepth) {
fragColor = floatToRgba4(_calculateFragDepth(_linearDepth));
}`)}}var m=r(83744),p=r(10758),v=r(96577),g=r(82552),_=r(19253),T=r(68401);function x(e,t){const{vertex:r,fragment:u}=e,x=t.hasColorTexture&&t.alphaDiscardMode!==T.JJ.Opaque,{output:b,normalType:S,hasColorTextureTransform:A}=t;switch(b){case n.H_.Depth:(0,g.Sv)(r,t),e.include(a.w,t),e.include(o.f5,t),e.include(c.D,t),x&&u.uniforms.add(new _.A("tex",(e=>e.texture))),r.main.add(h.H`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),e.include(v.z,t),u.main.add(h.H`
          discardBySlice(vpos);
          ${(0,h.If)(x,h.H`vec4 texColor = texture(tex, ${A?"colorUV":"vuv0"});
                 discardOrAdjustAlpha(texColor);`)}`);break;case n.H_.Shadow:case n.H_.ShadowHighlight:case n.H_.ShadowExcludeHighlight:case n.H_.ViewshedShadow:case n.H_.ObjectAndLayerIdColor:(0,g.Sv)(r,t),e.include(a.w,t),e.include(c.D,t),e.include(p.k,t),e.include(f,t),e.include(o.f5,t),e.include(l.R,t),(0,i.Zu)(e),e.varyings.add("depth","float"),x&&u.uniforms.add(new _.A("tex",(e=>e.texture))),r.main.add(h.H`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();`),e.include(v.z,t),u.main.add(h.H`
          discardBySlice(vpos);
          ${(0,h.If)(x,h.H`vec4 texColor = texture(tex, ${A?"colorUV":"vuv0"});
                 discardOrAdjustAlpha(texColor);`)}
          ${b===n.H_.ObjectAndLayerIdColor?h.H`outputObjectAndLayerIdColor();`:h.H`outputDepth(depth);`}`);break;case n.H_.Normal:{(0,g.Sv)(r,t),e.include(a.w,t),e.include(s.O,t),e.include(d.Bb,t),e.include(c.D,t),e.include(p.k,t),x&&u.uniforms.add(new _.A("tex",(e=>e.texture))),S===s.r.ScreenDerivative&&e.varyings.add("vPositionView","vec3");const i=S===s.r.Attribute||S===s.r.Compressed;r.main.add(h.H`
          vpos = getVertexInLocalOriginSpace();
          ${i?h.H`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:h.H`vPositionView = (view * vec4(vpos, 1.0)).xyz;`}
          vpos = subtractOrigin(vpos);
          vpos = addVerticalOffset(vpos, localOrigin);
          gl_Position = transformPosition(proj, view, vpos);
          forwardTextureCoordinates();`),e.include(o.f5,t),e.include(v.z,t),u.main.add(h.H`
          discardBySlice(vpos);
          ${(0,h.If)(x,h.H`vec4 texColor = texture(tex, ${A?"colorUV":"vuv0"});
                 discardOrAdjustAlpha(texColor);`)}

          ${S===s.r.ScreenDerivative?h.H`vec3 normal = screenDerivativeNormal(vPositionView);`:h.H`vec3 normal = normalize(vNormalWorld);
                     if (gl_FrontFacing == false){
                       normal = -normal;
                     }`}
          fragColor = vec4(0.5 + 0.5 * normal, 1.0);`);break}case n.H_.Highlight:(0,g.Sv)(r,t),e.include(a.w,t),e.include(c.D,t),e.include(p.k,t),x&&u.uniforms.add(new _.A("tex",(e=>e.texture))),r.main.add(h.H`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),e.include(o.f5,t),e.include(v.z,t),e.include(m.b,t),u.main.add(h.H`
          discardBySlice(vpos);
          ${(0,h.If)(x,h.H`vec4 texColor = texture(tex, ${A?"colorUV":"vuv0"});
                 discardOrAdjustAlpha(texColor);`)}
          calculateOcclusionAndOutputHighlight();`)}}},80848:(e,t,r)=>{r.d(t,{Ok:()=>h,jo:()=>i});var i,n=r(37081),o=r(27284),a=r(86471),s=r(49450),l=r(98634),c=r(78050),d=r(19253),u=r(99340);r(25278);!function(e){e[e.None=0]="None",e[e.Value=1]="Value",e[e.Texture=2]="Texture",e[e.COUNT=3]="COUNT"}(i||(i={}));function h(e,t){if(!(0,n.c1)(t.output))return;const{emissionSource:r,hasEmissiveTextureTransform:h,bindType:f}=t,m=r===i.Texture;m&&(e.include(o.i,t),e.fragment.uniforms.add(f===u.P.Pass?new d.A("texEmission",(e=>e.textureEmissive)):new c.R("texEmission",(e=>e.textureEmissive))));const p=r===i.Value||m;p&&e.fragment.uniforms.add(f===u.P.Pass?new s.J("emissionFactor",(e=>e.emissiveFactor)):new a.B("emissionFactor",(e=>e.emissiveFactor))),e.fragment.code.add(l.H`
    vec4 getEmissions() {
      vec4 emissions = ${p?"vec4(emissionFactor, 1.0)":"vec4(0.0)"};
      ${(0,l.If)(m,`emissions *= textureLookup(texEmission, ${h?"emissiveUV":"vuv0"});\n         emissions.w = emissions.rgb == vec3(0.0) ? 0.0: emissions.w;`)};
      return emissions;
    }
  `)}},83744:(e,t,r)=>{r.d(t,{b:()=>d});var i=r(37081),n=r(61809),o=r(99340);class a extends n.x{constructor(e,t){super(e,"ivec2",o.P.Pass,((r,i,n)=>r.setUniform2iv(e,t(i,n))))}}var s=r(99339),l=r(98634),c=r(19253);function d(e,t){const{fragment:r}=e;t.output===i.H_.Highlight?(r.uniforms.add(new c.A("depthTexture",((e,t)=>t.mainDepth)),new c.A("highlightTexture",((e,t)=>t.highlightMixTexture)),new s._("highlightLevel",((e,t)=>t.highlightLevel)),new a("highlightMixOrigin",((e,t)=>t.highlightMixOrigin))),e.outputs.add("fragHighlight","vec2",0),r.code.add(l.H`vec2 getAccumulatedHighlight() {
return texelFetch(highlightTexture, ivec2(gl_FragCoord.xy) - highlightMixOrigin, 0).rg;
}
void outputHighlight(bool occluded) {
if (highlightLevel == 0) {
uint bits = occluded ? 3u : 1u;
fragHighlight = vec2(float(bits) / 255.0, 0.0);
} else {
int ll = (highlightLevel & 3) << 1;
int li = (highlightLevel >> 2) & 3;
uint bits;
if (occluded) {
bits = 3u << ll;
} else {
bits = 1u << ll;
}
vec2 combinedHighlight = getAccumulatedHighlight();
uint accumulatedI = uint(combinedHighlight[li] * 255.0);
combinedHighlight[li] = float(bits | accumulatedI) / 255.0;
fragHighlight = combinedHighlight;
}
}
bool isHighlightOccluded() {
float sceneDepth = texelFetch(depthTexture, ivec2(gl_FragCoord.xy), 0).x;
return gl_FragCoord.z > sceneDepth + 5e-7;
}
void calculateOcclusionAndOutputHighlight() {
outputHighlight(isHighlightOccluded());
}`),t.canHaveOverlay&&(r.constants.add("occlusionAndMask","int",85),r.code.add(l.H`void outputAllHighlights(vec2 highlightToAdd) {
if (highlightToAdd == vec2(0.0)) { discard; }
int occludedOrMask = isHighlightOccluded() ? 0xaa : 0;
ivec2 added = ivec2(highlightToAdd * 255.0);
ivec2 masked = (added & ivec2(occlusionAndMask)) | (ivec2(occludedOrMask) & (added<<1));
fragHighlight = vec2(masked) / 255.0;
}`))):r.code.add(l.H`void calculateOcclusionAndOutputHighlight() {}`)}},54943:(e,t,r)=>{r.d(t,{K:()=>s});var i=r(13611),n=r(6644),o=r(82999),a=r(98634);function s(e){e.uniforms.add(new o.A("zProjectionMap",((e,t)=>function(e){const t=e.projectionMatrix;return(0,i.t8)(l,t[14],t[10])}(t.camera)))),e.code.add(a.H`float linearizeDepth(float depth) {
float depthNdc = depth * 2.0 - 1.0;
float c1 = zProjectionMap[0];
float c2 = zProjectionMap[1];
return -(c1 / (depthNdc + c2 + 1e-7));
}`),e.code.add(a.H`float depthFromTexture(sampler2D depthTexture, vec2 uv) {
ivec2 iuv = ivec2(uv * vec2(textureSize(depthTexture, 0)));
float depth = texelFetch(depthTexture, iuv, 0).r;
return depth;
}`),e.code.add(a.H`float linearDepthFromTexture(sampler2D depthTexture, vec2 uv) {
return linearizeDepth(depthFromTexture(depthTexture, uv));
}`)}const l=(0,n.Ue)()},38171:(e,t,r)=>{r.d(t,{Q:()=>p});var i=r(21389),n=r(6644),o=r(60113),a=r(27284),s=r(96658),l=r(82999),c=r(98634),d=r(35522),u=r(78050),h=r(19253),f=r(99340),m=r(4760);function p(e,t){const r=e.fragment;t.hasVertexTangents?(e.attributes.add(m.T.TANGENT,"vec4"),e.varyings.add("vTangent","vec4"),t.doubleSidedMode===s.q.WindingOrder?r.code.add(c.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):r.code.add(c.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):r.code.add(c.H`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`),t.textureCoordinateType!==o.I.None&&(e.include(a.i,t),r.uniforms.add(t.bindType===f.P.Pass?new h.A("normalTexture",(e=>e.textureNormal)):new u.R("normalTexture",(e=>e.textureNormal))),t.hasNormalTextureTransform&&(r.uniforms.add(new l.A("scale",(e=>e.scale??n.hq))),r.uniforms.add(new d.c("normalTextureTransformMatrix",(e=>e.normalTextureTransformMatrix??i.Wd)))),r.code.add(c.H`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;`),t.hasNormalTextureTransform&&r.code.add(c.H`mat3 normalTextureRotation = mat3(normalTextureTransformMatrix[0][0]/scale[0], normalTextureTransformMatrix[0][1]/scale[1], 0.0,
normalTextureTransformMatrix[1][0]/scale[0], normalTextureTransformMatrix[1][1]/scale[1], 0.0,
0.0, 0.0, 0.0 );
rawNormal.xy = (normalTextureRotation * vec3(rawNormal.x, rawNormal.y, 1.0)).xy;`),r.code.add(c.H`return tangentSpace * rawNormal;
}`))}},15167:(e,t,r)=>{r.d(t,{K:()=>V});var i,n,o=r(98634),a=r(19253),s=r(27366),l=r(16889),c=r(92026),d=r(94172),u=r(38499),h=r(49861),f=(r(93169),r(32718),r(84936),r(69912)),m=r(13611);r(7025),r(86452),r(50628);!function(e){e.OPAQUE="opaque-color",e.TRANSPARENT="transparent-color",e.COMPOSITE="composite-color",e.FINAL="final-color"}(i||(i={})),function(e){e.SSAO="ssao",e.LASERLINES="laserline-color",e.ANTIALIASING="aa-color",e.HIGHLIGHTS="highlight-color",e.MAGNIFIER="magnifier-color",e.OCCLUDED="occluded-color",e.VIEWSHED="viewshed-color",e.OPAQUE_ENVIRONMENT="opaque-environment-color",e.TRANSPARENT_ENVIRONMENT="transparent-environment-color"}(n||(n={}));var p,v,g;(g=p||(p={}))[g.RED=0]="RED",g[g.RG=1]="RG",g[g.RGBA4=2]="RGBA4",g[g.RGBA=3]="RGBA",g[g.RGBA_MIPMAP=4]="RGBA_MIPMAP",g[g.R16F=5]="R16F",g[g.RGBA16F=6]="RGBA16F",function(e){e[e.DEPTH_STENCIL_TEXTURE=0]="DEPTH_STENCIL_TEXTURE",e[e.DEPTH16_BUFFER=1]="DEPTH16_BUFFER"}(v||(v={}));var _=r(7138),T=r(10064),x=r(68401);let b=class extends _.Z{constructor(e){super(e),this.view=null,this.consumes={required:[]},this.produces=i.COMPOSITE,this.requireGeometryDepth=!1,this._dirty=!0}initialize(){this.addHandles([(0,d.YP)((()=>this.view.ready),(e=>{e&&this.view._stage?.renderer.addRenderNode(this)}),d.nn)])}destroy(){this.view._stage?.renderer?.removeRenderNode(this)}precompile(){}render(){throw new T.Z("RenderNode:render-function-not-implemented","render() is not implemented.")}get camera(){return this.view.state.camera.clone()}get sunLight(){return this.bindParameters.lighting.legacy}get gl(){return this.view._stage.renderView.renderingContext.gl}acquireOutputFramebuffer(){const e=this._frameBuffer?.getTexture()?.descriptor,t=this.view._stage.renderer.fboCache.acquire(e?.width??640,e?.height??480,this.produces);return t.fbo?.initializeAndBind(),t}bindRenderTarget(){return this._frameBuffer?.fbo?.initializeAndBind(),this._frameBuffer}requestRender(e){e===x.Xx.UPDATE&&this.view._stage?.renderView.requestRender(e),this._dirty=!0}resetWebGLState(){this.renderingContext.resetState(),this.renderingContext.bindFramebuffer(this._frameBuffer?.fbo)}get fboCache(){return this.view._stage.renderer.fboCache}get bindParameters(){return this.renderContext.bind}get renderingContext(){return this.view._stage.renderView.renderingContext}get renderContext(){return this.view._stage?.renderer.renderContext}updateAnimation(e){return!!this._dirty&&(this._dirty=!1,!0)}doRender(e){this._frameBuffer=e.find((e=>{let{name:t}=e;return t===this.produces}));try{return this.render(e)}finally{this._frameBuffer=null}}};(0,s._)([(0,h.Cb)({constructOnly:!0})],b.prototype,"view",void 0),(0,s._)([(0,h.Cb)({constructOnly:!0})],b.prototype,"consumes",void 0),(0,s._)([(0,h.Cb)()],b.prototype,"produces",void 0),b=(0,s._)([(0,f.j)("esri.views.3d.webgl.RenderNode")],b);const S=b,A=5e5;var E=r(82144),w=r(78914),C=r(97727),M=r(36207);class y extends w.A{constructor(e,t,i){super(e,t,new E.J(C.S,(()=>r.e(1843).then(r.bind(r,81843)))),i)}initializePipeline(){return(0,M.sm)({colorWrite:M.gf})}}var O=r(6644);class I extends o.K{constructor(){super(...arguments),this.projScale=1}}class R extends I{constructor(){super(...arguments),this.intensity=1}}class N extends o.K{}class P extends N{constructor(){super(...arguments),this.blurSize=(0,O.Ue)()}}var L=r(46516);class H extends w.A{constructor(e,t,i){super(e,t,new E.J(L.S,(()=>r.e(9956).then(r.bind(r,49956)))),i)}initializePipeline(){return(0,M.sm)({colorWrite:M.gf})}}var D=r(8548),F=r(51378),U=r(52311);const B=2;let z=class extends S{constructor(e){super(e),this.consumes={required:["normals"]},this.produces=n.SSAO,this.isEnabled=()=>!1,this._enableTime=(0,u.HA)(0),this._passParameters=new R,this._drawParameters=new P}initialize(){const e=Uint8Array.from(atob("eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM"),(e=>e.charCodeAt(0))),t=new U.X;t.wrapMode=D.e8.CLAMP_TO_EDGE,t.pixelFormat=D.VI.RGB,t.wrapMode=D.e8.REPEAT,t.hasMipmap=!0,t.width=32,t.height=32,this._passParameters.noiseTexture=new F.x(this.renderingContext,t,e),this.techniques.precompile(H),this.techniques.precompile(y),this.addHandles((0,d.YP)((()=>this.isEnabled()),(()=>this._enableTime=(0,u.HA)(0))))}destroy(){this._passParameters.noiseTexture=(0,c.M2)(this._passParameters.noiseTexture)}render(e){const t=this.bindParameters,r=e.find((e=>{let{name:t}=e;return"normals"===t})),i=r?.getTexture(),o=r?.getTexture(D.Lu),a=this.fboCache,s=t.camera,c=s.fullViewport[2],d=s.fullViewport[3],h=Math.round(c/B),f=Math.round(d/B),v=this.techniques.acquire(H),g=this.techniques.acquire(y);if(!v.compiled||!g.compiled)return this._enableTime=(0,u.HA)(performance.now()),this.requestRender(x.Xx.UPDATE),v.release(),g.release(),a.acquire(h,f,n.SSAO,p.RED);0===this._enableTime&&(this._enableTime=(0,u.HA)(performance.now()));const _=this.renderingContext,T=this.view.qualitySettings.fadeDuration,b=s.relativeElevation,S=(0,l.uZ)((A-b)/2e5,0,1),E=T>0?Math.min(T,performance.now()-this._enableTime)/T:1,w=E*S;this._passParameters.normalTexture=i,this._passParameters.depthTexture=o,this._passParameters.projScale=1/s.computeScreenPixelSizeAtDist(1),this._passParameters.intensity=4*G/(0,L.g)(s)**6*w;const C=a.acquire(c,d,"ssao input",p.RG);_.bindFramebuffer(C.fbo),_.setViewport(0,0,c,d),_.bindTechnique(v,t,this._passParameters,this._drawParameters),_.screen.draw(),v.release();const M=a.acquire(h,f,"ssao blur",p.RED);_.bindFramebuffer(M.fbo),this._drawParameters.colorTexture=C.getTexture(),(0,m.t8)(this._drawParameters.blurSize,0,B/d),_.bindTechnique(g,t,this._passParameters,this._drawParameters),_.setViewport(0,0,h,f),_.screen.draw(),C.release();const O=a.acquire(h,f,n.SSAO,p.RED);return _.bindFramebuffer(O.fbo),_.setViewport(0,0,c,d),_.setClearColor(1,1,1,0),_.clear(D.Hf.COLOR),this._drawParameters.colorTexture=M.getTexture(),(0,m.t8)(this._drawParameters.blurSize,B/c,0),_.bindTechnique(g,t,this._passParameters,this._drawParameters),_.setViewport(0,0,h,f),_.screen.draw(),g.release(),_.setViewport4fv(s.fullViewport),M.release(),E<1&&this.requestRender(x.Xx.UPDATE),O}};(0,s._)([(0,h.Cb)()],z.prototype,"consumes",void 0),(0,s._)([(0,h.Cb)()],z.prototype,"produces",void 0),(0,s._)([(0,h.Cb)({constructOnly:!0})],z.prototype,"techniques",void 0),(0,s._)([(0,h.Cb)({constructOnly:!0})],z.prototype,"isEnabled",void 0),z=(0,s._)([(0,f.j)("esri.views.3d.webgl-engine.effects.ssao.SSAO")],z);const G=.5;function V(e,t){const r=e.fragment;t.receiveAmbientOcclusion?(r.uniforms.add(new a.A("ssaoTex",((e,t)=>t.ssao?.getTexture()))),r.constants.add("blurSizePixelsInverse","float",1/B),r.code.add(o.H`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):r.code.add(o.H`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}},30069:(e,t,r)=>{r.d(t,{XP:()=>E,PN:()=>S,sC:()=>A});var i=r(41644),n=r(32035),o=r(12400),a=r(19093),s=r(86361),l=r(41481),c=r(49450),d=r(95276),u=r(98634);function h(e,t){const r=e.fragment,i=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===i?(r.uniforms.add(new c.J("lightingAmbientSH0",((e,t)=>(0,n.i)(f,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0])))),r.code.add(u.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===i?(r.uniforms.add(new d.N("lightingAmbientSH_R",((e,t)=>(0,a.s)(m,t.lighting.sh.r[0],t.lighting.sh.r[1],t.lighting.sh.r[2],t.lighting.sh.r[3]))),new d.N("lightingAmbientSH_G",((e,t)=>(0,a.s)(m,t.lighting.sh.g[0],t.lighting.sh.g[1],t.lighting.sh.g[2],t.lighting.sh.g[3]))),new d.N("lightingAmbientSH_B",((e,t)=>(0,a.s)(m,t.lighting.sh.b[0],t.lighting.sh.b[1],t.lighting.sh.b[2],t.lighting.sh.b[3])))),r.code.add(u.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):2===i&&(r.uniforms.add(new c.J("lightingAmbientSH0",((e,t)=>(0,n.i)(f,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0]))),new d.N("lightingAmbientSH_R1",((e,t)=>(0,a.s)(m,t.lighting.sh.r[1],t.lighting.sh.r[2],t.lighting.sh.r[3],t.lighting.sh.r[4]))),new d.N("lightingAmbientSH_G1",((e,t)=>(0,a.s)(m,t.lighting.sh.g[1],t.lighting.sh.g[2],t.lighting.sh.g[3],t.lighting.sh.g[4]))),new d.N("lightingAmbientSH_B1",((e,t)=>(0,a.s)(m,t.lighting.sh.b[1],t.lighting.sh.b[2],t.lighting.sh.b[3],t.lighting.sh.b[4]))),new d.N("lightingAmbientSH_R2",((e,t)=>(0,a.s)(m,t.lighting.sh.r[5],t.lighting.sh.r[6],t.lighting.sh.r[7],t.lighting.sh.r[8]))),new d.N("lightingAmbientSH_G2",((e,t)=>(0,a.s)(m,t.lighting.sh.g[5],t.lighting.sh.g[6],t.lighting.sh.g[7],t.lighting.sh.g[8]))),new d.N("lightingAmbientSH_B2",((e,t)=>(0,a.s)(m,t.lighting.sh.b[5],t.lighting.sh.b[6],t.lighting.sh.b[7],t.lighting.sh.b[8])))),r.code.add(u.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),t.pbrMode!==l.f7.Normal&&t.pbrMode!==l.f7.Schematic||r.code.add(u.H`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const f=(0,o.Ue)(),m=(0,s.Ue)();var p=r(15167),v=r(92395),g=r(2116),_=r(85586),T=r(13773),x=r(58406);r(16889);(0,o.Ue)();const b=.4;(0,o.Ue)();function S(e){e.constants.add("ambientBoostFactor","float",b)}function A(e){e.uniforms.add(new x.p("lightingGlobalFactor",((e,t)=>t.lighting.globalFactor)))}function E(e,t){const r=e.fragment;switch(e.include(p.K,t),t.pbrMode!==l.f7.Disabled&&e.include(g.T,t),e.include(h,t),e.include(_.e),r.code.add(u.H`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${t.pbrMode===l.f7.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),S(r),A(r),(0,v.Pe)(r),r.code.add(u.H`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${t.spherical?u.H`normalize(vPosWorld)`:u.H`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),(0,v.F1)(r),r.code.add(u.H`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),t.pbrMode){case l.f7.Disabled:case l.f7.WaterOnIntegratedMesh:case l.f7.Water:e.include(v.gz),r.code.add(u.H`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight) {
vec3 mainLighting = applyShading(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case l.f7.Normal:case l.f7.Schematic:r.code.add(u.H`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec4 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),r.code.add(u.H`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),t.useFillLights?r.uniforms.add(new T.U("hasFillLights",((e,t)=>t.enableFillLights))):r.constants.add("hasFillLights","bool",!1),r.code.add(u.H`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0) ? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
float NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
vec3 mainLightIrradianceComponent = NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),r.uniforms.add(new x.p("lightingSpecularStrength",((e,t)=>t.lighting.mainLight.specularStrength)),new x.p("lightingEnvironmentStrength",((e,t)=>t.lighting.mainLight.environmentStrength))).code.add(u.H`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
float NdotH = clamp(dot(normal, h), 0.0, 1.0);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
float normalDirectionModifier = mix(1., min(mix(0.1, 2.0, (inputs.NdotNG + 1.) * 0.5), 1.0), clamp(inputs.roughness * 5.0, 0.0 , 1.0));
inputs.skyRadianceToSurface = (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.groundRadianceToSurface = 0.5 * GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),r.code.add(u.H`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = _emission.rgb == vec3(0.0) ? _emission.rgb : pow(_emission.rgb, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${t.pbrMode!==l.f7.Schematic||t.hasColorTexture?u.H`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`:u.H`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case l.f7.Simplified:case l.f7.TerrainWithWater:(0,v.Pe)(r),(0,v.F1)(r),r.code.add(u.H`const float roughnessTerrain = 0.5;
const float specularityTerrain = 0.5;
const vec3 fresnelReflectionTerrain = vec3(0.04);
vec3 evaluatePBRSimplifiedLighting(vec3 n, vec3 c, float shadow, float ssao, vec3 al, vec3 vd, vec3 nup) {
vec3 viewDirection = -vd;
vec3 h = normalize(viewDirection + mainLightDirection);
float NdotL = clamp(dot(n, mainLightDirection), 0.001, 1.0);
float NdotV = clamp(abs(dot(n, viewDirection)), 0.001, 1.0);
float NdotH = clamp(dot(n, h), 0.0, 1.0);
float NdotNG = clamp(dot(n, nup), -1.0, 1.0);
vec3 albedoLinear = pow(c, vec3(GAMMA_SRGB));
float lightness = 0.3 * albedoLinear[0] + 0.5 * albedoLinear[1] + 0.2 * albedoLinear[2];
vec3 f0 = (0.85 * lightness + 0.15) * fresnelReflectionTerrain;
vec3 f90 =  vec3(clamp(dot(f0, vec3(50.0 * 0.33)), 0.0, 1.0));
vec3 mainLightIrradianceComponent = (1. - shadow) * NdotL * mainLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(n, ssao) + al;
vec3 ambientSky = ambientLightIrradianceComponent + mainLightIrradianceComponent;
vec3 indirectDiffuse = ((1.0 - NdotNG) * mainLightIrradianceComponent + (1.0 + NdotNG ) * ambientSky) * 0.5;
vec3 outDiffColor = albedoLinear * (1.0 - f0) * indirectDiffuse / PI;
vec3 mainLightRadianceComponent = normalDistribution(NdotH, roughnessTerrain) * mainLightIntensity;
vec2 dfg = prefilteredDFGAnalytical(roughnessTerrain, NdotV);
vec3 specularColor = f0 * dfg.x + f90 * dfg.y;
vec3 specularComponent = specularityTerrain * specularColor * mainLightRadianceComponent;
vec3 outColorLinear = outDiffColor + specularComponent;
vec3 outColor = pow(outColorLinear, vec3(INV_GAMMA_SRGB));
return outColor;
}`);break;default:(0,i.Bg)(t.pbrMode);case l.f7.COUNT:}}},92395:(e,t,r)=>{r.d(t,{F1:()=>a,Pe:()=>o,gz:()=>s});var i=r(49450),n=r(98634);function o(e){e.uniforms.add(new i.J("mainLightDirection",((e,t)=>t.lighting.mainLight.direction)))}function a(e){e.uniforms.add(new i.J("mainLightIntensity",((e,t)=>t.lighting.mainLight.intensity)))}function s(e){o(e.fragment),a(e.fragment),e.fragment.code.add(n.H`vec3 applyShading(vec3 shadingNormalWorld, float shadow) {
float dotVal = clamp(dot(shadingNormalWorld, mainLightDirection), 0.0, 1.0);
return mainLightIntensity * ((1.0 - shadow) * dotVal);
}`)}},96658:(e,t,r)=>{r.d(t,{k:()=>a,q:()=>i});var i,n=r(41644),o=r(98634);function a(e,t){const r=e.fragment;switch(r.code.add(o.H`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),t.doubleSidedMode){case i.None:r.code.add(o.H`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case i.View:r.code.add(o.H`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case i.WindingOrder:r.code.add(o.H`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:(0,n.Bg)(t.doubleSidedMode);case i.COUNT:}}!function(e){e[e.None=0]="None",e[e.View=1]="View",e[e.WindingOrder=2]="WindingOrder",e[e.COUNT=3]="COUNT"}(i||(i={}))},2116:(e,t,r)=>{r.d(t,{T:()=>s});var i=r(98634);function n(e){const t=e.fragment.code;t.add(i.H`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),t.add(i.H`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),t.add(i.H`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}var o=r(41481),a=r(85586);function s(e,t){const r=e.fragment.code;e.include(a.e),t.pbrMode!==o.f7.Normal&&t.pbrMode!==o.f7.Schematic&&t.pbrMode!==o.f7.Simplified&&t.pbrMode!==o.f7.TerrainWithWater||(r.add(i.H`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),r.add(i.H`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`)),t.pbrMode!==o.f7.Normal&&t.pbrMode!==o.f7.Schematic||(e.include(n),r.add(i.H`struct PBRShadingInfo
{
float NdotV;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),r.add(i.H`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),r.add(i.H`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),r.add(i.H`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}},41481:(e,t,r)=>{r.d(t,{f7:()=>i,jV:()=>u});var i,n=r(27284),o=r(86471),a=r(49450),s=r(98634),l=r(78050),c=r(19253),d=r(99340);r(25278),r(45856);!function(e){e[e.Disabled=0]="Disabled",e[e.Normal=1]="Normal",e[e.Schematic=2]="Schematic",e[e.Water=3]="Water",e[e.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",e[e.Simplified=5]="Simplified",e[e.TerrainWithWater=6]="TerrainWithWater",e[e.COUNT=7]="COUNT"}(i||(i={}));function u(e,t){const r=t.pbrMode,u=e.fragment;if(r!==i.Schematic&&r!==i.Disabled&&r!==i.Normal)return void u.code.add(s.H`void applyPBRFactors() {}`);if(r===i.Disabled)return void u.code.add(s.H`void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);if(r===i.Schematic)return void u.code.add(s.H`vec3 mrr = vec3(0.0, 0.6, 0.2);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);const{hasMetallicRoughnessTexture:h,hasMetallicRoughnessTextureTransform:f,hasOcclusionTexture:m,hasOcclusionTextureTransform:p,bindType:v}=t;(h||m)&&e.include(n.i,t),u.code.add(s.H`vec3 mrr;
float occlusion;`),h&&u.uniforms.add(v===d.P.Pass?new c.A("texMetallicRoughness",(e=>e.textureMetallicRoughness)):new l.R("texMetallicRoughness",(e=>e.textureMetallicRoughness))),m&&u.uniforms.add(v===d.P.Pass?new c.A("texOcclusion",(e=>e.textureOcclusion)):new l.R("texOcclusion",(e=>e.textureOcclusion))),u.uniforms.add(v===d.P.Pass?new a.J("mrrFactors",(e=>e.mrrFactors)):new o.B("mrrFactors",(e=>e.mrrFactors))),u.code.add(s.H`
    ${(0,s.If)(h,s.H`void applyMetallicRoughness(vec2 uv) {
            vec3 metallicRoughness = textureLookup(texMetallicRoughness, uv).rgb;
            mrr[0] *= metallicRoughness.b;
            mrr[1] *= metallicRoughness.g;
          }`)}

    ${(0,s.If)(m,"void applyOcclusion(vec2 uv) { occlusion *= textureLookup(texOcclusion, uv).r; }")}

    float getBakedOcclusion() {
      return ${m?"occlusion":"1.0"};
    }

    void applyPBRFactors() {
      mrr = mrrFactors;
      occlusion = 1.0;

      ${(0,s.If)(h,`applyMetallicRoughness(${f?"metallicRoughnessUV":"vuv0"});`)}
      ${(0,s.If)(m,`applyOcclusion(${p?"occlusionUV":"vuv0"});`)}
    }
  `)}},85586:(e,t,r)=>{function i(e){const t=3.141592653589793,r=.3183098861837907;e.vertex.constants.add("PI","float",t),e.fragment.constants.add("PI","float",t),e.fragment.constants.add("LIGHT_NORMALIZATION","float",r),e.fragment.constants.add("INV_PI","float",r),e.fragment.constants.add("HALF_PI","float",1.570796326794897),e.fragment.constants.add("TWO_PI","float",6.28318530717958)}r.d(t,{e:()=>i})},58335:(e,t,r)=>{r.d(t,{XE:()=>f,hb:()=>h});r(7025),r(12400);var i=r(24842),n=r(95276),o=r(99339),a=r(98634),s=r(61809),l=r(99340);class c extends s.x{constructor(e,t,r){super(e,"mat4",l.P.Draw,((r,i,n,o)=>r.setUniformMatrix4fv(e,t(i,n,o))),r)}}class d extends s.x{constructor(e,t,r){super(e,"mat4",l.P.Pass,((r,i,n)=>r.setUniformMatrix4fv(e,t(i,n))),r)}}var u=r(19253);function h(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new d("shadowMapMatrix",((e,t)=>t.shadowMap.getShadowMapMatrices(e.origin)),4)),m(e))}function f(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new c("shadowMapMatrix",((e,t)=>t.shadowMap.getShadowMapMatrices(e.origin)),4)),m(e))}function m(e){const t=e.fragment;t.include(i.f),t.uniforms.add(new u.A("shadowMap",((e,t)=>t.shadowMap.depthTexture)),new o._("numCascades",((e,t)=>t.shadowMap.numCascades)),new n.N("cascadeDistances",((e,t)=>t.shadowMap.cascadeDistances))).code.add(a.H`int chooseCascade(float depth, out mat4 mat) {
vec4 distance = cascadeDistances;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, ivec2 textureSize, vec3 lvpos) {
float xScale = float(textureSize.y) / float(textureSize.x);
return vec2((float(i) + lvpos.x) * xScale, lvpos.y);
}
float readShadowMapDepth(ivec2 uv, sampler2D _depthTex) {
return rgba4ToFloat(texelFetch(_depthTex, uv, 0));
}
float posIsInShadow(ivec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, ivec2 texSize, sampler2D _depthTex) {
vec2 st = fract(uv * vec2(texSize) + vec2(0.5));
ivec2 base = ivec2(uv * vec2(texSize) - vec2(0.5));
float s00 = posIsInShadow(ivec2(base.x, base.y), lvpos, _depthTex);
float s10 = posIsInShadow(ivec2(base.x + 1, base.y), lvpos, _depthTex);
float s11 = posIsInShadow(ivec2(base.x + 1, base.y + 1), lvpos, _depthTex);
float s01 = posIsInShadow(ivec2(base.x, base.y + 1), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= numCascades) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0 || lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
ivec2 size = textureSize(shadowMap, 0);
vec2 uv = cascadeCoordinates(i, size, lvpos);
return filterShadow(uv, lvpos, size, shadowMap);
}`)}},74876:(e,t,r)=>{r.d(t,{H:()=>a});var i=r(54943),n=r(98634),o=r(19253);function a(e,t){let{occlusionPass:r,terrainDepthTest:a,cullAboveTerrain:s}=t;a?(e.fragment.include(i.K),e.fragment.uniforms.add(new o.A("terrainDepthTexture",((e,t)=>t.terrainDepth?.attachment))).code.add(n.H`
   ${r?"bool":"void"} terrainDepthTest(float fragmentDepth) {
      float depth = texelFetch(terrainDepthTexture, ivec2(gl_FragCoord.xy), 0).r;
      float linearDepth = linearizeDepth(depth);
      ${r?n.H`return fragmentDepth < linearDepth && depth < 1.0;`:n.H`if(fragmentDepth ${s?">":"<="} linearDepth) discard;`}
    }`)):r?e.fragment.code.add(n.H`#define terrainDepthTest(fragmentDepth) false`):e.fragment.code.add(n.H`#define terrainDepthTest(fragmentDepth) {}`)}},79154:(e,t,r)=>{r.d(t,{DT:()=>u,NI:()=>l,R5:()=>c,av:()=>s,jF:()=>d});var i=r(21389),n=r(60113),o=r(98634),a=r(35522);function s(e,t){t.hasColorTextureTransform?(e.varyings.add("colorUV","vec2"),e.vertex.uniforms.add(new a.c("colorTextureTransformMatrix",(e=>e.colorTextureTransformMatrix??i.Wd))).code.add(o.H`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(o.H`void forwardColorUV(){}`)}function l(e,t){t.hasNormalTextureTransform&&t.textureCoordinateType!==n.I.None?(e.varyings.add("normalUV","vec2"),e.vertex.uniforms.add(new a.c("normalTextureTransformMatrix",(e=>e.normalTextureTransformMatrix??i.Wd))).code.add(o.H`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(o.H`void forwardNormalUV(){}`)}function c(e,t){t.hasEmissionTextureTransform&&t.textureCoordinateType!==n.I.None?(e.varyings.add("emissiveUV","vec2"),e.vertex.uniforms.add(new a.c("emissiveTextureTransformMatrix",(e=>e.emissiveTextureTransformMatrix??i.Wd))).code.add(o.H`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(o.H`void forwardEmissiveUV(){}`)}function d(e,t){t.hasOcclusionTextureTransform&&t.textureCoordinateType!==n.I.None?(e.varyings.add("occlusionUV","vec2"),e.vertex.uniforms.add(new a.c("occlusionTextureTransformMatrix",(e=>e.occlusionTextureTransformMatrix??i.Wd))).code.add(o.H`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(o.H`void forwardOcclusionUV(){}`)}function u(e,t){t.hasMetallicRoughnessTextureTransform&&t.textureCoordinateType!==n.I.None?(e.varyings.add("metallicRoughnessUV","vec2"),e.vertex.uniforms.add(new a.c("metallicRoughnessTextureTransformMatrix",(e=>e.metallicRoughnessTextureTransformMatrix??i.Wd))).code.add(o.H`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(o.H`void forwardMetallicRoughnessUV(){}`)}},10758:(e,t,r)=>{r.d(t,{k:()=>h});var i=r(49450),n=r(61809),o=r(99340);class a extends n.x{constructor(e,t,r){super(e,"vec4",o.P.Pass,((r,i,n)=>r.setUniform4fv(e,t(i,n))),r)}}class s extends n.x{constructor(e,t,r){super(e,"float",o.P.Pass,((r,i,n)=>r.setUniform1fv(e,t(i,n))),r)}}var l=r(98634),c=r(35522),d=r(4760);r(66202),r(56529);const u=8;function h(e,t){const{vertex:r,attributes:n}=e;t.hasVvInstancing&&(t.vvSize||t.vvColor)&&n.add(d.T.INSTANCEFEATUREATTRIBUTE,"vec4"),t.vvSize?(r.uniforms.add(new i.J("vvSizeMinSize",(e=>e.vvSize.minSize))),r.uniforms.add(new i.J("vvSizeMaxSize",(e=>e.vvSize.maxSize))),r.uniforms.add(new i.J("vvSizeOffset",(e=>e.vvSize.offset))),r.uniforms.add(new i.J("vvSizeFactor",(e=>e.vvSize.factor))),r.uniforms.add(new c.c("vvSymbolRotationMatrix",(e=>e.vvSymbolRotationMatrix))),r.uniforms.add(new i.J("vvSymbolAnchor",(e=>e.vvSymbolAnchor))),r.code.add(l.H`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),r.code.add(l.H`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${t.hasVvInstancing?l.H`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):r.code.add(l.H`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),t.vvColor?(r.constants.add("vvColorNumber","int",u),r.uniforms.add(new s("vvColorValues",(e=>e.vvColor.values),u),new a("vvColorColors",(e=>e.vvColor.colors),u)),r.code.add(l.H`
      vec4 interpolateVVColor(float value) {
        if (value <= vvColorValues[0]) {
          return vvColorColors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (vvColorValues[i] >= value) {
            float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
            return mix(vvColorColors[i-1], vvColorColors[i], f);
          }
        }
        return vvColorColors[vvColorNumber - 1];
      }

      vec4 vvGetColor(vec4 featureAttribute) {
        return interpolateVVColor(featureAttribute.y);
      }

      ${t.hasVvInstancing?l.H`
            vec4 vvColor() {
              return vvGetColor(instanceFeatureAttribute);
            }`:"vec4 vvColor() { return vec4(1.0); }"}
    `)):r.code.add(l.H`vec4 vvColor() { return vec4(1.0); }`)}},96415:(e,t,r)=>{r.d(t,{GZ:()=>d});var i=r(13611),n=r(6644),o=r(19093),a=r(86361),s=r(82999),l=r(95276),c=r(98634);function d(e){e.fragment.uniforms.add(new l.N("projInfo",((e,t)=>function(e){const t=e.projectionMatrix;return 0===t[11]?(0,o.s)(u,2/(e.fullWidth*t[0]),2/(e.fullHeight*t[5]),(1+t[12])/t[0],(1+t[13])/t[5]):(0,o.s)(u,-2/(e.fullWidth*t[0]),-2/(e.fullHeight*t[5]),(1-t[8])/t[0],(1-t[9])/t[5])}(t.camera)))),e.fragment.uniforms.add(new s.A("zScale",((e,t)=>function(e){return 0===e.projectionMatrix[11]?(0,i.t8)(h,0,1):(0,i.t8)(h,1,0)}(t.camera)))),e.fragment.code.add(c.H`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`)}const u=(0,a.Ue)();const h=(0,n.Ue)()},116:(e,t,r)=>{r.d(t,{Y:()=>n});var i=r(98634);function n(e){e.code.add(i.H`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`)}},96577:(e,t,r)=>{r.d(t,{z:()=>s});var i=r(26461);r(61809),r(99340);var n=r(58406),o=r(98634),a=r(68401);function s(e,t){l(e,t,new n.p("textureAlphaCutoff",(e=>e.textureAlphaCutoff)))}function l(e,t,r){const n=e.fragment;switch(t.alphaDiscardMode){case a.JJ.Blend:e.fragment.code.add(o.H`
        #define discardOrAdjustAlpha(color) { if (color.a < ${o.H.float(i.e)}) { discard; } }
      `);break;case a.JJ.Opaque:n.code.add(o.H`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case a.JJ.Mask:n.uniforms.add(r).code.add(o.H`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case a.JJ.MaskBlend:n.uniforms.add(r).code.add(o.H`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}},27254:(e,t,r)=>{r.d(t,{$:()=>n});var i=r(98634);function n(e,t){let{code:r}=e;t.doublePrecisionRequiresObfuscation?r.add(i.H`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`):r.add(i.H`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}},71033:(e,t,r)=>{r.d(t,{y:()=>a});var i=r(49420),n=r(116),o=r(98634);function a(e){e.include(n.Y),e.code.add(o.H`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in macOS using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${o.H.int(i.a9.Multiply)}) {
        return allMixed;
      }
      if (mode == ${o.H.int(i.a9.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${o.H.int(i.a9.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in macOS using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${o.H.int(i.a9.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${o.H.int(i.a9.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}},24842:(e,t,r)=>{r.d(t,{f:()=>n});var i=r(98634);function n(e){e.code.add(i.H`const float MAX_RGBA4_FLOAT =
15.0 / 16.0 +
15.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 / 16.0;
const vec4 FIXED_POINT_FACTORS_RGBA4 = vec4(1.0, 16.0, 16.0 * 16.0, 16.0 * 16.0 * 16.0);
vec4 floatToRgba4(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA4_FLOAT);
vec4 fixedPointU4 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS_RGBA4) * 16.0);
const float toU4AsFloat = 1.0 / 15.0;
return fixedPointU4 * toU4AsFloat;
}
const vec4 RGBA4_2_FLOAT_FACTORS = vec4(
15.0 / (16.0),
15.0 / (16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0 * 16.0)
);
float rgba4ToFloat(vec4 rgba) {
return dot(rgba, RGBA4_2_FLOAT_FACTORS);
}`)}},62993:(e,t,r)=>{r.d(t,{cK:()=>s,m8:()=>c,ww:()=>l});var i=r(32035),n=r(12400),o=r(49450),a=r(98634);function s(e){e.vertex.code.add(a.H`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),e.vertex.code.add(a.H`vec3 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec3 params) {
return vec3(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z
);
}`),e.vertex.code.add(a.H`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),e.vertex.code.add(a.H`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),e.vertex.code.add(a.H`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),e.vertex.code.add(a.H`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function l(e){e.uniforms.add(new o.J("screenSizePerspective",(e=>d(e.screenSizePerspective))))}function c(e){e.uniforms.add(new o.J("screenSizePerspectiveAlignment",(e=>d(e.screenSizePerspectiveAlignment||e.screenSizePerspective))))}function d(e){return(0,i.i)(u,e.parameters.divisor,e.parameters.offset,e.minScaleFactor)}const u=(0,n.Ue)()},82552:(e,t,r)=>{r.d(t,{hY:()=>m,ZI:()=>T,Sv:()=>p,_8:()=>_});var i=r(29134),n=r(7025),o=r(32035),a=r(12400),s=r(86471),l=r(49450),c=r(58406),d=r(61809),u=r(99340);class h extends d.x{constructor(e,t){super(e,"mat4",u.P.Draw,((r,i,n)=>r.setUniformMatrix4fv(e,t(i,n))))}}var f=r(8654);function m(e,t){t.instancedDoublePrecision?e.constants.add("cameraPosition","vec3",a.AG):e.uniforms.add(new s.B("cameraPosition",((e,t)=>(0,o.i)(g,t.camera.viewInverseTransposeMatrix[3]-e.origin[0],t.camera.viewInverseTransposeMatrix[7]-e.origin[1],t.camera.viewInverseTransposeMatrix[11]-e.origin[2]))))}function p(e,t){if(!t.instancedDoublePrecision)return void e.uniforms.add(new f.g("proj",((e,t)=>t.camera.projectionMatrix)),new h("view",((e,t)=>(0,i.Iu)(v,t.camera.viewMatrix,e.origin))),new s.B("localOrigin",(e=>e.origin)));const r=e=>(0,o.i)(g,e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]);e.uniforms.add(new f.g("proj",((e,t)=>t.camera.projectionMatrix)),new f.g("view",((e,t)=>(0,i.Iu)(v,t.camera.viewMatrix,r(t)))),new l.J("localOrigin",((e,t)=>r(t))))}const v=(0,n.Ue)(),g=(0,a.Ue)();function _(e){e.uniforms.add(new f.g("viewNormal",((e,t)=>t.camera.viewInverseTransposeMatrix)))}function T(e){e.uniforms.add(new c.p("pixelRatio",((e,t)=>t.camera.pixelRatio/t.overlayStretch)))}},13773:(e,t,r)=>{r.d(t,{U:()=>o});var i=r(61809),n=r(99340);class o extends i.x{constructor(e,t){super(e,"bool",n.P.Pass,((r,i,n)=>r.setUniform1b(e,t(i,n))))}}},22527:(e,t,r)=>{r.d(t,{q:()=>o});var i=r(61809),n=r(99340);class o extends i.x{constructor(e,t){super(e,"vec2",n.P.Draw,((r,i,n,o)=>r.setUniform2fv(e,t(i,n,o))))}}},82999:(e,t,r)=>{r.d(t,{A:()=>o});var i=r(61809),n=r(99340);class o extends i.x{constructor(e,t){super(e,"vec2",n.P.Pass,((r,i,n)=>r.setUniform2fv(e,t(i,n))))}}},86471:(e,t,r)=>{r.d(t,{B:()=>o});var i=r(61809),n=r(99340);class o extends i.x{constructor(e,t){super(e,"vec3",n.P.Draw,((r,i,n,o)=>r.setUniform3fv(e,t(i,n,o))))}}},49450:(e,t,r)=>{r.d(t,{J:()=>o});var i=r(61809),n=r(99340);class o extends i.x{constructor(e,t){super(e,"vec3",n.P.Pass,((r,i,n)=>r.setUniform3fv(e,t(i,n))))}}},95276:(e,t,r)=>{r.d(t,{N:()=>o});var i=r(61809),n=r(99340);class o extends i.x{constructor(e,t){super(e,"vec4",n.P.Pass,((r,i,n)=>r.setUniform4fv(e,t(i,n))))}}},58406:(e,t,r)=>{r.d(t,{p:()=>o});var i=r(61809),n=r(99340);class o extends i.x{constructor(e,t){super(e,"float",n.P.Pass,((r,i,n)=>r.setUniform1f(e,t(i,n))))}}},99339:(e,t,r)=>{r.d(t,{_:()=>o});var i=r(61809),n=r(99340);class o extends i.x{constructor(e,t){super(e,"int",n.P.Pass,((r,i,n)=>r.setUniform1i(e,t(i,n))))}}},82644:(e,t,r)=>{r.d(t,{j:()=>o});var i=r(61809),n=r(99340);class o extends i.x{constructor(e,t){super(e,"mat3",n.P.Draw,((r,i,n)=>r.setUniformMatrix3fv(e,t(i,n))))}}},35522:(e,t,r)=>{r.d(t,{c:()=>o});var i=r(61809),n=r(99340);class o extends i.x{constructor(e,t){super(e,"mat3",n.P.Pass,((r,i,n)=>r.setUniformMatrix3fv(e,t(i,n))))}}},8654:(e,t,r)=>{r.d(t,{g:()=>o});var i=r(61809),n=r(99340);class o extends i.x{constructor(e,t){super(e,"mat4",n.P.Pass,((r,i,n)=>r.setUniformMatrix4fv(e,t(i,n))))}}},64201:(e,t,r)=>{r.d(t,{kG:()=>l});var i=r(10064),n=(r(93169),r(32718)),o=r(99340),a=r(97731);class s{constructor(){this._includedModules=new Map}include(e,t){this._includedModules.has(e)?this._includedModules.get(e):(this._includedModules.set(e,t),e(this.builder,t))}}class l extends s{constructor(){super(...arguments),this.vertex=new h,this.fragment=new h,this.attributes=new f,this.varyings=new m,this.extensions=new p,this.outputs=new v}get fragmentUniforms(){return this.fragment.uniforms.entries}get builder(){return this}generate(e){const t=this.extensions.generateSource(e),r=this.attributes.generateSource(e),i=this.varyings.generateSource(e),n="vertex"===e?this.vertex:this.fragment,o=n.uniforms.generateSource(),a=n.code.generateSource(),s=n.main.generateSource(),l="vertex"===e?T:_,c=n.constants.generateSource(),d=this.outputs.generateSource(e);return`#version 300 es\n${t.join("\n")}\n\n${l}\n\n${c.join("\n")}\n\n${o.join("\n")}\n\n${r.join("\n")}\n\n${i.join("\n")}\n\n${d.join("\n")}\n\n${a.join("\n")}\n\n${s.join("\n")}`}generateBindPass(e){const t=new Map;this.vertex.uniforms.entries.forEach((e=>{const r=e.bind[o.P.Pass];r&&t.set(e.name,r)})),this.fragment.uniforms.entries.forEach((e=>{const r=e.bind[o.P.Pass];r&&t.set(e.name,r)}));const r=Array.from(t.values()),i=r.length;return(t,n)=>{for(let o=0;o<i;++o)r[o](e,t,n)}}generateBindDraw(e){const t=new Map;this.vertex.uniforms.entries.forEach((e=>{const r=e.bind[o.P.Draw];r&&t.set(e.name,r)})),this.fragment.uniforms.entries.forEach((e=>{const r=e.bind[o.P.Draw];r&&t.set(e.name,r)}));const r=Array.from(t.values()),i=r.length;return(t,n,o)=>{for(let a=0;a<i;++a)r[a](e,o,t,n)}}}class c{constructor(e){this._stage=e,this._entries=new Map}add(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];for(const i of t)this._add(i);return this._stage}get(e){return this._entries.get(e)}_add(e){if(null!=e){if(this._entries.has(e.name)&&!this._entries.get(e.name).equals(e))throw new i.Z(`Duplicate uniform name ${e.name} for different uniform type`);this._entries.set(e.name,e)}else n.Z.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder").error(`Trying to add null Uniform from ${(new Error).stack}.`)}generateSource(){return Array.from(this._entries.values()).map((e=>null!=e.arraySize?`uniform ${e.type} ${e.name}[${e.arraySize}];`:`uniform ${e.type} ${e.name};`))}get entries(){return Array.from(this._entries.values())}}class d{constructor(e){this._stage=e,this._bodies=new Array}add(e){return this._bodies.push(e),this._stage}generateSource(){if(this._bodies.length>0)return[`void main() {\n ${this._bodies.join("\n")||""} \n}`];throw new i.Z("Shader does not contain main function body.")}}class u{constructor(e){this._stage=e,this._entries=new Array}add(e){return this._entries.push(e),this._stage}generateSource(){return this._entries}}class h extends s{constructor(){super(...arguments),this.uniforms=new c(this),this.main=new d(this),this.code=new u(this),this.constants=new g(this)}get builder(){return this}}class f{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(e){return"fragment"===e?[]:this._entries.map((e=>`in ${e[1]} ${e[0]};`))}}class m{constructor(){this._entries=new Map}add(e,t){this._entries.has(e)&&(0,a.hu)(this._entries.get(e)===t),this._entries.set(e,t)}generateSource(e){const t=new Array;return this._entries.forEach(((r,i)=>t.push("vertex"===e?`out ${r} ${i};`:`in ${r} ${i};`))),t}}class p{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const t="vertex"===e?p.ALLOWLIST_VERTEX:p.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter((e=>t.includes(e))).map((e=>`#extension ${e} : enable`))}}p.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],p.ALLOWLIST_VERTEX=[];class v{constructor(){this._entries=new Map}add(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;const i=this._entries.get(r);i?(0,a.hu)(i.name===e&&i.type===t,`Fragment shader output location ${r} occupied`):this._entries.set(r,{name:e,type:t})}generateSource(e){if("vertex"===e)return[];0===this._entries.size&&this._entries.set(0,{name:v.DEFAULT_NAME,type:v.DEFAULT_TYPE});const t=new Array;return this._entries.forEach(((e,r)=>t.push(`layout(location = ${r}) out ${e.type} ${e.name};`))),t}}v.DEFAULT_TYPE="vec4",v.DEFAULT_NAME="fragColor";class g{constructor(e){this._stage=e,this._entries=new Set}add(e,t,r){let i="ERROR_CONSTRUCTOR_STRING";switch(t){case"float":i=g._numberToFloatStr(r);break;case"int":i=g._numberToIntStr(r);break;case"bool":i=r.toString();break;case"vec2":i=`vec2(${g._numberToFloatStr(r[0])},                            ${g._numberToFloatStr(r[1])})`;break;case"vec3":i=`vec3(${g._numberToFloatStr(r[0])},                            ${g._numberToFloatStr(r[1])},                            ${g._numberToFloatStr(r[2])})`;break;case"vec4":i=`vec4(${g._numberToFloatStr(r[0])},                            ${g._numberToFloatStr(r[1])},                            ${g._numberToFloatStr(r[2])},                            ${g._numberToFloatStr(r[3])})`;break;case"ivec2":i=`ivec2(${g._numberToIntStr(r[0])},                             ${g._numberToIntStr(r[1])})`;break;case"ivec3":i=`ivec3(${g._numberToIntStr(r[0])},                             ${g._numberToIntStr(r[1])},                             ${g._numberToIntStr(r[2])})`;break;case"ivec4":i=`ivec4(${g._numberToIntStr(r[0])},                             ${g._numberToIntStr(r[1])},                             ${g._numberToIntStr(r[2])},                             ${g._numberToIntStr(r[3])})`;break;case"mat2":case"mat3":case"mat4":i=`${t}(${Array.prototype.map.call(r,(e=>g._numberToFloatStr(e))).join(", ")})`}return this._entries.add(`const ${t} ${e} = ${i};`),this._stage}static _numberToIntStr(e){return e.toFixed(0)}static _numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}}const _="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif",T="precision highp float;\nprecision highp sampler2D;"},78050:(e,t,r)=>{r.d(t,{R:()=>o});var i=r(61809),n=r(99340);class o extends i.x{constructor(e,t){super(e,"sampler2D",n.P.Draw,((r,i,n)=>r.bindTexture(e,t(i,n))))}}},19253:(e,t,r)=>{r.d(t,{A:()=>o});var i=r(61809),n=r(99340);class o extends i.x{constructor(e,t){super(e,"sampler2D",n.P.Pass,((r,i,n)=>r.bindTexture(e,t(i,n))))}}},61809:(e,t,r)=>{r.d(t,{x:()=>n});var i=r(99340);class n{constructor(e,t,r,n){let o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;if(this.name=e,this.type=t,this.arraySize=o,this.bind={[i.P.Pass]:null,[i.P.Draw]:null},n)switch(r){case i.P.Pass:this.bind[i.P.Pass]=n;break;case i.P.Draw:this.bind[i.P.Draw]=n}}equals(e){return this.type===e.type&&this.name===e.name&&this.arraySize===e.arraySize}}},98634:(e,t,r)=>{r.d(t,{H:()=>n,If:()=>o,K:()=>i});const i=class{};function n(e){let t="";for(let r=0;r<(arguments.length<=1?0:arguments.length-1);r++)t+=e[r]+(r+1<1||arguments.length<=r+1?void 0:arguments[r+1]);return t+=e[e.length-1],t}function o(e,t){return e?t:arguments.length>2&&void 0!==arguments[2]?arguments[2]:""}!function(e){e.int=function(e){return Math.round(e).toString()},e.float=function(e){return e.toPrecision(8)}}(n||(n={}))},99340:(e,t,r)=>{var i;r.d(t,{P:()=>i}),function(e){e[e.Pass=0]="Pass",e[e.Draw=1]="Draw"}(i||(i={}))},82144:(e,t,r)=>{r.d(t,{J:()=>i});class i{constructor(e,t){this._module=e,this._load=t}get(){return this._module}async reload(){return this._module=await this._load(),this._module}}},78914:(e,t,r)=>{r.d(t,{A:()=>d});var i=r(92026),n=r(7566),o=r(27546),a=r(37825);class s{constructor(e,t,r){this._context=e,this._locations=r,this._textures=new Map,this._freeTextureUnits=new o.Z({deallocator:null}),this._glProgram=e.programCache.acquire(t.generate("vertex"),t.generate("fragment"),r),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this.bindPass=t.generateBindPass(this),this.bindDraw=t.generateBindDraw(this),this._fragmentUniforms=(0,a.hZ)()?t.fragmentUniforms:null}dispose(){this._glProgram.dispose()}get glName(){return this._glProgram.glName}get hasTransformFeedbackVaryings(){return this._glProgram.hasTransformFeedbackVaryings}get compiled(){return this._glProgram.compiled}setUniform1b(e,t){this._glProgram.setUniform1i(e,t?1:0)}setUniform1i(e,t){this._glProgram.setUniform1i(e,t)}setUniform1f(e,t){this._glProgram.setUniform1f(e,t)}setUniform2fv(e,t){this._glProgram.setUniform2fv(e,t)}setUniform3fv(e,t){this._glProgram.setUniform3fv(e,t)}setUniform4fv(e,t){this._glProgram.setUniform4fv(e,t)}setUniformMatrix3fv(e,t){this._glProgram.setUniformMatrix3fv(e,t)}setUniformMatrix4fv(e,t){this._glProgram.setUniformMatrix4fv(e,t)}setUniform1fv(e,t){this._glProgram.setUniform1fv(e,t)}setUniform1iv(e,t){this._glProgram.setUniform1iv(e,t)}setUniform2iv(e,t){this._glProgram.setUniform2iv(e,t)}setUniform3iv(e,t){this._glProgram.setUniform3iv(e,t)}setUniform4iv(e,t){this._glProgram.setUniform4iv(e,t)}assertCompatibleVertexAttributeLocations(e){e.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(e,t){if(null==t?.glName){const t=this._textures.get(e);return t&&(this._context.bindTexture(null,t.unit),this._freeTextureUnit(t),this._textures.delete(e)),null}let r=this._textures.get(e);return null==r?(r=this._allocTextureUnit(t),this._textures.set(e,r)):r.texture=t,this._context.useProgram(this),this.setUniform1i(e,r.unit),this._context.bindTexture(t,r.unit),r.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach(((e,t)=>{this._context.bindTexture(e.texture,e.unit),this.setUniform1i(t,e.unit)})),this._fragmentUniforms?.forEach((e=>{"sampler2D"!==e.type&&"samplerCube"!==e.type||this._textures.has(e.name)||console.error(`Texture sampler ${e.name} has no bound texture`)}))}_allocTextureUnit(e){return{texture:e,unit:0===this._freeTextureUnits.length?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(e){this._freeTextureUnits.push(e.unit)}}var l=r(8548),c=r(36207);class d{constructor(e,t,r,o){let a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:n.i;this.release=o,this.locations=a,this.primitiveType=l.MX.TRIANGLES,this.key=t.key,this._program=new s(e.rctx,r.get().build(t),a),this._pipeline=this.initializePipeline(t),this.reload=async n=>{if(n&&await r.reload(),!this.key.equals(t.key))throw new Error("Configuration was changed after construction, cannot reload shader");(0,i.M2)(this._program),this._program=new s(e.rctx,r.get().build(t),a),this._pipeline=this.initializePipeline(t)}}destroy(){this._program=(0,i.M2)(this._program),this._pipeline=null}get program(){return this._program}get compiled(){return this.program.compiled}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}getPipeline(e,t){return this._pipeline}initializePipeline(e){return(0,c.sm)({blending:c.xW,colorWrite:c.gf})}}},5775:(e,t,r)=>{r.d(t,{m:()=>s,o:()=>l});var i=r(10064),n=r(98634),o=r(63780);class a{constructor(e){this._bits=[...e]}equals(e){return(0,o.fS)(this._bits,e.bits)}get code(){return this._code??=String.fromCharCode(...this._bits),this._code}get bits(){return this._bits}}class s extends n.K{constructor(){super(),this._parameterBits=this._parameterBits?.map((()=>0))??[],this._parameterNames??=[]}get key(){return this._key??=new a(this._parameterBits),this._key}decode(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.key;const t=this._parameterBits;this._parameterBits=[...e.bits];const r=this._parameterNames.map((e=>`    ${e}: ${this[e]}`)).join("\n");return this._parameterBits=t,r}}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(t,r)=>{t.hasOwnProperty("_parameterNames")||Object.defineProperty(t,"_parameterNames",{value:t._parameterNames?.slice()??[],configurable:!0,writable:!0}),t.hasOwnProperty("_parameterBits")||Object.defineProperty(t,"_parameterBits",{value:t._parameterBits?.slice()??[0],configurable:!0,writable:!0}),t._parameterNames.push(r);const n=e.count||2,o=Math.ceil(Math.log2(n)),a=t._parameterBits;let s=0;for(;a[s]+o>16;)s++,s>=a.length&&a.push(0);const l=a[s],c=(1<<o)-1<<l;a[s]+=o,e.count?Object.defineProperty(t,r,{get(){return(this._parameterBits[s]&c)>>l},set(t){if(this[r]!==t){if(this._key=null,this._parameterBits[s]=this._parameterBits[s]&~c|+t<<l&c,"number"!=typeof t)throw new i.Z(`Configuration value for ${r} must be a number, got ${typeof t}`);if(null==e.count)throw new i.Z(`Configuration value for ${r} must provide a count option`)}}}):Object.defineProperty(t,r,{get(){return!!((this._parameterBits[s]&c)>>l)},set(e){if(this[r]!==e&&(this._key=null,this._parameterBits[s]=this._parameterBits[s]&~c|+e<<l&c,"boolean"!=typeof e))throw new i.Z(`Configuration value for ${r} must be boolean, got ${typeof e}`)}})}}},45268:(e,t,r)=>{r.d(t,{B:()=>n});var i=r(93169);function n(){return!!(0,i.Z)("enable-feature:objectAndLayerId-rendering")}},41134:(e,t,r)=>{r.d(t,{C:()=>n});var i=r(18722);function n(e){if(e.length<i.c8)return Array.from(e);if((0,i.kJ)(e))return Float64Array.from(e);if(!("BYTES_PER_ELEMENT"in e))return Array.from(e);switch(e.BYTES_PER_ELEMENT){case 1:return Uint8Array.from(e);case 2:return(0,i.Uc)(e)?Uint16Array.from(e):Int16Array.from(e);case 4:return Float32Array.from(e);default:return Float64Array.from(e)}}},47180:(e,t,r)=>{r.d(t,{j:()=>s});var i=r(27546),n=r(32035),o=r(12400),a=r(97731);class s{constructor(e,t,r){this.primitiveIndices=e,this._numIndexPerPrimitive=t,this.position=r,this._children=void 0,(0,a.hu)(e.length>=1),(0,a.hu)(3===r.size||4===r.size);const{data:i,size:s,indices:c}=r;(0,a.hu)(c.length%this._numIndexPerPrimitive==0),(0,a.hu)(c.length>=e.length*this._numIndexPerPrimitive);const d=e.length;let u=s*c[this._numIndexPerPrimitive*e[0]];l.clear(),l.push(u);const h=(0,o.al)(i[u],i[u+1],i[u+2]),f=(0,o.d9)(h);for(let n=0;n<d;++n){const t=this._numIndexPerPrimitive*e[n];for(let e=0;e<this._numIndexPerPrimitive;++e){u=s*c[t+e],l.push(u);let r=i[u];h[0]=Math.min(r,h[0]),f[0]=Math.max(r,f[0]),r=i[u+1],h[1]=Math.min(r,h[1]),f[1]=Math.max(r,f[1]),r=i[u+2],h[2]=Math.min(r,h[2]),f[2]=Math.max(r,f[2])}}this.bbMin=h,this.bbMax=f;const m=(0,n.m)((0,o.Ue)(),this.bbMin,this.bbMax,.5);this.radius=.5*Math.max(Math.max(f[0]-h[0],f[1]-h[1]),f[2]-h[2]);let p=this.radius*this.radius;for(let n=0;n<l.length;++n){u=l.at(n);const e=i[u]-m[0],t=i[u+1]-m[1],r=i[u+2]-m[2],o=e*e+t*t+r*r;if(o<=p)continue;const a=Math.sqrt(o),s=.5*(a-this.radius);this.radius=this.radius+s,p=this.radius*this.radius;const c=s/a;m[0]+=e*c,m[1]+=t*c,m[2]+=r*c}this.center=m,l.clear()}getChildren(){if(this._children||(0,n.s)(this.bbMin,this.bbMax)<=1)return this._children;const e=(0,n.m)((0,o.Ue)(),this.bbMin,this.bbMax,.5),t=this.primitiveIndices.length,r=new Uint8Array(t),i=new Array(8);for(let n=0;n<8;++n)i[n]=0;const{data:a,size:l,indices:c}=this.position;for(let n=0;n<t;++n){let t=0;const o=this._numIndexPerPrimitive*this.primitiveIndices[n];let s=l*c[o],d=a[s],u=a[s+1],h=a[s+2];for(let e=1;e<this._numIndexPerPrimitive;++e){s=l*c[o+e];const t=a[s],r=a[s+1],i=a[s+2];t<d&&(d=t),r<u&&(u=r),i<h&&(h=i)}d<e[0]&&(t|=1),u<e[1]&&(t|=2),h<e[2]&&(t|=4),r[n]=t,++i[t]}let d=0;for(let n=0;n<8;++n)i[n]>0&&++d;if(d<2)return;const u=new Array(8);for(let n=0;n<8;++n)u[n]=i[n]>0?new Uint32Array(i[n]):void 0;for(let n=0;n<8;++n)i[n]=0;for(let n=0;n<t;++n){const e=r[n];u[e][i[e]++]=this.primitiveIndices[n]}this._children=new Array;for(let n=0;n<8;++n)void 0!==u[n]&&this._children.push(new s(u[n],this._numIndexPerPrimitive,this.position));return this._children}static prune(){l.prune()}}const l=new i.Z({deallocator:null})},1395:(e,t,r)=>{r.d(t,{c:()=>n});var i=r(95439);class n{constructor(){this.id=(0,i.D)()}}},79100:(e,t,r)=>{var i;r.d(t,{U:()=>i}),function(e){e[e.Layer=0]="Layer",e[e.Object=1]="Object",e[e.Mesh=2]="Mesh",e[e.Line=3]="Line",e[e.Point=4]="Point",e[e.Material=5]="Material",e[e.Texture=6]="Texture",e[e.COUNT=7]="COUNT"}(i||(i={}))},7566:(e,t,r)=>{r.d(t,{i:()=>n});var i=r(4760);const n=new Map([[i.T.POSITION,0],[i.T.NORMAL,1],[i.T.NORMALCOMPRESSED,1],[i.T.UV0,2],[i.T.COLOR,3],[i.T.COLORFEATUREATTRIBUTE,3],[i.T.SIZE,4],[i.T.TANGENT,4],[i.T.CENTEROFFSETANDDISTANCE,5],[i.T.SYMBOLCOLOR,5],[i.T.FEATUREATTRIBUTE,6],[i.T.INSTANCEFEATUREATTRIBUTE,6],[i.T.INSTANCECOLOR,7],[i.T.OBJECTANDLAYERIDCOLOR,7],[i.T.INSTANCEOBJECTANDLAYERIDCOLOR,7],[i.T.ROTATION,8],[i.T.INSTANCEMODEL,8],[i.T.INSTANCEMODELNORMAL,12],[i.T.INSTANCEMODELORIGINHI,11],[i.T.INSTANCEMODELORIGINLO,15]])},25278:(e,t,r)=>{r.d(t,{Fj:()=>l,EY:()=>d});var i=r(92026),n=r(66978),o=r(98634),a=r(68401);class s{constructor(e){this._material=e.material,this._techniques=e.techniques,this._output=e.output}dispose(){}get _stippleTextures(){return this._techniques.context.stippleTextures}get _markerTextures(){return this._techniques.context.markerTextures}acquireTechnique(e,t){return this._techniques.acquire(e,this._material.getConfiguration(this._output,t))}ensureResources(e){return a.Rw.LOADED}}class l extends s{constructor(e){super(e),this._numLoading=0,this._disposed=!1,this._textures=e.textures,this._textureId=e.textureId,this._acquire(e.textureId,(e=>this._texture=e)),this._acquire(e.normalTextureId,(e=>this._textureNormal=e)),this._acquire(e.emissiveTextureId,(e=>this._textureEmissive=e)),this._acquire(e.occlusionTextureId,(e=>this._textureOcclusion=e)),this._acquire(e.metallicRoughnessTextureId,(e=>this._textureMetallicRoughness=e))}dispose(){super.dispose(),this._texture=(0,i.RY)(this._texture),this._textureNormal=(0,i.RY)(this._textureNormal),this._textureEmissive=(0,i.RY)(this._textureEmissive),this._textureOcclusion=(0,i.RY)(this._textureOcclusion),this._textureMetallicRoughness=(0,i.RY)(this._textureMetallicRoughness),this._disposed=!0}ensureResources(e){return 0===this._numLoading?a.Rw.LOADED:a.Rw.LOADING}get textureBindParameters(){return new d(null!=this._texture?this._texture.glTexture:null,null!=this._textureNormal?this._textureNormal.glTexture:null,null!=this._textureEmissive?this._textureEmissive.glTexture:null,null!=this._textureOcclusion?this._textureOcclusion.glTexture:null,null!=this._textureMetallicRoughness?this._textureMetallicRoughness.glTexture:null)}updateTexture(e){null!=this._texture&&e===this._texture.id||(this._texture=(0,i.RY)(this._texture),this._textureId=e,this._acquire(this._textureId,(e=>this._texture=e)))}_acquire(e,t){if(null==e)return void t(null);const r=this._textures.acquire(e);if((0,n.y8)(r))return++this._numLoading,void r.then((e=>{if(this._disposed)return(0,i.RY)(e),void t(null);t(e)})).finally((()=>--this._numLoading));t(r)}}class c extends o.K{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;super(),this.textureEmissive=e}}class d extends c{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,n=arguments.length>5?arguments[5]:void 0,o=arguments.length>6?arguments[6]:void 0;super(arguments.length>2&&void 0!==arguments[2]?arguments[2]:null),this.texture=e,this.textureNormal=t,this.textureOcclusion=r,this.textureMetallicRoughness=i,this.scale=n,this.normalTextureTransformMatrix=o}}},71228:(e,t,r)=>{r.d(t,{Z:()=>S});var i=r(7025),n=r(32035),o=r(39406),a=r(41134),s=r(47180),l=r(1395),c=r(79100),d=r(12400),u=r(74702);const h=(0,d.Ue)(),f=(0,d.Ue)(),m=(0,d.Ue)(),p=(0,d.Ue)();var v=r(95439),g=r(68401);class _{constructor(){this.uid=(0,v.D)()}}class T extends _{constructor(e){super(),this.highlightGroupName=e,this.channel=g.V_.Highlight}}var x=r(97731),b=r(4760);class S extends l.c{constructor(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:c.U.Mesh,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:-1;super(),this.material=e,this.mapPositions=r,this.type=i,this.objectAndLayerIdColor=n,this.edgeIndicesLength=a,this.highlights=new Set,this._highlightGroupCounts=new Map,this.visible=!0,this._attributes=new Map,this._boundingInfo=null;for(const[s,l]of t)this._attributes.set(s,{...l,indices:(0,o.mi)(l.indices)}),s===b.T.POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._attributes.get(s).indices.length:this.edgeIndicesLength)}instantiate(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=new S(e.material||this.material,[],this.mapPositions,this.type,this.objectAndLayerIdColor,this.edgeIndicesLength);return this._attributes.forEach(((e,r)=>{e.exclusive=!1,t._attributes.set(r,e)})),t._boundingInfo=this._boundingInfo,t.transformation=e.transformation||this.transformation,t}get attributes(){return this._attributes}getMutableAttribute(e){let t=this._attributes.get(e);return t&&!t.exclusive&&(t={...t,exclusive:!0,data:(0,a.C)(t.data)},this._attributes.set(e,t)),t}setAttributeData(e,t){const r=this._attributes.get(e);r&&this._attributes.set(e,{...r,exclusive:!0,data:t})}get indexCount(){const e=this._attributes.values().next().value.indices;return e?.length??0}get faceCount(){return this.indexCount/3}get boundingInfo(){return null==this._boundingInfo&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(e){return!!(this.type===c.U.Mesh?this._computeAttachmentOriginTriangles(e):this.type===c.U.Line?this._computeAttachmentOriginLines(e):this._computeAttachmentOriginPoints(e))&&(null!=this._transformation&&(0,n.t)(e,e,this._transformation),!0)}_computeAttachmentOriginTriangles(e){return function(e,t){if(!e)return!1;const{size:r,data:i,indices:o}=e;(0,n.i)(t,0,0,0),(0,n.i)(p,0,0,0);let a=0,s=0;for(let l=0;l<o.length-2;l+=3){const e=o[l]*r,c=o[l+1]*r,d=o[l+2]*r;(0,n.i)(h,i[e],i[e+1],i[e+2]),(0,n.i)(f,i[c],i[c+1],i[c+2]),(0,n.i)(m,i[d],i[d+1],i[d+2]);const v=(0,u.bE)(h,f,m);v?((0,n.g)(h,h,f),(0,n.g)(h,h,m),(0,n.h)(h,h,1/3*v),(0,n.g)(t,t,h),a+=v):((0,n.g)(p,p,h),(0,n.g)(p,p,f),(0,n.g)(p,p,m),s+=3)}return(0!==s||0!==a)&&(0!==a?((0,n.h)(t,t,1/a),!0):0!==s&&((0,n.h)(t,p,1/s),!0))}(this.attributes.get(b.T.POSITION),e)}_computeAttachmentOriginLines(e){const t=this.attributes.get(b.T.POSITION);return function(e,t,r){if(!e)return!1;(0,n.i)(r,0,0,0),(0,n.i)(p,0,0,0);let i=0,o=0;const{size:a,data:s,indices:l}=e,c=l.length-1,d=c+(t?2:0);for(let u=0;u<d;u+=2){const e=u<c?u+1:0,t=l[u<c?u:c]*a,d=l[e]*a;h[0]=s[t],h[1]=s[t+1],h[2]=s[t+2],f[0]=s[d],f[1]=s[d+1],f[2]=s[d+2],(0,n.h)(h,(0,n.g)(h,h,f),.5);const m=(0,n.F)(h,f);m>0?((0,n.g)(r,r,(0,n.h)(h,h,m)),i+=m):0===i&&((0,n.g)(p,p,h),o++)}return 0!==i?((0,n.h)(r,r,1/i),!0):0!==o&&((0,n.h)(r,p,1/o),!0)}(t,function(e,t){return!(!("isClosed"in e)||!e.isClosed)&&t.indices.length>2}(this.material.parameters,t),e)}_computeAttachmentOriginPoints(e){return function(e,t){if(!e)return!1;const{size:r,data:i,indices:o}=e;(0,n.i)(t,0,0,0);let a=-1,s=0;for(let n=0;n<o.length;n++){const e=o[n]*r;a!==e&&(t[0]+=i[e],t[1]+=i[e+1],t[2]+=i[e+2],s++),a=e}return s>1&&(0,n.h)(t,t,1/s),s>0}(this.attributes.get(b.T.POSITION),e)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const e=this.attributes.get(b.T.POSITION);if(!e||0===e.indices.length)return null;const t=this.type===c.U.Mesh?3:1;(0,x.hu)(e.indices.length%t==0,"Indexing error: "+e.indices.length+" not divisible by "+t);const r=(0,o.KF)(e.indices.length/t);return new s.j(r,t,e)}get transformation(){return this._transformation??i.Wd}set transformation(e){this._transformation=e&&e!==i.Wd?(0,i.d9)(e):null}get highlightGroups(){return this._highlightGroupCounts}get hasHighlights(){return this._highlightGroupCounts.size>0}foreachHighlightGroup(e){this._highlightGroupCounts.forEach(((t,r)=>e(r)))}allocateIdAndHighlight(e){const t=new T(e);return this.addHighlight(t)}addHighlight(e){this.highlights.add(e);const{highlightGroupName:t}=e,r=(this._highlightGroupCounts.get(t)??0)+1;return this._highlightGroupCounts.set(t,r),e}removeHighlight(e){if(this.highlights.delete(e)){const{highlightGroupName:t}=e,r=this._highlightGroupCounts.get(t)??0;r<=1?this._highlightGroupCounts.delete(t):this._highlightGroupCounts.set(t,r-1)}}}},56529:(e,t,r)=>{r.d(t,{F5:()=>c,yD:()=>i});var i,n=r(12400),o=(r(98634),r(1395)),a=r(79100),s=r(7566),l=r(22909);class c extends o.c{constructor(e,t){super(),this.type=a.U.Material,this.supportsEdges=!1,this._renderPriority=0,this.vertexAttributeLocations=s.i,this._pp0=(0,n.al)(0,0,1),this._pp1=(0,n.al)(0,0,0),this._parameters=new t,(0,l.LO)(this._parameters,e),this.validateParameters(this._parameters)}get parameters(){return this._parameters}update(e){return!1}setParameters(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];(0,l.LO)(this._parameters,e)&&(this.validateParameters(this._parameters),t&&this._parametersChanged())}validateParameters(e){}shouldRender(e){return this.visible&&this.isVisibleForOutput(e.output)&&(!this.parameters.isDecoration||e.bind.decorations)&&!!(this.parameters.renderOccluded&e.renderOccludedMask)}isVisibleForOutput(e){return!0}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this._parametersChanged())}_parametersChanged(){this.repository?.materialChanged(this)}queryRenderOccludedState(e){return this.visible&&this.parameters.renderOccluded===e}get hasEmissions(){return!1}intersectDraped(e,t,r,i,n,o){return this._pp0[0]=this._pp1[0]=i[0],this._pp0[1]=this._pp1[1]=i[1],this.intersect(e,t,r,this._pp0,this._pp1,n)}}!function(e){e[e.None=0]="None",e[e.Occlude=1]="Occlude",e[e.Transparent=2]="Transparent",e[e.OccludeAndTransparent=4]="OccludeAndTransparent",e[e.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",e[e.Opaque=16]="Opaque"}(i||(i={}))},14124:(e,t,r)=>{var i;r.d(t,{M:()=>i}),function(e){e[e.NONE=0]="NONE",e[e.ColorAlpha=1]="ColorAlpha",e[e.FrontFace=2]="FrontFace",e[e.COUNT=3]="COUNT"}(i||(i={}))},78041:(e,t,r)=>{r.d(t,{Bh:()=>m,W$:()=>d,Wo:()=>c,j7:()=>l,je:()=>f,u_:()=>p,ve:()=>u});var i=r(37081),n=r(14124),o=r(8548),a=r(36207);const s=(0,a.wK)(o.zi.ONE,o.zi.ZERO,o.zi.ONE,o.zi.ONE_MINUS_SRC_ALPHA);function l(e){return e===n.M.FrontFace?null:s}function c(e){switch(e){case n.M.NONE:return a.Dh;case n.M.ColorAlpha:return s;case n.M.FrontFace:case n.M.COUNT:return null}}function d(e){if(e.draped)return null;switch(e.oitPass){case n.M.NONE:case n.M.FrontFace:return e.writeDepth?a.ck:null;case n.M.ColorAlpha:case n.M.COUNT:return null}}const u=5e5,h={factor:-1,units:-2};function f(e){return e?h:null}function m(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o.wb.LESS;return e===n.M.NONE||e===n.M.FrontFace?t:o.wb.LEQUAL}function p(e,t){const r=(0,i.qC)(t);return e===n.M.ColorAlpha?r?{buffers:[o.VY.COLOR_ATTACHMENT0,o.VY.COLOR_ATTACHMENT1,o.VY.COLOR_ATTACHMENT2]}:{buffers:[o.VY.COLOR_ATTACHMENT0,o.VY.COLOR_ATTACHMENT1]}:r?{buffers:[o.VY.COLOR_ATTACHMENT0,o.VY.COLOR_ATTACHMENT1]}:null}},93822:(e,t,r)=>{var i;r.d(t,{r:()=>i}),function(e){e[e.INTEGRATED_MESH=0]="INTEGRATED_MESH",e[e.OPAQUE_TERRAIN=1]="OPAQUE_TERRAIN",e[e.OPAQUE_MATERIAL=2]="OPAQUE_MATERIAL",e[e.OPAQUE_MATERIAL_WITHOUT_NORMALS=3]="OPAQUE_MATERIAL_WITHOUT_NORMALS",e[e.TRANSPARENT_MATERIAL=4]="TRANSPARENT_MATERIAL",e[e.TRANSPARENT_MATERIAL_WITHOUT_NORMALS=5]="TRANSPARENT_MATERIAL_WITHOUT_NORMALS",e[e.TRANSPARENT_TERRAIN=6]="TRANSPARENT_TERRAIN",e[e.TRANSPARENT_MATERIAL_WITHOUT_DEPTH=7]="TRANSPARENT_MATERIAL_WITHOUT_DEPTH",e[e.OCCLUDED_TERRAIN=8]="OCCLUDED_TERRAIN",e[e.OCCLUDER_MATERIAL=9]="OCCLUDER_MATERIAL",e[e.TRANSPARENT_OCCLUDER_MATERIAL=10]="TRANSPARENT_OCCLUDER_MATERIAL",e[e.OCCLUSION_PIXELS=11]="OCCLUSION_PIXELS",e[e.HUD_MATERIAL=12]="HUD_MATERIAL",e[e.LABEL_MATERIAL=13]="LABEL_MATERIAL",e[e.LINE_CALLOUTS=14]="LINE_CALLOUTS",e[e.LINE_CALLOUTS_HUD_DEPTH=15]="LINE_CALLOUTS_HUD_DEPTH",e[e.DRAPED_MATERIAL=16]="DRAPED_MATERIAL",e[e.DRAPED_WATER=17]="DRAPED_WATER",e[e.VOXEL=18]="VOXEL",e[e.MAX_SLOTS=19]="MAX_SLOTS"}(i||(i={}))},33586:(e,t,r)=>{r.d(t,{x:()=>Z});r(93169);var i=r(10064),n=r(91505),o=r(92026),a=r(66978),s=r(18722),l=r(35995),c=r(38330),d=r(5640),u=r(68401),h=r(65905);let f;var m;!function(e){e[e.ETC1_RGB=0]="ETC1_RGB",e[e.ETC2_RGBA=1]="ETC2_RGBA",e[e.BC1_RGB=2]="BC1_RGB",e[e.BC3_RGBA=3]="BC3_RGBA",e[e.BC4_R=4]="BC4_R",e[e.BC5_RG=5]="BC5_RG",e[e.BC7_M6_RGB=6]="BC7_M6_RGB",e[e.BC7_M5_RGBA=7]="BC7_M5_RGBA",e[e.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",e[e.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",e[e.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",e[e.ATC_RGB=11]="ATC_RGB",e[e.ATC_RGBA=12]="ATC_RGBA",e[e.FXT1_RGB=17]="FXT1_RGB",e[e.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",e[e.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",e[e.ETC2_EAC_R11=20]="ETC2_EAC_R11",e[e.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",e[e.RGBA32=13]="RGBA32",e[e.RGB565=14]="RGB565",e[e.BGR565=15]="BGR565",e[e.RGBA4444=16]="RGBA4444"}(m||(m={}));var p=r(8548),v=r(51378),g=r(3384);let _=null,T=null;async function x(){return null==T&&(f??=(async()=>{const e=await r.e(1562).then(r.bind(r,61562)),t=await e.default({locateFile:e=>(0,h.V)(`esri/libs/basisu/${e}`)});return t.initializeBasis(),t})(),T=f,_=await T),T}function b(e,t,r,i,n){const o=(0,g.RG)(t?p.q_.COMPRESSED_RGBA8_ETC2_EAC:p.q_.COMPRESSED_RGB8_ETC2),a=n&&e>1?(4**e-1)/(3*4**(e-1)):1;return Math.ceil(r*i*o*a)}function S(e){return e.getNumImages()>=1&&!e.isUASTC()}function A(e){return e.getFaces()>=1&&e.isETC1S()}function E(e,t,r,i,n,o,a,s){const{compressedTextureETC:l,compressedTextureS3TC:c}=e.capabilities,[d,u]=l?i?[m.ETC2_RGBA,p.q_.COMPRESSED_RGBA8_ETC2_EAC]:[m.ETC1_RGB,p.q_.COMPRESSED_RGB8_ETC2]:c?i?[m.BC3_RGBA,p.q_.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[m.BC1_RGB,p.q_.COMPRESSED_RGB_S3TC_DXT1_EXT]:[m.RGBA32,p.VI.RGBA],h=t.hasMipmap?r:Math.min(1,r),f=[];for(let m=0;m<h;m++)f.push(new Uint8Array(a(m,d))),s(m,d,f[m]);return t.internalFormat=u,t.hasMipmap=f.length>1,t.samplingMode=t.hasMipmap?p.cw.LINEAR_MIPMAP_LINEAR:p.cw.LINEAR,t.width=n,t.height=o,new v.x(e,t,{type:"compressed",levels:f})}var w=r(1395),C=r(79100),M=r(32718);const y=()=>M.Z.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil"),O=542327876,I=131072,R=4;function N(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}const P=N("DXT1"),L=N("DXT3"),H=N("DXT5"),D=31,F=0,U=1,B=2,z=3,G=4,V=7,W=20,j=21;function k(e,t){const r=new Int32Array(e.buffer,e.byteOffset,D);if(r[F]!==O)return y().error("Invalid magic number in DDS header"),null;if(!(r[W]&R))return y().error("Unsupported format, must contain a FourCC code"),null;const i=r[j];let n,o;switch(i){case P:n=8,o=p.q_.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case L:n=16,o=p.q_.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case H:n=16,o=p.q_.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return y().error("Unsupported FourCC code:",function(e){return String.fromCharCode(255&e,e>>8&255,e>>16&255,e>>24&255)}(i)),null}let a=1,s=r[G],l=r[z];(3&s||3&l)&&(y().warn("Rounding up compressed texture size to nearest multiple of 4."),s=s+3&-4,l=l+3&-4);const c=s,d=l;let u,h;r[B]&I&&!1!==t&&(a=Math.max(1,r[V]));let f=e.byteOffset+r[U]+4;const m=[];for(let p=0;p<a;++p)h=(s+3>>2)*(l+3>>2)*n,u=new Uint8Array(e.buffer,f,h),m.push(u),f+=h,s=Math.max(1,s>>1),l=Math.max(1,l>>1);return{textureData:{type:"compressed",levels:m},internalFormat:o,width:c,height:d}}function q(e,t,r){if(e instanceof ImageData)return q($(e),t,r);const i=document.createElement("canvas");return i.width=t,i.height=r,i.getContext("2d").drawImage(e,0,0,i.width,i.height),i}function $(e){const t=document.createElement("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");if(null==r)throw new i.Z("Failed to create 2d context from HTMLCanvasElement");return r.putImageData(e,0,0),t}var Y,J=r(97731),X=r(52311);class Z extends w.c{get parameters(){return this._parameters}constructor(e,t){super(),this._data=e,this.type=C.U.Texture,this._glTexture=null,this._loadingPromise=null,this._loadingController=null,this.events=new n.Z,this._parameters={...Q,...t},this._startPreload(e)}dispose(){this.unload(),this._data=this.frameUpdate=void 0}_startPreload(e){null!=e&&(e instanceof HTMLVideoElement?(this.frameUpdate=t=>this._frameUpdate(e,t),this._startPreloadVideoElement(e)):e instanceof HTMLImageElement&&this._startPreloadImageElement(e))}_startPreloadVideoElement(e){if(!((0,l.jc)(e.src)||"auto"===e.preload&&e.crossOrigin)){e.preload="auto",e.crossOrigin="anonymous";const t=!e.paused;if(e.src=e.src,t&&e.autoplay){const t=()=>{e.removeEventListener("canplay",t),e.play()};e.addEventListener("canplay",t)}}}_startPreloadImageElement(e){(0,l.HK)(e.src)||(0,l.jc)(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}_createDescriptor(e){const t=new X.X;return t.wrapMode=this._parameters.wrap??p.e8.REPEAT,t.flipped=!this._parameters.noUnpackFlip,t.samplingMode=this._parameters.mipmap?p.cw.LINEAR_MIPMAP_LINEAR:p.cw.LINEAR,t.hasMipmap=!!this._parameters.mipmap,t.preMultiplyAlpha=!!this._parameters.preMultiplyAlpha,t.maxAnisotropy=this._parameters.maxAnisotropy??(this._parameters.mipmap?e.parameters.maxMaxAnisotropy:1),t}get glTexture(){return this._glTexture}get memoryEstimate(){return this._glTexture?.usedMemory||function(e,t){if(null==e)return 0;if((0,s.eP)(e)||(0,s.lq)(e))return t.encoding===u.Ti.KTX2_ENCODING?function(e,t){if(null==_)return e.byteLength;const r=new _.KTX2File(new Uint8Array(e)),i=A(r)?b(r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),t):0;return r.close(),r.delete(),i}(e,!!t.mipmap):t.encoding===u.Ti.BASIS_ENCODING?function(e,t){if(null==_)return e.byteLength;const r=new _.BasisFile(new Uint8Array(e)),i=S(r)?b(r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),t):0;return r.close(),r.delete(),i}(e,!!t.mipmap):e.byteLength;const{width:r,height:i}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?K(e):t;return(t.mipmap?4/3:1)*r*i*(t.components||4)||0}(this._data,this._parameters)}load(e){if(this._glTexture)return this._glTexture;if(this._loadingPromise)return this._loadingPromise;const t=this._data;return null==t?(this._glTexture=new v.x(e,this._createDescriptor(e),null),this._glTexture):(this._parameters.reloadable||(this._data=void 0),"string"==typeof t?this._loadFromURL(e,t):t instanceof Image?this._loadFromImageElement(e,t):t instanceof HTMLVideoElement?this._loadFromVideoElement(e,t):t instanceof ImageData||t instanceof HTMLCanvasElement?this._loadFromImage(e,t):(0,s.lq)(t)&&this._parameters.encoding===u.Ti.DDS_ENCODING?this._loadFromDDSData(e,t):(0,s.eP)(t)&&this._parameters.encoding===u.Ti.DDS_ENCODING?this._loadFromDDSData(e,new Uint8Array(t)):((0,s.eP)(t)||(0,s.lq)(t))&&this._parameters.encoding===u.Ti.KTX2_ENCODING?this._loadFromKTX2(e,t):((0,s.eP)(t)||(0,s.lq)(t))&&this._parameters.encoding===u.Ti.BASIS_ENCODING?this._loadFromBasis(e,t):(0,s.lq)(t)?this._loadFromPixelData(e,t):(0,s.eP)(t)?this._loadFromPixelData(e,new Uint8Array(t)):null)}_frameUpdate(e,t){return null==this._glTexture||e.readyState<Y.HAVE_CURRENT_DATA||t===e.currentTime?t:(this._glTexture.setData(e),this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this._parameters.updateCallback&&this._parameters.updateCallback(),e.currentTime)}_loadFromDDSData(e,t){return this._glTexture=function(e,t,r){const i=k(r,t.hasMipmap??!1);if(null==i)throw new Error("DDS texture data is null");const{textureData:n,internalFormat:o,width:a,height:s}=i;return t.samplingMode=n.levels.length>1?p.cw.LINEAR_MIPMAP_LINEAR:p.cw.LINEAR,t.hasMipmap=n.levels.length>1,t.internalFormat=o,t.width=a,t.height=s,new v.x(e,t,n)}(e,this._createDescriptor(e),t),this._glTexture}_loadFromKTX2(e,t){return this._loadAsync((()=>async function(e,t,r){null==_&&(_=await x());const i=new _.KTX2File(new Uint8Array(r));if(!A(i))return null;i.startTranscoding();const n=E(e,t,i.getLevels(),i.getHasAlpha(),i.getWidth(),i.getHeight(),((e,t)=>i.getImageTranscodedSizeInBytes(e,0,0,t)),((e,t,r)=>i.transcodeImage(r,e,0,0,t,0,-1,-1)));return i.close(),i.delete(),n}(e,this._createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))}_loadFromBasis(e,t){return this._loadAsync((()=>async function(e,t,r){null==_&&(_=await x());const i=new _.BasisFile(new Uint8Array(r));if(!S(i))return null;i.startTranscoding();const n=E(e,t,i.getNumLevels(0),i.getHasAlpha(),i.getImageWidth(0,0),i.getImageHeight(0,0),((e,t)=>i.getImageTranscodedSizeInBytes(0,e,t)),((e,t,r)=>i.transcodeImage(r,0,e,t,0,0)));return i.close(),i.delete(),n}(e,this._createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))}_loadFromPixelData(e,t){(0,J.hu)(this._parameters.width>0&&this._parameters.height>0);const r=this._createDescriptor(e);return r.pixelFormat=1===this._parameters.components?p.VI.LUMINANCE:3===this._parameters.components?p.VI.RGB:p.VI.RGBA,r.width=this._parameters.width??0,r.height=this._parameters.height??0,this._glTexture=new v.x(e,r,t),this._glTexture}_loadFromURL(e,t){return this._loadAsync((async r=>{const i=await(0,c.t)(t,{signal:r});return(0,a.k_)(r),this._loadFromImage(e,i)}))}_loadFromImageElement(e,t){return t.complete?this._loadFromImage(e,t):this._loadAsync((async r=>{const i=await(0,d.fY)(t,t.src,!1,r);return(0,a.k_)(r),this._loadFromImage(e,i)}))}_loadFromVideoElement(e,t){return t.readyState>=Y.HAVE_CURRENT_DATA?this._loadFromImage(e,t):this._loadFromVideoElementAsync(e,t)}_loadFromVideoElementAsync(e,t){return this._loadAsync((r=>new Promise(((n,s)=>{const l=()=>{t.removeEventListener("loadeddata",c),t.removeEventListener("error",d),(0,o.hw)(u)},c=()=>{t.readyState>=Y.HAVE_CURRENT_DATA&&(l(),n(this._loadFromImage(e,t)))},d=e=>{l(),s(e||new i.Z("Failed to load video"))};t.addEventListener("loadeddata",c),t.addEventListener("error",d);const u=(0,a.fu)(r,(()=>d((0,a.zE)())))}))))}_loadFromImage(e,t){let r=t;if(!(r instanceof HTMLVideoElement)){const{maxTextureSize:t}=e.parameters;r=this._parameters.downsampleUncompressed?function(e,t){let r=e.width*e.height;if(r<4096)return e instanceof ImageData?$(e):e;let i=e.width,n=e.height;do{i=Math.ceil(i/2),n=Math.ceil(n/2),r=i*n}while(r>1048576||null!=t&&(i>t||n>t));return q(e,i,n)}(r,t):function(e,t){const r=Math.max(e.width,e.height);if(r<=t)return e;const i=t/r;return q(e,Math.round(e.width*i),Math.round(e.height*i))}(r,t)}const i=K(r);this._parameters.width=i.width,this._parameters.height=i.height;const n=this._createDescriptor(e);return n.pixelFormat=3===this._parameters.components?p.VI.RGB:p.VI.RGBA,n.width=i.width,n.height=i.height,this._glTexture=new v.x(e,n,r),this._glTexture}_loadAsync(e){const t=new AbortController;this._loadingController=t;const r=e(t.signal);this._loadingPromise=r;const i=()=>{this._loadingController===t&&(this._loadingController=null),this._loadingPromise===r&&(this._loadingPromise=null)};return r.then(i,i),r}unload(){if(this._glTexture=(0,o.M2)(this._glTexture),null!=this._loadingController){const e=this._loadingController;this._loadingController=null,this._loadingPromise=null,e.abort()}this.events.emit("unloaded")}}function K(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}!function(e){e[e.HAVE_NOTHING=0]="HAVE_NOTHING",e[e.HAVE_METADATA=1]="HAVE_METADATA",e[e.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",e[e.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",e[e.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA"}(Y||(Y={}));const Q={wrap:{s:p.e8.REPEAT,t:p.e8.REPEAT},mipmap:!0,noUnpackFlip:!1,preMultiplyAlpha:!1,downsampleUncompressed:!1}},97731:(e,t,r)=>{r.d(t,{hu:()=>n,yK:()=>o});r(6644),r(19093);(0,r(86361).Ue)();class i{constructor(e){this.message=e}toString(){return`AssertException: ${this.message}`}}function n(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Assertion";if(!e){const e=new Error(t).stack;throw new i(`${t} at ${e}`)}}function o(e,t,r,i){let n,o=(r[0]-e[0])/t[0],a=(i[0]-e[0])/t[0];o>a&&(n=o,o=a,a=n);let s=(r[1]-e[1])/t[1],l=(i[1]-e[1])/t[1];if(s>l&&(n=s,s=l,l=n),o>l||s>a)return!1;s>o&&(o=s),l<a&&(a=l);let c=(r[2]-e[2])/t[2],d=(i[2]-e[2])/t[2];return c>d&&(n=c,c=d,d=n),!(o>d||c>a)&&(d<a&&(a=d),!(a<0))}},68401:(e,t,r)=>{var i,n,o,a,s,l,c,d;r.d(t,{Gv:()=>n,JJ:()=>c,Rw:()=>a,Ti:()=>d,V_:()=>l,Vr:()=>i,Xx:()=>o,hU:()=>s}),function(e){e[e.None=0]="None",e[e.Front=1]="Front",e[e.Back=2]="Back",e[e.COUNT=3]="COUNT"}(i||(i={})),function(e){e[e.Less=0]="Less",e[e.Lequal=1]="Lequal",e[e.COUNT=2]="COUNT"}(n||(n={})),function(e){e[e.BACKGROUND=0]="BACKGROUND",e[e.UPDATE=1]="UPDATE"}(o||(o={})),function(e){e[e.NOT_LOADED=0]="NOT_LOADED",e[e.LOADING=1]="LOADING",e[e.LOADED=2]="LOADED"}(a||(a={})),function(e){e[e.IntegratedMeshMaskExcluded=1]="IntegratedMeshMaskExcluded",e[e.OutlineVisualElementMask=2]="OutlineVisualElementMask"}(s||(s={})),function(e){e[e.Highlight=0]="Highlight",e[e.MaskOccludee=1]="MaskOccludee"}(l||(l={})),function(e){e[e.Blend=0]="Blend",e[e.Opaque=1]="Opaque",e[e.Mask=2]="Mask",e[e.MaskBlend=3]="MaskBlend",e[e.COUNT=4]="COUNT"}(c||(c={})),function(e){e.DDS_ENCODING="image/vnd-ms.dds",e.KTX2_ENCODING="image/ktx2",e.BASIS_ENCODING="image/x.basis"}(d||(d={}))},65216:(e,t,r)=>{r.d(t,{PV:()=>s,TU:()=>l,bA:()=>c,sX:()=>a});var i=r(16889),n=(r(82218),r(83479));r(50951);function o(e,t,r){const i=r.parameters;return d.scale=Math.min(i.divisor/(t-i.offset),1),d.factor=function(e){return Math.abs(e*e*e)}(e),d}function a(e,t){return(0,i.t7)(e*Math.max(t.scale,t.minScaleFactor),e,t.factor)}function s(e,t,r,i){i.scale=function(e,t,r){const i=o(e,t,r);return i.minScaleFactor=0,a(1,i)}(e,t,r),i.factor=0,i.minScaleFactor=r.minScaleFactor}function l(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[0,0];const i=Math.min(Math.max(t.scale,t.minScaleFactor),1);return r[0]=e[0]*i,r[1]=e[1]*i,r}function c(e,t,r,i){return a(e,o(t,r,i))}(0,i.Vl)(10),(0,i.Vl)(12),(0,i.Vl)(70),(0,i.Vl)(40);const d={scale:0,factor:0,minScaleFactor:0};(0,n.c)()},76783:(e,t,r)=>{r.d(t,{W9:()=>c});r(29303),r(21389),r(29134),r(7025);var i=r(32035),n=r(12400),o=r(83479),a=r(50951),s=r(89414);const l=new class{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.offset=e,this.sphere=(0,o.c)(),this.tmpVertex=(0,n.Ue)()}applyToVertex(e,t,r){const n=this.objectTransform.transform,o=(0,i.i)(d,e,t,r),a=(0,i.t)(o,o,n),s=this.offset/(0,i.l)(a);(0,i.b)(a,a,a,s);const l=this.objectTransform.inverse;return(0,i.t)(this.tmpVertex,a,l),this.tmpVertex}applyToMinMax(e,t){const r=this.offset/(0,i.l)(e);(0,i.b)(e,e,e,r);const n=this.offset/(0,i.l)(t);(0,i.b)(t,t,t,n)}applyToAabb(e){const t=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*t,e[1]+=e[1]*t,e[2]+=e[2]*t;const r=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*r,e[4]+=e[4]*r,e[5]+=e[5]*r,e}applyToBoundingSphere(e){const t=(0,i.l)((0,o.a)(e)),r=this.offset/t;return(0,i.b)((0,o.a)(this.sphere),(0,o.a)(e),(0,o.a)(e),r),this.sphere[3]=e[3]+e[3]*this.offset/t,this.sphere}};function c(e){return null!=e?(l.offset=e,l):null}new class{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.componentLocalOriginLength=0,this._totalOffset=0,this._offset=0,this._tmpVertex=(0,n.Ue)(),this._tmpMbs=(0,o.c)(),this._tmpObb=new s.Oo,this._resetOffset(e)}_resetOffset(e){this._offset=e,this._totalOffset=e}set offset(e){this._resetOffset(e)}get offset(){return this._offset}set componentOffset(e){this._totalOffset=this._offset+e}set localOrigin(e){this.componentLocalOriginLength=(0,i.l)(e)}applyToVertex(e,t,r){const n=(0,i.i)(d,e,t,r),o=(0,i.i)(u,e,t,r+this.componentLocalOriginLength),a=this._totalOffset/(0,i.l)(o);return(0,i.b)(this._tmpVertex,n,o,a),this._tmpVertex}applyToAabb(e){const t=this.componentLocalOriginLength,r=e[0],i=e[1],n=e[2]+t,o=e[3],a=e[4],s=e[5]+t,l=Math.abs(r),c=Math.abs(i),d=Math.abs(n),u=Math.abs(o),h=Math.abs(a),f=Math.abs(s),m=.5*(1+Math.sign(r*o))*Math.min(l,u),p=.5*(1+Math.sign(i*a))*Math.min(c,h),v=.5*(1+Math.sign(n*s))*Math.min(d,f),g=Math.max(l,u),_=Math.max(c,h),T=Math.max(d,f),x=Math.sqrt(m*m+p*p+v*v),b=Math.sign(l+r),S=Math.sign(c+i),A=Math.sign(d+n),E=Math.sign(u+o),w=Math.sign(h+a),C=Math.sign(f+s),M=this._totalOffset;if(x<M)return e[0]-=(1-b)*M,e[1]-=(1-S)*M,e[2]-=(1-A)*M,e[3]+=E*M,e[4]+=w*M,e[5]+=C*M,e;const y=M/Math.sqrt(g*g+_*_+T*T),O=M/x,I=O-y,R=-I;return e[0]+=r*(b*R+O),e[1]+=i*(S*R+O),e[2]+=n*(A*R+O),e[3]+=o*(E*I+y),e[4]+=a*(w*I+y),e[5]+=s*(C*I+y),e}applyToMbs(e){const t=(0,i.l)((0,o.a)(e)),r=this._totalOffset/t;return(0,i.b)((0,o.a)(this._tmpMbs),(0,o.a)(e),(0,o.a)(e),r),this._tmpMbs[3]=e[3]+e[3]*this._totalOffset/t,this._tmpMbs}applyToObb(e){return(0,s.gI)(e,this._totalOffset,this._totalOffset,a.JY.Global,this._tmpObb),this._tmpObb}};new class{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.offset=e,this.tmpVertex=(0,n.Ue)()}applyToVertex(e,t,r){const n=(0,i.i)(d,e,t,r),o=(0,i.g)(u,n,this.localOrigin),a=this.offset/(0,i.l)(o);return(0,i.b)(this.tmpVertex,n,o,a),this.tmpVertex}applyToAabb(e){const t=h,r=f,i=m;for(let s=0;s<3;++s)t[s]=e[0+s]+this.localOrigin[s],r[s]=e[3+s]+this.localOrigin[s],i[s]=t[s];const n=this.applyToVertex(t[0],t[1],t[2]);for(let s=0;s<3;++s)e[s]=n[s],e[s+3]=n[s];const o=t=>{const r=this.applyToVertex(t[0],t[1],t[2]);for(let i=0;i<3;++i)e[i]=Math.min(e[i],r[i]),e[i+3]=Math.max(e[i+3],r[i])};for(let s=1;s<8;++s){for(let e=0;e<3;++e)i[e]=s&1<<e?r[e]:t[e];o(i)}let a=0;for(let s=0;s<3;++s)t[s]*r[s]<0&&(a|=1<<s);if(0!==a&&7!==a)for(let s=0;s<8;++s)if(!(a&s)){for(let e=0;e<3;++e)i[e]=a&1<<e?0:s&1<<e?t[e]:r[e];o(i)}for(let s=0;s<3;++s)e[s]-=this.localOrigin[s],e[s+3]-=this.localOrigin[s];return e}};const d=(0,n.Ue)(),u=(0,n.Ue)(),h=(0,n.Ue)(),f=(0,n.Ue)(),m=(0,n.Ue)()},49335:(e,t,r)=>{r.d(t,{Gp:()=>ee});var i=r(32035),n=r(12400),o=r(50951),a=r(55158),s=r(37081),l=r(16010),c=r(80848),d=r(96658),u=r(41481),h=r(26461),f=r(45268),m=r(68401),p=r(25278),v=r(56529),g=r(78041),_=r(41414),T=r(79100),x=r(97731),b=r(4760);class S{constructor(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.isVerticalRay=e,this.normalRequired=t}}const A=(0,_.Ue)();function E(e,t,r,n,o,a){if(!e.visible)return;const s=(0,i.a)(U,n,r),l=(e,t,r)=>{a(e,r,t,!1)},c=new S(!1,t.options.normalRequired);if(e.boundingInfo){(0,x.hu)(e.type===T.U.Mesh);const i=t.tolerance;C(e.boundingInfo,r,s,i,o,c,l)}else{const t=e.attributes.get(b.T.POSITION),i=t.indices;y(r,s,0,i.length/3,i,t.data,t.stride,o,c,l)}}const w=(0,n.Ue)();function C(e,t,r,n,o,a,s){if(null==e)return;const l=function(e,t){return(0,i.i)(t,1/e[0],1/e[1],1/e[2])}(r,w);if((0,_.op)(A,e.bbMin),(0,_.Tn)(A,e.bbMax),null!=o&&o.applyToAabb(A),function(e,t,r,i){return function(e,t,r,i,n){const o=(e[0]-i-t[0])*r[0],a=(e[3]+i-t[0])*r[0];let s=Math.min(o,a),l=Math.max(o,a);const c=(e[1]-i-t[1])*r[1],d=(e[4]+i-t[1])*r[1];if(l=Math.min(l,Math.max(c,d)),l<0)return!1;if(s=Math.max(s,Math.min(c,d)),s>l)return!1;const u=(e[2]-i-t[2])*r[2],h=(e[5]+i-t[2])*r[2];return l=Math.min(l,Math.max(u,h)),!(l<0)&&(s=Math.max(s,Math.min(u,h)),!(s>l)&&s<n)}(e,t,r,i,1/0)}(A,t,l,n)){const{primitiveIndices:i,position:l}=e,c=i?i.length:l.indices.length/3;if(c>D){const i=e.getChildren();if(void 0!==i){for(const e of i)C(e,t,r,n,o,a,s);return}}!function(e,t,r,i,n,o,a,s,l,c,d){const u=e[0],h=e[1],f=e[2],m=t[0],p=t[1],v=t[2],{normalRequired:g}=c;for(let _=r;_<i;++_){const e=s[_],t=3*e,r=a*n[t];let i=o[r],c=o[r+1],T=o[r+2];const x=a*n[t+1];let b=o[x],S=o[x+1],A=o[x+2];const E=a*n[t+2];let w=o[E],C=o[E+1],y=o[E+2];null!=l&&([i,c,T]=l.applyToVertex(i,c,T,_),[b,S,A]=l.applyToVertex(b,S,A,_),[w,C,y]=l.applyToVertex(w,C,y,_));const O=b-i,I=S-c,R=A-T,P=w-i,L=C-c,H=y-T,D=p*H-L*v,U=v*P-H*m,B=m*L-P*p,z=O*D+I*U+R*B;if(Math.abs(z)<=F)continue;const G=u-i,V=h-c,W=f-T,j=G*D+V*U+W*B;if(z>0){if(j<0||j>z)continue}else if(j>0||j<z)continue;const k=V*R-I*W,q=W*O-R*G,$=G*I-O*V,Y=m*k+p*q+v*$;if(z>0){if(Y<0||j+Y>z)continue}else if(Y>0||j+Y<z)continue;const J=(P*k+L*q+H*$)/z;J>=0&&d(J,e,g?N(O,I,R,P,L,H,M):null)}}(t,r,0,c,l.indices,l.data,l.stride,i,o,a,s)}}const M=(0,n.Ue)();function y(e,t,r,n,o,a,s,l,c,d){const u=t,h=B,f=Math.abs(u[0]),m=Math.abs(u[1]),p=Math.abs(u[2]),v=f>=m?f>=p?0:2:m>=p?1:2,g=v,_=u[g]<0?2:1,T=(v+_)%3,x=(v+(3-_))%3,b=u[T]/u[g],S=u[x]/u[g],A=1/u[g],E=O,w=I,C=R,{normalRequired:M}=c;for(let y=r;y<n;++y){const t=3*y,r=s*o[t];(0,i.i)(h[0],a[r+0],a[r+1],a[r+2]);const n=s*o[t+1];(0,i.i)(h[1],a[n+0],a[n+1],a[n+2]);const c=s*o[t+2];(0,i.i)(h[2],a[c+0],a[c+1],a[c+2]),l&&((0,i.c)(h[0],l.applyToVertex(h[0][0],h[0][1],h[0][2],y)),(0,i.c)(h[1],l.applyToVertex(h[1][0],h[1][1],h[1][2],y)),(0,i.c)(h[2],l.applyToVertex(h[2][0],h[2][1],h[2][2],y))),(0,i.a)(E,h[0],e),(0,i.a)(w,h[1],e),(0,i.a)(C,h[2],e);const u=E[T]-b*E[g],f=E[x]-S*E[g],m=w[T]-b*w[g],p=w[x]-S*w[g],v=C[T]-b*C[g],_=C[x]-S*C[g],O=v*p-_*m,I=u*_-f*v,R=m*f-p*u;if((O<0||I<0||R<0)&&(O>0||I>0||R>0))continue;const N=O+I+R;if(0===N)continue;const L=O*(A*E[g])+I*(A*w[g])+R*(A*C[g]);if(L*Math.sign(N)<0)continue;const H=L/N;H>=0&&d(H,y,M?P(h):null)}}const O=(0,n.Ue)(),I=(0,n.Ue)(),R=(0,n.Ue)();function N(e,t,r,n,o,a,s){return(0,i.i)(L,e,t,r),(0,i.i)(H,n,o,a),(0,i.e)(s,L,H),(0,i.n)(s,s),s}function P(e){return(0,i.a)(L,e[1],e[0]),(0,i.a)(H,e[2],e[0]),(0,i.e)(M,L,H),(0,i.n)(M,M),M}const L=(0,n.Ue)(),H=(0,n.Ue)();const D=1e3,F=1e-7,U=(0,n.Ue)(),B=[(0,n.Ue)(),(0,n.Ue)(),(0,n.Ue)()];var z=r(93822),G=r(76783),V=r(33236);class W{constructor(e){this.vertexBufferLayout=e}elementCount(e){return e.get(b.T.POSITION).indices.length}write(e,t,r,i,n,o){(0,V.NK)(r,i,this.vertexBufferLayout,e,t,n,o)}}var j=r(22909),k=r(56081),q=r(27366),$=r(60113),Y=r(5775),J=r(12085);class X extends J.W{constructor(e,t){super(),this.spherical=e,this.doublePrecisionRequiresObfuscation=t,this.alphaDiscardMode=m.JJ.Opaque,this.doubleSidedMode=d.q.None,this.pbrMode=u.f7.Disabled,this.cullFace=m.Vr.None,this.normalType=l.r.Attribute,this.customDepthTest=m.Gv.Less,this.emissionSource=c.jo.None,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1,this.occlusionPass=!1,this.hasVvInstancing=!0,this.useCustomDTRExponentForWater=!1,this.useFillLights=!0}get textureCoordinateType(){return this.hasColorTexture||this.hasMetallicRoughnessTexture||this.emissionSource===c.jo.Texture||this.hasOcclusionTexture||this.hasNormalTexture?$.I.Default:$.I.None}get objectAndLayerIdColorInstanced(){return this.instanced}get discardInvisibleFragments(){return this.transparent}}(0,q._)([(0,Y.o)({count:m.JJ.COUNT})],X.prototype,"alphaDiscardMode",void 0),(0,q._)([(0,Y.o)({count:d.q.COUNT})],X.prototype,"doubleSidedMode",void 0),(0,q._)([(0,Y.o)({count:u.f7.COUNT})],X.prototype,"pbrMode",void 0),(0,q._)([(0,Y.o)({count:m.Vr.COUNT})],X.prototype,"cullFace",void 0),(0,q._)([(0,Y.o)({count:l.r.COUNT})],X.prototype,"normalType",void 0),(0,q._)([(0,Y.o)({count:m.Gv.COUNT})],X.prototype,"customDepthTest",void 0),(0,q._)([(0,Y.o)({count:c.jo.COUNT})],X.prototype,"emissionSource",void 0),(0,q._)([(0,Y.o)()],X.prototype,"hasVertexColors",void 0),(0,q._)([(0,Y.o)()],X.prototype,"hasSymbolColors",void 0),(0,q._)([(0,Y.o)()],X.prototype,"hasVerticalOffset",void 0),(0,q._)([(0,Y.o)()],X.prototype,"hasSlicePlane",void 0),(0,q._)([(0,Y.o)()],X.prototype,"hasSliceHighlight",void 0),(0,q._)([(0,Y.o)()],X.prototype,"hasColorTexture",void 0),(0,q._)([(0,Y.o)()],X.prototype,"hasMetallicRoughnessTexture",void 0),(0,q._)([(0,Y.o)()],X.prototype,"hasOcclusionTexture",void 0),(0,q._)([(0,Y.o)()],X.prototype,"hasNormalTexture",void 0),(0,q._)([(0,Y.o)()],X.prototype,"hasScreenSizePerspective",void 0),(0,q._)([(0,Y.o)()],X.prototype,"hasVertexTangents",void 0),(0,q._)([(0,Y.o)()],X.prototype,"hasOccludees",void 0),(0,q._)([(0,Y.o)()],X.prototype,"hasModelTransformation",void 0),(0,q._)([(0,Y.o)()],X.prototype,"offsetBackfaces",void 0),(0,q._)([(0,Y.o)()],X.prototype,"vvSize",void 0),(0,q._)([(0,Y.o)()],X.prototype,"vvColor",void 0),(0,q._)([(0,Y.o)()],X.prototype,"receiveShadows",void 0),(0,q._)([(0,Y.o)()],X.prototype,"receiveAmbientOcclusion",void 0),(0,q._)([(0,Y.o)()],X.prototype,"textureAlphaPremultiplied",void 0),(0,q._)([(0,Y.o)()],X.prototype,"instanced",void 0),(0,q._)([(0,Y.o)()],X.prototype,"instancedColor",void 0),(0,q._)([(0,Y.o)()],X.prototype,"writeDepth",void 0),(0,q._)([(0,Y.o)()],X.prototype,"transparent",void 0),(0,q._)([(0,Y.o)()],X.prototype,"enableOffset",void 0),(0,q._)([(0,Y.o)()],X.prototype,"terrainDepthTest",void 0),(0,q._)([(0,Y.o)()],X.prototype,"cullAboveTerrain",void 0),(0,q._)([(0,Y.o)()],X.prototype,"snowCover",void 0),(0,q._)([(0,Y.o)()],X.prototype,"hasColorTextureTransform",void 0),(0,q._)([(0,Y.o)()],X.prototype,"hasEmissionTextureTransform",void 0),(0,q._)([(0,Y.o)()],X.prototype,"hasNormalTextureTransform",void 0),(0,q._)([(0,Y.o)()],X.prototype,"hasOcclusionTextureTransform",void 0),(0,q._)([(0,Y.o)()],X.prototype,"hasMetallicRoughnessTextureTransform",void 0);var Z=r(82144),K=r(40563);class Q extends k.tT{constructor(e,t,i){super(e,t,i,new Z.J(K.R,(()=>r.e(601).then(r.bind(r,50601))))),this.type="RealisticTreeTechnique"}}class ee extends v.F5{constructor(e,t){super(e,re),this.materialType="default",this.supportsEdges=!0,this.produces=new Map([[z.r.OPAQUE_MATERIAL,e=>((0,s.ED)(e)||(0,s.Kr)(e))&&!this.parameters.transparent],[z.r.TRANSPARENT_MATERIAL,e=>((0,s.ED)(e)||(0,s.Kr)(e))&&this.parameters.transparent&&this.parameters.writeDepth],[z.r.TRANSPARENT_MATERIAL_WITHOUT_DEPTH,e=>((0,s.Jb)(e)||(0,s.Kr)(e))&&this.parameters.transparent&&!this.parameters.writeDepth]]),this._vertexBufferLayout=function(e){const t=(0,a.U$)().vec3f(b.T.POSITION);return e.normalType===l.r.Compressed?t.vec2i16(b.T.NORMALCOMPRESSED,{glNormalized:!0}):t.vec3f(b.T.NORMAL),e.hasVertexTangents&&t.vec4f(b.T.TANGENT),(e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId)&&t.vec2f(b.T.UV0),e.hasVertexColors&&t.vec4u8(b.T.COLOR),e.hasSymbolColors&&t.vec4u8(b.T.SYMBOLCOLOR),(0,f.B)()&&t.vec4u8(b.T.OBJECTANDLAYERIDCOLOR),t}(this.parameters),this._configuration=new X(t.spherical,t.doublePrecisionRequiresObfuscation)}isVisibleForOutput(e){return e!==s.H_.Shadow&&e!==s.H_.ShadowExcludeHighlight&&e!==s.H_.ShadowHighlight||this.parameters.castShadows}get visible(){const e=this.parameters;if(e.layerOpacity<h.e)return!1;const{hasInstancedColor:t,hasVertexColors:r,hasSymbolColors:i,vvColor:n}=e,o=t||n||i,a="replace"===e.colorMixMode,s=e.opacity>=h.e;if(r&&o)return a||s;const l=e.externalColor&&e.externalColor[3]>=h.e;return r?a?l:s:o?a||s:a?l:s}get hasEmissions(){return!!this.parameters.emissiveTextureId||!(0,i.p)(this.parameters.emissiveFactor,n.AG)}getConfiguration(e,t){const r=this.parameters,{treeRendering:i,doubleSided:n,doubleSidedType:o}=r;return this._configuration.output=e,this._configuration.hasNormalTexture=!i&&!!r.normalTextureId,this._configuration.hasColorTexture=!!r.textureId,this._configuration.hasVertexTangents=!i&&r.hasVertexTangents,this._configuration.instanced=r.isInstanced,this._configuration.instancedDoublePrecision=r.instancedDoublePrecision,this._configuration.vvSize=!!r.vvSize,this._configuration.hasVerticalOffset=null!=r.verticalOffset,this._configuration.hasScreenSizePerspective=null!=r.screenSizePerspective,this._configuration.hasSlicePlane=r.hasSlicePlane,this._configuration.hasSliceHighlight=r.hasSliceHighlight,this._configuration.alphaDiscardMode=r.textureAlphaMode,this._configuration.normalType=i?l.r.Attribute:r.normalType,this._configuration.transparent=r.transparent,this._configuration.writeDepth=r.writeDepth,null!=r.customDepthTest&&(this._configuration.customDepthTest=r.customDepthTest),this._configuration.hasOccludees=t.hasOccludees,this._configuration.cullFace=r.hasSlicePlane?m.Vr.None:r.cullFace,this._configuration.terrainDepthTest=t.terrainDepthTest,this._configuration.cullAboveTerrain=t.cullAboveTerrain,this._configuration.hasModelTransformation=!i&&null!=r.modelTransformation,this._configuration.hasVertexColors=r.hasVertexColors,this._configuration.hasSymbolColors=r.hasSymbolColors,this._configuration.doubleSidedMode=i?d.q.WindingOrder:n&&"normal"===o?d.q.View:n&&"winding-order"===o?d.q.WindingOrder:d.q.None,this._configuration.instancedColor=r.hasInstancedColor,this._configuration.receiveShadows=r.receiveShadows&&r.receiveShadows,this._configuration.receiveAmbientOcclusion=r.receiveAmbientOcclusion&&null!=t.ssao,this._configuration.vvColor=!!r.vvColor,this._configuration.textureAlphaPremultiplied=!!r.textureAlphaPremultiplied,this._configuration.pbrMode=r.usePBR?r.isSchematic?u.f7.Schematic:u.f7.Normal:u.f7.Disabled,this._configuration.hasMetallicRoughnessTexture=!i&&!!r.metallicRoughnessTextureId,this._configuration.emissionSource=i?c.jo.None:null!=r.emissiveTextureId?c.jo.Texture:r.usePBR?c.jo.Value:c.jo.None,this._configuration.hasOcclusionTexture=!i&&!!r.occlusionTextureId,this._configuration.offsetBackfaces=!(!r.transparent||!r.offsetTransparentBackfaces),this._configuration.oitPass=t.oitPass,this._configuration.enableOffset=t.camera.relativeElevation<g.ve,this._configuration.snowCover=function(e){return null!=e.weather&&e.weatherVisible&&"snowy"===e.weather.type&&"enabled"===e.weather.snowCover}(t),this._configuration.hasColorTextureTransform=!!r.colorTextureTransformMatrix,this._configuration.hasNormalTextureTransform=!!r.normalTextureTransformMatrix,this._configuration.hasEmissionTextureTransform=!!r.emissiveTextureTransformMatrix,this._configuration.hasOcclusionTextureTransform=!!r.occlusionTextureTransformMatrix,this._configuration.hasMetallicRoughnessTextureTransform=!!r.metallicRoughnessTextureTransformMatrix,this._configuration}intersect(e,t,r,n,a,s){if(null!=this.parameters.verticalOffset){const e=r.camera;(0,i.i)(le,t[12],t[13],t[14]);let s=null;switch(r.viewingMode){case o.JY.Global:s=(0,i.n)(ae,le);break;case o.JY.Local:s=(0,i.c)(ae,oe)}let l=0;const c=(0,i.d)(ce,le,e.eye),d=(0,i.l)(c),u=(0,i.h)(c,c,1/d);let h=null;this.parameters.screenSizePerspective&&(h=(0,i.f)(s,u)),l+=(0,j.Hx)(e,d,this.parameters.verticalOffset,h??0,this.parameters.screenSizePerspective),(0,i.h)(s,s,l),(0,i.q)(se,s,r.transform.inverseRotation),n=(0,i.d)(ie,n,se),a=(0,i.d)(ne,a,se)}E(e,r,n,a,(0,G.W9)(r.verticalOffset),s)}createGLMaterial(e){return new te(e)}createBufferWriter(){return new W(this._vertexBufferLayout)}}class te extends p.Fj{constructor(e){super({...e,...e.material.parameters})}beginSlot(e){this._material.setParameters({receiveShadows:e.shadowMap.enabled});const t=this._material.parameters;this.updateTexture(t.textureId);const r=e.camera.viewInverseTransposeMatrix;return(0,i.i)(t.origin,r[3],r[7],r[11]),this._material.setParameters(this.textureBindParameters),this.acquireTechnique(t.treeRendering?Q:k.tT,e)}}class re extends k.em{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1}}const ie=(0,n.Ue)(),ne=(0,n.Ue)(),oe=(0,n.al)(0,0,1),ae=(0,n.Ue)(),se=(0,n.Ue)(),le=(0,n.Ue)(),ce=(0,n.Ue)()},12085:(e,t,r)=>{r.d(t,{W:()=>c});var i=r(27366),n=r(37081),o=r(5775);class a extends o.m{constructor(){super(...arguments),this.instancedDoublePrecision=!1,this.hasModelTransformation=!1}}(0,i._)([(0,o.o)()],a.prototype,"instancedDoublePrecision",void 0),(0,i._)([(0,o.o)()],a.prototype,"hasModelTransformation",void 0);var s=r(99340),l=r(14124);class c extends a{constructor(){super(...arguments),this.output=n.H_.Color,this.oitPass=l.M.NONE,this.hasSliceHighlight=!0,this.hasSliceInVertexProgram=!1,this.bindType=s.P.Pass,this.writeDepth=!0}}(0,i._)([(0,o.o)({count:n.H_.COUNT})],c.prototype,"output",void 0),(0,i._)([(0,o.o)({count:l.M.COUNT})],c.prototype,"oitPass",void 0)},22909:(e,t,r)=>{r.d(t,{FZ:()=>l,Hx:()=>a,LO:()=>s});var i=r(63780),n=r(16889),o=r(65216);function a(e,t,r,i,a){let s=(r.screenLength||0)*e.pixelRatio;null!=a&&(s=(0,o.bA)(s,i,t,a));const l=s*Math.tan(.5*e.fovY)/(.5*e.fullHeight);return(0,n.uZ)(l*t,r.minWorldLength||0,null!=r.maxWorldLength?r.maxWorldLength:1/0)}function s(e,t){let r=!1;for(const n in t){const o=t[n];void 0!==o&&(Array.isArray(o)?Array.isArray(e[n])&&(0,i.fS)(o,e[n])||(e[n]=o.slice(),r=!0):e[n]!==o&&(r=!0,e[n]=o))}return r}const l={multiply:1,ignore:2,replace:3,tint:4}},33236:(e,t,r)=>{r.d(t,{NK:()=>v,SW:()=>d,Vs:()=>m,XW:()=>s,h:()=>u,ho:()=>h,s5:()=>f,xP:()=>p});var i=r(29134),n=r(25158),o=r(97731),a=r(4760);function s(e,t,r){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;const{data:n,indices:o}=e,a=t.typedBuffer,s=t.typedBufferStride,l=o.length;if(r*=s,1===i)for(let c=0;c<l;++c)a[r]=n[o[c]],r+=s;else for(let c=0;c<l;++c){const e=n[o[c]];for(let t=0;t<i;t++)a[r]=e,r+=s}}function l(e,t,r){const{data:i,indices:n}=e,o=t.typedBuffer,a=t.typedBufferStride,s=n.length;r*=a;for(let l=0;l<s;++l){const e=2*n[l];o[r]=i[e],o[r+1]=i[e+1],r+=a}}function c(e,t,r,i){const{data:n,indices:o}=e,a=t.typedBuffer,s=t.typedBufferStride,l=o.length;if(r*=s,null==i||1===i)for(let c=0;c<l;++c){const e=3*o[c];a[r]=n[e],a[r+1]=n[e+1],a[r+2]=n[e+2],r+=s}else for(let c=0;c<l;++c){const e=3*o[c];for(let t=0;t<i;++t)a[r]=n[e],a[r+1]=n[e+1],a[r+2]=n[e+2],r+=s}}function d(e,t,r){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;const{data:n,indices:o}=e,a=t.typedBuffer,s=t.typedBufferStride,l=o.length;if(r*=s,1===i)for(let c=0;c<l;++c){const e=4*o[c];a[r]=n[e],a[r+1]=n[e+1],a[r+2]=n[e+2],a[r+3]=n[e+3],r+=s}else for(let c=0;c<l;++c){const e=4*o[c];for(let t=0;t<i;++t)a[r]=n[e],a[r+1]=n[e+1],a[r+2]=n[e+2],a[r+3]=n[e+3],r+=s}}function u(e,t,r){const i=e.typedBuffer,n=e.typedBufferStride;t*=n;for(let o=0;o<r;++o)i[t]=0,i[t+1]=0,i[t+2]=0,i[t+3]=0,t+=n}function h(e,t,r,n){let o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1;if(!t)return void c(e,r,n,o);const{data:a,indices:s}=e,l=r.typedBuffer,d=r.typedBufferStride,u=s.length,h=t[0],f=t[1],m=t[2],p=t[4],v=t[5],g=t[6],_=t[8],T=t[9],x=t[10],b=t[12],S=t[13],A=t[14];n*=d;let E=0,w=0,C=0;const M=(0,i.lv)(t)?e=>{E=a[e]+b,w=a[e+1]+S,C=a[e+2]+A}:e=>{const t=a[e],r=a[e+1],i=a[e+2];E=h*t+p*r+_*i+b,w=f*t+v*r+T*i+S,C=m*t+g*r+x*i+A};if(1===o)for(let i=0;i<u;++i)M(3*s[i]),l[n]=E,l[n+1]=w,l[n+2]=C,n+=d;else for(let i=0;i<u;++i){M(3*s[i]);for(let e=0;e<o;++e)l[n]=E,l[n+1]=w,l[n+2]=C,n+=d}}function f(e,t,r,n){let o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1;if(!t)return void c(e,r,n,o);const{data:a,indices:s}=e,l=t,d=r.typedBuffer,u=r.typedBufferStride,h=s.length,f=l[0],m=l[1],p=l[2],v=l[4],g=l[5],_=l[6],T=l[8],x=l[9],b=l[10],S=!(0,i.pV)(l),A=1e-6,E=1-A;n*=u;let w=0,C=0,M=0;const y=(0,i.lv)(l)?e=>{w=a[e],C=a[e+1],M=a[e+2]}:e=>{const t=a[e],r=a[e+1],i=a[e+2];w=f*t+v*r+T*i,C=m*t+g*r+x*i,M=p*t+_*r+b*i};if(1===o)if(S)for(let i=0;i<h;++i){y(3*s[i]);const e=w*w+C*C+M*M;if(e<E&&e>A){const t=1/Math.sqrt(e);d[n]=w*t,d[n+1]=C*t,d[n+2]=M*t}else d[n]=w,d[n+1]=C,d[n+2]=M;n+=u}else for(let i=0;i<h;++i)y(3*s[i]),d[n]=w,d[n+1]=C,d[n+2]=M,n+=u;else for(let i=0;i<h;++i){if(y(3*s[i]),S){const e=w*w+C*C+M*M;if(e<E&&e>A){const t=1/Math.sqrt(e);w*=t,C*=t,M*=t}}for(let e=0;e<o;++e)d[n]=w,d[n+1]=C,d[n+2]=M,n+=u}}function m(e,t,r,i){let n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1;const{data:o,indices:a}=e,s=r.typedBuffer,l=r.typedBufferStride,c=a.length;if(i*=l,t!==o.length||4!==t)if(1!==n)if(4!==t)for(let d=0;d<c;++d){const e=3*a[d];for(let t=0;t<n;++t)s[i]=o[e],s[i+1]=o[e+1],s[i+2]=o[e+2],s[i+3]=255,i+=l}else for(let d=0;d<c;++d){const e=4*a[d];for(let t=0;t<n;++t)s[i]=o[e],s[i+1]=o[e+1],s[i+2]=o[e+2],s[i+3]=o[e+3],i+=l}else{if(4===t){for(let e=0;e<c;++e){const t=4*a[e];s[i]=o[t],s[i+1]=o[t+1],s[i+2]=o[t+2],s[i+3]=o[t+3],i+=l}return}for(let e=0;e<c;++e){const t=3*a[e];s[i]=o[t],s[i+1]=o[t+1],s[i+2]=o[t+2],s[i+3]=255,i+=l}}else{s[i]=o[0],s[i+1]=o[1],s[i+2]=o[2],s[i+3]=o[3];const e=new Uint32Array(r.typedBuffer.buffer,r.start),t=l/4,a=e[i/=4];i+=t;const d=c*n;for(let r=1;r<d;++r)e[i]=a,i+=t}}function p(e,t,r,i){let n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1;const o=t.typedBuffer,a=t.typedBufferStride;if(i*=a,1===n)for(let s=0;s<r;++s)o[i]=e[0],o[i+1]=e[1],o[i+2]=e[2],o[i+3]=e[3],i+=a;else for(let s=0;s<r;++s)for(let t=0;t<n;++t)o[i]=e[0],o[i+1]=e[1],o[i+2]=e[2],o[i+3]=e[3],i+=a}function v(e,t,r,i,o,s,l){for(const c of r.fields.keys()){const r=e.get(c),d=r?.indices;if(r&&d)g(c,r,i,o,s,l);else if(c===a.T.OBJECTANDLAYERIDCOLOR&&null!=t){const r=e.get(a.T.POSITION)?.indices;if(r){const e=r.length;p(t,s.getField(c,n.mc),e,l)}}}}function g(e,t,r,s,c,u){switch(e){case a.T.POSITION:{(0,o.hu)(3===t.size);const i=c.getField(e,n.ct);(0,o.hu)(!!i,`No buffer view for ${e}`),i&&h(t,r,i,u);break}case a.T.NORMAL:{(0,o.hu)(3===t.size);const r=c.getField(e,n.ct);(0,o.hu)(!!r,`No buffer view for ${e}`),r&&f(t,s,r,u);break}case a.T.NORMALCOMPRESSED:{(0,o.hu)(2===t.size);const r=c.getField(e,n.or);(0,o.hu)(!!r,`No buffer view for ${e}`),r&&l(t,r,u);break}case a.T.UV0:{(0,o.hu)(2===t.size);const r=c.getField(e,n.Eu);(0,o.hu)(!!r,`No buffer view for ${e}`),r&&l(t,r,u);break}case a.T.COLOR:case a.T.SYMBOLCOLOR:{const r=c.getField(e,n.mc);(0,o.hu)(!!r,`No buffer view for ${e}`),(0,o.hu)(3===t.size||4===t.size),!r||3!==t.size&&4!==t.size||m(t,t.size,r,u);break}case a.T.COLORFEATUREATTRIBUTE:{const r=c.getField(e,n.ly);(0,o.hu)(!!r,`No buffer view for ${e}`),(0,o.hu)(1===t.size),r&&1===t.size&&function(e,t,r){const{data:i,indices:n}=e,o=t.typedBuffer,a=t.typedBufferStride,s=n.length,l=i[0];r*=a;for(let c=0;c<s;++c)o[r]=l,r+=a}(t,r,u);break}case a.T.TANGENT:{(0,o.hu)(4===t.size);const a=c.getField(e,n.ek);(0,o.hu)(!!a,`No buffer view for ${e}`),a&&function(e,t,r,n){let o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1;if(!t)return void d(e,r,n,o);const{data:a,indices:s}=e,l=t,c=r.typedBuffer,u=r.typedBufferStride,h=s.length,f=l[0],m=l[1],p=l[2],v=l[4],g=l[5],_=l[6],T=l[8],x=l[9],b=l[10],S=!(0,i.pV)(l),A=1e-6,E=1-A;if(n*=u,1===o)for(let i=0;i<h;++i){const e=4*s[i],t=a[e],r=a[e+1],o=a[e+2],l=a[e+3];let d=f*t+v*r+T*o,h=m*t+g*r+x*o,w=p*t+_*r+b*o;if(S){const e=d*d+h*h+w*w;if(e<E&&e>A){const t=1/Math.sqrt(e);d*=t,h*=t,w*=t}}c[n]=d,c[n+1]=h,c[n+2]=w,c[n+3]=l,n+=u}else for(let i=0;i<h;++i){const e=4*s[i],t=a[e],r=a[e+1],l=a[e+2],d=a[e+3];let h=f*t+v*r+T*l,w=m*t+g*r+x*l,C=p*t+_*r+b*l;if(S){const e=h*h+w*w+C*C;if(e<E&&e>A){const t=1/Math.sqrt(e);h*=t,w*=t,C*=t}}for(let i=0;i<o;++i)c[n]=h,c[n+1]=w,c[n+2]=C,c[n+3]=d,n+=u}}(t,r,a,u);break}case a.T.PROFILERIGHT:case a.T.PROFILEUP:case a.T.PROFILEVERTEXANDNORMAL:case a.T.FEATUREVALUE:{(0,o.hu)(4===t.size);const r=c.getField(e,n.ek);(0,o.hu)(!!r,`No buffer view for ${e}`),r&&d(t,r,u)}}}},45856:(e,t,r)=>{r.d(t,{Ih:()=>o,S7:()=>s,eP:()=>l,xq:()=>a});var i=r(32035),n=r(12400);function o(e){let{normalTexture:t,metallicRoughnessTexture:r,metallicFactor:o,roughnessFactor:a,emissiveTexture:s,emissiveFactor:l,occlusionTexture:c}=e;return null==t&&null==r&&null==s&&(null==l||(0,i.p)(l,n.AG))&&null==c&&(null==a||1===a)&&(null==o||1===o)}const a=(0,n.vV)(1,1,.5),s=(0,n.vV)(0,.6,.2),l=(0,n.vV)(0,1,.2)},56081:(e,t,r)=>{r.d(t,{Qm:()=>A,em:()=>S,tT:()=>E});var i=r(12400),n=r(86361),o=r(37081),a=r(16010),s=r(85380),l=r(26461),c=r(82144),d=r(78914),u=r(68401),h=r(56529),f=r(14124),m=r(78041),p=r(8548);p.wb.LESS,p.wb.ALWAYS;const v={mask:255},g={function:{func:p.wb.ALWAYS,ref:u.hU.OutlineVisualElementMask,mask:u.hU.OutlineVisualElementMask},operation:{fail:p.xS.KEEP,zFail:p.xS.KEEP,zPass:p.xS.ZERO}},_={function:{func:p.wb.ALWAYS,ref:u.hU.OutlineVisualElementMask,mask:u.hU.OutlineVisualElementMask},operation:{fail:p.xS.KEEP,zFail:p.xS.KEEP,zPass:p.xS.REPLACE}};p.wb.EQUAL,u.hU.OutlineVisualElementMask,u.hU.OutlineVisualElementMask,p.xS.KEEP,p.xS.KEEP,p.xS.KEEP,p.wb.NOTEQUAL,u.hU.OutlineVisualElementMask,u.hU.OutlineVisualElementMask,p.xS.KEEP,p.xS.KEEP,p.xS.KEEP;var T=r(45856),x=r(65630),b=r(36207);class S extends s.d4{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=T.xq,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=u.Vr.Back,this.isInstanced=!1,this.hasInstancedColor=!1,this.emissiveFactor=i.AG,this.instancedDoublePrecision=!1,this.normalType=a.r.Attribute,this.receiveShadows=!0,this.receiveAmbientOcclusion=!0,this.castShadows=!0,this.ambient=(0,i.vV)(.2,.2,.2),this.diffuse=(0,i.vV)(.8,.8,.8),this.externalColor=(0,n.al)(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=(0,i.Ue)(),this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.offsetTransparentBackfaces=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.modelTransformation=null,this.transparent=!1,this.writeDepth=!0,this.customDepthTest=u.Gv.Less,this.textureAlphaMode=u.JJ.Blend,this.textureAlphaCutoff=l.e,this.textureAlphaPremultiplied=!1,this.renderOccluded=h.yD.Occlude,this.isDecoration=!1}}class A extends s.Pf{constructor(){super(...arguments),this.origin=(0,i.Ue)(),this.slicePlaneLocalOrigin=this.origin}}class E extends d.A{constructor(e,t,i){super(e,t,arguments.length>3&&void 0!==arguments[3]?arguments[3]:new c.J(x.D,(()=>r.e(294).then(r.bind(r,40294)))),i),this.type="DefaultMaterialTechnique"}_makePipeline(e,t){const{oitPass:r,output:i,transparent:n,cullFace:a,customDepthTest:s,hasOccludees:l,enableOffset:c}=e,d=r===f.M.NONE,u=r===f.M.FrontFace;return(0,b.sm)({blending:(0,o.c1)(i)&&n?(0,m.Wo)(r):null,culling:C(e)?(0,b.zp)(a):null,depthTest:{func:(0,m.Bh)(r,w(s))},depthWrite:(0,m.W$)(e),drawBuffers:i===o.H_.Depth?{buffers:[p.Xg.NONE]}:(0,m.u_)(r,i),colorWrite:b.gf,stencilWrite:l?v:null,stencilTest:l?t?_:g:null,polygonOffset:d||u?null:(0,m.je)(c)})}initializePipeline(e){return this._occludeePipelineState=this._makePipeline(e,!0),this._makePipeline(e,!1)}getPipeline(e){return e?this._occludeePipelineState:super.getPipeline()}}function w(e){return e===u.Gv.Lequal?p.wb.LEQUAL:p.wb.LESS}function C(e){return e.cullFace!==u.Vr.None||!e.hasSlicePlane&&!e.transparent&&!e.doubleSidedMode}},53178:(e,t,r)=>{r.d(t,{j:()=>d});var i=r(37081),n=r(80848),o=r(83744),a=r(26461),s=r(116),l=r(98634),c=r(14124);function d(e,t){e.include(o.b,t),e.include(n.Ok,t),e.fragment.include(s.Y);const r=t.output===i.H_.ObjectAndLayerIdColor,d=(0,i.qC)(t.output),u=(0,i.c1)(t.output)&&t.oitPass===c.M.ColorAlpha,h=(0,i.c1)(t.output)&&t.oitPass!==c.M.ColorAlpha,f=t.discardInvisibleFragments;let m=0;(h||d||u)&&e.outputs.add("fragColor","vec4",m++),d&&e.outputs.add("fragEmission","vec4",m++),u&&e.outputs.add("fragAlpha","float",m++),e.fragment.code.add(l.H`
    void outputColorHighlightOID(vec4 finalColor, const in vec3 vWorldPosition) {
      ${(0,l.If)(r,l.H`finalColor.a = 1.0;`)}

      ${(0,l.If)(f,l.H`if (finalColor.a < ${l.H.float(a.e)}){
              discard;
              return;
            }`)}

      finalColor = highlightSlice(finalColor, vWorldPosition);
      ${(0,l.If)(u,l.H`fragColor = premultiplyAlpha(finalColor);
             fragAlpha = finalColor.a;`)}
      ${(0,l.If)(h,"fragColor = finalColor;")}
      ${(0,l.If)(d,"fragEmission = getEmissions();")}
      calculateOcclusionAndOutputHighlight();
      ${(0,l.If)(r,"outputObjectAndLayerIdColor();")}
    }
  `)}},43411:(e,t,r)=>{function i(e,t,r){for(let i=0;i<r;++i)t[2*i]=e[i],t[2*i+1]=e[i]-t[2*i]}function n(e,t){const r=e.length;for(let i=0;i<r;++i)a[0]=e[i],t[i]=a[0];return t}function o(e,t){const r=e.length;for(let i=0;i<r;++i)a[0]=e[i],a[1]=e[i]-a[0],t[i]=a[1];return t}r.d(t,{GB:()=>o,LF:()=>i,U8:()=>n});const a=new Float32Array(2)},36207:(e,t,r)=>{r.d(t,{Dh:()=>c,a5:()=>s,ck:()=>f,gf:()=>m,jp:()=>q,sm:()=>E,wK:()=>a,xW:()=>l,zp:()=>h});var i=r(68401),n=r(8548);function o(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n.db.ADD,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[0,0,0,0];return{srcRgb:e,srcAlpha:e,dstRgb:t,dstAlpha:t,opRgb:r,opAlpha:r,color:{r:i[0],g:i[1],b:i[2],a:i[3]}}}function a(e,t,r,i){let o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:n.db.ADD,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:n.db.ADD,s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:[0,0,0,0];return{srcRgb:e,srcAlpha:t,dstRgb:r,dstAlpha:i,opRgb:o,opAlpha:a,color:{r:s[0],g:s[1],b:s[2],a:s[3]}}}const s=o(n.zi.ZERO,n.zi.ONE_MINUS_SRC_ALPHA),l=(o(n.zi.ONE,n.zi.ZERO),o(n.zi.ONE,n.zi.ONE),o(n.zi.ONE,n.zi.ONE_MINUS_SRC_ALPHA)),c=a(n.zi.SRC_ALPHA,n.zi.ONE,n.zi.ONE_MINUS_SRC_ALPHA,n.zi.ONE_MINUS_SRC_ALPHA),d={face:n.LR.BACK,mode:n.Wf.CCW},u={face:n.LR.FRONT,mode:n.Wf.CCW},h=e=>e===i.Vr.Back?d:e===i.Vr.Front?u:null,f={zNear:0,zFar:1},m={r:!0,g:!0,b:!0,a:!0};function p(e){return M.intern(e)}function v(e){return O.intern(e)}function g(e){return R.intern(e)}function _(e){return P.intern(e)}function T(e){return H.intern(e)}function x(e){return F.intern(e)}function b(e){return B.intern(e)}function S(e){return G.intern(e)}function A(e){return W.intern(e)}function E(e){return k.intern(e)}class w{constructor(e,t){this._makeKey=e,this._makeRef=t,this._interns=new Map}intern(e){if(!e)return null;const t=this._makeKey(e),r=this._interns;return r.has(t)||r.set(t,this._makeRef(e)),r.get(t)??null}}function C(e){return"["+e.join(",")+"]"}const M=new w(y,(e=>({__tag:"Blending",...e})));function y(e){return e?C([e.srcRgb,e.srcAlpha,e.dstRgb,e.dstAlpha,e.opRgb,e.opAlpha,e.color.r,e.color.g,e.color.b,e.color.a]):null}const O=new w(I,(e=>({__tag:"Culling",...e})));function I(e){return e?C([e.face,e.mode]):null}const R=new w(N,(e=>({__tag:"PolygonOffset",...e})));function N(e){return e?C([e.factor,e.units]):null}const P=new w(L,(e=>({__tag:"DepthTest",...e})));function L(e){return e?C([e.func]):null}const H=new w(D,(e=>({__tag:"StencilTest",...e})));function D(e){return e?C([e.function.func,e.function.ref,e.function.mask,e.operation.fail,e.operation.zFail,e.operation.zPass]):null}const F=new w(U,(e=>({__tag:"DepthWrite",...e})));function U(e){return e?C([e.zNear,e.zFar]):null}const B=new w(z,(e=>({__tag:"ColorWrite",...e})));function z(e){return e?C([e.r,e.g,e.b,e.a]):null}const G=new w(V,(e=>({__tag:"StencilWrite",...e})));function V(e){return e?C([e.mask]):null}const W=new w(j,(e=>({__tag:"DrawBuffers",...e})));function j(e){return e?C(e.buffers):null}const k=new w((function(e){return e?C([y(e.blending),I(e.culling),N(e.polygonOffset),L(e.depthTest),D(e.stencilTest),U(e.depthWrite),z(e.colorWrite),V(e.stencilWrite),j(e.drawBuffers)]):null}),(e=>({blending:p(e.blending),culling:v(e.culling),polygonOffset:g(e.polygonOffset),depthTest:_(e.depthTest),stencilTest:T(e.stencilTest),depthWrite:x(e.depthWrite),colorWrite:b(e.colorWrite),stencilWrite:S(e.stencilWrite),drawBuffers:A(e.drawBuffers)})));class q{constructor(e){this._pipelineInvalid=!0,this._blendingInvalid=!0,this._cullingInvalid=!0,this._polygonOffsetInvalid=!0,this._depthTestInvalid=!0,this._stencilTestInvalid=!0,this._depthWriteInvalid=!0,this._colorWriteInvalid=!0,this._stencilWriteInvalid=!0,this._drawBuffersInvalid=!0,this._stateSetters=e}setPipeline(e){(this._pipelineInvalid||e!==this._pipeline)&&(this._setBlending(e.blending),this._setCulling(e.culling),this._setPolygonOffset(e.polygonOffset),this._setDepthTest(e.depthTest),this._setStencilTest(e.stencilTest),this._setDepthWrite(e.depthWrite),this._setColorWrite(e.colorWrite),this._setStencilWrite(e.stencilWrite),this._setDrawBuffers(e.drawBuffers),this._pipeline=e),this._pipelineInvalid=!1}invalidateBlending(){this._blendingInvalid=!0,this._pipelineInvalid=!0}invalidateCulling(){this._cullingInvalid=!0,this._pipelineInvalid=!0}invalidatePolygonOffset(){this._polygonOffsetInvalid=!0,this._pipelineInvalid=!0}invalidateDepthTest(){this._depthTestInvalid=!0,this._pipelineInvalid=!0}invalidateStencilTest(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}invalidateDepthWrite(){this._depthWriteInvalid=!0,this._pipelineInvalid=!0}invalidateColorWrite(){this._colorWriteInvalid=!0,this._pipelineInvalid=!0}invalidateStencilWrite(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}invalidateDrawBuffers(){this._drawBuffersInvalid=!0,this._pipelineInvalid=!0}_setBlending(e){this._blending=this._setSubState(e,this._blending,this._blendingInvalid,this._stateSetters.setBlending),this._blendingInvalid=!1}_setCulling(e){this._culling=this._setSubState(e,this._culling,this._cullingInvalid,this._stateSetters.setCulling),this._cullingInvalid=!1}_setPolygonOffset(e){this._polygonOffset=this._setSubState(e,this._polygonOffset,this._polygonOffsetInvalid,this._stateSetters.setPolygonOffset),this._polygonOffsetInvalid=!1}_setDepthTest(e){this._depthTest=this._setSubState(e,this._depthTest,this._depthTestInvalid,this._stateSetters.setDepthTest),this._depthTestInvalid=!1}_setStencilTest(e){this._stencilTest=this._setSubState(e,this._stencilTest,this._stencilTestInvalid,this._stateSetters.setStencilTest),this._stencilTestInvalid=!1}_setDepthWrite(e){this._depthWrite=this._setSubState(e,this._depthWrite,this._depthWriteInvalid,this._stateSetters.setDepthWrite),this._depthWriteInvalid=!1}_setColorWrite(e){this._colorWrite=this._setSubState(e,this._colorWrite,this._colorWriteInvalid,this._stateSetters.setColorWrite),this._colorWriteInvalid=!1}_setStencilWrite(e){this._stencilWrite=this._setSubState(e,this._stencilWrite,this._stencilWriteInvalid,this._stateSetters.setStencilWrite),this._stencilTestInvalid=!1}_setDrawBuffers(e){this._drawBuffers=this._setSubState(e,this._drawBuffers,this._drawBuffersInvalid,this._stateSetters.setDrawBuffers),this._drawBuffersInvalid=!1}_setSubState(e,t,r,i){return(r||e!==t)&&(i(e),this._pipelineInvalid=!0),e}}}}]);
//# sourceMappingURL=7269.c4d192f6.chunk.js.map