(this["webpackJsonpsaba-react-framework"]=this["webpackJsonpsaba-react-framework"]||[]).push([[82],{402:function(t,e,a){"use strict";a.r(e),a.d(e,"setUnitSelectedDropdown",(function(){return l})),a.d(e,"getUnits",(function(){return p})),a.d(e,"getUnit",(function(){return f})),a.d(e,"addUnit",(function(){return b})),a.d(e,"deleteUnit",(function(){return U})),a.d(e,"MyUnitsSlice",(function(){return m}));var n=a(5),r=a(4),u=a(3),i=a.n(u),s=a(6),c=a(15),o=a(31),d={value:"",label:"Select Unit"},l=Object(s.b)("Units/setUnitSelectedDropdown",(function(t){return t})),p=Object(s.b)("Units/getUnits",function(){var t=Object(r.a)(i.a.mark((function t(e,a){var n,r,u,s,d,l;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=a.rejectWithValue,e.flat_mode=!0,null===Object(o.n)()){t.next=38;break}return t.next=5,JSON.parse(localStorage.getItem("userData")).member_of;case 5:if(t.t1=r=t.sent,t.t0=null!==t.t1,!t.t0){t.next=9;break}t.t0=void 0!==r;case 9:if(!t.t0){t.next=13;break}t.t2=r,t.next=14;break;case 13:t.t2=[];case 14:if(!((u=t.t2).length>0)){t.next=28;break}if(s=!1,u.some((function(t){return t.children_count>0}))&&(s=!0),!s){t.next=25;break}return t.next=21,c.a.ssoAxiosInterceptor.get("/api/unit",{params:e});case 21:return d=t.sent,t.abrupt("return",{params:e,data:d.data.data,total:d.data.total});case 25:return t.abrupt("return",{data:u});case 26:t.next=38;break;case 28:return t.prev=28,t.next=31,c.a.ssoAxiosInterceptor.get("/api/unit",{params:e});case 31:return l=t.sent,t.abrupt("return",{params:e,data:l.data.data,total:l.data.total});case 35:return t.prev=35,t.t3=t.catch(28),t.abrupt("return",n(t.t3.response.data));case 38:case"end":return t.stop()}}),t,null,[[28,35]])})));return function(e,a){return t.apply(this,arguments)}}()),f=Object(s.b)("Units/getUnit",function(){var t=Object(r.a)(i.a.mark((function t(e){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,axios.get("/api/unit/".concat(e));case 2:return a=t.sent,t.abrupt("return",a.data.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),b=Object(s.b)("Units/addUnit",function(){var t=Object(r.a)(i.a.mark((function t(e,a){var n,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.dispatch,r=a.getState,t.next=3,axios.post("/api/unit",e);case 3:return t.next=5,n(p(r().units.params));case 5:return t.next=7,n(getAllUnit());case 7:return t.abrupt("return",e);case 8:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()),U=Object(s.b)("Units/deleteUnit",function(){var t=Object(r.a)(i.a.mark((function t(e,a){var n,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.dispatch,r=a.getState,t.next=3,axios.delete("/apps/unit",{id:e});case 3:return t.next=5,n(p(r().units.params));case 5:return t.next=7,n(getAllUnit());case 7:return t.abrupt("return",e);case 8:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()),m=Object(s.c)({name:"Units",initialState:{crudTitle:"Unit",statusSummary:0,isLoadingSummary:!1,errorSummary:0,dataSummary:[],status:0,isLoading:!1,error:0,data:[],total:1,dataDropdown:[],selectedUnit:{},selectedUnitMulti:[]},reducers:{setUnitSelected:function(t,e){return console.log("setUnitSelected"),Object(n.a)(Object(n.a)({},t),{},{selectedUnit:e.payload})},resetAll:function(t){t.data=[],t.dataDropdown=[],t.total=1,t.selectedUnit=null,t.selectedUnitMulti=null}},extraReducers:function(t){t.addCase(l.fulfilled,(function(t,e){return console.log("setUnitSelectedDropdown"),Object(n.a)(Object(n.a)({},t),{},{selectedUnit:e.payload})})).addCase(p.pending,(function(t){t.status="loading",t.isLoading=!0})).addCase(p.fulfilled,(function(t,e){var a,n;(t.status="succeeded",t.isLoading=!1,null!==(a=e.payload)&&void 0!==a&&a.data)&&(t.data=e.payload.data,t.dataDropdown=e.payload.data.map((function(t){return{value:t.id,label:t.name}})),t.dataDropdown.unshift(d),null!==(n=e.payload)&&void 0!==n&&n.total&&(t.total=e.payload.total),t.selectedUnit=t.dataDropdown[0])})).addCase(p.rejected,(function(t,e){t.status="failed",t.isLoading=!1,t.error=e.error.message})).addCase(f.fulfilled,(function(t,e){t.selectedUnit=e.payload}))}});e.default=m.reducer}}]);
//# sourceMappingURL=82.140aad0f.chunk.js.map