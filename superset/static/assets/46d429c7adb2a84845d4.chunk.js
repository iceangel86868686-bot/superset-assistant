"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[7299],{5233(e,t,l){l.d(t,{A:()=>i});let i=l(22022).Tree},88215(e,t,l){l.d(t,{n:()=>d});var i=l(2445),r=l(22567),n=l(16351),o=l(15341),a=l(1125),s=l(89314);let d=({showModal:e,onHide:t,handleSave:l,onConfirmNavigation:d,title:c="Unsaved Changes",body:u="If you don't save, changes will be lost."})=>(0,i.Y)(n.aF,{centered:!0,responsive:!0,onHide:t,show:e,width:"444px",title:(0,i.FD)(i.FK,{children:[(0,i.Y)(o.F.WarningOutlined,{iconSize:"m",style:{marginRight:8}}),c]}),footer:(0,i.FD)(i.FK,{children:[(0,i.Y)(a.$n,{buttonStyle:"secondary",onClick:d,children:(0,r.t)("Discard")}),(0,i.Y)(a.$n,{buttonStyle:"primary",onClick:l,children:(0,r.t)("Save")})]}),children:(0,i.Y)(s.o.Text,{children:u})})},82823(e,t,l){l.d(t,{A:()=>eG});var i,r,n,o=l(61225),a=l(82960),s=l(37370),d=l(23111),c=l(2445),u=l(24002),p=l(12263),h=l(22567),m=l(43702),v=l(87928),g=l(97371),f=l(4428),b=l(86864),y=l(46882),x=l(10658),S=l(45380),C=l(32415),w=l(11540),_=l(99961),F=((i={}).Explore="explore",i.Dashboard="dashboard",i),T=l(10898),Y=l(4124),A=l.n(Y),$=l(2404),k=l.n($),D=l(88055),E=l.n(D),O=l(86079),z=l(34969),R=l(43361),I=l(29228),M=l(18036),N=l(95927),L=l(18612),U=l(25488),j=l(81580),H=l(37286),P=l(17436),q=l(17437),V=l(71519),B=l(1125),W=l(16351),G=l(6540),K=l(22022),Q=l(14496),X=l(669),J=l(2798),Z=l(40952),ee=l(14621),et=l(68362),el=l(10175),ei=l(8290),er=((r={})[r.Chart=0]="Chart",r[r.Table=1]="Table",r);function en({formData:e,result:t,dataset:l,onContextMenu:i,inContextMenu:r}){let n=(0,u.useMemo)(()=>({onContextMenu:i}),[i]);return(0,c.Y)("div",{css:(0,q.AH)`
        width: 100%;
        height: 100%;
        min-height: 0;
      `,"data-test":"drill-by-chart",children:(0,c.Y)(I.A,{disableErrorBoundary:!0,chartType:e.viz_type,enableNoResults:!0,datasource:l,formData:e,queriesData:t,hooks:n,inContextMenu:r,height:"100%",width:"100%"})})}var eo=l(33962),ea=l(15101),es=l(61457);let ed=g.styled.div`
  ${()=>(0,q.AH)`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
  `}
`;function ec(){return(ec=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i])}return e}).apply(this,arguments)}let eu="adhoc_filters",ep=({formData:e,closeModal:t})=>{let l=(0,o.wA)(),{addDangerToast:i}=(0,ee.Yf)(),r=(0,g.useTheme)(),[n,a]=(0,u.useState)(""),s=(0,u.useContext)(Q.DashboardPageIdContext),p=(0,u.useCallback)(()=>{l((0,d.logEvent)(S.Ro,{slice_id:e.slice_id}))},[l,e.slice_id]),m=(0,o.d4)(e=>{var t;return(0,et.L)("can_explore","Superset",null==(t=e.user)?void 0:t.roles)}),[v,f]=e.datasource.split("__");(0,u.useEffect)(()=>{(0,ei.n)()||(0,X.T)(Number(v),f,e,0).then(e=>{a(`/explore/?form_data_key=${e}&dashboard_page_id=${s}`)}).catch(()=>{i((0,h.t)("Failed to generate chart edit URL"))})},[i,s,v,f,e]);let b=!n||!m;return(0,c.FD)(c.FK,{children:[!(0,ei.n)()&&(0,c.Y)(B.$n,{buttonStyle:"secondary",buttonSize:"small",onClick:p,disabled:b,tooltip:b?(0,h.t)("You do not have sufficient permissions to edit the chart"):void 0,children:(0,c.Y)(V.N_,{css:(0,q.AH)`
              &:hover {
                text-decoration: none;
              }
            `,to:n,children:(0,h.t)("Edit chart")})}),(0,c.Y)(B.$n,{buttonStyle:"primary",buttonSize:"small",onClick:t,"data-test":"close-drill-by-modal",css:(0,q.AH)`
          margin-left: ${2*r.sizeUnit}px;
        `,children:(0,h.t)("Close")})]})};function eh({column:e,dataset:t,drillByConfig:l,formData:i,onHideModal:r,canDownload:n}){var a;let p=(0,o.wA)(),m=(0,g.useTheme)(),{addDangerToast:f}=(0,ee.Yf)(),[y,x]=(0,u.useState)(!0),[C,w]=(0,u.useState)([ec({},l,{column:e})]);(0,u.useEffect)(()=>{p((0,d.logEvent)(S.bD,{slice_id:i.slice_id}))},[p,i.slice_id]);let{column:_,groupbyFieldName:F=l.groupbyFieldName}=C[C.length-1]||{},T=(0,u.useMemo)(()=>(0,v.A)(i[F]).map(e=>{var l;return null==(l=t.columns)?void 0:l.find(t=>t.column_name===e)}).filter(H.A),[t.columns,i,F]),{displayModeToggle:Y,drillByDisplayMode:A}=(()=>{let[e,t]=(0,u.useState)(er.Chart);return{displayModeToggle:(0,u.useMemo)(()=>(0,c.Y)("div",{css:e=>(0,q.AH)`
          margin-bottom: ${6*e.sizeUnit}px;
        `,"data-test":"drill-by-display-toggle",children:(0,c.Y)(eo.s.GroupWrapper,{onChange:({target:{value:e}})=>{t(e)},defaultValue:er.Chart,options:[{label:(0,h.t)("Chart"),value:er.Chart},{label:(0,h.t)("Table"),value:er.Table}],optionType:"button",buttonStyle:"outline"})}),[]),drillByDisplayMode:e}})(),[$,k]=(0,u.useState)(),[D,E]=(0,u.useState)(i),[O,z]=(0,u.useState)([...T,e].filter(H.A)),[R,I]=(0,u.useState)([{groupby:T,filters:l.filters},{groupby:e||[]}]),M=(0,u.useCallback)((e,t=F)=>Array.isArray(i[t])?[e.column_name]:e.column_name,[i,F]),N=(0,u.useCallback)(e=>e.reduce((e,t)=>{(null==t?void 0:t.groupbyFieldName)&&t.column&&(e.formData[t.groupbyFieldName]=M(t.column,t.groupbyFieldName),e.overriddenGroupbyFields.add(t.groupbyFieldName));let l=(null==t?void 0:t.adhocFilterFieldName)||eu;return e.formData[l]=[...(0,v.A)(e[l]),...(0,v.A)(t.filters).map(e=>(0,J.r)(e))],e.overriddenAdhocFilterFields.add(l),e},{formData:{},overriddenGroupbyFields:new Set,overriddenAdhocFilterFields:new Set}),[M]),L=(0,u.useCallback)(()=>C.reduce((e,t)=>{let l=t.adhocFilterFieldName||eu;return e[l]=[...e[l]||[],...t.filters.map(e=>(0,J.r)(e))],e},{}),[C]),U=(0,u.useCallback)((e,t)=>{p((0,d.logEvent)(S.g$,{slice_id:i.slice_id})),w(e=>e.slice(0,t)),I(e=>{let l=e.slice(0,t+1);return delete l[l.length-1].filters,l}),z(e=>e.slice(0,t)),E(()=>{if(0===t)return i;let{formData:e,overriddenAdhocFilterFields:l}=N(C.slice(0,t)),r=ec({},i,e);return l.forEach(t=>ec({},r,{[t]:[...i[t],...e[t]]})),r})},[p,C,i,N]),j=R.map((e,t)=>{let l=t<R.length-1,i=(0,v.A)(e.groupby).length>0,r=(0,v.A)(e.filters).length>0;if(!i&&!r)return;let n=(0,v.A)(e.groupby).map(e=>e.verbose_name||e.column_name).join(", "),o=r?`(${(0,v.A)(e.filters).map(e=>{var t;return null!=(t=e.formattedVal)?t:String(e.val)}).join(", ")})`:"";return{title:`${n} ${o}`.trim(),onClick:l?()=>U(e,t):void 0}}).filter(e=>void 0!==e),V=(0,u.useMemo)(()=>{let e=ec({},D);_&&F&&(e[F]=M(_));let t=L();return Object.keys(t).forEach(l=>{e=ec({},e,{[l]:[...(0,v.A)(i[l]),...t[l]]})}),e.slice_id=0,delete e.slice_name,delete e.dashboards,e},[D,_,F,L,M,i]),B=(0,u.useCallback)(e=>{Promise.resolve((0,el.RY)({formData:V,resultFormat:e,resultType:"full"})).catch(e=>{f((0,h.t)("Failed to generate download: %s",(null==e?void 0:e.message)||e))})},[V,f]),Q=(0,u.useCallback)(()=>B("csv"),[B]),X=(0,u.useCallback)(()=>B("xlsx"),[B]),et=(0,u.useCallback)(()=>{k(void 0),x(!0);let[e]=(0,el.Mp)(V);(0,s.getChartDataRequest)({formData:V}).then(({response:t,json:l})=>(0,s.handleChartDataResponse)(t,l,e)).then(e=>{k(e)}).catch(()=>{f((0,h.t)("Failed to load chart data."))}).finally(()=>{x(!1)})},[f,V]),ei=(a=i.datasource,(0,H.A)($)?1===$.length?(0,c.Y)(ed,{"data-test":"drill-by-results-table",children:(0,c.Y)(ea.U,{colnames:$[0].colnames,coltypes:$[0].coltypes,rowcount:$[0].sql_rowcount,data:$[0].data,datasourceId:a,isVisible:!0,canDownload:n,onDownloadCSV:Q,onDownloadXLSX:X,onReload:et})}):(0,c.Y)(es.Ay,{defaultActiveKey:"result-tab-0",items:$.map((e,t)=>({key:`result-tab-${t}`,label:(0,h.t)("Results %s",t+1),children:(0,c.Y)(ed,{children:(0,c.Y)(ea.U,{colnames:e.colnames,coltypes:e.coltypes,data:e.data,rowcount:e.sql_rowcount,datasourceId:a,isVisible:!0,canDownload:n,onDownloadCSV:Q,onDownloadXLSX:X,onReload:et})})}))}):(0,c.Y)("div",{}));(0,u.useEffect)(()=>{z(e=>!_||e.some(e=>e.column_name===_.column_name)?e:[...e,_])},[_]);let em=(0,u.useCallback)((e,t)=>{p((0,d.logEvent)(S.gi,{drill_depth:C.length+1,slice_id:i.slice_id})),E(V),w(l=>[...l,ec({},t,{column:e})]),I(l=>{let i=[...l,{groupby:e}];return i[i.length-2].filters=t.filters,i})},[p,C.length,V,i.slice_id]),ev=(0,u.useMemo)(()=>({drillBy:{excludedColumns:O,openNewModal:!1}}),[O]),{contextMenu:eg,inContextMenu:ef,onContextMenu:eb}=((e,t,l,i,r)=>{let n=(0,u.useRef)(null),[o,a]=(0,u.useState)(!1),s=(0,u.useCallback)((...e)=>{a(!1),null==l||l(...e)},[l]),d=(0,u.useCallback)(()=>{a(!1)},[]);return{contextMenu:(0,u.useMemo)(()=>(0,c.Y)(ek,{ref:n,id:e,formData:t,onSelection:s,onClose:d,displayedItems:i,additionalConfig:r}),[r,e,i,t,d,s]),inContextMenu:o,onContextMenu:(e,t,l)=>{var i;null==(i=n.current)||i.open(e,t,l),a(!0)}}})(0,D,em,e$.DrillBy,ev),ey=(0,o.d4)(e=>{let t=Object.values(e.dashboardLayout.present).find(e=>{var t;return(null==(t=e.meta)?void 0:t.chartId)===i.slice_id});return(null==t?void 0:t.meta.sliceNameOverride)||(null==t?void 0:t.meta.sliceName)});(0,u.useEffect)(()=>{if(V){let[e]=(0,el.Mp)(V);x(!0),k(void 0),(0,s.getChartDataRequest)({formData:V}).then(({response:t,json:l})=>(0,s.handleChartDataResponse)(t,l,e)).then(e=>{k(e)}).catch(()=>{f((0,h.t)("Failed to load chart data."))}).finally(()=>{x(!1)})}},[f,V]);let{metadataBar:ex}=(0,Z.M)({dataset:t});return(0,c.Y)(W.aF,{css:(0,q.AH)`
        .ant-modal-footer {
          border-top: none;
        }
      `,show:!0,onHide:null!=r?r:()=>null,name:(0,h.t)("Drill by: %s",ey),title:(0,h.t)("Drill by: %s",ey),footer:(0,c.Y)(ep,{formData:V}),responsive:!0,resizable:!0,resizableConfig:{minHeight:128*m.sizeUnit,minWidth:128*m.sizeUnit,defaultSize:{width:"auto",height:"80vh"}},draggable:!0,destroyOnHidden:!0,maskClosable:!1,children:(0,c.FD)(G.s,{vertical:!0,gap:m.sizeUnit,css:(0,q.AH)`
          height: 100%;
        `,children:[ex,(0,c.Y)(K.Breadcrumb,{css:(0,q.AH)`
            margin-bottom: ${2*m.sizeUnit}px;
          `,items:j,itemRender:(e,t,l,i)=>l.indexOf(e)===l.length-1?(0,c.FD)("span",{"data-test":"drill-by-breadcrumb-item",children:[e.title,i]}):(0,c.Y)("span",{"data-test":"drill-by-breadcrumb-item",role:"button",tabIndex:0,onClick:e.onClick,css:(0,q.AH)`
                  cursor: pointer;
                `,children:e.title})}),Y,y&&(0,c.Y)(b.R,{}),!y&&!$&&(0,c.Y)(P.F,{type:"error",message:(0,h.t)("There was an error loading the chart data")}),A===er.Chart&&$&&(0,c.Y)(en,{dataset:t,formData:V,result:$,onContextMenu:eb,inContextMenu:ef}),A===er.Table&&$&&ei,eg]})})}var em=l(74078),ev=l(18347),eg=l(30177),ef=l(69491),eb=l(15341),ey=l(90388),ex=l(38221),eS=l.n(ex),eC=l(5373),ew=l(84821),e_=l(67663);function eF(){return(eF=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i])}return e}).apply(this,arguments)}let eT=e=>{let t,{drillByConfig:l,formData:i,onSelection:r=()=>{},onClick:n=()=>{},onCloseMenu:o=()=>{},openNewModal:a=!0,excludedColumns:s,onDrillBy:d,dataset:p,isLoadingDataset:m=!1}=e,f=function(e,t){if(null==e)return{};var l,i,r={},n=Object.getOwnPropertyNames(e);for(i=0;i<n.length;i++)!(t.indexOf(l=n[i])>=0)&&Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l]);return r}(e,["drillByConfig","formData","onSelection","onClick","onCloseMenu","openNewModal","excludedColumns","onDrillBy","dataset","isLoadingDataset"]),y=(0,g.useTheme)(),[x,S]=(0,u.useState)(""),[C,w]=(0,u.useState)(""),[_,F]=(0,u.useState)(!1),T=(0,u.useRef)(null),Y=(0,u.useRef)(null),A=(0,u.useMemo)(()=>p?(0,v.A)(p.drillable_columns):[],[p]),$=A.length>10,k=(0,u.useCallback)((e,t)=>{n(e),r(t,l),a&&d&&p&&d(t,p),F(!1),o()},[l,n,r,a,d,p,o]);(0,u.useEffect)(()=>{let e;return _?e=setTimeout(()=>{var e,t;null==(t=T.current)||null==(e=t.input)||e.focus({preventScroll:!0})},100):(S(""),w("")),()=>{e&&clearTimeout(e)}},[_]);let D=null==l?void 0:l.groupbyFieldName,E=(0,u.useMemo)(()=>{var e;return null==(e=(0,R.A)().get(i.viz_type))?void 0:e.behaviors.find(e=>e===O.nS.DrillBy)},[i.viz_type]),z=(0,u.useMemo)(()=>eS()(e=>{w(e)},ef.Y.FAST_DEBOUNCE),[]),I=(0,u.useMemo)(()=>A.filter(e=>!((null==s?void 0:s.map(e=>e.column_name))||[]).includes(e.column_name)).filter(e=>(e.verbose_name||e.column_name).toLowerCase().includes(C.toLowerCase())),[A,C,s]);if(E?D||(t=(0,h.t)("Drill by is not available for this data point")):t=(0,h.t)("Drill by is not yet supported for this chart type"),!0===i.matrixify_enable&&(void 0!==i.matrixify_mode_rows&&"disabled"!==i.matrixify_mode_rows||void 0!==i.matrixify_mode_columns&&"disabled"!==i.matrixify_mode_columns))return null;let M=!E||!D,N=(0,c.FD)("div",{role:"menu",tabIndex:0,"data-test":"drill-by-submenu",css:(0,q.AH)`
        width: 220px;
        max-width: 220px;
        .ant-input-affix-wrapper {
          margin-bottom: ${2*y.sizeUnit}px;
        }
      `,onClick:e=>e.stopPropagation(),children:[$&&(0,c.Y)(K.Input,{ref:T,prefix:(0,c.Y)(eb.F.SearchOutlined,{iconSize:"l",iconColor:y.colorIcon}),onChange:e=>{var t;e.stopPropagation(),S(t=e.target.value),z(t)},placeholder:(0,h.t)("Search columns"),onClick:e=>{e.nativeEvent.stopImmediatePropagation()},allowClear:!0,css:(0,q.AH)`
            width: 100%;
            box-shadow: none;
          `,value:x}),m?(0,c.Y)("div",{css:(0,q.AH)`
            padding: ${3*y.sizeUnit}px 0;
          `,children:(0,c.Y)(b.R,{position:"inline-centered"})}):I.length?(0,c.Y)(eC.Y1,{width:"100%",height:200,itemSize:35,itemCount:I.length,itemData:{columns:I},overscanCount:20,children:({index:e,data:t,style:l})=>{let{columns:i}=t,r=i[e];return(0,c.Y)(e_.Gn,{tooltipText:r.verbose_name||r.column_name,onClick:e=>k(e,r),style:l,children:r.verbose_name||r.column_name})}}):(0,c.Y)("div",{css:(0,q.AH)`
            padding: ${2*y.sizeUnit}px;
            color: ${y.colorTextDisabled};
            text-align: center;
          `,children:(0,h.t)("No columns found")})]}),L=(0,c.FD)("div",{ref:Y,role:"button",tabIndex:M?-1:0,css:(0,q.AH)`
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: ${M?"not-allowed":"pointer"};
        color: ${M?y.colorTextDisabled:"inherit"};
        &:hover {
          background: transparent;
        }
      `,onClick:()=>!M&&F(!_),onKeyDown:e=>{M||"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),F(!_))},children:[(0,c.Y)("span",{children:(0,h.t)("Drill by")}),M?(0,c.Y)(ew.C,{title:t}):(0,c.Y)(eb.F.RightOutlined,{iconSize:"s",iconColor:y.colorTextTertiary})]});return M?L:(0,c.Y)(ey.A,eF({content:N,placement:"rightTop",open:_,onOpenChange:F,trigger:["hover","click"],arrow:!1,styles:{root:{paddingLeft:0},body:{padding:2*y.sizeUnit,boxShadow:y.boxShadow,borderRadius:y.borderRadius}}},f,{children:L}))};var eY=l(61491);function eA(){return(eA=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i])}return e}).apply(this,arguments)}var e$=((n={})[n.CrossFilter=0]="CrossFilter",n[n.DrillToDetail=1]="DrillToDetail",n[n.DrillBy=2]="DrillBy",n[n.All=3]="All",n);let ek=(0,u.forwardRef)(({id:e,formData:t,onSelection:l,onClose:i,displayedItems:r=3,additionalConfig:n},a)=>{var s,d,p,f,b,y,x,S,C;let w=(0,o.wA)(),_=(0,g.useTheme)(),{canDrillToDetail:F,canDrillBy:Y,canDownload:A}=(0,L.S)(),$=(0,o.d4)(({dashboardInfo:e})=>e.crossFiltersEnabled),k=(0,o.d4)(({dashboardInfo:e})=>e.id),[D,E]=(0,u.useState)([]),[z,I]=(0,u.useState)(!1),H=e=>3===r||(0,v.A)(r).includes(e),[{filters:P,clientX:q,clientY:V},B]=(0,u.useState)({clientX:0,clientY:0}),W=(0,u.useMemo)(()=>{if(!P)return P;let e=null==P?void 0:P.matrixifyContext;if(!e)return P;let t=P.drillBy?eA({},P.drillBy,{filters:[...P.drillBy.filters||[],...e.cellFilters||[]]}):void 0;return eA({},P,{drillBy:t})},[P]),G=(0,u.useMemo)(()=>{let e=null==P?void 0:P.matrixifyContext;return(null==e?void 0:e.cellFormData)||t},[P,t]),[K,Q]=(0,u.useState)(!1),[X,J]=(0,u.useState)(),[Z,ee]=(0,u.useState)(!1),et=(0,u.useCallback)(()=>{I(!1),i()},[i]),el=(0,u.useCallback)(e=>{J(e),ee(!0)},[]),ei=(0,N.a)().get("load.drillby.options"),er=(0,u.useCallback)(()=>{ee(!1)},[]),en=[],eo=(0,m.G7)(m.TO.DrillToDetail)&&F&&H(1),ea=(0,m.G7)(m.TO.DrillBy)&&Y&&H(2)&&(!0!==t.matrixify_enable||(void 0===t.matrixify_mode_rows||"disabled"===t.matrixify_mode_rows)&&(void 0===t.matrixify_mode_columns||"disabled"===t.matrixify_mode_columns)),es=(0,em.t_)(t.datasource,k,t,!F&&!Y),ed=es.status===T.bk.Loading,ec=(0,u.useMemo)(()=>{if(es.status!==T.bk.Complete)return;if(!ea)return es.result;let e=es.result,l=(0,v.A)(e.columns).filter(e=>{var l,i,r,o;return(!ei||e.groupby)&&!(0,v.A)(t[null!=(l=null==P||null==(i=P.drillBy)?void 0:i.groupbyFieldName)?l:""]).includes(e.column_name)&&e.column_name!==t.x_axis&&(null==(r=(0,v.A)(null==n||null==(o=n.drillBy)?void 0:o.excludedColumns))?void 0:r.every(t=>t.column_name!==e.column_name))});return eA({},e,{drillable_columns:l})},[es.status,es.result,ea,null==W||null==(d=W.drillBy)?void 0:d.groupbyFieldName,t.x_axis,t[null!=(s=null==W||null==(p=W.drillBy)?void 0:p.groupbyFieldName)?s:""],null==n||null==(f=n.drillBy)?void 0:f.excludedColumns,ei]),eu=H(0),ep=null==(y=(0,R.A)().get(t.viz_type))||null==(b=y.behaviors)?void 0:b.includes(O.nS.InteractiveChart),ef=0;eu&&(ef+=1),eo&&(ef+=2),ea&&(ef+=1),0===ef&&(ef=1);let eb=(0,ev.R)(eA({formData:G,filters:null==P?void 0:P.drillToDetail,setFilters:E,isContextMenu:!0,contextMenuY:V,onSelection:l,submenuIndex:eu?2:1,setShowModal:Q,dataset:ec,isLoadingDataset:ed},null==n?void 0:n.drillToDetail));if(eu){let t=!ep||!$||!(null==P?void 0:P.crossFilter),l=null;t?$?ep?(null==P?void 0:P.crossFilter)||(l=(0,c.Y)(c.FK,{children:(0,c.Y)("div",{children:(0,h.t)("You can't apply cross-filter on this data point.")})})):l=(0,c.Y)(c.FK,{children:(0,c.Y)("div",{children:(0,h.t)("This visualization type does not support cross-filtering.")})}):l=(0,c.Y)(c.FK,{children:(0,c.Y)("div",{children:(0,h.t)("Cross-filtering is not enabled for this dashboard.")})}):l=(0,c.FD)(c.FK,{children:[(0,c.Y)("div",{children:(0,h.t)("Cross-filter will be applied to all of the charts that use this dataset.")}),(0,c.Y)("div",{children:(0,h.t)("You can also just click on the chart to apply cross-filter.")})]}),en.push({key:"cross-filtering-menu-item",label:(null==P||null==(x=P.crossFilter)?void 0:x.isCurrentValueSelected)?(0,h.t)("Remove cross-filter"):(0,c.FD)("span",{children:[(0,h.t)("Add cross-filter"),(0,c.Y)(ew.C,{title:l,color:t?void 0:_.colorIcon})]}),disabled:t,onClick:()=>{(null==P?void 0:P.crossFilter)&&w((0,j.Mv)(e,P.crossFilter.dataMask))}},...ef>1?[{key:"divider-1",type:"divider"}]:[])}if(eo&&en.push(...eb),ea){en.length>0&&en.push({key:"divider-drill-by",type:"divider"});let e=null==W||null==(S=W.drillBy)?void 0:S.groupbyFieldName,i=null==(C=(0,R.A)().get(t.viz_type))?void 0:C.behaviors.find(e=>e===O.nS.DrillBy);en.push({key:"drill-by-submenu",disabled:!i||!e,label:(0,c.Y)(eT,eA({drillByConfig:null==W?void 0:W.drillBy,onSelection:l,onCloseMenu:et,formData:t,onDrillBy:el,dataset:ec,isLoadingDataset:ed},(null==n?void 0:n.drillBy)||{}))})}let ey=(0,u.useCallback)((t,l,i)=>{var r;B({clientX:t,clientY:(0,eg.x4)(l,ef),filters:i}),null==(r=document.getElementById(`hidden-span-${e}`))||r.click()},[e,ef]);return(0,u.useImperativeHandle)(a,()=>({open:ey}),[ey]),M.createPortal((0,c.FD)(c.FK,{children:[(0,c.Y)(U.ms,{menu:{items:en.length>0?en:[{key:"no-actions",label:(0,h.t)("No actions"),disabled:!0}],onClick:()=>{I(!1),i()}},dropdownRender:e=>(0,c.Y)("div",{"data-test":"chart-context-menu",children:e}),trigger:["click"],onOpenChange:e=>{I(e),e||i()},open:z,children:(0,c.Y)("span",{id:`hidden-span-${e}`,css:{visibility:"hidden",position:"fixed",top:V,left:q,width:1,height:1}})}),eo&&(0,c.Y)(eY.A,{initialFilters:D,chartId:e,formData:G,showModal:K,onHideModal:()=>{Q(!1)},dataset:ec}),Z&&X&&ec&&(null==W?void 0:W.drillBy)&&(0,c.Y)(eh,{column:X,drillByConfig:null==W?void 0:W.drillBy,formData:t,onHideModal:er,dataset:ec,canDownload:A})]}),document.body)});function eD(){return(eD=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i])}return e}).apply(this,arguments)}let eE={},eO=[O.nS.InteractiveChart];class ez extends u.Component{shouldComponentUpdate(e,t){var l,i;if(e.queriesResponse&&["success","rendered"].indexOf(e.chartStatus)>-1&&!(null==(i=e.queriesResponse)||null==(l=i[0])?void 0:l.error)){if(!k()(this.state,t))return!0;this.hasQueryResponseChange=e.queriesResponse!==this.props.queriesResponse,this.hasQueryResponseChange&&(this.mutableQueriesResponse=E()(e.queriesResponse));let l=()=>{let t=e.formData,l=this.props.formData;return!0===t.matrixify_enable&&(void 0!==t.matrixify_mode_rows&&"disabled"!==t.matrixify_mode_rows||void 0!==t.matrixify_mode_columns&&"disabled"!==t.matrixify_mode_columns)&&Object.keys(t).filter(e=>e.startsWith("matrixify_")).some(e=>!k()(t[e],l[e]))},i=e.formData,r=this.props.formData;return this.hasQueryResponseChange||!k()(e.datasource,this.props.datasource)||e.annotationData!==this.props.annotationData||e.ownState!==this.props.ownState||e.filterState!==this.props.filterState||e.height!==this.props.height||e.width!==this.props.width||!0===e.triggerRender||e.labelsColor!==this.props.labelsColor||e.labelsColorMap!==this.props.labelsColorMap||i.color_scheme!==r.color_scheme||i.stack!==r.stack||i.subcategories!==r.subcategories||e.cacheBusterProp!==this.props.cacheBusterProp||e.emitCrossFilters!==this.props.emitCrossFilters||e.postTransformProps!==this.props.postTransformProps||l()}return!1}handleAddFilter(e,t,l=!0,i=!0){null==this.props.addFilter||this.props.addFilter.call(this.props,e,t,l,i)}handleRenderSuccess(){let{actions:e,chartStatus:t,chartId:l,vizType:i}=this.props;0>["loading","rendered"].indexOf(t)&&e.chartRenderingSucceeded(l),this.hasQueryResponseChange&&e.logEvent(S.tE,{slice_id:l,viz_type:i,start_offset:this.renderStartTime,ts:new Date().getTime(),duration:S.Vy.getTimestamp()-this.renderStartTime})}handleRenderFailure(e,t){let{actions:l,chartId:i}=this.props;p.A.warn(e),l.chartRenderingFailed(e.toString(),i,t?t.componentStack:null),this.hasQueryResponseChange&&l.logEvent(S.tE,{slice_id:i,has_err:!0,error_details:e.toString(),start_offset:this.renderStartTime,ts:new Date().getTime(),duration:S.Vy.getTimestamp()-this.renderStartTime})}handleSetControlValue(e,t){let{setControlValue:l}=this.props;l&&l(e,t)}handleOnContextMenu(e,t,l){var i;null==(i=this.contextMenuRef.current)||i.open(e,t,l),this.setState({inContextMenu:!0})}handleContextMenuSelected(){this.setState({inContextMenu:!1})}handleContextMenuClosed(){this.setState({inContextMenu:!1})}handleLegendStateChanged(e){this.setState({legendState:e})}onContextMenuFallback(e){this.state.inContextMenu||(e.preventDefault(),this.handleOnContextMenu(e.clientX,e.clientY))}handleLegendScroll(e){this.setState({legendIndex:e})}render(){var e,t,l,i,r,n;let o,{chartAlert:a,chartStatus:s,chartId:d,emitCrossFilters:u}=this.props,p=null==(l=this.props.queriesResponse)?void 0:l.some(e=>null==e?void 0:e.error),m=(null!=(e=null==(i=this.props.queriesResponse)?void 0:i.length)?e:0)>0&&!p;if(a||null===s||"loading"===s&&(!this.props.suppressLoadingSpinner||!m))return null;this.renderStartTime=S.Vy.getTimestamp();let{width:v,height:g,datasource:f,annotationData:b,initialValues:x,ownState:C,filterState:w,chartIsStale:_,formData:T,latestQueryFormData:Y,postTransformProps:$}=this.props,k=_&&Y?Y:T,D=k.viz_type||this.props.vizType,E=A()(D),M=D===z.Y.Table?`superset-chart-${E}`:E,N=(0,h.t)("No results were returned for this query"),L=this.props.source===F.Explore?(0,h.t)("Make sure that the controls are configured properly and the datasource contains data for the selected time range"):void 0,U="chart.svg";o=(null!=v?v:0)>300&&(null!=g?g:0)>220?(0,c.Y)(y.p,{size:"large",title:N,description:L,image:U}):(0,c.Y)(y.p,{title:N,image:U,size:"small"});let j=(null==(r=(0,R.A)().get(D))?void 0:r.behaviors.find(e=>e===O.nS.DrillToDetail))?{inContextMenu:this.state.inContextMenu}:{},H=((null==C||null==(n=C.searchText)?void 0:n.length)||0)>0,P=(null==C?void 0:C.agGridFilterModel)&&Object.keys(C.agGridFilterModel).length>0,q=!((null==k?void 0:k.server_pagination)&&(H||P));return(0,c.FD)(c.FK,{children:[this.state.showContextMenu&&(0,c.Y)(ek,{ref:this.contextMenuRef,id:d,formData:k,onSelection:this.handleContextMenuSelected,onClose:this.handleContextMenuClosed}),(0,c.Y)("div",{onContextMenu:this.state.showContextMenu?this.onContextMenuFallback:void 0,children:(0,c.Y)(I.A,eD({disableErrorBoundary:!0,id:`chart-id-${d}`,className:M,chartType:D,width:v,height:g,annotationData:b,datasource:f,initialValues:x,formData:k,ownState:C,filterState:w,hooks:this.hooks,behaviors:eO,queriesData:null!=(t=this.mutableQueriesResponse)?t:void 0,onRenderSuccess:this.handleRenderSuccess,onRenderFailure:this.handleRenderFailure,noResults:o,postTransformProps:$,emitCrossFilters:u,legendState:this.state.legendState,enableNoResults:q,legendIndex:this.state.legendIndex,isRefreshing:!!this.props.suppressLoadingSpinner&&"loading"===s},j),`${d}`)})]})}constructor(e){var t,l;super(e);const i=null==(l=(0,R.A)().get(null!=(t=e.formData.viz_type)?t:e.vizType))?void 0:l.suppressContextMenu;this.state={showContextMenu:e.source===F.Dashboard&&!i&&(0,m.G7)(m.TO.DrillToDetail),inContextMenu:!1,legendState:void 0,legendIndex:0},this.hasQueryResponseChange=!1,this.renderStartTime=0,this.contextMenuRef=(0,u.createRef)(),this.handleAddFilter=this.handleAddFilter.bind(this),this.handleRenderSuccess=this.handleRenderSuccess.bind(this),this.handleRenderFailure=this.handleRenderFailure.bind(this),this.handleSetControlValue=this.handleSetControlValue.bind(this),this.handleOnContextMenu=this.handleOnContextMenu.bind(this),this.handleContextMenuSelected=this.handleContextMenuSelected.bind(this),this.handleContextMenuClosed=this.handleContextMenuClosed.bind(this),this.handleLegendStateChanged=this.handleLegendStateChanged.bind(this),this.onContextMenuFallback=this.onContextMenuFallback.bind(this),this.handleLegendScroll=this.handleLegendScroll.bind(this),this.hooks={onAddFilter:this.handleAddFilter,onContextMenu:this.state.showContextMenu?this.handleOnContextMenu:void 0,onError:this.handleRenderFailure,setControlValue:this.handleSetControlValue,onFilterMenuOpen:this.props.onFilterMenuOpen,onFilterMenuClose:this.props.onFilterMenuClose,onLegendStateChanged:this.handleLegendStateChanged,setDataMask:e=>{var t,l;null==(l=this.props.actions)||null==(t=l.updateDataMask)||t.call(l,this.props.chartId,e)},onLegendScroll:this.handleLegendScroll,onChartStateChange:this.props.onChartStateChange},this.mutableQueriesResponse=E()(this.props.queriesResponse)}}ez.defaultProps={addFilter:()=>eE,onFilterMenuOpen:()=>eE,onFilterMenuClose:()=>eE,initialValues:eE,setControlValue:()=>{},triggerRender:!1};var eR=l(47960);function eI(){return(eI=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i])}return e}).apply(this,arguments)}let eM=e=>{let{chartId:t,error:l}=e,i=function(e,t){if(null==e)return{};var l,i,r={},n=Object.getOwnPropertyNames(e);for(i=0;i<n.length;i++)!(t.indexOf(l=n[i])>=0)&&Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l]);return r}(e,["chartId","error"]),{result:r}=(0,eR.RG)(t),n=l&&eI({},l,{extra:eI({},l.extra,{owners:r})});return(0,c.Y)(x.x6,eI({},i,{error:n,title:"Data error",closable:!1}))};var eN=l(2589);function eL(){return(eL=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i])}return e}).apply(this,arguments)}let eU={},ej=(0,h.t)("The dataset associated with this chart no longer exists"),eH=g.styled.div`
  min-height: ${e=>e.height}px;
  position: relative;

  .chart-tooltip {
    opacity: 0.75;
    font-size: ${({theme:e})=>e.fontSizeSM}px;
  }

  .slice_container {
    display: flex;
    flex-direction: column;
    justify-content: center;

    height: ${e=>e.height}px;

    .pivot_table tbody tr {
      font-feature-settings: 'tnum' 1;
    }

    .alert {
      margin: ${({theme:e})=>2*e.sizeUnit}px;
    }
  }
