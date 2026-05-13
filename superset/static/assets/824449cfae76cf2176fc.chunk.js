"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[9321],{82050(i,t,e){e.d(t,{rJ:()=>o,wk:()=>f,Eg:()=>k,Mk:()=>u,Iy:()=>v,UD:()=>l});let o={CLOCKWISE:1,COUNTER_CLOCKWISE:-1};function l(i,t,e={}){return function(i,t={}){return Math.sign(function(i,t={}){let{start:e=0,end:o=i.length,plane:l="xy"}=t,n=t.size||2,s=0,c=r[l[0]],h=r[l[1]];for(let t=e,l=o-n;t<o;t+=n)s+=(i[t+c]-i[l+c])*(i[t+h]+i[l+h]),l=t;return s/2}(i,t))}(i,e)!==t&&(function(i,t){let{start:e=0,end:o=i.length,size:l=2}=t,r=(o-e)/l,n=Math.floor(r/2);for(let t=0;t<n;++t){let o=e+t*l,n=e+(r-1-t)*l;for(let t=0;t<l;++t){let e=i[o+t];i[o+t]=i[n+t],i[n+t]=e}}}(i,e),!0)}let r={x:0,y:1,z:2};function n(i,t,e,o,l=[]){let r,s;if(8&e)r=(o[3]-i[1])/(t[1]-i[1]),s=3;else if(4&e)r=(o[1]-i[1])/(t[1]-i[1]),s=1;else if(2&e)r=(o[2]-i[0])/(t[0]-i[0]),s=2;else{if(!(1&e))return null;r=(o[0]-i[0])/(t[0]-i[0]),s=0}for(let e=0;e<i.length;e++)l[e]=(1&s)===e?o[s]:r*(t[e]-i[e])+i[e];return l}function s(i,t){let e=0;return i[0]<t[0]?e|=1:i[0]>t[2]&&(e|=2),i[1]<t[1]?e|=4:i[1]>t[3]&&(e|=8),e}function c(i,t){let e=t.length,o=i.length;if(o>0){let l=!0;for(let r=0;r<e;r++)if(i[o-e+r]!==t[r]){l=!1;break}if(l)return!1}for(let l=0;l<e;l++)i[o+l]=t[l];return!0}function h(i,t){let e=t.length;for(let o=0;o<e;o++)i[o]=t[o]}function g(i,t,e,o,l=[]){let r=o+t*e;for(let t=0;t<e;t++)l[t]=i[r+t];return l}function u(i,t){let e,o,{size:l=2,broken:r=!1,gridResolution:u=10,gridOffset:f=[0,0],startIndex:a=0,endIndex:d=i.length}=t||{},v=(d-a)/l,k=[],b=[k],C=g(i,0,l,a),A=p(C,u,f,[]),_=[];c(k,C);for(let t=1;t<v;t++){for(o=s(e=g(i,t,l,a,e),A);o;){var m,y,O;n(C,e,o,A,_);let i=s(_,A);i&&(n(C,_,i,A,_),o=i),c(k,_),h(C,_),m=A,y=u,8&(O=o)?(m[1]+=y,m[3]+=y):4&O?(m[1]-=y,m[3]-=y):2&O?(m[0]+=y,m[2]+=y):1&O&&(m[0]-=y,m[2]-=y),r&&k.length>l&&(k=[],b.push(k),c(k,C)),o=s(e,A)}c(k,e),h(C,e)}return r?b:b[0]}function f(i,t=null,e){if(!i.length)return[];let{size:o=2,gridResolution:l=10,gridOffset:r=[0,0],edgeTypes:n=!1}=e||{},c=[],h=[{pos:i,types:n?Array(i.length/o).fill(1):null,holes:t||[]}],g=[[],[]],u=[];for(;h.length;){let{pos:i,types:t,holes:e}=h.shift();(function(i,t,e,o){let l=1/0,r=-1/0,n=1/0,s=-1/0;for(let o=0;o<e;o+=t){let t=i[o],e=i[o+1];l=t<l?t:l,r=t>r?t:r,n=e<n?e:n,s=e>s?e:s}o[0][0]=l,o[0][1]=n,o[1][0]=r,o[1][1]=s})(i,o,e[0]||i.length,g),u=p(g[0],l,r,u);let f=s(g[1],u);if(f){let l=a(i,t,o,0,e[0]||i.length,u,f),r={pos:l[0].pos,types:l[0].types,holes:[]},s={pos:l[1].pos,types:l[1].types,holes:[]};h.push(r,s);for(let c=0;c<e.length;c++)(l=a(i,t,o,e[c],e[c+1]||i.length,u,f))[0]&&(r.holes.push(r.pos.length),r.pos=d(r.pos,l[0].pos),n&&(r.types=d(r.types,l[0].types))),l[1]&&(s.holes.push(s.pos.length),s.pos=d(s.pos,l[1].pos),n&&(s.types=d(s.types,l[1].types)))}else{let o={positions:i};n&&(o.edgeTypes=t),e.length&&(o.holeIndices=e),c.push(o)}}return c}function a(i,t,e,o,l,r,s){let u,f,a,p=(l-o)/e,d=[],v=[],k=[],b=[],C=[],A=g(i,p-1,e,o),_=Math.sign(8&s?A[1]-r[3]:A[0]-r[2]),m=t&&t[p-1],y=0,O=0;for(let l=0;l<p;l++)u=g(i,l,e,o,u),f=Math.sign(8&s?u[1]-r[3]:u[0]-r[2]),a=t&&t[o/e+l],f&&_&&_!==f&&(n(A,u,s,r,C),c(d,C)&&k.push(m),c(v,C)&&b.push(m)),f<=0?(c(d,u)&&k.push(a),y-=f):k.length&&(k[k.length-1]=0),f>=0?(c(v,u)&&b.push(a),O+=f):b.length&&(b[b.length-1]=0),h(A,u),_=f,m=a;return[y?{pos:d,types:t&&k}:null,O?{pos:v,types:t&&b}:null]}function p(i,t,e,o){let l=Math.floor((i[0]-e[0])/t)*t+e[0],r=Math.floor((i[1]-e[1])/t)*t+e[1];return o[0]=l,o[1]=r,o[2]=l+t,o[3]=r+t,o}function d(i,t){for(let e=0;e<t.length;e++)i.push(t[e]);return i}function v(i,t){let{size:e=2,startIndex:o=0,endIndex:l=i.length,normalize:r=!0}=t||{},n=i.slice(o,l);b(n,e,0,l-o);let s=u(n,{size:e,broken:!0,gridResolution:360,gridOffset:[-180,-180]});if(r)for(let i of s)C(i,e);return s}function k(i,t=null,e){let{size:o=2,normalize:l=!0,edgeTypes:r=!1}=e||{};t=t||[];let n=[],s=[],h=0,u=0;for(let l=0;l<=t.length;l++){let r=t[l]||i.length,f=u,a=function(i,t,e,o){let l=-1,r=-1;for(let n=e+1;n<o;n+=t){let t=Math.abs(i[n]);t>l&&(l=t,r=n-1)}return r}(i,o,h,r);for(let t=a;t<r;t++)n[u++]=i[t];for(let t=h;t<a;t++)n[u++]=i[t];b(n,o,f,u),function(i,t,e,o,l=85.051129){let r=i[e],n=i[o-t];if(Math.abs(r-n)>180){let o=g(i,0,t,e);o[0]+=360*Math.round((n-r)/360),c(i,o),o[1]=Math.sign(o[1])*l,c(i,o),o[0]=r,c(i,o)}}(n,o,f,u,e?.maxLatitude),h=r,s[l]=u}s.pop();let a=f(n,s,{size:o,gridResolution:360,gridOffset:[-180,-180],edgeTypes:r});if(l)for(let i of a)C(i.positions,o);return a}function b(i,t,e,o){let l,r=i[0];for(let n=e;n<o;n+=t){let t=(l=i[n])-r;(t>180||t<-180)&&(l-=360*Math.round(t/360)),i[n]=r=l}}function C(i,t){let e,o=i.length/t;for(let l=0;l<o&&((e=i[l*t])+180)%360==0;l++);let l=-(360*Math.round(e/360));if(0!==l)for(let e=0;e<o;e++)i[e*t]+=l}},82849(i,t,e){e.d(t,{A:()=>l});let o={props:{},uniforms:{},name:"picking",uniformTypes:{isActive:"f32",isAttribute:"f32",isHighlightActive:"f32",useFloatColors:"f32",highlightedObjectColor:"vec3<f32>",highlightColor:"vec4<f32>"},defaultUniforms:{isActive:!1,isAttribute:!1,isHighlightActive:!1,useFloatColors:!0,highlightedObjectColor:[0,0,0],highlightColor:[0,1,1,1]},vs:`\
uniform pickingUniforms {
  float isActive;
  float isAttribute;
  float isHighlightActive;
  float useFloatColors;
  vec3 highlightedObjectColor;
  vec4 highlightColor;
} picking;

