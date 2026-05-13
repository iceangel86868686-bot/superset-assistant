"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[933],{85016(e,t,r){r.d(t,{A:()=>a});var o=r(2445),n=r(24002);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}function a(e,t){class r extends n.Component{componentDidMount(){this.execute()}componentDidUpdate(){this.execute()}componentWillUnmount(){this.container=void 0,(null==t?void 0:t.componentWillUnmount)&&t.componentWillUnmount.bind(this)()}setContainerRef(e){this.container=e}execute(){this.container&&e(this.container,this.props)}render(){let{id:e,className:t}=this.props;return(0,o.Y)("div",{ref:this.setContainerRef,id:e,className:t})}constructor(e){super(e),this.setContainerRef=this.setContainerRef.bind(this)}}return e.displayName&&(r.displayName=e.displayName),e.propTypes&&(r.propTypes=l({},r.propTypes,e.propTypes)),e.defaultProps&&(r.defaultProps=e.defaultProps),r}},10933(e,t,r){r.r(t),r.d(t,{default:()=>g});var o=r(2445),n=r(85016),l=r(97371),a=r(24143),s=r.n(a),i=r(67385),c=r(80547),p=r(31735);function u(e){let t=document.createElement("div");return t.textContent=e,t.innerHTML}let d={};function f(e,t){let r,{data:o,width:n,height:l,country:a,linearColorScheme:f,formatter:h,colorScheme:y,sliceId:g}=t,m=function(e,t){let r,o;if(void 0===t)for(let t of e)null!=t&&(void 0===r?t>=t&&(r=o=t):(r>t&&(r=t),o<t&&(o=t)));else{let n=-1;for(let l of e)null!=(l=t(l,++n,e))&&(void 0===r?l>=l&&(r=o=l):(r>l&&(r=l),o<l&&(o=l)))}return[r,o]}(o,e=>e.metric),v=null!=m[0]&&null!=m[1]?[m[0],m[1]]:[0,1],b=(0,i.A)().get(f),$=b?b.createLinearScale(v):()=>"#ccc",x=c.getScale(y),k={};o.forEach(e=>{var t;k[e.country_id]=y?x(e.country_id,g):null!=(t=$(e.metric))?t:""});let C=e=>k[e.properties.ISO]||"none",O=s().geo.path(),N=s().select(e);N.classed("superset-legacy-chart-country-map",!0),N.selectAll("*").remove(),e.style.height=`${l}px`,e.style.width=`${n}px`;let w=N.append("svg:svg").attr("width",n).attr("height",l).attr("preserveAspectRatio","xMidYMid meet"),A=w.append("rect").attr("class","background").attr("width",n).attr("height",l),S=w.append("g"),j=S.append("g").classed("map-layer",!0),T=N.append("div").attr("class","hover-popup"),M=function(e){let t,o,a,s=n/2,i=l/2;if(e&&r!==e){let n=O.centroid(e);[t,o]=n,a=4,r=e}else t=s,o=i,a=1,r=null;S.transition().duration(750).attr("transform",`translate(${s},${i})scale(${a})translate(${-t},${-o})`)};A.on("click",M);let B=function(e){var t;let r=C(e);"none"!==r&&(r=s().rgb(r).darker().toString()),s().select(this).style("fill",r);let n=o.filter(t=>t.country_id===e.properties.ISO),l=s().mouse(w.node());T.style("display","block").style("top",`${l[1]+30}px`).style("left",`${l[0]}px`).html(`<div><strong>${(t=e)&&t.properties?t.properties.ID_2?t.properties.NAME_2||"":t.properties.NAME_1||"":""}</strong><br>${n.length>0?h(n[0].metric):""}</div>`)},E=function(){let e=s().mouse(w.node());T.style("top",`${e[1]+30}px`).style("left",`${e[0]}px`)},P=function(){s().select(this).style("fill",C),T.style("display","none")};function _(e){let{features:t}=e,r=s().geo.centroid(e),o=s().geo.mercator().scale(100).center(r).translate([n/2,l/2]);O.projection(o);let a=O.bounds(e),i=100*n/(a[1][0]-a[0][0]),c=100*l/(a[1][1]-a[0][1]);o.scale(i<c?i:c);let p=O.bounds(e);o.translate([n-(p[0][0]+p[1][0])/2,l-(p[0][1]+p[1][1])/2]),j.selectAll("path").data(t).enter().append("path").attr("d",O).attr("class","region").attr("vector-effect","non-scaling-stroke").style("fill",C).on("mouseenter",B).on("mousemove",E).on("mouseout",P).on("click",M)}let R=d[a];if(R)_(R);else{let t=p.Ay[a];if(!t){var I;let t=(null==(I=p.JK.find(e=>e[0]===a))?void 0:I[1])||a;s().select(e).html(`<div class="alert alert-danger">No map data available for ${u(t)}</div>`);return}s().json(t,(t,r)=>{if(t){var o;let t=(null==(o=p.JK.find(e=>e[0]===a))?void 0:o[1])||a;s().select(e).html(`<div class="alert alert-danger">Could not load map data for ${u(t)}</div>`)}else d[a]=r,_(r)})}}function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}f.displayName="CountryMap";let y=(0,n.A)(f),g=(0,l.styled)(e=>{let{className:t=""}=e,r=function(e,t){if(null==e)return{};var r,o,n={},l=Object.getOwnPropertyNames(e);for(o=0;o<l.length;o++)!(t.indexOf(r=l[o])>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r]);return n}(e,["className"]);return(0,o.Y)("div",{className:t,children:(0,o.Y)(y,h({},r))})})`
  ${({theme:e})=>`
    .superset-legacy-chart-country-map svg {
      background-color: ${e.colorBgContainer};
    }

    .superset-legacy-chart-country-map {
      position: relative;
    }

    .superset-legacy-chart-country-map .background {
      fill: ${e.colorBgContainer};
      pointer-events: all;
    }

    .superset-legacy-chart-country-map .hover-popup {
      position: absolute;
      color: ${e.colorTextSecondary};
      display: none;
      padding: 4px;
      border-radius: 1px;
      background-color: ${e.colorBgElevated};
      box-shadow: ${e.boxShadow};
      font-size: 12px;
      border: 1px solid ${e.colorBorder};
      z-index: 10001;
    }

    .superset-legacy-chart-country-map .map-layer {
      fill: ${e.colorBgContainer};
      stroke: ${e.colorBorderSecondary};
      pointer-events: all;
    }

    .superset-legacy-chart-country-map .effect-layer {
      pointer-events: none;
    }

    .superset-legacy-chart-country-map path.region {
      cursor: pointer;
      stroke: ${e.colorSplit};
    }
  `}
`}}]);