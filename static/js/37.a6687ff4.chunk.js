(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[37,144,145,165,166,167,168,169,170,171,172],{1328:function(e,s,t){},162:function(e,s,t){"use strict";t.r(s);var c=t(9),a=t(0),i=t(17),l=t.n(i),n=t(507),r=t(524),j=t(10),d=t(381),m=t(377),o=t(382),b=t(379),x=t(384),h=t(380),u=t(383),O=t(378),f=(t(1328),t(2));s.default=function(){var e=Object(a.useState)(null),s=Object(c.a)(e,2),t=s[0],i=s[1],N=Object(a.useState)(!1),p=Object(c.a)(N,2),v=p[0],g=p[1];return Object(a.useEffect)((function(){l.a.get("/profile/data").then((function(e){return i(e.data)}))}),[]),Object(f.jsxs)(a.Fragment,{children:[Object(f.jsx)(r.a,{title:"Profile",data:[{title:"Pages"},{title:"Profile"}]}),null!==t?Object(f.jsxs)("div",{id:"user-profile",children:[Object(f.jsx)(j.Q,{children:Object(f.jsx)(j.s,{sm:"12",children:Object(f.jsx)(b.default,{data:t.header})})}),Object(f.jsxs)("section",{id:"profile-info",children:[Object(f.jsxs)(j.Q,{children:[Object(f.jsxs)(j.s,{lg:{size:3,order:1},sm:{size:12},xs:{order:2},children:[Object(f.jsx)(m.default,{data:t.userAbout}),Object(f.jsx)(u.default,{data:t.suggestedPages}),Object(f.jsx)(x.default,{data:t.twitterFeeds})]}),Object(f.jsx)(j.s,{lg:{size:6,order:2},sm:{size:12},xs:{order:1},children:Object(f.jsx)(o.default,{data:t.post})}),Object(f.jsxs)(j.s,{lg:{size:3,order:3},sm:{size:12},xs:{order:3},children:[Object(f.jsx)(h.default,{data:t.latestPhotos}),Object(f.jsx)(O.default,{data:t.suggestions}),Object(f.jsx)(d.default,{data:t.polls})]})]}),Object(f.jsx)(j.Q,{children:Object(f.jsx)(j.s,{className:"text-center",sm:"12",children:Object(f.jsx)(j.i,{color:"primary",className:"border-0 mb-1 profile-load-more",size:"sm",onClick:function(){g(!0),setTimeout((function(){g(!1)}),2e3)},children:Object(f.jsx)(n.a,{blocking:v,overlayColor:"rgba(255,255,255, .5)",children:Object(f.jsx)("span",{children:" Load More"})})})})})]})]}):null]})}},377:function(e,s,t){"use strict";t.r(s);var c=t(10),a=t(2);s.default=function(e){var s=e.data;return Object(a.jsx)(c.k,{children:Object(a.jsxs)(c.l,{children:[Object(a.jsx)("h5",{className:"mb-75",children:"About"}),Object(a.jsx)(c.q,{children:s.about}),Object(a.jsxs)("div",{className:"mt-2",children:[Object(a.jsx)("h5",{className:"mb-75",children:"Joined:"}),Object(a.jsx)(c.q,{children:s.joined})]}),Object(a.jsxs)("div",{className:"mt-2",children:[Object(a.jsx)("h5",{className:"mb-75",children:"Lives:"}),Object(a.jsx)(c.q,{children:s.lives})]}),Object(a.jsxs)("div",{className:"mt-2",children:[Object(a.jsx)("h5",{className:"mb-75",children:"Email:"}),Object(a.jsx)(c.q,{children:s.email})]}),Object(a.jsxs)("div",{className:"mt-2",children:[Object(a.jsx)("h5",{className:"mb-75",children:"Website:"}),Object(a.jsx)(c.q,{children:s.website})]})]})})}},378:function(e,s,t){"use strict";t.r(s);var c=t(33),a=t(7),i=t.n(a),l=t(287),n=t(10),r=t(2);s.default=function(e){var s=e.data;return Object(r.jsx)(n.k,{children:Object(r.jsxs)(n.l,{children:[Object(r.jsx)("h5",{children:"Suggestions"}),s.map((function(e,s){return Object(r.jsxs)("div",{className:i()("d-flex justify-content-start align-items-center",{"mt-2":0===s,"mt-1":0!==s}),children:[Object(r.jsx)(c.a,{className:"me-75",img:e.avatar,imgHeight:"40",imgWidth:"40"}),Object(r.jsxs)("div",{className:"profile-user-info",children:[Object(r.jsx)("h6",{className:"mb-0",children:e.name}),Object(r.jsx)("small",{className:"text-muted",children:e.mutualFriend})]}),Object(r.jsx)("div",{className:"ms-auto",children:Object(r.jsx)(n.i,{className:"btn-icon",color:"primary",size:"sm",children:Object(r.jsx)(l.a,{size:14})})})]},s)}))]})})}},379:function(e,s,t){"use strict";t.r(s);var c=t(9),a=t(0),i=t(211),l=t(271),n=t(251),r=t(167),j=t(290),d=t(239),m=t(10),o=t(2);s.default=function(e){var s=e.data,t=Object(a.useState)(!1),b=Object(c.a)(t,2),x=b[0],h=b[1];return Object(o.jsxs)(m.k,{className:"profile-header mb-2",children:[Object(o.jsx)(m.o,{src:s.coverImg,alt:"User Profile Image",top:!0}),Object(o.jsx)("div",{className:"position-relative",children:Object(o.jsxs)("div",{className:"profile-img-container d-flex align-items-center",children:[Object(o.jsx)("div",{className:"profile-img",children:Object(o.jsx)("img",{className:"rounded img-fluid",src:s.avatar,alt:"Card image"})}),Object(o.jsxs)("div",{className:"profile-title ms-3",children:[Object(o.jsx)("h2",{className:"text-white",children:s.name}),Object(o.jsx)("p",{className:"text-white",children:s.designation})]})]})}),Object(o.jsx)("div",{className:"profile-header-nav",children:Object(o.jsxs)(m.L,{container:!1,className:"justify-content-end justify-content-md-between w-100",expand:"md",light:!0,children:[Object(o.jsx)(m.i,{color:"",className:"btn-icon navbar-toggler",onClick:function(){return h(!x)},children:Object(o.jsx)(i.a,{size:21})}),Object(o.jsx)(m.t,{isOpen:x,navbar:!0,children:Object(o.jsxs)("div",{className:"profile-tabs d-flex justify-content-between flex-wrap mt-1 mt-md-0",children:[Object(o.jsxs)(m.I,{className:"mb-0",pills:!0,children:[Object(o.jsx)(m.J,{children:Object(o.jsxs)(m.K,{className:"fw-bold",active:!0,children:[Object(o.jsx)("span",{className:"d-none d-md-block",children:"Feed"}),Object(o.jsx)(l.a,{className:"d-block d-md-none",size:14})]})}),Object(o.jsx)(m.J,{children:Object(o.jsxs)(m.K,{className:"fw-bold",children:[Object(o.jsx)("span",{className:"d-none d-md-block",children:"About"}),Object(o.jsx)(n.a,{className:"d-block d-md-none",size:14})]})}),Object(o.jsx)(m.J,{children:Object(o.jsxs)(m.K,{className:"fw-bold",children:[Object(o.jsx)("span",{className:"d-none d-md-block",children:"Photos"}),Object(o.jsx)(r.a,{className:"d-block d-md-none",size:14})]})}),Object(o.jsx)(m.J,{children:Object(o.jsxs)(m.K,{className:"fw-bold",children:[Object(o.jsx)("span",{className:"d-none d-md-block",children:"Friends"}),Object(o.jsx)(j.a,{className:"d-block d-md-none",size:14})]})})]}),Object(o.jsxs)(m.i,{color:"primary",children:[Object(o.jsx)(d.a,{className:"d-block d-md-none",size:14}),Object(o.jsx)("span",{className:"fw-bold d-none d-md-block",children:"Edit"})]})]})})]})})]})}},380:function(e,s,t){"use strict";t.r(s);var c=t(10),a=t(2);s.default=function(e){var s=e.data;return Object(a.jsx)(c.k,{children:Object(a.jsxs)(c.l,{children:[Object(a.jsx)("h5",{className:"mb-0",children:"Latest Photos"}),Object(a.jsx)(c.Q,{children:s.map((function(e,s){return Object(a.jsx)(c.s,{md:"4",xs:"6",className:"profile-latest-img",children:Object(a.jsx)("a",{href:"/",onClick:function(e){return e.preventDefault()},children:Object(a.jsx)("img",{className:"img-fluid rounded",src:e.img,alt:"latest-photo"})})},s)}))})]})})}},381:function(e,s,t){"use strict";t.r(s);var c=t(0),a=t(7),i=t.n(a),l=t(33),n=t(10),r=t(2);s.default=function(e){var s=e.data;return Object(r.jsx)(n.k,{children:Object(r.jsxs)(n.l,{children:[Object(r.jsx)("h5",{className:"mb-1",children:"Polls"}),Object(r.jsx)(n.q,{className:"mb-0",children:"Who is the best actor in Marvel Cinematic Universe?"}),s.map((function(e,s){return Object(r.jsxs)("div",{className:"profile-polls-info mt-2",children:[Object(r.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(r.jsxs)("div",{className:"form-check",children:[Object(r.jsx)(n.A,{type:"radio",name:"polls",id:"radio-".concat(e.name.toLowerCase())}),Object(r.jsx)(n.D,{className:"form-check-label",for:"radio-".concat(e.name.toLowerCase()),children:e.name})]}),Object(r.jsx)("div",{className:"text-end",children:e.result})]}),Object(r.jsx)(n.P,{className:"my-50",value:e.result.replace("%"," ").trim()}),Object(r.jsx)("div",{className:i()("avatar-group",{"mt-1":s>0,"my-1":0===s}),children:e.votedUser.map((function(e){return Object(r.jsxs)(c.Fragment,{children:[Object(r.jsx)(l.a,{imgWidth:"26",imgHeight:"26",img:e.img,className:"pull-up",id:e.username.toLowerCase().split(" ").join("-")}),Object(r.jsx)(n.X,{target:e.username.toLowerCase().split(" ").join("-"),placement:"top",children:e.username})]},e.username)}))})]},e.name)}))]})})}},382:function(e,s,t){"use strict";t.r(s);var c=t(0),a=t(33),i=t(7),l=t.n(i),n=t(248),r=t(170),j=t(275),d=t(10),m=t(2);s.default=function(e){return e.data.map((function(e){return Object(m.jsx)(d.k,{className:"post",children:Object(m.jsxs)(d.l,{children:[Object(m.jsxs)("div",{className:"d-flex justify-content-start align-items-center mb-1",children:[Object(m.jsx)(a.a,{className:"me-1",img:e.avatar,imgHeight:"50",imgWidth:"50"}),Object(m.jsxs)("div",{className:"profile-user-info",children:[Object(m.jsx)("h6",{className:"mb-0",children:e.username}),Object(m.jsx)("small",{className:"text-muted",children:e.postTime})]})]}),Object(m.jsx)(d.q,{children:e.postText}),e.postImg?Object(m.jsx)("img",{src:e.postImg,alt:e.username,className:"img-fluid rounded mb-75"}):e.postVid?Object(m.jsx)("iframe",{src:"https://www.youtube.com/embed/6stlCkUDG_s",className:"w-100 rounded height-250 mb-50 border-0"}):null,Object(m.jsxs)(d.Q,{className:"d-flex justify-content-start align-items-center flex-wrap pb-50 post-actions",children:[Object(m.jsxs)(d.s,{className:"d-flex justify-content-between justify-content-sm-start mb-2",sm:"6",children:[Object(m.jsxs)("div",{className:"d-flex align-items-center text-muted text-nowrap cursor-pointer",children:[Object(m.jsx)(n.a,{size:18,className:l()("me-50",{"profile-likes":!0===e.youLiked})}),Object(m.jsx)("span",{children:e.likes})]}),Object(m.jsxs)("div",{className:"d-flex align-items-center",children:[Object(m.jsx)("div",{className:"avatar-group ms-1",children:e.likedUsers.map((function(e){return Object(m.jsxs)(c.Fragment,{children:[Object(m.jsx)(a.a,{className:"pull-up",img:e.avatar,id:e.username.toLowerCase().split(" ").join("-"),imgHeight:"26",imgWidth:"26"}),Object(m.jsx)(d.X,{target:e.username.toLowerCase().split(" ").join("-"),placement:"top",children:e.username})]},e.username)}))}),Object(m.jsxs)("a",{href:"/",className:"text-muted text-nowrap ms-50",onClick:function(e){return e.preventDefault()},children:["+",e.likedCount," more"]})]})]}),Object(m.jsxs)(d.s,{className:"d-flex justify-content-between justify-content-sm-end align-items-center mb-2",sm:"6",children:[Object(m.jsxs)("a",{href:"/",className:"text-nowrap",onClick:function(e){return e.preventDefault()},children:[Object(m.jsx)(r.a,{size:18,className:"text-body me-50"}),Object(m.jsx)("span",{className:"text-muted me-1",children:e.comments})]}),Object(m.jsxs)("a",{href:"/",className:"text-nowrap share-post",onClick:function(e){return e.preventDefault()},children:[Object(m.jsx)(j.a,{size:18,className:"text-body mx-50"}),Object(m.jsx)("span",{className:"text-muted me-1",children:e.share})]})]})]}),e.detailedComments.map((function(e){return Object(m.jsxs)("div",{className:"d-flex align-items-start mb-1",children:[Object(m.jsx)(a.a,{img:e.avatar,className:"mt-25 me-75",imgHeight:"34",imgWidth:"34"}),Object(m.jsxs)("div",{className:"profile-user-info w-100",children:[Object(m.jsxs)("div",{className:"d-flex align-items-center justify-content-between",children:[Object(m.jsx)("h6",{className:"mb-0",children:e.username}),Object(m.jsxs)("a",{href:"/",onClick:function(e){return e.preventDefault()},children:[Object(m.jsx)(n.a,{size:18,className:l()("text-body",{"profile-likes":!0===e.youLiked})}),Object(m.jsx)("span",{className:"align-middle ms-25 text-muted",children:e.commentsLikes})]})]}),Object(m.jsx)("small",{children:e.comment})]})]},e.username)})),Object(m.jsxs)("fieldset",{className:"form-label-group mb-50",children:[Object(m.jsx)(d.D,{className:"form-check-label",for:"add-comment-".concat(e.username),children:"Add Comment"}),Object(m.jsx)(d.A,{id:"add-comment-".concat(e.username),type:"textarea",rows:"3",placeholder:"Add Comment"})]}),Object(m.jsx)(d.i,{color:"primary",size:"sm",children:"Post Comment"})]})},e.username)}))}},383:function(e,s,t){"use strict";t.r(s);var c=t(7),a=t.n(c),i=t(175),l=t(33),n=t(10),r=t(2);s.default=function(e){var s=e.data;return Object(r.jsx)(n.k,{children:Object(r.jsxs)(n.l,{className:"profile-suggestion",children:[Object(r.jsx)("h5",{className:"mb-2",children:"Suggested Pages"}),s.map((function(e,t){return Object(r.jsxs)("div",{className:a()("d-flex justify-content-start align-items-center",{"mb-1":t!==s.length-1}),children:[Object(r.jsx)(l.a,{className:"me-1",img:e.avatar,imgHeight:40,imgWidth:40}),Object(r.jsxs)("div",{className:"profile-user-info",children:[Object(r.jsx)("h6",{className:"mb-0",children:e.username}),Object(r.jsx)("small",{className:"text-muted",children:e.subtitle})]}),Object(r.jsx)("div",{className:"profile-star ms-auto",children:Object(r.jsx)(i.a,{size:18,className:a()("cursor-pointer",{"profile-favorite":!0===e.favorite})})})]},t)}))]})})}},384:function(e,s,t){"use strict";t.r(s);var c=t(33),a=t(7),i=t.n(a),l=t(221),n=t(175),r=t(10),j=t(2);s.default=function(e){var s=e.data;return Object(j.jsx)(r.k,{children:Object(j.jsxs)(r.l,{children:[Object(j.jsx)("h5",{children:"Twitter Feeds"}),s.map((function(e,s){return Object(j.jsxs)("div",{className:i()("profile-twitter-feed",{"mt-1":0===s,"mt-2":0!==s}),children:[Object(j.jsxs)("div",{className:"d-flex justify-content-start align-items-center mb-1",children:[Object(j.jsx)(c.a,{className:"me-1",img:e.imgUrl,imgHeight:"40",imgWidth:"40"}),Object(j.jsxs)("div",{className:"profile-user-info",children:[Object(j.jsx)("h6",{className:"mb-0",children:e.title}),Object(j.jsxs)("a",{href:"/",onClick:function(e){return e.preventDefault()},children:[Object(j.jsxs)("small",{className:"text-muted",children:["@",e.id]}),Object(j.jsx)(l.a,{size:14})]})]}),Object(j.jsx)("div",{className:"profile-star ms-auto",children:Object(j.jsx)(n.a,{size:18,className:i()("cursor-pointer",{"profile-favorite":!0===e.favorite})})})]}),Object(j.jsx)(r.q,{className:"mb-50",children:e.desc}),Object(j.jsx)("a",{href:"/",onClick:function(e){return e.preventDefault()},children:Object(j.jsx)("small",{children:e.tags})})]},s)}))]})})}},507:function(e,s,t){"use strict";var c=t(6),a=t(8),i=t(0),l=t(7),n=t.n(l),r=t(10),j=(t(513),t(2)),d=function(e){var s,t=e.children,l=e.blocking,r=e.loader,d=e.className,m=e.tag,o=e.overlayColor,b=m;return Object(j.jsxs)(b,{className:n()("ui-loader",(s={},Object(a.a)(s,d,d),Object(a.a)(s,"show",l),s)),children:[t,l?Object(j.jsxs)(i.Fragment,{children:[Object(j.jsx)("div",Object(c.a)({className:"overlay"},l&&o?{style:{backgroundColor:o}}:{})),Object(j.jsx)("div",{className:"loader",children:r})]}):null]})};s.a=d,d.defaultProps={tag:"div",blocking:!1,loader:Object(j.jsx)(r.R,{color:"primary"})}},513:function(e,s,t){},524:function(e,s,t){"use strict";var c=t(6),a=t(0),i=t(23),l=t(7),n=t.n(l),r=t(103),j=t(10),d=t(2);s.a=function(e){var s=Object(r.a)().t,t=e.data,l=e.title,m=e.mb,o=e.subtitle;return Object(d.jsx)("div",{className:"content-header-left col-md-9 col-8 ".concat(m||0===m?"mb-".concat(m):"mb-2"),children:Object(d.jsxs)("div",{className:"row breadcrumbs-top",children:[Object(d.jsxs)("div",{className:"col-12",children:[l?Object(d.jsx)("h2",{className:"content-header-title float-start mb-0",children:l}):"",Object(d.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(d.jsxs)(j.g,{children:[Object(d.jsx)(j.h,{tag:"li",children:Object(d.jsx)(i.b,{to:"/",children:s("Home")})}),t.map((function(e,s){var l=e.link?i.b:a.Fragment,r=t.length-1===s;return Object(d.jsx)(j.h,{tag:"li",active:!r,className:n()({"text-primary":!r}),children:Object(d.jsx)(l,Object(c.a)(Object(c.a)({},e.link?{to:e.link}:{}),{},{children:e.title}))},s)}))]})})]}),Object(d.jsx)("div",{className:"col-12",children:null!==o&&void 0!==o?o:""})]})})}}}]);
//# sourceMappingURL=37.a6687ff4.chunk.js.map