`,eP=g.styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 80%;
  transform: translate(-50%, -50%);
`,eq=g.styled.div`
  height: ${e=>e.height}px;
  overflow: auto;
`,eV=g.styled.span`
  display: block;
  text-align: center;
  margin: ${({theme:e})=>4*e.sizeUnit}px auto;
  width: fit-content;
  color: ${({theme:e})=>e.colorText};
`;class eB extends u.PureComponent{componentDidMount(){this.props.triggerQuery&&this.runQuery()}componentDidUpdate(){this.props.triggerQuery&&this.runQuery()}shouldRenderChart(){return this.props.isInView||!(0,m.G7)(m.TO.DashboardVirtualization)||(0,_.a)()}runQuery(){(!(0,m.G7)(m.TO.DashboardVirtualizationDeferData)||this.shouldRenderChart())&&this.props.actions.postChartFormData(this.props.formData,!!(this.props.force||(0,w.P3)(C.vX.force)),this.props.timeout,this.props.chartId,this.props.dashboardId,this.props.ownState)}handleRenderContainerFailure(e,t){let{actions:l,chartId:i}=this.props;p.A.warn(e),l.chartRenderingFailed(e.toString(),i,t?t.componentStack:null),l.logEvent(S.tE,{slice_id:i,has_err:!0,error_details:e.toString(),start_offset:this.renderStartTime,ts:new Date().getTime(),duration:S.Vy.getTimestamp()-this.renderStartTime})}renderErrorMessage(e){var t;let{chartId:l,chartAlert:i,chartStackTrace:r,datasource:n,dashboardId:o,height:a,datasetsStatus:s}=this.props,d=null==e||null==(t=e.errors)?void 0:t[0],u=i||(null==e?void 0:e.message);return d||void 0===i||i===ej||n!==f.As||s===T.bk.Error?(0,c.Y)(eM,{chartId:l,error:d,subtitle:u,link:e?e.link:void 0,source:o?F.Dashboard:F.Explore,stackTrace:r},l):(0,c.Y)(eH,{"data-ui-anchor":"chart",className:"chart-container","data-test":"chart-container",height:a,children:(0,c.Y)(b.R,{size:this.props.dashboardId?"s":"m",muted:!!this.props.dashboardId})},l)}renderSpinner(e){let t=e?(0,h.t)("Waiting on %s",e):(0,h.t)("Waiting on database...");return(0,c.FD)(eP,{children:[(0,c.Y)(b.R,{position:"inline-centered",size:this.props.dashboardId?"s":"m",muted:!!this.props.dashboardId}),(0,c.Y)(eV,{children:t})]})}renderChartContainer(){return(0,c.Y)("div",{className:"slice_container","data-test":"slice-container",children:this.shouldRenderChart()?(0,c.Y)(ez,eL({},this.props,{source:this.props.dashboardId?F.Dashboard:F.Explore,"data-test":this.props.vizType})):(0,c.Y)(b.R,{size:this.props.dashboardId?"s":"m",muted:!!this.props.dashboardId})})}render(){var e;let{height:t,chartAlert:l,chartStatus:i,datasource:r,errorMessage:n,chartIsStale:o,queriesResponse:a=[],width:s}=this.props,d=null==r||null==(e=r.database)?void 0:e.name,u="loading"===i,p=u&&!this.props.suppressLoadingSpinner;return"failed"===i?(0,c.Y)(eq,{height:t,children:null==a?void 0:a.map(e=>this.renderErrorMessage(e))}):n&&0===(0,v.A)(a).length?(0,c.Y)(y.p,{size:"large",title:(0,h.t)("Add required control values to preview chart"),description:(0,eN.w)(!0),image:"chart.svg"}):u||l||n||!o||0!==(0,v.A)(a).length?(0,c.Y)(x.tH,{onError:this.handleRenderContainerFailure,showMessage:!1,children:(0,c.Y)(eH,{"data-ui-anchor":"chart",className:"chart-container","data-test":"chart-container",height:t,width:s,children:p?this.renderSpinner(d):this.renderChartContainer()})}):(0,c.Y)(y.p,{size:"large",title:(0,h.t)("Your chart is ready to go!"),description:(0,c.FD)("span",{children:[(0,h.t)('Click on "Create chart" button in the control panel on the left to preview a visualization or')," ",(0,c.Y)("span",{role:"button",tabIndex:0,onClick:this.props.onQuery,children:(0,h.t)("click here")}),"."]}),image:"chart.svg"})}constructor(e){super(e),this.handleRenderContainerFailure=this.handleRenderContainerFailure.bind(this)}}function eW(){return(eW=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i])}return e}).apply(this,arguments)}eB.defaultProps={addFilter:()=>eU,onFilterMenuOpen:()=>eU,onFilterMenuClose:()=>eU,initialValues:eU,setControlValue:()=>eU,triggerRender:!1,dashboardId:void 0,chartStackTrace:void 0,force:!1,isInView:!0};let eG=(0,o.Ng)(null,function(e){return{actions:(0,a.zH)(eW({},s,{updateDataMask:j.Mv,logEvent:d.logEvent}),e)}})(eB)},84821(e,t,l){l.d(t,{C:()=>a});var i=l(2445),r=l(17437),n=l(15341),o=l(25358);let a=({title:e,color:t})=>(0,i.Y)(o.m,{title:e,placement:"top",children:(0,i.Y)(n.F.InfoCircleOutlined,{"data-test":"tooltip-trigger",css:e=>(0,r.AH)`
        color: ${t||e.colorTextLabel};
        margin-left: ${2*e.sizeUnit}px;
        &.anticon {
          font-size: unset;
          .anticon {
            line-height: unset;
            vertical-align: unset;
          }
        }
      `})})},72334(e,t,l){l.d(t,{A:()=>c});var i=l(2445),r=l(22567),n=l(97371),o=l(17437),a=l(25488),s=l(25358),d=l(15341);let c=({onDownloadCSV:e,onDownloadXLSX:t})=>{let l=(0,n.useTheme)();return(0,i.Y)(a.ms,{trigger:["click"],menu:{onClick:({key:l})=>{"csv"===l?e():"xlsx"===l&&t()},items:[{key:"csv",label:(0,r.t)("Export to CSV"),icon:(0,i.Y)(d.F.FileOutlined,{})},{key:"xlsx",label:(0,r.t)("Export to Excel"),icon:(0,i.Y)(d.F.FileOutlined,{})}]},children:(0,i.Y)(s.m,{title:(0,r.t)("Download"),children:(0,i.Y)("span",{tabIndex:0,role:"button","aria-label":(0,r.t)("Download"),"data-test":"drill-detail-download-btn",children:(0,i.Y)(d.F.DownloadOutlined,{iconColor:l.colorIcon,iconSize:"l",css:(0,o.AH)`
              &.anticon > * {
                line-height: 0;
              }
            `})})})})}},61491(e,t,l){l.d(t,{A:()=>ee});var i,r=l(2445),n=l(24002),o=l(61574),a=l(22567),s=l(97371),d=l(17437),c=l(1125),u=l(16351),p=l(61225),h=l(14496),m=l(8290),v=l(68362),g=l(48014),f=l(87928),b=l(69112),y=l(98250),x=l(69491);let S=function({value:e}){return(0,r.Y)("span",{children:e?x.Y.BOOL_TRUE_DISPLAY:x.Y.BOOL_FALSE_DISPLAY})},C=s.styled.span`
  color: ${({theme:e})=>e.colorTextSecondary};
`,w=function(){return(0,r.Y)(C,{children:x.Y.NULL_DISPLAY})};var _=l(81090),F=l(21412);let T=function({format:e=_.A.DATABASE_DATETIME,value:t}){return t?(0,r.Y)("span",{children:(0,F.mo)(e).format(t)}):(0,r.Y)(w,{})};var Y=l(86864),A=l(46882),$=l(37370),k=l(3376),D=l(18612),E=l(14621),O=l(52996),z=l(60594),R=l(90388),I=l(33962),M=l(15341);let N=function(e){let{headerTitle:t,groupTitle:l,groupOptions:i,value:o,onChange:a}=e,c=(0,s.useTheme)(),[u,p]=(0,n.useState)(!1);return(0,r.FD)("div",{css:(0,d.AH)`
        display: flex;
        align-items: center;
      `,children:[(0,r.Y)(R.A,{trigger:"click",open:u,content:(0,r.FD)("div",{children:[(0,r.Y)("div",{css:(0,d.AH)`
                font-weight: ${c.fontWeightStrong};
                margin-bottom: ${c.sizeUnit}px;
              `,children:l}),(0,r.Y)(I.s.GroupWrapper,{spaceConfig:{direction:"vertical",size:4,wrap:!1,align:"start"},value:o,onChange:e=>{a(e.target.value),p(!1)},options:i})]}),placement:"bottomLeft",arrow:{pointAtCenter:!0},children:(0,r.Y)(M.F.SettingOutlined,{iconSize:"m",iconColor:c.colorIcon,css:(0,d.AH)`
            margin-top: ${.75*c.sizeUnit}px;
            margin-right: ${c.sizeUnit}px;
          `,onClick:()=>p(!0)})}),t]})};var L=l(40952),U=l(88),j=l(30332),H=l(65069),P=l(25358),q=l(848),V=l(72334);function B(){return(B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i])}return e}).apply(this,arguments)}function W({filters:e,setFilters:t,totalCount:l,loading:i,onReload:o,canDownload:c,onDownloadCSV:u,onDownloadXLSX:p,data:h,columnNames:m}){let v=(0,s.useTheme)(),{canCopyClipboard:g}=(0,D.S)(),f=(0,n.useMemo)(()=>Object.assign({},...e.map(e=>({[(0,j.q0)(e.col)?e.col.label:e.col]:e}))),[e]),b=(0,n.useCallback)(e=>{let l=B({},f);delete l[e],t(Object.values(l))},[f,t]),y=(0,n.useMemo)(()=>Object.entries(f).map(([e,{val:t,formattedVal:l}])=>({colName:e,val:null!=l?l:t})).sort((e,t)=>e.colName.localeCompare(t.colName)),[f]);return(0,r.FD)("div",{css:(0,d.AH)`
        display: flex;
        justify-content: space-between;
        padding: ${v.sizeUnit/2}px 0;
        margin-bottom: ${2*v.sizeUnit}px;
      `,children:[(0,r.Y)("div",{css:(0,d.AH)`
          display: flex;
          flex-wrap: wrap;
        `,children:y.map(({colName:e,val:t},l)=>(0,r.FD)(U.v,{editable:!0,onDelete:b.bind(null,e),index:l,id:l,name:`${e}=${t}`,"data-test":"filter-col",children:[(0,r.Y)("span",{css:(0,d.AH)`
                margin-right: ${v.sizeUnit}px;
              `,children:e}),(0,r.Y)("strong",{"data-test":"filter-val",children:t})]},e))}),(0,r.FD)("div",{css:(0,d.AH)`
          display: flex;
          align-items: center;
          height: min-content;
          gap: ${3*v.sizeUnit}px;
        `,children:[(0,r.Y)(H.A,{loading:i&&!l,rowcount:l}),c&&(0,r.Y)(V.A,{onDownloadCSV:u,onDownloadXLSX:p}),g?(0,r.Y)(q.TN,{data:h,columns:m}):(0,r.Y)(P.m,{title:(0,a.t)("You don't have permission to copy to clipboard"),children:(0,r.Y)("span",{children:(0,r.Y)(q.TN,{data:h,columns:m,disabled:!0})})}),(0,r.Y)(P.m,{title:(0,a.t)("Reload"),children:(0,r.Y)(M.F.ReloadOutlined,{iconColor:v.colorIcon,iconSize:"l","aria-label":(0,a.t)("Reload"),role:"button",onClick:o})})]})]})}var G=l(20846);function K(){return(K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i])}return e}).apply(this,arguments)}function Q({children:e}){let{ref:t,height:l}=(0,y.uZ)();return(0,r.Y)("div",{ref:t,css:{flex:1},children:(0,n.cloneElement)(e,{height:l})})}var X=((i=X||{})[i.Original=0]="Original",i[i.Formatted=1]="Formatted",i);function J({formData:e,initialFilters:t,dataset:l}){var i;let o=(0,s.useTheme)(),[c,u]=(0,n.useState)(0),h=(0,n.useRef)(c),[m,v]=(0,n.useState)(t),[y,x]=(0,n.useState)(!1),[C,_]=(0,n.useState)(""),[F,R]=(0,n.useState)(new Map),[I,M]=(0,n.useState)({}),U=(0,p.d4)(({dashboardInfo:e})=>e.id),j=(0,p.d4)(e=>e.common.conf.SAMPLES_ROW_LIMIT),H=(0,p.d4)(e=>e.common.conf.ROW_LIMIT),{canDownload:P}=(0,D.S)(),{addDangerToast:q}=(0,E.Yf)(),[V,B]=(0,n.useMemo)(()=>e.datasource.split("__"),[e.datasource]),{metadataBar:X}=(0,L.M)({dataset:l}),Z=(0,n.useMemo)(()=>{let e=F.get(c);return e?(h.current=c,e):F.get(h.current)},[c,F]),ee=(0,n.useMemo)(()=>(null==Z?void 0:Z.colNames.map((e,t)=>{var i,n;return{key:e,dataIndex:e,title:(null==Z?void 0:Z.colTypes[t])===b.GenericDataType.Temporal?(0,r.Y)(N,{headerTitle:(null==l||null==(i=l.verbose_map)?void 0:i[e])||e,groupTitle:(0,a.t)("Formatting"),groupOptions:[{label:(0,a.t)("Original value"),value:0},{label:(0,a.t)("Formatted value"),value:1}],value:+(0!==I[e]),onChange:t=>M(l=>K({},l,{[e]:parseInt(t,10)}))}):(null==l||null==(n=l.verbose_map)?void 0:n[e])||e,render:l=>!0===l||!1===l?(0,r.Y)(S,{value:l}):null===l?(0,r.Y)(w,{}):(null==Z?void 0:Z.colTypes[t])===b.GenericDataType.Temporal&&0!==I[e]&&("number"==typeof l||l instanceof Date)?(0,r.Y)(T,{value:l}):String(l),width:150}}))||[],[null==Z?void 0:Z.colNames,null==Z?void 0:Z.colTypes,I,null==l?void 0:l.verbose_map]),et=(0,n.useMemo)(()=>(null==Z?void 0:Z.data.map((e,t)=>null==Z?void 0:Z.colNames.reduce((t,l)=>K({},t,{[l]:e[l]}),{key:t})))||[],[null==Z?void 0:Z.colNames,null==Z?void 0:Z.data]),el=(0,n.useCallback)(()=>{_(""),R(new Map),u(0)},[]),ei=(0,n.useCallback)(t=>{let l=(0,G.o)(e,m);if(!l)return void q((0,a.t)("Unable to generate download payload"));let i={datasource:{id:parseInt(V,10),type:B},queries:[K({},l,{columns:[],metrics:[],orderby:[],row_limit:H,row_offset:0})],result_type:"drill_detail",result_format:t,force:!1};U&&(i.form_data={dashboardId:U}),g.A.postForm((0,O.A)("/api/v1/chart/data"),{form_data:(0,z.J)(i)}).catch(e=>{q((0,a.t)("Failed to generate download: %s",e.message||e))})},[e,m,V,B,H,U,q]),er=(0,n.useCallback)(()=>ei("csv"),[ei]),en=(0,n.useCallback)(()=>ei("xlsx"),[ei]);(0,n.useEffect)(()=>{_(""),R(new Map),u(0)},[m]),(0,n.useEffect)(()=>{if(F.has(c)&&[...F.keys()].at(-1)!==c){let e=new Map(F);e.delete(c),R(e.set(c,F.get(c)))}},[c,F]),(0,n.useEffect)(()=>{if(!C&&!y&&!F.has(c)){var t;x(!0);let l=null!=(t=(0,G.o)(e,m))?t:{},i=Math.ceil(j/50);(0,$.getDatasourceSamples)(B,Number(V),!1,l,50,c+1,U).then(e=>{R(new Map([...[...F.entries()].slice(-i+1),[c,{total:e.total_count,data:e.data,colNames:(0,f.A)(e.colnames),colTypes:(0,f.A)(e.coltypes)}]])),_("")}).catch(e=>{_(`${e.name}: ${e.message}`)}).finally(()=>{x(!1)})}},[j,V,B,m,e,y,c,C,F]);let eo=!C&&!F.size,ea=null==(i=e.allow_render_html)||i,es=null;if(C)es=(0,r.Y)("pre",{css:(0,d.AH)`
          margin-top: ${4*o.sizeUnit}px;
        `,children:C});else if(eo)es=(0,r.Y)(Y.R,{});else if((null==Z?void 0:Z.total)===0){let e=(0,a.t)("No rows were returned for this dataset");es=(0,r.Y)(A.p,{image:"document.svg",title:e})}else es=(0,r.Y)(Q,{children:(0,r.Y)(k.Ay,{data:et,columns:ee,size:k.QS.Small,defaultPageSize:50,recordCount:null==Z?void 0:Z.total,usePagination:!0,loading:y,onChange:e=>u(e.current?e.current-1:0),resizable:!0,virtualize:!0,allowHTML:ea})});return(0,r.FD)(r.FK,{children:[!eo&&X,!eo&&(0,r.Y)(W,{filters:m,setFilters:v,totalCount:null==Z?void 0:Z.total,loading:y,onReload:el,canDownload:P,onDownloadCSV:er,onDownloadXLSX:en,data:et,columnNames:null==Z?void 0:Z.colNames}),es]})}let Z=({canExplore:e,closeModal:t,exploreChart:l})=>{let i=(0,s.useTheme)();return(0,r.FD)(r.FK,{children:[!(0,m.n)()&&(0,r.Y)(c.$n,{buttonStyle:"secondary",buttonSize:"small",onClick:l,disabled:!e,tooltip:e?void 0:(0,a.t)("You do not have sufficient permissions to edit the chart"),children:(0,a.t)("Edit chart")}),(0,r.Y)(c.$n,{buttonStyle:"primary",buttonSize:"small",onClick:t,"data-test":"close-drilltodetail-modal",css:(0,d.AH)`
          margin-left: ${2*i.sizeUnit}px;
        `,children:(0,a.t)("Close")})]})};function ee({chartId:e,formData:t,initialFilters:l,showModal:i,onHideModal:c,dataset:m}){let g=(0,s.useTheme)(),f=(0,o.W6)(),b=(0,n.useContext)(h.DashboardPageIdContext),{slice_name:y}=(0,p.d4)(t=>{var l,i;return(null==(i=t.sliceEntities)||null==(l=i.slices)?void 0:l[e])||{}}),x=(0,p.d4)(e=>{var t;return(0,v.L)("can_explore","Superset",null==(t=e.user)?void 0:t.roles)}),S=(0,n.useMemo)(()=>`/explore/?dashboard_page_id=${b}&slice_id=${e}`,[e,b]),C=(0,n.useCallback)(()=>{f.push(S)},[S,f]);return(0,r.Y)(u.aF,{show:i,onHide:null!=c?c:()=>null,css:(0,d.AH)`
        .ant-modal-body {
          display: flex;
          flex-direction: column;
        }
      `,name:(0,a.t)("Drill to detail: %s",y),title:(0,a.t)("Drill to detail: %s",y),footer:(0,r.Y)(Z,{exploreChart:C,canExplore:x}),responsive:!0,resizable:!0,resizableConfig:{minHeight:128*g.sizeUnit,minWidth:128*g.sizeUnit,defaultSize:{width:"auto",height:"75vh"}},draggable:!0,destroyOnHidden:!0,maskClosable:!1,children:(0,r.Y)(J,{formData:t,initialFilters:l,dataset:m})})}},20846(e,t,l){l.d(t,{o:()=>a});var i=l(90179),r=l.n(i),n=l(87928),o=l(81357);function a(e,t){if(!e)return;let l=(0,o.A)(e),i=r()(l.extras,"having"),a=[...(0,n.A)(l.filters),...(0,n.A)(t).map(e=>r()(e,"formattedVal"))];return{granularity:l.granularity,time_range:l.time_range,filters:a,extras:i}}},67663(e,t,l){l.d(t,{Gn:()=>c,i2:()=>d});var i=l(2445);l(24002);var r=l(68691),n=l(97371),o=l(17437),a=l(6540),s=l(25358);let d=({tooltipText:e,children:t})=>{let[l,n]=(0,r.A)();return(0,i.Y)(s.m,{title:n?e:null,children:(0,i.Y)("div",{ref:l,css:(0,o.AH)`
          max-width: 100%;
          ${r.P};
        `,children:t})})},c=({tooltipText:e,children:t,onClick:l,style:d})=>{let c=(0,n.useTheme)(),[u,p]=(0,r.A)();return(0,i.Y)(a.s,{role:"menuitem",tabIndex:0,onClick:l,align:"center",style:d,css:(0,o.AH)`
        cursor: pointer;
        padding-left: ${c.paddingXS}px;
        &:hover {
          background-color: ${c.colorBgTextHover};
        }
        &:active {
          background-color: ${c.colorBgTextActive};
        }
      `,children:(0,i.Y)(s.m,{title:p?e:null,children:(0,i.Y)("div",{ref:u,css:(0,o.AH)`
            max-width: 100%;
            ${r.P};
          `,children:t})})})}},18347(e,t,l){l.d(t,{R:()=>w});var i=l(2445),r=l(24002),n=l(62193),o=l.n(n),a=l(22567),s=l(43361),d=l(44814),c=l(86079),u=l(13090),p=l(97371),h=l(17437),m=l(61225),v=l(30177),g=l(84821),f=l(67663);function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i])}return e}).apply(this,arguments)}let y=(0,a.t)("Drill to detail"),x=(0,a.t)("Drill to detail by"),S={DATABASE:(0,a.t)("Drill to detail is disabled for this database. Change the database settings to enable it."),NO_AGGREGATIONS:(0,a.t)("Drill to detail is disabled because this chart does not group data by dimension value."),NO_FILTERS:(0,a.t)("Right-click on a dimension value to drill to detail by that value."),NOT_SUPPORTED:(0,a.t)("Drill to detail by value is not yet supported for this chart type.")},C=(0,p.styled)(({children:e,stripHTML:t=!1})=>{let l=t&&"string"==typeof e?(0,u.zF)(e):e;return(0,i.Y)("span",{children:l})})`
  ${({theme:e})=>`
     font-weight: ${e.fontWeightStrong};
     color: ${e.colorPrimary};
   `}
`,w=e=>{let t,l,{formData:n,filters:u=[],isContextMenu:p=!1,contextMenuY:w=0,onSelection:_=()=>null,onClick:F=()=>null,submenuIndex:T=0,setFilters:Y,setShowModal:A,key:$}=e,k=function(e,t){if(null==e)return{};var l,i,r={},n=Object.getOwnPropertyNames(e);for(i=0;i<n.length;i++)!(t.indexOf(l=n[i])>=0)&&Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l]);return r}(e,["formData","filters","isContextMenu","contextMenuY","onSelection","onClick","submenuIndex","setFilters","setShowModal","key"]),D=(0,m.d4)(({datasources:e})=>{var t,l;return null==(l=e[n.datasource])||null==(t=l.database)?void 0:t.disable_drill_to_detail}),E=(0,r.useCallback)((e,t)=>{F(t),_(),Y(e),A(!0)},[F,_,Y,A]),O=(0,r.useMemo)(()=>{var e;return null==(e=(0,s.A)().get(n.viz_type))?void 0:e.behaviors.find(e=>e===c.nS.DrillToDetail)},[n.viz_type]),z=(0,r.useMemo)(()=>{let{metrics:e}=(0,d.A)(n);return o()(e)},[n]),R=(0,r.useMemo)(()=>(0,v.Gs)(w,u.length>1?u.length+1:u.length,T),[w,u.length,T]);D?(t=S.DATABASE,l=S.DATABASE):O?z?(t=S.NO_AGGREGATIONS,l=S.NO_AGGREGATIONS):(null==u?void 0:u.length)||(l=S.NO_FILTERS):l=S.NOT_SUPPORTED;let I=t?b({key:"drill-to-detail-disabled",disabled:!0,label:(0,i.FD)("div",{css:(0,h.AH)`
              white-space: normal;
              max-width: 160px;
            `,children:[y,(0,i.Y)(g.C,{title:t})]})},k):{key:"drill-to-detail",onClick:E.bind(null,[]),label:y},M=p?l?b({key:"drill-to-detail-by-disabled",disabled:!0,label:(0,i.FD)("div",{css:(0,h.AH)`
                white-space: normal;
                max-width: 160px;
              `,children:[x,(0,i.Y)(g.C,{title:l})]})},k):b({key:$||"drill-to-detail-by",label:x,popupOffset:[0,R],popupClassName:"chart-context-submenu",children:[...u.map((e,t)=>({key:`drill-detail-filter-${t}`,onClick:E.bind(null,[e]),label:(0,i.Y)("div",{css:(0,h.AH)`
                    max-width: 200px;
                  `,children:(0,i.Y)(f.i2,{tooltipText:`${x} ${e.formattedVal}`,"aria-label":`${x} ${e.formattedVal}`,children:(0,i.FD)("span",{css:(0,h.AH)`
                        display: inline;
                      `,children:[x," ",(0,i.Y)(C,{stripHTML:!0,children:e.formattedVal})]})})})})),...u.length>1?[{key:"drill-detail-filter-all",onClick:E.bind(null,u),label:(0,i.FD)("div",{"aria-label":`${x} ${(0,a.t)("all")}`,css:(0,h.AH)`
                          max-width: 200px;
                        `,children:[`${x} `,(0,i.Y)(C,{stripHTML:!1,children:(0,a.t)("all")})]})}]:[]]},k):null,N=[I];return M&&N.push(M),N}},30177(e,t,l){l.d(t,{Gs:()=>r,x4:()=>i});let i=(e,t,l=Number.MAX_SAFE_INTEGER,i=0)=>{let r=Math.max(document.documentElement.clientHeight||0,window.innerHeight||0),n=Math.min(32*t,l)+32+i;return r-e<n?r-n:e},r=(e,t,l=0,r=Number.MAX_SAFE_INTEGER,n=0)=>{let o=e+4+32*l+4;return i(o,t,r,n)-o}},39687(e,t,l){l.d(t,{A:()=>s});var i=l(2445),r=l(22567),n=l(97371),o=l(17437),a=l(65102);let s=({queriedDttm:e})=>{let t=(0,n.useTheme)();if(!e)return null;let l=a.XV.utc(e);if(!l.isValid())return null;let s=l.local().format("L LTS");return(0,i.FD)("div",{css:(0,o.AH)`
        font-size: ${t.fontSizeSM}px;
        color: ${t.colorTextLabel};
        padding: ${t.sizeUnit/2}px ${t.sizeUnit}px;
        text-align: right;
      `,"data-test":"last-queried-label",children:[(0,r.t)("Last queried at"),": ",s]})}},65069(e,t,l){l.d(t,{A:()=>d});var i=l(2445),r=l(22567),n=l(42398),o=l(25358),a=l(17689);let s=(0,r.t)("The row limit set for the chart was reached. The chart may show partial data.");function d(e){let{rowcount:t=0,limit:l=null,loading:d,label:c}=e,u=l&&t>=l,p=u||0===t&&!d?"error":"default",h=(0,n.gV)()(t),m=(0,i.Y)(a.JU,{type:p,monospace:!0,children:d?(0,r.t)("Loading..."):(0,i.Y)("span",{"data-test":"row-count-label",children:(0,r.tn)("%s row","%s rows",t,h)})});return u?(0,i.Y)(o.m,{id:"tt-rowcount-tooltip",title:(0,i.Y)("span",{children:s}),children:c||m}):c||m}},76450(e,t,l){l.d(t,{A:()=>g});var i=l(2445),r=l(24002),n=l(22567),o=l(48014),a=l(97371),s=l(15341),d=l(1125),c=l(6540),u=l(25358),p=l(63428);function h(e,t,l,i,r,n,o){try{var a=e[n](o),s=a.value}catch(e){l(e);return}a.done?t(s):Promise.resolve(s).then(i,r)}let m=a.styled.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.sizeUnit}px;
  color: ${({theme:e,isError:t,isUnverified:l,isValidating:i})=>l||i?e.colorTextTertiary:t?e.colorErrorText:e.colorSuccessText};
  font-size: ${({theme:e})=>e.fontSizeSM}px;
  flex: 1;
  min-width: 0;

  span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`,v=(0,r.forwardRef)(({value:e,onChange:t,showValidation:l=!1,expressionType:a="column",datasourceId:v,datasourceType:g,clause:f,onValidationComplete:b,height:y,width:x,lineNumbers:S,wordWrap:C,keywords:w},_)=>{var F;let[T,Y]=(0,r.useState)(!1),[A,$]=(0,r.useState)(null);(0,r.useEffect)(()=>{(null!==A||T)&&($(null),Y(!1))},[e]);let k=(0,r.useCallback)(()=>{var t;return(t=function*(){if(!e||!v||!g){let t={message:e?(0,n.t)("Datasource is required for validation"):(0,n.t)("Expression cannot be empty")};$({isValid:!1,errors:[t]}),null==b||b(!1,[t]);return}Y(!0),$(null);try{let t=`/api/v1/datasource/${g}/${v}/validate_expression/`,l=(yield o.A.post({endpoint:t,body:JSON.stringify({expression:e,expression_type:a,clause:f}),headers:{"Content-Type":"application/json"}})).json;l.result&&l.result.length>0?($({isValid:!1,errors:l.result}),null==b||b(!1,l.result)):($({isValid:!0}),null==b||b(!0))}catch(t){console.error("Error validating expression:",t);let e={message:(0,n.t)("Failed to validate expression. Please try again.")};$({isValid:!1,errors:[e]}),null==b||b(!1,[e])}finally{Y(!1)}},function(){var e=this,l=arguments;return new Promise(function(i,r){var n=t.apply(e,l);function o(e){h(n,i,r,o,a,"next",e)}function a(e){h(n,i,r,o,a,"throw",e)}o(void 0)})})()},[e,a,v,g,f,b]),D=(0,r.useCallback)(e=>{t(e),null!==A&&$(null)},[t,A]);return(0,i.FD)(c.s,{vertical:!0,gap:"middle",children:[(0,i.Y)(p.AE,{ref:_,id:"sql-editor-with-validation",value:e,onChange:D,language:"sql",lineNumbers:S,wordWrap:C,height:y,width:x,keywords:w}),l&&(0,i.FD)(c.s,{align:"center",gap:"small",style:{minHeight:32},children:[(0,i.Y)(u.m,{title:(0,n.t)("Validate your expression"),children:(0,i.Y)(d.$n,{buttonSize:"small",buttonStyle:A?"secondary":"primary",loading:T,onClick:k,disabled:!e||!v||T,icon:(0,i.Y)(s.F.CaretRightFilled,{}),"aria-label":(0,n.t)("Validate your expression")})}),(0,i.Y)(m,{isError:!!A&&!A.isValid,isUnverified:!A&&!T,isValidating:T,children:T?(0,i.Y)("span",{children:(0,n.t)("Validating...")}):A?(0,i.Y)(i.FK,{children:A.isValid?(0,i.FD)(i.FK,{children:[(0,i.Y)(s.F.CheckCircleOutlined,{}),(0,i.Y)("span",{children:(0,n.t)("Valid SQL expression")})]}):(0,i.FD)(i.FK,{children:[(0,i.Y)(s.F.WarningOutlined,{}),(0,i.Y)(u.m,{title:(null==(F=A.errors)?void 0:F.map(e=>e.message).join(`
