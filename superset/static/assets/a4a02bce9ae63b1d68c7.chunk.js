"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[9429],{71677(i,t,e){e.d(t,{A:()=>a});var o=e(15473),n=e(46714),r=e(6426),l=e(51392);class g extends o.A{get isComposite(){return!0}get isDrawable(){return!1}get isLoaded(){return super.isLoaded&&this.getSubLayers().every(i=>i.isLoaded)}getSubLayers(){return this.internalState&&this.internalState.subLayers||[]}initializeState(i){}setState(i){super.setState(i),this.setNeedsUpdate()}getPickingInfo({info:i}){let{object:t}=i;return t&&t.__source&&t.__source.parent&&t.__source.parent.id===this.id&&(i.object=t.__source.object,i.index=t.__source.index),i}filterSubLayer(i){return!0}shouldRenderSubLayer(i,t){return t&&t.length}getSubLayerClass(i,t){let{_subLayerProps:e}=this.props;return e&&e[i]&&e[i].type||t}getSubLayerRow(i,t,e){return i.__source={parent:this,object:t,index:e},i}getSubLayerAccessor(i){if("function"==typeof i){let t={index:-1,data:this.props.data,target:[]};return(e,o)=>e&&e.__source?(t.index=e.__source.index,i(e.__source.object,t)):i(e,o)}return i}getSubLayerProps(i={}){let{opacity:t,pickable:e,visible:o,parameters:n,getPolygonOffset:r,highlightedObjectIndex:g,autoHighlight:a,highlightColor:h,coordinateSystem:c,coordinateOrigin:s,wrapLongitude:d,positionFormat:u,modelMatrix:p,extensions:f,fetch:L,operation:_,_subLayerProps:v}=this.props,m={id:"",updateTriggers:{},opacity:t,pickable:e,visible:o,parameters:n,getPolygonOffset:r,highlightedObjectIndex:g,autoHighlight:a,highlightColor:h,coordinateSystem:c,coordinateOrigin:s,wrapLongitude:d,positionFormat:u,modelMatrix:p,extensions:f,fetch:L,operation:_},C=v&&i.id&&v[i.id],b=C&&C.updateTriggers,w=i.id||"sublayer";if(C){let t=this.props[l.fW],e=i.type?i.type._propTypes:{};for(let i in C){let o=e[i]||t[i];o&&"accessor"===o.type&&(C[i]=this.getSubLayerAccessor(C[i]))}}for(let t of(Object.assign(m,i,C),m.id=`${this.props.id}-${w}`,m.updateTriggers={all:this.props.updateTriggers?.all,...i.updateTriggers,...b},f)){let i=t.getSubLayerProps.call(this,t);i&&Object.assign(m,i,{updateTriggers:Object.assign(m.updateTriggers,i.updateTriggers)})}return m}_updateAutoHighlight(i){for(let t of this.getSubLayers())t.updateAutoHighlight(i)}_getAttributeManager(){return null}_postUpdate(i,t){let e=this.internalState.subLayers,o=!e||this.needsUpdate();if(o){let i=this.renderLayers();e=(0,r.B)(i,Boolean),this.internalState.subLayers=e}for(let i of((0,n.A)("compositeLayer.renderLayers",this,o,e),e))i.parent=this}}g.layerName="CompositeLayer";let a=g},34521(i,t,e){e.d(t,{J:()=>l});var o=e(63583),n=e(23479),r=e(53014);let l={props:{},name:"gouraudMaterial",vs:n.l.replace("phongMaterial","gouraudMaterial"),fs:n.X.replace("phongMaterial","gouraudMaterial"),source:r.X.replaceAll("phongMaterial","gouraudMaterial"),defines:{LIGHTING_VERTEX:!0},dependencies:[o.x],uniformTypes:{ambient:"f32",diffuse:"f32",shininess:"f32",specularColor:"vec3<f32>"},defaultUniforms:{ambient:.35,diffuse:.6,shininess:32,specularColor:[.15,.15,.15]},getUniforms(i){let t={...i};return t.specularColor&&(t.specularColor=t.specularColor.map(i=>i/255)),{...l.defaultUniforms,...t}}}},63583(i,t,e){e.d(t,{x:()=>a});var o,n,r=e(2254);let l=`\
precision highp int;

// #if (defined(SHADER_TYPE_FRAGMENT) && defined(LIGHTING_FRAGMENT)) || (defined(SHADER_TYPE_VERTEX) && defined(LIGHTING_VERTEX))
struct AmbientLight {
  vec3 color;
};

