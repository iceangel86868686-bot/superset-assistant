(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[2730],{51545(e,t,r){"use strict";r.d(t,{Ht:()=>a,cG:()=>o});var n=r(70731),l=r.n(n);let o={CASE_SENSITIVE_EQUAL:7,EQUAL:6,STARTS_WITH:5,WORD_STARTS_WITH:4,CONTAINS:3,ACRONYM:2,MATCHES:1,NO_MATCH:0},i=(e,t)=>String(e.rankedValue).localeCompare(String(t.rankedValue));function a(e,t,r={}){let{keys:n,threshold:l=o.MATCHES,baseSort:u=i,sorter:d=e=>e.sort((e,t)=>(function(e,t,r){let{rank:n,keyIndex:l}=e,{rank:o,keyIndex:i}=t;return n!==o?n>o?-1:1:l===i?r(e,t):l<i?-1:1})(e,t,u))}=r;return d(e.reduce(function(e,i,a){var u,d,h,p;let f=(u=i,d=n,h=t,p=r,d?(function(e,t){let r=[];for(let l=0,o=t.length;l<o;l++){var n;let o=t[l],i="string"==typeof(n=o)?s:{...s,...n},a=function(e,t){let r;if("object"==typeof t&&(t=t.key),"function"==typeof t)r=t(e);else if(null==e)r=null;else if(Object.hasOwnProperty.call(e,t))r=e[t];else{if(t.includes("."))return function(e,t){let r=e.split("."),n=[t];for(let e=0,t=r.length;e<t;e++){let t=r[e],l=[];for(let e=0,r=n.length;e<r;e++){let r=n[e];if(null!=r)if(Object.hasOwnProperty.call(r,t)){let e=r[t];null!=e&&l.push(e)}else"*"===t&&(l=l.concat(r))}n=l}return Array.isArray(n[0])?[].concat(...n):n}(t,e);r=null}return null==r?[]:Array.isArray(r)?r:[String(r)]}(e,o);for(let e=0,t=a.length;e<t;e++)r.push({itemValue:a[e],attributes:i})}return r})(u,d).reduce(({rank:e,rankedValue:t,keyIndex:r,keyThreshold:n},{itemValue:l,attributes:i},a)=>{let u=c(l,h,p),s=t,{minRanking:d,maxRanking:f,threshold:g}=i;return u<d&&u>=o.MATCHES?u=d:u>f&&(u=f),u>e&&(e=u,r=a,n=g,s=l),{rankedValue:s,rank:e,keyIndex:r,keyThreshold:n}},{rankedValue:u,rank:o.NO_MATCH,keyIndex:-1,keyThreshold:p.threshold}):{rankedValue:u,rank:c(u,h,p),keyIndex:-1,keyThreshold:p.threshold}),{rank:g,keyThreshold:m=l}=f;return g>=m&&e.push({...f,item:i,index:a}),e},[])).map(({item:e})=>e)}function c(e,t,r){if(e=u(e,r),(t=u(t,r)).length>e.length)return o.NO_MATCH;if(e===t)return o.CASE_SENSITIVE_EQUAL;let n=function*(e,t){let r=-1;for(;(r=e.indexOf(t,r+1))>-1;)yield r;return -1}(e=e.toLowerCase(),t=t.toLowerCase()),l=n.next(),i=l.value;if(e.length===t.length&&0===i)return o.EQUAL;if(0===i)return o.STARTS_WITH;let a=l;for(;!a.done;){if(a.value>0&&" "===e[a.value-1])return o.WORD_STARTS_WITH;a=n.next()}return i>0?o.CONTAINS:1===t.length?o.NO_MATCH:(function(e){let t="",r=" ";for(let n=0;n<e.length;n++){let l=e.charAt(n),o=" "===l||"-"===l;" "!==r&&"-"!==r||o||(t+=l),r=l}return t})(e).includes(t)?o.ACRONYM:function(e,t){var r;let n,l=0,i=0;function a(e,t,r){for(let n=r,o=t.length;n<o;n++)if(t[n]===e)return l+=1,n+1;return -1}let c=a(t[0],e,0);if(c<0)return o.NO_MATCH;i=c;for(let r=1,n=t.length;r<n;r++)if(!((i=a(t[r],e,i))>-1))return o.NO_MATCH;return r=i-c,n=l/t.length,o.MATCHES+1/r*n}(e,t)}function u(e,{keepDiacritics:t}){return e=`${e}`,t||(e=l()(e)),e}a.rankings=o;let s={maxRanking:1/0,minRanking:-1/0}},7452(e){var t=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,l=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function s(e,r,n,o){var i,a,c,u,s=Object.create((r&&r.prototype instanceof m?r:m).prototype);return l(s,"_invoke",{value:(i=e,a=n,c=new N(o||[]),u=h,function(e,r){if(u===p)throw Error("Generator is already running");if(u===f){if("throw"===e)throw r;return{value:t,done:!0}}for(c.method=e,c.arg=r;;){var n=c.delegate;if(n){var l=function e(r,n){var l=n.method,o=r.iterator[l];if(t===o)return(n.delegate=null,"throw"===l&&r.iterator.return&&(n.method="return",n.arg=t,e(r,n),"throw"===n.method))?g:("return"!==l&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+l+"' method")),g);var i=d(o,r.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,g;var a=i.arg;return a?a.done?(n[r.resultName]=a.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):a:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,g)}(n,c);if(l){if(l===g)continue;return l}}if("next"===c.method)c.sent=c._sent=c.arg;else if("throw"===c.method){if(u===h)throw u=f,c.arg;c.dispatchException(c.arg)}else"return"===c.method&&c.abrupt("return",c.arg);u=p;var o=d(i,a,c);if("normal"===o.type){if(u=c.done?f:"suspendedYield",o.arg===g)continue;return{value:o.arg,done:c.done}}"throw"===o.type&&(u=f,c.method="throw",c.arg=o.arg)}})}),s}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=s;var h="suspendedStart",p="executing",f="completed",g={};function m(){}function y(){}function v(){}var b={};u(b,i,function(){return this});var S=Object.getPrototypeOf,w=S&&S(S(O([])));w&&w!==r&&n.call(w,i)&&(b=w);var k=v.prototype=m.prototype=Object.create(b);function x(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function C(e,t){var r;l(this,"_invoke",{value:function(l,o){function i(){return new t(function(r,i){!function r(l,o,i,a){var c=d(e[l],e,o);if("throw"===c.type)a(c.arg);else{var u=c.arg,s=u.value;return s&&"object"==typeof s&&n.call(s,"__await")?t.resolve(s.__await).then(function(e){r("next",e,i,a)},function(e){r("throw",e,i,a)}):t.resolve(s).then(function(e){u.value=e,i(u)},function(e){return r("throw",e,i,a)})}}(l,o,r,i)})}return r=r?r.then(i,i):i()}})}function A(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function E(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(A,this),this.reset(!0)}function O(e){if(null!=e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var l=-1,o=function r(){for(;++l<e.length;)if(n.call(e,l))return r.value=e[l],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw TypeError(typeof e+" is not iterable")}return y.prototype=v,l(k,"constructor",{value:v,configurable:!0}),l(v,"constructor",{value:y,configurable:!0}),y.displayName=u(v,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},x(C.prototype),u(C.prototype,a,function(){return this}),e.AsyncIterator=C,e.async=function(t,r,n,l,o){void 0===o&&(o=Promise);var i=new C(s(t,r,n,l),o);return e.isGeneratorFunction(r)?i:i.next().then(function(e){return e.done?e.value:i.next()})},x(k),u(k,c,"Generator"),u(k,i,function(){return this}),u(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=O,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(E),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function l(n,l){return a.type="throw",a.arg=e,r.next=n,l&&(r.method="next",r.arg=t),!!l}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return l("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return l(i.catchLoc,!0);else if(this.prev<i.finallyLoc)return l(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return l(i.catchLoc,!0)}else if(u){if(this.prev<i.finallyLoc)return l(i.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var l=this.tryEntries[r];if(l.tryLoc<=this.prev&&n.call(l,"finallyLoc")&&this.prev<l.finallyLoc){var o=l;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return(i.type=e,i.arg=t,o)?(this.method="next",this.next=o.finallyLoc,g):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),E(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var l=n.arg;E(r)}return l}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:O(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}(e.exports);try{regeneratorRuntime=t}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}},70731(e){var t={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",Ấ:"A",Ắ:"A",Ẳ:"A",Ẵ:"A",Ặ:"A",Æ:"AE",Ầ:"A",Ằ:"A",Ȃ:"A",Ả:"A",Ạ:"A",Ẩ:"A",Ẫ:"A",Ậ:"A",Ç:"C",Ḉ:"C",È:"E",É:"E",Ê:"E",Ë:"E",Ế:"E",Ḗ:"E",Ề:"E",Ḕ:"E",Ḝ:"E",Ȇ:"E",Ẻ:"E",Ẽ:"E",Ẹ:"E",Ể:"E",Ễ:"E",Ệ:"E",Ì:"I",Í:"I",Î:"I",Ï:"I",Ḯ:"I",Ȋ:"I",Ỉ:"I",Ị:"I",Ð:"D",Ñ:"N",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",Ố:"O",Ṍ:"O",Ṓ:"O",Ȏ:"O",Ỏ:"O",Ọ:"O",Ổ:"O",Ỗ:"O",Ộ:"O",Ờ:"O",Ở:"O",Ỡ:"O",Ớ:"O",Ợ:"O",Ù:"U",Ú:"U",Û:"U",Ü:"U",Ủ:"U",Ụ:"U",Ử:"U",Ữ:"U",Ự:"U",Ý:"Y",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",ấ:"a",ắ:"a",ẳ:"a",ẵ:"a",ặ:"a",æ:"ae",ầ:"a",ằ:"a",ȃ:"a",ả:"a",ạ:"a",ẩ:"a",ẫ:"a",ậ:"a",ç:"c",ḉ:"c",è:"e",é:"e",ê:"e",ë:"e",ế:"e",ḗ:"e",ề:"e",ḕ:"e",ḝ:"e",ȇ:"e",ẻ:"e",ẽ:"e",ẹ:"e",ể:"e",ễ:"e",ệ:"e",ì:"i",í:"i",î:"i",ï:"i",ḯ:"i",ȋ:"i",ỉ:"i",ị:"i",ð:"d",ñ:"n",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",ố:"o",ṍ:"o",ṓ:"o",ȏ:"o",ỏ:"o",ọ:"o",ổ:"o",ỗ:"o",ộ:"o",ờ:"o",ở:"o",ỡ:"o",ớ:"o",ợ:"o",ù:"u",ú:"u",û:"u",ü:"u",ủ:"u",ụ:"u",ử:"u",ữ:"u",ự:"u",ý:"y",ÿ:"y",Ā:"A",ā:"a",Ă:"A",ă:"a",Ą:"A",ą:"a",Ć:"C",ć:"c",Ĉ:"C",ĉ:"c",Ċ:"C",ċ:"c",Č:"C",č:"c",C̆:"C",c̆:"c",Ď:"D",ď:"d",Đ:"D",đ:"d",Ē:"E",ē:"e",Ĕ:"E",ĕ:"e",Ė:"E",ė:"e",Ę:"E",ę:"e",Ě:"E",ě:"e",Ĝ:"G",Ǵ:"G",ĝ:"g",ǵ:"g",Ğ:"G",ğ:"g",Ġ:"G",ġ:"g",Ģ:"G",ģ:"g",Ĥ:"H",ĥ:"h",Ħ:"H",ħ:"h",Ḫ:"H",ḫ:"h",Ĩ:"I",ĩ:"i",Ī:"I",ī:"i",Ĭ:"I",ĭ:"i",Į:"I",į:"i",İ:"I",ı:"i",Ĳ:"IJ",ĳ:"ij",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",Ḱ:"K",ḱ:"k",K̆:"K",k̆:"k",Ĺ:"L",ĺ:"l",Ļ:"L",ļ:"l",Ľ:"L",ľ:"l",Ŀ:"L",ŀ:"l",Ł:"l",ł:"l",Ḿ:"M",ḿ:"m",M̆:"M",m̆:"m",Ń:"N",ń:"n",Ņ:"N",ņ:"n",Ň:"N",ň:"n",ŉ:"n",N̆:"N",n̆:"n",Ō:"O",ō:"o",Ŏ:"O",ŏ:"o",Ő:"O",ő:"o",Œ:"OE",œ:"oe",P̆:"P",p̆:"p",Ŕ:"R",ŕ:"r",Ŗ:"R",ŗ:"r",Ř:"R",ř:"r",R̆:"R",r̆:"r",Ȓ:"R",ȓ:"r",Ś:"S",ś:"s",Ŝ:"S",ŝ:"s",Ş:"S",Ș:"S",ș:"s",ş:"s",Š:"S",š:"s",Ţ:"T",ţ:"t",ț:"t",Ț:"T",Ť:"T",ť:"t",Ŧ:"T",ŧ:"t",T̆:"T",t̆:"t",Ũ:"U",ũ:"u",Ū:"U",ū:"u",Ŭ:"U",ŭ:"u",Ů:"U",ů:"u",Ű:"U",ű:"u",Ų:"U",ų:"u",Ȗ:"U",ȗ:"u",V̆:"V",v̆:"v",Ŵ:"W",ŵ:"w",Ẃ:"W",ẃ:"w",X̆:"X",x̆:"x",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Y̆:"Y",y̆:"y",Ź:"Z",ź:"z",Ż:"Z",ż:"z",Ž:"Z",ž:"z",ſ:"s",ƒ:"f",Ơ:"O",ơ:"o",Ư:"U",ư:"u",Ǎ:"A",ǎ:"a",Ǐ:"I",ǐ:"i",Ǒ:"O",ǒ:"o",Ǔ:"U",ǔ:"u",Ǖ:"U",ǖ:"u",Ǘ:"U",ǘ:"u",Ǚ:"U",ǚ:"u",Ǜ:"U",ǜ:"u",Ứ:"U",ứ:"u",Ṹ:"U",ṹ:"u",Ǻ:"A",ǻ:"a",Ǽ:"AE",ǽ:"ae",Ǿ:"O",ǿ:"o",Þ:"TH",þ:"th",Ṕ:"P",ṕ:"p",Ṥ:"S",ṥ:"s",X́:"X",x́:"x",Ѓ:"Г",ѓ:"г",Ќ:"К",ќ:"к",A̋:"A",a̋:"a",E̋:"E",e̋:"e",I̋:"I",i̋:"i",Ǹ:"N",ǹ:"n",Ồ:"O",ồ:"o",Ṑ:"O",ṑ:"o",Ừ:"U",ừ:"u",Ẁ:"W",ẁ:"w",Ỳ:"Y",ỳ:"y",Ȁ:"A",ȁ:"a",Ȅ:"E",ȅ:"e",Ȉ:"I",ȉ:"i",Ȍ:"O",ȍ:"o",Ȑ:"R",ȑ:"r",Ȕ:"U",ȕ:"u",B̌:"B",b̌:"b",Č̣:"C",č̣:"c",Ê̌:"E",ê̌:"e",F̌:"F",f̌:"f",Ǧ:"G",ǧ:"g",Ȟ:"H",ȟ:"h",J̌:"J",ǰ:"j",Ǩ:"K",ǩ:"k",M̌:"M",m̌:"m",P̌:"P",p̌:"p",Q̌:"Q",q̌:"q",Ř̩:"R",ř̩:"r",Ṧ:"S",ṧ:"s",V̌:"V",v̌:"v",W̌:"W",w̌:"w",X̌:"X",x̌:"x",Y̌:"Y",y̌:"y",A̧:"A",a̧:"a",B̧:"B",b̧:"b",Ḑ:"D",ḑ:"d",Ȩ:"E",ȩ:"e",Ɛ̧:"E",ɛ̧:"e",Ḩ:"H",ḩ:"h",I̧:"I",i̧:"i",Ɨ̧:"I",ɨ̧:"i",M̧:"M",m̧:"m",O̧:"O",o̧:"o",Q̧:"Q",q̧:"q",U̧:"U",u̧:"u",X̧:"X",x̧:"x",Z̧:"Z",z̧:"z",й:"и",Й:"И",ё:"е",Ё:"Е"},r=Object.keys(t).join("|"),n=RegExp(r,"g"),l=RegExp(r,"");function o(e){return t[e]}var i=function(e){return e.replace(n,o)};e.exports=i,e.exports.has=function(e){return!!e.match(l)},e.exports.remove=i},76585(e,t,r){"use strict";r.d(t,{j:()=>n});let n=()=>{var e;return null==(e=window.getSelection())?void 0:e.toString()}},91721(e,t,r){"use strict";r.d(t,{v:()=>n});let n=r(24002).memo},42730(e,t,r){"use strict";let n;r.r(t),r.d(t,{default:()=>e$,sanitizeHeaderId:()=>eC});var l=r(2445),o=r(24002),i=r(93797),a=r(8065),c=r(26924),u=r(46942),s=r.n(u),d=r(21412),h=r(95235),p=r(87928),f=r(13090),g=r(76585),m=r(97371),y=r(17437),v=r(22567),b=r(69112),S=r(22022),w=r(25488),k=r(25358),x=r(77906),C=r(71914),A=r(73964),E=r(58168),N=r(36587),O=r(87064),T=o.forwardRef(function(e,t){return o.createElement(O.A,(0,E.A)({},e,{ref:t,icon:N.A}))}),$=r(26243),F=o.forwardRef(function(e,t){return o.createElement(O.A,(0,E.A)({},e,{ref:t,icon:$.A}))}),Y=r(10464),M=r(62193),I=r.n(M),R=r(38221),H=r.n(R),L=r(2404),D=r.n(L),P=r(86850),z=r(40333),j=r(91721),B=r(72001),_=r(38914),U=r(51545),G=r(6540);r(7452);let W=new Map;function V({count:e,value:t,onChange:r,onBlur:n,inputRef:o}){return(0,l.FD)(S.Space,{direction:"horizontal",size:4,className:"dt-global-filter",children:[(0,v.t)("Search"),(0,l.Y)(S.Input,{size:"small",ref:o,placeholder:(0,v.tn)("%s record...","%s records...",e,e),value:t,onChange:r,onBlur:n,className:"form-control input-sm"})]})}let X=(0,o.memo)(function({preGlobalFilteredRows:e,filterValue:t="",searchInput:r,setGlobalFilter:n,id:i="",serverPagination:a,rowCount:c}){let u=a?c:e.length,s=(0,o.useRef)(null),[d,h]=function(e,t,r=200){let[n,l]=(0,o.useState)(e),i=(0,o.useRef)(e),a=(0,_.useAsyncDebounce)(t,r);return i.current!==e&&(i.current=e,n!==e&&l(e)),[n,e=>{l(e),a(e)}]}(t,e=>{n(e||void 0)},200);return(0,o.useEffect)(()=>{if(a&&W.get(i)&&document.activeElement!==s.current){var e;null==(e=s.current)||e.focus()}},[d,a]),(0,l.Y)(r||V,{count:u,value:d,inputRef:s,onChange:e=>{let t=e.target;e.preventDefault(),W.set(i,!0),h(t.value)},onBlur:()=>{W.set(i,!1)}})});var K=r(50343);function Q({current:e,options:t,onChange:r}){let{Option:n}=S.Select;return(0,l.FD)("span",{className:"dt-select-page-size form-inline",children:[(0,v.t)("Show")," ",(0,l.Y)(S.Select,{value:e,onChange:e=>r(e),size:"small",css:e=>(0,y.AH)`
          width: ${18*e.sizeUnit}px;
        `,children:t.map(e=>{let[t,r]=Array.isArray(e)?e:[e,e],o=0===t?(0,v.t)("all"):t;return(0,l.Y)(n,{value:Number(t),"aria-label":(0,v.t)("Show %s entries",o),children:r},t)})})," ",(0,v.t)("entries")]})}function Z(e){return Array.isArray(e)?e[0]:e}let q=(0,o.memo)(function({total:e,options:t,current:r,selectRenderer:n,onChange:o}){let i=t.map(Z),a=[...t];void 0===r||r===e&&i.includes(0)||i.includes(r)||(a=[...t]).splice(i.findIndex(e=>e>r),0,(0,K.u)([r])[0]);let c=void 0===r?i[0]:r;return(0,l.Y)(n||Q,{current:c,options:a,onChange:o})}),J=(0,o.memo)((0,o.forwardRef)(function({style:e,pageCount:t,currentPage:r=0,maxPageItemCount:n=9,onPageChange:o},i){let a=function(e,t,r){if(r<7)throw Error("Must allow at least 7 page items");if(r%2==0)throw Error("Must allow odd number of page items");if(e<r)return Array.from({length:e},(e,t)=>t);let n=Math.max(0,Math.min(e-r,t-Math.floor(r/2))),l=Array.from({length:r},(e,t)=>t+n);"number"==typeof l[0]&&l[0]>0&&(l[0]=0,l[1]="prev-more");let o=l[l.length-1];return"number"==typeof o&&o<e-1&&(l[l.length-1]=e-1,l[l.length-2]="next-more"),l}(t,r,n);return(0,l.Y)("div",{ref:i,className:"dt-pagination",style:e,children:(0,l.Y)("ul",{className:"pagination pagination-sm",children:a.map(e=>"number"==typeof e?(0,l.Y)("li",{className:r===e?"active":void 0,children:(0,l.Y)("a",{href:`#page-${e}`,role:"button",onClick:t=>{t.preventDefault(),o(e)},children:e+1})},e):(0,l.Y)("li",{className:"dt-pagination-ellipsis",children:(0,l.Y)("span",{children:"…"})},e))})})})),ee=e=>e.join(`
`);function et(e=!1){if("u"<typeof document)return 0;if(void 0===n||e){let e=document.createElement("div"),t=document.createElement("div");e.style.cssText=ee`
      width: auto;
      height: 100%;
      overflow: scroll;
    `,t.style.cssText=ee`
      position: absolute;
      visibility: hidden;
      overflow: hidden;
      width: 100px;
      height: 50px;
    `,t.append(e),document.body.append(t),n=t.clientWidth-e.clientWidth,t.remove()}return n}function er(){return(er=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let en=(e,t)=>e+t,el=(e,t)=>({style:er({},e.props.style,t)}),eo={tableLayout:"fixed"};function ei({sticky:e={},width:t,height:r,children:n,setStickyState:i}){let a,c,u,s,d,h,p,f=(0,m.useTheme)();if(!n||"table"!==n.type)throw Error("<StickyWrap> must have only one <table> element as child");if(o.Children.forEach(n.props.children,e=>{e&&("thead"===e.type?a=e:"tbody"===e.type?c=e:"tfoot"===e.type&&(u=e))}),!a||!c)throw Error("<table> in <StickyWrap> must contain both thead and tbody.");let g=(0,o.useMemo)(()=>o.Children.toArray(null==a?void 0:a.props.children).pop().props.children.length,[a]),v=(0,o.useRef)(null),b=(0,o.useRef)(null),S=(0,o.useRef)(null),w=(0,o.useRef)(null),k=(0,o.useRef)(null),x=et(),{bodyHeight:C,columnWidths:A,hasVerticalScroll:E}=e,N=!A||e.width!==t||e.height!==r||e.setStickyState!==i;(0,o.useLayoutEffect)(()=>{var e,n;if(!v.current)return;let l=v.current,o=l.clientHeight,a=b.current?b.current.clientHeight:0;if(!o)return;let c=l.parentNode.clientHeight,u=Array.from(null==(n=l.childNodes)?void 0:n[(null==(e=l.childNodes)?void 0:e.length)-1||0].childNodes).map(e=>{var t;return(null==(t=e.getBoundingClientRect())?void 0:t.width)||e.clientWidth}),[s,d]=function({width:e,height:t,innerHeight:r,innerWidth:n,scrollBarSize:l}){let o=r>t;return[o,n>e-(o?l:0)]}({width:t,height:r-o-a,innerHeight:c,innerWidth:u.reduce(en),scrollBarSize:x}),h=Math.min(r,d?c+x:c);i({hasVerticalScroll:s,hasHorizontalScroll:d,setStickyState:i,width:t,height:r,realHeight:h,tableHeight:c,bodyHeight:h-o-a,columnWidths:u})},[t,r,i,x]);let O=(0,y.AH)`
    &::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }
    &::-webkit-scrollbar-track {
      background: ${f.colorFillQuaternary};
    }
    &::-webkit-scrollbar-thumb {
      background: ${f.colorFillSecondary};
      border-radius: ${f.borderRadiusSM}px;
      &:hover {
        background: ${f.colorFillTertiary};
      }
    }
    &::-webkit-scrollbar-corner {
      background: ${f.colorFillQuaternary};
    }
  `;if(N){let e=(0,o.cloneElement)(a,{ref:v}),t=u&&(0,o.cloneElement)(u,{ref:b});s=(0,l.Y)("div",{style:{height:r,overflow:"auto",visibility:"hidden",scrollbarGutter:"stable"},css:O,role:"presentation",children:(0,o.cloneElement)(n,{role:"presentation"},e,c,t)},"sizer")}let T=null==A?void 0:A.slice(0,g);if(T&&C){let r=(0,l.Y)("colgroup",{children:T.map((e,t)=>(0,l.Y)("col",{width:e},t))}),i=E?t-x:t;d=(0,l.FD)("div",{ref:S,style:{overflow:"hidden",width:i,boxSizing:"border-box"},role:"presentation",children:[(0,o.cloneElement)((0,o.cloneElement)(n,{role:"presentation"}),el(n,eo),r,a),d]},"header"),h=u&&(0,l.FD)("div",{ref:w,style:{overflow:"hidden",width:i,boxSizing:"border-box"},role:"presentation",children:[(0,o.cloneElement)((0,o.cloneElement)(n,{role:"presentation"}),el(n,eo),r,u),h]},"footer"),p=(0,l.Y)("div",{ref:k,style:{height:C,overflow:"auto",scrollbarGutter:E?"stable":void 0,width:t,boxSizing:"border-box"},css:O,onScroll:e.hasHorizontalScroll?e=>{S.current&&(S.current.scrollLeft=e.currentTarget.scrollLeft),w.current&&(w.current.scrollLeft=e.currentTarget.scrollLeft)}:void 0,role:"presentation",children:(0,o.cloneElement)((0,o.cloneElement)(n,{role:"presentation"}),el(n,eo),r,c)},"body")}return(0,l.FD)("div",{style:{width:t,height:e.realHeight||r,overflow:"hidden"},role:"table",children:[d,p,h,s]})}function ea(e){let{dispatch:t,state:{sticky:r},data:n,page:i,rows:a,allColumns:c,getTableSize:u=()=>void 0}=e,s=(0,o.useCallback)(e=>{t({type:"setStickyState",size:e})},[t,u,i,a]);Object.assign(e,{setStickyState:s,wrapStickyTable:e=>{var t;let d,{width:h,height:p}=(t=[u],d=(0,o.useRef)(),(0,o.useLayoutEffect)(()=>{d.current=u}),(0,o.useMemo)(()=>{if(d.current)return u()},[d.current,d.current===u,...t||[]])||r),f=(0,o.useMemo)(e,[i,a,c]);return((0,o.useLayoutEffect)(()=>{h&&p||s()},[h,p]),h&&p)?0===n.length?f:(0,l.Y)(ei,{width:h,height:p,sticky:r,setStickyState:s,children:f}):null}})}function ec(e){e.useInstance.push(ea),e.stateReducers.push((e,t,r)=>{if("init"===t.type)return er({},e,{sticky:er({},null==r?void 0:r.sticky)});if("setStickyState"===t.type){let{size:n}=t;return n?er({},e,{sticky:er({},null==r?void 0:r.sticky,null==e?void 0:e.sticky,t.size)}):er({},e)}return e})}ec.pluginName="useSticky";var eu=r(90967);let es=(0,m.styled)(S.Select)`
  width: 120px;
  margin-right: 8px;
`,ed=function({value:e,onChange:t,searchOptions:r}){var n,o;return(0,l.Y)(es,{className:"search-select",value:e||(null!=(n=null==r||null==(o=r[0])?void 0:o.value)?n:""),options:r,onChange:t})};function eh(){return(eh=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function ep(e,t){if(null==e)return{};var r,n,l={},o=Object.getOwnPropertyNames(e);for(n=0;n<o.length;n++)r=o[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r]);return l}let ef={alphanumeric:(e,t,r)=>{let n=e.values[r],l=t.values[r];return n&&"string"==typeof n?l&&"string"==typeof l?n.localeCompare(l):1:-1}},eg=(0,j.v)(function(e){let{tableClassName:t,columns:r,data:n,serverPaginationData:i,width:a="100%",height:c=300,pageSize:u=0,initialState:s={},pageSizeOptions:d=eu.x,maxPageItemCount:h=9,sticky:p,searchInput:f=!0,onServerPaginationChange:g,rowCount:m,selectPageSize:y,noResults:b="No data found",hooks:w,serverPagination:k,wrapperRef:x,onColumnOrderChange:C,renderGroupingHeaders:A,renderTimeComparisonDropdown:E,handleSortByChange:N,sortByFromParent:O=[],manualSearch:T=!1,onSearchChange:$,initialSearchText:F,searchInputId:Y,onSearchColChange:M,searchOptions:I,onFilteredDataChange:R,onFilteredRowsChange:H}=e,L=ep(e,["tableClassName","columns","data","serverPaginationData","width","height","pageSize","initialState","pageSizeOptions","maxPageItemCount","sticky","searchInput","onServerPaginationChange","rowCount","selectPageSize","noResults","hooks","serverPagination","wrapperRef","onColumnOrderChange","renderGroupingHeaders","renderTimeComparisonDropdown","handleSortByChange","sortByFromParent","manualSearch","onSearchChange","initialSearchText","searchInputId","onSearchColChange","searchOptions","onFilteredDataChange","onFilteredRowsChange"]),P=[_.useGlobalFilter,_.useSortBy,_.usePagination,_.useColumnOrder,p?ec:[],w||[]].flat(),z=Object.keys((null==n?void 0:n[0])||{}),j=(0,B.Z)(z),W=k?m:n.length,V=(0,o.useRef)([]),K=(0,o.useRef)([u,W]),Q=u>0&&W>0,Z=Q||!!f||E,ee=eh({},s,{sortBy:k?O:V.current,pageSize:u>0?u:W||10}),et=(0,o.useRef)(null),er=(0,o.useRef)(null),en=(0,o.useRef)(null),el=x||et,eo=JSON.stringify(i),ei=(0,o.useCallback)(()=>{if(el.current){var e,t;return{width:Number(a)||el.current.clientWidth,height:(Number(c)||el.current.clientHeight)-((null==(e=er.current)?void 0:e.clientHeight)||0)-((null==(t=en.current)?void 0:t.clientHeight)||0)}}},[c,a,el,Q,Z,en,W,eo]),ea=(0,o.useCallback)((e,t,r)=>(0,U.Ht)(e,r,{keys:[...t,e=>t.map(t=>e.values[t]).join(" ")],threshold:U.cG.ACRONYM}),[]),{rows:es,getTableProps:eg,getTableBodyProps:em,prepareRow:ey,headerGroups:ev,footerGroups:eb,page:eS,pageCount:ew,gotoPage:ek,preGlobalFilteredRows:ex,setGlobalFilter:eC,setPageSize:eA,wrapStickyTable:eE,setColumnOrder:eN,allColumns:eO,state:{pageIndex:eT,pageSize:e$,globalFilter:eF,sticky:eY={},sortBy:eM}}=(0,_.useTable)(eh({columns:r,data:n,initialState:ee,getTableSize:ei,globalFilter:ea,sortTypes:ef,autoResetSortBy:!D()(z,j),manualSortBy:!!k},L),...P),eI=(0,o.useMemo)(()=>es.map((e,t)=>{var r;return null!=(r=e.id)?r:t}).sort().join("|"),[es]),eR=(0,o.useRef)(es);eR.current=es,(0,o.useEffect)(()=>{if(!R)return;let e="string"==typeof eF?eF:void 0;R(eR.current,e)},[eF,R,eI]);let eH=(0,o.useCallback)(e=>{T&&$?$(e):eC(e)},[T,$,eC]);(0,o.useEffect)(()=>{let e=(null==i?void 0:i.sortBy)||[];if(k&&!D()(eM,e))if(Array.isArray(eM)&&eM.length>0){let[e]=eM,t=r.find(t=>(null==t?void 0:t.id)===(null==e?void 0:e.id));t&&"columnKey"in t&&N([eh({},e,{key:t.columnKey})])}else N([])},[eM]);let eL=e=>{k&&g(0,e),(e||0!==W)&&eA(0===e?W:e)},eD="function"==typeof b?b(eF):b,eP=()=>(0,l.Y)("div",{className:"dt-no-results",children:eD});if(!r||0===r.length)return eE?eE(eP):eP();let ez=r.some(e=>!!e.Footer),ej=-1,eB=e=>{let t=e.target;ej=eO.findIndex(e=>e.id===t.dataset.columnName),e.dataTransfer.setData("text/plain",`${ej}`)},e_=e=>{let t=e.target,r=eO.findIndex(e=>e.id===t.dataset.columnName);if(-1!==r){let e=eO.map(e=>e.id),t=e.splice(ej,1);e.splice(r,0,t[0]),eN(e),null==C||C()}e.preventDefault()},eU=()=>(0,l.FD)("table",eh({},eg({className:t}),{children:[(0,l.FD)("thead",{children:[A?A():null,ev.map(e=>{let t=e.getHeaderGroupProps(),{key:r}=t,n=ep(t,["key"]);return(0,l.Y)("tr",eh({},n,{children:e.headers.map(e=>e.render("Header",eh({key:e.id},e.getSortByToggleProps(),{onDragStart:eB,onDrop:e_})))}),r||e.id)})]}),(0,l.Y)("tbody",eh({},em(),{children:eS&&eS.length>0?eS.map(e=>{ey(e);let t=e.getRowProps(),{key:r}=t,n=ep(t,["key"]);return(0,l.Y)("tr",eh({},n,{role:"row",children:e.cells.map(e=>e.render("Cell",{key:e.column.id}))}),r||e.id)}):(0,l.Y)("tr",{children:(0,l.Y)("td",{className:"dt-no-results",colSpan:r.length,children:eD})})})),ez&&(0,l.Y)("tfoot",{children:eb.map(e=>{let t=e.getHeaderGroupProps(),{key:r}=t,n=ep(t,["key"]);return(0,l.Y)("tr",eh({},n,{role:"row",children:e.headers.map(e=>e.render("Footer",{key:e.id}))}),r||e.id)})})]}));(K.current[0]!==u||0===u&&K.current[1]!==W)&&(K.current=[u,W],eL(u));let eG=eY.height?{}:{visibility:"hidden"},eW=ew,eV=e$,eX=eT,eK=ek;if(k){var eQ,eZ;let e=null!=(eQ=null==i?void 0:i.pageSize)?eQ:u;Number.isFinite(eW=Math.ceil(m/e))||(eW=0),eV=e,-1===d.findIndex(([e])=>e>=eV)&&(eV=0),eX=null!=(eZ=null==i?void 0:i.currentPage)?eZ:0,eK=t=>g(t,e)}let eq=(0,o.useRef)(!0);(0,o.useEffect)(()=>(eq.current=!0,()=>{eq.current=!1}),[]);let eJ=(0,o.useRef)(null),e0=(0,o.useRef)("");function e1(e){let t=e.original;if(t){var r,n,l;let e=null!=(r=null!=(n=null!=(l=t.id)?l:t.ID)?n:t.key)?r:t.uuid;if(null!=e)return String(e)}let o=e.values;return Object.keys(o).sort().map(e=>{var t;return String(null!=(t=o[e])?t:"")}).join("|")}return(0,o.useEffect)(()=>{var e,t;let r,n,l,o,i;if(k||"function"!=typeof H)return;let a=(n=(r=es.map(e1)).length,l=null!=(e=r[0])?e:"",o=null!=(t=r[n-1])?t:"",i=function(e){let t=0;for(let r=0;r<e.length;r+=1)t=31*t+e.charCodeAt(r)|0;return String(t)}(r.join("\x01")),`${n}|${l}|${o}|${i}`);return a!==e0.current&&(e0.current=a,null!=eJ.current&&cancelAnimationFrame(eJ.current),eJ.current=requestAnimationFrame(()=>{eq.current&&H(es.map(e=>e.original))})),()=>{null!=eJ.current&&(cancelAnimationFrame(eJ.current),eJ.current=null)}},[es,k,H]),(0,l.FD)("div",{ref:el,style:{width:a,height:c},children:[Z?(0,l.Y)("div",{ref:er,className:"form-inline dt-controls",children:(0,l.FD)(G.s,{wrap:!0,className:"row",align:"center",justify:"space-between",gap:"middle",children:[Q?(0,l.Y)(q,{total:W,current:eV,options:d,selectRenderer:"boolean"==typeof y?void 0:y,onChange:eL}):null,(0,l.FD)(G.s,{wrap:!0,align:"center",gap:"middle",children:[k&&(0,l.FD)(S.Space,{size:"small",className:"search-select-container",children:[(0,l.FD)("span",{className:"search-by-label",children:[(0,v.t)("Search by"),":"]}),(0,l.Y)(ed,{searchOptions:I,value:(null==i?void 0:i.searchColumn)||"",onChange:M})]}),f&&(0,l.Y)(X,{searchInput:"boolean"==typeof f?void 0:f,preGlobalFilteredRows:ex,setGlobalFilter:T?eH:eC,filterValue:T?F:eF,id:Y,serverPagination:!!k,rowCount:m}),E?E():null]})]})}):null,eE?eE(eU):eU(),Q&&eW>1?(0,l.Y)(J,{ref:en,style:eG,maxPageItemCount:h,pageCount:eW,currentPage:eX,onPageChange:eK}):null]})}),em=m.styled.div`
  ${({theme:e})=>(0,y.AH)`
    /* Base table styles */
    table {
      width: 100%;
      min-width: auto;
      max-width: none;
      margin: 0;
      border-collapse: collapse;
    }

    /* Cell styling */
    th,
    td {
      min-width: 4.3em;
      padding: 0.75rem;
      vertical-align: top;
    }

    /* Header styling */
    thead > tr > th {
      padding-right: 0;
      position: relative;
      background-color: ${e.colorBgBase};
      text-align: left;
      border-bottom: 2px solid ${e.colorSplit};
      color: ${e.colorText};
      vertical-align: bottom;
    }

    /* Icons in header */
    th svg {
      margin: 1px ${e.sizeUnit/2}px;
      fill-opacity: 0.2;
    }

    th.is-sorted svg {
      color: ${e.colorText};
      fill-opacity: 1;
    }

    /* Table body styling */
    .table > tbody > tr:first-of-type > td,
    .table > tbody > tr:first-of-type > th {
      border-top: 0;
    }

    .table > tbody tr td {
      font-feature-settings: 'tnum' 1;
      border-top: 1px solid ${e.colorSplit};
    }

    /* Bootstrap-like condensed table styles */
    table.table-condensed,
    table.table-sm {
      font-size: ${e.fontSizeSM}px;
    }

    table.table-condensed th,
    table.table-condensed td,
    table.table-sm th,
    table.table-sm td {
      padding: 0.3rem;
    }

    /* Bootstrap-like bordered table styles */
    table.table-bordered {
      border: 1px solid ${e.colorSplit};
    }

    table.table-bordered th,
    table.table-bordered td {
      border: 1px solid ${e.colorSplit};
    }

    /* Bootstrap-like striped table styles */
    table.table-striped tbody tr:nth-of-type(odd) {
      background-color: ${e.colorBgLayout};
    }

    /* Controls and metrics */
    .dt-controls {
      padding-bottom: 0.65em;
    }

    .dt-metric {
      text-align: right;
    }

    .dt-totals {
      font-weight: ${e.fontWeightStrong};
    }

    .dt-is-null {
      color: ${e.colorTextTertiary};
    }

    td.dt-is-filter {
      cursor: pointer;
    }

    td.dt-is-filter:hover {
      background-color: ${e.colorFillContentHover};
    }

    td.dt-is-active-filter,
    td.dt-is-active-filter:hover {
      background-color: ${e.colorFillContentHover};
    }

    .dt-global-filter {
      float: right;
    }

    /* Cell truncation */
    .dt-truncate-cell {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .dt-truncate-cell:hover {
      overflow: visible;
      white-space: normal;
      height: auto;
    }

    /* Pagination styling */
    .dt-pagination {
      text-align: right;
      /* use padding instead of margin so clientHeight can capture it */
      padding: ${e.paddingXXS}px 0px;
    }

    .dt-pagination .pagination > li {
      display: inline;
      margin: 0 ${e.marginXXS}px;
    }

    .dt-pagination .pagination > li > a,
    .dt-pagination .pagination > li > span {
      background-color: ${e.colorBgBase};
      color: ${e.colorText};
      border-color: ${e.colorBorderSecondary};
      padding: ${e.paddingXXS}px ${e.paddingXS}px;
      border-radius: ${e.borderRadius}px;
    }

    .dt-pagination .pagination > li.active > a,
    .dt-pagination .pagination > li.active > span,
    .dt-pagination .pagination > li.active > a:focus,
    .dt-pagination .pagination > li.active > a:hover,
    .dt-pagination .pagination > li.active > span:focus,
    .dt-pagination .pagination > li.active > span:hover {
      background-color: ${e.colorPrimary};
      color: ${e.colorBgContainer};
      border-color: ${e.colorBorderSecondary};
    }

    .pagination > li > span.dt-pagination-ellipsis:focus,
    .pagination > li > span.dt-pagination-ellipsis:hover {
      background: ${e.colorBgLayout};
      border-color: ${e.colorBorderSecondary};
    }

    .dt-no-results {
      text-align: center;
      padding: 1em 0.6em;
    }

    .right-border-only {
      border-right: 2px solid ${e.colorSplit};
    }

    table .right-border-only:last-child {
      border-right: none;
    }
  `}
`;var ey=r(61764),ev=r(42398),eb=r(81347);function eS(e,t,r){let{dataType:n,formatter:l,config:o={},currencyCodeColumn:i}=e,a=n===b.GenericDataType.Numeric,c=void 0===o.d3SmallNumberFormat?l:o.currencyFormat?new ey.Ay({d3Format:o.d3SmallNumberFormat,currency:o.currencyFormat}):(0,ev.gV)(o.d3SmallNumberFormat);var u=a&&"number"==typeof t&&1>Math.abs(t)?c:l;return void 0===t?[!1,""]:null===t||t instanceof eb.A&&null===t.input?[!1,"N/A"]:u?u instanceof ey.Ay?[!1,u(t,r,i)]:[!1,u(t)]:"string"==typeof t?(0,f.fE)(t)?[!0,(0,f.pn)(t)]:[!1,t]:[!1,t.toString()]}var ew=r(85282);function ek(){return(ek=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let ex={enter:"Enter",spacebar:"Spacebar",space:" "};function eC(e){return e.replace(/%/g,"percent").replace(/#/g,"hash").replace(/△/g,"delta").replace(/\s+/g,"_").replace(/[^a-zA-Z0-9_-]/g,"_").replace(/_+/g,"_").replace(/^_+|_+$/g,"")}function eA({column:e}){let{isSorted:t,isSortedDesc:r}=e,n=(0,l.Y)(i.A,{});return t&&(n=r?(0,l.Y)(a.A,{}):(0,l.Y)(c.A,{})),n}let eE=m.styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;function eN({count:e,value:t,onChange:r,onBlur:n,inputRef:o}){return(0,l.FD)(S.Space,{direction:"horizontal",size:4,className:"dt-global-filter",children:[(0,v.t)("Search"),(0,l.Y)(S.Input,{"aria-label":(0,v.t)("Search %s records",e),placeholder:(0,v.tn)("%s record","%s records...",e,e),value:t,onChange:r,onBlur:n,ref:o})]})}function eO({options:e,current:t,onChange:r}){let{Option:n}=S.Select;return(0,l.FD)("span",{className:"dt-select-page-size",children:[(0,l.Y)(eE,{htmlFor:"pageSizeSelect",children:(0,v.t)("Select page size")}),(0,v.t)("Show")," ",(0,l.Y)(S.Select,{id:"pageSizeSelect",value:t,onChange:e=>r(e),size:"small",css:e=>(0,y.AH)`
          width: ${18*e.sizeUnit}px;
        `,"aria-label":(0,v.t)("Show entries per page"),children:e.map(e=>{let[t,r]=Array.isArray(e)?e:[e,e];return(0,l.Y)(n,{value:Number(t),children:r},t)})})," ",(0,v.t)("entries per page")]})}let eT=e=>e?(0,v.t)("No matching records found"):(0,v.t)("No records found");function e$(e){let{timeGrain:t,height:r,width:n,data:i,totals:a,isRawRecords:c,rowCount:u=0,columns:S,alignPositiveNegative:E=!1,colorPositiveNegative:N=!1,includeSearch:O=!1,pageSize:$=0,serverPagination:M=!1,serverPaginationData:R,setDataMask:L,showCellBars:j=!0,sortDesc:B=!1,filters:_,sticky:U=!0,columnColorFormatters:G,allowRearrangeColumns:W=!1,allowRenderHtml:V=!0,onContextMenu:X,emitCrossFilters:K,isUsingTimeComparison:Q,basicColorFormatters:Z,basicColorColumnFormatters:q,hasServerPageLengthChanged:J,serverPageLength:ee,slice_id:er,columnLabelToNameMap:en={}}=e,el=(0,o.useMemo)(()=>[{key:"all",label:(0,v.t)("Display all")},{key:"#",label:"#"},{key:"△",label:"△"},{key:"%",label:"%"}],[]),eo=(0,o.useCallback)(e=>c?String(null!=e?e:""):(0,d.PT)(t)(e),[t,c]),[ei,ea]=(0,o.useState)({width:0,height:0}),[ec,es]=(0,o.useState)(!1),[ed,eh]=(0,o.useState)(!1),[ep,ef]=(0,o.useState)([el[0].key]),[ey,ev]=(0,o.useState)([]),[eE,e$]=(0,o.useState)(a),eF=(0,m.useTheme)();(0,o.useEffect)(()=>{e$(a)},[a]);let eY=(0,o.useMemo)(()=>(M?eu.D:eu.x).filter(([e])=>M?e<=u:e<=2*i.length),[i.length,u,M]),eM=(0,o.useCallback)(function(e,t){let r=null==i?void 0:i.map(t=>null==t?void 0:t[e]).filter(e=>"number"==typeof e);return r.length>0?t?[0,function(e){let t;for(let r of e)null!=r&&(t<r||void 0===t&&r>=r)&&(t=r);return t}(r.map(Math.abs))]:function(e){let t,r;for(let n of e)null!=n&&(void 0===t?n>=n&&(t=r=n):(t>n&&(t=n),r<n&&(r=n)));return[t,r]}(r):null},[i]),eI=(0,o.useCallback)(function(e,t){return!!_&&!!_[e]&&_[e].some(e=>e===t||e instanceof Date&&t instanceof Date&&e.getTime()===t.getTime())},[_]),eR=(0,o.useCallback)((e,r)=>{let n=ek({},_);Array.isArray((n=_&&eI(e,r)?{}:{[e]:[r]})[e])&&0===n[e].length&&delete n[e];let l=Object.keys(n),o=Object.values(n),i=[];return l.forEach(e=>{let t=e===h.Tf,r=(0,p.A)(null==n?void 0:n[e]);if(r.length){let e=r.map(e=>t?eo(e):e);i.push(`${e.join(", ")}`)}}),{dataMask:{extraFormData:{filters:0===l.length?[]:l.map(e=>{var r;let l=null!=(r=en[e])?r:e,o=(0,p.A)(null==n?void 0:n[e]);return o.length?{col:l,op:"IN",val:o.map(e=>e instanceof Date?e.getTime():e),grain:l===h.Tf?t:void 0}:{col:l,op:"IS NULL"}})},filterState:{label:i.join(", "),value:o.length?o:null,filters:n&&Object.keys(n).length?n:null}},isCurrentValueSelected:eI(e,r)}},[_,eI,eo,t,en]),eH=(0,o.useCallback)(function(e,t){K&&L(eR(e,t).dataMask)},[K,eR,L]),eL=(0,o.useCallback)(e=>{let{isNumeric:t,config:r={}}=e;return{textAlign:r.horizontalAlign||(t&&!Q?"right":"left")}},[Q]),eD=(0,o.useMemo)(()=>[(0,v.t)("Main"),"#","△","%"],[]),eP=(0,o.useMemo)(()=>{if(!Q)return S;let e=el[0].key,t=eD[0],r=ep.includes(e);return S.filter(({label:e,key:n})=>{let l=n.substring(e.length),o=ey.includes(l);return e===t||!o&&(!eD.includes(e)||r||ep.includes(e))})},[S,el,eD,Q,ey,ep]),ez=(0,o.useMemo)(()=>{if(X&&!c)return(e,t,r,n)=>{let l=[];eP.forEach(t=>{if(!t.isMetric){let r=e[t.key];r=(0,f.y4)(r),l.push({col:t.key,op:"==",val:r,formattedVal:eS(t,r)[1]})}}),X(r,n,{drillToDetail:l,crossFilter:t.isMetric?void 0:eR(t.key,t.value),drillBy:t.isMetric?void 0:{filters:[{col:t.key,op:"==",val:(0,f.y4)(t.value)}],groupbyFieldName:"groupby"}})}},[X,c,eP,eR]),ej=(0,o.useCallback)((e,t)=>{let r={};return t&&e.forEach((e,t)=>{if(eD.includes(e.label)){let n=e.key.substring(e.label.length);r[n]?r[n].push(t):r[n]=[t]}}),r},[eD]),eB=(0,o.useMemo)(()=>eP.filter(e=>{var t;return(null==(t=e.config)?void 0:t.visible)!==!1}),[eP]),e_=(0,o.useMemo)(()=>ej(eB,Q),[eB,ej,Q]),eU=(0,o.useCallback)((e,t)=>{var r;let{key:n,label:o,dataType:i,isMetric:a,isPercentMetric:u,config:d={},description:h}=e,p=d.customColumnName||o,f=p;["#","△","%",(0,v.t)("Main")].includes(e.label)&&(e.label===(0,v.t)("Main")?f=d.customColumnName||e.originalLabel||"":d.customColumnName?f=!1!==d.displayTypeIcon?`${e.label} ${d.customColumnName}`:d.customColumnName:!1===d.displayTypeIcon&&(f=""));let S=Number.isNaN(Number(d.columnWidth))?d.columnWidth:Number(d.columnWidth),w=eL(e),x=void 0===d.alignPositiveNegative?E:d.alignPositiveNegative,C=void 0===d.colorPositiveNegative?N:d.colorPositiveNegative,{truncateLongCells:A}=d,O=Array.isArray(G)&&G.length>0,T=Q&&Array.isArray(Z)&&Z.length>0,$=void 0===d.showCellBars?j:d.showCellBars,F=!T&&$&&(a||c||u)&&eM(n,x),M="";if(K&&!a&&(M+=" dt-is-filter"),a||u){if(eD.includes(p)){let e=e_[n.substring(p.length)]||[];t===e[e.length-1]&&(M+=" right-border-only")}}else M+=" right-border-only";let I=eC(null!=(r=e.originalLabel)?r:e.key);return{id:String(t),columnKey:n,accessor:e=>e[n],Cell:({value:t,row:r})=>{var o,i,c,u,d,h;let p,f,v,[b,k]=eS(e,t,r.original),E=b&&V?{__html:k}:void 0,N=!0,Y="",R=e.key.substring(e.label.length).trim();if(!O&&T&&(p=null==(i=Z[r.index][R])?void 0:i.backgroundColor,Y=e.label===eD[0]?null==(c=Z[r.index][R])?void 0:c.mainArrow:""),O){let n=(e,t)=>{let r=e.getColorFromValue(t);r&&(e.objectFormatting===P.yQ.TEXT_COLOR||e.toTextColor?f=r:e.objectFormatting===P.yQ.CELL_BAR?$&&(v=r.slice(0,-2)):(p=r,N=!1))};G.filter(t=>t.columnFormatting?t.columnFormatting===e.key:t.column===e.key).forEach(e=>{let l;l=e.columnFormatting?r.original[e.column]:t,n(e,l)}),G.filter(e=>e.columnFormatting===P.yQ.ENTIRE_ROW).forEach(e=>n(e,r.original[e.column]))}q&&(null==q?void 0:q.length)>0&&(p=(null==(u=q[r.index][e.key])?void 0:u.backgroundColor)||p,Y=e.label===eD[0]?null==(d=q[r.index][e.key])?void 0:d.mainArrow:"");let H=r.index%2==0?eF.colorBgLayout:eF.colorBgBase,L=(0,z.sg)({backgroundColor:p,color:f},H),D=m.styled.td`
            text-align: ${w.textAlign};
            white-space: ${t instanceof Date?"nowrap":void 0};
            position: relative;
            font-weight: ${f?`${eF.fontWeightBold}`:`${eF.fontWeightNormal}`};
            background: ${p||void 0};
            padding-left: ${e.isChildColumn?`${5*eF.sizeUnit}px`:`${eF.sizeUnit}px`};
          `,j=(0,y.AH)`
            position: absolute;
            height: 100%;
            display: block;
            top: 0;
            ${F&&"number"==typeof t&&N&&`
                width: ${function({value:e,valueRange:t,alignPositiveNegative:r}){let[n,l]=t;return r?Math.abs(Math.round(e/l*100)):Math.round(Math.abs(e)/(Math.abs(Math.max(l,0))+Math.abs(Math.min(n,0)))*100)}({value:t,valueRange:F,alignPositiveNegative:x})}%;
                left: ${function({value:e,valueRange:t,alignPositiveNegative:r}){if(r)return 0;let[n,l]=t,o=Math.abs(Math.min(n,0));return Math.round(Math.min(o+e,o)/(Math.abs(Math.max(l,0))+o)*100)}({value:t,valueRange:F,alignPositiveNegative:x})}%;
                background-color: ${v&&`${v}99`||function({value:e,colorPositiveNegative:t=!1,theme:r}){return t?e<0?`${r.colorError}50`:`${r.colorSuccess}50`:`${r.colorFill}`}({value:t,colorPositiveNegative:C,theme:eF})};
              `}
          `,B=(0,y.AH)`
            color: ${Z&&(null==(o=Z[r.index][R])?void 0:o.arrowColor)===P.mH.Green?eF.colorSuccess:eF.colorError};
            margin-right: ${eF.sizeUnit}px;
          `;q&&(null==q?void 0:q.length)>0&&(B=(0,y.AH)`
              color: ${(null==(h=q[r.index][e.key])?void 0:h.arrowColor)===P.mH.Green?eF.colorSuccess:eF.colorError};
              margin-right: ${eF.sizeUnit}px;
            `);let _={"aria-labelledby":`header-${I}`,role:"cell",title:"number"==typeof t?String(t):void 0,onClick:!K||F||a?void 0:()=>{(0,g.j)()||eH(n,t)},onContextMenu:e=>{ez&&(e.preventDefault(),e.stopPropagation(),ez(r.original,{key:n,value:t,isMetric:a},e.nativeEvent.clientX,e.nativeEvent.clientY))},className:[M,null==t||t instanceof eb.A&&null==t.input?"dt-is-null":"",eI(n,t)?" dt-is-active-filter":""].join(" "),style:L?{color:L}:void 0,tabIndex:0};return E?A?(0,l.Y)(D,ek({},_,{children:(0,l.Y)("div",{className:"dt-truncate-cell",style:S?{width:S}:void 0,dangerouslySetInnerHTML:E})})):(0,l.Y)(D,ek({},_,{dangerouslySetInnerHTML:E})):(0,l.FD)(D,ek({},_,{children:[F&&(0,l.Y)("div",{className:s()("cell-bar","number"==typeof t&&t<0?"negative":"positive"),css:j,role:"presentation"}),A?(0,l.FD)("div",{className:"dt-truncate-cell",style:S?{width:S}:void 0,children:[Y&&(0,l.Y)("span",{css:B,children:Y}),k]}):(0,l.FD)(l.FK,{children:[Y&&(0,l.Y)("span",{css:B,children:Y}),k]})]}))},Header:({column:e,onClick:t,style:r,onDragStart:n,onDrop:o})=>(0,l.FD)("th",ek({id:`header-${I}`,title:h||(0,v.t)("Shift + Click to sort by multiple columns"),className:[M,e.isSorted?"is-sorted":""].join(" "),style:ek({},w,r),onKeyDown:t=>{Object.values(ex).includes(t.key)&&e.toggleSortBy()},role:"columnheader button",onClick:t,"data-column-name":e.id},W&&{draggable:"true",onDragStart:n,onDragOver:e=>e.preventDefault(),onDragEnter:e=>e.preventDefault(),onDrop:o},{tabIndex:0,children:[d.columnWidth?(0,l.Y)("div",{style:{width:S,height:.01}}):null,(0,l.FD)("div",{"data-column-name":e.id,css:{display:"inline-flex",alignItems:"flex-end"},children:[(0,l.Y)("span",{"data-column-name":e.id,children:f}),(0,l.Y)(eA,{column:e})]})]})),Footer:eE?0===t?(0,l.Y)("th",{children:(0,l.FD)("div",{css:(0,y.AH)`
                  display: flex;
                  align-items: center;
                  & svg {
                    margin-left: ${eF.sizeUnit}px;
                    color: ${eF.colorBorder} !important;
                  }
                `,children:[(0,v.t)("Summary"),(0,l.Y)(k.m,{overlay:(0,v.t)("Show total aggregations of selected metrics. Note that row limit does not apply to the result."),children:(0,l.Y)(Y.A,{})})]})},`footer-summary-${t}`):(0,l.Y)("td",{style:w,children:(0,l.Y)("strong",{children:eS(e,eE[n])[1]})},`footer-total-${t}`):void 0,sortDescFirst:B,sortType:i===b.GenericDataType.Temporal?"datetime":i===b.GenericDataType.String?"alphanumeric":"basic"}},[eL,E,N,G,Q,Z,j,c,eM,K,eD,eE,eF,B,e_,V,q,eI,eH,ez,W]),eG=(0,o.useMemo)(()=>eB.map(eU),[eB,eU]),[eW,eV]=(0,o.useState)([]),eX=(0,o.useCallback)((e,t)=>{if(!a||M)return;if(!(null==t?void 0:t.trim()))return void e$(a);let r=ek({},a);eP.forEach(t=>{if(t.isMetric||t.isPercentMetric){let n=e.reduce((e,r)=>{var n;let l=null==(n=r.original)?void 0:n[t.key],o=Number(String(null!=l?l:"").replace(/,/g,""));return Number.isFinite(o)?e+o:e},0);r[t.key]=n}}),e$(r)},[eP,M,a]);(0,o.useEffect)(()=>{let e=eG.filter(e=>(null==e?void 0:e.sortType)==="alphanumeric").map(e=>({value:e.columnKey,label:e.columnKey}));D()(e,eW)||eV(e||[])},[eG,eW]);let eK=(0,o.useCallback)((e,t)=>{let r=ek({},R,{currentPage:e,pageSize:t});(0,ew.F)(L,r)},[R,L]);(0,o.useEffect)(()=>{if(J){let e=ek({},R,{currentPage:0,pageSize:ee});(0,ew.F)(L,e)}},[J,ee,R,L]);let eQ=(0,o.useCallback)(({width:e,height:t})=>{ea({width:e,height:t})},[]);(0,o.useLayoutEffect)(()=>{let e=et(),{width:t,height:l}=ei;n-t>e||r-l>e?eQ({width:n-e,height:r-e}):(t-n>e||l-r>e)&&eQ({width:n,height:r})},[n,r,eQ,ei]);let{width:eZ,height:eq}=ei,eJ=(0,o.useCallback)(e=>{if(!M)return;let t=ek({},R,{sortBy:e});(0,ew.F)(L,t)},[M,R,L]),e0=H()(e=>{var t;let r=ek({},R,{searchColumn:(null==R?void 0:R.searchColumn)||(null==(t=eW[0])?void 0:t.value),searchText:e,currentPage:0});(0,ew.F)(L,r)},800),[e1,e2]=(0,o.useState)([]),e4=(0,o.useMemo)(()=>eB.map(e=>{var t;return{key:e.key,label:(null==(t=e.config)?void 0:t.customColumnName)||e.originalLabel||e.key}}),[eB]),e3=(0,o.useRef)(null);return(0,o.useEffect)(()=>{if(M)return;let e=e3.current,t=!e||!D()(e.rows,e1),r=!e||!D()(e.columns,e4);(t||r)&&(e3.current={rows:e1,columns:e4},(0,ew.F)(L,ek({},R,{clientView:{rows:e1,columns:e4,count:e1.length}})))},[e1,e4,M,L,R]),(0,l.Y)(em,{children:(0,l.Y)(eg,{columns:eG,data:i,rowCount:u,tableClassName:"table table-striped table-condensed",pageSize:$,serverPaginationData:R,pageSizeOptions:eY,width:eZ,height:eq,serverPagination:M,onServerPaginationChange:eK,onColumnOrderChange:()=>es(!ec),initialSearchText:(null==R?void 0:R.searchText)||"",sortByFromParent:(null==R?void 0:R.sortBy)||[],searchInputId:`${er}-search`,maxPageItemCount:n>340?9:7,noResults:eT,searchInput:O&&eN,selectPageSize:null!==$&&eO,sticky:U,renderGroupingHeaders:I()(e_)?void 0:()=>{let e=[],t=0;return Object.entries(e_||{}).sort((e,t)=>e[1][0]-t[1][0]).forEach(([r,n])=>{var o;let i=n[0],a=n.length,c=eB[i],u=c&&(null==(o=S.find(e=>e.key===c.key))?void 0:o.originalLabel)||r;for(let r=t;r<i;r+=1)e.push((0,l.Y)("th",{style:{borderBottom:0},"aria-label":`Header-${r}`},`placeholder-${r}`));e.push((0,l.FD)("th",{colSpan:a,style:{borderBottom:0},children:[u,(0,l.Y)("span",{css:(0,y.AH)`
              float: right;
              & svg {
                color: ${eF.colorIcon} !important;
              }
            `,children:ey.includes(r)?(0,l.Y)(T,{onClick:()=>ev(ey.filter(e=>e!==r))}):(0,l.Y)(F,{onClick:()=>ev([...ey,r])})})]},`header-${r}`)),t=i+a}),(0,l.Y)("tr",{css:(0,y.AH)`
          th {
            border-right: 1px solid ${eF.colorSplit};
          }
          th:first-child {
            border-left: none;
          }
          th:last-child {
            border-right: none;
          }
        `,children:e})},renderTimeComparisonDropdown:Q?()=>{let e=el[0].key;return(0,l.Y)(w.ms,{placement:"bottomRight",open:ed,onOpenChange:e=>{eh(e)},menu:{multiple:!0,onClick:t=>{let{key:r}=t;r===e?ef([e]):ep.includes(e)?ef([r]):ef(ep.includes(r)?ep.filter(e=>e!==r):[...ep,r])},onBlur:()=>{3===ep.length&&ef([el[0].key])},selectedKeys:ep,items:[{key:"all",label:(0,l.Y)("div",{css:(0,y.AH)`
                    max-width: 242px;
                    padding: 0 ${2*eF.sizeUnit}px;
                    color: ${eF.colorText};
                    font-size: ${eF.fontSizeSM}px;
                  `,children:(0,v.t)("Select columns that will be displayed in the table. You can multiselect columns.")}),type:"group",children:el.map(e=>({key:e.key,label:(0,l.FD)(l.FK,{children:[(0,l.Y)("span",{css:(0,y.AH)`
                          color: ${eF.colorText};
                        `,children:e.label}),(0,l.Y)("span",{css:(0,y.AH)`
                          float: right;
                          font-size: ${eF.fontSizeSM}px;
                        `,children:ep.includes(e.key)&&(0,l.Y)(x.A,{})})]})}))}]},trigger:["click"],children:(0,l.FD)("span",{children:[(0,l.Y)(C.A,{})," ",(0,l.Y)(A.A,{})]})})}:void 0,handleSortByChange:eJ,onSearchColChange:e=>{if(!D()(e,null==R?void 0:R.searchColumn)){let t=ek({},R,{searchColumn:e,searchText:""});(0,ew.F)(L,t)}},manualSearch:M,onSearchChange:e0,searchOptions:eW,onFilteredDataChange:eX,onFilteredRowsChange:e2})})}}}]);