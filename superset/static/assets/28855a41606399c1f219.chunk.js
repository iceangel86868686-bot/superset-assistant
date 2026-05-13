"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[9259],{66812(e,t,r){r.d(t,{e:()=>l});var n=r(22022),a=r(97371);let l=(0,a.styled)(n.Form.Item)`
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
`},59259(e,t,r){r.r(t),r.d(t,{default:()=>f});var n=r(2445),a=r(22567),l=r(87928),i=r(24002),o=r(44213),s=r(66812),u=r(17266);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function f(e){let{data:t,formData:r,height:f,width:c,setDataMask:p,setHoveredFilter:h,unsetHoveredFilter:g,setFocusedFilter:m,unsetFocusedFilter:v,setFilterActive:S,filterState:b,inputRef:y}=e,{defaultValue:$}=r,[w,x]=(0,i.useState)(null!=$?$:[]),M=(0,i.useMemo)(()=>t.reduce((e,{duration:t,name:r})=>d({},e,{[t]:r}),{}),[JSON.stringify(t)]),z=e=>{let t=(0,l.A)(e),[r]=t,n=r?M[r]:void 0,a={};r&&(a.time_grain_sqla=r),x(t),p({extraFormData:a,filterState:{label:n,value:t.length?t:null}})};(0,i.useEffect)(()=>{z(null!=$?$:[])},[JSON.stringify($)]),(0,i.useEffect)(()=>{var e;z(null!=(e=b.value)?e:[])},[JSON.stringify(b.value)]);let O=0===(t||[]).length?(0,a.t)("No data"):(0,a.tn)("%s option","%s options",t.length,t.length),k={};b.validateMessage&&(k.extra=(0,n.Y)(u.Mo,{status:b.validateStatus,children:b.validateMessage}));let C=(t||[]).map(e=>{let{name:t,duration:r}=e;return{label:t,value:r}}).filter(e=>{let t=r.time_grains;return!t||0===t.length||t.includes(e.value)||w.includes(e.value)});return(0,n.Y)(u.j3,{height:f,width:c,children:(0,n.Y)(s.e,d({validateStatus:b.validateStatus},k,{children:(0,n.Y)(o.A,{name:r.nativeFilterId,allowClear:!0,value:w,placeholder:O,onChange:z,onBlur:v,onFocus:m,onMouseEnter:h,onMouseLeave:g,ref:y,options:C,onOpenChange:S,sortComparator:()=>0})}))})}},17266(e,t,r){r.d(t,{Mo:()=>o,YH:()=>l,j3:()=>i});var n=r(97371),a=r(66812);let l=0,i=n.styled.div`
  min-height: ${({height:e})=>e}px;
  width: ${({width:e})=>e===l?"100%":`${e}px`};
`;(0,n.styled)(a.e)`
  &.ant-row.ant-form-item {
    margin: 0;
  }
`;let o=n.styled.div`
  color: ${({theme:e,status:t="error"})=>{if("help"===t)return e.colorTextSecondary;switch(t){case"error":default:return e.colorError;case"warning":return e.colorWarning;case"info":return e.colorInfo}}};
  text-align: ${({centerText:e})=>e?"center":"left"};
  width: 100%;
`}}]);