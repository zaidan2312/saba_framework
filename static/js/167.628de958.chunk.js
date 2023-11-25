(this["webpackJsonpsaba-react-framework"]=this["webpackJsonpsaba-react-framework"]||[]).push([[167,168],{401:function(e,a,s){"use strict";s.r(a);var t=s(5),l=s(9),n=s(0),r=s(8),c=s(37),i=s(146),o=s(7),d=s.n(o),m=s(51),u=s.n(m),b=s(10),j=s(2),h=["open","size","title","width","children","closeBtn","className","toggleSidebar","bodyClassName","contentClassName","wrapperClassName","headerClassName"],O=function(e){var a,s=e.open,l=e.size,n=e.title,o=e.width,m=e.children,O=e.closeBtn,p=e.className,f=e.toggleSidebar,x=e.bodyClassName,v=e.contentClassName,g=e.wrapperClassName,N=e.headerClassName,w=Object(c.a)(e,h),y=O||Object(j.jsx)(i.a,{className:"cursor-pointer",size:15,onClick:f});return Object(j.jsxs)(b.E,Object(t.a)(Object(t.a)(Object(t.a)({isOpen:s,toggle:f,contentClassName:d()("overflow-hidden",Object(r.a)({},v,v)),modalClassName:d()("modal-slide-in",Object(r.a)({},g,g)),className:d()((a={},Object(r.a)(a,p,p),Object(r.a)(a,"sidebar-lg","lg"===l),Object(r.a)(a,"sidebar-sm","sm"===l),a))},void 0!==o?{style:{width:String(o)+"px"}}:{}),w),{},{children:[Object(j.jsx)(b.H,{className:d()(Object(r.a)({},N,N)),toggle:f,close:y,tag:"div",children:Object(j.jsx)("h5",{className:"modal-title",children:Object(j.jsx)("span",{className:"align-middle",children:n})})}),Object(j.jsx)(u.a,{options:{wheelPropagation:!1},children:Object(j.jsx)(b.F,{className:d()("flex-grow-1",Object(r.a)({},x,x)),children:m})})]}))},p=s(31),f=s(217),x=s(575),v=s(87),g=s(14),N=s(82),w=s(121),y=s(83),C=s(595),S={email:"",password:"",phone:"",member_of:"",id_role:"",name:"",username:""};a.default=function(e){var a=e.open,s=e.toggleSidebar,r=Object(w.a)().t,c=Object(n.useContext)(y.a).colors,i=Object(n.useState)({}),o=Object(l.a)(i,2),m=(o[0],o[1]),u=Object(n.useState)(3),h=Object(l.a)(u,2),z=h[0],_=h[1],A=Object(n.useState)([]),D=Object(l.a)(A,2),q=D[0],P=D[1],V=(Object(g.c)((function(e){return e.users})),Object(g.c)((function(e){return e.roles}))),k=Object(g.c)((function(e){return e.units})),F=Object(g.b)(),I=Object(x.e)({defaultValues:S}),L=I.control,Z=I.setValue,E=I.setError,T=I.handleSubmit,U=I.formState.errors;return Object(n.useEffect)((function(){var e=k.data.map((function(e){return{value:e.id,label:e.name}}));P([e[0]])}),[F,k.data.length]),Object(j.jsx)(O,{size:"lg",open:a,title:r("New User"),headerClassName:"mb-1",contentClassName:"pt-0",toggleSidebar:s,onClosed:function(){for(var e in S)Z(e,"")},children:Object(j.jsxs)(b.x,{onSubmit:T((function(e){if(e.member_of=null!==q?q.map((function(e){return e.value})):[],e.id_role=null!==z?z:null,m(e),function(e){return Object.values(e).every((function(e){return"object"===typeof e||"member_of"!==e?null!==e&&""!==e:e.length>0}))}(e))F(Object(v.addUser)({id_role:null===e||void 0===e?void 0:e.id_role,avatar:"",status:1,email:e.email,member_of:null===e||void 0===e?void 0:e.member_of,phone:e.phone,name:e.name,username:e.username,password:e.password})).then((function(e){if("fulfilled"===e.meta.requestStatus)s(),N.b.success("".concat(r("Successfully Create Data")),{style:{padding:"16px",color:c.success.main,border:"1px solid ".concat(c.success.main)},iconTheme:{primary:c.success.main}});else if("rejected"===e.meta.requestStatus){var a="";e.payload.errors?a=Object.values(e.payload.errors):e.payload.error_reason&&(a=e.payload.message),N.b.error("".concat(r(a)),{style:{padding:"16px",color:c.danger.main,border:"1px solid ".concat(c.danger.main)},iconTheme:{primary:c.danger.main}})}}));else for(var a in e)null!==e[a]&&0===e[a].length&&E(a,{type:"manual"})})),children:[Object(j.jsxs)("div",{className:"mb-1",children:[Object(j.jsxs)(b.D,{className:"form-label",for:"name",children:[r("Full Name"),Object(j.jsx)("span",{className:"text-danger",children:"*"})]}),Object(j.jsx)(x.a,{defaultValue:"",control:L,rules:{required:!0,pattern:{value:/^[a-zA-Z\s]*$/,message:r("Invalid name, you can only use letters")}},id:"name",name:"name",render:function(e){var a=e.field;return Object(j.jsx)(b.A,Object(t.a)(Object(t.a)({},a),{},{id:"name",placeholder:"John",invalid:U.name&&!0}))}}),U.name&&Object(j.jsx)(b.z,{color:"danger",children:r(U.name.message)})]}),Object(j.jsxs)("div",{className:"mb-1",children:[Object(j.jsxs)(b.D,{className:"form-label",for:"email",children:[r("Email")," ",Object(j.jsx)("span",{className:"text-danger",children:"*"})]}),Object(j.jsx)(x.a,{name:"email",control:L,rules:{required:{value:!0,message:r("You need to specify a valid email address")},pattern:{value:/^\S+@\S+$/i,message:r("Not valid email adreess.")}},render:function(e){var a=e.field;return Object(j.jsx)(b.A,Object(t.a)({type:"email",id:"email",placeholder:"john.doe@example.com",invalid:U.email&&!0},a))}}),Object(j.jsx)(b.z,{color:"muted",children:r("You can use letters, numbers & periods")})]}),Object(j.jsxs)("div",{className:"mb-1",children:[Object(j.jsxs)(b.D,{className:"form-label",for:"username",children:[r("Username"),Object(j.jsx)("span",{className:"text-danger",children:"*"})]}),Object(j.jsx)(x.a,{defaultValue:"",control:L,rules:{required:!0,minLength:{value:4,message:r("minimum number of character is 4")},maxLength:{value:15,message:r("maximum number of character is 15")},pattern:{value:/^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/,message:r("You can use letters and numbers without white space")}},id:"username",name:"username",render:function(e){var a=e.field;return Object(j.jsx)(b.A,Object(t.a)(Object(t.a)({},a),{},{id:"username",placeholder:"john.doe.007",invalid:U.username&&!0}))}}),U.username&&Object(j.jsx)(b.z,{color:"danger",children:r(U.username.message)})]}),Object(j.jsxs)("div",{className:"mb-1",children:[Object(j.jsx)("div",{className:"d-flex justify-content-between",children:Object(j.jsxs)(b.D,{className:"form-label",for:"login-password",children:[r("Password")," ",Object(j.jsx)("span",{className:"text-danger",children:"*"})]})}),Object(j.jsx)(x.a,{defaultValue:"",id:"password",name:"password",control:L,rules:{required:{value:!0,message:r("Password is required")},minLength:{value:8,message:r("Password must have at least 8 characters")}},render:function(e){var a=e.field;return Object(j.jsx)(C.a,Object(t.a)({className:"input-group-merge",invalid:U.password&&!0},a))}}),U.password&&Object(j.jsx)(b.z,{color:"danger",children:r(U.password.message)})]}),Object(j.jsxs)("div",{className:"mb-1",children:[Object(j.jsx)(b.D,{className:"form-label",for:"phone",children:r("Mobile Phone Number")}),Object(j.jsx)(x.a,{defaultValue:"",control:L,rules:{required:!1,pattern:{value:/^[0-9+-]+$/,message:"This is not a valid mobile phone, try again!"},minLength:{value:6,message:"This number is too short."},maxLength:{value:14,message:"...And now it's too long."}},id:"phone",name:"phone",render:function(e){var a=e.field;return Object(j.jsx)(b.A,Object(t.a)(Object(t.a)({},a),{},{id:"phone",placeholder:"+62 813 940 10XX X"}))}}),U.phone&&Object(j.jsx)(b.z,{color:"danger",children:r(U.phone.message)})]}),Object(j.jsxs)("div",{className:"mb-1",children:[Object(j.jsx)(b.D,{className:"form-label",for:"id_unit",children:r("Unit")}),Object(j.jsx)(f.a,{id:"id_unit",isClearable:!1,theme:p.w,closeMenuOnSelect:!1,onChange:function(e){P(e)},defaultValue:k.data.map((function(e){return{value:e.id,label:e.name}}))[0],isMulti:!0,options:k.data.map((function(e){return{value:e.id,label:e.name}})),className:"react-select",classNamePrefix:"select"})]}),Object(j.jsxs)("div",{className:"mb-1",children:[Object(j.jsx)(b.D,{for:"role-select",children:r("Role")}),Object(j.jsx)(f.a,{id:"id_role",isClearable:!1,options:V.data.map((function(e){return{value:e.id,label:e.name}})),defaultValue:{label:"editor",vaue:3},classNamePrefix:"select",className:d()("react-select",{"is-invalid":null===z}),theme:p.w,onChange:function(e){_(e.value)}})]}),Object(j.jsx)(b.i,{type:"submit",className:"me-1",color:"primary",children:r("Submit")}),Object(j.jsx)(b.i,{type:"reset",color:"secondary",outline:!0,onClick:s,children:r("Cancel")})]})})}},595:function(e,a,s){"use strict";var t=s(5),l=s(8),n=s(9),r=s(37),c=s(0),i=s(7),o=s.n(i),d=s(287),m=s(286),u=s(10),b=s(2),j=["label","hideIcon","showIcon","visible","className","htmlFor","placeholder","iconSize","inputClassName","invalid"],h=Object(c.forwardRef)((function(e,a){var s,i=e.label,h=e.hideIcon,O=e.showIcon,p=e.visible,f=e.className,x=e.htmlFor,v=e.placeholder,g=e.iconSize,N=e.inputClassName,w=e.invalid,y=Object(r.a)(e,j),C=Object(c.useState)(p),S=Object(n.a)(C,2),z=S[0],_=S[1];return Object(b.jsxs)(c.Fragment,{children:[i?Object(b.jsx)(u.D,{className:"form-label",for:x,children:i}):null,Object(b.jsxs)(u.B,{className:o()((s={},Object(l.a)(s,f,f),Object(l.a)(s,"is-invalid",w),s)),children:[Object(b.jsx)(u.A,Object(t.a)(Object(t.a)({ref:a,invalid:w,type:!1===z?"password":"text",placeholder:v||"\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7",className:o()(Object(l.a)({},N,N))},i&&x?{id:x}:{}),y)),Object(b.jsx)(u.C,{className:"cursor-pointer",onClick:function(){return _(!z)},children:function(){var e=g||14;return!1===z?h||Object(b.jsx)(d.a,{size:e}):O||Object(b.jsx)(m.a,{size:e})}()})]})]})}));a.a=h,h.defaultProps={visible:!1}}}]);
//# sourceMappingURL=167.628de958.chunk.js.map