out vec4 picking_vRGBcolor_Avalid;

// Normalize unsigned byte color to 0-1 range
vec3 picking_normalizeColor(vec3 color) {
  return picking.useFloatColors > 0.5 ? color : color / 255.0;
}

// Normalize unsigned byte color to 0-1 range
vec4 picking_normalizeColor(vec4 color) {
  return picking.useFloatColors > 0.5 ? color : color / 255.0;
}

bool picking_isColorZero(vec3 color) {
  return dot(color, vec3(1.0)) < 0.00001;
}

bool picking_isColorValid(vec3 color) {
  return dot(color, vec3(1.0)) > 0.00001;
}

// Check if this vertex is highlighted 
bool isVertexHighlighted(vec3 vertexColor) {
  vec3 highlightedObjectColor = picking_normalizeColor(picking.highlightedObjectColor);
  return
    bool(picking.isHighlightActive) && picking_isColorZero(abs(vertexColor - highlightedObjectColor));
}

// Set the current picking color
void picking_setPickingColor(vec3 pickingColor) {
  pickingColor = picking_normalizeColor(pickingColor);

  if (bool(picking.isActive)) {
    // Use alpha as the validity flag. If pickingColor is [0, 0, 0] fragment is non-pickable
    picking_vRGBcolor_Avalid.a = float(picking_isColorValid(pickingColor));

    if (!bool(picking.isAttribute)) {
      // Stores the picking color so that the fragment shader can render it during picking
      picking_vRGBcolor_Avalid.rgb = pickingColor;
    }
  } else {
    // Do the comparison with selected item color in vertex shader as it should mean fewer compares
    picking_vRGBcolor_Avalid.a = float(isVertexHighlighted(pickingColor));
  }
}

