(function(t){function e(e){for(var i,s,o=e[0],c=e[1],l=e[2],u=0,m=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&m.push(r[s][0]),r[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);f&&f(e);while(m.length)m.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],i=!0,o=1;o<a.length;o++){var c=a[o];0!==r[c]&&(i=!1)}i&&(n.splice(e--,1),t=s(s.s=a[0]))}return t}var i={},r={app:0},n=[];function s(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=i,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(a,i,function(e){return t[e]}.bind(null,i));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var f=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"332d":function(t,e,a){"use strict";var i=a("8dbc"),r=a.n(i);r.a},"387e":function(t,e,a){t.exports=a.p+"img/github.192a6620.svg"},"39fb":function(t,e,a){t.exports=a.p+"img/logo1.99e96272.svg"},"54f3":function(t,e,a){t.exports=a.p+"img/x.993c78a1.svg"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-container"},[a("router-view")],1)},n=[],s={name:"App"},o=s,c=a("2877"),l=Object(c["a"])(o,r,n,!1,null,null,null),f=l.exports,u=a("8c4f"),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("AnimatedBackground"),a("NavBar",{attrs:{logo:"assets/logo.png"}})],1)},d=[],p=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"principal"},[i("div",{attrs:{id:"dev"}},[i("p",{ref:"dev"},[t._v("Designer & Front-end Developer")])]),i("div",{attrs:{id:"logo"}},[i("img",{ref:"logo",attrs:{src:a("39fb"),height:"200px"}})]),i("div",{attrs:{id:"name"}},[i("p",{ref:"name"},[t._v("Miguel Solino")])]),i("div",{attrs:{id:"desc"}},[i("p",{ref:"desc"},[t._v("Bachelors Degree in Computer Engineering @ University of Minho")])]),i("div",{attrs:{id:"navbar"}},[i("a",{attrs:{href:"https://twitter.com/Manilator",id:"navbar-item"}},[i("img",{ref:"twitter",attrs:{src:a("a3df"),alt:"Twitter",height:"40px",id:"twitter"}})]),i("a",{attrs:{href:"https://open.spotify.com/user/manilator777",id:"navbar-item"}},[i("img",{ref:"spotify",attrs:{src:a("9451"),alt:"Spotify",height:"40px",id:"spotify"}})]),i("a",{attrs:{href:"https://github.com/Manilator",id:"navbar-item"}},[i("img",{ref:"github",attrs:{src:a("387e"),alt:"Github",height:"40px",id:"github"}})]),i("a",{attrs:{href:"https://www.linkedin.com/in/miguelsolino/",id:"navbar-item"}},[i("img",{ref:"linkedin",attrs:{src:a("953d"),alt:"Linkedin",height:"40px",id:"linkedin"}})]),i("a",{attrs:{href:"mailto:miguel.solino@protonmail.com",id:"navbar-item"}},[i("img",{ref:"email",attrs:{src:a("9055"),alt:"Email",height:"40px",id:"email"}})]),i("div",{attrs:{id:"madeby"}},[i("p",{ref:"madeby"},[t._v("© Miguel Solino")])])])])},g=[],v=(a("b0c0"),a("cffa")),h=a("a5cf"),b=window.$,O={mounted:function(){var t=this.$refs,e=t.logo,a=t.dev,i=t.name,r=t.desc,n=t.madeby,s=t.twitter,o=t.github,c=t.linkedin,l=t.email,f=t.spotify,u=v["a"].timeline();u.from(a,1,{y:250,ease:h["c"].easeOut},"+=0.2").from(e,1,{y:250,ease:h["c"].easeOut},"-=0.5").from(i,1,{y:100,ease:h["c"].easeOut},"-=0.6").from(r,1,{y:100,ease:h["c"].easeOut},"-=0.6").from(s,1,{scale:0,ease:h["a"].easeOut.config(5)},"-=0.6").from(f,1,{scale:0,ease:h["a"].easeOut.config(5)},"-=0.6").from(o,1,{scale:0,ease:h["a"].easeOut.config(5)},"-=0.6").from(c,1,{scale:0,ease:h["a"].easeOut.config(5)},"-=0.6").from(l,1,{scale:0,ease:h["a"].easeOut.config(5)},"-=0.6").from(n,1,{y:100,ease:h["c"].easeOut},"-=0.6"),b("#twitter").hover((function(){v["a"].to(s,.5,{scale:1.5,ease:h["c"].easeOut})}),(function(){v["a"].to(s,.5,{scale:1,ease:h["c"].easeOut})})),b("#spotify").hover((function(){v["a"].to(f,.5,{scale:1.5,ease:h["c"].easeOut})}),(function(){v["a"].to(f,.5,{scale:1,ease:h["c"].easeOut})})),b("#github").hover((function(){v["a"].to(o,.5,{scale:1.5,ease:h["c"].easeOut})}),(function(){v["a"].to(o,.5,{scale:1,ease:h["c"].easeOut})})),b("#linkedin").hover((function(){v["a"].to(c,.5,{scale:1.5,ease:h["c"].easeOut})}),(function(){v["a"].to(c,.5,{scale:1,ease:h["c"].easeOut})})),b("#email").hover((function(){v["a"].to(l,.5,{scale:1.5,ease:h["c"].easeOut})}),(function(){v["a"].to(l,.5,{scale:1,ease:h["c"].easeOut})}))}},y=O,w=(a("7ac0"),Object(c["a"])(y,p,g,!1,null,"0c542d98",null)),_=w.exports,x=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},C=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"animated-background"},[i("div",{staticClass:"forms"},[i("img",{staticClass:"img-form",attrs:{src:a("54f3"),alt:""}}),i("img",{staticClass:"img-form",attrs:{src:a("54f3"),alt:""}}),i("img",{staticClass:"img-form",attrs:{src:a("54f3"),alt:""}}),i("img",{staticClass:"img-form",attrs:{src:a("54f3"),alt:""}}),i("img",{staticClass:"img-form",attrs:{src:a("54f3"),alt:""}}),i("img",{staticClass:"img-form",attrs:{src:a("54f3"),alt:""}}),i("img",{staticClass:"img-form",attrs:{src:a("54f3"),alt:""}}),i("img",{staticClass:"img-form",attrs:{src:a("54f3"),alt:""}}),i("img",{staticClass:"img-form",attrs:{src:a("54f3"),alt:""}}),i("img",{staticClass:"img-form",attrs:{src:a("54f3"),alt:""}}),i("img",{staticClass:"img-form",attrs:{src:a("54f3"),alt:""}})]),i("div",{attrs:{id:"easteregg"}},[t._v("type "),i("b",[t._v("leite")])])])}],k={name:"AnimatedBackground",props:{name:String}};window.addEventListener("keypress",function(){var t="leite",e="";return function(a){var i=String.fromCharCode(a.which);if(e+=i,-1===t.indexOf(e))e="";else if(e===t){e="";for(var r=document.getElementsByClassName("img-form"),n=0;n<r.length;n++)r[n].src="https://cdn.discordapp.com/attachments/443699822025900033/730487906594193499/milk.svg"}}}());var j=k,M=(a("332d"),Object(c["a"])(j,x,C,!1,null,"1d40e4fc",null)),E=M.exports,S={name:"MainPage",components:{NavBar:_,AnimatedBackground:E}},$=S,P=(a("59f2"),Object(c["a"])($,m,d,!1,null,null,null)),T=P.exports,B=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},A=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-container"},[a("div",{staticClass:"main-title"},[t._v("Wallpapers")]),a("div",{staticClass:"container"},[a("div",{staticClass:"vertical-container",attrs:{id:"first"}}),a("div",{staticClass:"vertical-container",attrs:{id:"second"}}),a("div",{staticClass:"vertical-container",attrs:{id:"third"}})])])}],W=window.$,N=["first","second","third"],D=-1,J={name:"Walls",components:{},mounted:function(){this.getWallpapers()},methods:{getWallpapers:function(){W.getJSON("https://raw.githubusercontent.com/Manilator/manilator.github.io/gh-pages/portfolio/src/walls.json",(function(t){for(var e in console.log(t),t){var a=W("<div />",{class:"wall-container"}),i=W("<a />",{target:"_blank",href:t[e].src}),r=W("<div />",{class:"title",text:e}),n=W("<img />",{class:"wallpaper",ref:"wallpaper",src:t[e].src,alt:"MyAlt"});D>=N.length-1?D=0:D++,console.log(D),console.log(N.length),n.appendTo(i),r.appendTo(i),i.appendTo(a),a.appendTo(W("#".concat(N[D])))}}))}}},L=J,F=(a("9617"),Object(c["a"])(L,B,A,!1,null,null,null)),G=F.exports;i["a"].use(u["a"]);var U=new u["a"]({mode:"hash",routes:[{path:"/",name:"MainPage",component:T},{path:"/walls",name:"Walls",component:G}]});i["a"].config.productionTip=!1,i["a"].use(u["a"]),new i["a"]({router:U,render:function(t){return t(f)}}).$mount("#app")},"59f2":function(t,e,a){"use strict";var i=a("fcca"),r=a.n(i);r.a},"7ac0":function(t,e,a){"use strict";var i=a("7e71"),r=a.n(i);r.a},"7e71":function(t,e,a){},"8dbc":function(t,e,a){},9055:function(t,e,a){t.exports=a.p+"img/email.e93d5761.svg"},9451:function(t,e,a){t.exports=a.p+"img/spotify.0ddecd21.svg"},"953d":function(t,e,a){t.exports=a.p+"img/linkedin.9e36c8fd.svg"},9617:function(t,e,a){"use strict";var i=a("f1df"),r=a.n(i);r.a},a3df:function(t,e,a){t.exports=a.p+"img/twitter.1db9e9c3.svg"},f1df:function(t,e,a){},fcca:function(t,e,a){}});
//# sourceMappingURL=app.5ae84f79.js.map