`))||(0,n.t)("Invalid expression"),placement:"top",children:(0,i.Y)("span",{children:A.errors&&A.errors.length>0?A.errors[0].message:(0,n.t)("Invalid expression")})})]})}):(0,i.FD)(i.FK,{children:[(0,i.Y)(s.F.WarningOutlined,{}),(0,i.Y)("span",{children:(0,n.t)("Unverified")})]})})]})]})});v.displayName="SQLEditorWithValidation";let g=v},848(e,t,l){l.d(t,{TN:()=>y,ZY:()=>x});var i,r=l(2445),n=l(24002),o=l(22567),a=l(81090),s=l(21412),d=l(97371),c=l(17437),u=l(38221),p=l.n(u),h=l(22022),m=l(15341),v=l(1125),g=l(69491),f=l(10658),b=l(61175);l(28704),(0,d.styled)("span")`
  color: ${({theme:e})=>e.colorTextTertiary};
`,(0,d.styled)(v.$n)`
  font-size: ${({theme:e})=>e.fontSizeSM}px;

  // needed to override button's first-of-type margin: 0
  && {
    margin: 0 ${({theme:e})=>2*e.sizeUnit}px;
  }

  i {
    padding: 0 ${({theme:e})=>e.sizeUnit}px;
  }
`;let y=({data:e,columns:t,disabled:l=!1})=>{let i=(0,d.useTheme)();return(0,r.Y)(f.$r,{text:!l&&e&&t?(0,b.L)(e,t):"",disabled:l,wrapped:!1,copyNode:(0,r.Y)("span",{role:"button","aria-label":(0,o.t)("Copy"),"aria-disabled":l,tabIndex:l?-1:0,children:(0,r.Y)(m.F.CopyOutlined,{iconColor:i.colorIcon,iconSize:"l",css:(0,c.AH)`
              opacity: ${l?.3:1};
              cursor: ${l?"not-allowed":"pointer"};
              &.anticon > * {
                line-height: 0;
              }
            `})})})},x=({onChangeHandler:e,shouldFocus:t=!1})=>{let l=(0,n.useRef)(null);(0,n.useEffect)(()=>{l.current&&t&&l.current.focus()},[]);let i=(0,d.useTheme)(),a=p()(e,g.Y.SLOW_DEBOUNCE);return(0,r.Y)(h.Input,{prefix:(0,r.Y)(m.F.SearchOutlined,{iconSize:"l"}),placeholder:(0,o.t)("Search"),onChange:e=>{a(e.target.value)},css:(0,c.AH)`
        width: 200px;
        margin-right: ${2*i.sizeUnit}px;
      `,ref:l})};var S=((i=S||{}).Formatted="formatted",i.Original="original",i);d.styled.div`
  display: flex;
  flex-direction: column;

  padding: ${({theme:e})=>`${4*e.sizeUnit}px`};
`,d.styled.span`
  font-size: ${({theme:e})=>e.fontSizeSM}px;
  color: ${({theme:e})=>e.colorText};
  margin-bottom: ${({theme:e})=>2*e.sizeUnit}px;
`,(0,s.mo)(a.A.DATABASE_DATETIME)},28704(e,t,l){l.d(t,{p:()=>n});var i=l(87928),r=l(52797);let n=e=>{let t=(0,r.Gq)(r.Hh.ExploreDataTableOriginalFormattedTimeColumns,{});return void 0===e?[]:(0,i.A)(t[e])}},90890(e,t,l){l.d(t,{w2:()=>x,xU:()=>C});var i=l(2445),r=l(97371),n=l(17437),o=l(22567),a=l(69112),s=l(24002),d=l(65611),c=l.n(d),u=l(44213),p=l(25358),h=l(15341),m=l(848),v=l(61175),g=l(28704),f=l(65069),b=l(18612),y=l(72334);let x=[{value:100,label:"100 rows"},{value:500,label:"500 rows"},{value:1e3,label:"1k rows"},{value:5e3,label:"5k rows"},{value:1e4,label:"10k rows"}],S=r.styled.div`
  ${({theme:e})=>`
    display: flex;
    align-items: center;
    padding-top: ${2*e.sizeUnit}px;
    padding-bottom: ${2*e.sizeUnit}px;
    justify-content: space-between;

    span {
      flex-shrink: 0;
    }
  `}