struct PointLight {
  vec3 color;
  vec3 position;
  vec3 attenuation; // 2nd order x:Constant-y:Linear-z:Exponential
};

struct DirectionalLight {
  vec3 color;
  vec3 direction;
};

uniform lightingUniforms {
  int enabled;
  int lightType;

  int directionalLightCount;
  int pointLightCount;

  vec3 ambientColor;

  vec3 lightColor0;
  vec3 lightPosition0;
  vec3 lightDirection0;
  vec3 lightAttenuation0;

  vec3 lightColor1;
  vec3 lightPosition1;
  vec3 lightDirection1;
  vec3 lightAttenuation1;

  vec3 lightColor2;
  vec3 lightPosition2;
  vec3 lightDirection2;
  vec3 lightAttenuation2;
} lighting;

PointLight lighting_getPointLight(int index) {
  switch (index) {
    case 0:
      return PointLight(lighting.lightColor0, lighting.lightPosition0, lighting.lightAttenuation0);
    case 1:
      return PointLight(lighting.lightColor1, lighting.lightPosition1, lighting.lightAttenuation1);
    case 2:
    default:  
      return PointLight(lighting.lightColor2, lighting.lightPosition2, lighting.lightAttenuation2);
  }
}

DirectionalLight lighting_getDirectionalLight(int index) {
  switch (index) {
    case 0:
      return DirectionalLight(lighting.lightColor0, lighting.lightDirection0);
    case 1:
      return DirectionalLight(lighting.lightColor1, lighting.lightDirection1);
    case 2:
    default:   
      return DirectionalLight(lighting.lightColor2, lighting.lightDirection2);
  }
} 

float getPointLightAttenuation(PointLight pointLight, float distance) {
  return pointLight.attenuation.x
       + pointLight.attenuation.y * distance
       + pointLight.attenuation.z * distance * distance;
}

// #endif
`,g=`\
// #if (defined(SHADER_TYPE_FRAGMENT) && defined(LIGHTING_FRAGMENT)) || (defined(SHADER_TYPE_VERTEX) && defined(LIGHTING_VERTEX))
struct AmbientLight {
  color: vec3<f32>,
};

struct PointLight {
  color: vec3<f32>,
  position: vec3<f32>,
  attenuation: vec3<f32>, // 2nd order x:Constant-y:Linear-z:Exponential
};

struct DirectionalLight {
  color: vec3<f32>,
  direction: vec3<f32>,
};

struct lightingUniforms {
  enabled: i32,
  pointLightCount: i32,
  directionalLightCount: i32,

  ambientColor: vec3<f32>,

  // TODO - support multiple lights by uncommenting arrays below
  lightType: i32,
  lightColor: vec3<f32>,
  lightDirection: vec3<f32>,
  lightPosition: vec3<f32>,
  lightAttenuation: vec3<f32>,

  // AmbientLight ambientLight;
  // PointLight pointLight[MAX_LIGHTS];
  // DirectionalLight directionalLight[MAX_LIGHTS];
};

// Binding 0:1 is reserved for lighting (Note: could go into separate bind group as it is stable across draw calls)
@binding(1) @group(0) var<uniform> lighting : lightingUniforms;

fn lighting_getPointLight(index: i32) -> PointLight {
  return PointLight(lighting.lightColor, lighting.lightPosition, lighting.lightAttenuation);
}

fn lighting_getDirectionalLight(index: i32) -> DirectionalLight {
  return DirectionalLight(lighting.lightColor, lighting.lightDirection);
} 

