"use strict";(self.webpackChunkname=self.webpackChunkname||[]).push([[385],{751:function(e,t,o){o.r(t),o.d(t,{handleRoute:function(){return handleRoute},navEvent:function(){return navEvent}}),window.oldRoute=location.pathname.replace(origin,"");const navEvent=async e=>{console.log("~~~~> navEvent");let t=(e.target.href||e.target.location.href).replace(window.origin,"");t.split("#")[0]!=window.oldRoute.split("#")[0]&&(await handleRoute(t),window.oldRoute=t),-1==t.indexOf("#")&&window.scrollTo({top:0,behavior:"smooth"});let o=document.getElementById(t.split("#")[1]);o&&o.scrollIntoView({behavior:"smooth"})},handleRoute=async e=>{await o.e(763).then(o.t.bind(o,257,23)),console.log("~~~~~~> handleRoute");let t=await(await fetch(`./posts/${e.replace("/","").replace(".html","")||"index"}.json`)).json();window.meta=t.meta,meta.content=t.content,document.title=window.meta.title,window.newTemplate=!1,window?.template?.className!==window.meta.template&&(window.newTemplate=!0,window.inDev=!window.content?.innerHTML.trim(),window.inDev||(console.log("window.inDev"),registerServiceWorker()),document.body.innerHTML=await(await fetch(`./${window.meta.template}.html`)).text(),await loadScripts()),window.dispatchEvent(new CustomEvent("templateRefreshed")),setTimeout((()=>{window.updateRedirectListeners()}),100)},loadScripts=async()=>{console.log("~~~~~~~~> loadScripts"),Array.from(document.getElementsByTagName("script")).forEach((e=>{const t=document.createElement("script");["src","type","async","textContent"].forEach((o=>{e[o]&&(t[o]=e[o])})),document.body.appendChild(t),e.parentNode.removeChild(e)}))},registerServiceWorker=async()=>{if(console.log("~~~~~~~~> registerServiceWorker"),"serviceWorker"in navigator)try{const e=await navigator.serviceWorker.register("/service-worker.js");e.installing?console.log("Service worker installing"):e.waiting?console.log("Service worker installed"):e.active&&console.log("Service worker active"),e.onupdatefound=()=>{const t=e.installing;t.onstatechange=()=>{"installed"==t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}catch(e){console.error(`Registration failed with ${e}`)}}}}]);