`,C=({data:e,datasourceId:t,onInputChange:l,columnNames:d,columnTypes:x,rowcount:C,isLoading:w,canDownload:_,rowLimit:F,rowLimitOptions:T,onRowLimitChange:Y,onDownloadCSV:A,onDownloadXLSX:$,onReload:k})=>{let D=(0,r.useTheme)(),E=(0,g.p)(t),O=c()(d,x).filter(([e,t])=>t===a.GenericDataType.Temporal&&e&&!E.includes(e)).map(([e])=>e).filter(e=>void 0!==e),z=(0,s.useMemo)(()=>(0,v.bE)(e,O),[e,O]),{canCopyClipboard:R}=(0,b.S)();return(0,i.FD)(S,{children:[(0,i.Y)(m.ZY,{onChangeHandler:l,shouldFocus:!0}),(0,i.FD)("div",{css:(0,n.AH)`
          display: flex;
          align-items: center;
          gap: 8px;
        `,children:[Y&&(0,i.Y)(u.A,{value:F,onChange:Y,options:null!=T?T:[],css:(0,n.AH)`
              min-width: 110px;
            `}),(!Y||C<(null!=F?F:1/0))&&(0,i.Y)(f.A,{rowcount:C,loading:w}),_&&A&&$&&(0,i.Y)(y.A,{onDownloadCSV:A,onDownloadXLSX:$}),R?(0,i.Y)(m.TN,{data:z,columns:d}):(0,i.Y)(p.m,{title:(0,o.t)("You don't have permission to copy to clipboard"),children:(0,i.Y)("span",{children:(0,i.Y)(m.TN,{data:z,columns:d,disabled:!0})})}),k&&(0,i.Y)(p.m,{title:(0,o.t)("Reload"),children:(0,i.Y)(h.F.ReloadOutlined,{iconColor:D.colorIcon,iconSize:"l","aria-label":(0,o.t)("Reload"),role:"button",onClick:k})})]})]})}},15101(e,t,l){l.d(t,{U:()=>h});var i=l(2445),r=l(24002),n=l(97371),o=l(82746),a=l(48281),s=l(41020),d=l(90890);let c=n.styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
`,u=n.styled.div`
  flex: 1;
  min-height: 0;
  position: relative;
`,p=n.styled.div`
  position: absolute;
  inset: 0;
`,h=({data:e,colnames:t,coltypes:l,rowcount:n,datasourceId:h,canDownload:m,columnDisplayNames:v,rowLimit:g,rowLimitOptions:f,onRowLimitChange:b,onDownloadCSV:y,onDownloadXLSX:x,onReload:S})=>{let[C,w]=(0,r.useState)(""),{gridHeight:_,measuredRef:F}=(0,s.x9)(),T=(0,s.ZN)(t,l,e,v),Y=(0,s.Bq)(C),A=(0,r.useCallback)(e=>w(e),[]);return(0,i.FD)(c,{children:[(0,i.Y)(d.xU,{data:e,columnNames:t,columnTypes:l,rowcount:n,datasourceId:h,onInputChange:A,isLoading:!1,canDownload:m,rowLimit:g,rowLimitOptions:f,onRowLimitChange:b,onDownloadCSV:y,onDownloadXLSX:x,onReload:S}),(0,i.Y)(u,{children:(0,i.Y)(p,{ref:F,children:(0,i.Y)(o.d,{data:e,columns:T,height:_,size:a.w.Small,externalFilter:Y,showRowNumber:!0})})})]})}},41020(e,t,l){l.d(t,{Bq:()=>p,ZN:()=>u,x9:()=>h});var i=l(2445),r=l(24002),n=l(81090),o=l(21412),a=l(13090),s=l(69491),d=l(69112);let c=(0,o.mo)(n.A.DATABASE_DATETIME);function u(e,t,l,n){return(0,r.useMemo)(()=>e&&(null==l?void 0:l.length)?e.filter(e=>Object.keys(l[0]).includes(e)).map((e,l)=>{var r;let o=null==t?void 0:t[l],u=null!=(r=null==n?void 0:n[e])?r:e;return{label:e,headerName:u,render:({value:e})=>!0===e?s.Y.BOOL_TRUE_DISPLAY:!1===e?s.Y.BOOL_FALSE_DISPLAY:null===e?(0,i.Y)("span",{style:{color:"var(--ant-color-text-tertiary)"},children:s.Y.NULL_DISPLAY}):o===d.GenericDataType.Temporal&&"number"==typeof e?c(e):"string"==typeof e?(0,a.nn)(e):String(e)}}):[],[e,l,t,n])}function p(e){return(0,r.useCallback)(t=>{if(e&&t.data){let l=e.toLowerCase();return Object.values(t.data).some(e=>null!=e&&String(e).toLowerCase().includes(l))}return!0},[e])}function h(e=400){let[t,l]=(0,r.useState)(e),i=(0,r.useRef)(null);return{gridHeight:t,measuredRef:(0,r.useCallback)(e=>{if(i.current&&(i.current.disconnect(),i.current=null),!e)return;let t=new ResizeObserver(e=>{let t=e[0];if(t){let e=Math.floor(t.contentRect.height);e>0&&l(t=>t!==e?e:t)}});t.observe(e),i.current=t},[])}}},73484(e,t,l){l.d(t,{_h:()=>L,ih:()=>Y});var i,r=l(2445),n=l(24002),o=l(22567),a=l(43702),s=l(97371),d=l(15341),c=l(61457),u=l(52797),p=((i={}).Results="results",i.Samples="samples",i),h=l(43361),m=l(87928),v=l(66972),g=l(86864),f=l(46882),b=l(37370),y=l(15101),x=l(90890);function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i])}return e}).apply(this,arguments)}let C=s.styled.pre`
  margin-top: ${({theme:e})=>`${4*e.sizeUnit}px`};
`,w=s.styled.div`
  ${()=>`
    display: flex;
    height: 100%;
    flex-direction: column;
    `}
`,_=new WeakMap,F=({isRequest:e,queryFormData:t,queryForce:l,ownState:i,errorMessage:a,setForceQuery:s,isVisible:d,canDownload:c,columnDisplayNames:u})=>{var p;let F=(0,h.A)().get((null==t?void 0:t.viz_type)||(null==t?void 0:t.vizType)),T=Number(null==t?void 0:t.row_limit)||1e4,[Y,A]=(0,n.useState)(1e3),[$,k]=(0,n.useState)([]),[D,E]=(0,n.useState)(!0),[O,z]=(0,n.useState)(""),R=null!=(p=null==F?void 0:F.queryObjectCount)?p:1,I=null==F?void 0:F.dynamicQueryObjectCount,M=(0,n.useCallback)(()=>{},[]),N=Math.min(Y,T),L=(0,n.useMemo)(()=>S({},t,{row_limit:N}),[t,N]),U=(0,n.useCallback)(e=>{A(e),_.delete(L)},[L]);if((0,n.useEffect)(()=>{a||(e&&_.has(L)&&(k((0,m.A)(_.get(L))),z(""),l&&(null==s||s(!1)),E(!1)),e&&!_.has(L)&&(E(!0),(0,b.getChartDataRequest)({formData:L,force:l,resultFormat:"json",resultType:"results",ownState:i}).then(({json:e})=>{k((0,m.A)(e.result)),z(""),_.set(L,e.result),l&&(null==s||s(!1))}).catch(e=>{(0,v.h4)(e).then(({error:e,message:t})=>{z(e||t||(0,o.t)("Sorry, an error occurred"))})}).finally(()=>{E(!1)})))},[L,e]),(0,n.useEffect)(()=>{a&&E(!1)},[a]),D)return Array(R).fill((0,r.Y)(g.R,{}));if(a){let e=(0,o.t)("Run a query to display results");return Array(R).fill((0,r.Y)(f.p,{image:"document.svg",title:e,size:"small"}))}if(O){let e=(0,r.FD)(r.FK,{children:[(0,r.Y)(x.xU,{data:[],columnNames:[],columnTypes:[],rowcount:0,datasourceId:t.datasource,onInputChange:M,isLoading:!1,canDownload:c}),(0,r.Y)(C,{children:O})]});return Array(R).fill(e)}if(0===$.length){let e=(0,o.t)("No results were returned for this query");return Array(R).fill((0,r.Y)(f.p,{image:"document.svg",title:e,size:"small"}))}return(I?$:$.slice(0,R)).map((e,l)=>(0,r.Y)(w,{children:(0,r.Y)(y.U,{data:e.data,colnames:e.colnames,coltypes:e.coltypes,rowcount:e.rowcount,datasourceId:t.datasource,isVisible:d,canDownload:c,columnDisplayNames:u,rowLimit:Y,rowLimitOptions:x.w2,onRowLimitChange:U})},l))},T=s.styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  .ant-tabs {
    height: 100%;
  }

  .ant-tabs-content {
    height: 100%;
  }

  .ant-tabs-tabpane {
    display: flex;
    flex-direction: column;
  }

  .table-condensed {
    overflow: auto;
  }
`,Y=({isRequest:e,queryFormData:t,queryForce:l,ownState:i,errorMessage:n,setForceQuery:a,isVisible:s,dataSize:d=50,canDownload:u,columnDisplayNames:h})=>{let m=F({errorMessage:n,queryFormData:t,queryForce:l,ownState:i,isRequest:e,setForceQuery:a,dataSize:d,isVisible:s,canDownload:u,columnDisplayNames:h});if(1===m.length)return(0,r.Y)(T,{children:m[0]});let v=m.map((e,t)=>({key:0===t?p.Results:`${p.Results} ${t+1}`,label:0===t?(0,o.t)("Results"):(0,o.t)("Results %s",t+1),children:e}));return(0,r.Y)(T,{children:(0,r.Y)(c.Ay,{items:v})})};var A=l(82746),$=l(48281),k=l(20846),D=l(41020);let E=s.styled.pre`
  margin-top: ${({theme:e})=>`${4*e.sizeUnit}px`};
`,O=s.styled.div`
  flex: 1;
  min-height: 0;
  position: relative;
`,z=s.styled.div`
  position: absolute;
  inset: 0;
`,R=new WeakMap,I=({isRequest:e,datasource:t,queryFormData:l,queryForce:i,setForceQuery:a,isVisible:s,canDownload:d})=>{let[c,u]=(0,n.useState)(""),[p,h]=(0,n.useState)(100),[v,y]=(0,n.useState)([]),[S,C]=(0,n.useState)([]),[w,_]=(0,n.useState)([]),[F,T]=(0,n.useState)(!1),[Y,I]=(0,n.useState)(0),[M,N]=(0,n.useState)(""),{gridHeight:L,measuredRef:U}=(0,D.x9)(),j=(0,n.useMemo)(()=>`${t.id}__${t.type}`,[t]),H=(0,n.useCallback)(e=>{h(e),R.delete(l)},[l]);(0,n.useEffect)(()=>{if(e&&i&&R.delete(l),e&&!R.has(l)){var r;T(!0);let e=null!=(r=(0,k.o)(l))?r:{};(0,b.getDatasourceSamples)(t.type,t.id,i,e,p,1).then(e=>{y((0,m.A)(e.data)),C((0,m.A)(e.colnames)),_((0,m.A)(e.coltypes)),I(e.rowcount),N(""),R.set(l,!0),i&&(null==a||a(!1))}).catch(e=>{y([]),C([]),_([]),N(`${e.name}: ${e.message}`)}).finally(()=>{T(!1)})}},[t,l,e,i,p]);let P=(0,D.ZN)(S,w,v),q=(0,D.Bq)(c),V=(0,n.useCallback)(e=>u(e),[]);if(F)return(0,r.Y)(g.R,{});if(M)return(0,r.FD)(r.FK,{children:[(0,r.Y)(x.xU,{data:v,columnNames:S,columnTypes:w,rowcount:Y,datasourceId:j,onInputChange:V,isLoading:F,canDownload:d,rowLimit:p,rowLimitOptions:x.w2,onRowLimitChange:H}),(0,r.Y)(E,{children:M})]});if(0===v.length){let e=(0,o.t)("No samples were returned for this dataset");return(0,r.Y)(f.p,{image:"document.svg",title:e})}return(0,r.FD)(r.FK,{children:[(0,r.Y)(x.xU,{data:v,columnNames:S,columnTypes:w,rowcount:Y,datasourceId:j,onInputChange:V,isLoading:F,canDownload:d,rowLimit:p,rowLimitOptions:x.w2,onRowLimitChange:H}),(0,r.Y)(O,{children:(0,r.Y)(z,{ref:U,children:(0,r.Y)(A.d,{data:v,columns:P,height:L,size:$.w.Small,externalFilter:q,showRowNumber:!0})})})]})},M=s.styled.div`
  ${()=>`
    display: flex;
    height: 100%;
    flex-direction: column;
    `}
`,N=s.styled.div`
  ${({theme:e})=>`
    position: relative;
    background-color: ${e.colorBgContainer};
    z-index: 5;
    overflow: hidden;

    .ant-tabs {
      height: 100%;
    }

    .ant-tabs-content-holder {
      height: 100%;
    }

    .ant-tabs-content {
      height: 100%;
    }

    .ant-tabs-tabpane {
      height: 100%;
      position: relative;

      .table-condensed {
        height: 100%;
        overflow: auto;
        margin-bottom: ${4*e.sizeUnit}px;

        .table {
          margin-bottom: ${2*e.sizeUnit}px;
        }
      }
     .pagination-container > ul[role='navigation'] {
        margin-top: 0;
      }
    }
  `}
`,L=({queryFormData:e,datasource:t,queryForce:l,onCollapseChange:i,chartStatus:s,ownState:h,errorMessage:m,setForceQuery:v,canDownload:g})=>{let[f,b]=(0,n.useState)(p.Results),[y,x]=(0,n.useState)({results:!1,samples:!1}),[S,C]=(0,n.useState)(!(0,a.G7)(a.TO.DatapanelClosedByDefault)&&(0,u.Gq)(u.Hh.IsDatapanelOpen,!1));(0,n.useEffect)(()=>{(0,a.G7)(a.TO.DatapanelClosedByDefault)||(0,u.SO)(u.Hh.IsDatapanelOpen,S)},[S]),(0,n.useEffect)(()=>{S||x({results:!1,samples:!1}),S&&f.startsWith(p.Results)&&s&&"loading"!==s&&x({results:!0,samples:!1}),S&&f===p.Samples&&x({results:!1,samples:!0})},[S,f,s]);let w=(0,n.useCallback)(e=>{i(e),C(e)},[i]),_=(0,n.useCallback)((e,t)=>{S?e===f&&(t.preventDefault(),w(!1)):w(!0),b(e)},[f,w,S]),T=(0,n.useMemo)(()=>{let e=S?(0,r.Y)(d.F.UpOutlined,{"aria-label":(0,o.t)("Collapse data panel")}):(0,r.Y)(d.F.DownOutlined,{"aria-label":(0,o.t)("Expand data panel")});return(0,r.Y)("div",{children:S?(0,r.Y)("span",{role:"button",tabIndex:0,onClick:()=>w(!1),children:e}):(0,r.Y)("span",{role:"button",tabIndex:0,onClick:()=>w(!0),children:e})})},[w,S]),Y=[...F({errorMessage:m,queryFormData:e,queryForce:l,ownState:h,isRequest:y.results,setForceQuery:v,isVisible:p.Results===f,canDownload:g}).map((e,t)=>({key:0===t?p.Results:`${p.Results} ${t+1}`,label:0===t?(0,o.t)("Results"):(0,o.t)("Results %s",t+1),children:e})),{key:p.Samples,label:(0,o.t)("Samples"),children:(0,r.Y)(M,{children:(0,r.Y)(I,{datasource:t,queryFormData:e,queryForce:l,isRequest:y.samples,setForceQuery:v,isVisible:p.Samples===f,canDownload:g})})}];return(0,r.Y)(N,{"data-test":"some-purposeful-instance",children:(0,r.Y)(c.Ay,{tabBarExtraContent:T,activeKey:S?f:"",onTabClick:_,items:Y})})}},26670(e,t,l){l.d(t,{S:()=>r});var i,r=((i={}).Column="column",i.ColumnOption="columnOption",i.AdhocColumnOption="adhocColumn",i.Metric="metric",i.MetricOption="metricOption",i.AdhocMetricOption="adhocMetric",i.FilterOption="filterOption",i)},5530(e,t,l){l.d(t,{A:()=>h});var i=l(2445),r=l(24002),n=l(17437),o=l(22567),a=l(22022),s=l(89314),d=l(10658),c=l(32415),u=l(11540),p=l(15341);let h=({formData:e,addDangerToast:t})=>{let[l,h]=(0,r.useState)("400"),[m,v]=(0,r.useState)("600"),[g,f]=(0,r.useState)(""),[b,y]=(0,r.useState)(""),x=(0,r.useCallback)(e=>{let{value:t,name:l}=e.currentTarget;"width"===l&&v(t),"height"===l&&h(t)},[]),S=(0,r.useCallback)(()=>{f(""),(null==e?void 0:e.datasource)&&(0,u.Kx)(e).then(e=>{(null==e?void 0:e.url)&&(f(e.url),y(""))}).catch(()=>{y((0,o.t)("Error")),null==t||t((0,o.t)("Sorry, something went wrong. Try again later."))})},[t,e]);(0,r.useEffect)(()=>{S()},[]);let C=(0,r.useMemo)(()=>{if(!g)return"";let e=`${g}?${c.vX.standalone.name}=1&height=${l}`;return`<iframe
  width="${m}"
  height="${l}"
  seamless
  frameBorder="0"
  scrolling="no"
  src="${e}"
>
</iframe>`},[l,g,m]),w=b||C||(0,o.t)("Generating link, please wait..");return(0,i.FD)("div",{id:"embed-code-popover","data-test":"embed-code-popover",children:[(0,i.FD)("div",{css:(0,n.AH)`
          display: flex;
          flex-direction: column;
        `,children:[(0,i.Y)(d.$r,{shouldShowText:!1,text:C,copyNode:(0,i.Y)("span",{role:"button","aria-label":(0,o.t)("Copy to clipboard"),children:(0,i.Y)(p.F.CopyOutlined,{})})}),(0,i.Y)(a.Input.TextArea,{"data-test":"embed-code-textarea",name:"embedCode",disabled:!C,value:w,rows:4,readOnly:!0,css:e=>(0,n.AH)`
            resize: vertical;
            margin-top: ${2*e.sizeUnit}px;
            padding: ${2*e.sizeUnit}px;
            font-size: ${e.fontSizeSM}px;
            border-radius: 4px;
            background-color: ${e.colorBgElevated};
          `})]}),(0,i.FD)(a.Space,{direction:"horizontal",css:e=>(0,n.AH)`
          margin-top: ${e.margin}px;
        `,children:[(0,i.FD)("div",{children:[(0,i.Y)(s.o.Text,{type:"secondary",children:(0,o.t)("Chart height")}),(0,i.Y)(a.Input,{type:"number",defaultValue:l,name:"height",onChange:x})]}),(0,i.FD)("div",{children:[(0,i.Y)(s.o.Text,{type:"secondary",children:(0,o.t)("Chart width")}),(0,i.Y)(a.Input,{type:"number",defaultValue:m,name:"width",onChange:x,id:"embed-width"})]})]})]})}},46142(e,t,l){l.d(t,{y:()=>r});var i=l(97371);let r=i.styled.div`
  .edit-popover-resize {
    transform: scaleX(-1);
    float: right;
    margin-top: ${({theme:e})=>4*e.sizeUnit}px;
    margin-right: ${({theme:e})=>-1*e.sizeUnit}px;
    color: ${({theme:e})=>e.colorIcon};
    cursor: nwse-resize;
  }
  .filter-sql-editor {
    border: ${({theme:e})=>e.colorBorder} solid thin;
  }