fn getPointLightAttenuation(pointLight: PointLight, distance: f32) -> f32 {
  return pointLight.attenuation.x
       + pointLight.attenuation.y * distance
       + pointLight.attenuation.z * distance * distance;
}
`;(o=n||(n={}))[o.POINT=0]="POINT",o[o.DIRECTIONAL=1]="DIRECTIONAL";let a={props:{},uniforms:{},name:"lighting",defines:{},uniformTypes:{enabled:"i32",lightType:"i32",directionalLightCount:"i32",pointLightCount:"i32",ambientColor:"vec3<f32>",lightColor0:"vec3<f32>",lightPosition0:"vec3<f32>",lightDirection0:"vec3<f32>",lightAttenuation0:"vec3<f32>",lightColor1:"vec3<f32>",lightPosition1:"vec3<f32>",lightDirection1:"vec3<f32>",lightAttenuation1:"vec3<f32>",lightColor2:"vec3<f32>",lightPosition2:"vec3<f32>",lightDirection2:"vec3<f32>",lightAttenuation2:"vec3<f32>"},defaultUniforms:{enabled:1,lightType:n.POINT,directionalLightCount:0,pointLightCount:0,ambientColor:[.1,.1,.1],lightColor0:[1,1,1],lightPosition0:[1,1,2],lightDirection0:[1,1,1],lightAttenuation0:[1,0,0],lightColor1:[1,1,1],lightPosition1:[1,1,2],lightDirection1:[1,1,1],lightAttenuation1:[1,0,0],lightColor2:[1,1,1],lightPosition2:[1,1,2],lightDirection2:[1,1,1],lightAttenuation2:[1,0,0]},source:g,vs:l,fs:l,getUniforms:function(i,t={}){if(!(i=i?{...i}:i))return{...a.defaultUniforms};i.lights&&(i={...i,...function(i){let t={pointLights:[],directionalLights:[]};for(let e of i||[])switch(e.type){case"ambient":t.ambientLight=e;break;case"directional":t.directionalLights?.push(e);break;case"point":t.pointLights?.push(e)}return t}(i.lights),lights:void 0});let{ambientLight:e,pointLights:o,directionalLights:l}=i||{};if(!(e||o&&o.length>0||l&&l.length>0))return{...a.defaultUniforms,enabled:0};let g={...a.defaultUniforms,...t,...function({ambientLight:i,pointLights:t=[],directionalLights:e=[]}){let o={};o.ambientColor=h(i);let l=0;for(let i of t){o.lightType=n.POINT;let t=l;o[`lightColor${t}`]=h(i),o[`lightPosition${t}`]=i.position,o[`lightAttenuation${t}`]=i.attenuation||[1,0,0],l++}for(let i of e){o.lightType=n.DIRECTIONAL;let t=l;o[`lightColor${t}`]=h(i),o[`lightDirection${t}`]=i.direction,l++}return l>5&&r.R.warn("MAX_LIGHTS exceeded")(),o.directionalLightCount=e.length,o.pointLightCount=t.length,o}({ambientLight:e,pointLights:o,directionalLights:l})};return void 0!==i.enabled&&(g.enabled=+!!i.enabled),g}};function h(i={}){let{color:t=[0,0,0],intensity:e=1}=i;return t.map(i=>i*e/255)}},23479(i,t,e){e.d(t,{X:()=>o,l:()=>n});let o=`\
uniform phongMaterialUniforms {
  uniform float ambient;
  uniform float diffuse;
  uniform float shininess;
  uniform vec3  specularColor;
} material;
`,n=`\
#define MAX_LIGHTS 3

uniform phongMaterialUniforms {
  uniform float ambient;
  uniform float diffuse;
  uniform float shininess;
  uniform vec3  specularColor;
} material;

vec3 lighting_getLightColor(vec3 surfaceColor, vec3 light_direction, vec3 view_direction, vec3 normal_worldspace, vec3 color) {
  vec3 halfway_direction = normalize(light_direction + view_direction);
  float lambertian = dot(light_direction, normal_worldspace);
  float specular = 0.0;
  if (lambertian > 0.0) {
    float specular_angle = max(dot(normal_worldspace, halfway_direction), 0.0);
    specular = pow(specular_angle, material.shininess);
  }
  lambertian = max(lambertian, 0.0);
  return (lambertian * material.diffuse * surfaceColor + specular * material.specularColor) * color;
}

vec3 lighting_getLightColor(vec3 surfaceColor, vec3 cameraPosition, vec3 position_worldspace, vec3 normal_worldspace) {
  vec3 lightColor = surfaceColor;

  if (lighting.enabled == 0) {
    return lightColor;
  }

  vec3 view_direction = normalize(cameraPosition - position_worldspace);
  lightColor = material.ambient * surfaceColor * lighting.ambientColor;

  for (int i = 0; i < lighting.pointLightCount; i++) {
    PointLight pointLight = lighting_getPointLight(i);
    vec3 light_position_worldspace = pointLight.position;
    vec3 light_direction = normalize(light_position_worldspace - position_worldspace);
    float light_attenuation = getPointLightAttenuation(pointLight, distance(light_position_worldspace, position_worldspace));
    lightColor += lighting_getLightColor(surfaceColor, light_direction, view_direction, normal_worldspace, pointLight.color / light_attenuation);
  }

  int totalLights = min(MAX_LIGHTS, lighting.pointLightCount + lighting.directionalLightCount);
  for (int i = lighting.pointLightCount; i < totalLights; i++) {
    DirectionalLight directionalLight = lighting_getDirectionalLight(i);
    lightColor += lighting_getLightColor(surfaceColor, -directionalLight.direction, view_direction, normal_worldspace, directionalLight.color);
  }
  
  return lightColor;
}
`},53014(i,t,e){e.d(t,{X:()=>o});let o=`\
struct phongMaterialUniforms {
  ambient: f32,
  diffuse: f32,
  shininess: f32,
  specularColor: vec3<f32>,
};

