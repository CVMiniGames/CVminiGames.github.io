(self.webpackChunkname=self.webpackChunkname||[]).push([[763],{257:function(){const capFirst=e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase().replace(":","").slice(0,12)+(e.length>13?"...":"");window.addEventListener("templateRefreshed",(async()=>{let populateTemplate=async()=>{["content","title","summary"].map((e=>(e=>{let t=document.getElementById(e);t.innerHTML="",t.appendChild(document.createRange().createContextualFragment(meta[e]))})(e))),function addTocToSiteMap(){let e=document.getElementById("currentPage");e&&e.removeAttribute("id");let t=document.getElementById("toc");t&&t.remove();const n=document.getElementById("sitemap").querySelector(`a[title="${window.meta.summary}"]`);n&&n.setAttribute("id","currentPage");let a=[...document.querySelectorAll("h2, h3, h4, h5, h6")].map((e=>{const t=capFirst(e.innerText||e.textContent);return`${"&emsp;".repeat(e.tagName.slice(1)-1)}<a id='anchor_link_${t}'href='#${t}'>${t}</a>`})).join("<br/>");t=document.createElement("div"),t.setAttribute("id","toc"),t.innerHTML=a,n.parentNode.insertBefore(t,n.nextSibling)}(),function addAnchorsToHeaders(){document.querySelectorAll("h2, h3, h4, h5, h6").forEach((e=>{e.id=capFirst(e.innerText||e.textContent);let t=document.createElement("a");t.id=t.href="anchor_"+e.id,t.setAttribute("aria-label","Link to "+e.id),e.parentNode.insertBefore(t,e.nextSibling)}))}()};if(window.newTemplate)await(async()=>{let e=await(await fetch("./posts/sitemap.json")).json();window.lbl=window.lbl||" \n        <label for=\"toggle-sitemap\">\n            <div id='drag'>Drag me!</div>\n            <span>&#x21e8;</span> Sitemap <span>&#x2715;</span>\n        </label>\n        <hr/>",e=e.map((e=>`<a id="${e.tab==window.meta.tab?"currentPage":"link_"+e.tab}" id='link_${e.tab}' href="./${e.filename}.html" title="${e.summary}">${e.tab}</a>`)),document.getElementById("sitemap").innerHTML=`${lbl}<div id='sitemap-content'>${e.join("")}</div>`})(),populateTemplate(),document.querySelectorAll("a").forEach((e=>{e.id=e.id||e.innerText+Math.floor(100*Math.random())}));else{const e=document.getElementById("pageTransitioneer");e&&!window.newTemplate&&(e.style.animation="pageTransitioneer 1s alternate 2, gradient 1s alternate 2",setTimeout((()=>{e&&(e.style.animation="none")}),2300)),setTimeout((async()=>{populateTemplate()}),1100)}}),{passive:!0})}}]);