(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();class s extends Error{constructor(r){super(),this.errors=r}}function i(t){let r=t.substring(0,4),n=t.substring(5,7),c=t.substring(8,10),e=new Date(r,n-1,c);if(e.getFullYear()==r&&e.getMonth()==n-1&&e.getDate()==c)return!0;throw new s(["Ngày tháng năm không hợp lệ"])}try{fetch("./user.json").then(t=>t.json()).then(t=>{console.log(t);let r="";t.forEach(function(n){try{i(n.dateOfBirth),r+=`
                <div class="card bg-white p-8 flex flex-col h-auto">
                    <h1 class="cardtitle text-xl font-bold text-center">${n.name}</h1>
                    <p class="cardtext text-xl font-bold text-center">${n.dateOfBirth}</p>
                </div>
                `}catch(c){console.log(c),r+=`
                <div class="card bg-white p-8 flex flex-col h-auto">
                    <p class="cardtext text-xl font-bold text-center">${c.errors}</p>
                </div>
                `;return}}),document.getElementById("funcfact").innerHTML=r})}catch(t){console.log(t)}finally{alert("Đã tải xong dữ liệu")}
