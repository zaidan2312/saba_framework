(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[57,68,158],{149:function(e,t,a){"use strict";a.r(t);var c=a(9),l=a(0),o=a(16),i=a(103),s=a(349),n=a(348),d=a(10),r=a(522),u=a(474),j=(a(481),a(524)),b=a(76),m=a(53),h=a(2);t.default=function(e){var t,a,O=e.filtersCustomAdd,v=void 0===O?{}:O,f=e.lookupMode,p=void 0!==f&&f,x=e.lookupMode_fieldName,g=void 0===x?"":x,M=e.lookupMode_dropdown,N=void 0!==M&&M,k=e.lookupMode_isMulti,y=void 0!==k&&k,_=e.lookupMode_onChange,w=e.lookupMode_defaultValue,S=e.lookupMode_isM2MDefValFromGrid,C=e.lookupMode_defaultFilter,F=Object(i.a)().t,D=Object(o.b)(),V=Object(o.c)((function(e){return e[b.storeName]})),A=Object(l.useState)(""),T=Object(c.a)(A,2);T[0],T[1];Object(l.useEffect)((function(){var e;b.getApiSummaryData&&(0===(null===(e=V.dataSummary)||void 0===e?void 0:e.length)||!V.isLoadingSummary&&b.getAlwaysGrid)&&D(Object(b.getSummaryData)({}))}),[D,null===(t=V.dataSummary)||void 0===t?void 0:t.length]);var G=["primary","success","warning","danger","info","secondary"];return N?Object(h.jsx)(n.default,{lookupMode_fieldName:g,lookupMode_onChange:_,lookupMode_defaultValue:w,lookupMode_isMulti:y,lookupMode_isM2MDefValFromGrid:S}):Object(h.jsxs)(l.Fragment,{children:[Object(h.jsx)("div",{className:"content-header row",children:!p&&Object(h.jsx)(j.a,{title:F(b.pageTitle),data:[{title:F("App Setting")},{title:F(b.pageTitle)}]})}),Object(h.jsxs)("div",{className:"app-user-list",children:[b.getApiSummaryData&&!p&&Object(h.jsx)(d.Q,{children:null===(a=V.dataSummary)||void 0===a?void 0:a.map((function(e,t){var a;return Object(h.jsx)(d.s,{children:Object(h.jsx)(r.a,{color:G[t],statTitle:"".concat(F(e.title)),icon:e.icon?Object(h.jsx)(u.a,{baseClassName:"material-icons-outlined",fontSize:"20",children:e.icon}):Object(h.jsx)(u.a,{baseClassName:"material-icons-outlined",fontSize:"20",children:"lightbulb"}),renderStats:V.isLoadingSummary?Object(h.jsx)(m.a,{sx:{bgcolor:"#eef2f8"},animation:"wave",height:25,width:40,className:"fw-bolder mb-75"}):Object(h.jsx)("h3",{className:"fw-bolder mb-75",children:null!==(a=e.count_format)&&void 0!==a?a:e.count})})})}))}),Object(h.jsx)(s.default,{filtersCustomAdd:v,lookupMode:p,lookupMode_fieldName:g,lookupMode_defaultValue:w,lookupMode_onChange:_,lookupMode_isMulti:y,lookupMode_isM2MDefValFromGrid:S,lookupMode_defaultFilter:C})]})]})}},348:function(e,t,a){"use strict";a.r(t);var c=a(0),l=a(16),o=a(103),i=(a(481),a(31)),s=a(7),n=a.n(s),d=a(181),r=a(76),u=a(2);t.default=function(e){var t,a=e.lookupMode_fieldName,s=void 0===a?"":a,j=e.lookupMode_isMulti,b=void 0!==j&&j,m=e.lookupMode_onChange,h=e.lookupMode_defaultValue,O=(Object(o.a)().t,Object(l.b)()),v=Object(l.c)((function(e){return e[r.storeName]}));return Object(c.useEffect)((function(){(0===v.data.length||!v.isLoading&&r.getAlwaysGrid)&&O(Object(r.getDataList)({}))}),[O,v.data.length]),Object(u.jsx)(c.Fragment,{children:Object(u.jsx)(d.a,{theme:i.q,defaultValue:b?h:v.dataDropdown.filter((function(e){return e.value===h})),isMulti:b,onChange:function(e){return m(e,s)},options:v.dataDropdown,className:n()("react-select",{"is-invalid":null===(null===(t=v.selectedData)||void 0===t?void 0:t.id)}),classNamePrefix:"select"})})}},481:function(e,t,a){},522:function(e,t,a){"use strict";var c=a(8),l=a(6),o=a(7),i=a.n(o),s=a(10),n=a(0),d=a(2);t.a=function(e){var t=e.icon,a=e.color,o=e.cardColor,r=e.stats,u=e.renderStats,j=e.statTitle,b=e.className,m=e.countTextColor,h=e.countTextStyle,O=void 0===h?{}:h,v=e.titleStyle,f=void 0===v?{}:v,p=e.statsMargin,x=e.solidColor,g=void 0!==x&&x,M=e.cardStyle,N=void 0===M?{}:M,k=e.titleOnTop,y=void 0!==k&&k,_=g?"bg-".concat(o):"bg-light-".concat(o);return Object(d.jsx)(s.k,Object(l.a)(Object(l.a)({style:Object(l.a)({},N)},o?{className:_,inverse:!0}:{}),{},{children:Object(d.jsx)(s.l,{className:b,children:y?Object(d.jsxs)(n.Fragment,{children:[Object(d.jsx)("div",{children:Object(d.jsx)("p",{style:Object(l.a)({},f),className:"card-text",children:j})}),Object(d.jsx)("div",{className:"d-flex justify-content-between align-items-center",children:u||Object(d.jsxs)(n.Fragment,{children:[Object(d.jsx)("div",{children:u||Object(d.jsx)("h3",{className:i()("fw-bolder",Object(c.a)({"mb-0":!p},p,p)),style:Object(l.a)({color:null!==m&&void 0!==m?m:"#5e5873"},O),children:r})}),Object(d.jsx)("div",{className:"avatar avatar-stats p-50 m-0 ".concat(a?"bg-light-".concat(a):"bg-light-primary"),children:Object(d.jsx)("div",{className:"avatar-content",children:t})})]})})]}):Object(d.jsx)("div",{className:"d-flex justify-content-between align-items-center",children:u||Object(d.jsxs)(n.Fragment,{children:[Object(d.jsxs)("div",{children:[u||Object(d.jsx)("h3",{className:i()("fw-bolder",Object(c.a)({"mb-0":!p},p,p)),style:Object(l.a)({color:null!==m&&void 0!==m?m:"#5e5873"},O),children:r}),Object(d.jsx)("p",{style:Object(l.a)({},f),className:"card-text",children:j})]}),Object(d.jsx)("div",{className:"avatar avatar-stats p-50 m-0 ".concat(a?"bg-light-".concat(a):"bg-light-primary"),children:Object(d.jsx)("div",{className:"avatar-content",children:t})})]})})})}))}},524:function(e,t,a){"use strict";var c=a(6),l=a(0),o=a(23),i=a(7),s=a.n(i),n=a(103),d=a(10),r=a(2);t.a=function(e){var t=Object(n.a)().t,a=e.data,i=e.title,u=e.mb,j=e.subtitle;return Object(r.jsx)("div",{className:"content-header-left col-md-9 col-8 ".concat(u||0===u?"mb-".concat(u):"mb-2"),children:Object(r.jsxs)("div",{className:"row breadcrumbs-top",children:[Object(r.jsxs)("div",{className:"col-12",children:[i?Object(r.jsx)("h2",{className:"content-header-title float-start mb-0",children:i}):"",Object(r.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(r.jsxs)(d.g,{children:[Object(r.jsx)(d.h,{tag:"li",children:Object(r.jsx)(o.b,{to:"/",children:t("Home")})}),a.map((function(e,t){var i=e.link?o.b:l.Fragment,n=a.length-1===t;return Object(r.jsx)(d.h,{tag:"li",active:!n,className:s()({"text-primary":!n}),children:Object(r.jsx)(i,Object(c.a)(Object(c.a)({},e.link?{to:e.link}:{}),{},{children:e.title}))},t)}))]})})]}),Object(r.jsx)("div",{className:"col-12",children:null!==j&&void 0!==j?j:""})]})})}}}]);
//# sourceMappingURL=57.2cc43587.chunk.js.map