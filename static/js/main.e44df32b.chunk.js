(this["webpackJsonpweather-checker"]=this["webpackJsonpweather-checker"]||[]).push([[0],{11:function(e,t,c){},15:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),i=c(5),r=c.n(i),a=(c(11),c(4)),o=c.n(a),d=c(6),j=c(2),u=c(0),h=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Weather checker"}),Object(u.jsx)("p",{children:"Check the weather in your city!"})]})},b=function(e){return Object(u.jsxs)("form",{onSubmit:e.weatherMethod,children:[Object(u.jsx)("input",{type:"text",name:"city",placeholder:"Enter your city"}),Object(u.jsx)("button",{children:"Get weather"})]})},l=function(e){var t=e.temp,c=e.city,n=e.country,s=e.feelsLike,i=e.sunset,r=e.error;return Object(u.jsxs)("div",{className:"infoWeather",children:[c&&!r&&Object(u.jsxs)("div",{children:[Object(u.jsxs)("p",{children:["Location: ",c,", ",n," "]}),Object(u.jsxs)("p",{children:["Temperature: ",t]}),Object(u.jsxs)("p",{children:["Feels like: ",s]}),Object(u.jsxs)("p",{children:["Sunset: ",i]})]}),Object(u.jsxs)("p",{className:"error",children:[" ",r," "]})]})},O=function(){var e=Object(n.useState)(void 0),t=Object(j.a)(e,2),c=t[0],s=t[1],i=Object(n.useState)(void 0),r=Object(j.a)(i,2),a=r[0],O=r[1],v=Object(n.useState)(void 0),p=Object(j.a)(v,2),m=p[0],f=p[1],x=Object(n.useState)(void 0),y=Object(j.a)(x,2),k=y[0],w=y[1],g=Object(n.useState)(void 0),S=Object(j.a)(g,2),N=S[0],C=S[1],F=Object(n.useState)({sunset:void 0}),L=Object(j.a)(F,2),M=(L[0],L[1],Object(n.useState)(void 0)),P=Object(j.a)(M,2),T=P[0],D=P[1],B=Object(n.useCallback)(function(){var e=Object(d.a)(o.a.mark((function e(t){var c,n,i,r,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!(c=t.target.elements.city.value)){e.next=9;break}return e.next=5,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(c,"&appid=").concat("0359602e6a87b3982ec17d3fd4cdb83f","&units=metric")).then((function(e){return e.json()}));case 5:200===(null===(n=e.sent)||void 0===n?void 0:n.cod)?(i=n.sys.sunset,(r=new Date).setTime(i),a="".concat(r.getHours(),":").concat(r.getMinutes(),":").concat(r.getSeconds()),s(n.main.temp),O(n.name),f(n.sys.country),w(n.main.feels_like),C(a),D(void 0)):(s(void 0),O(void 0),f(void 0),w(void 0),C(void 0),D("City not found. Please check the city name and try again.")),e.next=15;break;case 9:s(void 0),O(void 0),f(void 0),w(void 0),C(void 0),D("Please type the city name");case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]);return Object(u.jsx)("div",{className:"wrapper",children:Object(u.jsx)("div",{className:"main",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-sm-5 info",children:Object(u.jsx)(h,{})}),Object(u.jsxs)("div",{className:"col-sm-7 form",children:[Object(u.jsx)(b,{weatherMethod:B}),Object(u.jsx)(l,{temp:c,city:a,country:m,feelsLike:k,sunset:N,error:T})]})]})})})})},v=(c(14),c(15),function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),i(e),r(e)}))});r.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(O,{})}),document.getElementById("root")),v()}},[[16,1,2]]]);
//# sourceMappingURL=main.e44df32b.chunk.js.map