(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{"6W8P":function(e,t,r){"use strict";r.d(t,"a",(function(){return y}));var a=r("1oX1");function n(e,t){return n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(e,t)}function s(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,n(e,t)}var c=r("q1tI"),o=r.n(c),i=r("NEqL");r("wqOt");function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},l.apply(this,arguments)}function u(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}var p=r("pdCH");o.a.Component;o.a.Component;var f=function(e,t){return"function"===typeof e?e(t):e},d=function(e,t){return"string"===typeof e?Object(i["c"])(e,null,null,t):e},m=function(e){return e},g=o.a.forwardRef;function v(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}"undefined"===typeof g&&(g=m);var h=g((function(e,t){var r=e.innerRef,a=e.navigate,n=e.onClick,s=u(e,["innerRef","navigate","onClick"]),c=s.target,i=l({},s,{onClick:function(e){try{n&&n(e)}catch(t){throw e.preventDefault(),t}e.defaultPrevented||0!==e.button||c&&"_self"!==c||v(e)||(e.preventDefault(),a())}});return i.ref=m!==g&&t||r,o.a.createElement("a",i)}));var y=g((function(e,t){var r=e.component,n=void 0===r?h:r,s=e.replace,c=e.to,i=e.innerRef,v=u(e,["component","replace","to","innerRef"]);return o.a.createElement(a["e"].Consumer,null,(function(e){e||Object(p["default"])(!1);var r=e.history,a=d(f(c,e.location),e.location),u=a?r.createHref(a):"",h=l({},v,{href:u,navigate:function(){var t=f(c,e.location),a=s?r.replace:r.push;a(t)}});return m!==g?h.ref=t||i:h.innerRef=i,o.a.createElement(n,h)}))})),b=function(e){return e},k=o.a.forwardRef;function O(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((function(e){return e})).join(" ")}"undefined"===typeof k&&(k=b);k((function(e,t){var r=e["aria-current"],n=void 0===r?"page":r,s=e.activeClassName,c=void 0===s?"active":s,i=e.activeStyle,m=e.className,g=e.exact,v=e.isActive,h=e.location,j=e.sensitive,E=e.strict,C=e.style,w=e.to,N=e.innerRef,P=u(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return o.a.createElement(a["e"].Consumer,null,(function(e){e||Object(p["default"])(!1);var r=h||e.location,s=d(f(w,r),r),u=s.pathname,x=u&&u.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),_=x?Object(a["f"])(r.pathname,{path:x,exact:g,sensitive:j,strict:E}):null,S=!!(v?v(_,r):_),W=S?O(m,c):m,D=S?l({},C,{},i):C,I=l({"aria-current":S&&n||null,className:W,style:D,to:s},P);return b!==k?I.ref=t||N:I.innerRef=N,o.a.createElement(y,I)}))}))},CFYs:function(e,t,r){"use strict";var a=r("rePB"),n=r("wx14"),s=r("1OyB"),c=r("vuIU"),o=r("JX7q"),i=r("Ji7U"),l=r("LK+K"),u=r("q1tI"),p=r("TSYQ"),f=r.n(p),d=r("bT9E"),m=r("4i/N"),g=r("bRQS"),v=r("jO45"),h=r("jN4g"),y=r("H84U"),b=r("CWQg"),k=r("uaoM"),O=r("AJpP");function j(e){return!e||e<0?0:e>100?100:e}function E(e){var t=e.success,r=e.successPercent,a=r;return t&&"progress"in t&&(Object(k["a"])(!1,"Progress","`success.progress` is deprecated. Please use `success.percent` instead."),a=t.progress),t&&"percent"in t&&(a=t.percent),a}var C=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r},w=function(e){var t=[];return Object.keys(e).forEach((function(r){var a=parseFloat(r.replace(/%/g,""));isNaN(a)||t.push({key:a,value:e[r]})})),t=t.sort((function(e,t){return e.key-t.key})),t.map((function(e){var t=e.key,r=e.value;return"".concat(r," ").concat(t,"%")})).join(", ")},N=function(e,t){var r=e.from,a=void 0===r?O["presetPrimaryColors"].blue:r,n=e.to,s=void 0===n?O["presetPrimaryColors"].blue:n,c=e.direction,o=void 0===c?"rtl"===t?"to left":"to right":c,i=C(e,["from","to","direction"]);if(0!==Object.keys(i).length){var l=w(i);return{backgroundImage:"linear-gradient(".concat(o,", ").concat(l,")")}}return{backgroundImage:"linear-gradient(".concat(o,", ").concat(a,", ").concat(s,")")}},P=function(e){var t=e.prefixCls,r=e.direction,a=e.percent,s=e.strokeWidth,c=e.size,o=e.strokeColor,i=e.strokeLinecap,l=e.children,p=e.trailColor,f=e.success,d=o&&"string"!==typeof o?N(o,r):{background:o},m=p?{backgroundColor:p}:void 0,g=Object(n["a"])({width:"".concat(j(a),"%"),height:s||("small"===c?6:8),borderRadius:"square"===i?0:""},d),v=E(e),h={width:"".concat(j(v),"%"),height:s||("small"===c?6:8),borderRadius:"square"===i?0:"",backgroundColor:null===f||void 0===f?void 0:f.strokeColor},y=void 0!==v?u["createElement"]("div",{className:"".concat(t,"-success-bg"),style:h}):null;return u["createElement"](u["Fragment"],null,u["createElement"]("div",{className:"".concat(t,"-outer")},u["createElement"]("div",{className:"".concat(t,"-inner"),style:m},u["createElement"]("div",{className:"".concat(t,"-bg"),style:g}),y)),l)},x=P,_=r("ODXe"),S=r("Ff2n"),W={className:"",percent:0,prefixCls:"rc-progress",strokeColor:"#2db7f5",strokeLinecap:"round",strokeWidth:1,style:{},trailColor:"#D9D9D9",trailWidth:1},D=function(e){var t=e.map((function(){return Object(u["useRef"])()})),r=Object(u["useRef"])(null);return Object(u["useEffect"])((function(){var e=Date.now(),a=!1;Object.keys(t).forEach((function(n){var s=t[n].current;if(s){a=!0;var c=s.style;c.transitionDuration=".3s, .3s, .3s, .06s",r.current&&e-r.current<100&&(c.transitionDuration="0s, 0s")}})),a&&(r.current=Date.now())})),[t]},I=function(e){var t=e.className,r=e.percent,a=e.prefixCls,s=e.strokeColor,c=e.strokeLinecap,o=e.strokeWidth,i=e.style,l=e.trailColor,p=e.trailWidth,d=e.transition,m=Object(S["a"])(e,["className","percent","prefixCls","strokeColor","strokeLinecap","strokeWidth","style","trailColor","trailWidth","transition"]);delete m.gapPosition;var g=Array.isArray(r)?r:[r],v=Array.isArray(s)?s:[s],h=D(g),y=Object(_["a"])(h,1),b=y[0],k=o/2,O=100-o/2,j="M ".concat("round"===c?k:0,",").concat(k,"\n         L ").concat("round"===c?O:100,",").concat(k),E="0 0 100 ".concat(o),C=0;return u["createElement"]("svg",Object(n["a"])({className:f()("".concat(a,"-line"),t),viewBox:E,preserveAspectRatio:"none",style:i},m),u["createElement"]("path",{className:"".concat(a,"-line-trail"),d:j,strokeLinecap:c,stroke:l,strokeWidth:p||o,fillOpacity:"0"}),g.map((function(e,t){var r=1;switch(c){case"round":r=1-o/100;break;case"square":r=1-o/2/100;break;default:r=1;break}var n={strokeDasharray:"".concat(e*r,"px, 100px"),strokeDashoffset:"-".concat(C,"px"),transition:d||"stroke-dashoffset 0.3s ease 0s, stroke-dasharray .3s ease 0s, stroke 0.3s linear"},s=v[t]||v[v.length-1];return C+=e,u["createElement"]("path",{key:t,className:"".concat(a,"-line-path"),d:j,strokeLinecap:c,stroke:s,strokeWidth:o,fillOpacity:"0",ref:b[t],style:n})})))};I.defaultProps=W,I.displayName="Line";var L=0;function R(e){return+e.replace("%","")}function A(e){return Array.isArray(e)?e:[e]}function q(e,t,r,a){var n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,s=arguments.length>5?arguments[5]:void 0,c=50-a/2,o=0,i=-c,l=0,u=-2*c;switch(s){case"left":o=-c,i=0,l=2*c,u=0;break;case"right":o=c,i=0,l=-2*c,u=0;break;case"bottom":i=c,u=2*c;break;default:}var p="M 50,50 m ".concat(o,",").concat(i,"\n   a ").concat(c,",").concat(c," 0 1 1 ").concat(l,",").concat(-u,"\n   a ").concat(c,",").concat(c," 0 1 1 ").concat(-l,",").concat(u),f=2*Math.PI*c,d={stroke:"string"===typeof r?r:void 0,strokeDasharray:"".concat(t/100*(f-n),"px ").concat(f,"px"),strokeDashoffset:"-".concat(n/2+e/100*(f-n),"px"),transition:"stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s, opacity .3s ease 0s"};return{pathString:p,pathStyle:d}}var z=function(e){var t=e.prefixCls,r=e.strokeWidth,a=e.trailWidth,s=e.gapDegree,c=e.gapPosition,o=e.trailColor,i=e.strokeLinecap,l=e.style,p=e.className,d=e.strokeColor,m=e.percent,g=Object(S["a"])(e,["prefixCls","strokeWidth","trailWidth","gapDegree","gapPosition","trailColor","strokeLinecap","style","className","strokeColor","percent"]),v=u["useMemo"]((function(){return L+=1,L}),[]),h=q(0,100,o,r,s,c),y=h.pathString,b=h.pathStyle,k=A(m),O=A(d),j=O.find((function(e){return"[object Object]"===Object.prototype.toString.call(e)})),E=D(k),C=Object(_["a"])(E,1),w=C[0],N=function(){var e=0;return k.map((function(a,n){var o=O[n]||O[O.length-1],l="[object Object]"===Object.prototype.toString.call(o)?"url(#".concat(t,"-gradient-").concat(v,")"):"",p=q(e,a,o,r,s,c);return e+=a,u["createElement"]("path",{key:n,className:"".concat(t,"-circle-path"),d:p.pathString,stroke:l,strokeLinecap:i,strokeWidth:r,opacity:0===a?0:1,fillOpacity:"0",style:p.pathStyle,ref:w[n]})}))};return u["createElement"]("svg",Object(n["a"])({className:f()("".concat(t,"-circle"),p),viewBox:"0 0 100 100",style:l},g),j&&u["createElement"]("defs",null,u["createElement"]("linearGradient",{id:"".concat(t,"-gradient-").concat(v),x1:"100%",y1:"0%",x2:"0%",y2:"0%"},Object.keys(j).sort((function(e,t){return R(e)-R(t)})).map((function(e,t){return u["createElement"]("stop",{key:t,offset:e,stopColor:j[e]})})))),u["createElement"]("path",{className:"".concat(t,"-circle-trail"),d:y,stroke:o,strokeLinecap:i,strokeWidth:a||r,fillOpacity:"0",style:b}),N().reverse())};z.defaultProps=W,z.displayName="Circle";var F=z;function M(e){var t=e.percent,r=e.success,a=e.successPercent,n=j(E({success:r,successPercent:a}));return[n,j(j(t)-n)]}var K=function(e){var t=e.prefixCls,r=e.width,n=e.strokeWidth,s=e.trailColor,c=e.strokeLinecap,o=e.gapPosition,i=e.gapDegree,l=e.type,p=e.children,d=r||120,m={width:d,height:d,fontSize:.15*d+6},g=n||6,v=o||"dashboard"===l&&"bottom"||"top",h=function(){return i||0===i?i:"dashboard"===l?75:void 0},y="[object Object]"===Object.prototype.toString.call(e.strokeColor),b=[O["presetPrimaryColors"].green,e.strokeColor||null],k=f()("".concat(t,"-inner"),Object(a["a"])({},"".concat(t,"-circle-gradient"),y));return u["createElement"]("div",{className:k,style:m},u["createElement"](F,{percent:M(e),strokeWidth:g,trailWidth:g,strokeColor:b,strokeLinecap:c,trailColor:s,prefixCls:t,gapDegree:h(),gapPosition:v}),p)},B=K,J=function(e){for(var t=e.size,r=e.steps,n=e.percent,s=void 0===n?0:n,c=e.strokeWidth,o=void 0===c?8:c,i=e.strokeColor,l=e.trailColor,p=e.prefixCls,d=e.children,m=Math.round(r*(s/100)),g="small"===t?2:14,v=[],h=0;h<r;h+=1)v.push(u["createElement"]("div",{key:h,className:f()("".concat(p,"-steps-item"),Object(a["a"])({},"".concat(p,"-steps-item-active"),h<=m-1)),style:{backgroundColor:h<=m-1?i:l,width:g,height:o}}));return u["createElement"]("div",{className:"".concat(p,"-steps-outer")},v,d)},Q=J,V=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r},Y=(Object(b["a"])("line","circle","dashboard"),Object(b["a"])("normal","exception","active","success")),X=function(e){Object(i["a"])(r,e);var t=Object(l["a"])(r);function r(){var e;return Object(s["a"])(this,r),e=t.apply(this,arguments),e.renderProgress=function(t){var r,s,c=t.getPrefixCls,i=t.direction,l=Object(o["a"])(e),p=l.props,m=p.prefixCls,g=p.className,v=p.size,h=p.type,y=p.steps,b=p.showInfo,O=p.strokeColor,j=V(p,["prefixCls","className","size","type","steps","showInfo","strokeColor"]),E=c("progress",m),C=e.getProgressStatus(),w=e.renderProcessInfo(E,C);Object(k["a"])(!("successPercent"in p),"Progress","`successPercent` is deprecated. Please use `success.percent` instead."),"line"===h?s=y?u["createElement"](Q,Object(n["a"])({},e.props,{strokeColor:"string"===typeof O?O:void 0,prefixCls:E,steps:y}),w):u["createElement"](x,Object(n["a"])({},e.props,{prefixCls:E,direction:i}),w):"circle"!==h&&"dashboard"!==h||(s=u["createElement"](B,Object(n["a"])({},e.props,{prefixCls:E,progressStatus:C}),w));var N=f()(E,(r={},Object(a["a"])(r,"".concat(E,"-").concat(("dashboard"===h?"circle":y&&"steps")||h),!0),Object(a["a"])(r,"".concat(E,"-status-").concat(C),!0),Object(a["a"])(r,"".concat(E,"-show-info"),b),Object(a["a"])(r,"".concat(E,"-").concat(v),v),Object(a["a"])(r,"".concat(E,"-rtl"),"rtl"===i),r),g);return u["createElement"]("div",Object(n["a"])({},Object(d["a"])(j,["status","format","trailColor","strokeWidth","width","gapDegree","gapPosition","strokeLinecap","percent","success","successPercent"]),{className:N}),s)},e}return Object(c["a"])(r,[{key:"getPercentNumber",value:function(){var e=this.props.percent,t=void 0===e?0:e,r=E(this.props);return parseInt(void 0!==r?r.toString():t.toString(),10)}},{key:"getProgressStatus",value:function(){var e=this.props.status;return Y.indexOf(e)<0&&this.getPercentNumber()>=100?"success":e||"normal"}},{key:"renderProcessInfo",value:function(e,t){var r,a=this.props,n=a.showInfo,s=a.format,c=a.type,o=a.percent,i=E(this.props);if(!n)return null;var l=s||function(e){return"".concat(e,"%")},p="line"===c;return s||"exception"!==t&&"success"!==t?r=l(j(o),j(i)):"exception"===t?r=p?u["createElement"](h["a"],null):u["createElement"](m["a"],null):"success"===t&&(r=p?u["createElement"](v["a"],null):u["createElement"](g["a"],null)),u["createElement"]("span",{className:"".concat(e,"-text"),title:"string"===typeof r?r:void 0},r)}},{key:"render",value:function(){return u["createElement"](y["a"],null,this.renderProgress)}}]),r}(u["Component"]);X.defaultProps={type:"line",percent:0,showInfo:!0,trailColor:null,size:"default",gapDegree:void 0,strokeLinecap:"round"};t["a"]=X},Kvyg:function(e,t,r){},MXD1:function(e,t,r){"use strict";r("cIOH"),r("Kvyg")},a3w7:function(e,t,r){"use strict";r.r(t);r("14J3");var a=r("BMrR"),n=(r("+L6B"),r("2/Rp")),s=(r("jCWc"),r("kPKH")),c=(r("Q9mQ"),r("diRs")),o=(r("MXD1"),r("CFYs")),i=r("FL7T"),l=(r("miYZ"),r("tsqr")),u=r("kLnz"),p=(r("5NDa"),r("5rEg")),f=(r("OaEy"),r("2fM7")),d=(r("y8nQ"),r("Vl3Y")),m=r("q1tI"),g=r.n(m),v=r("9kvl"),h=r("6W8P"),y=r("sYde"),b=r.n(y),k=d["a"].Item,O=f["a"].Option,j=p["a"].Group,E={ok:g.a.createElement("div",{className:b.a.success},"\u5f3a\u5ea6\uff1a\u5f3a"),pass:g.a.createElement("div",{className:b.a.warning},"\u5f3a\u5ea6\uff1a\u4e2d"),poor:g.a.createElement("div",{className:b.a.error},"\u5f3a\u5ea6\uff1a\u592a\u77ed")},C={ok:"success",pass:"normal",poor:"exception"},w=function(e){var t,r=e.submitting,y=e.dispatch,w=e.userAndregister,N=Object(m["useState"])(0),P=Object(u["a"])(N,2),x=P[0],_=P[1],S=Object(m["useState"])(!1),W=Object(u["a"])(S,2),D=W[0],I=W[1],L=Object(m["useState"])("86"),R=Object(u["a"])(L,2),A=R[0],q=R[1],z=Object(m["useState"])(!1),F=Object(u["a"])(z,2),M=F[0],K=F[1],B=!1,J=d["a"].useForm(),Q=Object(u["a"])(J,1),V=Q[0];Object(m["useEffect"])((function(){if(w){var e=V.getFieldValue("mail");"ok"===w.status&&(l["default"].success("\u6ce8\u518c\u6210\u529f\uff01"),v["c"].push({pathname:"/user/register-result",state:{account:e}}))}}),[w]),Object(m["useEffect"])((function(){return function(){clearInterval(t)}}),[]);var Y=function(){var e=59;_(e),t=window.setInterval((function(){e-=1,_(e),0===e&&clearInterval(t)}),1e3)},X=function(){var e=V.getFieldValue("password");return e&&e.length>9?"ok":e&&e.length>5?"pass":"poor"},H=function(e){y({type:"userAndregister/submit",payload:Object(i["a"])(Object(i["a"])({},e),{},{prefix:A})})},T=function(e,t){var r=Promise;return t&&t!==V.getFieldValue("password")?r.reject("\u4e24\u6b21\u8f93\u5165\u7684\u5bc6\u7801\u4e0d\u5339\u914d!"):r.resolve()},U=function(e,t){var r=Promise;return t?(D||I(!!t),K(!M),t.length<6?r.reject(""):(t&&B&&V.validateFields(["confirm"]),r.resolve())):(I(!!t),r.reject("\u8bf7\u8f93\u5165\u5bc6\u7801\uff01"))},$=function(e){q(e)},G=function(){var e=V.getFieldValue("password"),t=X();return e&&e.length?g.a.createElement("div",{className:b.a["progress-".concat(t)]},g.a.createElement(o["a"],{status:C[t],className:b.a.progress,strokeWidth:6,percent:10*e.length>100?100:10*e.length,showInfo:!1})):null};return g.a.createElement("div",{className:b.a.main},g.a.createElement("h3",null,"\u6ce8\u518c"),g.a.createElement(d["a"],{form:V,name:"UserRegister",onFinish:H},g.a.createElement(k,{name:"mail",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u90ae\u7bb1\u5730\u5740\uff01"},{type:"email",message:"\u90ae\u7bb1\u5730\u5740\u683c\u5f0f\u9519\u8bef\uff01"}]},g.a.createElement(p["a"],{size:"large",placeholder:"\u90ae\u7bb1"})),g.a.createElement(c["a"],{getPopupContainer:function(e){return e&&e.parentNode?e.parentNode:e},content:D&&g.a.createElement("div",{style:{padding:"4px 0"}},E[X()],G(),g.a.createElement("div",{style:{marginTop:10}},"\u8bf7\u81f3\u5c11\u8f93\u5165 6 \u4e2a\u5b57\u7b26\u3002\u8bf7\u4e0d\u8981\u4f7f\u7528\u5bb9\u6613\u88ab\u731c\u5230\u7684\u5bc6\u7801\u3002")),overlayStyle:{width:240},placement:"right",visible:D},g.a.createElement(k,{name:"password",className:V.getFieldValue("password")&&V.getFieldValue("password").length>0&&b.a.password,rules:[{validator:U}]},g.a.createElement(p["a"],{size:"large",type:"password",placeholder:"\u81f3\u5c116\u4f4d\u5bc6\u7801\uff0c\u533a\u5206\u5927\u5c0f\u5199"}))),g.a.createElement(k,{name:"confirm",rules:[{required:!0,message:"\u8bf7\u786e\u8ba4\u5bc6\u7801\uff01"},{validator:T}]},g.a.createElement(p["a"],{size:"large",type:"password",placeholder:"\u786e\u8ba4\u5bc6\u7801"})),g.a.createElement(j,{compact:!0},g.a.createElement(f["a"],{size:"large",value:A,onChange:$,style:{width:"20%"}},g.a.createElement(O,{value:"86"},"+86"),g.a.createElement(O,{value:"87"},"+87")),g.a.createElement(k,{style:{width:"80%"},name:"mobile",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u624b\u673a\u53f7\uff01"},{pattern:/^\d{11}$/,message:"\u624b\u673a\u53f7\u683c\u5f0f\u9519\u8bef\uff01"}]},g.a.createElement(p["a"],{size:"large",placeholder:"\u624b\u673a\u53f7"}))),g.a.createElement(a["a"],{gutter:8},g.a.createElement(s["a"],{span:16},g.a.createElement(k,{name:"captcha",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801\uff01"}]},g.a.createElement(p["a"],{size:"large",placeholder:"\u9a8c\u8bc1\u7801"}))),g.a.createElement(s["a"],{span:8},g.a.createElement(n["a"],{size:"large",disabled:!!x,className:b.a.getCaptcha,onClick:Y},x?"".concat(x," s"):"\u83b7\u53d6\u9a8c\u8bc1\u7801"))),g.a.createElement(k,null,g.a.createElement(n["a"],{size:"large",loading:r,className:b.a.submit,type:"primary",htmlType:"submit"},"\u6ce8\u518c"),g.a.createElement(h["a"],{className:b.a.login,to:"/user/login"},"\u4f7f\u7528\u5df2\u6709\u8d26\u6237\u767b\u5f55"))))};t["default"]=Object(v["b"])((function(e){var t=e.userAndregister,r=e.loading;return{userAndregister:t,submitting:r.effects["userAndregister/submit"]}}))(w)},sYde:function(e,t,r){e.exports={main:"main___2kx2N",password:"password___2JDrd",getCaptcha:"getCaptcha___1oboe",submit:"submit___34wM2",login:"login___1qBuj",success:"success___3hl98",warning:"warning___2i2r2",error:"error___3JfQo","progress-pass":"progress-pass___BM1Xu",progress:"progress___2s68u"}}}]);