(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const u=document.getElementById("myform");u.addEventListener("submit",function(d){d.preventDefault(),console.log("Form submitted");let o={},c=document.getElementById("checkbox");o.checkbox=c.value;let r=document.getElementsByName("radio");for(let n=0;n<r.length;n++)if(r[n].checked){o.radio=r[n].value;break}let e=document.getElementById("text");o.text=e.value;let t=document.getElementById("color");o.color=t.value;let l=document.getElementById("select");o.select=l.value;let i=document.getElementById("date");o.date=i.value;let s=document.getElementById("range");o.range=s.value,console.log(o)});
