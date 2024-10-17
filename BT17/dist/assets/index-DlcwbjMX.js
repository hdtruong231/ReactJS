(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))e(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&e(c)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function e(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();const o=document.getElementById("formAdd"),f=document.getElementById("addStudent"),m=document.getElementById("submit"),y=document.getElementById("textHeading");let u=!1,l=[];function i(t){let d=document.getElementById("listStudent"),n="";t.forEach(function(e){n+='<tr><td class="border border-gray-300 px-4 py-2">'+e.name+'</td><td class="border border-gray-300 px-4 py-2">'+e.MSSV+'</td><td class="border border-gray-300 px-4 py-2">'+e.email+'</td><td class="border border-gray-300 px-4 py-2">'+e.department.text+'</td><td class="border border-gray-300 px-4 py-2">'+e.gender.text+'</td><td class="border border-gray-300 px-4 py-2">'+e.birthdate+`</td><td class="border border-gray-300 px-4 py-2"><button class="editStudent bg-blue-500 hover:bg-blue-700 active:bg-blue-900 text-white font-bold py-2 px-4 rounded" data-mssv="${e.MSSV}">Sửa</button></td><td class="border border-gray-300 px-4 py-2"><button class="delStudent  bg-red-500 hover:bg-red-700 active:bg-red-900 text-white font-bold py-2 px-4 rounded" data-mssv="${e.MSSV}">Xóa</button></td></tr>`}),d.innerHTML=n}f.addEventListener("click",function(){const t=document.getElementById("themsv");t.style.display="flex",m.textContent="Thêm",y.textContent="Thêm Sinh Viên",document.getElementById("MSSV").removeAttribute("readonly")});document.addEventListener("click",function(t){if(t.target.classList.contains("delStudent"))if(confirm("Bạn có chắc chắn muốn xóa sinh viên này không?")){const d=t.target.dataset.mssv;l=l.filter(n=>n.MSSV!==d),i(l)}else return;else if(t.target.classList.contains("editStudent")){const d=t.target.dataset.mssv,n=l.find(e=>e.MSSV===d);if(n){const e=document.getElementById("themsv");e.style.display="flex",m.textContent="Cập nhật",y.textContent="Cập nhật Thông tin",document.getElementById("name").value=n.name,document.getElementById("MSSV").value=n.MSSV,document.getElementById("MSSV").setAttribute("readonly",!0),document.getElementById("email").value=n.email,document.getElementById("department").value=n.department.value,document.getElementById("gender").value=n.gender.value,document.getElementById("birthdate").value=n.birthdate,u=!0}}});o.addEventListener("submit",function(t){let d={};if(t.preventDefault(),d={name:o.name.value.trim(),MSSV:o.MSSV.value.trim(),email:o.email.value.trim(),department:{value:o.department.value,text:o.department.options[o.department.selectedIndex].text},gender:{value:o.gender.value,text:o.gender.options[o.gender.selectedIndex].text},birthdate:o.birthdate.value},u===!1){for(let e=0;e<l.length;e++)if(l[e].MSSV===d.MSSV){alert("MSSV đã tồn tại");return}l.push(d)}else for(let e=0;e<l.length;e++)l[e].MSSV===d.MSSV&&(l[e]=d,u=!1);i(l),o.reset();const n=document.getElementById("themsv");n.style.display="none",console.log(d)});const g=document.getElementById("search"),p=document.getElementById("searchBtn");p.addEventListener("click",function(){const t=g.value;if(t==="")i(l);else{const d=l.filter(r=>r.name.toLowerCase().includes(t.toLowerCase()));let n=document.getElementById("listStudent"),e="";i(d),d.length===0&&(e='<tr><td class="border border-gray-300 px-4 py-2" colspan="8">Không tìm thấy sinh viên</td></tr>'),n.innerHTML=e}});function v(){let t=new Date().getFullYear(),d=document.getElementById("yearFilter");for(let n=t;n>=1980;n--){let e=document.createElement("option");e.value=n,e.text=n,d.appendChild(e)}}v();const b=document.getElementById("closeModal");b.addEventListener("click",function(){const t=document.getElementById("themsv");t.style.display="none",o.reset()});const h=document.getElementById("closefil");h.addEventListener("click",function(){const t=document.getElementById("locsv");t.style.display="none",o.reset()});const S=document.getElementById("filStudent");S.addEventListener("click",function(){const t=document.getElementById("locsv");t.style.display="flex"});const a=document.getElementById("formFilter");a.addEventListener("submit",function(t){t.preventDefault();const d=a.yearFilter.value,n=a.gFilter.value,e=a.dFilter.value;let r=l;d!==""&&(r=r.filter(c=>c.birthdate.includes(d))),n!==""&&(r=r.filter(c=>c.gender.value===n)),e!==""&&(r=r.filter(c=>c.department.value===e)),i(r);const s=document.getElementById("locsv");s.style.display="none"});a.addEventListener("reset",function(){i(l),a.reset();const t=document.getElementById("locsv");t.style.display="none"});
