"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[8594],{66812(e,t,r){r.d(t,{e:()=>l});var n=r(22022),a=r(97371);let l=(0,a.styled)(n.Form.Item)`
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
`},98594(e,t,r){r.r(t),r.d(t,{default:()=>f});var n=r(2445),a=r(22567),l=r(87928),o=r(24002),i=r(44213),s=r(66812),u=r(27614),d=r(76447);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function f(e){let{data:t,formData:r,height:f,width:p,setDataMask:g,setHoveredFilter:h,unsetHoveredFilter:m,setFocusedFilter:v,unsetFocusedFilter:b,setFilterActive:S,filterState:y,inputRef:w}=e,{defaultValue:$}=r,[x,M]=(0,o.useState)(null!=$?$:[]),k=(0,o.useMemo)(()=>t.reduce((e,{duration:t,name:r})=>c({},e,{[t]:r}),{}),[JSON.stringify(t)]),z=e=>{let t=(0,l.A)(e),[r]=t,n=r?k[r]:void 0,a={};r&&(a.time_grain_sqla=r),M(t),g({extraFormData:a,filterState:{label:n,value:t.length?t:null}})};(0,o.useEffect)(()=>{z(null!=$?$:[])},[JSON.stringify($)]),(0,o.useEffect)(()=>{var e;z(null!=(e=y.value)?e:[])},[JSON.stringify(y.value)]);let C=0===(t||[]).length?(0,a.t)("No data"):(0,a.tn)("%s option","%s options",t.length,t.length),O={};y.validateMessage&&(O.extra=(0,n.Y)(d.Mo,{status:y.validateStatus,children:y.validateMessage}));let A=(t||[]).map(e=>{let{name:t,duration:r}=e;return{label:t,value:r}}),E=(0,o.useCallback)((e,t)=>{if(void 0===r.sortAscending)return 0;let n=(0,u.qw)("label");return r.sortAscending?n(e,t):n(t,e)},[r.sortAscending]);return(0,n.Y)(d.j3,{height:f,width:p,children:(0,n.Y)(s.e,c({validateStatus:y.validateStatus},O,{children:(0,n.Y)("div",{onMouseEnter:h,onMouseLeave:m,children:(0,n.Y)(i.A,{name:r.nativeFilterId,allowClear:!0,value:x,placeholder:C,onChange:z,onBlur:b,onFocus:v,ref:w,options:A,onOpenChange:S,sortComparator:E})})}))})}},76447(e,t,r){r.d(t,{Mo:()=>o,j3:()=>l});var n=r(97371),a=r(66812);let l=n.styled.div`
  min-height: ${({height:e})=>e}px;
  width: ${({width:e})=>0===e?"100%":`${e}px`};
`;(0,n.styled)(a.e)`
  &.ant-row.ant-form-item {
    margin: 0;
  }
`;let o=n.styled.div`
  color: ${({theme:e,status:t="error"})=>{if("help"===t)return e.colorTextSecondary;switch(t){case"error":default:return e.colorError;case"warning":return e.colorWarning;case"info":return e.colorInfo}}};
  text-align: ${({centerText:e})=>e?"center":"left"};
  width: 100%;
`}}]);