@binding(2) @group(0) var<uniform> phongMaterial : phongMaterialUniforms;

fn lighting_getLightColor(surfaceColor: vec3<f32>, light_direction: vec3<f32>, view_direction: vec3<f32>, normal_worldspace: vec3<f32>, color: vec3<f32>) -> vec3<f32> {
  let halfway_direction: vec3<f32> = normalize(light_direction + view_direction);
  var lambertian: f32 = dot(light_direction, normal_worldspace);
  var specular: f32 = 0.0;
  if (lambertian > 0.0) {
    let specular_angle = max(dot(normal_worldspace, halfway_direction), 0.0);
    specular = pow(specular_angle, phongMaterial.shininess);
  }
  lambertian = max(lambertian, 0.0);
  return (lambertian * phongMaterial.diffuse * surfaceColor + specular * phongMaterial.specularColor) * color;
}

fn lighting_getLightColor2(surfaceColor: vec3<f32>, cameraPosition: vec3<f32>, position_worldspace: vec3<f32>, normal_worldspace: vec3<f32>) -> vec3<f32> {
  var lightColor: vec3<f32> = surfaceColor;

  if (lighting.enabled == 0) {
    return lightColor;
  }

  let view_direction: vec3<f32> = normalize(cameraPosition - position_worldspace);
  lightColor = phongMaterial.ambient * surfaceColor * lighting.ambientColor;

  if (lighting.lightType == 0) {
    let pointLight: PointLight  = lighting_getPointLight(0);
    let light_position_worldspace: vec3<f32> = pointLight.position;
    let light_direction: vec3<f32> = normalize(light_position_worldspace - position_worldspace);
    lightColor += lighting_getLightColor(surfaceColor, light_direction, view_direction, normal_worldspace, pointLight.color);
  } else if (lighting.lightType == 1) {
    var directionalLight: DirectionalLight = lighting_getDirectionalLight(0);
    lightColor += lighting_getLightColor(surfaceColor, -directionalLight.direction, view_direction, normal_worldspace, directionalLight.color);
  }
  
  return lightColor;
  /*
  for (int i = 0; i < MAX_LIGHTS; i++) {
    if (i >= lighting.pointLightCount) {
      break;
    }
    PointLight pointLight = lighting.pointLight[i];
    vec3 light_position_worldspace = pointLight.position;
    vec3 light_direction = normalize(light_position_worldspace - position_worldspace);
    lightColor += lighting_getLightColor(surfaceColor, light_direction, view_direction, normal_worldspace, pointLight.color);
  }

  for (int i = 0; i < MAX_LIGHTS; i++) {
    if (i >= lighting.directionalLightCount) {
      break;
    }
    DirectionalLight directionalLight = lighting.directionalLight[i];
    lightColor += lighting_getLightColor(surfaceColor, -directionalLight.direction, view_direction, normal_worldspace, directionalLight.color);
  }
  */
}

fn lighting_getSpecularLightColor(cameraPosition: vec3<f32>, position_worldspace: vec3<f32>, normal_worldspace: vec3<f32>) -> vec3<f32>{
  var lightColor = vec3<f32>(0, 0, 0);
  let surfaceColor = vec3<f32>(0, 0, 0);

  if (lighting.enabled == 0) {
    let view_direction = normalize(cameraPosition - position_worldspace);

    switch (lighting.lightType) {
      case 0, default: {
        let pointLight: PointLight = lighting_getPointLight(0);
        let light_position_worldspace: vec3<f32> = pointLight.position;
        let light_direction: vec3<f32> = normalize(light_position_worldspace - position_worldspace);
        lightColor += lighting_getLightColor(surfaceColor, light_direction, view_direction, normal_worldspace, pointLight.color);
      }
      case 1: {
        let directionalLight: DirectionalLight = lighting_getDirectionalLight(0);
        lightColor += lighting_getLightColor(surfaceColor, -directionalLight.direction, view_direction, normal_worldspace, directionalLight.color);
      }
    }
  }
  return lightColor;
}
`}}]);