`},79898(e,t,l){l.d(t,{Ay:()=>s,tb:()=>d});var i=l(38187),r=l(31239),n=l(36255);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i])}return e}).apply(this,arguments)}let a=[...i.Wy].map(e=>i.nS[e].operation);class s{duplicateWith(e){return new s(o({expressionType:this.expressionType,subject:this.subject,operator:this.operator,operatorId:this.operatorId,comparator:this.comparator,clause:this.clause,sqlExpression:this.sqlExpression,isExtra:this.isExtra,isNew:!1,datasourceWarning:this.datasourceWarning,deck_slices:this.deck_slices,layerFilterScope:this.layerFilterScope,filterOptionName:this.filterOptionName},e))}equals(e){return e.clause===this.clause&&e.expressionType===this.expressionType&&e.sqlExpression===this.sqlExpression&&e.operator===this.operator&&e.operatorId===this.operatorId&&e.comparator===this.comparator&&e.subject===this.subject}isValid(){if(this.expressionType===n.A.Simple){if(this.operator&&i.Sd.map(e=>i.nS[e].operation).indexOf(this.operator)>=0)return!!this.subject;if(this.operator&&this.subject&&this.clause)return Array.isArray(this.comparator)?this.comparator.length>0:null!==this.comparator}return this.expressionType===n.A.Sql&&!!(this.sqlExpression&&this.clause)}getDefaultLabel(){let e=this.translateToSql();return e.length<43?e:`${e.substring(0,40)}...`}getTooltipTitle(){return this.translateToSql()}translateToSql(){return(0,r.e)(this)}constructor(e){if(this.expressionType=e.expressionType||n.A.Simple,this.expressionType===n.A.Simple){var t;this.subject=e.subject,this.operator=null==(t=e.operator)?void 0:t.toUpperCase(),this.operatorId=e.operatorId,this.comparator=e.comparator,e.operatorId&&i.Sd.indexOf(e.operatorId)>=0&&(this.comparator=void 0),this.clause=e.clause||n.v.Where,this.sqlExpression=null}else this.expressionType===n.A.Sql&&(this.sqlExpression="string"==typeof e.sqlExpression?e.sqlExpression:(0,r.e)(e,{useSimple:!0}),this.clause=e.clause,e.operator&&a.indexOf(e.operator)>=0?(this.subject=e.subject,this.operator=e.operator,this.operatorId=e.operatorId):(this.subject=null,this.operator=null),this.comparator=null);this.isExtra=!!e.isExtra,this.isNew=!!e.isNew,this.datasourceWarning=!!e.datasourceWarning,this.deck_slices=null==e?void 0:e.deck_slices,this.layerFilterScope=null==e?void 0:e.layerFilterScope,this.filterOptionName=e.filterOptionName||`filter_${Math.random().toString(36).substring(2,15)}_${Math.random().toString(36).substring(2,15)}`}}function d(e){return"object"==typeof e&&null!==e&&!(e instanceof s)&&("expressionType"in e||"subject"in e||"operator"in e||"sqlExpression"in e||"clause"in e)}},55066(e,t,l){l.d(t,{A:()=>A});var i=l(2445),r=l(24002),n=l(87928),o=l(48014),a=l(12263),s=l(22567),d=l(98837),c=l(92797),u=l(36505),p=l(38187),h=l(44856),m=l(45468),v=l(15341),g=l(16351),f=l(50469),b=l(26670),y=l(69534);function x({adhocFilter:e,options:t,datasource:l,onFilterEdit:r,onRemoveFilter:n,partitionColumn:o,onMoveLabel:a,onDropLabel:s,index:d,sections:c,operators:u}){let{actualTimeRange:p,title:h}=(0,y.K)(e);return(0,i.Y)(f.A,{sections:c,operators:u,adhocFilter:e,options:t,datasource:l||{},onFilterEdit:r,partitionColumn:null!=o?o:void 0,children:(0,i.Y)(m.Px,{label:null!=p?p:e.getDefaultLabel(),tooltipTitle:null!=h?h:e.getTooltipTitle(),onRemove:()=>n({stopPropagation:()=>{}}),onMoveLabel:a,onDropLabel:s,index:d,type:b.S.FilterOption,withCaret:!0,isExtra:e.isExtra})})}var S=l(79898),C=l(11540),w=l(36255);function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i])}return e}).apply(this,arguments)}let{warning:F}=g.aF;function T(e){return[...e.columns||[],...(0,n.A)(e.selectedMetrics).map(e=>e&&("string"==typeof e?{saved_metric_name:e}:(0,u.jz)(e)?new u.Ay(e):e))].filter(e=>e).reduce((e,t)=>(t.saved_metric_name?e.push(_({},t,{filterOptionName:t.saved_metric_name})):t.column_name?e.push(_({},t,{filterOptionName:`_col_${t.column_name}`})):t instanceof u.Ay&&e.push(_({},t,{filterOptionName:`_adhocmetric_${t.label}`})),e),[]).sort((e,t)=>(e.saved_metric_name||e.column_name||e.label||"").localeCompare(t.saved_metric_name||t.column_name||t.label||""))}class Y extends r.Component{componentDidMount(){let{datasource:e}=this.props;if(e&&"table"===e.type){var t;let l=null==(t=e.database)?void 0:t.id,{datasource_name:i,catalog:r,schema:n,is_sqllab_view:s}=e;!s&&l&&i&&n&&o.A.get({endpoint:`/api/v1/database/${l}/table_metadata/extra/${(0,C.zJ)({name:i,catalog:r,schema:n})}`}).then(({json:e})=>{if(e&&e.partitions){let{partitions:t}=e;t&&t.cols&&1===Object.keys(t.cols).length&&this.setState({partitionColumn:t.cols[0]})}}).catch(e=>{a.A.error("fetch extra_table_metadata:",e.statusText)})}}componentDidUpdate(e){this.props.columns!==e.columns&&this.setState({options:T(this.props)}),this.props.value!==e.value&&this.setState({values:(this.props.value||[]).map(e=>(0,S.tb)(e)?new S.Ay(e):e)})}removeFilter(e){let t=[...this.state.values];t.splice(e,1),this.setState(e=>_({},e,{values:t})),null==this.props.onChange||this.props.onChange.call(this.props,t)}onRemoveFilter(e){let{canDelete:t}=this.props,{values:l}=this.state,i=null==t?void 0:t(l[e],l);"string"==typeof i?F({title:(0,s.t)("Warning"),content:i}):this.removeFilter(e)}onNewFilter(e){let t=this.mapOption(e);t&&this.setState(e=>_({},e,{values:[...e.values,t]}),()=>{null==this.props.onChange||this.props.onChange.call(this.props,this.state.values)})}onFilterEdit(e){null==this.props.onChange||this.props.onChange.call(this.props,this.state.values.map(t=>t.filterOptionName===e.filterOptionName?e:t))}onChange(e){let t=(e||[]).map(e=>this.mapOption(e)).filter(e=>null!==e);null==this.props.onChange||this.props.onChange.call(this.props,t)}getMetricExpression(e){var t,l;let i=null==(l=this.props.savedMetrics)?void 0:l.find(t=>t.metric_name===e);return null!=(t=null==i?void 0:i.expression)?t:""}moveLabel(e,t){let{values:l}=this.state,i=[...l];[i[t],i[e]]=[i[e],i[t]],this.setState({values:i})}mapOption(e){return e instanceof S.Ay?e:e.saved_metric_name?new S.Ay({expressionType:w.A.Sql,subject:this.getMetricExpression(e.saved_metric_name),operator:p.nS[p.ux.GreaterThan].operation,comparator:0,clause:w.v.Having}):e.label?new S.Ay({expressionType:w.A.Sql,subject:new u.Ay(e).translateToSql(),operator:p.nS[p.ux.GreaterThan].operation,comparator:0,clause:w.v.Having}):e.column_name?new S.Ay({expressionType:w.A.Simple,subject:e.column_name,operator:p.nS[p.ux.Equals].operation,comparator:"",clause:w.v.Where,isNew:!0}):null}addNewFilterPopoverTrigger(e){var t;return(0,i.Y)(f.A,{operators:this.props.operators,sections:this.props.sections,adhocFilter:new S.Ay({}),datasource:this.props.datasource||{},options:this.state.options,onFilterEdit:this.onNewFilter,partitionColumn:null!=(t=this.state.partitionColumn)?t:void 0,children:e})}render(){return(0,i.FD)("div",{className:"metrics-select","data-test":"adhoc-filter-control",children:[(0,i.Y)(m.B3,{children:(0,i.Y)(c.A,_({},this.props))}),(0,i.Y)(m.p6,{children:[...this.state.values.length>0?this.state.values.map((e,t)=>this.valueRenderer(e,t)):[],this.addNewFilterPopoverTrigger((0,i.FD)(m.JG,{role:"button","data-test":"add-filter-button",children:[(0,i.Y)(v.F.PlusOutlined,{iconSize:"m"}),(0,s.t)("Add filter")]}))]})]})}constructor(e){super(e),this.onRemoveFilter=this.onRemoveFilter.bind(this),this.onNewFilter=this.onNewFilter.bind(this),this.onFilterEdit=this.onFilterEdit.bind(this),this.moveLabel=this.moveLabel.bind(this),this.onChange=this.onChange.bind(this),this.mapOption=this.mapOption.bind(this),this.getMetricExpression=this.getMetricExpression.bind(this),this.removeFilter=this.removeFilter.bind(this);const t=(this.props.value||[]).map(e=>(0,S.tb)(e)?new S.Ay(e):e);this.optionRenderer=e=>(0,i.Y)(h.A,{option:e}),this.valueRenderer=(e,t)=>(0,i.Y)(x,{index:t,adhocFilter:e,onFilterEdit:this.onFilterEdit,options:this.state.options,sections:this.props.sections,operators:this.props.operators,datasource:this.props.datasource,onRemoveFilter:e=>{e.stopPropagation(),this.onRemoveFilter(t)},onMoveLabel:this.moveLabel,onDropLabel:()=>null==this.props.onChange?void 0:this.props.onChange.call(this.props,this.state.values),partitionColumn:this.state.partitionColumn},t),this.state={values:t,options:T(this.props),partitionColumn:null}}}Y.defaultProps={name:"",onChange:()=>{},columns:[],savedMetrics:[],selectedMetrics:[]};let A=(0,d.b)(Y)},50469(e,t,l){l.d(t,{A:()=>J});var i,r=l(2445),n=l(24002),o=l(44213),a=l(1125),s=l(15341),d=l(10658),c=l(48014),u=l(22567),p=l(97371),h=l(61457),m=l(25358),v=l(22022),g=l(37286),f=l(43702),b=l(17437),y=l(38187),x=l(44856),S=l(61175),C=l(83040),w=l(87928),_=l(38221),F=l.n(_),T=l(58561),Y=l.n(T);let A={parsedAdvancedDataType:"",advancedDataTypeOperatorList:[],errorMessage:""};var $=l(69534),k=l(40030),D=l(36255);function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i])}return e}).apply(this,arguments)}let O=(0,p.styled)(o.A)`
  .ant-select-selector::after {
    content: ${({labelText:e})=>e||"\\A0"};
    display: inline-block;
    white-space: nowrap;
    color: ${({theme:e})=>e.colorTextSecondary};
    width: max-content;
  }
`,z=e=>{var t,l;let i,a,{onSubjectChange:s,onOperatorChange:d,isOperatorRelevant:h,onComparatorChange:_,onDatePickerChange:T}=(i=(0,k.IM)(),{onSubjectChange:t=>{let l,r=e.options.find(e=>"column_name"in e&&e.column_name===t||"optionName"in e&&e.optionName===t),n="";r&&"column_name"in r?(n=r.column_name,l=D.v.Where):r&&"saved_metric_name"in r?(n=r.saved_metric_name,l=D.v.Having):(null==r?void 0:r.label)&&(n=r.label,l=D.v.Having);let{operator:o,operatorId:s,comparator:d}=e.adhocFilter;o=o&&s&&a(s,n)?y.nS[s].operation:null,(0,g.A)(o)||(o=y.ux.In,s=y.ux.In,d=void 0),(0,C.D)(t,e.datasource)&&(n=t,o=y.ux.TemporalRange,s=y.ux.TemporalRange,d=i),e.onChange(e.adhocFilter.duplicateWith({subject:n,clause:l,operator:o,expressionType:D.A.Simple,operatorId:s,comparator:d}))},onOperatorChange:t=>{let l,i=e.adhocFilter.comparator;l=y.sJ.has(t)?Array.isArray(i)?i:[i].filter(e=>null!=e):Array.isArray(i)?i[0]:i,t&&y.Wy.has(t)?e.onChange(e.adhocFilter.duplicateWith({subject:e.adhocFilter.subject,clause:D.v.Where,operatorId:t,operator:y.nS[t].operation,expressionType:D.A.Sql,datasource:e.datasource})):e.onChange(e.adhocFilter.duplicateWith({operatorId:t,operator:y.nS[t].operation,comparator:l,expressionType:D.A.Simple}))},onComparatorChange:t=>{e.onChange(e.adhocFilter.duplicateWith({comparator:t,expressionType:D.A.Simple}))},isOperatorRelevant:a=(t,l)=>{var i;let r=null==(i=e.datasource.columns)?void 0:i.find(e=>e.column_name===l),n=!!r&&("BOOL"===r.type||"BOOLEAN"===r.type),o=!!r&&("INT"===r.type||"INTEGER"===r.type),a=!!r&&!!r.expression;if(t&&t===y.ux.LatestPartition){let{partitionColumn:t}=e;return t&&l&&l===t}return(!t||t!==y.ux.TemporalRange)&&(t===y.ux.IsTrue||t===y.ux.IsFalse?n||o||a:n?t===y.ux.IsNull||t===y.ux.IsNotNull:e.adhocFilter.clause!==D.v.Having||-1!==y._T.indexOf(t))},clearOperator:()=>{e.onChange(e.adhocFilter.duplicateWith({operatorId:void 0,operator:void 0}))},onDatePickerChange:(t,l)=>{e.onChange(e.adhocFilter.duplicateWith({subject:t,operator:y.ux.TemporalRange,comparator:l,expressionType:D.A.Simple}))}}),[z,R]=(0,n.useState)(e.adhocFilter.comparator),I=(0,n.useRef)(null),[M,N]=(0,n.useState)([]),[L,U]=(0,n.useState)(!1),[j,H]=(0,n.useState)(!1),{advancedDataTypesState:P,subjectAdvancedDataType:q,fetchAdvancedDataTypeValueCallback:V,fetchSubjectAdvancedDataType:B}=(e=>{let[t,l]=(0,n.useState)(A),[i,r]=(0,n.useState)(),o=(0,n.useCallback)((t,i,r)=>{let n=(0,w.A)(t);r?F()(()=>{let t=Y().encode({type:r,values:n}),o=`/api/v1/advanced_data_type/convert?q=${t}`;c.A.get({endpoint:o}).then(({json:t})=>{l({parsedAdvancedDataType:t.result.display_value,advancedDataTypeOperatorList:t.result.valid_filter_operators,errorMessage:t.result.error_message}),e(!t.result.error_message)}).catch(()=>{l({parsedAdvancedDataType:"",advancedDataTypeOperatorList:i.advancedDataTypeOperatorList,errorMessage:(0,u.t)("Failed to retrieve advanced type")}),e(!1)})},600)():l(A)},[e]);return{advancedDataTypesState:t,subjectAdvancedDataType:i,setAdvancedDataTypesState:l,fetchAdvancedDataTypeValueCallback:o,fetchSubjectAdvancedDataType:(0,n.useCallback)((e,t,l)=>{let i=e.find(e=>"column_name"in e&&e.column_name===t||"optionName"in e&&e.optionName===t);i&&"advanced_data_type"in i?r(i.advanced_data_type):l(!0)},[])}})(e.validHandler),W=(e,t)=>q?h(e,t)&&P.advancedDataTypeOperatorList.includes(e):h(e,t),G=()=>{let e,t=(e=Array.isArray(z)?z.filter(e=>M.includes(e)).length:0,M?M.length-e:0),l=(0,u.t)("%s option(s)",t);return t?l:""},K=e.options,{subject:Q,operator:X,operatorId:J}=e.adhocFilter,Z="string"==typeof Q?Q:Q&&"column_name"in Q?Q.column_name:void 0,ee={ariaLabel:(0,u.t)("Select subject"),value:Z,onChange:e=>{R(void 0),s(e)},notFoundContent:(0,u.t)("No such column found. To filter on a metric, try the Custom SQL tab."),autoFocus:!Q,placeholder:""};ee.placeholder=e.adhocFilter.clause===D.v.Where?(0,u.t)("%s column(s)",K.length):(0,u.t)("To filter on a metric, use Custom SQL tab."),K=e.options.filter(e=>"column_name"in e&&e.column_name);let et="string"==typeof Q?Q:"",el={placeholder:(0,u.t)("%s operator(s)",(null!=(t=e.operators)?t:y.RX).filter(e=>W(e,et)).length),value:J,onChange:d,autoFocus:!!ee.value&&!X,ariaLabel:(0,u.t)("Select operator")},ei=!!ee.value&&!!el.value,er={allowClear:!0,allowNewOptions:!0,ariaLabel:(0,u.t)("Comparator option"),mode:J&&y.sJ.has(J)?"multiple":"single",loading:L,value:z,onChange:_,notFoundContent:(0,u.t)("Type a value here"),disabled:void 0!==J&&y.Sd.includes(J),placeholder:G()},en=null!=z&&""!==z&&(Array.isArray(z)?z.length>0:String(z).length>0)?G():"",eo=(0,$.w)({columnName:"string"==typeof e.adhocFilter.subject?e.adhocFilter.subject:void 0,timeRange:e.adhocFilter.operator===y.ux.TemporalRange?e.adhocFilter.comparator:void 0,datasource:e.datasource,onChange:T});(0,n.useEffect)(()=>{eo||(()=>{let{datasource:t}=e,l=e.adhocFilter.subject,i=e.adhocFilter.clause===D.v.Having;if(l&&t&&t.filter_select&&!i){let e=new AbortController,{signal:i}=e;L&&e.abort(),U(!0),c.A.get({signal:i,endpoint:`/api/v1/datasource/${t.type}/${t.id}/column/${l}/values/`}).then(({json:e})=>{N(e.result.map(e=>({value:e,label:(0,S.ed)(e)}))),U(!1)}).catch(()=>{N([]),U(!1)})}})()},[e.adhocFilter.subject,e.adhocFilter.clause,e.datasource,eo]),(0,n.useEffect)(()=>{(0,f.G7)(f.TO.EnableAdvancedDataTypes)&&B(e.options,e.adhocFilter.subject,e.validHandler)},[e.adhocFilter.subject,e.options,e.validHandler,B]),(0,n.useEffect)(()=>{(0,f.G7)(f.TO.EnableAdvancedDataTypes)&&V(void 0===z?"":"string"==typeof z?z:String(z),P,q)},[z,q,V]),(0,n.useEffect)(()=>{(0,f.G7)(f.TO.EnableAdvancedDataTypes)&&R(e.adhocFilter.comparator)},[e.adhocFilter.comparator]),(0,n.useEffect)(()=>{ei&&!j&&I.current&&(I.current.focus(),H(!0)),ei||H(!1)},[ei,j]);let ea=(0,p.useTheme)(),es=(0,r.Y)(o.A,E({css:{marginTop:4*ea.sizeUnit,marginBottom:4*ea.sizeUnit},"data-test":"select-element",options:K.map(e=>({value:"column_name"in e&&e.column_name||"optionName"in e&&e.optionName||"",key:"id"in e&&e.id||"optionName"in e&&e.optionName||void 0,label:(0,r.Y)(x.A,{option:e})}))},ee)),ed=(0,r.FD)(r.FK,{children:[(0,r.Y)(o.A,E({options:(null!=(l=e.operators)?l:y.RX).filter(e=>W(e,et)).map((e,t)=>({value:e,label:y.nS[e].display,key:e,order:t}))},el)),J&&y.sJ.has(J)||M.length>0?(0,r.Y)(m.m,{title:P.errorMessage||P.parsedAdvancedDataType,children:(0,r.Y)(O,E({css:(0,b.AH)`
              margin-top: ${4*ea.sizeUnit}px;
            `,labelText:en,options:M},er))}):(0,r.FD)(m.m,{title:P.errorMessage||P.parsedAdvancedDataType,children:[(0,r.Y)("div",{css:(0,b.AH)`
              margin-top: ${4*ea.sizeUnit}px;
            `}),(0,r.Y)(v.Input,{"data-test":"adhoc-filter-simple-value",name:"filter-value",ref:I,onChange:e=>{let{value:t}=e.target;R(t),_(t)},value:"string"==typeof z?z:void 0,placeholder:(0,u.t)("Filter value (case sensitive)"),disabled:void 0!==J&&y.Sd.includes(J)})]})]});return(0,r.FD)(r.FK,{children:[es,null!=eo?eo:ed]})};var R=l(26530),I=l(84386),M=l(76450),N=((i={}).COLUMN="column",i.METRIC="metric",i.WHERE="where",i.HAVING="having",i);let L=(0,p.styled)(o.A)`
  ${({theme:e})=>`
    width: ${30*e.sizeUnit}px;
    marginRight: ${e.sizeUnit}px;
  `}
`;function U({adhocFilter:e,onChange:t,options:l,height:i,datasource:o}){let a=(0,n.useRef)(null),s=(0,p.useTheme)();(0,n.useEffect)(()=>{var e;null==(e=a.current)||e.resize()},[e]);let d=(0,n.useMemo)(()=>R.A.concat((0,I.r)(l.filter(e=>"object"==typeof e&&null!==e&&"column_name"in e&&"string"==typeof e.column_name&&"type"in e))),[l]),c=(0,n.useMemo)(()=>Object.values(D.v).map(e=>({label:e,value:e})),[]);return(0,r.FD)("span",{children:[(0,r.FD)("div",{className:"filter-edit-clause-section",children:[(0,r.Y)("div",{children:(0,r.Y)(L,{options:c,ariaLabel:(0,u.t)("Select column"),placeholder:(0,u.t)("choose WHERE or HAVING..."),value:e.clause,onChange:l=>{t(e.duplicateWith({clause:l,expressionType:D.A.Sql}))}})}),(0,r.FD)("span",{className:"filter-edit-clause-info",children:[(0,r.Y)("strong",{children:"WHERE"})," ",(0,u.t)("Filters by columns"),(0,r.Y)("br",{}),(0,r.Y)("strong",{children:"HAVING"})," ",(0,u.t)("Filters by metrics")]})]}),(0,r.Y)("div",{css:(0,b.AH)`
          margin-top: ${4*s.sizeUnit}px;
        `,children:(0,r.Y)(M.A,{ref:a,keywords:d,height:`${i-130}px`,onChange:l=>{t(e.duplicateWith({sqlExpression:l,expressionType:D.A.Sql}))},width:"100%",lineNumbers:!1,value:e.sqlExpression||e.translateToSql(),wordWrap:!0,showValidation:!0,expressionType:"HAVING"===e.clause?N.HAVING:N.WHERE,datasourceId:null==o?void 0:o.id,datasourceType:null==o?void 0:o.type})})]})}var j=l(23805),H=l.n(j);function P(){return(P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i])}return e}).apply(this,arguments)}function q(e,t){if(null==e)return{};var l,i,r={},n=Object.getOwnPropertyNames(e);for(i=0;i<n.length;i++)l=n[i],!(t.indexOf(l)>=0)&&Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l]);return r}let V=p.styled.div`
  .adhoc-filter-edit-tabs > .nav-tabs {
    margin-bottom: ${({theme:e})=>2*e.sizeUnit}px;

    & > li > a {
      padding: ${({theme:e})=>e.sizeUnit}px;
    }
  }

  #filter-edit-popover {
    max-width: none;
  }

  .filter-edit-clause-info {
    font-size: ${({theme:e})=>e.fontSizeXS}px;
  }

  .filter-edit-clause-section {
    display: flex;
    flex-direction: row;
    gap: ${({theme:e})=>5*e.sizeUnit}px;
  }

  .adhoc-filter-simple-column-dropdown {
    margin-top: ${({theme:e})=>5*e.sizeUnit}px;
  }
`,B=p.styled.div`
  margin-top: ${({theme:e})=>2*e.sizeUnit}px;
`,W=p.styled.div`
  margin-top: ${({theme:e})=>2*e.sizeUnit}px;
  margin-bottom: ${({theme:e})=>12*e.sizeUnit}px;
