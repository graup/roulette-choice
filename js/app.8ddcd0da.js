(function(t){function e(e){for(var r,s,c=e[0],l=e[1],o=e[2],f=0,p=[];f<c.length;f++)s=c[f],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&p.push(a[s][0]),a[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,o||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,c=1;c<n.length;c++){var l=n[c];0!==a[l]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},i=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/roulette-choice/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var o=0;o<c.length;o++)e(c[o]);var u=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"034f":function(t,e,n){"use strict";n("85ec")},"0e5c":function(t,e,n){t.exports=n.p+"img/wheel.cf327f07.png"},"85ec":function(t,e,n){},"932c":function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app"},[n("div",{staticStyle:{width:"70vh",height:"70vh"}},[n("Roulette",{attrs:{slices:t.slices,labels:t.labels}})],1),n("div",{staticClass:"input-wrap"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.slicesInput,expression:"slicesInput"}],attrs:{placeholder:"Enter weights (space-separated)"},domProps:{value:t.slicesInput},on:{input:function(e){e.target.composing||(t.slicesInput=e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.labelsInput,expression:"labelsInput"}],attrs:{placeholder:"Enter names (optional, space-separated)"},domProps:{value:t.labelsInput},on:{input:function(e){e.target.composing||(t.labelsInput=e.target.value)}}})])])},i=[],s=(n("d81d"),n("ac1f"),n("1276"),n("498a"),n("d4ec")),c=n("bee2"),l=n("262e"),o=n("2caf"),u=n("9ab4"),f=n("2fe1"),p=n("b85c"),h=function(t){Object(l["a"])(n,t);var e=Object(o["a"])(n);function n(){var t;return Object(s["a"])(this,n),t=e.apply(this,arguments),t.storeKeys=[],t}return Object(c["a"])(n,[{key:"mounted",value:function(){var t,e=this,n=Object(p["a"])(this.storeKeys);try{var r=function(){var n=t.value,r=localStorage.getItem(n);r&&(e[n]=r),e.$watch(n,(function(t){localStorage.setItem(n,t)}))};for(n.s();!(t=n.n()).done;)r()}catch(a){n.e(a)}finally{n.f()}}}]),n}(r["a"]);h=Object(u["a"])([f["b"]],h);var d=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{attrs:{width:"100%",height:"100%",viewBox:"0 0 40 40"},on:{click:t.spin}},[r("g",{staticClass:"wheel",style:"transform: rotate("+(t.offset/100*360+t.rotate)+"deg)"},[r("image",{staticClass:"wheel-image",attrs:{href:n("0e5c"),height:"15",width:"15",x:"12.5",y:"12.5"}}),t._l(t.sliceAttributes,(function(e){return r("g",{key:"arc"+e.index},[r("circle",{staticClass:"segment",class:{winner:t.winnerIndex===e.index},attrs:{id:"circle-"+e.index,cx:"20",cy:"20",r:"13",fill:"transparent",stroke:e.color,"stroke-width":"11","stroke-dasharray":e.slice*(2*Math.PI*13)+" "+(1-e.slice)*(2*Math.PI*13),"stroke-dashoffset":""+e.dashOffset*(2*Math.PI*13)}})])})),r("circle",{attrs:{cx:"20",cy:"20",r:"15.91549430918954",fill:"transparent",stroke:"#000000","stroke-opacity":"0.1","stroke-width":"3.5"}}),r("path",{attrs:{id:"circle-path",fill:"transparent",d:"M4.084505690811,20A15.915494309189,15.915494309189 0 1 135.915494309189,20A15.915494309189,15.915494309189 0 1 14.084505690811,20 M4.084505690811,20A15.915494309189,15.915494309189 0 1 135.915494309189,20A15.915494309189,15.915494309189 0 1 14.084505690811,20"}}),t._l(t.sliceAttributes,(function(e){return r("g",{key:"text"+e.index},[r("text",{staticClass:"label",attrs:{dx:e.labelOffset*(2*Math.PI*15.915494309189)-.3,dy:"0.1","text-anchor":"middle","dominant-baseline":"central"}},[r("textPath",{attrs:{"xlink:href":"#circle-path"}},[t._v(" "+t._s(t.totalLabels[e.index])+" ")])])])}))],2),r("g",{attrs:{transform:"translate(19.75 0.5)",fill:"#fff"}},[r("rect",{attrs:{x:"0",y:"0",width:"0.5",height:"2"}}),r("g",{attrs:{transform:"translate(0 2)",fill:"#fff"}},[r("polygon",{attrs:{points:"0,0 0.5,0 0.25,0.5"}})])])])},b=[],v=(n("c740"),n("d3b7"),n("ddb0"),n("2909")),m=n("60a3");n("13d5");function g(t){var e=t.reduce((function(t,e){return t+e}));return t.map((function(t){return t/e}))}function y(t){var e=0;return t.map((function(t){return e+=t}))}var O=["#F93E3B","#0D51E6","#EF3BF3","#FDA400"],j=function(t){Object(l["a"])(n,t);var e=Object(o["a"])(n);function n(){var t;return Object(s["a"])(this,n),t=e.apply(this,arguments),t.rotate=0,t.winnerIndex=-1,t.timeout=null,t}return Object(c["a"])(n,[{key:"slicesChanged",value:function(){this.winnerIndex=-1}},{key:"spin",value:function(){var t=this;this.winnerIndex=-1;var e=Math.random(),n=this.cummulativeSlices.findIndex((function(t){return e<t}));console.log({slices:this.cummulativeSlices,winner:e,winnerIndex:n,name:this.totalLabels[n]}),this.rotate=360*Math.ceil(this.rotate/360)+360*(1-e)+3600,this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout((function(){t.winnerIndex=n}),9600)}},{key:"normalizedSlices",get:function(){return g(this.slices)}},{key:"cummulativeSlices",get:function(){return y(this.normalizedSlices)}},{key:"totalLabels",get:function(){var t=Object(v["a"])(this.labels),e=this.slices.length-t.length;return e>0&&t.push.apply(t,Object(v["a"])(Object(v["a"])(Array(e).keys()).map((function(e){return"".concat(e+1+t.length)})))),t}},{key:"sliceAttributes",get:function(){var t,e=[],n=0,r=0,a=Object(p["a"])(this.normalizedSlices);try{for(a.s();!(t=a.n()).done;){var i=t.value,s=this.slices.length%O.length===1&&r===this.slices.length-1,c=s?O[1]:O[r%O.length];e.push({index:r,slice:i,dashOffset:1-n,labelOffset:(.5+n+i/2)%1,color:c}),n+=i,r+=1}}catch(l){a.e(l)}finally{a.f()}return e}}]),n}(m["c"]);Object(u["a"])([Object(m["b"])()],j.prototype,"slices",void 0),Object(u["a"])([Object(m["b"])({default:-25})],j.prototype,"offset",void 0),Object(u["a"])([Object(m["b"])({default:[]})],j.prototype,"labels",void 0),Object(u["a"])([Object(m["d"])("slices")],j.prototype,"slicesChanged",null),j=Object(u["a"])([m["a"]],j);var x=j,w=x,I=(n("f120"),n("2877")),k=Object(I["a"])(w,d,b,!1,null,"2daa08fe",null),P=k.exports,S=function(t){Object(l["a"])(n,t);var e=Object(o["a"])(n);function n(){var t;return Object(s["a"])(this,n),t=e.apply(this,arguments),t.storeKeys=["slicesInput","labelsInput"],t.slicesInput="0.25 0.25 0.25 0.25",t.labelsInput="",t}return Object(c["a"])(n,[{key:"slices",get:function(){return this.slicesInput.trim().split(" ").map(parseFloat)}},{key:"labels",get:function(){return""===this.labelsInput?[]:this.labelsInput.split(" ")}}]),n}(Object(f["c"])(h));S=Object(u["a"])([Object(f["b"])({components:{Roulette:P}})],S);var _=S,M=_,A=(n("034f"),Object(I["a"])(M,a,i,!1,null,null,null)),C=A.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(C)}}).$mount("#app")},f120:function(t,e,n){"use strict";n("932c")}});
//# sourceMappingURL=app.8ddcd0da.js.map