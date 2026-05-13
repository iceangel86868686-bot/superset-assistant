"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[4254],{94221(e,t,i){i.d(t,{A:()=>o});var n=i(10421),s=i(71677);class r extends s.A{get isDrawable(){return!0}initializeState(){this.getAttributeManager().remove(["instancePickingColors"])}updateState(e){super.updateState(e);let t=this.getAggregatorType();if(e.changeFlags.extensionsChanged||this.state.aggregatorType!==t){var i,n;null==(i=this.state.aggregator)||i.destroy();let e=this.createAggregator(t);return e.setProps({attributes:null==(n=this.getAttributeManager())?void 0:n.attributes}),this.setState({aggregator:e,aggregatorType:t}),!0}return!1}finalizeState(e){super.finalizeState(e),this.state.aggregator.destroy()}updateAttributes(e){let{aggregator:t}=this.state;for(let i in t.setProps({attributes:e}),e)this.onAttributeChange(i);t.update()}draw({shaderModuleProps:e}){let{aggregator:t}=this.state;t.setProps({shaderModuleProps:e}),t.preDraw()}_getAttributeManager(){return new n.A(this.context.device,{id:this.props.id,stats:this.context.stats})}}r.layerName="AggregationLayer";let o=r},43012(e,t,i){i.d(t,{M:()=>l});var n=i(89877);let s=(e,t)=>{let i=0;for(let n of e)i+=t(n);return i},r={COUNT:e=>e.length,SUM:s,MEAN:(e,t)=>0===e.length?NaN:s(e,t)/e.length,MIN:(e,t)=>{let i=1/0;for(let n of e){let e=t(n);e<i&&(i=e)}return i},MAX:(e,t)=>{let i=-1/0;for(let n of e){let e=t(n);e>i&&(i=e)}return i}};function o(e,t,i){let n={};for(let i of e.sources||[]){let e=t[i];if(e)n[i]=function(e){let t,i=e.value,{offset:n=0,stride:s,size:r}=e.getAccessor(),o=i.BYTES_PER_ELEMENT,a=n/o,l=s?s/o:r;return 1===r?e.isConstant?()=>i[0]:e=>i[a+l*e]:e.isConstant?(t=Array.from(i),()=>t):(t=Array(r),e=>{let n=a+l*e;for(let e=0;e<r;e++)t[e]=i[n+e];return t})}(e);else throw Error(`Cannot find attribute ${i}`)}let s={};return t=>{for(let e in n)s[e]=n[e](t);return e.getValue(s,t,i)}}function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}class l{destroy(){}get binCount(){return this.bins.length}setProps(e){let t=this.props;if(e.binOptions&&!(0,n.b)(e.binOptions,t.binOptions,2)&&this.setNeedsUpdate(),e.operations)for(let i=0;i<this.channelCount;i++)e.operations[i]!==t.operations[i]&&this.setNeedsUpdate(i);if(e.customOperations)for(let i=0;i<this.channelCount;i++)!!e.customOperations[i]!=!!t.customOperations[i]&&this.setNeedsUpdate(i);void 0!==e.pointCount&&e.pointCount!==t.pointCount&&this.setNeedsUpdate(),e.attributes&&(e.attributes=a({},t.attributes,e.attributes)),Object.assign(this.props,e)}setNeedsUpdate(e){void 0===e?this.needsUpdate=!0:!0!==this.needsUpdate&&(this.needsUpdate=this.needsUpdate||[],this.needsUpdate[e]=!0)}update(){var e,t;if(!0===this.needsUpdate){this.bins=function({pointCount:e,getBinId:t}){let i=new Map;for(let n=0;n<e;n++){let e=t(n);if(null===e)continue;let s=i.get(String(e));s?s.points.push(n):(s={id:e,index:i.size,points:[n]},i.set(String(e),s))}return Array.from(i.values())}({pointCount:this.props.pointCount,getBinId:o(this.props.getBin,this.props.attributes,this.props.binOptions)});let t=function({bins:e,dimensions:t,target:i}){let n=e.length*t;(!i||i.length<n)&&(i=new Float32Array(n));for(let n=0;n<e.length;n++){let{id:s}=e[n];Array.isArray(s)?i.set(s,n*t):i[n]=s}return i}({bins:this.bins,dimensions:this.dimensions,target:null==(e=this.binIds)?void 0:e.value});this.binIds={value:t,type:"float32",size:this.dimensions}}for(let e=0;e<this.channelCount;e++)if(!0===this.needsUpdate||this.needsUpdate[e]){let i=this.props.customOperations[e]||r[this.props.operations[e]],{value:n,domain:s}=function({bins:e,getValue:t,operation:i,target:n}){(!n||n.length<e.length)&&(n=new Float32Array(e.length));let s=1/0,r=-1/0;for(let o=0;o<e.length;o++){let{points:a}=e[o];n[o]=i(a,t),n[o]<s&&(s=n[o]),n[o]>r&&(r=n[o])}return{value:n,domain:[s,r]}}({bins:this.bins,getValue:o(this.props.getValue[e],this.props.attributes,void 0),operation:i,target:null==(t=this.results[e])?void 0:t.value});this.results[e]={value:n,domain:s,type:"float32",size:1},null==this.props.onUpdate||this.props.onUpdate.call(this.props,{channel:e})}this.needsUpdate=!1}preDraw(){}getBins(){return this.binIds}getResult(e){return this.results[e]}getResultDomain(e){var t,i;return null!=(t=null==(i=this.results[e])?void 0:i.domain)?t:[1/0,-1/0]}getBin(e){let t=this.bins[e];if(!t)return null;let i=Array(this.channelCount);for(let t=0;t<i.length;t++){let n=this.results[t];i[t]=null==n?void 0:n.value[e]}return{id:t.id,value:i,count:t.points.length,pointIndices:t.points}}constructor(e){this.bins=[],this.binIds=null,this.results=[],this.dimensions=e.dimensions,this.channelCount=e.getValue.length,this.props=a({},e,{binOptions:{},pointCount:0,operations:[],customOperations:[],attributes:{}}),this.needsUpdate=!0,this.setProps(e)}}},71965(e,t,i){i.d(t,{V:()=>c});var n=i(65771);function s(e,t,i){return e.createFramebuffer({width:t,height:i,colorAttachments:[e.createTexture({width:t,height:i,format:"rgba32float",sampler:{minFilter:"nearest",magFilter:"nearest"}})]})}let r={name:"binSorter",vs:`\
uniform binSorterUniforms {
  ivec4 binIdRange;
  ivec2 targetSize;
} binSorter;
`,uniformTypes:{binIdRange:"vec4<i32>",targetSize:"vec2<i32>"}};function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}let a=[1,2,4,8],l={SUM:0,MEAN:0,MIN:0,MAX:0,COUNT:0};class u{get texture(){return this.binsFBO?this.binsFBO.colorAttachments[0].texture:null}destroy(){var e,t;this.model.destroy(),null==(e=this.binsFBO)||e.colorAttachments[0].texture.destroy(),null==(t=this.binsFBO)||t.destroy()}getBinValues(e){if(!this.binsFBO)return null;let t=Math.floor(e/1024);return new Float32Array(this.device.readPixelsToArrayWebGL(this.binsFBO,{sourceX:e%1024,sourceY:t,sourceWidth:1,sourceHeight:1}).buffer)}setDimensions(e,t){var i,n;let r=Math.ceil(e/1024);this.binsFBO?this.binsFBO.height<r&&this.binsFBO.resize({width:1024,height:r}):this.binsFBO=s(this.device,1024,r);let o={binIdRange:[t[0][0],t[0][1],(null==(i=t[1])?void 0:i[0])||0,(null==(n=t[1])?void 0:n[1])||0],targetSize:[this.binsFBO.width,this.binsFBO.height]};this.model.shaderInputs.setProps({binSorter:o})}setModelProps(e){let t=this.model;e.attributes&&t.setAttributes(e.attributes),e.constantAttributes&&t.setConstantAttributes(e.constantAttributes),void 0!==e.vertexCount&&t.setVertexCount(e.vertexCount),e.shaderModuleProps&&t.shaderInputs.setProps(e.shaderModuleProps)}update(e){if(!this.binsFBO)return;let t=function(e){let t=o({},l);for(let i=0;i<e.length;i++){let n=e[i];n&&(t[n]+=a[i])}return t}(e);this._updateBins("SUM",t.SUM+t.MEAN),this._updateBins("MIN",t.MIN),this._updateBins("MAX",t.MAX)}_updateBins(e,t){if(0===t)return;t|=a[3];let i=this.model,n=this.binsFBO,s="MAX"===e?-3e38:3e38*("MIN"===e),r=this.device.beginRenderPass({id:`gpu-aggregation-${e}`,framebuffer:n,parameters:{viewport:[0,0,n.width,n.height],colorMask:t},clearColor:[s,s,s,0],clearDepth:!1,clearStencil:!1});i.setParameters({blend:!0,blendColorSrcFactor:"one",blendColorDstFactor:"one",blendAlphaSrcFactor:"one",blendAlphaDstFactor:"one",blendColorOperation:"MAX"===e?"max":"MIN"===e?"min":"add",blendAlphaOperation:"add"}),i.draw(r),r.end()}constructor(e,t){this.binsFBO=null,this.device=e,this.model=function(e,t){let i=t.vs;2===t.dimensions&&(i+=`
void getBin(out int binId) {
  ivec2 binId2;
  getBin(binId2);
  if (binId2.x < binSorter.binIdRange.x || binId2.x >= binSorter.binIdRange.y) {
    binId = -1;
  } else {
    binId = (binId2.y - binSorter.binIdRange.z) * (binSorter.binIdRange.y - binSorter.binIdRange.x) + binId2.x;
  }
}
`);let s=`\
#version 300 es
#define SHADER_NAME gpu-aggregation-sort-bins-vertex

