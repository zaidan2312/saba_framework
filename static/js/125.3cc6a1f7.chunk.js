(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[125,144,145],{369:function(e,a,t){"use strict";t.r(a);var l=t(6),c=t(9),i=t(33),n=(t(529),t(10)),s=t(16),r=t(103),d=(t(546),t(0)),o=t(507),j=t(319),u=t(82),m=t.n(u),b=(t(156),t(133),t(61)),v=t(550),h=t(68),O=t(69),p=t(14),x=t(581),g=t.n(x),f=(t(621),t(2)),N={pagination:{clickable:!0},autoplay:{delay:1e4,disableOnInteraction:!1}};a.default=function(){var e=Object(r.a)().t,a=Object(s.c)((function(e){return e.dynamicStore})),u=(Object(s.c)((function(e){return e.dynamic_temp_state})),Object(s.b)()),x=Object(d.useContext)(O.a).colors,y=Object(d.useState)(!1),k=Object(c.a)(y,2),D=(k[0],k[1],Object(d.useState)(!1)),L=Object(c.a)(D,2),_=L[0],w=L[1],R=Object(d.useState)(!1),S=Object(c.a)(R,2),C=S[0],E=S[1],H=Object(d.useState)("Please Wait"),q=Object(c.a)(H,2),z=q[0],I=q[1],U="Leave_needApproval",P="Leave/await";Object(d.useEffect)((function(){var e,t,l;a.pageData[U]&&(0!==(null===(e=a.pageData[U])||void 0===e||null===(t=e.data)||void 0===t?void 0:t.length)||null!==(l=a.pageData[U])&&void 0!==l&&l.isLoading)||u(Object(b.g)({storeName:U,endpointName:P,baseUrl:"hr"}))}),[]);var T,V,W,A,F,J,M,Y,B=function(e){var a,t,l,c,i="";if(null!==e&&void 0!==e&&null!==(a=e.payload)&&void 0!==a&&null!==(t=a.error)&&void 0!==t&&t.errors){var n,s,r=null===e||void 0===e||null===(n=e.payload)||void 0===n||null===(s=n.error)||void 0===s?void 0:s.errors;for(var d in null===e||void 0===e||null===(o=e.payload)||void 0===o||null===(j=o.error)||void 0===j?void 0:j.errors){var o,j;i="".concat(i," - ").concat(r[d],"\n")}}return h.b.error("".concat(null===(l=e.payload)||void 0===l||null===(c=l.error)||void 0===c?void 0:c.message," \n \n ").concat(i),{style:{padding:"16px",color:x.danger.main,border:"1px solid ".concat(x.danger.main)},iconTheme:{primary:x.danger.main}})},G=function(a){I("Confirming Leave Request"),a.storeName=U,a.endpointName="Leave/".concat(a.id),a.baseUrl="hr",delete a.id,u(Object(b.n)(a)).then((function(a){"fulfilled"===a.meta.requestStatus?u(Object(b.g)({storeName:U,endpointName:P,baseUrl:"hr"})).then((function(a){h.b.success("".concat(e("Successfully Confirming Leave Request"),"}"),{style:{padding:"16px",color:x.success.main,border:"1px solid ".concat(x.success.main)},iconTheme:{primary:x.success.main}})})).then((function(e){w(!1),E(!1)})).then((function(e){u(Object(b.g)({storeName:"hr_leave",endpointName:"Leave",baseUrl:"hr"})),setTimeout((function(){u(Object(p.getDataList)({}))}),8e3)})):"rejected"===a.meta.requestStatus&&B(a)})).catch((function(e){w(!1),B(e)}))},K={lastDay:"[Yesterday]",sameDay:"[Today]",nextDay:"[Tomorrow]",lastWeek:"[last] dddd",nextWeek:"dddd",sameElse:"L"};return null!==(T=a.pageData[U])&&void 0!==T&&T.isLoading?Object(f.jsx)(n.s,{lg:"12",xs:"12",children:Object(f.jsxs)(n.k,{style:{minHeight:"200px"},children:[Object(f.jsx)(n.n,{children:Object(f.jsxs)("div",{className:"d-flex align-items-center",children:[Object(f.jsx)(g.a,{className:"user-timeline-title-icon me-1"}),Object(f.jsx)(n.r,{tag:"h4",children:e("Leave Need Approval")})]})}),Object(f.jsx)(o.a,{blocking:!0,loader:Object(f.jsx)(j.b,{}),children:Object(f.jsx)(n.l,{})})]})}):(null===(V=a.pageData[U])||void 0===V||null===(W=V.data)||void 0===W?void 0:W.length)>0?Object(f.jsx)(n.s,{lg:"12",xs:"12",children:Object(f.jsxs)(n.k,{children:[Object(f.jsx)(n.n,{children:Object(f.jsxs)("div",{className:"d-flex align-items-center",children:[Object(f.jsx)(g.a,{className:"user-timeline-title-icon me-1"}),Object(f.jsx)(n.r,{tag:"h4",children:e("Leave Need Approval")}),(null===(A=a.pageData[U])||void 0===A||null===(F=A.data)||void 0===F?void 0:F.length)>1&&Object(f.jsx)(n.f,{className:"ms-1",tag:"div",color:"danger",pill:!0,children:null===(J=a.pageData[U])||void 0===J||null===(M=J.data)||void 0===M?void 0:M.length})]})}),Object(f.jsx)(n.l,{className:"px-0 pb-0",children:Object(f.jsx)(v.a,Object(l.a)(Object(l.a)({},N),{},{children:null===(Y=a.pageData[U])||void 0===Y?void 0:Y.data.map((function(a){var l;return Object(f.jsx)(v.b,{children:Object(f.jsx)(n.k,{className:"card-apply-job mb-0",children:Object(f.jsxs)(n.l,{children:[Object(f.jsxs)("div",{className:"d-flex justify-content-between align-items-center mb-1",children:[Object(f.jsxs)("div",{className:"d-flex align-items-center",children:[Object(f.jsx)(i.a,{imgClassName:"rounded",className:"me-75",img:null!==(l=null===a||void 0===a?void 0:a.Employee_PhotoPath)&&void 0!==l?l:t(42).default,imgHeight:"42",imgWidth:"42"}),Object(f.jsxs)("div",{className:"my-auto",children:[Object(f.jsx)("h6",{className:"mb-0",children:"".concat(null===a||void 0===a?void 0:a.Employee_Name)}),Object(f.jsx)("small",{className:"text-muted",children:null===a||void 0===a?void 0:a.Employee_EmployeeIdNumber})]})]}),Object(f.jsx)(n.f,{color:"light-primary",pill:!0,children:null===a||void 0===a?void 0:a.LeaveName})]}),Object(f.jsx)("h5",{className:"apply-job-title",children:e("New request for leave from staff that needs to be confirmed.")}),Object(f.jsxs)(n.q,{className:"mb-2",children:[e("Reason")," : ",null===a||void 0===a?void 0:a.Reason,"."]}),Object(f.jsx)("div",{className:"apply-job-package bg-light-primary rounded",children:Object(f.jsxs)("div",{children:[Object(f.jsx)("sup",{className:"text-body",children:Object(f.jsxs)("small",{children:[e("period")," "]})}),Object(f.jsxs)("h2",{className:"d-inline me-25",children:[Object(f.jsx)(m.a,{calendar:K,children:null===a||void 0===a?void 0:a.StartDate})," ",Object(f.jsx)("sub",{className:"text-body",children:Object(f.jsxs)("small",{children:[" ",e("until")]})})," ",Object(f.jsx)(m.a,{calendar:K,children:null===a||void 0===a?void 0:a.EndDate})]})]})}),Object(f.jsxs)("div",{className:"text-end",children:[!_&&(C?Object(f.jsxs)(n.i.Ripple,{color:"flat-danger me-1",children:[Object(f.jsx)(n.R,{color:"white",size:"sm",type:"grow"}),Object(f.jsx)("span",{className:"ms-50",children:z})]}):Object(f.jsx)(n.i.Ripple,{color:"flat-danger me-1",onClick:function(e){e.preventDefault(),E(!0),G({id:null===a||void 0===a?void 0:a.id,Id_LeaveState:"3"})},children:e("Decline")})),!C&&(_?Object(f.jsxs)(n.i.Ripple,{color:"gradient-primary",children:[Object(f.jsx)(n.R,{color:"white",size:"sm",type:"grow"}),Object(f.jsx)("span",{className:"ms-50",children:z})]}):Object(f.jsx)(n.i.Ripple,{onClick:function(e){e.preventDefault(),w(!0),G({id:null===a||void 0===a?void 0:a.id,Id_LeaveState:"2"})},color:"gradient-primary",children:e("Confirm")}))]})]})})},"swiper_".concat(a.id))}))}))})]})}):null}},507:function(e,a,t){"use strict";var l=t(6),c=t(8),i=t(0),n=t(7),s=t.n(n),r=t(10),d=(t(513),t(2)),o=function(e){var a,t=e.children,n=e.blocking,r=e.loader,o=e.className,j=e.tag,u=e.overlayColor,m=j;return Object(d.jsxs)(m,{className:s()("ui-loader",(a={},Object(c.a)(a,o,o),Object(c.a)(a,"show",n),a)),children:[t,n?Object(d.jsxs)(i.Fragment,{children:[Object(d.jsx)("div",Object(l.a)({className:"overlay"},n&&u?{style:{backgroundColor:u}}:{})),Object(d.jsx)("div",{className:"loader",children:r})]}):null]})};a.a=o,o.defaultProps={tag:"div",blocking:!1,loader:Object(d.jsx)(r.R,{color:"primary"})}},513:function(e,a,t){},529:function(e,a,t){"use strict";var l=t(6),c=t(8),i=t(0),n=t(7),s=t.n(n),r=t(33),d=t(23),o=t(2);a.a=function(e){var a=e.data,t=e.tag,n=e.className,j=t||"div";return Object(o.jsx)(j,{className:s()("avatar-group",Object(c.a)({},n,n)),children:a.map((function(e,a){var t=null!==e&&void 0!==e&&e.id?"avatar_".concat(a,"_").concat(e.id):e.title.split(" ").join("-"),n=null===e||void 0===e?void 0:e.linkUrl;null===e||void 0===e||delete e.linkUrl;var j=e.tag?e.tag:"div",u=Object(o.jsxs)(i.Fragment,{children:[e.meta?null:null!==e&&void 0!==e&&e.img?Object(o.jsx)(r.a,Object(l.a)(Object(l.a)(Object(l.a)({tag:j,className:s()("pull-up",Object(c.a)({},e.className,e.className))},t?{id:t}:{}),e),{},{title:void 0,meta:void 0})):Object(o.jsx)(r.a,Object(l.a)(Object(l.a)({tag:j,initials:!0,className:s()("pull-up",Object(c.a)({},e.className,e.className))},t?{id:t}:{}),{},{color:"light-primary",content:"".concat(e.title)})),e.meta?Object(o.jsx)(j,{className:"d-flex align-items-center ps-1",children:e.meta}):null]},a);return n?Object(o.jsx)(d.b,{to:n,children:u},"avatar_".concat(a)):u}))})}},546:function(e,a,t){"use strict";a.a=t.p+"static/media/email.6f4a4684.svg"},581:function(e,a,t){"use strict";var l=t(526);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var c=l(t(527)),i=t(2),n=(0,c.default)((0,i.jsx)("path",{d:"M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V9h14v10zm0-12H5V5h14v2zm-2 5h-5v5h5v-5z"}),"InsertInvitationOutlined");a.default=n},621:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/avatar-s-7.ba3f6823.jpg"}}]);
//# sourceMappingURL=125.3cc6a1f7.chunk.js.map