(this["webpackJsonpsaba-react-framework"]=this["webpackJsonpsaba-react-framework"]||[]).push([[143,161,162],{438:function(e,a,t){"use strict";t.r(a);var i=t(5),l=t(36),n=t(596),c=t(570),s=t(615),r=t(369),d=t(74),o=(t(185),t(160),t(0)),j=t(266),m=t(304),u=t(340),b=t(121),v=t(95),h=t.n(v),O=t(14),x=t(10),g=t(754),p=t.n(g),f=t(622),N=t(2),D={pagination:{clickable:!0},autoplay:{delay:7500,disableOnInteraction:!1}};a.default=function(e){e.hideCardTitle,e.id_user;var a=Object(b.a)().t,v=Object(O.c)((function(e){return e.dynamicStore})),g=(Object(O.c)((function(e){return e.dynamic_temp_state})),Object(O.b)()),y="TrainingEmployee_task";Object(o.useEffect)((function(){var e,a,t;v.pageData[y]&&(0!==(null===(e=v.pageData[y])||void 0===e||null===(a=e.data)||void 0===a?void 0:a.length)||null!==(t=v.pageData[y])&&void 0!==t&&t.isLoading)||g(Object(d.g)({storeName:y,endpointName:"TrainingEmployee/assignment",baseUrl:"hr",type:"to_me",Id_AttendingState:1}))}),[]);var T,k,_,w,S,z,E={lastDay:"[Yesterday]",sameDay:"[Today]",nextDay:"[Tomorrow]",lastWeek:"[last] dddd",nextWeek:"dddd",sameElse:"L"},H=function(e){return e.toUpperCase()},L=function(e){if(e){var i,l=e.map((function(e,a){var i,l="".concat(null===e||void 0===e?void 0:e.FirstName," ").concat(null===e||void 0===e?void 0:e.LastName);if(a<=10)return{title:"".concat(l.replaceAll(".","")),placement:"bottom",img:null!==(i=null===e||void 0===e?void 0:e.PhotoPath)&&void 0!==i?i:t(50).default,imgHeight:33,imgWidth:33}})),c=(null!==(i=e.length)&&void 0!==i?i:0)-10;return c>0&&l?l.push({meta:"+".concat(c)}):l.push({meta:"".concat(l.length," ").concat(a("Employee ready to attend"))}),Object(N.jsx)(n.a,{data:l})}return null};return null!==(T=v.pageData[y])&&void 0!==T&&T.isLoading?Object(N.jsx)(x.s,{lg:"12",xs:"12",children:Object(N.jsxs)(x.k,{style:{minHeight:"200px"},children:[Object(N.jsx)(x.n,{children:Object(N.jsxs)("div",{className:"d-flex align-items-center",children:[Object(N.jsx)(p.a,{className:"user-timeline-title-icon me-1"}),Object(N.jsx)(x.r,{tag:"h4",children:a("Training Task")})]})}),Object(N.jsx)(c.a,{blocking:!0,loader:Object(N.jsx)(r.b,{}),children:Object(N.jsx)(x.l,{})})]})}):(null===(k=v.pageData[y])||void 0===k||null===(_=k.data)||void 0===_?void 0:_.length)>0?Object(N.jsx)(x.s,{lg:"12",xs:"12",children:Object(N.jsxs)(x.k,{children:[Object(N.jsx)(x.n,{children:Object(N.jsxs)("div",{className:"d-flex align-items-center",children:[Object(N.jsx)(p.a,{className:"user-timeline-title-icon me-1"}),null!==(w=v.pageData[y])&&void 0!==w&&null!==(S=w.data[0])&&void 0!==S&&S.isManager?Object(N.jsx)(x.r,{tag:"h4",children:a("Me & Staff Training Task")}):Object(N.jsx)(x.r,{tag:"h4",children:a("My Training Task")})]})}),Object(N.jsx)(x.l,{className:"px-0 pb-0 ",children:Object(N.jsx)(f.a,Object(i.a)(Object(i.a)({},D),{},{children:null===(z=v.pageData[y])||void 0===z?void 0:z.data.map((function(e){var t,i,n,c,r,d,o,b,v,O,g;return Object(N.jsx)(f.b,{children:Object(N.jsxs)(x.k,{className:"card-developer-meetup  cursor-pointer",children:[Object(N.jsx)("div",{className:"meetup-img-wrapper rounded-top text-center",children:Object(N.jsx)("img",{src:null!==e&&void 0!==e&&null!==(t=e.TrainingData)&&void 0!==t&&t.Image?e.TrainingData.Image:s.a,height:"170"})}),Object(N.jsxs)(x.l,{children:[Object(N.jsxs)("div",{className:"meetup-header d-flex align-items-center",children:[Object(N.jsxs)("div",{className:"meetup-day",children:[Object(N.jsx)("h6",{className:"mb-0",children:Object(N.jsx)(h.a,{filter:H,format:"ddd",children:null===e||void 0===e||null===(i=e.TrainingData)||void 0===i?void 0:i.StartDate})}),Object(N.jsx)("h3",{className:"mb-0",children:Object(N.jsx)(h.a,{format:"DD",children:null===e||void 0===e||null===(n=e.TrainingData)||void 0===n?void 0:n.StartDate})})]}),Object(N.jsxs)("div",{className:"my-auto text-truncate",children:[Object(N.jsx)(x.r,{tag:"h4",className:"mb-25",children:null===e||void 0===e||null===(c=e.TrainingData)||void 0===c?void 0:c.Name}),Object(N.jsx)(x.q,{className:"mb-0",children:null===e||void 0===e||null===(r=e.TrainingData)||void 0===r?void 0:r.Description})]})]}),Object(N.jsxs)("div",{className:"d-flex",children:[Object(N.jsx)(l.a,{color:"light-primary",className:"rounded me-1",icon:Object(N.jsx)(j.a,{size:18})}),Object(N.jsxs)("div",{children:[Object(N.jsx)("h6",{className:"mb-0",children:Object(N.jsx)(h.a,{calendar:E,children:null===e||void 0===e||null===(d=e.TrainingData)||void 0===d?void 0:d.StartDate})}),Object(N.jsx)("small",{children:Object(N.jsx)(h.a,{format:"[Start at] LT",children:null===e||void 0===e||null===(o=e.TrainingData)||void 0===o?void 0:o.StartDate})})]})]}),null!==e&&void 0!==e&&null!==(b=e.TrainingData)&&void 0!==b&&b.IsOnline?Object(N.jsxs)("div",{className:"d-flex mt-2",children:[Object(N.jsx)(l.a,{color:"light-primary",className:"rounded me-1",icon:Object(N.jsx)(u.a,{size:18})}),Object(N.jsxs)("div",{children:[Object(N.jsx)("h6",{className:"mb-0",children:a("Online Training")}),Object(N.jsx)("small",{children:null!==e&&void 0!==e&&null!==(O=e.TrainingData)&&void 0!==O&&O.LinkRef?null===e||void 0===e||null===(g=e.TrainingData)||void 0===g?void 0:g.LinkRef:"The link will be sent before the event starts"})]})]}):Object(N.jsxs)("div",{className:"d-flex mt-2",children:[Object(N.jsx)(l.a,{color:"light-primary",className:"rounded me-1",icon:Object(N.jsx)(m.a,{size:18})}),Object(N.jsx)("div",{children:Object(N.jsx)("small",{children:null===e||void 0===e||null===(v=e.TrainingData)||void 0===v?void 0:v.Address})})]}),L(null===e||void 0===e?void 0:e.Employee)]})]})},"swiper_".concat(e.Id_Training))}))}))})]})}):null}},570:function(e,a,t){"use strict";var i=t(5),l=t(8),n=t(0),c=t(7),s=t.n(c),r=t(10),d=(t(576),t(2)),o=function(e){var a,t=e.children,c=e.blocking,r=e.loader,o=e.className,j=e.tag,m=e.overlayColor,u=j;return Object(d.jsxs)(u,{className:s()("ui-loader",(a={},Object(l.a)(a,o,o),Object(l.a)(a,"show",c),a)),children:[t,c?Object(d.jsxs)(n.Fragment,{children:[Object(d.jsx)("div",Object(i.a)({className:"overlay"},c&&m?{style:{backgroundColor:m}}:{})),Object(d.jsx)("div",{className:"loader",children:r})]}):null]})};a.a=o,o.defaultProps={tag:"div",blocking:!1,loader:Object(d.jsx)(r.R,{color:"primary"})}},576:function(e,a,t){},596:function(e,a,t){"use strict";var i=t(5),l=t(8),n=t(0),c=t(7),s=t.n(c),r=t(36),d=t(26),o=t(2);a.a=function(e){var a=e.data,t=e.tag,c=e.className,j=t||"div";return Object(o.jsx)(j,{className:s()("avatar-group",Object(l.a)({},c,c)),children:a.map((function(e,a){var t=null!==e&&void 0!==e&&e.id?"avatar_".concat(a,"_").concat(e.id):e.title.split(" ").join("-"),c=null===e||void 0===e?void 0:e.linkUrl;null===e||void 0===e||delete e.linkUrl;var j=e.tag?e.tag:"div",m=Object(o.jsxs)(n.Fragment,{children:[e.meta?null:null!==e&&void 0!==e&&e.img?Object(o.jsx)(r.a,Object(i.a)(Object(i.a)(Object(i.a)({tag:j,className:s()("pull-up",Object(l.a)({},e.className,e.className))},t?{id:t}:{}),e),{},{title:void 0,meta:void 0})):Object(o.jsx)(r.a,Object(i.a)(Object(i.a)({tag:j,initials:!0,className:s()("pull-up",Object(l.a)({},e.className,e.className))},t?{id:t}:{}),{},{color:"light-primary",content:"".concat(e.title)})),e.meta?Object(o.jsx)(j,{className:"d-flex align-items-center ps-1",children:e.meta}):null]},a);return c?Object(o.jsx)(d.b,{to:c,children:m},"avatar_".concat(a)):m}))})}},615:function(e,a,t){"use strict";a.a=t.p+"static/media/email.6f4a4684.svg"},754:function(e,a,t){"use strict";var i=t(592);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var l=i(t(593)),n=t(2),c=(0,l.default)((0,n.jsx)("path",{d:"M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V9h14v10zM5 7V5h14v2H5zm5.56 10.46 5.93-5.93-1.06-1.06-4.87 4.87-2.11-2.11-1.06 1.06z"}),"EventAvailableOutlined");a.default=c}}]);
//# sourceMappingURL=143.985e566e.chunk.js.map