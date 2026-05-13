"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[9026],{26530(e,r,t){t.d(r,{A:()=>l});var o=t(21745);let l=["AND","AS","ASC","AVG","BY","CASE","COUNT","CREATE","CROSS","DATABASE","DEFAULT","DELETE","DESC","DISTINCT","DROP","ELSE","END","FOREIGN","FROM","GRANT","GROUP","HAVING","IF","INNER","INSERT","JOIN","KEY","LEFT","LIMIT","MAX","MIN","NATURAL","NOT","NULL","OFFSET","ON","OR","ORDER","OUTER","PRIMARY","REFERENCES","RIGHT","SELECT","SUM","TABLE","THEN","TYPE","UNION","UPDATE","WHEN","WHERE"].concat(["BIGINT","BINARY","BIT","CHAR","DATE","DECIMAL","DOUBLE","FLOAT","INT","INTEGER","MONEY","NUMBER","NUMERIC","REAL","SET","TEXT","TIMESTAMP","VARCHAR"]).map(e=>({meta:"sql",name:e,score:o.lI,value:e}))},12048(e,r,t){t.d(r,{l:()=>f,A:()=>A});var o,l=t(2445),n=t(22567),s=t(97371),c=t(89314);let a=t(22022).Progress;var i=t(1125),d=t(16351),u=t(15341);function p(){return(p=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}let{Text:E}=c.o;var f=((o={}).STREAMING="streaming",o.COMPLETED="completed",o.ERROR="error",o.CANCELLED="cancelled",o);let h=s.styled.div`
  ${({theme:e})=>`
    padding: ${4*e.sizeUnit}px 0 ${2*e.sizeUnit}px;
  `}
`,v=s.styled.div`
  ${({theme:e})=>`
    margin: ${6*e.sizeUnit}px 0;
    position: relative;
  `}
`,R=s.styled.div`
  ${({theme:e})=>`
    display: flex;
    align-items: center;
    gap: ${3*e.sizeUnit}px;
  `}
`,b=(0,s.styled)(a)`
  flex: 1;
`,S=(0,s.styled)(u.F.CheckCircleFilled)`
  ${({theme:e})=>`
    color: ${e.colorSuccess};
    font-size: ${6*e.sizeUnit}px;
    flex-shrink: 0;
  `}
