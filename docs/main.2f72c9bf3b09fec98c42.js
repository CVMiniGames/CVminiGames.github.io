/*! For license information please see main.2f72c9bf3b09fec98c42.js.LICENSE.txt */
(()=>{var t,e,r,n={385:(t,e,r)=>{var n={"./404.json":[70,61],"./index.json":[951,951],"./legal.json":[388,388],"./lore.json":[361,361],"./monetize.json":[471,471],"./parcels.json":[468,468],"./toc.json":[578,578],"./tutorials.json":[81,81]};function o(t){if(!r.o(n,t))return Promise.resolve().then(()=>{var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e});var e=n[t],o=e[0];return r.e(e[1]).then(()=>r.t(o,17))}o.keys=()=>Object.keys(n),o.id=385,t.exports=o},61:(t,e,r)=>{var n=r(698).default;function o(){"use strict";t.exports=o=function(){return e},t.exports.__esModule=!0,t.exports.default=t.exports;var e={},r=Object.prototype,a=r.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function p(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,a=Object.create(o.prototype),c=new P(n||[]);return i(a,"_invoke",{value:L(t,r,c)}),a}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=p;var d={};function v(){}function y(){}function m(){}var g={};f(g,u,(function(){return this}));var b=Object.getPrototypeOf,x=b&&b(b(S([])));x&&x!==r&&a.call(x,u)&&(g=x);var w=m.prototype=v.prototype=Object.create(g);function j(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){var r;i(this,"_invoke",{value:function(o,i){function c(){return new e((function(r,c){!function r(o,i,c,u){var s=h(t[o],t,i);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==n(f)&&a.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,c,u)}),(function(t){r("throw",t,c,u)})):e.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return r("throw",t,c,u)}))}u(s.arg)}(o,i,r,c)}))}return r=r?r.then(c,c):c()}})}function L(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return N()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=O(i,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=h(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===d)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function O(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,O(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var o=h(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function S(t){if(t){var e=t[u];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(a.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:N}}function N(){return{value:void 0,done:!0}}return y.prototype=m,i(w,"constructor",{value:m,configurable:!0}),i(m,"constructor",{value:y,configurable:!0}),y.displayName=f(m,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,f(t,l,"GeneratorFunction")),t.prototype=Object.create(w),t},e.awrap=function(t){return{__await:t}},j(_.prototype),f(_.prototype,s,(function(){return this})),e.AsyncIterator=_,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new _(p(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},j(w),f(w,l,"Generator"),f(w,u,(function(){return this})),f(w,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=S,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=a.call(o,"catchLoc"),u=a.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:S(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},e}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},698:t=>{function e(r){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(r)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},687:(t,e,r)=>{var n=r(61)();t.exports=n;try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}}},o={};function a(t){var e=o[t];if(void 0!==e)return e.exports;var r=o[t]={exports:{}};return n[t](r,r.exports,a),r.exports}a.m=n,a.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return a.d(e,{a:e}),e},e=Object.getPrototypeOf?t=>Object.getPrototypeOf(t):t=>t.__proto__,a.t=function(r,n){if(1&n&&(r=this(r)),8&n)return r;if("object"==typeof r&&r){if(4&n&&r.__esModule)return r;if(16&n&&"function"==typeof r.then)return r}var o=Object.create(null);a.r(o);var i={};t=t||[null,e({}),e([]),e(e)];for(var c=2&n&&r;"object"==typeof c&&!~t.indexOf(c);c=e(c))Object.getOwnPropertyNames(c).forEach(t=>i[t]=()=>r[t]);return i.default=()=>r,a.d(o,i),o},a.d=(t,e)=>{for(var r in e)a.o(e,r)&&!a.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},a.f={},a.e=t=>Promise.all(Object.keys(a.f).reduce((e,r)=>(a.f[r](t,e),e),[])),a.u=t=>t+"."+a.h()+".js",a.h=()=>"2f72c9bf3b09fec98c42",a.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r={},a.l=(t,e,n,o)=>{if(r[t])r[t].push(e);else{var i,c;if(void 0!==n)for(var u=document.getElementsByTagName("script"),s=0;s<u.length;s++){var l=u[s];if(l.getAttribute("src")==t||l.getAttribute("data-webpack")=="name:"+n){i=l;break}}i||(c=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.setAttribute("data-webpack","name:"+n),i.src=t),r[t]=[e];var f=(e,n)=>{i.onerror=i.onload=null,clearTimeout(p);var o=r[t];if(delete r[t],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach(t=>t(n)),e)return e(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),c&&document.head.appendChild(i)}},a.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.p="/",(()=>{var t={179:0};a.f.j=(e,r)=>{var n=a.o(t,e)?t[e]:void 0;if(0!==n)if(n)r.push(n[2]);else{var o=new Promise((r,o)=>n=t[e]=[r,o]);r.push(n[2]=o);var i=a.p+a.u(e),c=new Error;a.l(i,r=>{if(a.o(t,e)&&(0!==(n=t[e])&&(t[e]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;c.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",c.name="ChunkLoadError",c.type=o,c.request=i,n[1](c)}},"chunk-"+e,e)}};var e=(e,r)=>{var n,o,[i,c,u]=r,s=0;if(i.some(e=>0!==t[e])){for(n in c)a.o(c,n)&&(a.m[n]=c[n]);if(u)u(a)}for(e&&e(r);s<i.length;s++)o=i[s],a.o(t,o)&&t[o]&&t[o][0](),t[o]=0},r=this.webpackChunkname=this.webpackChunkname||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))})(),(()=>{"use strict";function t(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}var e,r=a(687),n=a.n(r);(e=n().mark((function t(){var e,r,o,i;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("404"!=(e=window.location.pathname.replace("/","").replace(".html",""))){t.next=3;break}return t.abrupt("return");case 3:return t.t0=fetch,t.next=6,a.e(578).then(a.t.bind(a,578,17));case 6:return t.t1=t.sent.default,t.next=9,(0,t.t0)(t.t1);case 9:return t.next=11,t.sent.json();case 11:return t.sent.map((function(t){return'<a href="./'.concat(t.filename,'.html">').concat(t.tab,"</a>")})).join("<br/>"),t.t2=fetch,t.next=16,a(385)("./".concat(e||"index",".json"));case 16:return t.t3=t.sent.default,t.next=19,(0,t.t2)(t.t3);case 19:return t.next=21,t.sent.json();case 21:return r=t.sent,o=r.meta,r=r.resp,t.next=26,a.e(757).then(a.t.bind(a,757,17));case 26:i=t.sent.default,r&&(i=i.replace(/{{content}}/g,r)),o.summary&&console.log("summary",o.summary),o.summary&&(i=i.replace(/{{summary}}/g,o.summary)),o.title&&(i=i.replace(/{{title}}/g,o.title)),o.badges&&(i=i.replace(/{{badges}/g,o.badges)),o.comments&&(i=i.replace(/{{comments}}/g,o.comments)),o.filename&&(i=i.replace(/{{filename}}/g,o.filename)),o.image&&(i=i.replace(/{{image}}/g,o.image)),o.tab&&(i=i.replace(/{{tab}}/g,o.tab)),o.template&&(i=i.replace(/{{template}}/g,o.template)),o.toc&&(i=i.replace(/{{toc}}/g,o.toc)),o.toc&&(i=i.replace(/{{page}}/g,e)),document.body.innerHTML=i;case 40:case"end":return t.stop()}}),t)})),function(){var r=this,n=arguments;return new Promise((function(o,a){var i=e.apply(r,n);function c(e){t(i,o,a,c,u,"next",e)}function u(e){t(i,o,a,c,u,"throw",e)}c(void 0)}))})()})()})();