void picking_setPickingAttribute(float value) {
  if (bool(picking.isAttribute)) {
    picking_vRGBcolor_Avalid.r = value;
  }
}

void picking_setPickingAttribute(vec2 value) {
  if (bool(picking.isAttribute)) {
    picking_vRGBcolor_Avalid.rg = value;
  }
}

void picking_setPickingAttribute(vec3 value) {
  if (bool(picking.isAttribute)) {
    picking_vRGBcolor_Avalid.rgb = value;
  }
}
`,fs:`\
uniform pickingUniforms {
  float isActive;
  float isAttribute;
  float isHighlightActive;
  float useFloatColors;
  vec3 highlightedObjectColor;
  vec4 highlightColor;
} picking;

in vec4 picking_vRGBcolor_Avalid;

/*
 * Returns highlight color if this item is selected.
 */
vec4 picking_filterHighlightColor(vec4 color) {
  // If we are still picking, we don't highlight
  if (picking.isActive > 0.5) {
    return color;
  }

  bool selected = bool(picking_vRGBcolor_Avalid.a);

  if (selected) {
    // Blend in highlight color based on its alpha value
    float highLightAlpha = picking.highlightColor.a;
    float blendedAlpha = highLightAlpha + color.a * (1.0 - highLightAlpha);
    float highLightRatio = highLightAlpha / blendedAlpha;

    vec3 blendedRGB = mix(color.rgb, picking.highlightColor.rgb, highLightRatio);
    return vec4(blendedRGB, blendedAlpha);
  } else {
    return color;
  }
}

