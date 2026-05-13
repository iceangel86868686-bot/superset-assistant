"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[9311],{66812(e,t,l){l.d(t,{e:()=>i});var r=l(22022),n=l(97371);let i=(0,n.styled)(r.Form.Item)`
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
`},98898(e,t,l){l.d(t,{A:()=>a});var r=l(2445),n=l(22022);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e}).apply(this,arguments)}function a(e){return(0,r.Y)(n.Slider,i({},e))}},36255(e,t,l){l.d(t,{A:()=>i,v:()=>a});var r,n,i=((r={}).Simple="SIMPLE",r.Sql="SQL",r),a=((n={}).Having="HAVING",n.Where="WHERE",n)},9311(e,t,l){l.r(t),l.d(t,{default:()=>D});var r=l(2445),n=l(22567),i=l(9602),a=l(87928),u=l(42398),o=l(56986),s=l(78524),d=l(97371),c=l(17437),p=l(24002),m=l(73880),f=l(98023),v=l.n(f),h=l(22022),x=l(98898),g=l(15341),y=l(66812),b=l(25358),S=l(59048),M=l(17266),$=l(2919),w=l(75092);let I=d.styled.span`
  margin: 0 ${({theme:e})=>3*e.sizeUnit}px;
  color: ${({theme:e})=>e.colorSplit};
  font-weight: ${({theme:e})=>e.fontWeightStrong};
  font-size: ${({theme:e})=>e.fontSize}px;
  align-content: center;