${i}

out vec3 v_Value;

void main() {
  int binIndex;
  getBin(binIndex);
  binIndex = binIndex - binSorter.binIdRange.x;
  if (binIndex < 0) {
    gl_Position = vec4(0.);
    return;
  }
  int row = binIndex / binSorter.targetSize.x;
  int col = binIndex - row * binSorter.targetSize.x;
  vec2 position = (vec2(col, row) + 0.5) / vec2(binSorter.targetSize) * 2.0 - 1.0;
  gl_Position = vec4(position, 0.0, 1.0);
  gl_PointSize = 1.0;

#if NUM_CHANNELS == 3
  getValue(v_Value);
#elif NUM_CHANNELS == 2
  getValue(v_Value.xy);
#else
  getValue(v_Value.x);
#endif
}
`,a=`\
#version 300 es
#define SHADER_NAME gpu-aggregation-sort-bins-fragment

precision highp float;

in vec3 v_Value;
out vec4 fragColor;

void main() {
  fragColor.xyz = v_Value;

  #ifdef MODULE_GEOMETRY
  geometry.uv = vec2(0.);
  DECKGL_FILTER_COLOR(fragColor, geometry);
  #endif

  fragColor.w = 1.0;
}
`;return new n.K(e,{bufferLayout:t.bufferLayout,modules:[...t.modules||[],r],defines:o({},t.defines,{NON_INSTANCED_MODEL:1,NUM_CHANNELS:t.channelCount}),isInstanced:!1,vs:s,fs:a,topology:"point-list",disableWarnings:!0})}(e,t)}}var h=i(97876);let d={name:"aggregatorTransform",vs:`\
uniform aggregatorTransformUniforms {
  ivec4 binIdRange;
  bvec3 isCount;
  bvec3 isMean;
  float naN;
} aggregatorTransform;
`,uniformTypes:{binIdRange:"vec4<i32>",isCount:"vec3<f32>",isMean:"vec3<f32>"}};class g{destroy(){var e,t;this.transform.destroy(),null==(e=this.binBuffer)||e.destroy(),null==(t=this.valueBuffer)||t.destroy(),this.domainFBO.colorAttachments[0].texture.destroy(),this.domainFBO.destroy()}get domains(){if(!this._domains){let e=new Float32Array(this.device.readPixelsToArrayWebGL(this.domainFBO).buffer);this._domains=[[-e[4],e[0]],[-e[5],e[1]],[-e[6],e[2]]].slice(0,this.channelCount)}return this._domains}setDimensions(e,t){var i,n,s,r;let{model:o,transformFeedback:a}=this.transform;o.setVertexCount(e);let l={binIdRange:[t[0][0],t[0][1],(null==(i=t[1])?void 0:i[0])||0,(null==(n=t[1])?void 0:n[1])||0]};o.shaderInputs.setProps({aggregatorTransform:l});let u=e*t.length*4;(!this.binBuffer||this.binBuffer.byteLength<u)&&(null==(s=this.binBuffer)||s.destroy(),this.binBuffer=this.device.createBuffer({byteLength:u}),a.setBuffer("binIds",this.binBuffer));let h=e*this.channelCount*4;(!this.valueBuffer||this.valueBuffer.byteLength<h)&&(null==(r=this.valueBuffer)||r.destroy(),this.valueBuffer=this.device.createBuffer({byteLength:h}),a.setBuffer("values",this.valueBuffer))}update(e,t){if(!e)return;let i=this.transform,n=this.domainFBO,s=[0,1,2].map(e=>+("COUNT"===t[e])),r=[0,1,2].map(e=>+("MEAN"===t[e]));i.model.shaderInputs.setProps({aggregatorTransform:{isCount:s,isMean:r,bins:e}}),i.run({id:"gpu-aggregation-domain",framebuffer:n,parameters:{viewport:[0,0,2,1]},clearColor:[-3e38,-3e38,-3e38,0],clearDepth:!1,clearStencil:!1}),this._domains=null}constructor(e,t){this.binBuffer=null,this.valueBuffer=null,this._domains=null,this.device=e,this.channelCount=t.channelCount,this.transform=function(e,t){let i=`\
#version 300 es
#define SHADER_NAME gpu-aggregation-domain-vertex

