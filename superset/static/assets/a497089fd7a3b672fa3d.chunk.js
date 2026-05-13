"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[8944],{78944(e,t,o){o.d(t,{A:()=>E});var i=o(48186),a=o(38706),n=o(37604),r=o(26630),s=o(71965),l=o(43012),u=o(94221),c=o(33910),g=o(59967),p=o(1428),d=o(52208);let v=Math.PI/3,m=2*Math.sin(v),h=Array.from({length:6},(e,t)=>{let o=t*v;return[Math.sin(o),-Math.cos(o)]});function f([e,t],o){let i=Math.round(t=t/o/1.5),a=Math.round(e=e/o/m-(1&i)/2),n=t-i;if(3*Math.abs(n)>1){let o=e-a,r=a+(e<a?-1:1)/2,s=i+(t<i?-1:1),l=e-r,u=t-s;o*o+n*n>l*l+u*u&&(a=r+(1&i?1:-1)/2,i=s)}return[a,i]}let y=`
const vec2 DIST = vec2(${m}, 1.5);

ivec2 pointToHexbin(vec2 p, float radius) {
  p /= radius * DIST;
  float pj = round(p.y);
  float pjm2 = mod(pj, 2.0);
  p.x -= pjm2 * 0.5;
  float pi = round(p.x);
  vec2 d1 = p - vec2(pi, pj);

  if (abs(d1.y) * 3. > 1.) {
    vec2 v2 = step(0.0, d1) - 0.5;
    v2.y *= 2.0;
    vec2 d2 = d1 - v2;
    if (dot(d1, d1) > dot(d2, d2)) {
      pi += v2.x + pjm2 - 0.5;
      pj += v2.y;
    }
  }
  return ivec2(pi, pj);
}
`;function C([e,t],o){return[(e+(1&t)/2)*o*m,t*o*1.5]}let x=`
const vec2 DIST = vec2(${m}, 1.5);