`;class G extends n.Component{componentDidMount(){var e;document.addEventListener("mouseup",this.onMouseUp);let t=null==(e=this.props.adhocFilter)?void 0:e.deck_slices;t&&t.length>0&&this.loadLayerOptions(0,100).then(e=>{var t;this.setState({layerOptions:e.data});let l=null==(t=this.props.adhocFilter)?void 0:t.layerFilterScope;if(l){let t=l.map(t=>e.data.find(e=>e.value===t));this.setState({selectedLayers:t.filter(Boolean)})}})}componentWillUnmount(){document.removeEventListener("mouseup",this.onMouseUp),document.removeEventListener("mousemove",this.onMouseMove)}onAdhocFilterChange(e){this.setState({adhocFilter:e})}setSimpleTabIsValid(e){this.setState({isSimpleTabValid:e})}onSave(){let e=this.state.adhocFilter.deck_slices;if(!(e&&e.length>0)){this.props.onChange(this.state.adhocFilter),this.props.onClose();return}let t=this.state.selectedLayers.map(e=>H()(e)?e.value:e),l=this.state.adhocFilter.duplicateWith({layerFilterScope:t});this.setState({hasLayerFilterScopeChanged:!1}),this.props.onChange(l),this.props.onClose()}onDragDown(e){this.dragStartX=e.clientX,this.dragStartY=e.clientY,this.dragStartWidth=this.state.width,this.dragStartHeight=this.state.height,document.addEventListener("mousemove",this.onMouseMove)}onMouseMove(e){this.props.onResize(),this.setState({width:Math.max(this.dragStartWidth+(e.clientX-this.dragStartX),y._R),height:Math.max(this.dragStartHeight+(e.clientY-this.dragStartY),y.Z_)})}onMouseUp(){document.removeEventListener("mousemove",this.onMouseMove)}onTabChange(e){this.setState({activeKey:e})}adjustHeight(e){this.setState(t=>({height:t.height+e}))}loadLayerOptions(e,t){let l=Y().encode({columns:["id","slice_name","viz_type"],filters:[{col:"viz_type",opr:"sw",value:"deck"}],page:e,page_size:t,order_column:"slice_name",order_direction:"asc"});return c.A.get({endpoint:`/api/v1/chart/?q=${l}`}).then(e=>{var t,l;if(!(null==e||null==(t=e.json)?void 0:t.result))return{data:[{id:null,value:-1,label:"All"}],totalCount:1};let i=(null==(l=this.props.adhocFilter)?void 0:l.deck_slices)||[],r=[{id:null,value:-1,label:"All"},...e.json.result.map(e=>{let t=i.indexOf(e.id);return{id:e.id,value:t>=0?t:e.id,label:e.slice_name,sliceIndex:t}}).filter(e=>-1!==e.sliceIndex).map(e=>{let{sliceIndex:t}=e;return q(e,["sliceIndex"])})];return{data:r,totalCount:r.length}})}onLayerChange(e){let t=e||[];if(e&&0!==e.length){if(e.length>1&&e.some(e=>"object"==typeof e&&-1===e.value||-1===e)){let l=e[e.length-1];t="object"==typeof l&&-1===l.value||-1===l?[{id:null,value:-1,label:"All"}]:e.filter(e=>-1!==e.value)}}else t=[{id:null,value:-1,label:"All"}];this.setState({selectedLayers:t}),this.setState({hasLayerFilterScopeChanged:!0})}render(){let e=this.props,{adhocFilter:t,options:l,onChange:i,onClose:n,onResize:c,datasource:p,partitionColumn:m,theme:v,operators:g,requireSave:f}=e,b=q(e,["adhocFilter","options","onChange","onClose","onResize","datasource","partitionColumn","theme","operators","requireSave"]),{adhocFilter:y,selectedLayers:x,hasLayerFilterScopeChanged:S}=this.state,C=y.isValid(),w=f||!y.equals(t)||S,_=y.deck_slices,F=_&&_.length>0;return(0,r.FD)(V,P({id:"filter-edit-popover"},b,{"data-test":"filter-edit-popover",ref:this.popoverContentRef,children:[(0,r.Y)(h.Ay,{id:"adhoc-filter-edit-tabs",defaultActiveKey:y.expressionType,className:"adhoc-filter-edit-tabs","data-test":"adhoc-filter-edit-tabs",style:{minHeight:this.state.height,width:this.state.width},allowOverflow:!0,onChange:this.onTabChange,items:[{key:D.A.Simple,label:(0,u.t)("Simple"),children:(0,r.Y)(d.tH,{children:(0,r.Y)(z,{operators:g,adhocFilter:this.state.adhocFilter,onChange:this.onAdhocFilterChange,options:l,datasource:p,onHeightChange:this.adjustHeight,partitionColumn:m,popoverRef:this.popoverContentRef.current,validHandler:this.setSimpleTabIsValid})})},{key:D.A.Sql,label:(0,u.t)("Custom SQL"),children:(0,r.Y)(d.tH,{children:(0,r.Y)(U,{adhocFilter:this.state.adhocFilter,onChange:this.onAdhocFilterChange,options:this.props.options,height:this.state.height,datasource:p})})}]}),F&&(0,r.Y)(W,{children:(0,r.Y)(o.A,{options:this.state.layerOptions,onChange:this.onLayerChange,value:x,mode:"multiple"})}),(0,r.FD)(B,{children:[(0,r.Y)(a.$n,{buttonStyle:"secondary",buttonSize:"small",onClick:this.props.onClose,cta:!0,children:(0,u.t)("Close")}),(0,r.Y)(a.$n,{"data-test":"adhoc-filter-edit-popover-save-button",disabled:!C||!this.state.isSimpleTabValid||!w,buttonStyle:"primary",buttonSize:"small",onClick:this.onSave,cta:!0,children:(0,u.t)("Save")}),(0,r.Y)(s.F.ArrowsAltOutlined,{role:"button","aria-label":(0,u.t)("Resize"),tabIndex:0,onMouseDown:this.onDragDown,className:"edit-popover-resize"})]})]}))}constructor(e){var t,l;super(e),this.dragStartX=0,this.dragStartY=0,this.dragStartWidth=0,this.dragStartHeight=0,this.onSave=this.onSave.bind(this),this.onDragDown=this.onDragDown.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.onMouseUp=this.onMouseUp.bind(this),this.onAdhocFilterChange=this.onAdhocFilterChange.bind(this),this.setSimpleTabIsValid=this.setSimpleTabIsValid.bind(this),this.adjustHeight=this.adjustHeight.bind(this),this.onTabChange=this.onTabChange.bind(this),this.loadLayerOptions=this.loadLayerOptions.bind(this),this.onLayerChange=this.onLayerChange.bind(this),this.state={adhocFilter:this.props.adhocFilter,width:y._R,height:y.Z_,activeKey:(null==(l=this.props)||null==(t=l.adhocFilter)?void 0:t.expressionType)||"SIMPLE",isSimpleTabValid:!0,selectedLayers:[{id:null,value:-1,label:"All"}],layerOptions:[],hasLayerFilterScopeChanged:!1},this.popoverContentRef=(0,n.createRef)()}}var K=l(46142),Q=l(79330);class X extends n.PureComponent{onPopoverResize(){this.forceUpdate()}closePopover(){this.togglePopover(!1)}togglePopover(e){this.setState({popoverVisible:e})}render(){let{adhocFilter:e,isControlledComponent:t}=this.props,{visible:l,togglePopover:i,closePopover:n}=t?{visible:this.props.visible,togglePopover:this.props.togglePopover,closePopover:this.props.closePopover}:{visible:this.state.popoverVisible,togglePopover:this.togglePopover,closePopover:this.closePopover},o=(0,r.Y)(K.y,{children:(0,r.Y)(G,{adhocFilter:e,options:this.props.options,datasource:this.props.datasource,partitionColumn:this.props.partitionColumn,onResize:this.onPopoverResize,onClose:null!=n?n:()=>{},sections:this.props.sections,operators:this.props.operators,onChange:this.props.onFilterEdit,requireSave:this.props.requireSave})});return(0,r.Y)(Q.A,{trigger:"click",content:o,defaultOpen:l,open:l,onOpenChange:i,destroyTooltipOnHide:!0,children:this.props.children})}constructor(e){super(e),this.onPopoverResize=this.onPopoverResize.bind(this),this.closePopover=this.closePopover.bind(this),this.togglePopover=this.togglePopover.bind(this),this.state={popoverVisible:!1}}}let J=X},36255(e,t,l){l.d(t,{A:()=>n,v:()=>o});var i,r,n=((i={}).Simple="SIMPLE",i.Sql="SQL",i),o=((r={}).Having="HAVING",r.Where="WHERE",r)},69534(e,t,l){l.d(t,{w:()=>v,K:()=>s});var i=l(24002),r=l(95235),n=l(13845),o=l(38187),a=l(36255);let s=e=>{let[t,l]=(0,i.useState)({});return(0,i.useEffect)(()=>{(e.operator!==o.ux.TemporalRange||e.expressionType!==a.A.Simple)&&l({}),e.operator===o.ux.TemporalRange&&e.comparator===r.WC&&l({actualTimeRange:`${e.subject} (${r.WC})`,title:r.WC}),e.operator===o.ux.TemporalRange&&e.expressionType===a.A.Simple&&e.comparator!==r.WC&&t.title!==e.comparator&&(0,n.x9)(e.comparator,e.subject).then(({value:t,error:i})=>{i?l({actualTimeRange:`${e.subject} (${e.comparator})`,title:i}):l({actualTimeRange:null!=t?t:"",title:e.comparator})})},[e]),t};var d=l(2445),c=l(22567),u=l(95927),p=l(83040),h=l(3795),m=l(92797);let v=({columnName:e,timeRange:t,datasource:l,onChange:i})=>{let r=(0,u.a)().get("filter.dateFilterControl"),n=null!=r?r:h.A;return e&&(0,p.D)(e,l)?(0,d.FD)(d.FK,{children:[(0,d.Y)(m.A,{label:(0,c.t)("Time Range")}),(0,d.Y)(n,{value:t,name:"time_range",onChange:t=>i(null!=e?e:"",t)})]}):void 0}},31239(e,t,l){l.d(t,{e:()=>a});var i=l(40568),r=l(38187),n=l(10175);let o={"==":"=","!=":"<>",">":">","<":"<",">=":">=","<=":"<=",IN:"IN","NOT IN":"NOT IN",LIKE:"LIKE",ILIKE:"ILIKE",REGEX:"REGEX","IS NOT NULL":"IS NOT NULL","IS NULL":"IS NULL","IS TRUE":"IS TRUE","IS FALSE":"IS FALSE","LATEST PARTITION":({datasource:e})=>`= '{{ presto.latest_partition('${e.schema}.${e.datasource_name}') }}'`},a=(e,{useSimple:t}={useSimple:!1})=>{if((0,i.md)(e)||t){let{subject:t,operator:l}=e,i="comparator"in e?e.comparator:void 0,a=l&&l===r.nS[r.ux.LatestPartition].operation?o[l](e):o[l];return(0,n.zJ)(t,a,i)}return(0,i.wF)(e)?e.sqlExpression:""}},36505(e,t,l){l.d(t,{Ay:()=>s,jz:()=>d,tA:()=>n});var i=l(38187);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i])}return e}).apply(this,arguments)}let n={SIMPLE:"SIMPLE",SQL:"SQL"};function o(e){if(e.sqlExpression&&i.Vw.test(e.sqlExpression)){let t=e.sqlExpression.indexOf(")"),l=e.sqlExpression.substring(0,t).lastIndexOf("(");if(t>0&&l>0)return e.sqlExpression.substring(l+1,t)}return null}function a(e){if(e.sqlExpression&&i.Vw.test(e.sqlExpression)){let t=e.sqlExpression.indexOf("(");if(t>0)return e.sqlExpression.substring(0,t)}return null}class s{getDefaultLabel(){return this.translateToSql({useVerboseName:!0})}translateToSql(e={useVerboseName:!1,transformCountDistinct:!1}){var t,l,r;if(this.expressionType===n.SIMPLE){let r=this.aggregate||"",n=e.useVerboseName&&(null==(t=this.column)?void 0:t.verbose_name)?`(${this.column.verbose_name})`:(null==(l=this.column)?void 0:l.column_name)?`(${this.column.column_name})`:"";return e.transformCountDistinct&&r===i.dq.COUNT_DISTINCT&&/^\(.*\)$/.test(n)?`COUNT(DISTINCT ${n.slice(1,-1)})`:r+n}return this.expressionType===n.SQL&&null!=(r=this.sqlExpression)?r:""}duplicateWith(e){return new s(r({},this,e))}equals(e){return e.label===this.label&&e.expressionType===this.expressionType&&e.sqlExpression===this.sqlExpression&&e.aggregate===this.aggregate&&(e.column&&e.column.column_name)===(this.column&&this.column.column_name)}isValid(){return this.expressionType===n.SIMPLE?!!(this.column&&this.aggregate):this.expressionType===n.SQL&&!!this.sqlExpression}inferSqlExpressionAggregate(){return a(this)}inferSqlExpressionColumn(){return o(this)}constructor(e){var t,l;if(this.expressionType=e.expressionType||n.SIMPLE,this.expressionType===n.SIMPLE){const t=o(e);this.column=null!=(l=e.column)?l:t?{column_name:t}:null,this.aggregate=e.aggregate||a(e),this.sqlExpression=null}else this.expressionType===n.SQL&&(this.sqlExpression=e.sqlExpression,this.column=null,this.aggregate=null);this.datasourceWarning=!!e.datasourceWarning,this.hasCustomLabel=!!(e.hasCustomLabel&&e.label),this.label=this.hasCustomLabel&&null!=(t=e.label)?t:this.getDefaultLabel(),this.optionName=e.optionName||`metric_${Math.random().toString(36).substring(2,15)}_${Math.random().toString(36).substring(2,15)}`}}function d(e){return"object"==typeof e&&null!==e&&!(e instanceof s)&&("expressionType"in e||"column"in e||"aggregate"in e||"sqlExpression"in e||"metric_name"in e)}},44856(e,t,l){l.d(t,{A:()=>n});var i=l(2445),r=l(45760);function n({option:e}){return e.saved_metric_name?(0,i.Y)(r.V,{column:{column_name:e.saved_metric_name,type:"metric"},showType:!0}):e.column_name?(0,i.Y)(r.V,{column:e,showType:!0}):e.label?(0,i.Y)(r.V,{column:{column_name:e.label,type:"metric"},showType:!0}):null}},45468(e,t,l){l.d(t,{B3:()=>C,Bt:()=>y,Gh:()=>x,JG:()=>T,JU:()=>f,Px:()=>A,XB:()=>Y,a2:()=>g,f$:()=>F,p6:()=>w,yJ:()=>v});var i=l(2445),r=l(24002),n=l(30535),o=l(26206),a=l(22567),s=l(97371),d=l(17437),c=l(15341),u=l(25358),p=l(40958),h=l(45760);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i])}return e}).apply(this,arguments)}let v=s.styled.div`
  margin-bottom: ${({theme:e})=>e.sizeUnit}px;
  :last-child {
    margin-bottom: 0;
  }
`,g=s.styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  font-size: ${({theme:e})=>e.fontSizeSM}px;
  height: ${({theme:e})=>6*e.sizeUnit}px;
  background-color: ${({theme:e})=>e.colorBgLayout};
  border-radius: 3px;
  cursor: ${({withCaret:e})=>e?"pointer":"default"};
  :hover {
    background-color: ${({theme:e})=>e.colorPrimaryBgHover};
  }
`,f=s.styled.div`
  ${({theme:e})=>`
    display: flex;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    align-items: center;
    white-space: nowrap;
    padding-left: ${e.sizeUnit}px;
    svg {
      margin-right: ${e.sizeUnit}px;
    }
    .type-label {
      margin-right: ${2*e.sizeUnit}px;
      margin-left: ${e.sizeUnit}px;
      font-weight: ${e.fontWeightNormal};
      width: auto;
    }
    .option-label {
      display: inline;
    }
  `}
`,b=s.styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
`,y=s.styled.div`
  height: 100%;
  border-left: solid 1px ${({theme:e})=>e.colorSplit};
  margin-left: auto;
`,x=s.styled.div`
  height: auto;
  width: ${({theme:e})=>6*e.sizeUnit}px;
  border-right: solid 1px ${({theme:e})=>e.colorBorder};
  cursor: pointer;
`,S=(0,s.styled)(p.I)`
  margin: 0 ${({theme:e})=>e.sizeUnit}px;
`,C=s.styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,w=s.styled.div`
  padding: ${({theme:e})=>e.sizeUnit}px;
  border: solid 1px ${({theme:e})=>e.colorSplit};
  border-radius: ${({theme:e})=>e.borderRadius}px;
`,_=(0,d.i7)`
  0% {
    right: 100%;
  }
  50% {
    left: 4px;
  }
  90% {
    right: 4px;
  }
  100% {
    left: 100%;
  }
`,F=s.styled.div`
  ${({theme:e,isLoading:t,canDrop:l,isDragging:i,isOver:r})=>`
  position: relative;
  padding: ${e.sizeUnit}px;
  border: ${!t&&i?`dashed 1px ${l?e.colorSplit:e.colorErrorBgHover}`:`solid 1px ${t&&i?e.colorWarningBgHover:e.colorBorder}`};
  border-radius: ${e.borderRadius}px;
  &:before,
  &:after {
    content: ' ';
    position: absolute;
    border-radius: ${e.borderRadius}px;
  }
  &:before {
    display: ${i||t?"block":"none"};
    background-color: ${l?e.colorPrimary:e.colorErrorBgHover};
    z-index: 10;
    opacity: 10%;
    top: 1px;
    right: 1px;
    bottom: 1px;
    left: 1px;
  }
  &:after {
    display: ${t||l&&r?"block":"none"};
    background-color: ${t?e.colorFillTertiary:e.colorPrimary};
    z-index: 11;
    opacity: 35%;
    top: ${-e.sizeUnit}px;
    right: ${-e.sizeUnit}px;
    bottom: ${-e.sizeUnit}px;
    left: ${-e.sizeUnit}px;
    cursor: ${t?"wait":"auto"};
  }
  `}

  &:before {
    ${({theme:e,isLoading:t})=>t&&(0,d.AH)`
        animation: ${_} 2s ease-in infinite;
        background: linear-gradient(currentColor 0 0) 0 100%/0% 3px no-repeat;
        background-size: 100% ${e.sizeUnit/2}px;
        top: auto;
        right: ${e.sizeUnit}px;
        left: ${e.sizeUnit}px;
        bottom: -${e.sizeUnit/2}px;
        height: ${e.sizeUnit/2}px;
      `};
  }
`,T=s.styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: ${({theme:e})=>6*e.sizeUnit}px;
  padding-left: ${({theme:e})=>e.sizeUnit}px;
  font-size: ${({theme:e})=>e.fontSizeSM}px;
  color: ${({theme:e})=>e.colorTextSecondary};
  border: dashed 1px ${({theme:e})=>e.colorSplit};
  border-radius: ${({theme:e})=>e.borderRadius}px;
  cursor: ${({cancelHover:e})=>e?"inherit":"pointer"};

  :hover {
    background-color: ${({cancelHover:e,theme:t})=>e?"inherit":t.colorFillSecondary};
  }

  :active {
    background-color: ${({cancelHover:e,theme:t})=>e?"inherit":t.colorFillTertiary};
  }
  svg {
    margin-right: ${({theme:e})=>e.sizeUnit}px;
  }
`,Y=s.styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({theme:e})=>4*e.sizeUnit}px;
  width: ${({theme:e})=>4*e.sizeUnit}px;
  padding: 0;
  background-color: ${({theme:e})=>e.colorPrimaryText};
  border: none;
  border-radius: 2px;
  cursor: pointer;

  :disabled {
    cursor: not-allowed;
    background-color: ${({theme:e})=>e.colorBgContainerDisabled};
  }
`,A=e=>{let t,{label:l,savedMetric:p,adhocMetric:C,onRemove:w,onMoveLabel:_,onDropLabel:F,withCaret:T,isFunction:Y,type:A,index:$,isExtra:k,datasourceWarningMessage:D,tooltipTitle:E,multi:O=!0}=e,z=function(e,t){if(null==e)return{};var l,i,r={},n=Object.getOwnPropertyNames(e);for(i=0;i<n.length;i++)!(t.indexOf(l=n[i])>=0)&&Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l]);return r}(e,["label","savedMetric","adhocMetric","onRemove","onMoveLabel","onDropLabel","withCaret","isFunction","type","index","isExtra","datasourceWarningMessage","tooltipTitle","multi"]),R=(0,s.useTheme)(),I=(0,r.useRef)(null),M=(0,r.useRef)(null),N=null==p?void 0:p.metric_name,[,L]=(0,o.H)({accept:A,drop(){O&&(null==F||F())},hover(e,t){var l;if(!O||!I.current)return;let{dragIndex:i}=e;if(i===$)return;let r=null==(l=I.current)?void 0:l.getBoundingClientRect(),n=(r.bottom-r.top)/2,o=t.getClientOffset(),a=(null==o?void 0:o.y)?(null==o?void 0:o.y)-r.top:0;i<$&&a<n||i>$&&a>n||(null==_||_(i,$),e.dragIndex=$)}}),[{isDragging:U},j]=(0,n.i)({item:{type:A,dragIndex:$,value:(null==p?void 0:p.metric_name)?p:C},collect:e=>({isDragging:e.isDragging()})});return j(L(I)),(0,i.Y)(v,{ref:I,children:(0,i.FD)(g,m({withCaret:T,"data-test":"option-label"},z,{css:(0,d.AH)`
        text-align: center;
      `,children:[(0,i.Y)(x,{role:"button","data-test":"remove-control-button",onClick:w,children:(0,i.Y)(c.F.CloseOutlined,{iconSize:"m",iconColor:R.colorIcon,css:(0,d.AH)`
            vertical-align: sub;
          `})}),(0,i.FD)(f,{"data-test":"control-label",children:[Y&&(0,i.Y)(c.F.FunctionOutlined,{iconSize:"m"}),(t=!U&&"string"==typeof l&&E&&l&&E!==l||!U&&M&&M.current&&M.current.scrollWidth>M.current.clientWidth,p&&N?(0,i.Y)(h.b,{metric:p,labelRef:M,shouldShowTooltip:!U}):t?(0,i.Y)(u.m,{title:E||l,children:(0,i.Y)(b,{ref:M,children:l})}):(0,i.Y)(b,{ref:M,children:l}))]}),(!!D||k)&&(0,i.Y)(S,{type:"warning",placement:"top",tooltip:D||(0,a.t)(`
                This filter was inherited from the dashboard's context.
                It won't be saved when saving the chart.
              `)}),T&&(0,i.Y)(y,{children:(0,i.Y)(c.F.RightOutlined,{iconSize:"m",css:(0,d.AH)`
              margin: ${R.sizeUnit}px;
            `,iconColor:R.colorIcon})})]}))})}},41195(e,t,l){l.d(t,{A:()=>F});var i=l(2445),r=l(24002),n=l(61225),o=l(58561),a=l.n(o),s=l(22567),d=l(48014),c=l(97371),u=l(22022),p=l(15341),h=l(1125),m=l(81975),v=l(10658),g=l(68362),f=l(52996),b=l(5296),y=l(61574);function x(e,t,l,i,r,n,o){try{var a=e[n](o),s=a.value}catch(e){l(e);return}a.done?t(s):Promise.resolve(s).then(i,r)}let S=c.styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`,C=(0,c.styled)(b.Ay)`
  flex: 1;
`,w=c.styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,_={keys:["none"],columns:["database.backend"]},F=e=>{var t;let{sql:l,language:o="sql",datasource:F}=e,T=(0,c.useTheme)(),Y=null==F?void 0:F.split("__")[0],A=(0,n.d4)(e=>{var t,l,i;return null==(i=e.explore)||null==(l=i.datasource)||null==(t=l.database)?void 0:t.backend}),[$,k]=(0,r.useState)(),[D,E]=(0,r.useState)(!0),O=(0,y.W6)(),z=null!=(t=D?$:l)?t:l,R=(0,n.d4)(e=>{var t;return(0,g.L)("menu_access","SQL Lab",null==(t=e.user)?void 0:t.roles)});(0,r.useEffect)(()=>{(0,b.Fq)([o])},[o]);let I=(0,r.useCallback)(()=>{var e;return(e=function*(){if($)return void E(e=>!e);try{let e=A;if(!e){let t=a().encode(_),{backend:l}=(yield d.A.get({endpoint:`/api/v1/dataset/${Y}?q=${t}`})).json.result.database;e=l}let t=yield d.A.post({endpoint:"/api/v1/sqllab/format_sql/",body:JSON.stringify({sql:l,engine:e}),headers:{"Content-Type":"application/json"}});k(t.json.result),E(!0)}catch(e){E(!1)}},function(){var t=this,l=arguments;return new Promise(function(i,r){var n=e.apply(t,l);function o(e){x(n,i,r,o,a,"next",e)}function a(e){x(n,i,r,o,a,"throw",e)}o(void 0)})})()},[l,Y,$]),M=(0,r.useCallback)(e=>{e.metaKey||e.ctrlKey?(e.preventDefault(),window.open((0,f.G)(`/sqllab?datasourceKey=${F}&sql=${encodeURIComponent(z)}`),"_blank")):O.push({pathname:"/sqllab",state:{requestedQuery:{datasourceKey:F,sql:z}}})},[O,F,z]);return(0,r.useEffect)(()=>{I()},[l]),(0,i.Y)(m.Z,{bodyStyle:{padding:4*T.sizeUnit},children:(0,i.FD)(S,{children:[!$&&D?(0,i.Y)(u.Skeleton,{active:!0}):(0,i.Y)(C,{language:o,customStyle:{flex:1,marginBottom:3*T.sizeUnit},children:z}),(0,i.FD)(w,{children:[(0,i.FD)(u.Space,{size:2*T.sizeUnit,children:[(0,i.Y)(v.$r,{text:z,shouldShowText:!1,copyNode:(0,i.Y)(h.$n,{buttonStyle:"secondary",buttonSize:"small",icon:(0,i.Y)(p.F.CopyOutlined,{}),children:(0,s.t)("Copy")})}),R&&(0,i.Y)(h.$n,{buttonStyle:"secondary",buttonSize:"small",onClick:M,children:(0,s.t)("View in SQL Lab")})]}),(0,i.FD)(u.Space,{size:2*T.sizeUnit,align:"center",children:[(0,i.Y)(p.F.ConsoleSqlOutlined,{}),(0,i.Y)(u.Switch,{id:"formatSwitch",checked:D,onChange:I,checkedChildren:(0,s.t)("formatted"),unCheckedChildren:(0,s.t)("original")})]})]})]},l)})}},76456(e,t,l){l.d(t,{A:()=>m});var i=l(2445),r=l(24002),n=l(22567),o=l(87928),a=l(66972),s=l(17436),d=l(97371),c=l(86864),u=l(37370),p=l(41195);let h=d.styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>4*e.sizeUnit}px;
`,m=({latestQueryFormData:e})=>{let[t,l]=(0,r.useState)([]),[d,m]=(0,r.useState)(!1),[v,g]=(0,r.useState)(null);return((0,r.useEffect)(()=>{m(!0),(0,u.getChartDataRequest)({formData:e,resultFormat:"json",resultType:"query"}).then(({json:e})=>{l((0,o.A)(e.result)),m(!1),g(null)}).catch(e=>{(0,a.h4)(e).then(({error:t,message:l})=>{g(t||l||e.statusText||(0,n.t)("Sorry, An error occurred")),m(!1)})})},[JSON.stringify(e)]),d)?(0,i.Y)(c.R,{}):v?(0,i.Y)("pre",{children:v}):(0,i.Y)(h,{children:t.map((t,l)=>(0,i.FD)(r.Fragment,{children:[t.error&&(0,i.Y)(s.F,{type:"error",message:t.error,closable:!1}),t.query&&(0,i.Y)(p.A,{datasource:e.datasource,sql:t.query,language:t.language})]},l))})}},82356(e,t,l){l.d(t,{t3:()=>N,oU:()=>L});var i=l(2445),r=l(24002),n=l(61225),o=l(18088),a=l(34969),s=l(43702),d=l(97371),c=l(17437),u=l(22567),p=l(1125),h=l(22022),m=l(15341),v=l(53960),g=l(43361),f=l(21476),b=l(14621),y=l(32415),x=l(10175),S=l(50279),C=l(11540),w=l(4255),_=l(63613),F=l(84821),T=l(23111),Y=l(45380),A=l(83153),$=l(61983),k=l(76456),D=l(5530),E=l(71519);function O(e,t,l,i,r,n,o){try{var a=e[n](o),s=a.value}catch(e){l(e);return}a.done?t(s):Promise.resolve(s).then(i,r)}function z(e){return function(){var t=this,l=arguments;return new Promise(function(i,r){var n=e.apply(t,l);function o(e){O(n,i,r,o,a,"next",e)}function a(e){O(n,i,r,o,a,"throw",e)}o(void 0)})}}function R(){return(R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i])}return e}).apply(this,arguments)}let I="export_to_csv",M=[a.Y.PivotTable],N=d.styled.div`
  ${({theme:e})=>(0,c.AH)`
    display: flex;
    align-items: center;

    & svg {
      width: ${3*e.sizeUnit}px;
      height: ${3*e.sizeUnit}px;
    }

    & span[role='checkbox'] {
      display: inline-flex;
      margin-right: ${e.sizeUnit}px;
    }
  `}
