(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{60:function(e,t,n){e.exports=n(73)},65:function(e,t,n){},66:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),o=n.n(c),l=(n(65),n(66),n(39)),i=n(21),u=n(37),s=n(104),d=n(105),m=n(108),v=n(75),p=n(106),h=n(107),E=n(40),f=n.n(E),A=n(46),g=n(109),b=n(102),w=n(103),k=function(e){var t=e.results,n=[];if(void 0!==t)for(var a=0;a<t.length;a++){var c,o,l,i,u,s=null===(c=t[a])||void 0===c?void 0:c.attributes.LAndBAnkTop100CSVUpdate_csv_Add,d=null===(o=t[a])||void 0===o?void 0:o.attributes.LAndBAnkTop100CSVUpdate_csv_CIT,m=null===(l=t[a])||void 0===l?void 0:l.attributes.LAndBAnkTop100CSVUpdate_csv_STA,v=null===(i=t[a])||void 0===i?void 0:i.attributes.LAndBAnkTop100CSVUpdate_csv_ZIP,p=null===(u=t[a])||void 0===u?void 0:u.attributes.LAndBAnkTop100CSVUpdate_csv_App;n.push(r.a.createElement(g.a,{key:a},r.a.createElement(b.a,{style:{margin:"2vh auto",padding:"1%",textAlign:"left",width:"50vw"}},r.a.createElement("div",{style:{height:"10vh",width:"30vw",backgroundColor:"#F0F0F0"}}),r.a.createElement("h3",null,"$",p),r.a.createElement("em",null,s,", ",d,", ",m,", ",v))))}return r.a.createElement("div",null,r.a.createElement("p",{style:{marginBottom:"5px"}},t&&t.length+" results"),r.a.createElement(w.a,{style:{overflow:"auto",margin:"0 auto",maxHeight:"50vh",maxWidth:"50vw"}},t&&r.a.createElement("div",null,n)))},S=function(e){var t=Object(a.useState)(),n=Object(u.a)(t,2),c=n[0],o=n[1];return Object(a.useEffect)((function(){var t="LAndBAnkTop100CSVUpdate_csv_Ran",n=e.price.price;(function(){var e=Object(A.a)(f.a.mark((function e(){var a,r,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://services1.arcgis.com/Qo2HHQp8vgPs2wg3/arcgis/rest/services/LandBankRankingUpdate/FeatureServer/0/query"+"?where=".concat("LAndBAnkTop100CSVUpdate_csv_CIT"," = 'KANSAS CITY' AND ")+"".concat(t," > 2283 AND ")+"".concat("LAndBAnkTop100CSVUpdate_csv_App"," < ").concat(n)+"&orderByFields=".concat(t," DESC&outFields=*&f=json"));case 2:return a=e.sent,e.next=5,a.json();case 5:return r=e.sent,e.next=8,r.features;case 8:c=e.sent,o(c);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[e]),r.a.createElement("div",null,r.a.createElement(k,{results:c}))},C=Object(s.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:"50vw"},form:{width:"60vw",margin:"5vh auto"}}})),_=function(){var e=C(),t=Object(a.useState)(""),n=Object(u.a)(t,2),c=n[0],o=n[1];return r.a.createElement(d.a,null,r.a.createElement(m.a,{className:e.form},r.a.createElement(v.a,null,r.a.createElement("h2",null,"Search Top 100 Land Bank Properties"),r.a.createElement(p.a,{className:e.formControl},r.a.createElement(h.a,{id:"Price",value:c,onChange:function(e){return o(e.target.value)},label:"Maximum Price",variant:"standard"})))),r.a.createElement(S,{price:{price:c}}))},B=function(){return r.a.createElement("div",null,r.a.createElement(l.b,{to:"/"},r.a.createElement("button",null,"Home")),r.a.createElement(l.b,{to:"/about"},r.a.createElement("button",null,"About")))},T=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"About"))};var x=function(){return r.a.createElement(l.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",null,"Hello, header"),r.a.createElement(B,null)),r.a.createElement("div",null,r.a.createElement(i.a,{exact:!0,path:"/",component:_}),r.a.createElement(i.a,{exact:!0,path:"/about",component:T}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[60,1,2]]]);
//# sourceMappingURL=main.f05ca08d.chunk.js.map