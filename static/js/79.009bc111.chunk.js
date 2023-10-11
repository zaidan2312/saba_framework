(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[79],{143:function(e,t,a){"use strict";a.r(t);var c=a(6),n=a(9),s=a(182),i=a(507),r=a(69),l=(a(510),a(133),a(0)),o=a(511),d=a(68),u=a(103),m=a(20),j=a(10),b=a(54),p=a(16),O=a(2);t.default=function(e){var t,a,f,x,g=e.show,h=e.setShow,v=e.detailPage,y=e.formState,N=e.setFormState,S=Object(u.a)().t,D=Object(m.g)().id,T=Object(p.b)(),k=Object(p.c)((function(e){return e[b.storeName]})),q=Object(l.useContext)(r.a).colors,w=Object(l.useState)(null),C=Object(n.a)(w,2),A=(C[0],C[1],Object(l.useState)("Please Wait")),E=Object(n.a)(A,2),J=E[0],F=E[1],B=Object(o.e)({}),I=B.control,L=B.setError,P=B.handleSubmit,U=B.formState.errors,V=function(){return Object(O.jsxs)(l.Fragment,{children:[Object(O.jsx)(s.a,{}),Object(O.jsxs)(j.q,{className:"mb-0 mt-1",children:[S(J),"..."]})]})};function H(e){return Object.keys(e).sort().reduce((function(t,a){return t[a]=e[a],t}),{})}var Q=function(){T(Object(b.resetSelectedData)())};return Object(O.jsx)(j.E,{isOpen:g,toggle:function(){Q(),h(!g)},className:"modal-dialog-centered modal-lg",children:Object(O.jsxs)(i.a,{blocking:k.isLoadingAddEdit||k.isLoadingDetail,loader:Object(O.jsx)(V,{}),children:[Object(O.jsx)(j.H,{className:"bg-transparent",toggle:function(){Q(),h(!g)}}),Object(O.jsxs)(j.F,{className:"px-sm-5 pt-50 pb-5",children:[Object(O.jsx)("div",{className:"text-center mb-2",children:Object(O.jsxs)("h2",{className:"mb-1",children:[S("edit"===y?"Edit":"Add")," ",S(b.pageTitle)]})}),Object(O.jsx)(j.x,{onSubmit:P("edit"===y?function(e){if(function(e){if("edit"===y){var t=Object(c.a)({},H(k.selectedData));for(var a in delete t.id,t)a in e||delete t[a];return JSON.stringify(H(t))!==JSON.stringify(H(e))}return!0}(e))if(Object.values(e).every((function(e){return null!==e&&""!==e})))F("".concat(S("Updating")," ").concat(S(b.pageTitle)," ").concat(S("Detail")," Data")),T(Object(b.putData)(e)).then((function(e){"fulfilled"===e.meta.requestStatus?(h(!g),d.b.success("".concat(S("Successfully Updated")," ").concat(S(b.pageTitle)),{style:{padding:"16px",color:q.success.main,border:"1px solid ".concat(q.success.main)},iconTheme:{primary:q.success.main}}),v&&T(Object(b.getDataById)(D))):"rejected"===e.meta.requestStatus&&d.b.error(e.payload.message,{style:{padding:"16px",color:q.danger.main,border:"1px solid ".concat(q.danger.main)},iconTheme:{primary:q.danger.main}})}));else for(var t in e){var a;0===(null===(a=e[t])||void 0===a?void 0:a.length)&&L(t,{type:"manual"})}else Object(d.b)("".concat(S("You haven't changed anything")),{icon:"\ud83d\udc4f"})}:function(e){if(Object.values(e).every((function(e){return null!==e&&""!==e})))F("".concat(S("Creating a New ".concat(b.pageTitle)))),T(Object(b.postData)(e)).then((function(e){"fulfilled"===e.meta.requestStatus?(h(!g),d.b.success("".concat(S("Successfully Created")," ").concat(S(b.pageTitle)),{style:{padding:"16px",color:q.success.main,border:"1px solid ".concat(q.success.main)},iconTheme:{primary:q.success.main}}),v&&T(Object(b.getDataById)(D))):"rejected"===e.meta.requestStatus&&d.b.error(e.payload.message,{style:{padding:"16px",color:q.danger.main,border:"1px solid ".concat(q.danger.main)},iconTheme:{primary:q.danger.main}})}));else for(var t in e){var a;null!==e[t]&&0===(null===(a=e[t])||void 0===a?void 0:a.length)&&L(t,{type:"manual"})}}),children:Object(O.jsxs)(j.Q,{className:"gy-1 pt-75",children:[Object(O.jsxs)(j.s,{md:12,xs:12,children:[Object(O.jsxs)(j.D,{className:"form-label",for:"name",children:[S("Name"),Object(O.jsx)("span",{className:"text-danger",children:"*"})]}),Object(O.jsx)(o.a,{defaultValue:null!==(t=null===(a=k.selectedData)||void 0===a?void 0:a.name)&&void 0!==t?t:"",control:I,id:"name",name:"name",render:function(e){var t=e.field;return Object(O.jsx)(j.A,Object(c.a)(Object(c.a)({},t),{},{className:U.name?"form-control is-invalid":"form-control",id:"name",invalid:U.name&&!0}))}})]}),Object(O.jsxs)(j.s,{md:12,xs:12,children:[Object(O.jsxs)(j.D,{className:"form-label",for:"description",children:[S("Description"),Object(O.jsx)("span",{className:"text-danger",children:"*"})]}),Object(O.jsx)(o.a,{defaultValue:null!==(f=null===(x=k.selectedData)||void 0===x?void 0:x.description)&&void 0!==f?f:"",control:I,id:"description",name:"description",render:function(e){var t=e.field;return Object(O.jsx)(j.A,Object(c.a)(Object(c.a)({},t),{},{className:U.description?"form-control is-invalid":"form-control",id:"description",invalid:U.description&&!0}))}})]}),Object(O.jsxs)(j.s,{xs:12,className:"text-center mt-2 pt-50",children:[Object(O.jsx)(j.i,{type:"submit",className:"me-1",color:"primary",children:S("Submit")}),Object(O.jsx)(j.i,{type:"reset",color:"secondary",outline:!0,onClick:function(){Q(),N("add"),h(!1)},children:S("Cancel")})]})]})})]})]})})}}}]);
//# sourceMappingURL=79.009bc111.chunk.js.map