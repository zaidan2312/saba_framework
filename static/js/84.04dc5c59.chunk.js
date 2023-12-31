(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[84],{359:function(e,t,a){"use strict";a.r(t);var s=a(103),c=a(23),n=a(33),i=a(159),l=a(73),r=a(289),o=a(233),d=a(237),m=a(274),u=a(279),j=a(262),x=a(243),b=a(212),h=a(282),p=a(10),f=a(81),O=a.n(f),v=a(2),N=function(e){return e.avatar?Object(v.jsx)(n.a,{className:"me-1",img:e.avatar,width:"32",height:"32"}):Object(v.jsx)(n.a,{initials:!0,className:"me-1",color:e.avatarColor||"light-primary",content:e.name||"John Doe"})},g={pending:"light-warning",active:"light-success",inactive:"light-secondary"};t.default=function(){Object(s.a)().t;return[{name:"User",sortable:!0,minWidth:"300px",sortField:"name",selector:function(e){return e.name},cell:function(e){return Object(v.jsxs)("div",{className:"d-flex justify-content-left align-items-center",children:[N(e),Object(v.jsxs)("div",{className:"d-flex flex-column",children:[Object(v.jsx)(c.b,{to:"/apps/user/view/".concat(e.id),className:"user_name text-truncate text-body",children:Object(v.jsx)("span",{className:"fw-bolder",children:e.name})}),Object(v.jsx)("small",{className:"text-truncate text-muted mb-0",children:e.email})]})]})}},{name:"Role",sortable:!0,minWidth:"172px",sortField:"role_name",selector:function(e){return e.role_name},cell:function(e){return function(e){var t={subscriber:{class:"text-primary",icon:r.a},maintainer:{class:"text-success",icon:o.a},editor:{class:"text-info",icon:d.a},author:{class:"text-warning",icon:m.a},admin:{class:"text-danger",icon:u.a}},a=t[e.role_name]?t[e.role_name].icon:d.a;return Object(v.jsxs)("span",{className:"text-truncate text-capitalize align-middle",children:[Object(v.jsx)(a,{size:18,className:"".concat(t[e.role_name]?t[e.role_name].class:""," me-50")}),e.role_name]})}(e)}},{name:"Joined Date",minWidth:"230px",sortable:!0,sortField:"joined_date",selector:function(e){return e.billing},cell:function(e){return Object(v.jsx)("span",{className:"text-capitalize",children:O()(e.joined_date).format("DD MMM YYYY")})}},{name:"Status",minWidth:"138px",sortable:!0,sortField:"status",selector:function(e){return e.is_active},cell:function(e){return Object(v.jsx)(p.f,{className:"text-capitalize",color:g[e.is_active?"active":"inactive"],pill:!0,children:e.is_active?"active":"inactive"})}},{name:"Actions",minWidth:"100px",cell:function(e){return Object(v.jsx)("div",{className:"column-action",children:Object(v.jsxs)(p.W,{children:[Object(v.jsx)(p.w,{tag:"span",children:Object(v.jsx)(j.a,{size:14,className:"cursor-pointer"})}),Object(v.jsxs)(p.v,{end:!0,children:[Object(v.jsxs)(p.u,{tag:c.b,className:"w-100",to:"/apps/user/view/".concat(e.id),onClick:function(){return i.a.dispatch(Object(l.getUser)(e.id))},children:[Object(v.jsx)(x.a,{size:14,className:"me-50"}),Object(v.jsx)("span",{className:"align-middle",children:"Details"})]}),Object(v.jsxs)(p.u,{tag:"a",href:"/",className:"w-100",onClick:function(e){return e.preventDefault()},children:[Object(v.jsx)(b.a,{size:14,className:"me-50"}),Object(v.jsx)("span",{className:"align-middle",children:"Edit"})]}),Object(v.jsxs)(p.u,{tag:"a",href:"/",className:"w-100",onClick:function(t){t.preventDefault(),i.a.dispatch(Object(l.deleteUser)(e.id))},children:[Object(v.jsx)(h.a,{size:14,className:"me-50"}),Object(v.jsx)("span",{className:"align-middle",children:"Delete"})]})]})]})})}}]}}}]);
//# sourceMappingURL=84.04dc5c59.chunk.js.map