uniform sampler2D bins;

#if NUM_DIMS == 1
out float binIds;
#else
out vec2 binIds;
#endif

#if NUM_CHANNELS == 1
flat out float values;
#elif NUM_CHANNELS == 2
flat out vec2 values;
#else
flat out vec3 values;
#endif

const float NAN = intBitsToFloat(-1);

void main() {
  int row = gl_VertexID / SAMPLER_WIDTH;
  int col = gl_VertexID - row * SAMPLER_WIDTH;
  vec4 weights = texelFetch(bins, ivec2(col, row), 0);
  vec3 value3 = mix(
    mix(weights.rgb, vec3(weights.a), aggregatorTransform.isCount),
    weights.rgb / max(weights.a, 1.0),
    aggregatorTransform.isMean
  );
  if (weights.a == 0.0) {
    value3 = vec3(NAN);
  }

#if NUM_DIMS == 1
  binIds = float(gl_VertexID + aggregatorTransform.binIdRange.x);
#else
  int y = gl_VertexID / (aggregatorTransform.binIdRange.y - aggregatorTransform.binIdRange.x);
  int x = gl_VertexID - y * (aggregatorTransform.binIdRange.y - aggregatorTransform.binIdRange.x);
  binIds.y = float(y + aggregatorTransform.binIdRange.z);
  binIds.x = float(x + aggregatorTransform.binIdRange.x);
#endif

#if NUM_CHANNELS == 3
  values = value3;
#elif NUM_CHANNELS == 2
  values = value3.xy;
#else
  values = value3.x;
#endif

  gl_Position = vec4(0., 0., 0., 1.);
  // This model renders into a 2x1 texture to obtain min and max simultaneously.
  // See comments in fragment shader
  gl_PointSize = 2.0;
}
`,n=`\
#version 300 es
#define SHADER_NAME gpu-aggregation-domain-fragment

