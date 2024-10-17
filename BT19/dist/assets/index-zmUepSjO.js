(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const f of o.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&n(f)}).observe(document,{childList:!0,subtree:!0});function l(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=l(r);fetch(r.href,o)}})();const c=document.getElementById("formAdd"),I=document.getElementById("addStudent"),E=document.getElementById("submit"),S=document.getElementById("textHeading");let p=!1,s=[];const u=2;let d=1;const B=document.getElementById("listPage"),L=document.getElementById("pages");function g(){d===1?(document.getElementById("prev").setAttribute("disabled",!0),document.getElementById("prev").classList.remove("bg-blue-500","text-white","hover:bg-blue-700"),document.getElementById("prev").classList.add("bg-gray-300","text-black")):(document.getElementById("prev").removeAttribute("disabled"),document.getElementById("prev").classList.add("bg-blue-500","text-white","hover:bg-blue-700"),document.getElementById("prev").classList.remove("bg-gray-300","text-black"));let e=0;m===!0?e=Math.ceil(a.length/u):e=Math.ceil(s.length/u),d===e?(document.getElementById("next").setAttribute("disabled",!0),document.getElementById("next").classList.remove("bg-blue-500","text-white","hover:bg-blue-700"),document.getElementById("next").classList.add("bg-gray-300","text-black")):(document.getElementById("next").removeAttribute("disabled"),document.getElementById("next").classList.add("bg-blue-500","text-white","hover:bg-blue-700"),document.getElementById("next").classList.remove("bg-gray-300","text-black"))}document.getElementById("prev").addEventListener("click",function(){d>1&&(d--,i(m===!0?a:s,d),document.querySelectorAll(".page").forEach(function(e){e.classList.remove("bg-blue-500","text-white","hover:bg-blue-700"),e.classList.add("bg-gray-300","text-black","hover:bg-gray-500")}),document.querySelector(`.page[data-page="${d}"]`).classList.add("bg-blue-500","text-white","hover:bg-blue-700"),document.querySelector(`.page[data-page="${d}"]`).classList.remove("bg-gray-300","text-black","hover:bg-gray-500"),g())});document.getElementById("next").addEventListener("click",function(){let e=0;m===!0?e=Math.ceil(a.length/u):e=Math.ceil(s.length/u),d<e&&(d++,i(m===!0?a:s,d),document.querySelectorAll(".page").forEach(function(t){t.classList.remove("bg-blue-500","text-white","hover:bg-blue-700"),t.classList.add("bg-gray-300","text-black","hover:bg-gray-500")}),document.querySelector(`.page[data-page="${d}"]`).classList.add("bg-blue-500","text-white","hover:bg-blue-700"),document.querySelector(`.page[data-page="${d}"]`).classList.remove("bg-gray-300","text-black","hover:bg-gray-500"),g())});L.addEventListener("click",function(e){e.target.classList.contains("page")&&(d=parseInt(e.target.dataset.page),i(m===!0?a:s,d),document.querySelectorAll(".page").forEach(function(t){t.classList.remove("bg-blue-500","text-white","hover:bg-blue-700"),t.classList.add("bg-gray-300","text-black","hover:bg-gray-500")}),e.target.classList.add("bg-blue-500","text-white","hover:bg-blue-700"),e.target.classList.remove("bg-gray-300","text-black","hover:bg-gray-500"),g())});function M(e,t,l){const n=(l-1)*t,r=n+t;return e.slice(n,r)}function y(e,t){const l=Math.ceil(e.length/t);let n="";for(let r=1;r<=l;r++)n+=`<button class="page ${r===1?"bg-blue-500 hover:bg-blue-700 nfont-bold text-white":"bg-gray-300 hover:bg-gray-500 text-black"}  font-bold py-2 px-4 rounded" data-page="${r}">${r}</button>`;B.innerHTML=n}function i(e,t=1){let l=document.getElementById("listStudent"),n="";M(e,u,t).forEach(function(o){n+='<tr><td class="border border-gray-300 px-4 py-2">'+o.name+'</td><td class="border border-gray-300 px-4 py-2">'+o.MSSV+'</td><td class="border border-gray-300 px-4 py-2">'+o.email+'</td><td class="border border-gray-300 px-4 py-2">'+o.department.text+'</td><td class="border border-gray-300 px-4 py-2">'+o.gender.text+'</td><td class="border border-gray-300 px-4 py-2">'+o.birthdate+`</td><td class="border border-gray-300 px-4 py-2"><button class="editStudent bg-blue-500 hover:bg-blue-700 active:bg-blue-900 text-white font-bold py-2 px-4 rounded" data-mssv="${o.MSSV}">Sửa</button></td><td class="border border-gray-300 px-4 py-2"><button class="delStudent  bg-red-500 hover:bg-red-700 active:bg-red-900 text-white font-bold py-2 px-4 rounded" data-mssv="${o.MSSV}">Xóa</button></td></tr>`}),l.innerHTML=n}I.addEventListener("click",function(){const e=document.getElementById("themsv");e.style.display="flex",E.textContent="Thêm",S.textContent="Thêm Sinh Viên",document.getElementById("MSSV").removeAttribute("readonly")});document.addEventListener("click",function(e){if(e.target.classList.contains("delStudent"))if(confirm("Bạn có chắc chắn muốn xóa sinh viên này không?")){const t=e.target.dataset.mssv;s=s.filter(l=>l.MSSV!==t),i(s),y(s,u),g()}else return;else if(e.target.classList.contains("editStudent")){const t=e.target.dataset.mssv,l=s.find(n=>n.MSSV===t);if(l){const n=document.getElementById("themsv");n.style.display="flex",E.textContent="Cập nhật",S.textContent="Cập nhật Thông tin",document.getElementById("name").value=l.name,document.getElementById("MSSV").value=l.MSSV,document.getElementById("MSSV").setAttribute("readonly",!0),document.getElementById("email").value=l.email,document.getElementById("department").value=l.department.value,document.getElementById("gender").value=l.gender.value,document.getElementById("birthdate").value=l.birthdate,p=!0}}});c.addEventListener("submit",function(e){let t={};if(e.preventDefault(),t={name:c.name.value.trim(),MSSV:c.MSSV.value.trim(),email:c.email.value.trim(),department:{value:c.department.value,text:c.department.options[c.department.selectedIndex].text},gender:{value:c.gender.value,text:c.gender.options[c.gender.selectedIndex].text},birthdate:c.birthdate.value},p===!1){for(let n=0;n<s.length;n++)if(s[n].MSSV===t.MSSV){alert("MSSV đã tồn tại");return}s.push(t)}else for(let n=0;n<s.length;n++)s[n].MSSV===t.MSSV&&(s[n]=t,p=!1);i(s),y(s,u),g(),c.reset();const l=document.getElementById("themsv");l.style.display="none",console.log(t)});const V=document.getElementById("search"),k=document.getElementById("searchBtn");k.addEventListener("click",function(){const e=V.value;if(e==="")m=!1,i(s),y(s,u),g();else{m=!0,a=s.filter(l=>l.name.toLowerCase().includes(e.toLowerCase()));let t=document.getElementById("listStudent");if(i(a),y(a,u),g(),a.length===0){let l='<tr><td class="border border-gray-300 px-4 py-2" colspan="8">Không tìm thấy sinh viên</td></tr>';t.innerHTML=l}}});function A(){let e=new Date().getFullYear(),t=document.getElementById("yearFilter");for(let l=e;l>=1980;l--){let n=document.createElement("option");n.value=l,n.text=l,t.appendChild(n)}}A();const w=document.getElementById("closeModal");w.addEventListener("click",function(){const e=document.getElementById("themsv");e.style.display="none",c.reset()});const C=document.getElementById("closefil");C.addEventListener("click",function(){const e=document.getElementById("locsv");e.style.display="none",c.reset()});const q=document.getElementById("filStudent");q.addEventListener("click",function(){const e=document.getElementById("locsv");e.style.display="flex"});const b=document.getElementById("formFilter");let m=!1,a=[];b.addEventListener("submit",function(e){e.preventDefault();const t=b.yearFilter.value,l=b.gFilter.value,n=b.dFilter.value;a=s,m=!0,t!==""&&(a=a.filter(o=>o.birthdate.includes(t))),l!==""&&(a=a.filter(o=>o.gender.value===l)),n!==""&&(a=a.filter(o=>o.department.value===n)),i(a),y(a,u),d=1,g();const r=document.getElementById("locsv");r.style.display="none"});b.addEventListener("reset",function(){m=!1,i(s),y(s,u),d=1,g(),b.reset();const e=document.getElementById("locsv");e.style.display="none"});function T(e,t,l=!0){const n=e.tBodies[0],r=Array.from(n.querySelectorAll("tr"));r.sort((o,f)=>{const h=o.querySelectorAll("td")[t].textContent.trim(),x=f.querySelectorAll("td")[t].textContent.trim();return l?h.localeCompare(x):x.localeCompare(h)}),r.forEach(o=>n.appendChild(o))}const v=document.getElementById("table");v.querySelectorAll(".ths").forEach((e,t)=>{e.addEventListener("click",()=>{v.querySelectorAll(".ths").forEach(r=>{if(r!==e){r.classList.remove("asc");const o=r.querySelector("svg");o.style.display="none"}});const l=e.classList.contains("asc");T(v,t,!l),e.classList.toggle("asc",!l);const n=e.querySelector("svg");n.style.display="block",l?n.style.transform="rotate(180deg)":n.style.transform="rotate(0deg)"})});
