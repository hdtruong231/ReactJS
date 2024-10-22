(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();try{fetch("./public/funcfact.json").then(r=>r.json()).then(r=>{console.log(r);let o="";r.forEach(function(c){o+=`
            <div class="card bg-white p-8 flex flex-col h-auto">
                <h1 class="cardtitle text-xl font-bold text-center">${c.title}</h1>
                <img src="${c.urlimage}" alt="${c.title}" class="cardimg mx-auto my-4">
                <p class="cardtext text-center">${c.content}</p>
            </div>
            `}),document.getElementById("funcfact").innerHTML=o})}catch(r){console.log(r)}finally{alert("Đã tải xong dữ liệu")}
