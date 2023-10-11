(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[121,81],{136:function(e,t,a){"use strict";a.r(t);var n=a(6),c=a(9),r=a(0),o=a(20),s=a(68),i=(a(520),a(10)),l=a(103),d=a(507),u=a(182),b=(a(133),a(69)),j=(a(31),a(516),a(510),a(517),a(511)),p=a(72),m=a(16),f=a(2);t.default=function(e){var t,a,O,g,x=e.show,h=e.setShow,y=e.detailPage,v=e.formState,S=e.setFormState,D=e.currentData,N=void 0===D?null:D,w=Object(l.a)().t,_=Object(o.g)().id,T=Object(m.b)(),C=Object(m.c)((function(e){return e[p.storeName]})),k=Object(r.useContext)(b.a).colors,P=Object(r.useState)(null),L=Object(c.a)(P,2),E=(L[0],L[1],Object(r.useState)("Please Wait")),F=Object(c.a)(E,2),A=F[0],I=F[1],B=Object(j.e)({}),q=B.control,M=B.setError,z=B.handleSubmit,J=B.formState.errors,R=function(){return Object(f.jsxs)(r.Fragment,{children:[Object(f.jsx)(u.a,{}),Object(f.jsxs)(i.q,{className:"mb-0 mt-1",children:[w(A),"..."]})]})};function Q(e){return Object.keys(e).sort().reduce((function(t,a){return t[a]=e[a],t}),{})}var U=function(){T(Object(p.resetSelectedData)())};return Object(f.jsx)(i.E,{isOpen:x,toggle:function(){U(),h(!x)},className:"modal-dialog-centered modal-lg",children:Object(f.jsxs)(d.a,{blocking:C.isLoadingAddEdit||C.isLoadingDetail,loader:Object(f.jsx)(R,{}),children:[Object(f.jsx)(i.H,{className:"bg-transparent",toggle:function(){U(),h(!x)}}),Object(f.jsxs)(i.F,{className:"px-sm-5 pt-50 pb-5",children:[Object(f.jsxs)("div",{className:"text-center mb-2",children:[Object(f.jsxs)("h2",{className:"mb-1",children:[w("edit"===v?"Edit":"Add")," ",w(p.pageTitle)]}),"edit"!==v?Object(f.jsxs)("p",{children:["Setelah menambahkan data ",w("Unit")," baru, maka pastikan logout dulu akun anda."]}):null]}),Object(f.jsx)(i.x,{onSubmit:z("edit"===v?function(e){if(function(e){if("edit"===v){var t=Object(n.a)({},Q(C.selectedData));for(var a in delete t.id,t)a in e||delete t[a];return JSON.stringify(Q(t))!==JSON.stringify(Q(e))}return!0}(e))if(Object.values(e).every((function(e){return null!==e&&""!==e})))I("".concat(w("Updating")," ").concat(w(p.pageTitle)," ").concat(w("Detail")," Data")),T(Object(p.putData)(e)).then((function(e){if("fulfilled"===e.meta.requestStatus)h(!x),s.b.success("".concat(w("Successfully Updated")," ").concat(w(p.pageTitle)),{style:{padding:"16px",color:k.success.main,border:"1px solid ".concat(k.success.main)},iconTheme:{primary:k.success.main}}),y&&T(Object(p.getDataById)(_));else if("rejected"===e.meta.requestStatus){var t;s.b.error(null===(t=e.payload)||void 0===t?void 0:t.message,{style:{padding:"16px",color:k.danger.main,border:"1px solid ".concat(k.danger.main)},iconTheme:{primary:k.danger.main}})}}));else for(var t in e){var a;0===(null===(a=e[t])||void 0===a?void 0:a.length)&&M(t,{type:"manual"})}else Object(s.b)("".concat(w("You haven't changed anything")),{icon:"\ud83d\udc4f"})}:function(e){if(Object.values(e).every((function(e){return null!==e&&""!==e})))I("".concat(w("Creating a New ".concat(p.pageTitle)))),e.depth=N.depth+1,e.parent_id=N.id,T(Object(p.postData)(e)).then((function(e){console.log(e),"fulfilled"===e.meta.requestStatus?(h(!x),s.b.success("".concat(w("Successfully Created")," ").concat(w(p.pageTitle)),{style:{padding:"16px",color:k.success.main,border:"1px solid ".concat(k.success.main)},iconTheme:{primary:k.success.main}}),y&&T(Object(p.getDataById)(_))):"rejected"===e.meta.requestStatus&&s.b.error(e.payload.message,{style:{padding:"16px",color:k.danger.main,border:"1px solid ".concat(k.danger.main)},iconTheme:{primary:k.danger.main}})}));else for(var t in e){var a;null!==e[t]&&0===(null===(a=e[t])||void 0===a?void 0:a.length)&&M(t,{type:"manual"})}}),children:Object(f.jsxs)(i.Q,{className:"gy-1 pt-75",children:[Object(f.jsxs)(i.s,{md:12,xs:12,children:[Object(f.jsxs)(i.D,{className:"form-label",for:"name",children:[w("Name"),Object(f.jsx)("span",{className:"text-danger",children:"*"})]}),Object(f.jsx)(j.a,{defaultValue:null!==(t=null===(a=C.selectedData)||void 0===a?void 0:a.name)&&void 0!==t?t:"",control:q,id:"name",name:"name",render:function(e){var t=e.field;return Object(f.jsx)(i.A,Object(n.a)(Object(n.a)({},t),{},{className:J.name?"form-control is-invalid":"form-control",id:"name",invalid:J.name&&!0}))}})]}),Object(f.jsxs)(i.s,{md:12,xs:12,children:[Object(f.jsxs)(i.D,{className:"form-label",for:"description",children:[w("Code"),Object(f.jsx)("span",{className:"text-danger",children:"*"})]}),Object(f.jsx)(j.a,{defaultValue:null!==(O=null===(g=C.selectedData)||void 0===g?void 0:g.code)&&void 0!==O?O:"",control:q,id:"code",name:"code",render:function(e){var t=e.field;return Object(f.jsx)(i.A,Object(n.a)(Object(n.a)({},t),{},{className:J.code?"form-control is-invalid":"form-control",id:"code",invalid:J.code&&!0}))}})]}),Object(f.jsxs)(i.s,{xs:12,className:"text-center mt-2 pt-50",children:[Object(f.jsx)(i.i,{type:"submit",className:"me-1",color:"primary",children:w("Submit")}),Object(f.jsx)(i.i,{type:"reset",color:"secondary",outline:!0,onClick:function(){U(),S("add"),h(!1)},children:w("Cancel")})]})]})})]})]})})}},337:function(e,t,a){"use strict";a.r(t);var n=a(4),c=a(9),r=a(3),o=a.n(r),s=a(0),i=a(103),l=a(65),d=a(136),u=a(31),b=a(72),j=a(16),p=a(266),m=a(237),f=a(282),O=a(507),g=(a(182),a(69)),x=a(68),h=a(10),y=a(62),v=a.n(y),S=a(509),D=a.n(S),N=(a(183),a(512),a(574)),w=a.n(N),_=a(319),T=(a(33),a(2)),C=D()(v.a);t.default=function(e){var t=Object(j.b)(),a=Object(j.c)((function(e){return e[b.storeName]})),r=Object(i.a)().t,y=Object(s.useState)(!1),v=Object(c.a)(y,2),S=v[0],D=v[1],N=Object(s.useContext)(l.a),k=Object(s.useState)(!1),P=Object(c.a)(k,2),L=(P[0],P[1]),E=Object(s.useState)("Please Wait"),F=Object(c.a)(E,2),A=(F[0],F[1]),I=Object(s.useState)(!1),B=Object(c.a)(I,2),q=B[0],M=B[1],z=Object(s.useState)(null),J=Object(c.a)(z,2),R=J[0],Q=J[1],U=Object(s.useState)(null),W=Object(c.a)(U,2),X=W[0],Y=W[1],G=Object(s.useState)(0),V=Object(c.a)(G,2),H=V[0],K=V[1],Z=Object(s.useState)(null),$=Object(c.a)(Z,2),ee=($[0],$[1]),te=Object(s.useContext)(g.a).colors,ae=function(){var e=Object(n.a)(o.a.mark((function e(a){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.fire({title:"".concat(r("Are you sure?")),text:"".concat(r("You won't be able to revert")," ").concat(r(b.pageTitle),"!"),icon:"warning",showCancelButton:!0,confirmButtonText:"".concat(r("Yes, Delete")," ").concat(r(b.pageTitle),"!"),cancelButtonText:"".concat(r("Cancel")),customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ms-1"},buttonsStyling:!1});case 2:e.sent.value&&(A("".concat(r("Deleting")," Data ").concat(r(b.pageTitle))),L(!0),t(Object(b.deleteData)(a)).then((function(e){"fulfilled"===e.meta.requestStatus?(L(!1),x.b.success("".concat(r("Successfully deleted")," ").concat(r(b.pageTitle)),{style:{padding:"16px",color:te.success.main,border:"1px solid ".concat(te.success.main)},iconTheme:{primary:te.success.main}})):"rejected"===e.meta.requestStatus&&(L(!1),x.b.error(e.payload.message,{style:{padding:"16px",color:te.danger.main,border:"1px solid ".concat(te.danger.main)},iconTheme:{primary:te.danger.main}}))})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;Y(e),Q("add"),D(!S),M(!q),Object(u.l)(ce)},ce=function(){D(!S),M(!q),Object(u.p)()};return Object(s.useEffect)((function(){(0===a.dataNested.length&&!a.isLoadingNested||b.getAlwaysGrid)&&(A("".concat(r("Loading Data")," ").concat(r(b.pageTitle))),t(Object(b.getDataList)({})))}),[t,a.dataNested.length>0]),Object(T.jsxs)(s.Fragment,{children:[Object(T.jsx)(O.a,{blocking:a.isLoadingNested,loader:Object(T.jsx)(_.b,{}),children:Object(T.jsx)(h.k,{className:"overflow-hidden",children:Object(T.jsx)("div",{className:"react-dataTable react-dataTable-selectable-rows",children:Object(T.jsx)("div",{style:{height:1e3,marginLeft:20,marginRight:20,marginTop:40},children:Object(T.jsx)(w.a,{treeData:a.dataNested,onChange:function(e){t(Object(b.setDataListNested)(e))},canDrag:!1,searchMethod:function(e){var t=e.node,a=e.searchQuery;return a&&t.name.toLowerCase().indexOf(a.toLowerCase())>-1},searchQuery:e.searchString,searchFocusOffset:H,searchFinishCallback:function(e){ee(e.length),K(e.length>0?H%e.length:0)},maxDepth:10,generateNodeProps:function(e){var a,n,c=e.node;e.path;return{style:{fontSize:c.is_app_header?"16px":"14px",fontWeight:c.is_app_header?"bold":"normal"},title:Object(T.jsxs)("div",{className:"d-flex justify-content-left align-items-center",children:[(null===c||void 0===c||null===(a=c.attributes)||void 0===a?void 0:a.logo)&&Object(T.jsx)("img",{className:"me-1",src:c.attributes.logo,height:"25"}),Object(T.jsx)("div",{className:"d-flex flex-column",children:Object(T.jsx)("span",{className:"fw-bolder",children:c.name})})]}),buttons:[N.can("post",sessionStorage.getItem("current_page_perm"))?Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(h.i.Ripple,{className:"btn-icon rounded-circle",color:"flat-primary",id:"btn-add-child",onClick:function(e){ne(c)},children:Object(T.jsx)(p.a,{size:16})}),Object(T.jsx)(h.X,{placement:"left",target:"btn-add-child",children:r("Add Child")})]}):null,!N.can("update",sessionStorage.getItem("current_page_perm"))||c.is_app_header||c.disableEdit?null:Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(h.i.Ripple,{className:"btn-icon rounded-circle",color:"flat-info",id:"btn-edit",onClick:function(e){var a;e.preventDefault(),a=c,Q("edit"),b.detailFromGrid?(A("".concat(r("Loading")," ").concat(r("Detail")," ").concat(r("Data")," ").concat(r(b.pageTitle))),L(!0),t(Object(b.setDataById)(a)).then((function(){L(!1),M(!0)}))):(A("".concat(r("Loading")," ").concat(r("Detail")," ").concat(r("Data")," ").concat(r(b.pageTitle))),L(!0),t(Object(b.getDataById)(a.id)).then((function(e){"rejected"===e.meta.requestStatus?(L(!1),x.b.error(e.payload.message,{style:{padding:"16px",color:te.danger.main,border:"1px solid ".concat(te.danger.main)},iconTheme:{primary:te.danger.main}})):(L(!1),M(!0))})))},children:Object(T.jsx)(m.a,{size:16})}),Object(T.jsx)(h.X,{placement:"left",target:"btn-edit",children:r("Edit")})]}),N.can("delete",sessionStorage.getItem("current_page_perm"))&&!c.disableDelete&&0===(null===c||void 0===c||null===(n=c.children)||void 0===n?void 0:n.length)?Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(h.i.Ripple,{id:"btn-delete",className:"btn-icon rounded-circle",color:"flat-danger",onClick:function(e){e.preventDefault(),ae(c.id)},children:Object(T.jsx)(f.a,{size:16})}),Object(T.jsx)(h.X,{placement:"left",target:"btn-delete",children:r("Delete")})]}):null]}}})})})})}),q&&Object(T.jsx)(d.default,{formState:R,show:q,setShow:ne,detailPage:!1,setFormState:Q,currentData:X})]})}},512:function(e,t,a){},538:function(e,t,a){var n=a(360);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},539:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},540:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},542:function(e,t,a){var n=a(538),c=a(539),r=a(355),o=a(540);e.exports=function(e){return n(e)||c(e)||r(e)||o()},e.exports.__esModule=!0,e.exports.default=e.exports},556:function(e,t,a){var n=a(108);function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}e.exports=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e},e.exports.__esModule=!0,e.exports.default=e.exports},557:function(e,t,a){var n=a(619);e.exports=function(e,t){if(null==e)return{};var a,c,r=n(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(c=0;c<o.length;c++)a=o[c],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r},e.exports.__esModule=!0,e.exports.default=e.exports},619:function(e,t){e.exports=function(e,t){if(null==e)return{};var a,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(c[a]=e[a]);return c},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=121.ea6710e9.chunk.js.map