`;(0,d.styled)(p.$n)`
  ${({theme:e})=>(0,c.AH)`
    width: ${8*e.sizeUnit}px;
    height: ${8*e.sizeUnit}px;
    padding: 0;
    border: 1px solid ${e.colorPrimary};

    &.ant-btn > span.anticon {
      line-height: 0;
      transition: inherit;
    }

    &:hover:not(:focus) > span.anticon {
      color: ${e.colorPrimary};
    }
  `}
`;let L=(e,t,a,p,O,N,L,U,j,...H)=>{var P,q;let V=(0,d.useTheme)(),{addDangerToast:B,addSuccessToast:W}=(0,b.Yf)(),G=(0,n.wA)(),[K,Q]=(0,r.useState)(!1),[X,J]=(0,r.useState)(""),Z=(0,o.Q)(X,300),ee=(0,n.d4)(e=>{var t;return e.explore?null==(t=e.charts)?void 0:t[(0,x.kD)(e.explore)]:void 0}),et=(0,n.d4)(e=>{var t,l;return(null==(l=e.common)||null==(t=l.conf)?void 0:t.CSV_STREAMING_ROW_THRESHOLD)||y.l8}),el=(0,n.d4)(e=>{var t,l;let i=e.explore?(0,x.kD)(e.explore):void 0;return null!=i?null==(l=e.explore)||null==(t=l.chartStates)?void 0:t[i]:void 0}),ei=(0,n.d4)(e=>{var t,l;return null!=(t=null==(l=e.explore)?void 0:l.can_export_image)&&t}),er=!t,en=!ei,eo=e=>er?(0,i.FD)("span",{children:[e,(0,i.Y)(F.C,{title:(0,u.t)("You don't have permission to export data")})]}):e,ea=e=>en?(0,i.FD)("span",{children:[e,(0,i.Y)(F.C,{title:(0,u.t)("You don't have permission to export images")})]}):e,[es,ed]=(0,r.useState)(!1),{progress:ec,isExporting:eu,startExport:ep,cancelExport:eh,resetExport:em,retryExport:ev}=(0,$.K)({onComplete:()=>{},onError:()=>{B((0,u.t)("Export failed - please try again"))}}),eg=(0,r.useCallback)(()=>{ed(!1),em()},[em]),ef=(0,r.useCallback)(()=>{W((0,u.t)("CSV file downloaded successfully"))},[W]),eb=(0,_.k)({chart:ee,showReportModal:U,setCurrentReportDeleting:j}),{datasource:ey}=e,ex=(({chartId:e,dashboards:t=[],searchTerm:l=""})=>{let n=(0,d.useTheme)(),o=(0,r.useMemo)(()=>l?t.filter(e=>e.dashboard_title.toLowerCase().includes(l.toLowerCase())):t,[t,l]),a=e?`?focused_chart=${e}`:"",s=0===t.length,p=l&&0===o.length;return(0,r.useMemo)(()=>{let e=[];return s?e.push({key:"no-dashboards",label:(0,u.t)("None"),disabled:!0}):p?e.push({key:"no-results",label:(0,u.t)("No results found"),disabled:!0}):o.forEach(t=>{e.push({key:String(t.id),label:(0,i.FD)(E.N_,{target:"_blank",rel:"noreferer noopener",to:`/superset/dashboard/${t.id}${a}`,css:(0,c.AH)`
                display: flex;
                flex-direction: row;
                align-items: center;
                width: 200px;
                justify-self: center;
              `,children:[(0,i.Y)("div",{css:(0,c.AH)`
                  white-space: normal;
                  flex: 1;
                `,children:t.dashboard_title}),(0,i.Y)(m.F.Full,{iconSize:"l",css:{marginLeft:2*n.sizeUnit}})]})})}),e},[o,a,s,p,n.sizeUnit])})({chartId:null==a?void 0:a.slice_id,dashboards:L,searchTerm:Z}),eS=(null!=(P=null==L?void 0:L.length)?P:0)>10,eC=null==e?void 0:e.viz_type,ew=eC?(0,g.A)().get(eC):void 0,e_=!!(null==ew||null==(q=ew.behaviors)?void 0:q.includes("EXPORT_CURRENT_VIEW")),eF=null==el?void 0:el.state,eT=(0,r.useCallback)(()=>z(function*(){try{let t=(0,u.t)("Superset Chart");if(!(null==e?void 0:e.datasource))throw Error("No datasource available");let l=yield(0,C.Kx)(e,void 0,eF);if(!(null==l?void 0:l.url))throw Error("Failed to generate permalink");let i=encodeURIComponent((0,u.t)("%s%s","Check out this chart: ",l.url));window.location.href=`mailto:?Subject=${t}%20&Body=${i}`}catch(e){B((0,u.t)("Sorry, something went wrong. Try again later."))}})(),[B,e,eF]),eY=(0,r.useCallback)(()=>{var l,i,r,n,o;let s,d;if(!t)return null;let c=(null==e?void 0:e.viz_type)==="table",u=null==ee?void 0:ee.queriesResponse,p=(s=c&&u&&u.length>1&&(null==(r=u[1])||null==(i=r.data)||null==(l=i[0])?void 0:l.rowcount)?u[1].data[0].rowcount:u&&(null==(n=u[0])?void 0:n.sql_rowcount)!=null?u[0].sql_rowcount:u&&(null==(o=u[0])?void 0:o.rowcount)!=null?u[0].rowcount:null==e?void 0:e.row_limit)&&s>=et;if(p){let t=new Date,l=t.toISOString().slice(0,10),i=t.toISOString().slice(11,19).replace(/:/g,""),r=`_${l}_${i}`,n=((null==a?void 0:a.slice_name)||e.viz_type||"chart").replace(/[^a-zA-Z0-9_-]/g,"_");d=`${n}${r}.csv`}return(0,x.RY)({formData:e,ownState:N,resultType:"full",resultFormat:"csv",onStartStreamingExport:p?e=>{e.url&&(ed(!0),ep(R({},e,{url:e.url,filename:d,expectedRows:s,exportType:e.exportType})))}:null})},[t,e,N,ee,et,a,ep]),eA=(0,r.useCallback)(()=>t?(0,x.RY)({formData:e,ownState:N,resultType:"post_processed",resultFormat:"csv"}):null,[t,e,N]),e$=(0,r.useCallback)(()=>t?(0,x.RY)({formData:e,ownState:N,resultType:"results",resultFormat:"json"}):null,[t,e,N]),ek=(0,r.useCallback)(()=>t?(0,x.RY)({formData:e,ownState:N,resultType:"results",resultFormat:"xlsx"}):null,[t,e,N]),eD=(0,r.useCallback)(()=>z(function*(){try{if(!(null==e?void 0:e.datasource))throw Error("No datasource available");yield(0,w.A)(()=>z(function*(){let t=yield(0,C.Kx)(e,void 0,eF);if(!(null==t?void 0:t.url))throw Error("Failed to generate permalink");return t.url})()),W((0,u.t)("Copied to clipboard!"))}catch(e){B((0,u.t)("Sorry, something went wrong. Try again later."))}})(),[B,W,e,eF]),eE=(e,t,l)=>{if(!(null==e?void 0:e.length)||!(null==t?void 0:t.length))return;let i=e=>{if(null==e)return"";let t=String(e);return/[",\n]/.test(t)?`"${t.replace(/"/g,'""')}"`:t},r=t.map(e=>{var t,l;return i(null!=(t=null!=(l=e.label)?l:e.key)?t:"")}).join(","),n=e.map(e=>t.map(t=>i(e[t.key])).join(",")).join(`
