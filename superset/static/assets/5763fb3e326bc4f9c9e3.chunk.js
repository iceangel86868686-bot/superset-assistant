"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[4485],{66570(e){function t(e,t,p){p=p||2;var x,f,h,g,y,m,P,w=t&&t.length,_=w?t[0]*p:e.length,C=o(e,0,_,p,!0),L=[];if(!C||C.next===C.prev)return L;if(w&&(C=function(e,t,r,a){var u,p,x,f,v,h=[];for(u=0,p=t.length;u<p;u++)x=t[u]*a,f=u<p-1?t[u+1]*a:e.length,(v=o(e,x,f,a,!1))===v.next&&(v.steiner=!0),h.push(function(e){var t=e,o=e;do(t.x<o.x||t.x===o.x&&t.y<o.y)&&(o=t),t=t.next;while(t!==e)return o}(v));for(h.sort(n),u=0;u<h.length;u++)r=function(e,t){var o=function(e,t){var o,i,n,r=t,a=e.x,u=e.y,p=-1/0;do{if(u<=r.y&&u>=r.next.y&&r.next.y!==r.y){var x=r.x+(u-r.y)*(r.next.x-r.x)/(r.next.y-r.y);if(x<=a&&x>p&&(p=x,n=r.x<r.next.x?r:r.next,x===a))return n}r=r.next}while(r!==t)if(!n)return null;var c,f=n,v=n.x,h=n.y,g=1/0;r=n;do{a>=r.x&&r.x>=v&&a!==r.x&&s(u<h?a:p,u,v,h,u<h?p:a,u,r.x,r.y)&&(c=Math.abs(u-r.y)/(a-r.x),d(r,e)&&(c<g||c===g&&(r.x>n.x||r.x===n.x&&(o=n,i=r,0>l(o.prev,o,i.prev)&&0>l(i.next,o,o.next))))&&(n=r,g=c)),r=r.next}while(r!==f)return n}(e,t);if(!o)return t;var n=c(o,e);return i(n,n.next),i(o,o.next)}(h[u],r);return r}(e,t,C,p)),e.length>80*p){x=h=e[0],f=g=e[1];for(var A=p;A<_;A+=p)y=e[A],m=e[A+1],y<x&&(x=y),m<f&&(f=m),y>h&&(h=y),m>g&&(g=m);P=0!==(P=Math.max(h-x,g-f))?32767/P:0}return function e(t,o,n,p,x,f,h){if(t){!h&&f&&function(e,t,o,i){var n=e;do 0===n.z&&(n.z=r(n.x,n.y,t,o,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==e)n.prevZ.nextZ=null,n.prevZ=null,function(e){var t,o,i,n,r,s,l,a,u=1;do{for(o=e,e=null,r=null,s=0;o;){for(s++,i=o,l=0,t=0;t<u&&(l++,i=i.nextZ);t++);for(a=u;l>0||a>0&&i;)0!==l&&(0===a||!i||o.z<=i.z)?(n=o,o=o.nextZ,l--):(n=i,i=i.nextZ,a--),r?r.nextZ=n:e=n,n.prevZ=r,r=n;o=i}r.nextZ=null,u*=2}while(s>1)}(n)}(t,p,x,f);for(var g,y,m=t;t.prev!==t.next;){if(g=t.prev,y=t.next,f?function(e,t,o,i){var n=e.prev,a=e.next;if(l(n,e,a)>=0)return!1;for(var u=n.x,p=e.x,x=a.x,d=n.y,c=e.y,f=a.y,v=u<p?u<x?u:x:p<x?p:x,h=d<c?d<f?d:f:c<f?c:f,g=u>p?u>x?u:x:p>x?p:x,y=d>c?d>f?d:f:c>f?c:f,m=r(v,h,t,o,i),P=r(g,y,t,o,i),w=e.prevZ,_=e.nextZ;w&&w.z>=m&&_&&_.z<=P;){if(w.x>=v&&w.x<=g&&w.y>=h&&w.y<=y&&w!==n&&w!==a&&s(u,d,p,c,x,f,w.x,w.y)&&l(w.prev,w,w.next)>=0||(w=w.prevZ,_.x>=v&&_.x<=g&&_.y>=h&&_.y<=y&&_!==n&&_!==a&&s(u,d,p,c,x,f,_.x,_.y)&&l(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;w&&w.z>=m;){if(w.x>=v&&w.x<=g&&w.y>=h&&w.y<=y&&w!==n&&w!==a&&s(u,d,p,c,x,f,w.x,w.y)&&l(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;_&&_.z<=P;){if(_.x>=v&&_.x<=g&&_.y>=h&&_.y<=y&&_!==n&&_!==a&&s(u,d,p,c,x,f,_.x,_.y)&&l(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}(t,p,x,f):function(e){var t=e.prev,o=e.next;if(l(t,e,o)>=0)return!1;for(var i=t.x,n=e.x,r=o.x,a=t.y,u=e.y,p=o.y,x=i<n?i<r?i:r:n<r?n:r,d=a<u?a<p?a:p:u<p?u:p,c=i>n?i>r?i:r:n>r?n:r,f=a>u?a>p?a:p:u>p?u:p,v=o.next;v!==t;){if(v.x>=x&&v.x<=c&&v.y>=d&&v.y<=f&&s(i,a,n,u,r,p,v.x,v.y)&&l(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}(t)){o.push(g.i/n|0),o.push(t.i/n|0),o.push(y.i/n|0),v(t),t=y.next,m=y.next;continue}if((t=y)===m){h?1===h?e(t=function(e,t,o){var n=e;do{var r=n.prev,s=n.next.next;!a(r,s)&&u(r,n,n.next,s)&&d(r,s)&&d(s,r)&&(t.push(r.i/o|0),t.push(n.i/o|0),t.push(s.i/o|0),v(n),v(n.next),n=e=s),n=n.next}while(n!==e)return i(n)}(i(t),o,n),o,n,p,x,f,2):2===h&&function(t,o,n,r,s,p){var x=t;do{for(var f,v,h=x.next.next;h!==x.prev;){if(x.i!==h.i&&(f=x,v=h,f.next.i!==v.i&&f.prev.i!==v.i&&!function(e,t){var o=e;do{if(o.i!==e.i&&o.next.i!==e.i&&o.i!==t.i&&o.next.i!==t.i&&u(o,o.next,e,t))return!0;o=o.next}while(o!==e)return!1}(f,v)&&(d(f,v)&&d(v,f)&&function(e,t){var o=e,i=!1,n=(e.x+t.x)/2,r=(e.y+t.y)/2;do o.y>r!=o.next.y>r&&o.next.y!==o.y&&n<(o.next.x-o.x)*(r-o.y)/(o.next.y-o.y)+o.x&&(i=!i),o=o.next;while(o!==e)return i}(f,v)&&(l(f.prev,f,v.prev)||l(f,v.prev,v))||a(f,v)&&l(f.prev,f,f.next)>0&&l(v.prev,v,v.next)>0))){var g=c(x,h);x=i(x,x.next),g=i(g,g.next),e(x,o,n,r,s,p,0),e(g,o,n,r,s,p,0);return}h=h.next}x=x.next}while(x!==t)}(t,o,n,p,x,f):e(i(t),o,n,p,x,f,1);break}}}}(C,L,p,x,f,P,0),L}function o(e,t,o,i,n){var r,s;if(n===g(e,t,o,i)>0)for(r=t;r<o;r+=i)s=f(r,e[r],e[r+1],s);else for(r=o-i;r>=t;r-=i)s=f(r,e[r],e[r+1],s);return s&&a(s,s.next)&&(v(s),s=s.next),s}function i(e,t){if(!e)return e;t||(t=e);var o,i=e;do if(o=!1,!i.steiner&&(a(i,i.next)||0===l(i.prev,i,i.next))){if(v(i),(i=t=i.prev)===i.next)break;o=!0}else i=i.next;while(o||i!==t)return t}function n(e,t){return e.x-t.x}function r(e,t,o,i,n){return(e=((e=((e=((e=((e=(e-o)*n|0)|e<<8)&0xff00ff)|e<<4)&0xf0f0f0f)|e<<2)&0x33333333)|e<<1)&0x55555555)|(t=((t=((t=((t=((t=(t-i)*n|0)|t<<8)&0xff00ff)|t<<4)&0xf0f0f0f)|t<<2)&0x33333333)|t<<1)&0x55555555)<<1}function s(e,t,o,i,n,r,s,l){return(n-s)*(t-l)>=(e-s)*(r-l)&&(e-s)*(i-l)>=(o-s)*(t-l)&&(o-s)*(r-l)>=(n-s)*(i-l)}function l(e,t,o){return(t.y-e.y)*(o.x-t.x)-(t.x-e.x)*(o.y-t.y)}function a(e,t){return e.x===t.x&&e.y===t.y}function u(e,t,o,i){var n=x(l(e,t,o)),r=x(l(e,t,i)),s=x(l(o,i,e)),a=x(l(o,i,t));return!!(n!==r&&s!==a||0===n&&p(e,o,t)||0===r&&p(e,i,t)||0===s&&p(o,e,i)||0===a&&p(o,t,i))}function p(e,t,o){return t.x<=Math.max(e.x,o.x)&&t.x>=Math.min(e.x,o.x)&&t.y<=Math.max(e.y,o.y)&&t.y>=Math.min(e.y,o.y)}function x(e){return e>0?1:e<0?-1:0}function d(e,t){return 0>l(e.prev,e,e.next)?l(e,t,e.next)>=0&&l(e,e.prev,t)>=0:0>l(e,t,e.prev)||0>l(e,e.next,t)}function c(e,t){var o=new h(e.i,e.x,e.y),i=new h(t.i,t.x,t.y),n=e.next,r=t.prev;return e.next=t,t.prev=e,o.next=n,n.prev=o,i.next=o,o.prev=i,r.next=i,i.prev=r,i}function f(e,t,o,i){var n=new h(e,t,o);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function v(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function h(e,t,o){this.i=e,this.x=t,this.y=o,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function g(e,t,o,i){for(var n=0,r=t,s=o-i;r<o;r+=i)n+=(e[s]-e[r])*(e[r+1]+e[s+1]),s=r;return n}e.exports=t,e.exports.default=t,t.deviation=function(e,t,o,i){var n=t&&t.length,r=n?t[0]*o:e.length,s=Math.abs(g(e,0,r,o));if(n)for(var l=0,a=t.length;l<a;l++){var u=t[l]*o,p=l<a-1?t[l+1]*o:e.length;s-=Math.abs(g(e,u,p,o))}var x=0;for(l=0;l<i.length;l+=3){var d=i[l]*o,c=i[l+1]*o,f=i[l+2]*o;x+=Math.abs((e[d]-e[f])*(e[c+1]-e[d+1])-(e[d]-e[c])*(e[f+1]-e[d+1]))}return 0===s&&0===x?0:Math.abs((x-s)/s)},t.flatten=function(e){for(var t=e[0][0].length,o={vertices:[],holes:[],dimensions:t},i=0,n=0;n<e.length;n++){for(var r=0;r<e[n].length;r++)for(var s=0;s<t;s++)o.vertices.push(e[n][r][s]);n>0&&(i+=e[n-1].length,o.holes.push(i))}return o}},33232(e,t,o){o.d(t,{$q:()=>v,A4:()=>u,Dt:()=>a,S8:()=>d});var i=o(66570),n=o(82050);let r=n.rJ.CLOCKWISE,s=n.rJ.COUNTER_CLOCKWISE,l={isClosed:!0};function a(e){return"positions"in e?e.positions:e}function u(e){return"holeIndices"in e?e.holeIndices:null}function p(e,t,o,i,r){let s,a,u=t,p=o.length;for(let t=0;t<p;t++)for(let n=0;n<i;n++)e[u++]=o[t][n]||0;if(s=o[0],a=o[o.length-1],s[0]!==a[0]||s[1]!==a[1]||s[2]!==a[2])for(let t=0;t<i;t++)e[u++]=o[0][t]||0;return l.start=t,l.end=u,l.size=i,(0,n.UD)(e,r,l),u}function x(e,t,o,i,r=0,s,a){let u=(s=s||o.length)-r;if(u<=0)return t;let p=t;for(let t=0;t<u;t++)e[p++]=o[r+t];if(!function(e,t,o,i){for(let n=0;n<t;n++)if(e[o+n]!==e[i-t+n])return!1;return!0}(o,i,r,s))for(let t=0;t<i;t++)e[p++]=o[r+t];return l.start=t,l.end=p,l.size=i,(0,n.UD)(e,a,l),p}function d(e,t){var o,i=e;if(!Array.isArray(i=i&&i.positions||i)&&!ArrayBuffer.isView(i))throw Error("invalid polygon");let n=[],l=[];if("positions"in e){let{positions:o,holeIndices:i}=e;if(i){let e=0;for(let a=0;a<=i.length;a++)e=x(n,e,o,t,i[a-1],i[a],0===a?r:s),l.push(e);return l.pop(),{positions:n,holeIndices:l}}e=o}if(!Array.isArray(e[0]))return x(n,0,e,t,0,n.length,r),n;if(!((o=e).length>=1&&o[0].length>=2&&Number.isFinite(o[0][0]))){let o=0;for(let[i,a]of e.entries())o=p(n,o,a,t,0===i?r:s),l.push(o);return l.pop(),{positions:n,holeIndices:l}}return p(n,0,e,t,r),n}function c(e,t,o){let i=e.length/3,n=0;for(let r=0;r<i;r++){let s=(r+1)%i;n+=e[3*r+t]*e[3*s+o],n-=e[3*s+t]*e[3*r+o]}return Math.abs(n/2)}function f(e,t,o,i){let n=e.length/3;for(let r=0;r<n;r++){let n=3*r,s=e[n+0],l=e[n+1],a=e[n+2];e[n+t]=s,e[n+o]=l,e[n+i]=a}}function v(e,t,o,n){let r=u(e);r&&(r=r.map(e=>e/t));let s=a(e),l=n&&3===t;if(o){let e=s.length;s=s.slice();let i=[];for(let n=0;n<e;n+=t){i[0]=s[n],i[1]=s[n+1],l&&(i[2]=s[n+2]);let e=o(i);s[n]=e[0],s[n+1]=e[1],l&&(s[n+2]=e[2])}}if(l){let e=c(s,0,1),t=c(s,0,2),i=c(s,1,2);if(!e&&!t&&!i)return[];e>t&&e>i||(t>i?(o||(s=s.slice()),f(s,0,2,1)):(o||(s=s.slice()),f(s,2,0,1)))}return i(s,r,t)}},9226(e,t,o){o.d(t,{A:()=>L});var i=o(15473),n=o(38706),r=o(82849),s=o(59),l=o(65771),a=o(25140),u=o(34521),p=o(33232),x=o(21810),d=o(82050);class c extends x.A{constructor(e){const{fp64:t,IndexType:o=Uint32Array}=e;super({...e,attributes:{positions:{size:3,type:t?Float64Array:Float32Array},vertexValid:{type:Uint16Array,size:1},indices:{type:o,size:1}}})}get(e){let{attributes:t}=this;return"indices"===e?t.indices&&t.indices.subarray(0,this.vertexCount):t[e]}updateGeometry(e){super.updateGeometry(e);let t=this.buffers.indices;if(t)this.vertexCount=(t.value||t).length;else if(this.data&&!this.getGeometry)throw Error("missing indices buffer")}normalizeGeometry(e){if(this.normalize){let t=p.S8(e,this.positionSize);return this.opts.resolution?(0,d.wk)(p.Dt(t),p.A4(t),{size:this.positionSize,gridResolution:this.opts.resolution,edgeTypes:!0}):this.opts.wrapLongitude?(0,d.Eg)(p.Dt(t),p.A4(t),{size:this.positionSize,maxLatitude:86,edgeTypes:!0}):t}return e}getGeometrySize(e){if(f(e)){let t=0;for(let o of e)t+=this.getGeometrySize(o);return t}return p.Dt(e).length/this.positionSize}getGeometryFromBuffer(e){return this.normalize||!this.buffers.indices?super.getGeometryFromBuffer(e):null}updateGeometryAttributes(e,t){if(e&&f(e))for(let o of e){let e=this.getGeometrySize(o);t.geometrySize=e,this.updateGeometryAttributes(o,t),t.vertexStart+=e,t.indexStart=this.indexStarts[t.geometryIndex+1]}else this._updateIndices(e,t),this._updatePositions(e,t),this._updateVertexValid(e,t)}_updateIndices(e,{geometryIndex:t,vertexStart:o,indexStart:i}){let{attributes:n,indexStarts:r,typedArrayManager:s}=this,l=n.indices;if(!l||!e)return;let a=i,u=p.$q(e,this.positionSize,this.opts.preproject,this.opts.full3d);l=s.allocate(l,i+u.length,{copy:!0});for(let e=0;e<u.length;e++)l[a++]=u[e]+o;r[t+1]=i+u.length,n.indices=l}_updatePositions(e,{vertexStart:t,geometrySize:o}){let{attributes:{positions:i},positionSize:n}=this;if(!i||!e)return;let r=p.Dt(e);for(let e=t,s=0;s<o;e++,s++){let t=r[s*n],o=r[s*n+1],l=n>2?r[s*n+2]:0;i[3*e]=t,i[3*e+1]=o,i[3*e+2]=l}}_updateVertexValid(e,{vertexStart:t,geometrySize:o}){let{positionSize:i}=this,n=this.attributes.vertexValid,r=e&&p.A4(e);if(e&&e.edgeTypes?n.set(e.edgeTypes,t):n.fill(1,t,t+o),r)for(let e=0;e<r.length;e++)n[t+r[e]/i-1]=0;n[t+o-1]=0}}function f(e){return Array.isArray(e)&&e.length>0&&!Number.isFinite(e[0])}let v=`\
uniform solidPolygonUniforms {
  bool extruded;
  bool isWireframe;
  float elevationScale;
} solidPolygon;
`,h={name:"solidPolygon",vs:v,fs:v,uniformTypes:{extruded:"f32",isWireframe:"f32",elevationScale:"f32"}},g=`\
in vec4 fillColors;
in vec4 lineColors;
in vec3 pickingColors;
out vec4 vColor;
struct PolygonProps {
vec3 positions;
vec3 positions64Low;
vec3 normal;
float elevations;
};
vec3 project_offset_normal(vec3 vector) {
if (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT ||
project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT_OFFSETS) {
return normalize(vector * project.commonUnitsPerWorldUnit);
}
return project_normal(vector);
}
void calculatePosition(PolygonProps props) {
vec3 pos = props.positions;
vec3 pos64Low = props.positions64Low;
vec3 normal = props.normal;
vec4 colors = solidPolygon.isWireframe ? lineColors : fillColors;
geometry.worldPosition = props.positions;
geometry.pickingColor = pickingColors;
if (solidPolygon.extruded) {
pos.z += props.elevations * solidPolygon.elevationScale;
}
gl_Position = project_position_to_clipspace(pos, pos64Low, vec3(0.), geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
if (solidPolygon.extruded) {
#ifdef IS_SIDE_VERTEX
normal = project_offset_normal(normal);
#else
normal = project_normal(normal);
#endif
geometry.normal = normal;
vec3 lightColor = lighting_getLightColor(colors.rgb, project.cameraPosition, geometry.position.xyz, geometry.normal);
vColor = vec4(lightColor, colors.a * layer.opacity);
} else {
vColor = vec4(colors.rgb, colors.a * layer.opacity);
}
DECKGL_FILTER_COLOR(vColor, geometry);
}
`,y=`\
#version 300 es
#define SHADER_NAME solid-polygon-layer-vertex-shader
in vec3 vertexPositions;
in vec3 vertexPositions64Low;
in float elevations;
${g}
void main(void) {
PolygonProps props;
props.positions = vertexPositions;
props.positions64Low = vertexPositions64Low;
props.elevations = elevations;
props.normal = vec3(0.0, 0.0, 1.0);
calculatePosition(props);
}
`,m=`\
#version 300 es
#define SHADER_NAME solid-polygon-layer-vertex-shader-side
#define IS_SIDE_VERTEX
in vec2 positions;
in vec3 vertexPositions;
in vec3 nextVertexPositions;
in vec3 vertexPositions64Low;
in vec3 nextVertexPositions64Low;
in float elevations;
in float instanceVertexValid;
${g}
void main(void) {
if(instanceVertexValid < 0.5){
gl_Position = vec4(0.);
return;
}
PolygonProps props;
vec3 pos;
vec3 pos64Low;
vec3 nextPos;
vec3 nextPos64Low;
#if RING_WINDING_ORDER_CW == 1
pos = vertexPositions;
pos64Low = vertexPositions64Low;
nextPos = nextVertexPositions;
nextPos64Low = nextVertexPositions64Low;
#else
pos = nextVertexPositions;
pos64Low = nextVertexPositions64Low;
nextPos = vertexPositions;
nextPos64Low = vertexPositions64Low;
#endif
props.positions = mix(pos, nextPos, positions.x);
props.positions64Low = mix(pos64Low, nextPos64Low, positions.x);
props.normal = vec3(
pos.y - nextPos.y + (pos64Low.y - nextPos64Low.y),
nextPos.x - pos.x + (nextPos64Low.x - pos64Low.x),
0.0);
props.elevations = elevations * positions.y;
calculatePosition(props);
}
`,P=`\
#version 300 es
#define SHADER_NAME solid-polygon-layer-fragment-shader
precision highp float;
in vec4 vColor;
out vec4 fragColor;
void main(void) {
fragColor = vColor;
geometry.uv = vec2(0.);
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`,w=[0,0,0,255],_={enter:(e,t)=>t.length?t.subarray(t.length-e.length):e};class C extends i.A{getShaders(e){return super.getShaders({vs:"top"===e?y:m,fs:P,defines:{RING_WINDING_ORDER_CW:this.props._normalize||"CCW"!==this.props._windingOrder?1:0},modules:[n.A,u.J,r.A,h]})}get wrapLongitude(){return!1}getBounds(){return this.getAttributeManager()?.getBounds(["vertexPositions"])}initializeState(){let e,{viewport:t}=this.context,{coordinateSystem:o}=this.props,{_full3d:i}=this.props;t.isGeospatial&&o===s.rf.DEFAULT&&(o=s.rf.LNGLAT),o===s.rf.LNGLAT&&(e=i?t.projectPosition.bind(t):t.projectFlat.bind(t)),this.setState({numInstances:0,polygonTesselator:new c({preproject:e,fp64:this.use64bitPositions(),IndexType:Uint32Array})});let n=this.getAttributeManager();n.remove(["instancePickingColors"]),n.add({indices:{size:1,isIndexed:!0,update:this.calculateIndices,noAlloc:!0},vertexPositions:{size:3,type:"float64",stepMode:"dynamic",fp64:this.use64bitPositions(),transition:_,accessor:"getPolygon",update:this.calculatePositions,noAlloc:!0,shaderAttributes:{nextVertexPositions:{vertexOffset:1}}},instanceVertexValid:{size:1,type:"uint16",stepMode:"instance",update:this.calculateVertexValid,noAlloc:!0},elevations:{size:1,stepMode:"dynamic",transition:_,accessor:"getElevation"},fillColors:{size:this.props.colorFormat.length,type:"unorm8",stepMode:"dynamic",transition:_,accessor:"getFillColor",defaultValue:w},lineColors:{size:this.props.colorFormat.length,type:"unorm8",stepMode:"dynamic",transition:_,accessor:"getLineColor",defaultValue:w},pickingColors:{size:4,type:"uint8",stepMode:"dynamic",accessor:(e,{index:t,target:o})=>this.encodePickingColor(e&&e.__source?e.__source.index:t,o)}})}getPickingInfo(e){let t=super.getPickingInfo(e),{index:o}=t,i=this.props.data;return i[0]&&i[0].__source&&(t.object=i.find(e=>e.__source.index===o)),t}disablePickingIndex(e){let t=this.props.data;if(t[0]&&t[0].__source)for(let o=0;o<t.length;o++)t[o].__source.index===e&&this._disablePickingIndex(o);else super.disablePickingIndex(e)}draw({uniforms:e}){let{extruded:t,filled:o,wireframe:i,elevationScale:n}=this.props,{topModel:r,sideModel:s,wireframeModel:l,polygonTesselator:a}=this.state,u={extruded:!!t,elevationScale:n,isWireframe:!1};l&&i&&(l.setInstanceCount(a.instanceCount-1),l.shaderInputs.setProps({solidPolygon:{...u,isWireframe:!0}}),l.draw(this.context.renderPass)),s&&o&&(s.setInstanceCount(a.instanceCount-1),s.shaderInputs.setProps({solidPolygon:u}),s.draw(this.context.renderPass)),r&&o&&(r.setVertexCount(a.vertexCount),r.shaderInputs.setProps({solidPolygon:u}),r.draw(this.context.renderPass))}updateState(e){super.updateState(e),this.updateGeometry(e);let{props:t,oldProps:o,changeFlags:i}=e,n=this.getAttributeManager();(i.extensionsChanged||t.filled!==o.filled||t.extruded!==o.extruded)&&(this.state.models?.forEach(e=>e.destroy()),this.setState(this._getModels()),n.invalidateAll())}updateGeometry({props:e,oldProps:t,changeFlags:o}){if(o.dataChanged||o.updateTriggersChanged&&(o.updateTriggersChanged.all||o.updateTriggersChanged.getPolygon)){let{polygonTesselator:t}=this.state,i=e.data.attributes||{};t.updateGeometry({data:e.data,normalize:e._normalize,geometryBuffer:i.getPolygon,buffers:i,getGeometry:e.getPolygon,positionFormat:e.positionFormat,wrapLongitude:e.wrapLongitude,resolution:this.context.viewport.resolution,fp64:this.use64bitPositions(),dataChanged:o.dataChanged,full3d:e._full3d}),this.setState({numInstances:t.instanceCount,startIndices:t.vertexStarts}),o.dataChanged||this.getAttributeManager().invalidateAll()}}_getModels(){let e,t,o,{id:i,filled:n,extruded:r}=this.props;if(n){let t=this.getShaders("top");t.defines.NON_INSTANCED_MODEL=1;let o=this.getAttributeManager().getBufferLayouts({isInstanced:!1});e=new l.K(this.context.device,{...t,id:`${i}-top`,topology:"triangle-list",bufferLayout:o,isIndexed:!0,userData:{excludeAttributes:{instanceVertexValid:!0}}})}if(r){let e=this.getAttributeManager().getBufferLayouts({isInstanced:!0});t=new l.K(this.context.device,{...this.getShaders("side"),id:`${i}-side`,bufferLayout:e,geometry:new a.V({topology:"triangle-strip",attributes:{positions:{size:2,value:new Float32Array([1,0,0,0,1,1,0,1])}}}),isInstanced:!0,userData:{excludeAttributes:{indices:!0}}}),o=new l.K(this.context.device,{...this.getShaders("side"),id:`${i}-wireframe`,bufferLayout:e,geometry:new a.V({topology:"line-strip",attributes:{positions:{size:2,value:new Float32Array([1,0,0,0,0,1,1,1])}}}),isInstanced:!0,userData:{excludeAttributes:{indices:!0}}})}return{models:[t,o,e].filter(Boolean),topModel:e,sideModel:t,wireframeModel:o}}calculateIndices(e){let{polygonTesselator:t}=this.state;e.startIndices=t.indexStarts,e.value=t.get("indices")}calculatePositions(e){let{polygonTesselator:t}=this.state;e.startIndices=t.vertexStarts,e.value=t.get("positions")}calculateVertexValid(e){e.value=this.state.polygonTesselator.get("vertexValid")}}C.defaultProps={filled:!0,extruded:!1,wireframe:!1,_normalize:!0,_windingOrder:"CW",_full3d:!1,elevationScale:{type:"number",min:0,value:1},getPolygon:{type:"accessor",value:e=>e.polygon},getElevation:{type:"accessor",value:1e3},getFillColor:{type:"accessor",value:w},getLineColor:{type:"accessor",value:w},material:!0},C.layerName="SolidPolygonLayer";let L=C},71704(e,t,o){o.d(t,{J:()=>i});function i({data:e,getIndex:t,dataRange:o,replace:n}){let{startRow:r=0,endRow:s=1/0}=o,l=e.length,a=l,u=l;for(let o=0;o<l;o++){let i=t(e[o]);if(a>o&&i>=r&&(a=o),i>=s){u=o;break}}let p=a,x=u-a!==n.length?e.slice(u):void 0;for(let t=0;t<n.length;t++)e[p++]=n[t];if(x){for(let t=0;t<x.length;t++)e[p++]=x[t];e.length=p}return{startRow:a,endRow:a+n.length}}}}]);