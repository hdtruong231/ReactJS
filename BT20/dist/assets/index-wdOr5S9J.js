(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const v of o.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&t(v)}).observe(document,{childList:!0,subtree:!0});function l(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(r){if(r.ep)return;r.ep=!0;const o=l(r);fetch(r.href,o)}})();const c=document.getElementById("formAdd"),I=document.getElementById("addStudent"),S=document.getElementById("submit"),B=document.getElementById("textHeading");let h=!1,s=[];const u=2;let d=1;const L=document.getElementById("listPage"),M=document.getElementById("pages");function m(){d===1?(document.getElementById("prev").setAttribute("disabled",!0),document.getElementById("prev").classList.remove("bg-blue-500","text-white","hover:bg-blue-700"),document.getElementById("prev").classList.add("bg-gray-300","text-black")):(document.getElementById("prev").removeAttribute("disabled"),document.getElementById("prev").classList.add("bg-blue-500","text-white","hover:bg-blue-700"),document.getElementById("prev").classList.remove("bg-gray-300","text-black"));let e=0;g===!0?e=Math.ceil(a.length/u):e=Math.ceil(s.length/u),d===e?(document.getElementById("next").setAttribute("disabled",!0),document.getElementById("next").classList.remove("bg-blue-500","text-white","hover:bg-blue-700"),document.getElementById("next").classList.add("bg-gray-300","text-black")):(document.getElementById("next").removeAttribute("disabled"),document.getElementById("next").classList.add("bg-blue-500","text-white","hover:bg-blue-700"),document.getElementById("next").classList.remove("bg-gray-300","text-black"))}document.getElementById("prev").addEventListener("click",function(){d>1&&(d--,i(g===!0?a:s,d),document.querySelectorAll(".page").forEach(function(e){e.classList.remove("bg-blue-500","text-white","hover:bg-blue-700"),e.classList.add("bg-gray-300","text-black","hover:bg-gray-500")}),document.querySelector(`.page[data-page="${d}"]`).classList.add("bg-blue-500","text-white","hover:bg-blue-700"),document.querySelector(`.page[data-page="${d}"]`).classList.remove("bg-gray-300","text-black","hover:bg-gray-500"),m())});document.getElementById("next").addEventListener("click",function(){let e=0;g===!0?e=Math.ceil(a.length/u):e=Math.ceil(s.length/u),d<e&&(d++,i(g===!0?a:s,d),document.querySelectorAll(".page").forEach(function(n){n.classList.remove("bg-blue-500","text-white","hover:bg-blue-700"),n.classList.add("bg-gray-300","text-black","hover:bg-gray-500")}),document.querySelector(`.page[data-page="${d}"]`).classList.add("bg-blue-500","text-white","hover:bg-blue-700"),document.querySelector(`.page[data-page="${d}"]`).classList.remove("bg-gray-300","text-black","hover:bg-gray-500"),m())});M.addEventListener("click",function(e){e.target.classList.contains("page")&&(d=parseInt(e.target.dataset.page),i(g===!0?a:s,d),document.querySelectorAll(".page").forEach(function(n){n.classList.remove("bg-blue-500","text-white","hover:bg-blue-700"),n.classList.add("bg-gray-300","text-black","hover:bg-gray-500")}),e.target.classList.add("bg-blue-500","text-white","hover:bg-blue-700"),e.target.classList.remove("bg-gray-300","text-black","hover:bg-gray-500"),m())});function V(e,n,l){const t=(l-1)*n,r=t+n;return e.slice(t,r)}function b(e,n){const l=Math.ceil(e.length/n);let t="";for(let r=1;r<=l;r++)t+=`<button class="page ${r===1?"bg-blue-500 hover:bg-blue-700 nfont-bold text-white":"bg-gray-300 hover:bg-gray-500 text-black"}  font-bold py-2 px-4 rounded" data-page="${r}">${r}</button>`;L.innerHTML=t}function i(e,n=1){let l=document.getElementById("listStudent"),t="";V(e,u,n).forEach(function(o){t+='<tr><td class="border border-gray-300 px-4 py-2">'+o.name+'</td><td class="border border-gray-300 px-4 py-2">'+o.MSSV+'</td><td class="border border-gray-300 px-4 py-2">'+o.email+'</td><td class="border border-gray-300 px-4 py-2">'+o.department.text+'</td><td class="border border-gray-300 px-4 py-2">'+o.gender.text+'</td><td class="border border-gray-300 px-4 py-2">'+o.birthdate+`</td><td class="border border-gray-300 px-4 py-2"><button class="editStudent bg-blue-500 hover:bg-blue-700 active:bg-blue-900 text-white font-bold py-2 px-4 rounded" data-mssv="${o.MSSV}">Sửa</button></td><td class="border border-gray-300 px-4 py-2"><button class="delStudent  bg-red-500 hover:bg-red-700 active:bg-red-900 text-white font-bold py-2 px-4 rounded" data-mssv="${o.MSSV}">Xóa</button></td></tr>`}),l.innerHTML=t}I.addEventListener("click",function(){const e=document.getElementById("themsv");e.style.display="flex",S.textContent="Thêm",B.textContent="Thêm Sinh Viên",document.getElementById("MSSV").removeAttribute("readonly")});const f=document.getElementById("deleteModal"),k=document.getElementById("deleteBtn"),A=document.querySelector(".closeModalConfirm"),w=document.getElementById("huyBtn");k.addEventListener("click",function(){s=s.filter(e=>e.MSSV!==f.dataset.mssv),i(s),b(s,u),m(),f.style.display="none"});w.addEventListener("click",function(){f.style.display="none"});A.addEventListener("click",function(){f.style.display="none"});document.addEventListener("click",function(e){if(e.target.classList.contains("delStudent"))f.style.display="flex",f.dataset.mssv=e.target.dataset.mssv;else if(e.target.classList.contains("editStudent")){const n=e.target.dataset.mssv,l=s.find(t=>t.MSSV===n);if(l){const t=document.getElementById("themsv");t.style.display="flex",S.textContent="Cập nhật",B.textContent="Cập nhật Thông tin",document.getElementById("name").value=l.name,document.getElementById("MSSV").value=l.MSSV,document.getElementById("MSSV").setAttribute("readonly",!0),document.getElementById("email").value=l.email,document.getElementById("department").value=l.department.value,document.getElementById("gender").value=l.gender.value,document.getElementById("birthdate").value=l.birthdate,h=!0}}});c.addEventListener("submit",function(e){let n={};if(e.preventDefault(),n={name:c.name.value.trim(),MSSV:c.MSSV.value.trim(),email:c.email.value.trim(),department:{value:c.department.value,text:c.department.options[c.department.selectedIndex].text},gender:{value:c.gender.value,text:c.gender.options[c.gender.selectedIndex].text},birthdate:c.birthdate.value},h===!1){for(let t=0;t<s.length;t++)if(s[t].MSSV===n.MSSV){alert("MSSV đã tồn tại");return}s.push(n)}else for(let t=0;t<s.length;t++)s[t].MSSV===n.MSSV&&(s[t]=n,h=!1);i(s),b(s,u),m(),c.reset();const l=document.getElementById("themsv");l.style.display="none",console.log(n)});const C=document.getElementById("search"),q=document.getElementById("searchBtn");q.addEventListener("click",function(){const e=C.value;if(e==="")g=!1,i(s),b(s,u),m();else{g=!0,a=s.filter(l=>l.name.toLowerCase().includes(e.toLowerCase()));let n=document.getElementById("listStudent");if(i(a),b(a,u),m(),a.length===0){let l='<tr><td class="border border-gray-300 px-4 py-2" colspan="8">Không tìm thấy sinh viên</td></tr>';n.innerHTML=l}}});function T(){let e=new Date().getFullYear(),n=document.getElementById("yearFilter");for(let l=e;l>=1980;l--){let t=document.createElement("option");t.value=l,t.text=l,n.appendChild(t)}}T();const F=document.getElementById("closeModal");F.addEventListener("click",function(){const e=document.getElementById("themsv");e.style.display="none",c.reset()});const $=document.getElementById("closefil");$.addEventListener("click",function(){const e=document.getElementById("locsv");e.style.display="none",c.reset()});const P=document.getElementById("filStudent");P.addEventListener("click",function(){const e=document.getElementById("locsv");e.style.display="flex"});const y=document.getElementById("formFilter");let g=!1,a=[];y.addEventListener("submit",function(e){e.preventDefault();const n=y.yearFilter.value,l=y.gFilter.value,t=y.dFilter.value;a=s,g=!0,n!==""&&(a=a.filter(o=>o.birthdate.includes(n))),l!==""&&(a=a.filter(o=>o.gender.value===l)),t!==""&&(a=a.filter(o=>o.department.value===t)),i(a),b(a,u),d=1,m();const r=document.getElementById("locsv");r.style.display="none"});y.addEventListener("reset",function(){g=!1,i(s),b(s,u),d=1,m(),y.reset();const e=document.getElementById("locsv");e.style.display="none"});function O(e,n,l=!0){const t=e.tBodies[0],r=Array.from(t.querySelectorAll("tr"));r.sort((o,v)=>{const E=o.querySelectorAll("td")[n].textContent.trim(),x=v.querySelectorAll("td")[n].textContent.trim();return l?E.localeCompare(x):x.localeCompare(E)}),r.forEach(o=>t.appendChild(o))}const p=document.getElementById("table");p.querySelectorAll(".ths").forEach((e,n)=>{e.addEventListener("click",()=>{p.querySelectorAll(".ths").forEach(r=>{if(r!==e){r.classList.remove("asc");const o=r.querySelector("svg");o.style.display="none"}});const l=e.classList.contains("asc");O(p,n,!l),e.classList.toggle("asc",!l);const t=e.querySelector("svg");t.style.display="block",l?t.style.transform="rotate(180deg)":t.style.transform="rotate(0deg)"})});
