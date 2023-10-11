(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[50,83,135,144,145],{139:function(e,t,a){"use strict";a.r(t);var n=a(6),i=a(9),c=a(0),s=a(20),r=a(68),l=(a(520),a(10)),o=a(103),d=a(507),u=(a(182),a(133),a(69)),b=a(31),j=a(181),m=(a(516),a(510),a(517),a(511)),p=a(78),f=a(70),O=a(16),v=a(7),g=a.n(v),h=a(319),x=a(2);t.default=function(e){var t,a,v,y,S=e.show,D=e.setShow,N=e.detailPage,w=e.formState,_=e.setFormState,k=Object(o.a)().t,J=Object(s.g)().id,A=Object(O.b)(),C=Object(O.c)((function(e){return e[p.storeName]})),T=Object(O.c)((function(e){return e.apps_app})),M=Object(O.c)((function(e){return e.units})),q=Object(c.useState)(C.selectedData),P=Object(i.a)(q,2),E=P[0],F=(P[1],Object(c.useContext)(u.a).colors),L=Object(c.useState)("Please Wait"),V=Object(i.a)(L,2),I=(V[0],V[1]),R=Object(c.useState)(null),U=Object(i.a)(R,2),B=U[0],K=U[1],W=Object(c.useState)([]),H=Object(i.a)(W,2),Q=H[0],Y=H[1],z=Object(c.useState)({}),G=Object(i.a)(z,2),X=G[0],Z=G[1],$=Object(m.e)({}),ee=$.control,te=$.setError,ae=$.handleSubmit,ne=$.formState.errors,ie=function(){A(Object(p.resetSelectedData)())};return Object(c.useEffect)((function(){0!==T.data.length&&T.isLoading||A(Object(f.getDataList)({})),K(T.dataDropdown.filter((function(e){var t;return e.value===(null===(t=C.selectedData)||void 0===t?void 0:t.id_app)})));var e=M.dataDropdown.filter((function(e){return""!==e.value}));Y(e),Z(e.filter((function(e){var t;return e.value===(null===(t=C.selectedData)||void 0===t?void 0:t.id_unit)})))}),[]),Object(x.jsx)(l.E,{isOpen:S,toggle:function(){ie(),D(!S)},className:"modal-dialog-centered modal-lg",children:Object(x.jsxs)(d.a,{blocking:C.isLoadingAddEdit||C.isLoadingDetail,loader:Object(x.jsx)(h.b,{}),children:[Object(x.jsx)(l.H,{className:"bg-transparent",toggle:function(){ie(),D(!S)}}),Object(x.jsxs)(l.F,{className:"px-sm-5 pt-50 pb-5",children:[Object(x.jsx)("div",{className:"text-center mb-2",children:Object(x.jsxs)("h2",{className:"mb-1",children:[k("edit"===w?"Edit":"Add")," ",k(p.pageTitle)]})}),Object(x.jsx)(l.x,{onSubmit:ae("edit"===w?function(e){if(e.id_unit=X.value,e.id_app=B.value,function(e){if("edit"===w){var t=Object(n.a)({},Object(b.r)(C.selectedData));for(var a in delete t.id,t)a in e||delete t[a];return JSON.stringify(Object(b.r)(t))!==JSON.stringify(Object(b.r)(e))}return!0}(e))if(Object.values(e).every((function(e){return null!==e&&""!==e})))I("".concat(k("Updating")," ").concat(k(p.pageTitle)," ").concat(k("Detail")," Data")),A(Object(p.putData)(e)).then((function(e){"fulfilled"===e.meta.requestStatus?(D(!S),r.b.success("".concat(k("Successfully Updated")," ").concat(k(p.pageTitle)),{style:{padding:"16px",color:F.success.main,border:"1px solid ".concat(F.success.main)},iconTheme:{primary:F.success.main}}),N&&A(Object(p.getDataById)(J))):"rejected"===e.meta.requestStatus&&r.b.error(e.payload.message,{style:{padding:"16px",color:F.danger.main,border:"1px solid ".concat(F.danger.main)},iconTheme:{primary:F.danger.main}})}));else for(var t in e){var a;0===(null===(a=e[t])||void 0===a?void 0:a.length)&&te(t,{type:"manual"})}else Object(r.b)("".concat(k("You haven't changed anything")),{icon:"\ud83d\udc4f"})}:function(e){if(Object.values(e).every((function(e){return null!==e&&""!==e})))e.id_unit=X,e.id_app=B,delete e.description,I("".concat(k("Creating a New ".concat(p.pageTitle)))),A(Object(p.postData)(e)).then((function(e){"fulfilled"===e.meta.requestStatus?(D(!S),r.b.success("".concat(k("Successfully Created")," ").concat(k(p.pageTitle)),{style:{padding:"16px",color:F.success.main,border:"1px solid ".concat(F.success.main)},iconTheme:{primary:F.success.main}}),N&&A(Object(p.getDataById)(J))):"rejected"===e.meta.requestStatus&&r.b.error(e.payload.message,{style:{padding:"16px",color:F.danger.main,border:"1px solid ".concat(F.danger.main)},iconTheme:{primary:F.danger.main}})}));else for(var t in e){var a;null!==e[t]&&0===(null===(a=e[t])||void 0===a?void 0:a.length)&&te(t,{type:"manual"})}}),children:Object(x.jsxs)(l.Q,{className:"gy-1 pt-75",children:[Object(x.jsxs)(l.s,{md:12,xs:12,children:[Object(x.jsxs)(l.D,{className:"form-label",for:"domain",children:[k("Domain Address"),Object(x.jsx)("span",{className:"text-danger",children:"*"})]}),Object(x.jsx)(m.a,{defaultValue:null!==(t=null===(a=C.selectedData)||void 0===a?void 0:a.domain)&&void 0!==t?t:"",control:ee,id:"domain",name:"domain",render:function(e){var t=e.field;return Object(x.jsx)(l.A,Object(n.a)(Object(n.a)({},t),{},{className:ne.domain?"form-control is-invalid":"form-control",id:"domain",invalid:ne.domain&&!0}))}})]}),Object(x.jsxs)(l.s,{md:12,xs:12,children:[Object(x.jsx)(l.D,{className:"form-label",for:"id_app",children:k("App")}),Object(x.jsx)(j.a,{id:"id_app",theme:b.q,defaultValue:T.dataDropdown.filter((function(e){return e.value===(null===E||void 0===E?void 0:E.id_app)})),onChange:function(e){K(e.value)},options:T.dataDropdown,className:g()("react-select",{"is-invalid":null===B}),classNamePrefix:"select"})]}),Object(x.jsxs)(l.s,{md:12,xs:12,children:[Object(x.jsx)(l.D,{className:"form-label",for:"id_unit",children:k("Unit")}),Object(x.jsx)(j.a,{id:"id_unit",isClearable:!1,theme:b.q,closeMenuOnSelect:!0,defaultValue:M.dataDropdown.filter((function(e){return e.value===(null===E||void 0===E?void 0:E.id_unit)})),onChange:function(e){var t;t=e,console.log(t),Z(t.value)},options:Q,className:"react-select",classNamePrefix:"select"})]}),Object(x.jsxs)(l.s,{md:12,xs:12,children:[Object(x.jsx)(l.D,{className:"form-label",for:"description",children:k("Description")}),Object(x.jsx)(m.a,{defaultValue:null!==(v=null===(y=C.selectedData)||void 0===y?void 0:y.description)&&void 0!==v?v:"",control:ee,id:"description",name:"description",render:function(e){var t=e.field;return Object(x.jsx)(l.A,Object(n.a)(Object(n.a)({},t),{},{className:ne.domain?"form-control is-invalid":"form-control",type:"textarea",id:"description",invalid:ne.description&&!0}))}})]}),Object(x.jsxs)(l.s,{xs:12,className:"text-center mt-2 pt-50",children:[Object(x.jsx)(l.i,{type:"submit",className:"me-1",color:"primary",children:k("Submit")}),Object(x.jsx)(l.i,{type:"reset",color:"secondary",outline:!0,onClick:function(){ie(),_("add"),D(!1)},children:k("Cancel")})]})]})})]})]})})}},507:function(e,t,a){"use strict";var n=a(6),i=a(8),c=a(0),s=a(7),r=a.n(s),l=a(10),o=(a(513),a(2)),d=function(e){var t,a=e.children,s=e.blocking,l=e.loader,d=e.className,u=e.tag,b=e.overlayColor,j=u;return Object(o.jsxs)(j,{className:r()("ui-loader",(t={},Object(i.a)(t,d,d),Object(i.a)(t,"show",s),t)),children:[a,s?Object(o.jsxs)(c.Fragment,{children:[Object(o.jsx)("div",Object(n.a)({className:"overlay"},s&&b?{style:{backgroundColor:b}}:{})),Object(o.jsx)("div",{className:"loader",children:l})]}):null]})};t.a=d,d.defaultProps={tag:"div",blocking:!1,loader:Object(o.jsx)(l.R,{color:"primary"})}},510:function(e,t,a){},513:function(e,t,a){},517:function(e,t,a){!function(e){"use strict";var t="undefined"!==typeof window&&void 0!==window.flatpickr?window.flatpickr:{l10ns:{}},a={weekdays:{shorthand:["Min","Sen","Sel","Rab","Kam","Jum","Sab"],longhand:["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"]},months:{shorthand:["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"],longhand:["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"]},firstDayOfWeek:1,ordinal:function(){return""},time_24hr:!0,rangeSeparator:" - "};t.l10ns.id=a;var n=t.l10ns;e.Indonesian=a,e.default=n,Object.defineProperty(e,"__esModule",{value:!0})}(t)}}]);
//# sourceMappingURL=50.7a46b80e.chunk.js.map