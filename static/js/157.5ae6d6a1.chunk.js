(this["webpackJsonpsaba-react-framework"]=this["webpackJsonpsaba-react-framework"]||[]).push([[157,161,162],{442:function(e,s,t){"use strict";t.r(s);var n=t(13),c=t(9),a=t(0),i=t(575),r=t(309),l=t(146),o=t(254),d=t(270),j=t(268),u=t(10),m=t(121),b=t(82),x=t(36),O=t(129),h=t(570),v=t(98),f=t(15),g=t(2),p=function(e){var s=e.x,t=e.name,n=e.message;return Object(g.jsxs)("div",{className:"d-flex",children:[Object(g.jsx)("div",{className:"me-1",children:Object(g.jsx)(x.a,{size:"sm",color:"info",icon:Object(g.jsx)(r.a,{size:12})})}),Object(g.jsxs)("div",{className:"d-flex flex-column",children:[Object(g.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(g.jsx)("h6",{children:t}),Object(g.jsx)(l.a,{size:12,className:"cursor-pointer",onClick:function(){return b.b.dismiss(s.id)}})]}),Object(g.jsx)("span",{children:n})]})]})},N=function(e){var s=e.x,t=e.name,n=e.message;return Object(g.jsxs)("div",{className:"d-flex",children:[Object(g.jsx)("div",{className:"me-1",children:Object(g.jsx)(x.a,{size:"sm",color:"danger",icon:Object(g.jsx)(o.a,{size:12})})}),Object(g.jsxs)("div",{className:"d-flex flex-column",children:[Object(g.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(g.jsx)("h6",{children:t}),Object(g.jsx)(l.a,{size:12,className:"cursor-pointer",onClick:function(){return b.b.dismiss(s.id)}})]}),Object(g.jsx)("span",{children:n})]})]})},k={address:"",firstName:""};s.default=function(e){var s=e.stepper,t=Object(m.a)().t,r=(Object(v.a)().skin,Object(a.useState)(!1)),l=Object(c.a)(r,2),o=l[0],x=l[1],y=Object(a.useState)(null),S=Object(c.a)(y,2),w=(S[0],S[1]),z=Object(a.useState)(null),I=Object(c.a)(z,2),_=(I[0],I[1]),C=Object(a.useState)(["","","",""]),E=Object(c.a)(C,2),P=E[0],F=E[1],A=Object(i.e)({defaultValues:k}),B=(A.control,A.setError,A.handleSubmit);A.formState.errors;return Object(g.jsx)(h.a,{blocking:o,loader:Object(g.jsx)(O.a,{}),children:Object(g.jsxs)(a.Fragment,{children:[Object(g.jsxs)("div",{className:"content-header mb-2",children:[Object(g.jsx)("h2",{className:"fw-bolder mb-75",children:t("Email Verification")}),Object(g.jsxs)("span",{children:[t("Enter the OTP code that we have sent to your email"),"."]})]}),Object(g.jsxs)(u.x,{onSubmit:B((function(e){if(null!==P&&void 0!==P&&P.every((function(e){return""!==e}))){var n,c={otp:parseInt(null===(n=P.join())||void 0===n?void 0:n.replaceAll(",","")),register_token:sessionStorage.getItem("register_token")};x(!0),f.a.registerOtp(c).then((function(e){var n=e.data;x(!1),_(null===n||void 0===n?void 0:n.message),sessionStorage.removeItem("register_token"),sessionStorage.setItem("register_token_msg",null===n||void 0===n?void 0:n.message),Object(b.b)((function(e){return Object(g.jsx)(p,{x:e,name:t("Successfully"),message:null===n||void 0===n?void 0:n.message})})),s.next()})).catch((function(e){var s,n;x(!1);var c,a,i="".concat(t("Failed. Please check your email and password and make sure your account is registered correctly. Contact our support team if needed."));["email_taken","username_taken"].includes(null===(s=e.response)||void 0===s||null===(n=s.data)||void 0===n?void 0:n.error_reason)&&(i=null===(c=e.response)||void 0===c||null===(a=c.data)||void 0===a?void 0:a.message);w(i),Object(b.b)((function(e){return Object(g.jsx)(N,{x:e,name:t("Register Failed"),message:i})}))}))}})),children:[Object(g.jsxs)(u.Q,{children:[P.map((function(e,s){return Object(g.jsx)(u.s,{md:"2",xs:"3",className:"mb-1",children:Object(g.jsx)(u.A,{id:"otpInput".concat(s),type:"text",maxLength:"1",value:e,onChange:function(e){return function(e,s){var t=Object(n.a)(P);if(t[s]=e.target.value,""!==e.target.value&&s<3){var c=document.getElementById("otpInput".concat(s+1));c&&c.focus()}F(t)}(e,s)},onKeyDown:function(e){return function(e,s){if("Backspace"===e.key&&s>0&&""===P[s]){var t=Object(n.a)(P);t[s-1]="",F(t);var c=document.getElementById("otpInput".concat(s-1));c&&c.focus()}}(e,s)},style:{width:"100%",height:"50px",textAlign:"center",fontSize:"25px",fontWeight:600}},s)})})),Object(g.jsx)(u.s,{md:"12",className:"mb-1",children:Object(g.jsxs)("span",{style:{fontSize:"smaller",color:"#999999"},children:[t("This OTP code has an expiration date. If your code is outdated, then repeat the registration process"),"."]})})]}),Object(g.jsxs)("div",{className:"d-flex justify-content-between mt-2",children:[Object(g.jsxs)(u.i,{color:"secondary",className:"btn-prev",outline:!0,onClick:function(){return s.previous()},children:[Object(g.jsx)(d.a,{size:14,className:"align-middle me-sm-25 me-0"}),Object(g.jsx)("span",{className:"align-middle d-sm-inline-block d-none",children:t("Previous")})]}),(null===P||void 0===P?void 0:P.every((function(e){return""!==e})))&&Object(g.jsxs)(u.i,{type:"submit",color:"success",className:"btn-next",children:[Object(g.jsx)("span",{className:"align-middle d-sm-inline-block d-none",children:t("Submit")}),Object(g.jsx)(j.a,{size:14,className:"align-middle ms-sm-25 ms-0"})]})]})]})]})})}},570:function(e,s,t){"use strict";var n=t(5),c=t(8),a=t(0),i=t(7),r=t.n(i),l=t(10),o=(t(576),t(2)),d=function(e){var s,t=e.children,i=e.blocking,l=e.loader,d=e.className,j=e.tag,u=e.overlayColor,m=j;return Object(o.jsxs)(m,{className:r()("ui-loader",(s={},Object(c.a)(s,d,d),Object(c.a)(s,"show",i),s)),children:[t,i?Object(o.jsxs)(a.Fragment,{children:[Object(o.jsx)("div",Object(n.a)({className:"overlay"},i&&u?{style:{backgroundColor:u}}:{})),Object(o.jsx)("div",{className:"loader",children:l})]}):null]})};s.a=d,d.defaultProps={tag:"div",blocking:!1,loader:Object(o.jsx)(l.R,{color:"primary"})}},576:function(e,s,t){}}]);
//# sourceMappingURL=157.5ae6d6a1.chunk.js.map