vec2 hexbinCentroid(vec2 binId, float radius) {
  binId.x += fract(binId.y * 0.5);
  return binId * DIST * radius;
}
`,b=`\
#version 300 es
#define SHADER_NAME hexagon-cell-layer-vertex-shader
in vec3 positions;
in vec3 normals;
in vec2 instancePositions;
in float instanceElevationValues;
in float instanceColorValues;
in vec3 instancePickingColors;
uniform sampler2D colorRange;
out vec4 vColor;
${x}
float interp(float value, vec2 domain, vec2 range) {
float r = min(max((value - domain.x) / (domain.y - domain.x), 0.), 1.);
return mix(range.x, range.y, r);
}
vec4 interp(float value, vec2 domain, sampler2D range) {
float r = (value - domain.x) / (domain.y - domain.x);
return texture(range, vec2(r, 0.5));
}
void main(void) {
geometry.pickingColor = instancePickingColors;
if (isnan(instanceColorValues) ||
instanceColorValues < hexagon.colorDomain.z ||
instanceColorValues > hexagon.colorDomain.w ||
instanceElevationValues < hexagon.elevationDomain.z ||
instanceElevationValues > hexagon.elevationDomain.w
) {
gl_Position = vec4(0.);
return;
}
vec2 commonPosition = hexbinCentroid(instancePositions, column.radius) + (hexagon.originCommon - project.commonOrigin.xy);
commonPosition += positions.xy * column.radius * column.coverage;
geometry.position = vec4(commonPosition, 0.0, 1.0);
geometry.normal = project_normal(normals);
float elevation = 0.0;
if (column.extruded) {
elevation = interp(instanceElevationValues, hexagon.elevationDomain.xy, hexagon.elevationRange);
elevation = project_size(elevation);
geometry.position.z = (positions.z + 1.0) / 2.0 * elevation;
}
gl_Position = project_common_position_to_clipspace(geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
vColor = interp(instanceColorValues, hexagon.colorDomain.xy, colorRange);
vColor.a *= layer.opacity;
if (column.extruded) {
vColor.rgb = lighting_getLightColor(vColor.rgb, project.cameraPosition, geometry.position.xyz, geometry.normal);
}
DECKGL_FILTER_COLOR(vColor, geometry);
}
`,V={name:"hexagon",vs:`\
uniform hexagonUniforms {
  vec4 colorDomain;
  vec4 elevationDomain;
  vec2 elevationRange;
  vec2 originCommon;
} hexagon;
`,uniformTypes:{colorDomain:"vec4<f32>",elevationDomain:"vec4<f32>",elevationRange:"vec2<f32>",originCommon:"vec2<f32>"}};function P(){return(P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i])}return e}).apply(this,arguments)}class S extends d.A{getShaders(){let e=super.getShaders();return e.modules.push(V),P({},e,{vs:b})}initializeState(){super.initializeState();let e=this.getAttributeManager();e.remove(["instanceElevations","instanceFillColors","instanceLineColors","instanceStrokeWidths"]),e.addInstanced({instancePositions:{size:2,type:"float32",accessor:"getBin"},instanceColorValues:{size:1,type:"float32",accessor:"getColorValue"},instanceElevationValues:{size:1,type:"float32",accessor:"getElevationValue"}})}updateState(e){super.updateState(e);let{props:t,oldProps:o}=e,i=this.state.fillModel;if(o.colorRange!==t.colorRange){var a;null==(a=this.state.colorTexture)||a.destroy(),this.state.colorTexture=(0,c.cp)(this.context.device,t.colorRange,t.colorScaleType);let e={colorRange:this.state.colorTexture};i.shaderInputs.setProps({hexagon:e})}else o.colorScaleType!==t.colorScaleType&&(0,c.Pu)(this.state.colorTexture,t.colorScaleType)}finalizeState(e){var t;super.finalizeState(e),null==(t=this.state.colorTexture)||t.destroy()}draw({uniforms:e}){let{radius:t,hexOriginCommon:o,elevationRange:i,elevationScale:a,extruded:n,coverage:r,colorDomain:s,elevationDomain:l}=this.props,u=this.props.colorCutoff||[-1/0,1/0],c=this.props.elevationCutoff||[-1/0,1/0],g=this.state.fillModel;g.vertexArray.indexBuffer&&g.setIndexBuffer(null),g.setVertexCount(this.state.fillVertexCount);let p={colorDomain:[Math.max(s[0],u[0]),Math.min(s[1],u[1]),Math.max(s[0]-1,u[0]),Math.min(s[1]+1,u[1])],elevationDomain:[Math.max(l[0],c[0]),Math.min(l[1],c[1]),Math.max(l[0]-1,c[0]),Math.min(l[1]+1,c[1])],elevationRange:[i[0]*a,i[1]*a],originCommon:o};g.shaderInputs.setProps({column:{extruded:n,coverage:r,radius:t},hexagon:p}),g.draw(this.context.renderPass)}}S.layerName="HexagonCellLayer";let A={name:"binOptions",vs:`\
uniform binOptionsUniforms {
  vec2 hexOriginCommon;
  float radiusCommon;
} binOptions;
`,uniformTypes:{hexOriginCommon:"vec2<f32>",radiusCommon:"f32"}};function D(){return(D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i])}return e}).apply(this,arguments)}function T(){}let w={gpuAggregation:!0,colorDomain:null,colorRange:c.QO,getColorValue:{type:"accessor",value:null},getColorWeight:{type:"accessor",value:1},colorAggregation:"SUM",lowerPercentile:{type:"number",min:0,max:100,value:0},upperPercentile:{type:"number",min:0,max:100,value:100},colorScaleType:"quantize",onSetColorDomain:T,elevationDomain:null,elevationRange:[0,1e3],getElevationValue:{type:"accessor",value:null},getElevationWeight:{type:"accessor",value:1},elevationAggregation:"SUM",elevationScale:{type:"number",min:0,value:1},elevationLowerPercentile:{type:"number",min:0,max:100,value:0},elevationUpperPercentile:{type:"number",min:0,max:100,value:100},elevationScaleType:"linear",onSetElevationDomain:T,radius:{type:"number",min:1,value:1e3},coverage:{type:"number",min:0,max:1,value:1},getPosition:{type:"accessor",value:e=>e.position},hexagonAggregator:{type:"function",optional:!0,value:null},extruded:!1,material:!0};class M extends u.A{getAggregatorType(){let{gpuAggregation:e,hexagonAggregator:t,getColorValue:o,getElevationValue:a}=this.props;return e&&(t||o||a)?(i.A.warn("Features not supported by GPU aggregation, falling back to CPU")(),"cpu"):e&&s.V.isSupported(this.context.device)?"gpu":"cpu"}createAggregator(e){if("cpu"===e){let{hexagonAggregator:e,radius:t}=this.props;return new l.M({dimensions:2,getBin:{sources:["positions"],getValue:({positions:o},i,a)=>{if(e)return e(o,t);let n=this.state.aggregatorViewport.projectPosition(o),{radiusCommon:r,hexOriginCommon:s}=a;return f([n[0]-s[0],n[1]-s[1]],r)}},getValue:[{sources:["colorWeights"],getValue:({colorWeights:e})=>e},{sources:["elevationWeights"],getValue:({elevationWeights:e})=>e}]})}return new s.V(this.context.device,D({dimensions:2,channelCount:2,bufferLayout:this.getAttributeManager().getBufferLayouts({isInstanced:!1})},super.getShaders({modules:[a.A,A],vs:`
  in vec3 positions;
  in vec3 positions64Low;
  in float colorWeights;
  in float elevationWeights;
  
  ${y}

  void getBin(out ivec2 binId) {
    vec3 positionCommon = project_position(positions, positions64Low);
    binId = pointToHexbin(positionCommon.xy, binOptions.radiusCommon);
  }
  void getValue(out vec2 value) {
    value = vec2(colorWeights, elevationWeights);
  }
  `})))}initializeState(){super.initializeState(),this.getAttributeManager().add({positions:{size:3,accessor:"getPosition",type:"float64",fp64:this.use64bitPositions()},colorWeights:{size:1,accessor:"getColorWeight"},elevationWeights:{size:1,accessor:"getElevationWeight"}})}updateState(e){let t=super.updateState(e),{props:o,oldProps:i,changeFlags:a}=e,{aggregator:r}=this.state;if((a.dataChanged||!this.state.dataAsArray)&&(o.getColorValue||o.getElevationValue)&&(this.state.dataAsArray=Array.from((0,n.X)(o.data).iterable)),t||a.dataChanged||o.radius!==i.radius||o.getColorValue!==i.getColorValue||o.getElevationValue!==i.getElevationValue||o.colorAggregation!==i.colorAggregation||o.elevationAggregation!==i.elevationAggregation){this._updateBinOptions();let{radiusCommon:e,hexOriginCommon:t,binIdRange:i,dataAsArray:a}=this.state;if(r.setProps({binIdRange:i,pointCount:this.getNumInstances(),operations:[o.colorAggregation,o.elevationAggregation],binOptions:{radiusCommon:e,hexOriginCommon:t},onUpdate:this._onAggregationUpdate.bind(this)}),a){let{getColorValue:e,getElevationValue:t}=this.props;r.setProps({customOperations:[e&&(t=>e(t.map(e=>a[e]),{indices:t,data:o.data})),t&&(e=>t(e.map(e=>a[e]),{indices:e,data:o.data}))]})}}return a.updateTriggersChanged&&a.updateTriggersChanged.getColorValue&&r.setNeedsUpdate(0),a.updateTriggersChanged&&a.updateTriggersChanged.getElevationValue&&r.setNeedsUpdate(1),t}_updateBinOptions(){let e=this.getBounds(),t=1,o=[0,0],i=[[0,1],[0,1]],a=this.context.viewport;if(e&&Number.isFinite(e[0][0])){let n=[(e[0][0]+e[1][0])/2,(e[0][1]+e[1][1])/2],{radius:s}=this.props,{unitsPerMeter:l}=a.getDistanceScales(n);t=l[0]*s;let u=f(a.projectFlat(n),t);n=a.unprojectFlat(C(u,t));let c=a.constructor;o=[Math.fround((a=a.isGeospatial?new c({longitude:n[0],latitude:n[1],zoom:12}):new r.A({position:[n[0],n[1],0],zoom:12})).center[0]),Math.fround(a.center[1])],i=(0,p.O)({dataBounds:e,getBinId:e=>{let i=a.projectFlat(e);return i[0]-=o[0],i[1]-=o[1],f(i,t)},padding:1})}this.setState({radiusCommon:t,hexOriginCommon:o,binIdRange:i,aggregatorViewport:a})}draw(e){e.shaderModuleProps.project&&(e.shaderModuleProps.project.viewport=this.state.aggregatorViewport),super.draw(e)}_onAggregationUpdate({channel:e}){let t=this.getCurrentLayer().props,{aggregator:o}=this.state;if(0===e){let e=o.getResult(0);this.setState({colors:new g.bg(e,o.binCount)}),t.onSetColorDomain(o.getResultDomain(0))}else if(1===e){let e=o.getResult(1);this.setState({elevations:new g.bg(e,o.binCount)}),t.onSetElevationDomain(o.getResultDomain(1))}}onAttributeChange(e){let{aggregator:t}=this.state;switch(e){case"positions":t.setNeedsUpdate(),this._updateBinOptions();let{radiusCommon:o,hexOriginCommon:i,binIdRange:a}=this.state;t.setProps({binIdRange:a,binOptions:{radiusCommon:o,hexOriginCommon:i}});break;case"colorWeights":t.setNeedsUpdate(0);break;case"elevationWeights":t.setNeedsUpdate(1)}}renderLayers(){var e,t;let{aggregator:o,radiusCommon:i,hexOriginCommon:a}=this.state,{elevationScale:n,colorRange:r,elevationRange:s,extruded:l,coverage:u,material:c,transitions:g,colorScaleType:p,lowerPercentile:d,upperPercentile:v,colorDomain:m,elevationScaleType:f,elevationLowerPercentile:y,elevationUpperPercentile:C,elevationDomain:x}=this.props,b=this.getSubLayerClass("cells",S),V=o.getBins(),P=null==(e=this.state.colors)?void 0:e.update({scaleType:p,lowerPercentile:d,upperPercentile:v}),A=null==(t=this.state.elevations)?void 0:t.update({scaleType:f,lowerPercentile:y,upperPercentile:C});return P&&A?new b(this.getSubLayerProps({id:"cells"}),{data:{length:o.binCount,attributes:{getBin:V,getColorValue:P.attribute,getElevationValue:A.attribute}},dataComparator:(e,t)=>e.length===t.length,updateTriggers:{getBin:[V],getColorValue:[P.attribute],getElevationValue:[A.attribute]},diskResolution:6,vertices:h,radius:i,hexOriginCommon:a,elevationScale:n,colorRange:r,colorScaleType:p,elevationRange:s,extruded:l,coverage:u,material:c,colorDomain:P.domain||m||o.getResultDomain(0),elevationDomain:A.domain||x||o.getResultDomain(1),colorCutoff:P.cutoff,elevationCutoff:A.cutoff,transitions:g&&{getFillColor:g.getColorValue||g.getColorWeight,getElevation:g.getElevationValue||g.getElevationWeight},extensions:[]}):null}getPickingInfo(e){let t=e.info,{index:o}=t;if(o>=0){let e,i=this.state.aggregator.getBin(o);if(i){let t=C(i.id,this.state.radiusCommon),o=this.context.viewport.unprojectFlat(t);e={col:i.id[0],row:i.id[1],position:o,colorValue:i.value[0],elevationValue:i.value[1],count:i.count},i.pointIndices&&(e.pointIndices=i.pointIndices,e.points=Array.isArray(this.props.data)?i.pointIndices.map(e=>this.props.data[e]):[])}t.object=e}return t}}M.layerName="HexagonLayer",M.defaultProps=w;let E=M}}]);