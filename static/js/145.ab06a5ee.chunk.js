(this["webpackJsonpsaba-react-framework"]=this["webpackJsonpsaba-react-framework"]||[]).push([[145,161,162],{1249:function(e,a,t){"use strict";var i=t(592);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=i(t(593)),l=t(2),c=(0,n.default)((0,l.jsx)("path",{d:"M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7-.25c.22 0 .41.1.55.25.12.13.2.31.2.5 0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-.19.08-.37.2-.5.14-.15.33-.25.55-.25zM19 19H5V5h14v14zM12 6c-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3-1.35-3-3-3zm0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-6 6.47V18h12v-1.53c0-2.5-3.97-3.58-6-3.58s-6 1.07-6 3.58zM8.31 16c.69-.56 2.38-1.12 3.69-1.12s3.01.56 3.69 1.12H8.31z"}),"AssignmentIndOutlined");a.default=c},435:function(e,a,t){"use strict";t.r(a);var i=t(5),n=t(8),l=t(4),c=t(9),s=t(3),r=t.n(s),o=t(36),d=t(570),j=t(615),m=t(369),u=t(74),b=(t(185),t(160),t(0)),v=t(266),g=t(304),h=t(340),O=t(278),p=t(121),x=t(95),f=t.n(x),y=t(14),N=t(21),D=t(10),T=t(1249),k=t.n(T),S=t(838),_=t.n(S),M=t(83),w=t(16),z=t(221),R=t(31),I=t(82),C=t(100),L=t(217),E=t(622),P=t(15),A=t(2),F=(P.a.ssoAxiosInterceptor,P.a.hrAxiosInterceptor),V={pagination:{clickable:!0},autoplay:{delay:5500,disableOnInteraction:!1},slideToClickedSlide:!0};a.default=function(){var e=Object(p.a)().t,a=Object(y.c)((function(e){return e.dynamicStore})),t=Object(y.c)((function(e){return e.dynamic_temp_state})),s=Object(y.b)(),x=Object(N.f)(),T="TrainingEmployee_assignForMe",S="TrainingEmployee/assignment",P=Object(b.useContext)(M.a).colors,q=Object(b.useState)(!0),H=Object(c.a)(q,2),U=(H[0],H[1],Object(b.useState)(!1)),W=Object(c.a)(U,2),Y=W[0],J=W[1],G=Object(b.useState)("Please Wait"),B=Object(c.a)(G,2),K=B[0],Q=B[1],X=Object(b.useState)(!1),Z=Object(c.a)(X,2),$=Z[0],ee=Z[1],ae=Object(b.useState)([]),te=Object(c.a)(ae,2),ie=te[0],ne=te[1],le=Object(b.useState)(null),ce=Object(c.a)(le,2),se=ce[0],re=ce[1],oe=Object(b.useState)(!1),de=Object(c.a)(oe,2),je=de[0],me=de[1],ue=function(){me(!je)},be=function(e){var a,t,i,n,l="";if(null!==e&&void 0!==e&&null!==(a=e.payload)&&void 0!==a&&null!==(t=a.error)&&void 0!==t&&t.errors){var c,s,r=null===e||void 0===e||null===(c=e.payload)||void 0===c||null===(s=c.error)||void 0===s?void 0:s.errors;for(var o in null===e||void 0===e||null===(d=e.payload)||void 0===d||null===(j=d.error)||void 0===j?void 0:j.errors){var d,j;l="".concat(l," - ").concat(r[o],"\n")}}return I.b.error("".concat(null===(i=e.payload)||void 0===i||null===(n=i.error)||void 0===n?void 0:n.message," \n \n ").concat(l),{style:{padding:"16px",color:P.danger.main,border:"1px solid ".concat(P.danger.main)},iconTheme:{primary:P.danger.main}})},ve=function(){var e=Object(l.a)(r.a.mark((function e(){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(ue(),a="Id_Manager",t.data[a]||$){e.next=9;break}return ee(!0),"DepartmentManager",e.next=7,F.get("DepartmentManager").then((function(e){var t,i=null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.data;ne(i),ee(!1),s(Object(z.b)(Object(n.a)({},a,i)))}));case 7:e.next=12;break;case 9:ee(!0),ne(t.data[a]),ee(!1);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(b.useEffect)((function(){var e,t,i;a.pageData[T]&&(0!==(null===(e=a.pageData[T])||void 0===e||null===(t=e.data)||void 0===t?void 0:t.length)||null!==(i=a.pageData[T])&&void 0!==i&&i.isLoading)||s(Object(u.g)({storeName:T,endpointName:S,baseUrl:"hr",type:"for_me",Id_AttendingState:0}))}),[]);var ge,he,Oe,pe,xe,fe,ye,Ne,De,Te,ke=function(e){var a=C.o.Option,t=C.o.SingleValue;return{components:{SingleValue:function(e){return Object(A.jsxs)(t,Object(i.a)(Object(i.a)({},e),{},{children:[Object(A.jsx)("img",{src:e.data.img,style:{height:"30px",width:"30px",borderRadius:"10%",marginRight:"10px"}}),e.data.label," ",Object(A.jsxs)("small",{children:["(",e.data.position,")"]})]}))},Option:function(e){return Object(A.jsxs)(a,Object(i.a)(Object(i.a)({},e),{},{children:[Object(A.jsx)("img",{src:e.data.img,style:{height:"30px",width:"30px",borderRadius:"10%",marginRight:"10px"}}),e.data.label," ",Object(A.jsxs)("small",{children:["(",e.data.position,")"]})]}))}}}},Se={lastDay:"[Yesterday]",sameDay:"[Today]",nextDay:"[Tomorrow]",lastWeek:"[last] dddd",nextWeek:"dddd",sameElse:"L"},_e=["primary","success","danger","warning","info","secondary"],Me=function(e){return e.toUpperCase()};return null!==(ge=a.pageData[T])&&void 0!==ge&&ge.isLoading?Object(A.jsx)(D.s,{lg:"12",xs:"12",children:Object(A.jsxs)(D.k,{style:{minHeight:"200px"},children:[Object(A.jsx)(D.n,{children:Object(A.jsxs)("div",{className:"d-flex align-items-center",children:[Object(A.jsx)(_.a,{className:"user-timeline-title-icon me-1"}),Object(A.jsx)(D.r,{tag:"h4",children:e("Recommended Training")})]})}),Object(A.jsx)(d.a,{blocking:!0,loader:Object(A.jsx)(m.b,{}),children:Object(A.jsx)(D.l,{})})]})}):(null===(he=a.pageData[T])||void 0===he||null===(Oe=he.data)||void 0===Oe?void 0:Oe.length)>0?Object(A.jsx)(D.s,{lg:"12",xs:"12",children:Object(A.jsxs)(D.k,{children:[Object(A.jsx)(D.n,{children:Object(A.jsxs)("div",{className:"d-flex align-items-center",children:[Object(A.jsx)(_.a,{className:"user-timeline-title-icon me-1"}),Object(A.jsx)(D.r,{tag:"h4",children:null!==(pe=a.pageData[T])&&void 0!==pe&&null!==(xe=pe.data[0])&&void 0!==xe&&xe.isManager?e("Recommended Training For Your Staff"):e("Recommended Training For You")}),(null===(fe=a.pageData[T])||void 0===fe||null===(ye=fe.data)||void 0===ye?void 0:ye.length)>1&&Object(A.jsx)(D.f,{className:"ms-1",tag:"div",color:"info",pill:!0,children:null===(Ne=a.pageData[T])||void 0===Ne||null===(De=Ne.data)||void 0===De?void 0:De.length})]})}),Object(A.jsx)(D.l,{className:"px-0 pb-0",children:Object(A.jsx)(E.a,Object(i.a)(Object(i.a)({},V),{},{children:null===(Te=a.pageData[T])||void 0===Te?void 0:Te.data.map((function(a){var t,n,l,c,r,d,m,b,p,y,N,_;return Object(A.jsx)(E.b,{children:Object(A.jsxs)(D.k,{className:"card-developer-meetup cursor-pointer",children:[Object(A.jsx)("div",{className:"meetup-img-wrapper rounded-top text-center",children:Object(A.jsx)("img",{src:null!==a&&void 0!==a&&null!==(t=a.TrainingData)&&void 0!==t&&t.Image?a.TrainingData.Image:j.a,height:"170"})}),Object(A.jsxs)(D.l,{children:[Object(A.jsxs)("div",{className:"meetup-header d-flex align-items-center",children:[Object(A.jsxs)("div",{className:"meetup-day",children:[Object(A.jsx)("h6",{className:"mb-0",children:Object(A.jsx)(f.a,{filter:Me,format:"ddd",children:null===a||void 0===a||null===(n=a.TrainingData)||void 0===n?void 0:n.StartDate})}),Object(A.jsx)("h3",{className:"mb-0",children:Object(A.jsx)(f.a,{format:"DD",children:null===a||void 0===a||null===(l=a.TrainingData)||void 0===l?void 0:l.StartDate})})]}),Object(A.jsxs)("div",{className:"my-auto text-truncate",children:[Object(A.jsx)(D.r,{tag:"h4",className:"mb-25",children:null===a||void 0===a||null===(c=a.TrainingData)||void 0===c?void 0:c.Name}),Object(A.jsx)(D.q,{className:"mb-0",children:null===a||void 0===a||null===(r=a.TrainingData)||void 0===r?void 0:r.Description})]})]}),Object(A.jsxs)("div",{className:"d-flex",children:[Object(A.jsx)(o.a,{color:"light-primary",className:"rounded me-1",icon:Object(A.jsx)(v.a,{size:18})}),Object(A.jsxs)("div",{children:[Object(A.jsx)("h6",{className:"mb-0",children:Object(A.jsx)(f.a,{calendar:Se,children:null===a||void 0===a||null===(d=a.TrainingData)||void 0===d?void 0:d.StartDate})}),Object(A.jsx)("small",{children:Object(A.jsx)(f.a,{format:"[Start at] LT",children:null===a||void 0===a||null===(m=a.TrainingData)||void 0===m?void 0:m.StartDate})})]})]}),null!==a&&void 0!==a&&null!==(b=a.TrainingData)&&void 0!==b&&b.IsOnline?Object(A.jsxs)("div",{className:"d-flex mt-2",children:[Object(A.jsx)(o.a,{color:"light-primary",className:"rounded me-1",icon:Object(A.jsx)(h.a,{size:18})}),Object(A.jsxs)("div",{className:"align-items-center align-middle my-auto",children:[Object(A.jsx)("h6",{className:"mb-0",children:e("Online Training")}),(null===a||void 0===a||null===(y=a.TrainingData)||void 0===y?void 0:y.LinkRef)&&Object(A.jsx)("small",{children:null!==a&&void 0!==a&&null!==(N=a.TrainingData)&&void 0!==N&&N.LinkRef?null===a||void 0===a||null===(_=a.TrainingData)||void 0===_?void 0:_.LinkRef:"The link will be sent before the event starts"})]})]}):Object(A.jsxs)("div",{className:"d-flex mt-2",children:[Object(A.jsx)(o.a,{color:"light-primary",className:"rounded me-1",icon:Object(A.jsx)(g.a,{size:18})}),Object(A.jsx)("div",{className:"align-items-center align-middle my-auto",children:Object(A.jsx)("small",{children:null===a||void 0===a||null===(p=a.TrainingData)||void 0===p?void 0:p.Address})})]}),(null===a||void 0===a?void 0:a.FunctionalPosition)&&Object(A.jsxs)("div",{className:"d-flex mt-2",children:[Object(A.jsx)(o.a,{color:"light-primary",className:"rounded me-1",icon:Object(A.jsx)(O.a,{size:18})}),Object(A.jsx)("div",{className:"align-items-center align-middle my-auto",children:a.FunctionalPosition.map((function(e,a){var t;return Object(A.jsx)(D.f,{color:"light-".concat(null!==(t=_e[a])&&void 0!==t?t:"primary"),children:null===e||void 0===e?void 0:e.name},"badge_".concat(a))}))})]}),null!==a&&void 0!==a&&a.isManager?Object(A.jsx)(D.s,{className:"d-grid mt-2",sm:"12",children:Object(A.jsxs)(D.i.Ripple,{onClick:function(e){x("/dyn_pages/hr/training/edit/".concat(a.Id_Training,"/training_employee"))},color:"gradient-primary",children:[Object(A.jsx)(k.a,{size:14}),Object(A.jsx)("span",{className:"align-middle ms-25",children:e("Assign to Staff")})]})}):Object(A.jsxs)(D.s,{className:"d-grid mt-2",sm:"12",children:[Object(A.jsx)(D.i.Ripple,{onClick:ve,color:"gradient-primary",children:e("Follow")}),Object(A.jsxs)(D.E,{isOpen:je,toggle:ue,className:"modal-dialog-centered",children:[Object(A.jsx)(D.H,{toggle:ue,children:e("Manager Approval Required")}),Object(A.jsxs)(D.F,{children:[Object(A.jsx)(D.e,{color:"primary",children:Object(A.jsx)("div",{className:"alert-body",children:e("Please select your manager to approve your participation in this training")})}),Object(A.jsx)(D.s,{className:"mt-1",md:"12",sm:"12",children:Object(A.jsx)(L.a,Object(i.a)(Object(i.a)({},ke()),{},{placeholder:e("Choose Manager"),isLoading:$,theme:R.w,className:"react-select",classNamePrefix:"select",onChange:re,options:ie.map((function(e){return{label:e.Employee_Name,value:e.Id_Employee,img:null===e||void 0===e?void 0:e.Employee_PhotoPath,position:null===e||void 0===e?void 0:e.PositionName}})),isClearable:!1}))})]}),Object(A.jsx)(D.G,{children:Y?Object(A.jsxs)(D.i.Ripple,{color:"primary",children:[Object(A.jsx)(D.R,{color:"white",size:"sm",type:"grow"}),Object(A.jsx)("span",{className:"ms-50",children:K})]}):Object(A.jsx)(D.i,{disabled:!se,color:"primary",onClick:function(t){var i;t.preventDefault(),i={id:null===a||void 0===a?void 0:a.Id_Training,manager_id:se.value},J(!0),Q("Sending Training Request to Manager"),i.storeName=T,i.endpointName=S,i.baseUrl="hr",i.callback_page=window.location.href,s(Object(u.k)(i)).then((function(a){"fulfilled"===a.meta.requestStatus?s(Object(u.g)({storeName:T,endpointName:S,baseUrl:"hr",type:"for_me",Id_AttendingState:0})).then((function(a){J(!1),ue(),I.b.success("".concat(e("Successfully Sending Training Request to Manager"),"}"),{style:{padding:"16px",color:P.success.main,border:"1px solid ".concat(P.success.main)},iconTheme:{primary:P.success.main}})})).then((function(e){s(Object(u.g)({storeName:"TrainingEmployee_assignToMe",endpointName:"TrainingEmployee/assignment",baseUrl:"hr",type:"to_me",Id_AttendingState:1})),setTimeout((function(){s(Object(w.getDataList)({}))}),8e3)})):"rejected"===a.meta.requestStatus&&(J(!1),be(a))})).catch((function(e){J(!1),be(e)}))},outline:!0,children:e("Apply to Manager")})})]})]})]})]})},"swiper_".concat(a.id))}))}))})]})}):null}},570:function(e,a,t){"use strict";var i=t(5),n=t(8),l=t(0),c=t(7),s=t.n(c),r=t(10),o=(t(576),t(2)),d=function(e){var a,t=e.children,c=e.blocking,r=e.loader,d=e.className,j=e.tag,m=e.overlayColor,u=j;return Object(o.jsxs)(u,{className:s()("ui-loader",(a={},Object(n.a)(a,d,d),Object(n.a)(a,"show",c),a)),children:[t,c?Object(o.jsxs)(l.Fragment,{children:[Object(o.jsx)("div",Object(i.a)({className:"overlay"},c&&m?{style:{backgroundColor:m}}:{})),Object(o.jsx)("div",{className:"loader",children:r})]}):null]})};a.a=d,d.defaultProps={tag:"div",blocking:!1,loader:Object(o.jsx)(r.R,{color:"primary"})}},576:function(e,a,t){},615:function(e,a,t){"use strict";a.a=t.p+"static/media/email.6f4a4684.svg"},838:function(e,a,t){"use strict";var i=t(592);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=i(t(593)),l=t(2),c=(0,n.default)((0,l.jsx)("path",{d:"M21 3H3c-1.1 0-2 .9-2 2v3h2V5h18v14h-7v2h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM1 18v3h3c0-1.66-1.34-3-3-3zm0-4v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7zm0-4v2c4.97 0 9 4.03 9 9h2c0-6.08-4.93-11-11-11zm10 1.09v2L14.5 15l3.5-1.91v-2L14.5 13 11 11.09zM14.5 6 9 9l5.5 3L20 9l-5.5-3z"}),"CastForEducationOutlined");a.default=c}}]);
//# sourceMappingURL=145.ab06a5ee.chunk.js.map