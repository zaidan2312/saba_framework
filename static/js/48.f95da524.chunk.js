(this["webpackJsonpsaba-react-framework"]=this["webpackJsonpsaba-react-framework"]||[]).push([[48,76,161,162],{163:function(e,s,n){"use strict";n.r(s);var i=n(8),o=n(5),t=n(9),r=n(0),a=n(21),l=n(82),d=(n(584),n(10)),c=n(121),m=n(570),p=n(216),u=(n(160),n(83)),j=n(31),b=(n(582),n(574),n(585),n(575)),x=n(89),f=n(14),O=n(2);s.default=function(e){var s=e.show,_=e.setShow,v=e.detailPage,y=e.formState,h=e.setFormState,g=e.currentData,D=void 0===g?null:g,N=Object(c.a)().t,T=Object(a.g)().id,S=Object(f.b)(),w=Object(f.c)((function(e){return e[x.storeName]})),M=Object(r.useContext)(u.a).colors,F=Object(r.useState)("Please Wait"),k=Object(t.a)(F,2),C=k[0],A=k[1],L=Object(f.c)((function(e){return e})),U=Object(r.useState)({}),V=Object(t.a)(U,2),E=V[0],I=V[1],G=Object(r.useState)({}),q=Object(t.a)(G,2),P=q[0],R=(q[1],Object(r.useState)({})),J=Object(t.a)(R,2),B=J[0],z=J[1],H=Object(b.e)({}),Q=(H.control,H.setError),W=H.handleSubmit,Y=(H.formState.errors,function(){return Object(O.jsxs)(r.Fragment,{children:[Object(O.jsx)(p.a,{}),Object(O.jsxs)(d.q,{className:"mb-0 mt-1",children:[N(C),"..."]})]})}),K=function(){S(Object(x.resetSelectedData)())},X=function(e,s){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(n)if(P[s]){var t=P[s].indexOf(e);-1!==t?P[s].splice(t,1):P[s].push(e)}else P[s]=[e];else P[s]=e;z(Object(o.a)(Object(o.a)({},B),{},Object(i.a)({},s,!1)))};return Object(r.useEffect)((function(){for(var e={},s=x.dynamicForm,i=function(i){var o=s[i].fieldName,t=s[i].fieldLabel,a=s[i].fieldName.replaceAll("id_","");if(P[o]=null,B[o]=!1,"dropdown"===s[i].type||"table"===s[i].type){var l,c,m,p,u,j=Object(r.lazy)((function(){return n(604)("./".concat(a))}));e["".concat(a,"_comp")]=Object(O.jsxs)(r.Fragment,{children:[Object(O.jsx)(d.D,{className:"form-label",for:o,children:N(null!==t&&void 0!==t?t:"")}),Object(O.jsx)(j,{lookupMode:!0,lookupMode_fieldName:o,lookupMode_dropdown:"dropdown"===s[i].type,lookupMode_isMulti:null!==(l=s[i].isMultiSelection)&&void 0!==l&&l,lookupMode_onChange:X,lookupMode_defaultValue:null!==(c=s[i])&&void 0!==c&&c.isM2MDefValFromGrid?L[x.storeName].data.map((function(e){return e[o]})):null!==(m=L[x.storeName])&&void 0!==m&&m.selectedData?L[x.storeName].selectedData[o]:"",lookupMode_isM2MDefValFromGrid:null!==(p=null===(u=s[i])||void 0===u?void 0:u.isM2MDefValFromGrid)&&void 0!==p&&p},"dynInput_".concat(o))]})}else{var b,f;e["".concat(a,"_comp")]=Object(O.jsxs)(r.Fragment,{children:[Object(O.jsx)(d.D,{className:"form-label",for:o,children:N(null!==t&&void 0!==t?t:"")}),Object(O.jsx)(d.A,{defaultValue:null!==(b=s[i])&&void 0!==b&&b.isM2MDefValFromGrid?L[x.storeName].data.map((function(e){return e[o]})):null!==(f=L[x.storeName])&&void 0!==f&&f.selectedData?L[x.storeName].selectedData[o]:"",onChange:function(e){var n;return X(e.target.value,o,null!==(n=s[i].isMultiSelection)&&void 0!==n&&n)},id:"dynInput_".concat(o)},"dynInput_".concat(o))]})}},o=0;o<s.length;o++)i(o);I(e)}),[]),Object(O.jsx)(d.E,{isOpen:s,toggle:function(){K(),_(!s)},className:"modal-dialog-centered modal-lg",children:Object(O.jsxs)(m.a,{blocking:w.isLoadingAddEdit||w.isLoadingDetail,loader:Object(O.jsx)(Y,{}),children:[Object(O.jsx)(d.H,{className:"bg-transparent",toggle:function(){K(),_(!s)}}),Object(O.jsxs)(d.F,{className:"px-sm-5 pt-50 pb-5",children:[Object(O.jsxs)("div",{className:"text-center mb-2",children:[Object(O.jsxs)("h2",{className:"mb-1",children:[N("edit"===y?"Edit":"Add Sub")," ",N(x.pageTitle)]}),Object(O.jsxs)("p",{className:"mb-1",children:[N("Child for ")," ",D?N(D.title):""]})]}),Object(O.jsx)(d.x,{onSubmit:W("edit"===y?function(){if(function(e){if("edit"===y){var s=Object(o.a)({},Object(j.x)(L[x.storeName].selectedData));for(var n in delete s.id,s)n in e||delete s[n];return JSON.stringify(Object(j.x)(s))!==JSON.stringify(Object(j.x)(e))}return!0}(P))if(Object.values(data).every((function(e){return null!==e&&""!==e})))A("".concat(N("Updating")," ").concat(N(x.pageTitle)," ").concat(N("Detail")," Data")),S(Object(x.putData)(data)).then((function(e){"fulfilled"===e.meta.requestStatus?(_(!s),l.b.success("".concat(N("Successfully Updated")," ").concat(N(x.pageTitle)),{style:{padding:"16px",color:M.success.main,border:"1px solid ".concat(M.success.main)},iconTheme:{primary:M.success.main}}),v&&S(Object(x.getDataById)(T))):"rejected"===e.meta.requestStatus&&l.b.error(e.payload.message,{style:{padding:"16px",color:M.danger.main,border:"1px solid ".concat(M.danger.main)},iconTheme:{primary:M.danger.main}})}));else for(var e in data){var n;0===(null===(n=data[e])||void 0===n?void 0:n.length)&&Q(e,{type:"manual"})}else Object(l.b)("".concat(N("You haven't changed anything")),{icon:"\ud83d\udc4f"})}:function(){if(Object.values(P).every((function(e){return null!==e&&""!==e})))A("".concat(N("Creating a New ".concat(x.pageTitle)))),S(Object(x.postData)(P)).then((function(e){"fulfilled"===e.meta.requestStatus?(_(!s),l.b.success("".concat(N("Successfully Created")," ").concat(N(x.pageTitle)),{style:{padding:"16px",color:M.success.main,border:"1px solid ".concat(M.success.main)},iconTheme:{primary:M.success.main}}),v&&S(Object(x.getDataById)(T))):"rejected"===e.meta.requestStatus&&l.b.error(e.payload.message,{style:{padding:"16px",color:M.danger.main,border:"1px solid ".concat(M.danger.main)},iconTheme:{primary:M.danger.main}})}));else{var e=Object.assign({},B);for(var n in P){var i;null!==P[n]&&0!==(null===(i=P[n])||void 0===i?void 0:i.length)||(e[n]=!0)}z(e)}}),children:Object(O.jsxs)(d.Q,{className:"gy-1 pt-75",children:[x.dynamicForm.map((function(e,s){var n,i,o=e.fieldName.replaceAll("id_","");return["dropdown","table"].includes(e.type)?"table"===e.type?Object(O.jsx)(d.s,{md:12,xs:12,children:Object(O.jsx)(r.Suspense,{fallback:Object(O.jsx)("div",{children:"Loading..."}),children:Object(O.jsxs)("div",{className:B[e.fieldName]?"dynamicForm_input dynamicForm_input_invalid":"dynamicForm_input",children:[E["".concat(o,"_comp")],(null===e||void 0===e?void 0:e.isM2MDefValFromGrid)&&P[e.fieldName]&&Object(O.jsxs)("div",{style:{textAlign:"right"},className:"text-primary",children:[null===(n=P[e.fieldName])||void 0===n?void 0:n.length," ",N(e.fieldLabel)," ",N("Selected")]})]})})},o):Object(O.jsx)(d.s,{md:12,xs:12,children:Object(O.jsx)(r.Suspense,{fallback:Object(O.jsx)("div",{children:"Loading..."}),children:Object(O.jsxs)("div",{className:B[e.fieldName]?"dynamicForm_input_invalid":"",children:[E["".concat(o,"_comp")],(null===e||void 0===e?void 0:e.isM2MDefValFromGrid)&&P[e.fieldName]&&Object(O.jsxs)("div",{style:{textAlign:"right"},className:"text-primary",children:[null===(i=P[e.fieldName])||void 0===i?void 0:i.length," ",N(e.fieldLabel)," ",N("Selected")]})]})})},o):Object(O.jsx)(d.s,{md:12,xs:12,children:Object(O.jsx)("div",{className:B[e.fieldName]?"dynamicForm_input_invalid":"",children:E["".concat(o,"_comp")]})},o)})),Object(O.jsxs)(d.s,{xs:12,className:"text-center mt-2 pt-50",children:[Object(O.jsx)(d.i,{type:"submit",className:"me-1",color:"primary",children:N("Submit")}),Object(O.jsx)(d.i,{type:"reset",color:"secondary",outline:!0,onClick:function(){K(),h("add"),_(!1)},children:N("Cancel")})]})]})})]})]})})}},570:function(e,s,n){"use strict";var i=n(5),o=n(8),t=n(0),r=n(7),a=n.n(r),l=n(10),d=(n(576),n(2)),c=function(e){var s,n=e.children,r=e.blocking,l=e.loader,c=e.className,m=e.tag,p=e.overlayColor,u=m;return Object(d.jsxs)(u,{className:a()("ui-loader",(s={},Object(o.a)(s,c,c),Object(o.a)(s,"show",r),s)),children:[n,r?Object(d.jsxs)(t.Fragment,{children:[Object(d.jsx)("div",Object(i.a)({className:"overlay"},r&&p?{style:{backgroundColor:p}}:{})),Object(d.jsx)("div",{className:"loader",children:l})]}):null]})};s.a=c,c.defaultProps={tag:"div",blocking:!1,loader:Object(d.jsx)(l.R,{color:"primary"})}},574:function(e,s,n){},576:function(e,s,n){},604:function(e,s,n){var i={"./app":[173,9,0,2,9,14,38],"./app/":[173,9,0,2,9,14,38],"./app/DropDown":[391,9,0,61],"./app/DropDown.js":[391,9,0,61],"./app/Table":[380,9,0,2,9,14,141],"./app/Table.js":[380,9,0,2,9,14,141],"./app/index":[173,9,0,2,9,14,38],"./app/index.js":[173,9,0,2,9,14,38],"./app/modal":[167,9,0,9,14,73],"./app/modal/":[167,9,0,9,14,73],"./app/modal/index":[167,9,0,9,14,73],"./app/modal/index.js":[167,9,0,9,14,73],"./app/store":[84,9],"./app/store/":[84,9],"./app/store/index":[84,9],"./app/store/index.js":[84,9],"./app/style.scss":[542,7,169],"./endpoint":[174,9,0,2,8,6,43],"./endpoint/":[174,9,0,2,8,6,43],"./endpoint/DropDown":[392,9,0,62],"./endpoint/DropDown.js":[392,9,0,62],"./endpoint/Table":[381,9,2,6,136],"./endpoint/Table.js":[381,9,2,6,136],"./endpoint/Tree":[382,9,2,8,129],"./endpoint/Tree.js":[382,9,2,8,129],"./endpoint/index":[174,9,0,2,8,6,43],"./endpoint/index.js":[174,9,0,2,8,6,43],"./endpoint/modal":[163,9,76],"./endpoint/modal/":[163,9,76],"./endpoint/modal/index":[163,9,76],"./endpoint/modal/index.js":[163,9,76],"./endpoint/store":[89,9],"./endpoint/store/":[89,9],"./endpoint/store/index":[89,9],"./endpoint/store/index.js":[89,9],"./endpoint/style.scss":[543,7,170],"./menu":[175,9,0,2,8,10,29],"./menu/":[175,9,0,2,8,10,29],"./menu/DropDown":[393,9,0,63],"./menu/DropDown.js":[393,9,0,63],"./menu/Table":[383,9,0,2,10,134,135],"./menu/Table.js":[383,9,0,2,10,134,135],"./menu/Tree":[384,9,0,2,8,10,121],"./menu/Tree.js":[384,9,0,2,8,10,121],"./menu/icons/feather":[372,9,44],"./menu/icons/feather.js":[372,9,44],"./menu/icons/material":[373,9,10,64],"./menu/icons/material.js":[373,9,10,64],"./menu/index":[175,9,0,2,8,10,29],"./menu/index.js":[175,9,0,2,8,10,29],"./menu/modal":[164,9,0,10,35],"./menu/modal/":[164,9,0,10,35],"./menu/modal/index":[164,9,0,10,35],"./menu/modal/index.js":[164,9,0,10,35],"./menu/store":[88,9],"./menu/store/":[88,9],"./menu/store/index":[88,9],"./menu/store/index.js":[88,9],"./menu/store/my_menu":[35,9],"./menu/store/my_menu.js":[35,9],"./menu/style.scss":[544,7,171],"./permission":[176,9,0,2,6,16,59],"./permission/":[176,9,0,2,6,16,59],"./permission/DropDown":[394,9,0,65],"./permission/DropDown.js":[394,9,0,65],"./permission/Form":[375,9,178],"./permission/Form.js":[375,9,178],"./permission/Table":[395,9,2,6,16,150],"./permission/Table.js":[395,9,2,6,16,150],"./permission/detail":[123,9,66],"./permission/detail/":[123,9,66],"./permission/detail/index":[123,9,66],"./permission/detail/index.js":[123,9,66],"./permission/index":[176,9,0,2,6,16,59],"./permission/index.js":[176,9,0,2,6,16,59],"./permission/modal":[169,9,74],"./permission/modal/":[169,9,74],"./permission/modal/index":[169,9,74],"./permission/modal/index.js":[169,9,74],"./permission/store":[85,9],"./permission/store/":[85,9],"./permission/store/index":[85,9],"./permission/store/index.js":[85,9],"./permission/style.scss":[545,7,172],"./permission_endpoint":[177,9,0,2,6,17,54],"./permission_endpoint/":[177,9,0,2,6,17,54],"./permission_endpoint/DropDown":[396,9,0,67],"./permission_endpoint/DropDown.js":[396,9,0,67],"./permission_endpoint/Table":[397,9,2,6,17,151],"./permission_endpoint/Table.js":[397,9,2,6,17,151],"./permission_endpoint/index":[177,9,0,2,6,17,54],"./permission_endpoint/index.js":[177,9,0,2,6,17,54],"./permission_endpoint/modal":[170,9,77],"./permission_endpoint/modal/":[170,9,77],"./permission_endpoint/modal/index":[170,9,77],"./permission_endpoint/modal/index.js":[170,9,77],"./permission_endpoint/store":[91,9],"./permission_endpoint/store/":[91,9],"./permission_endpoint/store/index":[91,9],"./permission_endpoint/store/index.js":[91,9],"./permission_endpoint/style.scss":[546,7,173],"./permission_menu":[178,9,0,2,6,18,55],"./permission_menu/":[178,9,0,2,6,18,55],"./permission_menu/DropDown":[398,9,0,68],"./permission_menu/DropDown.js":[398,9,0,68],"./permission_menu/Table":[399,9,2,6,18,152],"./permission_menu/Table.js":[399,9,2,6,18,152],"./permission_menu/index":[178,9,0,2,6,18,55],"./permission_menu/index.js":[178,9,0,2,6,18,55],"./permission_menu/modal":[171,9,78],"./permission_menu/modal/":[171,9,78],"./permission_menu/modal/index":[171,9,78],"./permission_menu/modal/index.js":[171,9,78],"./permission_menu/store":[90,9],"./permission_menu/store/":[90,9],"./permission_menu/store/index":[90,9],"./permission_menu/store/index.js":[90,9],"./permission_menu/style.scss":[547,7,174],"./role":[179,9,0,45],"./role/":[179,9,0,45],"./role/DropDown":[400,9,0,69],"./role/DropDown.js":[400,9,0,69],"./role/RoleCards":[385,9,158],"./role/RoleCards.js":[385,9,158],"./role/Table":[406,9,2,40],"./role/Table.js":[406,9,2,40],"./role/index":[179,9,0,45],"./role/index.js":[179,9,0,45],"./role/modal":[172,9,79],"./role/modal/":[172,9,79],"./role/modal/index":[172,9,79],"./role/modal/index.js":[172,9,79],"./role/store":[66,9],"./role/store/":[66,9],"./role/store/index":[66,9],"./role/store/index.js":[66,9],"./role/style.scss":[548,7,175],"./role_permission/store":[93,9],"./role_permission/store/":[93,9],"./role_permission/store/index":[93,9],"./role_permission/store/index.js":[93,9],"./roles-permissions/roles":[183,9,15],"./roles-permissions/roles/":[183,9,15],"./roles-permissions/roles/RoleCards":[405,9,120],"./roles-permissions/roles/RoleCards.js":[405,9,120],"./roles-permissions/roles/Table":[407,9,2,42],"./roles-permissions/roles/Table.js":[407,9,2,42],"./roles-permissions/roles/columns":[403,9,80],"./roles-permissions/roles/columns.js":[403,9,80],"./roles-permissions/roles/index":[183,9,15],"./roles-permissions/roles/index.js":[183,9,15],"./roles-permissions/store":[94,9],"./roles-permissions/store/":[94,9],"./roles-permissions/store/index":[94,9],"./roles-permissions/store/index.js":[94,9],"./roles-permissions/store/role":[126,9],"./roles-permissions/store/role.js":[126,9],"./unit":[180,9,2,8,6,36],"./unit/":[180,9,2,8,6,36],"./unit/Table":[386,9,2,6,137],"./unit/Table.js":[386,9,2,6,137],"./unit/Tree":[387,9,8,142],"./unit/Tree.js":[387,9,8,142],"./unit/index":[180,9,2,8,6,36],"./unit/index.js":[180,9,2,8,6,36],"./unit/modal":[165,9,81],"./unit/modal/":[165,9,81],"./unit/modal/index":[165,9,81],"./unit/modal/index.js":[165,9,81],"./unit/store":[86,9],"./unit/store/":[86,9],"./unit/store/index":[86,9],"./unit/store/index.js":[86,9],"./unit/store/my_unit":[402,9,82],"./unit/store/my_unit.js":[402,9,82],"./unit/style.scss":[549,7,176],"./unit_app":[181,9,0,2,6,53],"./unit_app/":[181,9,0,2,6,53],"./unit_app/Table":[388,9,0,2,6,163],"./unit_app/Table.js":[388,9,0,2,6,163],"./unit_app/index":[181,9,0,2,6,53],"./unit_app/index.js":[181,9,0,2,6,53],"./unit_app/modal":[168,9,0,83],"./unit_app/modal/":[168,9,0,83],"./unit_app/modal/index":[168,9,0,83],"./unit_app/modal/index.js":[168,9,0,83],"./unit_app/store":[92,9],"./unit_app/store/":[92,9],"./unit_app/store/index":[92,9],"./unit_app/store/index.js":[92,9],"./unit_app/style.scss":[550,7,177],"./user":[182,9,0,2,12,60],"./user/":[182,9,0,2,12,60],"./user/Sidebar":[401,9,0,168],"./user/Sidebar.js":[401,9,0,168],"./user/Table":[404,9,0,2,12],"./user/Table.js":[404,9,0,2,12],"./user/columns":[408,9,84],"./user/columns.js":[408,9,84],"./user/detail":[124,9,0,7,9,13,30],"./user/detail/":[124,9,0,7,9,13,30],"./user/detail/Notifications":[377,9,85],"./user/detail/Notifications.js":[377,9,85],"./user/detail/SecurityTab":[376,9,7,13,160],"./user/detail/SecurityTab.js":[376,9,7,13,160],"./user/detail/Tabs":[389,9,7,13,39,156],"./user/detail/Tabs.js":[389,9,7,13,39,156],"./user/detail/UserInfoCard":[390,9,0,9,155],"./user/detail/UserInfoCard.js":[390,9,0,9,155],"./user/detail/UserTimeline":[378,9,132],"./user/detail/UserTimeline.js":[378,9,132],"./user/detail/index":[124,9,0,7,9,13,30],"./user/detail/index.js":[124,9,0,7,9,13,30],"./user/index":[182,9,0,2,12,60],"./user/index.js":[182,9,0,2,12,60],"./user/modal":[166,9,0,75],"./user/modal/":[166,9,0,75],"./user/modal/index":[166,9,0,75],"./user/modal/index.js":[166,9,0,75],"./user/store":[87,9],"./user/store/":[87,9],"./user/store/index":[87,9],"./user/store/index.js":[87,9],"./user/store/userActivity":[127,9],"./user/store/userActivity.js":[127,9]};function o(e){if(!n.o(i,e))return Promise.resolve().then((function(){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}));var s=i[e],o=s[0];return Promise.all(s.slice(2).map(n.e)).then((function(){return n.t(o,s[1])}))}o.keys=function(){return Object.keys(i)},o.id=604,e.exports=o}}]);
//# sourceMappingURL=48.f95da524.chunk.js.map