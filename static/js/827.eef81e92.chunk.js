"use strict";(self.webpackChunksc_trees=self.webpackChunksc_trees||[]).push([[827],{65630:(e,t,r)=>{r.d(t,{D:()=>V,b:()=>z});var i=r(22357),n=r(83734),o=r(37081),a=r(33280),s=r(94951),l=r(81221),c=r(16010),d=r(52276),u=r(50679),h=r(60113),f=r(48655),m=r(85380),p=r(71410),v=r(4944),g=r(38171),_=r(69521),x=r(80919),T=r(92395),b=r(15226),y=r(96658),S=r(2116),w=r(41481),E=r(58335),A=r(79154),C=r(66472),M=r(26461),O=r(65974),R=r(98082),I=r(82552),P=r(49450),N=r(95276),L=r(58406),H=r(98634),D=r(64201),B=r(19253),F=r(25920),U=r(4760);function z(e){const t=new D.kG,{vertex:r,fragment:z,varyings:V}=t;if((0,I.Sv)(r,e),t.include(d.f),V.add("vpos","vec3"),t.include(C.k,e),t.include(l.fQ,e),t.include(p.L,e),t.include(A.av,e),e.output===o.H_.Color){t.include(A.NI,e),t.include(A.R5,e),t.include(A.jF,e),t.include(A.DT,e),(0,I.hY)(r,e),t.include(c.O,e),t.include(s.w,e);const o=e.normalType===c.r.Attribute||e.normalType===c.r.Compressed;o&&e.offsetBackfaces&&t.include(n.w),t.include(g.Q,e),t.include(m.Bb,e),e.instancedColor&&t.attributes.add(U.T.INSTANCECOLOR,"vec4"),V.add("vPositionLocal","vec3"),t.include(h.D,e),t.include(i.qj,e),t.include(u.R,e),t.include(f.c,e),r.uniforms.add(new N.N("externalColor",(e=>e.externalColor))),V.add("vcolorExt","vec4"),e.multipassEnabled&&V.add("depth","float"),r.code.add(H.H`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${e.instancedColor?"vcolorExt *= instanceColor * 0.003921568627451;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${H.H.float(M.b)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        } else {
          vpos = getVertexInLocalOriginSpace();
          vPositionLocal = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${o?H.H`vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${e.hasVertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, vpos);
          ${o&&e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${e.multipassEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
        forwardColorUV();
        forwardNormalUV();
        forwardEmissiveUV();
        forwardOcclusionUV();
        forwardMetallicRoughnessUV();
      }
    `),t.include(a.f5,e),t.include(x.XP,e),t.include(_.K,e),t.include(O.z,e),t.include(e.instancedDoublePrecision?E.hb:E.XE,e),t.include(b.l,e),(0,I.hY)(z,e),z.uniforms.add(r.uniforms.get("localOrigin"),new P.J("ambient",(e=>e.ambient)),new P.J("diffuse",(e=>e.diffuse)),new L.p("opacity",(e=>e.opacity)),new L.p("layerOpacity",(e=>e.layerOpacity))),e.hasColorTexture&&z.uniforms.add(new B.A("tex",(e=>e.texture))),t.include(w.jV,e),t.include(S.T,e),z.include(R.y),t.include(y.k,e),(0,x.PN)(z),(0,x.sC)(z),(0,T.F1)(z),e.transparencyPassType===F.A.ColorAlpha&&(t.outputs.add("fragColor","vec4",0),t.outputs.add("fragAlpha","float",1)),z.code.add(H.H`
      void main() {
        discardBySlice(vpos);
        ${e.multipassEnabled?"terrainDepthTest(depth);":""}
        ${e.hasColorTexture?H.H`
                vec4 texColor = texture(tex, ${e.hasColorTextureTransform?H.H`colorUV`:H.H`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:H.H`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${e.normalType===c.r.ScreenDerivative?H.H`
                vec3 normal = screenDerivativeNormal(vPositionLocal);`:H.H`
                shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
        ${e.pbrMode===w.f7.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse() * getBakedOcclusion();

        vec3 posWorld = vpos + localOrigin;

        float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
        float shadow = ${e.receiveShadows?"readShadowMap(vpos, linearDepth)":e.spherical?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};

        vec3 matColor = max(ambient, diffuse);
        ${e.hasVertexColors?H.H`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:H.H`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${e.hasNormalTexture?H.H`
                mat3 tangentSpace = ${e.hasVertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
                vec3 shadingNormal = computeTextureNormal(tangentSpace, ${e.hasNormalTextureTransform?H.H`normalUV`:"vuv0"});`:H.H`vec3 shadingNormal = normal;`}
        vec3 normalGround = ${e.spherical?H.H`normalize(posWorld);`:H.H`vec3(0.0, 0.0, 1.0);`}

        ${e.snowCover?H.H`
                float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
                albedo = mix(albedo, vec3(1), snow);
                shadingNormal = mix(shadingNormal, normal, snow);
                ssao = mix(ssao, 1.0, snow);`:""}

        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        ${e.pbrMode===w.f7.Normal||e.pbrMode===w.f7.Schematic?H.H`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${e.snowCover?H.H`
                        mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                        emission = mix(emission, vec3(0.0), snow);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:H.H`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.transparencyPassType===F.A.ColorAlpha?H.H`
                  fragColor = premultiplyAlpha(fragColor);
                  fragAlpha = fragColor.a;`:""}
      }
    `)}return t.include(v.s,e),t}const V=Object.freeze(Object.defineProperty({__proto__:null,build:z},Symbol.toStringTag,{value:"Module"}))},40563:(e,t,r)=>{r.d(t,{R:()=>B,b:()=>D});var i=r(22357),n=r(83734),o=r(37081),a=r(33280),s=r(94951),l=r(81221),c=r(16010),d=r(52276),u=r(50679),h=r(60113),f=r(48655),m=r(71410),p=r(4944),v=r(69521),g=r(80919),_=r(92395),x=r(15226),T=r(2116),b=r(41481),y=r(58335),S=r(66472),w=r(26461),E=r(65974),A=r(98082),C=r(82552),M=r(49450),O=r(95276),R=r(58406),I=r(98634),P=r(64201),N=r(19253),L=r(25920),H=r(4760);function D(e){const t=new P.kG,{vertex:r,fragment:D,varyings:B}=t;return(0,C.Sv)(r,e),t.include(d.f),B.add("vpos","vec3"),t.include(S.k,e),t.include(l.fQ,e),t.include(m.L,e),e.output===o.H_.Color&&((0,C.hY)(t.vertex,e),t.include(c.O,e),t.include(s.w,e),e.offsetBackfaces&&t.include(n.w),e.instancedColor&&t.attributes.add(H.T.INSTANCECOLOR,"vec4"),B.add("vNormalWorld","vec3"),B.add("localvpos","vec3"),e.multipassEnabled&&B.add("depth","float"),t.include(h.D,e),t.include(i.qj,e),t.include(u.R,e),t.include(f.c,e),r.uniforms.add(new O.N("externalColor",(e=>e.externalColor))),B.add("vcolorExt","vec4"),r.code.add(I.H`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${e.instancedColor?"vcolorExt *= instanceColor * 0.003921568627451;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${I.H.float(w.b)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          } else {
            vpos = getVertexInLocalOriginSpace();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
          }
          ${e.multipassEnabled?I.H`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),e.output===o.H_.Color&&(t.include(a.f5,e),t.include(g.XP,e),t.include(v.K,e),t.include(E.z,e),t.include(e.instancedDoublePrecision?y.hb:y.XE,e),t.include(x.l,e),(0,C.hY)(t.fragment,e),(0,_.Pe)(D),(0,g.PN)(D),(0,g.sC)(D),D.uniforms.add(r.uniforms.get("localOrigin"),r.uniforms.get("view"),new M.J("ambient",(e=>e.ambient)),new M.J("diffuse",(e=>e.diffuse)),new R.p("opacity",(e=>e.opacity)),new R.p("layerOpacity",(e=>e.layerOpacity))),e.hasColorTexture&&D.uniforms.add(new N.A("tex",(e=>e.texture))),t.include(b.jV,e),t.include(T.T,e),D.include(A.y),e.transparencyPassType===L.A.ColorAlpha&&(t.outputs.add("fragColor","vec4",0),t.outputs.add("fragAlpha","float",1)),(0,_.F1)(D),D.code.add(I.H`
      void main() {
        discardBySlice(vpos);
        ${e.multipassEnabled?I.H`terrainDepthTest(depth);`:""}
        ${e.hasColorTexture?I.H`
                vec4 texColor = texture(tex, ${e.hasColorTextureTransform?I.H`colorUV`:I.H`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:I.H`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${e.pbrMode===b.f7.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":e.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.hasVertexColors?I.H`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:I.H`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${e.snowCover?I.H`albedo = mix(albedo, vec3(1), 0.9);`:I.H``}
        ${I.H`
            vec3 shadingNormal = normalize(vNormalWorld);
            albedo *= 1.2;
            vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
            float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
            float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
            float treeRadialFalloff = vColor.r;
            float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
            additionalLight += backLightFactor * mainLightIntensity;`}
        ${e.pbrMode===b.f7.Normal||e.pbrMode===b.f7.Schematic?e.spherical?I.H`vec3 normalGround = normalize(vpos + localOrigin);`:I.H`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:I.H``}
        ${e.pbrMode===b.f7.Normal||e.pbrMode===b.f7.Schematic?I.H`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${e.snowCover?I.H`
                        mrr = vec3(0.0, 1.0, 0.04);
                        emission = vec3(0.0);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:I.H`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.transparencyPassType===L.A.ColorAlpha?I.H`
                fragColor = premultiplyAlpha(fragColor);
                fragAlpha = fragColor.a;`:""}
      }
    `)),t.include(p.s,e),t}const B=Object.freeze(Object.defineProperty({__proto__:null,build:D},Symbol.toStringTag,{value:"Module"}))},46516:(e,t,r)=>{r.d(t,{S:()=>g,b:()=>m,g:()=>p});var i=r(13611),n=r(6644),o=r(24967),a=r(54943),s=r(96415),l=r(82999),c=r(58406),d=r(98634),u=r(64201),h=r(19253);const f=16;function m(){const e=new u.kG,t=e.fragment;return e.include(o.k),e.include(s.GZ),t.include(a.K),t.uniforms.add(new c.p("radius",((e,t)=>p(t.camera)))).code.add(d.H`vec3 sphere[16] = vec3[16](
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
}`),t.uniforms.add(new h.A("normalMap",(e=>e.normalTexture)),new h.A("depthMap",(e=>e.depthTexture)),new c.p("projScale",(e=>e.projScale)),new h.A("rnm",(e=>e.noiseTexture)),new l.A("rnmScale",((e,t)=>(0,i.t8)(v,t.camera.fullWidth/e.noiseTexture.descriptor.width,t.camera.fullHeight/e.noiseTexture.descriptor.height))),new c.p("intensity",(e=>e.intensity)),new l.A("screenSize",((e,t)=>(0,i.t8)(v,t.camera.fullWidth,t.camera.fullHeight)))),e.outputs.add("fragOcclusion","float"),t.code.add(d.H`
    void main(void) {
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
      A = (pow(A, 0.2) + 1.2 * A*A*A*A) / 2.2;

      fragOcclusion = A;
    }
  `),e}function p(e){return Math.max(10,20*e.computeScreenPixelSizeAtDist(Math.abs(4*e.relativeElevation)))}const v=(0,n.Ue)(),g=Object.freeze(Object.defineProperty({__proto__:null,build:m,getRadius:p},Symbol.toStringTag,{value:"Module"}))},97727:(e,t,r)=>{r.d(t,{S:()=>m,b:()=>f});var i=r(32035),n=r(24967),o=r(54943),a=r(22527),s=r(58406),l=r(98634),c=r(64201),d=r(78050),u=r(19253);const h=4;function f(){const e=new c.kG,t=e.fragment;e.include(n.k);const r=(h+1)/2,f=1/(2*r*r);return t.include(o.K),t.uniforms.add(new u.A("depthMap",(e=>e.depthTexture)),new d.R("tex",(e=>e.colorTexture)),new a.q("blurSize",(e=>e.blurSize)),new s.p("projScale",((e,t)=>{const r=(0,i.p)(t.camera.eye,t.camera.center);return r>5e4?Math.max(0,e.projScale-(r-5e4)):e.projScale}))),t.code.add(l.H`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${l.H.float(f)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),e.outputs.add("fragBlur","float"),t.code.add(l.H`
    void main(void) {
      float b = 0.0;
      float w_total = 0.0;

      float center_d = linearDepthFromTexture(depthMap, uv);

      float sharpness = -0.05 * projScale / center_d;
      for (int r = -${l.H.int(h)}; r <= ${l.H.int(h)}; ++r) {
        float rf = float(r);
        vec2 uvOffset = uv + rf * blurSize;
        blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
      }

      fragBlur = b / w_total;
    }
  `),e}const m=Object.freeze(Object.defineProperty({__proto__:null,build:f},Symbol.toStringTag,{value:"Module"}))},11186:(e,t,r)=>{r.d(t,{a:()=>n,b:()=>c,c:()=>o,d:()=>i,e:()=>d,f:()=>s,n:()=>u,s:()=>l,t:()=>a});r(93169),r(32718);function i(e,t,r){n(e.typedBuffer,t.typedBuffer,r,e.typedBufferStride,t.typedBufferStride)}function n(e,t,r){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:i;if(e.length/i!==Math.ceil(t.length/n))return e;const o=e.length/i,a=r[0],s=r[1],l=r[2],c=r[4],d=r[5],u=r[6],h=r[8],f=r[9],m=r[10],p=r[12],v=r[13],g=r[14];let _=0,x=0;for(let T=0;T<o;T++){const r=t[_],o=t[_+1],T=t[_+2];e[x]=a*r+c*o+h*T+p,e[x+1]=s*r+d*o+f*T+v,e[x+2]=l*r+u*o+m*T+g,_+=n,x+=i}return e}function o(e,t,r){a(e.typedBuffer,t.typedBuffer,r,e.typedBufferStride,t.typedBufferStride)}function a(e,t,r){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:i;if(e.length/i!==Math.ceil(t.length/n))return;const o=e.length/i,a=r[0],s=r[1],l=r[2],c=r[3],d=r[4],u=r[5],h=r[6],f=r[7],m=r[8];let p=0,v=0;for(let g=0;g<o;g++){const r=t[p],o=t[p+1],g=t[p+2];e[v]=a*r+c*o+h*g,e[v+1]=s*r+d*o+f*g,e[v+2]=l*r+u*o+m*g,p+=n,v+=i}}function s(e,t,r){l(e.typedBuffer,t.typedBuffer,r,e.typedBufferStride,t.typedBufferStride)}function l(e,t,r){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:i;const o=Math.min(e.length/i,t.length/n);let a=0,s=0;for(let l=0;l<o;l++)e[s]=r*t[a],e[s+1]=r*t[a+1],e[s+2]=r*t[a+2],a+=n,s+=i;return e}function c(e,t,r){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:i;const o=e.length/i;if(o!==Math.ceil(t.length/n))return e;let a=0,s=0;for(let l=0;l<o;l++)e[s]=t[a]+r[0],e[s+1]=t[a+1]+r[1],e[s+2]=t[a+2]+r[2],a+=n,s+=i;return e}function d(e,t){u(e.typedBuffer,t.typedBuffer,e.typedBufferStride,t.typedBufferStride)}function u(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:r;const n=Math.min(e.length/r,t.length/i);let o=0,a=0;for(let s=0;s<n;s++){const n=t[o],s=t[o+1],l=t[o+2],c=n*n+s*s+l*l;if(c>0){const t=1/Math.sqrt(c);e[a]=t*n,e[a+1]=t*s,e[a+2]=t*l}o+=i,a+=r}}Object.freeze(Object.defineProperty({__proto__:null,normalize:u,normalizeView:d,scale:l,scaleView:s,shiftRight:function(e,t,r){const i=Math.min(e.count,t.count),n=e.typedBuffer,o=e.typedBufferStride,a=t.typedBuffer,s=t.typedBufferStride;let l=0,c=0;for(let d=0;d<i;d++)n[c]=a[l]>>r,n[c+1]=a[l+1]>>r,n[c+2]=a[l+2]>>r,l+=s,c+=o},transformMat3:a,transformMat3View:o,transformMat4:n,transformMat4View:i,translate:c},Symbol.toStringTag,{value:"Module"}))},6754:(e,t,r)=>{r.d(t,{a:()=>n,b:()=>s,n:()=>a,s:()=>l,t:()=>o});r(93169);var i=r(32718);function n(e,t,r){o(e.typedBuffer,t.typedBuffer,r,e.typedBufferStride,t.typedBufferStride)}function o(e,t,r){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:4,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:i;if(e.length/i!=t.length/n)return;const o=e.length/i,a=r[0],s=r[1],l=r[2],c=r[3],d=r[4],u=r[5],h=r[6],f=r[7],m=r[8];let p=0,v=0;for(let g=0;g<o;g++){const r=t[p],o=t[p+1],g=t[p+2],_=t[p+3];e[v]=a*r+c*o+h*g,e[v+1]=s*r+d*o+f*g,e[v+2]=l*r+u*o+m*g,e[v+3]=_,p+=n,v+=i}}function a(e,t){const r=Math.min(e.count,t.count),i=e.typedBuffer,n=e.typedBufferStride,o=t.typedBuffer,a=t.typedBufferStride;for(let s=0;s<r;s++){const e=s*n,t=s*a,r=o[t],l=o[t+1],c=o[t+2],d=r*r+l*l+c*c;if(d>0){const t=1/Math.sqrt(d);i[e]=t*r,i[e+1]=t*l,i[e+2]=t*c}}}function s(e,t,r){l(e.typedBuffer,t,r,e.typedBufferStride)}function l(e,t,r){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:4;const n=Math.min(e.length/i,t.count),o=t.typedBuffer,a=t.typedBufferStride;let s=0,l=0;for(let c=0;c<n;c++)e[l]=r*o[s],e[l+1]=r*o[s+1],e[l+2]=r*o[s+2],e[l+3]=r*o[s+3],s+=a,l+=i}Object.freeze(Object.defineProperty({__proto__:null,normalize:a,scale:l,scaleView:s,transformMat3:o,transformMat3View:n,transformMat4:function(e,t,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:4,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:n;if(e.length/n!=t.length/o)return void i.Z.getLogger("esri.views.3d.support.buffer.math").error("source and destination buffers need to have the same number of elements");const a=e.length/n,s=r[0],l=r[1],c=r[2],d=r[3],u=r[4],h=r[5],f=r[6],m=r[7],p=r[8],v=r[9],g=r[10],_=r[11],x=r[12],T=r[13],b=r[14],y=r[15];let S=0,w=0;for(let i=0;i<a;i++){const r=t[S],i=t[S+1],a=t[S+2],E=t[S+3];e[w]=s*r+u*i+p*a+x*E,e[w+1]=l*r+h*i+v*a+T*E,e[w+2]=c*r+f*i+g*a+b*E,e[w+3]=d*r+m*i+_*a+y*E,S+=o,w+=n}},transformMat4View:function(e,t,r){if(e.count!==t.count)return;const i=e.count,n=r[0],o=r[1],a=r[2],s=r[3],l=r[4],c=r[5],d=r[6],u=r[7],h=r[8],f=r[9],m=r[10],p=r[11],v=r[12],g=r[13],_=r[14],x=r[15],T=e.typedBuffer,b=e.typedBufferStride,y=t.typedBuffer,S=t.typedBufferStride;for(let w=0;w<i;w++){const e=w*b,t=w*S,r=y[t],i=y[t+1],E=y[t+2],A=y[t+3];T[e]=n*r+l*i+h*E+v*A,T[e+1]=o*r+c*i+f*E+g*A,T[e+2]=a*r+d*i+m*E+_*A,T[e+3]=s*r+u*i+p*E+x*A}}},Symbol.toStringTag,{value:"Module"}))},59447:(e,t,r)=>{r.d(t,{r:()=>i});class i{constructor(){this._outer=new Map}clear(){this._outer.clear()}get empty(){return 0===this._outer.size}get(e,t){return this._outer.get(e)?.get(t)}set(e,t,r){const i=this._outer.get(e);i?i.set(t,r):this._outer.set(e,new Map([[t,r]]))}delete(e,t){const r=this._outer.get(e);r&&(r.delete(t),0===r.size&&this._outer.delete(e))}forEach(e){this._outer.forEach(((t,r)=>e(t,r)))}}},71277:(e,t,r)=>{function i(e){return e=e||globalThis.location.hostname,c.some((t=>null!=e?.match(t)))}function n(e,t){return e&&(t=t||globalThis.location.hostname)?null!=t.match(o)||null!=t.match(s)?e.replace("static.arcgis.com","staticdev.arcgis.com"):null!=t.match(a)||null!=t.match(l)?e.replace("static.arcgis.com","staticqa.arcgis.com"):e:e}r.d(t,{XO:()=>i,pJ:()=>n});const o=/^devext\.arcgis\.com$/,a=/^qaext\.arcgis\.com$/,s=/^[\w-]*\.mapsdevext\.arcgis\.com$/,l=/^[\w-]*\.mapsqa\.arcgis\.com$/,c=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local\.esri\.com$/,o,a,/^jsapps\.esri\.com$/,s,l]},38461:(e,t,r)=>{r.d(t,{xx:()=>n});var i=r(18722);function n(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e<=i.c8?t?new Array(e).fill(0):new Array(e):new Float32Array(e)}},39406:(e,t,r)=>{r.d(t,{$z:()=>o,KF:()=>c,mi:()=>n});var i=r(18722);function n(e){if((0,i.kJ)(e)){if(e.length<i.c8)return e}else if(e.length<i.c8)return Array.from(e);let t=!0,r=!0;return e.some(((e,i)=>(t=t&&0===e,r=r&&e===i,!t&&!r))),t?function(e){if(1===e)return s;if(e<i.c8)return new Array(e).fill(0);if(e>d.length){const t=Math.max(2*d.length,e);d=new Uint8Array(t)}return new Uint8Array(d.buffer,0,e)}(e.length):r?c(e.length):(0,i.kJ)(e)||e.BYTES_PER_ELEMENT!==Uint16Array.BYTES_PER_ELEMENT?function(e){let t=!0;for(const r of e){if(r>=65536)return(0,i.kJ)(e)?new Uint32Array(e):e;r>=256&&(t=!1)}return t?new Uint8Array(e):new Uint16Array(e)}(e):e}function o(e){return e<=i.c8?new Array(e):e<=65536?new Uint16Array(e):new Uint32Array(e)}let a=(()=>{const e=new Uint32Array(131072);for(let t=0;t<e.length;++t)e[t]=t;return e})();const s=[0],l=(()=>{const e=new Uint16Array(65536);for(let t=0;t<e.length;++t)e[t]=t;return e})();function c(e){if(1===e)return s;if(e<i.c8)return Array.from(new Uint16Array(l.buffer,0,e));if(e<l.length)return new Uint16Array(l.buffer,0,e);if(e>a.length){const t=Math.max(2*a.length,e);a=new Uint32Array(t);for(let e=0;e<a.length;e++)a[e]=e}return new Uint32Array(a.buffer,0,e)}let d=new Uint8Array(65536)},85981:(e,t,r)=>{r.d(t,{Ue:()=>l,nF:()=>d,zk:()=>c});var i=r(16889),n=r(21530),o=r(32035),a=r(12400),s=r(51378);function l(e){return e?{origin:(0,a.d9)(e.origin),vector:(0,a.d9)(e.vector)}:{origin:(0,a.Ue)(),vector:(0,a.Ue)()}}function c(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:l();return(0,o.c)(r.origin,e),(0,o.f)(r.vector,t,e),r}function d(e,t,r){return function(e,t,r,n,a){const{vector:l,origin:c}=e,d=(0,o.f)(s.WM.get(),t,c),u=(0,o.m)(l,d)/(0,o.q)(l);return(0,o.j)(a,l,(0,i.uZ)(u,r,n)),(0,o.g)(a,a,e.origin)}(e,t,0,1,r)}(0,a.Ue)(),(0,a.Ue)(),new n.x((()=>l()))},38330:(e,t,r)=>{r.d(t,{t:()=>n});var i=r(76200);async function n(e,t){const{data:r}=await(0,i.Z)(e,{responseType:"image",...t});return r}},60827:(e,t,r)=>{r.d(t,{fetch:()=>zr});var i=r(71277),n=r(16889),o=r(29303),a=r(21389),s=r(29134),l=r(7025),c=r(6644),d=r(32035),u=r(12400),h=r(41414),f=r(38461),m=r(25158),p=r(11186),v=r(6754),g=r(88396),_=r(92770),x=r(69618),T=r(27053),b=r(57516),y=r(32315),S=r(57661),w=r(30932);function E(e){if(null==e)return null;const t=null!=e.offset?e.offset:w.AG,r=null!=e.rotation?e.rotation:0,i=null!=e.scale?e.scale:w.hq,n=(0,a.al)(1,0,0,0,1,0,t[0],t[1],1),s=(0,a.al)(Math.cos(r),-Math.sin(r),0,Math.sin(r),Math.cos(r),0,0,0,1),l=(0,a.al)(i[0],0,0,0,i[1],0,0,0,1),c=(0,a.Ue)();return(0,o.Jp)(c,s,l),(0,o.Jp)(c,n,c),c}class A{constructor(){this.geometries=new Array,this.materials=new Array,this.textures=new Array}}class C{constructor(e,t,r){this.name=e,this.lodThreshold=t,this.pivotOffset=r,this.stageResources=new A,this.numberOfVertices=0}}var M=r(76200),O=r(14921),R=r(59896),I=r(10064),P=r(32718),N=r(59447),L=r(66978),H=r(49901),D=r(39406),B=r(38330),F=r(91526),U=r(68401),z=r(18722);function V(e){if(e.length<z.c8)return Array.from(e);if((0,z.kJ)(e))return Float64Array.from(e);if(!("BYTES_PER_ELEMENT"in e))return Array.from(e);switch(e.BYTES_PER_ELEMENT){case 1:return Uint8Array.from(e);case 2:return(0,z.Uc)(e)?Uint16Array.from(e):Int16Array.from(e);case 4:return Float32Array.from(e);default:return Float64Array.from(e)}}var G=r(27546),W=r(97731);class j{constructor(e,t,r){this.primitiveIndices=e,this._numIndexPerPrimitive=t,this.position=r,this._children=void 0,(0,W.hu)(e.length>=1),(0,W.hu)(3===r.size||4===r.size);const{data:i,size:n,indices:o}=r;(0,W.hu)(o.length%this._numIndexPerPrimitive==0),(0,W.hu)(o.length>=e.length*this._numIndexPerPrimitive);const a=e.length;let s=n*o[this._numIndexPerPrimitive*e[0]];q.clear(),q.push(s);const l=(0,u.al)(i[s],i[s+1],i[s+2]),c=(0,u.d9)(l);for(let d=0;d<a;++d){const t=this._numIndexPerPrimitive*e[d];for(let e=0;e<this._numIndexPerPrimitive;++e){s=n*o[t+e],q.push(s);let r=i[s];l[0]=Math.min(r,l[0]),c[0]=Math.max(r,c[0]),r=i[s+1],l[1]=Math.min(r,l[1]),c[1]=Math.max(r,c[1]),r=i[s+2],l[2]=Math.min(r,l[2]),c[2]=Math.max(r,c[2])}}this.bbMin=l,this.bbMax=c;const h=(0,d.o)((0,u.Ue)(),this.bbMin,this.bbMax,.5);this.radius=.5*Math.max(Math.max(c[0]-l[0],c[1]-l[1]),c[2]-l[2]);let f=this.radius*this.radius;for(let d=0;d<q.length;++d){s=q.at(d);const e=i[s]-h[0],t=i[s+1]-h[1],r=i[s+2]-h[2],n=e*e+t*t+r*r;if(n<=f)continue;const o=Math.sqrt(n),a=.5*(o-this.radius);this.radius=this.radius+a,f=this.radius*this.radius;const l=a/o;h[0]+=e*l,h[1]+=t*l,h[2]+=r*l}this.center=h,q.clear()}getChildren(){if(this._children||(0,d.a)(this.bbMin,this.bbMax)<=1)return this._children;const e=(0,d.o)((0,u.Ue)(),this.bbMin,this.bbMax,.5),t=this.primitiveIndices.length,r=new Uint8Array(t),i=new Array(8);for(let c=0;c<8;++c)i[c]=0;const{data:n,size:o,indices:a}=this.position;for(let c=0;c<t;++c){let t=0;const s=this._numIndexPerPrimitive*this.primitiveIndices[c];let l=o*a[s],d=n[l],u=n[l+1],h=n[l+2];for(let e=1;e<this._numIndexPerPrimitive;++e){l=o*a[s+e];const t=n[l],r=n[l+1],i=n[l+2];t<d&&(d=t),r<u&&(u=r),i<h&&(h=i)}d<e[0]&&(t|=1),u<e[1]&&(t|=2),h<e[2]&&(t|=4),r[c]=t,++i[t]}let s=0;for(let c=0;c<8;++c)i[c]>0&&++s;if(s<2)return;const l=new Array(8);for(let c=0;c<8;++c)l[c]=i[c]>0?new Uint32Array(i[c]):void 0;for(let c=0;c<8;++c)i[c]=0;for(let c=0;c<t;++c){const e=r[c];l[e][i[e]++]=this.primitiveIndices[c]}this._children=new Array;for(let c=0;c<8;++c)void 0!==l[c]&&this._children.push(new j(l[c],this._numIndexPerPrimitive,this.position));return this._children}static prune(){q.prune()}}const q=new G.Z({deallocator:null});var k=r(1395),J=r(79100),$=r(21530),Y=r(85981);r(51378);function X(e){return e?{p0:(0,u.d9)(e.p0),p1:(0,u.d9)(e.p1),p2:(0,u.d9)(e.p2)}:{p0:(0,u.Ue)(),p1:(0,u.Ue)(),p2:(0,u.Ue)()}}function Z(e,t,r){return(0,d.f)(K,t,e),(0,d.f)(Q,r,e),.5*(0,d.l)((0,d.b)(K,K,Q))}new $.x(Y.Ue),new $.x((()=>X()));const K=(0,u.Ue)(),Q=(0,u.Ue)();const ee=(0,u.Ue)(),te=(0,u.Ue)(),re=(0,u.Ue)(),ie=(0,u.Ue)();var ne=r(95439);class oe{constructor(e){this.channel=e,this.id=(0,ne.D)()}}var ae=r(4760);r(43411);(0,u.Ue)(),new Float32Array(6);class se extends k.c{constructor(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:J.U.Mesh,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:-1;super(),this.material=e,this.mapPositions=r,this.type=i,this.objectAndLayerIdColor=n,this.edgeIndicesLength=o,this.visible=!0,this._attributes=new Map,this._boundingInfo=null;for(const[a,s]of t)this._attributes.set(a,{...s,indices:(0,D.mi)(s.indices)}),a===ae.T.POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._attributes.get(a).indices.length:this.edgeIndicesLength)}instantiate(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=new se(e.material||this.material,[],this.mapPositions,this.type,this.objectAndLayerIdColor,this.edgeIndicesLength);return this._attributes.forEach(((e,r)=>{e.exclusive=!1,t._attributes.set(r,e)})),t._boundingInfo=this._boundingInfo,t.transformation=e.transformation||this.transformation,t}get attributes(){return this._attributes}getMutableAttribute(e){let t=this._attributes.get(e);return t&&!t.exclusive&&(t={...t,exclusive:!0,data:V(t.data)},this._attributes.set(e,t)),t}setAttributeData(e,t){const r=this._attributes.get(e);r&&this._attributes.set(e,{...r,exclusive:!0,data:t})}get indexCount(){const e=this._attributes.values().next().value.indices;return e?.length??0}get faceCount(){return this.indexCount/3}get boundingInfo(){return null==this._boundingInfo&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(e){return!!(this.type===J.U.Mesh?this._computeAttachmentOriginTriangles(e):this.type===J.U.Line?this._computeAttachmentOriginLines(e):this._computeAttachmentOriginPoints(e))&&(null!=this._transformation&&(0,d.h)(e,e,this._transformation),!0)}_computeAttachmentOriginTriangles(e){return function(e,t){if(!e)return!1;const{size:r,data:i,indices:n}=e;(0,d.s)(t,0,0,0),(0,d.s)(ie,0,0,0);let o=0,a=0;for(let s=0;s<n.length-2;s+=3){const e=n[s]*r,l=n[s+1]*r,c=n[s+2]*r;(0,d.s)(ee,i[e],i[e+1],i[e+2]),(0,d.s)(te,i[l],i[l+1],i[l+2]),(0,d.s)(re,i[c],i[c+1],i[c+2]);const u=Z(ee,te,re);u?((0,d.g)(ee,ee,te),(0,d.g)(ee,ee,re),(0,d.j)(ee,ee,1/3*u),(0,d.g)(t,t,ee),o+=u):((0,d.g)(ie,ie,ee),(0,d.g)(ie,ie,te),(0,d.g)(ie,ie,re),a+=3)}return(0!==a||0!==o)&&(0!==o?((0,d.j)(t,t,1/o),!0):0!==a&&((0,d.j)(t,ie,1/a),!0))}(this.attributes.get(ae.T.POSITION),e)}_computeAttachmentOriginLines(e){const t=this.attributes.get(ae.T.POSITION);return function(e,t,r){if(!e)return!1;(0,d.s)(r,0,0,0),(0,d.s)(ie,0,0,0);let i=0,n=0;const{size:o,data:a,indices:s}=e,l=s.length-1,c=l+(t?2:0);for(let u=0;u<c;u+=2){const e=u<l?u+1:0,t=s[u<l?u:l]*o,c=s[e]*o;ee[0]=a[t],ee[1]=a[t+1],ee[2]=a[t+2],te[0]=a[c],te[1]=a[c+1],te[2]=a[c+2],(0,d.j)(ee,(0,d.g)(ee,ee,te),.5);const h=(0,d.F)(ee,te);h>0?((0,d.g)(r,r,(0,d.j)(ee,ee,h)),i+=h):0===i&&((0,d.g)(ie,ie,ee),n++)}return 0!==i?((0,d.j)(r,r,1/i),!0):0!==n&&((0,d.j)(r,ie,1/n),!0)}(t,function(e,t){return!(!("isClosed"in e)||!e.isClosed)&&t.indices.length>2}(this.material.parameters,t),e)}_computeAttachmentOriginPoints(e){return function(e,t){if(!e)return!1;const{size:r,data:i,indices:n}=e;(0,d.s)(t,0,0,0);let o=-1,a=0;for(let s=0;s<n.length;s++){const e=n[s]*r;o!==e&&(t[0]+=i[e],t[1]+=i[e+1],t[2]+=i[e+2],a++),o=e}return a>1&&(0,d.j)(t,t,1/a),a>0}(this.attributes.get(ae.T.POSITION),e)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const e=this.attributes.get(ae.T.POSITION);if(!e||0===e.indices.length)return null;const t=this.type===J.U.Mesh?3:1;(0,W.hu)(e.indices.length%t==0,"Indexing error: "+e.indices.length+" not divisible by "+t);const r=(0,D.KF)(e.indices.length/t);return new j(r,t,e)}get transformation(){return this._transformation??l.Wd}set transformation(e){this._transformation=e&&e!==l.Wd?(0,l.d9)(e):null}addHighlight(){const e=new oe(U.V_.Highlight);return this.highlights=function(e,t){return null==e&&(e=[]),e.push(t),e}(this.highlights,e),e}removeHighlight(e){this.highlights=function(e,t){if(null==e)return null;const r=e.filter((e=>e!==t));return 0===r.length?null:r}(this.highlights,e)}}var le=r(93169),ce=r(91505),de=r(92026),ue=r(35995),he=r(5640),fe=r(65905);let me;var pe;!function(e){e[e.ETC1_RGB=0]="ETC1_RGB",e[e.ETC2_RGBA=1]="ETC2_RGBA",e[e.BC1_RGB=2]="BC1_RGB",e[e.BC3_RGBA=3]="BC3_RGBA",e[e.BC4_R=4]="BC4_R",e[e.BC5_RG=5]="BC5_RG",e[e.BC7_M6_RGB=6]="BC7_M6_RGB",e[e.BC7_M5_RGBA=7]="BC7_M5_RGBA",e[e.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",e[e.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",e[e.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",e[e.ATC_RGB=11]="ATC_RGB",e[e.ATC_RGBA=12]="ATC_RGBA",e[e.FXT1_RGB=17]="FXT1_RGB",e[e.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",e[e.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",e[e.ETC2_EAC_R11=20]="ETC2_EAC_R11",e[e.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",e[e.RGBA32=13]="RGBA32",e[e.RGB565=14]="RGB565",e[e.BGR565=15]="BGR565",e[e.RGBA4444=16]="RGBA4444"}(pe||(pe={}));var ve=r(8548),ge=r(57808),_e=r(3384);let xe=null,Te=null;async function be(){return null==Te&&(me??=(async()=>{const e=await r.e(1562).then(r.bind(r,61562)),t=await e.default({locateFile:e=>(0,fe.V)(`esri/libs/basisu/${e}`)});return t.initializeBasis(),t})(),Te=me,xe=await Te),Te}function ye(e,t,r,i,n){const o=(0,_e.RG)(t?ve.q_.COMPRESSED_RGBA8_ETC2_EAC:ve.q_.COMPRESSED_RGB8_ETC2),a=n&&e>1?(4**e-1)/(3*4**(e-1)):1;return Math.ceil(r*i*o*a)}function Se(e){return e.getNumImages()>=1&&!e.isUASTC()}function we(e){return e.getFaces()>=1&&e.isETC1S()}function Ee(e,t,r,i,n,o,a,s){const{compressedTextureETC:l,compressedTextureS3TC:c}=e.capabilities,[d,u]=l?i?[pe.ETC2_RGBA,ve.q_.COMPRESSED_RGBA8_ETC2_EAC]:[pe.ETC1_RGB,ve.q_.COMPRESSED_RGB8_ETC2]:c?i?[pe.BC3_RGBA,ve.q_.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[pe.BC1_RGB,ve.q_.COMPRESSED_RGB_S3TC_DXT1_EXT]:[pe.RGBA32,ve.VI.RGBA],h=t.hasMipmap?r:Math.min(1,r),f=[];for(let m=0;m<h;m++)f.push(new Uint8Array(a(m,d))),s(m,d,f[m]);return t.internalFormat=u,t.hasMipmap=f.length>1,t.samplingMode=t.hasMipmap?ve.cw.LINEAR_MIPMAP_LINEAR:ve.cw.LINEAR,t.width=n,t.height=o,new ge.x(e,t,{type:"compressed",levels:f})}const Ae=()=>P.Z.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil"),Ce=542327876,Me=131072,Oe=4;function Re(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}const Ie=Re("DXT1"),Pe=Re("DXT3"),Ne=Re("DXT5"),Le=31,He=0,De=1,Be=2,Fe=3,Ue=4,ze=7,Ve=20,Ge=21;function We(e,t,r){const i=function(e,t){const r=new Int32Array(e,0,Le);if(r[He]!==Ce)return Ae().error("Invalid magic number in DDS header"),null;if(!(r[Ve]&Oe))return Ae().error("Unsupported format, must contain a FourCC code"),null;const i=r[Ge];let n,o;switch(i){case Ie:n=8,o=ve.q_.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case Pe:n=16,o=ve.q_.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case Ne:n=16,o=ve.q_.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return Ae().error("Unsupported FourCC code:",function(e){return String.fromCharCode(255&e,e>>8&255,e>>16&255,e>>24&255)}(i)),null}let a=1,s=r[Ue],l=r[Fe];(3&s||3&l)&&(Ae().warn("Rounding up compressed texture size to nearest multiple of 4."),s=s+3&-4,l=l+3&-4);const c=s,d=l;let u,h;r[Be]&Me&&!1!==t&&(a=Math.max(1,r[ze]));let f=r[De]+4;const m=[];for(let p=0;p<a;++p)h=(s+3>>2)*(l+3>>2)*n,u=new Uint8Array(e,f,h),m.push(u),f+=h,s=Math.max(1,s>>1),l=Math.max(1,l>>1);return{textureData:{type:"compressed",levels:m},internalFormat:o,width:c,height:d}}(r,t.hasMipmap??!1);if(null==i)throw new Error("DDS texture data is null");const{textureData:n,internalFormat:o,width:a,height:s}=i;return t.samplingMode=n.levels.length>1?ve.cw.LINEAR_MIPMAP_LINEAR:ve.cw.LINEAR,t.hasMipmap=n.levels.length>1,t.internalFormat=o,t.width=a,t.height=s,new ge.x(e,t,n)}function je(e,t,r){if(e instanceof ImageData)return je(qe(e),t,r);const i=document.createElement("canvas");return i.width=t,i.height=r,i.getContext("2d").drawImage(e,0,0,i.width,i.height),i}function qe(e){const t=document.createElement("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");if(null==r)throw new I.Z("Failed to create 2d context from HTMLCanvasElement");return r.putImageData(e,0,0),t}var ke,Je=r(52311);class $e extends k.c{get parameters(){return this._parameters}constructor(e,t){super(),this._data=e,this.type=J.U.Texture,this._glTexture=null,this._loadingPromise=null,this._loadingController=null,this.events=new ce.Z,this._parameters={...Xe,...t},this._startPreload(e)}dispose(){this.unload(),this._data=this.frameUpdate=void 0}_startPreload(e){null!=e&&(e instanceof HTMLVideoElement?(this.frameUpdate=t=>this._frameUpdate(e,t),this._startPreloadVideoElement(e)):e instanceof HTMLImageElement&&this._startPreloadImageElement(e))}_startPreloadVideoElement(e){if(!((0,ue.jc)(e.src)||"auto"===e.preload&&e.crossOrigin)){e.preload="auto",e.crossOrigin="anonymous";const t=!e.paused;if(e.src=e.src,t&&e.autoplay){const t=()=>{e.removeEventListener("canplay",t),e.play()};e.addEventListener("canplay",t)}}}_startPreloadImageElement(e){(0,ue.HK)(e.src)||(0,ue.jc)(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}_createDescriptor(e){const t=new Je.X;return t.wrapMode=this._parameters.wrap??ve.e8.REPEAT,t.flipped=!this._parameters.noUnpackFlip,t.samplingMode=this._parameters.mipmap?ve.cw.LINEAR_MIPMAP_LINEAR:ve.cw.LINEAR,t.hasMipmap=!!this._parameters.mipmap,t.preMultiplyAlpha=!!this._parameters.preMultiplyAlpha,t.maxAnisotropy=this._parameters.maxAnisotropy??(this._parameters.mipmap?e.parameters.maxMaxAnisotropy:1),t}get glTexture(){return this._glTexture}get memoryEstimate(){return this._glTexture?.usedMemory||function(e,t){if(null==e)return 0;if((0,z.eP)(e)||(0,z.lq)(e))return t.encoding===U.Ti.KTX2_ENCODING?function(e,t){if(null==xe)return e.byteLength;const r=new xe.KTX2File(new Uint8Array(e)),i=we(r)?ye(r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),t):0;return r.close(),r.delete(),i}(e,!!t.mipmap):t.encoding===U.Ti.BASIS_ENCODING?function(e,t){if(null==xe)return e.byteLength;const r=new xe.BasisFile(new Uint8Array(e)),i=Se(r)?ye(r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),t):0;return r.close(),r.delete(),i}(e,!!t.mipmap):e.byteLength;const{width:r,height:i}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?Ye(e):t;return(t.mipmap?4/3:1)*r*i*(t.components||4)||0}(this._data,this._parameters)}load(e){if(this._glTexture)return this._glTexture;if(this._loadingPromise)return this._loadingPromise;const t=this._data;return null==t?(this._glTexture=new ge.x(e,this._createDescriptor(e),null),this._glTexture):(this._parameters.reloadable||(this._data=void 0),"string"==typeof t?this._loadFromURL(e,t):t instanceof Image?this._loadFromImageElement(e,t):t instanceof HTMLVideoElement?this._loadFromVideoElement(e,t):t instanceof ImageData||t instanceof HTMLCanvasElement?this._loadFromImage(e,t):((0,z.eP)(t)||(0,z.lq)(t))&&this._parameters.encoding===U.Ti.DDS_ENCODING?this._loadFromDDSData(e,t):((0,z.eP)(t)||(0,z.lq)(t))&&this._parameters.encoding===U.Ti.KTX2_ENCODING?this._loadFromKTX2(e,t):((0,z.eP)(t)||(0,z.lq)(t))&&this._parameters.encoding===U.Ti.BASIS_ENCODING?this._loadFromBasis(e,t):(0,z.lq)(t)?this._loadFromPixelData(e,t):(0,z.eP)(t)?this._loadFromPixelData(e,new Uint8Array(t)):null)}_frameUpdate(e,t){return null==this._glTexture||e.readyState<ke.HAVE_CURRENT_DATA||t===e.currentTime?t:(this._glTexture.setData(e),this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this._parameters.updateCallback&&this._parameters.updateCallback(),e.currentTime)}_loadFromDDSData(e,t){return this._glTexture=We(e,this._createDescriptor(e),t),this._glTexture}_loadFromKTX2(e,t){return this._loadAsync((()=>async function(e,t,r){null==xe&&(xe=await be());const i=new xe.KTX2File(new Uint8Array(r));if(!we(i))return null;i.startTranscoding();const n=Ee(e,t,i.getLevels(),i.getHasAlpha(),i.getWidth(),i.getHeight(),((e,t)=>i.getImageTranscodedSizeInBytes(e,0,0,t)),((e,t,r)=>i.transcodeImage(r,e,0,0,t,0,-1,-1)));return i.close(),i.delete(),n}(e,this._createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))}_loadFromBasis(e,t){return this._loadAsync((()=>async function(e,t,r){null==xe&&(xe=await be());const i=new xe.BasisFile(new Uint8Array(r));if(!Se(i))return null;i.startTranscoding();const n=Ee(e,t,i.getNumLevels(0),i.getHasAlpha(),i.getImageWidth(0,0),i.getImageHeight(0,0),((e,t)=>i.getImageTranscodedSizeInBytes(0,e,t)),((e,t,r)=>i.transcodeImage(r,0,e,t,0,0)));return i.close(),i.delete(),n}(e,this._createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))}_loadFromPixelData(e,t){(0,W.hu)(this._parameters.width>0&&this._parameters.height>0);const r=this._createDescriptor(e);return r.pixelFormat=1===this._parameters.components?ve.VI.LUMINANCE:3===this._parameters.components?ve.VI.RGB:ve.VI.RGBA,r.width=this._parameters.width??0,r.height=this._parameters.height??0,this._glTexture=new ge.x(e,r,t),this._glTexture}_loadFromURL(e,t){return this._loadAsync((async r=>{const i=await(0,B.t)(t,{signal:r});return(0,L.k_)(r),this._loadFromImage(e,i)}))}_loadFromImageElement(e,t){return t.complete?this._loadFromImage(e,t):this._loadAsync((async r=>{const i=await(0,he.fY)(t,t.src,!1,r);return(0,L.k_)(r),this._loadFromImage(e,i)}))}_loadFromVideoElement(e,t){return t.readyState>=ke.HAVE_CURRENT_DATA?this._loadFromImage(e,t):this._loadFromVideoElementAsync(e,t)}_loadFromVideoElementAsync(e,t){return this._loadAsync((r=>new Promise(((i,n)=>{const o=()=>{t.removeEventListener("loadeddata",a),t.removeEventListener("error",s),(0,de.hw)(l)},a=()=>{t.readyState>=ke.HAVE_CURRENT_DATA&&(o(),i(this._loadFromImage(e,t)))},s=e=>{o(),n(e||new I.Z("Failed to load video"))};t.addEventListener("loadeddata",a),t.addEventListener("error",s);const l=(0,L.fu)(r,(()=>s((0,L.zE)())))}))))}_loadFromImage(e,t){let r=t;if(!(r instanceof HTMLVideoElement)){const{maxTextureSize:t}=e.parameters;r=this._parameters.downsampleUncompressed?function(e,t){let r=e.width*e.height;if(r<4096)return e instanceof ImageData?qe(e):e;let i=e.width,n=e.height;do{i=Math.ceil(i/2),n=Math.ceil(n/2),r=i*n}while(r>1048576||null!=t&&(i>t||n>t));return je(e,i,n)}(r,t):function(e,t){const r=Math.max(e.width,e.height);if(r<=t)return e;const i=t/r;return je(e,Math.round(e.width*i),Math.round(e.height*i))}(r,t)}const i=Ye(r);this._parameters.width=i.width,this._parameters.height=i.height;const n=this._createDescriptor(e);return n.pixelFormat=3===this._parameters.components?ve.VI.RGB:ve.VI.RGBA,n.width=i.width,n.height=i.height,this._glTexture=new ge.x(e,n,r),this._glTexture}_loadAsync(e){const t=new AbortController;this._loadingController=t;const r=e(t.signal);this._loadingPromise=r;const i=()=>{this._loadingController===t&&(this._loadingController=null),this._loadingPromise===r&&(this._loadingPromise=null)};return r.then(i,i),r}unload(){if(this._glTexture=(0,de.M2)(this._glTexture),null!=this._loadingController){const e=this._loadingController;this._loadingController=null,this._loadingPromise=null,e.abort()}this.events.emit("unloaded")}}function Ye(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}!function(e){e[e.HAVE_NOTHING=0]="HAVE_NOTHING",e[e.HAVE_METADATA=1]="HAVE_METADATA",e[e.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",e[e.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",e[e.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA"}(ke||(ke={}));const Xe={wrap:{s:ve.e8.REPEAT,t:ve.e8.REPEAT},mipmap:!0,noUnpackFlip:!1,preMultiplyAlpha:!1,downsampleUncompressed:!1};var Ze=r(50951),Ke=r(55158),Qe=r(37081),et=r(16010),tt=r(96658),rt=r(41481),it=r(25278),nt=r(56529),ot=r(25920),at=r(36207);const st=(0,at.wK)(ve.zi.SRC_ALPHA,ve.zi.ONE,ve.zi.ONE_MINUS_SRC_ALPHA,ve.zi.ONE_MINUS_SRC_ALPHA),lt=(0,at.wK)(ve.zi.ONE,ve.zi.ZERO,ve.zi.ONE,ve.zi.ONE_MINUS_SRC_ALPHA);function ct(e){return e===ot.A.FrontFace?null:lt}const dt={factor:-1,units:-2};function ut(e){return e?dt:null}function ht(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:ve.wb.LESS;return e===ot.A.NONE||e===ot.A.FrontFace?t:ve.wb.LEQUAL}function ft(e){return e===ot.A.ColorAlpha?{buffers:[ve.VY.COLOR_ATTACHMENT0,ve.VY.COLOR_ATTACHMENT1]}:null}class mt{constructor(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.isVerticalRay=e,this.normalRequired=t}}const pt=(0,h.Ue)();function vt(e,t,r,i,n,o){if(!e.visible)return;const a=(0,d.z)(Rt,i,r),s=(e,t,r)=>{o(e,r,t,!1)},l=new mt(!1,t.options.normalRequired);if(e.boundingInfo){(0,W.hu)(e.type===J.U.Mesh);const i=t.tolerance;_t(e.boundingInfo,r,a,i,n,l,s)}else{const t=e.attributes.get(ae.T.POSITION),i=t.indices;Tt(r,a,0,i.length/3,i,t.data,t.stride,n,l,s)}}const gt=(0,u.Ue)();function _t(e,t,r,i,n,o,a){if(null==e)return;const s=function(e,t){return(0,d.s)(t,1/e[0],1/e[1],1/e[2])}(r,gt);if((0,h.op)(pt,e.bbMin),(0,h.Tn)(pt,e.bbMax),null!=n&&n.applyToAabb(pt),function(e,t,r,i){return function(e,t,r,i,n){const o=(e[0]-i-t[0])*r[0],a=(e[3]+i-t[0])*r[0];let s=Math.min(o,a),l=Math.max(o,a);const c=(e[1]-i-t[1])*r[1],d=(e[4]+i-t[1])*r[1];if(l=Math.min(l,Math.max(c,d)),l<0)return!1;if(s=Math.max(s,Math.min(c,d)),s>l)return!1;const u=(e[2]-i-t[2])*r[2],h=(e[5]+i-t[2])*r[2];return l=Math.min(l,Math.max(u,h)),!(l<0)&&(s=Math.max(s,Math.min(u,h)),!(s>l)&&s<n)}(e,t,r,i,1/0)}(pt,t,s,i)){const{primitiveIndices:s,position:l}=e,c=s?s.length:l.indices.length/3;if(c>Mt){const s=e.getChildren();if(void 0!==s){for(const e of s)_t(e,t,r,i,n,o,a);return}}!function(e,t,r,i,n,o,a,s,l,c,d){const u=e[0],h=e[1],f=e[2],m=t[0],p=t[1],v=t[2],{normalRequired:g}=c;for(let _=r;_<i;++_){const e=s[_],t=3*e,r=a*n[t];let i=o[r],c=o[r+1],x=o[r+2];const T=a*n[t+1];let b=o[T],y=o[T+1],S=o[T+2];const w=a*n[t+2];let E=o[w],A=o[w+1],C=o[w+2];null!=l&&([i,c,x]=l.applyToVertex(i,c,x,_),[b,y,S]=l.applyToVertex(b,y,S,_),[E,A,C]=l.applyToVertex(E,A,C,_));const M=b-i,O=y-c,R=S-x,I=E-i,P=A-c,N=C-x,L=p*N-P*v,H=v*I-N*m,D=m*P-I*p,B=M*L+O*H+R*D;if(Math.abs(B)<=Ot)continue;const F=u-i,U=h-c,z=f-x,V=F*L+U*H+z*D;if(B>0){if(V<0||V>B)continue}else if(V>0||V<B)continue;const G=U*R-O*z,W=z*M-R*F,j=F*O-M*U,q=m*G+p*W+v*j;if(B>0){if(q<0||V+q>B)continue}else if(q>0||V+q<B)continue;const k=(I*G+P*W+N*j)/B;k>=0&&d(k,e,g?wt(M,O,R,I,P,N,xt):null)}}(t,r,0,c,l.indices,l.data,l.stride,s,n,o,a)}}const xt=(0,u.Ue)();function Tt(e,t,r,i,n,o,a,s,l,c){const u=t,h=It,f=Math.abs(u[0]),m=Math.abs(u[1]),p=Math.abs(u[2]),v=f>=m?f>=p?0:2:m>=p?1:2,g=v,_=u[g]<0?2:1,x=(v+_)%3,T=(v+(3-_))%3,b=u[x]/u[g],y=u[T]/u[g],S=1/u[g],w=bt,E=yt,A=St,{normalRequired:C}=l;for(let M=r;M<i;++M){const t=3*M,r=a*n[t];(0,d.s)(h[0],o[r+0],o[r+1],o[r+2]);const i=a*n[t+1];(0,d.s)(h[1],o[i+0],o[i+1],o[i+2]);const l=a*n[t+2];(0,d.s)(h[2],o[l+0],o[l+1],o[l+2]),s&&((0,d.c)(h[0],s.applyToVertex(h[0][0],h[0][1],h[0][2],M)),(0,d.c)(h[1],s.applyToVertex(h[1][0],h[1][1],h[1][2],M)),(0,d.c)(h[2],s.applyToVertex(h[2][0],h[2][1],h[2][2],M))),(0,d.z)(w,h[0],e),(0,d.z)(E,h[1],e),(0,d.z)(A,h[2],e);const u=w[x]-b*w[g],f=w[T]-y*w[g],m=E[x]-b*E[g],p=E[T]-y*E[g],v=A[x]-b*A[g],_=A[T]-y*A[g],O=v*p-_*m,R=u*_-f*v,I=m*f-p*u;if((O<0||R<0||I<0)&&(O>0||R>0||I>0))continue;const P=O+R+I;if(0===P)continue;const N=O*(S*w[g])+R*(S*E[g])+I*(S*A[g]);if(N*Math.sign(P)<0)continue;const L=N/P;L>=0&&c(L,M,C?Et(h):null)}}const bt=(0,u.Ue)(),yt=(0,u.Ue)(),St=(0,u.Ue)();function wt(e,t,r,i,n,o,a){return(0,d.s)(At,e,t,r),(0,d.s)(Ct,i,n,o),(0,d.b)(a,At,Ct),(0,d.n)(a,a),a}function Et(e){return(0,d.z)(At,e[1],e[0]),(0,d.z)(Ct,e[2],e[0]),(0,d.b)(xt,At,Ct),(0,d.n)(xt,xt),xt}const At=(0,u.Ue)(),Ct=(0,u.Ue)();const Mt=1e3,Ot=1e-7,Rt=(0,u.Ue)(),It=[(0,u.Ue)(),(0,u.Ue)(),(0,u.Ue)()];var Pt;!function(e){e[e.INTEGRATED_MESH=0]="INTEGRATED_MESH",e[e.OPAQUE_TERRAIN=1]="OPAQUE_TERRAIN",e[e.OPAQUE_MATERIAL=2]="OPAQUE_MATERIAL",e[e.OPAQUE_NO_SSAO_DEPTH=3]="OPAQUE_NO_SSAO_DEPTH",e[e.TRANSPARENT_MATERIAL=4]="TRANSPARENT_MATERIAL",e[e.TRANSPARENT_NO_SSAO_DEPTH=5]="TRANSPARENT_NO_SSAO_DEPTH",e[e.TRANSPARENT_TERRAIN=6]="TRANSPARENT_TERRAIN",e[e.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL=7]="TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL",e[e.OCCLUDED_TERRAIN=8]="OCCLUDED_TERRAIN",e[e.OCCLUDER_MATERIAL=9]="OCCLUDER_MATERIAL",e[e.TRANSPARENT_OCCLUDER_MATERIAL=10]="TRANSPARENT_OCCLUDER_MATERIAL",e[e.OCCLUSION_PIXELS=11]="OCCLUSION_PIXELS",e[e.OPAQUE_ENVIRONMENT=12]="OPAQUE_ENVIRONMENT",e[e.TRANSPARENT_ENVIRONMENT=13]="TRANSPARENT_ENVIRONMENT",e[e.LASERLINES=14]="LASERLINES",e[e.LASERLINES_CONTRAST_CONTROL=15]="LASERLINES_CONTRAST_CONTROL",e[e.HUD_MATERIAL=16]="HUD_MATERIAL",e[e.LABEL_MATERIAL=17]="LABEL_MATERIAL",e[e.LINE_CALLOUTS=18]="LINE_CALLOUTS",e[e.LINE_CALLOUTS_HUD_DEPTH=19]="LINE_CALLOUTS_HUD_DEPTH",e[e.DRAPED_MATERIAL=20]="DRAPED_MATERIAL",e[e.DRAPED_WATER=21]="DRAPED_WATER",e[e.VIEWSHED=22]="VIEWSHED",e[e.VOXEL=23]="VOXEL",e[e.MAX_SLOTS=24]="MAX_SLOTS"}(Pt||(Pt={}));var Nt=r(23470),Lt=r(89414);const Ht=new class{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.offset=e,this.sphere=(0,Nt.c)(),this.tmpVertex=(0,u.Ue)()}applyToVertex(e,t,r){const i=this.objectTransform.transform,n=(0,d.s)(Dt,e,t,r),o=(0,d.h)(n,n,i),a=this.offset/(0,d.l)(o);(0,d.r)(o,o,o,a);const s=this.objectTransform.inverse;return(0,d.h)(this.tmpVertex,o,s),this.tmpVertex}applyToMinMax(e,t){const r=this.offset/(0,d.l)(e);(0,d.r)(e,e,e,r);const i=this.offset/(0,d.l)(t);(0,d.r)(t,t,t,i)}applyToAabb(e){const t=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*t,e[1]+=e[1]*t,e[2]+=e[2]*t;const r=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*r,e[4]+=e[4]*r,e[5]+=e[5]*r,e}applyToBoundingSphere(e){const t=(0,d.l)((0,Nt.g)(e)),r=this.offset/t;return(0,d.r)((0,Nt.g)(this.sphere),(0,Nt.g)(e),(0,Nt.g)(e),r),this.sphere[3]=e[3]+e[3]*this.offset/t,this.sphere}};new class{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.componentLocalOriginLength=0,this._totalOffset=0,this._offset=0,this._tmpVertex=(0,u.Ue)(),this._tmpMbs=(0,Nt.c)(),this._tmpObb=new Lt.Oo,this._resetOffset(e)}_resetOffset(e){this._offset=e,this._totalOffset=e}set offset(e){this._resetOffset(e)}get offset(){return this._offset}set componentOffset(e){this._totalOffset=this._offset+e}set localOrigin(e){this.componentLocalOriginLength=(0,d.l)(e)}applyToVertex(e,t,r){const i=(0,d.s)(Dt,e,t,r),n=(0,d.s)(Bt,e,t,r+this.componentLocalOriginLength),o=this._totalOffset/(0,d.l)(n);return(0,d.r)(this._tmpVertex,i,n,o),this._tmpVertex}applyToAabb(e){const t=this.componentLocalOriginLength,r=e[0],i=e[1],n=e[2]+t,o=e[3],a=e[4],s=e[5]+t,l=Math.abs(r),c=Math.abs(i),d=Math.abs(n),u=Math.abs(o),h=Math.abs(a),f=Math.abs(s),m=.5*(1+Math.sign(r*o))*Math.min(l,u),p=.5*(1+Math.sign(i*a))*Math.min(c,h),v=.5*(1+Math.sign(n*s))*Math.min(d,f),g=Math.max(l,u),_=Math.max(c,h),x=Math.max(d,f),T=Math.sqrt(m*m+p*p+v*v),b=Math.sign(l+r),y=Math.sign(c+i),S=Math.sign(d+n),w=Math.sign(u+o),E=Math.sign(h+a),A=Math.sign(f+s),C=this._totalOffset;if(T<C)return e[0]-=(1-b)*C,e[1]-=(1-y)*C,e[2]-=(1-S)*C,e[3]+=w*C,e[4]+=E*C,e[5]+=A*C,e;const M=C/Math.sqrt(g*g+_*_+x*x),O=C/T,R=O-M,I=-R;return e[0]+=r*(b*I+O),e[1]+=i*(y*I+O),e[2]+=n*(S*I+O),e[3]+=o*(w*R+M),e[4]+=a*(E*R+M),e[5]+=s*(A*R+M),e}applyToMbs(e){const t=(0,d.l)((0,Nt.g)(e)),r=this._totalOffset/t;return(0,d.r)((0,Nt.g)(this._tmpMbs),(0,Nt.g)(e),(0,Nt.g)(e),r),this._tmpMbs[3]=e[3]+e[3]*this._totalOffset/t,this._tmpMbs}applyToObb(e){return(0,Lt.gI)(e,this._totalOffset,this._totalOffset,Ze.JY.Global,this._tmpObb),this._tmpObb}};new class{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.offset=e,this.tmpVertex=(0,u.Ue)()}applyToVertex(e,t,r){const i=(0,d.s)(Dt,e,t,r),n=(0,d.g)(Bt,i,this.localOrigin),o=this.offset/(0,d.l)(n);return(0,d.r)(this.tmpVertex,i,n,o),this.tmpVertex}applyToAabb(e){const t=Ft,r=Ut,i=zt;for(let s=0;s<3;++s)t[s]=e[0+s]+this.localOrigin[s],r[s]=e[3+s]+this.localOrigin[s],i[s]=t[s];const n=this.applyToVertex(t[0],t[1],t[2]);for(let s=0;s<3;++s)e[s]=n[s],e[s+3]=n[s];const o=t=>{const r=this.applyToVertex(t[0],t[1],t[2]);for(let i=0;i<3;++i)e[i]=Math.min(e[i],r[i]),e[i+3]=Math.max(e[i+3],r[i])};for(let s=1;s<8;++s){for(let e=0;e<3;++e)i[e]=s&1<<e?r[e]:t[e];o(i)}let a=0;for(let s=0;s<3;++s)t[s]*r[s]<0&&(a|=1<<s);if(0!==a&&7!==a)for(let s=0;s<8;++s)if(!(a&s)){for(let e=0;e<3;++e)i[e]=a&1<<e?0:s&1<<e?t[e]:r[e];o(i)}for(let s=0;s<3;++s)e[s]-=this.localOrigin[s],e[s+3]-=this.localOrigin[s];return e}};const Dt=(0,u.Ue)(),Bt=(0,u.Ue)(),Ft=(0,u.Ue)(),Ut=(0,u.Ue)(),zt=(0,u.Ue)();function Vt(e,t,r){const{data:i,indices:n}=e,o=t.typedBuffer,a=t.typedBufferStride,s=n.length;r*=a;for(let l=0;l<s;++l){const e=2*n[l];o[r]=i[e],o[r+1]=i[e+1],r+=a}}function Gt(e,t,r,i){const{data:n,indices:o}=e,a=t.typedBuffer,s=t.typedBufferStride,l=o.length;if(r*=s,null==i||1===i)for(let c=0;c<l;++c){const e=3*o[c];a[r]=n[e],a[r+1]=n[e+1],a[r+2]=n[e+2],r+=s}else for(let c=0;c<l;++c){const e=3*o[c];for(let t=0;t<i;++t)a[r]=n[e],a[r+1]=n[e+1],a[r+2]=n[e+2],r+=s}}function Wt(e,t,r){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;const{data:n,indices:o}=e,a=t.typedBuffer,s=t.typedBufferStride,l=o.length;if(r*=s,1===i)for(let c=0;c<l;++c){const e=4*o[c];a[r]=n[e],a[r+1]=n[e+1],a[r+2]=n[e+2],a[r+3]=n[e+3],r+=s}else for(let c=0;c<l;++c){const e=4*o[c];for(let t=0;t<i;++t)a[r]=n[e],a[r+1]=n[e+1],a[r+2]=n[e+2],a[r+3]=n[e+3],r+=s}}function jt(e,t,r,i){let n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1;const o=t.typedBuffer,a=t.typedBufferStride;if(i*=a,1===n)for(let s=0;s<r;++s)o[i]=e[0],o[i+1]=e[1],o[i+2]=e[2],o[i+3]=e[3],i+=a;else for(let s=0;s<r;++s)for(let t=0;t<n;++t)o[i]=e[0],o[i+1]=e[1],o[i+2]=e[2],o[i+3]=e[3],i+=a}function qt(e,t,r,i,n,o){switch(e){case ae.T.POSITION:{(0,W.hu)(3===t.size);const i=n.getField(e,m.ct);(0,W.hu)(!!i,`No buffer view for ${e}`),i&&function(e,t,r,i){let n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1;if(!t)return void Gt(e,r,i,n);const{data:o,indices:a}=e,l=r.typedBuffer,c=r.typedBufferStride,d=a.length,u=t[0],h=t[1],f=t[2],m=t[4],p=t[5],v=t[6],g=t[8],_=t[9],x=t[10],T=t[12],b=t[13],y=t[14];i*=c;let S=0,w=0,E=0;const A=(0,s.lv)(t)?e=>{S=o[e]+T,w=o[e+1]+b,E=o[e+2]+y}:e=>{const t=o[e],r=o[e+1],i=o[e+2];S=u*t+m*r+g*i+T,w=h*t+p*r+_*i+b,E=f*t+v*r+x*i+y};if(1===n)for(let s=0;s<d;++s)A(3*a[s]),l[i]=S,l[i+1]=w,l[i+2]=E,i+=c;else for(let s=0;s<d;++s){A(3*a[s]);for(let e=0;e<n;++e)l[i]=S,l[i+1]=w,l[i+2]=E,i+=c}}(t,r,i,o);break}case ae.T.NORMAL:{(0,W.hu)(3===t.size);const r=n.getField(e,m.ct);(0,W.hu)(!!r,`No buffer view for ${e}`),r&&function(e,t,r,i){let n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1;if(!t)return void Gt(e,r,i,n);const{data:o,indices:a}=e,l=t,c=r.typedBuffer,d=r.typedBufferStride,u=a.length,h=l[0],f=l[1],m=l[2],p=l[4],v=l[5],g=l[6],_=l[8],x=l[9],T=l[10],b=!(0,s.pV)(l),y=1e-6,S=1-y;i*=d;let w=0,E=0,A=0;const C=(0,s.lv)(l)?e=>{w=o[e],E=o[e+1],A=o[e+2]}:e=>{const t=o[e],r=o[e+1],i=o[e+2];w=h*t+p*r+_*i,E=f*t+v*r+x*i,A=m*t+g*r+T*i};if(1===n)if(b)for(let s=0;s<u;++s){C(3*a[s]);const e=w*w+E*E+A*A;if(e<S&&e>y){const t=1/Math.sqrt(e);c[i]=w*t,c[i+1]=E*t,c[i+2]=A*t}else c[i]=w,c[i+1]=E,c[i+2]=A;i+=d}else for(let s=0;s<u;++s)C(3*a[s]),c[i]=w,c[i+1]=E,c[i+2]=A,i+=d;else for(let s=0;s<u;++s){if(C(3*a[s]),b){const e=w*w+E*E+A*A;if(e<S&&e>y){const t=1/Math.sqrt(e);w*=t,E*=t,A*=t}}for(let e=0;e<n;++e)c[i]=w,c[i+1]=E,c[i+2]=A,i+=d}}(t,i,r,o);break}case ae.T.NORMALCOMPRESSED:{(0,W.hu)(2===t.size);const r=n.getField(e,m.or);(0,W.hu)(!!r,`No buffer view for ${e}`),r&&Vt(t,r,o);break}case ae.T.UV0:{(0,W.hu)(2===t.size);const r=n.getField(e,m.Eu);(0,W.hu)(!!r,`No buffer view for ${e}`),r&&Vt(t,r,o);break}case ae.T.COLOR:case ae.T.SYMBOLCOLOR:{const r=n.getField(e,m.mc);(0,W.hu)(!!r,`No buffer view for ${e}`),(0,W.hu)(3===t.size||4===t.size),!r||3!==t.size&&4!==t.size||function(e,t,r,i){let n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1;const{data:o,indices:a}=e,s=r.typedBuffer,l=r.typedBufferStride,c=a.length;if(i*=l,t!==o.length||4!==t)if(1!==n)if(4!==t)for(let d=0;d<c;++d){const e=3*a[d];for(let t=0;t<n;++t)s[i]=o[e],s[i+1]=o[e+1],s[i+2]=o[e+2],s[i+3]=255,i+=l}else for(let d=0;d<c;++d){const e=4*a[d];for(let t=0;t<n;++t)s[i]=o[e],s[i+1]=o[e+1],s[i+2]=o[e+2],s[i+3]=o[e+3],i+=l}else{if(4===t){for(let e=0;e<c;++e){const t=4*a[e];s[i]=o[t],s[i+1]=o[t+1],s[i+2]=o[t+2],s[i+3]=o[t+3],i+=l}return}for(let e=0;e<c;++e){const t=3*a[e];s[i]=o[t],s[i+1]=o[t+1],s[i+2]=o[t+2],s[i+3]=255,i+=l}}else{s[i]=o[0],s[i+1]=o[1],s[i+2]=o[2],s[i+3]=o[3];const e=new Uint32Array(r.typedBuffer.buffer,r.start),t=l/4,a=e[i/=4];i+=t;const d=c*n;for(let r=1;r<d;++r)e[i]=a,i+=t}}(t,t.size,r,o);break}case ae.T.COLORFEATUREATTRIBUTE:{const r=n.getField(e,m.ly);(0,W.hu)(!!r,`No buffer view for ${e}`),(0,W.hu)(1===t.size),r&&1===t.size&&function(e,t,r){const{data:i,indices:n}=e,o=t.typedBuffer,a=t.typedBufferStride,s=n.length,l=i[0];r*=a;for(let c=0;c<s;++c)o[r]=l,r+=a}(t,r,o);break}case ae.T.TANGENT:{(0,W.hu)(4===t.size);const i=n.getField(e,m.ek);(0,W.hu)(!!i,`No buffer view for ${e}`),i&&function(e,t,r,i){let n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1;if(!t)return void Wt(e,r,i,n);const{data:o,indices:a}=e,l=t,c=r.typedBuffer,d=r.typedBufferStride,u=a.length,h=l[0],f=l[1],m=l[2],p=l[4],v=l[5],g=l[6],_=l[8],x=l[9],T=l[10],b=!(0,s.pV)(l),y=1e-6,S=1-y;if(i*=d,1===n)for(let s=0;s<u;++s){const e=4*a[s],t=o[e],r=o[e+1],n=o[e+2],l=o[e+3];let u=h*t+p*r+_*n,w=f*t+v*r+x*n,E=m*t+g*r+T*n;if(b){const e=u*u+w*w+E*E;if(e<S&&e>y){const t=1/Math.sqrt(e);u*=t,w*=t,E*=t}}c[i]=u,c[i+1]=w,c[i+2]=E,c[i+3]=l,i+=d}else for(let s=0;s<u;++s){const e=4*a[s],t=o[e],r=o[e+1],l=o[e+2],u=o[e+3];let w=h*t+p*r+_*l,E=f*t+v*r+x*l,A=m*t+g*r+T*l;if(b){const e=w*w+E*E+A*A;if(e<S&&e>y){const t=1/Math.sqrt(e);w*=t,E*=t,A*=t}}for(let o=0;o<n;++o)c[i]=w,c[i+1]=E,c[i+2]=A,c[i+3]=u,i+=d}}(t,r,i,o);break}case ae.T.PROFILERIGHT:case ae.T.PROFILEUP:case ae.T.PROFILEVERTEXANDNORMAL:case ae.T.FEATUREVALUE:{(0,W.hu)(4===t.size);const r=n.getField(e,m.ek);(0,W.hu)(!!r,`No buffer view for ${e}`),r&&Wt(t,r,o)}}}class kt{constructor(e){this.vertexBufferLayout=e}elementCount(e){return e.attributes.get(ae.T.POSITION).indices.length}write(e,t,r,i,n){!function(e,t,r,i,n,o){for(const a of t.fields.keys()){const t=e.attributes.get(a),s=t?.indices;if(t&&s)qt(a,t,r,i,n,o);else if(a===ae.T.OBJECTANDLAYERIDCOLOR&&null!=e.objectAndLayerIdColor){const t=e.attributes.get(ae.T.POSITION)?.indices;if(t){const r=t.length,i=n.getField(a,m.mc);jt(e.objectAndLayerIdColor,i,r,o)}}}}(r,this.vertexBufferLayout,e,t,i,n)}}var Jt=r(80026),$t=r(86361),Yt=r(60113),Xt=r(85380),Zt=r(26461),Kt=r(82144),Qt=r(31132),er=r(7566),tr=r(27627);ve.wb.LESS,ve.wb.ALWAYS;const rr={mask:255},ir={function:{func:ve.wb.ALWAYS,ref:U.hU.OutlineVisualElementMask,mask:U.hU.OutlineVisualElementMask},operation:{fail:ve.xS.KEEP,zFail:ve.xS.KEEP,zPass:ve.xS.ZERO}},nr={function:{func:ve.wb.ALWAYS,ref:U.hU.OutlineVisualElementMask,mask:U.hU.OutlineVisualElementMask},operation:{fail:ve.xS.KEEP,zFail:ve.xS.KEEP,zPass:ve.xS.REPLACE}};ve.wb.EQUAL,U.hU.OutlineVisualElementMask,U.hU.OutlineVisualElementMask,ve.xS.KEEP,ve.xS.KEEP,ve.xS.KEEP,ve.wb.NOTEQUAL,U.hU.OutlineVisualElementMask,U.hU.OutlineVisualElementMask,ve.xS.KEEP,ve.xS.KEEP,ve.xS.KEEP;const or=[1,1,.5],ar=[0,.6,.2],sr=[0,1,.2];var lr=r(65630);class cr extends Xt.d4{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=(0,u.nI)(or),this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=U.Vr.Back,this.isInstanced=!1,this.hasInstancedColor=!1,this.emissiveFactor=(0,u.al)(0,0,0),this.instancedDoublePrecision=!1,this.normalType=et.r.Attribute,this.receiveShadows=!0,this.receiveAmbientOcclusion=!0,this.castShadows=!0,this.shadowMappingEnabled=!1,this.ambient=(0,u.al)(.2,.2,.2),this.diffuse=(0,u.al)(.8,.8,.8),this.externalColor=(0,$t.al)(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=(0,u.Ue)(),this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.offsetTransparentBackfaces=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.modelTransformation=null,this.transparent=!1,this.writeDepth=!0,this.customDepthTest=U.Gv.Less,this.textureAlphaMode=U.JJ.Blend,this.textureAlphaCutoff=Zt.F,this.textureAlphaPremultiplied=!1,this.hasOccludees=!1,this.renderOccluded=nt.yD.Occlude,this.isDecoration=!1}}class dr extends Qt.A{initializeConfiguration(e,t){t.spherical=e.viewingMode===Ze.JY.Global,t.doublePrecisionRequiresObfuscation=e.rctx.driverTest.doublePrecisionRequiresObfuscation.result,t.textureCoordinateType=t.hasColorTexture||t.hasMetallicRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture||t.hasNormalTexture?Yt.N.Default:Yt.N.None,t.objectAndLayerIdColorInstanced=t.instanced}initializeProgram(e){return this._initializeProgram(e,dr.shader)}_initializeProgram(e,t){return new tr.$(e.rctx,t.get().build(this.configuration),er.i)}_makePipeline(e,t){const r=this.configuration,i=e===ot.A.NONE,n=e===ot.A.FrontFace;return(0,at.sm)({blending:r.output===Qe.H_.Color&&r.transparent?i?st:ct(e):null,culling:hr(r)?(0,at.zp)(r.cullFace):null,depthTest:{func:ht(e,ur(r.customDepthTest))},depthWrite:(i||n)&&r.writeDepth?at.LZ:null,drawBuffers:r.output===Qe.H_.Depth?{buffers:[ve.Xg.NONE]}:ft(e),colorWrite:at.BK,stencilWrite:r.hasOccludees?rr:null,stencilTest:r.hasOccludees?t?nr:ir:null,polygonOffset:i||n?null:ut(r.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._makePipeline(this.configuration.transparencyPassType,!0),this._makePipeline(this.configuration.transparencyPassType,!1)}getPipeline(e){return e?this._occludeePipelineState:super.getPipeline()}}function ur(e){return e===U.Gv.Lequal?ve.wb.LEQUAL:ve.wb.LESS}function hr(e){return e.cullFace!==U.Vr.None||!e.hasSlicePlane&&!e.transparent&&!e.doubleSidedMode}dr.shader=new Kt.J(lr.D,(()=>r.e(294).then(r.bind(r,40294))));var fr=r(27366),mr=r(33559),pr=r(81221),vr=r(99340);class gr extends pr.PO{}(0,fr._)([(0,mr.o)({constValue:!0})],gr.prototype,"hasSliceHighlight",void 0),(0,fr._)([(0,mr.o)({constValue:!1})],gr.prototype,"hasSliceInVertexProgram",void 0),(0,fr._)([(0,mr.o)({constValue:vr.P.Pass})],gr.prototype,"pbrTextureBindType",void 0);class _r extends gr{constructor(){super(...arguments),this.output=Qe.H_.Color,this.alphaDiscardMode=U.JJ.Opaque,this.doubleSidedMode=tt.q.None,this.pbrMode=rt.f7.Disabled,this.cullFace=U.Vr.None,this.transparencyPassType=ot.A.NONE,this.normalType=et.r.Attribute,this.textureCoordinateType=Yt.N.None,this.customDepthTest=U.Gv.Less,this.spherical=!1,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.multipassEnabled=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.objectAndLayerIdColorInstanced=!1,this.instancedDoublePrecision=!1,this.doublePrecisionRequiresObfuscation=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.cullAboveGround=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1}}(0,fr._)([(0,mr.o)({count:Qe.H_.COUNT})],_r.prototype,"output",void 0),(0,fr._)([(0,mr.o)({count:U.JJ.COUNT})],_r.prototype,"alphaDiscardMode",void 0),(0,fr._)([(0,mr.o)({count:tt.q.COUNT})],_r.prototype,"doubleSidedMode",void 0),(0,fr._)([(0,mr.o)({count:rt.f7.COUNT})],_r.prototype,"pbrMode",void 0),(0,fr._)([(0,mr.o)({count:U.Vr.COUNT})],_r.prototype,"cullFace",void 0),(0,fr._)([(0,mr.o)({count:ot.A.COUNT})],_r.prototype,"transparencyPassType",void 0),(0,fr._)([(0,mr.o)({count:et.r.COUNT})],_r.prototype,"normalType",void 0),(0,fr._)([(0,mr.o)({count:Yt.N.COUNT})],_r.prototype,"textureCoordinateType",void 0),(0,fr._)([(0,mr.o)({count:U.Gv.COUNT})],_r.prototype,"customDepthTest",void 0),(0,fr._)([(0,mr.o)()],_r.prototype,"spherical",void 0),(0,fr._)([(0,mr.o)()],_r.prototype,"hasVertexColors",void 0),(0,fr._)([(0,mr.o)()],_r.prototype,"hasSymbolColors",void 0),(0,fr._)([(0,mr.o)()],_r.prototype,"hasVerticalOffset",void 0),(0,fr._)([(0,mr.o)()],_r.prototype,"hasSlicePlane",void 0),(0,fr._)([(0,mr.o)()],_r.prototype,"hasSliceHighlight",void 0),(0,fr._)([(0,mr.o)()],_r.prototype,"hasColorTexture",void 0),(0,fr._)([(0,mr.o)()],_r.prototype,"hasMetallicRoughnessTexture",void 0),(0,fr._)([(0,mr.o)()],_r.prototype,"hasEmissionTexture",void 0),(0,fr._)([(0,mr.o)()],_r.prototype,"hasOcclusionTexture",void 0),(0,fr._)([(0,mr.o)()],_r.prototype,"hasNormalTexture",void 0),(0,fr._)([(0,mr.o)()],_r.prototype,"hasScreenSizePerspective",void 0),(0,fr._)([(0,mr.o)()],_r.prototype,"hasVertexTangents",void 0),(0,fr._)([(0,mr.o)()],_r.prototype,"hasOccludees",void 0),(0,fr._)([(0,mr.o)()],_r.prototype,"multipassEnabled",void 0),(0,fr._)([(0,mr.o)()],_r.prototype,"hasModelTransformation",void 0),(0,fr._)([(0,mr.o)()],_r.prototype,"offsetBackfaces",void 0),(0,fr._)([(0,mr.o)()],_r.prototype,"vvSize",void 0),(0,fr._)([(0,mr.o)()],_r.prototype,"vvColor",void 0),(0,fr._)([(0,mr.o)()],_r.prototype,"receiveShadows",void 0),(0,fr._)([(0,mr.o)()],_r.prototype,"receiveAmbientOcclusion",void 0),(0,fr._)([(0,mr.o)()],_r.prototype,"textureAlphaPremultiplied",void 0),(0,fr._)([(0,mr.o)()],_r.prototype,"instanced",void 0),(0,fr._)([(0,mr.o)()],_r.prototype,"instancedColor",void 0),(0,fr._)([(0,mr.o)()],_r.prototype,"objectAndLayerIdColorInstanced",void 0),(0,fr._)([(0,mr.o)()],_r.prototype,"instancedDoublePrecision",void 0),(0,fr._)([(0,mr.o)()],_r.prototype,"doublePrecisionRequiresObfuscation",void 0),(0,fr._)([(0,mr.o)()],_r.prototype,"writeDepth",void 0),(0,fr._)([(0,mr.o)()],_r.prototype,"transparent",void 0),(0,fr._)([(0,mr.o)()],_r.prototype,"enableOffset",void 0),(0,fr._)([(0,mr.o)()],_r.prototype,"cullAboveGround",void 0),(0,fr._)([(0,mr.o)()],_r.prototype,"snowCover",void 0),(0,fr._)([(0,mr.o)()],_r.prototype,"hasColorTextureTransform",void 0),(0,fr._)([(0,mr.o)()],_r.prototype,"hasEmissionTextureTransform",void 0),(0,fr._)([(0,mr.o)()],_r.prototype,"hasNormalTextureTransform",void 0),(0,fr._)([(0,mr.o)()],_r.prototype,"hasOcclusionTextureTransform",void 0),(0,fr._)([(0,mr.o)()],_r.prototype,"hasMetallicRoughnessTextureTransform",void 0),(0,fr._)([(0,mr.o)({constValue:!1})],_r.prototype,"occlusionPass",void 0),(0,fr._)([(0,mr.o)({constValue:!0})],_r.prototype,"hasVvInstancing",void 0),(0,fr._)([(0,mr.o)({constValue:!1})],_r.prototype,"useCustomDTRExponentForWater",void 0),(0,fr._)([(0,mr.o)({constValue:!1})],_r.prototype,"supportsTextureAtlas",void 0),(0,fr._)([(0,mr.o)({constValue:!0})],_r.prototype,"useFillLights",void 0);var xr=r(40563);class Tr extends dr{initializeConfiguration(e,t){super.initializeConfiguration(e,t),t.hasMetallicRoughnessTexture=!1,t.hasEmissionTexture=!1,t.hasOcclusionTexture=!1,t.hasNormalTexture=!1,t.hasModelTransformation=!1,t.normalType=et.r.Attribute,t.doubleSidedMode=tt.q.WindingOrder,t.hasVertexTangents=!1}initializeProgram(e){return this._initializeProgram(e,Tr.shader)}}Tr.shader=new Kt.J(xr.R,(()=>r.e(601).then(r.bind(r,50601))));class br extends nt.F5{constructor(e){super(e,Sr),this.supportsEdges=!0,this.produces=new Map([[Pt.OPAQUE_MATERIAL,e=>((0,Qe.Jb)(e)||(0,Qe.Kr)(e))&&!this.parameters.transparent],[Pt.TRANSPARENT_MATERIAL,e=>((0,Qe.Jb)(e)||(0,Qe.Kr)(e))&&this.parameters.transparent&&this.parameters.writeDepth],[Pt.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL,e=>((0,Qe.Jb)(e)||(0,Qe.Kr)(e))&&this.parameters.transparent&&!this.parameters.writeDepth]]),this._configuration=new _r,this._vertexBufferLayout=function(e){const t=(0,Ke.U$)().vec3f(ae.T.POSITION);return e.normalType===et.r.Compressed?t.vec2i16(ae.T.NORMALCOMPRESSED,{glNormalized:!0}):t.vec3f(ae.T.NORMAL),e.hasVertexTangents&&t.vec4f(ae.T.TANGENT),(e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId)&&t.vec2f(ae.T.UV0),e.hasVertexColors&&t.vec4u8(ae.T.COLOR),e.hasSymbolColors&&t.vec4u8(ae.T.SYMBOLCOLOR),(0,le.Z)("enable-feature:objectAndLayerId-rendering")&&t.vec4u8(ae.T.OBJECTANDLAYERIDCOLOR),t}(this.parameters)}isVisibleForOutput(e){return e!==Qe.H_.Shadow&&e!==Qe.H_.ShadowExcludeHighlight&&e!==Qe.H_.ShadowHighlight||this.parameters.castShadows}isVisible(){const e=this.parameters;if(!super.isVisible()||0===e.layerOpacity)return!1;const{hasInstancedColor:t,hasVertexColors:r,hasSymbolColors:i,vvColor:n}=e,o="replace"===e.colorMixMode,a=e.opacity>0,s=e.externalColor&&e.externalColor[3]>0,l=t||n||i;return r&&l?o||a:r?o?s:a:l?o||a:o?s:a}getConfiguration(e,t){return this._configuration.output=e,this._configuration.hasNormalTexture=!!this.parameters.normalTextureId,this._configuration.hasColorTexture=!!this.parameters.textureId,this._configuration.hasVertexTangents=this.parameters.hasVertexTangents,this._configuration.instanced=this.parameters.isInstanced,this._configuration.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.hasVerticalOffset=null!=this.parameters.verticalOffset,this._configuration.hasScreenSizePerspective=null!=this.parameters.screenSizePerspective,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasSliceHighlight=this.parameters.hasSliceHighlight,this._configuration.alphaDiscardMode=this.parameters.textureAlphaMode,this._configuration.normalType=this.parameters.normalType,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,null!=this.parameters.customDepthTest&&(this._configuration.customDepthTest=this.parameters.customDepthTest),this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.cullFace=this.parameters.hasSlicePlane?U.Vr.None:this.parameters.cullFace,this._configuration.multipassEnabled=t.multipassEnabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration.hasModelTransformation=null!=this.parameters.modelTransformation,e===Qe.H_.Color&&(this._configuration.hasVertexColors=this.parameters.hasVertexColors,this._configuration.hasSymbolColors=this.parameters.hasSymbolColors,this.parameters.treeRendering?this._configuration.doubleSidedMode=tt.q.WindingOrder:this._configuration.doubleSidedMode=this.parameters.doubleSided&&"normal"===this.parameters.doubleSidedType?tt.q.View:this.parameters.doubleSided&&"winding-order"===this.parameters.doubleSidedType?tt.q.WindingOrder:tt.q.None,this._configuration.instancedColor=this.parameters.hasInstancedColor,this._configuration.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this._configuration.receiveAmbientOcclusion=this.parameters.receiveAmbientOcclusion&&null!=t.ssao,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this._configuration.pbrMode=this.parameters.usePBR?this.parameters.isSchematic?rt.f7.Schematic:rt.f7.Normal:rt.f7.Disabled,this._configuration.hasMetallicRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this._configuration.hasEmissionTexture=!!this.parameters.emissiveTextureId,this._configuration.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this._configuration.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.enableOffset=t.camera.relativeElevation<5e5,this._configuration.snowCover=this.hasSnowCover(t),this._configuration.hasColorTextureTransform=!!this.parameters.colorTextureTransformMatrix,this._configuration.hasNormalTextureTransform=!!this.parameters.normalTextureTransformMatrix,this._configuration.hasEmissionTextureTransform=!!this.parameters.emissiveTextureTransformMatrix,this._configuration.hasOcclusionTextureTransform=!!this.parameters.occlusionTextureTransformMatrix,this._configuration.hasMetallicRoughnessTextureTransform=!!this.parameters.metallicRoughnessTextureTransformMatrix),this._configuration}hasSnowCover(e){return null!=e.weather&&e.weatherVisible&&"snowy"===e.weather.type&&"enabled"===e.weather.snowCover}intersect(e,t,r,i,n,o){if(null!=this.parameters.verticalOffset){const e=r.camera;(0,d.s)(Or,t[12],t[13],t[14]);let o=null;switch(r.viewingMode){case Ze.JY.Global:o=(0,d.n)(Cr,Or);break;case Ze.JY.Local:o=(0,d.c)(Cr,Ar)}let a=0;const s=(0,d.f)(Rr,Or,e.eye),l=(0,d.l)(s),c=(0,d.j)(s,s,1/l);let u=null;this.parameters.screenSizePerspective&&(u=(0,d.m)(o,c)),a+=(0,Jt.Hx)(e,l,this.parameters.verticalOffset,u??0,this.parameters.screenSizePerspective),(0,d.j)(o,o,a),(0,d.t)(Mr,o,r.transform.inverseRotation),i=(0,d.f)(wr,i,Mr),n=(0,d.f)(Er,n,Mr)}vt(e,r,i,n,function(e){return null!=e?(Ht.offset=e,Ht):null}(r.verticalOffset),o)}createGLMaterial(e){return new yr(e)}createBufferWriter(){return new kt(this._vertexBufferLayout)}}class yr extends it.F{constructor(e){super({...e,...e.material.parameters})}_updateShadowState(e){e.shadowMap.enabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:e.shadowMap.enabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:e.hasOccludees})}beginSlot(e){this._output===Qe.H_.Color&&(this._updateShadowState(e),this._updateOccludeeState(e));const t=this._material.parameters;this.updateTexture(t.textureId);const r=e.camera.viewInverseTransposeMatrix;return(0,d.s)(t.origin,r[3],r[7],r[11]),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(t.treeRendering?Tr:dr,e)}}const Sr=new class extends cr{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1}};const wr=(0,u.Ue)(),Er=(0,u.Ue)(),Ar=(0,u.al)(0,0,1),Cr=(0,u.Ue)(),Mr=(0,u.Ue)(),Or=(0,u.Ue)(),Rr=(0,u.Ue)(),Ir=()=>P.Z.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function Pr(e,t){const r=await async function(e,t){const r=t?.streamDataRequester;if(r)return async function(e,t,r){const i=await(0,O.q6)(t.request(e,"json",r));if(!0===i.ok)return i.value;(0,L.r9)(i.error),Nr(i.error.details.url)}(e,r,t);const i=await(0,O.q6)((0,M.Z)(e,t));if(!0===i.ok)return i.value.data;(0,L.r9)(i.error),Nr(i.error)}(e,t),i=await async function(e,t){const r=new Array;for(const o in e){const i=e[o],n=i.images[0].data;if(!n){Ir().warn("Externally referenced texture data is not yet supported");continue}const a=i.encoding+";base64,"+n,s="/textureDefinitions/"+o,l="rgba"===i.channels?i.alphaChannelUsage||"transparency":"none",c={noUnpackFlip:!0,wrap:{s:ve.e8.REPEAT,t:ve.e8.REPEAT},preMultiplyAlpha:Dr(l)!==U.JJ.Opaque},d=t?.disableTextures?Promise.resolve(null):(0,B.t)(a,t);r.push(d.then((e=>({refId:s,image:e,parameters:c,alphaChannelUsage:l}))))}const i=await Promise.all(r),n={};for(const o of i)n[o.refId]=o;return n}(r.textureDefinitions??{},t);let n=0;for(const o in i)if(i.hasOwnProperty(o)){const e=i[o];n+=e?.image?e.image.width*e.image.height*4:0}return{resource:r,textures:i,size:n+(0,R.Ul)(r)}}function Nr(e){throw new I.Z("",`Request for object resource failed: ${e}`)}function Lr(e){const t=e.params,r=t.topology;let i=!0;switch(t.vertexAttributes||(Ir().warn("Geometry must specify vertex attributes"),i=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const r in t.vertexAttributes){const t=e[r];t?.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(Ir().warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),i=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(Ir().warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),i=!1)):(Ir().warn(`Indexed geometry does not specify face indices for '${r}' attribute`),i=!1)}}else Ir().warn("Indexed geometries must specify faces"),i=!1;break}default:Ir().warn(`Unsupported topology '${r}'`),i=!1}e.params.material||(Ir().warn("Geometry requires material"),i=!1);const n=e.params.vertexAttributes;for(const o in n)n[o].values||(Ir().warn("Geometries with externally defined attributes are not yet supported"),i=!1);return i}function Hr(e){const t=(0,h.cS)();return e.forEach((e=>{const r=e.boundingInfo;null!=r&&((0,h.pp)(t,r.bbMin),(0,h.pp)(t,r.bbMax))})),t}function Dr(e){switch(e){case"mask":return U.JJ.Mask;case"maskAndTransparency":return U.JJ.MaskBlend;case"none":return U.JJ.Opaque;default:return U.JJ.Blend}}function Br(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const Fr=new H.G(1,2,"wosr");var Ur=r(68845);async function zr(e,t){const r=function(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null}:e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}((0,i.pJ)(e));if("wosr"===r.fileType){const e=await(t.cache?t.cache.loadWOSR(r.url,t):Pr(r.url,t)),{engineResources:i,referenceBoundingBox:n}=function(e,t){const r=new Array,i=new Array,n=new Array,o=new N.r,a=e.resource,s=H.G.parse(a.version||"1.0","wosr");Fr.validate(s);const l=a.model.name,c=a.model.geometries,d=a.materialDefinitions??{},h=e.textures;let f=0;const m=new Map;for(let p=0;p<c.length;p++){const e=c[p];if(!Lr(e))continue;const a=Br(e),s=e.params.vertexAttributes,l=[],v=t=>{if("PerAttributeArray"===e.params.topology)return null;const r=e.params.faces;for(const e in r)if(e===t)return r[e].values;return null},g=s[ae.T.POSITION],_=g.values.length/g.valuesPerElement;for(const t in s){const e=s[t],r=e.values,i=v(t)??(0,D.KF)(_);l.push([t,new F.a(r,i,e.valuesPerElement,!0)])}const x=a.texture,T=h&&h[x];if(T&&!m.has(x)){const{image:e,parameters:t}=T,r=new $e(e,t);i.push(r),m.set(x,r)}const b=m.get(x),y=b?b.id:void 0,S=a.material;let w=o.get(S,x);if(null==w){const e=d[S.substring(S.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const r=T&&T.alphaChannelUsage,i=e.transparency>0||"transparency"===r||"maskAndTransparency"===r,n=T?Dr(T.alphaChannelUsage):void 0,a={ambient:(0,u.nI)(e.diffuse),diffuse:(0,u.nI)(e.diffuse),opacity:1-(e.transparency||0),transparent:i,textureAlphaMode:n,textureAlphaCutoff:.33,textureId:y,initTextureTransparent:!0,doubleSided:!0,cullFace:U.Vr.None,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:T?.parameters.preMultiplyAlpha??!1};t?.materialParameters&&Object.assign(a,t.materialParameters),w=new br(a),o.set(S,x,w)}n.push(w);const E=new se(w,l);f+=l.find((e=>e[0]===ae.T.POSITION))?.[1]?.indices.length??0,r.push(E)}return{engineResources:[{name:l,stageResources:{textures:i,materials:n,geometries:r},pivotOffset:a.model.pivotOffset,numberOfVertices:f,lodThreshold:null}],referenceBoundingBox:Hr(r)}}(e,t);return{lods:i,referenceBoundingBox:n,isEsriSymbolResource:!1,isWosr:!0}}const a=await(t.cache?t.cache.loadGLTF(r.url,t,!!t.usePBR):(0,b.Q)(new T.C(t.streamDataRequester),r.url,t,t.usePBR)),w=a.model.meta?.ESRI_proxyEllipsoid,A=a.meta.isEsriSymbolResource&&null!=w&&"EsriRealisticTreesStyle"===a.meta.ESRI_webstyle;A&&!a.customMeta.esriTreeRendering&&(a.customMeta.esriTreeRendering=!0,function(e,t){for(let r=0;r<e.model.lods.length;++r){const i=e.model.lods[r];for(const n of i.parts){const i=n.attributes.normal;if(null==i)return;const o=n.attributes.position,a=o.count,c=(0,u.Ue)(),h=(0,u.Ue)(),f=(0,u.Ue)(),p=new Uint8Array(4*a),v=new Float64Array(3*a),g=(0,s.U_)((0,l.Ue)(),n.transform);let _=0,x=0;for(let s=0;s<a;s++){o.getVec(s,h),i.getVec(s,c),(0,d.h)(h,h,n.transform),(0,d.f)(f,h,t.center),(0,d.D)(f,f,t.radius);const a=f[2],l=(0,d.l)(f),u=Math.min(.45+.55*l*l,1);(0,d.D)(f,f,t.radius),null!==g&&(0,d.h)(f,f,g),(0,d.n)(f,f),r+1!==e.model.lods.length&&e.model.lods.length>1&&(0,d.o)(f,f,c,a>-1?.2:Math.min(-4*a-3.8,1)),v[_]=f[0],v[_+1]=f[1],v[_+2]=f[2],_+=3,p[x]=255*u,p[x+1]=255*u,p[x+2]=255*u,p[x+3]=255,x+=4}n.attributes.normal=new m.ct(v),n.attributes.color=new m.mc(p)}}}(a,w));const M=!!t.usePBR,O=a.meta.isEsriSymbolResource?{usePBR:M,isSchematic:!1,treeRendering:A,mrrFactors:[...sr]}:{usePBR:M,isSchematic:!1,treeRendering:!1,mrrFactors:[...or]},R={...t.materialParameters,treeRendering:A},{engineResources:I,referenceBoundingBox:P}=function(e,t,r,i){const a=e.model,s=new Array,l=new Map,T=new Map,b=a.lods.length,w=(0,h.cS)();return a.lods.forEach(((e,A)=>{const M=!0===i.skipHighLods&&(b>1&&0===A||b>3&&1===A)||!1===i.skipHighLods&&null!=i.singleLodIndex&&A!==i.singleLodIndex;if(M&&0!==A)return;const O=new C(e.name,e.lodThreshold,[0,0,0]);e.parts.forEach((e=>{const i=M?new br({}):function(e,t,r,i,n,o,a){const s=t.material+(t.attributes.normal?"_normal":"")+(t.attributes.color?"_color":"")+(t.attributes.texCoord0?"_texCoord0":"")+(t.attributes.tangent?"_tangent":""),l=e.materials.get(t.material),h=null!=t.attributes.texCoord0,f=null!=t.attributes.normal;if(null==l)return null;const m=function(e){switch(e){case"BLEND":return U.JJ.Blend;case"MASK":return U.JJ.Mask;case"OPAQUE":case null:case void 0:return U.JJ.Opaque}}(l.alphaMode);if(!o.has(s)){if(h){const t=function(t){let r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(null!=t&&!a.has(t)){const i=e.textures.get(t);if(null!=i){const e=i.data;a.set(t,new $e((0,S.$A)(e)?e.data:e,{...i.parameters,preMultiplyAlpha:!(0,S.$A)(e)&&r,encoding:(0,S.$A)(e)&&null!=e.encoding?e.encoding:void 0}))}}};t(l.textureColor,m!==U.JJ.Opaque),t(l.textureNormal),t(l.textureOcclusion),t(l.textureEmissive),t(l.textureMetallicRoughness)}const r=l.color[0]**(1/Ur.j),p=l.color[1]**(1/Ur.j),v=l.color[2]**(1/Ur.j),g=l.emissiveFactor[0]**(1/Ur.j),_=l.emissiveFactor[1]**(1/Ur.j),x=l.emissiveFactor[2]**(1/Ur.j),T=null!=l.textureColor&&h?a.get(l.textureColor):null,b=function(e){let{normalTexture:t,metallicRoughnessTexture:r,metallicFactor:i,roughnessFactor:n,emissiveTexture:o,emissiveFactor:a,occlusionTexture:s}=e;return null==t&&null==r&&null==o&&(null==a||(0,d.e)(a,u.AG))&&null==s&&(null==n||1===n)&&(null==i||1===i)}({normalTexture:l.textureNormal,metallicRoughnessTexture:l.textureMetallicRoughness,metallicFactor:l.metallicFactor,roughnessFactor:l.roughnessFactor,emissiveTexture:l.textureEmissive,emissiveFactor:l.emissiveFactor,occlusionTexture:l.textureOcclusion}),y=null!=l.normalTextureTransform?.scale?l.normalTextureTransform?.scale:c.hq;o.set(s,new br({...i,transparent:m===U.JJ.Blend,customDepthTest:U.Gv.Lequal,textureAlphaMode:m,textureAlphaCutoff:l.alphaCutoff,diffuse:[r,p,v],ambient:[r,p,v],opacity:l.opacity,doubleSided:l.doubleSided,doubleSidedType:"winding-order",cullFace:l.doubleSided?U.Vr.None:U.Vr.Back,hasVertexColors:!!t.attributes.color,hasVertexTangents:!!t.attributes.tangent,normalType:f?et.r.Attribute:et.r.ScreenDerivative,castShadows:!0,receiveShadows:l.receiveShadows,receiveAmbientOcclusion:l.receiveAmbientOcclustion,textureId:null!=T?T.id:void 0,colorMixMode:l.colorMixMode,normalTextureId:null!=l.textureNormal&&h?a.get(l.textureNormal).id:void 0,textureAlphaPremultiplied:null!=T&&!!T.parameters.preMultiplyAlpha,occlusionTextureId:null!=l.textureOcclusion&&h?a.get(l.textureOcclusion).id:void 0,emissiveTextureId:null!=l.textureEmissive&&h?a.get(l.textureEmissive).id:void 0,metallicRoughnessTextureId:null!=l.textureMetallicRoughness&&h?a.get(l.textureMetallicRoughness).id:void 0,emissiveFactor:[g,_,x],mrrFactors:b?[...ar]:[l.metallicFactor,l.roughnessFactor,i.mrrFactors[2]],isSchematic:b,colorTextureTransformMatrix:E(l.colorTextureTransform),normalTextureTransformMatrix:E(l.normalTextureTransform),scale:[y[0],y[1]],occlusionTextureTransformMatrix:E(l.occlusionTextureTransform),emissiveTextureTransformMatrix:E(l.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:E(l.metallicRoughnessTextureTransform),...n}))}const p=o.get(s);if(r.stageResources.materials.push(p),h){const e=e=>{null!=e&&r.stageResources.textures.push(a.get(e))};e(l.textureColor),e(l.textureNormal),e(l.textureOcclusion),e(l.textureEmissive),e(l.textureMetallicRoughness)}return p}(a,e,O,t,r,l,T),{geometry:s,vertexCount:b}=function(e,t){const r=e.attributes.position.count,i=(0,y.p)(e.indices||r,e.primitiveType),a=(0,f.xx)(3*r),{typedBuffer:s,typedBufferStride:l}=e.attributes.position;(0,p.a)(a,s,e.transform,3,l);const c=[[ae.T.POSITION,new F.a(a,i,3,!0)]];if(null!=e.attributes.normal){const t=(0,f.xx)(3*r),{typedBuffer:a,typedBufferStride:s}=e.attributes.normal;(0,o.XL)(Vr,e.transform),(0,p.t)(t,a,Vr,3,s),(0,n.oc)(Vr)&&(0,p.n)(t,t),c.push([ae.T.NORMAL,new F.a(t,i,3,!0)])}if(null!=e.attributes.tangent){const t=(0,f.xx)(4*r),{typedBuffer:a,typedBufferStride:s}=e.attributes.tangent;(0,o.xO)(Vr,e.transform),(0,v.t)(t,a,Vr,4,s),(0,n.oc)(Vr)&&(0,p.n)(t,t,4),c.push([ae.T.TANGENT,new F.a(t,i,4,!0)])}if(null!=e.attributes.texCoord0){const t=(0,f.xx)(2*r),{typedBuffer:n,typedBufferStride:o}=e.attributes.texCoord0;(0,g.n)(t,n,2,o),c.push([ae.T.UV0,new F.a(t,i,2,!0)])}const d=e.attributes.color;if(null!=d){const t=new Uint8Array(4*r);4===d.elementCount?d instanceof m.ek?(0,v.s)(t,d,255):d instanceof m.mc?(0,x.c)(t,d):d instanceof m.v6&&(0,v.s)(t,d,1/256):(t.fill(255),d instanceof m.ct?(0,p.s)(t,d.typedBuffer,255,4,d.typedBufferStride):e.attributes.color instanceof m.ne?(0,_.c)(t,d.typedBuffer,4,e.attributes.color.typedBufferStride):e.attributes.color instanceof m.mw&&(0,p.s)(t,d.typedBuffer,1/256,4,d.typedBufferStride)),c.push([ae.T.COLOR,new F.a(t,i,4,!0)])}return{geometry:new se(t,c),vertexCount:r}}(e,null!=i?i:new br({})),C=s.boundingInfo;null!=C&&0===A&&((0,h.pp)(w,C.bbMin),(0,h.pp)(w,C.bbMax)),null!=i&&(O.stageResources.geometries.push(s),O.numberOfVertices+=b)})),M||s.push(O)})),{engineResources:s,referenceBoundingBox:w}}(a,O,R,t.skipHighLods&&null==r.specifiedLodIndex?{skipHighLods:!0}:{skipHighLods:!1,singleLodIndex:r.specifiedLodIndex});return{lods:I,referenceBoundingBox:P,isEsriSymbolResource:a.meta.isEsriSymbolResource,isWosr:!1}}const Vr=(0,a.Ue)()},55158:(e,t,r)=>{r.d(t,{Gw:()=>c,U$:()=>l});var i=r(25158),n=r(48734),o=r(97731);class a{constructor(e,t){this.layout=e,this.buffer="number"==typeof t?new ArrayBuffer(t*e.stride):t;for(const r of e.fields.keys()){const t=e.fields.get(r);this[r]=new t.constructor(this.buffer,t.offset,this.stride)}}get stride(){return this.layout.stride}get count(){return this.buffer.byteLength/this.stride}get byteLength(){return this.buffer.byteLength}getField(e,t){const r=this[e];return r&&r.elementCount===t.ElementCount&&r.elementType===t.ElementType?r:null}slice(e,t){return new a(this.layout,this.buffer.slice(e*this.stride,t*this.stride))}copyFrom(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:e.count;const n=this.stride;if(n%4==0){const o=new Uint32Array(e.buffer,t*n,i*n/4);new Uint32Array(this.buffer,r*n,i*n/4).set(o)}else{const o=new Uint8Array(e.buffer,t*n,i*n);new Uint8Array(this.buffer,r*n,i*n).set(o)}return this}get usedMemory(){return this.byteLength}dispose(){}}class s{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this._stride=0,this._lastAligned=0,this._fields=new Map,e&&(this._stride=e.stride,e.fields.forEach((e=>this._fields.set(e[0],{...e[1],constructor:h(e[1].constructor)}))))}freeze(){return this}vec2f(e,t){return this._appendField(e,i.Eu,t),this}vec2f64(e,t){return this._appendField(e,i.q6,t),this}vec3f(e,t){return this._appendField(e,i.ct,t),this}vec3f64(e,t){return this._appendField(e,i.fP,t),this}vec4f(e,t){return this._appendField(e,i.ek,t),this}vec4f64(e,t){return this._appendField(e,i.Cd,t),this}mat3f(e,t){return this._appendField(e,i.gK,t),this}mat3f64(e,t){return this._appendField(e,i.ey,t),this}mat4f(e,t){return this._appendField(e,i.bj,t),this}mat4f64(e,t){return this._appendField(e,i.O1,t),this}vec4u8(e,t){return this._appendField(e,i.mc,t),this}f32(e,t){return this._appendField(e,i.ly,t),this}f64(e,t){return this._appendField(e,i.oS,t),this}u8(e,t){return this._appendField(e,i.D_,t),this}u16(e,t){return this._appendField(e,i.av,t),this}i8(e,t){return this._appendField(e,i.Hz,t),this}vec2i8(e,t){return this._appendField(e,i.Vs,t),this}vec2i16(e,t){return this._appendField(e,i.or,t),this}vec2u8(e,t){return this._appendField(e,i.xA,t),this}vec4u16(e,t){return this._appendField(e,i.v6,t),this}u32(e,t){return this._appendField(e,i.Nu,t),this}_appendField(e,t,r){if(this._fields.has(e))return void(0,o.hu)(!1,`${e} already added to vertex buffer layout`);const i=t.ElementCount*(0,n.n1)(t.ElementType),a=this._stride;this._stride+=i,this._fields.set(e,{size:i,constructor:t,offset:a,optional:r})}createBuffer(e){return new a(this,e)}createView(e){return new a(this,e)}clone(){const e=new s;return e._stride=this._stride,e._fields=new Map,this._fields.forEach(((t,r)=>e._fields.set(r,t))),e.BufferType=this.BufferType,e}get stride(){if(this._lastAligned!==this._fields.size){let e=1;this._fields.forEach((t=>e=Math.max(e,(0,n.n1)(t.constructor.ElementType)))),this._stride=Math.floor((this._stride+e-1)/e)*e,this._lastAligned=this._fields.size}return this._stride}get fields(){return this._fields}}function l(){return new s}class c{constructor(e){this.fields=new Array,e.fields.forEach(((e,t)=>{const r={...e,constructor:u(e.constructor)};this.fields.push([t,r])})),this.stride=e.stride}}const d=[i.ly,i.Eu,i.ct,i.ek,i.gK,i.bj,i.oS,i.q6,i.fP,i.Cd,i.ey,i.O1,i.D_,i.xA,i.ne,i.mc,i.av,i.TS,i.mw,i.v6,i.Nu,i.qt,i.G5,i.hu,i.Hz,i.Vs,i.P_,i.ir,i.o7,i.or,i.n1,i.zO,i.Jj,i.wA,i.PP,i.TN];function u(e){return`${e.ElementType}_${e.ElementCount}`}function h(e){return f.get(e)}const f=new Map;d.forEach((e=>f.set(u(e),e)))},22357:(e,t,r)=>{r.d(t,{Zu:()=>l,bA:()=>c,qj:()=>d});var i=r(37081),n=r(74058),o=r(82999),a=r(98634);function s(e){e.varyings.add("linearDepth","float")}function l(e){e.vertex.uniforms.add(new o.A("nearFar",((e,t)=>t.camera.nearFar)))}function c(e){e.vertex.code.add(a.H`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}function d(e,t){const{vertex:r}=e;switch(t.output){case i.H_.Color:if(t.receiveShadows)return s(e),void r.code.add(a.H`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);break;case i.H_.Shadow:case i.H_.ShadowHighlight:case i.H_.ShadowExcludeHighlight:case i.H_.ViewshedShadow:return e.include(n.up,t),s(e),l(e),c(e),void r.code.add(a.H`void forwardLinearDepth() {
linearDepth = calculateLinearDepth(nearFar, vPosition_view.z);
}`)}r.code.add(a.H`void forwardLinearDepth() {}`)}},83734:(e,t,r)=>{r.d(t,{w:()=>n});var i=r(98634);function n(e){e.vertex.code.add(i.H`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}},24967:(e,t,r)=>{r.d(t,{k:()=>o});var i=r(98634),n=r(4760);function o(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];e.attributes.add(n.T.POSITION,"vec2"),t&&e.varyings.add("uv","vec2"),e.vertex.code.add(i.H`
    void main(void) {
      gl_Position = vec4(position, 0.0, 1.0);
      ${t?i.H`uv = position * 0.5 + vec2(0.5);`:""}
    }
  `)}},33280:(e,t,r)=>{r.d(t,{f5:()=>c});var i=r(29134),n=r(7025),o=r(32035),a=r(12400),s=r(86471),l=(r(49450),r(98634));function c(e,t){d(e,t,new s.B("slicePlaneOrigin",((e,r)=>m(t,e,r))),new s.B("slicePlaneBasis1",((e,r)=>p(t,e,r,r.slicePlane?.basis1))),new s.B("slicePlaneBasis2",((e,r)=>p(t,e,r,r.slicePlane?.basis2))))}function d(e,t){if(!t.hasSlicePlane){const r=l.H`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;return t.hasSliceInVertexProgram&&e.vertex.code.add(r),void e.fragment.code.add(r)}for(var r=arguments.length,i=new Array(r>2?r-2:0),n=2;n<r;n++)i[n-2]=arguments[n];t.hasSliceInVertexProgram&&e.vertex.uniforms.add(...i),e.fragment.uniforms.add(...i);const o=l.H`struct SliceFactors {
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
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,a=l.H`vec4 applySliceHighlight(vec4 color, vec3 pos) {
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
}`,s=t.hasSliceHighlight?l.H`
        ${a}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `:l.H`#define highlightSlice(_color_, _pos_) (_color_)`;t.hasSliceInVertexProgram&&e.vertex.code.add(o),e.fragment.code.add(o),e.fragment.code.add(s)}function u(e,t,r){return e.instancedDoublePrecision?(0,o.s)(v,r.camera.viewInverseTransposeMatrix[3],r.camera.viewInverseTransposeMatrix[7],r.camera.viewInverseTransposeMatrix[11]):t.slicePlaneLocalOrigin}function h(e,t){return null!=e?(0,o.f)(g,t.origin,e):t.origin}function f(e,t,r){return e.hasSliceTranslatedView?null!=t?(0,i.Iu)(x,r.camera.viewMatrix,t):r.camera.viewMatrix:null}function m(e,t,r){if(null==r.slicePlane)return a.AG;const i=u(e,t,r),n=h(i,r.slicePlane),s=f(e,i,r);return null!=s?(0,o.h)(g,n,s):n}function p(e,t,r,i){if(null==i||null==r.slicePlane)return a.AG;const n=u(e,t,r),s=h(n,r.slicePlane),l=f(e,n,r);return null!=l?((0,o.g)(_,i,s),(0,o.h)(g,s,l),(0,o.h)(_,_,l),(0,o.f)(_,_,g)):i}const v=(0,a.Ue)(),g=(0,a.Ue)(),_=(0,a.Ue)(),x=(0,n.Ue)()},94951:(e,t,r)=>{r.d(t,{w:()=>o});var i=r(22357),n=r(98634);function o(e){(0,i.bA)(e),e.vertex.code.add(n.H`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`),e.vertex.code.add(n.H`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}},81221:(e,t,r)=>{r.d(t,{PO:()=>x,fQ:()=>b});var i=r(27366),n=r(29303),o=r(21389),a=r(7025),s=r(32035),l=r(12400),c=r(37081),d=r(27254),u=r(82552),h=r(86471),f=r(98634),m=r(35522),p=r(8654),v=r(33559),g=r(4760),_=r(43411);class x extends v.m{constructor(){super(...arguments),this.instancedDoublePrecision=!1,this.hasModelTransformation=!1}}(0,i._)([(0,v.o)()],x.prototype,"instancedDoublePrecision",void 0),(0,i._)([(0,v.o)()],x.prototype,"hasModelTransformation",void 0);const T=(0,o.Ue)();function b(e,t){const r=t.hasModelTransformation,i=t.instancedDoublePrecision;r&&(e.vertex.uniforms.add(new p.g("model",(e=>e.modelTransformation??a.Wd))),e.vertex.uniforms.add(new m.c("normalLocalOriginFromModel",(e=>((0,n.XL)(T,e.modelTransformation??a.Wd),T))))),t.instanced&&i&&(e.attributes.add(g.T.INSTANCEMODELORIGINHI,"vec3"),e.attributes.add(g.T.INSTANCEMODELORIGINLO,"vec3"),e.attributes.add(g.T.INSTANCEMODEL,"mat3"),e.attributes.add(g.T.INSTANCEMODELNORMAL,"mat3"));const o=e.vertex;i&&(o.include(d.$,t),o.uniforms.add(new h.B("viewOriginHi",((e,t)=>(0,_.U8)((0,s.s)(y,t.camera.viewInverseTransposeMatrix[3],t.camera.viewInverseTransposeMatrix[7],t.camera.viewInverseTransposeMatrix[11]),y))),new h.B("viewOriginLo",((e,t)=>(0,_.GB)((0,s.s)(y,t.camera.viewInverseTransposeMatrix[3],t.camera.viewInverseTransposeMatrix[7],t.camera.viewInverseTransposeMatrix[11]),y))))),o.code.add(f.H`
    vec3 getVertexInLocalOriginSpace() {
      return ${r?i?"(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz":"(model * localPosition()).xyz":i?"instanceModel * localPosition().xyz":"localPosition().xyz"};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${i?f.H`
          // Negated inputs are intentionally the first two arguments. The other way around the obfuscation in dpAdd() stopped
          // working for macOS 14+ and iOS 17+.
          // Issue: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(-instanceModelOriginHi, -instanceModelOriginLo, viewOriginHi, viewOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),o.code.add(f.H`
    vec3 dpNormal(vec4 _normal) {
      return normalize(${r?i?"normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)":"normalLocalOriginFromModel * _normal.xyz":i?"instanceModelNormal * _normal.xyz":"_normal.xyz"});
    }
    `),t.output===c.H_.Normal&&((0,u._8)(o),o.code.add(f.H`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${r?i?"vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)":"vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)":i?"vec4(instanceModelNormal * _normal.xyz, 1.0)":"_normal"}).xyz);
    }
    `)),t.hasVertexTangents&&o.code.add(f.H`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${r?i?"return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);":"return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);":i?"return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}
    }`)}const y=(0,l.Ue)()},52276:(e,t,r)=>{r.d(t,{f:()=>o});var i=r(98634),n=r(4760);function o(e){e.attributes.add(n.T.POSITION,"vec3"),e.vertex.code.add(i.H`vec3 positionModel() { return position; }`)}},50679:(e,t,r)=>{r.d(t,{R:()=>l});var i=r(77343),n=r(99339),o=r(98634),a=r(4760),s=r(80026);function l(e,t){t.hasSymbolColors?(e.include(i.A),e.attributes.add(a.T.SYMBOLCOLOR,"vec4"),e.varyings.add("colorMixMode","mediump float"),e.vertex.code.add(o.H`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(e.fragment.uniforms.add(new n._("colorMixMode",(e=>s.FZ[e.colorMixMode]))),e.vertex.code.add(o.H`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}},60113:(e,t,r)=>{r.d(t,{D:()=>s,N:()=>i});var i,n=r(41644),o=r(98634),a=r(4760);function s(e,t){switch(t.textureCoordinateType){case i.Default:return e.attributes.add(a.T.UV0,"vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add(o.H`void forwardTextureCoordinates() {
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
void forwardNormalizedVertexColor() {}`)}},85380:(e,t,r)=>{r.d(t,{Bb:()=>d,d4:()=>u});var i=r(41644),n=r(21389),o=(r(86361),r(16010)),a=r(74058),s=r(98634),l=r(82644),c=r(35522);function d(e,t){switch(t.normalType){case o.r.Attribute:case o.r.Compressed:e.include(o.O,t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add(new l.j("transformNormalGlobalFromModel",(e=>e.transformNormalGlobalFromModel)),new c.c("transformNormalViewFromGlobal",(e=>e.transformNormalViewFromGlobal))),e.vertex.code.add(s.H`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case o.r.Ground:e.include(a.up,t),e.varyings.add("vNormalWorld","vec3"),e.vertex.code.add(s.H`
        void forwardNormal() {
          vNormalWorld = ${t.spherical?s.H`normalize(vPositionWorldCameraRelative);`:s.H`vec3(0.0, 0.0, 1.0);`}
        }
        `);break;case o.r.ScreenDerivative:e.vertex.code.add(s.H`void forwardNormal() {}`);break;default:(0,i.Bg)(t.normalType);case o.r.COUNT:}}class u extends a.su{constructor(){super(...arguments),this.transformNormalViewFromGlobal=(0,n.Ue)()}}},74058:(e,t,r)=>{r.d(t,{su:()=>p,up:()=>m});var i=r(21389),n=r(7025),o=r(12400),a=r(52276),s=r(27254),l=r(86471),c=r(49450),d=r(98634),u=r(82644),h=r(35522),f=r(8654);function m(e,t){e.include(a.f);const r=e.vertex;r.include(s.$,t),e.varyings.add("vPositionWorldCameraRelative","vec3"),e.varyings.add("vPosition_view","vec3"),r.uniforms.add(new c.J("transformWorldFromViewTH",(e=>e.transformWorldFromViewTH)),new c.J("transformWorldFromViewTL",(e=>e.transformWorldFromViewTL)),new h.c("transformViewFromCameraRelativeRS",(e=>e.transformViewFromCameraRelativeRS)),new f.g("transformProjFromView",(e=>e.transformProjFromView)),new u.j("transformWorldFromModelRS",(e=>e.transformWorldFromModelRS)),new l.B("transformWorldFromModelTH",(e=>e.transformWorldFromModelTH)),new l.B("transformWorldFromModelTL",(e=>e.transformWorldFromModelTL))),r.code.add(d.H`vec3 positionWorldCameraRelative() {
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
}`)}class p extends d.K{constructor(){super(...arguments),this.transformWorldFromViewTH=(0,o.Ue)(),this.transformWorldFromViewTL=(0,o.Ue)(),this.transformViewFromCameraRelativeRS=(0,i.Ue)(),this.transformProjFromView=(0,n.Ue)()}}},27284:(e,t,r)=>{r.d(t,{i:()=>s});var i=r(41644),n=r(60113),o=r(98634);function a(e){e.fragment.code.add(o.H`vec4 textureAtlasLookup(sampler2D tex, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
return textureGrad(tex, uvAtlas, dUVdx, dUVdy);
}`)}function s(e,t){switch(e.include(n.D,t),t.textureCoordinateType){case n.N.Default:case n.N.Compressed:return void e.fragment.code.add(o.H`vec4 textureLookup(sampler2D tex, vec2 uv) {
return texture(tex, uv);
}`);case n.N.Atlas:return e.include(a),void e.fragment.code.add(o.H`vec4 textureLookup(sampler2D tex, vec2 uv) {
return textureAtlasLookup(tex, uv, vuvRegion);
}`);default:(0,i.Bg)(t.textureCoordinateType);case n.N.None:case n.N.COUNT:return}}},71410:(e,t,r)=>{r.d(t,{L:()=>m});var i=r(19093),n=r(86361),o=r(32035),a=r(12400),s=r(49450),l=r(98634);function c(e){e.vertex.code.add(l.H`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),e.vertex.code.add(l.H`vec3 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec3 params) {
return vec3(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z
);
}`),e.vertex.code.add(l.H`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),e.vertex.code.add(l.H`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),e.vertex.code.add(l.H`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),e.vertex.code.add(l.H`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function d(e){return(0,o.s)(u,e.parameters.divisor,e.parameters.offset,e.minScaleFactor)}const u=(0,a.Ue)();var h=r(82552),f=r(95276);function m(e,t){const r=e.vertex;t.hasVerticalOffset?(function(e){e.uniforms.add(new f.N("verticalOffset",((e,t)=>{const{minWorldLength:r,maxWorldLength:n,screenLength:o}=e.verticalOffset,a=Math.tan(.5*t.camera.fovY)/(.5*t.camera.fullViewport[3]),s=t.camera.pixelRatio||1;return(0,i.s)(p,o*s,a,r,n)})))}(r),t.hasScreenSizePerspective&&(e.include(c),function(e){e.uniforms.add(new s.J("screenSizePerspectiveAlignment",(e=>d(e.screenSizePerspectiveAlignment||e.screenSizePerspective))))}(r),(0,h.hY)(e.vertex,t)),r.code.add(l.H`
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
    `)):r.code.add(l.H`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}const p=(0,n.Ue)()},4944:(e,t,r)=>{r.d(t,{s:()=>w});var i=r(22357),n=r(37081),o=r(33280),a=r(94951),s=r(16010),l=r(98634),c=r(4760);function d(e,t){const r=t.output===n.H_.ObjectAndLayerIdColor,i=t.objectAndLayerIdColorInstanced;r&&(e.varyings.add("objectAndLayerIdColorVarying","vec4"),i?e.attributes.add(c.T.INSTANCEOBJECTANDLAYERIDCOLOR,"vec4"):e.attributes.add(c.T.OBJECTANDLAYERIDCOLOR,"vec4")),e.vertex.code.add(l.H`
     void forwardObjectAndLayerIdColor() {
      ${r?i?l.H`objectAndLayerIdColorVarying = instanceObjectAndLayerIdColor * 0.003921568627451;`:l.H`objectAndLayerIdColorVarying = objectAndLayerIdColor * 0.003921568627451;`:l.H``} }`),e.fragment.code.add(l.H`
      void outputObjectAndLayerIdColor() {
        ${r?l.H`fragColor = objectAndLayerIdColorVarying;`:l.H``} }`)}var u=r(60113),h=r(85380),f=r(24842);function m(e,t){switch(t.output){case n.H_.Shadow:case n.H_.ShadowHighlight:case n.H_.ShadowExcludeHighlight:case n.H_.ViewshedShadow:e.fragment.include(f.f),e.fragment.code.add(l.H`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
return depth + SLOPE_SCALE * m + BIAS;
}
void outputDepth(float _linearDepth) {
fragColor = floatToRgba4(_calculateFragDepth(_linearDepth));
}`)}}var p=r(86361),v=r(19253);const g=(0,p.al)(1,1,0,1),_=(0,p.al)(1,0,1,1);function x(e){e.fragment.uniforms.add(new v.A("depthTexture",((e,t)=>t.mainDepth))),e.fragment.constants.add("occludedHighlightFlag","vec4",g).add("unoccludedHighlightFlag","vec4",_),e.fragment.code.add(l.H`void outputHighlight() {
float sceneDepth = float(texelFetch(depthTexture, ivec2(gl_FragCoord.xy), 0).x);
if (gl_FragCoord.z > sceneDepth + 5e-7) {
fragColor = occludedHighlightFlag;
} else {
fragColor = unoccludedHighlightFlag;
}
}`)}var T=r(66472),b=r(65974),y=r(82552),S=r(68401);function w(e,t){const{vertex:r,fragment:c}=e,f=t.hasColorTexture&&t.alphaDiscardMode!==S.JJ.Opaque;switch(t.output){case n.H_.Depth:(0,y.Sv)(r,t),e.include(a.w,t),e.include(o.f5,t),e.include(u.D,t),f&&c.uniforms.add(new v.A("tex",(e=>e.texture))),r.code.add(l.H`void main(void) {
vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();
}`),e.include(b.z,t),c.code.add(l.H`
          void main(void) {
            discardBySlice(vpos);
            ${f?l.H`
                    vec4 texColor = texture(tex, ${t.hasColorTextureTransform?l.H`colorUV`:l.H`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
          }
        `);break;case n.H_.Shadow:case n.H_.ShadowHighlight:case n.H_.ShadowExcludeHighlight:case n.H_.ViewshedShadow:case n.H_.ObjectAndLayerIdColor:(0,y.Sv)(r,t),e.include(a.w,t),e.include(u.D,t),e.include(T.k,t),e.include(m,t),e.include(o.f5,t),e.include(d,t),(0,i.Zu)(e),e.varyings.add("depth","float"),f&&c.uniforms.add(new v.A("tex",(e=>e.texture))),r.code.add(l.H`void main(void) {
vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();
}`),e.include(b.z,t),c.code.add(l.H`
          void main(void) {
            discardBySlice(vpos);
            ${f?l.H`
                    vec4 texColor = texture(tex, ${t.hasColorTextureTransform?l.H`colorUV`:l.H`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            ${t.output===n.H_.ObjectAndLayerIdColor?l.H`outputObjectAndLayerIdColor();`:l.H`outputDepth(depth);`}
          }
        `);break;case n.H_.Normal:{(0,y.Sv)(r,t),e.include(a.w,t),e.include(s.O,t),e.include(h.Bb,t),e.include(u.D,t),e.include(T.k,t),f&&c.uniforms.add(new v.A("tex",(e=>e.texture))),t.normalType===s.r.ScreenDerivative&&e.varyings.add("vPositionView","vec3");const i=t.normalType===s.r.Attribute||t.normalType===s.r.Compressed;r.code.add(l.H`
          void main(void) {
            vpos = getVertexInLocalOriginSpace();

            ${i?l.H`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:l.H`
                  // Get vertex position in camera space for screen-space derivative normals
                  vPositionView = (view * vec4(vpos, 1.0)).xyz;
                `}
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            forwardTextureCoordinates();
          }
        `),e.include(o.f5,t),e.include(b.z,t),c.code.add(l.H`
          void main() {
            discardBySlice(vpos);
            ${f?l.H`
                    vec4 texColor = texture(tex, ${t.hasColorTextureTransform?l.H`colorUV`:l.H`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}

            ${t.normalType===s.r.ScreenDerivative?l.H`vec3 normal = screenDerivativeNormal(vPositionView);`:l.H`
                  vec3 normal = normalize(vNormalWorld);
                  if (gl_FrontFacing == false){
                    normal = -normal;
                  }`}
            fragColor = vec4(0.5 + 0.5 * normal, 1.0);
          }
        `);break}case n.H_.Highlight:(0,y.Sv)(r,t),e.include(a.w,t),e.include(u.D,t),e.include(T.k,t),f&&c.uniforms.add(new v.A("tex",(e=>e.texture))),r.code.add(l.H`void main(void) {
vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();
}`),e.include(o.f5,t),e.include(b.z,t),e.include(x,t),c.code.add(l.H`
          void main() {
            discardBySlice(vpos);
            ${f?l.H`
                    vec4 texColor = texture(tex, ${t.hasColorTextureTransform?l.H`colorUV`:l.H`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            outputHighlight();
          }
        `)}}},54943:(e,t,r)=>{r.d(t,{K:()=>s});var i=r(13611),n=r(6644),o=(r(78980),r(82999)),a=r(98634);function s(e){e.uniforms.add(new o.A("zProjectionMap",((e,t)=>function(e){const t=e.projectionMatrix;return(0,i.t8)(l,t[14],t[10])}(t.camera)))),e.code.add(a.H`float linearizeDepth(float depth) {
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
}`),t.textureCoordinateType!==o.N.None&&(e.include(a.i,t),r.uniforms.add(t.pbrTextureBindType===f.P.Pass?new h.A("normalTexture",(e=>e.textureNormal)):new u.R("normalTexture",(e=>e.textureNormal))),t.hasNormalTextureTransform&&(r.uniforms.add(new l.A("scale",(e=>e.scale??n.hq))),r.uniforms.add(new d.c("normalTextureTransformMatrix",(e=>e.normalTextureTransformMatrix??i.Wd)))),r.code.add(c.H`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;`),t.hasNormalTextureTransform&&r.code.add(c.H`mat3 normalTextureRotation = mat3(normalTextureTransformMatrix[0][0]/scale[0], normalTextureTransformMatrix[0][1]/scale[1], 0.0,
normalTextureTransformMatrix[1][0]/scale[0], normalTextureTransformMatrix[1][1]/scale[1], 0.0,
0.0, 0.0, 0.0 );
rawNormal.xy = (normalTextureRotation * vec3(rawNormal.x, rawNormal.y, 1.0)).xy;`),r.code.add(c.H`return tangentSpace * rawNormal;
}`))}},69521:(e,t,r)=>{r.d(t,{K:()=>G});var i,n,o,a=r(98634),s=r(19253),l=r(27366),c=r(16889),d=r(92026),u=r(94172),h=r(38499),f=r(49861),m=(r(93169),r(32718),r(84936),r(69912)),p=r(13611);(o=i||(i={}))[o.RED=0]="RED",o[o.RG=1]="RG",o[o.RGBA4=2]="RGBA4",o[o.RGBA=3]="RGBA",o[o.RGBA_MIPMAP=4]="RGBA_MIPMAP",o[o.R16F=5]="R16F",o[o.RGBA16F=6]="RGBA16F",function(e){e[e.DEPTH_STENCIL_TEXTURE=0]="DEPTH_STENCIL_TEXTURE",e[e.DEPTH16_BUFFER=1]="DEPTH16_BUFFER"}(n||(n={}));var v=r(7138),g=r(10064),_=r(68401);let x=class extends v.Z{constructor(e){super(e),this.view=null,this.consumes={required:[]},this.produces="composite-color",this._context=null,this._dirty=!0}initialize(){this.addHandles([(0,u.YP)((()=>this.view.ready),(e=>{e&&this.view._stage?.renderer.addRenderNode(this)}),u.nn)])}destroy(){this.view._stage?.renderer?.removeRenderNode(this)}render(){throw new g.Z("RenderNode:render-function-not-implemented","render() is not implemented.")}get camera(){return this.view.state.camera.clone()}get sunLight(){return this.bindParameters.lighting.legacy}get gl(){return this.view._stage.renderView.renderingContext.gl}acquireOutputFramebuffer(){const e=this._frameBuffer?.getTexture()?.descriptor,t=this.view._stage.renderer.fboCache.acquire(e?.width??640,e?.height??480,this.produces);return t.fbo?.initializeAndBind(),t}bindRenderTarget(){return this._frameBuffer?.fbo?.initializeAndBind(),this._frameBuffer}requestRender(e){e===_.Xx.UPDATE&&this.view._stage?.renderView.requestRender(e),this._dirty=!0}resetWebGLState(){this.renderingContext.resetState(),this.renderingContext.bindFramebuffer(this._frameBuffer?.fbo)}get fboCache(){return this.view._stage.renderer.fboCache}get bindParameters(){return this._context.bindParameters}get renderingContext(){return this.view._stage.renderView.renderingContext}updateAnimation(){return!!this._dirty&&(this._dirty=!1,!0)}doRender(e,t){this._context=t,this._frameBuffer=e.find((e=>{let{name:t}=e;return t===this.produces}));try{return this.render(e)}finally{this._frameBuffer=null}}};(0,l._)([(0,f.Cb)({constructOnly:!0})],x.prototype,"view",void 0),(0,l._)([(0,f.Cb)({constructOnly:!0})],x.prototype,"consumes",void 0),(0,l._)([(0,f.Cb)()],x.prototype,"produces",void 0),x=(0,l._)([(0,m.j)("esri.views.3d.webgl.RenderNode")],x);const T=x,b=5e5;var y=r(82144),S=r(31132),w=r(7566),E=r(27627),A=r(97727),C=r(36207);class M extends S.A{initializeProgram(e){return new E.$(e.rctx,M.shader.get().build(),w.i)}initializePipeline(){return(0,C.sm)({colorWrite:C.BK})}}M.shader=new y.J(A.S,(()=>r.e(1843).then(r.bind(r,81843))));var O=r(6644);class R extends a.K{constructor(){super(...arguments),this.projScale=1}}class I extends R{constructor(){super(...arguments),this.intensity=1}}class P extends a.K{}class N extends P{constructor(){super(...arguments),this.blurSize=(0,O.Ue)()}}var L=r(46516);class H extends S.A{initializeProgram(e){return new E.$(e.rctx,H.shader.get().build(),w.i)}initializePipeline(){return(0,C.sm)({colorWrite:C.BK})}}H.shader=new y.J(L.S,(()=>r.e(9956).then(r.bind(r,49956))));var D=r(8548),B=r(57808),F=r(52311);const U=2;let z=class extends T{constructor(e){super(e),this.consumes={required:["normals"]},this.produces="ssao",this.isEnabled=()=>!1,this._enableTime=(0,h.HA)(0),this._passParameters=new I,this._drawParameters=new N}initialize(){const e=Uint8Array.from(atob("eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM"),(e=>e.charCodeAt(0))),t=new F.X;t.wrapMode=D.e8.CLAMP_TO_EDGE,t.pixelFormat=D.VI.RGB,t.wrapMode=D.e8.REPEAT,t.hasMipmap=!0,t.width=32,t.height=32,this._passParameters.noiseTexture=new B.x(this.renderingContext,t,e),this._ssaoTechnique=this.techniques.acquire(H),this._blurTechnique=this.techniques.acquire(M),this.addHandles((0,u.YP)((()=>this.isEnabled()),(()=>this._enableTime=(0,h.HA)(0))))}destroy(){this._passParameters.noiseTexture=(0,d.M2)(this._passParameters.noiseTexture),this._blurTechnique.release(),this._ssaoTechnique.release()}render(e){const t=this.bindParameters,r=e.find((e=>{let{name:t}=e;return"normals"===t})),n=r?.getTexture(),o=r?.getTexture(D.Lu),a=this.fboCache,s=t.camera,l=s.fullViewport[2],d=s.fullViewport[3],u=Math.round(l/U),f=Math.round(d/U);if(!this._ssaoTechnique.compiled||!this._blurTechnique.compiled)return this._enableTime=(0,h.HA)(performance.now()),this.requestRender(),a.acquire(u,f,"ssao",i.RED);0===this._enableTime&&(this._enableTime=(0,h.HA)(performance.now()));const m=this.renderingContext,v=this.view.qualitySettings.fadeDuration,g=s.relativeElevation,x=(0,c.uZ)((b-g)/2e5,0,1),T=v>0?Math.min(v,performance.now()-this._enableTime)/v:1,y=T*x;this._passParameters.normalTexture=n,this._passParameters.depthTexture=o,this._passParameters.projScale=1/s.computeScreenPixelSizeAtDist(1),this._passParameters.intensity=4*V/(0,L.g)(s)**6*y;const S=a.acquire(l,d,"ssao input",i.RG);m.unbindTexture(S.fbo.colorTexture),m.bindFramebuffer(S.fbo),m.setViewport(0,0,l,d),m.bindTechnique(this._ssaoTechnique,t,this._passParameters,this._drawParameters),m.screen.draw();const w=a.acquire(u,f,"ssao blur",i.RED);m.unbindTexture(w.fbo.colorTexture),m.bindFramebuffer(w.fbo),this._drawParameters.colorTexture=S.getTexture(),(0,p.t8)(this._drawParameters.blurSize,0,U/d),m.bindTechnique(this._blurTechnique,t,this._passParameters,this._drawParameters),m.setViewport(0,0,u,f),m.screen.draw(),S.release();const E=a.acquire(u,f,"ssao",i.RED);return m.unbindTexture(E.fbo.colorTexture),m.bindFramebuffer(E.fbo),m.setViewport(0,0,l,d),m.setClearColor(1,1,1,0),m.clear(D.lk.COLOR_BUFFER_BIT),this._drawParameters.colorTexture=w.getTexture(),(0,p.t8)(this._drawParameters.blurSize,U/l,0),m.bindTechnique(this._blurTechnique,t,this._passParameters,this._drawParameters),m.setViewport(0,0,u,f),m.screen.draw(),m.setViewport4fv(s.fullViewport),w.release(),T<1&&this.requestRender(_.Xx.UPDATE),E}};(0,l._)([(0,f.Cb)()],z.prototype,"consumes",void 0),(0,l._)([(0,f.Cb)()],z.prototype,"produces",void 0),(0,l._)([(0,f.Cb)({constructOnly:!0})],z.prototype,"techniques",void 0),(0,l._)([(0,f.Cb)({constructOnly:!0})],z.prototype,"isEnabled",void 0),z=(0,l._)([(0,m.j)("esri.views.3d.webgl-engine.effects.ssao.SSAO")],z);const V=.5;function G(e,t){const r=e.fragment;t.receiveAmbientOcclusion?(r.uniforms.add(new s.A("ssaoTex",((e,t)=>t.ssao?.getTexture()))),r.constants.add("blurSizePixelsInverse","float",1/U),r.code.add(a.H`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):r.code.add(a.H`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}},80919:(e,t,r)=>{r.d(t,{XP:()=>A,PN:()=>w,sC:()=>E});var i=r(41644),n=r(32035),o=r(12400),a=r(19093),s=r(86361),l=r(41481),c=r(49450),d=r(95276),u=r(98634);function h(e,t){const r=e.fragment,i=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===i?(r.uniforms.add(new c.J("lightingAmbientSH0",((e,t)=>(0,n.s)(f,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0])))),r.code.add(u.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`)):2===i&&(r.uniforms.add(new c.J("lightingAmbientSH0",((e,t)=>(0,n.s)(f,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0]))),new d.N("lightingAmbientSH_R1",((e,t)=>(0,a.s)(m,t.lighting.sh.r[1],t.lighting.sh.r[2],t.lighting.sh.r[3],t.lighting.sh.r[4]))),new d.N("lightingAmbientSH_G1",((e,t)=>(0,a.s)(m,t.lighting.sh.g[1],t.lighting.sh.g[2],t.lighting.sh.g[3],t.lighting.sh.g[4]))),new d.N("lightingAmbientSH_B1",((e,t)=>(0,a.s)(m,t.lighting.sh.b[1],t.lighting.sh.b[2],t.lighting.sh.b[3],t.lighting.sh.b[4]))),new d.N("lightingAmbientSH_R2",((e,t)=>(0,a.s)(m,t.lighting.sh.r[5],t.lighting.sh.r[6],t.lighting.sh.r[7],t.lighting.sh.r[8]))),new d.N("lightingAmbientSH_G2",((e,t)=>(0,a.s)(m,t.lighting.sh.g[5],t.lighting.sh.g[6],t.lighting.sh.g[7],t.lighting.sh.g[8]))),new d.N("lightingAmbientSH_B2",((e,t)=>(0,a.s)(m,t.lighting.sh.b[5],t.lighting.sh.b[6],t.lighting.sh.b[7],t.lighting.sh.b[8])))),r.code.add(u.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`))}const f=(0,o.Ue)(),m=(0,s.Ue)();var p=r(69521),v=r(92395),g=r(2116),_=r(85586),x=r(61809),T=r(99340);class b extends x.x{constructor(e,t){super(e,"bool",T.P.Pass,((r,i,n)=>r.setUniform1b(e,t(i,n))))}}var y=r(58406);r(16889);(0,o.Ue)();const S=.4;(0,o.Ue)();function w(e){e.constants.add("ambientBoostFactor","float",S)}function E(e){e.uniforms.add(new y.p("lightingGlobalFactor",((e,t)=>t.lighting.globalFactor)))}function A(e,t){const r=e.fragment;switch(e.include(p.K,t),t.pbrMode!==l.f7.Disabled&&e.include(g.T,t),e.include(h,t),e.include(_.e),r.code.add(u.H`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${t.pbrMode===l.f7.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),w(r),E(r),(0,v.Pe)(r),r.code.add(u.H`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${t.spherical?u.H`normalize(vPosWorld)`:u.H`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),(0,v.F1)(r),r.code.add(u.H`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),t.pbrMode){case l.f7.Disabled:case l.f7.WaterOnIntegratedMesh:case l.f7.Water:e.include(v.kR),r.code.add(u.H`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case l.f7.Normal:case l.f7.Schematic:r.code.add(u.H`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),r.code.add(u.H`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),t.useFillLights?r.uniforms.add(new b("hasFillLights",((e,t)=>t.enableFillLights))):r.constants.add("hasFillLights","bool",!1),r.code.add(u.H`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0) ? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),r.uniforms.add(new y.p("lightingSpecularStrength",((e,t)=>t.lighting.mainLight.specularStrength)),new y.p("lightingEnvironmentStrength",((e,t)=>t.lighting.mainLight.environmentStrength))),r.code.add(u.H`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
float normalDirectionModifier = mix(1., min(mix(0.1, 2.0, (inputs.NdotNG + 1.) * 0.5), 1.0), clamp(inputs.roughness * 5.0, 0.0 , 1.0));
inputs.skyRadianceToSurface = (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.groundRadianceToSurface = 0.5 * GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),r.code.add(u.H`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = _emission == vec3(0.0) ? _emission : pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${t.pbrMode!==l.f7.Schematic||t.hasColorTexture?u.H`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`:u.H`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case l.f7.Simplified:case l.f7.TerrainWithWater:e.include(v.kR),r.code.add(u.H`const float roughnessTerrain = 0.5;
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
}`);break;default:(0,i.Bg)(t.pbrMode);case l.f7.COUNT:}}},92395:(e,t,r)=>{r.d(t,{F1:()=>a,Pe:()=>o,kR:()=>s});var i=r(49450),n=r(98634);function o(e){e.uniforms.add(new i.J("mainLightDirection",((e,t)=>t.lighting.mainLight.direction)))}function a(e){e.uniforms.add(new i.J("mainLightIntensity",((e,t)=>t.lighting.mainLight.intensity)))}function s(e){o(e.fragment),a(e.fragment),e.fragment.code.add(n.H`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, mainLightDirection), 0.0, 1.0);
return mainLightIntensity * ((1.0 - shadowing) * dotVal);
}`)}},15226:(e,t,r)=>{r.d(t,{l:()=>a});var i=r(54943),n=r(98634),o=r(19253);function a(e,t){if(!t.multipassEnabled)return;e.fragment.include(i.K),e.fragment.uniforms.add(new o.A("terrainDepthTexture",((e,t)=>t.multipassTerrain.depth?.attachment)));const r=t.occlusionPass;e.fragment.code.add(n.H`
   ${r?"bool":"void"} terrainDepthTest(float fragmentDepth) {
      float depth = texelFetch(terrainDepthTexture, ivec2(gl_FragCoord.xy), 0).r;
      float linearDepth = linearizeDepth(depth);
      ${r?n.H`return fragmentDepth < linearDepth && depth < 1.0;`:n.H`
          if(fragmentDepth ${t.cullAboveGround?">":"<="} linearDepth){
            discard;
          }`}
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
float NdotL;
float NdotV;
float NdotH;
float VdotH;
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
}`))}},41481:(e,t,r)=>{r.d(t,{f7:()=>i,jV:()=>u});var i,n=r(27284),o=r(86471),a=r(49450),s=r(98634),l=r(78050),c=r(19253),d=r(99340);r(25278);!function(e){e[e.Disabled=0]="Disabled",e[e.Normal=1]="Normal",e[e.Schematic=2]="Schematic",e[e.Water=3]="Water",e[e.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",e[e.Simplified=5]="Simplified",e[e.TerrainWithWater=6]="TerrainWithWater",e[e.COUNT=7]="COUNT"}(i||(i={}));function u(e,t){const r=e.fragment,u=t.hasMetallicRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture;if(t.pbrMode===i.Normal&&u&&e.include(n.i,t),t.pbrMode!==i.Schematic)if(t.pbrMode!==i.Disabled){if(t.pbrMode===i.Normal){r.code.add(s.H`vec3 mrr;
vec3 emission;
float occlusion;`);const e=t.pbrTextureBindType;t.hasMetallicRoughnessTexture&&(r.uniforms.add(e===d.P.Pass?new c.A("texMetallicRoughness",(e=>e.textureMetallicRoughness)):new l.R("texMetallicRoughness",(e=>e.textureMetallicRoughness))),r.code.add(s.H`void applyMetallnessAndRoughness(vec2 uv) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, uv).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),t.hasEmissionTexture&&(r.uniforms.add(e===d.P.Pass?new c.A("texEmission",(e=>e.textureEmissive)):new l.R("texEmission",(e=>e.textureEmissive))),r.code.add(s.H`void applyEmission(vec2 uv) {
emission *= textureLookup(texEmission, uv).rgb;
}`)),t.hasOcclusionTexture?(r.uniforms.add(e===d.P.Pass?new c.A("texOcclusion",(e=>e.textureOcclusion)):new l.R("texOcclusion",(e=>e.textureOcclusion))),r.code.add(s.H`void applyOcclusion(vec2 uv) {
occlusion *= textureLookup(texOcclusion, uv).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):r.code.add(s.H`float getBakedOcclusion() { return 1.0; }`),e===d.P.Pass?r.uniforms.add(new a.J("emissionFactor",(e=>e.emissiveFactor)),new a.J("mrrFactors",(e=>e.mrrFactors))):r.uniforms.add(new o.B("emissionFactor",(e=>e.emissiveFactor)),new o.B("mrrFactors",(e=>e.mrrFactors))),r.code.add(s.H`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;

      ${t.hasMetallicRoughnessTexture?s.H`applyMetallnessAndRoughness(${t.hasMetallicRoughnessTextureTransform?s.H`metallicRoughnessUV`:"vuv0"});`:""}

      ${t.hasEmissionTexture?s.H`applyEmission(${t.hasEmissiveTextureTransform?s.H`emissiveUV`:"vuv0"});`:""}

      ${t.hasOcclusionTexture?s.H`applyOcclusion(${t.hasOcclusionTextureTransform?s.H`occlusionUV`:"vuv0"});`:""}
    }
  `)}}else r.code.add(s.H`float getBakedOcclusion() { return 1.0; }`);else r.code.add(s.H`vec3 mrr = vec3(0.0, 0.6, 0.2);
vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}},85586:(e,t,r)=>{r.d(t,{e:()=>n});var i=r(98634);function n(e){e.vertex.code.add(i.H`const float PI = 3.141592653589793;`),e.fragment.code.add(i.H`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}},58335:(e,t,r)=>{r.d(t,{XE:()=>f,hb:()=>h});r(7025),r(12400);var i=r(24842),n=r(95276),o=r(99339),a=r(98634),s=r(61809),l=r(99340);class c extends s.x{constructor(e,t,r){super(e,"mat4",l.P.Draw,((r,i,n,o)=>r.setUniformMatrix4fv(e,t(i,n,o))),r)}}class d extends s.x{constructor(e,t,r){super(e,"mat4",l.P.Pass,((r,i,n)=>r.setUniformMatrix4fv(e,t(i,n))),r)}}var u=r(19253);function h(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new d("shadowMapMatrix",((e,t)=>t.shadowMap.getShadowMapMatrices(e.origin)),4)),m(e))}function f(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new c("shadowMapMatrix",((e,t)=>t.shadowMap.getShadowMapMatrices(e.origin)),4)),m(e))}function m(e){const t=e.fragment;t.include(i.f),t.uniforms.add(new u.A("shadowMap",((e,t)=>t.shadowMap.depthTexture)),new o._("numCascades",((e,t)=>t.shadowMap.numCascades)),new n.N("cascadeDistances",((e,t)=>t.shadowMap.cascadeDistances))),t.code.add(a.H`int chooseCascade(float depth, out mat4 mat) {
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
}`)}},79154:(e,t,r)=>{r.d(t,{DT:()=>u,NI:()=>l,R5:()=>c,av:()=>s,jF:()=>d});var i=r(21389),n=r(60113),o=r(98634),a=r(35522);function s(e,t){t.hasColorTextureTransform?(e.vertex.uniforms.add(new a.c("colorTextureTransformMatrix",(e=>e.colorTextureTransformMatrix??i.Wd))),e.varyings.add("colorUV","vec2"),e.vertex.code.add(o.H`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(o.H`void forwardColorUV(){}`)}function l(e,t){t.hasNormalTextureTransform&&t.textureCoordinateType!==n.N.None?(e.vertex.uniforms.add(new a.c("normalTextureTransformMatrix",(e=>e.normalTextureTransformMatrix??i.Wd))),e.varyings.add("normalUV","vec2"),e.vertex.code.add(o.H`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(o.H`void forwardNormalUV(){}`)}function c(e,t){t.hasEmissionTextureTransform&&t.textureCoordinateType!==n.N.None?(e.vertex.uniforms.add(new a.c("emissiveTextureTransformMatrix",(e=>e.emissiveTextureTransformMatrix??i.Wd))),e.varyings.add("emissiveUV","vec2"),e.vertex.code.add(o.H`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(o.H`void forwardEmissiveUV(){}`)}function d(e,t){t.hasOcclusionTextureTransform&&t.textureCoordinateType!==n.N.None?(e.vertex.uniforms.add(new a.c("occlusionTextureTransformMatrix",(e=>e.occlusionTextureTransformMatrix??i.Wd))),e.varyings.add("occlusionUV","vec2"),e.vertex.code.add(o.H`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(o.H`void forwardOcclusionUV(){}`)}function u(e,t){t.hasMetallicRoughnessTextureTransform&&t.textureCoordinateType!==n.N.None?(e.vertex.uniforms.add(new a.c("metallicRoughnessTextureTransformMatrix",(e=>e.metallicRoughnessTextureTransformMatrix??i.Wd))),e.varyings.add("metallicRoughnessUV","vec2"),e.vertex.code.add(o.H`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(o.H`void forwardMetallicRoughnessUV(){}`)}},66472:(e,t,r)=>{r.d(t,{k:()=>b});var i=r(49450),n=r(61809),o=r(99340);class a extends n.x{constructor(e,t,r){super(e,"vec4",o.P.Pass,((r,i,n)=>r.setUniform4fv(e,t(i,n))),r)}}class s extends n.x{constructor(e,t,r){super(e,"float",o.P.Pass,((r,i,n)=>r.setUniform1fv(e,t(i,n))),r)}}var l=r(98634),c=r(35522),d=r(4760),u=(r(93169),r(16889),r(29303),r(21389),r(29134),r(7025)),h=(r(32035),r(12400)),f=(r(49229),r(27366)),m=r(7138),p=r(49861),v=(r(32718),r(84936),r(69912));let g=class extends m.Z{constructor(){super(...arguments),this.SCENEVIEW_HITTEST_RETURN_INTERSECTOR=!1,this.DECONFLICTOR_SHOW_VISIBLE=!1,this.DECONFLICTOR_SHOW_INVISIBLE=!1,this.DECONFLICTOR_SHOW_GRID=!1,this.LABELS_SHOW_BORDER=!1,this.TEXT_SHOW_BASELINE=!1,this.TEXT_SHOW_BORDER=!1,this.OVERLAY_DRAW_DEBUG_TEXTURE=!1,this.OVERLAY_SHOW_CENTER=!1,this.SHOW_POI=!1,this.TESTS_DISABLE_OPTIMIZATIONS=!1,this.TESTS_DISABLE_FAST_UPDATES=!1,this.DRAW_MESH_GEOMETRY_NORMALS=!1,this.FEATURE_TILE_FETCH_SHOW_TILES=!1,this.FEATURE_TILE_TREE_SHOW_TILES=!1,this.TERRAIN_TILE_TREE_SHOW_TILES=!1,this.I3S_TREE_SHOW_TILES=!1,this.I3S_SHOW_MODIFICATIONS=!1,this.LOD_INSTANCE_RENDERER_DISABLE_UPDATES=!1,this.LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL=!1,this.EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES=!1,this.LINE_WIREFRAMES=!1}};(0,f._)([(0,p.Cb)()],g.prototype,"SCENEVIEW_HITTEST_RETURN_INTERSECTOR",void 0),(0,f._)([(0,p.Cb)()],g.prototype,"DECONFLICTOR_SHOW_VISIBLE",void 0),(0,f._)([(0,p.Cb)()],g.prototype,"DECONFLICTOR_SHOW_INVISIBLE",void 0),(0,f._)([(0,p.Cb)()],g.prototype,"DECONFLICTOR_SHOW_GRID",void 0),(0,f._)([(0,p.Cb)()],g.prototype,"LABELS_SHOW_BORDER",void 0),(0,f._)([(0,p.Cb)()],g.prototype,"TEXT_SHOW_BASELINE",void 0),(0,f._)([(0,p.Cb)()],g.prototype,"TEXT_SHOW_BORDER",void 0),(0,f._)([(0,p.Cb)()],g.prototype,"OVERLAY_DRAW_DEBUG_TEXTURE",void 0),(0,f._)([(0,p.Cb)()],g.prototype,"OVERLAY_SHOW_CENTER",void 0),(0,f._)([(0,p.Cb)()],g.prototype,"SHOW_POI",void 0),(0,f._)([(0,p.Cb)()],g.prototype,"TESTS_DISABLE_OPTIMIZATIONS",void 0),(0,f._)([(0,p.Cb)()],g.prototype,"TESTS_DISABLE_FAST_UPDATES",void 0),(0,f._)([(0,p.Cb)()],g.prototype,"DRAW_MESH_GEOMETRY_NORMALS",void 0),(0,f._)([(0,p.Cb)()],g.prototype,"FEATURE_TILE_FETCH_SHOW_TILES",void 0),(0,f._)([(0,p.Cb)()],g.prototype,"FEATURE_TILE_TREE_SHOW_TILES",void 0),(0,f._)([(0,p.Cb)()],g.prototype,"TERRAIN_TILE_TREE_SHOW_TILES",void 0),(0,f._)([(0,p.Cb)()],g.prototype,"I3S_TREE_SHOW_TILES",void 0),(0,f._)([(0,p.Cb)()],g.prototype,"I3S_SHOW_MODIFICATIONS",void 0),(0,f._)([(0,p.Cb)()],g.prototype,"LOD_INSTANCE_RENDERER_DISABLE_UPDATES",void 0),(0,f._)([(0,p.Cb)()],g.prototype,"LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL",void 0),(0,f._)([(0,p.Cb)()],g.prototype,"EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES",void 0),(0,f._)([(0,p.Cb)()],g.prototype,"LINE_WIREFRAMES",void 0),g=(0,f._)([(0,v.j)("esri.views.3d.support.debugFlags")],g);new g;var _,x;!function(e){e[e.Undefined=0]="Undefined",e[e.DefinedSize=1]="DefinedSize",e[e.DefinedScale=2]="DefinedScale"}(_||(_={})),function(e){e[e.Undefined=0]="Undefined",e[e.DefinedAngle=1]="DefinedAngle"}(x||(x={}));(0,u.Ue)(),(0,h.Ue)(),(0,u.Ue)();r(56529);const T=8;function b(e,t){const{vertex:r,attributes:n}=e;t.hasVvInstancing&&(t.vvSize||t.vvColor)&&n.add(d.T.INSTANCEFEATUREATTRIBUTE,"vec4"),t.vvSize?(r.uniforms.add(new i.J("vvSizeMinSize",(e=>e.vvSize.minSize))),r.uniforms.add(new i.J("vvSizeMaxSize",(e=>e.vvSize.maxSize))),r.uniforms.add(new i.J("vvSizeOffset",(e=>e.vvSize.offset))),r.uniforms.add(new i.J("vvSizeFactor",(e=>e.vvSize.factor))),r.uniforms.add(new c.c("vvSymbolRotationMatrix",(e=>e.vvSymbolRotationMatrix))),r.uniforms.add(new i.J("vvSymbolAnchor",(e=>e.vvSymbolAnchor))),r.code.add(l.H`vec3 vvScale(vec4 _featureAttribute) {
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
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),t.vvColor?(r.constants.add("vvColorNumber","int",T),r.uniforms.add(new s("vvColorValues",(e=>e.vvColor.values),T),new a("vvColorColors",(e=>e.vvColor.colors),T)),r.code.add(l.H`
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
    `)):r.code.add(l.H`vec4 vvColor() { return vec4(1.0); }`)}},26461:(e,t,r)=>{r.d(t,{F:()=>i,b:()=>n});const i=.1,n=.001},65974:(e,t,r)=>{r.d(t,{z:()=>l});var i=r(26461),n=r(98634);function o(e){e.fragment.code.add(n.H`
    #define discardOrAdjustAlpha(color) { if (color.a < ${n.H.float(i.b)}) { discard; } }
  `)}r(61809),r(99340);var a=r(58406),s=r(68401);function l(e,t){c(e,t,new a.p("textureAlphaCutoff",(e=>e.textureAlphaCutoff)))}function c(e,t,r){const i=e.fragment;switch(t.alphaDiscardMode!==s.JJ.Mask&&t.alphaDiscardMode!==s.JJ.MaskBlend||i.uniforms.add(r),t.alphaDiscardMode){case s.JJ.Blend:return e.include(o);case s.JJ.Opaque:i.code.add(n.H`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case s.JJ.Mask:i.code.add(n.H`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case s.JJ.MaskBlend:e.fragment.code.add(n.H`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}},96415:(e,t,r)=>{r.d(t,{GZ:()=>d});var i=r(13611),n=r(6644),o=r(19093),a=r(86361),s=r(82999),l=r(95276),c=r(98634);function d(e){e.fragment.uniforms.add(new l.N("projInfo",((e,t)=>function(e){const t=e.projectionMatrix;return 0===t[11]?(0,o.s)(u,2/(e.fullWidth*t[0]),2/(e.fullHeight*t[5]),(1+t[12])/t[0],(1+t[13])/t[5]):(0,o.s)(u,-2/(e.fullWidth*t[0]),-2/(e.fullHeight*t[5]),(1-t[8])/t[0],(1-t[9])/t[5])}(t.camera)))),e.fragment.uniforms.add(new s.A("zScale",((e,t)=>function(e){return 0===e.projectionMatrix[11]?(0,i.t8)(h,0,1):(0,i.t8)(h,1,0)}(t.camera)))),e.fragment.code.add(c.H`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`)}const u=(0,a.Ue)();const h=(0,n.Ue)()},98082:(e,t,r)=>{r.d(t,{y:()=>a});var i=r(49420),n=r(98634);function o(e){e.code.add(n.H`vec4 premultiplyAlpha(vec4 v) {
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
}`)}function a(e){e.include(o),e.code.add(n.H`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${n.H.int(i.a9.Multiply)}) {
        return allMixed;
      }
      if (mode == ${n.H.int(i.a9.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${n.H.int(i.a9.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${n.H.int(i.a9.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${n.H.int(i.a9.Replace)}) {
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
}`)}},82552:(e,t,r)=>{r.d(t,{hY:()=>f,Sv:()=>m,_8:()=>g});var i=r(29134),n=r(7025),o=r(32035),a=r(12400),s=r(86471),l=r(49450),c=(r(58406),r(61809)),d=r(99340);class u extends c.x{constructor(e,t){super(e,"mat4",d.P.Draw,((r,i,n)=>r.setUniformMatrix4fv(e,t(i,n))))}}var h=r(8654);function f(e,t){t.instancedDoublePrecision?e.constants.add("cameraPosition","vec3",a.AG):e.uniforms.add(new s.B("cameraPosition",((e,t)=>(0,o.s)(v,t.camera.viewInverseTransposeMatrix[3]-e.origin[0],t.camera.viewInverseTransposeMatrix[7]-e.origin[1],t.camera.viewInverseTransposeMatrix[11]-e.origin[2]))))}function m(e,t){if(!t.instancedDoublePrecision)return void e.uniforms.add(new h.g("proj",((e,t)=>t.camera.projectionMatrix)),new u("view",((e,t)=>(0,i.Iu)(p,t.camera.viewMatrix,e.origin))),new s.B("localOrigin",(e=>e.origin)));const r=e=>(0,o.s)(v,e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]);e.uniforms.add(new h.g("proj",((e,t)=>t.camera.projectionMatrix)),new h.g("view",((e,t)=>(0,i.Iu)(p,t.camera.viewMatrix,r(t)))),new l.J("localOrigin",((e,t)=>r(t))))}const p=(0,n.Ue)(),v=(0,a.Ue)();function g(e){e.uniforms.add(new h.g("viewNormal",((e,t)=>t.camera.viewInverseTransposeMatrix)))}},22527:(e,t,r)=>{r.d(t,{q:()=>o});var i=r(61809),n=r(99340);class o extends i.x{constructor(e,t){super(e,"vec2",n.P.Draw,((r,i,n,o)=>r.setUniform2fv(e,t(i,n,o))))}}},82999:(e,t,r)=>{r.d(t,{A:()=>o});var i=r(61809),n=r(99340);class o extends i.x{constructor(e,t){super(e,"vec2",n.P.Pass,((r,i,n)=>r.setUniform2fv(e,t(i,n))))}}},95276:(e,t,r)=>{r.d(t,{N:()=>o});var i=r(61809),n=r(99340);class o extends i.x{constructor(e,t){super(e,"vec4",n.P.Pass,((r,i,n)=>r.setUniform4fv(e,t(i,n))))}}},99339:(e,t,r)=>{r.d(t,{_:()=>o});var i=r(61809),n=r(99340);class o extends i.x{constructor(e,t){super(e,"int",n.P.Pass,((r,i,n)=>r.setUniform1i(e,t(i,n))))}}},64201:(e,t,r)=>{r.d(t,{kG:()=>l});var i=r(10064),n=(r(93169),r(32718)),o=r(99340),a=r(97731);class s{constructor(){this._includedModules=new Map}include(e,t){this._includedModules.has(e)?this._includedModules.get(e):(this._includedModules.set(e,t),e(this.builder,t))}}class l extends s{constructor(){super(...arguments),this.vertex=new u,this.fragment=new u,this.attributes=new h,this.varyings=new f,this.extensions=new m,this.constants=new v,this.outputs=new p}get fragmentUniforms(){return this.fragment.uniforms.entries}get builder(){return this}generate(e){const t=this.extensions.generateSource(e),r=this.attributes.generateSource(e),i=this.varyings.generateSource(e),n="vertex"===e?this.vertex:this.fragment,o=n.uniforms.generateSource(),a=n.code.generateSource(),s="vertex"===e?_:g,l=this.constants.generateSource().concat(n.constants.generateSource()),c=this.outputs.generateSource(e);return`#version 300 es\n${t.join("\n")}\n\n${s}\n\n${l.join("\n")}\n\n${o.join("\n")}\n\n${r.join("\n")}\n\n${i.join("\n")}\n\n${c.join("\n")}\n\n${a.join("\n")}`}generateBindPass(e){const t=new Map;this.vertex.uniforms.entries.forEach((e=>{const r=e.bind[o.P.Pass];r&&t.set(e.name,r)})),this.fragment.uniforms.entries.forEach((e=>{const r=e.bind[o.P.Pass];r&&t.set(e.name,r)}));const r=Array.from(t.values()),i=r.length;return(t,n)=>{for(let o=0;o<i;++o)r[o](e,t,n)}}generateBindDraw(e){const t=new Map;this.vertex.uniforms.entries.forEach((e=>{const r=e.bind[o.P.Draw];r&&t.set(e.name,r)})),this.fragment.uniforms.entries.forEach((e=>{const r=e.bind[o.P.Draw];r&&t.set(e.name,r)}));const r=Array.from(t.values()),i=r.length;return(t,n,o)=>{for(let a=0;a<i;++a)r[a](e,t,n,o)}}}class c{constructor(e){this._stage=e,this._entries=new Map}add(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];for(const i of t)this._add(i);return this._stage}get(e){return this._entries.get(e)}_add(e){if(null!=e){if(this._entries.has(e.name)&&!this._entries.get(e.name).equals(e))throw new i.Z(`Duplicate uniform name ${e.name} for different uniform type`);this._entries.set(e.name,e)}else n.Z.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder").error(`Trying to add null Uniform from ${(new Error).stack}.`)}generateSource(){return Array.from(this._entries.values()).map((e=>null!=e.arraySize?`uniform ${e.type} ${e.name}[${e.arraySize}];`:`uniform ${e.type} ${e.name};`))}get entries(){return Array.from(this._entries.values())}}class d{constructor(e){this._stage=e,this._entries=new Array}add(e){return this._entries.push(e),this._stage}generateSource(){return this._entries}}class u extends s{constructor(){super(...arguments),this.uniforms=new c(this),this.code=new d(this),this.constants=new v}get builder(){return this}}class h{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(e){return"fragment"===e?[]:this._entries.map((e=>`in ${e[1]} ${e[0]};`))}}class f{constructor(){this._entries=new Map}add(e,t){this._entries.has(e)&&(0,a.hu)(this._entries.get(e)===t),this._entries.set(e,t)}generateSource(e){const t=new Array;return this._entries.forEach(((r,i)=>t.push("vertex"===e?`out ${r} ${i};`:`in ${r} ${i};`))),t}}class m{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const t="vertex"===e?m.ALLOWLIST_VERTEX:m.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter((e=>t.includes(e))).map((e=>`#extension ${e} : enable`))}}m.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],m.ALLOWLIST_VERTEX=[];class p{constructor(){this._entries=new Map}add(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;const i=this._entries.get(r);i?(0,a.hu)(i.name===e&&i.type===t,`Fragment shader output location ${r} occupied`):this._entries.set(r,{name:e,type:t})}generateSource(e){if("vertex"===e)return[];0===this._entries.size&&this._entries.set(0,{name:p.DEFAULT_NAME,type:p.DEFAULT_TYPE});const t=new Array;return this._entries.forEach(((e,r)=>t.push(`layout(location = ${r}) out ${e.type} ${e.name};`))),t}}p.DEFAULT_TYPE="vec4",p.DEFAULT_NAME="fragColor";class v{constructor(){this._entries=new Set}add(e,t,r){let i="ERROR_CONSTRUCTOR_STRING";switch(t){case"float":i=v._numberToFloatStr(r);break;case"int":i=v._numberToIntStr(r);break;case"bool":i=r.toString();break;case"vec2":i=`vec2(${v._numberToFloatStr(r[0])},                            ${v._numberToFloatStr(r[1])})`;break;case"vec3":i=`vec3(${v._numberToFloatStr(r[0])},                            ${v._numberToFloatStr(r[1])},                            ${v._numberToFloatStr(r[2])})`;break;case"vec4":i=`vec4(${v._numberToFloatStr(r[0])},                            ${v._numberToFloatStr(r[1])},                            ${v._numberToFloatStr(r[2])},                            ${v._numberToFloatStr(r[3])})`;break;case"ivec2":i=`ivec2(${v._numberToIntStr(r[0])},                             ${v._numberToIntStr(r[1])})`;break;case"ivec3":i=`ivec3(${v._numberToIntStr(r[0])},                             ${v._numberToIntStr(r[1])},                             ${v._numberToIntStr(r[2])})`;break;case"ivec4":i=`ivec4(${v._numberToIntStr(r[0])},                             ${v._numberToIntStr(r[1])},                             ${v._numberToIntStr(r[2])},                             ${v._numberToIntStr(r[3])})`;break;case"mat2":case"mat3":case"mat4":i=`${t}(${Array.prototype.map.call(r,(e=>v._numberToFloatStr(e))).join(", ")})`}return this._entries.add(`const ${t} ${e} = ${i};`),this}static _numberToIntStr(e){return e.toFixed(0)}static _numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}}const g="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif",_="precision highp float;\nprecision highp sampler2D;"},19253:(e,t,r)=>{r.d(t,{A:()=>o});var i=r(61809),n=r(99340);class o extends i.x{constructor(e,t){super(e,"sampler2D",n.P.Pass,((r,i,n)=>r.bindTexture(e,t(i,n))))}}},82144:(e,t,r)=>{r.d(t,{J:()=>i});class i{constructor(e,t){this._module=e,this._loadModule=t}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}}},31132:(e,t,r)=>{r.d(t,{A:()=>o});var i=r(92026),n=r(8548);class o{constructor(e,t,r){this.release=r,this.initializeConfiguration(e,t),this._configuration=t.snapshot(),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e)}destroy(){this._program=(0,i.M2)(this._program),this._pipeline=this._configuration=null}reload(e){(0,i.M2)(this._program),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e)}get program(){return this._program}get compiled(){return this.program.compiled}get key(){return this._configuration.key}get configuration(){return this._configuration}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}get primitiveType(){return n.MX.TRIANGLES}getPipeline(e,t,r){return this._pipeline}initializeConfiguration(e,t){}}},33559:(e,t,r)=>{r.d(t,{m:()=>n,o:()=>o});var i=r(98634);class n extends i.K{constructor(){super(),this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map((()=>0)):[],this._parameterNames||(this._parameterNames=[])}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const e=this._parameterNames,t={key:this.key};for(const r of e)t[r]=this[r];return t}}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(t,r)=>{if(t._parameterNames=t._parameterNames??[],t._parameterNames.push(r),null!=e.constValue)Object.defineProperty(t,r,{get:()=>e.constValue});else{const i=t._parameterNames.length-1,n=e.count||2,o=Math.ceil(Math.log2(n)),a=t._parameterBits??[0];let s=0;for(;a[s]+o>16;)s++,s>=a.length&&a.push(0);t._parameterBits=a;const l=a[s],c=(1<<o)-1<<l;a[s]+=o,Object.defineProperty(t,r,{get(){return this[i]},set(e){if(this[i]!==e&&(this[i]=e,this._keyDirty=!0,this._parameterBits[s]=this._parameterBits[s]&~c|+e<<l&c,"number"!=typeof e&&"boolean"!=typeof e))throw new Error("Configuration value for "+r+" must be boolean or number, got "+typeof e)}})}}}},1395:(e,t,r)=>{r.d(t,{c:()=>n});var i=r(95439);class n{constructor(){this.id=(0,i.D)()}}},79100:(e,t,r)=>{var i;r.d(t,{U:()=>i}),function(e){e[e.Layer=0]="Layer",e[e.Object=1]="Object",e[e.Mesh=2]="Mesh",e[e.Line=3]="Line",e[e.Point=4]="Point",e[e.Material=5]="Material",e[e.Texture=6]="Texture",e[e.COUNT=7]="COUNT"}(i||(i={}))},7566:(e,t,r)=>{r.d(t,{i:()=>n});var i=r(4760);const n=new Map([[i.T.POSITION,0],[i.T.NORMAL,1],[i.T.NORMALCOMPRESSED,1],[i.T.UV0,2],[i.T.COLOR,3],[i.T.COLORFEATUREATTRIBUTE,3],[i.T.SIZE,4],[i.T.TANGENT,4],[i.T.CENTEROFFSETANDDISTANCE,5],[i.T.SYMBOLCOLOR,5],[i.T.FEATUREATTRIBUTE,6],[i.T.INSTANCEFEATUREATTRIBUTE,6],[i.T.INSTANCECOLOR,7],[i.T.OBJECTANDLAYERIDCOLOR,7],[i.T.INSTANCEOBJECTANDLAYERIDCOLOR,7],[i.T.INSTANCEMODEL,8],[i.T.INSTANCEMODELNORMAL,12],[i.T.INSTANCEMODELORIGINHI,11],[i.T.INSTANCEMODELORIGINLO,15]])},25278:(e,t,r)=>{r.d(t,{F:()=>l});var i=r(92026),n=r(66978),o=r(98634),a=r(68401);class s{constructor(e){this._material=e.material,this._techniques=e.techniques,this._output=e.output}dispose(){this._techniques.release(this._technique)}get technique(){return this._technique}get _stippleTextures(){return this._techniques.constructionContext.stippleTextures}get _markerTextures(){return this._techniques.constructionContext.markerTextures}ensureTechnique(e,t){return this._technique=this._techniques.releaseAndAcquire(e,this._material.getConfiguration(this._output,t),this._technique),this._technique}ensureResources(e){return a.Rw.LOADED}}class l extends s{constructor(e){super(e),this._numLoading=0,this._disposed=!1,this._textures=e.textures,this._textureId=e.textureId,this._acquire(e.textureId,(e=>this._texture=e)),this._acquire(e.normalTextureId,(e=>this._textureNormal=e)),this._acquire(e.emissiveTextureId,(e=>this._textureEmissive=e)),this._acquire(e.occlusionTextureId,(e=>this._textureOcclusion=e)),this._acquire(e.metallicRoughnessTextureId,(e=>this._textureMetallicRoughness=e))}dispose(){this._texture=(0,i.RY)(this._texture),this._textureNormal=(0,i.RY)(this._textureNormal),this._textureEmissive=(0,i.RY)(this._textureEmissive),this._textureOcclusion=(0,i.RY)(this._textureOcclusion),this._textureMetallicRoughness=(0,i.RY)(this._textureMetallicRoughness),this._disposed=!0}ensureResources(e){return 0===this._numLoading?a.Rw.LOADED:a.Rw.LOADING}get textureBindParameters(){return new c(null!=this._texture?this._texture.glTexture:null,null!=this._textureNormal?this._textureNormal.glTexture:null,null!=this._textureEmissive?this._textureEmissive.glTexture:null,null!=this._textureOcclusion?this._textureOcclusion.glTexture:null,null!=this._textureMetallicRoughness?this._textureMetallicRoughness.glTexture:null)}updateTexture(e){null!=this._texture&&e===this._texture.id||(this._texture=(0,i.RY)(this._texture),this._textureId=e,this._acquire(this._textureId,(e=>this._texture=e)))}_acquire(e,t){if(null==e)return void t(null);const r=this._textures.acquire(e);if((0,n.y8)(r))return++this._numLoading,void r.then((e=>{if(this._disposed)return(0,i.RY)(e),void t(null);t(e)})).finally((()=>--this._numLoading));t(r)}}class c extends o.K{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,o=arguments.length>5?arguments[5]:void 0,a=arguments.length>6?arguments[6]:void 0;super(),this.texture=e,this.textureNormal=t,this.textureEmissive=r,this.textureOcclusion=i,this.textureMetallicRoughness=n,this.scale=o,this.normalTextureTransformMatrix=a}}},56529:(e,t,r)=>{r.d(t,{F5:()=>d,yD:()=>i});var i,n=r(12400),o=(r(98634),r(68401)),a=r(1395),s=r(79100),l=r(7566),c=r(80026);class d extends a.c{constructor(e,t){super(),this.type=s.U.Material,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._vertexAttributeLocations=l.i,this._pp0=(0,n.al)(0,0,1),this._pp1=(0,n.al)(0,0,0),this._parameters=(0,c.Uf)(e,t),this.validateParameters(this._parameters)}get parameters(){return this._parameters}update(e){return!1}setParameters(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];(0,c.LO)(this._parameters,e)&&(this.validateParameters(this._parameters),t&&this.parametersChanged())}validateParameters(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged())}shouldRender(e){return this.isVisible()&&this.isVisibleForOutput(e.output)&&(!this.parameters.isDecoration||e.bindParameters.decorations===o.Iq.ON)&&!!(this.parameters.renderOccluded&e.renderOccludedMask)}isVisibleForOutput(e){return!0}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){this.repository?.materialChanged(this)}queryRenderOccludedState(e){return this.isVisible()&&this.parameters.renderOccluded===e}intersectDraped(e,t,r,i,n,o){return this._pp0[0]=this._pp1[0]=i[0],this._pp0[1]=this._pp1[1]=i[1],this.intersect(e,t,r,this._pp0,this._pp1,n)}}!function(e){e[e.None=0]="None",e[e.Occlude=1]="Occlude",e[e.Transparent=2]="Transparent",e[e.OccludeAndTransparent=4]="OccludeAndTransparent",e[e.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",e[e.Opaque=16]="Opaque"}(i||(i={}))},27627:(e,t,r)=>{r.d(t,{$:()=>o});var i=r(27546),n=r(37825);class o{constructor(e,t,r){this._context=e,this._locations=r,this._textures=new Map,this._freeTextureUnits=new i.Z({deallocator:null}),this._glProgram=e.programCache.acquire(t.generate("vertex"),t.generate("fragment"),r),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this.bindPass=t.generateBindPass(this),this.bindDraw=t.generateBindDraw(this),this._fragmentUniforms=(0,n.hZ)()?t.fragmentUniforms:null}dispose(){this._glProgram.dispose()}get glName(){return this._glProgram.glName}get hasTransformFeedbackVaryings(){return this._glProgram.hasTransformFeedbackVaryings}get compiled(){return this._glProgram.compiled}setUniform1b(e,t){this._glProgram.setUniform1i(e,t?1:0)}setUniform1i(e,t){this._glProgram.setUniform1i(e,t)}setUniform1f(e,t){this._glProgram.setUniform1f(e,t)}setUniform2fv(e,t){this._glProgram.setUniform2fv(e,t)}setUniform3fv(e,t){this._glProgram.setUniform3fv(e,t)}setUniform4fv(e,t){this._glProgram.setUniform4fv(e,t)}setUniformMatrix3fv(e,t){this._glProgram.setUniformMatrix3fv(e,t)}setUniformMatrix4fv(e,t){this._glProgram.setUniformMatrix4fv(e,t)}setUniform1fv(e,t){this._glProgram.setUniform1fv(e,t)}setUniform1iv(e,t){this._glProgram.setUniform1iv(e,t)}setUniform2iv(e,t){this._glProgram.setUniform3iv(e,t)}setUniform3iv(e,t){this._glProgram.setUniform3iv(e,t)}setUniform4iv(e,t){this._glProgram.setUniform4iv(e,t)}assertCompatibleVertexAttributeLocations(e){e.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(e,t){if(null==t?.glName){const t=this._textures.get(e);return t&&(this._context.bindTexture(null,t.unit),this._freeTextureUnit(t),this._textures.delete(e)),null}let r=this._textures.get(e);return null==r?(r=this._allocTextureUnit(t),this._textures.set(e,r)):r.texture=t,this._context.useProgram(this),this.setUniform1i(e,r.unit),this._context.bindTexture(t,r.unit),r.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach(((e,t)=>{this._context.bindTexture(e.texture,e.unit),this.setUniform1i(t,e.unit)})),this._fragmentUniforms?.forEach((e=>{"sampler2D"!==e.type&&"samplerCube"!==e.type||this._textures.has(e.name)||console.error(`Texture sampler ${e.name} has no bound texture`)}))}_allocTextureUnit(e){return{texture:e,unit:0===this._freeTextureUnits.length?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(e){this._freeTextureUnits.push(e.unit)}}},25920:(e,t,r)=>{var i;r.d(t,{A:()=>i}),function(e){e[e.ColorAlpha=0]="ColorAlpha",e[e.FrontFace=1]="FrontFace",e[e.NONE=2]="NONE",e[e.COUNT=3]="COUNT"}(i||(i={}))},97731:(e,t,r)=>{r.d(t,{hu:()=>n,yK:()=>o});r(6644),r(19093);(0,r(86361).Ue)();class i{constructor(e){this.message=e}toString(){return`AssertException: ${this.message}`}}function n(e,t){if(!e){t=t||"Assertion";const e=new Error(t).stack;throw new i(`${t} at ${e}`)}}function o(e,t,r,i){let n,o=(r[0]-e[0])/t[0],a=(i[0]-e[0])/t[0];o>a&&(n=o,o=a,a=n);let s=(r[1]-e[1])/t[1],l=(i[1]-e[1])/t[1];if(s>l&&(n=s,s=l,l=n),o>l||s>a)return!1;s>o&&(o=s),l<a&&(a=l);let c=(r[2]-e[2])/t[2],d=(i[2]-e[2])/t[2];return c>d&&(n=c,c=d,d=n),!(o>d||c>a)&&(d<a&&(a=d),!(a<0))}},80026:(e,t,r)=>{r.d(t,{FZ:()=>f,Uf:()=>d,LO:()=>u,Hx:()=>c});var i=r(63780),n=r(16889);r(50951);function o(e,t,r){const i=r.parameters;return l.scale=Math.min(i.divisor/(t-i.offset),1),l.factor=function(e){return Math.abs(e*e*e)}(e),l}function a(e,t){return(0,n.t7)(e*Math.max(t.scale,t.minScaleFactor),e,t.factor)}function s(e,t,r,i){return a(e,o(t,r,i))}(0,n.Vl)(10),(0,n.Vl)(12),(0,n.Vl)(70),(0,n.Vl)(40);const l={scale:0,factor:0,minScaleFactor:0};function c(e,t,r,i,o){let a=(r.screenLength||0)*e.pixelRatio;null!=o&&(a=s(a,i,t,o));const l=a*Math.tan(.5*e.fovY)/(.5*e.fullHeight);return(0,n.uZ)(l*t,r.minWorldLength||0,null!=r.maxWorldLength?r.maxWorldLength:1/0)}function d(e,t){const r=t?d(t):{};for(const i in e){let t=e[i];t?.forEach&&(t=h(t)),null==t&&i in r||(r[i]=t)}return r}function u(e,t){let r=!1;for(const n in t){const o=t[n];void 0!==o&&(Array.isArray(o)?null===e[n]?(e[n]=o.slice(),r=!0):(0,i.Vx)(e[n],o)&&(r=!0):e[n]!==o&&(r=!0,e[n]=o))}return r}function h(e){const t=[];return e.forEach((e=>t.push(e))),t}const f={multiply:1,ignore:2,replace:3,tint:4}},43411:(e,t,r)=>{function i(e,t,r){for(let i=0;i<r;++i)t[2*i]=e[i],t[2*i+1]=e[i]-t[2*i]}function n(e,t){const r=e.length;for(let i=0;i<r;++i)a[0]=e[i],t[i]=a[0];return t}function o(e,t){const r=e.length;for(let i=0;i<r;++i)a[0]=e[i],a[1]=e[i]-a[0],t[i]=a[1];return t}r.d(t,{GB:()=>o,LF:()=>i,U8:()=>n});const a=new Float32Array(2)},36207:(e,t,r)=>{r.d(t,{BK:()=>u,LZ:()=>d,if:()=>o,jp:()=>W,sm:()=>b,wK:()=>a,zp:()=>c});var i=r(68401),n=r(8548);function o(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n.db.ADD,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[0,0,0,0];return{srcRgb:e,srcAlpha:e,dstRgb:t,dstAlpha:t,opRgb:r,opAlpha:r,color:{r:i[0],g:i[1],b:i[2],a:i[3]}}}function a(e,t,r,i){let o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:n.db.ADD,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:n.db.ADD,s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:[0,0,0,0];return{srcRgb:e,srcAlpha:t,dstRgb:r,dstAlpha:i,opRgb:o,opAlpha:a,color:{r:s[0],g:s[1],b:s[2],a:s[3]}}}const s={face:n.LR.BACK,mode:n.Wf.CCW},l={face:n.LR.FRONT,mode:n.Wf.CCW},c=e=>e===i.Vr.Back?s:e===i.Vr.Front?l:null,d={zNear:0,zFar:1},u={r:!0,g:!0,b:!0,a:!0};function h(e){return w.intern(e)}function f(e){return A.intern(e)}function m(e){return M.intern(e)}function p(e){return R.intern(e)}function v(e){return P.intern(e)}function g(e){return L.intern(e)}function _(e){return D.intern(e)}function x(e){return F.intern(e)}function T(e){return z.intern(e)}function b(e){return G.intern(e)}class y{constructor(e,t){this._makeKey=e,this._makeRef=t,this._interns=new Map}intern(e){if(!e)return null;const t=this._makeKey(e),r=this._interns;return r.has(t)||r.set(t,this._makeRef(e)),r.get(t)??null}}function S(e){return"["+e.join(",")+"]"}const w=new y(E,(e=>({__tag:"Blending",...e})));function E(e){return e?S([e.srcRgb,e.srcAlpha,e.dstRgb,e.dstAlpha,e.opRgb,e.opAlpha,e.color.r,e.color.g,e.color.b,e.color.a]):null}const A=new y(C,(e=>({__tag:"Culling",...e})));function C(e){return e?S([e.face,e.mode]):null}const M=new y(O,(e=>({__tag:"PolygonOffset",...e})));function O(e){return e?S([e.factor,e.units]):null}const R=new y(I,(e=>({__tag:"DepthTest",...e})));function I(e){return e?S([e.func]):null}const P=new y(N,(e=>({__tag:"StencilTest",...e})));function N(e){return e?S([e.function.func,e.function.ref,e.function.mask,e.operation.fail,e.operation.zFail,e.operation.zPass]):null}const L=new y(H,(e=>({__tag:"DepthWrite",...e})));function H(e){return e?S([e.zNear,e.zFar]):null}const D=new y(B,(e=>({__tag:"ColorWrite",...e})));function B(e){return e?S([e.r,e.g,e.b,e.a]):null}const F=new y(U,(e=>({__tag:"StencilWrite",...e})));function U(e){return e?S([e.mask]):null}const z=new y(V,(e=>({__tag:"DrawBuffers",...e})));function V(e){return e?S(e.buffers):null}const G=new y((function(e){return e?S([E(e.blending),C(e.culling),O(e.polygonOffset),I(e.depthTest),N(e.stencilTest),H(e.depthWrite),B(e.colorWrite),U(e.stencilWrite),V(e.drawBuffers)]):null}),(e=>({blending:h(e.blending),culling:f(e.culling),polygonOffset:m(e.polygonOffset),depthTest:p(e.depthTest),stencilTest:v(e.stencilTest),depthWrite:g(e.depthWrite),colorWrite:_(e.colorWrite),stencilWrite:x(e.stencilWrite),drawBuffers:T(e.drawBuffers)})));class W{constructor(e){this._pipelineInvalid=!0,this._blendingInvalid=!0,this._cullingInvalid=!0,this._polygonOffsetInvalid=!0,this._depthTestInvalid=!0,this._stencilTestInvalid=!0,this._depthWriteInvalid=!0,this._colorWriteInvalid=!0,this._stencilWriteInvalid=!0,this._drawBuffersInvalid=!0,this._stateSetters=e}setPipeline(e){(this._pipelineInvalid||e!==this._pipeline)&&(this._setBlending(e.blending),this._setCulling(e.culling),this._setPolygonOffset(e.polygonOffset),this._setDepthTest(e.depthTest),this._setStencilTest(e.stencilTest),this._setDepthWrite(e.depthWrite),this._setColorWrite(e.colorWrite),this._setStencilWrite(e.stencilWrite),this._setDrawBuffers(e.drawBuffers),this._pipeline=e),this._pipelineInvalid=!1}invalidateBlending(){this._blendingInvalid=!0,this._pipelineInvalid=!0}invalidateCulling(){this._cullingInvalid=!0,this._pipelineInvalid=!0}invalidatePolygonOffset(){this._polygonOffsetInvalid=!0,this._pipelineInvalid=!0}invalidateDepthTest(){this._depthTestInvalid=!0,this._pipelineInvalid=!0}invalidateStencilTest(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}invalidateDepthWrite(){this._depthWriteInvalid=!0,this._pipelineInvalid=!0}invalidateColorWrite(){this._colorWriteInvalid=!0,this._pipelineInvalid=!0}invalidateStencilWrite(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}invalidateDrawBuffers(){this._drawBuffersInvalid=!0,this._pipelineInvalid=!0}_setBlending(e){this._blending=this._setSubState(e,this._blending,this._blendingInvalid,this._stateSetters.setBlending),this._blendingInvalid=!1}_setCulling(e){this._culling=this._setSubState(e,this._culling,this._cullingInvalid,this._stateSetters.setCulling),this._cullingInvalid=!1}_setPolygonOffset(e){this._polygonOffset=this._setSubState(e,this._polygonOffset,this._polygonOffsetInvalid,this._stateSetters.setPolygonOffset),this._polygonOffsetInvalid=!1}_setDepthTest(e){this._depthTest=this._setSubState(e,this._depthTest,this._depthTestInvalid,this._stateSetters.setDepthTest),this._depthTestInvalid=!1}_setStencilTest(e){this._stencilTest=this._setSubState(e,this._stencilTest,this._stencilTestInvalid,this._stateSetters.setStencilTest),this._stencilTestInvalid=!1}_setDepthWrite(e){this._depthWrite=this._setSubState(e,this._depthWrite,this._depthWriteInvalid,this._stateSetters.setDepthWrite),this._depthWriteInvalid=!1}_setColorWrite(e){this._colorWrite=this._setSubState(e,this._colorWrite,this._colorWriteInvalid,this._stateSetters.setColorWrite),this._colorWriteInvalid=!1}_setStencilWrite(e){this._stencilWrite=this._setSubState(e,this._stencilWrite,this._stencilWriteInvalid,this._stateSetters.setStencilWrite),this._stencilTestInvalid=!1}_setDrawBuffers(e){this._drawBuffers=this._setSubState(e,this._drawBuffers,this._drawBuffersInvalid,this._stateSetters.setDrawBuffers),this._drawBuffersInvalid=!1}_setSubState(e,t,r,i){return(r||e!==t)&&(i(e),this._pipelineInvalid=!0),e}}}}]);
//# sourceMappingURL=827.eef81e92.chunk.js.map