`,g=s.styled.div`
  ${({theme:e})=>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${4*e.sizeUnit}px;
    height: ${4*e.sizeUnit}px;
    background-color: ${e.colorError};
    border-radius: 50%;
    flex-shrink: 0;
  `}
`,m=(0,s.styled)(u.F.CloseOutlined)`
  ${({theme:e})=>`
    color: ${e.colorWhite};
    font-size: ${2.5*e.sizeUnit}px;
  `}
`,$=s.styled.div`
  ${({theme:e})=>`
    display: flex;
    gap: ${2*e.sizeUnit}px;
    justify-content: flex-end;
  `}
`,T=(0,s.styled)(E)`
  ${({theme:e})=>`
    display: block;
    text-align: center;
    margin-top: ${4*e.sizeUnit}px;
  `}
`,y=(0,s.styled)(T)`
  ${({theme:e})=>`
    color: ${e.colorError};
  `}
`,C=(0,s.styled)(i.$n)`
  ${({theme:e})=>`
    background-color: ${e.colorSuccessBg};
    color: ${e.colorSuccess};
    border-color: ${e.colorSuccessBg};

    &:hover {
      background-color: ${e.colorSuccessBg};
      color: ${e.colorSuccess};
      border-color: ${e.colorSuccess};
    }

    &:focus {
      background-color: ${e.colorSuccessBg};
      color: ${e.colorSuccess};
      border-color: ${e.colorSuccess};
    }
  `}
`,w=(0,s.styled)(i.$n)`
  ${({theme:e})=>`
    background-color: ${e.colorSuccess};
    border-color: ${e.colorSuccess};
    color: ${e.colorWhite};

    &:hover:not(:disabled) {
      background-color: ${e.colorSuccessActive};
      border-color: ${e.colorSuccessActive};
      color: ${e.colorWhite};
    }

    &:focus:not(:disabled) {
      background-color: ${e.colorSuccess};
      border-color: ${e.colorSuccess};
      color: ${e.colorWhite};
    }

    &:disabled {
      background-color: ${e.colorBgContainerDisabled};
      border-color: ${e.colorBgContainerDisabled};
      color: ${e.colorTextDisabled};
    }
  `}
`,x=({status:e,progress:r,onCancel:t,onRetry:o,onDownload:c,getProgressPercentage:i})=>{let d=(0,s.useTheme)(),{downloadUrl:u,filename:E,error:f}=r,x="error"===e,A="cancelled"===e,L="completed"===e,_="streaming"===e,O=x||L,k=(x||A)&&o,N=(e=>{switch(e){case"completed":return"success";case"error":case"cancelled":return"exception";default:return"normal"}})(e),D=L?100:i(),U=((e,r,t)=>{switch(e){case"error":return t||(0,n.t)("Export failed");case"cancelled":return(0,n.t)("Export cancelled");case"completed":return(0,n.t)("Export successful: %s",r||"export");default:return r?(0,n.t)("Processing export for %s",r):(0,n.t)("Processing export...")}})(e,E,f),I=(e=>{switch(e){case"error":case"cancelled":case"completed":return(0,n.t)("Close");default:return(0,n.t)("Cancel")}})(e),P=p({percent:D,status:N,showInfo:_},_&&{strokeColor:d.colorSuccess,format:e=>`${Math.round(e||0)}%`});return(0,l.FD)(h,{children:[(0,l.FD)(v,{children:[O?(0,l.FD)(R,{children:[(0,l.Y)(b,p({},P)),x&&(0,l.Y)(g,{children:(0,l.Y)(m,{})}),L&&(0,l.Y)(S,{})]}):(0,l.Y)(a,p({},P)),x?(0,l.Y)(y,{children:U}):(0,l.Y)(T,{children:U})]}),(0,l.FD)($,{children:[(0,l.Y)(C,{onClick:t,children:I}),k?(0,l.Y)(w,{onClick:o,children:(0,n.t)("Retry")}):(0,l.Y)(w,{onClick:c,disabled:!L||!u,children:(0,n.t)("Download")})]})]})},A=({visible:e,onCancel:r,onRetry:t,onDownload:o,progress:s})=>{let{status:c,downloadUrl:a,filename:i}=s;return(0,l.Y)(d.aF,{title:(0,n.t)("CSV Export"),show:e,onHide:r,hideFooter:!0,width:600,maskClosable:!1,centered:!0,children:(0,l.Y)(x,{status:c,progress:s,onCancel:r,onRetry:t,onDownload:()=>{if(a&&i){let e;(e=document.createElement("a")).href=a,e.download=i,document.body.appendChild(e),e.click(),document.body.removeChild(e),null==o||o(),r()}},getProgressPercentage:()=>{var e,r;return e=s.totalRows,r=s.rowsProcessed,"completed"===c?100:e&&!(e<=0)&&r?Math.floor(r/e*100):0}})})}},61983(e,r,t){t.d(r,{K:()=>l.K,O:()=>o.A});var o=t(12048),l=t(10584)},10584(e,r,t){t.d(r,{K:()=>p});var o=t(24002),l=t(48014),n=t(12048),s=t(52996),c=t(85572);function a(e,r,t,o,l,n,s){try{var c=e[n](s),a=c.value}catch(e){t(e);return}c.done?r(a):Promise.resolve(a).then(o,l)}function i(e){return function(){var r=this,t=arguments;return new Promise(function(o,l){var n=e.apply(r,t);function s(e){a(n,o,l,s,c,"next",e)}function c(e){a(n,o,l,s,c,"throw",e)}s(void 0)})}}function d(){return(d=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}let u=e=>e.filter(e=>10===e).length,p=(e={})=>{let[r,t]=(0,o.useState)({rowsProcessed:0,totalRows:void 0,totalSize:0,speed:0,mbPerSecond:0,elapsedTime:0,status:n.l.STREAMING}),[a,p]=(0,o.useState)(0),E=(0,o.useRef)(null),f=(0,o.useRef)(null),h=(0,o.useRef)(null),v=(0,o.useRef)(!1),R=(0,o.useCallback)(e=>{t(r=>d({},r,e))},[]),b=(0,o.useCallback)(r=>i(function*(){let{url:t,payload:o,filename:a,exportType:d,expectedRows:p}=r;if(!v.current){v.current=!0,E.current=new AbortController,R({rowsProcessed:0,totalRows:p,totalSize:0,speed:0,mbPerSecond:0,elapsedTime:0,status:n.l.STREAMING,filename:a});try{var f;let r,b,S=yield(r=E.current.signal,i(function*(){let e={"Content-Type":"application/x-www-form-urlencoded"},t=yield l.A.getCSRFToken();t&&(e["X-CSRFToken"]=t);let n={};return a&&(n.filename=a),void 0!==p&&(n.expected_rows=p.toString()),"client_id"in o?n.client_id=String(o.client_id):n.form_data=JSON.stringify(o),{method:"POST",headers:e,body:new URLSearchParams(n),signal:r,credentials:"same-origin"}})()),g=(b=(0,c.N8)(),t.startsWith("//")||t.match(/^https?:\/\//)?t:t.startsWith("/")?!b||t===b||t.startsWith(`${b}/`)||t.startsWith(`${b}?`)||t.startsWith(`${b}#`)?t:(0,s.G)(t):(0,s.G)(`/${t}`)),m=yield fetch(g,S);if(!m.ok)throw Error(`Export failed: ${m.status} ${m.statusText}`);if(!m.body)throw Error("Response body is not available for streaming");let $=m.headers.get("Content-Disposition"),T=`export.${d}`;if($){let e=$.match(/filename="?([^"]+)"?/);e&&e[1]&&(T=e[1])}let y=m.body.getReader(),C=[],w=0,x=0,A=!1;for(;;){let{done:r,value:t}=yield y.read();if(r)break;if(null==(f=E.current)?void 0:f.signal.aborted)throw Error("Export cancelled by user");let o=new TextDecoder().decode(t);if(o.includes("__STREAM_ERROR__")){let r=o.match(/__STREAM_ERROR__:(.+)/),t=r?r[1].trim():"Export failed. Please try again.";R({status:n.l.ERROR,error:t,rowsProcessed:x,totalRows:p,totalSize:w}),v.current=!1,null==e.onError||e.onError.call(e,t),A=!0;break}C.push(t),w+=t.length,x+=u(t),R({status:n.l.STREAMING,rowsProcessed:x,totalRows:p,totalSize:w,filename:T})}if(A)return;let L=((e,r,t)=>{let o=new Uint8Array(r),l=0;for(let r of e)o.set(r,l),l+=r.length;return new Blob([o],{type:"csv"===t?"text/csv;charset=utf-8":"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"})})(C,w,d);h.current&&URL.revokeObjectURL(h.current);let _=URL.createObjectURL(L);h.current=_,R({status:n.l.COMPLETED,downloadUrl:_,filename:T}),v.current=!1,null==e.onComplete||e.onComplete.call(e,_,T)}catch(t){let r=t instanceof Error?t.message:"Unknown error occurred";r.includes("cancelled")||r.includes("aborted")?R({status:n.l.CANCELLED}):(R({status:n.l.ERROR,error:r}),null==e.onError||e.onError.call(e,r)),v.current=!1}finally{E.current=null}}})(),[R,e]),S=(0,o.useCallback)(e=>i(function*(){v.current||(p(0),f.current=e,R({rowsProcessed:0,totalRows:e.expectedRows,totalSize:0,speed:0,mbPerSecond:0,elapsedTime:0,status:n.l.STREAMING,filename:e.filename}),b(e))})(),[R,b]),g=(0,o.useCallback)(()=>{!f.current||v.current||(p(0),b(f.current))},[b]),m=(0,o.useCallback)(()=>{E.current&&(E.current.abort(),R({status:n.l.CANCELLED}))},[R]),$=(0,o.useCallback)(()=>{h.current&&(URL.revokeObjectURL(h.current),h.current=null),v.current=!1,E.current=null,t({rowsProcessed:0,totalRows:void 0,totalSize:0,speed:0,mbPerSecond:0,elapsedTime:0,status:n.l.STREAMING})},[]);return(0,o.useEffect)(()=>()=>{h.current&&URL.revokeObjectURL(h.current)},[]),{progress:r,isExporting:v.current,retryCount:a,startExport:S,cancelExport:m,resetExport:$,retryExport:g}}},669(e,r,t){t.d(r,{T:()=>c,c:()=>a});var o=t(48014),l=t(41672);let n=(e,r)=>{let t="api/v1/explore/form_data";return e&&(t=t.concat(`/${e}`)),r&&(t=t.concat(`?tab_id=${r}`)),t},s=(e,r,t,o)=>{let n={datasource_id:e,datasource_type:r,form_data:JSON.stringify((0,l.k)(t))};return o&&(n.chart_id=o),n},c=(e,r,t,l,c)=>o.A.post({endpoint:n(void 0,c),jsonPayload:s(e,r,t,l)}).then(e=>e.json.key),a=(e,r,t,l,c,a)=>o.A.put({endpoint:n(t,a),jsonPayload:s(e,r,l,c)}).then(e=>e.json.message)},18612(e,r,t){t.d(r,{S:()=>s});var o=t(43702),l=t(61225),n=t(68362);let s=()=>{let e=(0,l.d4)(e=>{var r;return(0,n.L)("can_explore","Superset",null==(r=e.user)?void 0:r.roles)}),r=(0,l.d4)(e=>{var r;return(0,n.L)("can_write","ExploreFormDataRestApi",null==(r=e.user)?void 0:r.roles)}),t=(0,l.d4)(e=>{var r;return(0,n.L)("can_samples","Datasource",null==(r=e.user)?void 0:r.roles)}),s=(0,l.d4)(e=>{var r;return(0,n.L)("can_csv","Superset",null==(r=e.user)?void 0:r.roles)}),c=(0,l.d4)(e=>{var r;return(0,n.L)("can_export_csv","SQLLab",null==(r=e.user)?void 0:r.roles)}),a=(0,l.d4)(e=>{var r;return(0,n.L)("can_export_data","Superset",null==(r=e.user)?void 0:r.roles)}),i=(0,l.d4)(e=>{var r;return(0,n.L)("can_export_image","Superset",null==(r=e.user)?void 0:r.roles)}),d=(0,l.d4)(e=>{var r;return(0,n.L)("can_copy_clipboard","Superset",null==(r=e.user)?void 0:r.roles)}),u=(0,o.G7)(o.TO.GranularExportControls),p=u?a:s,E=(0,l.d4)(e=>{var r;return(0,n.L)("can_drill","Dashboard",null==(r=e.user)?void 0:r.roles)}),f=(0,l.d4)(e=>{var r;return(0,n.L)("can_get_drill_info","Dataset",null==(r=e.user)?void 0:r.roles)});return{canExplore:e,canWriteExploreFormData:r,canDatasourceSamples:t,canDownload:p,canExportData:p,canExportDataSqlLab:u?a:c,canExportImage:u?i:s,canCopyClipboard:u?d:s,canCopyClipboardSqlLab:u?d:c,canDrill:E,canDrillBy:(e||E)&&r&&f,canDrillToDetail:(e||E)&&t&&f,canViewQuery:(0,l.d4)(e=>{var r;return(0,n.L)("can_view_query","Dashboard",null==(r=e.user)?void 0:r.roles)}),canViewTable:(0,l.d4)(e=>{var r;return(0,n.L)("can_view_chart_as_table","Dashboard",null==(r=e.user)?void 0:r.roles)})}}},73794(e,r,t){t.d(r,{wW:()=>n,SM:()=>s,el:()=>l});var o=t(48014);let l=new Map,n=((e,r,t=(...e)=>JSON.stringify([...e]))=>(...o)=>{let l=t(...o);if(r.has(l))return r.get(l);let n=e(...o);return r.set(l,n),n})(o.A.get,l,({endpoint:e})=>e||"");function s(e){if(null==e||""===e)return;let r=String(e);l.forEach((e,t)=>{for(let e of[`/api/v1/dataset/${r}`,`/api/v1/dataset/${r}/`,`/api/v1/dataset/${r}?`])if(t.includes(e)){let r=t.substring(t.indexOf(e)+e.length);if(e.endsWith("/")||e.endsWith("?")||""===r||r.startsWith("/")||r.startsWith("?")){l.delete(t);break}}})}},41672(e,r,t){t.d(r,{k:()=>s});var o=t(90179),l=t.n(o);let n=["url_params"],s=e=>l()(e,n)}}]);