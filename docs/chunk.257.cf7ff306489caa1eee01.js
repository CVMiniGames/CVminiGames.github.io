(self.webpackChunkname=self.webpackChunkname||[]).push([[257],{257:function(){const capFirst=e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase().replace(":","").slice(0,12)+(e.length>13?"...":"");window.addEventListener("templateLoaded",(async()=>{let populateTemplate=async()=>{["content","title","summary"].map((e=>(e=>{let t=document.getElementById(e);t.innerHTML="",t.appendChild(document.createRange().createContextualFragment(meta[e]))})(e))),function addTocToSiteMap(){let e=document.getElementById("currentPage");e&&e.removeAttribute("id");let t=document.getElementById("toc");t&&t.remove();const n=document.getElementById("sitemap").querySelector(`a[title="${window.meta.summary}"]`);n&&n.setAttribute("id","currentPage");let a=[...document.querySelectorAll("h2, h3, h4, h5, h6")].map((e=>{const t=capFirst(e.innerText||e.textContent);return`${"&emsp;".repeat(e.tagName.slice(1)-1)}<a id='anchor_link_${t}'href='#${t}'>${t}</a>`})).join("<br/>");t=document.createElement("div"),t.setAttribute("id","toc"),t.innerHTML=a,n.parentNode.insertBefore(t,n.nextSibling)}(),function addAnchorsToHeaders(){document.querySelectorAll("h2, h3, h4, h5, h6").forEach((e=>{e.id=capFirst(e.innerText||e.textContent);let t=document.createElement("a");t.id=t.href="anchor_"+e.id,t.setAttribute("aria-label","Link to "+e.id),e.parentNode.insertBefore(t,e.nextSibling)}))}()};window.newTemplate&&(await(async()=>{let e=await(await fetch("./posts/sitemap.json")).json();window.lbl=window.lbl||' <label for="toggle-sitemap"> <span>&#x21e8;</span>&emsp;&ensp;Sitemap </label> <hr/>',e=e.map((e=>`<a id="${e.tab==window.meta.tab?"currentPage":"link_"+e.tab}" id='link_${e.tab}' href="./${e.filename}.html" title="${e.summary}">${e.tab}</a>`)),document.getElementById("sitemap").innerHTML=lbl+e.join("")})(),populateTemplate(),document.querySelectorAll("a").forEach((e=>{e.id=e.id||e.innerText+Math.floor(100*Math.random())}))),!window.newTemplate&&setTimeout((async()=>{populateTemplate()}),1100);const t=document.getElementById("pageTransitioneer");t&&!window.newTemplate&&(t.style.animation="pageTransitioneer 1s alternate 2, gradient 1s alternate 2"),t&&!window.newTemplate&&setTimeout((()=>{t&&(t.style.animation="none")}),2300),window.newTemplate=!1,setTimeout((()=>{document.querySelectorAll("h2,h3,h4,h5,h6").forEach((t=>e.observe(t)))}),100)}),{passive:!0}),window.activeHeader=null;const e=new IntersectionObserver((e=>{e.forEach((e=>{let t=e.target,n="0.5s ease-in-out 0s 2 normal none running wiggle",a=t.getBoundingClientRect().top;if(e.isIntersecting){if(t.style.animation=n,a<300||a>300){window.activeHeader&&(window.activeHeader.style.textDecoration="none");let e=document.getElementById("anchor_"+t.id);e&&(e.style.animation=n,e.style.textDecoration="line-through"),window.activeHeader=e}}else t.style.animation==n&&(t.style.animation="")}))}))}}]);