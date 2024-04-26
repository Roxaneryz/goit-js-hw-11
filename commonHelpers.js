import{i as l,S as m}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const a of e.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function o(t){if(t.ep)return;t.ep=!0;const e=n(t);fetch(t.href,e)}})();const f="42454875-eb3549610f297412779ff13b6";function p(s){const r="https://pixabay.com/",n="api/",o=new URLSearchParams({q:s,key:f,image_type:"photo",orientation:"horizontal",safesearch:!0}),t=`${r}${n}?${o}`;return fetch(t).then(e=>{if(!e.ok)throw new Error("");return e.json()}).then(e=>e.hits.length>0?e.hits:(l.error({position:"center",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),[])).catch(e=>(l.error({position:"center",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),[]))}const d=new m(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});function h(s){const r=document.getElementById("gallery");r.innerHTML=s.map(y).join(""),d.refresh()}function y(s){const{webformatURL:r,largeImageURL:n,tags:o,likes:t,views:e,comments:a,downloads:u}=s;return`<li class="card">
    <a href=${n} > <img
      src="${r}"
      alt="${o}"
    /> </a>
    <ul class="gallery">
      <li class="li-text"><span>Comments</span><span>${a}</span></li>
      <li class="li-text"><span>Views</span><span>${e}</span></li>
      <li class="li-text"><span>Likes</span><span>${t}</span></li>
      <li class="li-text"><span>Download</span><span>${u}</span></li>
    </ul>
  </li>`}const i=document.querySelector("#search-form"),c=document.querySelector(".hide");i.addEventListener("submit",s=>{s.preventDefault();const r=i.elements.input.value;g(),p(r).then(n=>{h(n),L(),b()})});function g(){c.classList.remove("hide")}function L(){c.classList.add("hide")}function b(){i.reset()}
//# sourceMappingURL=commonHelpers.js.map
