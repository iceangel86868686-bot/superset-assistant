"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[3096],{21810(t,e,i){i.d(e,{A:()=>a});var o=i(37604),s=i(57594),n=i(98480),r=i(44992);class a{constructor(t){this.indexStarts=[0],this.vertexStarts=[0],this.vertexCount=0,this.instanceCount=0;const{attributes:e={}}=t;this.typedArrayManager=s.A,this.attributes={},this._attributeDefs=e,this.opts=t,this.updateGeometry(t)}updateGeometry(t){Object.assign(this.opts,t);let{data:e,buffers:i={},getGeometry:o,geometryBuffer:s,positionFormat:r,dataChanged:a,normalize:l=!0}=this.opts;if(this.data=e,this.getGeometry=o,this.positionSize=s&&s.size||("XY"===r?2:3),this.buffers=i,this.normalize=l,s&&((0,n.A)(e.startIndices),this.getGeometry=this.getGeometryFromBuffer(s),l||(i.vertexPositions=s)),this.geometryBuffer=i.vertexPositions,Array.isArray(a))for(let t of a)this._rebuildGeometry(t);else this._rebuildGeometry()}updatePartialGeometry({startRow:t,endRow:e}){this._rebuildGeometry({startRow:t,endRow:e})}getGeometryFromBuffer(t){let e=t.value||t;return ArrayBuffer.isView(e)?(0,o.I)(e,{size:this.positionSize,offset:t.offset,stride:t.stride,startIndices:this.data.startIndices}):null}_allocate(t,e){let{attributes:i,buffers:o,_attributeDefs:s,typedArrayManager:n}=this;for(let r in s)if(r in o)n.release(i[r]),i[r]=null;else{let o=s[r];o.copy=e,i[r]=n.allocate(i[r],t,o)}}_forEachGeometry(t,e,i){let{data:s,getGeometry:n}=this,{iterable:r,objectInfo:a}=(0,o.X)(s,e,i);for(let e of r)a.index++,t(n?n(e,a):null,a.index)}_rebuildGeometry(t){if(!this.data)return;let{indexStarts:e,vertexStarts:i,instanceCount:o}=this,{data:s,geometryBuffer:n}=this,{startRow:a=0,endRow:l=1/0}=t||{},c={};if(t||(e=[0],i=[0]),this.normalize||!n)this._forEachGeometry((t,e)=>{let o=t&&this.normalizeGeometry(t);c[e]=o,i[e+1]=i[e]+(o?this.getGeometrySize(o):0)},a,l),o=i[i.length-1];else if(o=(i=s.startIndices)[s.length]||0,ArrayBuffer.isView(n))o=o||n.length/this.positionSize;else if(n instanceof r.h){let t=4*this.positionSize;o=o||n.byteLength/t}else if(n.buffer){let t=n.stride||4*this.positionSize;o=o||n.buffer.byteLength/t}else if(n.value){let t=n.value,e=n.stride/t.BYTES_PER_ELEMENT||this.positionSize;o=o||t.length/e}this._allocate(o,!!t),this.indexStarts=e,this.vertexStarts=i,this.instanceCount=o;let p={};this._forEachGeometry((t,s)=>{let n=c[s]||t;p.vertexStart=i[s],p.indexStart=e[s],p.geometrySize=(s<i.length-1?i[s+1]:o)-i[s],p.geometryIndex=s,this.updateGeometryAttributes(n,p)},a,l),this.vertexCount=e[e.length-1]}}},23096(t,e,i){i.d(e,{A:()=>S});var o=i(15473),s=i(38706),n=i(82849),r=i(59),a=i(25140),l=i(65771),c=i(21810),p=i(82050);class d extends c.A{constructor(t){super({...t,attributes:{positions:{size:3,padding:18,initialize:!0,type:t.fp64?Float64Array:Float32Array},segmentTypes:{size:1,type:Uint8ClampedArray}}})}get(t){return this.attributes[t]}getGeometryFromBuffer(t){return this.normalize?super.getGeometryFromBuffer(t):null}normalizeGeometry(t){return this.normalize?function(t,e,i,o){let s;if(Array.isArray(t[0])){s=Array(t.length*e);for(let i=0;i<t.length;i++)for(let o=0;o<e;o++)s[i*e+o]=t[i][o]||0}else s=t;return i?(0,p.Mk)(s,{size:e,gridResolution:i}):o?(0,p.Iy)(s,{size:e}):s}(t,this.positionSize,this.opts.resolution,this.opts.wrapLongitude):t}getGeometrySize(t){if(h(t)){let e=0;for(let i of t)e+=this.getGeometrySize(i);return e}let e=this.getPathLength(t);return e<2?0:this.isClosed(t)?e<3?0:e+2:e}updateGeometryAttributes(t,e){if(0!==e.geometrySize)if(t&&h(t))for(let i of t){let t=this.getGeometrySize(i);e.geometrySize=t,this.updateGeometryAttributes(i,e),e.vertexStart+=t}else this._updateSegmentTypes(t,e),this._updatePositions(t,e)}_updateSegmentTypes(t,e){let i=this.attributes.segmentTypes,o=!!t&&this.isClosed(t),{vertexStart:s,geometrySize:n}=e;i.fill(0,s,s+n),o?(i[s]=4,i[s+n-2]=4):(i[s]+=1,i[s+n-2]+=2),i[s+n-1]=4}_updatePositions(t,e){let{positions:i}=this.attributes;if(!i||!t)return;let{vertexStart:o,geometrySize:s}=e,n=[,,,];for(let e=o,r=0;r<s;e++,r++)this.getPointOnPath(t,r,n),i[3*e]=n[0],i[3*e+1]=n[1],i[3*e+2]=n[2]}getPathLength(t){return t.length/this.positionSize}getPointOnPath(t,e,i=[]){let{positionSize:o}=this;e*o>=t.length&&(e+=1-t.length/o);let s=e*o;return i[0]=t[s],i[1]=t[s+1],i[2]=3===o&&t[s+2]||0,i}isClosed(t){if(!this.normalize)return!!this.opts.loop;let{positionSize:e}=this,i=t.length-e;return t[0]===t[i]&&t[1]===t[i+1]&&(2===e||t[2]===t[i+2])}}function h(t){return Array.isArray(t[0])}let f=`\
uniform pathUniforms {
  float widthScale;
  float widthMinPixels;
  float widthMaxPixels;
  float jointType;
  float capType;
  float miterLimit;
  bool billboard;
  highp int widthUnits;
} path;
`,u={name:"path",vs:f,fs:f,uniformTypes:{widthScale:"f32",widthMinPixels:"f32",widthMaxPixels:"f32",jointType:"f32",capType:"f32",miterLimit:"f32",billboard:"f32",widthUnits:"i32"}},g=`\
#version 300 es
#define SHADER_NAME path-layer-vertex-shader
in vec2 positions;
in float instanceTypes;
in vec3 instanceStartPositions;
in vec3 instanceEndPositions;
in vec3 instanceLeftPositions;
in vec3 instanceRightPositions;
in vec3 instanceLeftPositions64Low;
in vec3 instanceStartPositions64Low;
in vec3 instanceEndPositions64Low;
in vec3 instanceRightPositions64Low;
in float instanceStrokeWidths;
in vec4 instanceColors;
in vec3 instancePickingColors;
uniform float opacity;
out vec4 vColor;
out vec2 vCornerOffset;
out float vMiterLength;
out vec2 vPathPosition;
out float vPathLength;
out float vJointType;
const float EPSILON = 0.001;
const vec3 ZERO_OFFSET = vec3(0.0);
float flipIfTrue(bool flag) {
return -(float(flag) * 2. - 1.);
}
vec3 getLineJoinOffset(
vec3 prevPoint, vec3 currPoint, vec3 nextPoint,
vec2 width
) {
bool isEnd = positions.x > 0.0;
float sideOfPath = positions.y;
float isJoint = float(sideOfPath == 0.0);
vec3 deltaA3 = (currPoint - prevPoint);
vec3 deltaB3 = (nextPoint - currPoint);
mat3 rotationMatrix;
bool needsRotation = !path.billboard && project_needs_rotation(currPoint, rotationMatrix);
if (needsRotation) {
deltaA3 = deltaA3 * rotationMatrix;
deltaB3 = deltaB3 * rotationMatrix;
}
vec2 deltaA = deltaA3.xy / width;
vec2 deltaB = deltaB3.xy / width;
float lenA = length(deltaA);
float lenB = length(deltaB);
vec2 dirA = lenA > 0. ? normalize(deltaA) : vec2(0.0, 0.0);
vec2 dirB = lenB > 0. ? normalize(deltaB) : vec2(0.0, 0.0);
vec2 perpA = vec2(-dirA.y, dirA.x);
vec2 perpB = vec2(-dirB.y, dirB.x);
vec2 tangent = dirA + dirB;
tangent = length(tangent) > 0. ? normalize(tangent) : perpA;
vec2 miterVec = vec2(-tangent.y, tangent.x);
vec2 dir = isEnd ? dirA : dirB;
vec2 perp = isEnd ? perpA : perpB;
float L = isEnd ? lenA : lenB;
float sinHalfA = abs(dot(miterVec, perp));
float cosHalfA = abs(dot(dirA, miterVec));
float turnDirection = flipIfTrue(dirA.x * dirB.y >= dirA.y * dirB.x);
float cornerPosition = sideOfPath * turnDirection;
float miterSize = 1.0 / max(sinHalfA, EPSILON);
miterSize = mix(
min(miterSize, max(lenA, lenB) / max(cosHalfA, EPSILON)),
miterSize,
step(0.0, cornerPosition)
);
vec2 offsetVec = mix(miterVec * miterSize, perp, step(0.5, cornerPosition))
* (sideOfPath + isJoint * turnDirection);
bool isStartCap = lenA == 0.0 || (!isEnd && (instanceTypes == 1.0 || instanceTypes == 3.0));
bool isEndCap = lenB == 0.0 || (isEnd && (instanceTypes == 2.0 || instanceTypes == 3.0));
bool isCap = isStartCap || isEndCap;
if (isCap) {
offsetVec = mix(perp * sideOfPath, dir * path.capType * 4.0 * flipIfTrue(isStartCap), isJoint);
vJointType = path.capType;
} else {
vJointType = path.jointType;
}
vPathLength = L;
vCornerOffset = offsetVec;
vMiterLength = dot(vCornerOffset, miterVec * turnDirection);
vMiterLength = isCap ? isJoint : vMiterLength;
vec2 offsetFromStartOfPath = vCornerOffset + deltaA * float(isEnd);
vPathPosition = vec2(
dot(offsetFromStartOfPath, perp),
dot(offsetFromStartOfPath, dir)
);
geometry.uv = vPathPosition;
float isValid = step(instanceTypes, 3.5);
vec3 offset = vec3(offsetVec * width * isValid, 0.0);
if (needsRotation) {
offset = rotationMatrix * offset;
}
return offset;
}
void clipLine(inout vec4 position, vec4 refPosition) {
if (position.w < EPSILON) {
float r = (EPSILON - refPosition.w) / (position.w - refPosition.w);
position = refPosition + (position - refPosition) * r;
}
}
void main() {
geometry.pickingColor = instancePickingColors;
vColor = vec4(instanceColors.rgb, instanceColors.a * layer.opacity);
float isEnd = positions.x;
vec3 prevPosition = mix(instanceLeftPositions, instanceStartPositions, isEnd);
vec3 prevPosition64Low = mix(instanceLeftPositions64Low, instanceStartPositions64Low, isEnd);
vec3 currPosition = mix(instanceStartPositions, instanceEndPositions, isEnd);
vec3 currPosition64Low = mix(instanceStartPositions64Low, instanceEndPositions64Low, isEnd);
vec3 nextPosition = mix(instanceEndPositions, instanceRightPositions, isEnd);
vec3 nextPosition64Low = mix(instanceEndPositions64Low, instanceRightPositions64Low, isEnd);
geometry.worldPosition = currPosition;
vec2 widthPixels = vec2(clamp(
project_size_to_pixel(instanceStrokeWidths * path.widthScale, path.widthUnits),
path.widthMinPixels, path.widthMaxPixels) / 2.0);
vec3 width;
if (path.billboard) {
vec4 prevPositionScreen = project_position_to_clipspace(prevPosition, prevPosition64Low, ZERO_OFFSET);
vec4 currPositionScreen = project_position_to_clipspace(currPosition, currPosition64Low, ZERO_OFFSET, geometry.position);
vec4 nextPositionScreen = project_position_to_clipspace(nextPosition, nextPosition64Low, ZERO_OFFSET);
clipLine(prevPositionScreen, currPositionScreen);
clipLine(nextPositionScreen, currPositionScreen);
clipLine(currPositionScreen, mix(nextPositionScreen, prevPositionScreen, isEnd));
width = vec3(widthPixels, 0.0);
DECKGL_FILTER_SIZE(width, geometry);
vec3 offset = getLineJoinOffset(
prevPositionScreen.xyz / prevPositionScreen.w,
currPositionScreen.xyz / currPositionScreen.w,
nextPositionScreen.xyz / nextPositionScreen.w,
project_pixel_size_to_clipspace(width.xy)
);
DECKGL_FILTER_GL_POSITION(currPositionScreen, geometry);
gl_Position = vec4(currPositionScreen.xyz + offset * currPositionScreen.w, currPositionScreen.w);
} else {
prevPosition = project_position(prevPosition, prevPosition64Low);
currPosition = project_position(currPosition, currPosition64Low);
nextPosition = project_position(nextPosition, nextPosition64Low);
width = vec3(project_pixel_size(widthPixels), 0.0);
DECKGL_FILTER_SIZE(width, geometry);
vec3 offset = getLineJoinOffset(prevPosition, currPosition, nextPosition, width.xy);
geometry.position = vec4(currPosition + offset, 1.0);
gl_Position = project_common_position_to_clipspace(geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
}
DECKGL_FILTER_COLOR(vColor, geometry);
}
`,P=`\
#version 300 es
#define SHADER_NAME path-layer-fragment-shader
precision highp float;
in vec4 vColor;
in vec2 vCornerOffset;
in float vMiterLength;
in vec2 vPathPosition;
in float vPathLength;
in float vJointType;
out vec4 fragColor;
void main(void) {
geometry.uv = vPathPosition;
if (vPathPosition.y < 0.0 || vPathPosition.y > vPathLength) {
if (vJointType > 0.5 && length(vCornerOffset) > 1.0) {
discard;
}
if (vJointType < 0.5 && vMiterLength > path.miterLimit + 1.0) {
discard;
}
}
fragColor = vColor;
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`,v=[0,0,0,255],y={widthUnits:"meters",widthScale:{type:"number",min:0,value:1},widthMinPixels:{type:"number",min:0,value:0},widthMaxPixels:{type:"number",min:0,value:Number.MAX_SAFE_INTEGER},jointRounded:!1,capRounded:!1,miterLimit:{type:"number",min:0,value:4},billboard:!1,_pathType:null,getPath:{type:"accessor",value:t=>t.path},getColor:{type:"accessor",value:v},getWidth:{type:"accessor",value:1},rounded:{deprecatedFor:["jointRounded","capRounded"]}},m={enter:(t,e)=>e.length?e.subarray(e.length-t.length):t};class x extends o.A{getShaders(){return super.getShaders({vs:g,fs:P,modules:[s.A,n.A,u]})}get wrapLongitude(){return!1}getBounds(){return this.getAttributeManager()?.getBounds(["vertexPositions"])}initializeState(){this.getAttributeManager().addInstanced({vertexPositions:{size:3,vertexOffset:1,type:"float64",fp64:this.use64bitPositions(),transition:m,accessor:"getPath",update:this.calculatePositions,noAlloc:!0,shaderAttributes:{instanceLeftPositions:{vertexOffset:0},instanceStartPositions:{vertexOffset:1},instanceEndPositions:{vertexOffset:2},instanceRightPositions:{vertexOffset:3}}},instanceTypes:{size:1,type:"uint8",update:this.calculateSegmentTypes,noAlloc:!0},instanceStrokeWidths:{size:1,accessor:"getWidth",transition:m,defaultValue:1},instanceColors:{size:this.props.colorFormat.length,type:"unorm8",accessor:"getColor",transition:m,defaultValue:v},instancePickingColors:{size:4,type:"uint8",accessor:(t,{index:e,target:i})=>this.encodePickingColor(t&&t.__source?t.__source.index:e,i)}}),this.setState({pathTesselator:new d({fp64:this.use64bitPositions()})})}updateState(t){super.updateState(t);let{props:e,changeFlags:i}=t,o=this.getAttributeManager();if(i.dataChanged||i.updateTriggersChanged&&(i.updateTriggersChanged.all||i.updateTriggersChanged.getPath)){let{pathTesselator:t}=this.state,s=e.data.attributes||{};t.updateGeometry({data:e.data,geometryBuffer:s.getPath,buffers:s,normalize:!e._pathType,loop:"loop"===e._pathType,getGeometry:e.getPath,positionFormat:e.positionFormat,wrapLongitude:e.wrapLongitude,resolution:this.context.viewport.resolution,dataChanged:i.dataChanged}),this.setState({numInstances:t.instanceCount,startIndices:t.vertexStarts}),i.dataChanged||o.invalidateAll()}i.extensionsChanged&&(this.state.model?.destroy(),this.state.model=this._getModel(),o.invalidateAll())}getPickingInfo(t){let e=super.getPickingInfo(t),{index:i}=e,o=this.props.data;return o[0]&&o[0].__source&&(e.object=o.find(t=>t.__source.index===i)),e}disablePickingIndex(t){let e=this.props.data;if(e[0]&&e[0].__source)for(let i=0;i<e.length;i++)e[i].__source.index===t&&this._disablePickingIndex(i);else super.disablePickingIndex(t)}draw({uniforms:t}){let{jointRounded:e,capRounded:i,billboard:o,miterLimit:s,widthUnits:n,widthScale:a,widthMinPixels:l,widthMaxPixels:c}=this.props,p=this.state.model,d={jointType:Number(e),capType:Number(i),billboard:o,widthUnits:r.p5[n],widthScale:a,miterLimit:s,widthMinPixels:l,widthMaxPixels:c};p.shaderInputs.setProps({path:d}),p.draw(this.context.renderPass)}_getModel(){return new l.K(this.context.device,{...this.getShaders(),id:this.props.id,bufferLayout:this.getAttributeManager().getBufferLayouts(),geometry:new a.V({topology:"triangle-list",attributes:{indices:new Uint16Array([0,1,2,1,4,2,1,3,4,3,5,4]),positions:{value:new Float32Array([0,0,0,-1,0,1,1,-1,1,1,1,0]),size:2}}}),isInstanced:!0})}calculatePositions(t){let{pathTesselator:e}=this.state;t.startIndices=e.vertexStarts,t.value=e.get("positions")}calculateSegmentTypes(t){let{pathTesselator:e}=this.state;t.startIndices=e.vertexStarts,t.value=e.get("segmentTypes")}}x.defaultProps=y,x.layerName="PathLayer";let S=x}}]);