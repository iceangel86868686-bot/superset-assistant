"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[7094],{13965(e,t,n){n.r(t),n.d(t,{default:()=>$});var r,i=n(2445),o=n(22567),l=n(48014),a=n(97371),s=n(17437),c=n(5621),u=n(22022),d=n(15341),m=n(1125),h=n(81975),p=n(6540),g=n(89314),f=n(24002),A=n(44480),y=n(25400),w=n(61225),Y=n(85572),b=((r=b||{})[r.AuthOID=0]="AuthOID",r[r.AuthDB=1]="AuthDB",r[r.AuthLDAP=2]="AuthLDAP",r[r.AuthOauth=4]="AuthOauth",r[r.AuthSAML=5]="AuthSAML",r);let I=(0,a.styled)(h.Z)`
  ${({theme:e})=>(0,s.AH)`
    max-width: 400px;
    width: 100%;
    margin-top: ${e.marginXL}px;
    color: ${e.colorBgContainer};
    background: ${e.colorBgBase};
    .ant-form-item-label label {
      color: ${e.colorPrimary};
    }
  `}
`,S=(0,a.styled)(g.o.Text)`
  ${({theme:e})=>(0,s.AH)`
    font-size: ${e.fontSizeSM}px;
  `}
`;function $(){let[e]=c.l.useForm(),[t,n]=(0,f.useState)(!1),r=(0,w.wA)(),a=(0,Y.Ay)(),h=(0,f.useMemo)(()=>{try{return new URLSearchParams(window.location.search).get("next")||""}catch(e){return""}},[]),b=(0,f.useMemo)(()=>h?`/login/?next=${encodeURIComponent(h)}`:"/login/",[h]),$=e=>{let t=`/login/${e}`;return h?`${t}${t.includes("?")?"&":"?"}next=${encodeURIComponent(h)}`:t},F=a.common.conf.AUTH_TYPE,D=a.common.conf.AUTH_PROVIDERS,k=a.common.conf.AUTH_USER_REGISTRATION;(0,f.useEffect)(()=>{"true"===sessionStorage.getItem("login_attempted")&&(sessionStorage.removeItem("login_attempted"),r((0,y.iB)((0,o.t)("Invalid username or password"))),e.setFieldsValue({password:""}))},[r,e]);let x=e=>{if(!e||"string"!=typeof e)return;let t=`${(0,A.capitalize)(e)}Outlined`,n=d.F[t];if(n&&"function"==typeof n)return(0,i.Y)(n,{})};return(0,i.Y)(p.s,{justify:"center",align:"center","data-test":"login-form",css:(0,s.AH)`
        width: 100%;
        height: calc(100vh - 200px);
      `,children:(0,i.FD)(I,{title:(0,o.t)("Sign in"),padded:!0,children:[0===F&&(0,i.Y)(p.s,{justify:"center",vertical:!0,gap:"middle",children:(0,i.Y)(c.l,{layout:"vertical",requiredMark:"optional",form:e,children:D.map(e=>(0,i.Y)(c.l.Item,{children:(0,i.FD)(m.$n,{href:$(e.name),block:!0,iconPosition:"start",icon:x(e.name),children:[(0,o.t)("Sign in with")," ",(0,A.capitalize)(e.name)]})}))})}),(4===F||5===F)&&(0,i.Y)(p.s,{justify:"center",gap:0,vertical:!0,children:(0,i.Y)(c.l,{layout:"vertical",requiredMark:"optional",form:e,children:D.map(e=>(0,i.Y)(c.l.Item,{children:(0,i.FD)(m.$n,{href:$(e.name),block:!0,iconPosition:"start",icon:x(e.name),children:[(0,o.t)("Sign in with")," ",(0,A.capitalize)(e.name)]})}))})}),(1===F||2===F)&&(0,i.FD)(p.s,{justify:"center",vertical:!0,gap:"middle",children:[(0,i.Y)(g.o.Text,{type:"secondary",children:(0,o.t)("Enter your login and password below:")}),(0,i.FD)(c.l,{layout:"vertical",requiredMark:"optional",form:e,onFinish:e=>{n(!0),sessionStorage.setItem("login_attempted","true"),l.A.postForm(b,e,"")},children:[(0,i.Y)(c.l.Item,{label:(0,i.Y)(S,{children:(0,o.t)("Username:")}),name:"username",rules:[{required:!0,message:(0,o.t)("Please enter your username")}],children:(0,i.Y)(u.Input,{autoFocus:!0,prefix:(0,i.Y)(d.F.UserOutlined,{iconSize:"l"}),"data-test":"username-input"})}),(0,i.Y)(c.l.Item,{label:(0,i.Y)(S,{children:(0,o.t)("Password:")}),name:"password",rules:[{required:!0,message:(0,o.t)("Please enter your password")}],children:(0,i.Y)(u.Input.Password,{prefix:(0,i.Y)(d.F.KeyOutlined,{iconSize:"l"}),"data-test":"password-input"})}),(0,i.Y)(c.l.Item,{label:null,children:(0,i.FD)(p.s,{css:(0,s.AH)`
                    width: 100%;
                  `,children:[(0,i.Y)(m.$n,{block:!0,type:"primary",htmlType:"submit",loading:t,"data-test":"login-button",children:(0,o.t)("Sign in")}),k&&(0,i.Y)(m.$n,{block:!0,type:"default",href:"/register/","data-test":"register-button",children:(0,o.t)("Register")})]})})]})]})]})})}}}]);