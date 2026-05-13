"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[3881],{71677(i,e,t){t.d(e,{A:()=>c});var o=t(15473),r=t(46714),l=t(6426),s=t(51392);class n extends o.A{get isComposite(){return!0}get isDrawable(){return!1}get isLoaded(){return super.isLoaded&&this.getSubLayers().every(i=>i.isLoaded)}getSubLayers(){return this.internalState&&this.internalState.subLayers||[]}initializeState(i){}setState(i){super.setState(i),this.setNeedsUpdate()}getPickingInfo({info:i}){let{object:e}=i;return e&&e.__source&&e.__source.parent&&e.__source.parent.id===this.id&&(i.object=e.__source.object,i.index=e.__source.index),i}filterSubLayer(i){return!0}shouldRenderSubLayer(i,e){return e&&e.length}getSubLayerClass(i,e){let{_subLayerProps:t}=this.props;return t&&t[i]&&t[i].type||e}getSubLayerRow(i,e,t){return i.__source={parent:this,object:e,index:t},i}getSubLayerAccessor(i){if("function"==typeof i){let e={index:-1,data:this.props.data,target:[]};return(t,o)=>t&&t.__source?(e.index=t.__source.index,i(t.__source.object,e)):i(t,o)}return i}getSubLayerProps(i={}){let{opacity:e,pickable:t,visible:o,parameters:r,getPolygonOffset:l,highlightedObjectIndex:n,autoHighlight:c,highlightColor:g,coordinateSystem:a,coordinateOrigin:h,wrapLongitude:u,positionFormat:d,modelMatrix:p,extensions:f,fetch:v,operation:b,_subLayerProps:k}=this.props,_={id:"",updateTriggers:{},opacity:e,pickable:t,visible:o,parameters:r,getPolygonOffset:l,highlightedObjectIndex:n,autoHighlight:c,highlightColor:g,coordinateSystem:a,coordinateOrigin:h,wrapLongitude:u,positionFormat:d,modelMatrix:p,extensions:f,fetch:v,operation:b},C=k&&i.id&&k[i.id],A=C&&C.updateTriggers,m=i.id||"sublayer";if(C){let e=this.props[s.fW],t=i.type?i.type._propTypes:{};for(let i in C){let o=t[i]||e[i];o&&"accessor"===o.type&&(C[i]=this.getSubLayerAccessor(C[i]))}}for(let e of(Object.assign(_,i,C),_.id=`${this.props.id}-${m}`,_.updateTriggers={all:this.props.updateTriggers?.all,...i.updateTriggers,...A},f)){let i=e.getSubLayerProps.call(this,e);i&&Object.assign(_,i,{updateTriggers:Object.assign(_.updateTriggers,i.updateTriggers)})}return _}_updateAutoHighlight(i){for(let e of this.getSubLayers())e.updateAutoHighlight(i)}_getAttributeManager(){return null}_postUpdate(i,e){let t=this.internalState.subLayers,o=!t||this.needsUpdate();if(o){let i=this.renderLayers();t=(0,l.B)(i,Boolean),this.internalState.subLayers=t}for(let i of((0,r.A)("compositeLayer.renderLayers",this,o,t),t))i.parent=this}}n.layerName="CompositeLayer";let c=n},82849(i,e,t){t.d(e,{A:()=>r});let o={props:{},uniforms:{},name:"picking",uniformTypes:{isActive:"f32",isAttribute:"f32",isHighlightActive:"f32",useFloatColors:"f32",highlightedObjectColor:"vec3<f32>",highlightColor:"vec4<f32>"},defaultUniforms:{isActive:!1,isAttribute:!1,isHighlightActive:!1,useFloatColors:!0,highlightedObjectColor:[0,0,0],highlightColor:[0,1,1,1]},vs:`\
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
`,getUniforms:function(i={},e){let t={};if(void 0===i.highlightedObjectColor||(null===i.highlightedObjectColor?t.isHighlightActive=!1:(t.isHighlightActive=!0,t.highlightedObjectColor=i.highlightedObjectColor.slice(0,3))),i.highlightColor){let e=Array.from(i.highlightColor,i=>i/255);Number.isFinite(e[3])||(e[3]=1),t.highlightColor=e}return void 0!==i.isActive&&(t.isActive=!!i.isActive,t.isAttribute=!!i.isAttribute),void 0!==i.useFloatColors&&(t.useFloatColors=!!i.useFloatColors),t}},r={...o,defaultUniforms:{...o.defaultUniforms,useFloatColors:!1},inject:{"vs:DECKGL_FILTER_GL_POSITION":`
    // for picking depth values
    picking_setPickingAttribute(position.z / position.w);
  `,"vs:DECKGL_FILTER_COLOR":`
  picking_setPickingColor(geometry.pickingColor);
  `,"fs:DECKGL_FILTER_COLOR":{order:99,injection:`
  // use highlight color if this fragment belongs to the selected object.
  color = picking_filterHighlightColor(color);

  // use picking color if rendering to picking FBO.
  color = picking_filterPickingColor(color);
    `}}}},25140(i,e,t){t.d(e,{V:()=>r});var o=t(55025);class r{id;topology;vertexCount;indices;attributes;userData={};constructor(i){const{attributes:e={},indices:t=null,vertexCount:r=null}=i;for(const[r,l]of(this.id=i.id||(0,o.L)("geometry"),this.topology=i.topology,t&&(this.indices=ArrayBuffer.isView(t)?{value:t,size:1}:t),this.attributes={},Object.entries(e))){const i=ArrayBuffer.isView(l)?{value:l}:l;if(!ArrayBuffer.isView(i.value))throw Error(`${this._print(r)}: must be typed array or object with value as typed array`);if("POSITION"!==r&&"positions"!==r||i.size||(i.size=3),"indices"===r){if(this.indices)throw Error("Multiple indices detected");this.indices=i}else this.attributes[r]=i}this.indices&&void 0!==this.indices.isIndexed&&(this.indices=Object.assign({},this.indices),delete this.indices.isIndexed),this.vertexCount=r||this._calculateVertexCount(this.attributes,this.indices)}getVertexCount(){return this.vertexCount}getAttributes(){return this.indices?{indices:this.indices,...this.attributes}:this.attributes}_print(i){return`Geometry ${this.id} attribute ${i}`}_setAttributes(i,e){return this}_calculateVertexCount(i,e){if(e)return e.value.length;let t=1/0;for(let e of Object.values(i)){let{value:i,size:o,constant:r}=e;!r&&i&&void 0!==o&&o>=1&&(t=Math.min(t,i.length/o))}return t}}},33910(i,e,t){t.d(e,{Pu:()=>s,QO:()=>o,Y5:()=>r,cp:()=>n});let o=[[255,255,178],[254,217,118],[254,178,76],[253,141,60],[240,59,32],[189,0,38]];function r(i,e=!1,t=Float32Array){let o;if(Number.isFinite(i[0]))o=new t(i);else{o=new t(4*i.length);let e=0;for(let t=0;t<i.length;t++){let r=i[t];o[e++]=r[0],o[e++]=r[1],o[e++]=r[2],o[e++]=Number.isFinite(r[3])?r[3]:255}}if(e)for(let i=0;i<o.length;i++)o[i]/=255;return o}let l={linear:"linear",quantile:"nearest",quantize:"nearest",ordinal:"nearest"};function s(i,e){i.setSampler({minFilter:l[e],magFilter:l[e]})}function n(i,e,t="linear"){let o=r(e,!1,Uint8Array);return i.createTexture({format:"rgba8unorm",sampler:{minFilter:l[t],magFilter:l[t],addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"},data:o,width:o.length/4,height:1})}}}]);