"use strict";(self.webpackChunkname=self.webpackChunkname||[]).push([[385],{751:function(e,t,n){n.r(t),n.d(t,{handleRoute:function(){return handleRoute},navEvent:function(){return navEvent}}),n.e(257).then(n.t.bind(n,257,23));const navEvent=async e=>{let t=(e.target.href||e.target.location.href).replace(window.origin,"");t.split("#")[0]!=window.oldRoute.split("#")[0]&&(await handleRoute(t),window.oldRoute=t),-1==t.indexOf("#")&&window.scrollTo({top:0,behavior:"smooth"});let n=document.getElementById(t.split("#")[1]);n&&n.scrollIntoView({behavior:"smooth"})},handleRoute=async e=>{let t=await(await fetch(`./posts/${e.replace("/","").replace(".html","")||"index"}.json`)).json();window.meta=t.meta,meta.content=t.content,document.title=window.meta.title,window?.template?.className!==window.meta.template&&(window.newTemplate=!0,document.body.innerHTML=await(await fetch(`./${window.meta.template}.html`)).text(),await loadScripts()),window.dispatchEvent(new CustomEvent("templateLoaded")),setTimeout((()=>{document.querySelectorAll('a[href^="./"]').forEach((e=>e.removeEventListener("click",window.redirect))),document.querySelectorAll('a[href^="./"]').forEach((e=>e.addEventListener("click",window.redirect)))}),100)},loadScripts=async()=>{Array.from(document.getElementsByTagName("script")).forEach((e=>{if(new RegExp("head|helmet","i").test(e.getAttribute("src")))return void e.remove();if(new RegExp("main|router","i").test(e.getAttribute("src")))return;if(!e.getAttribute("tag"))return;const t=document.createElement("script");e.textContent&&(t.textContent=e.textContent),e.src&&(t.src=e.src),e.async&&(t.async=e.async),e.type&&(t.type=e.type),e.parentNode.replaceChild(t,e)}))}}}]);