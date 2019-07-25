(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app"],{0:function(e,t,n){e.exports=n("2f39")},"2f39":function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"getTask",function(){return ae}),n.d(a,"getUser",function(){return re}),n.d(a,"getToken",function(){return ue});var r={};n.r(r),n.d(r,"saveTask",function(){return oe}),n.d(r,"fillState",function(){return ce}),n.d(r,"doLogin",function(){return ie});var u={};n.r(u),n.d(u,"sisyncApi",function(){return be});var o=n("a34a"),c=n.n(o),i=(n("96cf"),n("c973")),s=n.n(i),p=(n("7d6e"),n("e54f"),n("62f2"),n("7e6d"),n("2b0e")),f=n("b05d"),l=n("4d5a"),d=n("9898"),h=n("f2cc"),b=n("c7a0"),m=n("2ea3"),v=n("65c6"),k=n("6ac5"),Q=n("9c40"),w=n("0016"),g=n("497d"),x=n("6ab5"),y=n("033f"),I=n("e208"),T=n("27f9"),A=n("9f0a"),L=n("8f8e"),S=n("24e8"),D=n("d3ab"),P=n("f09f"),R=n("a370"),C=n("4b7e"),U=n("c859"),q=n("cb32"),O=n("7cbe"),V=n("068f"),E=n("429b"),N=n("7460"),$=n("7867"),j=n("8562"),B=n("adad"),J=n("823b"),_=n("714f"),z=n("7f67"),G=n("2a19"),H=n("18d6"),F=n("a639");p["a"].use(f["a"],{config:{},components:{QLayout:l["a"],QHeader:d["a"],QDrawer:h["a"],QPageContainer:b["a"],QPage:m["a"],QToolbar:v["a"],QToolbarTitle:k["a"],QBtn:Q["a"],QIcon:w["a"],QList:g["a"],QItem:x["a"],QItemSection:y["a"],QItemLabel:I["a"],QInput:T["a"],QOptionGroup:A["a"],QCheckbox:L["a"],QDialog:S["a"],QPageSticky:D["a"],QCard:P["a"],QCardSection:R["a"],QCardActions:C["a"],QDate:U["a"],QAvatar:q["a"],QPopupProxy:O["a"],QImg:V["a"],QTabs:E["a"],QTab:N["a"],QRouteTab:$["a"],QSplitter:j["a"],QTabPanels:B["a"],QTabPanel:J["a"]},directives:{Ripple:_["a"],ClosePopup:z["a"]},plugins:{Notify:G["a"],LocalStorage:H["a"],SessionStorage:F["a"]}});var K=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},M=[],W={name:"App"},X=W,Y=n("2877"),Z=Object(Y["a"])(X,K,M,!1,null,null,null),ee=Z.exports,te=n("2f62"),ne={task:[],user:{name:"",email:""},token:""};function ae(e){return e.task}function re(e){return e.user}function ue(e){return e}function oe(e,t){e.task.push(t)}function ce(e,t){e.task=t}function ie(e,t){e.token=t.token,e.user=t.user}n("551c");var se=n("bc3a"),pe=n.n(se),fe=pe.a.create({baseURL:"https://api-tasks-gsm.herokuapp.com/"});fe.interceptors.request.use(function(e){return e.headers.authorization=F["a"].getItem("token"),e},function(e){return Promise.reject(e)});var le=function(){var e=s()(c.a.mark(function e(t){var n;return c.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:n=t.Vue,n.prototype.$axios=fe;case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),de=function(e){var t={method:"",url:e.URL,data:{}};switch(e.ACTION){case"save":e.ID?(t.method="put",t.data=e.DATA,t.url=e.URL+"/"+e.ID):(t.method="post",t.data=e.DATA);break;case"paginate":t.method="post",t.data=e.OPTIONS,t.url=e.URL+"/paginate";break;case"get":e.ID?(t.method="get",t.url=e.URL+"/"+e.ID):(t.method="get",t.url=e.URL);break;case"delete":t.method="delete",t.url=e.URL+"/"+e.ID}return t},he=function(e){return fe(de(e)).then(function(e){return e.data})},be=function(e,t){return he(t)},me={namespaced:!0,getters:a,mutations:r,actions:u,state:ne};p["a"].use(te["a"]);var ve=function(){var e=new te["a"].Store({modules:{taskStore:me},strict:!1});return e},ke=n("8c4f"),Qe=n("2ef0"),we=n.n(Qe),ge=function(e,t,n){if(e.matched.some(function(e){return e.meta.requireAuth})){var a=we.a.isEmpty(F["a"].getItem("token"));a?n("/"):n()}else n()},xe=[{path:"/",component:function(){return n.e("59601152").then(n.bind(null,"4632"))},children:[{path:"",component:function(){return n.e("0be55595").then(n.bind(null,"013f"))}}]},{path:"/tasks",meta:{requireAuth:!0},component:function(){return n.e("a08e9310").then(n.bind(null,"f241"))},children:[{path:"",component:function(){return n.e("43785eb9").then(n.bind(null,"1b8f"))}}]}];xe.push({path:"*",component:function(){return n.e("4b47640d").then(n.bind(null,"e51e"))}});var ye=xe;p["a"].use(ke["a"]);var Ie=function(){var e=new ke["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:ye,mode:"hash",base:""});return e.beforeEach(ge),e},Te=function(){var e="function"===typeof ve?ve({Vue:p["a"]}):ve,t="function"===typeof Ie?Ie({Vue:p["a"],store:e}):Ie;e.$router=t;var n={el:"#q-app",router:t,store:e,render:function(e){return e(ee)}};return{app:n,store:e,router:t}},Ae=n("a925"),Le={failed:"Action failed",success:"Action was successful"},Se={"en-us":Le},De=function(){var e=s()(c.a.mark(function e(t){var n,a;return c.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:n=t.app,a=t.Vue,a.use(Ae["a"]),n.i18n=new Ae["a"]({locale:"pt-br",fallbackLocale:"pt-br",messages:Se});case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),Pe=Te(),Re=Pe.app,Ce=Pe.store,Ue=Pe.router;function qe(){return Oe.apply(this,arguments)}function Oe(){return Oe=s()(c.a.mark(function e(){var t,n;return c.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:t=[De,le],n=0;case 2:if(!(n<t.length)){e.next=20;break}if("function"===typeof t[n]){e.next=5;break}return e.abrupt("continue",17);case 5:return e.prev=5,e.next=8,t[n]({app:Re,router:Ue,store:Ce,Vue:p["a"],ssrContext:null});case 8:e.next=17;break;case 10:if(e.prev=10,e.t0=e["catch"](5),!e.t0||!e.t0.url){e.next=15;break}return window.location.href=e.t0.url,e.abrupt("return");case 15:return console.error("[Quasar] boot error:",e.t0),e.abrupt("return");case 17:n++,e.next=2;break;case 20:new p["a"](Re);case 21:case"end":return e.stop()}},e,null,[[5,10]])})),Oe.apply(this,arguments)}qe()},"7e6d":function(e,t,n){}},[[0,"runtime","vendor"]]]);