`,A=d.styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  .ant-input-number {
    min-width: 80px;
    position: relative;
  }
`,N=d.styled.div`
  ${({theme:e})=>`
    margin: ${4*e.sizeUnit}px 0;
    padding: 0 ${e.sizeUnit}px;
  `}
`,Y=d.styled.div`
  ${({theme:e})=>`
    position: absolute;
    top: -${6*e.sizeUnit}px;
    right: 0px;
    z-index: 100;
    display: flex;
    align-items: center;

    .tooltip-icon {
      margin-left: ${2*e.sizeUnit}px;
    }
  `}
`,C=d.styled.div`
  ${({theme:e})=>`
    display: flex;
    gap: ${4*e.sizeUnit}px;
    width: 100%;
    align-items: center;

    .slider-wrapper {
      display: flex;
      align-items: center;
      flex: 2;
    }

    .slider-container {
      flex: 1;
      min-width: 180px;
    }

    .inputs-container {
      min-width: 160px;
      max-width: 200px;
    }
  `}
`,E=d.styled.div`
  ${({theme:e})=>`
  border-radius: ${e.borderRadius}px;
  transition: box-shadow ${e.motionDurationMid} ease-in-out;
  &:focus {
    box-shadow: 0 0 0 2px ${e.colorPrimary};
  }
  &:focus-visible {
    outline: none;
  }`}
`,z=(0,u.gV)(i.A.SMART_NUMBER),k=(e,t,l,r,i)=>{let[a,u]=e,o=(0,n.t)("Please provide a valid min or max value"),s=(0,n.t)("Min value cannot be greater than max value"),d=(0,n.t)("Numbers must be within %(min)s and %(max)s",{min:t,max:l});if(void 0!==i){let e=i===w.y.Minimum||i===w.y.Exact?a:u;return v()(e)?v()(e)&&(e<t||e>l)?{isValid:!1,errorMessage:d}:{isValid:!0,errorMessage:null}:{isValid:!1,errorMessage:o}}return r||null!==a||null!==u?r&&null===a&&null===u?{isValid:!1,errorMessage:o}:null!==a&&null!==u&&a>u?{isValid:!1,errorMessage:s}:null!==a&&a<t||null!==u&&u>l?{isValid:!1,errorMessage:d}:{isValid:!0,errorMessage:null}:{isValid:!0,errorMessage:null}};function D(e){let t=(0,d.useTheme)(),{data:l,formData:i,height:u,width:f,setDataMask:v,setFocusedFilter:D,unsetFocusedFilter:F,setHoveredFilter:T,unsetHoveredFilter:V,setFilterActive:q,filterState:U,inputRef:O,filterBarOrientation:W=m.QI.Vertical,isOverflowingFilterBar:H}=e,[L]=l,{min:P,max:j}=L,{groupby:K,enableSingleValue:R,enableEmptyFilter:G,defaultValue:Q}=i,B=(null==i?void 0:i.rangeDisplayMode)||S.l.SliderAndInput,J=R===w.y.Exact,[X=""]=(0,a.A)(K).map(s.A),[_,Z]=(0,p.useState)(U.value||Q||[null,null]),[ee,et]=(0,p.useState)(null),el=(0,p.useMemo)(()=>{let[e,t]=_;return R===w.y.Minimum||R===w.y.Exact?null!==e?e:P:R===w.y.Maximum?null!==t?t:j:[null!==e?e:P,null!==t?t:j]},[_,P,j,R]),er=(0,p.useCallback)(e=>{v({extraFormData:{},filterState:{value:null,label:"",validateStatus:"error",validateMessage:e||""}})},[v]),en=(0,p.useCallback)(e=>{let[t,l]=e;v({extraFormData:(0,$.SO)(X,t,l),filterState:{value:J?[t,t]:[t,l],label:((e,t,l=!1)=>l&&null!==e||null!==e&&e===t?`x = ${z(e)}`:null!==e&&null!==t?`${z(e)} ≤ x ≤ ${z(t)}`:null!==e?`x ≥ ${z(e)}`:null!==t?`x ≤ ${z(t)}`:"")(t,l,J),validateStatus:void 0,validateMessage:""}})},[v]);(0,p.useEffect)(()=>{if((null==L?void 0:L.min)!==void 0||(null==L?void 0:L.max)!==void 0){if("error"===U.validateStatus){if(et(U.validateMessage),ee!==U.validateMessage){let{isValid:e,errorMessage:t}=k(_,P,j,G,R);e?(et(null),en(_)):(et(t),er(t))}return}if(void 0===U.value&&!U.validateStatus){Z([null,null]),en([null,null]);return}if((0,o.A)(Q,_))return void en(Q);U.value&&!U.validateStatus&&(Z(U.value),en(U.value))}},[JSON.stringify(U.value)]);let ei=(0,p.useMemo)(()=>{switch(R){case w.y.Minimum:return(0,n.t)("Filters for values greater than or equal.");case w.y.Maximum:return(0,n.t)("Filters for values less than or equal.");case w.y.Exact:return(0,n.t)("Filters for values equal to this exact value.");default:return null}},[R]),ea=(0,p.useRef)(!1),eu=e=>{ea.current=!!/^[0-9]$/.test(e.key)},eo=(0,p.useCallback)((e,t)=>{if((null==L?void 0:L.min)===void 0&&(null==L?void 0:L.max)===void 0)return;let l=e;null!==e&&null===_[t]&&(ea.current?(l=e,ea.current=!1):0===t&&1===e?l=P+1:0===t&&-1===e?l=P-1:1===t&&1===e?l=j+1:1===t&&-1===e&&(l=j-1));let r=0===t?[l,_[1]]:[_[0],l];Z(r);let{isValid:n,errorMessage:i}=k(r,P,j,G,R);if(!n){et(i),er(i);return}et(null),en(r)},[P,j,G,R,er,en,_]),es=(0,p.useCallback)(e=>{let t;if(void 0!==R){let l="number"==typeof e?e:Array.isArray(e)&&e.length>0?e[0]:(P+j)/2;t=R===w.y.Minimum?[l,null]:R===w.y.Maximum?[null,l]:[l,l]}else{let l=Array.isArray(e)?e:[P,j],[r,n]=l.length>=2?[l[0],l[1]]:[P,j];t=[r,n]}Z(t),et(null),en(t)},[P,j,R,en]),ed=(0,p.useCallback)(()=>{let e=(0,n.t)("Choose numbers between %(min)s and %(max)s",{min:P,max:j});return ee?{message:ee,status:"error"}:void 0!==R&&ei?{message:ei,status:"help"}:{message:e,status:"help"}},[ee,P,j,R,ei]),ec=(0,p.useCallback)(()=>{let{message:e,status:t}=ed();return W===m.QI.Vertical?(0,r.Y)(M.Mo,{status:t,children:e}):null},[ed,W]),ep=(0,p.useCallback)(()=>{let{message:e,status:l}=ed();return(0,r.Y)(b.m,{title:e,placement:"top",children:(0,r.Y)(g.F.InfoCircleOutlined,{iconSize:"m",iconColor:"error"===l?t.colorError:t.colorIcon,className:"tooltip-icon"})})},[ed]);(0,p.useEffect)(()=>{if(void 0!==R)switch(R){case w.y.Minimum:case w.y.Exact:null!==_[1]&&eo(null,1);break;case w.y.Maximum:null!==_[0]&&eo(null,0)}v({extraFormData:{},filterState:{value:null,label:""}})},[R]);let em=()=>void 0!==R?(0,r.Y)(N,{children:(0,r.Y)(x.A,{min:P,max:j,value:Array.isArray(el)?el[0]:el,onChange:es,tooltip:{formatter:e=>null!==e?z(e):""}})}):(0,r.Y)(N,{"data-test":"range-filter-slider",children:(0,r.Y)(x.A,{min:P,max:j,range:!0,value:Array.isArray(el)?el:[P,el],onChange:es,tooltip:{formatter:e=>null!==e?z(e):""}})}),ef=()=>(0,r.FD)(A,{tabIndex:-1,onFocus:D,onBlur:F,onMouseEnter:T,onMouseLeave:V,onMouseDown:()=>q(!0),onMouseUp:()=>q(!1),children:[(void 0===R||R===w.y.Minimum||R===w.y.Exact)&&(0,r.Y)(h.InputNumber,{value:_[0],onChange:e=>eo(e,0),onKeyDown:eu,placeholder:`${P}`,style:{width:"100%"},status:U.validateStatus,"data-test":"range-filter-from-input"}),void 0===R&&(0,r.Y)(I,{children:"-"}),(void 0===R||R===w.y.Maximum)&&(0,r.Y)(h.InputNumber,{value:_[1],onChange:e=>eo(e,1),onKeyDown:eu,placeholder:`${j}`,style:{width:"100%"},"data-test":"range-filter-to-input",status:U.validateStatus})]});return(0,r.Y)(M.j3,{height:u,width:f,children:Number.isNaN(Number(P))||Number.isNaN(Number(j))?(0,r.Y)("h4",{children:(0,n.t)("Chosen non-numeric column")}):(0,r.Y)(y.e,{"aria-labelledby":`filter-name-${i.nativeFilterId}`,children:W!==m.QI.Horizontal||H?(0,r.Y)(r.FK,{children:(0,r.FD)("div",{style:{position:"relative"},children:[H&&(0,r.Y)(Y,{children:(0,r.Y)(ep,{})}),(0,r.FD)(E,{ref:O,tabIndex:-1,css:(0,c.AH)`
                    padding-top: 1px;
                    margin-top: -1px;
                  `,children:[(B===S.l.Slider||B===S.l.SliderAndInput)&&em(),(B===S.l.Input||B===S.l.SliderAndInput)&&ef()]}),(0,r.Y)(ec,{})]})}):(0,r.Y)(E,{ref:O,tabIndex:-1,children:(0,r.FD)(C,{children:[(0,r.Y)(ep,{}),(B===S.l.Slider||B===S.l.SliderAndInput)&&(0,r.Y)("div",{className:"slider-wrapper",children:(0,r.Y)("div",{className:"slider-container",children:em()})}),(B===S.l.Input||B===S.l.SliderAndInput)&&(0,r.Y)("div",{className:"inputs-container",children:ef()})]})})})})}},59048(e,t,l){l.d(t,{l:()=>n});var r,n=((r={}).Slider="slider",r.Input="input",r.SliderAndInput="slider-and-input",r)},17266(e,t,l){l.d(t,{Mo:()=>u,YH:()=>i,j3:()=>a});var r=l(97371),n=l(66812);let i=0,a=r.styled.div`
  min-height: ${({height:e})=>e}px;
  width: ${({width:e})=>e===i?"100%":`${e}px`};
`;(0,r.styled)(n.e)`
  &.ant-row.ant-form-item {
    margin: 0;
  }
`;let u=r.styled.div`
  color: ${({theme:e,status:t="error"})=>{if("help"===t)return e.colorTextSecondary;switch(t){case"error":default:return e.colorError;case"warning":return e.colorWarning;case"info":return e.colorInfo}}};
  text-align: ${({centerText:e})=>e?"center":"left"};
  width: 100%;
`},2919(e,t,l){l.d(t,{SO:()=>o,Sg:()=>s,pA:()=>u});var r=l(69112),n=l(61175),i=l(36255),a=l(46237);let u=(e,t,l=!1,r=!1,n=a.d.Exact)=>{let u={};return l?u.adhoc_filters=[{expressionType:i.A.Sql,clause:i.v.Where,sqlExpression:"1 = 0"}]:null!=t&&0!==t.length&&(n!==a.d.Exact&&"string"==typeof t[0]?u.filters=[{col:e,op:r?"NOT ILIKE":"ILIKE",val:function(e,t){switch(t){case a.d.Contains:return`%${e}%`;case a.d.StartsWith:return`${e}%`;case a.d.EndsWith:return`%${e}`;default:return e}}(t[0],n)}]:u.filters=[{col:e,op:r?"NOT IN":"IN",val:t}]),u},o=(e,t,l)=>{let r=[];return null!=t&&t!==l&&r.push({col:e,op:">=",val:t}),null!=l&&l!==t&&r.push({col:e,op:"<=",val:l}),null!=l&&null!=t&&l===t&&r.push({col:e,op:"==",val:l}),r.length?{filters:r}:{}};function s({timeFormatter:e,numberFormatter:t}={}){return(l,i)=>{if(null==l)return n.mu;if("boolean"==typeof l)return l?n.PU:n.qC;if(i===r.GenericDataType.Boolean)try{return JSON.parse(String(l).toLowerCase())?n.PU:n.qC}catch(e){return n.qC}return"string"==typeof l?l:"bigint"==typeof l?String(l):e&&i===r.GenericDataType.Temporal?e(l):t&&"number"==typeof l&&i===r.GenericDataType.Numeric?t(l):String(l)}}}}]);