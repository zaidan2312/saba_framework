(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[48],{322:function(e,t,n){"use strict";n.r(t);var r=n(9),o=n(0),c=n(7),a=n.n(c),i=n(26),l=n(172),s=n(576),u=n(103),p=(n(33),n(524),n(10)),f=(n(541),n(2));t.default=function(e){var t=e.setIcon,n=e.setCanvasOpen,c=[],d=Object(o.useState)([]),b=Object(r.a)(d,2),m=b[0],y=b[1],j=Object(o.useState)([]),h=Object(r.a)(j,2),O=h[0],v=h[1],g=Object(o.useState)(null),x=Object(r.a)(g,2),C=x[0],w=x[1];for(var k in i)c.push(k);var D=Object(u.a)().t;return Object(f.jsxs)(o.Fragment,{children:[Object(f.jsx)(p.Q,{children:Object(f.jsx)(p.s,{sm:"12",children:Object(f.jsx)("div",{className:"icon-search-wrapper mt-0 mb-2 mx-auto",children:Object(f.jsxs)(p.B,{className:"input-group-merge mb-1",children:[Object(f.jsx)(p.C,{children:Object(f.jsx)(l.a,{size:14})}),Object(f.jsx)(p.A,{placeholder:D("Search icons..."),onChange:function(e){!function(e){var t=[];e.length&&c.filter((function(n){n.toLowerCase().includes(e.toLowerCase())&&t.push(n)})),v([].concat(t))}(e.target.value),y(e.target.value)}})]})})})}),Object(f.jsx)("div",{className:"d-flex flex-wrap",style:{justifyContent:"center"},id:"icons-container",children:function(){var e=m.length?O:c;return e.length?e.map((function(e){var r=i[e];return Object(f.jsxs)(o.Fragment,{children:[Object(f.jsx)(s.CopyToClipboard,{text:"<".concat(e," />"),children:Object(f.jsx)(p.k,{id:e,className:a()("icon-card cursor-pointer text-center mb-2 mx-50",{active:C===e}),onClick:function(){return function(e){var r="feather:".concat(e);t(r),w(e),n(!1)}(e)},children:Object(f.jsxs)(p.l,{children:[Object(f.jsx)("div",{className:"icon-wrapper",children:Object(f.jsx)(r,{})}),Object(f.jsx)("p",{className:"icon-name text-truncate mb-0 mt-1",children:e})]})})}),Object(f.jsx)(p.X,{placement:"top",target:e,children:e.replace(/([A-Z])/g," $1").trim()})]},e)})):Object(f.jsx)("div",{className:"d-flex align-items-center justify-content-center w-100",children:Object(f.jsx)("h4",{className:"mb-0",children:D("No Icons Found!")})})}()})]})}},524:function(e,t,n){"use strict";var r=n(6),o=n(0),c=n(23),a=n(7),i=n.n(a),l=n(103),s=n(10),u=n(2);t.a=function(e){var t=Object(l.a)().t,n=e.data,a=e.title,p=e.mb,f=e.subtitle;return Object(u.jsx)("div",{className:"content-header-left col-md-9 col-8 ".concat(p||0===p?"mb-".concat(p):"mb-2"),children:Object(u.jsxs)("div",{className:"row breadcrumbs-top",children:[Object(u.jsxs)("div",{className:"col-12",children:[a?Object(u.jsx)("h2",{className:"content-header-title float-start mb-0",children:a}):"",Object(u.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(u.jsxs)(s.g,{children:[Object(u.jsx)(s.h,{tag:"li",children:Object(u.jsx)(c.b,{to:"/",children:t("Home")})}),n.map((function(e,t){var a=e.link?c.b:o.Fragment,l=n.length-1===t;return Object(u.jsx)(s.h,{tag:"li",active:!l,className:i()({"text-primary":!l}),children:Object(u.jsx)(a,Object(r.a)(Object(r.a)({},e.link?{to:e.link}:{}),{},{children:e.title}))},t)}))]})})]}),Object(u.jsx)("div",{className:"col-12",children:null!==f&&void 0!==f?f:""})]})})}},541:function(e,t,n){},576:function(e,t,n){"use strict";var r=n(577).CopyToClipboard;r.CopyToClipboard=r,e.exports=r},577:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var r=c(n(0)),o=c(n(578));function c(e){return e&&e.__esModule?e:{default:e}}function a(e){return a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?d(e):t}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e,t){return b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},b(e,t)}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var y=function(e){function t(){var e,n;s(this,t);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return m(d(n=p(this,(e=f(t)).call.apply(e,[this].concat(a)))),"onClick",(function(e){var t=n.props,c=t.text,a=t.onCopy,i=t.children,l=t.options,s=r.default.Children.only(i),u=(0,o.default)(c,l);a&&a(c,u),s&&s.props&&"function"===typeof s.props.onClick&&s.props.onClick(e)})),n}var n,c,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,e),n=t,c=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),n=l(e,["text","onCopy","options","children"]),o=r.default.Children.only(t);return r.default.cloneElement(o,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(n,!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n,{onClick:this.onClick}))}}],c&&u(n.prototype,c),a&&u(n,a),t}(r.default.PureComponent);t.CopyToClipboard=y,m(y,"defaultProps",{onCopy:void 0,options:void 0})},578:function(e,t,n){"use strict";var r=n(579),o={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,c,a,i,l,s,u=!1;t||(t={}),n=t.debug||!1;try{if(a=r(),i=document.createRange(),l=document.getSelection(),(s=document.createElement("span")).textContent=e,s.style.all="unset",s.style.position="fixed",s.style.top=0,s.style.clip="rect(0, 0, 0, 0)",s.style.whiteSpace="pre",s.style.webkitUserSelect="text",s.style.MozUserSelect="text",s.style.msUserSelect="text",s.style.userSelect="text",s.addEventListener("copy",(function(r){if(r.stopPropagation(),t.format)if(r.preventDefault(),"undefined"===typeof r.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var c=o[t.format]||o.default;window.clipboardData.setData(c,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e);t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))})),document.body.appendChild(s),i.selectNodeContents(s),l.addRange(i),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");u=!0}catch(p){n&&console.error("unable to copy using execCommand: ",p),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),u=!0}catch(p){n&&console.error("unable to copy using clipboardData: ",p),n&&console.error("falling back to prompt"),c=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(c,e)}}finally{l&&("function"==typeof l.removeRange?l.removeRange(i):l.removeAllRanges()),s&&document.body.removeChild(s),a()}return u}},579:function(e,t){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}}}]);
//# sourceMappingURL=48.eabfe419.chunk.js.map