`),o=new Blob([`${r}
${n}`],{type:"text/csv;charset=utf-8;"}),a=document.createElement("a");a.href=URL.createObjectURL(o),a.download=`${l||"current_view"}.csv`,document.body.appendChild(a),a.click(),document.body.removeChild(a),URL.revokeObjectURL(a.href)};return[(0,r.useMemo)(()=>{let r=[];a&&r.push({key:"edit_properties",label:(0,u.t)("Edit chart properties"),onClick:()=>{O(),Q(!1)}});let n=[];eS&&n.push({key:"dashboard-search",label:(0,i.Y)(h.Input,{allowClear:!0,placeholder:(0,u.t)("Search"),prefix:(0,i.Y)(m.F.SearchOutlined,{iconSize:"l"}),css:(0,c.AH)`
              width: 220px;
              margin: ${2*V.sizeUnit}px ${3*V.sizeUnit}px;
            `,value:X,onChange:e=>J(e.currentTarget.value),onClick:e=>e.stopPropagation()}),disabled:!0}),ex.forEach(e=>{n.push(e)}),r.push({key:"dashboards_added_to",type:"submenu",label:(0,u.t)("On dashboards"),children:n,popupStyle:{maxHeight:"300px",overflow:"auto"}}),r.push({type:"divider"});let o=[];e.viz_type&&M.includes(e.viz_type)?o.push({key:I,label:eo((0,u.t)("Export to original .CSV")),icon:(0,i.Y)(m.F.FileOutlined,{}),disabled:!t,onClick:()=>{eY(),Q(!1),G((0,T.logEvent)(Y.xb,{chartId:null==a?void 0:a.slice_id,chartName:null==a?void 0:a.slice_name}))}},{key:"export_to_csv_pivoted",label:eo((0,u.t)("Export to pivoted .CSV")),icon:(0,i.Y)(m.F.FileOutlined,{}),disabled:!t,onClick:()=>{eA(),Q(!1),G((0,T.logEvent)(Y.vp,{chartId:null==a?void 0:a.slice_id,chartName:null==a?void 0:a.slice_name}))}},{key:"export_to_pivot_xlsx",label:eo((0,u.t)("Export to Pivoted Excel")),icon:(0,i.Y)(m.F.FileOutlined,{}),disabled:!t,onClick:()=>{var e;let t=`#chart-id-${null==a?void 0:a.slice_id}`;(0,A.A)(`${t} .pvtTable`,null!=(e=null==a?void 0:a.slice_name)?e:(0,u.t)("pivoted_xlsx")),Q(!1),G((0,T.logEvent)(Y.k8,{chartId:null==a?void 0:a.slice_id,chartName:null==a?void 0:a.slice_name}))}}):o.push({key:I,label:eo((0,u.t)("Export to .CSV")),icon:(0,i.Y)(m.F.FileOutlined,{}),disabled:!t,onClick:()=>{eY(),Q(!1),G((0,T.logEvent)(Y.xb,{chartId:null==a?void 0:a.slice_id,chartName:null==a?void 0:a.slice_name}))}}),o.push({key:"export_to_json",label:eo((0,u.t)("Export to .JSON")),icon:(0,i.Y)(m.F.FileOutlined,{}),disabled:!t,onClick:()=>{e$(),Q(!1),G((0,T.logEvent)(Y.v2,{chartId:null==a?void 0:a.slice_id,chartName:null==a?void 0:a.slice_name}))}},{key:"export_all_screenshot",label:ea((0,u.t)("Export screenshot (jpeg)")),icon:(0,i.Y)(m.F.FileImageOutlined,{}),disabled:en,onClick:e=>{var t;(0,S.A)(".panel-body .chart-container",null!=(t=null==a?void 0:a.slice_name)?t:(0,u.t)("New chart"),!0,V)(e.domEvent),Q(!1),G((0,T.logEvent)(Y.C7,{chartId:null==a?void 0:a.slice_id,chartName:null==a?void 0:a.slice_name}))}},{key:"export_to_xlsx",label:eo((0,u.t)("Export to Excel")),icon:(0,i.Y)(m.F.FileOutlined,{}),disabled:!t,onClick:()=>{ek(),Q(!1),G((0,T.logEvent)(Y.k8,{chartId:null==a?void 0:a.slice_id,chartName:null==a?void 0:a.slice_name}))}});let d=[{key:"export_current_to_csv",label:eo((0,u.t)("Export to .CSV")),icon:(0,i.Y)(m.F.FileOutlined,{}),disabled:!t,onClick:()=>{var t,l,i,r;if(!(null==e?void 0:e.server_pagination)&&(null==N||null==(l=N.clientView)||null==(t=l.rows)?void 0:t.length)&&(null==N||null==(r=N.clientView)||null==(i=r.columns)?void 0:i.length)){let{rows:e,columns:t}=N.clientView;eE(e,t,(null==a?void 0:a.slice_name)||"current_view")}else(0,x.RY)({formData:e,ownState:N,resultType:"results",resultFormat:"csv"});Q(!1),G((0,T.logEvent)(Y.xb,{chartId:null==a?void 0:a.slice_id,chartName:null==a?void 0:a.slice_name}))}},{key:"export_current_to_json",label:eo((0,u.t)("Export to .JSON")),icon:(0,i.Y)(m.F.FileOutlined,{}),disabled:!t,onClick:()=>{var t,l,i,r;if(!(null==e?void 0:e.server_pagination)&&(null==N||null==(l=N.clientView)||null==(t=l.rows)?void 0:t.length)&&(null==N||null==(r=N.clientView)||null==(i=r.columns)?void 0:i.length)){let{rows:e,columns:t}=N.clientView;((e,t,l)=>{if(!(null==e?void 0:e.length)||!(null==t?void 0:t.length))return;let i=e.map(e=>{let l={};return t.forEach(t=>{l[t.key]=(e=>{if(e instanceof Date)return e.toISOString();if(e&&"object"==typeof e&&"input"in e&&"formatter"in e){var t,l,i;let r=null!=(t=null!=(l=null!=(i=e.input)?i:e.value)?l:null==e.toString?void 0:e.toString.call(e))?t:"";return r instanceof Date?r.toISOString():r}return e})(e[t.key])}),l}),r=new Blob([JSON.stringify({meta:{columns:t.map(e=>{var t;return{key:e.key,label:null!=(t=e.label)?t:e.key}}),count:e.length},data:i},null,2)],{type:"application/json;charset=utf-8;"}),n=document.createElement("a");n.href=URL.createObjectURL(r),n.download=`${l||"current_view"}.json`,document.body.appendChild(n),n.click(),document.body.removeChild(n),URL.revokeObjectURL(n.href)})(e,t,(null==a?void 0:a.slice_name)||"current_view")}else e$();Q(!1),G((0,T.logEvent)(Y.v2,{chartId:null==a?void 0:a.slice_id,chartName:null==a?void 0:a.slice_name}))}},{key:"export_current_screenshot",label:ea((0,u.t)("Export screenshot (jpeg)")),icon:(0,i.Y)(m.F.FileImageOutlined,{}),disabled:en,onClick:e=>{var t;(0,S.A)(".panel-body .chart-container",null!=(t=null==a?void 0:a.slice_name)?t:(0,u.t)("New chart"),!0,V)(e.domEvent),Q(!1),G((0,T.logEvent)(Y.C7,{chartId:null==a?void 0:a.slice_id,chartName:null==a?void 0:a.slice_name}))}},{key:"export_current_xlsx",label:eo((0,u.t)("Export to Excel")),icon:(0,i.Y)(m.F.FileOutlined,{}),disabled:!t,onClick:()=>z(function*(){var t,i,r,n;if(!(null==e?void 0:e.server_pagination)&&(null==N||null==(i=N.clientView)||null==(t=i.rows)?void 0:t.length)&&(null==N||null==(n=N.clientView)||null==(r=n.columns)?void 0:r.length)){let e,{rows:t,columns:i}=N.clientView;yield(e=(null==a?void 0:a.slice_name)||"current_view",z(function*(){if((null==t?void 0:t.length)&&(null==i?void 0:i.length))try{let r=(yield Promise.resolve().then(l.bind(l,3959))).default,n=t.map(e=>{let t={};return i.forEach(l=>{var i,r,n,o,a;let s=e[l.key];s&&"object"==typeof s&&"input"in s&&"formatter"in s?t[null!=(i=l.label)?i:l.key]=s.input instanceof Date?s.input.toISOString():null!=(r=null!=(n=s.input)?n:s.value)?r:"":s instanceof Date?t[null!=(o=l.label)?o:l.key]=s.toISOString():t[null!=(a=l.label)?a:l.key]=s}),t}),o=r.utils.json_to_sheet(n,{skipHeader:!1}),a=r.utils.book_new();r.utils.book_append_sheet(a,o,"Current View");let s=Object.keys(n[0]||{}).map(e=>({wch:Math.max(10,String(e).length+2)}));o["!cols"]=s,r.writeFile(a,`${e||"current_view"}.xlsx`)}catch(l){eE(t,i,e||"current_view"),null==B||B((0,u.t)("Falling back to CSV; Excel export library not available."))}})())}else yield ek();Q(!1),G((0,T.logEvent)(Y.k8,{chartId:null==a?void 0:a.slice_id,chartName:null==a?void 0:a.slice_name}))})()}];r.push({key:"data_export_options",type:"submenu",label:(0,u.t)("Data Export Options"),children:[{key:"export_all_data_group",type:"submenu",label:(0,u.t)("Export All Data"),children:o},...e_?[{key:"export_current_view_group",type:"submenu",label:(0,u.t)("Export Current View"),children:d}]:[]]});let g=[{key:"copy_permalink",label:(0,u.t)("Copy permalink to clipboard"),onClick:()=>{eD(),Q(!1)}},{key:"share_by_email",label:(0,u.t)("Share chart by email"),onClick:()=>{eT(),Q(!1)}}];return(0,s.G7)(s.TO.EmbeddableCharts)&&g.push({key:"embed_code",label:(0,i.Y)(v.g,{triggerNode:(0,i.Y)("div",{"data-test":"embed-code-button",children:(0,u.t)("Embed code")}),modalTitle:(0,u.t)("Embed code"),modalBody:(0,i.Y)(D.A,{formData:e,addDangerToast:B}),maxWidth:`${100*V.sizeUnit}px`,destroyOnHidden:!0,responsive:!0}),onClick:()=>Q(!1)}),r.push({key:"share_submenu",type:"submenu",label:(0,u.t)("Share"),children:g}),r.push({type:"divider"}),eb&&r.push(eb),r.push({key:"view_query",label:(0,i.Y)(v.g,{triggerNode:(0,i.Y)("div",{"data-test":"view-query-menu-item",children:(0,u.t)("View query")}),modalTitle:(0,u.t)("View query"),modalBody:(0,i.Y)(k.A,{latestQueryFormData:e}),draggable:!0,resizable:!0,responsive:!0}),onClick:()=>Q(!1)}),ey&&r.push({key:"run_in_sql_lab",label:(0,u.t)("Run in SQL Lab"),onClick:t=>{var l;p(e,!!(null==(l=t.domEvent)?void 0:l.metaKey)),Q(!1)}}),(0,i.Y)(f.W1,R({selectable:!1,items:r},H))},[B,t,eD,L,ex,X,Z,ey,G,eY,eA,ek,e$,e,p,O,eb,eT,eS,a,V.sizeUnit,N,e_,ei]),K,Q,{isVisible:es,progress:ec,onCancel:eg,onRetry:ev,onDownload:ef}]}},84386(e,t,l){l.d(t,{r:()=>o});var i=l(22567),r=l(99418),n=l(21745);function o(e){return e.map(({column_name:e,verbose_name:t,is_certified:l,certified_by:o,description:a,type:s})=>({name:t||e,value:e,documentation:function({title:e,body:t,footer:l}){let i=`
    <div class="tooltip-detail">
      ${e?`<div class="tooltip-detail-title">${e}</div>`:""}
      ${t?`<div class="tooltip-detail-body">${t}</div>`:""}
      ${l?`<div class="tooltip-detail-footer">${l}</div>`:""}
    </div>
  `;return r.default.sanitize(i)}({title:e,body:`type: ${s||"unknown"}<br />${a?`description: ${a}`:""}`,footer:l?(0,i.t)("Certified by %s",o):void 0}),score:n.v9,meta:"column"}))}},40952(e,t,l){l.d(t,{M:()=>u});var i=l(2445),r=l(24002),n=l(22567),o=l(97371),a=l(17437),s=l(59186),d=l(50566),c=l(8290);let u=({dataset:e})=>{let t=(0,o.useTheme)();return{metadataBar:(0,r.useMemo)(()=>{if((0,c.n)())return null;let l=[];if(e){var r,o;let{changed_on_humanized:t,created_on_humanized:i,description:a,table_name:s,changed_by:c,created_by:u,owners:p}=e,h=(0,n.t)("Not available"),m=`${null!=(r=null==u?void 0:u.first_name)?r:""} ${null!=(o=null==u?void 0:u.last_name)?o:""}`.trim()||h,v=c?`${c.first_name} ${c.last_name}`:h,g=p&&p.length>0?p.map(e=>`${e.first_name} ${e.last_name}`):[h];l.push({type:d.Q.Table,title:s||h}),l.push({type:d.Q.LastModified,value:t||h,modifiedBy:v}),l.push({type:d.Q.Owner,createdBy:m,owners:g,createdOn:i||h}),a&&l.push({type:d.Q.Description,value:a})}return(0,i.Y)("div",{css:(0,a.AH)`
          display: flex;
          margin-bottom: ${4*t.sizeUnit}px;
        `,children:l.length>0&&(0,i.Y)(s.Ay,{items:l,tooltipPlacement:"bottom"})})},[e,t.sizeUnit])}}},63613(e,t,l){l.d(t,{k:()=>S,v:()=>b});var i,r=l(2445),n=l(24002),o=l(61225),a=l(22567),s=l(95927),d=l(72001),c=l(43702),u=l(97371),p=l(17437),h=l(22022),m=l(61175),v=l(54699),g=l(82356);let f=(0,s.a)();var b=((i={}).Charts="charts",i.Dashboards="dashboards",i);let y=u.styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  > *:first-child {
    margin-right: ${({theme:e})=>e.sizeUnit}px;
  }
`,x=f.get("report-modal.dropdown.item.icon"),S=({dashboardId:e,chart:t,showReportModal:l,setCurrentReportDeleting:i})=>{let s=(0,o.wA)(),u=e||(null==t?void 0:t.id),f=e?"dashboards":"charts",b=(0,o.d4)(e=>u&&((e.reports||{})[f]||{})[u]||null),S=(0,o.d4)(e=>e.user),C=(0,d.Z)(e),w=()=>!!(0,c.G7)(c.TO.AlertReports)&&!!(null==S?void 0:S.userId)&&!!u&&Object.keys(S.roles||[]).map(e=>S.roles[e].filter(e=>"menu_access"===e[0]&&"Manage"===e[1])).some(e=>e.length>0),_=w()&&!!(e&&C!==e||(null==t?void 0:t.id));if((0,n.useEffect)(()=>{_&&u&&s((0,v.LQ)({userId:S.userId,filterField:e?"dashboard_id":"chart_id",creationMethod:e?"dashboards":"charts",resourceId:u}))},[s,_,null==S?void 0:S.userId,e,u]),!w())return null;let F=()=>l();return b&&b.id?{key:"email-report-manage",type:"submenu",label:(0,a.t)("Manage email report"),children:[{key:"toggle-active",label:(0,r.FD)(g.t3,{children:[(0,r.Y)(h.Checkbox,{checked:b.active||!1,onChange:m.fZ,css:e=>(0,p.AH)`
                margin-right: ${e.sizeUnit}px;
              `}),(0,a.t)("Email reports active")]}),onClick:()=>{(null==b?void 0:b.id)&&void 0!==b.active&&s((0,v.PM)(b,!b.active))}},{key:"edit-report",label:(0,a.t)("Edit email report"),onClick:F},{key:"delete-report",label:(0,a.t)("Delete email report"),onClick:()=>i(b),danger:!0}]}:{key:"email-report-setup",type:"submenu",label:(0,a.t)("Manage email report"),children:[{key:"set-up-report",label:x?(0,r.FD)(y,{children:[(0,r.Y)("div",{children:(0,a.t)("Set up an email report")}),(0,r.Y)(x,{})]}):(0,a.t)("Set up an email report"),onClick:F}]}}},90943(e,t,l){l.d(t,{A:()=>q});var i,r=l(2445),n=l(24002),o=l(22567),a=l(34969),s=l(66972),d=l(17436),c=l(61225),u=l(54699),p=l(22022),h=l(75478),m=l(92863),v=l(15341),g=l(89314),f=l(33962),b=l(14621),y=((i={}).Text="TEXT",i.PNG="PNG",i.CSV="CSV",i),x=l(13108),S=l(11897),C=l(63613),w=l(97371),_=l(17437),F=l(16351),T=l(33771),Y=l(1125);let A=(0,w.styled)(F.aF)`
  .ant-modal-body {
    padding: 0;
  }
`,$=w.styled.div`
  padding: ${({theme:e})=>`${3*e.sizeUnit}px ${4*e.sizeUnit}px ${2*e.sizeUnit}px`};
  label {
    font-size: ${({theme:e})=>e.fontSizeSM}px;
    color: ${({theme:e})=>e.colorTextSecondary};
  }
`,k=w.styled.div`
  border-top: 1px solid ${({theme:e})=>e.colorSplit};
  padding: ${({theme:e})=>`${4*e.sizeUnit}px ${4*e.sizeUnit}px ${6*e.sizeUnit}px`};
  .ant-select {
    width: 100%;
  }
  .control-label {
    font-size: ${({theme:e})=>e.fontSizeSM}px;
    color: ${({theme:e})=>e.colorTextSecondary};
  }
`,D=w.styled.span`
  span {
    margin-right: ${({theme:e})=>2*e.sizeUnit}px;
    vertical-align: middle;
  }
  .text {
    vertical-align: middle;
  }
`,E=w.styled.div`
  margin-bottom: ${({theme:e})=>7*e.sizeUnit}px;

  h4 {
    margin-bottom: ${({theme:e})=>3*e.sizeUnit}px;
  }
`,O=(0,w.styled)(T.l)`
  margin-bottom: ${({theme:e})=>3*e.sizeUnit}px;
  width: ${({theme:e})=>120*e.sizeUnit}px;
`,z=w.styled.p`
  color: ${({theme:e})=>e.colorError};
`,R=(0,_.AH)`
  margin-bottom: 0;
`,I=(0,w.styled)(Y.$n)`
  width: ${({theme:e})=>40*e.sizeUnit}px;
`,M=e=>(0,_.AH)`
  margin: ${3*e.sizeUnit}px 0 ${2*e.sizeUnit}px;
`,N=w.styled.div`
  margin: ${({theme:e})=>8*e.sizeUnit}px 0
    ${({theme:e})=>4*e.sizeUnit}px;
`;function L(e,t,l,i,r,n,o){try{var a=e[n](o),s=a.value}catch(e){l(e);return}a.done?t(s):Promise.resolve(s).then(i,r)}function U(){return(U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i])}return e}).apply(this,arguments)}(0,w.styled)(f.s)`
  display: block;
  line-height: ${({theme:e})=>8*e.sizeUnit}px;
`;let j=[a.Y.PivotTable,"table",a.Y.PairedTTest],H={crontab:"0 12 * * 1"},P={},q=(0,b.Ay)(function({onHide:e,show:t=!1,dashboardId:l,chart:i,userId:a,userEmail:b,ccEmail:w,bccEmail:F,creationMethod:T,dashboardName:Y,chartName:q}){var V;let B=null==i||null==(V=i.sliceFormData)?void 0:V.viz_type,W=!!i,G=W&&B&&j.includes(B),K=G?y.Text:y.PNG,Q=Y||q,X=(0,n.useMemo)(()=>U({},H,{name:Q?(0,o.t)("Weekly Report for %s",Q):(0,o.t)("Weekly Report")}),[Q]),J=(0,n.useCallback)((e,t)=>"reset"===t?X:U({},e,t),[X]),[Z,ee]=(0,n.useReducer)(J,X),[et,el]=(0,n.useState)(),ei=(0,c.wA)(),er=(0,c.d4)(e=>{let t=l?C.v.Dashboards:C.v.Charts;return(0,x.oi)(e,t,l||(null==i?void 0:i.id))||P}),en=er&&Object.keys(er).length;(0,n.useEffect)(()=>{en?ee(er):ee("reset")},[en,er]);let eo=(0,r.FD)(D,{children:[(0,r.Y)(v.F.CalendarOutlined,{}),(0,r.Y)("span",{className:"text",children:en?(0,o.t)("Edit email report"):(0,o.t)("Schedule a new email report")})]}),ea=(0,r.FD)(r.FK,{children:[(0,r.Y)(I,{onClick:e,children:(0,o.t)("Cancel")},"back"),(0,r.Y)(I,{buttonStyle:"primary",onClick:()=>{var t;return(t=function*(){let t={type:"Report",active:!0,force_screenshot:!1,custom_width:Z.custom_width,creation_method:T,dashboard:l,chart:null==i?void 0:i.id,owners:[a],recipients:[{recipient_config_json:{target:b,ccTarget:w,bccTarget:F},type:"Email"}],name:Z.name,description:Z.description,crontab:Z.crontab,report_format:Z.report_format||K,timezone:Z.timezone};ee({isSubmitting:!0,error:void 0});try{en&&Z.id?yield ei((0,u.Zp)(Z.id,t)):yield ei((0,u.ef)(t)),e()}catch(t){let{error:e}=yield(0,s.h4)(t);ee({error:e})}ee({isSubmitting:!1})},function(){var e=this,l=arguments;return new Promise(function(i,r){var n=t.apply(e,l);function o(e){L(n,i,r,o,a,"next",e)}function a(e){L(n,i,r,o,a,"throw",e)}o(void 0)})})()},disabled:!Z.name,loading:Z.isSubmitting,children:en?(0,o.t)("Save"):(0,o.t)("Add")},"submit")]}),es=(0,r.FD)(r.FK,{children:[(0,r.Y)(N,{children:(0,r.Y)(g.o.Title,{level:4,children:(0,o.t)("Message content")})}),(0,r.Y)("div",{className:"inline-container",children:(0,r.Y)(f.s.GroupWrapper,{spaceConfig:{direction:"vertical",size:"middle",align:"start",wrap:!1},onChange:e=>{ee({report_format:e.target.value})},value:Z.report_format||K,options:[{label:(0,o.t)("Text embedded in email"),value:y.Text},{label:(0,o.t)("Image (PNG) embedded in email"),value:y.PNG},{label:(0,o.t)("Formatted CSV attached in email"),value:y.CSV}]})})]}),ed=(0,r.FD)(S.tu,{children:[(0,r.Y)("div",{className:"control-label",css:M,children:(0,o.t)("Screenshot width")}),(0,r.Y)("div",{className:"input-container",children:(0,r.Y)(p.Input,{type:"number",name:"custom_width",value:(null==Z?void 0:Z.custom_width)||"",placeholder:(0,o.t)("Input custom width in pixels"),onChange:e=>{ee({custom_width:parseInt(e.target.value,10)||null})}})})]});return(0,r.FD)(A,{show:t,onHide:e,title:eo,footer:ea,width:"432",centered:!0,children:[(0,r.FD)($,{children:[(0,r.Y)(h.M,{id:"name",name:"name",value:Z.name||"",placeholder:X.name,required:!0,validationMethods:{onChange:({target:e})=>ee({name:e.value})},label:(0,o.t)("Report Name"),"data-test":"report-name-test"}),(0,r.Y)(h.M,{id:"description",name:"description",value:(null==Z?void 0:Z.description)||"",validationMethods:{onChange:({target:e})=>{ee({description:e.value})}},label:(0,o.t)("Description"),placeholder:(0,o.t)("Include a description that will be sent with your report"),css:R,"data-test":"report-description-test"})]}),(0,r.FD)(k,{children:[(0,r.FD)(E,{children:[(0,r.Y)(g.o.Title,{level:5,css:e=>(0,_.AH)`
  margin: ${3*e.sizeUnit}px 0;
`,children:(0,o.t)("Schedule")}),(0,r.Y)("p",{children:(0,o.t)("The report will be sent to your email at")})]}),(0,r.Y)(O,{clearButton:!1,value:Z.crontab||"0 12 * * 1",setValue:e=>{ee({crontab:e})},onError:el}),(0,r.Y)(z,{children:et}),(0,r.Y)("div",{className:"control-label",css:e=>(0,_.AH)`
  margin: ${3*e.sizeUnit}px 0 ${2*e.sizeUnit}px;
`,children:(0,o.t)("Timezone")}),(0,r.Y)(m.A,{timezone:Z.timezone,onTimezoneChange:e=>{ee({timezone:e})}}),W&&es,(!W||!G)&&ed]}),Z.error&&(0,r.Y)(d.F,{type:"error",css:e=>(0,_.AH)`
  margin: ${4*e.sizeUnit}px;
  margin-top: 0;
`,message:en?(0,o.t)("Failed to update report"):(0,o.t)("Failed to create report"),description:Z.error})]})})},74078(e,t,l){l.d(t,{t_:()=>u});var i=l(95927),r=l(87928),n=l(12263),o=l(24002),a=l(73794),s=l(10898);function d(e,t,l,i,r,n,o){try{var a=e[n](o),s=a.value}catch(e){l(e);return}a.done?t(s):Promise.resolve(s).then(i,r)}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i])}return e}).apply(this,arguments)}let u=(e,t,l,u=!1)=>{let[p,h]=(0,o.useState)({status:s.bk.Loading,result:null,error:null});return(0,o.useEffect)(()=>{var o;u?h({status:s.bk.Complete,result:{},error:null}):(o=function*(){try{var o,d;let u,p,m="string"==typeof e?Number(e.split("__")[0]):Number(e),v=(0,i.a)().get("load.drillby.options");if(v&&l){let e=yield v(m,l);u=null==e||null==(o=e.json)?void 0:o.result}else{let e=`/api/v1/dataset/${m}/drill_info/?q=(dashboard_id:${t})`;try{let{json:t}=yield(0,a.wW)({endpoint:e}),{result:l}=t;u=l}catch(t){throw n.A.error("Failed to load dataset: ",t),a.el.delete(e),t}}let g=(d=u,p={},(0,r.A)(null==d?void 0:d.columns).forEach(e=>{p[e.column_name]=e.verbose_name||e.column_name}),(0,r.A)(null==d?void 0:d.metrics).forEach(e=>{p[e.metric_name]=e.verbose_name||e.metric_name}),p);h({status:s.bk.Complete,result:c({},u,{verbose_map:g}),error:null})}catch(e){h({status:s.bk.Error,result:null,error:e instanceof Error?e:Error(String(e))})}},function(){var e=this,t=arguments;return new Promise(function(l,i){var r=o.apply(e,t);function n(e){d(r,l,i,n,a,"next",e)}function a(e){d(r,l,i,n,a,"throw",e)}n(void 0)})})()},[e,t,l,u]),p}},40909(e,t,l){l.d(t,{K:()=>r});var i=l(24002);let r=(e,t)=>{(0,i.useEffect)(()=>{let l=l=>{e&&(l.preventDefault(),l.returnValue=t||"")};return window.addEventListener("beforeunload",l),()=>window.removeEventListener("beforeunload",l)},[e,t])}},40150(e,t,l){l.d(t,{w:()=>o});var i=l(24002),r=l(43561);let n=new BroadcastChannel("tab_id_channel");function o(){let[e,t]=(0,i.useState)();return(0,i.useEffect)(()=>{let l;if(!function(){try{return window.localStorage&&window.sessionStorage}catch(e){return!1}}()){e||t((0,r.Ak)());return}let i=()=>{let e;try{e=window.localStorage.getItem("last_tab_id")}catch(e){}let l=String(e?Number.parseInt(e,10)+1:1);try{window.sessionStorage.setItem("tab_id",l),window.localStorage.setItem("last_tab_id",l)}catch(e){}t(l)};try{l=window.sessionStorage.getItem("tab_id")}catch(e){}l?(n.postMessage({type:"REQUESTING_TAB_ID",tabId:l}),t(l)):i(),n.onmessage=t=>{if(t.data.tabId===e)if("REQUESTING_TAB_ID"===t.data.type){let e={type:"TAB_ID_DENIED",tabId:t.data.tabId};n.postMessage(e)}else"TAB_ID_DENIED"===t.data.type&&i()}},[e]),e}},17432(e,t,l){l.d(t,{P:()=>d});var i=l(22567),r=l(66972),n=l(24002),o=l(61574),a=l(40909);function s(e,t,l,i,r,n,o){try{var a=e[n](o),s=a.value}catch(e){l(e);return}a.done?t(s):Promise.resolve(s).then(i,r)}let d=({hasUnsavedChanges:e,onSave:t,isSaveModalVisible:l=!1,manualSaveOnUnsavedChanges:d=!1})=>{let c=(0,o.W6)(),[u,p]=(0,n.useState)(!1),h=(0,n.useRef)(null),m=(0,n.useRef)(()=>{}),v=(0,n.useRef)(!1),g=(0,n.useCallback)(()=>{p(!1),null==h.current||h.current.call(h)},[]),f=(0,n.useCallback)(()=>{var e;return(e=function*(){try{d&&(v.current=!0),yield t(),p(!1)}catch(t){let e=yield(0,r.h4)(t);throw Error(e.message||e.error||(0,i.t)("Sorry, an error occurred"),{cause:t})}},function(){var t=this,l=arguments;return new Promise(function(i,r){var n=e.apply(t,l);function o(e){s(n,i,r,o,a,"next",e)}function a(e){s(n,i,r,o,a,"throw",e)}o(void 0)})})()},[d,t]),b=(0,n.useCallback)(()=>{v.current=!0,t()},[t]),y=(0,n.useCallback)(({pathname:e,search:t,state:l},i)=>{if("REPLACE"!==i){if(v.current){v.current=!1;return}return h.current=()=>{null==m.current||m.current.call(m),"POP"===i?c.go(-1):c.push({pathname:e,search:t},l)},p(!0),!1}},[c]);return(0,n.useEffect)(()=>{if(!e)return;let t=c.block(y);return m.current=t,()=>t()},[y,e,c]),(0,n.useEffect)(()=>{!l&&v.current&&(p(!1),v.current=!1)},[l]),(0,a.K)(e),{showModal:u,setShowModal:p,handleConfirmNavigation:g,handleSaveAndCloseModal:f,triggerManualSave:b}}},50279(e,t,l){l.d(t,{A:()=>h});var i=l(67390),r=l.n(i),n=l(20249),o=l.n(n),a=l(22567),s=l(25400);function d(e,t,l,i,r,n,o){try{var a=e[n](o),s=a.value}catch(e){l(e);return}a.done?t(s):Promise.resolve(s).then(i,r)}let c=(e,t=new Date)=>`${o()(e)}-${t.toISOString().replace(/[: ]/g,"-")}`,u=new Set(["display","position","width","height","max-width","max-height","margin","padding","top","right","bottom","left","font","font-family","font-size","font-weight","font-style","line-height","letter-spacing","word-spacing","text-align","text-decoration","color","background-color","border","border-width","border-style","border-color","opacity","visibility","overflow","z-index","transform","flex","flex-direction","justify-content","align-items","grid","grid-template","grid-area","table-layout","vertical-align","text-align","box-sizing","min-height","min-width"]),p=new WeakMap;function h(e,t,l=!1,i){return n=>{var o;return(o=function*(){var o,d;let h=l?document.querySelector(e):n.currentTarget.closest(e);if(!h)return void(0,s.Zd)((0,a.t)("Image download failed, please refresh and try again."));let m=e=>"string"!=typeof e.className||!e.className.includes("mapboxgl-control-container")&&!e.className.includes("header-controls"),v=h.classList.contains("dashboard")?[]:h.querySelectorAll("[data-themed-ag-grid]"),g=1===v.length?v[0]:null,f=g?g.querySelector(".ag-root-wrapper"):null;if(g&&f){let e=g._agGridApi;if(!0!==g._agGridFirstDataRendered)return void(0,s.Zd)((0,a.t)("The chart is still loading. Please wait a moment and try again."));let l=null==e||null==(d=e.getColumnState)?void 0:d.call(e),n=null!=(o=null==l?void 0:l.filter(e=>!e.hide))?o:[],u=n.reduce((e,t)=>{var l;return e+(null!=(l=t.width)?l:0)},0)||f.offsetWidth,p=[];try{yield document.fonts.ready,e&&(e.setGridOption("domLayout","print"),yield new Promise(e=>requestAnimationFrame(()=>requestAnimationFrame(()=>e()))),n.length>0&&(null==e.applyColumnState||e.applyColumnState.call(e,{state:n.map(e=>({colId:e.colId,width:e.width,flex:null})),applyOrder:!1})),null==e.resetRowHeights||e.resetRowHeights.call(e),yield((e,t=5e3,l=2)=>new Promise(i=>{let r=Date.now()+t,n=e.scrollHeight,o=0,a=()=>{if(Date.now()>=r)return void i();try{let t=e.scrollHeight;if(t===n){if((o+=1)>=l)return void i()}else o=0,n=t}catch(e){i();return}setTimeout(a,100)};setTimeout(a,100)}))(f,5e3,5)),f.querySelectorAll(".ag-cell").forEach(e=>{var t,l;let i=null!=(t=null==(l=e.parentElement)?void 0:l.offsetHeight)?t:0,r=Math.max(i,e.scrollHeight);p.push({el:e,minHeight:e.style.minHeight,overflow:e.style.overflow}),e.style.minHeight=r>0?`${r}px`:"0px",e.style.overflow="hidden"});let l=f.scrollHeight,o=yield r().toJpeg(f,{bgcolor:null==i?void 0:i.colorBgContainer,filter:m,quality:.95,height:l,width:u,cacheBust:!0}),a=document.createElement("a");a.download=`${c(t)}.jpg`,a.href=o,a.click()}catch(e){console.error("Creating image failed",e),(0,s.Zd)((0,a.t)("Image download failed, please refresh and try again."))}finally{p.forEach(({el:e,minHeight:t,overflow:l})=>{e.style.minHeight=t,e.style.overflow=l}),e&&(e.setGridOption("domLayout","normal"),l&&(null==e.applyColumnState||e.applyColumnState.call(e,{state:l,applyOrder:!1})))}return}let b=null;try{let e,l,n,o,a,{clone:s,cleanup:d}=(e=h.cloneNode(!0),((e,t,l)=>{let i=[[e,t]],r=new WeakSet;for(;i.length;){var n;let[e,t]=i.shift();if(r.has(e))continue;r.add(e);let o=p.get(e);for(let l of(o||(o=window.getComputedStyle(e),p.set(e,o)),u)){let e=o.getPropertyValue(l);e&&"initial"!==e&&"inherit"!==e&&t.style.setProperty(l,e,o.getPropertyPriority(l))}if(null==(n=e.textContent)?void 0:n.trim()){let{color:e}=o;e&&"transparent"!==e&&"transparent"!==e||(t.style.color=(null==l?void 0:l.colorTextBase)||"black"),t.style.visibility="visible","none"===o.display&&(t.style.display="block")}for(let l=0;l<e.children.length;l+=1)i.push([e.children[l],t.children[l]])}})(h,e,i),l=h.querySelectorAll("canvas"),n=e.querySelectorAll("canvas"),l.forEach((e,t)=>{if(l[t]&&n[t]){let l=n[t],i=l.getContext("2d");i&&(l.width=e.width,l.height=e.height,i.drawImage(e,0,0))}}),(o=document.createElement("div")).style.cssText=`
    position: absolute;
    left: -20000px;
    top: -20000px;
    visibility: hidden;
    pointer-events: none;
    z-index: -1000;
  `,o.appendChild(e),document.body.appendChild(o),(a=e.style).height="auto",a.maxHeight="none",['[style*="overflow"]',".scrollable",".table-responsive",".ant-table-body",".table-container",".ant-table-container",".table-wrapper",".ant-table-tbody","tbody",".table-body",".virtual-table",".react-window",".react-virtualized"].forEach(t=>{e.querySelectorAll(t).forEach(e=>{e.style.overflow="visible",e.style.height="auto",e.style.maxHeight="none"})}),e.querySelectorAll("table, .ant-table, .table-container, .data-table").forEach(e=>{e.style.margin="0 auto",e.style.display="table",e.style.width="100%",e.style.tableLayout="auto"}),e.querySelectorAll("tr, .ant-table-row, .table-row, .data-row").forEach(e=>{e.style.display="table-row",e.style.visibility="visible",e.style.height="auto"}),e.querySelectorAll("td, th, .ant-table-cell, .table-cell").forEach(e=>{e.style.display="table-cell",e.style.visibility="visible"}),e.querySelectorAll("*").forEach(e=>{var t;if(null==(t=e.textContent)?void 0:t.trim()){let t=window.getComputedStyle(e);"transparent"===t.color&&(e.style.color="black"),e.style.visibility="visible","none"===t.display&&(e.style.display="block")}}),e.querySelectorAll("[data-virtualized], .virtualized, .lazy-load").forEach(e=>{e.style.height="auto",e.style.maxHeight="none"}),{clone:e,cleanup:()=>{null==p.delete||p.delete.call(p,h),o.parentElement&&o.parentElement.removeChild(o)}});b=d;let v=yield r().toJpeg(s,{bgcolor:null==i?void 0:i.colorBgContainer,filter:m,quality:.95,height:s.scrollHeight,width:s.scrollWidth,cacheBust:!0});b(),b=null;let g=document.createElement("a");g.download=`${c(t)}.jpg`,g.href=v,g.click()}catch(e){console.error("Creating image failed",e),(0,s.Zd)((0,a.t)("Image download failed, please refresh and try again."))}finally{b&&b()}},function(){var e=this,t=arguments;return new Promise(function(l,i){var r=o.apply(e,t);function n(e){d(r,l,i,n,a,"next",e)}function a(e){d(r,l,i,n,a,"throw",e)}n(void 0)})})()}}},83153(e,t,l){l.d(t,{A:()=>r});var i=l(3959);function r(e,t){let l=document.querySelector(e),r=i.utils.table_to_book(l);(0,i.writeFile)(r,`${t}.xlsx`)}},2589(e,t,l){l.d(t,{w:()=>o});var i=l(22567);let r=(0,i.t)("Create chart"),n=(0,i.t)("Update chart"),o=e=>(0,i.t)("Select values in highlighted field(s) in the control panel. Then run the query by clicking on the %s button.",`"${e?r:n}"`)},99961(e,t,l){l.d(t,{a:()=>i});let i=()=>{var e,t;return null==(t=window)||null==(e=t.navigator)?void 0:e.webdriver}},2798(e,t,l){l.d(t,{r:()=>a});var i=l(30332),r=l(36255),n=l(38187),o=l(31239);let a=(e,t=r.v.Where)=>{var l,a;let s,d=(e=>{if(!e.filterDataMapping)return null;let{col:t,op:l}=e,i="val"in e?e.val:void 0;for(let[r,n]of Object.entries(e.filterDataMapping))if(Array.isArray(n)&&n.find(e=>e.col===t&&e.op===l&&JSON.stringify(e.val)===JSON.stringify(i)))return r;return null})(e),c=d?null==(l=e.layerFilterScope)?void 0:l[d]:void 0;return s=(0,i.q0)(e.col)?{expressionType:"SQL",clause:t,sqlExpression:(0,o.e)({expressionType:r.A.Simple,subject:`(${e.col.sqlExpression})`,operator:e.op,comparator:"val"in e?e.val:void 0})}:{expressionType:"SIMPLE",clause:t,operator:e.op,operatorId:null==(a=Object.entries(n.nS).find(t=>t[1].operation===e.op))?void 0:a[0],subject:e.col,comparator:"val"in e?e.val:void 0},e.isExtra&&Object.assign(s,{isExtra:!0,layerFilterScope:c,filterOptionName:`filter_${Math.random().toString(36).substring(2,15)}_${Math.random().toString(36).substring(2,15)}`}),s}}}]);