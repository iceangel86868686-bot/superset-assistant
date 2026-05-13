"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[8452],{66812(e,t,l){l.d(t,{e:()=>i});var r=l(22022),a=l(97371);let i=(0,a.styled)(r.Form.Item)`
  ${({theme:e})=>`
    &.ant-form-item > .ant-row > .ant-form-item-label {
      padding-bottom: ${e.paddingXXS}px;
    }
    .ant-form-item-label {
      & > label {
        font-size: ${e.fontSizeSM}px;
        &.ant-form-item-required:not(.ant-form-item-required-mark-optional) {
          &::before {
            display: none;
          }
          &::after {
            display: inline-block;
            visibility: visible;
            color: ${e.colorError};
            font-size: ${e.fontSizeSM}px;
            content: '*';
          }
        }
      }
    }
    .ant-form-item-extra {
      margin-top: ${e.sizeUnit}px;
      font-size: ${e.fontSizeSM}px;
    }
  `}
`},78452(e,t,l){l.r(t),l.d(t,{default:()=>b});var r=l(2445),a=l(24002),i=l(22567),n=l(66812),o=l(25358),s=l(44213),u=l(61225),d=l(10381),c=l(48014),v=l(58561),f=l.n(v);function m(e,t,l,r,a,i,n){try{var o=e[i](n),s=o.value}catch(e){l(e);return}o.done?t(s):Promise.resolve(s).then(r,a)}var h=l(76447);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e}).apply(this,arguments)}let y={},g=(0,d.Mz)([e=>{var t;return(null==(t=e.sliceEntities)?void 0:t.slices)||y}],e=>{let t=[];return Object.values(e).forEach(e=>{var l;if((null==(l=e.form_data)?void 0:l.viz_type)==="deck_multi"){let l=e.form_data.deck_slices;l&&Array.isArray(l)&&t.push(...l)}}),[...new Set(t)]});function b(e){let{formData:t,filterState:l,setDataMask:d,width:v,height:b}=e,[S,k]=(0,a.useState)((null==l?void 0:l.value)||[]),_=(0,a.useRef)(!1),w=(0,u.d4)(g),x=(0,u.d4)(e=>e.dataMask||y),$=(0,a.useMemo)(()=>{var e;let t=Object.values(x).find(e=>{var t;return(null==e||null==(t=e.extraFormData)?void 0:t.visible_deckgl_layers)!==void 0});return null==t||null==(e=t.extraFormData)?void 0:e.visible_deckgl_layers},[x]),{layers:M,isLoading:z}=(e=>{let[t,l]=(0,a.useState)([]),[r,i]=(0,a.useState)(e.length>0),[n,o]=(0,a.useState)(null);return(0,a.useEffect)(()=>{var t;if(!e||0===e.length){l([]),i(!1);return}(t=function*(){i(!0),o(null);try{let t=f().encode({columns:["id","slice_name","viz_type"],filters:[{col:"id",opr:"in",value:e}]}),r=`/api/v1/chart/?q=${t}`,a=((yield c.A.get({endpoint:r})).json.result||[]).map(e=>({sliceId:e.id,name:e.slice_name,type:e.viz_type}));l(a)}catch(t){o(t instanceof Error?t.message:"Unknown error"),l(e.map(e=>({sliceId:e,name:`Layer ${e}`,type:"unknown"})))}finally{i(!1)}},function(){var e=this,l=arguments;return new Promise(function(r,a){var i=t.apply(e,l);function n(e){m(i,r,a,n,o,"next",e)}function o(e){m(i,r,a,n,o,"throw",e)}n(void 0)})})()},[e.join(",")]),{layers:t,isLoading:r,error:n}})(w),j=(0,a.useMemo)(()=>M.map(e=>e.sliceId),[M]);(0,a.useEffect)(()=>{_.current||!t.defaultToAllLayersVisible||!(M.length>0)||(null==l?void 0:l.value)||void 0!==$||(_.current=!0,k([]),d({filterState:{value:[]},extraFormData:{visible_deckgl_layers:j}}))},[t.defaultToAllLayersVisible,M.length,null==l?void 0:l.value,$,j,d]);let E=(0,a.useMemo)(()=>l.validateMessage?{extra:(0,r.Y)(h.Mo,{status:l.validateStatus,children:l.validateMessage})}:y,[l.validateMessage,l.validateStatus]),A=(0,a.useCallback)(e=>{k(e);let t=j.filter(t=>!e.includes(t));d({filterState:{value:e},extraFormData:{visible_deckgl_layers:t}})},[j,d]),I=(0,a.useMemo)(()=>M.map(e=>({label:`${e.name} (${e.type})`,value:e.sliceId})),[M]);return(0,r.Y)(h.j3,{height:b,width:v,children:(0,r.Y)(n.e,p({validateStatus:l.validateStatus},E,{children:(0,r.Y)(o.m,{title:z||0!==M.length?null:(0,i.t)("No multilayer deck.gl charts are currently added to this dashboard."),children:(0,r.Y)("div",{children:(0,r.Y)(s.A,{"data-test":"deckgl-layer-visibility-select",mode:"multiple",oneLine:!0,value:S,onChange:A,options:I,placeholder:(0,i.t)("Select layers to hide"),allowClear:!0,disabled:0===M.length,loading:z&&0===M.length})})})}))})}},76447(e,t,l){l.d(t,{Mo:()=>n,j3:()=>i});var r=l(97371),a=l(66812);let i=r.styled.div`
  min-height: ${({height:e})=>e}px;
  width: ${({width:e})=>0===e?"100%":`${e}px`};
`;(0,r.styled)(a.e)`
  &.ant-row.ant-form-item {
    margin: 0;
  }
`;let n=r.styled.div`
  color: ${({theme:e,status:t="error"})=>{if("help"===t)return e.colorTextSecondary;switch(t){case"error":default:return e.colorError;case"warning":return e.colorWarning;case"info":return e.colorInfo}}};
  text-align: ${({centerText:e})=>e?"center":"left"};
  width: 100%;
`}}]);