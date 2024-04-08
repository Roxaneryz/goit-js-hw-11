import{i as u,S as d}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const f="42454875-eb3549610f297412779ff13b6",p=async r=>{const s=`https://pixabay.com/api/?key=${f}&q=${r}&image_type=photo&orientation=horizontal&safesearch=true`;try{return(await(await fetch(s)).json()).hits}catch(o){return console.error("Error fetching images:",o),[]}};u.show({title:"Hey",message:"What would you like to add?"});const m=new d(".gallery a",{});function h(r){const s=document.getElementById("gallery");s.innerHTML=r.map(y).join(""),m.refresh()}function y(r){const{webformatURL:s,largeImageURL:o,tags:n,likes:e,views:t,comments:a,downloads:c}=r;return`<li class="card">
    <a href=${o} > <img
      src="${s}"
      alt="${n}"
    /> </a>
    <ul class="gallery">
      <li class="li-text"><span>Comments</span><span>${a}</span></li>
      <li class="li-text"><span>Views</span><span>${t}</span></li>
      <li class="li-text"><span>Likes</span><span>${e}</span></li>
      <li class="li-text"><span>Download</span><span>${c}</span></li>
    </ul>
  </li>`}const i=document.querySelector("#search-form"),l=document.querySelector(".hide");i.addEventListener("submit",r=>{r.preventDefault();const s=i.elements.input.value;g(),p(s).then(o=>{h(o),L()})});function g(){l.classList.remove("hide")}function L(){l.classList.add("hide")}
//# sourceMappingURL=commonHelpers.js.map