/*
 * Returns picking color if picking enabled else unmodified argument.
 */
vec4 picking_filterPickingColor(vec4 color) {
  if (bool(picking.isActive)) {
    if (picking_vRGBcolor_Avalid.a == 0.0) {
      discard;
    }
    return picking_vRGBcolor_Avalid;
  }
  return color;
}

/*
 * Returns picking color if picking is enabled if not
 * highlight color if this item is selected, otherwise unmodified argument.
 */
vec4 picking_filterColor(vec4 color) {
  vec4 highlightColor = picking_filterHighlightColor(color);
  return picking_filterPickingColor(highlightColor);
}
`,getUniforms:function(i={},t){let e={};if(void 0===i.highlightedObjectColor||(null===i.highlightedObjectColor?e.isHighlightActive=!1:(e.isHighlightActive=!0,e.highlightedObjectColor=i.highlightedObjectColor.slice(0,3))),i.highlightColor){let t=Array.from(i.highlightColor,i=>i/255);Number.isFinite(t[3])||(t[3]=1),e.highlightColor=t}return void 0!==i.isActive&&(e.isActive=!!i.isActive,e.isAttribute=!!i.isAttribute),void 0!==i.useFloatColors&&(e.useFloatColors=!!i.useFloatColors),e}},l={...o,defaultUniforms:{...o.defaultUniforms,useFloatColors:!1},inject:{"vs:DECKGL_FILTER_GL_POSITION":`
    // for picking depth values
    picking_setPickingAttribute(position.z / position.w);
  `,"vs:DECKGL_FILTER_COLOR":`
  picking_setPickingColor(geometry.pickingColor);
  `,"fs:DECKGL_FILTER_COLOR":{order:99,injection:`
  // use highlight color if this fragment belongs to the selected object.
  color = picking_filterHighlightColor(color);

  // use picking color if rendering to picking FBO.
  color = picking_filterPickingColor(color);
    `}}}},25140(i,t,e){e.d(t,{V:()=>l});var o=e(55025);class l{id;topology;vertexCount;indices;attributes;userData={};constructor(i){const{attributes:t={},indices:e=null,vertexCount:l=null}=i;for(const[l,r]of(this.id=i.id||(0,o.L)("geometry"),this.topology=i.topology,e&&(this.indices=ArrayBuffer.isView(e)?{value:e,size:1}:e),this.attributes={},Object.entries(t))){const i=ArrayBuffer.isView(r)?{value:r}:r;if(!ArrayBuffer.isView(i.value))throw Error(`${this._print(l)}: must be typed array or object with value as typed array`);if("POSITION"!==l&&"positions"!==l||i.size||(i.size=3),"indices"===l){if(this.indices)throw Error("Multiple indices detected");this.indices=i}else this.attributes[l]=i}this.indices&&void 0!==this.indices.isIndexed&&(this.indices=Object.assign({},this.indices),delete this.indices.isIndexed),this.vertexCount=l||this._calculateVertexCount(this.attributes,this.indices)}getVertexCount(){return this.vertexCount}getAttributes(){return this.indices?{indices:this.indices,...this.attributes}:this.attributes}_print(i){return`Geometry ${this.id} attribute ${i}`}_setAttributes(i,t){return this}_calculateVertexCount(i,t){if(t)return t.value.length;let e=1/0;for(let t of Object.values(i)){let{value:i,size:o,constant:l}=t;!l&&i&&void 0!==o&&o>=1&&(e=Math.min(e,i.length/o))}return e}}}}]);