precision highp float;

#if NUM_CHANNELS == 1
flat in float values;
#elif NUM_CHANNELS == 2
flat in vec2 values;
#else
flat in vec3 values;
#endif

out vec4 fragColor;

void main() {
  vec3 value3;
#if NUM_CHANNELS == 3
  value3 = values;
#elif NUM_CHANNELS == 2
  value3.xy = values;
#else
  value3.x = values;
#endif
  if (isnan(value3.x)) discard;
  // This shader renders into a 2x1 texture with blending=max
  // The left pixel yields the max value of each channel
  // The right pixel yields the min value of each channel
  if (gl_FragCoord.x < 1.0) {
    fragColor = vec4(value3, 1.0);
  } else {
    fragColor = vec4(-value3, 1.0);
  }
}
`;return new h.p(e,{vs:i,fs:n,topology:"point-list",modules:[d],parameters:{blend:!0,blendColorSrcFactor:"one",blendColorDstFactor:"one",blendColorOperation:"max",blendAlphaSrcFactor:"one",blendAlphaDstFactor:"one",blendAlphaOperation:"max"},defines:{NUM_DIMS:t.dimensions,NUM_CHANNELS:t.channelCount,SAMPLER_WIDTH:1024},varyings:["binIds","values"],disableWarnings:!0})}(e,t),this.domainFBO=s(e,2,1)}}var f=i(89877),p=i(48186);function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}class c{static isSupported(e){return e.features.has("float32-renderable-webgl")&&e.features.has("texture-blend-float-webgl")}getBins(){var e;let t=this.aggregationTransform.binBuffer;return t?((null==(e=this.binIds)?void 0:e.buffer)!==t&&(this.binIds={buffer:t,type:"float32",size:this.dimensions}),this.binIds):null}getResult(e){var t;let i=this.aggregationTransform.valueBuffer;return!i||e>=this.channelCount?null:((null==(t=this.results[e])?void 0:t.buffer)!==i&&(this.results[e]={buffer:i,type:"float32",size:1,stride:4*this.channelCount,offset:4*e}),this.results[e])}getResultDomain(e){return this.aggregationTransform.domains[e]}getBin(e){let t;if(e<0||e>=this.binCount)return null;let{binIdRange:i}=this.props;if(1===this.dimensions)t=[e+i[0][0]];else{let[[n,s],[r]]=i,o=s-n;t=[e%o+n,Math.floor(e/o)+r]}let n=this.binSorter.getBinValues(e);if(!n)return null;let s=n[3],r=[];for(let e=0;e<this.channelCount;e++){let t=this.props.operations[e];"COUNT"===t?r[e]=s:0===s?r[e]=NaN:r[e]="MEAN"===t?n[e]/s:n[e]}return{id:t,value:r,count:s}}destroy(){this.binSorter.destroy(),this.aggregationTransform.destroy()}setProps(e){let t=this.props;if("binIdRange"in e&&!(0,f.b)(e.binIdRange,t.binIdRange,2)){let t=e.binIdRange;if(p.A.assert(t.length===this.dimensions),1===this.dimensions){let[[e,i]]=t;this.binCount=i-e}else{let[[e,i],[n,s]]=t;this.binCount=(i-e)*(s-n)}this.binSorter.setDimensions(this.binCount,t),this.aggregationTransform.setDimensions(this.binCount,t),this.setNeedsUpdate()}if(e.operations)for(let i=0;i<this.channelCount;i++)e.operations[i]!==t.operations[i]&&this.setNeedsUpdate(i);if(void 0!==e.pointCount&&e.pointCount!==t.pointCount&&(this.binSorter.setModelProps({vertexCount:e.pointCount}),this.setNeedsUpdate()),e.binOptions&&((0,f.b)(e.binOptions,t.binOptions,2)||this.setNeedsUpdate(),this.binSorter.model.shaderInputs.setProps({binOptions:e.binOptions})),e.attributes){let t={},i={};for(let n of Object.values(e.attributes))for(let[e,s]of Object.entries(n.getValue()))ArrayBuffer.isView(s)?i[e]=s:s&&(t[e]=s);this.binSorter.setModelProps({attributes:t,constantAttributes:i})}e.shaderModuleProps&&this.binSorter.setModelProps({shaderModuleProps:e.shaderModuleProps}),Object.assign(this.props,e)}setNeedsUpdate(e){void 0===e?this.needsUpdate.fill(!0):this.needsUpdate[e]=!0}update(){}preDraw(){if(!this.needsUpdate.some(Boolean))return;let{operations:e}=this.props,t=this.needsUpdate.map((t,i)=>t?e[i]:null);this.binSorter.update(t),this.aggregationTransform.update(this.binSorter.texture,e);for(let e=0;e<this.channelCount;e++)this.needsUpdate[e]&&(this.needsUpdate[e]=!1,null==this.props.onUpdate||this.props.onUpdate.call(this.props,{channel:e}))}constructor(e,t){this.binCount=0,this.binIds=null,this.results=[],this.device=e,this.dimensions=t.dimensions,this.channelCount=t.channelCount,this.props=b({},t,{pointCount:0,binIdRange:[[0,0]],operations:[],attributes:{},binOptions:{}}),this.needsUpdate=Array(this.channelCount).fill(!0),this.binSorter=new u(e,t),this.aggregationTransform=new g(e,t),this.setProps(t)}}}}]);