(function(t){function e(e){for(var r,s,o=e[0],c=e[1],l=e[2],u=0,m=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&m.push(i[s][0]),i[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);f&&f(e);while(m.length)m.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],r=!0,o=1;o<a.length;o++){var c=a[o];0!==i[c]&&(r=!1)}r&&(n.splice(e--,1),t=s(s.s=a[0]))}return t}var r={},i={app:0},n=[];function s(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=r,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(a,r,function(e){return t[e]}.bind(null,r));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var f=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var r=a("85ec"),i=a.n(r);i.a},"07bd":function(t,e,a){},"387e":function(t,e,a){t.exports=a.p+"img/github.192a6620.svg"},"39fb":function(t,e,a){t.exports=a.p+"img/logo1.99e96272.svg"},"4e37":function(t,e,a){},"54f3":function(t,e,a){t.exports=a.p+"img/x.993c78a1.svg"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("AnimatedBackground"),a("NavBar",{attrs:{logo:"assets/logo.png"}})],1)},n=[],s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"principal"},[r("div",{attrs:{id:"dev"}},[r("p",{ref:"dev"},[t._v("Designer & Front-end Developer")])]),r("div",{attrs:{id:"logo"}},[r("img",{ref:"logo",attrs:{src:a("39fb"),height:"200px"}})]),r("div",{attrs:{id:"name"}},[r("p",{ref:"name"},[t._v("Miguel Solino")])]),r("div",{attrs:{id:"desc"}},[r("p",{ref:"desc"},[t._v("Bachelors Degree in Computer Engineering @ University of Minho")])]),r("div",{attrs:{id:"navbar"}},[r("a",{attrs:{href:"https://twitter.com/Manilator",id:"navbar-item"}},[r("img",{ref:"twitter",attrs:{src:a("a3df"),alt:"Twitter",height:"40px",id:"twitter"}})]),r("a",{attrs:{href:"https://github.com/Manilator",id:"navbar-item"}},[r("img",{ref:"github",attrs:{src:a("387e"),alt:"Github",height:"40px",id:"github"}})]),r("a",{attrs:{href:"https://www.linkedin.com/in/miguelsolino/",id:"navbar-item"}},[r("img",{ref:"linkedin",attrs:{src:a("953d"),alt:"Linkedin",height:"40px",id:"linkedin"}})]),r("a",{attrs:{href:"mailto:miguelsolino@protonmail.com",id:"navbar-item"}},[r("img",{ref:"email",attrs:{src:a("9055"),alt:"Email",height:"40px",id:"email"}})]),r("div",{attrs:{id:"madeby"}},[r("p",{ref:"madeby"},[t._v("© Miguel Solino")])])])])},o=[],c=(a("b0c0"),a("cffa")),l=a("a5cf"),f=window.$,u={mounted:function(){var t=this.$refs,e=t.logo,a=t.dev,r=t.name,i=t.desc,n=t.madeby,s=t.twitter,o=t.github,u=t.linkedin,m=t.email,d=c["a"].timeline();d.from(a,1,{y:250,ease:l["c"].easeOut},"+=0.2").from(e,1,{y:250,ease:l["c"].easeOut},"-=0.5").from(r,1,{y:100,ease:l["c"].easeOut},"-=0.6").from(i,1,{y:100,ease:l["c"].easeOut},"-=0.6").from(s,1,{scale:0,ease:l["a"].easeOut.config(5)},"-=0.6").from(o,1,{scale:0,ease:l["a"].easeOut.config(5)},"-=0.6").from(u,1,{scale:0,ease:l["a"].easeOut.config(5)},"-=0.6").from(m,1,{scale:0,ease:l["a"].easeOut.config(5)},"-=0.6").from(n,1,{y:100,ease:l["c"].easeOut},"-=0.6"),f("#twitter").hover((function(){c["a"].to(s,.5,{scale:1.5,ease:l["c"].easeOut})}),(function(){c["a"].to(s,.5,{scale:1,ease:l["c"].easeOut})})),f("#github").hover((function(){c["a"].to(o,.5,{scale:1.5,ease:l["c"].easeOut})}),(function(){c["a"].to(o,.5,{scale:1,ease:l["c"].easeOut})})),f("#linkedin").hover((function(){c["a"].to(u,.5,{scale:1.5,ease:l["c"].easeOut})}),(function(){c["a"].to(u,.5,{scale:1,ease:l["c"].easeOut})})),f("#email").hover((function(){c["a"].to(m,.5,{scale:1.5,ease:l["c"].easeOut})}),(function(){c["a"].to(m,.5,{scale:1,ease:l["c"].easeOut})}))}},m=u,d=(a("c412"),a("2877")),g=Object(d["a"])(m,s,o,!1,null,"d82da782",null),p=g.exports,v=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},h=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"animated-background"},[r("div",{staticClass:"forms"},[r("img",{staticClass:"img-form",attrs:{src:a("54f3"),alt:""}}),r("img",{staticClass:"img-form",attrs:{src:a("54f3"),alt:""}}),r("img",{staticClass:"img-form",attrs:{src:a("54f3"),alt:""}}),r("img",{staticClass:"img-form",attrs:{src:a("54f3"),alt:""}}),r("img",{staticClass:"img-form",attrs:{src:a("54f3"),alt:""}}),r("img",{staticClass:"img-form",attrs:{src:a("54f3"),alt:""}}),r("img",{staticClass:"img-form",attrs:{src:a("54f3"),alt:""}}),r("img",{staticClass:"img-form",attrs:{src:a("54f3"),alt:""}}),r("img",{staticClass:"img-form",attrs:{src:a("54f3"),alt:""}}),r("img",{staticClass:"img-form",attrs:{src:a("54f3"),alt:""}}),r("img",{staticClass:"img-form",attrs:{src:a("54f3"),alt:""}})]),r("div",{attrs:{id:"easteregg"}},[t._v("type "),r("b",[t._v("leite")])])])}],b={name:"AnimatedBackground",props:{}};window.addEventListener("keypress",function(){var t="leite",e="";return function(a){var r=String.fromCharCode(a.which);if(e+=r,-1===t.indexOf(e))e="";else if(e===t){e="";for(var i=document.getElementsByClassName("img-form"),n=0;n<i.length;n++)i[n].src="https://cdn.discordapp.com/attachments/443699822025900033/730487906594193499/milk.svg"}}}());var O=b,y=(a("858f"),Object(d["a"])(O,v,h,!1,null,"f495714a",null)),w=y.exports,x={name:"App",components:{NavBar:p,AnimatedBackground:w}},_=x,C=(a("034f"),Object(d["a"])(_,i,n,!1,null,null,null)),k=C.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(k)}}).$mount("#app")},"858f":function(t,e,a){"use strict";var r=a("07bd"),i=a.n(r);i.a},"85ec":function(t,e,a){},9055:function(t,e,a){t.exports=a.p+"img/email.e93d5761.svg"},"953d":function(t,e,a){t.exports=a.p+"img/linkedin.9e36c8fd.svg"},a3df:function(t,e,a){t.exports=a.p+"img/twitter.1db9e9c3.svg"},c412:function(t,e,a){"use strict";var r=a("4e37"),i=a.n(r);i.a}});
//# sourceMappingURL=app.fac0120e.js.map